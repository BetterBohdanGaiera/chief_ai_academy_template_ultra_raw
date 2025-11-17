# Feature: F1 Module - Slides 01-04 Redesign (Introduction & First Levels)

## Feature Description

Redesign the opening sequence of F1 (Five Levels Framework) covering the title slide, motivation slide (why levels matter), framework overview, and Level 1 detail. This group establishes the foundational narrative and introduces the first level of AI adoption. The goal is to create a powerful, engaging introduction that hooks executives immediately and clearly establishes the framework's importance.

## User Story

As a presentation developer
I want to redesign F1 slides 01-04 (Title, Why Levels, Levels Overview, Level 1 Individual AI)
So that learners experience a compelling introduction to the Five Levels Framework with interactive elements that demonstrate why understanding these levels is critical for AI transformation success

## Problem Statement

The current slides 01-04 need enhancement to:
- Create stronger visual impact in the title slide with cohesive design system elements
- Make "Why Levels Matter" more interactive and memorable (currently may be too static)
- Ensure the 5 Levels Overview provides intuitive exploration without overwhelming
- Present Level 1 details clearly while setting up the progression to higher levels
- Maintain consistent AI-generated background images across all slides
- Ensure smooth narrative flow from title → motivation → overview → first level detail

## Solution Statement

Redesign slides using POC-style interactive patterns from `ai_docs/components_inspiration/` and `ai_docs/INTERACTIVE_PATTERNS.md`:
- **Slide 01**: Hero title slide with dramatic entrance animations and atmospheric background
- **Slide 02**: Interactive toggle comparison showing AI success vs failure scenarios
- **Slide 03**: 5-level overview with hover-reveal cards for self-paced exploration
- **Slide 04**: Clean one-screen simplicity pattern for Level 1 details
- Add AI-generated background images at appropriate opacity (10-15%)
- Ensure design system compliance (DESIGN_AESTHETICS.md)
- Organize implementation into 2 agent groups for parallel execution
- Follow "Show, Don't Tell" philosophy

## Relevant Files

### Source Content
- `courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md` - Complete F1 module content (lines 1-568)
  - Lines 34-45: Why Levels Matter content
  - Lines 48-54: The 5 Levels Overview
  - Lines 56-60: Level 1 Individual AI full content

### Design Documentation
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns (toggle, canvas, hover-reveal, click-expand, mini POCs)
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (typography, colors, animations, component variants)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists, typography scales
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow with templates
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas-based animation components (MeshGradient, ParticleField)
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/one-screen-simplicity/` - Pattern for title and Level 1 slides
- `ai_docs/components_inspiration/patterns/button-toggle-comparison/` - Pattern for "Why Levels Matter"
- `ai_docs/components_inspiration/patterns/horizontal-timeline/` - Alternative pattern for levels overview

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/f1/01-f1-title.tsx` - Title slide component (EXISTING)
- `components/slides/f1/02-f1-why-levels.tsx` - Why levels slide component (TO REDESIGN)
- `components/slides/f1/03-f1-levels-overview.tsx` - Levels overview slide component (EXISTING - good reference)
- `components/slides/f1/04-f1-level1-individual.tsx` - Level 1 detail slide component (TO REDESIGN)
- `config/slides.ts` - Slide registry (lines 23-76 for F1-01 to F1-04)

### New Files
- None required - improving existing components

## Content Breakdown

### Slide 01: F1 Title Slide
**Source**: `f1_five_levels_framework.md` (Lines 1-16, metadata and learning objectives)
**Current Implementation**: `components/slides/f1/01-f1-title.tsx` (GOOD - use as reference)

**Content**:
- Badge: "Foundation Module 1"
- Module Title: "THE FIVE LEVELS FRAMEWORK"
- Subtitle: "Understanding Where Transformation Actually Happens"
- Metadata: "20 minutes" / "No prerequisites required"
- Learning objective preview: Identify transformation levels and avoid the Level 3 trap

**Interactive Elements**: None needed - this is a hero title slide optimized for impact
**Status**: EXISTING implementation is strong, may only need background image refresh

**Design Notes**:
- Uses One-Screen Simplicity pattern (minimalist, maximal clarity)
- Orchestrated entrance animations (badge → title → subtitle → metadata)
- Current background image: `/generated-images/gemini-1763327594149-1.png` at 12% opacity
- Consider refreshing background image with updated prompt for visual consistency

---

### Slide 02: Why Levels Matter
**Source**: `f1_five_levels_framework.md` (Lines 34-45 - "Why Levels Matter")
**Current Implementation**: `components/slides/f1/02-f1-why-levels.tsx` (TO REDESIGN)

**Content**:
- **Key Question**: "Why do some companies achieve 10x ROI with AI while others waste millions?"
- **Core Answer**: "It's which level they're operating at"
- **Critical Insight**: "AI adoption is a staircase with a trap door"
- **The Trap**: Most companies get stuck at Level 3 (negative ROI)
- **The Transformation**: Real transformation starts at Level 4 (deep, robust system integration)
- **Key Takeaway**: "Transformation is about HOW you build, not WHAT you build"

**Interactive Elements NEEDED**:
- **Button Toggle Comparison** between "Success" vs "Failure" scenarios
- Same layout for both views to make differences obvious
- Color-coding (green/cyan for success, red/orange for failure)
- Animated transitions between states

