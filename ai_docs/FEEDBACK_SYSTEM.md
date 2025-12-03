# Feedback Collection System

## Overview

The feedback system collects text feedback from domain expert reviewers during presentations. Feedback is stored in Cloudflare D1 (SQLite) and can be retrieved via CLI or API.

**Architecture:** Feedback Slide Component → API (`/api/feedback`) → Cloudflare D1

**Key Features:**
- Multi-form support: Multiple feedback forms in a single presentation
- Session tracking: Independent feedback collection per deployment/session
- Question hashing: Group responses to the same question across sessions
- Form context: Store form configuration at submission time

---

## Multi-Form Feedback

The system supports multiple feedback forms within a single presentation, each tracked separately via `form_id`. This enables:

- Section-specific feedback (after each topic)
- Introduction/closing feedback
- Q&A session feedback
- Any custom feedback collection points

### Using Multiple Forms

```tsx
// Use FeedbackFormWrapper for custom forms
import FeedbackFormWrapper from '@/components/feedback/FeedbackFormWrapper'

<FeedbackFormWrapper
  formId="feedback-section-1"
  questionPrompt="How clear was the introduction?"
  slideId="section-1-feedback"
  slideIndex={3}
  moduleId="m1"
/>

// Or use pre-defined presets
import { feedbackFormPresets } from '@/config/feedback-slide'

// Section feedback
const sectionConfig = feedbackFormPresets.section(1, 'Introduction')

// Closing feedback
const closingConfig = feedbackFormPresets.closing
```

---

## Session Management

Sessions allow multiple deployments of the same presentation with isolated feedback. Use `session_id` to track:

- Different workshop sessions
- A/B testing variants
- Geographic deployments
- Time-based cohorts

### Create a Session

```bash
# Via CLI
pnpm session:create --name "Workshop Day 1" --id workshop-day-1

# Via environment variables
SESSION_ID=workshop-2024 SESSION_NAME="2024 Workshop" pnpm deploy
```

### Session Configuration

Edit `config/session.ts` or set environment variables:

```typescript
// config/session.ts
export const sessionConfig: SessionConfig = {
  sessionId: 'default-session',
  sessionName: 'Default Session',
  description: 'Optional description',
  createdAt: '2024-01-01T00:00:00.000Z',
  presentationTitle: 'My Presentation',
  databaseName: 'presentation-feedback',
}
```

---

## Retrieving Feedback via CLI

Use the Wrangler CLI to query the D1 database directly. Replace `<DATABASE_NAME>` with your database name from `wrangler.toml`.

### Get All Feedback

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT * FROM feedback ORDER BY created_at DESC;"
```

### Get Feedback for a Specific Presentation

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT * FROM feedback WHERE presentation_id = 'YOUR_PRESENTATION_ID' ORDER BY created_at DESC;"
```

### Get Feedback by Form ID

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT * FROM feedback WHERE form_id = 'feedback-section-1' ORDER BY created_at DESC;"
```

### Get Feedback by Session ID

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT * FROM feedback WHERE session_id = 'workshop-day-1' ORDER BY created_at DESC;"
```

### Get Feedback Count by Form

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT form_id, COUNT(*) as count FROM feedback GROUP BY form_id;"
```

### Get Feedback Count by Session

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT session_id, COUNT(*) as count FROM feedback GROUP BY session_id;"
```

### Get Feedback Count by Slide

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT slide_id, COUNT(*) as count FROM feedback GROUP BY slide_id;"
```

### Export with Formatted Output

```bash
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --command="SELECT id, reviewer_name, feedback_text, form_id, session_id, datetime(created_at) as submitted_at FROM feedback ORDER BY created_at DESC;"
```

---

## Retrieving Feedback via API

The API endpoint supports GET requests with query parameters. Replace `<YOUR_PAGES_URL>` with your deployed Cloudflare Pages URL.

### Get All Feedback

```bash
curl "<YOUR_PAGES_URL>/api/feedback"
```

### Filter by Presentation ID

```bash
curl "<YOUR_PAGES_URL>/api/feedback?presentationId=pres-123456"
```

### Filter by Form ID

```bash
curl "<YOUR_PAGES_URL>/api/feedback?formId=feedback-section-1"
```

### Filter by Session ID

```bash
curl "<YOUR_PAGES_URL>/api/feedback?sessionId=workshop-day-1"
```

### Filter by Slide ID

```bash
curl "<YOUR_PAGES_URL>/api/feedback?slideId=m1-03-feedback"
```

### Filter by Feedback Type

```bash
curl "<YOUR_PAGES_URL>/api/feedback?feedbackType=content"
```

### Pagination

```bash
curl "<YOUR_PAGES_URL>/api/feedback?limit=50&offset=0"
```

### Combined Filters

```bash
curl "<YOUR_PAGES_URL>/api/feedback?sessionId=workshop-day-1&formId=feedback-section-1&limit=10"
```

### JavaScript/TypeScript (Client-Side)

Use the client SDK in `lib/feedback-api.ts`:

```typescript
import {
  getFeedback,
  getFeedbackByPresentation,
  getFeedbackBySlide,
  getFeedbackByForm,
  getFeedbackBySession
} from '@/lib/feedback-api'

