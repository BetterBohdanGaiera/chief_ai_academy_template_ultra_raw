/**
 * Cloudflare Pages Function for MongoDB Feedback API
 *
 * Uses native MongoDB driver (requires nodejs_compat_v2 in wrangler.toml)
 * See: https://alexbevi.com/blog/2025/03/25/cloudflare-workers-and-mongodb/
 */

import { MongoClient, type Db } from 'mongodb'

// Types (mirrored from types/mongodb-feedback.ts for edge compatibility)
type F1FeedbackType = 'positioning' | 'brand-tone' | 'lead-strategy' | 'general' | 'custom'

interface AnswerOption {
  id: string
  label: string
  description?: string
}

interface SlideContentMetadata {
  title: string
  questionPrompt: string
  questionNumber?: number
  totalQuestions?: number
  answerOptions: AnswerOption[]
}

interface UserResponse {
  selectedOptionId: string | null
  selectedOptionLabel: string | null
  customText?: string
  additionalFeedback?: string
}

interface MongoFeedbackSubmission {
  presentationId: string
  moduleId: string
  slideId: string
  formId: string
  sessionId: string
  slideContent: SlideContentMetadata
  userResponse: UserResponse
  reviewerName?: string
  reviewerEmail?: string
  feedbackType: F1FeedbackType
}

interface MongoFeedbackBatchSubmission {
  common: {
    presentationId: string
    moduleId: string
    formId: string
    sessionId: string
    reviewerName?: string
    reviewerEmail?: string
  }
  questions: Array<{
    slideId: string
    slideContent: SlideContentMetadata
    userResponse: UserResponse
    feedbackType: F1FeedbackType
  }>
  additionalFeedback?: string
}

/**
 * Secrets Store binding interface
 */
interface SecretsStoreBinding {
  get(): Promise<string>
}

/**
 * Environment bindings
 * - MONGODB: Secrets Store binding (production)
 * - MONGODB_URI: Direct env var (local dev with .dev.vars)
 */
interface Env {
  MONGODB?: SecretsStoreBinding
  MONGODB_URI?: string
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
 * Database and collection names
 */
const DATABASE_NAME = 'feedback_db'
const COLLECTION_NAME = 'feedback_test'

/**
 * Get MongoDB URI from environment
 * Supports both Secrets Store (production) and direct env var (local dev)
 * Prioritizes direct env var for local development
 */
async function getMongoUri(env: Env): Promise<string> {
  // Direct env var (local dev with .dev.vars) - check first for local dev priority
  if (env.MONGODB_URI) {
    return env.MONGODB_URI
  }
  // Secrets Store binding (production)
  if (env.MONGODB && typeof env.MONGODB.get === 'function') {
    return await env.MONGODB.get()
  }
  throw new Error('MONGODB_URI not configured. Set MONGODB in Secrets Store or MONGODB_URI in .dev.vars')
}

/**
 * Get MongoDB client with connection
 * Creates fresh connection per request for serverless compatibility
 */
async function getClient(env: Env): Promise<MongoClient> {
  const mongoUri = await getMongoUri(env)
  const client = new MongoClient(mongoUri, {
    maxPoolSize: 1,
    minPoolSize: 0,
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  })
  await client.connect()
  return client
}

/**
 * Validate single feedback submission
 */
function validateSubmission(data: unknown): data is MongoFeedbackSubmission {
  if (!data || typeof data !== 'object') return false

  const submission = data as Record<string, unknown>

  const requiredFields = [
    'presentationId',
    'moduleId',
    'slideId',
    'formId',
    'sessionId',
    'slideContent',
    'userResponse',
    'feedbackType',
  ]

  for (const field of requiredFields) {
    if (!(field in submission)) return false
  }

  const slideContent = submission.slideContent as Record<string, unknown>
  if (
    !slideContent ||
    typeof slideContent.title !== 'string' ||
    typeof slideContent.questionPrompt !== 'string' ||
    !Array.isArray(slideContent.answerOptions)
  ) {
    return false
  }

  return true
}

/**
 * Validate batch submission
 */
function validateBatchSubmission(data: unknown): data is MongoFeedbackBatchSubmission {
  if (!data || typeof data !== 'object') return false

  const batch = data as Record<string, unknown>

  const common = batch.common as Record<string, unknown>
  if (
    !common ||
    typeof common.presentationId !== 'string' ||
    typeof common.moduleId !== 'string' ||
    typeof common.formId !== 'string' ||
    typeof common.sessionId !== 'string'
  ) {
    return false
  }

  if (!Array.isArray(batch.questions) || batch.questions.length === 0) {
    return false
  }

  for (const question of batch.questions) {
    const q = question as Record<string, unknown>
    if (
      typeof q.slideId !== 'string' ||
      !q.slideContent ||
      !q.userResponse ||
      typeof q.feedbackType !== 'string'
    ) {
      return false
    }
  }

  return true
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
  let client: MongoClient | null = null
  try {
    const body = await context.request.json()
    const now = new Date()
    client = await getClient(context.env)
    const db = client.db(DATABASE_NAME)
    const collection = db.collection(COLLECTION_NAME)

    // Determine submission type
    const isBatch = 'common' in body && 'questions' in body

    if (isBatch) {
      // Batch submission
      if (!validateBatchSubmission(body)) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Invalid batch submission format. Check required fields.',
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          }
        )
      }

