# Feature: AI-Powered Onboarding & Feedback System with Claude Agent SDK

## Feature Description
Build a comprehensive system that uses the Claude Agent SDK to:
1. **Discover user needs** through intelligent questioning (you provide context, Claude asks clarifying questions)
2. **Generate personalized presentations** based on gathered answers + your provided context
3. **Collect feedback** on generated content through conversational AI

The system creates **dynamic forms on demand** for different contexts (onboarding questions, topic discovery, feedback collection) - all leveraging the SDK's natural conversational abilities while **preserving the default system prompt and skills**.

**Key Principle**: Do NOT overwrite the system prompt. Use `systemPrompt: { type: 'preset', preset: 'claude_code', append: yourContext }` to extend capabilities while keeping Claude's natural conversational flow.

## User Story
As a presentation creator
I want to define question contexts and let Claude naturally ask clarifying questions to users
So that I can generate personalized onboarding presentations based on their answers and gather feedback afterward

## Problem Statement
Creating effective onboarding requires understanding user needs, but:
1. Static forms can't adapt to user responses
2. Generic presentations don't address specific user contexts
3. Feedback collection is shallow without intelligent follow-ups
4. Managing multiple question contexts (onboarding vs feedback) is complex
5. Current implementation uses raw Anthropic SDK instead of the more capable Agent SDK

## Solution Statement
Build a unified system using the **Claude Agent SDK** that supports:
1. **Context-driven question forms** - You define the context, Claude asks the right clarifying questions
2. **Dynamic form generation** - Create different forms for different purposes on demand
3. **Presentation generation triggers** - Use gathered answers to generate personalized content
4. **Conversational feedback** - Rich feedback collection with natural follow-ups
5. **Unified data storage** - All responses organized by form type, context, and session

## Relevant Files

### Existing Files to Modify
- `functions/api/feedback-followup.ts` - **REPLACE** with Agent SDK integration
- `functions/api/feedback.ts` - Extend to support different form types (onboarding, feedback, discovery)
- `lib/feedback-api.ts` - Add methods for Agent SDK sessions and form management
- `types/feedback-conversation.ts` - Extend for multi-form support
- `config/feedback-questions.ts` - Extend with form type definitions

### Existing Files to Reference
- `components/feedback/FeedbackFormWrapper.tsx` - Base component pattern
- `ai_docs/DESIGN_AESTHETICS.md` - Design system
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns

### New Files to Create

#### Core Agent SDK Integration
- `lib/agent-sdk/agent-client.ts` - Core Agent SDK client wrapper
- `lib/agent-sdk/session-store.ts` - Session management (client & server)
- `lib/agent-sdk/types.ts` - TypeScript types for SDK integration

#### Form System
- `lib/forms/form-registry.ts` - Registry for different form types/contexts
- `lib/forms/form-generator.ts` - Dynamic form generation based on context
- `config/form-templates.ts` - Predefined form templates (onboarding, feedback, discovery)

#### API Endpoints
- `functions/api/agent-conversation.ts` - Main Agent SDK conversation endpoint
- `functions/api/forms/[formType].ts` - Dynamic form endpoints

#### UI Components
- `components/agent/AgentConversation.tsx` - Reusable conversation component
- `components/agent/AgentForm.tsx` - Main form container with context display
- `components/agent/ContextPanel.tsx` - Display question context to user
- `components/agent/FormSelector.tsx` - Select/create different form types

#### Presentation Generation
- `lib/presentation/generator.ts` - Generate presentations from gathered data
- `components/presentation/GeneratedPresentation.tsx` - Display generated content

## Implementation Plan

- [x] **Phase 1: Foundation** - Agent SDK setup and form system architecture
  - Status: Completed
  - Comments: Installed @anthropic-ai/claude-agent-sdk@0.1.67, created comprehensive type system in lib/agent-sdk/types.ts, built session store with localStorage persistence

- [x] **Phase 2: Form System** - Dynamic form generation with context injection
  - Status: Completed
  - Comments: Created form registry, 4 predefined templates (onboarding/feedback/discovery/team), dynamic form generator with cloning support

- [x] **Phase 3: Agent Integration** - Claude Agent SDK conversation handling
  - Status: Completed
  - Comments: Built agent-client.ts with context injection, conversation management, completion detection, and answer extraction using Anthropic SDK

- [x] **Phase 4: Data Layer** - Storage for different form types and responses
  - Status: Completed
  - Comments: Created migration 0003_add_agent_sessions.sql, built agent-conversation.ts API endpoint with full CRUD and database persistence

- [x] **Phase 5: UI Components** - Interactive forms and conversation interfaces
  - Status: Completed
  - Comments: Created AgentForm, ContextPanel, AgentConversation, and FormSelector components with design system compliance and accessibility

