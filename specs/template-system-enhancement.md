# Feature: Template System Enhancement for Multi-Session Presentations

## Feature Description
Enhance the presentation template to be fully template-able and extendable, enabling rapid deployment of multiple presentation sessions with independent feedback collection. The system will support:

1. **Multi-instance deployment**: Spin up different variations/sessions of presentations quickly
2. **Multi-form feedback**: Support multiple feedback forms within a single presentation, each tracked separately
3. **Automated database provisioning**: Auto-configure and attach D1 databases during deployment
4. **Session isolation**: Each deployment has its own presentation ID and feedback namespace
5. **Enhanced feedback metadata**: Track form identifiers, question context, and session metadata

## User Story
As a presentation creator,
I want to quickly spin up new presentation sessions with independent feedback collection,
So that I can run multiple workshops/sessions without manual database configuration.

As a presentation creator,
I want to add multiple feedback forms throughout my presentation,
So that I can collect targeted feedback at different points (e.g., after each section).

As a presentation creator,
I want the database to be auto-provisioned during deployment,
So that I don't have to manually create and bind D1 databases.

## Problem Statement
The current system has several limitations:

1. **Manual Database Setup**: Users must manually run `wrangler d1 create` and update `wrangler.toml` with the database ID before deployment
2. **Single Feedback Form**: The system assumes one feedback slide per presentation, with no way to distinguish between multiple feedback collection points
3. **Hardcoded Configuration**: Presentation IDs and module IDs are generated client-side with localStorage, making it difficult to track sessions across deployments
4. **No Session Concept**: No clear separation between different "sessions" or "instances" of the same presentation template
5. **Limited Feedback Filtering**: While `slide_id` exists, there's no dedicated `form_id` column to easily query feedback by form/question context

## Solution Statement
Implement a comprehensive template system with three core improvements:

### 1. Enhanced Database Schema
Add new columns to support multi-form feedback:
- `form_id`: Unique identifier for each feedback form (e.g., `feedback-intro`, `feedback-section-1`, `feedback-closing`)
- `session_id`: Identifier for the deployment session/instance
- `question_hash`: Hash of the question prompt for grouping responses to the same question
- `form_context`: JSON field storing form configuration at submission time

### 2. Session-Based Configuration
Create a deployment-time configuration system:
- `config/session.ts`: Session configuration with unique ID, name, and metadata
- Session ID embedded at build time (not client-side generated)
- Environment variable support for CI/CD pipelines

### 3. Automated Database Provisioning
Enhance deployment script to:
- Auto-create D1 database if it doesn't exist
- Auto-run migrations
- Auto-update `wrangler.toml` with database ID
- Support custom database naming per session

## Relevant Files
Use these files to implement the feature:

### Existing Files to Modify

- **`wrangler.toml`** - Add placeholder pattern for database ID, support environment-based binding
  - Currently hardcodes `database_id`, needs to support dynamic binding

- **`migrations/0001_create_feedback_table.sql`** - Add new columns for multi-form support
  - Add `form_id`, `session_id`, `question_hash`, `form_context` columns

- **`types/feedback.ts`** - Extend interfaces with new fields
  - Add `formId`, `sessionId`, `questionHash`, `formContext` to `Feedback` and `FeedbackSubmission`

- **`config/feedback.ts`** - Add form-level configuration options
  - Support multiple form configurations per presentation

- **`config/feedback-slide.ts`** - Add form ID and session ID to slide config
  - `FeedbackSlideConfig` needs `formId` field

- **`functions/api/feedback.ts`** - Update API to handle new fields
  - Add `form_id`, `session_id` to INSERT and SELECT queries
  - Add new query parameters for filtering

- **`lib/feedback-api.ts`** - Update client API with new fields
  - Add `formId`, `sessionId` to submission and query functions

- **`lib/presentation-id.ts`** - Replace localStorage approach with build-time session ID
  - Session ID should come from config, not localStorage

