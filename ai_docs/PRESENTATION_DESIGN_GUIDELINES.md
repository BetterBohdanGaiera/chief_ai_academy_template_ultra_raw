# Presentation Design Guidelines

## Feature Description
This document provides comprehensive design guidelines extracted from analyzing the existing AI-Eng-Executive presentation slides. These guidelines establish a consistent visual language, layout patterns, typography standards, and component usage rules to create professional presentation slides that match the established design system.

## User Story
As a presentation creator
I want to follow established design patterns and guidelines
So that I can create visually consistent, professional slides that match the existing presentation style

## Problem Statement
When creating new presentation slides or adapting existing designs to web format, there is a need for clear, documented guidelines covering positioning, element sizing, typography, color usage, spacing, and visual patterns to ensure consistency across all slides.

## Solution Statement
This specification documents the visual design patterns observed across 50+ presentation slides, providing a comprehensive reference guide for element positioning, sizing, typography scales, color usage, layout grids, spacing systems, and component patterns that can be directly implemented in Next.js/React components.

---

## 1. Layout & Positioning Patterns

### 1.1 Screen Format
- **Aspect Ratio**: 16:9 (widescreen presentation format)
- **Full-Screen Slides**: All slides use `min-h-screen` to fill the viewport
- **Horizontal Centering**: Primary content centered using `flex items-center justify-center`
- **Responsive Padding**: `p-8 lg:p-12` provides breathing room on all screen sizes

### 1.2 Grid Systems

#### Two-Column Split (50/50)
**Used for**: Concept slides with visual + text content
- **Pattern**: `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`
- **Left Column**: Visual elements (illustrations, diagrams, icons)
- **Right Column**: Text content (title, description, bullet points)
- **Example Slides**: Chief AI Officer (slide 20), AI Agent Developer (slide 23)

#### Three-Column Layout
**Used for**: Card-based content, comparison tables
- **Pattern**: `grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4`
- **Example Slides**: Summary (slide 39), Level 2 comparison (slide 10)

#### Five-Column Grid
**Used for**: Level progression, timeline visualizations
- **Pattern**: `grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6`
- **Responsive**: Collapses to single column on mobile
- **Current Implementation**: Slide-05-five-levels-overview.tsx

#### Full-Width Single Column
**Used for**: Title slides, section dividers, emphasis slides
- **Pattern**: `max-w-5xl mx-auto space-y-8` (centered, constrained width)
- **Example Slides**: Title slide (slide 1), "Key roles" (slide 19)

### 1.3 Content Positioning

#### Left-Aligned Visual, Right-Aligned Text
- Visual element occupies left 40-45% of screen
- Text content takes remaining 55-60%
- Vertical centering: `flex items-center`
- Gap between columns: `gap-8 lg:gap-12`

#### Center-Aligned Title + Content Below
- Badge at top: `flex justify-center`
- Title: `text-center space-y-3`
- Content grid below: `max-w-6xl mx-auto`
- Vertical spacing: `space-y-6 lg:space-y-8`

#### Asymmetric Emphasis Layout
- Large heading on right (60% width)
- Supporting visual on left (40% width)
- Used for impactful statement slides
- Example: "Why most don't get results" (slide 6)

---

## 2. Typography System

**AUTHORITATIVE REFERENCE:** `ai_docs/DESIGN_AESTHETICS.md` (Section "Typography System", lines 169-367)

This presentation uses a 4-font hierarchy (Bebas Neue for display, Syne for emphasis, Manrope for body, JetBrains Mono for code). For complete specifications including font weights, line heights, letter spacing, and usage guidelines, see the authoritative reference above.

### 2.2 Type Scale

#### Display/Hero Titles (Slide 1 style)
```tsx
className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]"
```
- Mobile: `text-5xl` (3rem / 48px)
- Tablet: `text-7xl` (4.5rem / 72px)
- Desktop: `text-8xl` (6rem / 96px)
- Line height: 1.05 (extra tight for impact)
- Font weight: bold (700)