**Success Scenario** (Toggle View 1):
- Metric: "User Adoption" → Value: "95%" (green)
- Metric: "ROI After 6 Months" → Value: "+300%" (green)
- Metric: "Level Achieved" → Value: "Level 4 (Iterative)" (cyan)
- Metric: "Iteration Capability" → Value: "1-3 per day" (green)
- Key Message: "Built at Level 4 with rapid iteration"

**Failure Scenario** (Toggle View 2):
- Metric: "User Adoption" → Value: "5%" (red)
- Metric: "ROI After 6 Months" → Value: "-$30K" (red)
- Metric: "Level Achieved" → Value: "Level 3 (Stuck)" (orange warning)
- Metric: "Iteration Capability" → Value: "1 per 2 weeks" (red)
- Key Message: "Trapped at Level 3 with slow iteration"

**Pattern**: Button Toggle Comparison (`patterns/button-toggle-comparison/`)
**Rationale**: Demonstrating "why" requires showing the dramatic difference between success and failure. Toggle pattern creates memorable cognitive contrast that executives can see and feel immediately.

---

### Slide 03: The 5 Levels Overview
**Source**: `f1_five_levels_framework.md` (Lines 48-54 - "The 5 Levels - Overview")
**Current Implementation**: `components/slides/f1/03-f1-levels-overview.tsx` (GOOD - use as reference)

**Content** (5 Level Cards):

**Level 1: Individual AI**
- Icon: User icon
- Description: "ChatGPT, Claude - personal use"
- Characteristics: ["Personal use", "No integration", "$0-20/month"]
- Color: Muted/gray (not emphasized)

**Level 2: Generic SaaS AI Tools**
- Icon: Blocks icon
- Description: "Pre-built tools (Jasper, Copy.ai)"
- Characteristics: ["Department level", "Shallow integration", "$50-200/month"]
- Color: Muted/gray (not emphasized)

**Level 3: No-Code Automation (THE TRAP)**
- Icon: Workflow icon with warning
- Description: "Zapier, Make.com, n8n"
- Characteristics: ["Slow iteration", "External dependency", "Negative ROI"]
- Color: Warning orange/red
- Special marker: "⚠ TRAP" badge

**Level 4: Iterative Agents (TRANSFORMATION)**
- Icon: RefreshCw icon
- Description: "Custom solutions with rapid iteration"
- Characteristics: ["Rapid iteration (1-3/day)", "Internal team", "300-600% ROI"]
- Color: Primary electric orange with glow
- Special marker: "★ TRANSFORM" badge

**Level 5: Autonomous Agents**
- Icon: Bot icon
- Description: "Full automation, multi-agent systems"
- Characteristics: ["Multi-agent workflows", "Minimal oversight", "Strategic advantage"]
- Color: Neon cyan (future-focused)

**Bottom Insight**: "Most organizations are at Levels 1-3. Real transformation starts at Level 4 where rapid iteration changes everything."

**Interactive Elements**: Hover effects on cards with subtle scale transforms
**Pattern**: Horizontal grid layout with visual hierarchy
**Status**: EXISTING implementation is strong, may refine card content/styling

---

### Slide 04: Level 1 - Individual AI
**Source**: `f1_five_levels_framework.md` (Lines 56-60 - Knowledge component reference `{{kc:level_1_individual_ai:full}}`)
**Current Implementation**: `components/slides/f1/04-f1-level1-individual.tsx` (TO REDESIGN)

**Content** (from knowledge components reference):
- **Level**: "Level 1 of 5: Individual AI"
- **Definition**: "Using AI chat tools (ChatGPT, Claude, Gemini) individually without company integration"
- **Examples**:
  - Individual using ChatGPT to draft emails
  - Designer using DALL-E for inspiration
  - Analyst using Claude for research summaries
- **Characteristics**:
  - ✓ Quick value: Answers in seconds
  - ✓ Zero setup: Just sign up and use
  - ✓ Low cost: Free to $20/month
  - ✗ No company context: AI doesn't know your processes
  - ✗ No integration: Manual copy-paste workflow
  - ✗ Limited scale: Only helps individual, not organization
- **Economics**: $0-20/month per person, helps individual productivity but doesn't transform organization
- **Key Insight**: "Level 1 is great for personal productivity. But transformation requires connecting AI to YOUR systems (Levels 4-5)."

**Interactive Elements**: None needed - clean informational slide
**Pattern**: One-Screen Simplicity (minimalist layout, clear hierarchy)
**Design Notes**:
- Badge at top: "Level 1 of 5: Individual AI"
- Title: "INDIVIDUAL AI" (large Bebas Neue)
- Subtitle: "ChatGPT, Claude, Gemini"
- Two-column layout: Left (definition + examples), Right (characteristics grid)
- Bottom insight card: Key insight statement
- Background image: Individual person working with AI chat interface (abstract, 10-15% opacity)

## Visual Design Recommendations

### Slide 01: Title Slide
**Pattern**: One-Screen Simplicity (`patterns/one-screen-simplicity/`)
**Rationale**: Title slides benefit from minimalist layout with maximum clarity. This pattern ensures strong first impression without cognitive overload.
**Key Features**:
- Badge + Title + Subtitle hierarchy
- Atmospheric background (AI-generated image + GrainOverlay + GeometricPattern)
- Orchestrated entrance animations (slide-in-down → fade-in → slide-in-up sequence)
- Metadata footer (duration, prerequisites)
- Electric orange glow-pulse animation on "FRAMEWORK"

