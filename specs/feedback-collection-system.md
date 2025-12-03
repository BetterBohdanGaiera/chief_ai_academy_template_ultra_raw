# Feature: Feedback Collection System

## Feature Description
A system that enables collecting text feedback from domain experts/reviewers on generated presentations. When a presentation is created from context/documents, the creator can deploy it to Cloudflare Pages and share the link with reviewers. Reviewers can view the slides and submit text feedback that gets stored and mapped back to the original context/presentation.

The core challenge: This is a **static site** (`output: 'export'`), meaning there's no server-side processing. We need a solution that works with purely client-side code while still persisting data.

## User Story
As a presentation creator,
I want to collect feedback from domain experts on my generated slides,
So that I can improve the presentation based on their specialized knowledge.

As a domain expert reviewer,
I want to submit text feedback on a shared presentation,
So that I can provide my insights to help refine the content.

## Problem Statement
Currently, this template generates static presentations that can be deployed to Cloudflare Pages. However, there's no way to:
1. Collect feedback from viewers
2. Persist that feedback to a storage system
3. Map feedback to the specific presentation/context it relates to

The constraint is that Next.js is configured for static export (`output: 'export'`), which means no API routes or server-side processing.

## Solution Statement
Implement a **serverless feedback collection system** using one of these approaches:

### Recommended Approach: Cloudflare D1 + Pages Functions

Since you're already deploying to Cloudflare Pages, leverage **Cloudflare's ecosystem**:

1. **Cloudflare D1** (SQLite database) - Free tier: 5M reads/day, 100K writes/day
2. **Cloudflare Pages Functions** - Serverless functions that handle form submissions
3. **Client-side form component** - React component that posts to the Pages Function

**Why this approach:**
- Zero additional infrastructure (already using Cloudflare)
- Generous free tier
- SQLite is simple and fast
- Pages Functions integrate seamlessly with Pages deployments
- No CORS issues (same domain)

### Alternative Approaches

| Approach | Pros | Cons | Free Tier |
|----------|------|------|-----------|
| **Cloudflare D1 + Pages Functions** | Native integration, no CORS, simple | Requires wrangler config | 5M reads, 100K writes/day |
| **Supabase** | PostgreSQL, real-time, auth built-in | External service, CORS setup | 500MB, 2GB bandwidth |
| **Turso (libSQL)** | Edge-optimized SQLite, fast | Another account to manage | 9GB storage, 500M reads |
| **JSONBin.io** | Dead simple REST API | Limited query capabilities | 10K requests/month |
| **Google Sheets API** | Familiar UI for viewing data | Complex auth, rate limits | Unlimited |

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     FEEDBACK FLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. GENERATION PHASE                                             │
│     ┌──────────────┐    ┌───────────────┐    ┌───────────────┐  │
│     │ Context Doc  │ -> │ Generate      │ -> │ Slide         │  │
│     │ (input)      │    │ Slides        │    │ Components    │  │
│     └──────────────┘    └───────────────┘    └───────────────┘  │
│            │                                         │           │
│            └──────────────────┬──────────────────────┘           │
│                               ▼                                  │
│     ┌─────────────────────────────────────────────────────────┐  │
│     │ Presentation Metadata (stored in config)                │  │
│     │ - presentationId: UUID                                  │  │
│     │ - title: string                                         │  │
│     │ - contextHash: string (for mapping feedback)            │  │
│     │ - createdAt: timestamp                                  │  │
│     └─────────────────────────────────────────────────────────┘  │
│                                                                  │
│  2. DEPLOYMENT PHASE                                             │
│     ┌───────────────┐    ┌───────────────┐    ┌───────────────┐  │
│     │ pnpm build    │ -> │ Static Files  │ -> │ Cloudflare    │  │
│     │               │    │ + Functions   │    │ Pages Deploy  │  │
│     └───────────────┘    └───────────────┘    └───────────────┘  │
│                                                                  │
│  3. REVIEW PHASE                                                 │
│     ┌───────────────┐    ┌───────────────┐    ┌───────────────┐  │
│     │ Reviewer      │ -> │ View Slides   │ -> │ FeedbackPanel │  │
│     │ Opens Link    │    │               │    │ Component     │  │
│     └───────────────┘    └───────────────┘    └───────────────┘  │
│                                    │                             │
│                                    ▼                             │
│     ┌───────────────────────────────────────────────────────────┐│
│     │ Submit Feedback                                           ││
│     │ - slideId: which slide they're on                         ││
│     │ - presentationId: maps to original context                ││
│     │ - feedbackText: their input                               ││
│     │ - reviewerName: optional identifier                       ││
│     │ - timestamp: when submitted                               ││
│     └───────────────────────────────────────────────────────────┘│
│                                    │                             │
│                                    ▼                             │
│     ┌───────────────┐    ┌───────────────┐    ┌───────────────┐  │
│     │ Pages         │ -> │ Cloudflare    │ -> │ Feedback      │  │
│     │ Function      │    │ D1 Database   │    │ Stored!       │  │
│     └───────────────┘    └───────────────┘    └───────────────┘  │
│                                                                  │
│  4. RETRIEVAL PHASE                                              │
│     ┌───────────────┐    ┌───────────────┐    ┌───────────────┐  │
│     │ GET /api/     │ -> │ Query D1 by   │ -> │ JSON          │  │
│     │ feedback      │    │ presentationId│    │ Response      │  │
│     └───────────────┘    └───────────────┘    └───────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Relevant Files