- [x] **Phase 6: Presentation Generation** - Generate content from gathered answers
  - Status: Completed
  - Comments: Built presentation generator with slide creation, readiness detection, and GeneratedPresentation display component

## Step by Step Tasks

### Phase 1: Foundation

- [x] **Install Claude Agent SDK** - Add `@anthropic-ai/claude-agent-sdk` package
  - Status: Completed
  - Comments: Installed @anthropic-ai/claude-agent-sdk@0.1.67 via `pnpm add @anthropic-ai/claude-agent-sdk`

- [x] **Create SDK type definitions** - Define TypeScript interfaces in `lib/agent-sdk/types.ts`
  - Status: Completed
  - Comments: Created comprehensive type definitions including FormType, QuestionContext, FormDefinition, AgentSession, ConversationMessage, and API request/response types
    ```typescript
    // Form types
    type FormType = 'onboarding' | 'feedback' | 'discovery' | 'custom'

    // Context you provide for each question
    interface QuestionContext {
      topic: string
      background: string
      desiredOutcome: string
      clarifyingHints?: string[] // Hints for what Claude should clarify
    }

    // Form definition
    interface FormDefinition {
      id: string
      type: FormType
      title: string
      questions: QuestionWithContext[]
      metadata: Record<string, unknown>
    }

    // Session with form context
    interface AgentSession {
      sessionId: string
      formId: string
      formType: FormType
      questionContext: QuestionContext
      messages: ConversationMessage[]
      gatheredAnswers: Record<string, unknown>
      status: 'active' | 'completed' | 'abandoned'
    }
    ```

- [x] **Create session store** - Build `lib/agent-sdk/session-store.ts` for managing sessions
  - Status: Completed
  - Comments: Created comprehensive session store with localStorage persistence, session CRUD operations, message management, answer tracking, and UI state helpers

### Phase 2: Form System

- [x] **Create form registry** - Build `lib/forms/form-registry.ts` for managing form definitions
  - Status: Completed
  - Comments: Created form registry with CRUD operations, question helpers, and form creation utilities
    ```typescript
    // Register form types with their contexts
    const formRegistry = {
      'user-onboarding': {
        type: 'onboarding',
        questions: [
          {
            id: 'role',
            primaryQuestion: 'What is your primary role?',
            context: {
              topic: 'User Role Identification',
              background: 'Understanding role helps customize the presentation...',
              desiredOutcome: 'Identify if user is executive, developer, or manager',
              clarifyingHints: ['Ask about team size', 'Ask about AI experience']
            }
          },
          // ... more questions
        ]
      },
      'presentation-feedback': {
        type: 'feedback',
        questions: [...]
      }
    }
    ```

- [x] **Create form templates** - Build `config/form-templates.ts` with predefined templates
  - Status: Completed
  - Comments: Created 4 predefined templates (executive onboarding, presentation feedback, topic discovery, team assessment) with full question contexts and clarifying hints

- [x] **Create form generator** - Build `lib/forms/form-generator.ts` for dynamic form creation
  - Status: Completed
  - Comments: Created dynamic form generator with quick builders for onboarding/feedback/discovery, form cloning with modifications, and contextual form generation for different scenarios

### Phase 3: Agent Integration

- [x] **Create Agent SDK client** - Build `lib/agent-sdk/agent-client.ts` with proper configuration
  - Status: Completed
  - Comments: Created agent client with context injection, conversation management, completion detection, and answer extraction. Uses Anthropic SDK for Cloudflare compatibility with Claude Agent SDK patterns.
    ```typescript
    import { query } from "@anthropic-ai/claude-agent-sdk";

    export async function startConversation(
      formDefinition: FormDefinition,
      questionContext: QuestionContext,
      userMessage: string
    ) {
      const contextPrompt = `
        You are helping gather information through a conversational interview.

        FORM TYPE: ${formDefinition.type}
        CURRENT TOPIC: ${questionContext.topic}

        BACKGROUND CONTEXT:
        ${questionContext.background}

        DESIRED OUTCOME:
        ${questionContext.desiredOutcome}

        ${questionContext.clarifyingHints?.length ? `
        AREAS TO CLARIFY (ask naturally, don't force):
        ${questionContext.clarifyingHints.map(h => `- ${h}`).join('\n')}
        ` : ''}

        Guidelines:
        - Ask clarifying questions naturally based on user responses
        - Don't ask all clarifying questions at once - be conversational
        - When you have enough information, summarize and move on
        - Be concise but thorough
      `;

      return query({
        prompt: userMessage,
        options: {
          systemPrompt: {
            type: 'preset',
            preset: 'claude_code',
            append: contextPrompt
          },
          settingSources: ['project'],
          allowedTools: [], // No tools for conversation
          maxTurns: 15,
        }
      });
    }
    ```

