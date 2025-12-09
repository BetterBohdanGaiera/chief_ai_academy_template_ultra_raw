"use client"

/**
 * Presentation container component
 * Handles slide navigation and keyboard controls
 */

import { Suspense, lazy } from 'react'
import { useCourseNavigation } from '@/hooks/use-course-navigation'
import { slideRegistry } from '@/config/slides'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface PresentationContainerProps {
  /** Array of slide IDs to display */
  slideIds: string[]
  /** Presentation title (for navigation) */
  title: string
  /** Module ID */
  id: string
}

export function PresentationContainer({
  slideIds,
  title,
  id
}: PresentationContainerProps) {
  const {
    navState,
    nextSlide,
    prevSlide,
    firstSlide,
    progress,
    isFirstSlide,
    isLastSlide
  } = useCourseNavigation({
    totalSlides: slideIds.length,
    courseId: id
  })

  // Get current slide metadata
  const currentSlideId = slideIds[navState.currentSlide]
  const currentSlideEntry = currentSlideId ? slideRegistry[currentSlideId] : null

  // Lazy load the current slide component
  const SlideComponent = currentSlideEntry ? lazy(currentSlideEntry.loader) : null

  // Handle empty module
  if (slideIds.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="font-bebas text-4xl">No Slides Yet</h2>
          <p className="text-muted-foreground">This module is empty. Add slides to get started.</p>
          <Link href="/">
            <Button variant="outline">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Home + Title */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={firstSlide}>
              <Home className="h-4 w-4" />
            </Button>
            <span className="font-syne font-semibold text-sm">{title}</span>
          </div>

          {/* Slide Counter + Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={isFirstSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <span className="text-sm text-muted-foreground min-w-[60px] text-center">
              {navState.currentSlide + 1} / {navState.totalSlides}
            </span>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={isLastSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="hidden md:block w-32">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Slide Content */}
      <main className="pt-14 min-h-screen">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
              <p className="text-muted-foreground">Loading slide...</p>
            </div>
          </div>
        }>
          {SlideComponent && (
            <div className="min-h-[calc(100vh-3.5rem)]">
              <SlideComponent />
            </div>
          )}
        </Suspense>
      </main>
    </div>
  )
}
