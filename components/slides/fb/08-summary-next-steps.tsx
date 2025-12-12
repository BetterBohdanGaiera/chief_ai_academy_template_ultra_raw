'use client'

/**
 * Slide 08: Summary & Next Steps
 *
 * Pattern: One-Screen Simplicity (artifacts-builder)
 * Purpose: Recap all selections and provide submission mechanism
 *
 * Design Notes:
 * - 3 summary cards showing selections from previous slides
 * - Timeline: Planning (Now-Jan) -> Launch (Feb 1) -> Review (Q2)
 * - Additional feedback textarea
 * - Submit button with glow variant
 * - Background: checklist completion image at 10% opacity
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
  Palette,
  Target,
  Calendar,
  Rocket,
  BarChart3,
  Send,
  CheckCircle2,
  Pencil,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFeedback } from '@/contexts/FeedbackContext'

// Label lookup maps for displaying user-friendly text
const positioningLabels: Record<string, string> = {
  'ai-first': 'The AI-First PM Tool',
  'mid-market': 'The Mid-Market Sweet Spot',
  'unified-platform': 'The Unified Platform',
  'other': 'Custom Suggestion',
}

const brandToneLabels: Record<string, string> = {
  'monday': 'Playful (monday)',
  'clickup': 'Scrappy (ClickUp)',
  'notion': 'Minimalist (Notion)',
  'techflow': 'Smart Friend (TechFlow)',
  'asana': 'Professional (Asana)',
  'other': 'Custom Suggestion',
}

const leadStrategyLabels: Record<string, string> = {
  'volume': 'Volume Focus (700+ MQLs)',
  'balanced': 'Balanced (500 MQLs)',
  'quality': 'Quality Focus (300 MQLs)',
  'split': 'Split Strategy',
  'other': 'Custom Suggestion',
}

interface TimelineStep {
  id: string
  label: string
  date: string
  icon: typeof Calendar
  color: string
  description: string
}

const timelineSteps: TimelineStep[] = [
  {
    id: 'planning',
    label: 'Planning',
    date: 'Now - Jan',
    icon: Calendar,
    color: 'bg-amber-500',
    description: 'Strategy finalization',
  },
  {
    id: 'launch',
    label: 'Launch',
    date: 'Feb 1',
    icon: Rocket,
    color: 'bg-primary',
    description: 'Campaign kickoff',
  },
  {
    id: 'review',
    label: 'Review',
    date: 'Q2',
    icon: BarChart3,
    color: 'bg-emerald-500',
    description: 'Performance analysis',
  },
]

export default function SummaryNextSteps() {
  const { state, setAdditionalFeedback, submitFeedback } = useFeedback()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get display labels for selections (with fallback for "other" custom text)
  const getPositioningLabel = () => {
    if (!state.positioning) return 'Not selected'
    if (state.positioning === 'other' && state.positioningOther) {
      return state.positioningOther
    }
    return positioningLabels[state.positioning] || state.positioning
  }

  const getBrandToneLabel = () => {
    if (!state.brandTone) return 'Not selected'
    if (state.brandTone === 'other' && state.brandToneOther) {
      return state.brandToneOther
    }
    return brandToneLabels[state.brandTone] || state.brandTone
  }

  const getLeadStrategyLabel = () => {
    if (!state.leadStrategy) return 'Not selected'
    if (state.leadStrategy === 'other' && state.leadStrategyOther) {
      return state.leadStrategyOther
    }
    return leadStrategyLabels[state.leadStrategy] || state.leadStrategy
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await submitFeedback()
    setIsSubmitting(false)
  }

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
              Your feedback has been recorded. We&apos;ll incorporate your input into the Q1 2025 campaign strategy.
            </p>
          </div>

          {/* What happens next */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <h3 className="font-syne font-bold text-lg mb-4">What Happens Next</h3>
              <ul className="space-y-2 text-left text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Marketing team reviews all stakeholder feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Final strategy deck shared by end of January</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>Campaign launches February 1, 2025</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Layer: Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-8" />

      {/* Background Layer: Grain Overlay */}
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

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Positioning Selection */}
          <Card className="border-border/50 animate-slide-in-left delay-500 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Q1</Badge>
                <button
                  className="p-1 rounded hover:bg-muted/50 transition-colors"
                  aria-label="Edit positioning selection"
                >
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Positioning</p>
                  <p className="font-syne font-semibold text-foreground">
                    {getPositioningLabel()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Tone Selection */}
          <Card className="border-border/50 animate-fade-in delay-600 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Q2</Badge>
                <button
                  className="p-1 rounded hover:bg-muted/50 transition-colors"
                  aria-label="Edit brand tone selection"
                >
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Brand Tone</p>
                  <p className="font-syne font-semibold text-foreground">
                    {getBrandToneLabel()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lead Strategy Selection */}
          <Card className="border-border/50 animate-slide-in-right delay-700 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Q3</Badge>
                <button
                  className="p-1 rounded hover:bg-muted/50 transition-colors"
                  aria-label="Edit lead strategy selection"
                >
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Lead Strategy</p>
                  <p className="font-syne font-semibold text-foreground">
                    {getLeadStrategyLabel()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="border-border/50 animate-fade-in delay-800 fill-backwards">
          <CardContent className="pt-6">
            <h3 className="font-syne font-bold text-lg mb-6 text-center">What Happens Next</h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-2">
              {timelineSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={step.id} className="flex md:flex-col items-center gap-3 md:gap-2 flex-1">
                    {/* Connector line (not for first item) */}
                    {idx > 0 && (
                      <div className="hidden md:block absolute h-0.5 bg-border/50 w-full -left-1/2" style={{ top: '20px' }} />
                    )}
                    {/* Icon */}
                    <div className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center relative z-10',
                      step.color,
                    )}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {/* Label */}
                    <div className="text-left md:text-center">
                      <p className="font-syne font-semibold text-foreground">{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.date}</p>
                      <p className="text-xs text-muted-foreground hidden md:block">{step.description}</p>
                    </div>
                    {/* Mobile description */}
                    <p className="text-xs text-muted-foreground md:hidden ml-auto">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

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
          Your feedback is confidential and will only be used to shape the Q1 2025 marketing strategy.
        </p>
      </div>
    </section>
  )
}
