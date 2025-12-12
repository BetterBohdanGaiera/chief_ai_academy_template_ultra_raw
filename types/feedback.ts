/**
 * Feedback Collection System Types
 * TypeScript interfaces for the feedback data model
 */

// Re-export MongoDB-specific types for convenience
export type {
  MongoFeedbackDocument,
  MongoFeedbackSubmission,
  MongoFeedbackBatchSubmission,
  MongoFeedbackResponse,
  MongoFeedbackBatchResponse,
  MongoFeedbackRetrievalResponse,
  FeedbackQueryFilters,
  FeedbackAggregationOptions,
  SlideContentMetadata,
  AnswerOption,
  UserResponse,
  F1FeedbackType,
} from './mongodb-feedback'

/**
 * Feedback types for categorizing feedback
 */
export type FeedbackType = 'general' | 'content' | 'design' | 'accuracy'

/**
 * Form context stored with feedback submission
 * Contains configuration state at the time of submission
 */
export interface FormContext {
  /** Question prompt shown to the user */
  questionPrompt?: string
  /** Form title */
  title?: string
  /** Timestamp of form configuration */
  configuredAt?: string
  /** Additional custom context */
  [key: string]: unknown
}

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
  /** Unique identifier for the feedback form */
  formId: string
  /** Session/deployment identifier */
  sessionId?: string
  /** Hash of the question prompt for grouping */
  questionHash?: string
  /** Form configuration at submission time */
  formContext?: FormContext
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
  /** Unique identifier for the feedback form */
  formId?: string
  /** Session/deployment identifier */
  sessionId?: string
  /** Hash of the question prompt for grouping */
  questionHash?: string
  /** Form configuration at submission time */
  formContext?: FormContext
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
  /** Filter by form ID */
  formId?: string
  /** Filter by session ID */
  sessionId?: string
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
  /** Unique identifier for this feedback form */
  formId: string
}
