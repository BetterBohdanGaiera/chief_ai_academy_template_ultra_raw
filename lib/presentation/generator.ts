/**
 * Presentation Generator
 * Generates customized presentations from gathered form answers
 */

import type {
  AgentSession,
  GatheredAnswer,
  FormType,
  PresentationGenerationRequest,
  PresentationGenerationResponse,
} from '../agent-sdk/types'

// ============================================
// Types
// ============================================

export interface GeneratedSlide {
  id: string
  title: string
  content: string
  type: 'title' | 'content' | 'bullets' | 'quote' | 'data' | 'summary'
  notes?: string
  metadata?: Record<string, unknown>
}

export interface GeneratedPresentation {
  id: string
  title: string
  slides: GeneratedSlide[]
  metadata: {
    generatedAt: string
    formId: string
    sessionId: string
    formType: FormType
    estimatedDuration: string
    keyTopics: string[]
  }
}

export interface GenerationConfig {
  style: 'professional' | 'casual' | 'educational'
  length: 'short' | 'medium' | 'long'
  focusAreas?: string[]
}

// ============================================
// Generation Triggers
// ============================================

/**
 * Check if a session has enough information to generate a presentation
 */
export function canGeneratePresentation(session: AgentSession): boolean {
  // Must be completed
  if (session.status !== 'completed') {
    return false
  }

  // Must have at least one gathered answer
  const answerCount = Object.keys(session.gatheredAnswers).length
  if (answerCount === 0) {
    return false
  }

  // All questions should have answers (but allow partial completion)
  return answerCount >= 1
}

/**
 * Get generation readiness score (0-100)
 */
export function getGenerationReadiness(
  session: AgentSession,
  totalQuestions: number
): number {
  const answeredCount = Object.keys(session.gatheredAnswers).length
  const completionRatio = totalQuestions > 0 ? answeredCount / totalQuestions : 0
  const hasInsights = Object.values(session.gatheredAnswers).some(
    a => a.extractedInsights && Object.keys(a.extractedInsights).length > 0
  )

  // Base score from completion ratio
  let score = completionRatio * 80

  // Bonus for having extracted insights
  if (hasInsights) {
    score += 10
  }

  // Bonus for being marked complete
  if (session.status === 'completed') {
    score += 10
  }

  return Math.min(100, Math.round(score))
}

// ============================================
// Slide Generation
// ============================================

/**
 * Generate slides based on form type and answers
 */
export function generateSlides(
  answers: Record<string, GatheredAnswer>,
  formType: FormType,
  config: GenerationConfig
): GeneratedSlide[] {
  const slides: GeneratedSlide[] = []

  // Title slide
  slides.push(generateTitleSlide(formType))

  // Content slides based on answers
  Object.entries(answers).forEach(([questionId, answer], index) => {
    const contentSlides = generateContentSlides(
      questionId,
      answer,
      index,
      config
    )
    slides.push(...contentSlides)
  })

  // Summary slide
  slides.push(generateSummarySlide(answers, formType))

  return slides
}

/**
 * Generate title slide
 */
function generateTitleSlide(formType: FormType): GeneratedSlide {
  const titles: Record<FormType, string> = {
    onboarding: 'Your Personalized AI Journey',
    feedback: 'Feedback Summary & Next Steps',
    discovery: 'Your Interests & Recommendations',
    custom: 'Customized Presentation',
  }

  return {
    id: 'slide-title',
    title: titles[formType],
    content: 'Generated based on your responses',
    type: 'title',
    notes: 'Opening slide introducing the customized content',
  }
}

/**
 * Generate content slides from an answer
 */
function generateContentSlides(
  questionId: string,
  answer: GatheredAnswer,
  index: number,
  config: GenerationConfig
): GeneratedSlide[] {
  const slides: GeneratedSlide[] = []

  // Extract key points from the answer
  const keyPoints = extractKeyPoints(answer.primaryAnswer)

  // Main content slide
  slides.push({
    id: `slide-content-${index + 1}`,
    title: `Key Insight #${index + 1}`,
    content: answer.primaryAnswer,
    type: keyPoints.length > 2 ? 'bullets' : 'content',
    notes: `Based on response to question: ${questionId}`,
    metadata: {
      questionId,
      hasFollowUps: answer.followUpExchanges.length > 0,
    },
  })

  // If there were follow-up discussions, add a detail slide
  if (answer.followUpExchanges.length > 0 && config.length !== 'short') {
    const followUpSummary = summarizeFollowUps(answer.followUpExchanges)
    slides.push({
      id: `slide-detail-${index + 1}`,
      title: 'Additional Context',
      content: followUpSummary,
      type: 'bullets',
      notes: 'Details gathered from follow-up conversation',
    })
  }

  return slides
}