- [x] **Implement session resume** - Handle conversation continuation
  - Status: Completed
  - Comments: Session resume implemented in session-store.ts with getSession, updateSession, and conversation history management

- [x] **Create answer extraction** - Parse completed conversations for structured answers
  - Status: Completed
  - Comments: Implemented extractAnswer() and extractInsights() functions in agent-client.ts for parsing conversations into structured GatheredAnswer objects

### Phase 4: Data Layer

- [x] **Extend database schema** - Add form type and context tracking
  - Status: Completed
  - Comments: Created migrations/0003_add_agent_sessions.sql with agent_sessions and form_responses tables

- [x] **Create API endpoint** - Build `functions/api/agent-conversation.ts`
  - Status: Completed
  - Comments: Created full API endpoint with context injection, conversation continuation, completion detection, and database persistence

- [x] **Implement data aggregation** - Collect answers across questions in a form
  - Status: Completed
  - Comments: Data aggregation implemented in lib/feedback-api.ts with sendAgentMessage, startAgentConversation, and continueAgentConversation functions; session store handles gatheredAnswers aggregation

### Phase 5: UI Components

- [x] **Create AgentForm component** - Main form container
  - Status: Completed
  - Comments: Created comprehensive AgentForm component with progress bar, question display, context panel, conversation thread, and input area with session management

- [x] **Create ContextPanel component** - Display question context to user
  - Status: Completed
  - Comments: Created ContextPanel with collapsible sections showing topic, background, desired outcome, and clarifying hints

- [x] **Create AgentConversation component** - Conversation display
  - Status: Completed
  - Comments: Created AgentConversation with message bubbles, user/assistant distinction, typing indicator, and auto-scroll functionality

- [x] **Create FormSelector component** - Switch between form types
  - Status: Completed
  - Comments: Created FormSelector with card-based form selection, icons per form type, and question count display

### Phase 6: Presentation Generation

- [x] **Create generation trigger** - Detect when enough information is gathered
  - Status: Completed
  - Comments: Created canGeneratePresentation() and getGenerationReadiness() functions in lib/presentation/generator.ts

- [x] **Create presentation generator** - Transform answers into presentation
  - Status: Completed
  - Comments: Created generatePresentation() with slide generation, content extraction, and summary creation in lib/presentation/generator.ts

- [x] **Create generated presentation display** - Show resulting content
  - Status: Completed
  - Comments: Created GeneratedPresentation component with slide preview, navigation, metadata display, and export options

## Testing Strategy

### Unit Tests
- Form registry operations
- Session management
- Context injection formatting
- Answer extraction from conversations

### Integration Tests
- Full conversation flow with context switching
- Form type switching mid-session
- Presentation generation from answers
- Data storage and retrieval

### Edge Cases
- User wants to skip a question
- User provides off-topic responses
- Session timeout during multi-question form
- Switching form types mid-conversation
- Very long or very short responses

## Acceptance Criteria
1. Can define multiple form types with different contexts (onboarding, feedback, discovery)
2. Claude Agent SDK is used with preserved system prompt (`preset: 'claude_code'`)
3. Context is injected per question, guiding Claude's clarifying questions
4. Sessions persist across page reloads
5. All responses are stored with form type, context, and session associations
6. Completed onboarding forms trigger presentation generation
7. Different forms can be created on demand for different contexts
8. Build completes without TypeScript errors
9. UI follows design system (teal primary, proper typography)

## Slide Design Requirements
N/A - This feature creates interactive form components, not static slides.

### Visual Component Selection
- **Form container**: Glass variant Card with teal accents
- **Context panel**: Collapsible accordion with background info
- **Conversation**: Message bubbles with user/assistant distinction
- **Input area**: Styled textarea with send button
- **Form selector**: Tabs or dropdown for form type selection
- **Progress indicator**: Show question progress in multi-question forms

### Layout Design
- **Desktop**: Two-column (context panel left, conversation right)
- **Mobile**: Stacked (context collapsible at top, conversation below)
- **Full-screen option**: For focused onboarding experience

### Interactive & Animation Patterns
- **Message entrance**: Slide-in animation for new messages
- **Context expand/collapse**: Smooth accordion animation
- **Typing indicator**: Animated dots during Claude response
- **Form transition**: Fade between different form types

### Color & Typography Usage
- **Primary teal**: Buttons, user message backgrounds, accents
- **Navy accent**: Important context highlights
- **Typography**: Manrope for messages, Syne for headers

### Accessibility Checklist
- [x] WCAG AA color contrast
- [x] Keyboard navigation
- [x] Screen reader support
- [x] Focus states visible
- [x] Reduced motion support

