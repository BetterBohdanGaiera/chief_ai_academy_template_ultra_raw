/**
 * Agent SDK Type Definitions
 * TypeScript interfaces for the AI-powered form and feedback system
 */

// ============================================
// Form Types
// ============================================

/**
 * Form types for categorizing different form purposes
 */
export type FormType = 'onboarding' | 'feedback' | 'discovery' | 'custom'

/**
 * Form status for tracking completion
 */
export type FormStatus = 'active' | 'completed' | 'abandoned'

/**
 * Context you provide for each question to guide Claude's clarifying questions
 */
export interface QuestionContext {
  /** Main topic being explored */
  topic: string
  /** Background information for context */
  background: string
  /** What we want to learn from this question */
  desiredOutcome: string
  /** Hints for areas Claude should clarify (ask naturally, don't force) */
  clarifyingHints?: string[]
}

/**
 * A question with its context for AI-guided conversation
 */
export interface QuestionWithContext {
  /** Unique identifier for this question */
  id: string
  /** The primary question to ask the user */
  primaryQuestion: string
  /** Optional subtitle for additional context */
  subtitle?: string
  /** Badge/label for the topic */
  topicBadge?: string
  /** Context to guide Claude's clarifying questions */
  context: QuestionContext
  /** Optional placeholder text for input */
  placeholder?: string
}

/**
 * Form definition containing all questions and metadata
 */
export interface FormDefinition {
  /** Unique identifier for the form */
  id: string
  /** Type of form (onboarding, feedback, discovery, custom) */
  type: FormType
  /** Display title for the form */
  title: string
  /** Optional description */
  description?: string
  /** Questions with their contexts */
  questions: QuestionWithContext[]
  /** Additional metadata */
  metadata?: Record<string, unknown>
  /** Creation timestamp */
  createdAt?: string
}

// ============================================
// Conversation Types
// ============================================

/**
 * Role in a conversation
 */
export type ConversationRole = 'user' | 'assistant'

/**
 * A message in the conversation
 */
export interface ConversationMessage {
  /** Role of the message sender */
  role: ConversationRole
  /** Message content */
  content: string
  /** Timestamp of the message */
  timestamp: string
  /** Optional message ID */
  id?: string
}

/**
 * Metadata about the conversation
 */
export interface ConversationMetadata {
  /** Total number of exchanges */
  totalExchanges: number
  /** Whether AI generated follow-up questions */
  aiGenerated: boolean
  /** Reason for completion if done */
  completionReason?: 'comprehensive' | 'max_reached' | 'user_done' | 'error'
  /** Start timestamp */
  startedAt: string
  /** End timestamp if completed */
  completedAt?: string
}

// ============================================
// Session Types
// ============================================

/**
 * Agent session with form context
 */
export interface AgentSession {
  /** Unique session identifier */
  sessionId: string
  /** Associated form ID */
  formId: string
  /** Form type */
  formType: FormType
  /** Current question being discussed */
  currentQuestionId: string
  /** Index of current question in the form */
  currentQuestionIndex: number
  /** Context for the current question */
  questionContext: QuestionContext
  /** Conversation messages for current question */
  messages: ConversationMessage[]
  /** Answers gathered so far (keyed by question ID) */
  gatheredAnswers: Record<string, GatheredAnswer>
  /** Session status */
  status: FormStatus
  /** Session metadata */
  metadata: ConversationMetadata
  /** Creation timestamp */
  createdAt: string
  /** Last activity timestamp */
  updatedAt: string
}

/**
 * A gathered answer for a single question
 */
export interface GatheredAnswer {
  /** Question ID */
  questionId: string
  /** Primary answer from user */
  primaryAnswer: string
  /** Follow-up conversation if any */
  followUpExchanges: ConversationMessage[]
  /** Extracted insights (parsed by AI) */
  extractedInsights?: Record<string, unknown>
  /** Timestamp of the answer */
  answeredAt: string
}

// ============================================
// API Types
// ============================================

/**
 * Request to start or continue an agent conversation
 */
export interface AgentConversationRequest {
  /** Form ID to use */
  formId: string
  /** Session ID (if continuing existing session) */
  sessionId?: string
  /** Question ID to discuss */
  questionId: string
  /** User's message */
  userMessage: string
  /** Conversation history (if not using session) */
  conversationHistory?: ConversationMessage[]
}

/**
 * Response from agent conversation API
 */
export interface AgentConversationResponse {
  /** Whether conversation should continue */
  shouldContinue: boolean
  /** AI's response message */
  response?: string
  /** Completion reason if done */
  completionReason?: 'comprehensive' | 'max_reached' | 'user_done' | 'error'
  /** Updated session ID */
  sessionId: string
  /** Error message if any */
  error?: string
  /** Whether to move to next question */
  moveToNextQuestion?: boolean
  /** Extracted answer data */
  extractedAnswer?: GatheredAnswer
}

/**
 * Request to generate a presentation from answers
 */
export interface PresentationGenerationRequest {
  /** Session ID with completed answers */
  sessionId: string
  /** Form ID that was completed */
  formId: string
  /** All gathered answers */
  gatheredAnswers: Record<string, GatheredAnswer>
  /** Additional generation options */
  options?: {
    style?: 'professional' | 'casual' | 'educational'
    length?: 'short' | 'medium' | 'long'
    focusAreas?: string[]
  }
}

/**
 * Response from presentation generation
 */
export interface PresentationGenerationResponse {
  /** Whether generation was successful */
  success: boolean
  /** Generated presentation ID */
  presentationId?: string
  /** Preview data */
  preview?: {
    title: string
    slideCount: number
    estimatedDuration: string
    keyTopics: string[]
  }
  /** Error message if failed */
  error?: string
}

// ============================================
// Storage Types
// ============================================

/**
 * Database record for form responses
 */
export interface FormResponseRecord {
  id: number
  sessionId: string
  formId: string
  formType: FormType
  questionId: string
  primaryAnswer: string
  conversationThread: string // JSON serialized ConversationMessage[]
  extractedInsights: string | null // JSON serialized
  status: FormStatus
  createdAt: string
  updatedAt: string
}

/**
 * Database record for agent sessions
 */
export interface AgentSessionRecord {
  id: number
  sessionId: string
  formId: string
  formType: FormType
  currentQuestionIndex: number
  gatheredAnswers: string // JSON serialized Record<string, GatheredAnswer>
  status: FormStatus
  metadata: string // JSON serialized ConversationMetadata
  createdAt: string
  updatedAt: string
}

// ============================================
// Utility Types
// ============================================

/**
 * Helper type for creating forms
 */
export type CreateFormInput = Omit<FormDefinition, 'createdAt'>

/**
 * Helper type for updating sessions
 */
export type UpdateSessionInput = Partial<
  Pick<AgentSession, 'currentQuestionId' | 'currentQuestionIndex' | 'messages' | 'gatheredAnswers' | 'status' | 'metadata'>
>

/**
 * Client-side session state for UI
 */
export interface ClientSessionState {
  sessionId: string | null
  formId: string | null
  currentQuestionIndex: number
  totalQuestions: number
  isLoading: boolean
  isComplete: boolean
  error: string | null
}
