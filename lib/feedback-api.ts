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

// =============================================================================
// MongoDB-specific API functions
// =============================================================================

import type {
  MongoFeedbackSubmission,
  MongoFeedbackBatchSubmission,
  MongoFeedbackResponse,
  MongoFeedbackBatchResponse,
  MongoFeedbackRetrievalResponse,
  MongoFeedbackDocument,
  FeedbackQueryFilters as MongoFeedbackQueryFilters,
} from '@/types/mongodb-feedback'

/**
 * MongoDB API endpoint (Cloudflare Pages Function)
 */
const MONGO_API_BASE = '/api/feedback-mongo'

/**
 * Submit feedback to MongoDB (single submission)
 *
 * @param data - Feedback submission data with full context
 * @returns Promise with success status and document ID
 */
export async function submitFeedbackToMongo(
  data: MongoFeedbackSubmission
): Promise<MongoFeedbackResponse> {
  try {
    const response = await fetch(MONGO_API_BASE, {
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
        error: result.error || 'Failed to submit feedback to MongoDB',
      }
    }

    return result
  } catch (error) {
    console.error('Error submitting feedback to MongoDB:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}

/**
 * Submit batch feedback to MongoDB (multi-question flows)
 *
 * @param data - Batch submission with common metadata and individual questions
 * @returns Promise with success status and document IDs
 */
export async function submitFeedbackBatchToMongo(
  data: MongoFeedbackBatchSubmission
): Promise<MongoFeedbackBatchResponse> {
  try {
    const response = await fetch(MONGO_API_BASE, {
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
        error: result.error || 'Failed to submit batch feedback to MongoDB',
      }
    }

    return result
  } catch (error) {
    console.error('Error submitting batch feedback to MongoDB:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}

/**
 * Get feedback from MongoDB with filters
 *
 * @param filters - Query filters for MongoDB
 * @returns Promise with feedback documents and total count
 */
export async function getFeedbackFromMongo(
  filters: MongoFeedbackQueryFilters = {}
): Promise<MongoFeedbackRetrievalResponse> {
  try {
    const searchParams = new URLSearchParams()

    if (filters.presentationId) {
      searchParams.set('presentationId', filters.presentationId)
    }
    if (filters.moduleId) {
      searchParams.set('moduleId', filters.moduleId)
    }
    if (filters.slideId) {
      searchParams.set('slideId', filters.slideId)
    }
    if (filters.formId) {
      searchParams.set('formId', filters.formId)
    }
    if (filters.sessionId) {
      searchParams.set('sessionId', filters.sessionId)
    }
    if (filters.feedbackType) {
      searchParams.set('feedbackType', filters.feedbackType)
    }
    if (filters.startDate) {
      searchParams.set(
        'startDate',
        typeof filters.startDate === 'string'
          ? filters.startDate
          : filters.startDate.toISOString()
      )
    }
    if (filters.endDate) {
      searchParams.set(
        'endDate',
        typeof filters.endDate === 'string'
          ? filters.endDate
          : filters.endDate.toISOString()
      )
    }
    if (filters.limit !== undefined) {
      searchParams.set('limit', filters.limit.toString())
    }
    if (filters.offset !== undefined) {
      searchParams.set('offset', filters.offset.toString())
    }

    const url = `${MONGO_API_BASE}?${searchParams.toString()}`
    const response = await fetch(url)

    if (!response.ok) {
      console.error('Error fetching feedback from MongoDB:', response.statusText)
      return {
        success: false,
        error: 'Failed to retrieve feedback',
      }
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching feedback from MongoDB:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}

/**
 * Get all feedback for a presentation from MongoDB
 *
 * @param presentationId - Presentation identifier
 * @returns Promise with feedback documents
 */
export async function getMongoFeedbackByPresentation(
  presentationId: string
): Promise<MongoFeedbackDocument[]> {
  const result = await getFeedbackFromMongo({ presentationId })
  return result.data || []
}

/**
 * Get all feedback for a module from MongoDB
 *
 * @param moduleId - Module identifier
 * @returns Promise with feedback documents
 */
export async function getMongoFeedbackByModule(
  moduleId: string
): Promise<MongoFeedbackDocument[]> {
  const result = await getFeedbackFromMongo({ moduleId })
  return result.data || []
}

/**
 * Get all feedback for a form session from MongoDB
 *
 * @param formId - Form identifier
 * @param sessionId - Session identifier
 * @returns Promise with feedback documents
 */
export async function getMongoFeedbackByFormSession(
  formId: string,
  sessionId: string
): Promise<MongoFeedbackDocument[]> {
  const result = await getFeedbackFromMongo({ formId, sessionId })
  return result.data || []
}
