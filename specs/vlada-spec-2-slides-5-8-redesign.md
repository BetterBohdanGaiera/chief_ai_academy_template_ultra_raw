# Feature: Vlada - Slide Redesign (Slides 5-8)

## Feature Description
Redesign slides 5-8 of the Vlada dental finance presentation to create an engaging, interactive experience that demonstrates the value proposition of the "Basic Plan" (9,000 UAH/month) service. These slides introduce the target persona (Maria), detail the service offering, and create a powerful before/after contrast showing the transformation from financial chaos to order.

The redesign will replace static text-heavy content with interactive POC-style demonstrations that allow viewers to viscerally experience the difference between chaotic and organized financial management.

## User Story
As a presentation developer
I want to redesign vlada slides 5-8
So that potential clients (dental clinic owners like Maria) experience a memorable, interactive demonstration of how the Basic Plan transforms their financial chaos into clear, actionable reports

## Problem Statement
Current slides may suffer from:
- Static text-heavy designs with low engagement
- Missing interactive elements that demonstrate the chaos-to-order transformation
- Lack of visual contrast between "before" and "after" states
- No AI-generated background images to enhance visual appeal
- Text-heavy service descriptions that don't "show, don't tell"

## Solution Statement
Redesign slides using POC-style interactive patterns from `ai_docs/components_inspiration/` and `ai_docs/INTERACTIVE_PATTERNS.md`:
- **UPDATE/OVERWRITE existing slide files** with completely new implementations (replacing old versions)
- Use Button Toggle Comparison pattern for dramatic before/after contrast (slides 7-8)
- Use Horizontal Timeline pattern for onboarding process visualization (slide 6)
- Use persona-focused storytelling with hover-reveal details (slide 5)
- Add AI-generated background images at appropriate opacity (10-20%)
- Ensure design system compliance (DESIGN_AESTHETICS.md) with teal healthcare colors
- Follow "Show, Don't Tell" philosophy throughout

## Relevant Files

### Source Content
- `data_vlada/presentation.md` - Module source content (path from assignment)

