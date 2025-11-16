# Pattern Quick Reference for Slide Generation

**Purpose**: Fast pattern discovery for slide-generator agent. Scan this table in <60 seconds to find the right pattern, then load detailed documentation only when needed.

---

## 🎯 Decision Matrix (13 Patterns)

| Your Slide Goal | Pattern Name | Category | Tech | Load Details |
|-----------------|--------------|----------|------|--------------|
| Compare 2 opposing scenarios (before/after, poor/excellent) | **Button Toggle Comparison** | User Control | React state | [📖](../components_inspiration/patterns/button-toggle-comparison/README.md) |
| Show metrics changing over time (weeks, iterations) | **Scrubber Metrics Timeline** | User Control | React state | [📖](../components_inspiration/patterns/scrubber-metrics-timeline/README.md) |
| Calculate ROI or cost/benefit with user inputs | **Real-Time Calculator** | Real-Time Feedback | React + Recharts | [📖](../components_inspiration/patterns/realtime-calculator/README.md) |
| Teach complex concept step-by-step with progressive inputs | **Incremental Prototype** | Real-Time Feedback | React state | [📖](../components_inspiration/patterns/incremental-prototype/README.md) |
| Quick understanding check after learning concept | **Knowledge Test Poll** | Assessment | React state | [📖](../components_inspiration/patterns/knowledge-test-poll/README.md) |
| Formal quiz with scoring and multiple questions | **Formal Quiz** | Assessment | React state | [📖](../components_inspiration/patterns/formal-quiz/README.md) |
| Show maturity levels or conceptual evolution | **Layered Evolution** | Progressive Disclosure | React state | [📖](../components_inspiration/patterns/layered-evolution/README.md) |
| Present 3-5 core principles with minimal distraction | **One-Screen Simplicity** | Layout | Static cards | [📖](../components_inspiration/patterns/one-screen-simplicity/README.md) |
| Explain multi-step process or workflow | **Horizontal Timeline** | Structure | Static flow | [📖](../components_inspiration/patterns/horizontal-timeline/README.md) |
| Clarify role definitions (what X is vs what X is NOT) | **ARE vs NOT Comparison** | Comparison | Two-column | [📖](../components_inspiration/patterns/are-vs-not-comparison/README.md) |
| Show cause-effect with interactive widget | **Interactive Correlation** | Interactive | React state | [📖](../components_inspiration/patterns/interactive-correlation/README.md) |
| Demonstrate time-based process with animation | **Iteration Animation** | Animation | Canvas, RAF | [📖](../components_inspiration/patterns/iteration-animation/README.md) |
| Reveal complex information progressively | **Progressive Disclosure** | Progressive Disclosure | Accordion | [📖](../components_inspiration/patterns/progressive-disclosure/README.md) |

---

## 🌳 Decision Tree

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

---

## 🔄 Layered Discovery Workflow

### Layer 1: SCAN (30 seconds)
- Read the Decision Matrix above
- Use Decision Tree to narrow down
- Identify 2-3 candidate patterns

**Decision Point**: Does ANY existing pattern fit your slide goal?
- ✅ Yes → Proceed to Layer 2
- ❌ No → Design from scratch using [INTERACTIVE_PATTERNS.md](./INTERACTIVE_PATTERNS.md)

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

## 📚 Skills Module Examples

The **Skills course (S1-S3)** contains 63 implemented slides demonstrating these patterns in production. Reference these for advanced implementation examples:

### S1: Choosing AI Technology (20 slides)
- **S1-13**: Context Engineering Toggle → Uses **Button Toggle Comparison** pattern
  - Location: `components/slides/skills/s1/13-context-engineering-toggle.tsx`
  - Shows: Poor vs Excellent context engineering examples

### S2: Understanding Agents (12 slides)
- **S2-03 to S2-06**: Four Components Slides → Uses **Interactive Correlation** / Hover-Reveal pattern
  - Location: `components/slides/skills/s2/03-06-components-*.tsx`
  - Shows: Perception, Planning, Memory, Action components with hover reveals

### S3: Managing AI (31 slides)
- **S3-10**: Iteration Speed Animation → Uses **Iteration Animation** pattern
  - Location: `components/slides/skills/s3/10-iteration-speed.tsx`
  - Shows: Canvas animation comparing slow vs fast iteration cycles

- **S3-28**: Partnership Model Toggle → Uses **Button Toggle Comparison** pattern
  - Location: `components/slides/skills/s3/28-partnership-model.tsx`
  - Shows: Technology-driven vs People-driven AI partnerships

---

## 🎨 Design System Compliance

All patterns follow the complete design system:
- **Typography**: Bebas Neue (titles), Syne (emphasis), Manrope (body), JetBrains Mono (code)
- **Colors**: Electric orange `#FF4D00`, charcoal `#0A0A0A`, neon cyan `#00BBFF`
- **Animations**: Orchestrated entrance sequences with staggered delays
- **Accessibility**: WCAG AA compliance, keyboard navigation, reduced motion support

📖 Full design system: [DESIGN_AESTHETICS.md](./DESIGN_AESTHETICS.md)

---

## 🚨 Important Reminders

### Patterns are INSPIRATION, not Requirements
- You have **full creative freedom** to design custom patterns
- If no existing pattern fits, design from scratch
- Use [INTERACTIVE_PATTERNS.md](./INTERACTIVE_PATTERNS.md) for design guidance
- Prioritize **"Show, Don't Tell"** principle over pattern reuse

### When to Contribute Back
If you create a new pattern that:
- Is used **3+ times** across different slides
- Demonstrates **exceptional UX or clarity**
- Can be **generalized** beyond original context

Then document it and add to the library following [components_inspiration/README.md](../components_inspiration/README.md) guidelines.

---

## 📦 Template Quick Access

For rapid prototyping, use these generic templates:

| Template | Purpose | Location |
|----------|---------|----------|
| **Interactive Comparison** | Button toggles with 2-3 options | `templates/interactive-comparison-template.tsx` |
| **Calculator** | Real-time calculators with sliders/inputs | `templates/calculator-template.tsx` |
| **Quiz** | Quizzes with scoring | `templates/quiz-template.tsx` |
| **Interactive Slide** | Generic interactive with state | `templates/interactive-slide-template.tsx` |
| **Comparison Slide** | Side-by-side comparisons | `templates/comparison-slide-template.tsx` |
| **Story Slide** | Character-driven narratives | `templates/story-slide-template.tsx` |

---

**Last Updated**: December 2024
**Pattern Count**: 13 (6 Foundation + 7 Interactive)
**Skills Examples**: 4 key implementations documented
