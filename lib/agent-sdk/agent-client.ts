/**
 * Agent SDK Client
 * Server-side client for AI-powered conversations using Claude Agent SDK
 *
 * Note: The Claude Agent SDK is designed for Node.js environments.
 * For Cloudflare Pages Functions, we use the standard Anthropic SDK
 * with a similar conversation pattern.
 */

import Anthropic from '@anthropic-ai/sdk'
import type {
  FormDefinition,
  QuestionContext,
  ConversationMessage,
  AgentConversationResponse,
  GatheredAnswer,
} from './types'

// ============================================
// Configuration
// ============================================

/**
 * Default model to use for conversations
 */
const DEFAULT_MODEL = 'claude-sonnet-4-20250514'

/**
 * Maximum tokens for response
 */
const MAX_TOKENS = 1024

/**
 * Completion signal that Claude returns when conversation is done
 */
const COMPLETION_SIGNAL = 'CONVERSATION_COMPLETE'

// ============================================
// Context Injection
// ============================================

/**
 * Build the context prompt for a question
 */
export function buildContextPrompt(
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

/**
 * Build the conversation history for the API
 */
export function buildConversationHistory(
  messages: ConversationMessage[]
): Array<{ role: 'user' | 'assistant'; content: string }> {
  return messages.map(msg => ({
    role: msg.role,
    content: msg.content,
  }))
}

// ============================================
// Conversation Functions
// ============================================

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
  "done",
  "finished",
  "complete",
]

/**
 * Check if user response suggests they want to end the conversation
 */
export function userWantsToEnd(response: string): boolean {
  const lowerResponse = response.toLowerCase().trim()
  return completionKeywords.some(keyword => lowerResponse.includes(keyword))
}

/**
 * Check if Claude signaled conversation complete
 */
export function isConversationComplete(response: string): boolean {
  return response.toUpperCase().includes(COMPLETION_SIGNAL)
}

/**
 * Remove completion signal from response
 */
export function cleanResponse(response: string): string {
  return response.replace(new RegExp(COMPLETION_SIGNAL, 'gi'), '').trim()
}

// ============================================
// Main Agent Client
// ============================================

export interface AgentClientOptions {
  apiKey: string
  model?: string
  maxTurns?: number
}

export interface ConversationOptions {
  formDefinition: FormDefinition
  questionContext: QuestionContext
  userMessage: string
  conversationHistory: ConversationMessage[]
  remainingFollowUps: number
}

/**
 * Create an agent client for conversations
 */
export function createAgentClient(options: AgentClientOptions) {
  const anthropic = new Anthropic({
    apiKey: options.apiKey,
  })

  const model = options.model || DEFAULT_MODEL
  const maxTurns = options.maxTurns || 15

  return {
    /**
     * Start or continue a conversation
     */
    async converse(
      conversationOptions: ConversationOptions
    ): Promise<AgentConversationResponse> {
      const {
        formDefinition,
        questionContext,
        userMessage,
        conversationHistory,
        remainingFollowUps,
      } = conversationOptions

      // Check if user wants to end
      if (userWantsToEnd(userMessage)) {
        return {
          shouldContinue: false,
          completionReason: 'user_done',
          sessionId: '', // Will be set by caller
          moveToNextQuestion: true,
          extractedAnswer: extractAnswer(
            conversationHistory,
            userMessage,
            questionContext.topic
          ),
        }
      }

      // Check if max follow-ups reached
      if (remainingFollowUps <= 0) {
        return {
          shouldContinue: false,
          completionReason: 'max_reached',
          sessionId: '',
          moveToNextQuestion: true,
          extractedAnswer: extractAnswer(
            conversationHistory,
            userMessage,
            questionContext.topic
          ),
        }
      }

      try {
        // Build system prompt with context
        const systemPrompt = buildContextPrompt(
          formDefinition.type,
          questionContext,
          formDefinition.title
        )

        // Build messages array
        const messages = [
          ...buildConversationHistory(conversationHistory),
          { role: 'user' as const, content: userMessage },
        ]

        // Call Claude API
        const response = await anthropic.messages.create({
          model,
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
          return {
            shouldContinue: false,
            response: cleanResponse(responseText),
            completionReason: 'comprehensive',
            sessionId: '',
            moveToNextQuestion: true,
            extractedAnswer: extractAnswer(
              [...conversationHistory, { role: 'user', content: userMessage, timestamp: new Date().toISOString() }],
              responseText,
              questionContext.topic
            ),
          }
        }

        // Continue conversation
        return {
          shouldContinue: true,
          response: responseText,
          sessionId: '',
        }
      } catch (error) {
        console.error('Agent conversation error:', error)
        return {
          shouldContinue: false,
          completionReason: 'error',
          sessionId: '',
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    },

    /**
     * Get model info
     */
    getModelInfo() {
      return {
        model,
        maxTurns,
      }
    },
  }
}

// ============================================
// Answer Extraction
// ============================================

/**
 * Extract a structured answer from conversation
 */
function extractAnswer(
  conversationHistory: ConversationMessage[],
  finalResponse: string,
  topic: string
): GatheredAnswer {
  // Get the primary answer (first user message in this question's conversation)
  const userMessages = conversationHistory.filter(m => m.role === 'user')
  const primaryAnswer = userMessages[0]?.content || finalResponse

  // Follow-up exchanges are all messages after the first
  const followUpExchanges = conversationHistory.slice(1)

  return {
    questionId: '', // Will be set by caller
    primaryAnswer,
    followUpExchanges,
    extractedInsights: {
      topic,
      messageCount: conversationHistory.length,
      hasFollowUps: followUpExchanges.length > 0,
    },
    answeredAt: new Date().toISOString(),
  }
}

/**
 * Parse extracted insights from a conversation using Claude
 */
export async function extractInsights(
  apiKey: string,
  conversationHistory: ConversationMessage[],
  questionContext: QuestionContext
): Promise<Record<string, unknown>> {
  const anthropic = new Anthropic({ apiKey })

  const conversationText = conversationHistory
    .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
    .join('\n\n')

  try {
    const response = await anthropic.messages.create({
      model: DEFAULT_MODEL,
      max_tokens: 512,
      system: `You are an expert at extracting structured insights from conversations.
Given a conversation about "${questionContext.topic}", extract the key insights as JSON.

The desired outcome was: ${questionContext.desiredOutcome}

Return a JSON object with relevant fields based on what was learned.`,
      messages: [
        {
          role: 'user',
          content: `Extract key insights from this conversation:\n\n${conversationText}`,
        },
      ],
    })

    const responseText =
      response.content[0].type === 'text' ? response.content[0].text : '{}'

    // Try to parse JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }

    return { rawInsights: responseText }
  } catch (error) {
    console.error('Error extracting insights:', error)
    return { error: 'Failed to extract insights' }
  }
}

// ============================================
// Export Types
// ============================================

export type AgentClient = ReturnType<typeof createAgentClient>