- **`components/slides/m1/03-feedback.tsx`** - Support form ID prop
  - Pass `formId` through to API submission

- **`scripts/deploy.sh`** - Add database auto-provisioning
  - Create D1 database if not exists
  - Run migrations automatically
  - Update wrangler.toml with database ID

### New Files to Create

- **`config/session.ts`** - Session configuration
  - Session ID, name, description, created date
  - Environment variable overrides

- **`migrations/0002_add_multi_form_support.sql`** - Migration for new columns
  - Add columns without breaking existing data

- **`scripts/init-database.sh`** - Database initialization script
  - Create database, run migrations, update config

- **`lib/session.ts`** - Session utilities
  - Get session ID from config or environment
  - Validate session configuration

- **`components/feedback/FeedbackFormWrapper.tsx`** - Reusable feedback form component
  - Configurable form ID, question, styling
  - Can be embedded anywhere in slides

- **`cli/create-session.ts`** - CLI tool to create new session
  - Generates session ID
  - Creates session config
  - Optionally provisions database

## Implementation Plan

- [x] **Phase 1: Database Schema Enhancement** - Add multi-form support columns and migration
  - Status: Completed
  - Comments: Created migration 0002 with form_id, session_id, question_hash, form_context columns. Updated migration 0001 to include columns for fresh deployments.

- [x] **Phase 2: Session Configuration System** - Create session-based configuration with build-time IDs
  - Status: Completed
  - Comments: Created config/session.ts and lib/session.ts. Updated lib/presentation-id.ts to prioritize session config over localStorage.

- [x] **Phase 3: API & Type Updates** - Update feedback API and TypeScript types for new fields
  - Status: Completed
  - Comments: Updated types/feedback.ts, functions/api/feedback.ts, and lib/feedback-api.ts with new fields and filtering support.

- [x] **Phase 4: Automated Database Provisioning** - Enhance deploy script with auto-provisioning
  - Status: Completed
  - Comments: Created scripts/init-database.sh. Updated scripts/deploy.sh with --skip-db-init and --db-name flags. Updated wrangler.toml comments.

- [x] **Phase 5: Component Updates** - Update feedback components to support form IDs
  - Status: Completed
  - Comments: Created FeedbackFormWrapper component, updated 03-feedback.tsx, created 04-section-feedback.tsx example, added form presets.

- [x] **Phase 6: CLI Tooling** - Create session initialization CLI
  - Status: Completed
  - Comments: Created cli/create-session.ts, added npm scripts for session and database management.

## Step by Step Tasks

### Phase 1: Database Schema Enhancement

- [x] **Create migration 0002 for multi-form support** - Add `form_id`, `session_id`, `question_hash`, `form_context` columns
  - Status: Completed
  - Comments: Created migrations/0002_add_multi_form_support.sql with ALTER TABLE statements and new indexes.
  ```sql
  -- migrations/0002_add_multi_form_support.sql
  ALTER TABLE feedback ADD COLUMN form_id TEXT DEFAULT 'default';
  ALTER TABLE feedback ADD COLUMN session_id TEXT;
  ALTER TABLE feedback ADD COLUMN question_hash TEXT;
  ALTER TABLE feedback ADD COLUMN form_context TEXT;

  CREATE INDEX idx_feedback_form_id ON feedback(form_id);
  CREATE INDEX idx_feedback_session_id ON feedback(session_id);
  CREATE INDEX idx_feedback_composite ON feedback(session_id, form_id);
  ```

- [x] **Update migration 0001 to include new columns for fresh deployments** - Modify original migration
  - Status: Completed
  - Comments: Updated migrations/0001_create_feedback_table.sql to include all multi-form columns in initial schema.

### Phase 2: Session Configuration System

