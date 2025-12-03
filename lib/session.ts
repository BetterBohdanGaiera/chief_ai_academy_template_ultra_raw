/**
 * Session Utilities
 * Utilities for managing session configuration and IDs
 */

import {
  sessionConfig,
  generateSessionId as generateId,
  type SessionConfig,
} from '@/config/session'

// Storage key for persisted session ID
const SESSION_STORAGE_KEY = 'feedback-session-id'

/**
 * Get the current session ID
 *
 * Priority:
 * 1. Environment variable (NEXT_PUBLIC_SESSION_ID)
 * 2. Session config
 * 3. localStorage (for backward compatibility)
 * 4. Generate new ID
 *
 * @returns Session ID string
 */
export function getSessionId(): string {
  // Priority 1 & 2: Config (which reads from env)
  if (sessionConfig.sessionId !== 'default-session') {
    return sessionConfig.sessionId
  }

  // Priority 3: localStorage (client-side only)
  if (typeof window !== 'undefined') {
    try {
      const storedId = localStorage.getItem(SESSION_STORAGE_KEY)
      if (storedId) {
        return storedId
      }
    } catch {
      // localStorage may not be available
    }
  }

  // Priority 4: Return default session ID
  return sessionConfig.sessionId
}

/**
 * Get the complete session configuration
 *
 * @returns SessionConfig object
 */
export function getSessionConfig(): SessionConfig {
  return {
    ...sessionConfig,
    sessionId: getSessionId(),
  }
}

/**
 * Set a session ID (client-side persistence)
 *
 * @param sessionId - Session ID to persist
 */
export function setSessionId(sessionId: string): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    localStorage.setItem(SESSION_STORAGE_KEY, sessionId)
  } catch {
    // localStorage may not be available
  }
}

/**
 * Clear the persisted session ID
 */
export function clearSessionId(): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    localStorage.removeItem(SESSION_STORAGE_KEY)
  } catch {
    // localStorage may not be available
  }
}

/**
 * Generate a new unique session ID
 *
 * @param prefix - Optional prefix for the session ID
 * @returns Unique session ID string
 */
export function generateSessionId(prefix?: string): string {
  return generateId(prefix)
}

/**
 * Validate a session configuration object
 *
 * @param config - Configuration object to validate
 * @returns True if valid
 */
export function validateSessionConfig(config: unknown): config is SessionConfig {
  if (!config || typeof config !== 'object') {
    return false
  }

  const c = config as Record<string, unknown>

  // Required fields
  if (typeof c.sessionId !== 'string' || !c.sessionId) {
    return false
  }

  if (typeof c.sessionName !== 'string' || !c.sessionName) {
    return false
  }

  if (typeof c.createdAt !== 'string' || !c.createdAt) {
    return false
  }

  if (typeof c.presentationTitle !== 'string' || !c.presentationTitle) {
    return false
  }

  // Optional fields
  if (c.description !== undefined && typeof c.description !== 'string') {
    return false
  }

  if (c.databaseName !== undefined && typeof c.databaseName !== 'string') {
    return false
  }

  return true
}

/**
 * Validate session ID format
 *
 * @param id - ID to validate
 * @returns True if valid format
 */
export function isValidSessionId(id: string): boolean {
  // Allow various formats:
  // - session-{timestamp}-{random}
  // - custom-prefix-{timestamp}-{random}
  // - simple strings like 'workshop-day-1'
  // Must be at least 3 characters and contain only alphanumeric, hyphen, underscore
  const pattern = /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,}$/
  return pattern.test(id)
}

/**
 * Generate a question hash for grouping feedback
 *
 * Creates a simple hash of the question text for grouping
 * responses to the same question across different sessions.
 *
 * @param question - Question text to hash
 * @returns Hash string
 */
export function generateQuestionHash(question: string): string {
  // Simple hash function for browser compatibility
  let hash = 0
  const str = question.trim().toLowerCase()

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }

  // Convert to positive hex string
  return 'q-' + Math.abs(hash).toString(16)
}
