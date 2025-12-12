/**
 * Feedback Question Configuration
 * Helpers and presets for creating feedback questions with context
 */

import type {
  FeedbackQuestionConfig,
  QuestionContextSection,
  FeedbackChoiceOption,
  FeedbackInputType,
} from '@/types/feedback-conversation'

/**
 * Create a feedback question configuration
 * Helper function to ensure type safety and provide defaults
 */
export function createFeedbackQuestion(
  config: Partial<FeedbackQuestionConfig> & {
    id: string
    primaryQuestion: string
  }
): FeedbackQuestionConfig {
  return {
    contextSections: [],
    inputType: 'text',
    enableFollowUp: true,
    maxFollowUps: 5,
    ...config,
  }
}

/**
 * Create a context section
 * Helper for building context sections with type safety
 */
export function createContextSection(
  id: string,
  title: string,
  content: string,
  options?: {
    icon?: string
    defaultExpanded?: boolean
  }
): QuestionContextSection {
  return {
    id,
    title,
    content,
    icon: options?.icon,
    defaultExpanded: options?.defaultExpanded ?? false,
  }
}

/**
 * Create a choice option
 * Helper for building multiple choice options
 */
export function createChoiceOption(
  id: string,
  label: string,
  options?: {
    description?: string
    triggersFollowUp?: boolean
  }
): FeedbackChoiceOption {
  return {
    id,
    label,
    description: options?.description,
    triggersFollowUp: options?.triggersFollowUp ?? true,
  }
}

// ============================================
// Common Context Section Templates
// ============================================

/**
 * Background context section template
 */
export const backgroundContextTemplate = (content: string) =>
  createContextSection(
    'background',
    'Background: What this is about',
    content,
    { icon: 'BookOpen' }
  )

/**
 * Purpose context section template
 */
export const purposeContextTemplate = (content: string) =>
  createContextSection(
    'purpose',
    'Why we are asking',
    content,
    { icon: 'Target' }
  )

/**
 * Related info context section template
 */
export const relatedInfoTemplate = (content: string) =>
  createContextSection(
    'related',
    'Related information',
    content,
    { icon: 'Info' }
  )

/**
 * Guidelines context section template
 */
export const guidelinesTemplate = (content: string) =>
  createContextSection(
    'guidelines',
    'Guidelines for your response',
    content,
    { icon: 'ListChecks' }
  )

// ============================================
// Example Question Configurations
// ============================================

/**
 * Example: Open-ended feedback question with context
 */
export const exampleOpenEndedQuestion: FeedbackQuestionConfig = createFeedbackQuestion({
  id: 'content-quality',
  primaryQuestion: 'How clear and compelling is this presentation content?',
  subtitle: 'We value your expert perspective on the material quality.',
  topicBadge: 'Content Review',
  contextSections: [
    backgroundContextTemplate(
      'This presentation covers key concepts in our domain. We want to ensure the content is both accurate and engaging for our target audience of healthcare professionals.'
    ),
    purposeContextTemplate(
      'Your feedback helps us identify gaps in clarity, areas that need more explanation, and content that resonates well. This shapes our final messaging.'
    ),
    guidelinesTemplate(
      'Consider factors like: Is the information accurate? Is it presented in a logical flow? Are complex concepts explained clearly? Is the language appropriate for the audience?'
    ),
  ],
  inputType: 'text',
  placeholder: 'Share your thoughts on the content quality, accuracy, and clarity...',
  enableFollowUp: true,
  maxFollowUps: 5,
})

/**
 * Example: Multiple choice question with context
 */
export const exampleChoiceQuestion: FeedbackQuestionConfig = createFeedbackQuestion({
  id: 'design-rating',
  primaryQuestion: 'How would you rate the overall visual design?',
  subtitle: 'Your design expertise helps us refine the visual presentation.',
  topicBadge: 'Design Feedback',
  contextSections: [
    backgroundContextTemplate(
      'The design follows a modern minimalist aesthetic with teal as the primary accent color. We aim to balance professionalism with approachability.'
    ),
    purposeContextTemplate(
      'Understanding your design perception helps us ensure the visual language supports the content and resonates with our audience.'
    ),
  ],
  inputType: 'choice',
  options: [
    createChoiceOption('excellent', 'Excellent', {
      description: 'Design effectively supports the message',
      triggersFollowUp: true,
    }),
    createChoiceOption('good', 'Good', {
      description: 'Design is solid with minor improvement areas',
      triggersFollowUp: true,
    }),
    createChoiceOption('average', 'Average', {
      description: 'Design is functional but unremarkable',
      triggersFollowUp: true,
    }),
    createChoiceOption('needs-work', 'Needs Improvement', {
      description: 'Design detracts from the content',
      triggersFollowUp: true,
    }),
  ],
  enableFollowUp: true,
  maxFollowUps: 3,
})