- [x] **Create config/session.ts** - Define session configuration interface and defaults
  - Status: Completed
  - Comments: Created SessionConfig interface with environment variable support and generateSessionId helper.
  ```typescript
  export interface SessionConfig {
    sessionId: string;          // Unique session identifier
    sessionName: string;        // Human-readable name
    description?: string;       // Optional description
    createdAt: string;          // ISO timestamp
    presentationTitle: string;  // Title for this session's presentation
    databaseName?: string;      // Custom D1 database name (optional)
  }

  export const sessionConfig: SessionConfig = {
    sessionId: process.env.SESSION_ID || 'default-session',
    sessionName: process.env.SESSION_NAME || 'Default Session',
    description: process.env.SESSION_DESCRIPTION,
    createdAt: new Date().toISOString(),
    presentationTitle: process.env.PRESENTATION_TITLE || 'Presentation',
    databaseName: process.env.D1_DATABASE_NAME,
  };
  ```

- [x] **Create lib/session.ts** - Session utility functions
  - Status: Completed
  - Comments: Created getSessionId, getSessionConfig, validateSessionConfig, generateQuestionHash utilities.
  ```typescript
  export function getSessionId(): string
  export function getSessionConfig(): SessionConfig
  export function validateSessionConfig(config: unknown): boolean
  ```

- [x] **Update lib/presentation-id.ts** - Use session ID from config instead of localStorage
  - Status: Completed
  - Comments: Added getConfiguredPresentationId() with priority: env var > session config > localStorage > generated

### Phase 3: API & Type Updates

- [x] **Update types/feedback.ts** - Add new fields to interfaces
  - Status: Completed
  - Comments: Added FormContext interface, formId/sessionId/questionHash/formContext to Feedback, FeedbackSubmission, and FeedbackQueryParams.
  ```typescript
  export interface Feedback {
    // ... existing fields
    formId: string;
    sessionId: string;
    questionHash?: string;
    formContext?: Record<string, unknown>;
  }

  export interface FeedbackSubmission {
    // ... existing fields
    formId?: string;
    sessionId?: string;
    questionHash?: string;
    formContext?: Record<string, unknown>;
  }

  export interface FeedbackQueryParams {
    // ... existing fields
    formId?: string;
    sessionId?: string;
  }
  ```

- [x] **Update functions/api/feedback.ts** - Handle new columns in API
  - Status: Completed
  - Comments: Updated INSERT with 12 columns, added formId/sessionId filtering to GET, transformed response to include new fields.

- [x] **Update lib/feedback-api.ts** - Add new fields to client API
  - Status: Completed
  - Comments: Added formId/sessionId to getFeedback query params. Added getFeedbackByForm and getFeedbackBySession helper functions.

### Phase 4: Automated Database Provisioning

- [x] **Create scripts/init-database.sh** - Database initialization script
  - Status: Completed
  - Comments: Created script that checks/creates D1 database, updates wrangler.toml, and runs migrations automatically.
  ```bash
  #!/bin/bash
  # Create D1 database if not exists
  # Run migrations
  # Update wrangler.toml with database ID

  DATABASE_NAME="${1:-presentation-feedback}"

  # Check if database exists
  if ! wrangler d1 list | grep -q "$DATABASE_NAME"; then
    echo "Creating database: $DATABASE_NAME"
    wrangler d1 create "$DATABASE_NAME"
  fi

  # Get database ID
  DB_ID=$(wrangler d1 list --json | jq -r ".[] | select(.name==\"$DATABASE_NAME\") | .uuid")

  # Update wrangler.toml
  sed -i '' "s/database_id = \".*\"/database_id = \"$DB_ID\"/" wrangler.toml

  # Run migrations
  wrangler d1 execute "$DATABASE_NAME" --file=migrations/0001_create_feedback_table.sql
  wrangler d1 execute "$DATABASE_NAME" --file=migrations/0002_add_multi_form_support.sql
  ```

- [x] **Update scripts/deploy.sh** - Integrate database auto-provisioning
  - Status: Completed
  - Comments: Added --skip-db-init and --db-name flags, integrated init_database() call before Cloudflare deployment.

