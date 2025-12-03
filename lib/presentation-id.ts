/**
 * Presentation ID Utilities
 * Utilities for generating and managing unique presentation identifiers
 *
 * Priority for getting presentation ID:
 * 1. Environment variable (NEXT_PUBLIC_PRESENTATION_ID)
 * 2. Session config presentation ID
 * 3. localStorage (for backward compatibility)
 * 4. Generate new ID
 */

import { sessionConfig } from '@/config/session'

/**
 * Generate a unique presentation ID
 *
 * Format: pres-{timestamp}-{random}
 * Example: pres-1701234567890-abc123def
 *
 * @returns Unique presentation ID string
 */
export function generatePresentationId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 11)
  return `pres-${timestamp}-${random}`
}

/**
 * Get the configured presentation ID from environment
 *
 * @returns Presentation ID from env/config, or null if not set
 */
function getConfiguredPresentationId(): string | null {
  // Check for environment variable (available at build time)
  const envId =
    process.env.NEXT_PUBLIC_PRESENTATION_ID || process.env.PRESENTATION_ID

  if (envId) {
    return envId
  }

  // Check session config - if sessionId is not default, use it as presentation ID prefix
  if (sessionConfig.sessionId !== 'default-session') {
    return `pres-${sessionConfig.sessionId}`
  }

  return null
}

/**
 * Get or create a presentation ID for a module
 *
 * Priority:
 * 1. Environment variable (NEXT_PUBLIC_PRESENTATION_ID)
 * 2. Session config-based ID
 * 3. localStorage (for backward compatibility)
 * 4. Generate new ID
 *
 * @param moduleId - Module identifier (e.g., 'm1', 'm2')
 * @returns Presentation ID string
 */
export function getPresentationId(moduleId: string): string {
  // Priority 1 & 2: Check for configured ID
  const configuredId = getConfiguredPresentationId()
  if (configuredId) {
    // Append module ID for multi-module presentations
    return `${configuredId}-${moduleId}`
  }

  // Only run localStorage logic on client side
  if (typeof window === 'undefined') {
    return generatePresentationId()
  }

  // Priority 3: localStorage (backward compatibility)
  const storageKey = `presentation-id-${moduleId}`

  try {
    const existingId = localStorage.getItem(storageKey)

    if (existingId) {
      return existingId
    }

    // Priority 4: Generate new ID
    const newId = generatePresentationId()
    localStorage.setItem(storageKey, newId)
    return newId
  } catch {
    // localStorage may not be available
    return generatePresentationId()
  }
}

/**
 * Set a specific presentation ID for a module
 *
 * Useful when deploying a presentation with a predetermined ID.
 *
 * @param moduleId - Module identifier
 * @param presentationId - Presentation ID to set
 */
export function setPresentationId(moduleId: string, presentationId: string): void {
  if (typeof window === 'undefined') {
    return
  }

  const storageKey = `presentation-id-${moduleId}`

  try {
    localStorage.setItem(storageKey, presentationId)
  } catch {
    // localStorage may not be available
  }
}

/**
 * Clear a presentation ID for a module
 *
 * @param moduleId - Module identifier
 */
export function clearPresentationId(moduleId: string): void {
  if (typeof window === 'undefined') {
    return
  }

  const storageKey = `presentation-id-${moduleId}`

  try {
    localStorage.removeItem(storageKey)
  } catch {
    // localStorage may not be available
  }
}

/**
 * Validate a presentation ID format
 *
 * @param id - ID to validate
 * @returns True if valid format
 */
export function isValidPresentationId(id: string): boolean {
  // Pattern: pres-{timestamp}-{random}
  const pattern = /^pres-\d{13,}-[a-z0-9]{9}$/
  return pattern.test(id)
}
