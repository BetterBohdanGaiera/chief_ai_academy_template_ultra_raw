'use client'

/**
 * Section Feedback Slide
 * Example of a multi-form feedback slide with a different formId
 *
 * This demonstrates how to use the FeedbackFormWrapper component
 * to collect feedback at different points in a presentation.
 * Each form has a unique formId for separate tracking and analysis.
 */

import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern, GradientMesh } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { MessageSquare } from 'lucide-react'
import FeedbackFormWrapper from '@/components/feedback/FeedbackFormWrapper'

interface SectionFeedbackSlideProps {
  /** Section number for tracking */
  sectionNumber?: number
  /** Section name for context */
  sectionName?: string
  /** Custom question prompt */
  questionPrompt?: string
}

export default function SectionFeedbackSlide({
  sectionNumber = 1,
  sectionName = 'Introduction',
  questionPrompt,
}: SectionFeedbackSlideProps) {
  const defaultPrompt = `How clear was the "${sectionName}" section? What could be improved?`

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-15" />
      <GrainOverlay opacity={0.25} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 space-y-8">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-1">
            <MessageSquare className="h-5 w-5 mr-2" aria-hidden="true" />
            SECTION {sectionNumber} FEEDBACK
          </Badge>
        </div>

        {/* Title */}
        <div className="text-center animate-fade-in delay-200 fill-backwards">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            SECTION
            <br />
            <span className="text-primary animate-glow-pulse">FEEDBACK</span>
          </h1>
        </div>

        {/* Feedback Form */}
        <div className="animate-fade-in delay-500 fill-backwards">
          <FeedbackFormWrapper
            formId={`feedback-section-${sectionNumber}`}
            questionPrompt={questionPrompt || defaultPrompt}
            slideId={`section-${sectionNumber}-feedback`}
            slideIndex={3 + sectionNumber}
            moduleId="m1"
            collectName={true}
            collectEmail={false}
            submitButtonText="SUBMIT SECTION FEEDBACK"
            successMessage={`Thank you for your feedback on ${sectionName}!`}
            additionalContext={{
              sectionNumber,
              sectionName,
            }}
          />
        </div>

        {/* Privacy Note */}
        <p className="text-center text-sm text-muted-foreground/50 animate-fade-in delay-700 fill-backwards">
          Your section-specific feedback helps us improve each part of the presentation.
        </p>
      </div>
    </div>
  )
}
