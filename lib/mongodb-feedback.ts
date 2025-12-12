/**
 * MongoDB Feedback Client
 *
 * Server-side MongoDB connection and CRUD operations for feedback collection.
 * Uses connection pooling optimized for serverless environments.
 */

import { MongoClient, Db, Collection, ObjectId, Filter } from 'mongodb'
import type {
  MongoFeedbackDocument,
  MongoFeedbackSubmission,
  MongoFeedbackBatchSubmission,
  FeedbackQueryFilters,
} from '@/types/mongodb-feedback'

// MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI

// Target database and collection
const DATABASE_NAME = 'feedback_db'
const COLLECTION_NAME = 'feedback_test'

// Connection cache for serverless optimization
let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

/**
 * Get MongoDB client with connection pooling
 *
 * Optimized for serverless environments - reuses connections across invocations.
 */
export async function getMongoClient(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set')
  }

  const client = new MongoClient(MONGODB_URI, {
    maxPoolSize: 10,
    minPoolSize: 1,
    maxIdleTimeMS: 30000,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  })

  await client.connect()
  cachedClient = client

  return client
}

/**
 * Get MongoDB database instance
 */
export async function getDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb
  }

  const client = await getMongoClient()
  cachedDb = client.db(DATABASE_NAME)

  return cachedDb
}

/**
 * Get the feedback collection
 */
export async function getFeedbackCollection(): Promise<Collection<MongoFeedbackDocument>> {
  const db = await getDatabase()
  return db.collection<MongoFeedbackDocument>(COLLECTION_NAME)
}

/**
 * Insert a single feedback document
 *
 * @param submission - Feedback submission data (without timestamps)
 * @returns Inserted document ID
 */
export async function insertFeedback(
  submission: MongoFeedbackSubmission
): Promise<string> {
  const collection = await getFeedbackCollection()

  const document: Omit<MongoFeedbackDocument, '_id'> = {
    ...submission,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const result = await collection.insertOne(document as MongoFeedbackDocument)
  return result.insertedId.toString()
}

/**
 * Insert multiple feedback documents (batch submission)
 *
 * Used for multi-question feedback flows where all answers are submitted together.
 *
 * @param batchSubmission - Batch submission with common metadata and individual questions
 * @returns Array of inserted document IDs
 */
export async function insertFeedbackBatch(
  batchSubmission: MongoFeedbackBatchSubmission
): Promise<string[]> {
  const collection = await getFeedbackCollection()
  const now = new Date()

  const documents: Omit<MongoFeedbackDocument, '_id'>[] = batchSubmission.questions.map(
    (question) => ({
      presentationId: batchSubmission.common.presentationId,
      moduleId: batchSubmission.common.moduleId,
      formId: batchSubmission.common.formId,
      sessionId: batchSubmission.common.sessionId,
      reviewerName: batchSubmission.common.reviewerName,
      reviewerEmail: batchSubmission.common.reviewerEmail,
      slideId: question.slideId,
      slideContent: question.slideContent,
      userResponse: {
        ...question.userResponse,
        additionalFeedback: batchSubmission.additionalFeedback,
      },
      feedbackType: question.feedbackType,
      createdAt: now,
      updatedAt: now,
    })
  )

  const result = await collection.insertMany(documents as MongoFeedbackDocument[])
  return Object.values(result.insertedIds).map((id) => id.toString())
}

/**
 * Build MongoDB filter from query filters
 */
function buildFilter(filters: FeedbackQueryFilters): Filter<MongoFeedbackDocument> {
  const mongoFilter: Filter<MongoFeedbackDocument> = {}

  if (filters.presentationId) {
    mongoFilter.presentationId = filters.presentationId
  }
  if (filters.moduleId) {
    mongoFilter.moduleId = filters.moduleId
  }
  if (filters.slideId) {
    mongoFilter.slideId = filters.slideId
  }
  if (filters.formId) {
    mongoFilter.formId = filters.formId
  }
  if (filters.sessionId) {
    mongoFilter.sessionId = filters.sessionId
  }
  if (filters.feedbackType) {
    mongoFilter.feedbackType = filters.feedbackType
  }

  // Date range filtering
  if (filters.startDate || filters.endDate) {
    mongoFilter.createdAt = {}
    if (filters.startDate) {
      (mongoFilter.createdAt as Record<string, Date>).$gte = new Date(filters.startDate)
    }
    if (filters.endDate) {
      (mongoFilter.createdAt as Record<string, Date>).$lte = new Date(filters.endDate)
    }
  }

  return mongoFilter
}

/**
 * Query feedback documents with filters
 *
 * @param filters - Query filters
 * @returns Array of matching feedback documents
 */
export async function queryFeedback(
  filters: FeedbackQueryFilters = {}
): Promise<MongoFeedbackDocument[]> {
  const collection = await getFeedbackCollection()
  const mongoFilter = buildFilter(filters)

  let cursor = collection.find(mongoFilter).sort({ createdAt: -1 })

  if (filters.offset) {
    cursor = cursor.skip(filters.offset)
  }
  if (filters.limit) {
    cursor = cursor.limit(filters.limit)
  }

  return cursor.toArray()
}

/**
 * Count feedback documents matching filters
 *
 * @param filters - Query filters
 * @returns Count of matching documents
 */
export async function countFeedback(filters: FeedbackQueryFilters = {}): Promise<number> {
  const collection = await getFeedbackCollection()
  const mongoFilter = buildFilter(filters)

  return collection.countDocuments(mongoFilter)
}

/**
 * Get a single feedback document by ID
 *
 * @param documentId - MongoDB document ID
 * @returns Feedback document or null
 */
export async function getFeedbackById(
  documentId: string
): Promise<MongoFeedbackDocument | null> {
  const collection = await getFeedbackCollection()

  return collection.findOne({ _id: new ObjectId(documentId) as unknown as string })
}

/**
 * Get all feedback for a specific session (grouped by formId + sessionId)
 *
 * Useful for retrieving all answers in a multi-question feedback flow.
 *
 * @param formId - Form identifier
 * @param sessionId - Session identifier
 * @returns Array of feedback documents for the session
 */
export async function getFeedbackBySession(
  formId: string,
  sessionId: string
): Promise<MongoFeedbackDocument[]> {
  return queryFeedback({ formId, sessionId })
}

/**
 * Get option distribution statistics for a slide
 *
 * Returns counts of how many times each option was selected.
 *
 * @param slideId - Slide identifier
 * @returns Object mapping option IDs to selection counts
 */
export async function getOptionDistribution(
  slideId: string
): Promise<Record<string, number>> {
  const collection = await getFeedbackCollection()

  const pipeline = [
    { $match: { slideId } },
    {
      $group: {
        _id: '$userResponse.selectedOptionId',
        count: { $sum: 1 },
      },
    },
  ]

  const results = await collection.aggregate(pipeline).toArray()

  return results.reduce(
    (acc, item) => {
      if (item._id) {
        acc[item._id] = item.count
      }
      return acc
    },
    {} as Record<string, number>
  )
}

/**
 * Close MongoDB connection
 *
 * Call this during graceful shutdown.
 */
export async function closeConnection(): Promise<void> {
  if (cachedClient) {
    await cachedClient.close()
    cachedClient = null
    cachedDb = null
  }
}
