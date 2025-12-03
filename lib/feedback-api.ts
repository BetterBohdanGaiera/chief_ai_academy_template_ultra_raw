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