#### Section Titles (Slide 19 style)
```tsx
className="text-6xl md:text-8xl lg:text-9xl font-bold"
```
- Mobile: `text-6xl` (3.75rem / 60px)
- Desktop: `text-8xl` to `text-9xl` (6-8rem / 96-128px)
- Usage: Single-word emphasis slides ("Key roles")
- Color: Black with orange accent color

#### Standard Slide Titles
```tsx
className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight"
```
- Mobile: `text-4xl` (2.25rem / 36px)
- Desktop: `text-6xl` (3.75rem / 60px)
- Line height: `leading-tight` (1.25)
- Used for: Content slide headers (slide 4, 10, 20)

#### Subtitles/Taglines
```tsx
className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
```
- Mobile: `text-2xl` (1.5rem / 24px)
- Desktop: `text-4xl` (2.25rem / 36px)
- Color: Orange primary brand color
- Font weight: semibold (600)

#### Body Text (Large)
```tsx
className="text-lg md:text-xl text-muted-foreground"
```
- Mobile: `text-lg` (1.125rem / 18px)
- Desktop: `text-xl` (1.25rem / 20px)
- Color: Muted gray for secondary information

#### Body Text (Standard)
```tsx
className="text-sm md:text-base"
```
- Mobile: `text-sm` (0.875rem / 14px)
- Desktop: `text-base` (1rem / 16px)
- Used in: Cards, bullet points, descriptions

#### Small Text/Captions
```tsx
className="text-xs md:text-sm text-muted-foreground"
```
- Mobile: `text-xs` (0.75rem / 12px)
- Desktop: `text-sm` (0.875rem / 14px)
- Usage: Metadata, footnotes, image captions

### 2.3 Typography Utilities

#### Text Wrapping & Balance
- `text-balance`: Balanced line breaks for headings (prevents orphans)
- `text-pretty`: Improved wrapping for body text
- Example: Slide 2a uses both for optimal readability

#### Line Heights
- `leading-[1.05]`: Extra tight (display titles)
- `leading-tight`: 1.25 (section headings)
- `leading-relaxed`: 1.625 (body paragraphs)
- `leading-normal`: 1.5 (default)

#### Tracking
- `tracking-tight`: -0.025em (all bold headings)
- Improves readability at large sizes
- Applied to all display and section titles

---

## 3. Color System

### 3.1 Brand Colors (from globals.css)

#### Primary Orange
```css
--primary: oklch(0.65 0.2 35); /* Vibrant orange */
```
- **Hex equivalent**: Approximately #F97316
- **Usage**:
  - Primary CTAs and accents
  - Subtitle text for emphasis
  - Icon highlights
  - Border accents on featured cards
  - Circle badges with numbers (slide 39)

