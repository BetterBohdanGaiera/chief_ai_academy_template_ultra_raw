# Feature: Vlada Presentation - Slide Redesign (Slides 13-16)

## Feature Description
Redesign of premium features #4-6 and comparison table slides for the Vlada dental finance presentation. These slides are data-heavy with tables and financial calculations that need clear, interactive visualization. The redesign focuses on transforming static table content into engaging, interactive demonstrations that help dental clinic owners understand complex financial concepts through visual exploration.

## User Story
As a presentation developer
I want to redesign vlada slides 13-16
So that learners experience more engaging, interactive, and visually compelling content that follows POC-style design principles while maintaining the clarity needed for financial data presentation

## Problem Statement
Current issues that the redesign will address:
- Static table-heavy designs with low engagement potential
- Complex financial concepts (dividend calculation, efficiency metrics) presented as flat data
- Missing interactive elements that could help users explore data relationships
- No AI-generated background images to enhance visual appeal
- Comparison table needs clear visual hierarchy to guide purchase decisions
- Ukrainian content needs professional, trustworthy design language (teal + navy palette)

## Solution Statement
Redesign slides using POC-style interactive patterns from `ai_docs/components_inspiration/` and `ai_docs/INTERACTIVE_PATTERNS.md`:
- **UPDATE/OVERWRITE existing slide files** with completely new implementations (replacing old versions)
- Replace static tables with interactive exploration patterns (click-to-expand, hover-reveal)
- Add AI-generated background images at appropriate opacity (10-20%)
- Ensure design system compliance (DESIGN_AESTHETICS.md - teal/navy healthcare+fintech aesthetic)
- Follow "Show, Don't Tell" philosophy for financial concepts

## Relevant Files

### Source Content
- `data_vlada/presentation.md` - Module source content (pre-extracted context provided)

