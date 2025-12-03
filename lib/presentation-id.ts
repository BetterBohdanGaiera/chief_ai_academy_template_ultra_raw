/**
 * Presentation ID Utilities
 * Utilities for generating and managing unique presentation identifiers
 */

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
 * Get or create a presentation ID for a module
 *
 * Uses localStorage to persist the ID across sessions.
 * If no ID exists, generates a new one.
 *
 * @param moduleId - Module identifier (e.g., 'm1', 'm2')
 * @returns Presentation ID string
 */
export function getPresentationId(moduleId: string): string {
  // Only run on client side
  if (typeof window === 'undefined') {
    return generatePresentationId()
  }

  const storageKey = `presentation-id-${moduleId}`

  try {
    const existingId = localStorage.getItem(storageKey)

    if (existingId) {
      return existingId
    }

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