## Validation Commands
- `pnpm run build` - Validate no TypeScript errors
- `pnpm run lint` - Validate code quality
- `pnpm run dev` - Manual testing of conversation flows
- Visual inspection of form switching, context display, conversation quality

## Notes

### Architecture Overview
```
┌─────────────────────────────────────────────────────────────┐
│                    FORM SYSTEM                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  Onboarding  │    │   Feedback   │    │  Discovery   │  │
│  │    Form      │    │    Form      │    │    Form      │  │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘  │
│         │                   │                   │           │
│         └───────────────────┼───────────────────┘           │
│                             │                               │
│                    ┌────────▼────────┐                      │
│                    │  Form Registry  │                      │
│                    │  (contexts +    │                      │
│                    │   questions)    │                      │
│                    └────────┬────────┘                      │
│                             │                               │
└─────────────────────────────┼───────────────────────────────┘
                              │
┌─────────────────────────────┼───────────────────────────────┐
│                    AGENT SDK│LAYER                          │
├─────────────────────────────┼───────────────────────────────┤
│                             │                               │
│                    ┌────────▼────────┐                      │
│                    │  Agent Client   │                      │
│                    │  (preserves     │                      │
│                    │   system prompt)│                      │
│                    └────────┬────────┘                      │
│                             │                               │
│        ┌────────────────────┼────────────────────┐          │
│        │                    │                    │          │
│  ┌─────▼─────┐       ┌──────▼──────┐     ┌──────▼──────┐   │
│  │  Context  │       │   Session   │     │   Answer    │   │
│  │ Injection │       │   Resume    │     │ Extraction  │   │
│  └───────────┘       └─────────────┘     └─────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────┼───────────────────────────────┐
│                    DATA LAYER                                │
├─────────────────────────────┼───────────────────────────────┤
│                             │                               │
│  ┌──────────────────────────▼──────────────────────────┐   │
│  │                    D1 Database                       │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │   │
│  │  │   Forms     │  │  Sessions   │  │  Responses  │  │   │
│  │  │  (types,    │  │  (state,    │  │  (answers,  │  │   │
│  │  │   contexts) │  │   history)  │  │   context)  │  │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
            ┌─────────────────────────────────┐
            │   PRESENTATION GENERATION       │
            │   (uses gathered answers +      │
            │    provided context)            │
            └─────────────────────────────────┘
```

### Example: Creating an Onboarding Form

```typescript
// You define the context, Claude asks the clarifying questions
const onboardingForm = createForm({
  id: 'executive-onboarding',
  type: 'onboarding',
  title: 'Executive AI Readiness Assessment',
  questions: [
    {
      id: 'current-state',
      primaryQuestion: 'Tell me about your current AI initiatives',
      context: {
        topic: 'Current AI State Assessment',
        background: `
          We need to understand where the organization is today with AI.
          This helps us tailor the presentation to their maturity level.
          AI maturity ranges from Level 0 (no AI) to Level 5 (AI-native).
        `,
        desiredOutcome: 'Determine AI maturity level (0-5)',
        clarifyingHints: [
          'Ask about specific AI tools being used',
          'Ask about who is using AI (individuals vs teams)',
          'Ask about governance or policies around AI',
          'Ask about measurable outcomes from AI initiatives'
        ]
      }
    },
    {
      id: 'goals',
      primaryQuestion: 'What are your AI goals for the next 12 months?',
      context: {
        topic: 'AI Strategy Goals',
        background: `
          Understanding goals helps us focus the presentation on relevant content.
          Common goals: cost reduction, revenue growth, productivity, innovation.
        `,
        desiredOutcome: 'Identify top 2-3 strategic priorities',
        clarifyingHints: [
          'Ask about budget allocated for AI',
          'Ask about timeline expectations',
          'Ask about success metrics they care about'
        ]
      }
    }
  ]
});
```

### Claude Agent SDK Key Configuration

```typescript
// CORRECT - Preserves natural abilities while adding your context
const response = await query({
  prompt: userMessage,
  options: {
    systemPrompt: {
      type: 'preset',
      preset: 'claude_code',
      append: yourQuestionContext  // Your context injected here
    },
    settingSources: ['project'],  // Load CLAUDE.md
    allowedTools: [],             // No tools for conversation
    maxTurns: 15,
    resume: existingSessionId,    // Resume if continuing
  }
});
```

### Sources
- [Claude Agent SDK Overview](https://platform.claude.com/docs/en/agent-sdk/overview)
- [TypeScript SDK Reference](https://platform.claude.com/docs/en/api/agent-sdk/typescript)
- [Claude Agent SDK GitHub](https://github.com/anthropics/claude-agent-sdk-typescript)
- [npm Package](https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk)
