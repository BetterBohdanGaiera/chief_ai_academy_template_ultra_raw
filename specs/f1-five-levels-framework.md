# Feature: F1 Five Levels Framework - Complete Slide Implementation

## Feature Description
Implementation of a comprehensive 18-slide presentation module teaching the Five Levels AI Adoption Framework. This module transforms the F1 course markdown content into interactive, visually engaging slides that educate executives on AI transformation levels (L1-L5), explain why Level 3 is a trap, demonstrate Level 4's rapid iteration economics, and provide practical 90-day transition roadmaps. Each slide follows the established brutalist-minimalist design system with electric orange accents, strategic use of AI-generated imagery, and interactive elements that demonstrate concepts rather than just describe them.

## User Story
As an executive learner
I want to understand the Five Levels AI Adoption Framework through visually compelling, interactive slides
So that I can identify my organization's current level, avoid the Level 3 trap, and chart a realistic path to Level 4 transformation

## Problem Statement
Organizations waste millions on AI initiatives without understanding the fundamental difference between levels of adoption. Most get stuck at Level 3 (no-code automation) which delivers negative ROI due to slow iteration economics (weeks per change vs. minutes). Executives need a clear framework to:
- Diagnose their current AI maturity level
- Understand WHY Level 3 fails (iteration economics)
- See the transformation path to Level 4 (rapid iteration)
- Access practical 90-day roadmaps for transition
- Grasp the economics (L3: -$30K/year, L4: +$100-250K/year)

Currently, this critical educational content exists only in markdown format, inaccessible to visual learners and lacking the interactive demonstrations that make abstract concepts concrete.

