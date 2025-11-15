"use client"

/**
 * Presenter mode component
 * Overlay panel with speaker notes, timing, and next slide preview
 */

import { Clock, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PresenterModeProps {
  /** Is presenter mode active */
  active: boolean
  /** Toggle presenter mode */
  onToggle: () => void
  /** Current slide elapsed time (formatted) */
  slideTime: string
  /** Total presentation elapsed time (formatted) */
  totalTime: string
  /** Speaker notes for current slide */
  notes?: string
  /** Current slide number */
  currentSlide: number
  /** Total slides */
  totalSlides: number
}

export function PresenterMode({
  active,
  onToggle,
  slideTime,
  totalTime,
  notes,
  currentSlide,
  totalSlides
}: PresenterModeProps) {
  if (!active) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl animate-slide-in-up">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-start justify-between gap-4">
          {/* Left: Speaker Notes */}
          <Card className="flex-1 border-primary/20 bg-muted/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-syne uppercase tracking-wide text-muted-foreground">
                Speaker Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-foreground/80">
                {notes || 'No notes for this slide'}
              </p>
            </CardContent>
          </Card>

          {/* Middle: Timing */}
          <Card className="w-64 border-primary/20 bg-muted/20">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  Slide
                </span>
                <span className="font-jetbrains text-2xl font-bold text-primary">
                  {slideTime}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  Total
                </span>
                <span className="font-jetbrains text-2xl font-bold">
                  {totalTime}
                </span>
              </div>
              <div className="pt-2 border-t border-border/50">
                <span className="text-xs text-muted-foreground">
                  Slide {currentSlide + 1} of {totalSlides}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Right: Controls */}
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="text-xs text-muted-foreground text-center mt-2">
              Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">P</kbd> to toggle
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
