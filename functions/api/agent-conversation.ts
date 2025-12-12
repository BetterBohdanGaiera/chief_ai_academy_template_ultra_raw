/**
 * Cloudflare Pages Function for Agent Conversations
 * Handles AI-powered form conversations using Claude
 */

import Anthropic from '@anthropic-ai/sdk'

interface Env {
  ANTHROPIC_API_KEY: string
  DB: D1Database
}

// ============================================
// Types
// ============================================

interface QuestionContext {
  topic: string
  background: string
  desiredOutcome: string
  clarifyingHints?: string[]
}

interface ConversationMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

interface AgentConversationRequest {
  formId: string
  formType: string
  formTitle?: string
  sessionId?: string
  questionId: string
  questionContext: QuestionContext
  userMessage: string
  conversationHistory: ConversationMessage[]
  remainingFollowUps: number
}

interface AgentConversationResponse {
  shouldContinue: boolean
  response?: string
  completionReason?: 'comprehensive' | 'max_reached' | 'user_done' | 'error'
  sessionId: string
  error?: string
  moveToNextQuestion?: boolean
}

// ============================================
// Constants
// ============================================

const DEFAULT_MODEL = 'claude-sonnet-4-20250514'
const MAX_TOKENS = 1024
const COMPLETION_SIGNAL = 'CONVERSATION_COMPLETE'

const completionKeywords = [
  "that's all",
  "that is all",
  "nothing else",
  "i'm done",
  "no more",
  "that's it",
  "that covers it",
  "done",
  "finished",
  "complete",
]

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// ============================================
// Helper Functions
// ============================================

function userWantsToEnd(response: string): boolean {
  const lowerResponse = response.toLowerCase().trim()
  return completionKeywords.some(keyword => lowerResponse.includes(keyword))
}

function isConversationComplete(response: string): boolean {
  return response.toUpperCase().includes(COMPLETION_SIGNAL)
}

function cleanResponse(response: string): string {
  return response.replace(new RegExp(COMPLETION_SIGNAL, 'gi'), '').trim()
}

function buildContextPrompt(
  formType: string,
  questionContext: QuestionContext,
  formTitle?: string
): string {
  const hintsSection = questionContext.clarifyingHints?.length
    ? `
AREAS TO CLARIFY (ask naturally, don't force all at once):
${questionContext.clarifyingHints.map(h => `- ${h}`).join('\n')}
`
    : ''

  return `You are helping gather information through a conversational interview.

FORM TYPE: ${formType}
${formTitle ? `FORM: ${formTitle}` : ''}
CURRENT TOPIC: ${questionContext.topic}

BACKGROUND CONTEXT:
${questionContext.background}

DESIRED OUTCOME:
${questionContext.desiredOutcome}
${hintsSection}
GUIDELINES:
- Ask clarifying questions naturally based on user responses
- Don't ask all clarifying questions at once - be conversational
- When you have enough information for the desired outcome, summarize what you learned and say: ${COMPLETION_SIGNAL}
- Be concise but thorough
- Focus on gathering actionable insights
- Match the user's communication style

IMPORTANT: When the conversation is complete and you have gathered sufficient information, you MUST end your response with exactly: ${COMPLETION_SIGNAL}`
}

function buildConversationHistory(
  messages: ConversationMessage[]
): Array<{ role: 'user' | 'assistant'; content: string }> {
  return messages.map(msg => ({
    role: msg.role,
    content: msg.content,
  }))
}

function generateSessionId(): string {
  const timestamp = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 9)
  return `sess_${timestamp}_${randomPart}`
}

// ============================================
// Database Operations
// ============================================

async function saveSessionToDb(
  db: D1Database,
  sessionId: string,
  formId: string,
  formType: string,
  gatheredAnswers: Record<string, unknown>,
  status: string,
  metadata: Record<string, unknown>,
  questionIndex: number
): Promise<void> {
  try {
    await db.prepare(`
      INSERT INTO agent_sessions (
        session_id, form_id, form_type, current_question_index,
        gathered_answers, status, metadata, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(session_id) DO UPDATE SET
        current_question_index = excluded.current_question_index,
        gathered_answers = excluded.gathered_answers,
        status = excluded.status,
        metadata = excluded.metadata,
        updated_at = CURRENT_TIMESTAMP
    `)
      .bind(
        sessionId,
        formId,
        formType,
        questionIndex,
        JSON.stringify(gatheredAnswers),
        status,
        JSON.stringify(metadata)
      )
      .run()
  } catch (error) {
    console.error('Error saving session to DB:', error)
    // Non-fatal - session is also stored client-side
  }
}

