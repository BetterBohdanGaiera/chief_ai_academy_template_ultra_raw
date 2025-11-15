"use client"

/**
 * Presenter mode hook
 * Manages presenter mode state, timing, and speaker notes
 */

import { useState, useEffect, useCallback } from 'react'
import { type PresenterState } from '@/types/courses'

interface UsePresenterModeOptions {
  /** Is presenter mode active */
  active: boolean
  /** Current slide notes */
  currentNotes?: string
  /** Next slide component */
  nextSlide?: React.ComponentType
}

export function usePresenterMode({
  active,
  currentNotes,
  nextSlide
}: UsePresenterModeOptions) {
  const [presenterState, setPresenterState] = useState<PresenterState>({
    active,
    slideElapsed: 0,
    totalElapsed: 0,
    currentNotes,
    nextSlide
  })

  /**
   * Update notes and next slide when active slide changes
   */
  useEffect(() => {
    setPresenterState(prev => ({
      ...prev,
      currentNotes,
      nextSlide,
      slideElapsed: 0 // Reset slide timer on slide change
    }))
  }, [currentNotes, nextSlide])

  /**
   * Timer for slide and total elapsed time
   */
  useEffect(() => {
    if (!active) {
      return
    }

    const interval = setInterval(() => {
      setPresenterState(prev => ({
        ...prev,
        slideElapsed: prev.slideElapsed + 1,
        totalElapsed: prev.totalElapsed + 1
      }))
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [active])

  /**
   * Reset slide timer (useful when manually navigating)
   */
  const resetSlideTimer = useCallback(() => {
    setPresenterState(prev => ({ ...prev, slideElapsed: 0 }))
  }, [])

  /**
   * Reset total timer (useful at presentation start)
   */
  const resetTotalTimer = useCallback(() => {
    setPresenterState(prev => ({ ...prev, totalElapsed: 0, slideElapsed: 0 }))
  }, [])

  /**
   * Format time as MM:SS
   */
  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])

  return {
    presenterState,
    resetSlideTimer,
    resetTotalTimer,
    formatTime,
    slideTime: formatTime(presenterState.slideElapsed),
    totalTime: formatTime(presenterState.totalElapsed)
  }
}
