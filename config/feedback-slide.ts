/**
 * Feedback Slide Configuration
 * Default settings for the feedback collection slide
 */

import type { FeedbackSlideConfig } from '@/types/feedback'

/**
 * Default feedback slide configuration
 *
 * These values are used when no custom configuration is provided.
 * Override in individual slide implementations as needed.
 */
export const feedbackSlideConfig: FeedbackSlideConfig = {
  questionPrompt:
    'What aspects of this presentation could be improved to better serve domain experts like yourself?',
  title: 'WE VALUE YOUR',
  titleAccent: 'EXPERTISE',
  presentationId: 'demo-presentation',
  slideId: 'm1-03-feedback',
  collectName: true,
  collectEmail: false,
  submitButtonText: 'SUBMIT FEEDBACK',
  successMessage: 'Thank you for your valuable feedback!',
}

/**
 * Create a custom feedback slide configuration
 *
 * @param overrides - Partial configuration to override defaults
 * @returns Complete feedback slide configuration
 */
export function createFeedbackSlideConfig(
  overrides: Partial<FeedbackSlideConfig>
): FeedbackSlideConfig {
  return {
    ...feedbackSlideConfig,
    ...overrides,
  }
}
