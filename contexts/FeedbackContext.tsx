'use client'

/**
 * FeedbackContext
 * Shared state management for feedback collection across slides
 */

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface FeedbackState {
  // Question 1: Positioning
  positioning: string | null
  positioningOther: string
  // Question 2: Brand Tone
  brandTone: string | null
  brandToneOther: string
  // Question 3: Lead Strategy
  leadStrategy: string | null
  leadStrategyOther: string
  // Additional feedback
  additionalFeedback: string
  // Submission state
  isSubmitted: boolean
}

interface FeedbackContextValue {
  state: FeedbackState
  setPositioning: (id: string | null, other?: string) => void
  setBrandTone: (id: string | null, other?: string) => void
  setLeadStrategy: (id: string | null, other?: string) => void
  setAdditionalFeedback: (text: string) => void
  submitFeedback: () => Promise<void>
  resetFeedback: () => void
}

const defaultState: FeedbackState = {
  positioning: null,
  positioningOther: '',
  brandTone: null,
  brandToneOther: '',
  leadStrategy: null,
  leadStrategyOther: '',
  additionalFeedback: '',
  isSubmitted: false,
}

const FeedbackContext = createContext<FeedbackContextValue | null>(null)

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FeedbackState>(defaultState)

  const setPositioning = useCallback((id: string | null, other = '') => {
    setState(prev => ({
      ...prev,
      positioning: id,
      positioningOther: id === 'other' ? other : '',
    }))
  }, [])

  const setBrandTone = useCallback((id: string | null, other = '') => {
    setState(prev => ({
      ...prev,
      brandTone: id,
      brandToneOther: id === 'other' ? other : '',
    }))
  }, [])

  const setLeadStrategy = useCallback((id: string | null, other = '') => {
    setState(prev => ({
      ...prev,
      leadStrategy: id,
      leadStrategyOther: id === 'other' ? other : '',
    }))
  }, [])

  const setAdditionalFeedback = useCallback((text: string) => {
    setState(prev => ({
      ...prev,
      additionalFeedback: text,
    }))
  }, [])

  const submitFeedback = useCallback(async () => {
    // In production, this would send to an API
    console.log('Submitting feedback:', state)
    setState(prev => ({
      ...prev,
      isSubmitted: true,
    }))
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  }, [state])

  const resetFeedback = useCallback(() => {
    setState(defaultState)
  }, [])

  return (
    <FeedbackContext.Provider
      value={{
        state,
        setPositioning,
        setBrandTone,
        setLeadStrategy,
        setAdditionalFeedback,
        submitFeedback,
        resetFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export function useFeedback() {
  const context = useContext(FeedbackContext)
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider')
  }
  return context
}

export { FeedbackContext }