// Get all feedback
const allFeedback = await getFeedback()

// Filter by presentation
const presentationFeedback = await getFeedbackByPresentation('pres-123')

// Filter by slide
const slideFeedback = await getFeedbackBySlide('pres-123', 'm1-03-feedback')

// Filter by form (multi-form support)
const formFeedback = await getFeedbackByForm('feedback-section-1')

// Filter by session
const sessionFeedback = await getFeedbackBySession('workshop-day-1')

// Filter by form and session
const specificFeedback = await getFeedbackByForm('feedback-section-1', 'workshop-day-1')

// Custom query with all parameters
const customFeedback = await getFeedback({
  presentationId: 'pres-123',
  formId: 'feedback-section-1',
  sessionId: 'workshop-day-1',
  feedbackType: 'content',
  limit: 20,
  offset: 0
})
```

---

## Useful SQL Queries

### Feedback Summary Statistics

```sql
SELECT
  COUNT(*) as total_feedback,
  COUNT(DISTINCT presentation_id) as unique_presentations,
  COUNT(DISTINCT session_id) as unique_sessions,
  COUNT(DISTINCT form_id) as unique_forms,
  COUNT(DISTINCT reviewer_name) as unique_reviewers
FROM feedback;
```

### Feedback by Date

```sql
SELECT
  DATE(created_at) as date,
  COUNT(*) as count
FROM feedback
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### Feedback by Form and Session

```sql
SELECT
  session_id,
  form_id,
  COUNT(*) as count
FROM feedback
GROUP BY session_id, form_id
ORDER BY session_id, form_id;
```

### Most Active Reviewers

```sql
SELECT
  reviewer_name,
  COUNT(*) as feedback_count
FROM feedback
WHERE reviewer_name IS NOT NULL
GROUP BY reviewer_name
ORDER BY feedback_count DESC
LIMIT 10;
```

### Feedback by Type

```sql
SELECT
  feedback_type,
  COUNT(*) as count
FROM feedback
GROUP BY feedback_type;
```

### Recent Feedback with Full Details

```sql
SELECT
  id,
  reviewer_name,
  slide_id,
  form_id,
  session_id,
  feedback_type,
  SUBSTR(feedback_text, 1, 100) as preview,
  datetime(created_at) as submitted_at
FROM feedback
ORDER BY created_at DESC
LIMIT 20;
```

### Compare Feedback Across Sessions

```sql
SELECT
  session_id,
  form_id,
  COUNT(*) as responses,
  AVG(LENGTH(feedback_text)) as avg_length
FROM feedback
GROUP BY session_id, form_id
ORDER BY session_id, form_id;
```

### Find Responses to Same Question

```sql
SELECT
  question_hash,
  COUNT(*) as response_count,
  COUNT(DISTINCT session_id) as sessions
FROM feedback
WHERE question_hash IS NOT NULL
GROUP BY question_hash
ORDER BY response_count DESC;
```

---

## Configuration Reference

| File | Purpose |
|------|---------|
| `wrangler.toml` | D1 database binding (`database_name`, `database_id`) |
| `config/session.ts` | Session configuration (ID, name, metadata) |
| `config/feedback.ts` | System settings (enabled, validation rules, feedback types) |
| `config/feedback-slide.ts` | Default slide configuration and presets |
| `functions/api/feedback.ts` | API endpoint implementation |
| `lib/feedback-api.ts` | Client-side SDK functions |
| `lib/session.ts` | Session utilities |
| `types/feedback.ts` | TypeScript interfaces |
| `migrations/0001_create_feedback_table.sql` | Database schema (with multi-form columns) |
| `migrations/0002_add_multi_form_support.sql` | Migration for existing databases |
| `components/feedback/FeedbackFormWrapper.tsx` | Reusable feedback form component |

---

## Database Schema

```sql
CREATE TABLE feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  presentation_id TEXT NOT NULL,
  slide_id TEXT NOT NULL,
  slide_index INTEGER,
  feedback_text TEXT NOT NULL,
  reviewer_name TEXT,
  reviewer_email TEXT,
  feedback_type TEXT DEFAULT 'general',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  metadata TEXT,
  -- Multi-form support columns
  form_id TEXT DEFAULT 'default',
  session_id TEXT,
  question_hash TEXT,
  form_context TEXT
);
```

**Indexes:**
- `idx_feedback_presentation` on `presentation_id`
- `idx_feedback_slide` on `slide_id`
- `idx_feedback_created` on `created_at`
- `idx_feedback_form_id` on `form_id`
- `idx_feedback_session_id` on `session_id`
- `idx_feedback_composite` on `(session_id, form_id)`

---

## Migration for Existing Deployments

If you have an existing deployment and want to add multi-form support:

```bash
# Run the migration
pnpm db:migrate

# Or manually
npx wrangler d1 execute <DATABASE_NAME> --remote \
  --file=migrations/0002_add_multi_form_support.sql
```

This adds the new columns with defaults:
- `form_id`: defaults to `'default'`
- `session_id`: defaults to `NULL`
- `question_hash`: defaults to `NULL`
- `form_context`: defaults to `NULL`

Existing data is preserved; no downtime required.