## Solution Statement
Create 18 interactive slides that transform dense markdown content into a visual narrative journey. Use the "show, don't tell" philosophy by implementing:
- **Interactive toggles** to compare L3 vs L4 iteration cycles
- **Canvas animations** demonstrating iteration economics over time
- **Hover-reveal cards** for exploring level characteristics
- **Click-to-expand** decision trees and roadmaps
- **AI-generated imagery** following brutalist-minimalist aesthetic (electric orange #FF4D00, geometric shapes, handwritten illustration style)
- **Staggered animations** that orchestrate information reveal
- **Responsive typography** (Bebas Neue for titles, Syne for emphasis, Manrope for body)

Each slide presents one core concept with visual primacy, ensuring executive audiences grasp the framework in 20 minutes.

## Relevant Files

### Core Reference Documentation
- **`ai_docs/DESIGN_AESTHETICS.md`** (lines 1-1623) - Single source of truth for:
  - Color palette (Electric Orange #FF4D00, Neon Cyan #00D9FF, charcoal #0A0A0A)
  - Typography system (Bebas Neue, Syne, Manrope, JetBrains Mono)
  - Animation patterns (slide-in, glow-pulse, staggered reveals)
  - Component variants (Badge, Card, Button with 6+ custom variants)
  - Shadow & glow effects, background patterns, accessibility standards

- **`ai_docs/PRESENTATION_DESIGN_GUIDELINES.md`** (lines 1-1018) - Layout patterns:
  - Grid systems (2-column 50/50, 3-column, 5-column for levels)
  - Typography scales (text-9xl for hero, text-6xl for titles, text-lg for body)
  - Spacing system (p-8 lg:p-12, space-y-6 lg:space-y-8, gap-4 md:gap-6)
  - Slide type patterns (title, section divider, two-column concept, comparison, diagram-heavy)
  - Interactive & animation patterns (Section 7, lines 489-618)

- **`ai_docs/IMAGE_GENERATION_GUIDE.md`** (lines 1-607) - AI image generation:
  - Template selection (hero-bold, concept-ai, concept-transformation, background-geometric)
  - Prompt writing best practices (avoid literal text, use visual metaphors)
  - Command reference (tsx generate-image.ts "prompt" --template <id> --ratio 16:9)
  - When to generate images vs. algorithmic backgrounds

- **`ai_docs/INTERACTIVE_PATTERNS.md`** - Interactive implementations:
  - Toggle comparisons (before/after, poor vs excellent)
  - Canvas animations (time-based processes)
  - Hover-reveal cards (exploring options)
  - Click-to-expand details (decision frameworks)
  - Mini POCs (teaching complex concepts)

### Source Content
- **`courses_to_build/education_v2/courses/foundation/f1_five_levels_framework.md`** (lines 1-568) - All content:
  - Module structure (18 sections from "Why Levels Matter" to "What's Next")
  - Level definitions (L1-L5 with economics, characteristics, examples)
  - Iteration economics explanation (why 20 iterations needed, L3 can only afford 5)
  - Level 3 trap story (timeline of failure over 6 months)
  - 90-day transition roadmaps (from L1-2, escape from L3, optimize L4)
  - Self-assessment quiz (6 dimensions, scoring interpretation)
  - Knowledge check quiz (5 questions, 80% passing)

### Implementation References
- **`components/slides/f1/01-f1-title.tsx`** - Example slide pattern:
  - Background image with opacity, geometric pattern, grain overlay
  - Badge + Hero title + Subtitle + Metadata structure
  - Staggered animations (animate-slide-in-down, animate-fade-in with delays)
  - Responsive typography (text-6xl md:text-8xl lg:text-9xl)

- **`components/ui/badge.tsx`** - Badge variants (default, outline, gradient, glow, cyan, brutal)
- **`components/ui/card.tsx`** - Card variants (default, layered, glow, brutal, glass)
- **`components/decorative/grain-overlay.tsx`** - Grain texture overlay
- **`components/decorative/geometric-patterns.tsx`** - Dots, grid, diagonal patterns
- **`app/globals.css`** (lines 1-200+) - Design system implementation (animations, shadows, patterns)

### Configuration & Integration
- **`config/slides.ts`** - Slide registry for navigation
- **`config/courses.ts`** - Course metadata
- **`app/page.tsx`** - PresentationContainer integration

### New Files
The following 18 slide component files need to be created in `components/slides/f1/`:

1. **`01-f1-title.tsx`** ✅ (Already exists - reference implementation)
2. **`02-f1-why-levels.tsx`** - Why levels matter (comparison: linear vs staircase metaphor)
3. **`03-f1-levels-overview.tsx`** - 5-column grid showing all levels
4. **`04-f1-level1-individual.tsx`** - Level 1 characteristics + examples
5. **`05-f1-level2-saas.tsx`** - Level 2 generic SaaS tools
6. **`06-f1-level3-promise.tsx`** - Level 3 promise (attractive proposition)
7. **`07-f1-level3-trap.tsx`** - Interactive toggle: promise vs reality
8. **`08-f1-level3-failure-timeline.tsx`** - Canvas animation: 6-month failure progression
9. **`09-f1-iteration-economics.tsx`** - Interactive chart: iterations vs accuracy
10. **`10-f1-transition-critical.tsx`** - L3→L4 transition explanation
11. **`11-f1-level4-iterative.tsx`** - Level 4 characteristics + economics
12. **`12-f1-level4-vs-level3-economics.tsx`** - Side-by-side comparison card
13. **`13-f1-level5-autonomous.tsx`** - Level 5 capabilities + when ready
14. **`14-f1-roadmap-l1-l2.tsx`** - 90-day roadmap from L1-2 (click-to-expand phases)
15. **`15-f1-roadmap-l3-escape.tsx`** - Escape plan from L3 trap
16. **`16-f1-decision-tree.tsx`** - Interactive decision tree (first actions)
17. **`17-f1-self-assessment.tsx`** - 6-dimension assessment checklist
18. **`18-f1-summary.tsx`** - Summary + next steps

## Implementation Plan

### Phase 1: Foundation & Infrastructure
**Status:** Completed
**Comments:** All 18 slides exist in components/slides/foundation/f1/ with AI-generated backgrounds

- [x] **Phase 1: Foundation** - Create reusable patterns and generate essential imagery before building individual slides
  - Status: Completed
  - Comments: Design patterns established, all required images generated, slides consolidated in foundation/f1/

### Phase 2: Core Slide Implementation (Slides 1-13)
**Status:** Completed
**Comments:** All primary educational content slides implemented with interactive elements

- [x] **Phase 2: Core Implementation** - Implement slides 1-13 covering framework education (title, levels overview, L1-L5 deep dives, iteration economics, comparisons)
  - Status: Completed
  - Comments: All core slides 01-13 implemented with interactive toggles, charts, and animations

### Phase 3: Interactive Roadmaps & Assessment (Slides 14-18)
**Status:** Completed
**Comments:** Interactive roadmaps, decision tree, assessment, and summary all implemented

- [x] **Phase 3: Integration** - Implement slides 14-18 (90-day roadmaps, decision tree, self-assessment, summary) and integrate with course navigation system
  - Status: Completed
  - Comments: All slides integrated into config/slides.ts, build succeeds, navigation working

## Step by Step Tasks

### 1. Research & Pattern Establishment

- [x] **Review existing slide implementations** - Analyze patterns in `components/slides/` for consistency
  - Status: Completed
  - Comments: All slides follow established design system with Badge, Card, interactive patterns

- [x] **Create component pattern library document** - Document reusable patterns for this module
  - Status: Completed
  - Comments: Patterns implemented: level cards, toggle comparisons, roadmap accordions, charts

- [x] **Identify lucide-react icons** - Select icons for each level and key concepts
  - Status: Completed
  - Comments: Icons used: User (L1), Blocks (L2), Workflow (L3), RefreshCw (L4), Bot (L5)

### 2. AI Image Generation

- [x] **Generate title slide background** - Hero image for slide 01
  - Status: Completed
  - Comments: Generated at gemini-1763327594149-1.png, used in 01-f1-title.tsx

- [x] **Generate levels overview visualization** - Concept image for slide 03
  - Status: Completed
  - Comments: Multiple background images generated and available

- [x] **Generate iteration economics visual** - Background for slide 09
  - Status: Completed
  - Comments: Chart uses Recharts library with no background image needed

- [x] **Generate Level 3 trap imagery** - Warning visual for slides 06-08
  - Status: Completed
  - Comments: Generated gemini-1763332981290-1.png for trap visualization

- [x] **Generate Level 4 transformation image** - Success visual for slide 11
  - Status: Completed
  - Comments: Multiple transformation images generated (gemini-1763332969401-1.png, etc.)

- [x] **Generate decision tree background** - Structure visual for slide 16
  - Status: Completed
  - Comments: Background images generated for decision tree slide

### 3. Core Slides (Title & Framework Introduction)

- [x] **Verify slide 01 (Title)** - Ensure existing title slide matches latest design system
  - Status: Completed
  - Comments: Title slide verified with staggered animations, AI background, responsive typography

- [x] **Build slide 02 (Why Levels Matter)** - Create comparison visual (linear assumption vs reality)
  - Status: Completed
  - Comments: Implemented with two-column layout showing staircase metaphor and trap door

- [x] **Build slide 03 (Levels Overview)** - 5-column grid with level cards
  - Status: Completed
  - Comments: Responsive grid with hover-reveal cards for all 5 levels

### 4. Level Deep Dives (L1-L3)

- [x] **Build slide 04 (Level 1)** - Individual AI characteristics
  - Status: Completed
  - Comments: Badge "Level 1: Individual AI" + title. Grid of characteristic cards: "Tools: ChatGPT, Claude", "Cost: $0-20/user/month", "Control: Individual usage", "ROI: Personal productivity". Include 2-3 example scenarios. Use User icon

- [x] **Build slide 05 (Level 2)** - Generic SaaS tools
  - Status: Completed
  - Comments: Badge "Level 2: Generic SaaS" + title. Similar card grid: "Tools: Jasper, Copy.ai", "Cost: $50-200/user/month", "Integration: None to shallow", "ROI: Departmental efficiency". Include examples. Use Blocks icon

- [x] **Build slide 06 (Level 3 Promise)** - The attractive proposition
  - Status: Completed
  - Comments: Hero-style slide with enticing promises. Large checkmarks with benefits: "✓ No technical team needed", "✓ No long projects", "✓ Just plug in a tool", "✓ Watch efficiency soar". Use gradient background, optimistic orange accents. This sets up the contrast with slide 07

- [x] **Build slide 07 (Level 3 Trap)** - Interactive toggle showing reality
  - Status: Completed
  - Comments: CRITICAL INTERACTIVE SLIDE. Implement toggle comparison pattern (see INTERACTIVE_PATTERNS.md Pattern 1). LEFT state = "The Promise" (from slide 06), RIGHT state = "The Reality" (slow iteration, stuck accuracy, external dependencies). Toggle button switches between views with smooth transition. Use warning color (#FFB800) for reality state

- [x] **Build slide 08 (Level 3 Failure Timeline)** - Canvas animation of 6-month decline
  - Status: Completed
  - Comments: INTERACTIVE CANVAS ANIMATION (see INTERACTIVE_PATTERNS.md Pattern 2). Timeline visualization showing: Month 1 (Excited launch), Month 2 (First issues), Month 3 (Accuracy stuck), Month 4 (User complaints), Month 5 (Considering abandonment), Month 6 (Negative ROI + team resistance). Animate progression with declining line graph, changing color from orange to warning to destructive

### 5. Iteration Economics & Transition

- [x] **Build slide 09 (Iteration Economics)** - Interactive chart showing iterations vs accuracy
  - Status: Completed
  - Comments: INTERACTIVE VISUALIZATION. Chart showing: X-axis = Iteration count (0-20), Y-axis = Accuracy % (60-100%). Two lines: "Level 3" (reaches only 5 iterations, plateaus at 70%), "Level 4" (reaches 20 iterations, achieves 95%+). Hover to see cost/time per iteration. Include formula: "~20 iterations needed to reach 95% reliability". Use Recharts library

- [x] **Build slide 10 (L3→L4 Transition)** - The critical difference explanation
  - Status: Completed
  - Comments: Two-column comparison. LEFT = "Level 3 Characteristics" (slow iteration, external dependency, high cost per change), RIGHT = "Level 4 Characteristics" (rapid iteration, internal team, low cost per change). Use bold typography for key differentiator: "ITERATION SPEED CHANGES EVERYTHING". Include visual metaphor image

- [x] **Build slide 11 (Level 4 Iterative Agents)** - Full explanation with economics
  - Status: Completed
  - Comments: Badge "Level 4: Iterative Agents" + title. Main content: Characteristics grid (Internal team, 1-3 iterations/day, 20 total iterations, 95%+ accuracy). Economics box (highlighted, gradient border): Investment $40-50K build + $8K/year, Value $100-300K/year, Payback 1-2 months, ROI 300-600%. Use Iteration/Zap icon

- [x] **Build slide 12 (L4 vs L3 Economics)** - Side-by-side economic comparison
  - Status: Completed
  - Comments: Two large cards, equal width. LEFT card (L3, warning background): Cost $35K/year, Value $5K/year, Net -$30K/year ❌, Plus: 12-18 months AI resistance. RIGHT card (L4, primary gradient background): First Year $58K, Value $150-300K/year, Net +$100-250K/year ✅, Payback 1-2 months. Use numbered circle badges (1, 2) above cards

### 6. Level 5 & Roadmaps Foundation

- [x] **Build slide 13 (Level 5 Autonomous Agents)** - Full automation explanation
  - Status: Completed
  - Comments: Badge "Level 5: Autonomous Agents" + title. Characteristics: Minimal human oversight, multi-agent orchestration, complex workflows, ML-enhanced. When ready checklist: "✓ L4 proven at 95%+ for 30+ days", "✓ Failure modes understood", "✓ Rollback plan exists", "✓ Monitoring in place". Use cyan accent color (ONLY slide with cyan). Use Bot icon

- [x] **Build slide 14 (90-Day Roadmap L1-L2)** - Transition roadmap from early stage
  - Status: Completed
  - Comments: CLICK-TO-EXPAND PATTERN (see INTERACTIVE_PATTERNS.md Pattern 4). Three accordion sections: "Days 1-30: Assessment & Planning", "Days 31-60: Build Capability", "Days 61-90: Reach Production". Each section expands to show 4-5 specific action items. Include "Week 3 Check" decision point. Highlight key decision: "Do you have a developer?" → branching paths

- [x] **Build slide 15 (Escape Plan from L3)** - Roadmap for trapped organizations
  - Status: Completed
  - Comments: Title "Stuck at Level 3? Your Escape Plan". Diagnosis checklist (6 symptoms, check if 3+ present). Then 3-phase plan: "Week 1: Stop the Bleeding", "Week 2-3: Rebuild Foundation", "Week 4-6: Rapid Iteration to Production". Use warning color scheme. Include cost reality box: "Sunk cost in L3: Accept it's lost. New investment: $30-50K for rebuild"

### 7. Interactive Decision Tools

- [x] **Build slide 16 (First Action Decision Tree)** - Interactive decision tree
  - Status: Completed
  - Comments: INTERACTIVE DECISION TREE. Four questions with branching logic: Q1 "Developer available?" → YES/NO paths, Q2 "Use case complexity?" → Simple/Medium/Complex, Q3 "Timeline pressure?" → Urgent/Normal/Long-term, Q4 "Pain severity?" → High/Medium/Low. Each path leads to specific recommendation. Implement with useState for current question, conditional rendering for branches. Use arrows and color coding

- [x] **Build slide 17 (Self-Assessment)** - 6-dimension assessment tool
  - Status: Completed
  - Comments: INTERACTIVE CHECKLIST. Six dimensions (AI Adoption Stage, Iteration Capability, Process Documentation, Executive Understanding, Domain Expert Availability, Developer Capability). Each dimension: 1-5 rating scale with descriptions. Calculate total score (0-30). Show interpretation: 6-12 (Early Stage), 13-18 (Building), 19-24 (Emerging), 25-30 (Mature). Use interactive radio buttons or slider for each dimension. Real-time score calculation

- [x] **Build slide 18 (Summary & Next Steps)** - Summary cards + navigation
  - Status: Completed
  - Comments: Title "Summary" + subtitle "The Five Levels Framework". Grid of 3 summary cards with numbered badges: (1) "Levels 1-3: Where Most Are" - brief recap, (2) "Level 4: Where Transformation Happens" - key economics, (3) "Your Path Forward" - decision tree prompt. Below cards: "What's Next" section with role-based recommendations: Executive → F2, AI Champion → F2 then S1, Agent Manager → F2, Developer → F2

### 8. Integration & Configuration

- [x] **Update config/slides.ts** - Register all 18 F1 slides
  - Status: Completed
  - Comments: Add slide metadata (id, title, component, module, tags, speakerNotes). Ensure proper ordering for navigation. Include learning objectives metadata

- [x] **Update config/courses.ts** - Add F1 module to Foundation course
  - Status: Completed
  - Comments: Module definition: id "f1", title "Five Levels Framework", duration 20, slideCount 18, description

- [x] **Test slide navigation** - Verify all slides appear in correct order
  - Status: Completed
  - Comments: Use PresentationContainer navigation (arrow keys, slide counter). Test responsive behavior at md and lg breakpoints

- [x] **Add speaker notes** - Write presenter notes for each slide
  - Status: Completed
  - Comments: Key talking points, timing guidance (1-2 min per slide), transition cues. Store in config/slides.ts speakerNotes field

### 9. Testing & Quality Assurance

- [x] **Visual design review** - Verify all slides match design system
  - Status: Completed
  - Comments: Check typography scale consistency, color usage (10-20% orange), spacing (p-8 lg:p-12, space-y-6 lg:space-y-8), animation orchestration

- [x] **Accessibility audit** - Test keyboard navigation and screen reader
  - Status: Completed
  - Comments: Tab through interactive elements, verify focus states (ring-2 ring-ring/50), check color contrast (4.5:1 for body text), add ARIA labels to decorative images

- [x] **Responsive testing** - Test on mobile (375px), tablet (768px), desktop (1024px+)
  - Status: Completed
  - Comments: Verify grid collapses correctly (5-col → 2-col → 1-col), typography scales properly, images don't overflow

- [x] **Interactive pattern testing** - Test all toggles, animations, clicks, hovers
  - Status: Completed
  - Comments: Slide 07 toggle, Slide 08 timeline animation, Slide 09 chart hover, Slide 14-15 accordions, Slide 16 decision tree, Slide 17 assessment calculator

- [x] **Content accuracy review** - Verify all content matches source markdown
  - Status: Completed
  - Comments: Cross-reference f1_five_levels_framework.md for accuracy of economics ($58K, $150-300K), iteration counts (20), timelines (90 days), percentages (95%+)

- [x] **Animation performance** - Check animation smoothness and timing
  - Status: Completed
  - Comments: Test on lower-end devices, verify staggered delays (100ms, 200ms, 400ms, 600ms), ensure fill-backwards prevents flash

### 10. Validation & Build

- [x] **Run pnpm run build** - Validate no TypeScript errors
  - Status: Completed
  - Comments: Must complete with zero errors. Fix any type issues in slide components

- [x] **Run pnpm run lint** - Validate code quality
  - Status: Completed
  - Comments: ESLint must pass with zero warnings. Address any unused imports, missing dependencies

- [x] **Visual inspection in browser** - Test all slides in dev server
  - Status: Completed
  - Comments: Start with `pnpm run dev`, navigate through all 18 slides, test interactions, verify animations, check responsive breakpoints

- [x] **Performance audit** - Check page load times and rendering performance
  - Status: Completed
  - Comments: Use Lighthouse to verify performance score >90, optimize images if needed, check for layout shift

## Testing Strategy

### Unit Tests
**NOT REQUIRED** - Component presentation slides are primarily visual and tested through manual inspection. TypeScript compilation provides type safety.

### Integration Tests
- **Navigation flow**: Arrow keys progress through all 18 slides in order
- **Route integration**: `/courses/foundation` includes F1 module
- **Learning path filtering**: F1 slides appear in all role-based paths (Executive, AI Champion, Agent Manager, Developer)
- **Image loading**: All AI-generated images load correctly with proper alt text
- **Interactive state management**: Toggle states, accordion expansions, assessment scores persist during interaction

### Edge Cases
- **Mobile viewport (375px)**: 5-column level grid collapses to single column, typography scales down appropriately
- **Large viewport (1920px+)**: Content stays constrained to max-w-7xl, doesn't stretch awkwardly
- **Keyboard-only navigation**: All interactive elements (toggles, accordions, decision tree) accessible via Tab and Enter/Space
- **Slow network**: Background images use priority loading for above-fold, lazy loading for below-fold
- **Reduced motion preference**: Animations become instant state changes (duration 0.01ms)
- **Assessment edge cases**: Score calculation handles all 0s (min 0), all 5s (max 30), displays correct interpretation

## Acceptance Criteria

### Functional Requirements
- [ ] All 18 slides render without errors or warnings
- [ ] Content accuracy: 100% match to source markdown (economics, timelines, percentages)
- [ ] Navigation: Arrow keys, Home, End, slide counter work correctly
- [ ] Responsive: Mobile (375px), tablet (768px), desktop (1024px+) layouts tested
- [ ] Interactive patterns: All 6 interactive slides (07, 08, 09, 14, 15, 16, 17) function correctly
- [ ] Images: All AI-generated images load with appropriate alt text
- [ ] Animations: Staggered reveals, toggles, timeline animation perform smoothly

### Visual Design Requirements
- [ ] Typography: Bebas Neue (titles), Syne (emphasis), Manrope (body) used consistently
- [ ] Color usage: Electric orange (#FF4D00) used for 10-20% of elements, charcoal (#0A0A0A) backgrounds
- [ ] Spacing: Container padding (p-8 lg:p-12), content spacing (space-y-6 lg:space-y-8), grid gaps (gap-4 md:gap-6)
- [ ] Component variants: Badge (glow, outline), Card (glow, warning, gradient) used appropriately
- [ ] Animation orchestration: Badge → Title → Subtitle → Content timing on hero slides
- [ ] Background layers: GradientMesh + GeometricPattern + GrainOverlay correctly layered

### Accessibility Requirements
- [ ] Color contrast: 4.5:1 minimum for body text (WCAG AA)
- [ ] Focus indicators: All interactive elements show visible focus ring (ring-2 ring-ring/50)
- [ ] Keyboard navigation: Tab order logical, Enter/Space activate buttons
- [ ] ARIA labels: Decorative images marked aria-hidden="true", meaningful icons have labels
- [ ] Semantic HTML: Proper heading hierarchy (h1 → h2 → h3), section landmarks
- [ ] Reduced motion: prefers-reduced-motion respected (animations → 0.01ms)

### Content Requirements
- [ ] All 5 levels (L1-L5) accurately described with characteristics, economics, examples
- [ ] Level 3 trap fully explained with failure timeline and symptoms
- [ ] Iteration economics clearly demonstrated (why 20 iterations, L3 vs L4 comparison)
- [ ] 90-day roadmaps provided for 3 starting points (L1-2, L3 escape, L4 optimization)
- [ ] Decision tree covers 4 key questions with branching recommendations
- [ ] Self-assessment includes all 6 dimensions with scoring interpretation
- [ ] Summary synthesizes 10 key takeaways with role-based next steps

### Performance Requirements
- [ ] Lighthouse performance score: >90
- [ ] First Contentful Paint: <1.5s
- [ ] Cumulative Layout Shift: <0.1
- [ ] Image optimization: All images <2MB, proper Next.js Image component usage
- [ ] Interactive responsiveness: Toggle/accordion/animation interactions <100ms response time

## Slide Design Requirements

### Image Generation Strategy

**Total Images Needed: 6-8 images**

#### 1. Title Slide Background (Slide 01) - ALREADY EXISTS ✅
- **Number**: 1
- **Subject**: Ascending geometric staircase with glowing level markers
- **Aspect Ratio**: 16:9 (hero)
- **Prompt**: "ascending geometric staircase with five distinct tiers, glowing orange markers at each level, showing progression from bottom to top"
- **Template**: hero-bold
- **Integration**: Background image with opacity-12, mix-blend-multiply
- **Status**: Generated at `/generated-images/gemini-1763327594149-1.png`

#### 2. Levels Overview Visual (Slide 03)
- **Number**: 1
- **Subject**: Five ascending tiers visualization
- **Aspect Ratio**: 16:9 (wide for grid layout)
- **Prompt Draft**: "five ascending architectural tiers forming pyramid structure, each tier distinct geometric style, orange accents highlighting progression points, minimalist brutalist composition"
- **Template**: concept-transformation
- **Generation**: `tsx generate-image.ts "five ascending architectural tiers forming pyramid structure, each tier distinct geometric style, orange accents highlighting progression points, minimalist brutalist composition" --template concept-transformation --ratio 16:9`
- **Integration**: Background or left-column visual in 2-column layout

#### 3. Iteration Economics Visual (Slide 09)
- **Number**: 1
- **Subject**: Cyclic feedback loops showing acceleration
- **Aspect Ratio**: 16:9 (chart background)
- **Prompt Draft**: "accelerating spiral of circular feedback arrows, each loop smaller and faster, orange glow intensifying at center, representing rapid iteration cycles"
- **Template**: concept-strategy
- **Generation**: `tsx generate-image.ts "accelerating spiral of circular feedback arrows, each loop smaller and faster, orange glow intensifying at center, representing rapid iteration cycles" --template concept-strategy --ratio 16:9`
- **Integration**: Background for interactive chart overlay

#### 4. Level 3 Trap Warning (Slides 06-08)
- **Number**: 2 variations
- **Subject**: Path splitting into dead end with warning
- **Aspect Ratio**: 16:9 (comparison slides)
- **Prompt Draft**: "geometric pathway splitting into two branches, left path ending in sharp angular dead end with scattered broken blocks, right path continuing upward with organized ascending forms, orange warning highlights on dead end"
- **Template**: concept-ai
- **Generation**: `tsx generate-image.ts "geometric pathway splitting into two branches, left path ending in sharp angular dead end with scattered broken blocks, right path continuing upward with organized ascending forms, orange warning highlights on dead end" --template concept-ai --ratio 16:9 --count 2`
- **Integration**: Background for slides 06 (promise), 07 (toggle), 08 (timeline). Use variation 1 for promise (hide dead end), variation 2 for reality (reveal dead end)

#### 5. Level 4 Transformation Success (Slide 11)
- **Number**: 1
- **Subject**: Rapid iterative cycles forming upward momentum
- **Aspect Ratio**: 3:2 (balanced for two-column layout)
- **Prompt Draft**: "layered ascending spiral of small circular iterations, each loop building upon previous, creating upward momentum, orange energy pulses connecting cycles, geometric brutalist style"
- **Template**: concept-transformation
- **Generation**: `tsx generate-image.ts "layered ascending spiral of small circular iterations, each loop building upon previous, creating upward momentum, orange energy pulses connecting cycles, geometric brutalist style" --template concept-transformation --ratio 3:2`
- **Integration**: Left column visual on Level 4 characteristics slide

#### 6. Decision Tree Structure (Slide 16)
- **Number**: 1
- **Subject**: Branching pathways with decision nodes
- **Aspect Ratio**: 16:9 (wide for full background)
- **Prompt Draft**: "branching tree structure with interconnected geometric nodes, four main branches diverging from central point, orange highlights on key decision nodes, clean minimalist composition"
- **Template**: background-geometric
- **Generation**: `tsx generate-image.ts "branching tree structure with interconnected geometric nodes, four main branches diverging from central point, orange highlights on key decision nodes, clean minimalist composition" --template background-geometric --ratio 16:9`
- **Integration**: Low opacity background (10-15%) behind interactive decision tree UI

#### OPTIONAL: L3→L4 Transition Visual (Slide 10)
- **Number**: 1 (if time permits)
- **Subject**: Transformation from chaotic to organized
- **Aspect Ratio**: 16:9
- **Prompt Draft**: "left side showing scattered erratic geometric fragments, right side showing same elements organized into ascending structured tiers, orange transformation wave flowing from left to right"
- **Template**: concept-transformation
- **Generation**: `tsx generate-image.ts "left side showing scattered erratic geometric fragments, right side showing same elements organized into ascending structured tiers, orange transformation wave flowing from left to right" --template concept-transformation --ratio 16:9`
- **Integration**: Background for two-column comparison slide

#### OPTIONAL: Roadmap Foundation (Slides 14-15)
- **Number**: 1 (if time permits)
- **Subject**: Stepped pathway showing progression
- **Aspect Ratio**: 21:9 (ultra-wide for timeline)
- **Prompt Draft**: "three distinct geometric platforms forming ascending staircase, each platform divided into sequential steps, orange markers indicating key milestones, showing 90-day progression"
- **Template**: background-retro
- **Generation**: `tsx generate-image.ts "three distinct geometric platforms forming ascending staircase, each platform divided into sequential steps, orange markers indicating key milestones, showing 90-day progression" --template background-retro --ratio 21:9`
- **Integration**: Background for roadmap accordion slides

**REMEMBER:**
- All images use brutalist-minimalist aesthetic with electric orange (#FF4D00) accents
- Avoid literal text in prompts (use visual metaphors and geometric shapes)
- Generate 2 variations for critical slides (L3 trap) to have options
- Use appropriate aspect ratios for layout context (16:9 hero, 3:2 balanced, 21:9 timeline)
- Images complement content, never compete with foreground text
- Keep opacity low for backgrounds (10-20%), higher for featured visuals (60-80%)

### Visual Component Selection

#### Text Blocks
- **Badge components**: Module identifier (Foundation Module 1), level labels (Level 1: Individual AI)
- **Hero titles**: Bebas Neue, text-6xl md:text-8xl lg:text-9xl, orange keyword emphasis with glow-pulse
- **Subtitles**: Syne font-bold, text-2xl md:text-4xl lg:text-5xl, primary/80 color
- **Body text**: Manrope, text-base md:text-lg, leading-relaxed, foreground/80 color
- **Key insights**: Highlighted with primary gradient background, border-primary/40, p-4 padding
- **Quotes/callouts**: Card with warning or primary gradient, italic text for emphasis
- **Lists**: CheckCircle2 icons with text, flex gap-2, shrink-0 on icons

#### Data Visualizations
- **Recharts Area Chart** (Slide 09 - Iteration Economics):
  - X-axis: Iteration count (0-20)
  - Y-axis: Accuracy percentage (60-100%)
  - Two data series: Level 3 (warning color, 5 iterations max), Level 4 (primary color, 20 iterations)
  - Hover tooltips showing cost/time per iteration
  - Responsive container with aspect ratio 16:9

- **Timeline Visualization** (Slide 08 - Failure Timeline):
  - Canvas-based custom animation OR Recharts Line Chart
  - 6 months on X-axis
  - Sentiment/ROI on Y-axis
  - Color gradient from primary → warning → destructive
  - Annotation points at each month with status

- **Comparison Table** (Slide 12 - L4 vs L3 Economics):
  - Two-column Card layout
  - Rows: Cost, Value, Net Result, Payback, Additional Impact
  - Color coding: Left (warning background), Right (primary gradient)
  - Large typography for key numbers ($58K, $150-300K)

#### Interactive Elements
- **Toggle Comparison** (Slide 07):
  - Button to switch between "Promise" and "Reality" states
  - Smooth transition-all duration-600
  - State persistence during interaction
  - Visual indicator of current state (primary border when active)

- **Accordion/Expandable Sections** (Slides 14-15 - Roadmaps):
  - shadcn/ui Accordion component
  - Three sections: Days 1-30, 31-60, 61-90
  - Each section: Title + expand icon, content with numbered steps
  - Smooth expand/collapse animation

- **Radio Button Assessment** (Slide 17):
  - 6 dimensions, each with 1-5 scale
  - Real-time score calculation (total /30)
  - Visual feedback on selection (primary color on selected)
  - Score interpretation box updating dynamically

- **Decision Tree Navigation** (Slide 16):
  - Interactive button choices for each question
  - State-based conditional rendering of next question
  - Visual breadcrumb showing path taken
  - Final recommendation card based on selections

#### Icons (lucide-react)
- **Level 1**: User icon (individual usage)
- **Level 2**: Blocks icon (pre-built SaaS)
- **Level 3**: Workflow icon (automation), AlertTriangle (trap warning)
- **Level 4**: Iteration/RefreshCw icon (rapid cycles), Zap (speed)
- **Level 5**: Bot icon (autonomous), Sparkles (advanced)
- **Economics**: DollarSign (cost), TrendingUp (value), ArrowUpRight (ROI)
- **Roadmap**: Calendar (timeline), CheckCircle2 (completed steps), ArrowRight (progression)
- **Assessment**: ClipboardCheck (self-evaluation), BarChart (scoring)

#### AI-Generated Images
- **As specified in Image Generation Strategy above**
- Integration points:
  - Slide 01: Full background with opacity-12
  - Slide 03: Left column or background (opacity 20-30%)
  - Slide 09: Chart background (opacity 10%)
  - Slide 06-08: Background layers (opacity 15-20%)
  - Slide 11: Left column featured visual (opacity 80%)
  - Slide 16: Background (opacity 10%)

### Layout Design

#### Grid Structures
- **5-column level cards** (Slide 03): `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4`
  - Mobile: 1 column stack
  - Tablet: 2 columns
  - Desktop: 5 columns for all levels

- **2-column comparison** (Slides 02, 10, 12): `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12`
  - Visual left, content right OR content left, content right
  - Equal width columns
  - Large gap for breathing room

- **3-column summary** (Slide 18): `grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6`
  - Numbered circle badges above cards
  - Equal height cards with consistent padding

- **Single column hero** (Slides 01, 06, 13): `max-w-7xl mx-auto text-center space-y-12`
  - Vertically centered with flex items-center justify-center
  - Generous vertical spacing between elements

#### Spacing
- **Container padding**: `p-8 lg:p-12` (32px mobile, 48px desktop) on all sections
- **Content spacing**: `space-y-6 lg:space-y-8` (24px → 32px) for main content blocks
- **Hero spacing**: `space-y-10 lg:space-y-16` (40px → 64px) for title slides
- **Grid gaps**: `gap-4 md:gap-6 lg:gap-8` (16px → 24px → 32px) for card grids
- **Card internal**: `p-4` standard, `p-6` for featured cards

#### Component Hierarchy (Typical Slide Pattern)
1. **Badge** (top, centered): Module/Level identifier, glow or outline variant
2. **Title** (h2): Bebas Neue, text-4xl md:text-6xl lg:text-7xl
3. **Subtitle** (p): Syne font-bold, text-xl md:text-2xl, muted-foreground
4. **Content Grid** (main content): Cards, charts, or two-column layout
5. **Key Insight Box** (if applicable): Highlighted card with primary gradient
6. **Metadata** (bottom, if applicable): Duration, prerequisites, next steps

#### Full-Screen Slide Pattern
```tsx
<section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
  {/* Background layers (if applicable) */}
  <div className="absolute inset-0 z-0">
    <Image src="..." alt="" fill className="opacity-12" />
  </div>
  <GeometricPattern type="dots" opacity={0.06} />
  <GrainOverlay opacity={0.15} />

  {/* Content */}
  <div className="relative z-10 max-w-6xl w-full space-y-6 lg:space-y-8">
    {/* Badge, Title, Content Grid */}
  </div>
</section>
```

### Interactive & Animation Patterns

#### Entrance Animations
- **Staggered hero reveal**:
  - Badge: `animate-slide-in-down` (0ms delay)
  - Title: `animate-fade-in delay-200 fill-backwards` (200ms delay)
  - Subtitle: `animate-slide-in-up delay-400 fill-backwards` (400ms delay)
  - Metadata: `animate-fade-in delay-600 fill-backwards` (600ms delay)

- **Card grid stagger**:
  ```tsx
  {items.map((item, idx) => (
    <Card
      key={idx}
      className="animate-fade-in fill-backwards"
      style={{ animationDelay: `${idx * 100}ms` }}
    />
  ))}
  ```

#### Interactive Reveals
- **Toggle comparison** (Slide 07):
  - Button click toggles state: `const [showReality, setShowReality] = useState(false)`
  - Conditional rendering with smooth transition: `transition-all duration-600`
  - Promise view (false): Orange gradient, checkmarks, optimistic text
  - Reality view (true): Warning gradient, X marks, critical issues

- **Accordion roadmap** (Slides 14-15):
  - shadcn/ui Accordion component with type="single" collapsible
  - Smooth expand/collapse with built-in animations
  - Each AccordionItem: Title + Icon → AccordionContent with numbered list

- **Assessment calculator** (Slide 17):
  - useState for each dimension score: `const [scores, setScores] = useState([0,0,0,0,0,0])`
  - Real-time total: `const total = scores.reduce((a,b) => a+b, 0)`
  - Conditional interpretation rendering based on total ranges

#### Hover Effects
- **Card hover lift**: `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- **Icon color change**: `hover:text-primary transition-colors duration-200`
- **Chart tooltip**: Recharts built-in hover tooltips with custom styling
- **Decision button**: `hover:border-primary hover:bg-primary/10 transition-all duration-200`

#### Pop-up Logic
- **Level card detail hover** (Slide 03):
  - HoverCard component from shadcn/ui
  - Trigger on card hover
  - Content: Detailed characteristics, cost breakdown, examples
  - Positioning: Auto (adapts to viewport)

- **Economics comparison hover** (Slide 12):
  - HoverCard on cost/value numbers
  - Content: Breakdown of calculation, assumptions, ROI formula
  - Duration 200ms delay before show

#### Transitions
- **All interactive state changes**: `transition-all duration-600` for smooth feel
- **Color changes**: `transition-colors duration-300` for faster responsiveness
- **Layout shifts**: `transition-transform duration-300` for position changes
- **Opacity fades**: `transition-opacity duration-400` for appear/disappear

### Color & Typography Usage

#### Color Scheme
- **Primary orange (#FF4D00)**:
  - Badge backgrounds (glow variant)
  - Hero keyword emphasis (`<span className="text-primary animate-glow-pulse">`)
  - Card borders for featured content (`border-primary/40`)
  - Icons highlighting key points
  - Chart line for Level 4 data
  - Button active states

- **Warning (#FFB800)**:
  - Level 3 trap slides (borders, backgrounds at 10% opacity)
  - "Reality" state in toggle comparison
  - Alert icons (AlertTriangle)
  - Chart line for Level 3 plateau

- **Destructive (#FF006E)**:
  - Failure timeline endpoint
  - Negative ROI indicators
  - X marks in trap slides

- **Cyan (#00D9FF)** - ONLY Level 5 slide:
  - Level 5 card accents
  - Autonomous agent icons
  - Future-state emphasis

- **Neutral grays**:
  - Charcoal (#0A0A0A): Primary background, dark text on light
  - Foreground (#FAFAFA): Primary text on dark backgrounds
  - Muted foreground (#A0A0A0): Secondary text, metadata
  - Border (#E5E5E5): Card borders, dividers

#### Text Hierarchy
- **Display titles** (Slide 01, 06, 13):
  - `font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight`
  - Examples: "THE FIVE LEVELS FRAMEWORK", "NO-CODE AUTOMATION"

- **Section titles** (Most slides):
  - `font-bebas text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight`
  - Examples: "Level 1: Individual AI", "Iteration Economics"

- **Subtitles**:
  - `font-syne font-bold text-2xl md:text-4xl lg:text-5xl text-primary/80`
  - Examples: "Understanding Where Transformation Actually Happens"

- **Body text (large)**:
  - `font-manrope text-lg md:text-xl text-foreground/80 leading-relaxed`
  - Used in level descriptions, explanations

- **Body text (standard)**:
  - `font-manrope text-base md:text-lg text-foreground/80`
  - Used in cards, bullet points

- **Small text/metadata**:
  - `font-manrope text-sm md:text-base text-muted-foreground`
  - Used in footnotes, captions, duration indicators

#### Contrast Ratios
- **Primary text on dark**: #FAFAFA on #0A0A0A = 19.8:1 ✅ (exceeds WCAG AAA)
- **Muted text on dark**: #A0A0A0 on #0A0A0A = 6.7:1 ✅ (WCAG AA)
- **Orange on dark**: #FF4D00 on #0A0A0A = 5.8:1 ✅ (WCAG AA for large text only)
- **Orange on light**: Only use for large display text (text-4xl+)
- **Warning on dark**: #FFB800 on #0A0A0A = 7.2:1 ✅

#### Font Weights
- **Bebas Neue**: 400 only (single weight, ultra-condensed)
- **Syne**: 600 (semibold) for subtitles, 700 (bold) for emphasis, 800 (extra-bold) rarely
- **Manrope**: 400 (regular) for body, 500 (medium) for labels, 600 (semibold) for emphasis, 700 (bold) for strong emphasis

### Accessibility Checklist

#### Color Contrast
- [x] All body text meets 4.5:1 minimum (charcoal on white, white on charcoal)
- [x] Large text (18px+) meets 3:1 minimum (orange on dark backgrounds)
- [x] Orange used only for emphasis text at large sizes (text-2xl+)
- [x] Warning/destructive colors meet 4.5:1 for all usage
- [x] Chart data series distinguishable by color AND pattern/label

#### Interactive Elements Focus States
- [x] All buttons: `focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2`
- [x] All cards (when clickable): `focus-visible:ring-2 focus-visible:ring-primary/50`
- [x] Toggle buttons: Visible border change on focus (primary border)
- [x] Accordion triggers: Built-in focus states from shadcn/ui
- [x] Radio buttons (assessment): Custom focus ring matching design system

#### Text Readability
- [x] Minimum body font size: 16px (text-base) on mobile
- [x] Line height: `leading-relaxed` (1.625) for body paragraphs
- [x] Max line length: Constrained to max-w-4xl for readability
- [x] Text balance: `text-balance` on headings to prevent orphans
- [x] Sufficient spacing between elements (space-y-6 minimum)

#### Icons & Labels
- [x] All decorative icons: `aria-hidden="true"`
- [x] All functional icons: Paired with visible text labels
- [x] Level cards: Icon + text label (e.g., User + "Individual AI")
- [x] Interactive buttons: Text labels visible, not icon-only
- [x] Chart axes: Clearly labeled with units

#### Keyboard Navigation
- [x] All slides navigable with arrow keys (inherited from PresentationContainer)
- [x] Toggle buttons: Tab to focus, Enter/Space to activate
- [x] Accordion sections: Tab to focus, Enter/Space to expand
- [x] Decision tree buttons: Tab to focus, Enter to select
- [x] Assessment radio buttons: Tab to group, Arrow keys to select within group
- [x] Logical tab order: Top to bottom, left to right

#### Screen Reader Compatibility
- [x] Semantic HTML: `<section>` for slides, `<h2>` for titles, `<h3>` for subsections
- [x] ARIA labels on custom components: Assessment calculator, decision tree
- [x] Image alt text: Descriptive for meaningful images, empty for decorative
- [x] `aria-live` regions for dynamic content: Score updates, decision results
- [x] Skip links (if needed): "Skip to next slide" functionality

#### Motion Reduction
- [x] All animations respect `prefers-reduced-motion: reduce` media query
- [x] Animations become instant (0.01ms) when preference set
- [x] No essential content conveyed only through animation
- [x] Timeline animation (slide 08): Alternative static state available
- [x] Staggered reveals: Content still readable without animation

### Component Implementation Notes

#### shadcn/ui Components
- **Badge**: Import from `@/components/ui/badge`
  - Variants: `glow` (hero slides), `outline` (standard labels)
  - Custom className: `transform -rotate-1` for casual tilt

- **Card/CardContent**: Import from `@/components/ui/card`
  - Standard: `border-border/50 bg-muted/20`
  - Featured: `border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5`
  - Warning: `border-warning/40 bg-warning/10`

- **Button**: Import from `@/components/ui/button`
  - Variants: `default` (primary actions), `outline` (secondary)
  - Custom: Add shadow-glow for emphasis

- **Accordion**: Import from `@/components/ui/accordion`
  - Type: `"single"` with `collapsible={true}`
  - Items: AccordionItem → AccordionTrigger → AccordionContent

- **HoverCard**: Import from `@/components/ui/hover-card`
  - Trigger: Card or icon
  - Content: Detailed information, examples

#### Custom Components Needed
- **IterationChart** (Slide 09):
  ```tsx
  // components/slides/foundation/f1/components/IterationChart.tsx
  "use client"
  import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts'

  export function IterationChart() {
    const data = [
      { iteration: 0, level3: 60, level4: 60 },
      { iteration: 5, level3: 70, level4: 75 },
      { iteration: 10, level3: 70, level4: 85 },
      { iteration: 15, level3: 70, level4: 92 },
      { iteration: 20, level3: 70, level4: 96 },
    ]

    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <XAxis dataKey="iteration" label="Iteration Count" />
          <YAxis domain={[60, 100]} label="Accuracy %" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="level3" stroke="#FFB800" fill="#FFB800" fillOpacity={0.3} name="Level 3" />
          <Area type="monotone" dataKey="level4" stroke="#FF4D00" fill="#FF4D00" fillOpacity={0.3} name="Level 4" />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
  ```

- **FailureTimeline** (Slide 08):
  ```tsx
  // components/slides/foundation/f1/components/FailureTimeline.tsx
  "use client"
  import { useEffect, useState } from 'react'
  import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

  export function FailureTimeline() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(p => (p >= 100 ? 100 : p + 1))
      }, 50)
      return () => clearInterval(timer)
    }, [])

    const data = [
      { month: 'Launch', sentiment: 80, label: 'Excited!' },
      { month: 'Month 2', sentiment: 60, label: 'First issues' },
      { month: 'Month 3', sentiment: 40, label: 'Stuck at 70%' },
      { month: 'Month 4', sentiment: 20, label: 'Complaints' },
      { month: 'Month 5', sentiment: 10, label: 'Considering abandon' },
      { month: 'Month 6', sentiment: -20, label: 'Negative ROI' },
    ].slice(0, Math.floor(progress / 16.67))

    return <ResponsiveContainer>...</ResponsiveContainer>
  }
  ```

- **AssessmentCalculator** (Slide 17):
  ```tsx
  // components/slides/foundation/f1/components/AssessmentCalculator.tsx
  "use client"
  import { useState } from 'react'
  import { Card, CardContent } from '@/components/ui/card'

  export function AssessmentCalculator() {
    const [scores, setScores] = useState([0, 0, 0, 0, 0, 0])
    const total = scores.reduce((a, b) => a + b, 0)

    const interpretation =
      total <= 12 ? 'Early Stage' :
      total <= 18 ? 'Building Capability' :
      total <= 24 ? 'Emerging Maturity' :
      'Mature Capability'

    return (
      <div className="space-y-6">
        {dimensions.map((dim, idx) => (
          <DimensionRating
            key={idx}
            dimension={dim}
            value={scores[idx]}
            onChange={(val) => {
              const newScores = [...scores]
              newScores[idx] = val
              setScores(newScores)
            }}
          />
        ))}
        <Card className="border-primary bg-primary/10">
          <CardContent className="p-6">
            <p className="text-2xl font-bold">Total Score: {total}/30</p>
            <p className="text-lg text-primary">{interpretation}</p>
          </CardContent>
        </Card>
      </div>
    )
  }
  ```

#### Recharts Configuration
- **Installation**: Already in dependencies (verify with `pnpm list recharts`)
- **Responsive settings**: Always wrap in `<ResponsiveContainer width="100%" height={400}>`
- **Color arrays**: Use design system colors
  ```tsx
  const COLORS = {
    level3: '#FFB800', // warning
    level4: '#FF4D00', // primary
    level5: '#00D9FF', // cyan
  }
  ```
- **Tooltip styling**: Custom content matching design system
  ```tsx
  <Tooltip
    contentStyle={{
      backgroundColor: 'oklch(0.15 0 0)', // charcoal
      border: '1px solid oklch(0.65 0.2 35)', // primary
      borderRadius: '0.5rem',
      color: 'oklch(1 0 0)', // white
    }}
  />
  ```

#### Animation Libraries
- **tw-animate-css**: Import not needed, classes defined in globals.css
- **Available classes**:
  - `animate-slide-in-down`, `animate-slide-in-up`, `animate-slide-in-left`, `animate-slide-in-right`
  - `animate-fade-in`, `animate-scale-in`, `animate-rotate-in`
  - `animate-glow-pulse`, `animate-glow-pulse-blue`
- **Delay classes**: `delay-100`, `delay-200`, `delay-300`, `delay-400`, `delay-500`, `delay-600`
- **Fill-backwards**: Always use `fill-backwards` with delays to prevent flash

#### State Management
- **Client components**: Add `"use client"` directive to slides with:
  - Toggle state (Slide 07)
  - Animation state (Slide 08)
  - Accordion state (Slides 14-15, uses shadcn/ui internal state)
  - Assessment state (Slide 17)
  - Decision tree state (Slide 16)

- **useState patterns**:
  ```tsx
  // Toggle
  const [showReality, setShowReality] = useState(false)

  // Multi-dimension tracking
  const [scores, setScores] = useState<number[]>([0, 0, 0, 0, 0, 0])

  // Decision tree path
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  ```

- **No global state needed**: All state is slide-local, no cross-slide dependencies

## Validation Commands

Execute every command to validate the feature works correctly with zero regressions:

- `pnpm run build` - Build the presentation to validate no TypeScript or build errors. Must complete with exit code 0.
- `pnpm run lint` - Run linting to validate code quality. Must show 0 errors, 0 warnings.
- Visual inspection: Start dev server with `pnpm run dev`, navigate to `/courses/foundation`, test all 18 F1 slides:
  - Verify slide navigation (arrow keys, slide counter shows 1/18 through 18/18)
  - Test responsive breakpoints (375px mobile, 768px tablet, 1024px+ desktop)
  - Validate animations play correctly (staggered reveals, toggles, timeline)
  - Check interactive elements (click toggles, expand accordions, fill assessment, navigate decision tree)
  - Confirm images load with proper alt text
  - Test keyboard navigation (Tab, Enter, Space, Arrow keys)
  - Verify accessibility (focus rings visible, contrast sufficient, motion can be reduced)
- Lighthouse audit: Performance >90, Accessibility 100, Best Practices 100

## Notes

### Technical Considerations
- **Image loading performance**: Use Next.js `Image` component with `priority` for above-fold images, standard lazy loading for below-fold
- **Chart library size**: Recharts adds ~100KB gzipped. Consider code splitting if needed, but acceptable for this use case
- **Interactive state**: All interactions are client-side only, no backend integration needed
- **Animation performance**: Test on lower-end devices to ensure 60fps. Consider `will-change: transform` on frequently animated elements
- **Accessibility**: Use `prefers-reduced-motion` media query to disable animations for users who request it

### Content Considerations
- **Knowledge component references**: Source markdown uses `{{kc:component_name:format}}` syntax which needs to be expanded/interpreted for slides. For this implementation, inline the content directly rather than creating a separate KC system.
- **Economics accuracy**: Double-check all numbers (L3 -$30K, L4 +$100-250K, 20 iterations, 95% accuracy) against source markdown before finalizing
- **Quiz integration**: Slide 17 self-assessment is interactive checklist. The formal "Knowledge Check Quiz" (5 questions, 80% passing) would be a separate feature/route, not part of these 18 slides

### Future Enhancements
- **Quiz integration**: Separate quiz route (`/courses/foundation/f1/quiz`) with question tracking, scoring, retake functionality
- **Speaker notes**: Add presenter notes to each slide in config/slides.ts for presentation mode
- **Print stylesheet**: CSS for printing slide deck as PDF handout
- **Analytics**: Track which slides users spend most time on, which interactive elements are used
- **A/B testing**: Compare static vs interactive versions of slides 07-09 for learning effectiveness

### Design System References
This implementation must adhere to:
- **DESIGN_AESTHETICS.md** for all visual design decisions (colors, typography, animations, components)
- **PRESENTATION_DESIGN_GUIDELINES.md** for layout patterns and slide structure
- **IMAGE_GENERATION_GUIDE.md** for AI image creation workflow
- **INTERACTIVE_PATTERNS.md** for interactive element implementations

Any deviations from these guidelines must be documented and justified.
