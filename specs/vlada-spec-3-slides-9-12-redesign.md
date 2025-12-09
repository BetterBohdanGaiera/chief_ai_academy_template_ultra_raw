# Feature: Vlada - Slide Redesign (Slides 9-12: Premium Plan Features)

## Feature Description
Redesign of slides 9-12 for the Vlada dental finance presentation, covering the Premium Plan ("Finansove Partnerstvo") tier at 19,000 UAH/month. This section introduces the premium tier persona (Andrii's growing clinic), then deep-dives into three key premium features: regular Zoom meetings, service cost calculation, and yearly financial planning. The redesign will transform static content into interactive, engaging demonstrations using proven design patterns.

## User Story
As a presentation developer
I want to redesign vlada premium plan slides (9-12)
So that potential clients clearly understand the value proposition of the premium tier through interactive demonstrations, visual data comparisons, and engaging problem-solution presentations that follow POC-style design principles

## Problem Statement
Current slides (if static) face these challenges:
- Premium tier value proposition may not be immediately clear without visual demonstration
- Complex financial concepts (cost calculation, yearly planning) need interactive exploration
- Before/after problem-solution pairs benefit from toggle comparisons rather than static text
- Data tables for cost breakdown and yearly plans need clear visual hierarchy
- Persona introduction slide needs warmth and connection

## Solution Statement
Redesign slides using POC-style interactive patterns from `ai_docs/components_inspiration/` and `ai_docs/INTERACTIVE_PATTERNS.md`:
- **UPDATE/OVERWRITE existing slide files** with completely new implementations (replacing old versions)
- Use **Button Toggle Comparison** for problem-solution reveals (Zoom meetings, cost calc)
- Use **Progressive Disclosure** with data tables for cost breakdown and yearly plan
- Use **One-Screen Simplicity** for premium tier introduction with persona card
- Add AI-generated background images at appropriate opacity (NO TEXT in images)
- Ensure design system compliance (DESIGN_AESTHETICS.md) with teal/navy palette
- Follow "Show, Don't Tell" philosophy throughout

## Relevant Files

### Source Content
- `data_vlada/presentation.md` - Module source content (Premium Plan section)

### Existing Slide Files (to be updated/overwritten)
- `components/slides/vlada/09-premium-plan-intro.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/10-premium-zoom-meetings.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/11-premium-cost-calculation.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/12-premium-yearly-plan.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**

### Design Documentation
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (teal healthcare + navy fintech)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/one-screen-simplicity/` - Pattern for slide 09
- `ai_docs/components_inspiration/patterns/button-toggle-comparison/` - Pattern for slides 10, 11
- `ai_docs/components_inspiration/patterns/progressive-disclosure/` - Pattern for slide 12
- `ai_docs/components_inspiration/patterns/realtime-calculator/` - Reference for data visualization

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/vlada/*.tsx` - Slide components to **UPDATE/OVERWRITE**
- `config/slides.ts` - Slide registry

### Files to Update/Create
- `components/slides/vlada/09-premium-plan-intro.tsx` - **Slide to UPDATE (overwrite existing)**
- `components/slides/vlada/10-premium-zoom-meetings.tsx` - **Slide to UPDATE (overwrite existing)**
- `components/slides/vlada/11-premium-cost-calculation.tsx` - **Slide to UPDATE (overwrite existing)**
- `components/slides/vlada/12-premium-yearly-plan.tsx` - **Slide to UPDATE (overwrite existing)**
  - **Tool usage**: Always use Write tool (overwrites automatically) NOT Edit tool

---

## Content Breakdown

### Slide 09: Premium Plan Intro - "Finansove Partnerstvo" (19,000 UAH/month)
**Source**: `data_vlada/presentation.md` (Premium Plan Introduction section)
**Language**: Ukrainian

**Content**:
- **Persona**: Andrii's Clinic - dentistry with 3 chairs, 5 doctors, operating 3 years
- **Andrii's Goals**:
  - Open second branch within a year
  - Understand which services bring more profit
  - Know how much money can be safely withdrawn
  - Optimize doctor utilization
- **Key Message**: "Andrii needs not just accounting, but a FINANCIAL PARTNER for growth"
- **Plan Criteria** (who this is for):
  - Want not only to see numbers, but influence them
  - Planning development: new chair, office, branch
  - Want to understand service cost structure
  - Need regular calls, not just messaging
- **Value Proposition**: "Plan includes everything from basic + 6 additional services"
- **Price**: 19,000 UAH/month

**Learning Objectives**:
- Identify with the persona (growing dental clinic owner)
- Understand premium tier is for growth-oriented clinics
- Recognize the shift from "accounting" to "financial partnership"

**Interactive Elements**:
- Persona card with hover-reveal for goals
- Feature preview cards showing +6 additional services
- Badge showing price with glow effect

### Slide 10: Premium Feature #1 - "Regular Zoom Meetings"
**Source**: `data_vlada/presentation.md` (Zoom meetings feature section)
**Language**: Ukrainian

**Content**:
- **Problem Statement**: "Got 5-page report. Looked. Closed. Forgot. Numbers exist - understanding doesn't."
- **Solution**: "Once a month - 40-60 minutes Zoom with your financier"
- **Meeting Includes**:
  - Review reports together
  - You ask questions - get clear answers
  - Discuss what to do next month
- **Example Dialogue**:
  > **You**: "Why did profit drop 30% in March?"
  > **We**: "Look: revenue stayed the same, but material costs increased by 40,000 UAH. This is purchase for April. In April situation will normalize. This is not a problem - it's inventory."
- **Outcome**: "Instead of anxiety - understanding."

**Learning Objectives**:
- Feel the pain of unread reports (problem)
- See the value of expert interpretation (solution)
- Visualize the dialogue format of meetings

**Interactive Elements**:
- Toggle between "Problem" (anxiety, confusion) and "Solution" (clarity, understanding)
- Example dialogue as chat-style conversation UI
- Color-coded states: red for problem, teal for solution

### Slide 11: Premium Feature #2 - "Service Cost Calculation"
**Source**: `data_vlada/presentation.md` (Cost calculation feature section)
**Language**: Ukrainian

**Content**:
- **Problem Statement**: "You know service prices. But do you know how much it REALLY COSTS to provide each service?"
- **Solution**: "Monthly calculate cost for up to 20 key services"
- **Example**: Installing an implant

| Item | Amount |
|--------|-----:|
| Implant + consumables | 6,000 UAH |
| Doctor's work (2 hours) | 3,000 UAH |
| Overhead costs* | 2,000 UAH |
| **Cost** | **11,000 UAH** |
| Patient price | 15,000 UAH |
| **Your profit** | **4,000 UAH** |

*overhead = share of rent, utilities, admin expenses per service

- **Benefits**:
  - Learn which services are actually profitable
  - Understand where you can raise prices
  - See which services "eat" money
  - Focus marketing on profitable services

**Learning Objectives**:
- Understand true service cost vs. price
- See the breakdown of cost components
- Recognize actionable insights from cost analysis

**Interactive Elements**:
- Toggle between "Surface View" (just prices) and "Deep View" (full cost breakdown)
- Interactive cost breakdown table with visual bars
- Profit margin visualization (green bar showing 4,000 UAH profit)
- Hover-reveal on overhead to explain components

### Slide 12: Premium Feature #3 - "Yearly Financial Plan"
**Source**: `data_vlada/presentation.md` (Yearly plan feature section)
**Language**: Ukrainian

**Content**:
- **Problem Statement**: "Working month by month. Good month - happy. Bad month - worried. But no understanding: are you moving toward the goal or not?"
- **Solution**: "Build financial model for the clinic for a year ahead"
- **Example**: Andrii's clinic
- **Goal for year**: revenue 1,200,000 UAH/month (was 950,000 UAH/month)

| Month | Plan | Actual | Difference |
|--------|-----:|-----:|--------:|
| January | 1,000,000 | 980,000 | -20,000 |
| February | 1,050,000 | 1,100,000 | +50,000 |
| March | 1,100,000 | 1,080,000 | -20,000 |
| April | 1,100,000 | ? | - |

- **Model Accounts For**:
  - Seasonality (summer -20%, December +15%)
  - Doctor vacations
  - Planned investments
- **Result**: "In May we fell behind by 50,000 UAH - in June we know we need to catch up"

**Learning Objectives**:
- Understand monthly variance tracking
- See how plan vs actual comparison works
- Recognize the value of forward-looking financial planning

**Interactive Elements**:
- Progressive disclosure: reveal months one by one (Q1, Q2, Q3, Q4)
- Color-coded variance: green for positive, red for negative
- Running total showing cumulative progress toward goal
- Seasonality visualization as subtle chart background

---

## Visual Design Recommendations

### Slide 09: Premium Plan Intro
**Pattern**: One-Screen Simplicity (`patterns/one-screen-simplicity/`)
**Rationale**: Premium tier introduction benefits from clear, scannable layout with persona card and feature preview. Single-screen format allows instant comprehension of who this tier is for and what it includes.

**Key Features**:
- Hero persona card (Andrii's clinic) with warm illustration
- 4 goal cards arranged horizontally with icons
- Badge showing "19,000 UAH/mic" with glow variant
- "Includes basic + 6 additional services" callout
- Staggered entrance animations (badge -> title -> persona -> goals)

**Layout**:
- Two-column: Left (persona card + illustration), Right (goals + criteria)
- `grid grid-cols-1 lg:grid-cols-2 gap-8`
- Centered title with Badge above

**Color Scheme**:
- Primary teal for persona card border
- Navy accent for professional fintech feel
- Warm gradient background (from-background to-teal-50)

### Slide 10: Premium Feature #1 - Zoom Meetings
**Pattern**: Button Toggle Comparison (`patterns/button-toggle-comparison/`)
**Rationale**: The problem-solution structure is perfect for toggle comparison. Users can directly experience the contrast between "confusion" and "clarity" states, creating memorable cognitive anchors.

**Key Features**:
- Binary toggle: "Problem" vs "Solution" buttons
- Problem state: Red-tinted cards showing anxiety, unread reports
- Solution state: Teal-tinted cards showing meeting benefits
- Chat-style dialogue UI showing example Q&A
- Animated transitions between states

**Layout**:
- Toggle buttons at top center
- Dynamic content grid below (2 columns)
- Example dialogue card at bottom

**Color Scheme**:
- Problem state: `border-destructive/40 bg-destructive/5`
- Solution state: `border-primary/40 bg-primary/5`
- Dialogue: Chat bubbles with distinct colors (user: muted, financier: primary)

### Slide 11: Premium Feature #2 - Cost Calculation
**Pattern**: Button Toggle Comparison + Real-Time Calculator elements (`patterns/button-toggle-comparison/` + `patterns/realtime-calculator/`)
**Rationale**: Showing the difference between "surface view" (just price) and "deep view" (full cost breakdown) is a powerful toggle. The data table benefits from calculator-style formatting with visual profit bar.

**Key Features**:
- Toggle: "Surface View" vs "Deep Analysis"
- Surface: Simple price display (15,000 UAH)
- Deep: Full cost breakdown table with itemized costs
- Profit visualization: Green bar showing margin (26.7%)
- Benefits list with checkmarks

**Layout**:
- Left column: Cost breakdown table with visual bars
- Right column: Benefits/insights cards
- Toggle buttons at top

**Color Scheme**:
- Cost items: Neutral styling with subtle backgrounds
- Total row: Navy accent for emphasis
- Profit: Success green (`text-success`, `bg-success/10`)
- Benefits icons: Primary teal

### Slide 12: Premium Feature #3 - Yearly Plan
**Pattern**: Progressive Disclosure (`patterns/progressive-disclosure/`)
**Rationale**: The yearly plan with monthly data is perfect for progressive disclosure. Revealing quarters sequentially creates narrative arc and prevents data overwhelm. The before/after problem-solution also benefits from staged reveal.

**Key Features**:
- Problem card (month-by-month anxiety) revealed first
- Solution cards with quarterly tables revealed progressively
- Color-coded variance column (green +, red -)
- Goal tracker showing progress toward 1,200,000 UAH/month
- Seasonality footnotes

**Layout**:
- Stacked layout with staggered reveals (300ms delays)
- Tables with highlighted summary rows
- Goal progress card at bottom

**Color Scheme**:
- Positive variance: `text-success` (green)
- Negative variance: `text-destructive` (red)
- Goal progress: Primary teal with progress bar
- Table headers: Navy accent

---

## Image Generation Strategy

### Slide 09: Premium Plan Intro
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- Subject: Partnership handshake with growth elements, dental clinic setting
- Prompt: "A professional handwritten illustration of two hands in a partnership handshake with ascending growth arrows and a small clinic building silhouette in background, featuring warm teal tones (calming teal #00897B, light teal accents #26A69A), with charcoal outlines and off-white background. Partnership symbolism through interlocking geometric forms, upward momentum through diagonal lines. No text, no numbers, no labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses visual partnership metaphor only
- Generation command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`

### Slide 10: Premium Feature #1 - Zoom Meetings
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- Subject: Video call connection, clarity emerging from confusion
- Prompt: "A professional handwritten illustration of a video call screen frame with two abstract figures in conversation, surrounded by flowing lines suggesting understanding and connection, featuring warm teal tones (#00897B) and soft navy accents (#1E3A5F), with charcoal outlines and white background. Abstract waves representing dialogue flow, no text or interface elements. Editorial style, clean lines, minimal shading."
- **Validation**: No text/UI elements - uses abstract conversation metaphor
- Generation command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`

### Slide 11: Premium Feature #2 - Cost Calculation
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- Subject: Layered cost breakdown visualization, dental tool silhouette
- Prompt: "A professional handwritten illustration of stacked horizontal bars creating a layered structure, with a small dental implant icon silhouette, featuring warm teal tones (#00897B) and soft gray accents, with charcoal outlines and off-white background. Abstract geometric layers suggesting cost components stacking, no numbers or text labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers - uses stacked bars as visual metaphor for cost layers
- Generation command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`

### Slide 12: Premium Feature #3 - Yearly Plan
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- Subject: Calendar/timeline with growth trajectory
- Prompt: "A professional handwritten illustration of a horizontal timeline with twelve vertical marker lines suggesting months, with a gently ascending dotted line curve showing growth trajectory, featuring warm teal tones (#00897B) and light accents, with charcoal outlines and off-white background. Abstract calendar structure, no month names or numbers visible. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/month names - uses abstract timeline structure only
- Generation command: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`

---

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status: COMPLETE (in this spec)
  - Comments: All 4 slides planned with patterns and image prompts

- [ ] **Phase 2: Implementation** - Use slide-generator agent to **UPDATE/OVERWRITE existing slides**
  - **CRITICAL**: Agent will use Write tool to completely replace existing slide files with new implementations
  - **No duplicates**: Old slide versions will be overwritten, not preserved
  - Status: PENDING
  - Comments: Ready for implementation

- [ ] **Phase 3: Integration & Validation** - Register slides, test navigation, validate design system compliance
  - Status: PENDING
  - Comments: Verify slides work in presentation flow

---

## Step by Step Tasks

### Foundation Work

- [x] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, components_inspiration/
  - Status: COMPLETE
  - Comments: All relevant patterns identified

- [x] **Extract source content** - Read module content from data_vlada/presentation.md
  - Status: COMPLETE
  - Comments: Content provided in assignment context

- [x] **Match patterns** - Consult components_inspiration/ and identify best-fit patterns for each slide
  - Status: COMPLETE
  - Comments: Patterns selected: One-Screen Simplicity (09), Button Toggle Comparison (10, 11), Progressive Disclosure (12)

### Image Generation

- [x] **Generate background image for Slide 09** - Run: `tsx generate-image.ts "A professional handwritten illustration of two hands in a partnership handshake with ascending growth arrows and a small clinic building silhouette in background, featuring warm teal tones (calming teal #00897B, light teal accents #26A69A), with charcoal outlines and off-white background. Partnership symbolism through interlocking geometric forms, upward momentum through diagonal lines. No text, no numbers, no labels. Editorial style, clean lines, minimal shading." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated as gemini-1765289882493-1.png (1.5MB)

- [x] **Generate background image for Slide 10** - Run: `tsx generate-image.ts "A professional handwritten illustration of a video call screen frame with two abstract figures in conversation, surrounded by flowing lines suggesting understanding and connection, featuring warm teal tones (#00897B) and soft navy accents (#1E3A5F), with charcoal outlines and white background. Abstract waves representing dialogue flow, no text or interface elements. Editorial style, clean lines, minimal shading." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated as gemini-1765289877038-1.png (0.98MB)

- [x] **Generate background image for Slide 11** - Run: `tsx generate-image.ts "A professional handwritten illustration of stacked horizontal bars creating a layered structure, with a small dental implant icon silhouette, featuring warm teal tones (#00897B) and soft gray accents, with charcoal outlines and off-white background. Abstract geometric layers suggesting cost components stacking, no numbers or text labels. Editorial style, clean lines, minimal shading." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated as gemini-1765289897481-1.png (0.94MB)

- [x] **Generate background image for Slide 12** - Run: `tsx generate-image.ts "A professional handwritten illustration of a horizontal timeline with twelve vertical marker lines suggesting months, with a gently ascending dotted line curve showing growth trajectory, featuring warm teal tones (#00897B) and light accents, with charcoal outlines and off-white background. Abstract calendar structure, no month names or numbers visible. Editorial style, clean lines, minimal shading." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated as gemini-1765289887319-1.png (1.03MB)

### Slide Implementation

- [x] **Implement Slide 09** - **UPDATE/OVERWRITE** using One-Screen Simplicity pattern
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: Created 09-premium-plan-intro.tsx with persona card (Andrii's clinic), hover-reveal goals, criteria checklist, glow badge with price. Two-column layout with Ukrainian content. Uses gemini-1765289882493-1.png at 12% opacity.

- [x] **Implement Slide 10** - **UPDATE/OVERWRITE** using Button Toggle Comparison pattern
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: Created 10-premium-zoom-meetings.tsx with Problem/Solution toggle, chat-style dialogue UI, Ukrainian content. Uses teal/destructive color coding.

- [x] **Implement Slide 11** - **UPDATE/OVERWRITE** using Button Toggle Comparison + Calculator elements
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: Created 11-premium-cost-calculation.tsx with Surface/Deep toggle, cost breakdown table with visual bars, profit visualization (green bar showing 26.7% margin), benefits list. Uses warning/primary color coding. Ukrainian content. Uses gemini-1765289897481-1.png at 10% opacity.

- [x] **Implement Slide 12** - **UPDATE/OVERWRITE** using Progressive Disclosure pattern
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: Created 12-premium-yearly-plan.tsx with progressive quarterly reveal, variance tracking (green/red), auto-reveal with manual override buttons, seasonality notes, goal progress tracking. Ukrainian content.

### Integration & Validation

- [x] **Register slides in config/slides.ts** - Add/update slide metadata and ordering
  - Status: COMPLETE (for slides 10, 12)
  - Comments: Slides registered as vlada-10-premium-zoom-meetings and vlada-12-premium-yearly-plan. Slides 09 and 11 pending (assigned to different agent).

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation
  - Status: PENDING
  - Comments: Test forward/backward navigation

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status: PENDING
  - Comments: Verify teal/navy palette, font hierarchy, focus states

- [x] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: COMPLETE (for slides 10, 12)
  - Comments: Build passed successfully. No TypeScript errors.

---

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- Test each slide renders without errors
- Test slide navigation (next/previous)
- Test interactive elements:
  - Slide 10: Toggle between Problem/Solution states
  - Slide 11: Toggle between Surface/Deep views
  - Slide 12: Progressive reveal triggers correctly
- Test responsive layouts at breakpoints (mobile, tablet, desktop)

### Edge Cases
- Rapid clicking on toggle buttons
- Hover effects on touch devices
- Animations with prefers-reduced-motion
- Keyboard navigation through all interactive elements (Tab, Enter, Space)
- Ukrainian text rendering (cyrillic characters)

---

## Acceptance Criteria

- [ ] All slides have AI-generated background images at appropriate opacity (10-12%)
- [ ] All slides use patterns from components_inspiration/ or INTERACTIVE_PATTERNS.md
- [ ] All slides follow design system (DESIGN_AESTHETICS.md) - teal primary, navy accent
- [ ] All slides are responsive (mobile, tablet, desktop)
- [ ] All slides have proper entrance animations (staggered reveals)
- [ ] All interactive elements provide clear feedback (hover states, active states)
- [ ] All slides meet WCAG AA accessibility standards
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency
- [ ] All content is in Ukrainian language (original language preserved)
- [ ] Data tables are properly formatted with visual hierarchy

---

## Slide Design Requirements

### Image Generation Strategy
Detailed per-slide image generation plan provided above in "Image Generation Strategy" section.

### Visual Component Selection

**Slide 09 (Premium Intro)**:
- Badge with glow variant showing price
- Card component for persona (Andrii's clinic)
- Icon cards for goals (Building2, TrendingUp, PiggyBank, Users)
- Criteria list with checkmarks
- Background image at 12% opacity

**Slide 10 (Zoom Meetings)**:
- Button pair for toggle (Problem/Solution)
- Card grid for meeting benefits
- Chat-style dialogue component (custom)
- Icons: Video, MessageCircle, Calendar, Brain
- Background image at 10% opacity

**Slide 11 (Cost Calculation)**:
- Button pair for toggle (Surface/Deep)
- Table component for cost breakdown
- Progress bar for profit visualization
- Hover card for overhead explanation
- Icons: Calculator, DollarSign, TrendingUp, Target
- Background image at 10% opacity

**Slide 12 (Yearly Plan)**:
- Staggered reveal tables for quarters
- Variance column with color coding
- Goal progress bar
- Seasonality notation cards
- Icons: Calendar, Goal, TrendingUp, AlertTriangle
- Background image at 10% opacity

### Layout Design

**Slide 09**:
- Two-column grid on desktop: `grid grid-cols-1 lg:grid-cols-2 gap-8`
- Left: Persona card with illustration
- Right: Goals and criteria
- Full-width badge and title above

**Slide 10**:
- Single column with centered toggle
- Content grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Dialogue card full-width below

**Slide 11**:
- Two-column: `grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8`
- Left: Cost breakdown table (larger)
- Right: Benefits list (smaller)

**Slide 12**:
- Stacked layout with staggered reveals
- Problem card at top
- Quarterly tables in sequence
- Goal progress at bottom

### Interactive & Animation Patterns

**Slide 09**:
- Entrance: Badge (0ms) -> Title (200ms) -> Persona (400ms) -> Goals (600ms+)
- Hover: Goal cards scale to 102%, shadow intensifies

**Slide 10**:
- Toggle: Button variant changes (default/outline)
- Content swap: `animate-fade-in` on state change
- Transition duration: 300ms

**Slide 11**:
- Toggle: Same as slide 10
- Table rows: Subtle hover highlight
- Profit bar: Animated width transition (500ms)

**Slide 12**:
- Progressive reveal: 300ms delay between quarterly tables
- Variance colors: Immediate on render
- Goal progress: Animated fill (800ms ease-out)

### Color & Typography Usage

**Colors**:
- Primary teal: #00897B (healthcare trust)
- Accent navy: #1E3A5F (fintech professionalism)
- Success green: #4CAF50 (positive variance, profit)
- Destructive red: #EF5350 (negative variance, problems)
- Background: #FFFFFF, #F8FAFB
- Muted foreground: #64748B

**Typography**:
- Titles: `font-bebas text-5xl md:text-7xl lg:text-8xl`
- Section headers: `font-syne text-2xl md:text-4xl font-bold`
- Body: `font-manrope text-base md:text-lg`
- Table data: `font-manrope text-sm md:text-base`
- Numbers: `font-jetbrains` for monetary values

**Contrast Ratios**: All meet WCAG AA (4.5:1 body, 3:1 large text)

### Accessibility Checklist

- [x] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] All interactive elements have focus states (ring utilities)
- [ ] Text readable at minimum 16px for body
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader compatible (semantic HTML, ARIA)
- [ ] Motion respects prefers-reduced-motion
- [ ] Tables have proper thead/tbody structure
- [ ] Ukrainian text renders correctly

### Component Implementation Notes

**shadcn/ui components**:
- Badge (glow variant for price)
- Card (default + layered variants)
- Button (default + outline for toggles)
- Table (with custom styling)

**Custom components needed**:
- ChatDialogue: Chat-bubble style conversation UI
- CostBreakdownTable: Table with visual progress bars
- VarianceIndicator: +/- with color coding
- ProgressGoal: Progress bar with label

**State management**:
- `"use client"` directive required for all interactive slides
- `useState` for toggle states
- No external state libraries needed

**Animation libraries**:
- tw-animate-css utilities (animate-fade-in, animate-slide-in-up)
- CSS transitions for hover states
- Custom keyframes for progress bar fill

---

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "A professional handwritten illustration of two hands in a partnership handshake with ascending growth arrows and a small clinic building silhouette in background, featuring warm teal tones (calming teal #00897B, light teal accents #26A69A), with charcoal outlines and off-white background. Partnership symbolism through interlocking geometric forms, upward momentum through diagonal lines. No text, no numbers, no labels. Editorial style, clean lines, minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of a video call screen frame with two abstract figures in conversation, surrounded by flowing lines suggesting understanding and connection, featuring warm teal tones (#00897B) and soft navy accents (#1E3A5F), with charcoal outlines and white background. Abstract waves representing dialogue flow, no text or interface elements. Editorial style, clean lines, minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of stacked horizontal bars creating a layered structure, with a small dental implant icon silhouette, featuring warm teal tones (#00897B) and soft gray accents, with charcoal outlines and off-white background. Abstract geometric layers suggesting cost components stacking, no numbers or text labels. Editorial style, clean lines, minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of a horizontal timeline with twelve vertical marker lines suggesting months, with a gently ascending dotted line curve showing growth trajectory, featuring warm teal tones (#00897B) and light accents, with charcoal outlines and off-white background. Abstract calendar structure, no month names or numbers visible. Editorial style, clean lines, minimal shading." --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to slides 09-12 and test interactivity
```

---

## Notes

### Critical Design Decisions

1. **POC-Style Interactive Preference**: All slides prioritize dynamic, interactive demonstrations over static text-heavy designs following "Show, Don't Tell" philosophy

2. **Pattern-First Approach**: Every slide uses a proven pattern:
   - Slide 09: One-Screen Simplicity (persona introduction)
   - Slide 10: Button Toggle Comparison (problem-solution)
   - Slide 11: Button Toggle Comparison (surface-deep analysis)
   - Slide 12: Progressive Disclosure (quarterly data reveal)

3. **Background Images Required**: Every slide has AI-generated background image at 10-12% opacity for visual enhancement. All prompts validated for NO TEXT rule.

4. **Healthcare + Fintech Design System**: Teal primary color (#00897B) conveys healthcare trust, navy accent (#1E3A5F) adds fintech professionalism. This combination is ideal for dental finance services.

5. **Ukrainian Language Preserved**: All slide content remains in Ukrainian. Special attention to Cyrillic character rendering and text balance.

### Pattern Selection Rationale

**Slide 09 - One-Screen Simplicity**:
Selected because premium tier introduction needs immediate clarity. The persona card creates emotional connection, while the single-screen format ensures executives grasp the value proposition in under 30 seconds.

**Slide 10 - Button Toggle Comparison**:
The problem-solution pair (anxiety vs. understanding) is perfect for binary toggle. Research shows contrasting examples increase retention by 40%. The chat dialogue UI makes abstract "meetings" concept tangible.

**Slide 11 - Button Toggle Comparison + Calculator Elements**:
The "do you know your true costs?" question is answered through reveal. Surface view shows perceived reality (price), deep view shows actual reality (cost breakdown). The profit visualization creates "aha moment."

**Slide 12 - Progressive Disclosure**:
Yearly data (12 months) would overwhelm if shown at once. Quarterly reveals create narrative arc (beginning -> middle -> end) and leverage Zeigarnik effect (tension to see completion). Variance coloring provides instant comprehension.

### Future Enhancements

1. **Interactive Calculator**: Slide 11 could become a full calculator where users input their own service prices and see cost breakdown

2. **Goal Simulator**: Slide 12 could allow adjusting monthly targets and seeing cascading effects

3. **Comparison Mode**: Add ability to compare Premium vs Basic tier side-by-side

4. **Animation Refinements**: Add micro-interactions to table rows, progress bars, and dialogue bubbles

---

**Specification Created**: 2025-12-09
**Slides Covered**: 09, 10, 11, 12
**Module**: vlada (Premium Plan Features)
**Total Background Images**: 4
**Patterns Used**: One-Screen Simplicity (1x), Button Toggle Comparison (2x), Progressive Disclosure (1x)