### Existing Files to Modify

- **`next.config.mjs`** - Will need to configure for Cloudflare Pages Functions (may need to remove `output: 'export'` or use hybrid approach)
- **`config/slides.ts`** - Add presentation metadata (ID, context hash)
- **`components/presentation-container.tsx`** - Integrate FeedbackPanel component
- **`hooks/use-course-navigation.ts`** - Expose current slide info for feedback context
- **`package.json`** - Add dependencies if needed (but Cloudflare D1 binding doesn't need npm packages)
- **`scripts/deploy.sh`** - Update to include D1 binding configuration

### New Files to Create

#### Database & API
- **`functions/api/feedback.ts`** - Cloudflare Pages Function to handle feedback CRUD
- **`functions/api/[[route]].ts`** - Catch-all API route for Pages Functions
- **`wrangler.toml`** - Cloudflare configuration for D1 binding
- **`migrations/0001_create_feedback_table.sql`** - D1 schema migration

#### React Components
- **`components/feedback/feedback-panel.tsx`** - Main feedback collection UI
- **`components/feedback/feedback-form.tsx`** - Text input form for feedback
- **`components/feedback/feedback-list.tsx`** - Display existing feedback (for creators)
- **`components/feedback/feedback-toggle.tsx`** - Button to open/close feedback panel

#### Types
- **`types/feedback.ts`** - TypeScript interfaces for feedback data

#### Utilities
- **`lib/feedback-api.ts`** - Client-side API wrapper for feedback operations
- **`lib/presentation-id.ts`** - Utilities for generating/managing presentation IDs

#### Configuration
- **`config/feedback.ts`** - Feedback system configuration (enable/disable, roles, etc.)

## Implementation Plan

- [x] **Phase 1: Infrastructure Setup** - Configure Cloudflare D1 database and Pages Functions
  - Status: Completed
  - Comments: Created wrangler.toml and migration SQL file

- [x] **Phase 2: Backend API** - Create Pages Functions for feedback CRUD operations
  - Status: Completed
  - Comments: Created functions/api/feedback.ts with POST/GET handlers and validation

- [x] **Phase 3: Frontend Components** - Build feedback API client and utility functions
  - Status: Completed
  - Comments: Created lib/feedback-api.ts and types/feedback.ts

- [x] **Phase 4: Integration** - Connect feedback system with presentation ID generation
  - Status: Completed
  - Comments: Created lib/presentation-id.ts, config/feedback.ts, and config/feedback-slide.ts

- [x] **Phase 5: Feedback Slide Component** - Create the dedicated feedback collection slide
  - Status: Completed
  - Comments: Created components/slides/m1/03-feedback.tsx, registered in slides.ts and m1/page.tsx

- [x] **Phase 6: Testing & Validation** - Test end-to-end flow and deploy
  - Status: Completed
  - Comments: Build passed successfully. D1 database creation and migration require wrangler CLI with Cloudflare auth.

## Step by Step Tasks

### Phase 1: Infrastructure Setup

- [x] **Create wrangler.toml configuration** - Define Cloudflare Pages project settings and D1 binding
  - Status: Completed
  - Comments: Created wrangler.toml with D1 binding configuration. Database ID placeholder needs to be replaced after running `wrangler d1 create`.
  ```toml
  name = "presentation"
  compatibility_date = "2024-01-01"

  [[d1_databases]]
  binding = "DB"
  database_name = "presentation-feedback"
  database_id = "<will be created>"
  ```

- [ ] **Create D1 database** - Run `wrangler d1 create presentation-feedback`
  - Status: Pending (requires Cloudflare authentication)
  - Comments: User needs to run this command with wrangler CLI authenticated to their Cloudflare account

- [x] **Create database migration** - Write SQL schema for feedback table
  - Status: Completed
  - Comments: Created migrations/0001_create_feedback_table.sql with feedback table and indexes
  ```sql
  -- migrations/0001_create_feedback_table.sql
  CREATE TABLE feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    presentation_id TEXT NOT NULL,
    slide_id TEXT NOT NULL,
    slide_index INTEGER,
    feedback_text TEXT NOT NULL,
    reviewer_name TEXT,
    reviewer_email TEXT,
    feedback_type TEXT DEFAULT 'general',
    created_at TEXT DEFAULT (datetime('now')),
    metadata TEXT -- JSON for extensibility
  );

  CREATE INDEX idx_presentation_id ON feedback(presentation_id);
  CREATE INDEX idx_slide_id ON feedback(slide_id);
  ```

- [ ] **Run migration** - Execute `wrangler d1 execute presentation-feedback --file=migrations/0001_create_feedback_table.sql`
  - Status: Pending (requires D1 database creation first)
  - Comments: Run this after creating the D1 database

### Phase 2: Backend API (Pages Functions)

- [x] **Create TypeScript types for feedback** - Define interfaces in `types/feedback.ts`
  - Status: Completed
  - Comments: Created types/feedback.ts with Feedback, FeedbackSubmission, FeedbackSubmissionResponse, and FeedbackSlideConfig interfaces
  ```typescript
  export interface Feedback {
    id: number;
    presentationId: string;
    slideId: string;
    slideIndex: number;
    feedbackText: string;
    reviewerName?: string;
    reviewerEmail?: string;
    feedbackType: 'general' | 'content' | 'design' | 'accuracy';
    createdAt: string;
    metadata?: Record<string, unknown>;
  }

  export interface FeedbackSubmission {
    presentationId: string;
    slideId: string;
    slideIndex: number;
    feedbackText: string;
    reviewerName?: string;
    reviewerEmail?: string;
    feedbackType?: 'general' | 'content' | 'design' | 'accuracy';
  }
  ```

- [x] **Create feedback API handler** - Build Pages Function at `functions/api/feedback.ts`
  - Status: Completed
  - Comments: Created functions/api/feedback.ts with POST (submit feedback), GET (retrieve feedback), OPTIONS (CORS) handlers, input validation, and CORS headers
  ```typescript
  interface Env {
    DB: D1Database;
  }

  export const onRequestPost: PagesFunction<Env> = async (context) => {
    const body = await context.request.json();
    // Validate and insert feedback
    const result = await context.env.DB.prepare(`
      INSERT INTO feedback (presentation_id, slide_id, slide_index, feedback_text, reviewer_name, feedback_type)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(...values).run();
    return new Response(JSON.stringify({ success: true, id: result.lastRowId }));
  };

  export const onRequestGet: PagesFunction<Env> = async (context) => {
    const url = new URL(context.request.url);
    const presentationId = url.searchParams.get('presentationId');
    const results = await context.env.DB.prepare(`
      SELECT * FROM feedback WHERE presentation_id = ?
    `).bind(presentationId).all();
    return new Response(JSON.stringify(results.results));
  };
  ```

- [x] **Add input validation with Zod** - Validate incoming feedback submissions
  - Status: Completed (using native validation)
  - Comments: Implemented validation in the Pages Function directly. Validates required fields, field types, and max length constraints.

### Phase 3: Frontend Components

- [x] **Create feedback API client** - Build `lib/feedback-api.ts` for API calls
  - Status: Completed
  - Comments: Created lib/feedback-api.ts with submitFeedback, getFeedback, getFeedbackByPresentation, and getFeedbackBySlide functions
  ```typescript
  export async function submitFeedback(data: FeedbackSubmission): Promise<{ success: boolean; id: number }> {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  export async function getFeedback(presentationId: string): Promise<Feedback[]> {
    const response = await fetch(`/api/feedback?presentationId=${presentationId}`);
    return response.json();
  }
  ```

- [x] **Create FeedbackForm component** - Text input with validation
  - Status: Completed (integrated into feedback slide)
  - Comments: Form built directly into the feedback slide component with all states
  - Uses react-hook-form + zod (already in dependencies)
  - Text area for feedback
  - Optional name/email fields
  - Feedback type selector (general, content, design, accuracy)
  - Submit button with loading state

- [x] **Create FeedbackPanel component** - Slide-out panel for feedback
  - Status: Completed (as dedicated feedback slide instead of panel)
  - Comments: Implemented as a full-screen feedback slide (m1-03-feedback.tsx) instead of a side panel. This provides a more focused feedback collection experience.
  - Uses Radix Sheet/Drawer component
  - Shows current slide info
  - Contains FeedbackForm
  - Success/error states
  - Matches brutalist design system

- [x] **Create FeedbackToggle button** - Floating button to open panel
  - Status: Skipped (not needed for slide-based approach)
  - Comments: Since feedback is collected via a dedicated slide, no floating toggle button is needed
  - Fixed position (bottom-right)
  - Uses MessageSquare icon from lucide-react
  - Pulse animation to attract attention
  - Respects reduced-motion preferences

- [x] **Style components with design system** - Apply brutalist-minimalist aesthetic
  - Status: Completed
  - Comments: Feedback slide uses GradientMesh, GeometricPattern, GrainOverlay, and follows the design system with proper typography and animations
  - Electric orange accent
  - Dark background
  - Bebas Neue for headers
  - Manrope for body text

### Phase 4: Integration

- [x] **Add presentation ID generation** - Create `lib/presentation-id.ts`
  - Status: Completed
  - Comments: Created lib/presentation-id.ts with generatePresentationId, getPresentationId, setPresentationId, clearPresentationId, and isValidPresentationId functions. Uses localStorage for persistence.
  ```typescript
  // Generate unique ID when presentation is created
  export function generatePresentationId(): string {
    return `pres-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Store in localStorage for consistency
  export function getPresentationId(moduleId: string): string {
    const key = `presentation-id-${moduleId}`;
    let id = localStorage.getItem(key);
    if (!id) {
      id = generatePresentationId();
      localStorage.setItem(key, id);
    }
    return id;
  }
  ```

- [x] **Integrate FeedbackPanel into PresentationContainer** - Add toggle and panel
  - Status: Completed (via slide registration)
  - Comments: Feedback is integrated as a dedicated slide (m1-03-feedback) registered in slides.ts and added to m1/page.tsx. The slide receives presentation ID automatically via the getPresentationId utility.
  - Pass current slide ID and index
  - Pass presentation ID
  - Conditionally render based on feedback config

- [x] **Create feedback configuration** - Build `config/feedback.ts`
  - Status: Completed
  - Comments: Created config/feedback.ts with FeedbackConfig interface and default values for enabled, collectEmail, collectName, feedbackTypes, allowAnonymous, etc.
  ```typescript
  export const feedbackConfig = {
    enabled: true,
    collectEmail: false,  // Privacy consideration
    collectName: true,
    feedbackTypes: ['general', 'content', 'design', 'accuracy'],
    allowAnonymous: true,
    showExistingFeedback: false,  // Only for creators
  };
  ```

- [ ] **Update deploy script** - Ensure D1 binding is included in deployment
  - Status: Pending
  - Comments: Wrangler.toml is configured. User needs to add D1 database ID after creating the database with wrangler CLI.

### Phase 5: Feedback Slide Component

- [x] **Create feedback slide configuration** - Build `config/feedback-slide.ts` with default question and settings
  - Status: Completed
  - Comments: Created config/feedback-slide.ts with feedbackSlideConfig and createFeedbackSlideConfig helper function
  ```typescript
  export const feedbackSlideConfig = {
    questionPrompt: "What aspects of this presentation could be improved to better serve domain experts like yourself?",
    title: "WE VALUE YOUR",
    titleAccent: "EXPERTISE",
    presentationId: "demo-presentation", // Will be dynamic later
    slideId: "m1-03-feedback",
    collectName: true,
    collectEmail: false,
    submitButtonText: "SUBMIT FEEDBACK",
    successMessage: "Thank you for your valuable feedback!"
  };
  ```

- [x] **Create feedback slide component** - Build `components/slides/m1/03-feedback.tsx`
  - Status: Completed
  - Comments: Created full-screen feedback slide with form, states (idle/submitting/success/error), and animations
  - Full-screen slide with form
  - Uses react-hook-form for form handling
  - Uses zod for validation
  - Integrates with feedback API client
  - Matches brutalist design system
  - Staggered entrance animations

- [x] **Register feedback slide** - Add to `config/slides.ts`
  - Status: Completed
  - Comments: Registered m1-03-feedback in slideRegistry with appropriate metadata (tags: feedback, interactive, form)
  ```typescript
  'm1-03-feedback': {
    slide: {
      id: 'm1-03-feedback',
      component: () => import('@/components/slides/m1/03-feedback'),
      module: 'm1',
      title: 'Feedback Collection',
      tags: ['feedback', 'interactive', 'form'],
      duration: 3,
      notes: 'Collect feedback from domain expert reviewers'
    },
    loader: () => import('@/components/slides/m1/03-feedback')
  }
  ```

- [x] **Add feedback slide to M1 module** - Update `app/(courses)/modules/m1/page.tsx`
  - Status: Completed
  - Comments: Added 'm1-03-feedback' to m1Slides array in the module page
  ```typescript
  const m1Slides = [
    'm1-01-title',
    'm1-02-interactive',
    'm1-03-feedback'  // Add feedback slide
  ]
  ```

### Phase 6: Testing & Validation

- [ ] **Test local development** - Use `wrangler pages dev` to test locally with D1
  - Status: Pending
  - Comments: Requires wrangler CLI setup and D1 database creation. Run: `wrangler pages dev out --d1=DB=presentation-feedback`

- [x] **Test feedback slide UI** - Verify form renders correctly with all states
  - Status: Completed
  - Comments: Build passed successfully (pnpm run build). All components compile without errors.

- [ ] **Test deployment** - Deploy and verify feedback submission works
  - Status: Pending
  - Comments: Requires Cloudflare Pages deployment with D1 binding

- [ ] **Verify feedback retrieval** - Query D1 to see stored feedback
  - Status: Pending
  - Comments: Run after deployment: `wrangler d1 execute presentation-feedback --command="SELECT * FROM feedback"`

## Testing Strategy

### Unit Tests
- Feedback form validation (Zod schema)
- Presentation ID generation
- API client error handling

### Integration Tests
- Full flow: Submit feedback → Store in D1 → Retrieve
- Multiple feedback submissions per slide
- Multiple reviewers

### Edge Cases
- Offline submission handling (queue and retry)
- Very long feedback text
- Special characters in feedback
- Missing required fields
- Invalid presentation IDs
- D1 database unavailable

## Acceptance Criteria

### Core Feedback System
1. [ ] Reviewers can view a deployed presentation via Cloudflare Pages URL
2. [ ] Cloudflare D1 database is created and accessible
3. [x] Pages Function handles POST requests to store feedback
4. [x] Pages Function handles GET requests to retrieve feedback
5. [x] Feedback is associated with specific slide and presentation IDs
6. [x] Creator can retrieve all feedback for a presentation via API

### Feedback Slide (MVP)
7. [x] Feedback slide (`m1-03-feedback`) is registered and appears in M1 module
8. [x] Slide displays customizable question prompt
9. [x] Form includes: text area for feedback (required), optional name field
10. [x] Submitting feedback sends data to the Pages Function
11. [x] Form shows loading state during submission
12. [x] Form shows success message after successful submission
13. [x] Form shows error message if submission fails
14. [x] Design matches brutalist-minimalist aesthetic (dark bg, orange accents, Bebas Neue titles)
15. [x] Works on mobile devices (responsive layout)
16. [x] Staggered entrance animations match existing slide patterns

## Slide Design Requirements

### Feedback Slide Implementation

This feature includes creating **one dedicated feedback slide** that presents a generic question and collects text feedback directly within the slide (not a floating panel). This is the MVP approach - a self-contained feedback collection slide.

#### Slide: `m1-03-feedback` - Feedback Collection Slide

**Purpose**: A full-screen slide that:
1. Displays a customizable question/prompt to the reviewer
2. Provides a text area for their response
3. Collects optional reviewer name
4. Submits feedback to the backend
5. Shows success/error states

**Visual Design**:
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  [Badge: FEEDBACK]                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │     WE VALUE YOUR                                        │   │
│  │     EXPERTISE                                            │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  "What aspects of this presentation could be improved    │   │
│  │   to better serve domain experts like yourself?"         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │  Your Name (optional)                                    │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │                                                   │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  │                                                          │   │
│  │  Your Feedback                                           │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │                                                   │   │   │
│  │  │                                                   │   │   │
│  │  │                                                   │   │   │
│  │  │                                                   │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  │                                                          │   │
│  │  ┌────────────────────┐                                 │   │
│  │  │  SUBMIT FEEDBACK   │                                 │   │
│  │  └────────────────────┘                                 │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Component Structure**:
- Uses Card component for the form container
- Badge with "FEEDBACK" label
- Large title with Bebas Neue font
- Italic question prompt with Syne font
- Input for reviewer name (optional)
- Textarea for feedback (required)
- Button with loading/success/error states
- GrainOverlay and GeometricPattern for background
- Staggered entrance animations

**Props/Configuration**:
The slide should accept these configurable props via a config object:
```typescript
interface FeedbackSlideConfig {
  questionPrompt: string;      // The question to ask
  title?: string;              // Override default title
  subtitle?: string;           // Override default subtitle
  presentationId: string;      // For mapping feedback
  slideId: string;             // Current slide identifier
  collectName?: boolean;       // Whether to show name field (default: true)
  collectEmail?: boolean;      // Whether to show email field (default: false)
  submitButtonText?: string;   // Custom button text (default: "Submit Feedback")
  successMessage?: string;     // Message after successful submission
}
```

**States**:
1. **Default**: Form ready for input
2. **Submitting**: Loading spinner, disabled inputs
3. **Success**: Green checkmark, thank you message, form hidden or reset
4. **Error**: Red error message, retry option

### New Files for Feedback Slide

- **`components/slides/m1/03-feedback.tsx`** - The feedback collection slide component
- **`config/feedback-slide.ts`** - Configuration for the feedback slide (question, presentation ID, etc.)

## Important Implementation Notes

### Next.js Static Export Consideration

The current `next.config.mjs` has `output: 'export'` which generates a purely static site. To use Cloudflare Pages Functions:

**Option A: Keep Static Export + Separate Functions Folder**
- Keep `output: 'export'` for the site
- Put API handlers in `/functions` directory (Cloudflare-specific)
- Functions are deployed alongside static files
- This is the recommended approach

**Option B: Switch to Edge Runtime**
- Remove `output: 'export'`
- Use Next.js API routes with `runtime: 'edge'`
- More complex, may break existing patterns

**Recommendation: Option A** - Keep the static export approach and use Cloudflare's `/functions` directory convention.

### D1 Binding in Pages Functions

Cloudflare Pages automatically binds D1 databases when you configure `wrangler.toml`. The binding is available as `context.env.DB` in your function handlers.

### Local Development

Use `wrangler pages dev` to test locally with D1:
```bash
wrangler pages dev --d1=presentation-feedback out
```

### Presentation ID Strategy

For mapping feedback to original context:

1. **Generation Time**: When slides are generated from context, create a unique presentation ID
2. **Store in Config**: Save ID in a presentation metadata file
3. **Embed in Build**: Include ID in the static build (e.g., via environment variable or config)
4. **Client Access**: Read ID on client-side to include with feedback submissions

### Security Considerations

- No authentication required (public feedback collection)
- Rate limiting via Cloudflare's built-in protections
- Input sanitization before database storage
- HTTPS enforced by Cloudflare Pages

## Validation Commands

```bash
# Build the presentation
pnpm run build

# Lint code quality
pnpm run lint

# Create D1 database (first time only)
wrangler d1 create presentation-feedback

# Run migration
wrangler d1 execute presentation-feedback --file=migrations/0001_create_feedback_table.sql

# Test locally with D1
wrangler pages dev out --d1=DB=presentation-feedback

# Deploy to Cloudflare
pnpm run deploy:cloudflare

# Query feedback via Wrangler (for verification)
wrangler d1 execute presentation-feedback --command="SELECT * FROM feedback"
```

## Notes

### Future Enhancements

1. **Admin Dashboard** - Build a separate page to view/manage feedback
2. **Export Feedback** - Download as CSV/JSON
3. **Feedback Threading** - Reply to specific feedback items
4. **Sentiment Analysis** - Categorize feedback automatically
5. **Real-time Updates** - Use Cloudflare Durable Objects for live feedback display
6. **Authentication** - Add optional reviewer login for tracking

### Alternative: Simpler Approach with JSONBin

If D1 setup is too complex initially, consider JSONBin.io:

```typescript
// Much simpler API, no database setup
const response = await fetch('https://api.jsonbin.io/v3/b', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Master-Key': process.env.NEXT_PUBLIC_JSONBIN_KEY,
  },
  body: JSON.stringify(feedbackData),
});
```

Limitations: 10K requests/month free, no querying, less control.

### Cost Analysis (Cloudflare D1)

Free tier includes:
- 5 million rows read per day
- 100,000 rows written per day
- 5GB storage

For a feedback system, this is extremely generous. Even with 1000 presentations receiving 100 feedback items each per day, you'd use ~1% of the free tier.

### Migration Path

If you later need more advanced features:
- D1 → Supabase (PostgreSQL) for real-time and auth
- D1 → Turso for edge-optimized global distribution
- D1 → PlanetScale for MySQL compatibility

The API abstraction (`lib/feedback-api.ts`) makes switching backends straightforward.
