/**
 * Cloudflare Pages Function for AI Follow-up Question Generation
 * Uses Claude SDK to analyze responses and generate follow-up questions
 */

import Anthropic from '@anthropic-ai/sdk'

interface Env {
  ANTHROPIC_API_KEY: string
}

interface ConversationMessage {
  role: 'user' | 'assistant'
  content: string
}

interface QuestionContextSection {
  id: string
  title: string
  content: string
}

interface FeedbackQuestionConfig {
  id: string
  primaryQuestion: string
  subtitle?: string
  contextSections: QuestionContextSection[]
}

interface FollowUpRequest {
  questionConfig: FeedbackQuestionConfig
  userResponse: string
  conversationHistory: ConversationMessage[]
  remainingFollowUps: number
}

interface FollowUpResponse {
  shouldContinue: boolean
  followUpQuestion?: string
  completionReason?: 'comprehensive' | 'max_reached' | 'user_done' | 'error'
  error?: string
}

/**
 * CORS headers for the response
 */
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

/**
 * Completion signal that Claude returns when conversation is done
 */
const COMPLETION_SIGNAL = 'CONVERSATION_COMPLETE'

/**
 * Keywords that suggest the user wants to end the conversation
 */
const completionKeywords = [
  "that's all",
  "that is all",
  "nothing else",
  "i'm done",
  "no more",
  "that's it",
  "that covers it",
]

/**
 * Check if user response suggests they want to end the conversation
 */
function userWantsToEnd(response: string): boolean {
  const lowerResponse = response.toLowerCase().trim()
  return completionKeywords.some(keyword => lowerResponse.includes(keyword))
}

/**
 * Build the user message for Claude with conversation context
 */
function buildFollowUpUserMessage(params: {
  primaryQuestion: string
  contextSummary?: string
  userResponse: string
  conversationHistory: ConversationMessage[]
  remainingFollowUps: number
}): string {
  const { primaryQuestion, contextSummary, userResponse, conversationHistory, remainingFollowUps } = params

  // Build conversation context
  const historyText = conversationHistory.length > 0
    ? conversationHistory
        .map((msg) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
        .join('\n')
    : 'No previous exchanges.'

  return `I'm collecting feedback on a presentation. Here's the context:

**Original Question Asked to Reviewer:**
"${primaryQuestion}"
${contextSummary ? `\n**Background Context:**\n${contextSummary}` : ''}

**Conversation History:**
${historyText}

**Reviewer's Latest Response:**
"${userResponse}"

${remainingFollowUps > 0
    ? `Based on the reviewer's response, please either:
1. Ask ONE focused follow-up question if the response would benefit from clarification or elaboration
2. If the response is comprehensive and complete, respond with exactly: CONVERSATION_COMPLETE

Guidelines:
- Ask for specifics if the response is vague
- Ask for examples if the response is abstract
- Ask for reasoning if the response is just an opinion without explanation
- Don't ask if the reviewer has clearly and thoroughly answered the question
- Keep follow-up questions focused and conversational
- You have ${remainingFollowUps} more follow-up${remainingFollowUps === 1 ? '' : 's'} available`
    : 'Maximum follow-ups reached. Please respond with: CONVERSATION_COMPLETE'
  }`
}

/**
 * Handle OPTIONS request for CORS preflight
 */
export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  })
}

/**
 * Handle POST request to generate follow-up question
 */
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
          error: 'AI service not configured',
        } satisfies FollowUpResponse),
        {
          status: 200, // Return 200 with graceful degradation
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Parse request body
    const body = await context.request.json() as FollowUpRequest

    // Validate request
    if (!body.questionConfig || !body.userResponse) {
      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'error',
          error: 'Missing required fields: questionConfig and userResponse',
        } satisfies FollowUpResponse),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Check if user wants to end
    if (userWantsToEnd(body.userResponse)) {
      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'user_done',
        } satisfies FollowUpResponse),
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
      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'max_reached',
        } satisfies FollowUpResponse),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Build context summary from question config
    const contextSummary = body.questionConfig.contextSections
      .map(section => `${section.title}: ${section.content}`)
      .join('\n')

    // Build the user message for Claude
    const userMessage = buildFollowUpUserMessage({
      primaryQuestion: body.questionConfig.primaryQuestion,
      contextSummary: contextSummary || undefined,
      userResponse: body.userResponse,
      conversationHistory: body.conversationHistory || [],
      remainingFollowUps: body.remainingFollowUps,
    })

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey,
    })

    // Call Claude API - letting it naturally decide whether to ask follow-up
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: userMessage,
        },
      ],
    })

    // Extract response text
    const responseText = message.content[0].type === 'text'
      ? message.content[0].text.trim()
      : ''

    // Check if Claude signaled conversation complete
    if (responseText.toUpperCase().includes(COMPLETION_SIGNAL)) {
      return new Response(
        JSON.stringify({
          shouldContinue: false,
          completionReason: 'comprehensive',
        } satisfies FollowUpResponse),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    // Return the follow-up question
    return new Response(
      JSON.stringify({
        shouldContinue: true,
        followUpQuestion: responseText,
      } satisfies FollowUpResponse),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  } catch (error) {
    console.error('Error generating follow-up:', error)

    // Graceful degradation - don't break the user experience
    return new Response(
      JSON.stringify({
        shouldContinue: false,
        completionReason: 'error',
        error: error instanceof Error ? error.message : 'Failed to generate follow-up',
      } satisfies FollowUpResponse),
      {
        status: 200, // Return 200 for graceful degradation
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  }
}
