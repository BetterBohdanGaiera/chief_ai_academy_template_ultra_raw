# Pattern Quick Reference for Slide Generation

**Purpose**: Fast pattern discovery for slide-generator agent. Scan this table in <60 seconds to find the right pattern, then load detailed documentation only when needed.

**Location**: This index is part of the `artifacts-builder` skill. Patterns are organized into:
- `interactive/` - Interactive pattern documentation (INTERACTIVE_PATTERNS.md)
- `foundation/` - Foundation patterns library (14 patterns with README + component.tsx)

---

## Decision Matrix (14 Patterns)

| Your Slide Goal | Pattern Name | Category | Tech | Load Details |
|-----------------|--------------|----------|------|--------------|
| Collect user preferences or feedback | **Feedback Form** | User Input | React + API | [📖](./foundation/feedback-form/README.md) |
| Compare 2 opposing scenarios (before/after, poor/excellent) | **Button Toggle Comparison** | User Control | React state | [📖](./foundation/button-toggle-comparison/README.md) |
| Show metrics changing over time (weeks, iterations) | **Scrubber Metrics Timeline** | User Control | React state | [📖](./foundation/scrubber-metrics-timeline/README.md) |
| Calculate ROI or cost/benefit with user inputs | **Real-Time Calculator** | Real-Time Feedback | React + Recharts | [📖](./foundation/realtime-calculator/README.md) |
| Teach complex concept step-by-step with progressive inputs | **Incremental Prototype** | Real-Time Feedback | React state | [📖](./foundation/incremental-prototype/README.md) |
| Quick understanding check after learning concept | **Knowledge Test Poll** | Assessment | React state | [📖](./foundation/knowledge-test-poll/README.md) |
| Formal quiz with scoring and multiple questions | **Formal Quiz** | Assessment | React state | [📖](./foundation/formal-quiz/README.md) |
| Show maturity levels or conceptual evolution | **Layered Evolution** | Progressive Disclosure | React state | [📖](./foundation/layered-evolution/README.md) |
| Present 3-5 core principles with minimal distraction | **One-Screen Simplicity** | Layout | Static cards | [📖](./foundation/one-screen-simplicity/README.md) |
| Explain multi-step process or workflow | **Horizontal Timeline** | Structure | Static flow | [📖](./foundation/horizontal-timeline/README.md) |
| Clarify role definitions (what X is vs what X is NOT) | **ARE vs NOT Comparison** | Comparison | Two-column | [📖](./foundation/are-vs-not-comparison/README.md) |
| Show cause-effect with interactive widget | **Interactive Correlation** | Interactive | React state | [📖](./foundation/interactive-correlation/README.md) |
| Demonstrate time-based process with animation | **Iteration Animation** | Animation | Canvas, RAF | [📖](./foundation/iteration-animation/README.md) |
| Reveal complex information progressively | **Progressive Disclosure** | Progressive Disclosure | Accordion | [📖](./foundation/progressive-disclosure/README.md) |

---

## Decision Tree

### 1. Need to COMPARE?
- **2 scenarios** (binary, before/after) → **Button Toggle Comparison**
- **Side-by-side definition** (role clarification) → **ARE vs NOT Comparison**
- **Multiple options** with details → **Interactive Correlation**

### 2. Need to show PROGRESSION?
- **Over time** (iterations, weeks) → **Scrubber Metrics Timeline**
- **Animated process** (speed, efficiency) → **Iteration Animation**
- **Maturity levels** (Level 1 → Level 5) → **Layered Evolution**
- **Multi-step workflow** → **Horizontal Timeline**

### 3. Need to DEMONSTRATE impact?
- **Economic (ROI, cost savings)** → **Real-Time Calculator**
- **Complex concept scaffolding** → **Incremental Prototype**

### 4. Need to ASSESS learning?
- **Informal check** (1 question, immediate feedback) → **Knowledge Test Poll**
- **Formal quiz** (multiple questions, scoring) → **Formal Quiz**

