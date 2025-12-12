'use client'

/**
 * Summary Slide - Reference Implementation
 *
 * This slide demonstrates:
 * - Consuming context state (not mock data!)
 * - Label lookup maps for user-friendly display
 * - Submission handling via context
 * - Success state after submission
 */

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import {
  Check,
  Sparkles,
  Target,
  Layers,
  Send,
  CheckCircle2,
  Pencil,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFeedback } from '@/contexts/FeedbackContext'

// Label lookup maps - maps option IDs to display labels
// Customize these based on your question options
const question1Labels: Record<string, string> = {
  'option-1': 'Option One Label',
  'option-2': 'Option Two Label',
  'option-3': 'Option Three Label',
  'other': 'Custom Suggestion',
}

const question2Labels: Record<string, string> = {
  'choice-a': 'Choice A Label',
  'choice-b': 'Choice B Label',
  'choice-c': 'Choice C Label',
  'other': 'Custom Suggestion',
}

const question3Labels: Record<string, string> = {
  'approach-1': 'Approach One Label',
  'approach-2': 'Approach Two Label',
  'approach-3': 'Approach Three Label',
  'other': 'Custom Suggestion',
}

export default function SummarySlide() {
  // ✅ CORRECT: Consume context state
  const { state, setAdditionalFeedback, submitFeedback } = useFeedback()

  // Local state for submission loading indicator only
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Helper functions to get display labels
  // Handles "other" option by showing the custom text
  const getQuestion1Label = () => {
    if (!state.question1) return 'Not selected'
    if (state.question1 === 'other' && state.question1Other) {
      return state.question1Other
    }
    return question1Labels[state.question1] || state.question1
  }

  const getQuestion2Label = () => {
    if (!state.question2) return 'Not selected'
    if (state.question2 === 'other' && state.question2Other) {
      return state.question2Other
    }
    return question2Labels[state.question2] || state.question2
  }

  const getQuestion3Label = () => {
    if (!state.question3) return 'Not selected'
    if (state.question3 === 'other' && state.question3Other) {
      return state.question3Other
    }
    return question3Labels[state.question3] || state.question3
  }

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true)
    await submitFeedback()
    setIsSubmitting(false)
  }

  // Success state - shown after submission
  if (state.isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
        <GeometricPattern type="dots" className="opacity-10" />
        <GrainOverlay opacity={0.1} />

        <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-scale-in">
          {/* Success Icon */}
          <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-glow-pulse">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground">
              Thank <span className="text-primary">You!</span>
            </h2>
            <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Your feedback has been recorded. We appreciate your input!
            </p>
          </div>

          {/* What happens next */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <h3 className="font-syne font-bold text-lg mb-4">What Happens Next</h3>
              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Your responses have been saved</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>The team will review all feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Updates will be shared soon</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  // Review state - shown before submission
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Layers */}
      <GeometricPattern type="dots" className="opacity-8" />
      <GrainOverlay opacity={0.1} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="animate-slide-in-down">
            Review & Submit
          </Badge>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground animate-fade-in delay-200 fill-backwards">
            Your <span className="text-primary">Selections</span>
          </h2>

          <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Review your feedback before submitting. You can go back to change any selection.
          </p>
        </div>

        {/* Summary Cards - showing user selections from context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Question 1 Selection */}
          <Card className="border-border/50 animate-slide-in-left delay-500 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Q1</Badge>
                <button
                  className="p-1 rounded hover:bg-muted/50 transition-colors"
                  aria-label="Edit question 1 selection"
                >
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Question 1</p>
                  <p className="font-syne font-semibold text-foreground">
                    {getQuestion1Label()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 2 Selection */}
          <Card className="border-border/50 animate-fade-in delay-600 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Q2</Badge>
                <button
                  className="p-1 rounded hover:bg-muted/50 transition-colors"
                  aria-label="Edit question 2 selection"
                >
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Question 2</p>
                  <p className="font-syne font-semibold text-foreground">
                    {getQuestion2Label()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 3 Selection */}
          <Card className="border-border/50 animate-slide-in-right delay-700 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Q3</Badge>
                <button
                  className="p-1 rounded hover:bg-muted/50 transition-colors"
                  aria-label="Edit question 3 selection"
                >
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Question 3</p>
                  <p className="font-syne font-semibold text-foreground">
                    {getQuestion3Label()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Feedback */}
        <div className="space-y-3 animate-fade-in delay-900 fill-backwards">
          <label
            htmlFor="additional-feedback"
            className="font-syne font-semibold text-base text-foreground"
          >
            Anything else we should consider?
          </label>
          <textarea
            id="additional-feedback"
            rows={3}
            placeholder="Share any additional thoughts, concerns, or suggestions..."
            value={state.additionalFeedback}
            onChange={(e) => setAdditionalFeedback(e.target.value)}
            className={cn(
              'w-full rounded-xl border-2 border-border/50 bg-background/50 px-4 py-3',
              'font-manrope text-base text-foreground placeholder:text-muted-foreground',
              'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-ring/20',
              'transition-all duration-300 resize-none',
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center animate-fade-in delay-1000 fill-backwards">
          <Button
            variant="glow"
            size="lg"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={cn(
              'px-8 py-6 text-lg font-syne font-bold',
              isSubmitting && 'animate-pulse',
            )}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">
                  <Send className="h-5 w-5" />
                </span>
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Submit Feedback
              </>
            )}
          </Button>
        </div>

        {/* Privacy note */}
        <p className="text-center text-xs text-muted-foreground animate-fade-in delay-1100 fill-backwards">
          Your feedback is confidential and will only be used internally.
        </p>
      </div>
    </section>
  )
}

/**
 * ANTI-PATTERN - DO NOT USE:
 *
 * ❌ WRONG (using mock/hardcoded data):
 * ```tsx
 * const mockSelections = {
 *   question1: { id: 'option-1', label: 'Option One' },
 *   question2: { id: 'choice-a', label: 'Choice A' },
 * }
 *
 * // Then using mockSelections.question1.label in JSX
 * ```
 *
 * ✅ CORRECT (consuming context state):
 * ```tsx
 * const { state } = useFeedback()
 *
 * // Then using getQuestion1Label() which reads from state.question1
 * ```
 */
