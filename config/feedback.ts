/**
 * Feedback System Configuration
 * Global settings for the feedback collection system
 */

import type { FeedbackType } from '@/types/feedback'

/**
 * Feedback system configuration options
 */
export interface FeedbackConfig {
  /** Whether feedback collection is enabled */
  enabled: boolean
  /** Whether to collect reviewer email */
  collectEmail: boolean
  /** Whether to collect reviewer name */
  collectName: boolean
  /** Available feedback type options */
  feedbackTypes: FeedbackType[]
  /** Whether anonymous feedback is allowed */
  allowAnonymous: boolean
  /** Whether to show existing feedback to reviewers */
  showExistingFeedback: boolean
  /** Maximum length for feedback text */
  maxFeedbackLength: number
  /** Minimum length for feedback text */
  minFeedbackLength: number
}

/**
 * Default feedback system configuration
 */
export const feedbackConfig: FeedbackConfig = {
  enabled: true,
  collectEmail: false,
  collectName: true,
  feedbackTypes: ['general', 'content', 'design', 'accuracy'],
  allowAnonymous: true,
  showExistingFeedback: false,
  maxFeedbackLength: 10000,
  minFeedbackLength: 10,
}

/**
 * Feedback type labels for UI display
 */
export const feedbackTypeLabels: Record<FeedbackType, string> = {
  general: 'General Feedback',
  content: 'Content Accuracy',
  design: 'Design & Layout',
  accuracy: 'Technical Accuracy',
}

/**
 * Feedback type descriptions
 */
export const feedbackTypeDescriptions: Record<FeedbackType, string> = {
  general: 'General comments and suggestions about the presentation',
  content: 'Feedback about the content, messaging, or information presented',
  design: 'Comments about visual design, layout, or readability',
  accuracy: 'Corrections or clarifications about technical accuracy',
}