#### Background & Foreground
```css
--background: oklch(1 0 0); /* Pure white */
--foreground: oklch(0.15 0 0); /* Deep charcoal */
```
- White background for clean, professional look
- Deep charcoal (#262626 approx) for maximum readability

#### Muted Colors
```css
--muted: oklch(0.96 0 0); /* Light gray background */
--muted-foreground: oklch(0.5 0 0); /* Medium gray text */
```
- Muted backgrounds: Cards, callouts (slide 4 numbered items)
- Muted text: Secondary descriptions, metadata

#### Warning/Alert
```css
--warning: oklch(0.7 0.22 70); /* Yellow-orange */
```
- Used for: Cautionary items, attention-grabbing elements
- Example: Orange-bordered cards indicating issues (slide 10)

#### Transformation/Success
```css
--transformation: oklch(0.65 0.2 35); /* Orange */
```
- Indicates positive change, growth, success states
- Matches primary orange for brand consistency

### 3.2 Color Usage Patterns

#### Text Colors
- **Primary headings**: `text-foreground` (deep charcoal)
- **Emphasized text**: `text-primary` (orange)
- **Secondary text**: `text-muted-foreground` (medium gray)
- **Inverse text**: `text-primary-foreground` (white on orange)

#### Background Patterns
- **Slide backgrounds**: `bg-background` (white) or `bg-gradient-to-br from-background to-primary/5`
- **Card backgrounds**: `bg-muted/20` for subtle elevation
- **Highlighted cards**: `bg-gradient-to-br from-yellow-500/20 to-primary/20`

#### Border Colors
- **Standard borders**: `border-border` (light gray)
- **Accent borders**: `border-primary` or `border-primary/60`
- **Subtle borders**: `border-border/30` to `border-border/50`

#### Gradients
```tsx
className="bg-gradient-to-br from-background via-background to-primary/5"
```
- Subtle gradient from white to very light orange tint
- Creates depth without overwhelming content
- Used on title slides and section dividers

---

## 4. Spacing & Rhythm

### 4.1 Container Spacing
```tsx
// Slide-level padding
className="p-8 lg:p-12"
// Mobile: 2rem (32px), Desktop: 3rem (48px)

// Content container spacing
className="space-y-6 lg:space-y-8"
// Mobile: 1.5rem (24px), Desktop: 2rem (32px)
```

### 4.2 Content Block Spacing

#### Tight Spacing (Related Elements)
```tsx
className="space-y-3"  // 0.75rem / 12px
```
- Used for: Badge + Title, Title + Subtitle
- Example: Slide 2a header structure

#### Standard Spacing
```tsx
className="space-y-4"  // 1rem / 16px
className="space-y-6"  // 1.5rem / 24px
```
- Default for content sections
- Card internal padding: `p-4` (1rem)

#### Generous Spacing
```tsx
className="space-y-8 lg:space-y-10"  // 2rem - 2.5rem
```
- Used for: Major section divisions
- Title slide spacing between elements

### 4.3 Grid Gaps
```tsx
// Tight grid (cards, items)
className="gap-3"  // 0.75rem / 12px

// Standard grid
className="gap-4 md:gap-6"  // 1rem - 1.5rem

// Generous grid (two-column layouts)
className="gap-8 lg:gap-12"  // 2rem - 3rem
```

### 4.4 Padding Scale
- **Badge**: `px-4 py-2` or `px-6 py-3` (larger for hero slides)
- **Cards**: `p-4` (standard), `p-6` (featured)
- **Buttons**: `px-6 py-3` (standard), `px-8 py-4` (large)

---

## 5. Visual Components & Patterns

### 5.1 Badges

#### Standard Badge
```tsx
<Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
  Module 01: AI State & Opportunity
</Badge>
```
- **Purpose**: Section labels, slide categories
- **Style**: Outline with orange border
- **Position**: Top of slide, centered
- **Typography**: `text-sm`, medium weight

#### Hero Badge (Title Slides)
```tsx
<Badge variant="outline" className="text-sm px-6 py-3 border-primary text-primary font-medium">
  Chief AI Academy
</Badge>
```
- Larger padding for prominence
- Same color scheme, emphasized presence

### 5.2 Cards

#### Standard Card
```tsx
<Card className="border-border/50 bg-muted/20">
  <CardContent className="p-4 text-center">
    <h3 className="text-lg font-bold mb-2">Title</h3>
    <p className="text-sm text-muted-foreground">Description</p>
  </CardContent>
</Card>
```
- Light background, subtle border
- Used for: Non-emphasized content

#### Highlighted Card (Featured)
```tsx
<Card className="border-primary/60 bg-gradient-to-br from-yellow-500/20 to-primary/20">
  <CardContent className="p-4 text-center">
    <Icon className="h-7 w-7 text-primary mx-auto mb-2" />
    <h3 className="text-lg font-bold mb-2">Title</h3>
    <p className="text-sm text-muted-foreground">Description</p>
  </CardContent>
</Card>
```
- Orange gradient background
- Primary-colored border
- Icon at top (lucide-react)
- Used for: Key points, featured items

#### Warning/Alert Card
```tsx
<Card className="border-warning bg-warning/10">
  <CardContent className="p-4">
    <Icon className="h-5 w-5 text-warning mb-2" />
    <h4 className="text-base font-bold mb-1">Warning Title</h4>
    <p className="text-sm">Description text</p>
  </CardContent>
</Card>
```
- Used for: Issues, challenges, things to avoid
- Example: Slide 10 "Doesn't match processes"

### 5.3 Icons & Visual Elements

#### Icon Sizing
- **Small**: `h-5 w-5` (20px) - Inline with text, checkmarks
- **Medium**: `h-7 w-7` (28px) - Card headers
- **Large**: `h-10 w-10` (40px) - Feature highlights

#### Icon Placement Patterns
```tsx
// Checkmark list items
<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />

// Card header icon
<Lightbulb className="h-7 w-7 text-primary mx-auto mb-2" />
```
- Always use `shrink-0` to prevent icon compression
- `mt-1` for vertical alignment with multi-line text

#### Illustrations/Diagrams
- **Size**: `max-w-xs` to `max-w-lg` (varies by content complexity)
- **Aspect**: Maintain aspect ratio with `h-auto`
- **Styling**: `rounded-xl shadow-lg` for polish
- **Position**: Centered or left-aligned in grid layouts
- **Examples**:
  - Network diagram (slide 1): Complex, organic shapes
  - Isometric blocks (slide 4): Geometric, structured
  - Hand + puzzle (slide 10): Conceptual, illustrative

### 5.4 Numbered Circle Badges

Pattern seen in slide 39 (Summary):
```tsx
<div className="relative">
  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
    <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold shadow-lg">
      1
    </div>
  </div>
  <Card>
    <CardContent className="pt-8">
      {/* Content */}
    </CardContent>
  </Card>
</div>
```
- Circle: 48px diameter, bold number
- Positioned above card with absolute positioning
- Creates visual hierarchy and numbered sequence

---

## 6. Content Patterns by Slide Type

### 6.1 Title/Hero Slide
**Structure**:
1. Badge (top, centered)
2. Main title (large, bold)
3. Subtitle (medium, orange)
4. Supporting metadata (small, gray)
5. Optional hero image
6. Decorative background gradient

**Layout**: Single column, vertically centered
**Max Width**: `max-w-5xl`
**Example**: Slide 1

### 6.2 Section Divider
**Structure**:
1. Large keyword with mixed colors ("Key" in black, "roles" in orange)
2. Small subtitle below

**Layout**: Minimal, centered
**Typography**: Massive (text-9xl range)
**Purpose**: Mental break, topic transition
**Example**: Slide 19

### 6.3 Two-Column Concept Slide
**Structure**:
1. Badge (top, centered)
2. Title (centered or left-aligned)
3. Two-column grid:
   - Left: Illustration/diagram
   - Right: Content (text, cards, bullets)

**Layout**: `grid md:grid-cols-2`
**Gap**: `gap-8 lg:gap-12`
**Example**: Slide 20 (Chief AI Officer), Slide 23 (AI Agent Developer)

### 6.4 List/Enumerated Slide
**Structure**:
1. Badge + Title
2. Subtitle/description
3. Numbered/bulleted list (often in cards)

**Pattern**: Vertical stack or grid of cards
**Numbering**: Circular badges or numeric prefixes
**Example**: Slide 4 (numbered problem statements)

### 6.5 Comparison Slide (Before/After)
**Structure**:
1. Title
2. Two-section layout:
   - "BEFORE" section (gray background)
   - "AFTER" section (subtle green/success tint)
3. Bullet lists in each section

**Visual Cue**: Background color differentiation
**Typography**: "BEFORE"/"AFTER" in all caps, bold
**Example**: Slide 45 (Automation example)

### 6.6 Diagram/Visualization Heavy
**Structure**:
1. Title (top or side)
2. Large central diagram/visualization
3. Optional legend or explanation below

**Image Size**: Up to 80% of content area
**Layout**: Center-focused
**Example**: Slide 27 (Context Engineering diagram)

### 6.7 Summary/Conclusion Slide
**Structure**:
1. "Summary" title
2. Numbered cards in grid (3-column typical)
3. Priority statement or call-to-action below

**Cards**: Numbered with circular badges
**Emphasis**: Bottom CTA often highlighted in orange
**Example**: Slide 39

---

## 7. Interactive & Animation Patterns

**AUTHORITATIVE REFERENCE:** `ai_docs/INTERACTIVE_PATTERNS.md` (Complete pattern implementations and examples)

### 7.0 Design Philosophy: Show, Don't Tell

**CRITICAL PRINCIPLE**: Prefer interactive, visual demonstrations over static text-heavy slides.

The most effective slides share a common trait: they **show** concepts rather than just describe them. Executives learn better by:
- Interacting with toggles to see dramatic differences
- Watching animations that demonstrate time-based processes
- Hovering to explore options at their own pace
- Clicking to expand and compare detailed choices
- Using mini POCs that prove concepts work

**When designing a new slide, always ask**: *"Can I demonstrate this concept instead of just describing it?"*

### 7.1 Preferred Interactive Patterns

**For complete implementations with full code examples**, see `ai_docs/INTERACTIVE_PATTERNS.md`.

**Quick Pattern Reference:**

1. **Interactive Toggle/Comparison** - Before/after scenarios, poor vs excellent execution
2. **Canvas Animations** - Time-based processes, iteration cycles, network effects
3. **Hover-Reveal Cards** - Exploring multiple options with details on demand
4. **Click-to-Expand Details** - Decision frameworks, detailed comparisons
5. **Mini POCs/Interactive Demos** - Teaching complex concepts through interaction

**Pattern Selection Decision Tree:**
- Compare two scenarios? → Interactive Toggle/Comparison
- Show process over time? → Canvas Animations
- Present multiple options? → Hover-Reveal Cards
- Require detailed comparison? → Click-to-Expand Details
- Explain complex concept? → Mini POC/Interactive Demo

### 7.2 Background Animations

For slides with interactive foreground content, enhance with subtle background animations. Keep opacity very low (5-15%), use slow movement (10-20 second durations), and never compete with foreground interactivity.

See `ai_docs/INTERACTIVE_PATTERNS.md` for complete background animation patterns and examples.

### 7.3 Entrance Animations

Based on existing tw-animate-css import:

#### Staggered Entrance Pattern
```tsx
<Badge className="animate-slide-in-down" />
<h1 className="animate-fade-in delay-200 fill-backwards" />
<p className="animate-slide-in-up delay-500 fill-backwards" />
<div className="animate-fade-in delay-700 fill-backwards" />
```

**Timing sequence**:
- Badge: 0ms (immediate)
- Title: 200ms delay
- Subtitle: 500ms delay
- Content: 700ms delay

**Critical**: Always use `fill-backwards` with delays to prevent content flash

#### Card Grid Stagger
```tsx
{items.map((item, idx) => (
  <Card
    key={item.id}
    className={`animate-fade-in delay-${idx * 200 + 300} fill-backwards`}
  >
))}
```

### 7.4 Hover States

```tsx
className="transition-all duration-300 hover:shadow-xl hover:scale-105"
```

**Standard hover pattern**:
- Duration: 300ms (not 600ms - faster feels more responsive)
- Scale: 102 for subtle hover, 105 for active selection
- Shadow: Intensifies for depth
- Border: Optional color change

**For interactive cards**:
```tsx
className={`
  transition-all duration-300 cursor-pointer
  ${isActive
    ? "scale-105 border-primary shadow-glow"
    : "hover:scale-102 border-border"
  }
`}
```

### 7.5 Focus States

```tsx
className="outline-ring/50"
```

- All focusable elements show orange ring
- Ensures keyboard accessibility
- Defined globally in base layer
- Critical for WCAG AA compliance

### 7.6 Pattern Selection Decision Tree

Use this guide when designing slides:

**Does the slide compare two scenarios?**
→ Use Interactive Toggle/Comparison (Pattern 1)

**Does it show a process over time?**
→ Use Canvas Animations (Pattern 2)

**Does it present multiple options to explore?**
→ Use Hover-Reveal Cards (Pattern 3)

**Does it require detailed comparison of choices?**
→ Use Click-to-Expand Details (Pattern 4)

**Does it explain a complex concept that can be demonstrated?**
→ Build a Mini POC/Interactive Demo (Pattern 5)

**None of the above?**
→ Consider how to make it more interactive before defaulting to static content

---

## 8. Responsive Breakpoints

### 8.1 Tailwind Breakpoints Used
- **sm**: 640px (rarely used, mobile-first approach)
- **md**: 768px (tablet - major layout shifts)
- **lg**: 1024px (desktop - typography and spacing increases)
- **xl**: 1280px (not commonly used in current slides)

### 8.2 Responsive Patterns

#### Typography Progression
```tsx
"text-4xl md:text-6xl lg:text-7xl"
```
Mobile → Tablet → Desktop
36px → 60px → 72px

#### Grid Collapse
```tsx
"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```
Stacked → 2-col → 3-col

#### Spacing Expansion
```tsx
"p-8 lg:p-12"
"space-y-6 lg:space-y-8"
"gap-4 md:gap-6 lg:gap-8"
```
More generous spacing on larger screens

---

## 9. Accessibility Guidelines

### 9.1 Color Contrast
- **Body text**: Minimum 4.5:1 (WCAG AA)
  - Deep charcoal (#262626) on white exceeds this
- **Large text** (18px+): Minimum 3:1
  - Orange primary on white: ~3.5:1 (acceptable for large text only)

### 9.2 Focus Indicators
- All interactive elements: Visible orange ring on focus
- Ring opacity: 50% (`ring/50`)
- Keyboard navigation fully supported

### 9.3 Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- `<section>` for slide containers
- Landmarks for screen readers

### 9.4 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```
Respects user preference to minimize animations

### 9.5 Alt Text Standards
All images must have descriptive alt text:
```tsx
alt="Modern pyramid diagram showing three tiers of AI adoption with glowing blue apex"
```
- Describe visual content functionally
- Include relevant context (colors, shapes, meaning)

---

## 10. Image & Asset Guidelines

### 10.1 Illustration Style
**Characteristics observed**:
- **Line art style**: Clean, outlined illustrations
- **Color palette**: Black outlines, orange accents, minimal color
- **Themes**: Technology, business, connectivity, AI concepts
- **Complexity**: Simple to moderate (avoid visual clutter)

**Examples**:
- Network diagrams: Nodes and connections (slide 1)
- Isometric objects: 3D blocks, tools (slide 4)
- People: Line-drawn figures in professional settings (slide 6, 20)
- Charts/Graphs: Data visualizations with orange highlights (slide 39)

### 10.2 Image Formats
- **Preferred**: PNG with transparency
- **Storage**: `/public/generated-images/` directory
- **Naming**: Descriptive, kebab-case (e.g., `gemini-1762957041486-1.png`)

### 10.3 Image Sizing
```tsx
// Small diagram/icon
className="w-full max-w-xs h-auto rounded-xl shadow-lg"

// Medium illustration
className="w-full max-w-md h-auto rounded-xl shadow-lg"

// Large hero image
className="w-full max-h-64 object-contain rounded-xl shadow-2xl"
```

### 10.4 Shadows & Borders
- **Standard**: `shadow-lg` (medium elevation)
- **Hero images**: `shadow-2xl` (dramatic elevation)
- **Rounded corners**: `rounded-xl` (12px radius)

---

## 11. Component Library Usage

**AUTHORITATIVE REFERENCE:** `ai_docs/DESIGN_AESTHETICS.md` (Section "Component Variants" - lines 883-1095)

**For complete component specifications including all custom variants (Badge has 6 variants, Card has 5 variants, Button has 7 variants), see the DESIGN_AESTHETICS.md reference above.**

### 11.1 shadcn/ui Components
Common usage patterns from existing slides:

#### Badge
```tsx
import { Badge } from "@/components/ui/badge"
```
- **Common variants**: `outline`, `default`, `secondary`, `glow`, `gradient`, `brutal`
- See DESIGN_AESTHETICS.md for complete variant specifications and use cases

#### Card & CardContent
```tsx
import { Card, CardContent } from "@/components/ui/card"
```
- **Main content container** for slide sections
- **Always use CardContent** for proper padding
- See DESIGN_AESTHETICS.md for 5 custom variants (layered, glow, brutal, glass)

#### Icons (lucide-react)
```tsx
import { CheckCircle2, Lightbulb, TrendingUp, Zap, Users } from "lucide-react"
```
Common icons:
- **CheckCircle2**: Bullet points, completed items
- **Lightbulb**: Ideas, insights
- **TrendingUp**: Growth, improvement
- **Zap**: Speed, efficiency
- **Users**: Team, collaboration
- **AlertTriangle**: Warnings, issues

### 11.2 Potential Components (Not Yet Used)
Based on slide analysis, these could be useful:
- **Accordion**: Expandable FAQ sections
- **Tabs**: Multiple content views on one slide
- **HoverCard**: Additional info on hover
- **Progress**: Completion indicators
- **Separator**: Section dividers

---

## 12. Content Writing Guidelines

### 12.1 Headline Style
- **Title case** for main titles
- **Sentence case** for subtitles and body text
- **All caps** for emphasis labels ("BEFORE", "AFTER", "EXAMPLE")

### 12.2 Tone & Voice
- **Professional**: Executive-level language
- **Direct**: Clear, actionable statements
- **Specific**: Use numbers, metrics, concrete examples
- **Balanced**: Acknowledge challenges while presenting solutions

### 12.3 Bullet Point Best Practices
- Start with action verbs or clear nouns
- Keep to one line when possible (max two lines)
- Use parallel structure (all start similarly)
- Lead with the key insight, support follows

Example from Slide 4:
- ❌ "ChatGPT, Claude — used as desired"
- ✅ "ChatGPT, Claude — used as desired. No knowledge sharing"

### 12.4 Number Formatting
- Use numerals for all numbers (2-3 not two-three)
- Include units (%, $, hours, months)
- Format large numbers: 10-30% or $12,000/month
- Use ranges for estimates: 75-85 minutes

---

## 13. Technical Implementation Notes

### 13.1 Component Structure Template
```tsx
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { IconName } from "lucide-react"

export function SlideXXName() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-6xl w-full space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Module XX: Topic
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            Slide Title
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
            Subtitle or description
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Content blocks */}
        </div>
      </div>
    </section>
  )
}
```

### 13.2 File Naming Convention
- Format: `slide-XX-descriptive-name.tsx`
- XX: Two-digit slide number (01, 02, etc.)
- Use kebab-case for multi-word names
- Example: `slide-15a-level-4-economics-comparison.tsx`

### 13.3 Import Order
1. React/Next.js imports
2. Component library imports (shadcn/ui)
3. Icon imports (lucide-react)
4. Local component imports
5. Utility imports

### 13.4 Client Components
Use `"use client"` directive when needed for:
- Interactive elements (buttons, hovers)
- State management (useState, useEffect)
- Event handlers (onClick, onChange)

---

## 14. Quality Checklist

Before considering a slide complete, verify:

### Visual Design
- [ ] Full-screen height achieved (`min-h-screen`)
- [ ] Content properly centered
- [ ] Responsive padding applied (`p-8 lg:p-12`)
- [ ] Typography scales correctly across breakpoints
- [ ] Orange accent color used appropriately
- [ ] Sufficient white space between elements
- [ ] Images have proper sizing and shadows

### Accessibility
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] All images have descriptive alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Focus states visible on interactive elements
- [ ] Semantic HTML used throughout

### Content
- [ ] Badge indicates module/section
- [ ] Title is clear and concise
- [ ] Subtitle provides context
- [ ] Content is scannable (bullet points, cards)
- [ ] No orphaned words in headings (use `text-balance`)
- [ ] Numbers and metrics formatted consistently

### Technical
- [ ] Component is properly exported
- [ ] File naming follows convention
- [ ] No TypeScript errors
- [ ] Responsive behavior tested
- [ ] No horizontal scroll on mobile

### Performance
- [ ] Images optimized (PNG/WebP)
- [ ] No unnecessary re-renders
- [ ] Lazy loading considered for off-screen images
- [ ] Build completes without warnings

---

## 15. Common Patterns Quick Reference

### Pattern 1: Simple Title Slide
```tsx
<section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
  <div className="max-w-5xl w-full text-center space-y-8">
    <Badge variant="outline" className="text-sm px-6 py-3 border-primary text-primary font-medium">
      Category
    </Badge>
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
      Main Title
    </h1>
    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary text-balance">
      Subtitle
    </p>
  </div>
</section>
```

### Pattern 2: Content with Sidebar Visual
```tsx
<section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
  <div className="max-w-6xl w-full space-y-6">
    <div className="text-center space-y-3">
      <Badge>Module</Badge>
      <h2 className="text-4xl md:text-6xl font-bold">Title</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div className="flex items-center justify-center">
        <img src="/path" alt="Description" className="max-w-md" />
      </div>
      <div className="space-y-4">
        {/* Content cards or text */}
      </div>
    </div>
  </div>
</section>
```

### Pattern 3: Card Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  {items.map((item, i) => (
    <Card key={i} className="border-border/50 bg-muted/20">
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

### Pattern 4: Checkmark List
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  {points.map((point, i) => (
    <div key={i} className="flex items-start gap-2">
      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
      <p className="text-sm md:text-base">{point}</p>
    </div>
  ))}
</div>
```

---

## 16. Future Enhancements

### Planned Improvements
1. **Animation Library**: Full tw-animate-css integration
   - Entrance animations for content blocks
   - Staggered list item reveals
   - Smooth slide transitions

2. **Interactive Elements**:
   - Click-to-reveal details (HoverCard, Popover)
   - Expandable sections (Accordion)
   - Tab-based content views

3. **Data Visualizations**:
   - Recharts integration for live charts
   - Interactive hover states on data points
   - Animated progress bars

4. **Advanced Layouts**:
   - Timeline visualizations
   - Process flow diagrams
   - Organizational charts

### Design System Evolution
- **Component Library Expansion**: Create reusable slide templates
- **Theme Variants**: Support for different presentation styles
- **Print Stylesheets**: PDF export optimization
- **Dark Mode**: Alternative color scheme (already in CSS, needs implementation)

---

## Conclusion

These guidelines synthesize the visual language, layout patterns, and technical standards observed across the existing AI-Eng-Executive presentation. By following these specifications, new slides will maintain visual consistency, professional polish, and technical quality that matches the established design system.

**Key Takeaways**:
1. **Consistency is king**: Follow the type scale, spacing system, and color palette religiously
2. **Mobile-first responsive**: All layouts must work from 375px to 1920px+ screens
3. **Accessibility matters**: Meet WCAG AA standards, provide focus states, use semantic HTML
4. **Orange is the accent**: Use sparingly for maximum impact
5. **White space is strategic**: Don't fear generous padding and spacing
6. **Professional tone**: Executive-level content deserves executive-level design

Use this document as the single source of truth when creating new presentation slides or updating existing ones.
