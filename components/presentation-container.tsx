"use client"

/**
 * Presentation container component
 * Handles slide navigation, presenter mode, and keyboard controls
 */

import { Suspense, lazy } from 'react'
import { useCourseNavigation } from '@/hooks/use-course-navigation'
import { usePresenterMode } from '@/hooks/use-presenter-mode'
import { CourseNavigation } from '@/components/course-navigation'
import { PresenterMode } from '@/components/presenter-mode'
import { slideRegistry } from '@/config/slides'

interface PresentationContainerProps {
  /** Array of slide IDs to display */
  slideIds: string[]
  /** Presentation title (for navigation) */
  title: string
  /** Course or path ID */
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
    togglePresenterMode,
    progress,
    isFirstSlide,
    isLastSlide
  } = useCourseNavigation({
    totalSlides: slideIds.length,
    courseId: id.startsWith('path-') ? undefined : id,
    pathId: id.startsWith('path-') ? id : undefined
  })

  // Get current slide metadata
  const currentSlideId = slideIds[navState.currentSlide]
  const currentSlideEntry = currentSlideId ? slideRegistry[currentSlideId] : null
  const currentSlideMetadata = currentSlideEntry?.slide

  const { slideTime, totalTime } = usePresenterMode({
    active: navState.presenterMode,
    currentNotes: currentSlideMetadata?.notes
  })

  // Lazy load the current slide component
  const SlideComponent = currentSlideEntry ? lazy(currentSlideEntry.loader) : null

  return (
    <div className="relative">
      {/* Course Navigation */}
      <CourseNavigation
        title={title}
        currentSlide={navState.currentSlide}
        totalSlides={navState.totalSlides}
        progress={progress}
        onPrevious={prevSlide}
        onNext={nextSlide}
        isFirst={isFirstSlide}
        isLast={isLastSlide}
      />

      {/* Slide Content */}
      <main className="pt-16">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
              <p className="text-muted-foreground">Loading slide...</p>
            </div>
          </div>
        }>
          {SlideComponent && <SlideComponent />}
        </Suspense>
      </main>

      {/* Presenter Mode */}
      <PresenterMode
        active={navState.presenterMode}
        onToggle={togglePresenterMode}
        slideTime={slideTime}
        totalTime={totalTime}
        notes={currentSlideMetadata?.notes}
        currentSlide={navState.currentSlide}
        totalSlides={navState.totalSlides}
      />
    </div>
  )
}
