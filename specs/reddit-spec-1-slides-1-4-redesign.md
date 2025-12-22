# Feature: Reddit Marketing Research - Slide Redesign (Slides 1-4)

## Feature Description

Redesign the first 4 slides of the Reddit Marketing Research presentation covering the title slide and comprehensive analysis of Reddit marketing tools. The redesign will transform static text-heavy content into engaging, interactive visual experiences following the "Show, Don't Tell" principle. Each slide will feature AI-generated background images, interactive elements, and proper design system compliance.

## User Story

As a presentation developer
I want to redesign Reddit Marketing Research slides 1-4
So that viewers experience more engaging, interactive, and visually compelling content that effectively communicates the research findings on Reddit lead generation tools

## Problem Statement

Current issues to address:
- No existing slides - these are new slides being created from research documentation
- Source content is text-heavy markdown requiring transformation to visual format
- Need to present complex tool comparisons in scannable, interactive format
- Multiple pricing tiers and features need organized visual hierarchy
- Risk information (for components) needs clear visual warning indicators

## Solution Statement

Design slides using POC-style interactive patterns from `ai_docs/components_inspiration/` and `ai_docs/INTERACTIVE_PATTERNS.md`:
- **CREATE new slide files** with comprehensive visual implementations
- Replace text lists with interactive comparison tables and hover-reveal cards
- Add AI-generated background images at appropriate opacity (10-20%)
- Ensure design system compliance (DESIGN_AESTHETICS.md)
- Follow "Show, Don't Tell" philosophy with 70% visual / 30% text ratio

## Relevant Files

### Source Content
- `/Users/bohdanpytaichuk/Documents/temp_work/chief_ai_academy_template_ultra_raw/docs/serhii_info/reddit/README.md` - Reddit marketing research documentation

### Design Documentation
- `.claude/skills/artifacts-builder/patterns/interactive/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (typography, colors, animations)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `.claude/skills/artifacts-builder/patterns/LIBRARY_README.md` - Pattern library index
- `.claude/skills/artifacts-builder/patterns/foundation/one-screen-simplicity/` - Title slide pattern
- `.claude/skills/artifacts-builder/patterns/foundation/button-toggle-comparison/` - Comparison pattern

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/reddit/*.tsx` - Slide components to CREATE (new)
- `config/slides.ts` - Slide registry

### Files to Create
- `components/slides/reddit/01-title.tsx` - Title slide (NEW)
- `components/slides/reddit/02-all-in-one-platforms.tsx` - All-in-One platforms comparison (NEW)
- `components/slides/reddit/03-monitoring-tools.tsx` - Monitoring tools comparison (NEW)
- `components/slides/reddit/04-components-spare-parts.tsx` - Components for building own system (NEW)

## Content Breakdown

### Slide 01: Title Slide
**Source**: `docs/serhii_info/reddit/README.md` (Header)
**Content**:
- Main Title: "Reddit-Marketing: Lead Generation Research" (translated from Russian)
- Subtitle: "Comprehensive Analysis of Reddit Commenting Services for Client Acquisition"
- Scope indicators: Existing Tools, Custom Solutions, Economics, Strategy
- Badge: "Research 2025"

**Learning Objectives**:
- Introduce the research topic
- Set expectations for presentation scope
- Establish professional credibility

### Slide 02: All-in-One Platforms
**Source**: Section 1.1 - Ready-made All-in-One platforms
**Content**:
| Platform | Features | Price | Limitations |
|----------|----------|-------|-------------|
| OGTool | 100,000+ subreddits monitoring, AI responses | from $99/mo | Generic AI responses |
| Reddit Radar | AI community search, virality scoring, health score | Starter $19.99/mo (100 msgs), Pro $39.99/mo (300 msgs) | Hard message limits |
| Promotee | Auto Comments, Auto DMs, Account Warmup, Multi-account, CRM | $59/account/mo | Ban risk with aggressive automation |
| Subtle AI | Relevant post search, response creation, opportunity ID | Not listed | - |
| ReplyAgent.ai | Auto conversation search, smart targeting, persona replies | Not listed | - |

**Learning Objectives**:
- Understand available market solutions
- Compare pricing and feature sets
- Identify limitations of each platform