### Existing Slide Files (to be updated/overwritten)
- `components/slides/vlada/05-basic-plan-intro.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/06-basic-plan-details.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/07-before-state.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/08-after-state.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**

### Design Documentation
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (teal healthcare palette)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas-based animation components
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/button-toggle-comparison/` - Before/after toggle pattern
- `ai_docs/components_inspiration/patterns/horizontal-timeline/` - Process timeline pattern
- `ai_docs/components_inspiration/patterns/one-screen-simplicity/` - Clean overview pattern

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/vlada/*.tsx` - Slide components to **UPDATE/OVERWRITE**
- `config/slides.ts` - Slide registry

### Files to Update/Create
- `components/slides/vlada/05-basic-plan-intro.tsx` - **OVERWRITE with persona-focused intro**
- `components/slides/vlada/06-basic-plan-details.tsx` - **OVERWRITE with interactive timeline**
- `components/slides/vlada/07-before-state.tsx` - **OVERWRITE with chaos visualization**
- `components/slides/vlada/08-after-state.tsx` - **OVERWRITE with order visualization**

---

## Content Breakdown

### Slide 05: Basic Plan Intro - "Tariaf 'Finansove vedennia' - 9 000 hrn/mis"
**Source**: `data_vlada/presentation.md` (Basic Plan section)
**Content**:
- **Persona Introduction**: Klinika Marii - small dental clinic with 2 chairs
- **Maria's Situation**:
  - Everything works, patients come, but...
  - Tracks money in Excel "as it goes"
  - End of month doesn't understand why profit is less than expected
  - Afraid of missing something and getting problems
- **Key Message**: Maria needs ORDER - without complex analysis and plans. Just clear numbers.
- **Target Audience Criteria** (hover-reveal):
  - Clinic already works, but accounting is chaotic
  - Want to understand numbers, but not ready for deep analysis
  - Don't need calls - reports via messaging are enough
- **Price**: 9,000 UAH/month
- **Learning Objective**: Introduce the persona and establish emotional connection with target audience

### Slide 06: Basic Plan Details - "Shcho vkhodyt u taryf za 9 000 hrn"
**Source**: `data_vlada/presentation.md` (Service Details section)
**Content**:
- **Week 1 - Integration Timeline** (horizontal steps):
  1. Meet, sign contract, define responsible persons
  2. Get access to programs, collect current data
  3. Conduct audit: find "holes" in accounting
  4. Set up accounting system for your clinic
  5. Create first reports and agree on rules
- **Daily Activities**:
  - Enter all patient payments and all expenses
  - Verify that cash = bank = system
  - Clarify unclear operations
- **Monthly Deliverables**:
  - Profit report: income - expenses = result
  - Profit flow report: where came from, where went
  - Employee salary calculations
  - Written recommendations
- **Learning Objective**: Show the comprehensive service structure and build confidence in the process

### Slide 07: Before State - "Bulo (klinika Marii do nas)"
**Source**: `data_vlada/presentation.md` (Before section)
**Content**:
- **Visual Chaos Representation**:
  ```
  Dokhody:      ??? (somewhere in Clinic Cards, somewhere in notebook)
  Vytraty:      ??? (part in Excel, part nowhere)
  Prybutok:     shrug emoji
  ```
- **Maria's Quote**: "My zdaietsia pratsiuiemo dobre, ale chomu zavzhdy malo na rakhunku?"
- **Visual Treatment**: CHAOS theme - scattered elements, question marks, confusion
- **Learning Objective**: Create emotional resonance with the pain point of financial disorganization

### Slide 08: After State - "Stalo (cherez misiats roboty z namy)"
**Source**: `data_vlada/presentation.md` (After section)
**Content**:
- **Clear Financial Report Structure**:
  ```
  ZVIT ZA LYSTOPAD 2024
  Vyruchka:              620 000 hrn
  - Terapiia:            180 000 hrn
  - Ortopediia:          250 000 hrn
  - Khirurhiia:          140 000 hrn
  - Inshe:                50 000 hrn

  Vytraty:               485 000 hrn
  - Zarplaty:            220 000 hrn
  - Materialy:            95 000 hrn
  - Orenda:               80 000 hrn
  - Reklama:              35 000 hrn
  - Inshe:                55 000 hrn

  CHYSTYI PRYBUTOK:      135 000 hrn
  ```
- **Maria's Quote**: "Teper ya tochno znaiu, skilky zarobliaiut!"
- **Visual Treatment**: ORDER theme - clean structure, clear hierarchy, professional report
- **Learning Objective**: Demonstrate the tangible outcome and value delivered

---

## Visual Design Recommendations

### Slide 05: Basic Plan Intro
**Pattern**: Hover-Reveal Cards (`patterns/progressive-disclosure/`)
**Rationale**: Persona introduction benefits from progressive disclosure - viewers can explore Maria's situation and the target criteria at their own pace. This creates engagement and allows self-identification with the target audience.
**Key Features**:
- Central persona card with Maria's photo placeholder (icon-based)
- Three hover-reveal cards for "This plan is for you if..." criteria
- Price badge with glow effect (9,000 hrn/mis)
- Soft healthcare aesthetic with teal accents
**Interactive Elements**:
- Hover cards reveal detailed criteria
- Animated entrance sequence (badge -> title -> persona -> criteria cards)
**Animation Requirements**:
- Staggered entrance: badge (0ms), title (200ms), persona card (400ms), criteria cards (600ms, 700ms, 800ms)
- Hover scale on criteria cards (scale-102)
- Glow pulse on price badge

### Slide 06: Basic Plan Details
**Pattern**: Horizontal Timeline (`patterns/horizontal-timeline/`)
**Rationale**: The onboarding process is a sequential 5-step journey that benefits from horizontal visualization. The timeline pattern creates clear expectations and builds confidence in the structured approach.
**Key Features**:
- Horizontal timeline with 5 numbered steps for Week 1 integration
- Two-column layout below: Daily activities (left) | Monthly deliverables (right)
- Icons for each step and activity
- Progress indicator showing the systematic approach
**Interactive Elements**:
- Click-to-expand step details (optional)
- Animated step progression
- Hover effects on daily/monthly items
**Animation Requirements**:
- Timeline steps animate in sequence (100ms delay each)
- Daily/monthly sections slide in from left/right respectively
- Icons have subtle rotation animation on hover

### Slide 07: Before State (Chaos)
**Pattern**: Button Toggle Comparison (`patterns/button-toggle-comparison/`) - Part 1
**Rationale**: The before state should create visceral discomfort. Using visual chaos with scattered elements, question marks, and confusion creates memorable cognitive anchor that contrasts dramatically with the "after" state.
**Key Features**:
- Scattered, misaligned financial data cards
- Question marks instead of real numbers
- Chaotic color scheme (warning/destructive accents)
- Maria's frustrated quote in speech bubble
- Visual noise and disorganization
**Interactive Elements**:
- Animated "confusion" particles or scattered elements
- Subtle shake animation on question mark elements
- Quote bubble with typewriter effect (optional)
**Animation Requirements**:
- Elements appear with chaotic, non-uniform timing
- Subtle continuous shake on unknown values
- Background grain at higher opacity for "messy" feel
**Color Scheme**:
- Warning amber for unknown values
- Destructive red accents for problems
- Muted grays for confusion

### Slide 08: After State (Order)
**Pattern**: Button Toggle Comparison (`patterns/button-toggle-comparison/`) - Part 2
**Rationale**: The after state should create relief and confidence. Using clean structure, organized data, and professional formatting demonstrates the transformation value. The contrast with slide 07 creates a powerful "aha moment."
**Key Features**:
- Clean, professionally formatted financial report
- Hierarchical breakdown (revenue by service, expenses by category)
- Clear net profit highlight with success styling
- Maria's satisfied quote in clean speech bubble
- Organized grid layout
**Interactive Elements**:
- Animated number counters (optional)
- Hover to highlight category breakdowns
- Expandable sections for detailed views
**Animation Requirements**:
- Clean, orderly entrance sequence (top to bottom)
- Success glow on net profit number
- Smooth transitions between sections
**Color Scheme**:
- Primary teal for positive values and structure
- Success green for profit highlight
- Clean white background with subtle gradient

### Combined Slides 07-08 Alternative: Interactive Toggle
**Alternative Pattern**: Single slide with Button Toggle between "Bulo" and "Stalo"
**Rationale**: If we want to create maximum contrast impact, we can combine slides 07-08 into a single interactive slide where users toggle between chaos and order. This creates the most dramatic cognitive contrast.
**Implementation Decision**: Keep as separate slides for pacing, but design them as a matched pair with consistent layout structure so differences are obvious.

---

## Image Generation Strategy

### Slide 05: Basic Plan Intro Background
**Background Image** (16:9, 15% opacity, mix-blend-multiply):
- **Subject**: Abstract representation of a small clinic space with organized elements suggesting care and professionalism
- **Prompt**: "A professional handwritten illustration of a small workspace with two chair silhouettes and organized shelving, featuring warm teal tones (#00897B accents), with charcoal outlines and white background. Simple, clean composition suggesting medical care setting. No text, no labels, no numbers. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses visual forms only
- **Generation command**: `tsx generate-image.ts "A professional handwritten illustration of a small workspace with two chair silhouettes and organized shelving, featuring warm teal tones with charcoal outlines and white background. Simple clean composition suggesting medical care setting. No text no labels no numbers. Editorial style clean lines minimal shading." --ratio 16:9`

### Slide 06: Basic Plan Details Background
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- **Subject**: Abstract horizontal progression suggesting a journey or workflow
- **Prompt**: "A professional handwritten illustration of five connected circular nodes in horizontal sequence with flowing connecting lines, featuring warm teal tones (#00897B accents), with charcoal outlines and white background. Suggests systematic process flow. No text, no labels, no numbers. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses circular nodes not numbered steps
- **Generation command**: `tsx generate-image.ts "A professional handwritten illustration of five connected circular nodes in horizontal sequence with flowing connecting lines, featuring warm teal tones with charcoal outlines and white background. Suggests systematic process flow. No text no labels no numbers. Editorial style clean lines minimal shading." --ratio 16:9`

### Slide 07: Before State Background
**Background Image** (16:9, 18% opacity, mix-blend-multiply):
- **Subject**: Abstract chaotic composition with scattered forms suggesting disorganization
- **Prompt**: "A professional handwritten illustration of scattered geometric shapes in disarray with overlapping forms and tangled lines, featuring muted amber and gray tones, with charcoal outlines and off-white background. Composition suggests confusion and disorder. No text, no labels, no numbers. Editorial style, loose sketchy lines."
- **Validation**: No text/numbers/labels - uses abstract scattered forms
- **Generation command**: `tsx generate-image.ts "A professional handwritten illustration of scattered geometric shapes in disarray with overlapping forms and tangled lines, featuring muted amber and gray tones with charcoal outlines and off-white background. Composition suggests confusion and disorder. No text no labels no numbers. Editorial style loose sketchy lines." --ratio 16:9`

### Slide 08: After State Background
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- **Subject**: Abstract organized composition with aligned forms suggesting clarity and structure
- **Prompt**: "A professional handwritten illustration of neatly aligned rectangular forms creating organized grid pattern with balanced spacing, featuring warm teal tones (#00897B accents), with charcoal outlines and white background. Composition suggests order and clarity. No text, no labels, no numbers. Editorial style, clean precise lines."
- **Validation**: No text/numbers/labels - uses aligned rectangular forms
- **Generation command**: `tsx generate-image.ts "A professional handwritten illustration of neatly aligned rectangular forms creating organized grid pattern with balanced spacing, featuring warm teal tones with charcoal outlines and white background. Composition suggests order and clarity. No text no labels no numbers. Editorial style clean precise lines." --ratio 16:9`

---

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status: COMPLETE (this spec)
  - Comments: Content extracted from pre-provided context, patterns selected, images planned

- [ ] **Phase 2: Implementation** - Use slide-generator agent to **UPDATE/OVERWRITE existing slides** or **CREATE new slides**
  - **CRITICAL**: Agent will use Write tool to completely replace existing slide files with new implementations
  - **No duplicates**: Old slide versions will be overwritten, not preserved
  - Status: PENDING
  - Comments: Ready for slide-generator agent

- [ ] **Phase 3: Integration & Validation** - Register slides, test navigation, validate design system compliance
  - Status: PENDING
  - Comments: Verify slides in config/slides.ts, test presentation flow

---

## Step by Step Tasks

### Foundation Work

- [ ] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, components_inspiration/
  - Status: COMPLETE
  - Comments: All documentation reviewed and patterns selected

- [ ] **Extract source content** - Read module content from data_vlada/presentation.md and extract relevant sections
  - Status: COMPLETE
  - Comments: Content extracted from pre-provided orchestrator context

- [ ] **Match patterns** - Consult components_inspiration/ and identify best-fit patterns for each slide
  - Status: COMPLETE
  - Comments: Patterns selected - hover-reveal, horizontal-timeline, toggle-comparison pair

### Image Generation

- [x] **Generate background image for Slide 05** - Run: `tsx generate-image.ts "A professional handwritten illustration of a small workspace with two chair silhouettes and organized shelving, featuring warm teal tones with charcoal outlines and white background. Simple clean composition suggesting medical care setting. No text no labels no numbers. Editorial style clean lines minimal shading." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Clinic workspace visualization - Generated: gemini-1765289824441-1.png (1.13MB, 15% opacity)

- [x] **Generate background image for Slide 06** - Run: `tsx generate-image.ts "A professional handwritten illustration of five connected circular nodes in horizontal sequence with flowing connecting lines, featuring warm teal tones with charcoal outlines and white background. Suggests systematic process flow. No text no labels no numbers. Editorial style clean lines minimal shading." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Process flow visualization - Generated: gemini-1765289835076-1.png (1.24MB, 12% opacity)

- [x] **Generate background image for Slide 07** - Run: `tsx generate-image.ts "A professional handwritten illustration of scattered geometric shapes in disarray with overlapping forms and tangled lines, featuring muted amber and gray tones with charcoal outlines and off-white background. Composition suggests confusion and disorder. No text no labels no numbers. Editorial style loose sketchy lines." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Chaos/disorder visualization - Generated: gemini-1765289836498-1.png (1.46MB, 18% opacity)

- [x] **Generate background image for Slide 08** - Run: `tsx generate-image.ts "A professional handwritten illustration of neatly aligned rectangular forms creating organized grid pattern with balanced spacing, featuring warm teal tones with charcoal outlines and white background. Composition suggests order and clarity. No text no labels no numbers. Editorial style clean precise lines." --ratio 16:9`
  - Status: COMPLETE
  - Comments: Order/clarity visualization - Generated: gemini-1765289854084-1.png (1.54MB, 12% opacity)

### Slide Implementation

- [x] **Implement Slide 05** - **UPDATE/OVERWRITE** Basic Plan Intro using hover-reveal progressive disclosure pattern
  - **Action**: Agent will completely rewrite `components/slides/vlada/05-basic-plan-intro.tsx`
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: Persona introduction with Maria's situation and target criteria. Implemented with: hover-reveal cards for 3 target criteria, Maria persona Card with Building2/FileSpreadsheet/HelpCircle icons, price Badge (9 000 hrn/mis) with glow effect, staggered entrance animations (0ms-900ms), teal healthcare palette (#00897B primary), background image at 15% opacity.

- [x] **Implement Slide 06** - **UPDATE/OVERWRITE** Basic Plan Details using horizontal timeline pattern
  - **Action**: Agent will completely rewrite `components/slides/vlada/06-basic-plan-details.tsx`
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: 5-step onboarding timeline + daily/monthly breakdown. Implemented with: horizontal timeline with 5 interactive steps (hover reveals descriptions), two-column layout for Daily/Monthly sections, icons for each step (Handshake, Database, Search, Settings, FileText), timeline animations with 100ms staggered delays, grid pattern background at 12% opacity.

- [x] **Implement Slide 07** - **UPDATE/OVERWRITE** Before State using chaos visualization
  - **Action**: Agent will completely rewrite `components/slides/vlada/07-before-state.tsx`
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: Chaotic financial data with question marks and Maria's frustrated quote. Implemented scattered Card components with chaotic positioning (rotations -2deg, +3deg, -1deg), amber/red/gray color coding, pulsing HelpCircle icons for unknown values, and speech bubble with Maria's frustrated quote. Background image at 18% opacity.

- [x] **Implement Slide 08** - **UPDATE/OVERWRITE** After State using order visualization
  - **Action**: Agent will completely rewrite `components/slides/vlada/08-after-state.tsx`
  - **Tool**: Use Write tool to replace old implementation
  - Status: COMPLETE
  - Comments: Clean financial report with clear breakdown and Maria's satisfied quote. Implemented structured Card with hierarchical report (revenue + expenses + net profit), hover states on sections, teal/green color coding for success, JetBrains Mono for numbers, and speech bubble with Maria's satisfied quote. Background image at 12% opacity.

### Integration & Validation

- [ ] **Register slides in config/slides.ts** - Verify slide metadata and ordering
  - Status: PENDING
  - Comments: Check that slides 05-08 are properly registered in vlada module

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation
  - Status: PENDING
  - Comments: Test forward/backward navigation through slides 5-8

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status: PENDING
  - Comments: Verify teal healthcare palette, proper font usage, WCAG AA compliance

- [ ] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: PENDING
  - Comments: Ensure TypeScript compiles without errors

---

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- Test each slide renders without errors
- Test slide navigation (next/previous) between slides 5-8
- Test interactive elements (hover effects on criteria cards, timeline interactions)
- Test responsive layouts at breakpoints (mobile, tablet, desktop)

### Edge Cases
- Rapid hovering on criteria cards (slide 05)
- Timeline step animations on slow connections
- Chaos animation performance (slide 07)
- Number formatting for Ukrainian hryvnia values
- Long text wrapping in Ukrainian language

---

## Acceptance Criteria

- [ ] All 4 slides have AI-generated background images at appropriate opacity (10-18%)
- [ ] Slide 05 uses hover-reveal pattern for persona and criteria presentation
- [ ] Slide 06 uses horizontal timeline for 5-step onboarding process
- [ ] Slides 07-08 create strong visual contrast between chaos and order
- [ ] All slides follow design system (DESIGN_AESTHETICS.md) with teal healthcare palette
- [ ] All slides are responsive (mobile, tablet, desktop)
- [ ] All slides have proper entrance animations with staggered timing
- [ ] All interactive elements (hover, click) provide clear feedback
- [ ] All text content is in Ukrainian language
- [ ] Financial numbers are properly formatted (xxx xxx hrn format)
- [ ] Maria's quotes are prominently displayed with speech bubble styling
- [ ] All slides meet WCAG AA accessibility standards
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency with healthcare theme

---

## Slide Design Requirements

### Image Generation Strategy
See [Image Generation Strategy](#image-generation-strategy) section above for complete per-slide image generation plan.

### Visual Component Selection

**Slide 05 - Basic Plan Intro**:
- Badge component with glow variant for price (9,000 hrn/mis)
- Card component for persona (Maria) with icon avatar
- HoverCard components (3x) for target criteria
- Typography: Bebas Neue for title, Syne for subtitle, Manrope for body
- Icons: User, Briefcase, MessageSquare, Calculator from lucide-react

**Slide 06 - Basic Plan Details**:
- Horizontal timeline component with 5 steps
- Badge for "Tyzhden 1" section label
- Card grid (2 columns) for Daily/Monthly sections
- Icons: Handshake, Database, Search, Settings, FileText, Calendar, Clock, Receipt from lucide-react
- Progress indicators or checkmarks for completeness

**Slide 07 - Before State**:
- Scattered Card components with chaotic positioning
- Badge variant="destructive" or warning styling
- Question mark icons (HelpCircle) prominently displayed
- Speech bubble component for Maria's quote
- Typography with inconsistent sizing to emphasize chaos
- Warning/amber color accents

**Slide 08 - After State**:
- Structured Card component for financial report
- Clean hierarchical layout with indentation
- Badge variant="default" with success styling for profit
- Speech bubble component for Maria's satisfied quote
- Typography with clear hierarchy (report header, sections, line items)
- Success/teal color accents

### Layout Design

**Slide 05**:
- Grid structure: Single column, centered content
- Top: Badge + Title
- Middle: Persona card (centered, max-w-md)
- Bottom: 3-column grid for criteria cards
- Spacing: p-8 lg:p-16, gap-6 between sections

**Slide 06**:
- Grid structure: Full-width timeline at top, 2-column grid below
- Timeline: Horizontal, 5 steps, numbers inside circles
- Below timeline: Left column (Daily), Right column (Monthly)
- Spacing: p-8 lg:p-16, gap-8 between major sections

**Slide 07**:
- Grid structure: Intentionally broken/chaotic
- Elements positioned with varying offsets and rotations
- Quote bubble positioned off-center
- Spacing: Inconsistent to emphasize disorder

**Slide 08**:
- Grid structure: Clean single column report format
- Header section with report title and date
- Revenue section with 4 sub-items
- Expenses section with 5 sub-items
- Footer with net profit highlight
- Quote bubble at bottom
- Spacing: Consistent p-8 lg:p-16, clean internal padding

### Interactive & Animation Patterns

**Slide 05**:
- Entrance: badge slide-in-down (0ms), title fade-in (200ms), persona scale-in (400ms), criteria stagger (600-800ms)
- Hover: criteria cards scale-102, shadow increase, reveal detailed content
- Continuous: subtle glow pulse on price badge

**Slide 06**:
- Entrance: timeline steps animate left-to-right with 100ms delay each
- Entrance: daily section slide-in-left (800ms), monthly slide-in-right (800ms)
- Hover: timeline step icons rotate slightly
- Click (optional): expand step for more detail

**Slide 07**:
- Entrance: Elements appear with random delays (chaotic timing)
- Continuous: subtle shake animation on question marks
- Continuous: scattered particles or noise effect
- Quote: typewriter effect (optional)

**Slide 08**:
- Entrance: Clean top-to-bottom sequence (100ms delays)
- Entrance: Numbers count up animation (optional)
- Hover: category rows highlight with subtle background change
- Success: glow pulse on net profit number

### Color & Typography Usage

**Color Scheme (Healthcare Theme)**:
- Primary: Teal #00897B (trust, healthcare)
- Accent: Deep Navy #1E3A5F (professionalism)
- Warning: Amber #FF9800 (for "before" state)
- Success: Green #4CAF50 (for profit highlights)
- Destructive: Red #EF5350 (for problems)
- Background: #FFFFFF, #F8FAFB (light, clean)
- Foreground: #1A1A2E (deep charcoal)

**Typography (Ukrainian Content)**:
- Titles: font-bebas text-6xl md:text-8xl (slide titles)
- Subtitles: font-syne text-2xl md:text-4xl (section headers)
- Body: font-manrope text-base md:text-lg (descriptions)
- Numbers: font-jetbrains for financial data
- Quotes: font-syne italic for Maria's statements

**Number Formatting**:
- Currency: "620 000 hrn" (space as thousands separator)
- Percentages: Standard format
- Price: "9 000 hrn/mis" with glow emphasis

### Accessibility Checklist
- [ ] Color contrast meets WCAG AA (4.5:1 minimum for body text)
- [ ] All interactive elements have focus states (ring utilities)
- [ ] Text readable at minimum 16px for body
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader compatible (semantic HTML, ARIA)
- [ ] Motion respects prefers-reduced-motion
- [ ] Ukrainian text properly encoded and displayed

### Component Implementation Notes
- shadcn/ui components: Badge (glow variant), Card (layered/default), Button, HoverCard
- Custom components: Timeline (horizontal 5-step), SpeechBubble, ChaoticCard (for slide 07)
- Animation libraries: tw-animate-css utilities + custom keyframes for chaos effects
- State management: "use client" with useState for hover states and interactions
- Language: All UI text in Ukrainian, preserve original content exactly

---

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "A professional handwritten illustration of a small workspace with two chair silhouettes and organized shelving, featuring warm teal tones with charcoal outlines and white background. Simple clean composition suggesting medical care setting. No text no labels no numbers. Editorial style clean lines minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of five connected circular nodes in horizontal sequence with flowing connecting lines, featuring warm teal tones with charcoal outlines and white background. Suggests systematic process flow. No text no labels no numbers. Editorial style clean lines minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of scattered geometric shapes in disarray with overlapping forms and tangled lines, featuring muted amber and gray tones with charcoal outlines and off-white background. Composition suggests confusion and disorder. No text no labels no numbers. Editorial style loose sketchy lines." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of neatly aligned rectangular forms creating organized grid pattern with balanced spacing, featuring warm teal tones with charcoal outlines and white background. Composition suggests order and clarity. No text no labels no numbers. Editorial style clean precise lines." --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to vlada module slides 5-8 and test interactivity
```

---

## Notes

### Critical Design Decisions

1. **POC-Style Interactive Preference**: All slides prioritize dynamic, interactive demonstrations over static text-heavy designs following "Show, Don't Tell" philosophy
2. **Pattern-First Approach**: Every slide uses a proven pattern from components_inspiration/ or INTERACTIVE_PATTERNS.md
3. **Background Images Required**: Every slide has AI-generated background image at 10-18% opacity for visual enhancement
4. **Max 4 Slides Per Spec**: This spec covers exactly 4 slides (05-08) as assigned
5. **Design System Compliance**: All slides strictly follow DESIGN_AESTHETICS.md specifications with teal healthcare palette
6. **Ukrainian Language**: All content remains in Ukrainian as provided in source material
7. **Before/After Contrast**: Slides 07-08 are designed as a matched pair to maximize cognitive contrast

### Pattern Selection Rationale

**Slide 05 - Hover-Reveal Progressive Disclosure**:
Selected because persona introduction benefits from user-controlled exploration. Viewers can self-identify with Maria's situation and check if the target criteria match their clinic. This creates engagement and qualifies leads naturally.

**Slide 06 - Horizontal Timeline**:
Selected because the 5-step onboarding process is inherently sequential. The timeline pattern creates clear expectations, builds confidence in the structured approach, and matches the "systematic process" messaging of the service.

**Slides 07-08 - Chaos vs Order Visualization**:
Selected to create maximum cognitive contrast. The before state uses visual disorder (scattered elements, inconsistent styling, question marks) while the after state uses visual order (clean grid, clear hierarchy, specific numbers). This creates a memorable "aha moment" that demonstrates value.

### Ukrainian Language Considerations

- All slide titles and content remain in Ukrainian
- Number formatting follows Ukrainian conventions (space as thousands separator)
- Currency displayed as "hrn" (shortened from hryvnia)
- Quotes from Maria preserved exactly as provided
- Font families support Cyrillic characters (Manrope, Syne have good Cyrillic support)

### Future Enhancements

- Consider combining slides 07-08 into single interactive toggle slide for presentations where maximum contrast impact is desired
- Add animated number counters for slide 08 financial figures
- Implement typewriter effect for Maria's quotes
- Add print/export styling for report generation from slide 08 data
