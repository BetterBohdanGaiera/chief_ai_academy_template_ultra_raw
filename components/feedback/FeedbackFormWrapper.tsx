'use client'

/**
 * Reusable Feedback Form Wrapper
 * A configurable feedback form component that can be embedded in any slide
 *
 * Features:
 * - Configurable form ID for multi-form support
 * - Session-aware feedback collection
 * - Question hash for grouping responses
 * - All submission states (idle, submitting, success, error)
 * - Compact mode for inline embedding
 */

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitFeedback } from '@/lib/feedback-api'
import { getPresentationId } from '@/lib/presentation-id'
import { getSessionId, generateQuestionHash } from '@/lib/session'
import { feedbackConfig } from '@/config/feedback'
import type { FeedbackSlideConfig, FormContext } from '@/types/feedback'

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

interface FeedbackFormWrapperProps {
  /** Form ID for multi-form tracking */
  formId: string
  /** Question prompt to display */
  questionPrompt: string
  /** Slide ID for tracking */
  slideId: string
  /** Slide index for ordering */
  slideIndex?: number
  /** Module ID for presentation tracking */
  moduleId?: string
  /** Whether to collect reviewer name */
  collectName?: boolean
  /** Whether to collect reviewer email */
  collectEmail?: boolean
  /** Custom submit button text */
  submitButtonText?: string
  /** Message shown after successful submission */
  successMessage?: string
  /** Compact mode for inline embedding */
  compact?: boolean
  /** Callback after successful submission */
  onSubmitSuccess?: (feedbackId: number) => void
  /** Additional form context to store */
  additionalContext?: Record<string, unknown>
}

