# Feature: Vlada - Slide Redesign (Slides 1-4)

## Feature Description
Redesign of the first 4 slides for the Vlada dental clinic financial management presentation. This redesign transforms static content into engaging, interactive slides that demonstrate the "Show, Don't Tell" philosophy while maintaining the premium dental finance aesthetic (teal + navy color scheme).

The slides cover:
1. **Title Slide** - Introduction to the service
2. **Problem Slide** - Pain points that dental clinic owners face
3. **Solution Slide** - What the financial administration service provides
4. **Pricing Overview** - Two-tier pricing comparison

## User Story
As a presentation developer
I want to redesign vlada slides 1-4
So that dental clinic owners experience more engaging, interactive, and visually compelling content that builds trust and clearly communicates the value proposition

## Problem Statement
Current issues that this redesign addresses:
- Static text-heavy designs with low engagement potential
- Missing interactive elements that demonstrate concepts visually
- Need for professional healthcare + fintech aesthetic (teal + navy)
- Missing AI-generated background images for visual atmosphere
- No clear visual hierarchy guiding the viewer through the sales narrative

## Solution Statement
Redesign slides using POC-style interactive patterns from `ai_docs/components_inspiration/` and `ai_docs/INTERACTIVE_PATTERNS.md`:
- **UPDATE/OVERWRITE existing slide files** with completely new implementations (replacing old versions)
- Replace static text with interactive demos (toggles, hover-reveal cards)
- Add AI-generated background images at 10-20% opacity
- Ensure design system compliance (DESIGN_AESTHETICS.md) with teal/navy palette
- Follow "Show, Don't Tell" philosophy throughout
- Maintain all content in Ukrainian (original language)

## Relevant Files

### Source Content
- `data_vlada/presentation.md` - Complete presentation source content in Ukrainian

### Existing Slide Files (to be updated/overwritten)
- `components/slides/vlada/01-title.tsx` - Title slide (CREATE or UPDATE)
- `components/slides/vlada/02-problem.tsx` - Problem/pain points slide (CREATE or UPDATE)
- `components/slides/vlada/03-solution.tsx` - Solution overview slide (CREATE or UPDATE)
- `components/slides/vlada/04-pricing.tsx` - Pricing comparison slide (CREATE or UPDATE)