**Enhancements from current implementation**:
- Refresh background image with updated prompt
- Ensure grain overlay and geometric pattern are subtle (6-15% opacity)
- Verify animation timing feels natural (200ms delays between elements)

---

### Slide 02: Why Levels Matter
**Pattern**: Button Toggle Comparison (`patterns/button-toggle-comparison/`)
**Rationale**: Demonstrating "why levels matter" requires showing the dramatic difference between success and failure. Toggle pattern creates memorable cognitive contrast. Executives can literally SEE the difference in outcomes based on level choice.

**Key Features**:
- Button toggle between "Success at Level 4" vs "Failure at Level 3" scenarios
- Same layout for both views (4 metric cards in 2x2 grid)
- Color-coding:
  - Success view: Green metrics (#10B981), cyan level indicator (#00D9FF), primary accents
  - Failure view: Red metrics (#EF4444), warning level indicator (#FFB800), destructive accents
- Smooth animated transitions between states
- Bottom insight card that changes contextually based on active view

**Layout**:
```
┌────────────────────────────────────────────────┐
│  Badge: "Foundation Module 1"                  │
│  Title: "WHY LEVELS MATTER"                    │
│  Subtitle: Dynamic based on toggle state       │
│                                                 │
│  [ Success @ L4 ] [ Failure @ L3 ] ← Buttons   │
│                                                 │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ Metric 1    │  │ Metric 2    │              │
│  │ Value       │  │ Value       │              │
│  └─────────────┘  └─────────────┘              │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ Metric 3    │  │ Metric 4    │              │
│  │ Value       │  │ Value       │              │
│  └─────────────┘  └─────────────┘              │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │ Key Insight (contextual)                  │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

---

### Slide 03: The 5 Levels Overview
**Pattern**: Horizontal grid with hover-reveal elements
**Rationale**: Presenting 5 distinct levels requires scannable layout that allows self-paced exploration. Hover effects invite interaction without forcing it.

**Key Features**:
- 5-column grid (responsive: 1 col mobile, 2 col tablet, 5 col desktop)
- Each card contains:
  - Level number badge (circular, color-coded)
  - Icon (lucide-react)
  - Title (bold Syne font)
  - Description (1-line summary)
  - Characteristics (bulleted list)
  - Special markers ("⚠ TRAP" for L3, "★ TRANSFORM" for L4)
- Hover effects: scale-105, enhanced shadow
- Staggered entrance animations (100ms delays)
- Color hierarchy:
  - Levels 1-2: Muted gray (de-emphasized)
  - Level 3: Warning orange (#FFB800) with warning gradient
  - Level 4: Primary electric orange (#FF4D00) with glow shadow
  - Level 5: Neon cyan (#00D9FF) with cyan gradient

**Status**: Current implementation is strong - may refine content and ensure background image consistency

---

### Slide 04: Level 1 Detail
**Pattern**: One-Screen Simplicity with two-column layout
**Rationale**: Level detail slides need clear information architecture without overwhelming. Two-column layout separates "what it is" (left) from "characteristics" (right).

**Key Features**:
- Badge: "Level 1 of 5: Individual AI"
- Title: "INDIVIDUAL AI" (Bebas Neue, large)
- Subtitle: "ChatGPT, Claude, Gemini" (Syne, medium)
- Two-column grid:
  - **Left**: Definition paragraph + 3 example cards
  - **Right**: Characteristics grid (✓ pros, ✗ cons with clear icons)
- Bottom insight card: "Level 1 is great for personal productivity, but transformation requires connecting AI to YOUR systems"
- Color coding: Green checkmarks for pros, red X for cons
- Economics callout: "$0-20/month per person"

**Layout**:
```
┌────────────────────────────────────────────────┐
│  Badge: "Level 1 of 5"                         │
│  Title: "INDIVIDUAL AI"                        │
│  Subtitle: "ChatGPT, Claude, Gemini"           │
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │ DEFINITION       │  │ CHARACTERISTICS  │    │
│  │ Paragraph...     │  │ ✓ Quick value    │    │
│  │                  │  │ ✓ Zero setup     │    │
│  │ EXAMPLES:        │  │ ✓ Low cost       │    │
│  │ • Email drafting │  │ ✗ No context     │    │
│  │ • Design inspo   │  │ ✗ No integration │    │
│  │ • Research       │  │ ✗ Limited scale  │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │ KEY INSIGHT: Level 1 helps individuals   │  │
│  │ but doesn't transform the organization   │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

## Image Generation Strategy

### Slide 01: Title Slide
**Background Image** (16:9 aspect ratio, 12-15% opacity, mix-blend-multiply):
- **Subject**: Ascending staircase or layered tiers representing the 5 levels framework, abstract geometric interpretation
- **Visual Metaphor**: Five ascending platforms or steps, increasing in height and sophistication
- **Prompt**:
  ```
  A professional handwritten illustration of five ascending geometric tiers or platforms, each tier larger and more sophisticated than the last, representing progressive maturity levels. Warm orange tones (vibrant orange #F5A623, light orange accents) highlight the top tiers, with charcoal outlines and white/light gray background. Clean angular shapes suggesting transformation and progression. Editorial style, clean lines, minimal shading.
  ```
- **Generation Command**:
  ```bash
  tsx generate-image.ts "five ascending geometric tiers representing maturity levels, warm orange highlights on upper levels" --ratio 16:9
  ```
- **Current image**: `/generated-images/gemini-1763327594149-1.png` - may refresh if needed

---

### Slide 02: Why Levels Matter - Success Toggle View
**Background Image** (16:9 aspect ratio, 10% opacity, mix-blend-multiply):
- **Subject**: Thriving collaborative environment with upward momentum indicators
- **Visual Metaphor**: Ascending arrows, growth charts, coordinated team activity
- **Prompt**:
  ```
  A professional handwritten illustration of a modern office environment with people collaborating successfully around screens showing upward trending growth charts and positive indicators, featuring warm orange tones (vibrant orange #F5A623, light orange accents) on success elements, with charcoal outlines and white background. Upward arrows, coordinated movement, positive energy. Editorial style, clean lines, minimal shading.
  ```
- **Generation Command**:
  ```bash
  tsx generate-image.ts "successful office collaboration with upward growth charts and positive momentum" --ratio 16:9
  ```

### Slide 02: Why Levels Matter - Failure Toggle View
**Background Image** (16:9 aspect ratio, 10% opacity, mix-blend-multiply):
- **Subject**: Stagnant environment with confused team and declining indicators
- **Visual Metaphor**: Flat/declining charts, scattered disconnected elements, confusion indicators
- **Prompt**:
  ```
  A professional handwritten illustration of an office with confused team members looking at flat or declining charts, scattered disconnected workflow elements, featuring muted orange and gray tones with charcoal outlines and white background. Stagnation indicators, puzzled expressions, broken connections. Editorial style, clean lines, minimal shading.
  ```
- **Generation Command**:
  ```bash
  tsx generate-image.ts "confused office team with declining charts and disconnected workflow elements" --ratio 16:9
  ```

**Implementation Note**: For toggle pattern, consider using single background image that works for both states, OR dynamically swap background images based on toggle state (more complex but more impactful)

---

### Slide 03: The 5 Levels Overview
**Background Image** (16:9 aspect ratio, 8% opacity, mix-blend-multiply):
- **Subject**: Horizontal progression of five distinct zones or stages
- **Visual Metaphor**: Five connected but distinct areas showing progression from simple to complex
- **Prompt**:
  ```
  A professional handwritten illustration showing five distinct horizontal zones progressing from left to right, each zone with unique geometric characteristics increasing in complexity and sophistication. Warm orange tones (vibrant orange #F5A623) highlighting the fourth zone with special emphasis, charcoal outlines, white background. Zones connected by subtle flow lines. Editorial style, clean lines, minimal shading.
  ```
- **Generation Command**:
  ```bash
  tsx generate-image.ts "five horizontal zones showing progression with orange emphasis on fourth zone" --ratio 16:9
  ```
- **Current image**: `/generated-images/gemini-1763332969401-1.png` at 8% opacity - may refresh

---

### Slide 04: Level 1 Individual AI
**Background Image** (16:9 aspect ratio, 10-12% opacity, mix-blend-multiply):
- **Subject**: Individual person at desk interacting with AI chat interface (abstract representation)
- **Visual Metaphor**: Single user, chat bubbles or conversation flow, personal productivity tools
- **Prompt**:
  ```
  A professional handwritten illustration of a single individual at a modern desk working with floating chat interface elements and conversation bubbles, representing AI assistant interaction. Warm orange tones (vibrant orange #F5A623) on the chat elements, charcoal outlines, white background. Clean workspace, digital interaction metaphor, personal productivity. Editorial style, clean lines, minimal shading.
  ```
- **Generation Command**:
  ```bash
  tsx generate-image.ts "individual person at desk with floating AI chat interface elements" --ratio 16:9
  ```

## Agent Groups

### Group 1: Introduction & Title (2 slides)
**Slides**: 01-f1-title, 02-f1-why-levels
**Theme**: Establishing the framework and motivation with immediate impact
**Agent**: slide-generator-1
**Patterns Used**:
- Slide 01: One-Screen Simplicity (hero title slide)
- Slide 02: Button Toggle Comparison (interactive comparison)

**Consistency Requirements**:
- Same color palette (electric orange #FF4D00, neon cyan #00D9FF, charcoal #0A0A0A)
- Same typography hierarchy (Bebas Neue titles, Syne subtitles, Manrope body)
- Same animation timing (200ms delay increments between elements)
- Same background treatment (10-15% opacity, mix-blend-multiply, grain overlay)
- Smooth narrative flow: Title establishes framework → Why Levels demonstrates importance

**Implementation Priority**:
1. Refresh Slide 01 background image if needed (current is good)
2. **Redesign Slide 02** with Button Toggle Comparison pattern (high priority)
3. Ensure both slides use consistent design tokens

---

### Group 2: Framework Overview & Level 1 Detail (2 slides)
**Slides**: 03-f1-levels-overview, 04-f1-level1-individual
**Theme**: Introducing the complete framework and deep-diving into the first level
**Agent**: slide-generator-2
**Patterns Used**:
- Slide 03: Horizontal grid with hover effects (scannable overview)
- Slide 04: One-Screen Simplicity with two-column layout (clear detail)

**Consistency Requirements**:
- Same color palette and typography as Group 1
- Same animation timing and entrance sequences
- Maintain visual hierarchy established in overview when showing Level 1 detail
- Consistent Level 1 color treatment (muted gray) across both slides
- Narrative flow: Overview shows all 5 levels → Level 1 detail provides first deep dive

**Implementation Priority**:
1. Refine Slide 03 content/styling if needed (current is strong)
2. **Redesign Slide 04** with clearer two-column layout and characteristic cards (high priority)
3. Generate fresh background images for both slides
4. Ensure smooth transition from overview to detail

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status: ✅ COMPLETED (this spec document)
  - Comments: Content extracted from f1_five_levels_framework.md, patterns identified, image prompts drafted

- [ ] **Phase 2: Parallel Implementation** - Spawn slide-generator agents in parallel to implement all slides
  - Status: PENDING
  - Comments: Ready to spawn 2 agents (Group 1 and Group 2)

- [ ] **Phase 3: Integration & Validation** - Register slides, test navigation, validate design system compliance
  - Status: PENDING
  - Comments: Will validate after implementation

## Step by Step Tasks

### Foundation Work

- [x] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, components_inspiration/
  - Status: ✅ COMPLETED
  - Comments: All design docs reviewed, patterns identified

- [x] **Extract source content** - Read module content from courses_to_build/education_v2/ and extract relevant sections
  - Status: ✅ COMPLETED
  - Comments: Content extracted from f1_five_levels_framework.md lines 1-60

- [x] **Match patterns** - Consult components_inspiration/ and identify best-fit patterns for each slide
  - Status: ✅ COMPLETED
  - Comments: Patterns matched - One-Screen Simplicity (slides 1,4), Button Toggle (slide 2), Horizontal Grid (slide 3)

### Image Generation

- [ ] **Generate background image for Slide 01** - Run: `tsx generate-image.ts "five ascending geometric tiers representing maturity levels, warm orange highlights on upper levels" --ratio 16:9`
  - Status: OPTIONAL (current image gemini-1763327594149-1.png may be sufficient)
  - Comments: Evaluate current image first, regenerate if needed

- [ ] **Generate background image for Slide 02 (Success view)** - Run: `tsx generate-image.ts "successful office collaboration with upward growth charts and positive momentum" --ratio 16:9`
  - Status: PENDING
  - Comments: New image needed for interactive toggle pattern

- [ ] **Generate background image for Slide 02 (Failure view)** - Run: `tsx generate-image.ts "confused office team with declining charts and disconnected workflow elements" --ratio 16:9`
  - Status: PENDING
  - Comments: Optional - may use single background for both toggle states

- [ ] **Generate background image for Slide 03** - Run: `tsx generate-image.ts "five horizontal zones showing progression with orange emphasis on fourth zone" --ratio 16:9`
  - Status: OPTIONAL (current image gemini-1763332969401-1.png may be sufficient)
  - Comments: Evaluate current image, regenerate if needed

- [ ] **Generate background image for Slide 04** - Run: `tsx generate-image.ts "individual person at desk with floating AI chat interface elements" --ratio 16:9`
  - Status: PENDING
  - Comments: New image needed for Level 1 detail slide

### Slide Implementation

- [ ] **Implement Group 1: Introduction & Motivation** - Slides 01-f1-title, 02-f1-why-levels using patterns One-Screen Simplicity and Button Toggle Comparison
  - Status: PENDING
  - Comments: Priority: Redesign slide 02 with toggle pattern, slide 01 may only need minor refresh

- [ ] **Implement Group 2: Framework Overview & Level 1** - Slides 03-f1-levels-overview, 04-f1-level1-individual using Horizontal Grid and Two-Column Layout patterns
  - Status: PENDING
  - Comments: Priority: Redesign slide 04 with clearer layout, slide 03 may need minor refinements

### Integration & Validation

- [ ] **Register slides in config/slides.ts** - Verify metadata and ordering for slides f1-01 through f1-04
  - Status: PENDING (slides already registered, verify after redesign)
  - Comments: Lines 23-76 of config/slides.ts

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation work correctly across slides 01-04
  - Status: PENDING
  - Comments: Test arrow key navigation, click navigation, touch/swipe on mobile

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility for all 4 slides
  - Status: PENDING
  - Comments: Use DESIGN_AESTHETICS.md checklist, verify WCAG AA contrast ratios

- [ ] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: PENDING
  - Comments: Must pass without errors

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- **Slide 01**: Test title slide renders without errors, animations play in sequence, background image loads
- **Slide 02**: Test button toggle switches between Success/Failure views correctly, metrics update, colors change, transitions are smooth
- **Slide 03**: Test all 5 level cards render, hover effects work, special badges display for L3 (trap) and L4 (transform)
- **Slide 04**: Test Level 1 detail renders, two-column layout works responsively, characteristics display correctly
- **Navigation**: Test next/previous buttons work correctly across all 4 slides
- **Keyboard**: Test arrow keys navigate between slides
- **Responsive**: Test all slides at mobile (375px), tablet (768px), desktop (1920px) breakpoints

### Edge Cases
- **Slide 02**: Rapid clicking on toggle button (ensure state updates smoothly)
- **Slide 03**: Hover effects on touch devices (should use tap/touch instead)
- **All slides**: Canvas animations with prefers-reduced-motion (should respect user preference)
- **All slides**: Keyboard navigation through all interactive elements (focus states visible)
- **All slides**: Screen reader compatibility (ARIA labels, semantic HTML)

## Acceptance Criteria

- [ ] All 4 slides have AI-generated background images at appropriate opacity (8-15%)
- [ ] All slides use patterns from components_inspiration/ or INTERACTIVE_PATTERNS.md
- [ ] All slides follow design system (DESIGN_AESTHETICS.md) - electric orange #FF4D00, neon cyan #00D9FF, Bebas Neue/Syne/Manrope fonts
- [ ] All slides are responsive (mobile 375px, tablet 768px, desktop 1920px+)
- [ ] All slides have proper entrance animations (staggered, 200ms delays)
- [ ] Slide 02 toggle provides clear feedback and smooth transitions
- [ ] Slide 03 level cards have clear visual hierarchy (L3 warning, L4 primary, L5 cyan)
- [ ] Slide 04 Level 1 detail has clear two-column layout with pros/cons
- [ ] All interactive elements provide clear visual feedback (hover, focus, active states)
- [ ] All slides meet WCAG AA accessibility standards (4.5:1 contrast body text, 3:1 large text)
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency across all 4 slides
- [ ] Narrative flow feels natural: Title → Why → Overview → Level 1 Detail

## Slide Design Requirements

### Image Generation Strategy
**Detailed per-slide image generation plan** (see "Image Generation Strategy" section above for complete prompts)

**Summary**:
- **Slide 01**: Ascending tiers/platforms (5 levels), orange highlights on top tiers, 12-15% opacity
- **Slide 02**: Success view (thriving office, upward charts, 10% opacity) + Optional failure view (confused team, declining charts)
- **Slide 03**: Five horizontal zones with orange emphasis on 4th zone, 8% opacity
- **Slide 04**: Individual at desk with AI chat interface elements, 10-12% opacity

All images use 16:9 aspect ratio with mix-blend-multiply and handwritten illustration style per IMAGE_GENERATION_GUIDE.md template.

### Visual Component Selection

**Slide 01 (Title)**:
- Badge component (glow variant)
- Text hierarchy: h1 (title), p (subtitle), p (metadata)
- No data viz or interactive elements
- Icons: None
- AI-generated background + GeometricPattern (dots) + GrainOverlay

**Slide 02 (Why Levels)**:
- Badge component (outline variant)
- Button components (2 toggle buttons - default and destructive variants)
- Card components (4 metric cards in 2x2 grid)
- Text hierarchy: h2 (title), p (subtitle), metric values in cards
- Icons: CheckCircle2 (success metrics), XCircle (failure metrics), AlertTriangle (toggle button)
- AI-generated background (potentially dual backgrounds for toggle states) + GrainOverlay

**Slide 03 (Levels Overview)**:
- Badge component (outline variant)
- Card components (5 level cards in responsive grid)
- Text hierarchy: h2 (title), p (subtitle), card titles, characteristics lists
- Icons: User, Blocks, Workflow, RefreshCw, Bot (lucide-react)
- Number badges: Circular badges with level numbers (1-5)
- AI-generated background + GeometricPattern (grid) + GrainOverlay

**Slide 04 (Level 1 Detail)**:
- Badge component (outline variant)
- Card components (3 example cards + characteristics grid + insight card)
- Text hierarchy: h2 (title), p (subtitle), definition text, characteristics
- Icons: CheckCircle2 (pros), XCircle (cons), plus example-specific icons
- Two-column grid layout
- AI-generated background + GrainOverlay

### Layout Design

**Slide 01 (Title)**:
- Grid structure: Single column, centered
- Spacing: p-8 lg:p-24 (extra generous for hero), space-y-12 (generous vertical spacing)
- Component hierarchy: Badge → Title → Subtitle → Metadata (top to bottom, center-aligned)
- Full-screen slide setup: min-h-screen, flex items-center justify-center

**Slide 02 (Why Levels)**:
- Grid structure: Single column header, 2x2 grid for metrics
- Spacing: p-8 lg:p-12, space-y-10 (section gaps), gap-6 (grid gaps)
- Component hierarchy: Badge → Title → Subtitle → Toggle Buttons → 2x2 Metrics Grid → Insight Card
- Full-screen slide setup: min-h-screen, flex items-center justify-center

**Slide 03 (Levels Overview)**:
- Grid structure: Single column header, 5-column grid (responsive: 1→2→5 cols)
- Spacing: p-8 lg:p-12, space-y-10, gap-4 md:gap-6
- Component hierarchy: Badge → Title → Subtitle → 5-Column Level Cards → Bottom Insight
- Full-screen slide setup: min-h-screen, flex items-center justify-center

**Slide 04 (Level 1 Detail)**:
- Grid structure: Single column header, 2-column content grid (responsive: 1→2 cols)
- Spacing: p-8 lg:p-12, space-y-10, gap-8 (column gap)
- Component hierarchy: Badge → Title → Subtitle → 2-Column Grid (Left: Definition + Examples, Right: Characteristics) → Insight Card
- Full-screen slide setup: min-h-screen, flex items-center justify-center

### Interactive & Animation Patterns

**Slide 01 (Title)**:
- **Entrance animations**: Orchestrated sequence with staggered delays
  - Badge: animate-slide-in-down (0ms delay)
  - Title: animate-fade-in delay-200 fill-backwards (200ms delay)
  - Subtitle: animate-slide-in-up delay-400 fill-backwards (400ms delay)
  - Metadata: animate-fade-in delay-600 fill-backwards (600ms delay)
- **Special effect**: animate-glow-pulse on "FRAMEWORK" span
- **No interactive reveals**: Static hero slide

**Slide 02 (Why Levels)**:
- **Entrance animations**: Badge, title, subtitle with staggered delays (0ms, 200ms, 400ms)
- **Interactive toggle**:
  - Button state changes (variant switches between default and destructive)
  - Content swap with transition-all duration-600
  - Metric cards animate in with animate-slide-in-right (success) or animate-slide-in-left (failure)
  - Staggered delays on cards (0ms, 100ms, 200ms, 300ms)
- **Hover effects**: Buttons have hover:scale-105 transform
- **Smooth transitions**: transition-all duration-300 on button, duration-600 on content

**Slide 03 (Levels Overview)**:
- **Entrance animations**: Badge, title, subtitle with staggered delays
- **Card animations**: Each card has animate-fade-in with staggered delay (delay-200, delay-300, ..., delay-600)
- **Hover effects**:
  - Cards: hover:scale-105 with duration-600 transition
  - Enhanced shadow: hover:shadow-xl
- **No click interactions**: Hover only for exploration

**Slide 04 (Level 1 Detail)**:
- **Entrance animations**: Badge, title, subtitle, content sections with staggered delays
- **No interactive elements**: Static informational slide
- **Hover effects**: None needed (focus on clarity over interaction)

### Color & Typography Usage

**Color Scheme** (from DESIGN_AESTHETICS.md):
- **Primary**: Electric orange #FF4D00 (Level 4 emphasis, primary accents, glow effects)
- **Secondary**: Neon cyan #00D9FF (Level 5 only)
- **Warning**: Orange-yellow #FFB800 (Level 3 trap warnings)
- **Destructive**: Red #EF4444 (failure scenarios in Slide 02)
- **Success**: Green #10B981 (success scenarios in Slide 02)
- **Charcoal**: #0A0A0A (backgrounds, text on light backgrounds)
- **Muted**: Gray tones (Levels 1-2 de-emphasis)

**Text Hierarchy**:
- **Titles (h1/h2)**: text-6xl md:text-8xl lg:text-9xl (Slide 01), text-5xl md:text-7xl lg:text-8xl (Slides 02-04)
- **Subtitles**: text-2xl md:text-4xl lg:text-5xl (Slide 01), text-xl md:text-2xl lg:text-3xl (Slides 02-04)
- **Body text**: text-base md:text-lg (paragraphs), text-sm (card characteristics)
- **Metadata**: text-xl md:text-2xl (duration), text-lg md:text-xl (prerequisites)

**Contrast Ratios** (WCAG AA compliance):
- Body text (16px): 4.5:1 minimum (electric orange #FF4D00 on white ≈ 3.9:1 ❌ - use charcoal #0A0A0A for body)
- Large text (24px+): 3:1 minimum (electric orange #FF4D00 on white ✅ works for titles)
- Interactive elements: Focus states with ring utilities (ring-2 ring-primary ring-offset-2)

**Font Weights**:
- font-bold: Titles (Bebas Neue), subtitles (Syne), emphasis (Manrope)
- font-semibold: Section headers, metric labels
- font-normal: Body text, characteristics lists

**Font Families**:
- Bebas Neue: Titles (h1, h2) - font-bebas class
- Syne: Subtitles, emphasis text - font-syne class
- Manrope: Body text, cards, metadata - font-manrope class

### Accessibility Checklist

- [ ] **Color contrast meets WCAG AA** (4.5:1 body text, 3:1 large text)
  - Electric orange #FF4D00 only for large text (titles, badges)
  - Charcoal #0A0A0A for body text on light backgrounds
  - White #FFFFFF for text on dark backgrounds
- [ ] **All interactive elements have focus states** (ring utilities: ring-2 ring-primary ring-offset-2)
  - Toggle buttons in Slide 02
  - Level cards in Slide 03 (if using click interaction)
- [ ] **Text readable at minimum 16px for body** (text-base or larger)
- [ ] **Icons paired with text labels or ARIA labels**
  - All icons have accompanying text
  - Decorative icons have aria-hidden="true"
  - Background images have alt="" and aria-hidden="true"
- [ ] **Keyboard navigation works** (Tab, Enter, Space for buttons/interactive elements)
  - Toggle buttons in Slide 02 keyboard accessible
  - Slide navigation (arrow keys) works
- [ ] **Screen reader compatible** (semantic HTML, ARIA labels where needed)
  - Use semantic elements: <section>, <h1>, <h2>, <p>, <button>, <ul>, <li>
  - Badge components have appropriate role attributes
  - Cards use proper heading hierarchy
- [ ] **Motion respects prefers-reduced-motion**
  - Wrap animations in @media (prefers-reduced-motion: no-preference)
  - Provide fallback static states for reduced-motion users

### Component Implementation Notes

**shadcn/ui components**:
- Badge: glow variant (Slide 01), outline variant (Slides 02-04)
- Card + CardContent: Layered cards with proper padding (pt-6 for CardContent)
- Button: default variant (Slide 02 active), destructive variant (Slide 02 failure), outline variant if needed

**Custom components**:
- GrainOverlay: opacity={0.15} on all slides
- GeometricPattern: type="dots" opacity={0.06} (Slides 01, 02), type="grid" opacity={0.06} (Slide 03)
- None needed for Slide 04

**lucide-react icons**:
- Slide 01: None
- Slide 02: AlertTriangle (toggle button), CheckCircle2 (success metrics), XCircle (failure metrics)
- Slide 03: User, Blocks, Workflow, RefreshCw, Bot
- Slide 04: CheckCircle2 (pros), XCircle (cons)

**Animation utilities** (from globals.css):
- animate-slide-in-down, animate-slide-in-up (entrance animations)
- animate-fade-in with delay variants (delay-200, delay-400, delay-600, delay-700)
- animate-glow-pulse (Slide 01 title emphasis)
- animate-slide-in-right, animate-slide-in-left (Slide 02 metric cards)
- fill-backwards (prevents animation flash before start)

**State management** (Slide 02 only):
- "use client" directive
- useState for toggle state: `const [showReality, setShowReality] = useState(false)`
- Button onClick handler to toggle state

## Validation Commands

```bash
# Generate all background images (run from project root)

# Slide 01 (optional - evaluate existing first)
# tsx generate-image.ts "five ascending geometric tiers representing maturity levels, warm orange highlights on upper levels" --ratio 16:9

# Slide 02 - Success view
tsx generate-image.ts "successful office collaboration with upward growth charts and positive momentum" --ratio 16:9

# Slide 02 - Failure view (optional if using dual backgrounds)
# tsx generate-image.ts "confused office team with declining charts and disconnected workflow elements" --ratio 16:9

# Slide 03 (optional - evaluate existing first)
# tsx generate-image.ts "five horizontal zones showing progression with orange emphasis on fourth zone" --ratio 16:9

# Slide 04
tsx generate-image.ts "individual person at desk with floating AI chat interface elements" --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to F1 module, test slides 01-04 navigation and interactivity
```

## Notes

### Critical Design Decisions

1. **POC-Style Interactive Preference**: Slide 02 uses Button Toggle Comparison to SHOW the difference between success and failure rather than just describing it. This creates visceral understanding.

2. **Pattern-First Approach**: All slides use proven patterns from components_inspiration/:
   - One-Screen Simplicity: Title slide and Level 1 detail (minimal, maximal clarity)
   - Button Toggle Comparison: Why Levels slide (dramatic cognitive contrast)
   - Horizontal Grid: Levels overview (scannable, self-paced exploration)

3. **Background Images Required**: All 4 slides have AI-generated background images at 8-15% opacity for visual enhancement and consistency.

4. **Color Hierarchy**:
   - Levels 1-2: Muted gray (de-emphasized)
   - Level 3: Warning orange (trap)
   - Level 4: Primary electric orange (transformation)
   - Level 5: Neon cyan (future)
   This hierarchy is established in Slide 03 and maintained throughout the module.

5. **Max 2 Slides Per Agent Group**: Group 1 (slides 1-2) and Group 2 (slides 3-4) ensure quality while enabling parallelization.

6. **Design System Compliance**: All slides strictly follow DESIGN_AESTHETICS.md specifications:
   - Bebas Neue titles, Syne subtitles, Manrope body
   - Electric orange #FF4D00, neon cyan #00D9FF, charcoal #0A0A0A
   - Orchestrated entrance animations with 200ms stagger
   - GrainOverlay + GeometricPattern on all slides

### Pattern Selection Rationale

**Slide 01 - One-Screen Simplicity**:
- Hero title slides need maximum impact with minimal distraction
- Pattern ensures strong first impression through clear hierarchy and orchestrated animations
- Reference: `patterns/one-screen-simplicity/README.md`

**Slide 02 - Button Toggle Comparison**:
- Explaining "why levels matter" requires showing, not telling
- Toggle pattern creates memorable cognitive contrast between success (Level 4) and failure (Level 3)
- Same layout for both views makes differences crystal clear
- Executives can literally SEE the ROI difference based on level choice
- Reference: `patterns/button-toggle-comparison/README.md`

**Slide 03 - Horizontal Grid with Hover Effects**:
- Presenting 5 distinct levels requires scannable overview
- Hover effects invite exploration without forcing interaction
- Color hierarchy (muted → warning → primary → cyan) guides attention to transformation levels (4-5)
- Current implementation is strong, may need minor content refinement

**Slide 04 - One-Screen Simplicity (Two-Column Variant)**:
- Level detail slides need clear information architecture
- Two-column layout separates "what it is" (left) from "characteristics" (right)
- Checkmark/X icons make pros/cons instantly scannable
- Bottom insight card connects Level 1 to the bigger transformation story

### Future Enhancements

**Post-Initial Implementation**:
- Consider adding subtle canvas background animation to Slide 02 showing iteration speed difference (Level 3 slow, Level 4 fast)
- Explore adding micro-interactions to Slide 03 level cards (click to expand detail preview)
- Add optional "Skip to Level 4" CTA on Slide 03 for executives who want to jump to transformation details
- Consider A/B testing dual backgrounds for Slide 02 toggle vs single background with color overlay

**Accessibility Enhancements**:
- Add skip links for keyboard users
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Validate with automated tools (axe DevTools, Lighthouse)

### Implementation Order Recommendation

**Priority 1** (High Impact):
1. Redesign Slide 02 (Why Levels Matter) with Button Toggle Comparison pattern - this is the "hook" slide that makes executives care
2. Redesign Slide 04 (Level 1 Detail) with clearer two-column layout and improved characteristics presentation

**Priority 2** (Refinement):
3. Refresh Slide 01 background image if current image doesn't match updated design system
4. Refine Slide 03 content and styling (current implementation is already strong)

**Priority 3** (Polish):
5. Generate all background images for consistency
6. Test responsive layouts at all breakpoints
7. Validate accessibility with automated tools