### Slide 03: Monitoring Tools (Search Only)
**Source**: Section 1.2 - Monitoring instruments (search only, no posting)
**Content**:
| Tool | Features | Integrations | Pricing |
|------|----------|--------------|---------|
| GummySearch | Audience research, AI thread summaries, Saved Searches with email digests | Slack, Discord | Free (50 searches), Starter $29/mo, Pro $59/mo, Mega $199/mo |
| Syften | Real-time monitoring 15+ platforms (Reddit, HN, Quora, GitHub, YouTube), 1-min alert delay | - | From $19.95/mo, Pro $99.95/mo |

**Learning Objectives**:
- Distinguish monitoring-only from full automation tools
- Understand cross-platform monitoring capabilities
- Compare pricing for search-only solutions

### Slide 04: Components ("Spare Parts")
**Source**: Section 1.3 - Components for building own system
**Content**:

**1. Warmed Accounts**:
- Stats: 280% higher engagement for 12mo+ accounts, 4x more upvotes for 1000+ karma
- Sources: SocialPlug, AccsMarket ($0.03+), REDAccs, PlayerUp
- Risks: TOS violation, ban risk, spam history

**2. Antidetect Browsers**:
| Browser | Price | Notes |
|---------|-------|-------|
| Multilogin | from $99/mo | 30M+ IPs |
| DICloak | from $8/mo | Free plan available |
| Nstbrowser | Free plan | Canvas, WebGL fingerprints |
| Hidemyacc | from $15/mo | Isolated environments |
| AdsPower | from $9/mo | Reddit-specific solution |

**3. Reddit API (PRAW)**:
- Free tier: 100 requests/min
- Commercial: $0.24 per 1,000 API calls
- Basic monitoring: ~$2.07/mo (8,640 requests)
- Active bot: $120+/mo (500,000+ requests)

**4. AI for Response Generation**:
- Claude: ~$3-15 per 1M tokens
- GPT-4: ~$10-30 per 1M tokens

**Learning Objectives**:
- Understand building blocks for custom solution
- Evaluate risk vs. cost trade-offs
- Plan infrastructure requirements

## Visual Design Recommendations

### Slide 01: Title Slide
**Recommended Skill**: `artifacts-builder`
**Pattern**: One-Screen Simplicity (`patterns/foundation/one-screen-simplicity/`)
**Rationale**: Title slides benefit from minimalist layout with maximum clarity. This pattern ensures strong first impression without cognitive overload.

**Visual-First Verification**:
- Q: Can this be shown instead of told?
- A: Yes - use atmospheric background with abstract Reddit/network metaphor, minimal text hierarchy

**Key Features**:
- Badge with "Research 2025" glow effect
- Bebas Neue hero title (text-7xl to text-9xl responsive)
- Syne subtitle for scope description
- Staggered entrance animations (badge -> title -> subtitle -> metadata)
- GradientMesh background with GrainOverlay

**Text-to-Visual Ratio**: 20% text / 80% visual (background + layout)

**Mobile Considerations**:
- Single-column layout scales naturally
- Touch-friendly - no hover interactions
- Test at 375px breakpoint

### Slide 02: All-in-One Platforms
**Recommended Skill**: `artifacts-builder`
**Pattern**: Hover-Reveal Cards (`patterns/interactive/INTERACTIVE_PATTERNS.md` - Pattern 3)
**Rationale**: 5 platforms with features/pricing/limitations are ideal for hover-reveal exploration. Users can scan quickly and dive deeper on platforms of interest.

**Visual-First Verification**:
- Q: Can this be shown instead of told?
- A: Yes - each platform as a card with icon, core info visible, details on hover

**Key Features**:
- 5 platform cards in responsive grid (1 col mobile, 2 col tablet, 3/5 col desktop)
- Each card shows: Icon/Logo placeholder, Platform name, Price badge, Core feature
- Hover reveals: Full feature list, Limitations (with warning color), Link indicator
- Color-coded pricing tiers (green for budget, amber for mid, red for premium)
- Staggered entrance animations

**Interactive Elements**:
- Hover to reveal detailed features and limitations
- Scale transform on hover (scale-105)
- Custom glow shadows based on price tier

**Text-to-Visual Ratio**: 30% text / 70% visual (cards, icons, colors)

**Mobile Considerations**:
- **Flagged Issue**: Hover-reveal won't work on touch
- **Mobile Adaptation**: Tap-to-expand accordion pattern for mobile
- **Touch Target Size**: Cards min 44x44px tap area
- **Testing Priority**: 375px, 768px breakpoints