- [x] **Update wrangler.toml** - Add placeholder pattern and comments
  - Status: Completed
  - Comments: Added explanatory comments about auto-provisioning and usage of pnpm db:init and pnpm deploy commands.
  ```toml
  # D1 Database Binding
  # Database ID will be auto-populated by scripts/init-database.sh
  [[d1_databases]]
  binding = "DB"
  database_name = "${D1_DATABASE_NAME:-presentation-feedback}"
  database_id = "auto-populated"  # Will be replaced during init
  ```

### Phase 5: Component Updates

- [x] **Update config/feedback-slide.ts** - Add formId to config
  - Status: Completed
  - Comments: Added formId to config, created feedbackFormPresets with intro, section, closing, and qna presets.
  ```typescript
  export interface FeedbackSlideConfig {
    // ... existing fields
    formId: string;  // Unique identifier for this feedback form
  }

  export const feedbackSlideConfig: FeedbackSlideConfig = {
    // ... existing fields
    formId: 'default-feedback',
  };
  ```

- [x] **Create components/feedback/FeedbackFormWrapper.tsx** - Reusable feedback component
  - Status: Completed
  - Comments: Created configurable component with formId, questionPrompt, slideId, compact mode, and all submission states.

- [x] **Update components/slides/m1/03-feedback.tsx** - Use formId from config
  - Status: Completed
  - Comments: Added sessionId state, imported session utilities, submit now includes formId, sessionId, questionHash, and formContext.

- [x] **Create example multi-form slide** - Demonstrate multiple forms in one presentation
  - Status: Completed
  - Comments: Created components/slides/m1/04-section-feedback.tsx using FeedbackFormWrapper with configurable section number/name.

### Phase 6: CLI Tooling

- [x] **Create cli/create-session.ts** - Session creation CLI tool
  - Status: Completed
  - Comments: Created CLI with --name, --id, --description, --db flags. Generates session config and optionally provisions database.
  ```typescript
  // Usage: pnpm session:create --name "Workshop Day 1" --id workshop-day-1
  // Creates:
  // 1. Session config file or updates config/session.ts
  // 2. Optionally creates D1 database
  // 3. Optionally updates wrangler.toml
  ```

- [x] **Add npm scripts for session management** - Add to package.json
  - Status: Completed
  - Comments: Added session:create, session:list, db:init, db:migrate, feedback:by-form, feedback:by-session scripts.
  ```json
  "scripts": {
    "session:create": "tsx cli/create-session.ts",
    "session:list": "wrangler d1 execute presentation-feedback --command=\"SELECT DISTINCT session_id FROM feedback\"",
    "db:init": "bash scripts/init-database.sh",
    "db:migrate": "wrangler d1 execute presentation-feedback --file=migrations/0002_add_multi_form_support.sql"
  }
  ```

- [x] **Update .claude/commands/deploy.md** - Document new database provisioning
  - Status: Completed
  - Comments: Added comprehensive documentation for database auto-provisioning, session management, and environment variables.

## Testing Strategy

### Unit Tests
- Session ID generation and validation
- Feedback submission with new fields
- Query parameter parsing with formId/sessionId
- Migration SQL syntax validation

### Integration Tests
- Full flow: Create session → Submit feedback with formId → Query by formId
- Database auto-provisioning in deploy script
- Multiple forms in same presentation submitting to different formIds
- Backward compatibility: old submissions without formId still work

### Edge Cases
- Missing formId defaults to 'default'
- Missing sessionId uses session config or 'unknown'
- Database already exists scenario
- Migration on database with existing data
- Empty session name/ID validation
- Very long formId or sessionId strings

## Acceptance Criteria

### Multi-Form Support
1. [x] Database schema includes `form_id`, `session_id`, `question_hash`, `form_context` columns
2. [x] Migration 0002 runs without breaking existing data
3. [x] API accepts and stores new fields
4. [x] API supports filtering by `formId` and `sessionId`
5. [x] Feedback slide component passes formId to API
6. [x] Multiple feedback forms in same presentation work independently

