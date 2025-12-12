'use client'

/**
 * FeedbackContext - Reference Implementation
 *
 * Shared state management for feedback collection across multiple slides.
 * This context persists selections when users navigate between slides.
 *
 * Usage:
 * 1. Wrap your module page with <FeedbackProvider>
 * 2. Use useFeedback() hook in question slides
 * 3. Consume state in summary slide
 */

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

// Define the shape of your feedback state
// Customize these fields based on your questions
interface FeedbackState {
  // Question 1
  question1: string | null
  question1Other: string
  // Question 2
  question2: string | null
  question2Other: string
  // Question 3
  question3: string | null
  question3Other: string
  // Additional feedback (optional textarea on summary)
  additionalFeedback: string
  // Submission state
  isSubmitted: boolean
}

// Define the context value interface
interface FeedbackContextValue {
  state: FeedbackState
  setQuestion1: (id: string | null, other?: string) => void
  setQuestion2: (id: string | null, other?: string) => void
  setQuestion3: (id: string | null, other?: string) => void
  setAdditionalFeedback: (text: string) => void
  submitFeedback: () => Promise<void>
  resetFeedback: () => void
}

// Default state values
const defaultState: FeedbackState = {
  question1: null,
  question1Other: '',
  question2: null,
  question2Other: '',
  question3: null,
  question3Other: '',
  additionalFeedback: '',
  isSubmitted: false,
}

// Create the context
const FeedbackContext = createContext<FeedbackContextValue | null>(null)

/**
 * FeedbackProvider Component
 *
 * Wrap your module page with this provider:
 *
 * ```tsx
 * import { FeedbackProvider } from '@/contexts/FeedbackContext'
 *
 * export default function ModulePage() {
 *   return (
 *     <FeedbackProvider>
 *       <PresentationContainer ... />
 *     </FeedbackProvider>
 *   )
 * }
 * ```
 */
export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FeedbackState>(defaultState)

  // Setter for Question 1
  // Handles both predefined options and "other" text
  const setQuestion1 = useCallback((id: string | null, other = '') => {
    setState(prev => ({
      ...prev,
      question1: id,
      question1Other: id === 'other' ? other : '',
    }))
  }, [])

  // Setter for Question 2
  const setQuestion2 = useCallback((id: string | null, other = '') => {
    setState(prev => ({
      ...prev,
      question2: id,
      question2Other: id === 'other' ? other : '',
    }))
  }, [])

  // Setter for Question 3
  const setQuestion3 = useCallback((id: string | null, other = '') => {
    setState(prev => ({
      ...prev,
      question3: id,
      question3Other: id === 'other' ? other : '',
    }))
  }, [])

  // Setter for additional feedback textarea
  const setAdditionalFeedback = useCallback((text: string) => {
    setState(prev => ({
      ...prev,
      additionalFeedback: text,
    }))
  }, [])

  // Submit handler - customize this for your API
  const submitFeedback = useCallback(async () => {
    // Log for debugging (remove in production)
    console.log('Submitting feedback:', state)

    // Mark as submitted immediately for UI feedback
    setState(prev => ({
      ...prev,
      isSubmitted: true,
    }))

    // TODO: Replace with actual API call
    // await fetch('/api/feedback', {
    //   method: 'POST',
    //   body: JSON.stringify(state),
    // })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  }, [state])

  // Reset handler - useful for "start over" functionality
  const resetFeedback = useCallback(() => {
    setState(defaultState)
  }, [])

  return (
    <FeedbackContext.Provider
      value={{
        state,
        setQuestion1,
        setQuestion2,
        setQuestion3,
        setAdditionalFeedback,
        submitFeedback,
        resetFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

/**
 * useFeedback Hook
 *
 * Use this hook in your question and summary slides:
 *
 * ```tsx
 * import { useFeedback } from '@/contexts/FeedbackContext'
 *
 * export default function QuestionSlide() {
 *   const { state, setQuestion1 } = useFeedback()
 *   const selectedId = state.question1
 *   // ...
 * }
 * ```
 */
export function useFeedback() {
  const context = useContext(FeedbackContext)
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider')
  }
  return context
}

export { FeedbackContext }
