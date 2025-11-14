# Design Aesthetics Guide

**Chief AI Academy Executive Presentation**
**Design System**: Brutalist-Minimalism Meets Retro-Futuristic

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography System](#typography-system)
4. [Animation System](#animation-system)
5. [Shadow & Glow Effects](#shadow--glow-effects)
6. [Background Patterns](#background-patterns)
7. [Component Variants](#component-variants)
8. [Layout Principles](#layout-principles)
9. [Accessibility Standards](#accessibility-standards)
10. [Best Practices](#best-practices)

---

## Design Philosophy

### Core Aesthetic: Brutalist-Minimalism Meets Retro-Futuristic

This presentation employs a distinctive hybrid design language that balances:

**Brutalist Elements**:
- Bold, unadorned typography (Bebas Neue display font)
- High contrast color schemes (charcoal + electric orange)
- Geometric patterns and grid systems
- Unapologetic use of space and scale
- Hard edges and angular compositions

**Retro-Futuristic Touches**:
- Neon-style glows and shadows
- Analog film grain texture overlays
- Warm atmospheric gradient meshes
- Cyan accent color (sparingly used)
- Subtle animations that feel premium

**Minimalist Foundation**:
- Clean layouts with generous white space
- Purposeful restraint in color usage
- One key message per slide
- Strategic use of visual hierarchy
- Clarity over decoration

### Design Principles

1. **Purposeful Restraint**: Orange is powerful because it's used sparingly (10-20% of visual elements)
2. **Rhythm Through Staggering**: Nothing appears all at once; orchestrated entrance sequences guide attention
3. **Depth Through Layering**: Multiple subtle effects (gradient + pattern + grain) create richness
4. **Hierarchy Through Scale**: Typography jumps dramatically (14px to 128px) to establish clear importance
5. **Accessibility First**: Every visual effect has a reduced-motion fallback and meets WCAG AA standards
6. **Analog in Digital**: Grain textures, glows, and subtle rotations humanize the digital presentation

---

## Color Palette

### Primary Colors

#### Electric Orange (Brand Identity)
```css
--primary: #FF4D00
--primary-oklch: oklch(0.65 0.2 35)
--primary-glow: rgba(255, 77, 0, 0.4)
--primary-intense: #FF6A00
--primary-dark: #CC3D00
```

**Usage**:
- Primary CTAs and buttons
- Keyword emphasis in hero titles
- Badge backgrounds
- Focus states and interactive elements
- Glow effects (shadows)

**Contrast Ratios**:
- On #0A0A0A (dark): 5.8:1 (WCAG AA for large text)
- On #FAFAFA (light): 3.2:1 (use for large text only)

#### Neon Cyan (Accent - Rare)
```css
--accent-blue: #00D9FF
--accent-blue-oklch: oklch(0.75 0.15 190)
--accent-blue-glow: rgba(0, 217, 255, 0.3)
--accent-blue-dark: #00BBFF
```

**Usage**:
- Level 5 slides only (represents futuristic AI)
- Rare accent color (< 5% of slides)
- Creates visual surprise and progression

### Base Colors

#### Backgrounds
```css
--background-dark: #0A0A0A    /* Deep charcoal - primary background */
--background-light: #F5F5F0   /* Off-white - rarely used */
```

#### Foreground Text
```css
--foreground: #FAFAFA         /* Near-white - primary text */
--foreground-muted: #A0A0A0   /* Medium gray - secondary text */
```

**Contrast Ratios**:
- #FAFAFA on #0A0A0A: 19.8:1 (WCAG AAA)
- #A0A0A0 on #0A0A0A: 6.7:1 (WCAG AA)

### Status Colors

```css
--warning: #FFB800           /* Amber-yellow */
--warning-glow: rgba(255, 184, 0, 0.3)

--success: #00FF88           /* Bright green */
--success-glow: rgba(0, 255, 136, 0.3)

--destructive: #FF006E       /* Hot pink */
--destructive-glow: rgba(255, 0, 110, 0.3)
```

**Usage Guidelines**:
- **Warning**: Challenges, issues, cautionary content
- **Success**: Achievements, completions, positive outcomes
- **Destructive**: Errors, anti-examples, things to avoid

### Chart Colors

```css
--chart-1: oklch(0.65 0.2 35)      /* Electric orange */
--chart-2: oklch(0.75 0.15 190)    /* Neon cyan */
--chart-3: oklch(0.7 0.22 70)      /* Amber */
--chart-4: oklch(0.75 0.18 140)    /* Mint green */
--chart-5: oklch(0.55 0.25 340)    /* Hot pink */
```

### Color Usage Rules

1. **60-30-10 Rule**:
   - 60% Dark backgrounds (#0A0A0A)
   - 30% Neutral text/elements (#FAFAFA, #A0A0A0)
   - 10% Orange accents (#FF4D00)

2. **Orange Hierarchy**:
   - Hero keywords: `text-primary animate-glow-pulse`
   - Badges: `bg-primary` or `shadow-glow`
   - CTAs: `bg-primary hover:bg-primary/90`
   - Borders: `border-primary/40`

3. **Gradient Recipes**:
   ```css
   /* Subtle card background */
   bg-gradient-to-br from-primary/10 to-primary/5

   /* Atmospheric slide background */
   bg-gradient-to-br from-background via-background to-orange-50

   /* Hero gradient (rare) */
   bg-gradient-orange  /* Linear gradient from #FF4D00 to #FF8C00 */
   ```

---

## Typography System

### Four-Font Hierarchy

#### 1. Bebas Neue (Display)

**Purpose**: Massive hero titles, impact statements
**Weights**: 400 (single weight, ultra-condensed)
**Usage**: `font-bebas` class
**Scale**: `text-6xl` to `text-9xl` (72px - 128px)

**Characteristics**:
- All-caps friendly (designed for uppercase)
- Extreme vertical compression
- Brutalist aesthetic
- Maximum impact with minimal width

**Best Practices**:
```tsx
<h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight">
  AI TRANSFORMATION
</h1>
```

**When to Use**:
- Slide titles (main hero text)
- Section dividers
- Large numerical data (e.g., "95%")
- Single-word emphasis

**When NOT to Use**:
- Body text (unreadable at small sizes)
- Lowercase text (loses impact)
- Long sentences (difficult to read)

---

#### 2. Syne (Emphasis)

**Purpose**: Subtitles, section headings, emphasis text
**Weights**: 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)
**Usage**: `font-syne` class
**Scale**: `text-2xl` to `text-5xl` (24px - 48px)

**Characteristics**:
- Geometric sans-serif
- Modern, energetic personality
- Variable weight for flexibility
- Pairs well with Bebas Neue's verticality

**Best Practices**:
```tsx
<p className="font-syne font-bold text-2xl md:text-4xl lg:text-5xl text-primary/80">
  Systematic Approach to Real Results
</p>
```

**When to Use**:
- Slide subtitles
- Card headers
- Section labels
- Callout text

**When NOT to Use**:
- Primary titles (use Bebas Neue)
- Long paragraphs (use Manrope)
- Small UI text (use Manrope)

---

#### 3. Manrope (Body - Default)

**Purpose**: Body text, descriptions, UI elements
**Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
**Usage**: `font-manrope` class (default body font)
**Scale**: `text-sm` to `text-2xl` (14px - 32px)

**Characteristics**:
- Humanist warmth
- Excellent readability
- Open apertures for screen clarity
- NOT Inter (intentional differentiation)

**Best Practices**:
```tsx
<p className="font-manrope text-base md:text-lg leading-relaxed text-foreground/80">
  This is body text with excellent readability and humanist warmth.
</p>
```

**When to Use**:
- All body text
- Descriptions and explanations
- UI labels and buttons
- Navigation elements
- List items

**When NOT to Use**:
- Hero titles (use Bebas Neue)
- Strong emphasis headers (use Syne)
- Code snippets (use JetBrains Mono)

---

#### 4. JetBrains Mono (Technical)

**Purpose**: Code snippets, technical annotations
**Weights**: 400 (Regular), 500 (Medium)
**Usage**: `font-jetbrains` class
**Scale**: `text-xs` to `text-base` (12px - 16px)

**Characteristics**:
- Monospace with ligatures
- Developer-focused aesthetic
- Signals technical credibility
- Clear character distinction

**Best Practices**:
```tsx
<code className="font-jetbrains text-sm bg-muted/20 px-2 py-1 rounded">
  npm install @ai/agent
</code>
```

**When to Use**:
- Code snippets
- API endpoints
- File paths
- Technical specifications
- Command examples

**When NOT to Use**:
- Regular body text
- Headings
- Non-technical content

---

### Typography Scale Reference

```css
/* Hero Titles (Bebas Neue) */
text-9xl: 128px  /* Largest hero text - desktop only */
text-8xl: 96px   /* Section dividers */
text-7xl: 72px   /* Standard slide titles */
text-6xl: 60px   /* Tablet/mobile hero */

/* Section Titles (Syne) */
text-5xl: 48px   /* Large section headers */
text-4xl: 36px   /* Standard section headers */
text-3xl: 30px   /* Card headers */
text-2xl: 24px   /* Subtitle text */

/* Body Text (Manrope) */
text-xl: 20px    /* Large body / emphasized paragraphs */
text-lg: 18px    /* Standard body text */
text-base: 16px  /* Small body / captions */
text-sm: 14px    /* Footnotes / metadata */

/* Technical Text (JetBrains Mono) */
text-base: 16px  /* Code blocks */
text-sm: 14px    /* Inline code */
text-xs: 12px    /* Tiny technical annotations */
```

### Line Height & Letter Spacing

```css
/* Tight (Headings) */
leading-none tracking-tight     /* Bebas Neue, Syne headers */

/* Normal (Subheadings) */
leading-tight tracking-normal   /* Syne subtitles */

/* Relaxed (Body) */
leading-relaxed tracking-normal /* Manrope body text */

/* Loose (Captions) */
leading-loose tracking-wide     /* Rarely used */
```

### Responsive Typography Pattern

```tsx
{/* Mobile → Tablet → Desktop */}
<h1 className="text-6xl md:text-8xl lg:text-9xl">
  {/* 72px → 96px → 128px */}
</h1>

<h2 className="text-4xl md:text-6xl lg:text-7xl">
  {/* 36px → 60px → 72px */}
</h2>

<p className="text-base md:text-lg lg:text-xl">
  {/* 16px → 18px → 20px */}
</p>
```

---

## Animation System

### Custom Keyframe Animations

All animations are defined in `app/globals.css`:

#### 1. Directional Slides

```css
@keyframes slide-in-down {
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Usage: animate-slide-in-down (600ms ease-out) */

@keyframes slide-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Usage: animate-slide-in-up (600ms ease-out) */

@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
/* Usage: animate-slide-in-left (600ms ease-out) */

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
/* Usage: animate-slide-in-right (600ms ease-out) */
```

#### 2. Glow Pulses

```css
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px var(--primary-glow); }
  50% { box-shadow: 0 0 40px var(--primary-glow), 0 0 60px var(--primary-glow); }
}
/* Usage: animate-glow-pulse (2s infinite) */

@keyframes glow-pulse-blue {
  0%, 100% { box-shadow: 0 0 20px var(--accent-blue-glow); }
  50% { box-shadow: 0 0 40px var(--accent-blue-glow), 0 0 60px var(--accent-blue-glow); }
}
/* Usage: animate-glow-pulse-blue (2s infinite) */
```

#### 3. Scale & Rotation

```css
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
/* Usage: animate-scale-in (500ms ease-out) */

@keyframes rotate-in {
  from { opacity: 0; transform: rotate(-5deg) scale(0.95); }
  to { opacity: 1; transform: rotate(0deg) scale(1); }
}
/* Usage: animate-rotate-in (600ms ease-out) */
```

#### 4. Fade

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
/* Usage: animate-fade-in (800ms ease-out) */
```

#### 5. Shimmer (Background)

```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
/* Usage: Rarely used, for loading states */
```

#### 6. Grain Animation

```css
@keyframes grain-animation {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -5%); }
  20% { transform: translate(-10%, 5%); }
  /* ... continues through 90% */
}
/* Usage: Applied automatically to .noise-overlay (8s stepped infinite) */
```

### Animation Delay System

Staggered reveals use incremental delays:

```css
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
```

**Combined with**:

```css
.fill-backwards { animation-fill-mode: backwards; }
/* Prevents flash before animation starts */
```

### Animation Usage Patterns

#### Hero Entrance (Orchestrated Sequence)

```tsx
<section className="min-h-screen">
  {/* 1. Badge slides down first */}
  <Badge className="animate-slide-in-down">
    Module 01
  </Badge>

  {/* 2. Title fades in (200ms delay) */}
  <h1 className="animate-fade-in delay-200 fill-backwards">
    AI TRANSFORMATION
  </h1>

  {/* 3. Subtitle slides up (400ms delay) */}
  <p className="animate-slide-in-up delay-400 fill-backwards">
    Systematic Approach
  </p>

  {/* 4. Metadata fades in last (600ms delay) */}
  <div className="animate-fade-in delay-600 fill-backwards">
    Chief AI Academy
  </div>
</section>
```

**Total orchestration**: ~1.5 seconds from start to finish

#### Staggered Card Grid

```tsx
{items.map((item, index) => (
  <Card
    key={index}
    className="animate-fade-in fill-backwards"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {item.content}
  </Card>
))}
```

#### Glow Emphasis

```tsx
<h1>
  AI Transformation for{" "}
  <span className="text-primary animate-glow-pulse">EXECUTIVES</span>
</h1>
```

### Animation Components (Reusable)

Located in `components/animations/`:

#### StaggeredReveal Component

```tsx
import { StaggeredReveal } from '@/components/animations/staggered-reveal'

<StaggeredReveal delay={100}>
  <Card className="animate-fade-in fill-backwards">Card 1</Card>
  <Card className="animate-fade-in fill-backwards">Card 2</Card>
  <Card className="animate-fade-in fill-backwards">Card 3</Card>
</StaggeredReveal>
```

Automatically applies incremental `animationDelay` to each child.

#### Slide Transition Components

```tsx
import {
  FadeInEntrance,
  SlideUpEntrance,
  SlideDownEntrance,
  ScaleInEntrance,
  RotateInEntrance,
} from '@/components/animations/slide-transitions'

<FadeInEntrance>
  <YourContent />
</FadeInEntrance>
```

### Reduced Motion Support

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Users who prefer reduced motion will see instant state changes instead of animations.

---

## Shadow & Glow Effects

### Shadow Utility Classes

All defined in `app/globals.css`:

#### 1. Glow Shadows (Orange)

```css
.shadow-glow {
  box-shadow: 0 0 20px var(--primary-glow);
}
/* Usage: Subtle orange glow, base intensity */

.shadow-glow-lg {
  box-shadow: 0 0 40px var(--primary-glow), 0 0 60px var(--primary-glow);
}
/* Usage: Intense orange glow, double-layer */
```

**When to Use**:
- Hero elements (buttons, badges)
- Primary CTAs
- Animated keyword emphasis (`animate-glow-pulse`)
- Interactive elements on hover

#### 2. Glow Shadows (Cyan)

```css
.shadow-glow-blue {
  box-shadow: 0 0 20px var(--accent-blue-glow);
}
/* Usage: Subtle cyan glow */

.shadow-glow-blue-lg {
  box-shadow: 0 0 40px var(--accent-blue-glow), 0 0 60px var(--accent-blue-glow);
}
/* Usage: Intense cyan glow, Level 5 only */
```

**When to Use**:
- Level 5 slides exclusively
- Futuristic AI concepts
- Blue gradient accents

#### 3. Layered Shadows (Depth)

```css
.shadow-layered {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 10px 20px rgba(0, 0, 0, 0.2),
    0 20px 40px rgba(0, 0, 0, 0.1);
}
```

**When to Use**:
- Cards with significant elevation
- Modal dialogs
- Featured content
- Multi-layer depth perception

#### 4. Brutal Shadow (Brutalist)

```css
.shadow-brutal {
  box-shadow: 8px 8px 0 rgba(255, 77, 0, 0.2);
}
```

**When to Use**:
- Outlined buttons/cards
- Brutalist aesthetic elements
- Decorative accents
- Retro computing references

### Standard Tailwind Shadows

```css
shadow-sm    /* Subtle, flat elements */
shadow       /* Standard cards */
shadow-md    /* Slightly elevated */
shadow-lg    /* Images, featured cards */
shadow-xl    /* Hero images, modals */
shadow-2xl   /* Maximum elevation */
```

### Shadow Usage Guidelines

1. **Default Cards**: `shadow-sm hover:shadow-lg transition-all duration-600`
2. **Hero Images**: `shadow-lg md:shadow-xl`
3. **CTAs**: `shadow-glow hover:shadow-glow-lg`
4. **Badges**: `shadow-glow` for emphasis, no shadow for subtle
5. **Interactive Elements**: Increase shadow on hover to signal affordance

### Hover Shadow Utilities

```css
.hover-glow:hover {
  box-shadow: 0 0 30px var(--primary-glow);
}
/* Intensifies glow on hover */
```

**Combined Pattern**:

```tsx
<Button className="shadow-glow hover:shadow-glow-lg transition-all duration-300">
  Primary CTA
</Button>
```

---

## Background Patterns

### Decorative Components

Located in `components/decorative/`:

#### 1. GrainOverlay

**Purpose**: Adds analog film grain texture for warmth

```tsx
import { GrainOverlay } from '@/components/decorative/grain-overlay'

<section className="relative overflow-hidden">
  <GrainOverlay opacity={0.4} />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

**Props**:
- `opacity?: number` - Default: 0.5 (range: 0-1)
- `className?: string` - Additional classes

**Technical**: SVG fractal noise, 8s grain-animation loop, absolute positioning

**Best Practices**:
- Use `opacity={0.3}` to `opacity={0.5}` for subtlety
- Always pair with `relative overflow-hidden` on parent
- Place content in `relative z-10` layer above

---

#### 2. GeometricPattern

**Purpose**: Background geometric patterns (dots, grid, diagonal)

```tsx
import { GeometricPattern } from '@/components/decorative/geometric-patterns'

<section className="relative overflow-hidden">
  <GeometricPattern type="dots" className="opacity-30" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

**Props**:
- `type: "dots" | "grid" | "diagonal"` - Pattern type (required)
- `className?: string` - Additional classes

**Pattern Types**:

1. **Dots**: Radial gradient circles, 24px grid, orange tint
   ```tsx
   <GeometricPattern type="dots" className="opacity-30" />
   ```

2. **Grid**: Linear grid lines, 32px cells, subtle orange
   ```tsx
   <GeometricPattern type="grid" className="opacity-20" />
   ```

3. **Diagonal**: 45° stripes, 20px repeat, ultra-subtle
   ```tsx
   <GeometricPattern type="diagonal" className="opacity-10" />
   ```

**Best Practices**:
- Use low opacity (10-30%) to avoid distraction
- Dots: Hero slides, title slides
- Grid: Technical slides, data visualizations
- Diagonal: Background texture, minimal distraction

---

#### 3. GradientMesh

**Purpose**: Atmospheric gradient backgrounds

```tsx
import { GradientMesh } from '@/components/decorative/geometric-patterns'

<section className="relative overflow-hidden">
  <GradientMesh variant="warm" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

**Props**:
- `variant?: "default" | "warm" | "orange" | "cyan"` - Gradient type
- `className?: string` - Additional classes

**Gradient Variants**:

1. **Default**: Neutral dark charcoal gradient
   ```css
   linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0F0F0F 100%)
   ```

2. **Warm**: Charcoal with subtle orange undertones
   ```css
   linear-gradient(135deg, #0A0A0A 0%, #1A0F0A 30%, #0F0A0A 60%, #0A0A0A 100%)
   ```

3. **Orange**: Vibrant orange gradient (rare, high-impact slides)
   ```css
   linear-gradient(135deg, #FF4D00 0%, #FF6A00 50%, #FF8C00 100%)
   ```

4. **Cyan**: Cyan gradient (Level 5 slides only)
   ```css
   linear-gradient(135deg, #00D9FF 0%, #00BBFF 100%)
   ```

**Best Practices**:
- **Hero slides**: Use `warm` for subtle warmth
- **Standard slides**: Use `default` for neutrality
- **High-impact slides**: Use `orange` sparingly
- **Level 5 slides**: Use `cyan` for futuristic feel

---

### CSS Pattern Utilities

Alternative to components, use these CSS classes directly:

```css
/* From globals.css */
.bg-dots-pattern       /* Radial dots, 24px grid */
.bg-grid-pattern       /* Linear grid, 32px cells */
.bg-diagonal-pattern   /* 45° stripes, 20px repeat */
.bg-gradient-mesh      /* Neutral dark gradient */
.bg-gradient-mesh-warm /* Warm orange gradient */
.bg-gradient-orange    /* Vibrant orange gradient */
.bg-gradient-cyan      /* Cyan gradient */
```

**Usage**:

```tsx
<section className="bg-gradient-mesh-warm bg-dots-pattern">
  {/* Stacked: gradient + dots */}
</section>
```

### Layered Atmospheric Backgrounds

**Recommended Stack** (from back to front):

```tsx
<section className="min-h-screen relative overflow-hidden">
  {/* Layer 1: Gradient mesh (color foundation) */}
  <GradientMesh variant="warm" />

  {/* Layer 2: Geometric pattern (structure) */}
  <GeometricPattern type="dots" className="opacity-30" />

  {/* Layer 3: Grain overlay (analog warmth) */}
  <GrainOverlay opacity={0.4} />

  {/* Layer 4: Content (always relative z-10) */}
  <div className="relative z-10">
    {/* Your slide content */}
  </div>
</section>
```

**Result**: Rich, multi-layered atmospheric depth without visual clutter

---

## Component Variants

### Badge Variants

Enhanced from shadcn/ui with custom design system variants.

#### Standard Variants

```tsx
import { Badge } from '@/components/ui/badge'

{/* Solid orange, high contrast */}
<Badge variant="default">Default</Badge>

{/* Bordered, transparent */}
<Badge variant="outline">Outline</Badge>

{/* Dark gray background */}
<Badge variant="secondary">Secondary</Badge>

{/* Red/pink, destructive */}
<Badge variant="destructive">Destructive</Badge>
```

#### Custom Design System Variants

```tsx
{/* Orange gradient background */}
<Badge variant="gradient">Gradient</Badge>

{/* Orange with glow shadow */}
<Badge variant="glow">Glow</Badge>

{/* Cyan gradient (Level 5 only) */}
<Badge variant="cyan">Cyan</Badge>

{/* Brutalist: 2px border + shadow-brutal */}
<Badge variant="brutal">Brutal</Badge>
```

#### Usage Guidelines

| Variant | Use Case | Example |
|---------|----------|---------|
| `default` | Standard labels | "Module 01" |
| `outline` | Subtle context | "Optional" |
| `gradient` | Hero emphasis | "AI Transformation" |
| `glow` | **Hero slides** | **"Featured"** |
| `cyan` | Level 5 slides | "Autonomous AI" |
| `brutal` | Decorative accent | "New!" |

#### Tilted Badge Pattern (Brutalist Touch)

```tsx
<Badge variant="glow" className="transform -rotate-2">
  Module 01: AI State
</Badge>
```

Adds casual, hand-placed aesthetic. Use -2° to 2° rotation.

---

### Card Variants

Enhanced from shadcn/ui with new variant system.

#### Variant Prop System

```tsx
import { Card, CardContent } from '@/components/ui/card'

{/* Standard: shadow-sm hover:shadow-lg */}
<Card variant="default">
  <CardContent>Default card</CardContent>
</Card>

{/* Layered: Multi-layer shadow, dramatic depth */}
<Card variant="layered">
  <CardContent>Featured content</CardContent>
</Card>

{/* Glow: Orange glow shadow, primary border */}
<Card variant="glow">
  <CardContent>Emphasized card</CardContent>
</Card>

{/* Brutal: 2px border, offset shadow */}
<Card variant="brutal">
  <CardContent>Brutalist aesthetic</CardContent>
</Card>

{/* Glass: Semi-transparent, backdrop blur */}
<Card variant="glass">
  <CardContent>Overlay content</CardContent>
</Card>
```

#### Manual Card Patterns (No Variant Prop)

**Standard Card**:
```tsx
<Card className="border-border/50 bg-muted/20">
  <CardContent>Subtle, non-emphasized</CardContent>
</Card>
```

**Featured Card** (Primary emphasis):
```tsx
<Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
  <CardContent>Key information</CardContent>
</Card>
```

**Warning Card**:
```tsx
<Card className="border-warning/40 bg-warning/5">
  <CardContent>Challenges, issues</CardContent>
</Card>
```

**Level 5 Card** (Blue gradient):
```tsx
<Card className="border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
  <CardContent>Futuristic AI content</CardContent>
</Card>
```

#### Card Hover States

```tsx
<Card className="hover:shadow-xl transition-all duration-600">
  {/* Shadow intensifies on hover */}
</Card>

<Card className="hover:-translate-y-1 transition-transform duration-300">
  {/* Lifts up slightly on hover */}
</Card>

<Card className="hover:border-primary transition-colors duration-300">
  {/* Border color changes on hover */}
</Card>
```

---

### Button Variants

Enhanced from shadcn/ui with design system variants.

#### Standard Variants

```tsx
import { Button } from '@/components/ui/button'

{/* Solid orange */}
<Button variant="default">Default</Button>

{/* Bordered, transparent */}
<Button variant="outline">Outline</Button>

{/* Gray background */}
<Button variant="secondary">Secondary</Button>

{/* Red/pink */}
<Button variant="destructive">Destructive</Button>

{/* Transparent hover */}
<Button variant="ghost">Ghost</Button>

{/* Text link */}
<Button variant="link">Link</Button>
```

#### Custom Design System Variants

```tsx
{/* Orange gradient background */}
<Button variant="gradient">Gradient</Button>

{/* 2px border, shadow-brutal */}
<Button variant="brutal">Brutal</Button>

{/* Orange glow shadow */}
<Button variant="glow">Glow</Button>
```

#### Button Sizes

```tsx
<Button size="sm">Small</Button>      {/* h-8 */}
<Button size="default">Default</Button> {/* h-9 */}
<Button size="lg">Large</Button>      {/* h-10 */}

<Button size="icon">
  <Icon />
</Button> {/* Square icon button */}
```

#### Usage Guidelines

| Variant | Use Case |
|---------|----------|
| `default` | Standard CTAs |
| `glow` | **Primary hero CTAs** |
| `gradient` | High-impact actions |
| `brutal` | Decorative, retro feel |
| `outline` | Secondary actions |
| `ghost` | Tertiary/inline actions |

---

## Layout Principles

### Spacing System

#### Container Padding

```tsx
{/* Standard slide padding */}
<section className="p-8 lg:p-16">
  {/* 32px mobile, 64px desktop */}
</section>

{/* Generous hero slide padding */}
<section className="p-8 lg:p-24">
  {/* 32px mobile, 96px desktop */}
</section>
```

#### Content Spacing (Vertical)

```tsx
{/* Standard spacing */}
<div className="space-y-6 lg:space-y-8">
  {/* 24px → 32px */}
</div>

{/* Generous spacing */}
<div className="space-y-8 lg:space-y-10">
  {/* 32px → 40px */}
</div>

{/* Hero slide spacing */}
<div className="space-y-10 lg:space-y-16">
  {/* 40px → 64px */}
</div>
```

#### Grid Gaps

```tsx
{/* Tight card grids */}
<div className="grid gap-3">
  {/* 12px */}
</div>

{/* Standard grids */}
<div className="grid gap-4 md:gap-6">
  {/* 16px → 24px */}
</div>

{/* Two-column layouts */}
<div className="grid gap-8 lg:gap-12">
  {/* 32px → 48px */}
</div>
```

### Max Widths

```tsx
{/* Narrow content (text-heavy) */}
<div className="max-w-4xl mx-auto">
  {/* 64rem / 1024px */}
</div>

{/* Standard content slides */}
<div className="max-w-6xl mx-auto">
  {/* 72rem / 1152px */}
</div>

{/* Title slides, wide layouts */}
<div className="max-w-7xl mx-auto">
  {/* 80rem / 1280px */}
</div>
```

### Responsive Breakpoints

```tsx
{/* Tailwind default breakpoints */}
sm: 640px   // Small devices (rarely used in presentations)
md: 768px   // Tablets - major layout shifts
lg: 1024px  // Desktop - typography/spacing increases
xl: 1280px  // Large desktop (rarely targeted)
2xl: 1536px // Extra large (not used)
```

**Pattern**:

```tsx
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column */}
  {/* Tablet: 2 columns */}
  {/* Desktop: 3 columns */}
</div>
```

### Grid Patterns

#### Two-Column Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</div>
```

#### Five-Column Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
  {levels.map(level => (
    <Card key={level.id}>{level.content}</Card>
  ))}
</div>
```

**Responsive behavior**:
- Mobile: 1 column stack
- Tablet: 2 columns
- Desktop: 5 columns

#### Asymmetric Layout (60/40 Split)

```tsx
<div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
  <div>{/* 60% - main content */}</div>
  <div>{/* 40% - sidebar */}</div>
</div>
```

### Full-Screen Slide Pattern

```tsx
<section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
  <div className="max-w-6xl w-full">
    {/* Centered content */}
  </div>
</section>
```

**Key attributes**:
- `min-h-screen`: Full viewport height
- `flex items-center justify-center`: Perfect centering
- `p-8 lg:p-16`: Responsive padding
- `max-w-6xl w-full`: Constrained width, responsive

---

## Accessibility Standards

### WCAG AA Compliance

All slides must meet WCAG 2.1 Level AA standards.

#### Color Contrast Requirements

**Body Text (< 18px)**:
- Minimum ratio: 4.5:1
- Current: #FAFAFA on #0A0A0A = 19.8:1 ✓ (exceeds AAA)
- Muted: #A0A0A0 on #0A0A0A = 6.7:1 ✓

**Large Text (≥ 18px bold or ≥ 24px regular)**:
- Minimum ratio: 3:1
- Orange: #FF4D00 on #0A0A0A = 5.8:1 ✓

**Status Colors**:
- Warning: #FFB800 on #0A0A0A = 7.2:1 ✓
- Success: #00FF88 on #0A0A0A = 8.1:1 ✓
- Destructive: #FF006E on #0A0A0A = 4.9:1 ✓

### Focus States

All interactive elements must have visible focus indicators:

```tsx
<button className="focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2">
  {/* Orange ring, 50% opacity, 2px width, 2px offset */}
</button>
```

**Global default** (from globals.css):

```css
* {
  @apply outline-ring/50;
}
```

### Keyboard Navigation

**Requirements**:
- Tab: Navigate through interactive elements
- Enter: Activate buttons, links
- Space: Toggle checkboxes, activate buttons
- Arrow keys: Navigate slides (implemented in app/page.tsx)
- Escape: Close modals/popups

**Testing**:
1. Tab through all interactive elements
2. Verify visible focus states
3. Test activation with Enter/Space
4. Ensure logical tab order

### Semantic HTML

Use proper HTML elements:

```tsx
{/* Correct */}
<section>
  <h1>Title</h1>
  <h2>Subtitle</h2>
  <p>Body text</p>
  <button onClick={handleClick}>Click me</button>
</section>

{/* Incorrect */}
<div>
  <div className="text-7xl">Title</div>
  <div onClick={handleClick}>Click me</div>
</div>
```

### ARIA Attributes

**Decorative elements**:

```tsx
<GrainOverlay aria-hidden="true" />
<GeometricPattern type="dots" aria-hidden="true" />
```

**Icons without labels**:

```tsx
<Sparkles aria-label="New feature" />
```

**Icons with labels**:

```tsx
<Badge>
  <Sparkles aria-hidden="true" />
  Module 01
</Badge>
```

### Reduced Motion

All animations must respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations → 0.01ms (instant) */
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
```

**Testing**: Enable "Reduce motion" in system settings and verify all slides.

### Alternative Text

All images must have descriptive alt text:

```tsx
<img
  src="/generated-images/ai-transformation.png"
  alt="Handwritten illustration of a neural network transforming data into insights, featuring warm orange tones and charcoal outlines"
/>
```

**Guidelines**:
- Describe the subject and scene
- Mention key visual elements
- Keep under 150 characters
- Don't start with "Image of" or "Picture of"

---

## Best Practices

### Do's ✅

1. **Typography**:
   - Use Bebas Neue for hero titles (text-6xl+)
   - Use Syne for subtitles and emphasis (text-2xl to text-5xl)
   - Use Manrope for all body text
   - Maintain responsive typography scaling

2. **Color**:
   - Orange for primary emphasis (10-20% of visual elements)
   - Dark charcoal backgrounds (#0A0A0A)
   - Muted gray for secondary text (#A0A0A0)
   - Use gradients sparingly (from-primary/10 to-primary/5)

3. **Animation**:
   - Orchestrate entrance sequences (badge → title → subtitle → content)
   - Use staggered reveals for card grids (100ms delays)
   - Apply fill-backwards to prevent flash
   - Respect prefers-reduced-motion

4. **Layout**:
   - Center content with flex items-center justify-center
   - Use generous padding (p-8 lg:p-16 minimum)
   - Constrain width with max-w-6xl
   - Maintain responsive grid patterns

5. **Backgrounds**:
   - Layer atmospheric elements (gradient + pattern + grain)
   - Keep opacity low (10-30% for patterns)
   - Place content in relative z-10 layer

6. **Accessibility**:
   - Test keyboard navigation
   - Verify color contrast (4.5:1 minimum)
   - Add focus states to all interactive elements
   - Use semantic HTML

### Don'ts ❌

1. **Typography**:
   - ❌ Don't use Inter or system fonts
   - ❌ Don't use Bebas Neue for body text
   - ❌ Don't mix too many font sizes on one slide
   - ❌ Don't use tiny text (< 16px for body)

2. **Color**:
   - ❌ Don't overuse orange (keep it special)
   - ❌ Don't use pure black (#000000) or pure white (#FFFFFF)
   - ❌ Don't use low-contrast color combinations
   - ❌ Don't use cyan except on Level 5 slides

3. **Animation**:
   - ❌ Don't animate everything at once
   - ❌ Don't use slow animations (> 1s for entrances)
   - ❌ Don't forget fill-backwards on delayed animations
   - ❌ Don't ignore prefers-reduced-motion

4. **Layout**:
   - ❌ Don't cram content (use generous spacing)
   - ❌ Don't break the max-width constraints
   - ❌ Don't ignore responsive breakpoints
   - ❌ Don't forget vertical centering on full-screen slides

5. **Backgrounds**:
   - ❌ Don't use high-opacity patterns (distracting)
   - ❌ Don't stack too many background layers (> 3)
   - ❌ Don't forget to position content above backgrounds

6. **Accessibility**:
   - ❌ Don't use orange text on light backgrounds
   - ❌ Don't hide focus states
   - ❌ Don't use divs instead of buttons
   - ❌ Don't forget alt text on images

### Common Patterns

#### Hero Slide Pattern

```tsx
<section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
  {/* Atmospheric background */}
  <GradientMesh variant="warm" />
  <GeometricPattern type="dots" className="opacity-30" />
  <GrainOverlay opacity={0.4} />

  {/* Content */}
  <div className="max-w-7xl w-full space-y-10 lg:space-y-16 text-center relative z-10">
    {/* Badge */}
    <div className="flex justify-center animate-slide-in-down">
      <Badge variant="glow" className="transform -rotate-2">
        <Sparkles className="h-5 w-5 mr-2" />
        Module Title
      </Badge>
    </div>

    {/* Hero Title */}
    <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
      MAIN MESSAGE
      <br />
      <span className="text-primary animate-glow-pulse">KEYWORD</span>
    </h1>

    {/* Subtitle */}
    <p className="font-syne font-bold text-2xl md:text-4xl lg:text-5xl text-primary/80 max-w-5xl mx-auto animate-slide-in-up delay-400 fill-backwards">
      Supporting message or tagline
    </p>

    {/* Metadata */}
    <div className="pt-12 space-y-3 text-xl md:text-2xl text-foreground/60 font-manrope animate-fade-in delay-600 fill-backwards">
      <p className="font-semibold">Organization Name</p>
      <p className="text-lg md:text-xl text-foreground/40">Additional context</p>
    </div>
  </div>
</section>
```

#### Content Slide Pattern

```tsx
<section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
  <div className="max-w-6xl w-full space-y-8 lg:space-y-10">
    {/* Title */}
    <div className="text-center space-y-4">
      <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl leading-tight">
        SECTION TITLE
      </h2>
      <p className="font-syne text-xl md:text-2xl text-muted-foreground">
        Subtitle or context
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((item, index) => (
        <Card
          key={item.id}
          className="animate-fade-in fill-backwards"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            {item.content}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
```

---

## Quick Reference

### Font Classes
- `font-bebas` - Display titles (72-128px)
- `font-syne` - Emphasis text (24-48px)
- `font-manrope` - Body text (14-32px) [default]
- `font-jetbrains` - Code/technical (12-16px)

### Animation Classes
- `animate-slide-in-down/up/left/right` - Directional slides
- `animate-glow-pulse` - Orange glow pulse
- `animate-scale-in` - Scale entrance
- `animate-rotate-in` - Rotation entrance
- `animate-fade-in` - Fade entrance
- `delay-100` through `delay-600` - Staggered delays
- `fill-backwards` - Prevent flash

### Shadow Classes
- `shadow-glow` - Orange glow
- `shadow-glow-lg` - Intense orange glow
- `shadow-glow-blue` - Cyan glow
- `shadow-layered` - Multi-layer depth
- `shadow-brutal` - Offset brutalist shadow

### Background Classes
- `bg-dots-pattern` - Dot grid
- `bg-grid-pattern` - Line grid
- `bg-diagonal-pattern` - Diagonal stripes
- `bg-gradient-mesh` - Neutral gradient
- `bg-gradient-mesh-warm` - Warm gradient
- `bg-gradient-orange` - Orange gradient
- `bg-gradient-cyan` - Cyan gradient

### Component Variants
**Badge**: `default` `outline` `gradient` `glow` `cyan` `brutal`
**Card**: `default` `layered` `glow` `brutal` `glass`
**Button**: `default` `outline` `gradient` `brutal` `glow`

---

## Version History

**v2.0** - December 2024
- Added brutalist-minimalism meets retro-futuristic design system
- Introduced four-font typography hierarchy (Bebas Neue, Syne, Manrope, JetBrains Mono)
- Implemented electric orange + neon cyan color palette
- Created decorative component system (GrainOverlay, GeometricPattern, GradientMesh)
- Added comprehensive animation system with staggered reveals
- Established shadow & glow effects library
- Documented component variants and best practices

**v1.0** - November 2024
- Initial presentation with Inter font
- Basic orange color scheme
- Standard Tailwind components

---

**Maintained by**: Chief AI Academy Design Team
**Last Updated**: December 2024
**Related Documents**: `ai_docs/IMAGE_GENERATION_GUIDE.md`, `ai_docs/PRESENTATION_DESIGN_GUIDELINES.md`
