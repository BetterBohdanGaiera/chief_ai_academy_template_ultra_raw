# Feedback Form Pattern

## Pattern Overview

An interactive feedback collection system that allows users to select from predefined options, provide custom responses via "Other", and engage in AI-powered conversational follow-ups. This pattern transforms passive surveys into engaging dialogues that extract richer, more nuanced feedback.

## Why It Works

**Pedagogical Psychology**: The pattern leverages **conversational scaffolding** - users engage more deeply when they feel heard and when follow-up questions demonstrate understanding of their input. AI-driven follow-ups create a sense of dialogue rather than one-way data collection, increasing completion rates by 2-3x compared to static forms.

**UX Principles**:
- **Low friction entry**: Predefined choices reduce cognitive load for common responses
- **Escape hatch**: "Other" option prevents user frustration when predefined options don't fit
- **Progressive engagement**: Follow-up questions appear only when valuable, maintaining momentum
- **Conversational tone**: AI responses feel natural, not robotic, encouraging authentic feedback
- **Visual feedback**: Selection states and animations confirm user actions

## When to Use

- Collecting user preferences or opinions (audience polls, preference surveys)
- Gathering feedback on presentations, content, or experiences
- Onboarding flows where you need to understand user needs
- Discovery conversations to identify topics of interest
- Post-presentation Q&A or reflection prompts
- Slides that require user engagement before proceeding

## When NOT to Use

- Simple yes/no questions (use a basic toggle instead)
- Numeric data entry (use calculator or slider patterns)
- When you need to show results in real-time to all users (use polling pattern)
- Assessment/quiz scenarios where answers are right/wrong (use Knowledge Test Poll)
- When offline functionality is required (AI follow-ups need API)

## Components

This pattern provides multiple components for different complexity levels:

| Component | Purpose | Complexity |
|-----------|---------|------------|
| `FeedbackChoice` | Grid of selectable options with "Other" | Low - Pure UI |
| `QuestionContext` | Expandable context sections | Low - Pure UI |
| `ConversationThread` | Message bubble display | Low - Pure UI |
| `FollowUpMessage` | AI follow-up styling | Low - Pure UI |
| `AgentForm` | Full AI-powered conversational form | High - Requires API |

### Component Locations

```typescript
// Lightweight UI components
import FeedbackChoice from '@/components/feedback/FeedbackChoice'
import { ConversationThread } from '@/components/feedback/ConversationThread'
import { FollowUpMessage } from '@/components/feedback/FollowUpMessage'
import { QuestionContext } from '@/components/feedback/QuestionContext'

// Full conversational form system
import AgentForm from '@/components/agent/AgentForm'
import AgentConversation from '@/components/agent/AgentConversation'
import ContextPanel from '@/components/agent/ContextPanel'
import FormSelector from '@/components/agent/FormSelector'

// Type definitions
import type { FormDefinition, QuestionWithContext } from '@/lib/agent-sdk/types'
import type { FeedbackChoiceOption } from '@/types/feedback-conversation'

// Configuration helpers
import { createFeedbackQuestion, createChoiceOption } from '@/config/feedback-questions'
```

## Key Features

- **Multiple choice with "Other"**: Grid layout with visual selection indicators
- **Context panels**: Expandable sections providing background information
- **AI follow-up questions**: Claude asks clarifying questions based on responses
- **Session persistence**: Answers saved to continue later
- **Progress tracking**: Visual progress bar for multi-question forms
- **Responsive design**: Single column mobile, dual column desktop

## Code Highlights

### FeedbackChoice - Simple Selection

```tsx
'use client'

import { useState } from 'react'
import FeedbackChoice from '@/components/feedback/FeedbackChoice'
import type { FeedbackChoiceOption } from '@/types/feedback-conversation'

export default function PreferenceSlide() {
  const [selected, setSelected] = useState<string>()
  const [otherText, setOtherText] = useState('')

  const options: FeedbackChoiceOption[] = [
    {
      id: 'technical',
      label: 'Technical Deep-Dive',
      description: 'Detailed architecture and implementation'
    },
    {
      id: 'business',
      label: 'Business Impact',
      description: 'ROI, strategy, and outcomes'
    },
    {
      id: 'hands-on',
      label: 'Hands-On Workshop',
      description: 'Interactive exercises and demos'
    },
    {
      id: 'overview',
      label: 'High-Level Overview',
      description: 'Concepts and big picture'
    },
  ]

  return (
    <section className="min-h-screen bg-background p-8 lg:p-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-bebas text-4xl text-foreground">
          What Would You Like to Focus On?
        </h2>

        <FeedbackChoice
          options={options}
          selectedId={selected}
          onSelect={setSelected}
          otherText={otherText}
          onOtherTextChange={setOtherText}
          showOther={true}
        />
      </div>
    </section>
  )
}
```

### QuestionContext - Background Information

```tsx
import { QuestionContext } from '@/components/feedback/QuestionContext'

const contextSections = [
  {
    id: 'background',
    title: 'Why We Ask',
    content: 'Understanding your preferences helps us tailor the presentation to your needs.',
    icon: 'BookOpen',
    defaultExpanded: true
  },
  {
    id: 'options',
    title: 'What Each Option Means',
    content: 'Technical: Code examples and architecture. Business: Metrics and ROI...',
    icon: 'ListChecks',
    defaultExpanded: false
  }
]

<QuestionContext sections={contextSections} />
```

