"use client"

/**
 * Course navigation component
 * In-presentation navigation with breadcrumbs, progress, and keyboard shortcuts
 */

import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

interface CourseNavigationProps {
  /** Current course or path title */
  title: string
  /** Current slide number (1-based) */
  currentSlide: number
  /** Total number of slides */
  totalSlides: number
  /** Progress percentage (0-100) */
  progress: number
  /** Navigate to previous slide */
  onPrevious: () => void
  /** Navigate to next slide */
  onNext: () => void
  /** Is first slide */
  isFirst: boolean
  /** Is last slide */
  isLast: boolean
}

export function CourseNavigation({
  title,
  currentSlide,
  totalSlides,
  progress,
  onPrevious,
  onNext,
  isFirst,
  isLast
}: CourseNavigationProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Top Row: Breadcrumbs + Slide Counter */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Home className="h-4 w-4" />
              </Button>
            </Link>
            <div className="text-sm font-syne">
              <span className="text-muted-foreground">{title}</span>
              <span className="mx-2 text-muted-foreground/40">•</span>
              <span className="font-semibold">
                Slide {currentSlide + 1} / {totalSlides}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              disabled={isFirst}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              disabled={isLast}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="h-1" />
      </div>
    </div>
  )
}