/**
 * Example: Combined text with choice question
 */
export const exampleCombinedQuestion: FeedbackQuestionConfig = createFeedbackQuestion({
  id: 'feature-priority',
  primaryQuestion: 'Which feature should we prioritize developing?',
  subtitle: 'Help us understand what matters most to our users.',
  topicBadge: 'Product Feedback',
  contextSections: [
    backgroundContextTemplate(
      'We are planning our next development sprint and want to prioritize features that will have the most impact for our users.'
    ),
    relatedInfoTemplate(
      'Current features include: Basic reporting, User management, and API access. We are considering: Advanced analytics, Team collaboration, or Custom integrations.'
    ),
  ],
  inputType: 'text-with-choice',
  options: [
    createChoiceOption('analytics', 'Advanced Analytics', {
      description: 'Deep insights and custom dashboards',
    }),
    createChoiceOption('collaboration', 'Team Collaboration', {
      description: 'Shared workspaces and real-time editing',
    }),
    createChoiceOption('integrations', 'Custom Integrations', {
      description: 'Connect with your existing tools',
    }),
  ],
  placeholder: 'Tell us why this feature matters to you...',
  enableFollowUp: true,
  maxFollowUps: 4,
})

// ============================================
// Preset Question Templates by Category
// ============================================

export const questionPresets = {
  /**
   * Content review questions
   */
  content: {
    clarity: createFeedbackQuestion({
      id: 'content-clarity',
      primaryQuestion: 'Is the content clear and easy to understand?',
      topicBadge: 'Content',
      contextSections: [
        purposeContextTemplate('We want to ensure our message is accessible to all audience members.'),
      ],
      inputType: 'text',
      enableFollowUp: true,
    }),
    accuracy: createFeedbackQuestion({
      id: 'content-accuracy',
      primaryQuestion: 'Is the information presented accurate and up-to-date?',
      topicBadge: 'Accuracy',
      contextSections: [
        purposeContextTemplate('Your domain expertise helps us verify factual accuracy.'),
      ],
      inputType: 'text',
      enableFollowUp: true,
    }),
    completeness: createFeedbackQuestion({
      id: 'content-completeness',
      primaryQuestion: 'Is there any important information missing?',
      topicBadge: 'Completeness',
      contextSections: [
        purposeContextTemplate('Help us identify gaps in our coverage of the topic.'),
      ],
      inputType: 'text',
      enableFollowUp: true,
    }),
  },

  /**
   * Design review questions
   */
  design: {
    visual: createFeedbackQuestion({
      id: 'design-visual',
      primaryQuestion: 'How effective is the visual design?',
      topicBadge: 'Visual Design',
      inputType: 'choice',
      options: [
        createChoiceOption('very-effective', 'Very Effective'),
        createChoiceOption('effective', 'Effective'),
        createChoiceOption('neutral', 'Neutral'),
        createChoiceOption('ineffective', 'Ineffective'),
      ],
      enableFollowUp: true,
    }),
    readability: createFeedbackQuestion({
      id: 'design-readability',
      primaryQuestion: 'Is the text easy to read?',
      topicBadge: 'Readability',
      inputType: 'text',
      enableFollowUp: true,
    }),
  },

  /**
   * General feedback questions
   */
  general: {
    overall: createFeedbackQuestion({
      id: 'overall-impression',
      primaryQuestion: 'What is your overall impression of this presentation?',
      topicBadge: 'Overall',
      inputType: 'text',
      enableFollowUp: true,
    }),
    suggestions: createFeedbackQuestion({
      id: 'suggestions',
      primaryQuestion: 'What suggestions do you have for improvement?',
      topicBadge: 'Suggestions',
      inputType: 'text',
      enableFollowUp: true,
    }),
  },
}