### Session Configuration
7. [x] Session config file exists at `config/session.ts`
8. [x] Session ID can be set via environment variable
9. [x] Session ID is embedded at build time, not generated client-side
10. [x] Backward compatible with localStorage-based IDs

### Automated Database Provisioning
11. [x] `scripts/init-database.sh` creates D1 database if not exists
12. [x] Script runs migrations automatically
13. [x] Script updates wrangler.toml with database ID
14. [x] Deploy script integrates database initialization
15. [x] Deploy script supports `--skip-db-init` flag
16. [x] Deploy script supports custom database name

### CLI Tooling
17. [x] `pnpm session:create` command exists
18. [x] Session creation generates unique ID
19. [x] Session list command shows active sessions

### Documentation
20. [x] FEEDBACK_SYSTEM.md updated with multi-form queries
21. [x] Deploy documentation includes database auto-provisioning
22. [x] README updated with session management info

## Slide Design Requirements
N/A - This feature is infrastructure/backend focused and does not involve creating presentation slides.

## Validation Commands

```bash
# Build the presentation
pnpm run build

# Lint code quality
pnpm run lint

# Initialize database (new command)
pnpm db:init

# Run migration for existing databases
pnpm db:migrate

# Create a new session
pnpm session:create --name "Test Session" --id test-session-1

# Deploy with auto database provisioning
pnpm deploy

# Deploy without database init (for CI/CD where DB already exists)
pnpm deploy --skip-db-init

# Query feedback by form ID (via wrangler)
wrangler d1 execute presentation-feedback --remote \
  --command="SELECT * FROM feedback WHERE form_id = 'default-feedback' ORDER BY created_at DESC;"

# Query feedback by session ID
wrangler d1 execute presentation-feedback --remote \
  --command="SELECT * FROM feedback WHERE session_id = 'test-session-1' ORDER BY created_at DESC;"

# Get feedback summary by form
wrangler d1 execute presentation-feedback --remote \
  --command="SELECT form_id, COUNT(*) as count FROM feedback GROUP BY form_id;"
```

## Notes

### Migration Strategy for Existing Deployments
For presentations already deployed with the original schema:
1. Run migration 0002 to add new columns with defaults
2. Existing feedback rows get `form_id = 'default'` and `session_id = NULL`
3. New submissions include the new fields
4. No data loss or downtime required

### Environment Variable Reference
| Variable | Purpose | Default |
|----------|---------|---------|
| `SESSION_ID` | Unique session identifier | `default-session` |
| `SESSION_NAME` | Human-readable session name | `Default Session` |
| `SESSION_DESCRIPTION` | Optional description | `undefined` |
| `PRESENTATION_TITLE` | Title for this session | `Presentation` |
| `D1_DATABASE_NAME` | Custom database name | `presentation-feedback` |

### Future Enhancements
1. **Admin Dashboard**: Web UI to view feedback grouped by session/form
2. **Session Templates**: Clone sessions with pre-configured forms
3. **Form Builder**: Visual editor for creating feedback forms
4. **Analytics**: Track response rates per form/session
5. **Export**: Download feedback as CSV/JSON filtered by session/form

### Alternative Approaches Considered

**A. Single database with namespacing (chosen)**
- Pros: Simpler, one database to manage, easier queries across sessions
- Cons: Potential for name collisions if not careful

**B. Separate database per session**
- Pros: Complete isolation, easy cleanup
- Cons: More databases to manage, harder to aggregate data

**C. External storage (Supabase/Turso)**
- Pros: More features, real-time
- Cons: External dependency, CORS complexity, cost at scale

We chose option A because it balances simplicity with functionality. The `session_id` and `form_id` columns provide sufficient isolation while keeping operations simple.

### Cost Impact
This feature adds minimal overhead:
- ~4 additional columns per row (TEXT fields)
- 2-3 additional indexes
- Still well within D1 free tier (5M reads/day, 100K writes/day)