### Slide 03: Monitoring Tools
**Recommended Skill**: `artifacts-builder`
**Pattern**: Button Toggle Comparison (`patterns/foundation/button-toggle-comparison/`)
**Rationale**: Two tools to compare side-by-side. Toggle pattern creates clear distinction between GummySearch (research-focused) vs Syften (real-time alerts).

**Visual-First Verification**:
- Q: Can this be shown instead of told?
- A: Yes - toggle between tools shows feature comparison dynamically

**Key Features**:
- Two-button toggle at top (GummySearch vs Syften)
- Dynamic content cards update on toggle
- Feature comparison grid with icons
- Pricing tier visualization with progress bars or badges
- Integration logos where applicable (Slack, Discord for GummySearch)

**Interactive Elements**:
- Button toggle with active/inactive states
- Content fade transition on switch
- Color-coding: GummySearch (teal for research), Syften (cyan for speed)

**Animation Requirements**:
- animate-fade-in on content switch
- Button variant change: default <-> outline
- Staggered card reveals

**Text-to-Visual Ratio**: 25% text / 75% visual (toggle, icons, feature grid)

**Mobile Considerations**:
- Toggle buttons stack vertically on mobile
- Cards single-column on small screens
- No hover dependencies - toggle is touch-friendly

### Slide 04: Components (Spare Parts)
**Recommended Skill**: `artifacts-builder`
**Pattern**: Click-to-Expand Details (`patterns/interactive/INTERACTIVE_PATTERNS.md` - Pattern 4)
**Rationale**: Four component categories with varying detail levels. Click-to-expand allows clean overview with deep-dive capability.

**Visual-First Verification**:
- Q: Can this be shown instead of told?
- A: Yes - 4 quadrant layout with expandable sections, visual cost indicators

**Key Features**:
- 4-quadrant grid layout (2x2 on desktop, stack on mobile)
  1. Warmed Accounts (warning icon - risk indicator)
  2. Antidetect Browsers (shield icon)
  3. Reddit API (code icon)
  4. AI Generation (brain icon)
- Each quadrant shows: Icon, Title, Price range badge
- Click expands to show: Full details, Provider list, Risk warnings

**Interactive Elements**:
- Click to toggle expand/collapse
- Only one section expanded at a time (accordion behavior)
- Warning badges for risk items (red/amber)
- Cost range visualized as horizontal bar or badge

**Color-Coded System**:
- Green: Low cost/risk
- Amber: Medium cost/risk
- Red: High cost or risk (accounts section)

**Animation Requirements**:
- animate-scale-in on expansion
- Smooth height transitions
- Icon rotation on expand (chevron)

**Text-to-Visual Ratio**: 30% text / 70% visual (icons, badges, color indicators)

**Mobile Considerations**:
- **Flagged Issue**: 4-quadrant layout won't fit on mobile
- **Mobile Adaptation**: Vertical accordion stack
- **Touch Target Size**: Expand buttons 44x44px minimum
- **Testing Priority**: 375px breakpoint critical

## Image Generation Strategy

