"use client"

/**
 * Course navigation hook
 * Manages state for current course, path, slide position, and progress
 */

import { useState, useCallback, useEffect } from 'react'
import { type NavigationState } from '@/types/courses'

interface UseCourseNavigationOptions {
  /** Initial slide index */
  initialSlide?: number
  /** Total number of slides */
  totalSlides: number
  /** Current course ID */
  courseId?: string
  /** Current path ID */
  pathId?: string
}

export function useCourseNavigation({
  initialSlide = 0,
  totalSlides,
  courseId,
  pathId
}: UseCourseNavigationOptions) {
  const [navState, setNavState] = useState<NavigationState>({
    currentCourse: courseId,
    currentPath: pathId,
    currentSlide: initialSlide,
    totalSlides,
    presenterMode: false
  })

  /**
   * Navigate to specific slide
   */
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setNavState(prev => ({ ...prev, currentSlide: index }))
    }
  }, [totalSlides])

  /**
   * Navigate to next slide
   */
  const nextSlide = useCallback(() => {
    setNavState(prev => {
      const next = prev.currentSlide + 1
      return {
        ...prev,
        currentSlide: next < totalSlides ? next : prev.currentSlide
      }
    })
  }, [totalSlides])

  /**
   * Navigate to previous slide
   */
  const prevSlide = useCallback(() => {
    setNavState(prev => {
      const previous = prev.currentSlide - 1
      return {
        ...prev,
        currentSlide: previous >= 0 ? previous : prev.currentSlide
      }
    })
  }, [])

  /**
   * Navigate to first slide
   */
  const firstSlide = useCallback(() => {
    setNavState(prev => ({ ...prev, currentSlide: 0 }))
  }, [])

  /**
   * Navigate to last slide
   */
  const lastSlide = useCallback(() => {
    setNavState(prev => ({ ...prev, currentSlide: totalSlides - 1 }))
  }, [totalSlides])

  /**
   * Toggle presenter mode
   */
  const togglePresenterMode = useCallback(() => {
    setNavState(prev => ({ ...prev, presenterMode: !prev.presenterMode }))
  }, [])

  /**
   * Calculate progress percentage
   */
  const progress = ((navState.currentSlide + 1) / totalSlides) * 100

  /**
   * Keyboard navigation
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'Home':
          e.preventDefault()
          firstSlide()
          break
        case 'End':
          e.preventDefault()
          lastSlide()
          break
        case 'p':
        case 'P':
          e.preventDefault()
          togglePresenterMode()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, firstSlide, lastSlide, togglePresenterMode])

  return {
    navState,
    goToSlide,
    nextSlide,
    prevSlide,
    firstSlide,
    lastSlide,
    togglePresenterMode,
    progress,
    isFirstSlide: navState.currentSlide === 0,
    isLastSlide: navState.currentSlide === totalSlides - 1
  }
}
