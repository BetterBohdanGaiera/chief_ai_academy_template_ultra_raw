/**
 * Form Templates
 * Predefined form templates for different use cases
 */

import {
  createForm,
  createQuestion,
  createContext,
  registerForm,
} from '@/lib/forms/form-registry'
import type { CreateFormInput } from '@/lib/agent-sdk/types'

// ============================================
// Onboarding Form Template
// ============================================

export const executiveOnboardingForm: CreateFormInput = createForm(
  'executive-onboarding',
  'onboarding',
  'Executive AI Readiness Assessment',
  [
    createQuestion(
      'current-state',
      'Tell me about your current AI initiatives',
      createContext(
        'Current AI State Assessment',
        `We need to understand where the organization is today with AI.
This helps us tailor the presentation to their maturity level.
AI maturity ranges from Level 0 (no AI) to Level 5 (AI-native).`,
        'Determine AI maturity level (0-5)',
        [
          'Ask about specific AI tools being used',
          'Ask about who is using AI (individuals vs teams)',
          'Ask about governance or policies around AI',
          'Ask about measurable outcomes from AI initiatives',
        ]
      ),
      {
        topicBadge: 'Current State',
        placeholder: 'Share what AI tools and initiatives your organization currently has in place...',
      }
    ),
    createQuestion(
      'goals',
      'What are your AI goals for the next 12 months?',
      createContext(
        'AI Strategy Goals',
        `Understanding goals helps us focus the presentation on relevant content.
Common goals: cost reduction, revenue growth, productivity, innovation.`,
        'Identify top 2-3 strategic priorities',
        [
          'Ask about budget allocated for AI',
          'Ask about timeline expectations',
          'Ask about success metrics they care about',
        ]
      ),
      {
        topicBadge: 'Goals',
        placeholder: 'Describe your main objectives for AI implementation...',
      }
    ),
    createQuestion(
      'challenges',
      'What are your biggest challenges with AI adoption?',
      createContext(
        'AI Adoption Challenges',
        `Understanding blockers helps us address concerns directly.
Common challenges: talent, data quality, change management, security concerns.`,
        'Identify top 2-3 barriers to AI adoption',
        [
          'Ask about internal resistance or skepticism',
          'Ask about technical infrastructure limitations',
          'Ask about regulatory or compliance concerns',
        ]
      ),
      {
        topicBadge: 'Challenges',
        placeholder: 'What obstacles have you encountered or anticipate facing...',
      }
    ),
  ],
  {
    description: 'Comprehensive assessment to understand executive AI readiness and customize presentation content',
    metadata: {
      estimatedDuration: '10-15 minutes',
      targetAudience: 'C-suite executives',
    },
  }
)

// ============================================
// Feedback Form Template
// ============================================

export const presentationFeedbackForm: CreateFormInput = createForm(
  'presentation-feedback',
  'feedback',
  'Presentation Feedback',
  [
    createQuestion(
      'overall-impression',
      'What is your overall impression of this presentation?',
      createContext(
        'General Feedback',
        `We want to understand the overall effectiveness of the presentation.
This helps us gauge if the messaging resonates with the audience.`,
        'Understand general sentiment and key takeaways',
        [
          'Ask what stood out most to them',
          'Ask if anything was confusing or unclear',
          'Ask how they would describe it to a colleague',
        ]
      ),
      {
        topicBadge: 'Overall',
        placeholder: 'Share your thoughts on the presentation...',
      }
    ),
    createQuestion(
      'content-relevance',
      'How relevant was the content to your needs?',
      createContext(
        'Content Relevance',
        `Relevance is key to engagement. We need to know if we hit the right topics.
Content should address specific pain points and opportunities.`,
        'Assess content-audience fit',
        [
          'Ask which sections were most valuable',
          'Ask what was missing that they expected',
          'Ask if examples were applicable to their situation',
        ]
      ),
      {
        topicBadge: 'Relevance',
        placeholder: 'Tell us about how relevant you found the content...',
      }
    ),
    createQuestion(
      'improvements',
      'What would you improve about this presentation?',
      createContext(
        'Improvement Suggestions',
        `Constructive feedback helps us iterate and improve.
We are looking for specific, actionable suggestions.`,
        'Collect specific improvement recommendations',
        [
          'Ask about pacing (too fast, too slow)',
          'Ask about depth (too basic, too advanced)',
          'Ask about format preferences (more interactive, more data, etc.)',
        ]
      ),
      {
        topicBadge: 'Improvements',
        placeholder: 'What changes would make this presentation better...',
      }
    ),
  ],
  {
    description: 'Collect detailed feedback on presentation effectiveness',
    metadata: {
      estimatedDuration: '5-10 minutes',
      targetAudience: 'Presentation attendees',
    },
  }
)

