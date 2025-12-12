'use client'

/**
 * Feedback Form Pattern Example
 *
 * This slide demonstrates both FeedbackChoice (simple selection)
 * and QuestionContext (expandable background info) components.
 *
 * For full AI-powered conversations, see AgentForm in the README.
 */

import { useState } from 'react'
import { ChevronRight, Sparkles } from 'lucide-react'
import FeedbackChoice from '@/components/feedback/FeedbackChoice'
import { QuestionContext } from '@/components/feedback/QuestionContext'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { FeedbackChoiceOption } from '@/types/feedback-conversation'

// Define available options
const preferenceOptions: FeedbackChoiceOption[] = [
  {
    id: 'technical',
    label: 'Technical Deep-Dive',
    description: 'Architecture, code examples, implementation details',
    triggersFollowUp: true
  },
  {
    id: 'business',
    label: 'Business Impact',
    description: 'ROI metrics, strategy alignment, stakeholder value',
    triggersFollowUp: true
  },
  {
    id: 'hands-on',
    label: 'Hands-On Workshop',
    description: 'Interactive exercises, live coding, practical demos',
    triggersFollowUp: false
  },
  {
    id: 'overview',
    label: 'High-Level Overview',
    description: 'Concepts, trends, big picture thinking',
    triggersFollowUp: false
  },
]

// Define context sections
const contextSections = [
  {
    id: 'why',
    title: 'Why We Ask',
    content: 'Understanding your preferences helps us customize the remaining presentation to match your interests and expertise level.',
    icon: 'Target' as const,
    defaultExpanded: true
  },
  {
    id: 'what-happens',
    title: 'What Happens Next',
    content: 'Based on your selection, we\'ll adjust the depth and focus of upcoming slides. Technical selects get more code, business selects get more metrics.',
    icon: 'ListChecks' as const,
    defaultExpanded: false
  }
]

export default function FeedbackFormSlide() {
  const [selectedId, setSelectedId] = useState<string>()
  const [otherText, setOtherText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedId) {
      console.log('Selection:', selectedId, selectedId === 'other' ? otherText : '')
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="min-h-screen bg-background flex items-center justify-center p-8 lg:p-16">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-bebas text-4xl text-foreground">
            Thank You!
          </h2>
          <p className="font-manrope text-muted-foreground max-w-md">
            We've noted your preference for{' '}
            <span className="text-primary font-semibold">
              {selectedId === 'other' ? otherText : preferenceOptions.find(o => o.id === selectedId)?.label}
            </span>
            . The presentation will be tailored accordingly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-8 lg:p-16">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="glow" className="animate-slide-in-up">
            <Sparkles className="w-3 h-3 mr-1" />
            Interactive
          </Badge>

          <h2
            className="font-bebas text-4xl lg:text-5xl text-foreground animate-slide-in-up"
            style={{ animationDelay: '100ms' }}
          >
            What Would You Like to Focus On?
          </h2>

          <p
            className="font-manrope text-lg text-muted-foreground animate-slide-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Select the area that interests you most, and we'll customize the experience.
          </p>
        </div>

        {/* Context Panel */}
        <div
          className="animate-slide-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <QuestionContext
            sections={contextSections}
          />
        </div>

        {/* Selection Grid */}
        <div
          className="animate-slide-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <FeedbackChoice
            options={preferenceOptions}
            selectedId={selectedId}
            onSelect={setSelectedId}
            otherText={otherText}
            onOtherTextChange={setOtherText}
            showOther={true}
          />
        </div>

        {/* Submit Button */}
        <div
          className="flex justify-end animate-slide-in-up"
          style={{ animationDelay: '500ms' }}
        >
          <Button
            variant="glow"
            size="lg"
            onClick={handleSubmit}
            disabled={!selectedId || (selectedId === 'other' && !otherText.trim())}
            className="group"
          >
            Continue
            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
