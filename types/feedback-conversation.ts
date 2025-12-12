/**
 * Feedback Conversation Types
 * Type definitions for feedback collection components
 */

export interface FeedbackChoiceOption {
  /** Unique identifier for the option */
  id: string
  /** Display label for the option */
  label: string
  /** Optional description providing more context */
  description?: string
  /** Optional icon name from lucide-react */
  icon?: string
}

export interface FeedbackSelection {
  /** Question ID this selection belongs to */
  questionId: string
  /** Selected option ID */
  optionId: string
  /** Additional text if "other" was selected */
  otherText?: string
  /** Timestamp of selection */
  timestamp: Date
}

export interface FeedbackSession {
  /** Unique session identifier */
  sessionId: string
  /** All selections made during the session */
  selections: FeedbackSelection[]
  /** Whether the session is complete */
  isComplete: boolean
  /** Submission timestamp */
  submittedAt?: Date
  /** Additional comments */
  additionalComments?: string
}
