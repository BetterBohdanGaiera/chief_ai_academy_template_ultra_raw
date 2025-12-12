/**
 * Follow-up Conversation Configuration
 * Configuration for AI-assisted follow-up question generation
 *
 * NOTE: This does NOT override Claude's system prompt. Instead, it provides
 * context that helps Claude naturally understand the conversation and decide
 * whether to ask follow-up questions.
 */

/**
 * Maximum number of follow-up exchanges per conversation
 * This is a safety limit to prevent endless conversations
 */
export const MAX_FOLLOW_UP_EXCHANGES = 7

/**
 * Default maximum follow-ups if not specified in question config
 */
export const DEFAULT_MAX_FOLLOW_UPS = 5

/**
 * Build a user message that provides context for follow-up generation
 *
 * This constructs a message that Claude can naturally respond to,
 * leveraging its inherent ability to ask clarifying questions when needed.
 */
export function buildFollowUpUserMessage(params: {
  primaryQuestion: string
  contextSummary?: string
  userResponse: string
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>
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
 * Response signals from Claude
 */
export const COMPLETION_SIGNAL = 'CONVERSATION_COMPLETE'

/**
 * Check if Claude's response signals conversation completion
 */
export function isConversationComplete(response: string): boolean {
  return response.trim().toUpperCase().includes(COMPLETION_SIGNAL)
}

/**
 * Extract the follow-up question from Claude's response
 * Returns null if the conversation should end
 */
export function extractFollowUpQuestion(response: string): string | null {
  if (isConversationComplete(response)) {
    return null
  }
  // Claude's response IS the follow-up question
  return response.trim()
}

/**
 * Conversation settings
 */
export const conversationSettings = {
  /** Minimum response length before considering follow-up */
  minResponseLength: 10,

  /** Short responses (below this) are more likely to get follow-ups */
  shortResponseThreshold: 50,

  /** Very short responses that almost certainly need follow-up */
  veryShortResponseThreshold: 20,

  /** Keywords that suggest the user wants to be done */
  completionKeywords: [
    "that's all",
    "that is all",
    "nothing else",
    "i'm done",
    "no more",
    "that's it",
    "that covers it",
  ],
}

/**
 * Check if user response suggests they want to end the conversation
 */
export function userWantsToEnd(response: string): boolean {
  const lowerResponse = response.toLowerCase().trim()
  return conversationSettings.completionKeywords.some(keyword =>
    lowerResponse.includes(keyword)
  )
}

/**
 * Get a friendly completion message based on the reason
 */
export function getCompletionMessage(reason: 'comprehensive' | 'max_reached' | 'user_done' | 'error'): string {
  switch (reason) {
    case 'comprehensive':
      return 'Thank you for your thorough feedback!'
    case 'max_reached':
      return 'Thank you! We have collected enough detail.'
    case 'user_done':
      return 'Thank you for your feedback!'
    case 'error':
      return 'Thank you for your initial feedback.'
    default:
      return 'Thank you for your feedback!'
  }
}
