/**
 * Form Generator
 * Dynamic form generation based on context and templates
 */

import type {
  FormDefinition,
  FormType,
  QuestionWithContext,
  QuestionContext,
  CreateFormInput,
} from '../agent-sdk/types'
import {
  registerForm,
  createForm,
  createQuestion,
  createContext,
} from './form-registry'

// ============================================
// Dynamic Form Generation
// ============================================

/**
 * Options for generating a custom form
 */
export interface FormGeneratorOptions {
  /** Unique ID for the form */
  id: string
  /** Form type */
  type: FormType
  /** Form title */
  title: string
  /** Optional description */
  description?: string
  /** Questions to include */
  questions: QuestionGeneratorInput[]
  /** Additional metadata */
  metadata?: Record<string, unknown>
  /** Whether to auto-register the form */
  autoRegister?: boolean
}

/**
 * Input for generating a question
 */
export interface QuestionGeneratorInput {
  /** Question ID */
  id: string
  /** The primary question */
  question: string
  /** Context topic */
  topic: string
  /** Context background */
  background: string
  /** Desired outcome */
  desiredOutcome: string
  /** Clarifying hints */
  clarifyingHints?: string[]
  /** Optional subtitle */
  subtitle?: string
  /** Topic badge */
  topicBadge?: string
  /** Placeholder text */
  placeholder?: string
}

/**
 * Generate a form from options
 */
export function generateForm(options: FormGeneratorOptions): FormDefinition {
  const questions: QuestionWithContext[] = options.questions.map(q =>
    createQuestion(
      q.id,
      q.question,
      createContext(q.topic, q.background, q.desiredOutcome, q.clarifyingHints),
      {
        subtitle: q.subtitle,
        topicBadge: q.topicBadge,
        placeholder: q.placeholder,
      }
    )
  )

  const formInput = createForm(options.id, options.type, options.title, questions, {
    description: options.description,
    metadata: options.metadata,
  })

  if (options.autoRegister !== false) {
    return registerForm(formInput)
  }

  return {
    ...formInput,
    createdAt: new Date().toISOString(),
  }
}

// ============================================
// Quick Form Builders
// ============================================

/**
 * Quickly generate an onboarding form
 */
export function generateOnboardingForm(
  id: string,
  title: string,
  questions: Array<{
    id: string
    question: string
    topic: string
    background: string
    desiredOutcome: string
    hints?: string[]
  }>
): FormDefinition {
  return generateForm({
    id,
    type: 'onboarding',
    title,
    questions: questions.map(q => ({
      id: q.id,
      question: q.question,
      topic: q.topic,
      background: q.background,
      desiredOutcome: q.desiredOutcome,
      clarifyingHints: q.hints,
      topicBadge: q.topic,
    })),
  })
}

/**
 * Quickly generate a feedback form
 */
export function generateFeedbackForm(
  id: string,
  title: string,
  feedbackAreas: Array<{
    id: string
    question: string
    area: string
    focusPoints: string[]
  }>
): FormDefinition {
  return generateForm({
    id,
    type: 'feedback',
    title,
    questions: feedbackAreas.map(area => ({
      id: area.id,
      question: area.question,
      topic: `${area.area} Feedback`,
      background: `Collecting feedback on ${area.area.toLowerCase()} to improve future presentations.`,
      desiredOutcome: `Understand strengths and areas for improvement in ${area.area.toLowerCase()}`,
      clarifyingHints: area.focusPoints.map(p => `Ask about ${p}`),
      topicBadge: area.area,
    })),
  })
}

/**
 * Quickly generate a discovery form
 */
export function generateDiscoveryForm(
  id: string,
  title: string,
  explorationTopics: Array<{
    id: string
    question: string
    topic: string
    context: string
    probeAreas: string[]
  }>
): FormDefinition {
  return generateForm({
    id,
    type: 'discovery',
    title,
    questions: explorationTopics.map(t => ({
      id: t.id,
      question: t.question,
      topic: t.topic,
      background: t.context,
      desiredOutcome: `Understand user interests and needs related to ${t.topic.toLowerCase()}`,
      clarifyingHints: t.probeAreas.map(p => `Explore ${p}`),
      topicBadge: t.topic,
    })),
  })
}

// ============================================
// Form Cloning and Customization
// ============================================

/**
 * Clone a form with modifications
 */