### Design Documentation
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (teal #00897B, navy #1E3A5F)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas-based animation components
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/one-screen-simplicity/` - For title slide
- `ai_docs/components_inspiration/patterns/hover-reveal-cards/` - For problem slide
- `ai_docs/components_inspiration/patterns/are-vs-not-comparison/` - For solution slide
- `ai_docs/components_inspiration/patterns/button-toggle-comparison/` - For pricing slide

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/vlada/*.tsx` - Slide components to CREATE or UPDATE
- `config/slides.ts` - Slide registry

### Files to Update/Create
- `components/slides/vlada/01-title.tsx` - Title slide component
- `components/slides/vlada/02-problem.tsx` - Problem slide component
- `components/slides/vlada/03-solution.tsx` - Solution slide component
- `components/slides/vlada/04-pricing.tsx` - Pricing comparison slide component

## Content Breakdown

### Slide 01: Title Slide
**Source**: `data_vlada/presentation.md` (Opening section)
**Content**:
- Title: "Finansove upravlinnya dlya stomatolohichnoyi kliniky" (Financial Management for Dental Clinic)
- Subtitle/Tagline: "Navedemo lad u hroshakh - vy zaymetes patsiyentamy" (We'll organize your finances - you focus on patients)
- Company branding element
- Professional healthcare + fintech trust aesthetic

**Learning Objectives**:
- Immediately communicate the service value proposition
- Establish trust through professional healthcare aesthetic
- Create emotional connection with busy clinic owners

**Interactive Elements**:
- Orchestrated entrance animations (badge -> title -> subtitle -> metadata)
- Subtle background animation (grain overlay + gradient mesh)
- Animated teal glow on key terms

### Slide 02: Problem - "Znayoma sytuatsiya?" (Familiar Situation?)
**Source**: `data_vlada/presentation.md` (Problem section)
**Content**:
- Target: Dental clinic owners struggling with finances
- Pain Point 1: "Hroshi prykhodiat... ale kudy vony potim ydut - ne zovsim zrozumilo" (Money comes in... but unclear where it goes)
- Pain Point 2: "Naprykinytsi misyatsya na rakhunku menshe, nizh vy ochikuvaly" (End of month, less in account than expected)
- Pain Point 3: "Bukhhalter nadsylaye tablytsi, ale shcho z nymy robyty - nezrozumilo" (Accountant sends tables, but what to do is unclear)
- Pain Point 4: "Khochete vyvesty hroshi, ale boyites, shcho ne vystachyt na zarplaty" (Want to withdraw but afraid there won't be enough for salaries)
- Key Insight: "Vy chudovyy stomatoloh. Ale finansy - tse okrema profesiya." (You're a great dentist. But finances is a separate profession.)

**Learning Objectives**:
- Create recognition ("this is me!") moment
- Validate pain points without being negative
- Build empathy and trust

**Interactive Elements**:
- Hover-reveal cards for each pain point
- Cards show expanded detail on hover
- Staggered entrance animations
- Warning-colored cards (amber/orange accents) for pain points

### Slide 03: Solution - "Shcho my robymo" (What We Do)
**Source**: `data_vlada/presentation.md` (Solution section)
**Content**:
- Position: "My - vash finansovyy administrator" (We are your financial administrator)
- What they do:
  - ARE: Daily income/expense tracking
  - ARE: Ensuring cash/bank/software numbers match
  - ARE: Monthly clear report (earned, spent, remaining)
  - ARE: Explaining money in simple words
- NOT: Complicated accounting jargon
- NOT: Endless spreadsheets without context
- NOT: Generic advice that doesn't fit your clinic
- Metaphor: "Tse yak personalnyy trener, tilky dlya finansiv vashoyi kliniky" (Like a personal trainer, but for your clinic's finances)

**Learning Objectives**:
- Clearly define what the service includes
- Differentiate from traditional accountants
- Create "personal trainer" mental model

**Interactive Elements**:
- ARE vs NOT comparison pattern
- Green (success) for ARE items, red (destructive) for NOT items
- Icon reinforcement (CheckCircle2 for ARE, AlertCircle for NOT)
- Dual-column responsive grid

### Slide 04: Pricing Overview - "Dva taryfy na vybir" (Two Plans to Choose)
**Source**: `data_vlada/presentation.md` (Pricing section)
**Content**:
- Plan 1: "Finansove vedennya" (Financial Management) - 9,000 UAH/month
  - Format: Written communication
  - Essence: Order in numbers
  - For: Clinic wants to understand finances
- Plan 2: "Finansove partnerstvo" (Financial Partnership) - 19,000 UAH/month
  - Format: Written + Zoom calls
  - Essence: Order + profit growth
  - For: Clinic wants to grow and plan

- Key Difference Statement:
  - 9,000 = "vy BACHYTE, shcho vidbuvayetsya z hroshamy" (you SEE what's happening)
  - 19,000 = "vy KERUYETE tym, shcho vidbuvayetsya z hroshamy" (you CONTROL what's happening)

**Learning Objectives**:
- Present clear pricing options
- Highlight value difference between tiers
- Enable self-selection based on needs

**Interactive Elements**:
- Button toggle comparison pattern (Basic vs Partnership)
- Toggle switches between two pricing views
- Dynamic content rendering based on selection
- Color-coded features (teal for included, muted for not included)
- "SEE vs CONTROL" key message emphasized

## Visual Design Recommendations

### Slide 01: Title Slide
**Pattern**: One-Screen Simplicity (`patterns/one-screen-simplicity/`)
**Rationale**: Title slides benefit from minimalist layout with maximum clarity. This pattern ensures strong first impression without cognitive overload. The premium dental finance aesthetic requires clean, spa-like design with teal accents.
**Key Features**:
- Badge + Title + Subtitle hierarchy
- Atmospheric background (GradientMesh warm variant + GrainOverlay)
- Orchestrated entrance animations
- Teal primary color (#00897B) for keywords and emphasis
- Maximum whitespace for breathing room
**Layout**: Single column, vertically centered, max-w-5xl
**Typography**:
- Title: `font-bebas text-6xl md:text-8xl lg:text-9xl` in deep charcoal
- Tagline: `font-syne text-2xl md:text-4xl text-primary`
- Metadata: `font-manrope text-lg text-muted-foreground`

### Slide 02: Problem Slide
**Pattern**: Hover-Reveal Cards (adapted from `patterns/progressive-disclosure/`)
**Rationale**: Pain points need to be presented sympathetically without overwhelming. Hover-reveal allows clinic owners to explore at their own pace while seeing themselves in the problems described.
**Key Features**:
- 4 pain point cards in responsive grid
- Default state shows icon + short title
- Hover reveals expanded description
- Warning color theme (amber border, amber/5 background)
- Staggered entrance animations (100ms delay between cards)
- Final insight card with different styling (teal/primary)
**Layout**: Header + 2x2 grid + insight callout
**Typography**:
- Section title: `font-bebas text-5xl md:text-7xl`
- Card titles: `font-syne text-xl font-semibold`
- Card descriptions: `font-manrope text-base`

### Slide 03: Solution Slide
**Pattern**: ARE vs NOT Comparison (`patterns/are-vs-not-comparison/`)
**Rationale**: The "financial administrator" concept is best understood by contrasting what the service IS vs what it ISN'T. This creates clear mental boundaries and prevents confusion with traditional accountants.
**Key Features**:
- Dual-column responsive grid (stacks on mobile)
- Green (success) for ARE items with CheckCircle2 icons
- Red (destructive) for NOT items with AlertCircle icons
- Semantic color coding for instant emotional recognition
- "Personal trainer" metaphor callout at bottom
- Scannable lists with icon-text alignment
**Layout**: Header + two-column grid + callout card
**Typography**:
- Title: `font-bebas text-5xl md:text-7xl`
- Subtitle: `font-syne text-xl text-primary`
- List items: `font-manrope text-base`
- Metaphor: `font-syne text-lg font-bold text-primary`

### Slide 04: Pricing Overview
**Pattern**: Button Toggle Comparison (`patterns/button-toggle-comparison/`)
**Rationale**: Two pricing tiers are perfect for binary toggle pattern. Allows clinic owners to actively explore both options, creating engagement and helping them self-select the right tier.
**Key Features**:
- Two toggle buttons: "Finansove vedennya" vs "Finansove partnerstvo"
- Dynamic content rendering based on selection
- Price displayed prominently
- Feature comparison with checkmarks
- Key difference emphasized ("BACHYTE" vs "KERUYETE")
- Color coding: teal for included features
**Layout**: Header + toggle buttons + dynamic content grid + key message
**Typography**:
- Title: `font-bebas text-5xl md:text-7xl`
- Price: `font-bebas text-4xl text-primary`
- Features: `font-manrope text-base`
- Key message: `font-syne text-xl font-bold`

## Image Generation Strategy

### Slide 01: Title Slide
**Background Image** (16:9, 15% opacity, mix-blend-multiply):
- Subject: Abstract geometric composition suggesting financial order and healthcare calm
- Prompt: "A professional handwritten illustration of gentle ascending bar chart forms merging with soft organic flowing curves, abstract geometric composition suggesting financial clarity and healthcare trust, featuring warm teal tones (teal #00897B, light teal accents), with charcoal outlines and white/light gray background. Minimalist balanced composition, no text or numbers or labels. Editorial style, clean lines, minimal shading, spa-like calm aesthetic."
- **Validation**: No text/numbers/labels - uses "ascending bar chart forms" and "organic curves" as pure shapes
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of gentle ascending bar chart forms merging with soft organic flowing curves, abstract geometric composition suggesting financial clarity and healthcare trust, featuring warm teal tones (teal #00897B, light teal accents), with charcoal outlines and white/light gray background. Minimalist balanced composition, no text or numbers or labels. Editorial style, clean lines, minimal shading, spa-like calm aesthetic." --ratio 16:9`

### Slide 02: Problem Slide
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- Subject: Abstract scattered elements suggesting confusion and disorder
- Prompt: "A professional handwritten illustration of scattered geometric fragments and disconnected circular forms creating sense of disorder, abstract paper scraps and floating shapes suggesting confusion, featuring warm amber tones (amber #FF9800, light orange accents), with charcoal outlines and white/light gray background. Elements appear unorganized and floating without connection, no text or numbers or labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses "scattered fragments" and "floating shapes" as pure visual elements
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of scattered geometric fragments and disconnected circular forms creating sense of disorder, abstract paper scraps and floating shapes suggesting confusion, featuring warm amber tones (amber #FF9800, light orange accents), with charcoal outlines and white/light gray background. Elements appear unorganized and floating without connection, no text or numbers or labels. Editorial style, clean lines, minimal shading." --ratio 16:9`

### Slide 03: Solution Slide
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- Subject: Abstract organized structure suggesting clarity and partnership
- Prompt: "A professional handwritten illustration of organized geometric grid with interconnected nodes forming harmonious structure, abstract clean framework with aligned elements suggesting order and clarity, featuring warm teal tones (teal #00897B, light teal accents), with charcoal outlines and white/light gray background. Two abstract human silhouette shapes in partnership position, no text or numbers or labels. Editorial style, clean lines, minimal shading, professional calm aesthetic."
- **Validation**: No text/numbers/labels - uses "geometric grid" and "silhouette shapes" as pure visual elements
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of organized geometric grid with interconnected nodes forming harmonious structure, abstract clean framework with aligned elements suggesting order and clarity, featuring warm teal tones (teal #00897B, light teal accents), with charcoal outlines and white/light gray background. Two abstract human silhouette shapes in partnership position, no text or numbers or labels. Editorial style, clean lines, minimal shading, professional calm aesthetic." --ratio 16:9`

### Slide 04: Pricing Slide
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- Subject: Abstract two-tier structure suggesting options and choice
- Prompt: "A professional handwritten illustration of two distinct elevated platform shapes side by side at different heights, abstract tiered structure suggesting progression and choice, left platform smaller and simpler, right platform larger with more detail, featuring warm teal tones (teal #00897B) and deep navy accents (#1E3A5F), with charcoal outlines and white/light gray background. Abstract arrows or pathways connecting platforms, no text or numbers or labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses "platform shapes" and "tiered structure" as pure visual elements
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of two distinct elevated platform shapes side by side at different heights, abstract tiered structure suggesting progression and choice, left platform smaller and simpler, right platform larger with more detail, featuring warm teal tones (teal #00897B) and deep navy accents (#1E3A5F), with charcoal outlines and white/light gray background. Abstract arrows or pathways connecting platforms, no text or numbers or labels. Editorial style, clean lines, minimal shading." --ratio 16:9`

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status: COMPLETE (this spec)
  - Comments: Content extracted, patterns selected, images planned

- [ ] **Phase 2: Implementation** - Use slide-generator agent to CREATE/UPDATE slides
  - **CRITICAL**: Agent will use Write tool to create new slide files or replace existing ones
  - **Files to create**: 4 slide components in `components/slides/vlada/`
  - Status: NOT STARTED
  - Comments: Ready for implementation

- [ ] **Phase 3: Integration & Validation** - Register slides, test navigation, validate design system compliance
  - Status: NOT STARTED
  - Comments: Will register in config/slides.ts after implementation

## Step by Step Tasks

### Foundation Work

- [x] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, components_inspiration/
  - Status: COMPLETE
  - Comments: Reviewed all documentation, noted teal/navy color scheme for dental finance

- [x] **Extract source content** - Read module content from data_vlada/presentation.md
  - Status: COMPLETE
  - Comments: Content extracted and documented in Content Breakdown section

- [x] **Match patterns** - Consult components_inspiration/ and identify best-fit patterns for each slide
  - Status: COMPLETE
  - Comments: One-Screen Simplicity, Hover-Reveal, ARE vs NOT, Button Toggle selected

### Image Generation

- [x] **Generate background image for Slide 01** - Run: `tsx generate-image.ts "[PROMPT_SLIDE_01]" --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1765289800961-1.png (1.05MB) - Financial clarity + healthcare calm composition

- [x] **Generate background image for Slide 02** - Run: `tsx generate-image.ts "[PROMPT_SLIDE_02]" --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1765289818261-1.png (1.34MB) - Scattered confusion composition in amber tones

- [x] **Generate background image for Slide 03** - Run: `tsx generate-image.ts "[PROMPT_SLIDE_03]" --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1765289804032-1.png (1.12MB) - Organized structure with partnership silhouettes

- [x] **Generate background image for Slide 04** - Run: `tsx generate-image.ts "[PROMPT_SLIDE_04]" --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1765289816044-1.png (1.44MB) - Two-tier platform structure in teal/navy

### Slide Implementation

- [x] **Implement Slide 01 (Title)** - CREATE using One-Screen Simplicity pattern
  - **Action**: Create new slide file with orchestrated entrance animations
  - **Tool**: Use Write tool to create `components/slides/vlada/01-title.tsx`
  - Status: COMPLETE
  - Comments: Title slide with teal accents, warm gradient background, GradientMesh, GrainOverlay, orchestrated animations

- [x] **Implement Slide 02 (Problem)** - CREATE using Hover-Reveal Cards pattern
  - **Action**: Create new slide file with 4 pain point cards
  - **Tool**: Use Write tool to create `components/slides/vlada/02-problem.tsx`
  - Status: COMPLETE
  - Comments: Warning-themed hover cards with amber accents, interactive hover-reveal, key insight card

- [x] **Implement Slide 03 (Solution)** - CREATE using ARE vs NOT pattern
  - **Action**: Create new slide file with dual-column comparison
  - **Tool**: Use Write tool to create `components/slides/vlada/03-solution.tsx`
  - Status: COMPLETE
  - Comments: Green/red semantic color coding with CheckCircle2/AlertCircle icons, metaphor callout with gym icon, teal accents

- [x] **Implement Slide 04 (Pricing)** - CREATE using Button Toggle Comparison pattern
  - **Action**: Create new slide file with interactive pricing toggle
  - **Tool**: Use Write tool to create `components/slides/vlada/04-pricing.tsx`
  - Status: COMPLETE
  - Comments: Binary toggle between 9,000 (teal) and 19,000 (navy) UAH plans, dynamic content, feature cards, key message emphasis

### Integration & Validation

- [ ] **Register slides in config/slides.ts** - Add slide metadata and ordering
  - Status: NOT STARTED
  - Comments: Add vlada-01 through vlada-04 to slide registry

- [ ] **Create module page** - Update or create app/(courses)/modules/vlada/page.tsx
  - Status: NOT STARTED
  - Comments: Create vlada module page with slide array

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation
  - Status: NOT STARTED
  - Comments: Test all 4 slides navigate correctly

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status: NOT STARTED
  - Comments: Verify teal/navy palette, Bebas/Syne/Manrope fonts

- [ ] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: NOT STARTED
  - Comments: Must pass with no errors

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- Test each slide renders without errors
- Test slide navigation (next/previous)
- Test interactive elements:
  - Slide 02: Hover-reveal cards expand/collapse
  - Slide 04: Toggle buttons switch content
- Test responsive layouts at breakpoints (mobile, tablet, desktop)

### Edge Cases
- Rapid clicking on toggle buttons (Slide 04)
- Hover effects on touch devices (Slide 02)
- Keyboard navigation through all interactive elements
- Reduced motion preference respected

## Acceptance Criteria

- [ ] All 4 slides have AI-generated background images at appropriate opacity (10-15%)
- [ ] All slides use patterns from components_inspiration/ or INTERACTIVE_PATTERNS.md
- [ ] All slides follow design system (DESIGN_AESTHETICS.md) - teal/navy palette
- [ ] All slides are responsive (mobile, tablet, desktop)
- [ ] All slides have proper entrance animations (orchestrated sequence)
- [ ] Slide 02 hover-reveal cards work correctly
- [ ] Slide 03 ARE vs NOT comparison is clearly differentiated (green/red)
- [ ] Slide 04 toggle buttons switch pricing content dynamically
- [ ] All content remains in Ukrainian (original language)
- [ ] All interactive elements provide clear feedback
- [ ] All slides meet WCAG AA accessibility standards
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency

## Slide Design Requirements

### Image Generation Strategy
See detailed per-slide image generation plan in "Image Generation Strategy" section above.

### Visual Component Selection

**Slide 01 (Title):**
- Text blocks: Badge, H1 title, Syne tagline, metadata
- Icons: Optional tooth/finance icon in badge
- Background: GradientMesh (warm) + GrainOverlay + AI-generated image

**Slide 02 (Problem):**
- Text blocks: H2 title, 4 card titles, 4 card descriptions, insight text
- Icons: AlertTriangle for pain points, Lightbulb for insight
- Interactive: HoverCard pattern with onMouseEnter/onMouseLeave
- Background: GrainOverlay + AI-generated image (amber theme)

**Slide 03 (Solution):**
- Text blocks: H2 title, subtitle, ARE list items, NOT list items, metaphor callout
- Icons: CheckCircle2 (success), AlertCircle (destructive)
- Data visualization: Dual-column comparison grid
- Background: GrainOverlay + AI-generated image (teal theme)

**Slide 04 (Pricing):**
- Text blocks: H2 title, price displays, feature lists, key message
- Icons: Check for included features, optional Zap for premium
- Interactive: Button toggle (Basic/Partnership)
- Data visualization: Feature comparison with checkmarks
- Background: GrainOverlay + AI-generated image (teal/navy theme)

### Layout Design

**Slide 01:**
- Grid: Single column, centered
- Spacing: `p-8 lg:p-24`, `space-y-10 lg:space-y-16`
- Max width: `max-w-5xl`
- Full-screen: `min-h-screen flex items-center justify-center`

**Slide 02:**
- Grid: Header + 2x2 grid (`grid-cols-1 md:grid-cols-2`) + callout
- Spacing: `p-8 lg:p-16`, `gap-4 md:gap-6`
- Max width: `max-w-6xl`
- Full-screen: `min-h-screen flex items-center justify-center`

**Slide 03:**
- Grid: Header + two-column (`grid-cols-1 lg:grid-cols-2`) + callout
- Spacing: `p-8 lg:p-16`, `gap-6 lg:gap-8`
- Max width: `max-w-6xl`
- Full-screen: `min-h-screen flex items-center justify-center`

**Slide 04:**
- Grid: Header + toggle buttons + content area (`grid-cols-1 md:grid-cols-2`)
- Spacing: `p-8 lg:p-16`, `gap-4 md:gap-6`
- Max width: `max-w-6xl`
- Full-screen: `min-h-screen flex items-center justify-center`

### Interactive & Animation Patterns

**All Slides:**
- Entrance animations: `animate-slide-in-down` (badge), `animate-fade-in` (title), `animate-slide-in-up` (content)
- Staggered timing: badge 0ms, title 200ms, subtitle 400ms, content 600ms+
- Fill mode: `fill-backwards` to prevent flash

**Slide 02 (Problem):**
- Hover effects: `hover:scale-105`, `hover:shadow-xl`, `transition-all duration-300`
- Card expansion: Conditional rendering on hover state
- Color change: Border color intensifies on hover

**Slide 04 (Pricing):**
- Toggle state: `useState<"basic" | "partnership">("basic")`
- Button variants: `variant={active ? "default" : "outline"}`
- Content transition: `animate-fade-in` with key change for re-render

### Color & Typography Usage

**Colors (from DESIGN_AESTHETICS.md):**
- Primary: Teal `#00897B` (healthcare trust)
- Accent: Deep Navy `#1E3A5F` (fintech professionalism)
- Warning: Amber `#FF9800` (for problem slide)
- Success: Green `#4CAF50` (for ARE items)
- Destructive: Soft red `#EF5350` (for NOT items)
- Background: White `#FFFFFF`, Light gray `#F8FAFB`
- Text: Deep charcoal-blue `#1A1A2E`, Muted `#64748B`

**Typography:**
- Titles: `font-bebas text-5xl md:text-7xl lg:text-8xl` (Bebas Neue)
- Subtitles: `font-syne text-xl md:text-2xl font-semibold` (Syne)
- Body: `font-manrope text-base md:text-lg` (Manrope)
- Emphasis: `text-primary font-bold`

### Accessibility Checklist
- [x] Color contrast meets WCAG AA (4.5:1 minimum) - verified teal/navy on white
- [ ] All interactive elements have focus states (`focus-visible:ring-2 focus-visible:ring-ring/50`)
- [ ] Text readable at minimum 16px for body
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader compatible (semantic HTML, ARIA)
- [ ] Motion respects prefers-reduced-motion

### Component Implementation Notes
- shadcn/ui components: Badge (glow variant), Card (default), Button (default/outline), HoverCard
- Decorative: GrainOverlay (opacity 0.4), GradientMesh (warm variant)
- Icons: lucide-react (AlertTriangle, CheckCircle2, AlertCircle, Lightbulb, Zap)
- Animation: tw-animate-css utilities (`animate-fade-in`, `animate-slide-in-down`, etc.)
- State management: `"use client"` with `useState` for Slide 04 toggle
- All components use DEFAULT EXPORTS for lazy loading compatibility

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "A professional handwritten illustration of gentle ascending bar chart forms merging with soft organic flowing curves, abstract geometric composition suggesting financial clarity and healthcare trust, featuring warm teal tones (teal #00897B, light teal accents), with charcoal outlines and white/light gray background. Minimalist balanced composition, no text or numbers or labels. Editorial style, clean lines, minimal shading, spa-like calm aesthetic." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of scattered geometric fragments and disconnected circular forms creating sense of disorder, abstract paper scraps and floating shapes suggesting confusion, featuring warm amber tones (amber #FF9800, light orange accents), with charcoal outlines and white/light gray background. Elements appear unorganized and floating without connection, no text or numbers or labels. Editorial style, clean lines, minimal shading." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of organized geometric grid with interconnected nodes forming harmonious structure, abstract clean framework with aligned elements suggesting order and clarity, featuring warm teal tones (teal #00897B, light teal accents), with charcoal outlines and white/light gray background. Two abstract human silhouette shapes in partnership position, no text or numbers or labels. Editorial style, clean lines, minimal shading, professional calm aesthetic." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of two distinct elevated platform shapes side by side at different heights, abstract tiered structure suggesting progression and choice, left platform smaller and simpler, right platform larger with more detail, featuring warm teal tones (teal #00897B) and deep navy accents (#1E3A5F), with charcoal outlines and white/light gray background. Abstract arrows or pathways connecting platforms, no text or numbers or labels. Editorial style, clean lines, minimal shading." --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to /modules/vlada and test all 4 slides
```

## Notes

### Critical Design Decisions

1. **POC-Style Interactive Preference**: All slides prioritize dynamic, interactive demonstrations over static text-heavy designs following "Show, Don't Tell" philosophy
2. **Pattern-First Approach**: Every slide uses a proven pattern from components_inspiration/ or INTERACTIVE_PATTERNS.md
3. **Background Images Required**: Every slide has AI-generated background image at 10-15% opacity for visual enhancement
4. **Teal/Navy Dental Finance Aesthetic**: Color palette specifically chosen for healthcare trust (teal) and fintech professionalism (navy)
5. **Ukrainian Language**: All content remains in Ukrainian as per the source material
6. **Max 4 Slides Per Spec**: This spec covers exactly 4 slides as assigned

### Pattern Selection Rationale

| Slide | Pattern | Rationale |
|-------|---------|-----------|
| 01 Title | One-Screen Simplicity | Title slides need maximum clarity and impact without visual clutter |
| 02 Problem | Hover-Reveal Cards | Pain points should be explorable at viewer's pace, creating recognition moments |
| 03 Solution | ARE vs NOT Comparison | Clearly differentiates service from traditional accounting with semantic colors |
| 04 Pricing | Button Toggle Comparison | Binary pricing choice is perfect for toggle pattern, enabling active exploration |

### Ukrainian Content Notes
- All slide text content must remain in Ukrainian
- Button labels in Ukrainian: "Finansove vedennya" / "Finansove partnerstvo"
- Price displayed as "9 000 hrn/mis" and "19 000 hrn/mis"
- Use proper Ukrainian typography conventions

### Future Enhancements
- Consider adding slide 05 onwards with more detailed pricing breakdown
- Potential for animated financial graphs showing "before/after" scenarios
- Interactive calculator for ROI demonstration