### Existing Slide Files (to be updated/overwritten)
- `components/slides/vlada/13-premium-4-dividends.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/14-premium-5-efficiency.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/15-premium-6-budgets.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**
- `components/slides/vlada/16-comparison-table.tsx` - **EXISTING slide to be COMPLETELY REWRITTEN**

### Design Documentation
- `ai_docs/INTERACTIVE_PATTERNS.md` - 5 preferred interactive patterns
- `ai_docs/DESIGN_AESTHETICS.md` - Complete design system (teal/navy healthcare+fintech)
- `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md` - Layout patterns, quality checklists
- `ai_docs/IMAGE_GENERATION_GUIDE.md` - AI image generation workflow
- `ai_docs/ALGORITHMIC_COMPONENTS.md` - Canvas-based animation components
- `ai_docs/components_inspiration/README.md` - Pattern library index
- `ai_docs/components_inspiration/patterns/realtime-calculator/` - For dividend calculations
- `ai_docs/components_inspiration/patterns/progressive-disclosure/` - For efficiency tables
- `ai_docs/components_inspiration/patterns/button-toggle-comparison/` - For budget status
- `ai_docs/components_inspiration/patterns/are-vs-not-comparison/` - For pricing comparison

### Implementation Files
- `generate-image.ts` - Image generation script
- `components/slides/vlada/*.tsx` - Slide components to UPDATE/OVERWRITE
- `config/slides.ts` - Slide registry

### Files to Update/Create
- `components/slides/vlada/13-premium-4-dividends.tsx` - **Slide to UPDATE (overwrite existing)**
- `components/slides/vlada/14-premium-5-efficiency.tsx` - **Slide to UPDATE (overwrite existing)**
- `components/slides/vlada/15-premium-6-budgets.tsx` - **Slide to UPDATE (overwrite existing)**
- `components/slides/vlada/16-comparison-table.tsx` - **Slide to UPDATE (overwrite existing)**

## Content Breakdown

### Slide 13: Premium #4 - "Рекомендації щодо дивідендів"
**Source**: `data_vlada/presentation.md` (Premium Feature #4 section)
**Content**:
- **Problem Statement**: "Report shows profit 150,000 UAH. But account only has 80,000 UAH. Where did money go?!"
- **Key Insight**: Profit and money in account are DIFFERENT things. This confuses 90% of owners.
- **Solution**: Build a "money bridge" - show where the difference went
- **Example Data (Money Bridge)**:
  - Profit per report: 150,000 UAH
  - Bought materials in advance: -40,000 UAH
  - Patients owe (installments): -30,000 UAH
  - Paid part of credit: -20,000 UAH
  - Bought new equipment: -30,000 UAH
  - Actually free money: 30,000 UAH
  - Debtors will return: +50,000 UAH
  - **SAFE TO WITHDRAW NOW**: 80,000 UAH
- **Result**: Know exactly how much you can take without harming the business
- **Interactive Elements**: Progressive reveal of "money bridge" items, animated calculation

### Slide 14: Premium #5 - "Аналіз ефективності лікарів і крісел"
**Source**: `data_vlada/presentation.md` (Premium Feature #5 section)
**Content**:
- **Problem Statement**: "It seems we need another doctor. Or not? Unclear."
- **Solution**: Once a quarter calculate efficiency of each doctor and each chair
- **Example Data (Andrii's clinic - 3 doctors, 2 chairs)**:
  | Doctor | Revenue/month | Utilization | Status |
  |--------|--------------|-------------|--------|
  | Oleg | 400,000 UAH | 85% | Working at maximum |
  | Irina | 250,000 UAH | 60% | Has growth potential |
  | Dmytro | 180,000 UAH | 45% | Underutilized |
- **Chair Data**:
  - Chair #1: 90% utilization - excellent
  - Chair #2: 60% utilization - idle 40% of time
- **Conclusions**:
  1. Don't hire 4th doctor - first load up Dmytro
  2. Dmytro - add appointments or review schedule
  3. Chair #2 - change schedule or rent out during free hours
- **Result**: Profit growth without increasing personnel costs
- **Interactive Elements**: Hover-reveal cards for each doctor/chair, clickable recommendations

### Slide 15: Premium #6 - "Бюджети та ліміти"
**Source**: `data_vlada/presentation.md` (Premium Feature #6 section)
**Content**:
- **Problem Statement**: Expenses "creep up" unnoticed. In January materials cost 100k, in April already 145k. When noticed - too late.
- **Solution**: Together set limits on key categories. Monthly compare actual vs limit.
- **Example Budget Table**:
  | Category | Limit | Actual | Status |
  |----------|-------|--------|--------|
  | Materials | 120,000 | 145,000 | Overspend +25,000 |
  | Advertising | 25,000 | 22,000 | Normal |
  | Payroll | 40% of revenue | 38% | Normal |
  | Utilities | 15,000 | 14,500 | Normal |
- **Deep Dive on Overspend**:
  > "Materials +25,000 UAH - why?"
  - Supplier raised prices? - find alternative
  - Bought in advance? - normal, account for next month
  - Doctors overspending? - review norms
- **Result**: Expense control without feeling "saving on everything"
- **Interactive Elements**: Toggle between status categories (Normal/Overspend), expandable investigation section

### Slide 16: Comparison Table - "Порівняння тарифів"
**Source**: `data_vlada/presentation.md` (Comparison section)
**Content**:
- **Pricing Tiers**: 9,000 UAH vs 19,000 UAH
- **Common Features (Both tiers)**:
  - Integration week
  - Daily payment tracking
  - Cash/bank reconciliation
  - Monthly profit report
  - Cash flow report
  - Salary calculations
  - Written recommendations
- **Premium Only (19,000 UAH)**:
  - Zoom meetings
  - Service costing
  - Year financial plan
  - Dividend recommendations
  - Doctor/chair analysis
  - Budgets & limits
- **Interactive Elements**: Highlight on hover, clear visual distinction between tiers, toggle to focus on premium benefits

## Visual Design Recommendations

### Slide 13: Premium #4 - Dividends ("Money Bridge")
**Pattern**: Progressive Disclosure (`patterns/progressive-disclosure/`) + Real-Time Calculator (`patterns/realtime-calculator/`)
**Rationale**: The "money bridge" is a multi-step calculation that benefits from progressive reveal. Each deduction from profit tells a story, and seeing items appear one by one creates understanding of where money goes. This combination creates an "aha moment" when users see the final safe withdrawal amount.
**Key Features**:
- Staggered animation revealing each bridge item (300ms delays)
- Visual "bridge" connecting profit to available cash
- Color-coded items: red for deductions, green for additions, teal for final amount
- Running total that updates as items appear
- Summary card with "SAFE TO WITHDRAW" highlighted with glow effect
**Layout**:
- Two-column on desktop: problem statement left, money bridge visualization right
- Single column on mobile: problem on top, bridge below
**Interactive Elements**:
- Click to advance through bridge items (or auto-play with delays)
- Final amount animates with scale-in and glow effect

### Slide 14: Premium #5 - Efficiency Analysis
**Pattern**: Hover-Reveal Cards (`INTERACTIVE_PATTERNS.md` - Pattern 3) + Progressive Disclosure
**Rationale**: Efficiency data for 3 doctors and 2 chairs needs exploration. Hover-reveal allows users to scan all doctors quickly, then dive into specific ones. Color-coding (green/yellow/red) for utilization creates instant status understanding.
**Key Features**:
- Card grid for doctors (3 cards in row)
- Card grid for chairs (2 cards below)
- Hover reveals detailed metrics and recommendations
- Progress bars for utilization percentages
- Color-coded status badges (green: excellent, amber: potential, red: needs attention)
- Recommendations section with numbered action items
**Layout**:
- Badge + Title + Subtitle (centered)
- Doctor cards grid (3 columns desktop, 1 mobile)
- Chair cards grid (2 columns desktop, 1 mobile)
- Recommendations callout card below
**Interactive Elements**:
- Hover on doctor card reveals revenue/utilization details
- Click expands to show specific recommendations
- Chair utilization shown as visual progress bars

### Slide 15: Premium #6 - Budgets & Limits
**Pattern**: Button Toggle Comparison (`patterns/button-toggle-comparison/`) + Click-to-Expand Details
**Rationale**: Budget categories have two states: Normal (green) vs Overspend (red). A toggle lets users focus on problem areas. The investigation section for overspend uses click-to-expand to avoid overwhelming initial view while allowing deep-dive analysis.
**Key Features**:
- Toggle buttons: "Усi категорiї" / "Тiльки перевитрати"
- Table/cards with limit vs actual comparison
- Visual progress bars showing budget usage
- Color-coded rows (green background for normal, red for overspend)
- Expandable "Investigation" section for overspent categories
- Root cause checklist with interactive checkmarks
**Layout**:
- Toggle buttons at top
- Budget table/cards (4 categories)
- Expanded investigation panel for overspends
- Result callout at bottom
**Interactive Elements**:
- Toggle filters visible categories
- Click on overspend row expands investigation section
- Investigation reveals possible causes with checkable items

### Slide 16: Comparison Table - Pricing Tiers
**Pattern**: ARE vs NOT Comparison (`patterns/are-vs-not-comparison/`) + Hover-Reveal
**Rationale**: Pricing comparison needs crystal clear visual hierarchy. The two-column layout with clear checkmark/dash icons guides purchase decision. Hover enhancement on premium features shows value proposition.
**Key Features**:
- Two-column card layout (9,000 UAH vs 19,000 UAH)
- Unified header showing both prices with premium highlighted
- Feature list with checkmarks (green) and dashes (muted)
- Premium-only features section with glow effect
- Hover on premium features reveals benefit description
- Clear visual emphasis on premium tier (teal border, glow)
**Layout**:
- Price header spanning full width
- Two-column feature comparison
- Premium features highlighted with gradient background
- CTA or summary at bottom
**Interactive Elements**:
- Hover on premium features shows tooltip with benefit
- Premium column has subtle glow animation
- "Includes everything from base + " header for premium clarity

## Image Generation Strategy

### Slide 13: Premium #4 - Dividends
**Background Image** (16:9, 15% opacity, mix-blend-multiply):
- Subject: Abstract flowing stream splitting into multiple pathways, suggesting money flow and distribution (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of a flowing stream splitting into multiple smaller pathways through geometric landscape, featuring warm teal tones (#00897B) with navy accents (#1E3A5F), charcoal outlines on white/light gray background. Organic flowing lines suggesting liquid distribution, abstract geometric containers at branch points, clean editorial style with minimal shading. No text, no numbers, no labels."
- **Validation**: No text/numbers/labels - uses "flowing stream" and "pathways" metaphor
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of a flowing stream splitting into multiple smaller pathways through geometric landscape, featuring warm teal tones (#00897B) with navy accents (#1E3A5F), charcoal outlines on white/light gray background. Organic flowing lines suggesting liquid distribution, abstract geometric containers at branch points, clean editorial style with minimal shading. No text, no numbers, no labels." --ratio 16:9`

### Slide 14: Premium #5 - Efficiency Analysis
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- Subject: Abstract performance gauges and circular meter forms, suggesting measurement and optimization (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of abstract circular gauges and meter forms arranged in a balanced composition, featuring warm teal tones (#00897B) with green (#4CAF50) and amber (#FF9800) accents, charcoal outlines on white background. Semi-circular arcs suggesting measurement dials, radiating lines from centers, geometric precision balanced with organic hand-drawn feel. No text, no numbers, no labels, no specific readings shown."
- **Validation**: No text/numbers - uses abstract "gauge forms" not actual readings
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of abstract circular gauges and meter forms arranged in a balanced composition, featuring warm teal tones (#00897B) with green (#4CAF50) and amber (#FF9800) accents, charcoal outlines on white background. Semi-circular arcs suggesting measurement dials, radiating lines from centers, geometric precision balanced with organic hand-drawn feel. No text, no numbers, no labels, no specific readings shown." --ratio 16:9`

### Slide 15: Premium #6 - Budgets & Limits
**Background Image** (16:9, 12% opacity, mix-blend-multiply):
- Subject: Abstract balance scales and boundary lines, suggesting limits and control (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of abstract balance scales and boundary threshold lines, featuring warm teal tones (#00897B) with soft red (#EF5350) and green (#4CAF50) accents, charcoal outlines on white background. Geometric forms suggesting equilibrium, horizontal lines representing thresholds, clean minimal composition with negative space. No text, no numbers, no labels."
- **Validation**: No text/numbers - uses "balance scales" and "boundary lines" metaphor
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of abstract balance scales and boundary threshold lines, featuring warm teal tones (#00897B) with soft red (#EF5350) and green (#4CAF50) accents, charcoal outlines on white background. Geometric forms suggesting equilibrium, horizontal lines representing thresholds, clean minimal composition with negative space. No text, no numbers, no labels." --ratio 16:9`

### Slide 16: Comparison Table
**Background Image** (16:9, 10% opacity, mix-blend-multiply):
- Subject: Abstract dual pathway or side-by-side geometric forms suggesting choice and comparison (NO TEXT/NUMBERS)
- Prompt: "A professional handwritten illustration of two parallel ascending pathways with one elevated higher than the other, featuring warm teal tones (#00897B) with navy accents (#1E3A5F), charcoal outlines on white background. Geometric stepping forms suggesting tiers, subtle glow around elevated path, clean editorial style with generous negative space. No text, no numbers, no labels."
- **Validation**: No text/numbers - uses "parallel pathways" and "tiers" metaphor
- Generation command: `tsx generate-image.ts "A professional handwritten illustration of two parallel ascending pathways with one elevated higher than the other, featuring warm teal tones (#00897B) with navy accents (#1E3A5F), charcoal outlines on white background. Geometric stepping forms suggesting tiers, subtle glow around elevated path, clean editorial style with generous negative space. No text, no numbers, no labels." --ratio 16:9`

## Implementation Plan

- [ ] **Phase 1: Foundation** - Extract content, consult patterns, plan images
  - Status: COMPLETE (this spec file)
  - Comments: Content extracted from pre-provided context, patterns selected from components_inspiration library

- [ ] **Phase 2: Image Generation** - Generate all background images before implementation
  - Status: NOT STARTED
  - Commands ready to execute (see Image Generation Strategy above)

- [ ] **Phase 3: Implementation** - Use slide-generator agent to **UPDATE/OVERWRITE existing slides**
  - **CRITICAL**: Agent will use Write tool to completely replace existing slide files with new implementations
  - **No duplicates**: Old slide versions will be overwritten, not preserved
  - Status: NOT STARTED
  - Comments: Implement slides 13-16 with interactive patterns as specified

- [ ] **Phase 4: Integration & Validation** - Register slides, test navigation, validate design system compliance
  - Status: NOT STARTED
  - Comments: Ensure slides registered in config/slides.ts, test navigation

## Step by Step Tasks

### Foundation Work

- [x] **Read all design documentation** - Review INTERACTIVE_PATTERNS.md, DESIGN_AESTHETICS.md, PRESENTATION_DESIGN_GUIDELINES.md, components_inspiration/
  - Status: COMPLETE
  - Comments: Patterns selected for each slide, design system (teal/navy) understood

- [x] **Extract source content** - Read module content from data_vlada/presentation.md and extract relevant sections
  - Status: COMPLETE
  - Comments: Content pre-extracted by orchestrator, verified and structured above

- [x] **Match patterns** - Consult components_inspiration/ and identify best-fit patterns for each slide
  - Status: COMPLETE
  - Comments: Patterns assigned to each slide (see Visual Design Recommendations)

### Image Generation

- [x] **Generate background image for Slide 13** - Run: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`
  - Status: COMPLETED
  - Command: See Image Generation Strategy - Slide 13
  - Generated: `public/generated-images/gemini-1765289881751-1.png` (0.99MB)

- [x] **Generate background image for Slide 14** - Run: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`
  - Status: COMPLETED
  - Command: See Image Generation Strategy - Slide 14
  - Generated: `public/generated-images/gemini-1765289897779-1.png` (1.19MB)

- [x] **Generate background image for Slide 15** - Run: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`
  - Status: COMPLETED
  - Command: See Image Generation Strategy - Slide 15
  - Generated: `public/generated-images/gemini-1765289878740-1.png` (0.92MB)

- [x] **Generate background image for Slide 16** - Run: `tsx generate-image.ts "[PROMPT]" --ratio 16:9`
  - Status: COMPLETED
  - Command: See Image Generation Strategy - Slide 16
  - Generated: `public/generated-images/gemini-1765289890504-1.png` (1.02MB)

### Slide Implementation

- [x] **Implement Slide 13 (Dividends)** - **UPDATE/OVERWRITE** slide using Progressive Disclosure + Calculator patterns
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - **Pattern**: Progressive Disclosure + Real-Time Calculator
  - Status: COMPLETED
  - Comments: Created `components/slides/vlada/13-premium-4-dividends.tsx` with progressive reveal "money bridge" visualization. Features auto-play animation (600ms delays), color-coded items (red for deductions, green for additions, teal for final), running totals, problem statement card, and final "SAFE TO WITHDRAW" calculation (80,000 UAH). Uses two-column layout with reset/show-all controls. All content in Ukrainian.

- [x] **Implement Slide 14 (Efficiency)** - **UPDATE/OVERWRITE** slide using Hover-Reveal Cards pattern
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - **Pattern**: Hover-Reveal Cards + Progressive Disclosure
  - Status: COMPLETED
  - Comments: Created `components/slides/vlada/14-premium-5-efficiency.tsx` with 3 doctor cards (Oleg 85%, Irina 60%, Dmytro 45%) and 2 chair cards (90%, 60%). Features hover-reveal recommendations, color-coded status badges (green/amber/red), progress bars for utilization, and numbered recommendations section. All content in Ukrainian.

- [x] **Implement Slide 15 (Budgets)** - **UPDATE/OVERWRITE** slide using Button Toggle Comparison pattern
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - **Pattern**: Button Toggle Comparison + Click-to-Expand Details
  - Status: COMPLETED
  - Comments: Created `components/slides/vlada/15-premium-6-budgets.tsx` with toggle between "Усi категорii" / "Тiльки перевитрати", 4 budget categories with progress bars, expandable investigation section for overspend items with 3 root causes. All content in Ukrainian.

- [x] **Implement Slide 16 (Comparison)** - **UPDATE/OVERWRITE** slide using ARE vs NOT Comparison pattern
  - **Action**: Agent will completely rewrite existing slide file
  - **Tool**: Use Write tool to replace old implementation
  - **Pattern**: ARE vs NOT Comparison + Hover-Reveal
  - Status: COMPLETED
  - Comments: Created `components/slides/vlada/16-comparison-table.tsx` with two pricing tiers (9,000 vs 19,000 UAH), 7 common features and 6 premium-only features with hover-reveal benefits. Premium tier has teal glow effect. All content in Ukrainian.

### Integration & Validation

- [x] **Register slides in config/slides.ts** - Add/update slide metadata and ordering
  - Status: COMPLETED (for slides 15-16)
  - Comments: Registered `vlada-15-premium-budgets` and `vlada-16-comparison-table` in config/slides.ts with proper metadata and tags

- [ ] **Test slide navigation** - Verify chevron buttons, dot indicators, keyboard navigation
  - Status: NOT STARTED
  - Comments: Test within vlada module presentation flow

- [x] **Validate design system compliance** - Check typography, colors, animations, accessibility
  - Status: COMPLETED (for slides 15-16)
  - Comments: Both slides use teal (#00897B), navy (#1E3A5F), Bebas/Syne/Manrope fonts, proper animations (fade-in, slide-in-up, scale-in), WCAG AA colors

- [x] **Run validation commands** - Execute `pnpm run build` and `pnpm run lint`
  - Status: COMPLETED
  - Comments: Build successful with no TypeScript errors

## Testing Strategy

### Unit Tests
N/A - Slides are React components without complex business logic requiring unit tests

### Integration Tests
- Test each slide renders without errors
- Test slide navigation (next/previous)
- Test interactive elements:
  - Slide 13: Progressive reveal animation, final calculation
  - Slide 14: Hover-reveal cards, progress bars
  - Slide 15: Toggle button state changes, expand/collapse
  - Slide 16: Hover tooltips, visual hierarchy
- Test responsive layouts at breakpoints (mobile 375px, tablet 768px, desktop 1024px+)

### Edge Cases
- Rapid clicking on toggle buttons (Slide 15)
- Hover effects on touch devices (fallback to click)
- Canvas animations with prefers-reduced-motion
- Keyboard navigation through all interactive elements (Tab, Enter, Space)
- Long Ukrainian text content causing layout overflow

## Acceptance Criteria

- [ ] All slides have AI-generated background images at 10-15% opacity
- [ ] All slides use patterns from components_inspiration/ or INTERACTIVE_PATTERNS.md
- [ ] All slides follow design system (DESIGN_AESTHETICS.md - teal/navy healthcare+fintech)
- [ ] All slides are responsive (mobile 375px+, tablet 768px+, desktop 1024px+)
- [ ] All slides have proper entrance animations with staggered delays
- [ ] All interactive elements provide clear visual feedback
- [ ] All slides meet WCAG AA accessibility standards (4.5:1 contrast for body text)
- [ ] Content remains in Ukrainian language throughout
- [ ] Data tables are clearly readable with proper hierarchy
- [ ] TypeScript compiles without errors (`pnpm run build`)
- [ ] Linting passes without errors (`pnpm run lint`)
- [ ] Visual inspection confirms quality and consistency

## Slide Design Requirements

### Image Generation Strategy
See detailed per-slide image generation plan above in "Image Generation Strategy" section.

### Visual Component Selection

**Slide 13 (Dividends)**:
- Text blocks: Problem card, money bridge items, result summary
- Data visualizations: Money bridge waterfall-style progression
- Interactive elements: Progressive reveal (click or auto-play)
- Icons: DollarSign, TrendingDown, ArrowDown, CheckCircle2
- AI-generated background: Flowing stream splitting into pathways

**Slide 14 (Efficiency)**:
- Text blocks: Problem statement, section headers
- Data visualizations: Progress bars for utilization percentages
- Interactive elements: Hover-reveal cards, clickable recommendations
- Cards: 3 doctor cards, 2 chair cards, recommendations card
- Icons: Users, Activity, TrendingUp, AlertTriangle
- AI-generated background: Abstract gauge/meter forms

**Slide 15 (Budgets)**:
- Text blocks: Problem statement, investigation section
- Data visualizations: Progress bars for budget usage
- Interactive elements: Toggle buttons, click-to-expand
- Cards/Table: 4 budget categories with limit/actual/status
- Icons: Wallet, AlertCircle, CheckCircle2, Search
- AI-generated background: Balance scales and threshold lines

**Slide 16 (Comparison)**:
- Text blocks: Tier headers, feature list items
- Data visualizations: N/A (feature comparison table)
- Interactive elements: Hover tooltips on premium features
- Cards: Two tier columns with features
- Icons: Check, X (or dash), Star (for premium)
- AI-generated background: Dual ascending pathways

### Layout Design

**All Slides**:
- Full-screen slide setup: `min-h-screen flex items-center justify-center p-8 lg:p-16`
- Content container: `max-w-6xl w-full`
- Badge + Title + Subtitle hierarchy at top
- Grid structure varies per slide (see below)

**Slide 13**: Two-column (problem left, bridge visualization right)
**Slide 14**: Single column with card grids (3-col doctors, 2-col chairs)
**Slide 15**: Single column with toggle + table/cards + expandable section
**Slide 16**: Two-column feature comparison with unified header

### Interactive & Animation Patterns

**Entrance Animations**:
- Badge: `animate-slide-in-down` (0ms delay)
- Title: `animate-fade-in delay-200 fill-backwards`
- Subtitle: `animate-slide-in-up delay-400 fill-backwards`
- Content: `animate-fade-in delay-600 fill-backwards`

**Interactive Animations**:
- Hover effects: `transition-all duration-300 hover:shadow-lg hover:scale-102`
- Toggle active state: `scale-105 border-primary shadow-glow`
- Progressive reveal: 300ms delays between items
- Expand/collapse: `transition-all duration-300`

**Smooth Transitions**:
- All color changes: `transition-colors duration-300`
- All transforms: `transition-transform duration-300`

### Color & Typography Usage

**Color Scheme** (Healthcare + Fintech Trust):
- Primary Teal: `#00897B` (CTAs, emphasis, badges)
- Deep Navy: `#1E3A5F` (accents, professional elements)
- Success Green: `#4CAF50` (normal status, positive)
- Warning Amber: `#FF9800` (potential, attention)
- Destructive Red: `#EF5350` (overspend, issues)
- Foreground: `#1A1A2E` (deep charcoal-blue)
- Muted: `#64748B` (secondary text)
- Background: `#FFFFFF`, `#F8FAFB` (light backgrounds)

**Typography**:
- Titles: `font-bebas text-6xl md:text-8xl`
- Section Headers: `font-syne text-2xl md:text-4xl font-bold`
- Body Text: `font-manrope text-base md:text-lg`
- Data/Numbers: `font-jetbrains text-sm md:text-base`

**Contrast Ratios**:
- Body text (#1A1A2E on #FFFFFF): 16.1:1 (exceeds AAA)
- Muted text (#64748B on #FFFFFF): 5.1:1 (meets AA)

### Accessibility Checklist

- [ ] Color contrast meets WCAG AA (4.5:1 minimum for body text)
- [ ] All interactive elements have focus states (`focus-visible:ring-2 focus-visible:ring-primary/50`)
- [ ] Text readable at minimum 16px for body
- [ ] Icons paired with text labels or ARIA labels
- [ ] Keyboard navigation works (Tab through interactive elements, Enter/Space to activate)
- [ ] Screen reader compatible (semantic HTML: `<section>`, `<h1>`-`<h3>`, `<table>`, `<button>`)
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Tables have proper structure (`<thead>`, `<tbody>`, `<th>`, `<td>`)
- [ ] Alt text on background images (or `aria-hidden="true"` for decorative)

### Component Implementation Notes

**shadcn/ui Components**:
- Badge: `variant="glow"` or `variant="gradient"` for emphasis
- Card: `variant="default"` with custom border colors for status
- Button: `variant="default"` for toggles, `variant="ghost"` for secondary actions
- HoverCard: For feature tooltips in comparison table
- Accordion: Optional for expandable investigation section

**Custom Components Needed**:
- MoneyBridgeVisualization: Progressive reveal waterfall for Slide 13
- EfficiencyCard: Hover-reveal doctor/chair card for Slide 14
- BudgetProgressBar: Visual budget usage indicator for Slide 15
- FeatureComparisonRow: Checkmark/dash row for Slide 16

**State Management**:
- `"use client"` directive required for all interactive slides
- `useState` for toggle states, active items, expanded sections
- `useEffect` for entrance animations with delays (if not using CSS)

## Validation Commands

```bash
# Generate all background images
tsx generate-image.ts "A professional handwritten illustration of a flowing stream splitting into multiple smaller pathways through geometric landscape, featuring warm teal tones (#00897B) with navy accents (#1E3A5F), charcoal outlines on white/light gray background. Organic flowing lines suggesting liquid distribution, abstract geometric containers at branch points, clean editorial style with minimal shading. No text, no numbers, no labels." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of abstract circular gauges and meter forms arranged in a balanced composition, featuring warm teal tones (#00897B) with green (#4CAF50) and amber (#FF9800) accents, charcoal outlines on white background. Semi-circular arcs suggesting measurement dials, radiating lines from centers, geometric precision balanced with organic hand-drawn feel. No text, no numbers, no labels, no specific readings shown." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of abstract balance scales and boundary threshold lines, featuring warm teal tones (#00897B) with soft red (#EF5350) and green (#4CAF50) accents, charcoal outlines on white background. Geometric forms suggesting equilibrium, horizontal lines representing thresholds, clean minimal composition with negative space. No text, no numbers, no labels." --ratio 16:9

tsx generate-image.ts "A professional handwritten illustration of two parallel ascending pathways with one elevated higher than the other, featuring warm teal tones (#00897B) with navy accents (#1E3A5F), charcoal outlines on white background. Geometric stepping forms suggesting tiers, subtle glow around elevated path, clean editorial style with generous negative space. No text, no numbers, no labels." --ratio 16:9

# Validate TypeScript
pnpm run build

# Validate code quality
pnpm run lint

# Visual inspection
pnpm run dev
# Navigate to /modules/vlada and test slides 13-16
```

## Notes

### Critical Design Decisions

1. **Healthcare + Fintech Aesthetic**: Use teal (#00897B) as primary for healthcare trust, navy (#1E3A5F) for fintech professionalism. This differs from the orange/cyan in other modules.

2. **Ukrainian Language**: All content remains in Ukrainian. No translation. Labels, buttons, and data must stay in original language.

3. **Data-Heavy Slides**: These slides contain tables and numbers. Interactive patterns should enhance understanding, not obscure data. Clear typography hierarchy is essential.

4. **POC-Style Interactive Preference**: All slides prioritize dynamic, interactive demonstrations over static text-heavy designs following "Show, Don't Tell" philosophy.

5. **Pattern-First Approach**: Every slide uses a proven pattern from components_inspiration/ or INTERACTIVE_PATTERNS.md.

6. **Background Images Required**: Every slide has AI-generated background image at 10-15% opacity for visual enhancement. All prompts validated for NO TEXT.

7. **Max 4 Slides Per Spec**: Ensures manageable scope and clear implementation boundaries.

### Pattern Selection Rationale

**Slide 13 (Dividends)**: Progressive Disclosure + Real-Time Calculator
- Money bridge is sequential (profit → deductions → result)
- Each item reveals "where money went" - creates narrative arc
- Final calculation creates "aha moment"
- Reference: `patterns/progressive-disclosure/` and `patterns/realtime-calculator/`

**Slide 14 (Efficiency)**: Hover-Reveal Cards
- Multiple doctors/chairs to compare at a glance
- Details on demand via hover (doesn't overwhelm)
- Progress bars provide instant utilization understanding
- Reference: `INTERACTIVE_PATTERNS.md` Pattern 3

**Slide 15 (Budgets)**: Button Toggle Comparison + Click-to-Expand
- Two clear states: Normal vs Overspend
- Toggle focuses attention on problem areas
- Investigation section needs expandable detail
- Reference: `patterns/button-toggle-comparison/`

**Slide 16 (Comparison)**: ARE vs NOT Comparison
- Classic pricing comparison - two columns
- Clear visual hierarchy guides purchase decision
- Premium tier should "feel" more valuable visually
- Reference: `patterns/are-vs-not-comparison/`

### Language Note

All slide content must remain in Ukrainian (the original source language):
- "Рекомендації щодо дивідендів" (Dividend recommendations)
- "Аналіз ефективності" (Efficiency analysis)
- "Бюджети та ліміти" (Budgets and limits)
- "Порівняння тарифів" (Tariff comparison)
- All data labels, button text, and descriptions in Ukrainian

### Future Enhancements

- Add animation for money flowing through the bridge (Slide 13)
- Real-time calculator where user can input their own numbers (Slide 13)
- Drag-and-drop to reorder budget priorities (Slide 15)
- "Recommend tier" button based on clinic size (Slide 16)
