/**
 * Feedback Collection System Types
 * TypeScript interfaces for the feedback data model
 */

/**
 * Feedback types for categorizing feedback
 */
export type FeedbackType = 'general' | 'content' | 'design' | 'accuracy'

/**
 * Feedback record stored in the database
 */
export interface Feedback {
  id: number
  presentationId: string
  slideId: string
  slideIndex: number
  feedbackText: string
  reviewerName?: string
  reviewerEmail?: string
  feedbackType: FeedbackType
  createdAt: string
  metadata?: Record<string, unknown>
}

/**
 * Data submitted when creating new feedback
 */
export interface FeedbackSubmission {
  presentationId: string
  slideId: string
  slideIndex: number
  feedbackText: string
  reviewerName?: string
  reviewerEmail?: string
  feedbackType?: FeedbackType
}

/**
 * Response from feedback submission API
 */
export interface FeedbackSubmissionResponse {
  success: boolean
  id?: number
  error?: string
}

/**
 * Query parameters for fetching feedback
 */
export interface FeedbackQueryParams {
  presentationId?: string
  slideId?: string
  feedbackType?: FeedbackType
  limit?: number
  offset?: number
}

/**
 * Feedback slide configuration options
 */
export interface FeedbackSlideConfig {
  /** The question/prompt to ask reviewers */
  questionPrompt: string
  /** Override default title */
  title?: string
  /** Title accent word (shown in orange) */
  titleAccent?: string
  /** Unique identifier for this presentation */
  presentationId: string
  /** Current slide identifier */
  slideId: string
  /** Whether to show name input field */
  collectName?: boolean
  /** Whether to show email input field */
  collectEmail?: boolean
  /** Custom submit button text */
  submitButtonText?: string
  /** Message shown after successful submission */
  successMessage?: string
}