### Slide 01: Title Slide
**Background Image** (16:9, 15% opacity, mix-blend-multiply):
- Subject: Abstract network nodes and communication pathways suggesting digital community connections (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of interconnected circular nodes with flowing communication pathways, organic network pattern suggesting digital community, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. Abstract network composition without any text, labels, or symbols. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses "nodes and pathways" not "Reddit" or named concepts
- Generation command: `tsx generate-image.ts "interconnected circular nodes with flowing communication pathways, organic network pattern suggesting digital community" --template concept-ai --ratio 16:9`

### Slide 02: All-in-One Platforms
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- Subject: Abstract dashboard interface shapes with modular components (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of overlapping rectangular panels arranged in a dashboard-like composition, with gear and cog shapes suggesting automation, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. Abstract modular shapes without any text, numbers, or interface elements. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses "panels and gears" not "platform names"
- Generation command: `tsx generate-image.ts "overlapping rectangular panels arranged in dashboard composition with gear shapes suggesting automation" --template concept-strategy --ratio 16:9`

### Slide 03: Monitoring Tools
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- Subject: Abstract radar or sonar waves emanating from center point (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of concentric circular waves emanating from a central focal point, with small dots representing detected signals at various points, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. Abstract radar pattern without any text, numbers, or labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses "waves and dots" not "monitoring" labels
- Generation command: `tsx generate-image.ts "concentric circular waves emanating from central point with dots representing signals" --template concept-ai --ratio 16:9`

### Slide 04: Components (Spare Parts)
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- Subject: Abstract modular building blocks and connecting pieces (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of interlocking geometric building blocks and modular puzzle pieces, some connected and some separated suggesting assembly, featuring warm orange tones (vibrant orange #F5A623, light orange accents), with charcoal outlines and white background. Abstract construction metaphor without any text, numbers, or labels. Editorial style, clean lines, minimal shading."
- **Validation**: No text/numbers/labels - uses "blocks and pieces" not component names
- Generation command: `tsx generate-image.ts "interlocking geometric building blocks and modular puzzle pieces suggesting assembly" --template concept-innovation --ratio 16:9`

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status: COMPLETE (this spec)
  - Comments: All 4 slides planned with patterns and image strategies

- [ ] **Phase 2: Implementation** - Use slide-generator agent to CREATE new slides
  - **CRITICAL**: Agent will use Write tool to create new slide files
  - **Module folder**: Create `components/slides/reddit/` directory
  - Status: PENDING
  - Comments: Ready for implementation

- [ ] **Phase 3: Integration & Validation** - Register slides, test navigation, validate design system compliance
  - Status: PENDING
  - Comments: Requires slide registration in config/slides.ts and module page creation

## Step by Step Tasks

### Foundation Work

- [x] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, components_inspiration/
  - Status: COMPLETE
  - Comments: All patterns reviewed, selections made

- [x] **Extract source content** - Read module content from docs/serhii_info/reddit/ and extract relevant sections
  - Status: COMPLETE
  - Comments: All 4 slides content extracted and documented

- [x] **Match patterns** - Consult components_inspiration/ and identify best-fit patterns for each slide
  - Status: COMPLETE
  - Comments: Patterns selected: One-Screen Simplicity, Hover-Reveal, Button Toggle, Click-to-Expand

### Image Generation

- [x] **Generate background image for Slide 01** - Run: `tsx generate-image.ts "interconnected circular nodes with flowing communication pathways, organic network pattern suggesting digital community" --template concept-ai --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1766365055044-1.png (1.47MB). Abstract network for title slide.

- [x] **Generate background image for Slide 02** - Run: `tsx generate-image.ts "overlapping rectangular panels arranged in dashboard composition with gear shapes suggesting automation" --template concept-strategy --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1766365071309-1.png (0.94MB). Dashboard/automation metaphor.

- [x] **Generate background image for Slide 03** - Run: `tsx generate-image.ts "concentric circular waves emanating from central point with dots representing signals" --template concept-ai --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1766365049752-1.png (1.48MB). Radar/monitoring metaphor. Verified NO TEXT.

- [x] **Generate background image for Slide 04** - Run: `tsx generate-image.ts "interlocking geometric building blocks and modular puzzle pieces suggesting assembly" --template concept-innovation --ratio 16:9`
  - Status: COMPLETE
  - Comments: Generated gemini-1766365064047-1.png (1.24MB). Building blocks/components metaphor. Verified NO TEXT.

### Slide Implementation

- [x] **Create reddit module folder** - Create `components/slides/reddit/` directory
  - Status: COMPLETE
  - Comments: Folder already existed, confirmed structure

- [x] **Implement Slide 01 (Title)** - CREATE slide using One-Screen Simplicity pattern
  - **Action**: Create new file with hero layout
  - **Tool**: Use Write tool
  - **File**: `components/slides/reddit/01-title.tsx`
  - Status: COMPLETE
  - Comments: Skill used: artifacts-builder. Bebas Neue title with staggered animations (badge -> title -> subtitle -> scope indicators -> metadata), AI-generated background (gemini-1766365055044-1.png) at 15% opacity, scope indicators as interactive badges with hover states.

- [x] **Implement Slide 02 (All-in-One Platforms)** - CREATE slide using Hover-Reveal Cards pattern
  - **Action**: Create new file with 5 platform cards
  - **Tool**: Use Write tool
  - **File**: `components/slides/reddit/02-all-in-one-platforms.tsx`
  - Status: COMPLETE
  - Comments: Skill used: artifacts-builder. 5 platform cards with hover-reveal details, color-coded pricing (green <$30, amber $30-60, red >$60), mobile tap-to-expand support, AI-generated background (gemini-1766365071309-1.png) at 12% opacity, staggered entrance animations, key insight card at bottom.

- [x] **Implement Slide 03 (Monitoring Tools)** - CREATE slide using Button Toggle Comparison pattern
  - **Action**: Create new file with toggle comparison
  - **Tool**: Use Write tool
  - **File**: `components/slides/reddit/03-monitoring-tools.tsx`
  - Status: COMPLETE
  - Comments: Implemented with artifacts-builder skill. Button Toggle pattern comparing GummySearch (teal, research-focused) vs Syften (cyan, real-time alerts). Features grid, pricing tiers, integrations display. Default export for lazy loading.

- [x] **Implement Slide 04 (Components)** - CREATE slide using Click-to-Expand Details pattern
  - **Action**: Create new file with 4-quadrant expandable layout
  - **Tool**: Use Write tool
  - **File**: `components/slides/reddit/04-components-spare-parts.tsx`
  - Status: COMPLETE
  - Comments: Implemented with artifacts-builder skill. Click-to-Expand accordion pattern with 4 categories: Accounts (HIGH RISK - red), Browsers (MEDIUM - amber), API (LOW - green), AI (LOW - green). Risk badges, pricing tiers, warning sections. Default export for lazy loading.

### Slide Registration (MANDATORY)

- [x] **Register slides in config/slides.ts** - Add all new slide entries with metadata (REQUIRED)
  - Status: COMPLETE (All 4 slides registered)
  - Comments: All 4 slides registered in config/slides.ts with proper metadata, tags, and notes.
  - **Template:**
    ```typescript
    'reddit-01-title': {
      slide: {
        id: 'reddit-01-title',
        component: () => import('@/components/slides/reddit/01-title'),
        module: 'reddit',
        title: 'Reddit Marketing Research',
        tags: ['research', 'reddit', 'lead-generation'],
        duration: 2,
        notes: 'Title slide introducing Reddit marketing research'
      },
      loader: () => import('@/components/slides/reddit/01-title')
    },
    'reddit-02-all-in-one-platforms': {
      slide: {
        id: 'reddit-02-all-in-one-platforms',
        component: () => import('@/components/slides/reddit/02-all-in-one-platforms'),
        module: 'reddit',
        title: 'All-in-One Platforms',
        tags: ['tools', 'platforms', 'automation'],
        duration: 3,
        notes: 'Comparison of 5 all-in-one Reddit marketing platforms'
      },
      loader: () => import('@/components/slides/reddit/02-all-in-one-platforms')
    },
    'reddit-03-monitoring-tools': {
      slide: {
        id: 'reddit-03-monitoring-tools',
        component: () => import('@/components/slides/reddit/03-monitoring-tools'),
        module: 'reddit',
        title: 'Monitoring Tools',
        tags: ['tools', 'monitoring', 'search'],
        duration: 2,
        notes: 'GummySearch vs Syften comparison for monitoring-only solutions'
      },
      loader: () => import('@/components/slides/reddit/03-monitoring-tools')
    },
    'reddit-04-components-spare-parts': {
      slide: {
        id: 'reddit-04-components-spare-parts',
        component: () => import('@/components/slides/reddit/04-components-spare-parts'),
        module: 'reddit',
        title: 'Components (Spare Parts)',
        tags: ['components', 'infrastructure', 'diy'],
        duration: 4,
        notes: 'Building blocks for custom Reddit marketing system'
      },
      loader: () => import('@/components/slides/reddit/04-components-spare-parts')
    },
    ```

- [x] **Create Reddit module page** - Create `app/(courses)/modules/reddit/page.tsx`
  - Status: COMPLETE (All 4 slides added)
  - Comments: Reddit module page already existed. All 4 slides added to redditSlides array.
  - **Template:**
    ```typescript
    const redditSlides = [
      'reddit-01-title',
      'reddit-02-all-in-one-platforms',
      'reddit-03-monitoring-tools',
      'reddit-04-components-spare-parts'
    ]
    ```

### Integration & Validation

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation
  - Status: PENDING
  - Comments: All 4 slides should navigate correctly

- [ ] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status: PENDING
  - Comments: Verify Bebas Neue, Syne, Manrope fonts; teal/navy colors; WCAG AA

- [x] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: COMPLETE (All 4 slides)
  - Comments: Build passed successfully. TypeScript compiled without errors. Static pages generated for /modules/reddit route. All slides build and render correctly.

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- Test each slide renders without errors
- Test slide navigation (next/previous)
- Test interactive elements:
  - Slide 02: Hover-reveal cards expand/collapse
  - Slide 03: Toggle buttons switch content correctly
  - Slide 04: Click-to-expand sections work as accordion
- Test responsive layouts at breakpoints (375px, 768px, 1024px, 1440px)

### Edge Cases
- Rapid clicking on toggle buttons (Slide 03)
- Clicking multiple expand sections quickly (Slide 04)
- Hover effects on touch devices (fallback to tap)
- Canvas animations with prefers-reduced-motion
- Keyboard navigation through all interactive elements (Tab, Enter, Space)

## Acceptance Criteria

### Visual-First Compliance (MANDATORY)
- [x] **All slides pass Visual-First verification** - "Can this be shown?" was asked and answered
- [x] **Text-to-visual ratio <=30%** - Maximum 30% text, minimum 70% visual elements
- [x] **No visual anti-patterns** - No text walls, bullet-heavy slides, or missed interactivity
- [x] **Skill recommendations included** - Each slide specifies `artifacts-builder`
- [x] **Interactive patterns used** - All 4 slides have appropriate interactive patterns

### Design System Compliance
- [ ] All slides have AI-generated background images at appropriate opacity (10-15%)
- [ ] All slides use patterns from components_inspiration/ or INTERACTIVE_PATTERNS.md
- [ ] All slides follow design system (DESIGN_AESTHETICS.md)
- [ ] All slides are responsive (mobile 375px, tablet 768px, desktop 1024px+)
- [ ] All slides have proper entrance animations (staggered reveals)
- [ ] All interactive elements provide clear feedback (hover states, active states)
- [ ] All slides meet WCAG AA accessibility standards (4.5:1 contrast)
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency

## Slide Design Requirements

### Image Generation Strategy
See [Image Generation Strategy](#image-generation-strategy) section above for detailed per-slide image generation plans.

### Visual Component Selection

**Slide 01 (Title)**:
- Badge component with glow variant
- Bebas Neue hero text (text-7xl to text-9xl)
- Syne subtitle text
- GradientMesh + GrainOverlay backgrounds
- No interactive elements

**Slide 02 (All-in-One Platforms)**:
- 5 Card components with hover states
- Badge components for pricing
- Icon placeholders for platforms (Building2, Radar, Users, Lightbulb, MessageCircle from lucide-react)
- Scale transform on hover
- Custom glow shadows

**Slide 03 (Monitoring Tools)**:
- 2 Button components for toggle
- Card components for feature display
- Badge components for pricing tiers
- Progress or meter visualization for pricing comparison
- Integration icons (Slack, Discord equivalents)

**Slide 04 (Components)**:
- 4 Card components in grid
- Accordion or expandable sections
- Warning Badge variants for risk items
- Icon set: Users (accounts), Shield (browsers), Code (API), Brain (AI)
- Cost range visualization bars

### Layout Design

**Slide 01**:
- Full-screen centered layout
- `min-h-screen flex items-center justify-center`
- `max-w-7xl` content constraint
- Vertical stacking: Badge -> Title -> Subtitle -> Metadata

**Slide 02**:
- Header section with title
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`
- Card gap: `gap-4 md:gap-6`
- Padding: `p-8 lg:p-16`

**Slide 03**:
- Header with toggle buttons
- Two-column content area for comparison
- `grid-cols-1 lg:grid-cols-2`
- Toggle button group centered

**Slide 04**:
- Header section
- 2x2 quadrant grid: `grid-cols-1 md:grid-cols-2`
- Expandable content within each quadrant
- Gap: `gap-6 lg:gap-8`

### Interactive & Animation Patterns

**Entrance Animations (all slides)**:
- Badge: `animate-slide-in-down`
- Title: `animate-fade-in delay-200 fill-backwards`
- Content: `animate-fade-in` with staggered delays (100ms increments)

**Hover Effects (Slides 02, 03, 04)**:
- Scale: `hover:scale-105` or `hover:scale-102`
- Shadow: `hover:shadow-xl` or custom glow
- Border: `hover:border-primary/50`
- Transition: `transition-all duration-300`

**Toggle/Click Effects (Slides 03, 04)**:
- Active state: `scale-105 border-primary shadow-glow`
- Content fade: `animate-fade-in` on state change
- Button variant switch: `variant={active ? "default" : "outline"}`

### Color & Typography Usage

**Typography**:
- Slide titles: `font-bebas text-5xl md:text-7xl lg:text-8xl` (Bebas Neue)
- Section headers: `font-syne font-bold text-2xl md:text-4xl` (Syne)
- Body text: `font-manrope text-base md:text-lg` (Manrope)
- Pricing/metrics: `font-jetbrains text-sm` (JetBrains Mono)

**Colors**:
- Primary emphasis: `text-primary` (#00897B teal)
- Secondary accent: `text-accent-blue` (#1E3A5F navy)
- Muted text: `text-foreground/60` or `text-muted-foreground`
- Warning/risk: `text-destructive` or `text-amber-500`
- Success/budget: `text-success` or `text-green-500`

**Contrast Requirements**:
- Body text on white: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum

### Accessibility Checklist

- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] All interactive elements have focus states (`focus-visible:ring-2 focus-visible:ring-ring/50`)
- [ ] Text readable at minimum 16px for body
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader compatible (semantic HTML, ARIA where needed)
- [ ] Motion respects `prefers-reduced-motion`

### Component Implementation Notes

**shadcn/ui components to use**:
- Badge (variants: glow, gradient, destructive)
- Card, CardContent, CardHeader, CardTitle
- Button (variants: default, outline, ghost)
- Accordion (for Slide 04 mobile)

**Lucide-react icons**:
- Building2, Radar, Users, Lightbulb, MessageCircle (platforms)
- Shield, Code, Brain (components)
- AlertTriangle, CheckCircle (status)
- ChevronDown, ChevronUp (expand)

**Custom components needed**:
- None required - all patterns can use existing shadcn/ui

**State management**:
- `"use client"` directive on all slides
- `useState` for hover states (Slide 02)
- `useState` for toggle selection (Slide 03)
- `useState` for expanded section (Slide 04)

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "interconnected circular nodes with flowing communication pathways, organic network pattern suggesting digital community" --template concept-ai --ratio 16:9
tsx generate-image.ts "overlapping rectangular panels arranged in dashboard composition with gear shapes suggesting automation" --template concept-strategy --ratio 16:9
tsx generate-image.ts "concentric circular waves emanating from central point with dots representing signals" --template concept-ai --ratio 16:9
tsx generate-image.ts "interlocking geometric building blocks and modular puzzle pieces suggesting assembly" --template concept-innovation --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to /modules/reddit and test all 4 slides
```

## Notes

### Critical Design Decisions

1. **POC-Style Interactive Preference**: All slides prioritize dynamic, interactive demonstrations over static text-heavy designs following "Show, Don't Tell" philosophy
2. **Pattern-First Approach**: Every slide uses a proven pattern from components_inspiration/ or INTERACTIVE_PATTERNS.md
3. **Background Images Required**: Every slide has AI-generated background image at 10-15% opacity for visual enhancement
4. **Max 4 Slides Per Spec**: Ensures manageable scope and clear implementation boundaries
5. **Design System Compliance**: All slides strictly follow DESIGN_AESTHETICS.md specifications
6. **Russian to English**: Source content is in Russian - slides will use English translations

### Pattern Selection Rationale

| Slide | Pattern | Why Selected |
|-------|---------|--------------|
| 01 - Title | One-Screen Simplicity | Minimalist hero layout for maximum impact, establishes presentation tone |
| 02 - Platforms | Hover-Reveal Cards | 5 platforms need scannable overview with detail-on-demand, perfect for hover exploration |
| 03 - Monitoring | Button Toggle Comparison | 2-way comparison ideal for toggle pattern, creates memorable cognitive contrast |
| 04 - Components | Click-to-Expand Details | 4 categories with varying depth, accordion allows clean overview with deep-dive |

### Language Handling

- Source content in Russian (README.md)
- Slides will present content in English
- Preserve technical terms and pricing as-is
- Platform names remain unchanged (OGTool, GummySearch, etc.)

### Future Enhancements

- Consider adding Slide 05-08 for remaining research sections:
  - Shadowban risks and survival rules
  - Building custom system (economics, architecture)
  - Value-first response strategy
  - Conclusions and next steps
