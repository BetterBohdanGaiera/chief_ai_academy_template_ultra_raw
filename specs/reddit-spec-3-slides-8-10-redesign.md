# Feature: Reddit Marketing Research - Slide Redesign (Slides 8-10)

## Feature Description
Redesign slides 8-10 of the Reddit Marketing Research presentation covering System Architecture, Native Product Mention Strategy, and Risks & Next Steps. These slides form the strategic conclusion of the presentation, transitioning from research insights to actionable implementation guidance. The redesign will transform static, text-heavy content into engaging, interactive visualizations that enable executives to understand system components, engagement philosophy, and risk mitigation at a glance.

## User Story
As a presentation developer
I want to redesign Reddit Marketing Research slides 8-10
So that stakeholders can interactively explore system architecture, understand native engagement strategies through visual demonstrations, and assess risks with clear mitigation paths - following POC-style design principles that maximize engagement and retention.

## Problem Statement
Current slide concepts are text-heavy and lack interactivity:
- System Architecture: ASCII diagram needs interactive visualization with hover-to-explore component details
- Native Strategy: Long text examples need visual before/after comparison with toggle interaction
- Risks & Next Steps: Dense table and action plan need visual risk matrix and interactive timeline

These gaps result in:
- Reduced engagement during strategic decision-making sections
- Difficulty comparing build vs buy trade-offs at a glance
- Missing visual anchors for risk assessment
- No interactive elements to enable self-paced exploration

## Solution Statement
Redesign slides using POC-style interactive patterns from `.claude/skills/artifacts-builder/patterns/`:
- **UPDATE/OVERWRITE existing slide files** with completely new implementations
- Transform ASCII architecture into interactive layered diagram with hover-reveal component details
- Create button-toggle comparison for Spammy vs Native engagement examples
- Build visual risk matrix with severity indicators and interactive action plan timeline
- Add AI-generated background images at 10-15% opacity for visual depth
- Ensure design system compliance (DESIGN_AESTHETICS.md)
- Follow "Show, Don't Tell" philosophy throughout

## Relevant Files

### Source Content
- `/Users/bohdanpytaichuk/Documents/temp_work/chief_ai_academy_template_ultra_raw/docs/serhii_info/reddit/README.md` - Reddit Marketing Research source content

### Existing Slide Files (to be updated/overwritten)
- `components/slides/reddit/08-architecture.tsx` - System Architecture slide (to be CREATED or REWRITTEN)
- `components/slides/reddit/09-native-strategy.tsx` - Native Product Mention Strategy (to be CREATED or REWRITTEN)
- `components/slides/reddit/10-risks-next-steps.tsx` - Risks & Next Steps (to be CREATED or REWRITTEN)