/**
 * Generate summary slide
 */
function generateSummarySlide(
  answers: Record<string, GatheredAnswer>,
  formType: FormType
): GeneratedSlide {
  const answerCount = Object.keys(answers).length
  const keyInsights = Object.values(answers)
    .map(a => extractMainInsight(a.primaryAnswer))
    .filter(Boolean)
    .slice(0, 3)

  return {
    id: 'slide-summary',
    title: 'Summary & Next Steps',
    content: keyInsights.join('\n• '),
    type: 'summary',
    notes: `Summary of ${answerCount} responses collected`,
    metadata: {
      totalResponses: answerCount,
      formType,
    },
  }
}

// ============================================
// Text Processing Helpers
// ============================================

/**
 * Extract key points from text
 */
function extractKeyPoints(text: string): string[] {
  // Simple extraction - split by sentences and filter
  const sentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 10)

  return sentences.slice(0, 5)
}

/**
 * Extract main insight from text
 */
function extractMainInsight(text: string): string {
  const sentences = text.split(/[.!?]+/).map(s => s.trim())
  // Return the longest sentence as the "main" insight
  return sentences.reduce((a, b) => (a.length > b.length ? a : b), '')
}

/**
 * Summarize follow-up exchanges
 */
function summarizeFollowUps(
  exchanges: Array<{ role: string; content: string }>
): string {
  const userResponses = exchanges
    .filter(e => e.role === 'user')
    .map(e => e.content)

  return userResponses.join('\n• ')
}

// ============================================
// Main Generator
// ============================================

/**
 * Generate a presentation from a completed session
 */
export function generatePresentation(
  session: AgentSession,
  config: GenerationConfig = { style: 'professional', length: 'medium' }
): GeneratedPresentation {
  const slides = generateSlides(
    session.gatheredAnswers,
    session.formType,
    config
  )

  // Extract key topics from answers
  const keyTopics = Object.values(session.gatheredAnswers)
    .map(a => extractMainInsight(a.primaryAnswer))
    .filter(t => t.length > 0)
    .slice(0, 5)

  // Calculate estimated duration (2 minutes per slide)
  const durationMinutes = slides.length * 2
  const estimatedDuration =
    durationMinutes >= 60
      ? `${Math.round(durationMinutes / 60)} hour${durationMinutes >= 120 ? 's' : ''}`
      : `${durationMinutes} minutes`

  return {
    id: `pres_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    title: getTitleForFormType(session.formType),
    slides,
    metadata: {
      generatedAt: new Date().toISOString(),
      formId: session.formId,
      sessionId: session.sessionId,
      formType: session.formType,
      estimatedDuration,
      keyTopics,
    },
  }
}

/**
 * Get presentation title based on form type
 */
function getTitleForFormType(formType: FormType): string {
  const titles: Record<FormType, string> = {
    onboarding: 'Your Personalized Journey',
    feedback: 'Feedback Summary',
    discovery: 'Recommended Topics',
    custom: 'Custom Presentation',
  }
  return titles[formType]
}

// ============================================
// API Integration
// ============================================

/**
 * Submit a presentation generation request
 * (For future API integration)
 */
export async function requestPresentationGeneration(
  request: PresentationGenerationRequest
): Promise<PresentationGenerationResponse> {
  // For now, generate locally
  // In the future, this could call an API endpoint

  try {
    // Create a mock session from the request
    const mockSession: AgentSession = {
      sessionId: request.sessionId,
      formId: request.formId,
      formType: 'custom',
      currentQuestionId: '',
      currentQuestionIndex: 0,
      questionContext: {
        topic: '',
        background: '',
        desiredOutcome: '',
      },
      messages: [],
      gatheredAnswers: request.gatheredAnswers,
      status: 'completed',
      metadata: {
        totalExchanges: 0,
        aiGenerated: false,
        startedAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const presentation = generatePresentation(mockSession, request.options)

    return {
      success: true,
      presentationId: presentation.id,
      preview: {
        title: presentation.title,
        slideCount: presentation.slides.length,
        estimatedDuration: presentation.metadata.estimatedDuration,
        keyTopics: presentation.metadata.keyTopics,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate presentation',
    }
  }
}