async function saveResponseToDb(
  db: D1Database,
  sessionId: string,
  formId: string,
  formType: string,
  questionId: string,
  primaryAnswer: string,
  conversationThread: ConversationMessage[],
  insights: Record<string, unknown>
): Promise<void> {
  try {
    await db.prepare(`
      INSERT INTO form_responses (
        session_id, form_id, form_type, question_id,
        primary_answer, conversation_thread, extracted_insights,
        status, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, 'completed', CURRENT_TIMESTAMP)
    `)
      .bind(
        sessionId,
        formId,
        formType,
        questionId,
        primaryAnswer,
        JSON.stringify(conversationThread),
        JSON.stringify(insights)
      )
      .run()
  } catch (error) {
    console.error('Error saving response to DB:', error)
  }
}

// ============================================
// Request Handlers
// ============================================

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    // Validate API key
    const apiKey = context.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY not configured')
      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'error',
          sessionId: '',
          error: 'AI service not configured',
        } satisfies AgentConversationResponse),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Parse request
    const body = await context.request.json() as AgentConversationRequest

    // Validate request
    if (!body.formId || !body.questionId || !body.userMessage || !body.questionContext) {
      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'error',
          sessionId: '',
          error: 'Missing required fields: formId, questionId, userMessage, questionContext',
        } satisfies AgentConversationResponse),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Generate or use existing session ID
    const sessionId = body.sessionId || generateSessionId()

    // Check if user wants to end
    if (userWantsToEnd(body.userMessage)) {
      // Save to database
      if (context.env.DB) {
        await saveResponseToDb(
          context.env.DB,
          sessionId,
          body.formId,
          body.formType,
          body.questionId,
          body.userMessage,
          body.conversationHistory || [],
          { completionReason: 'user_done' }
        )
      }

      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'user_done',
          sessionId,
          moveToNextQuestion: true,
        } satisfies AgentConversationResponse),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Check if max follow-ups reached
    if (body.remainingFollowUps <= 0) {
      // Save to database
      if (context.env.DB) {
        await saveResponseToDb(
          context.env.DB,
          sessionId,
          body.formId,
          body.formType,
          body.questionId,
          body.userMessage,
          body.conversationHistory || [],
          { completionReason: 'max_reached' }
        )
      }

      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'max_reached',
          sessionId,
          moveToNextQuestion: true,
        } satisfies AgentConversationResponse),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Build system prompt with context
    const systemPrompt = buildContextPrompt(
      body.formType,
      body.questionContext,
      body.formTitle
    )

    // Build messages array
    const messages = [
      ...buildConversationHistory(body.conversationHistory || []),
      { role: 'user' as const, content: body.userMessage },
    ]

    // Initialize Anthropic client
    const anthropic = new Anthropic({ apiKey })

    // Call Claude API
    const response = await anthropic.messages.create({
      model: DEFAULT_MODEL,
      max_tokens: MAX_TOKENS,
      system: systemPrompt,
      messages,
    })

    // Extract response text
    const responseText =
      response.content[0].type === 'text'
        ? response.content[0].text.trim()
        : ''

    // Check if conversation is complete
    if (isConversationComplete(responseText)) {
      // Save to database
      if (context.env.DB) {
        const userMessages = (body.conversationHistory || []).filter(m => m.role === 'user')
        const primaryAnswer = userMessages[0]?.content || body.userMessage

        await saveResponseToDb(
          context.env.DB,
          sessionId,
          body.formId,
          body.formType,
          body.questionId,
          primaryAnswer,
          [
            ...(body.conversationHistory || []),
            { role: 'user', content: body.userMessage, timestamp: new Date().toISOString() },
            { role: 'assistant', content: cleanResponse(responseText), timestamp: new Date().toISOString() },
          ],
          { completionReason: 'comprehensive' }
        )
      }

      return new Response(
        JSON.stringify({
          shouldContinue: false,
          response: cleanResponse(responseText),
          completionReason: 'comprehensive',
          sessionId,
          moveToNextQuestion: true,
        } satisfies AgentConversationResponse),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Continue conversation
    return new Response(
      JSON.stringify({
        shouldContinue: true,
        response: responseText,
        sessionId,
      } satisfies AgentConversationResponse),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  } catch (error) {
    console.error('Error in agent conversation:', error)

    return new Response(
      JSON.stringify({
        shouldContinue: false,
        completionReason: 'error',
        sessionId: '',
        error: error instanceof Error ? error.message : 'Failed to process conversation',
      } satisfies AgentConversationResponse),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  }
}