export default function FeedbackFormWrapper({
  formId,
  questionPrompt,
  slideId,
  slideIndex = 0,
  moduleId = 'm1',
  collectName = true,
  collectEmail = false,
  submitButtonText = 'SUBMIT FEEDBACK',
  successMessage = 'Thank you for your valuable feedback!',
  compact = false,
  onSubmitSuccess,
  additionalContext,
}: FeedbackFormWrapperProps) {
  // Form state
  const [reviewerName, setReviewerName] = useState('')
  const [reviewerEmail, setReviewerEmail] = useState('')
  const [feedbackText, setFeedbackText] = useState('')
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [presentationId, setPresentationId] = useState('')
  const [sessionId, setSessionId] = useState('')

  // Get IDs on mount
  useEffect(() => {
    setPresentationId(getPresentationId(moduleId))
    setSessionId(getSessionId())
  }, [moduleId])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate
    if (!feedbackText.trim()) {
      setErrorMessage('Please enter your feedback')
      setSubmissionState('error')
      return
    }

    if (feedbackText.length < feedbackConfig.minFeedbackLength) {
      setErrorMessage(`Feedback must be at least ${feedbackConfig.minFeedbackLength} characters`)
      setSubmissionState('error')
      return
    }

    setSubmissionState('submitting')
    setErrorMessage('')

    // Build form context
    const formContext: FormContext = {
      questionPrompt,
      configuredAt: new Date().toISOString(),
      ...additionalContext,
    }

    const result = await submitFeedback({
      presentationId,
      slideId,
      slideIndex,
      feedbackText: feedbackText.trim(),
      reviewerName: reviewerName.trim() || undefined,
      reviewerEmail: reviewerEmail.trim() || undefined,
      feedbackType: 'general',
      formId,
      sessionId,
      questionHash: generateQuestionHash(questionPrompt),
      formContext,
    })

    if (result.success) {
      setSubmissionState('success')
      // Reset form after success
      setFeedbackText('')
      setReviewerName('')
      setReviewerEmail('')
      // Callback
      if (onSubmitSuccess && result.id) {
        onSubmitSuccess(result.id)
      }
    } else {
      setSubmissionState('error')
      setErrorMessage(result.error || 'Failed to submit feedback. Please try again.')
    }
  }

  // Reset to try again after error
  const handleRetry = () => {
    setSubmissionState('idle')
    setErrorMessage('')
  }

  // Success state
  if (submissionState === 'success') {
    return (
      <Card variant="glass" className={compact ? 'border-green-500/30' : ''}>
        <CardContent className={compact ? 'p-4' : 'p-6 md:p-8'}>
          <div className="text-center py-4 space-y-3 animate-fade-in">
            <div className="flex justify-center">
              <div className={`rounded-full bg-green-500/20 ${compact ? 'p-2' : 'p-4'}`}>
                <CheckCircle2 className={`text-green-500 ${compact ? 'h-6 w-6' : 'h-12 w-12'}`} />
              </div>
            </div>
            <h3 className={`font-bebas text-green-500 ${compact ? 'text-xl' : 'text-3xl md:text-4xl'}`}>
              THANK YOU!
            </h3>
            <p className={`font-manrope text-muted-foreground ${compact ? 'text-sm' : 'text-lg'}`}>
              {successMessage}
            </p>
            <Button
              variant="outline"
              size={compact ? 'sm' : 'default'}
              onClick={() => setSubmissionState('idle')}
              className="mt-2"
            >
              Submit More Feedback
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Form state
  return (
    <Card variant="glass" className="border-primary/20">
      <CardContent className={compact ? 'p-4' : 'p-6 md:p-8'}>
        <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-6'}>
          {/* Question Prompt */}
          <p className={`font-syne font-medium text-muted-foreground italic ${compact ? 'text-sm' : 'text-lg'}`}>
            &ldquo;{questionPrompt}&rdquo;
          </p>

          {/* Optional Name Field */}
          {collectName && (
            <div className="space-y-2">
              <label
                htmlFor={`reviewer-name-${formId}`}
                className="font-syne font-medium text-sm text-muted-foreground"
              >
                Your Name (optional)
              </label>
              <Input
                id={`reviewer-name-${formId}`}
                type="text"
                placeholder="Enter your name..."
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                disabled={submissionState === 'submitting'}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
          )}

          {/* Optional Email Field */}
          {collectEmail && (
            <div className="space-y-2">
              <label
                htmlFor={`reviewer-email-${formId}`}
                className="font-syne font-medium text-sm text-muted-foreground"
              >
                Your Email (optional)
              </label>
              <Input
                id={`reviewer-email-${formId}`}
                type="email"
                placeholder="Enter your email..."
                value={reviewerEmail}
                onChange={(e) => setReviewerEmail(e.target.value)}
                disabled={submissionState === 'submitting'}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
          )}

          {/* Feedback Textarea */}
          <div className="space-y-2">
            <label
              htmlFor={`feedback-text-${formId}`}
              className="font-syne font-medium text-sm text-muted-foreground"
            >
              Your Feedback <span className="text-primary">*</span>
            </label>
            <textarea
              id={`feedback-text-${formId}`}
              placeholder="Share your thoughts, suggestions, or insights..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              disabled={submissionState === 'submitting'}
              rows={compact ? 3 : 5}
              maxLength={feedbackConfig.maxFeedbackLength}
              className="flex w-full rounded-md border border-border/50 bg-background/50 px-3 py-3 text-base ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors"
            />
            <div className="flex justify-between text-xs text-muted-foreground/60">
              <span>
                {feedbackText.length < feedbackConfig.minFeedbackLength
                  ? `Minimum ${feedbackConfig.minFeedbackLength} characters`
                  : ''}
              </span>
              <span>
                {feedbackText.length} / {feedbackConfig.maxFeedbackLength}
              </span>
            </div>
          </div>

          {/* Error Message */}
          {submissionState === 'error' && errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive animate-fade-in">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">{errorMessage}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleRetry}
                className="ml-auto text-destructive hover:text-destructive"
              >
                Dismiss
              </Button>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="glow"
            size={compact ? 'default' : 'lg'}
            disabled={submissionState === 'submitting' || !feedbackText.trim()}
            className={`w-full font-bebas tracking-wide ${compact ? 'text-lg' : 'text-xl'}`}
          >
            {submissionState === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                SUBMITTING...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                {submitButtonText}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
