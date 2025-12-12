/**
 * Agent SDK Session Store
 * Client-side session management for agent conversations
 */

import type {
  AgentSession,
  ConversationMessage,
  GatheredAnswer,
  FormStatus,
  FormType,
  QuestionContext,
  ClientSessionState,
  UpdateSessionInput,
  ConversationMetadata,
} from './types'

// ============================================
// Storage Keys
// ============================================

const STORAGE_PREFIX = 'agent_session_'
const ACTIVE_SESSION_KEY = 'agent_active_session'

// ============================================
// Session ID Generation
// ============================================

/**
 * Generate a unique session ID
 */
export function generateSessionId(): string {
  const timestamp = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 9)
  return `sess_${timestamp}_${randomPart}`
}

// ============================================
// Client-Side Session Store
// ============================================

/**
 * Get a session from localStorage
 */
export function getSession(sessionId: string): AgentSession | null {
  if (typeof window === 'undefined') return null

  try {
    const data = localStorage.getItem(`${STORAGE_PREFIX}${sessionId}`)
    if (!data) return null
    return JSON.parse(data) as AgentSession
  } catch (error) {
    console.error('Error reading session from localStorage:', error)
    return null
  }
}

/**
 * Save a session to localStorage
 */
export function saveSession(session: AgentSession): void {
  if (typeof window === 'undefined') return

  try {
    const data = JSON.stringify(session)
    localStorage.setItem(`${STORAGE_PREFIX}${session.sessionId}`, data)
    // Also track as active session
    localStorage.setItem(ACTIVE_SESSION_KEY, session.sessionId)
  } catch (error) {
    console.error('Error saving session to localStorage:', error)
  }
}

/**
 * Delete a session from localStorage
 */
export function deleteSession(sessionId: string): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${sessionId}`)
    // Clear active session if it matches
    const activeSessionId = localStorage.getItem(ACTIVE_SESSION_KEY)
    if (activeSessionId === sessionId) {
      localStorage.removeItem(ACTIVE_SESSION_KEY)
    }
  } catch (error) {
    console.error('Error deleting session from localStorage:', error)
  }
}

/**
 * Get the currently active session ID
 */
export function getActiveSessionId(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(ACTIVE_SESSION_KEY)
}

/**
 * Get the currently active session
 */
export function getActiveSession(): AgentSession | null {
  const sessionId = getActiveSessionId()
  if (!sessionId) return null
  return getSession(sessionId)
}

/**
 * List all sessions for a specific form
 */
export function getSessionsByForm(formId: string): AgentSession[] {
  if (typeof window === 'undefined') return []

  const sessions: AgentSession[] = []

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith(STORAGE_PREFIX)) {
        const data = localStorage.getItem(key)
        if (data) {
          const session = JSON.parse(data) as AgentSession
          if (session.formId === formId) {
            sessions.push(session)
          }
        }
      }
    }
  } catch (error) {
    console.error('Error listing sessions:', error)
  }

  // Sort by updatedAt descending
  return sessions.sort((a, b) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  )
}

// ============================================
// Session Creation and Updates
// ============================================

/**
 * Create a new agent session
 */
export function createSession(
  formId: string,
  formType: FormType,
  firstQuestion: {
    id: string
    context: QuestionContext
  }
): AgentSession {
  const now = new Date().toISOString()
  const session: AgentSession = {
    sessionId: generateSessionId(),
    formId,
    formType,
    currentQuestionId: firstQuestion.id,
    currentQuestionIndex: 0,
    questionContext: firstQuestion.context,
    messages: [],
    gatheredAnswers: {},
    status: 'active',
    metadata: {
      totalExchanges: 0,
      aiGenerated: false,
      startedAt: now,
    },
    createdAt: now,
    updatedAt: now,
  }

  saveSession(session)
  return session
}

/**
 * Update an existing session
 */
export function updateSession(
  sessionId: string,
  updates: UpdateSessionInput
): AgentSession | null {
  const session = getSession(sessionId)
  if (!session) return null

  const updatedSession: AgentSession = {
    ...session,
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  saveSession(updatedSession)
  return updatedSession
}

/**
 * Add a message to the session
 */
export function addMessage(
  sessionId: string,
  message: Omit<ConversationMessage, 'timestamp' | 'id'>
): AgentSession | null {
  const session = getSession(sessionId)
  if (!session) return null

  const newMessage: ConversationMessage = {
    ...message,
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`,
    timestamp: new Date().toISOString(),
  }

  const updatedMetadata: ConversationMetadata = {
    ...session.metadata,
    totalExchanges: session.metadata.totalExchanges + 1,
    aiGenerated: message.role === 'assistant' ? true : session.metadata.aiGenerated,
  }

  return updateSession(sessionId, {
    messages: [...session.messages, newMessage],
    metadata: updatedMetadata,
  })
}

/**
 * Save an answer for the current question and move to next
 */
export function saveAnswer(
  sessionId: string,
  answer: Omit<GatheredAnswer, 'answeredAt'>
): AgentSession | null {
  const session = getSession(sessionId)
  if (!session) return null

  const gatheredAnswer: GatheredAnswer = {
    ...answer,
    answeredAt: new Date().toISOString(),
  }

  return updateSession(sessionId, {
    gatheredAnswers: {
      ...session.gatheredAnswers,
      [answer.questionId]: gatheredAnswer,
    },
  })
}

/**
 * Move to the next question
 */
export function moveToNextQuestion(
  sessionId: string,
  nextQuestion: {
    id: string
    index: number
    context: QuestionContext
  }
): AgentSession | null {
  return updateSession(sessionId, {
    currentQuestionId: nextQuestion.id,
    currentQuestionIndex: nextQuestion.index,
    messages: [], // Clear messages for new question
  })
}

/**
 * Mark session as completed
 */
export function completeSession(
  sessionId: string,
  completionReason: 'comprehensive' | 'max_reached' | 'user_done' | 'error' = 'comprehensive'
): AgentSession | null {
  const session = getSession(sessionId)
  if (!session) return null

  return updateSession(sessionId, {
    status: 'completed',
    metadata: {
      ...session.metadata,
      completionReason,
      completedAt: new Date().toISOString(),
    },
  })
}

/**
 * Mark session as abandoned
 */
export function abandonSession(sessionId: string): AgentSession | null {
  return updateSession(sessionId, {
    status: 'abandoned',
  })
}

// ============================================
// UI State Helpers
// ============================================

/**
 * Get client-side state for UI components
 */
export function getClientState(
  sessionId: string | null,
  totalQuestions: number
): ClientSessionState {
  if (!sessionId) {
    return {
      sessionId: null,
      formId: null,
      currentQuestionIndex: 0,
      totalQuestions,
      isLoading: false,
      isComplete: false,
      error: null,
    }
  }

  const session = getSession(sessionId)
  if (!session) {
    return {
      sessionId,
      formId: null,
      currentQuestionIndex: 0,
      totalQuestions,
      isLoading: false,
      isComplete: false,
      error: 'Session not found',
    }
  }

  return {
    sessionId: session.sessionId,
    formId: session.formId,
    currentQuestionIndex: session.currentQuestionIndex,
    totalQuestions,
    isLoading: false,
    isComplete: session.status === 'completed',
    error: null,
  }
}

/**
 * Clear all sessions (useful for development/testing)
 */
export function clearAllSessions(): void {
  if (typeof window === 'undefined') return

  const keysToRemove: string[] = []

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(STORAGE_PREFIX) || key === ACTIVE_SESSION_KEY) {
      keysToRemove.push(key)
    }
  }

  keysToRemove.forEach(key => localStorage.removeItem(key))
}
