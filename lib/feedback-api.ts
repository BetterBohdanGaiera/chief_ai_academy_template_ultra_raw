/**
 * Feedback API Client
 * Client-side wrapper for feedback operations
 */

import type {
  Feedback,
  FeedbackSubmission,
  FeedbackSubmissionResponse,
  FeedbackQueryParams,
} from '@/types/feedback'
import type {
  FollowUpApiRequest,
  FollowUpApiResponse,
  ConversationThread,
  FeedbackQuestionConfig,
} from '@/types/feedback-conversation'

/**
 * Base API URL - uses relative path for same-origin requests
 */
const API_BASE = '/api/feedback'

/**
 * Submit feedback to the backend
 *
 * @param data - Feedback submission data
 * @returns Promise with success status and feedback ID
 */
export async function submitFeedback(
  data: FeedbackSubmission
): Promise<FeedbackSubmissionResponse> {
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: result.errors?.join(', ') || result.error || 'Failed to submit feedback',
      }
    }

    return result
  } catch (error) {
    console.error('Error submitting feedback:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}

/**
 * Get feedback for a presentation or slide
 * Supports filtering by formId and sessionId for multi-form feedback
 *
 * @param params - Query parameters for filtering feedback
 * @returns Promise with array of feedback items
 */
export async function getFeedback(params: FeedbackQueryParams = {}): Promise<Feedback[]> {
  try {
    const searchParams = new URLSearchParams()

    if (params.presentationId) {
      searchParams.set('presentationId', params.presentationId)
    }
    if (params.slideId) {
      searchParams.set('slideId', params.slideId)
    }
    if (params.feedbackType) {
      searchParams.set('feedbackType', params.feedbackType)
    }
    if (params.formId) {
      searchParams.set('formId', params.formId)
    }
    if (params.sessionId) {
      searchParams.set('sessionId', params.sessionId)
    }
    if (params.limit !== undefined) {
      searchParams.set('limit', params.limit.toString())
    }
    if (params.offset !== undefined) {
      searchParams.set('offset', params.offset.toString())
    }

    const url = `${API_BASE}?${searchParams.toString()}`
    const response = await fetch(url)

    if (!response.ok) {
      console.error('Error fetching feedback:', response.statusText)
      return []
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching feedback:', error)
    return []
  }
}

/**
 * Get all feedback for a specific presentation
 *
 * @param presentationId - Unique presentation identifier
 * @returns Promise with array of feedback items
 */
export async function getFeedbackByPresentation(presentationId: string): Promise<Feedback[]> {
  return getFeedback({ presentationId })
}

/**
 * Get all feedback for a specific slide
 *
 * @param presentationId - Unique presentation identifier
 * @param slideId - Unique slide identifier
 * @returns Promise with array of feedback items
 */
export async function getFeedbackBySlide(
  presentationId: string,
  slideId: string
): Promise<Feedback[]> {
  return getFeedback({ presentationId, slideId })
}

/**
 * Get all feedback for a specific form
 *
 * @param formId - Unique form identifier
 * @param sessionId - Optional session identifier for further filtering
 * @returns Promise with array of feedback items
 */
export async function getFeedbackByForm(
  formId: string,
  sessionId?: string
): Promise<Feedback[]> {
  return getFeedback({ formId, sessionId })
}

/**
 * Get all feedback for a specific session
 *
 * @param sessionId - Unique session identifier
 * @returns Promise with array of feedback items
 */
export async function getFeedbackBySession(sessionId: string): Promise<Feedback[]> {
  return getFeedback({ sessionId })
}

// ============================================
// Agent Conversation API
// ============================================

/**
 * Agent conversation API base URL
 */
const AGENT_API_BASE = '/api/agent-conversation'

/**
 * Question context for AI-guided conversation
 */
export interface QuestionContext {
  topic: string
  background: string
  desiredOutcome: string
  clarifyingHints?: string[]
}

/**
 * Conversation message
 */
export interface ConversationMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

/**
 * Request for agent conversation
 */
export interface AgentConversationRequest {
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

/**
 * Response from agent conversation
 */
export interface AgentConversationResponse {
  shouldContinue: boolean
  response?: string
  completionReason?: 'comprehensive' | 'max_reached' | 'user_done' | 'error'
  sessionId: string
  error?: string
  moveToNextQuestion?: boolean
}

/**
 * Send a message in an agent conversation
 *
 * @param request - Agent conversation request
 * @returns Promise with conversation response
 */
export async function sendAgentMessage(
  request: AgentConversationRequest
): Promise<AgentConversationResponse> {
  try {
    const response = await fetch(AGENT_API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    const result = await response.json()

    if (!response.ok && !result.sessionId) {
      return {
        shouldContinue: false,
        completionReason: 'error',
        sessionId: request.sessionId || '',
        error: result.error || 'Failed to process conversation',
      }
    }

    return result
  } catch (error) {
    console.error('Error in agent conversation:', error)
    return {
      shouldContinue: false,
      completionReason: 'error',
      sessionId: request.sessionId || '',
      error: 'Network error. Please check your connection and try again.',
    }
  }
}

/**
 * Start a new agent conversation
 *
 * @param formId - Form identifier
 * @param formType - Type of form
 * @param formTitle - Form title
 * @param questionId - Current question ID
 * @param questionContext - Context for the question
 * @param initialMessage - User's first message
 * @returns Promise with conversation response
 */
export async function startAgentConversation(
  formId: string,
  formType: string,
  formTitle: string,
  questionId: string,
  questionContext: QuestionContext,
  initialMessage: string
): Promise<AgentConversationResponse> {
  return sendAgentMessage({
    formId,
    formType,
    formTitle,
    questionId,
    questionContext,
    userMessage: initialMessage,
    conversationHistory: [],
    remainingFollowUps: 5,
  })
}

/**
 * Continue an existing agent conversation
 *
 * @param sessionId - Existing session ID
 * @param formId - Form identifier
 * @param formType - Type of form
 * @param formTitle - Form title
 * @param questionId - Current question ID
 * @param questionContext - Context for the question
 * @param userMessage - User's message
 * @param conversationHistory - Previous messages
 * @param remainingFollowUps - Number of follow-ups remaining
 * @returns Promise with conversation response
 */
export async function continueAgentConversation(
  sessionId: string,
  formId: string,
  formType: string,
  formTitle: string,
  questionId: string,
  questionContext: QuestionContext,
  userMessage: string,
  conversationHistory: ConversationMessage[],
  remainingFollowUps: number
): Promise<AgentConversationResponse> {
  return sendAgentMessage({
    sessionId,
    formId,
    formType,
    formTitle,
    questionId,
    questionContext,
    userMessage,
    conversationHistory,
    remainingFollowUps,
  })
}