### 5. Need to PRESENT information?
- **3-5 core principles** (minimalist) → **One-Screen Simplicity**
- **Complex info with reveal** (manage cognitive load) → **Progressive Disclosure**

### 6. Need to COLLECT user input?
- **Multiple choice with custom option** → **Feedback Form** (FeedbackChoice)
- **AI-powered conversational** → **Feedback Form** (AgentForm)
- **Simple single question** → **Knowledge Test Poll**
- **Survey/poll with results** → **Feedback Form**

---

## Layered Discovery Workflow

### Layer 1: SCAN (30 seconds)
- Read the Decision Matrix above
- Use Decision Tree to narrow down
- Identify 2-3 candidate patterns

**Decision Point**: Does ANY existing pattern fit your slide goal?
- ✅ Yes → Proceed to Layer 2
- ❌ No → Design from scratch using [INTERACTIVE_PATTERNS.md](./interactive/INTERACTIVE_PATTERNS.md)

### Layer 2: DECIDE (2-3 minutes)
- Read candidate pattern READMEs (click 📖 links above)
- Evaluate **"When to Use"** section - Does this fit my scenario?
- Check **"When NOT to Use"** - Are there anti-patterns?
- Review **"Why It Works"** - Does the psychology match my goal?

**Decision Point**: Which pattern is the BEST fit?
- ✅ Found the right one → Proceed to Layer 3
- ❌ Still uncertain → Re-evaluate or design custom

### Layer 3: LOAD DETAILS (5 minutes)
- Read complete pattern documentation
- Study **"Code Highlights"** - Technical implementation details
- Review **"Reuse Guidelines"** - Step-by-step adaptation process
- Note **"Customization Points"** - What you'll need to change

**Decision Point**: Ready to implement?
- ✅ Yes → Proceed to Layer 4
- ❌ Need more examples → Check Skills Module Examples below

### Layer 4: LOAD CODE (Implementation)
- Copy `component.tsx` from pattern directory
- Adapt based on **Customization Points** from README
- Replace content while preserving structure
- Maintain design system compliance

---

## Design System Compliance

All patterns follow the complete design system defined in `ai_docs/DESIGN_AESTHETICS.md`:
- **Typography**: Bebas Neue (titles), Syne (emphasis), Manrope (body), JetBrains Mono (code)
- **Colors**: Electric orange `#FF4D00`, charcoal `#0A0A0A`, neon cyan `#00BBFF`
- **Animations**: Orchestrated entrance sequences with staggered delays
- **Accessibility**: WCAG AA compliance, keyboard navigation, reduced motion support

---

## Important Reminders

### Patterns are INSPIRATION, not Requirements
- You have **full creative freedom** to design custom patterns
- If no existing pattern fits, design from scratch
- Use [INTERACTIVE_PATTERNS.md](./interactive/INTERACTIVE_PATTERNS.md) for design guidance
- Prioritize **"Show, Don't Tell"** principle over pattern reuse

### When to Contribute Back
If you create a new pattern that:
- Is used **3+ times** across different slides
- Demonstrates **exceptional UX or clarity**
- Can be **generalized** beyond original context

Then document it and add to the library.

---

## Template Quick Access

For rapid prototyping, use these generic templates in `../templates/`:

| Template | Purpose | Location |
|----------|---------|----------|
| **Interactive Comparison** | Button toggles with 2-3 options | `../templates/interactive-comparison-template.tsx` |
| **Calculator** | Real-time calculators with sliders/inputs | `../templates/calculator-template.tsx` |
| **Quiz** | Quizzes with scoring | `../templates/quiz-template.tsx` |
| **Interactive Slide** | Generic interactive with state | `../templates/interactive-slide-template.tsx` |
| **Comparison Slide** | Side-by-side comparisons | `../templates/comparison-slide-template.tsx` |
| **Story Slide** | Character-driven narratives | `../templates/story-slide-template.tsx` |

---

**Last Updated**: December 2024
**Pattern Count**: 14 (7 Foundation + 7 Interactive)
**Location**: `.claude/skills/artifacts-builder/patterns/`
