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
  formId: 'default-feedback',
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

/**
 * Pre-defined form configurations for common feedback scenarios
 */
export const feedbackFormPresets = {
  /** Introduction/opening feedback */
  intro: createFeedbackSlideConfig({
    formId: 'feedback-intro',
    questionPrompt: 'What are your initial impressions of this presentation?',
    title: 'FIRST',
    titleAccent: 'IMPRESSIONS',
    slideId: 'intro-feedback',
  }),

  /** Section-specific feedback */
  section: (sectionNumber: number, sectionName: string) =>
    createFeedbackSlideConfig({
      formId: `feedback-section-${sectionNumber}`,
      questionPrompt: `How clear was the "${sectionName}" section? What could be improved?`,
      title: 'SECTION',
      titleAccent: 'FEEDBACK',
      slideId: `section-${sectionNumber}-feedback`,
    }),

  /** Closing/final feedback */
  closing: createFeedbackSlideConfig({
    formId: 'feedback-closing',
    questionPrompt: 'What are your overall thoughts and suggestions for improvement?',
    title: 'FINAL',
    titleAccent: 'THOUGHTS',
    slideId: 'closing-feedback',
  }),

  /** Q&A session feedback */
  qna: createFeedbackSlideConfig({
    formId: 'feedback-qna',
    questionPrompt: 'Were your questions answered? What topics need more clarification?',
    title: 'Q&A',
    titleAccent: 'FEEDBACK',
    slideId: 'qna-feedback',
  }),
}