export function cloneForm(
  sourceForm: FormDefinition,
  modifications: {
    id: string
    title?: string
    description?: string
    questionModifications?: Record<
      string,
      Partial<{
        primaryQuestion: string
        subtitle: string
        topicBadge: string
        placeholder: string
        context: Partial<QuestionContext>
      }>
    >
    additionalQuestions?: QuestionGeneratorInput[]
    removeQuestionIds?: string[]
    metadata?: Record<string, unknown>
  }
): FormDefinition {
  // Filter out removed questions
  let questions = modifications.removeQuestionIds
    ? sourceForm.questions.filter(q => !modifications.removeQuestionIds?.includes(q.id))
    : [...sourceForm.questions]

  // Apply question modifications
  if (modifications.questionModifications) {
    questions = questions.map(q => {
      const mods = modifications.questionModifications?.[q.id]
      if (!mods) return q

      return {
        ...q,
        primaryQuestion: mods.primaryQuestion ?? q.primaryQuestion,
        subtitle: mods.subtitle ?? q.subtitle,
        topicBadge: mods.topicBadge ?? q.topicBadge,
        placeholder: mods.placeholder ?? q.placeholder,
        context: {
          ...q.context,
          ...mods.context,
        },
      }
    })
  }

  // Add additional questions
  if (modifications.additionalQuestions) {
    const additionalQs = modifications.additionalQuestions.map(q =>
      createQuestion(
        q.id,
        q.question,
        createContext(q.topic, q.background, q.desiredOutcome, q.clarifyingHints),
        {
          subtitle: q.subtitle,
          topicBadge: q.topicBadge,
          placeholder: q.placeholder,
        }
      )
    )
    questions = [...questions, ...additionalQs]
  }

  return registerForm({
    id: modifications.id,
    type: sourceForm.type,
    title: modifications.title ?? sourceForm.title,
    description: modifications.description ?? sourceForm.description,
    questions,
    metadata: {
      ...sourceForm.metadata,
      ...modifications.metadata,
      clonedFrom: sourceForm.id,
    },
  })
}

// ============================================
// Context-Aware Form Generation
// ============================================

/**
 * Generate a form based on a specific context/scenario
 */
export function generateContextualForm(
  scenario: 'new_user' | 'returning_user' | 'executive' | 'technical' | 'general',
  baseTitle: string
): FormDefinition {
  const scenarioConfigs: Record<
    string,
    {
      type: FormType
      titlePrefix: string
      questions: QuestionGeneratorInput[]
    }
  > = {
    new_user: {
      type: 'onboarding',
      titlePrefix: 'Welcome',
      questions: [
        {
          id: 'background',
          question: 'Tell us about yourself and your role',
          topic: 'Introduction',
          background: 'Understanding new users helps personalize their experience',
          desiredOutcome: 'Learn about user background and goals',
          clarifyingHints: ['Ask about their role', 'Ask about their industry', 'Ask about their AI experience'],
          topicBadge: 'About You',
        },
        {
          id: 'goals',
          question: 'What do you hope to achieve?',
          topic: 'Goals',
          background: 'Goals help us customize recommendations',
          desiredOutcome: 'Identify primary objectives',
          clarifyingHints: ['Ask about timeline', 'Ask about success criteria'],
          topicBadge: 'Goals',
        },
      ],
    },
    returning_user: {
      type: 'feedback',
      titlePrefix: 'Quick Check-in',
      questions: [
        {
          id: 'progress',
          question: 'How has your experience been so far?',
          topic: 'Progress',
          background: 'Understanding progress helps us provide better support',
          desiredOutcome: 'Assess user satisfaction and progress',
          clarifyingHints: ['Ask about accomplishments', 'Ask about challenges'],
          topicBadge: 'Progress',
        },
      ],
    },
    executive: {
      type: 'onboarding',
      titlePrefix: 'Executive',
      questions: [
        {
          id: 'strategic-priorities',
          question: 'What are your top strategic priorities for AI?',
          topic: 'Strategy',
          background: 'Executive priorities drive organizational AI adoption',
          desiredOutcome: 'Understand strategic direction',
          clarifyingHints: ['Ask about budget allocation', 'Ask about board expectations', 'Ask about competitive pressure'],
          topicBadge: 'Strategy',
        },
        {
          id: 'org-readiness',
          question: 'How ready is your organization for AI transformation?',
          topic: 'Readiness',
          background: 'Organizational readiness affects implementation approach',
          desiredOutcome: 'Assess organizational AI maturity',
          clarifyingHints: ['Ask about talent', 'Ask about data infrastructure', 'Ask about change management'],
          topicBadge: 'Readiness',
        },
      ],
    },
    technical: {
      type: 'discovery',
      titlePrefix: 'Technical',
      questions: [
        {
          id: 'tech-stack',
          question: 'What is your current technical infrastructure?',
          topic: 'Infrastructure',
          background: 'Technical context enables specific recommendations',
          desiredOutcome: 'Map current tech stack and capabilities',
          clarifyingHints: ['Ask about cloud providers', 'Ask about data pipelines', 'Ask about ML platforms'],
          topicBadge: 'Tech Stack',
        },
        {
          id: 'integration-needs',
          question: 'What systems need to integrate with AI solutions?',
          topic: 'Integration',
          background: 'Integration requirements affect architecture decisions',
          desiredOutcome: 'Identify integration touchpoints',
          clarifyingHints: ['Ask about APIs', 'Ask about data formats', 'Ask about security requirements'],
          topicBadge: 'Integration',
        },
      ],
    },
    general: {
      type: 'feedback',
      titlePrefix: 'General',
      questions: [
        {
          id: 'experience',
          question: 'How would you describe your experience?',
          topic: 'Experience',
          background: 'General feedback helps improve overall quality',
          desiredOutcome: 'Gather overall impressions',
          clarifyingHints: ['Ask for specifics', 'Ask for suggestions'],
          topicBadge: 'Experience',
        },
      ],
    },
  }

  const config = scenarioConfigs[scenario] || scenarioConfigs.general

  return generateForm({
    id: `${scenario}-${Date.now()}`,
    type: config.type,
    title: `${config.titlePrefix}: ${baseTitle}`,
    questions: config.questions,
    metadata: {
      scenario,
      generatedAt: new Date().toISOString(),
    },
  })
}