### AgentForm - Full AI Conversation

```tsx
'use client'

import AgentForm from '@/components/agent/AgentForm'
import type { FormDefinition, AgentSession } from '@/lib/agent-sdk/types'

const feedbackForm: FormDefinition = {
  id: 'post-presentation-feedback',
  type: 'feedback',
  title: 'Share Your Thoughts',
  description: 'Help us improve future presentations',
  questions: [
    {
      id: 'q1-clarity',
      primaryQuestion: 'How clear was the main message of this presentation?',
      subtitle: 'Consider both the content and delivery',
      topicBadge: 'Clarity',
      context: {
        topic: 'Content Clarity',
        background: 'We want to ensure our presentations effectively communicate key concepts.',
        desiredOutcome: 'Understand which parts were clear and which need improvement.',
        clarifyingHints: [
          'Specific slides that were confusing',
          'Concepts that need more explanation',
          'Pacing issues'
        ]
      },
      placeholder: 'Share your thoughts on the clarity...'
    },
    {
      id: 'q2-actionable',
      primaryQuestion: 'What will you do differently after this presentation?',
      subtitle: 'Specific actions or changes you plan to make',
      topicBadge: 'Impact',
      context: {
        topic: 'Actionable Takeaways',
        background: 'We aim to create presentations that inspire action.',
        desiredOutcome: 'Learn which concepts resonated enough to drive behavior change.',
        clarifyingHints: [
          'Immediate actions',
          'Long-term plans',
          'Team or organizational changes'
        ]
      },
      placeholder: 'Describe any actions you plan to take...'
    }
  ]
}

export default function FeedbackSlide() {
  const handleComplete = (session: AgentSession) => {
    console.log('Feedback collected:', session.gatheredAnswers)
    // Handle completion - save to DB, show thank you, etc.
  }

  return (
    <section className="min-h-screen bg-background p-8 lg:p-16">
      <AgentForm
        form={feedbackForm}
        onComplete={handleComplete}
      />
    </section>
  )
}
```

## Reuse Guidelines

### Adaptation Steps

1. **Choose complexity level**: FeedbackChoice for simple selection, AgentForm for AI conversation
2. **Define your options/questions**: Create option array or form definition
3. **Add context if needed**: Use QuestionContext or ContextPanel for background
4. **Handle responses**: Save to state, API, or use onComplete callback
5. **Style to match**: Apply design system classes

### Customization Points

- **Options**: Replace option array with your choices, add descriptions
- **Context**: Customize background sections with your content
- **Form structure**: Modify questions array for AgentForm
- **Follow-up behavior**: Adjust maxFollowUps in question config
- **Visual theme**: Apply different color variants to selection states
- **Grid layout**: Change responsive grid columns for option count

## Adaptation Example

**Original**: Post-presentation feedback collection

**Adapted for**: Pre-workshop preference gathering

```tsx
const workshopPreferences: FormDefinition = {
  id: 'workshop-setup',
  type: 'onboarding',
  title: 'Customize Your Workshop Experience',
  description: 'Help us tailor the session to your needs',
  questions: [
    {
      id: 'experience-level',
      primaryQuestion: 'What is your experience level with this topic?',
      topicBadge: 'Experience',
      context: {
        topic: 'Skill Assessment',
        background: 'We want to set the right pace for the workshop.',
        desiredOutcome: 'Calibrate content difficulty appropriately.',
        clarifyingHints: ['Previous training', 'Hands-on experience', 'Projects completed']
      },
      placeholder: 'Describe your background...'
    },
    // ... more questions
  ]
}
```

**Changes made**:
- Form type: `feedback` → `onboarding`
- Context: Changed from retrospective to prospective framing
- Questions: Focused on gathering preferences instead of reactions

## API Requirements

**FeedbackChoice**: No API required - pure client-side component

**AgentForm**: Requires API endpoint for AI follow-ups:
- Endpoint: `/api/feedback` or `/api/agent-conversation`
- Environment: `ANTHROPIC_API_KEY` must be set
- See `lib/feedback-api.ts` for implementation details

## Source

Components:
- `/components/feedback/FeedbackChoice.tsx`
- `/components/feedback/ConversationThread.tsx`
- `/components/feedback/FollowUpMessage.tsx`
- `/components/feedback/QuestionContext.tsx`
- `/components/agent/AgentForm.tsx`
- `/components/agent/AgentConversation.tsx`
- `/components/agent/ContextPanel.tsx`

Configuration:
- `/config/feedback-questions.ts` - Question templates and helpers
- `/config/followup-prompts.ts` - AI prompt configuration

## Design System Compliance

- **Typography**: Syne (labels), Manrope (descriptions), JetBrains Mono (code examples)
- **Colors**: Primary for selection states, muted for unselected, destructive for errors
- **Animations**: `animate-fade-in` for appearing elements, 200ms transitions
- **Accessibility**:
  - Semantic button elements with `aria-pressed`
  - Keyboard navigation (Tab, Enter, Space)
  - Focus rings on interactive elements
  - Color contrast meets WCAG AA
  - Screen reader labels on all inputs
