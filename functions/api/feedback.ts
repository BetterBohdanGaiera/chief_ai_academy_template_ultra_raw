/**
 * Cloudflare Pages Function for Feedback API
 * Handles CRUD operations for presentation feedback
 * Supports multi-form feedback with form_id, session_id, and form_context
 */

interface Env {
  DB: D1Database
}

interface FormContext {
  questionPrompt?: string
  title?: string
  configuredAt?: string
  [key: string]: unknown
}

interface ConversationThreadMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

interface ConversationMetadata {
  totalExchanges: number
  aiGenerated: boolean
  completionReason?: 'comprehensive' | 'max_reached' | 'user_done' | 'error'
}

interface FeedbackSubmission {
  presentationId: string
  slideId: string
  slideIndex?: number
  feedbackText: string
  reviewerName?: string
  reviewerEmail?: string
  feedbackType?: 'general' | 'content' | 'design' | 'accuracy'
  metadata?: Record<string, unknown>
  formId?: string
  sessionId?: string
  questionHash?: string
  formContext?: FormContext
  /** Complete conversation thread for AI-assisted feedback */
  conversationThread?: ConversationThreadMessage[]
  /** Whether this is an AI-assisted conversation submission */
  isConversation?: boolean
  /** Metadata about the conversation */
  conversationMetadata?: ConversationMetadata
}

/**
 * Validate feedback submission data
 */
function validateFeedbackSubmission(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid request body'] }
  }

  const submission = data as FeedbackSubmission

  if (!submission.presentationId || typeof submission.presentationId !== 'string') {
    errors.push('presentationId is required and must be a string')
  }

  if (!submission.slideId || typeof submission.slideId !== 'string') {
    errors.push('slideId is required and must be a string')
  }

  if (!submission.feedbackText || typeof submission.feedbackText !== 'string') {
    errors.push('feedbackText is required and must be a string')
  }

  if (submission.feedbackText && submission.feedbackText.length > 10000) {
    errors.push('feedbackText must be 10000 characters or less')
  }

  if (submission.feedbackType) {
    const validTypes = ['general', 'content', 'design', 'accuracy']
    if (!validTypes.includes(submission.feedbackType)) {
      errors.push(`feedbackType must be one of: ${validTypes.join(', ')}`)
    }
  }

  return { valid: errors.length === 0, errors }
}

/**
 * CORS headers for the response
 */
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

/**
 * Handle OPTIONS request for CORS preflight
 */
export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  })
}

/**
 * Handle POST request to submit feedback
 */
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json()

    // Validate submission
    const { valid, errors } = validateFeedbackSubmission(body)
    if (!valid) {
      return new Response(
        JSON.stringify({ success: false, errors }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }

    const submission = body as FeedbackSubmission

    // Insert feedback into database with multi-form support
    const result = await context.env.DB.prepare(`
      INSERT INTO feedback (
        presentation_id,
        slide_id,
        slide_index,
        feedback_text,
        reviewer_name,
        reviewer_email,
        feedback_type,
        metadata,
        form_id,
        session_id,
        question_hash,
        form_context
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
      .bind(
        submission.presentationId,
        submission.slideId,
        submission.slideIndex ?? null,
        submission.feedbackText,
        submission.reviewerName ?? null,
        submission.reviewerEmail ?? null,
        submission.feedbackType ?? 'general',
        submission.metadata ? JSON.stringify(submission.metadata) : null,
        submission.formId ?? 'default',
        submission.sessionId ?? null,
        submission.questionHash ?? null,
        submission.formContext ? JSON.stringify(submission.formContext) : null
      )
      .run()

    return new Response(
      JSON.stringify({
        success: true,
        id: result.meta.last_row_id,
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  } catch (error) {
    console.error('Error submitting feedback:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to submit feedback',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  }
}

/**
 * Handle GET request to retrieve feedback
 * Supports filtering by presentationId, slideId, feedbackType, formId, sessionId
 */
export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url)
    const presentationId = url.searchParams.get('presentationId')
    const slideId = url.searchParams.get('slideId')
    const feedbackType = url.searchParams.get('feedbackType')
    const formId = url.searchParams.get('formId')
    const sessionId = url.searchParams.get('sessionId')
    const limit = parseInt(url.searchParams.get('limit') ?? '100', 10)
    const offset = parseInt(url.searchParams.get('offset') ?? '0', 10)

    // Build query dynamically
    let query = 'SELECT * FROM feedback WHERE 1=1'
    const params: (string | number)[] = []

    if (presentationId) {
      query += ' AND presentation_id = ?'
      params.push(presentationId)
    }

    if (slideId) {
      query += ' AND slide_id = ?'
      params.push(slideId)
    }

    if (feedbackType) {
      query += ' AND feedback_type = ?'
      params.push(feedbackType)
    }

    if (formId) {
      query += ' AND form_id = ?'
      params.push(formId)
    }

    if (sessionId) {
      query += ' AND session_id = ?'
      params.push(sessionId)
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'
    params.push(limit, offset)

    const stmt = context.env.DB.prepare(query)
    const results = await stmt.bind(...params).all()

    // Transform snake_case to camelCase for frontend
    const feedback = results.results.map((row: Record<string, unknown>) => ({
      id: row.id,
      presentationId: row.presentation_id,
      slideId: row.slide_id,
      slideIndex: row.slide_index,
      feedbackText: row.feedback_text,
      reviewerName: row.reviewer_name,
      reviewerEmail: row.reviewer_email,
      feedbackType: row.feedback_type,
      createdAt: row.created_at,
      metadata: row.metadata ? JSON.parse(row.metadata as string) : null,
      formId: row.form_id ?? 'default',
      sessionId: row.session_id,
      questionHash: row.question_hash,
      formContext: row.form_context ? JSON.parse(row.form_context as string) : null,
    }))

    return new Response(JSON.stringify(feedback), {
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    })
  } catch (error) {
    console.error('Error fetching feedback:', error)
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch feedback',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  }
}