// ============================================
// Discovery Form Template
// ============================================

export const topicDiscoveryForm: CreateFormInput = createForm(
  'topic-discovery',
  'discovery',
  'Topic Discovery',
  [
    createQuestion(
      'interest-areas',
      'What topics are you most interested in learning about?',
      createContext(
        'Interest Discovery',
        `Understanding interests helps us prioritize content.
We cover: AI strategy, implementation, use cases, governance, and more.`,
        'Identify top 3 areas of interest',
        [
          'Ask what prompted their interest in this area',
          'Ask about their current knowledge level',
          'Ask what they hope to apply from learning',
        ]
      ),
      {
        topicBadge: 'Interests',
        placeholder: 'What AI topics would you like to explore...',
      }
    ),
    createQuestion(
      'use-cases',
      'What specific use cases are you considering for AI?',
      createContext(
        'Use Case Exploration',
        `Concrete use cases help us provide targeted examples.
Common areas: customer service, operations, analytics, content creation.`,
        'Identify 2-3 specific use cases to address',
        [
          'Ask about the business problem they want to solve',
          'Ask about current processes that could be improved',
          'Ask about expected ROI or success metrics',
        ]
      ),
      {
        topicBadge: 'Use Cases',
        placeholder: 'Describe the AI applications you are considering...',
      }
    ),
  ],
  {
    description: 'Discover user interests and customize content recommendations',
    metadata: {
      estimatedDuration: '5-7 minutes',
      targetAudience: 'New users',
    },
  }
)

// ============================================
// Team Assessment Form Template
// ============================================

export const teamAssessmentForm: CreateFormInput = createForm(
  'team-assessment',
  'onboarding',
  'Team AI Readiness Assessment',
  [
    createQuestion(
      'team-composition',
      'Tell me about your team and their experience with AI',
      createContext(
        'Team Composition',
        `Understanding team makeup helps customize training approach.
We need to know technical vs. non-technical ratio, roles, and prior AI exposure.`,
        'Map team composition and AI experience levels',
        [
          'Ask about team size and key roles',
          'Ask about technical skill distribution',
          'Ask who the AI champions or early adopters are',
        ]
      ),
      {
        topicBadge: 'Team',
        placeholder: 'Describe your team structure and their AI background...',
      }
    ),
    createQuestion(
      'training-needs',
      'What training or support does your team need?',
      createContext(
        'Training Needs Assessment',
        `Identifying gaps helps us provide targeted resources.
Training can range from basic AI literacy to advanced implementation.`,
        'Identify top training priorities',
        [
          'Ask about current training resources available',
          'Ask about preferred learning formats',
          'Ask about time constraints for training',
        ]
      ),
      {
        topicBadge: 'Training',
        placeholder: 'What skills or knowledge gaps need to be addressed...',
      }
    ),
    createQuestion(
      'success-criteria',
      'How will you measure successful AI adoption for your team?',
      createContext(
        'Success Metrics',
        `Clear success criteria enable focused implementation.
Metrics should be specific, measurable, and time-bound.`,
        'Define 2-3 measurable success criteria',
        [
          'Ask about specific KPIs they track',
          'Ask about timeline for achieving results',
          'Ask about benchmarks or comparisons they use',
        ]
      ),
      {
        topicBadge: 'Success',
        placeholder: 'What does successful AI adoption look like for your team...',
      }
    ),
  ],
  {
    description: 'Comprehensive team AI readiness and training needs assessment',
    metadata: {
      estimatedDuration: '10-15 minutes',
      targetAudience: 'Team leads and managers',
    },
  }
)

// ============================================
// Initialize Default Forms
// ============================================

/**
 * Register all default form templates
 */
export function initializeDefaultForms(): void {
  registerForm(executiveOnboardingForm)
  registerForm(presentationFeedbackForm)
  registerForm(topicDiscoveryForm)
  registerForm(teamAssessmentForm)
}

// ============================================
// Form Template Getters
// ============================================

/**
 * Get all available form templates
 */
export function getFormTemplates(): CreateFormInput[] {
  return [
    executiveOnboardingForm,
    presentationFeedbackForm,
    topicDiscoveryForm,
    teamAssessmentForm,
  ]
}

/**
 * Get a form template by ID
 */
export function getFormTemplate(templateId: string): CreateFormInput | undefined {
  return getFormTemplates().find(t => t.id === templateId)
}