      const batch = body as MongoFeedbackBatchSubmission

      // Create documents for each question
      const documents = batch.questions.map((question) => ({
        presentationId: batch.common.presentationId,
        moduleId: batch.common.moduleId,
        formId: batch.common.formId,
        sessionId: batch.common.sessionId,
        reviewerName: batch.common.reviewerName,
        reviewerEmail: batch.common.reviewerEmail,
        slideId: question.slideId,
        slideContent: question.slideContent,
        userResponse: {
          ...question.userResponse,
          additionalFeedback: batch.additionalFeedback,
        },
        feedbackType: question.feedbackType,
        createdAt: now,
        updatedAt: now,
      }))

      // Insert all documents
      const result = await collection.insertMany(documents)

      return new Response(
        JSON.stringify({
          success: true,
          insertedCount: result.insertedCount,
          documentIds: Object.values(result.insertedIds).map((id) => id.toString()),
        }),
        {
          status: 201,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      )
    } else {
      // Single submission
      if (!validateSubmission(body)) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Invalid submission format. Check required fields.',
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          }
        )
      }

      const document = {
        ...body,
        createdAt: now,
        updatedAt: now,
      }

      const result = await collection.insertOne(document)

      return new Response(
        JSON.stringify({
          success: true,
          documentId: result.insertedId.toString(),
        }),
        {
          status: 201,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      )
    }
  } catch (error) {
    console.error('Error submitting feedback to MongoDB:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to submit feedback',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  } finally {
    if (client) await client.close().catch(() => {})
  }
}

/**
 * Handle GET request to retrieve feedback
 */
export const onRequestGet: PagesFunction<Env> = async (context) => {
  let client: MongoClient | null = null
  try {
    const url = new URL(context.request.url)
    client = await getClient(context.env)
    const db = client.db(DATABASE_NAME)
    const collection = db.collection(COLLECTION_NAME)

    // Build filter from query parameters
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = {}

    const presentationId = url.searchParams.get('presentationId')
    if (presentationId) filter.presentationId = presentationId

    const moduleId = url.searchParams.get('moduleId')
    if (moduleId) filter.moduleId = moduleId

    const slideId = url.searchParams.get('slideId')
    if (slideId) filter.slideId = slideId

    const formId = url.searchParams.get('formId')
    if (formId) filter.formId = formId

    const sessionId = url.searchParams.get('sessionId')
    if (sessionId) filter.sessionId = sessionId

    const feedbackType = url.searchParams.get('feedbackType')
    if (feedbackType) filter.feedbackType = feedbackType

    const startDate = url.searchParams.get('startDate')
    const endDate = url.searchParams.get('endDate')
    if (startDate || endDate) {
      filter.createdAt = {}
      if (startDate) filter.createdAt.$gte = new Date(startDate)
      if (endDate) filter.createdAt.$lte = new Date(endDate)
    }

    const limit = parseInt(url.searchParams.get('limit') ?? '100', 10)
    const offset = parseInt(url.searchParams.get('offset') ?? '0', 10)

    // Query MongoDB
    const documents = await collection
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .toArray()

    // Get total count
    const totalCount = await collection.countDocuments(filter)

    return new Response(
      JSON.stringify({
        success: true,
        data: documents,
        totalCount,
      }),
      {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  } catch (error) {
    console.error('Error retrieving feedback from MongoDB:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to retrieve feedback',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  } finally {
    if (client) await client.close().catch(() => {})
  }
}