### Design Documentation
- `.claude/skills/artifacts-builder/patterns/interactive/INTERACTIVE_PATTERNS.md` - 5 core interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (typography, colors, animations)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `.claude/skills/algorithmic-art/components/ALGORITHMIC_COMPONENTS.md` - Canvas-based animation components
- `.claude/skills/artifacts-builder/patterns/LIBRARY_README.md` - Pattern library index
- `.claude/skills/artifacts-builder/patterns/foundation/button-toggle-comparison/` - Toggle comparison pattern
- `.claude/skills/artifacts-builder/patterns/foundation/horizontal-timeline/` - Timeline pattern
- `.claude/skills/artifacts-builder/patterns/foundation/progressive-disclosure/` - Progressive disclosure pattern

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/reddit/*.tsx` - Slide components to UPDATE/OVERWRITE or CREATE
- `config/slides.ts` - Slide registry

### Files to Update/Create
- `components/slides/reddit/08-architecture.tsx` - System Architecture (interactive layered diagram)
- `components/slides/reddit/09-native-strategy.tsx` - Native Strategy (toggle comparison)
- `components/slides/reddit/10-risks-next-steps.tsx` - Risks & Next Steps (risk matrix + timeline)

## Content Breakdown

### Slide 08: System Architecture
**Slide ID**: `reddit-08-architecture`
**Source**: `docs/serhii_info/reddit/README.md` (Section 2.5 - Architecture Overview)

**Key Content Points**:
1. **Two main layers**:
   - **BUY/USE READY layer** (top):
     - Antidetect browser (DICloak/Multilogin)
     - Residential proxies
     - Warmed accounts (buy or self-warmup)
     - Reddit API (PRAW)
     - Claude/GPT API for generation
   - **BUILD OURSELVES layer** (bottom):
     - Keyword monitoring in subreddits
     - AI agent with expertise understanding
     - Scoring: where to respond first
     - Human Review: check before posting
     - Dashboard for management

2. **Key insight**: Custom build advantage is the AI agent that understands YOUR expertise

**Learning Objectives**:
- Understand the modular architecture approach
- Differentiate between commodity components vs custom-built value
- Visualize data flow from monitoring to posting

**Interactive Elements Needed**:
- Hover-reveal on each component for details (cost, purpose, alternatives)
- Visual separation between BUY and BUILD layers
- Connection lines showing data flow
- Animated build-up sequence

**Data/Metrics to Display**:
- Cost ranges for BUY components ($8-99/mo antidetect, $10-50/mo proxies, $0-120/mo API)
- "FREE" badge on BUILD components (assuming in-house development time)

---

### Slide 09: Native Product Mention Strategy
**Slide ID**: `reddit-09-native-strategy`
**Source**: `docs/serhii_info/reddit/README.md` (Section 2.6 - Native Mention Strategy)

**Key Content Points**:
1. **Reddit Philosophy Quote** (hero element):
   > "It's perfectly fine to be a Redditor with a website, it's not okay to be a website with a Reddit account."

2. **4 Rules for Native Engagement**:
   - Only with 100% relevance - user describes EXACTLY the problem solved
   - Value first, product second - 80% of response = useful information
   - No direct links - automoderators delete instantly
   - Transparency - "I'm the founder, so obviously biased, but..." works

3. **Example Comparison**:
   - **Spammy**: "Great question! You should check out [ProductName]..."
   - **Native**: "Been there! Here's what I learned after 6 months..." (detailed value, mentions tool casually, invites dialogue)

4. **What Makes It Native** (checklist):
   - Real story
   - Specific details
   - Offers alternatives
   - Does not push
   - Invites dialogue

**Learning Objectives**:
- Internalize the difference between spammy and native engagement
- Understand the 80/20 value-first principle
- See concrete examples of effective Reddit engagement

**Interactive Elements Needed**:
- Button toggle comparison: "Spammy Example" vs "Native Example"
- Quote highlight as hero/callout element
- 4 rules as numbered cards with icons
- Checklist with green checkmarks for "What Makes It Native"

---

### Slide 10: Risks & Next Steps
**Slide ID**: `reddit-10-risks-next-steps`
**Source**: `docs/serhii_info/reddit/README.md` (Section 2.7 Risks + Conclusions)

**Key Content Points**:
1. **Risk Matrix** (4 risks):
   | Risk | What Can Happen | How to Reduce |
   |------|-----------------|---------------|
   | Mass account ban | Lose all accounts | Rotation, quality > quantity |
   | AI content detection | Ban as spam | Human review, unique style |
   | Negative community reaction | Reputation damage | Value-first approach |
   | Reddit API changes | System stops working | Monitor changes |

2. **What We Learned** (3 key insights):
   - Ready solutions cost $20-200/mo but give generic responses
   - "Spare parts" for own system cost from ~$50/mo
   - Main advantage of own system: AI agent that understands OUR expertise

3. **Questions to Validate**:
   - Economics: At what volume is own system more profitable?
   - Quality: How much better does value-first approach convert?
   - Time: How long will MVP development take?

4. **Action Plan** (4 steps):
   1. Try ready solution (Reddit Radar or GummySearch) to understand process
   2. In parallel, build own system MVP on "spare parts"
   3. Compare results
   4. Decide where to invest further

**Learning Objectives**:
- Assess risks before implementation
- Understand validation questions that need answers
- Have clear next steps for moving forward

**Interactive Elements Needed**:
- Risk cards with severity indicators (color-coded)
- Hover/click to see mitigation strategies
- Numbered timeline for action plan with expandable details
- Key insights as highlight cards

---

## Visual Design Recommendations

### Slide 08: System Architecture
**Recommended Skill**: `artifacts-builder`
**Rationale**: Complex multi-state hover interactions and layered UI require React state management and shadcn/ui components. Not suited for algorithmic-art since this is structured UI, not procedural animation.

**Visual-First Verification**:
- **"Can this be shown?"**: YES - ASCII diagram transforms into interactive layered architecture visualization
- **Primary message is visual**: Architecture layers with component icons and connection lines
- **Text is supportive**: Component names and costs appear on hover, not as static labels
- **Interactive where possible**: Hover-reveal for each component's details
- **Text-to-Visual Ratio**: 25% text / 75% visual

**Pattern**: Hover-Reveal Cards + Custom Layered Architecture
- Primary pattern: `.claude/skills/artifacts-builder/patterns/foundation/progressive-disclosure/`
- Reference: `ai_docs/INTERACTIVE_PATTERNS.md` - Pattern 3: Hover-Reveal Cards

**Rationale**: The architecture has two distinct layers (BUY vs BUILD) with multiple components. Hover-reveal allows users to explore details without overwhelming the initial view. The layered visualization makes the "buy commodity, build custom value" message visually obvious.

**Key Features**:
- Two distinct horizontal layers with clear visual separation
- Layer 1 (BUY): Neutral gray/slate color scheme with shopping-cart icons
- Layer 2 (BUILD): Teal accent color highlighting custom value
- Each component as a rounded card with icon
- Hover state reveals: purpose, cost range, alternatives
- Connecting lines showing data flow between layers
- Badge: "System Design" with Layers icon

**Animation Requirements**:
- Staggered entrance: Title (0ms) -> BUY layer (200ms) -> BUILD layer (400ms) -> Connections (600ms)
- Hover: Scale 1.02, border glow, tooltip fade-in
- Connection lines: Animate with dashed stroke for data flow metaphor

**Color & Typography**:
- Title: `font-bebas text-5xl` - "SYSTEM ARCHITECTURE"
- Layer labels: `font-syne text-xl font-semibold`
- Component names: `font-manrope text-sm`
- BUY layer: `border-slate-300 bg-slate-50`
- BUILD layer: `border-primary/40 bg-primary/5`
- Connection lines: `stroke-primary/60`

---

### Slide 09: Native Product Mention Strategy
**Recommended Skill**: `artifacts-builder`
**Rationale**: Button toggle comparison is a core React interactive pattern. The before/after example comparison is perfectly suited for the Button Toggle Comparison pattern.

**Visual-First Verification**:
- **"Can this be shown?"**: YES - Spammy vs Native comparison is perfect for interactive toggle
- **Primary message is visual**: Toggle dramatically reveals the quality difference
- **Text is supportive**: Example text is the content being compared (necessary text)
- **Interactive where possible**: Button toggle for comparison, potential hover on rules
- **Text-to-Visual Ratio**: 35% text / 65% visual (examples require text, but structured as chat bubbles)

**Pattern**: Button Toggle Comparison
- Primary pattern: `.claude/skills/artifacts-builder/patterns/foundation/button-toggle-comparison/`
- Reference: `ai_docs/INTERACTIVE_PATTERNS.md` - Pattern 1: Interactive Toggle/Comparison

**Rationale**: The contrast between spammy and native engagement is the core learning. Toggle pattern creates cognitive contrast and memorable "aha!" moment when users switch between views.

**Key Features**:
- Hero quote callout at top with blockquote styling
- Two toggle buttons: "Spammy Approach" (red/destructive) vs "Native Approach" (green/success)
- Example displayed as chat-bubble style message
- Color-coded: Red border for spammy, green border for native
- "What Makes It Native" checklist appears when Native is selected
- 4 Rules as numbered icon-cards below the comparison

**Animation Requirements**:
- Quote slides in from top (200ms delay)
- Toggle buttons scale-in (400ms delay)
- Example card fades and transitions between states
- Checklist items stagger-reveal (100ms each) when Native selected
- Rules cards slide up with stagger (600ms base, 100ms increment)

**Color & Typography**:
- Quote: `font-syne text-2xl italic text-foreground/80` with left border accent
- Toggle buttons: Destructive red vs Success green variants
- Example card: `font-jetbrains text-sm` for code-like message style
- Checklist: Green checkmark icons with `text-success`
- Badge: "Engagement Strategy" with MessageCircle icon

---

### Slide 10: Risks & Next Steps
**Recommended Skill**: `artifacts-builder`
**Rationale**: Multiple UI components (risk cards, timeline, insight cards) with hover/click interactions. Standard React patterns with shadcn/ui.

**Visual-First Verification**:
- **"Can this be shown?"**: YES - Risk table becomes visual risk matrix, action plan becomes timeline
- **Primary message is visual**: Risk severity colors and timeline progression
- **Text is supportive**: Risk descriptions are minimal, mitigation revealed on hover
- **Interactive where possible**: Hover-reveal mitigation, expandable timeline steps
- **Text-to-Visual Ratio**: 30% text / 70% visual

**Pattern**: Progressive Disclosure + Horizontal Timeline
- Risk matrix: Custom risk cards with severity indicators
- Action plan: `.claude/skills/artifacts-builder/patterns/foundation/horizontal-timeline/`
- Reference: `ai_docs/INTERACTIVE_PATTERNS.md` - Pattern 4: Click-to-Expand Details

**Rationale**: Risk assessment needs quick scanning (visual severity) with detail on demand. Action plan benefits from timeline visualization showing parallel tracks.

**Key Features**:
- **Risk Matrix Section** (top half):
  - 4 risk cards in 2x2 grid
  - Each card shows: Risk icon, Risk name, Severity indicator (color bar)
  - Hover reveals: Full description + mitigation strategy
  - Color-coded severity: Orange (medium) for most, Red (high) for mass ban

- **Key Insights Section** (middle):
  - 3 insight cards with key numbers/facts
  - Teal accent for main insight about AI agent advantage

- **Action Plan Section** (bottom):
  - Horizontal timeline with 4 steps
  - Steps 1 & 2 shown as parallel (simultaneous actions)
  - Steps 3 & 4 sequential
  - Each step expandable for details

**Animation Requirements**:
- Risk cards: Staggered fade-in (100ms per card)
- Severity bars: Animate width on entrance
- Insights: Slide-in from left (400ms delay)
- Timeline: Progressive reveal from left to right (600ms base)

**Color & Typography**:
- Title: `font-bebas text-5xl`
- Risk names: `font-syne text-lg font-semibold`
- Severity colors: Orange `#FF9800`, Red `#EF5350`, Green `#4CAF50` for mitigation
- Timeline numbers: `font-bebas text-3xl text-primary`
- Badge: "Action Plan" with Target icon

---

## Image Generation Strategy

### Slide 08: System Architecture
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- **Subject**: Abstract modular blocks and connection pathways suggesting system integration (NO TEXT/NUMBERS)
- **Prompt**: "A professional handwritten illustration of interconnected modular geometric blocks arranged in horizontal layers, with flowing pathways connecting upper and lower tiers, featuring warm teal tones (#00897B), light teal accents (#26A69A), with charcoal outlines and white background. Abstract forms suggesting system components and data flow, no text or labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses "geometric blocks" and "flowing pathways" not "labeled components"
- **Generation command**: `tsx generate-image.ts "interconnected modular geometric blocks in horizontal layers with flowing pathways, teal tones, charcoal outlines, white background, no text" --ratio 16:9`

### Slide 09: Native Product Mention Strategy
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- **Subject**: Abstract conversation bubbles and organic flowing forms suggesting natural dialogue (NO TEXT)
- **Prompt**: "A professional handwritten illustration of overlapping organic speech-bubble shapes in flowing arrangement, some with smooth rounded edges, others with gentle angular forms, featuring warm teal tones (#00897B), light accents, with charcoal outlines and white background. Abstract forms suggesting natural conversation flow, no text or labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text - uses "speech-bubble shapes" not "conversation with words"
- **Generation command**: `tsx generate-image.ts "overlapping organic speech-bubble shapes in flowing arrangement, teal tones, charcoal outlines, white background, no text" --ratio 16:9`

### Slide 10: Risks & Next Steps
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- **Subject**: Abstract pathway diverging and converging, suggesting decision points and forward motion (NO TEXT)
- **Prompt**: "A professional handwritten illustration of abstract pathways diverging from left then converging toward right, with small diamond shapes at decision points, featuring warm teal tones (#00897B), soft red and orange accents for risk nodes, with charcoal outlines and white background. Abstract forms suggesting journey and decisions, no text or labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text - uses "pathways and decision points" not "labeled steps"
- **Generation command**: `tsx generate-image.ts "abstract pathways diverging then converging with diamond decision points, teal and orange tones, charcoal outlines, white background, no text" --ratio 16:9`

---

## Implementation Plan

- [ ] **Phase 1: Foundation** - Read design docs, plan images, finalize patterns
  - Status: NOT STARTED
  - Comments: All documentation reviewed in this spec

- [ ] **Phase 2: Image Generation** - Generate background images for all 3 slides
  - Status: NOT STARTED
  - Comments: Run commands listed in Image Generation Strategy section

- [ ] **Phase 3: Implementation** - Use slide-generator agent to CREATE/UPDATE slides
  - **CRITICAL**: Agent will use Write tool to create new slide files
  - **Slides**: reddit-08-architecture, reddit-09-native-strategy, reddit-10-risks-next-steps
  - Status: NOT STARTED
  - Comments: Implement using patterns specified above

- [ ] **Phase 4: Integration & Validation** - Register slides, test navigation, validate design system
  - Status: NOT STARTED
  - Comments: Update config/slides.ts and app/page.tsx

---

## Step by Step Tasks

### Foundation Work

- [ ] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, pattern READMEs
  - Status: COMPLETE (done during spec creation)
  - Comments: All patterns identified and documented above

- [ ] **Extract source content** - Read Reddit research README and extract relevant sections
  - Status: COMPLETE
  - Comments: Content breakdown completed for all 3 slides

- [ ] **Match patterns** - Identify best-fit patterns for each slide
  - Status: COMPLETE
  - Comments: Patterns documented in Visual Design Recommendations

### Image Generation

- [x] **Generate background image for Slide 08 (Architecture)** - Run: `tsx generate-image.ts "interconnected modular geometric blocks in horizontal layers with flowing pathways, teal tones, charcoal outlines, white background, no text" --ratio 16:9`
  - Status: COMPLETED
  - Comments: Generated gemini-1766365012746-1.png (1.29MB) - Abstract modular blocks with teal tones, no text

- [x] **Generate background image for Slide 09 (Native Strategy)** - Run: `tsx generate-image.ts "overlapping organic speech-bubble shapes in flowing arrangement, teal tones, charcoal outlines, white background, no text" --ratio 16:9`
  - Status: COMPLETED
  - Comments: Generated gemini-1766365026992-1.png (1.06MB) - Organic speech bubble shapes, teal tones, no text

- [x] **Generate background image for Slide 10 (Risks)** - Run: `tsx generate-image.ts "abstract pathways diverging then converging with diamond decision points, teal and orange tones, charcoal outlines, white background, no text" --ratio 16:9`
  - Status: COMPLETED
  - Comments: Generated gemini-1766365016422-1.png - Abstract pathways with decision points, teal/orange tones, no text

### Slide Implementation

- [x] **Implement Slide 08: System Architecture** - CREATE slide using Hover-Reveal pattern
  - **Action**: Create `components/slides/reddit/08-architecture.tsx`
  - **Pattern**: Progressive Disclosure + Hover-Reveal Cards
  - **Skill**: artifacts-builder
  - Status: COMPLETED
  - Comments: Implemented with: Two-layer architecture (BUY/USE READY + BUILD OURSELVES), 5 components per layer with hover-reveal details showing cost/purpose/alternatives, animated connection lines, key insight card highlighting AI agent advantage. Uses artifacts-builder skill with default export. Background: gemini-1766365012746-1.png at 12% opacity.

- [x] **Implement Slide 09: Native Strategy** - CREATE slide using Button Toggle pattern
  - **Action**: Create `components/slides/reddit/09-native-strategy.tsx`
  - **Pattern**: Button Toggle Comparison
  - **Skill**: artifacts-builder
  - Status: COMPLETED
  - Comments: Implemented with: Hero quote blockquote, Spammy vs Native toggle buttons (red/green), example message cards with results, "What Makes It Native" checklist (5 items with staggered reveal), 4 Rules cards with numbered icons. Uses artifacts-builder skill with default export. Background: gemini-1766365026992-1.png at 10% opacity.

- [x] **Implement Slide 10: Risks & Next Steps** - CREATE slide using Timeline pattern
  - **Action**: Create `components/slides/reddit/10-risks-next-steps.tsx`
  - **Pattern**: Risk Matrix + Horizontal Timeline
  - **Skill**: artifacts-builder
  - Status: COMPLETED
  - Comments: Implemented with: 2x2 risk matrix (hover-reveal mitigation), 3 insight cards (highlighted main advantage), horizontal timeline (steps 1-2 parallel, 3-4 sequential), click-to-expand step details. Uses artifacts-builder skill with default export.

### Slide Registration (MANDATORY)

- [x] **Register slides in config/slides.ts** - Add all 3 slide entries with metadata (REQUIRED)
  - Status: COMPLETED
  - Comments: All 3 slides (08, 09, 10) registered in config/slides.ts with proper metadata.
  - **Template:**
    ```typescript
    'reddit-08-architecture': {
      slide: {
        id: 'reddit-08-architecture',
        component: () => import('@/components/slides/reddit/08-architecture'),
        module: 'reddit',
        title: 'System Architecture',
        tags: ['reddit', 'architecture', 'system'],
        duration: 3,
        notes: 'Two-layer modular architecture showing BUY vs BUILD components'
      },
      loader: () => import('@/components/slides/reddit/08-architecture')
    },
    'reddit-09-native-strategy': {
      slide: {
        id: 'reddit-09-native-strategy',
        component: () => import('@/components/slides/reddit/09-native-strategy'),
        module: 'reddit',
        title: 'Native Product Mention Strategy',
        tags: ['reddit', 'strategy', 'engagement'],
        duration: 3,
        notes: 'Toggle comparison of spammy vs native Reddit engagement'
      },
      loader: () => import('@/components/slides/reddit/09-native-strategy')
    },
    'reddit-10-risks-next-steps': {
      slide: {
        id: 'reddit-10-risks-next-steps',
        component: () => import('@/components/slides/reddit/10-risks-next-steps'),
        module: 'reddit',
        title: 'Risks & Next Steps',
        tags: ['reddit', 'risks', 'action-plan'],
        duration: 3,
        notes: 'Risk matrix with mitigation strategies and 4-step action plan'
      },
      loader: () => import('@/components/slides/reddit/10-risks-next-steps')
    },
    ```

- [x] **Add slides to module page** - Include slide IDs in reddit module page in correct order (REQUIRED)
  - Status: COMPLETED
  - Comments: All 3 slides (08, 09, 10) added to app/(courses)/modules/reddit/page.tsx in correct order.
  - **Note:** Slides will NOT appear until added to BOTH config/slides.ts AND module page

### Integration & Validation

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation
  - Status: NOT STARTED
  - Comments: Test all 3 slides in sequence

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status: NOT STARTED
  - Comments: Use checklist from Acceptance Criteria

- [ ] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: NOT STARTED
  - Comments: Must pass without errors

---

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- Test each slide renders without errors
- Test slide navigation (next/previous)
- Test interactive elements:
  - Slide 08: Hover on architecture components reveals details
  - Slide 09: Toggle between Spammy/Native examples
  - Slide 10: Hover on risk cards, expand timeline steps
- Test responsive layouts at breakpoints (375px mobile, 768px tablet, 1024px desktop)

### Edge Cases
- Rapid clicking on toggle buttons (Slide 09)
- Hover effects on touch devices (all slides)
- Keyboard navigation through all interactive elements
- Screen reader compatibility with ARIA labels
- Motion respects prefers-reduced-motion

---

## Acceptance Criteria

### Visual-First Compliance (MANDATORY)
- [ ] **All slides pass Visual-First verification** - "Can this be shown?" was asked and answered YES
- [ ] **Text-to-visual ratio <=35%** - Architecture 25%, Strategy 35%, Risks 30%
- [ ] **No visual anti-patterns** - No text walls, no bullet-heavy slides
- [ ] **Skill recommendations included** - All slides use `artifacts-builder`
- [ ] **Interactive patterns used** - Hover-reveal (08), Toggle (09), Expandable timeline (10)

### Design System Compliance
- [ ] All slides have AI-generated background images at 10-12% opacity
- [ ] All slides use patterns from .claude/skills/artifacts-builder/patterns/
- [ ] All slides follow design system (DESIGN_AESTHETICS.md):
  - Typography: Bebas Neue (titles), Syne (headers), Manrope (body)
  - Colors: Teal primary (#00897B), Navy accent (#1E3A5F), success/warning/destructive semantics
  - Animations: Orchestrated entrance sequences with stagger
- [ ] All slides are responsive (mobile 375px, tablet 768px, desktop 1024px+)
- [ ] All slides have proper entrance animations (fade-in, slide-up, stagger)
- [ ] All interactive elements provide clear feedback (hover states, active states)
- [ ] All slides meet WCAG AA accessibility standards (4.5:1 contrast, focus states)
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency

### Mobile Considerations
- [ ] **Slide 08 (Architecture)**: Single-column stack on mobile, tap-to-reveal instead of hover
- [ ] **Slide 09 (Strategy)**: Toggle buttons full-width on mobile, example card scrollable if needed
- [ ] **Slide 10 (Risks)**: 2x2 grid becomes single column, timeline vertical on mobile
- [ ] All touch targets minimum 44x44px

---

## Slide Design Requirements

### Image Generation Strategy
See detailed prompts and commands in [Image Generation Strategy](#image-generation-strategy) section above.

### Visual Component Selection

**Slide 08: System Architecture**
- Text: Title (h1), layer labels (h3), component names (p)
- Data: Cost ranges displayed on hover
- Interactive: Hover-reveal cards for each component
- Icons: `Server`, `Shield`, `Bot`, `Brain`, `BarChart`, `Users`, `Layers` from lucide-react
- Background: AI-generated at 12% opacity

**Slide 09: Native Product Mention Strategy**
- Text: Hero quote (blockquote), example messages (code-style), rule descriptions
- Data: None (qualitative comparison)
- Interactive: Button toggle, checklist reveal
- Icons: `MessageCircle`, `Check`, `X`, `AlertTriangle`, `ThumbsUp` from lucide-react
- Background: AI-generated at 10% opacity

**Slide 10: Risks & Next Steps**
- Text: Risk names, mitigation strategies, timeline step descriptions
- Data: None (qualitative risk assessment)
- Interactive: Hover-reveal risk details, expandable timeline steps
- Icons: `AlertTriangle`, `Shield`, `Zap`, `Target`, `Clock` from lucide-react
- Background: AI-generated at 10% opacity

### Layout Design

**Slide 08 Layout**:
```
+------------------------------------------+
| Badge: System Design                      |
| Title: SYSTEM ARCHITECTURE               |
+------------------------------------------+
| [BUY/USE READY LAYER - 5 components]     |
|  [Antidetect] [Proxies] [Accounts] [API] [AI] |
+------------------------------------------+
|        |  Connection Lines  |            |
+------------------------------------------+
| [BUILD OURSELVES LAYER - 5 components]   |
|  [Monitor] [Agent] [Score] [Review] [Dashboard] |
+------------------------------------------+
```
- Grid: `grid-cols-5` for components in each layer
- Spacing: `gap-4` between components, `gap-8` between layers
- Full-screen: `min-h-screen flex items-center justify-center p-8 lg:p-16`

**Slide 09 Layout**:
```
+------------------------------------------+
| Badge: Engagement Strategy               |
+------------------------------------------+
| "Quote about Redditor with website..."   |
+------------------------------------------+
| [Toggle: Spammy | Native ]               |
+------------------------------------------+
| +--------------------------------------+ |
| | Example Message Card                 | |
| | (styled as chat bubble)              | |
| +--------------------------------------+ |
| [ ] What Makes It Native (if Native)   | |
+------------------------------------------+
| [4 Rules Cards in 2x2 grid]             |
+------------------------------------------+
```
- Toggle buttons: `flex gap-4` centered
- Example card: `max-w-2xl mx-auto`
- Rules grid: `grid-cols-2 lg:grid-cols-4`

**Slide 10 Layout**:
```
+------------------------------------------+
| Badge: Action Plan                       |
| Title: RISKS & NEXT STEPS               |
+------------------------------------------+
| [Risk Card 1] [Risk Card 2]             |
| [Risk Card 3] [Risk Card 4]             |
+------------------------------------------+
| [Insight 1] [Insight 2] [Insight 3]     |
+------------------------------------------+
| Timeline: [1]---[2]---[3]---[4]         |
|           =====(parallel)               |
+------------------------------------------+
```
- Risk grid: `grid-cols-2 lg:grid-cols-4`
- Insights: `grid-cols-3`
- Timeline: Custom horizontal flex layout

### Interactive & Animation Patterns

**Slide 08 Animations**:
- Badge: `animate-slide-in-down`
- Title: `animate-fade-in delay-200`
- BUY layer: `animate-slide-in-left delay-400`
- BUILD layer: `animate-slide-in-right delay-600`
- Connection lines: CSS stroke-dasharray animation
- Hover: `transition-all duration-300 hover:scale-102 hover:shadow-glow`

**Slide 09 Animations**:
- Quote: `animate-fade-in delay-200`
- Toggle buttons: `animate-scale-in delay-400`
- Example card: `transition-opacity duration-500` on toggle
- Checklist: Stagger reveal `delay-${index * 100}ms`
- Rules: `animate-slide-in-up delay-${600 + index * 100}ms`

**Slide 10 Animations**:
- Risk cards: Stagger `delay-${index * 100}ms animate-fade-in`
- Insights: `animate-slide-in-left delay-400`
- Timeline steps: Progressive reveal with `animate-fade-in delay-${600 + index * 200}ms`

### Color & Typography Usage
- **Color scheme**:
  - Primary teal: `#00897B` (custom value, success states)
  - Deep navy: `#1E3A5F` (secondary emphasis)
  - Warning/Risk: `#FF9800` (orange amber)
  - Destructive: `#EF5350` (softer red)
  - Success: `#4CAF50` (green for mitigations, native approach)
- **Text hierarchy**:
  - Titles: `text-5xl font-bebas`
  - Headers: `text-2xl font-syne font-semibold`
  - Body: `text-base font-manrope`
  - Code/examples: `text-sm font-jetbrains`
- **Contrast ratios**: All text meets WCAG AA (4.5:1 body, 3:1 large text)

### Accessibility Checklist
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] All interactive elements have focus states (`focus-visible:ring-2`)
- [ ] Text readable at minimum 16px for body
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader compatible (semantic HTML, ARIA)
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Touch targets 44x44px minimum on mobile

### Component Implementation Notes
- **shadcn/ui components**: Badge, Card (CardContent), Button, HoverCard
- **Custom components**:
  - ArchitectureLayer (reusable for BUY/BUILD)
  - RiskCard (with severity indicator)
  - TimelineStep (expandable)
- **Animation libraries**: tw-animate-css utilities
- **State management**: `"use client"` with `useState` for toggle and expand states

---

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "interconnected modular geometric blocks in horizontal layers with flowing pathways, teal tones, charcoal outlines, white background, no text" --ratio 16:9
tsx generate-image.ts "overlapping organic speech-bubble shapes in flowing arrangement, teal tones, charcoal outlines, white background, no text" --ratio 16:9
tsx generate-image.ts "abstract pathways diverging then converging with diamond decision points, teal and orange tones, charcoal outlines, white background, no text" --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to reddit slides and test interactivity
```

---

## Notes

### Critical Design Decisions

1. **POC-Style Interactive Preference**: All slides prioritize dynamic, interactive demonstrations over static text-heavy designs following "Show, Don't Tell" philosophy
2. **Pattern-First Approach**: Every slide uses a proven pattern from .claude/skills/artifacts-builder/patterns/
3. **Background Images Required**: Every slide has AI-generated background image at 10-12% opacity for visual enhancement
4. **Max 4 Slides Per Spec**: This spec covers exactly 3 slides (8-10) ensuring manageable scope
5. **Design System Compliance**: All slides strictly follow DESIGN_AESTHETICS.md specifications

### Pattern Selection Rationale

**Slide 08 - Architecture**:
- Pattern: Hover-Reveal Cards (from Progressive Disclosure)
- Rationale: System architecture has many components with varying detail levels. Hover-reveal allows clean overview with details on demand. The two-layer structure visually communicates the "buy commodity, build custom" strategy.

**Slide 09 - Native Strategy**:
- Pattern: Button Toggle Comparison
- Rationale: The contrast between spammy and native engagement is THE key learning. Toggle creates cognitive contrast and memorable "aha!" moment. Users actively discover why native works better.

**Slide 10 - Risks & Next Steps**:
- Pattern: Risk Matrix + Horizontal Timeline
- Rationale: Risks need quick visual scanning with detail on demand. Timeline for action plan shows clear next steps with expandable details. Combining both in one slide provides complete strategic closure.

### Mobile Adaptations Required

| Slide | Desktop Pattern | Mobile Adaptation |
|-------|-----------------|-------------------|
| 08 Architecture | Hover-reveal cards | Tap-to-reveal (toggle) |
| 09 Native Strategy | Side-by-side toggle | Stacked toggle buttons |
| 10 Risks | 2x2 risk grid + horizontal timeline | Single column + vertical timeline |

### Future Enhancements

- Add animated data flow through architecture diagram (Phase 2)
- Consider adding sound feedback for toggle interactions (accessibility option)
- Potential A/B testing of native vs spammy examples with user click tracking
- Export action plan as PDF checklist
