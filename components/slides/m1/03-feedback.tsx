'use client'

/**
 * Feedback Collection Slide
 * Full-screen slide for collecting text feedback from domain experts
 *
 * Features:
 * - Configurable question prompt
 * - Optional reviewer name field
 * - Submit with loading, success, and error states
 * - Multi-form support with formId and sessionId
 * - Brutalist-minimalist design matching the presentation aesthetic
 */

import { useState, useEffect } from 'react'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern, GradientMesh } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitFeedback } from '@/lib/feedback-api'
import { getPresentationId } from '@/lib/presentation-id'
import { getSessionId, generateQuestionHash } from '@/lib/session'
import { feedbackSlideConfig } from '@/config/feedback-slide'
import { feedbackConfig } from '@/config/feedback'
import type { FeedbackSlideConfig, FormContext } from '@/types/feedback'

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

interface FeedbackSlideProps {
  config?: Partial<FeedbackSlideConfig>
}

export default function FeedbackSlide({ config }: FeedbackSlideProps) {
  // Merge provided config with defaults
  const slideConfig: FeedbackSlideConfig = {
    ...feedbackSlideConfig,
    ...config,
  }

  // Form state
  const [reviewerName, setReviewerName] = useState('')
  const [feedbackText, setFeedbackText] = useState('')
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [presentationId, setPresentationId] = useState(slideConfig.presentationId)
  const [sessionId, setSessionId] = useState('')

  // Get presentation ID and session ID on mount
  useEffect(() => {
    const presId = getPresentationId('m1')
    setPresentationId(presId)
    const sessId = getSessionId()
    setSessionId(sessId)
  }, [])

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

    // Build form context for tracking
    const formContext: FormContext = {
      questionPrompt: slideConfig.questionPrompt,
      title: slideConfig.title,
      configuredAt: new Date().toISOString(),
    }

    const result = await submitFeedback({
      presentationId,
      slideId: slideConfig.slideId,
      slideIndex: 2, // Third slide in M1
      feedbackText: feedbackText.trim(),
      reviewerName: reviewerName.trim() || undefined,
      feedbackType: 'general',
      formId: slideConfig.formId,
      sessionId,
      questionHash: generateQuestionHash(slideConfig.questionPrompt),
      formContext,
    })

    if (result.success) {
      setSubmissionState('success')
      // Reset form after success
      setFeedbackText('')
      setReviewerName('')
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

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-15" />
      <GrainOverlay opacity={0.25} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 space-y-8">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-1">
            <MessageSquare className="h-5 w-5 mr-2" aria-hidden="true" />
            FEEDBACK
          </Badge>
        </div>

        {/* Title */}
        <div className="text-center animate-fade-in delay-200 fill-backwards">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            {slideConfig.title}
            <br />
            <span className="text-primary animate-glow-pulse">{slideConfig.titleAccent}</span>
          </h1>
        </div>

        {/* Question Prompt */}
        <p className="font-syne font-medium text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto italic animate-slide-in-up delay-300 fill-backwards">
          &ldquo;{slideConfig.questionPrompt}&rdquo;
        </p>

        {/* Feedback Form Card */}
        <Card
          variant="glass"
          className="animate-fade-in delay-500 fill-backwards border-primary/20"
        >
          <CardContent className="p-6 md:p-8">
            {submissionState === 'success' ? (
              // Success State
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/20">
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                  </div>
                </div>
                <h3 className="font-bebas text-3xl md:text-4xl text-green-500">
                  THANK YOU!
                </h3>
                <p className="font-manrope text-lg text-muted-foreground">
                  {slideConfig.successMessage}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmissionState('idle')}
                  className="mt-4"
                >
                  Submit More Feedback
                </Button>
              </div>
            ) : (
              // Form State
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Optional Name Field */}
                {slideConfig.collectName && (
                  <div className="space-y-2">
                    <label
                      htmlFor="reviewer-name"
                      className="font-syne font-medium text-sm text-muted-foreground"
                    >
                      Your Name (optional)
                    </label>
                    <Input
                      id="reviewer-name"
                      type="text"
                      placeholder="Enter your name..."
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      disabled={submissionState === 'submitting'}
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                )}

                {/* Feedback Textarea */}
                <div className="space-y-2">
                  <label
                    htmlFor="feedback-text"
                    className="font-syne font-medium text-sm text-muted-foreground"
                  >
                    Your Feedback <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="feedback-text"
                    placeholder="Share your thoughts, suggestions, or insights..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    disabled={submissionState === 'submitting'}
                    rows={5}
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
                  size="lg"
                  disabled={submissionState === 'submitting' || !feedbackText.trim()}
                  className="w-full font-bebas text-xl tracking-wide"
                >
                  {submissionState === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      SUBMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {slideConfig.submitButtonText}
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Privacy Note */}
        <p className="text-center text-sm text-muted-foreground/50 animate-fade-in delay-700 fill-backwards">
          Your feedback helps us improve. We value your expertise.
        </p>
      </div>
    </div>
  )
}
