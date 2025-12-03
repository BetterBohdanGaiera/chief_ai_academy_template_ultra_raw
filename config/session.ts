/**
 * Session Configuration
 * Configuration for deployment sessions with unique IDs and metadata
 *
 * Sessions allow multiple instances of the same presentation to be deployed
 * with independent feedback collection and tracking.
 */

/**
 * Session configuration interface
 */
export interface SessionConfig {
  /** Unique session identifier */
  sessionId: string
  /** Human-readable session name */
  sessionName: string
  /** Optional description */
  description?: string
  /** ISO timestamp of session creation */
  createdAt: string
  /** Title for this session's presentation */
  presentationTitle: string
  /** Custom D1 database name (optional) */
  databaseName?: string
}

/**
 * Get session configuration from environment or defaults
 *
 * Priority: Environment variables > defaults
 */
function getSessionConfigFromEnv(): SessionConfig {
  // Get environment variables with fallbacks
  // Note: In Next.js, only NEXT_PUBLIC_ prefixed vars are available client-side
  const sessionId =
    process.env.NEXT_PUBLIC_SESSION_ID ||
    process.env.SESSION_ID ||
    'default-session'

  const sessionName =
    process.env.NEXT_PUBLIC_SESSION_NAME ||
    process.env.SESSION_NAME ||
    'Default Session'

  const description =
    process.env.NEXT_PUBLIC_SESSION_DESCRIPTION ||
    process.env.SESSION_DESCRIPTION ||
    undefined

  const presentationTitle =
    process.env.NEXT_PUBLIC_PRESENTATION_TITLE ||
    process.env.PRESENTATION_TITLE ||
    'Presentation'

  const databaseName = process.env.D1_DATABASE_NAME || 'presentation-feedback'

  return {
    sessionId,
    sessionName,
    description,
    createdAt: new Date().toISOString(),
    presentationTitle,
    databaseName,
  }
}

/**
 * Default session configuration
 *
 * This is populated from environment variables at module load time.
 * For client-side access, use NEXT_PUBLIC_ prefixed environment variables.
 */
export const sessionConfig: SessionConfig = getSessionConfigFromEnv()

/**
 * Create a custom session configuration
 *
 * @param overrides - Partial configuration to override defaults
 * @returns Complete session configuration
 */
export function createSessionConfig(
  overrides: Partial<SessionConfig>
): SessionConfig {
  return {
    ...sessionConfig,
    ...overrides,
  }
}

/**
 * Generate a unique session ID
 *
 * Format: session-{timestamp}-{random}
 * Example: session-1701234567890-abc123def
 *
 * @param prefix - Optional prefix for the session ID
 * @returns Unique session ID string
 */
export function generateSessionId(prefix: string = 'session'): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 11)
  return `${prefix}-${timestamp}-${random}`
}
