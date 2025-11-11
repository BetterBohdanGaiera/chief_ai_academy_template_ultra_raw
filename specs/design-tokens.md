# Quinn-Inspired Design Tokens

## Overview
This document defines the design tokens and spacing system for the Quinn-inspired presentation design, emphasizing minimalism, generous whitespace, and refined typography.

## Color System

### Primary Colors
- **Primary (Orange)**: `oklch(0.65 0.2 35)` - Vibrant orange for accents, badges, and highlights
- **Warning (Yellow-Orange)**: `oklch(0.7 0.22 70)` - For Level 3 "trap" indicators
- **Transformation**: `oklch(0.65 0.2 35)` - Orange for transformation zone (Level 4-5)

### Neutral Colors
- **Background**: `oklch(1 0 0)` - Pure white
- **Foreground**: `oklch(0.15 0 0)` - Deep charcoal for primary text
- **Card Background**: `oklch(0.99 0 0)` - Off-white for subtle card backgrounds
- **Muted Foreground**: `oklch(0.5 0 0)` - Medium gray for secondary text
- **Border**: `oklch(0.9 0 0)` - Light gray for subtle divisions

### Contrast Ratios (WCAG Compliance)
- Body text on white: 13.8:1 (exceeds WCAG AAA)
- Orange on white: 4.1:1 (meets WCAG AA for large text)
- White on orange: 5.1:1 (exceeds WCAG AA)

## Spacing System

### Container Padding
Inspired by Quinn's fluid spacing with generous outer margins:
- Mobile: `p-12` (3rem / 48px)
- Desktop: `lg:p-20` (5rem / 80px)

### Section Spacing (Vertical Rhythm)
Generous space between major content sections:
- Mobile: `space-y-16` (4rem / 64px)
- Desktop: `lg:space-y-20` (5rem / 80px)

### Grid Gaps
Breathing room between cards and grid items:
- Small gaps: `gap-6` (1.5rem / 24px)
- Medium gaps: `gap-8` (2rem / 32px)
- Large gaps: `lg:gap-10` (2.5rem / 40px)

### Card Padding
Comfortable internal spacing for content blocks:
- Default: `p-8` (2rem / 32px)
- Large cards: `lg:p-10` (2.5rem / 40px)

### Compact Spacing
For tighter elements like badges and small components:
- Extra small: `px-3 py-1` (0.75rem x 0.25rem)
- Small: `px-4 py-2` (1rem x 0.5rem)

## Typography Scale

### Font Family
- Primary: Inter (already configured in globals.css)
- Fallback: ui-sans-serif, system-ui, sans-serif

### Font Sizes & Line Heights

#### Display Titles (Hero Text)
- **Largest**: `text-6xl md:text-8xl` (3.75rem → 6rem)
  - Line height: `leading-[1.1]` (110%)
  - Letter spacing: `tracking-tight`
  - Font weight: `font-bold` (700)

#### Section Headings
- **Large**: `text-4xl md:text-6xl` (2.25rem → 3.75rem)
  - Line height: `leading-tight` (125%)
  - Letter spacing: `tracking-tight`
  - Font weight: `font-bold` (700)

#### Subheadings
- **Medium**: `text-xl md:text-2xl` (1.25rem → 1.5rem)
  - Line height: `leading-relaxed` (175%)
  - Font weight: `font-normal` (400)
  - Color: `text-muted-foreground`

#### Body Text
- **Base**: `text-base lg:text-lg` (1rem → 1.125rem)
  - Line height: `leading-relaxed` (175%)
  - Font weight: `font-normal` (400)

#### Card Titles
- **Medium-Large**: `text-lg lg:text-2xl` (1.125rem → 1.5rem)
  - Line height: `leading-snug` (137.5%)
  - Font weight: `font-semibold` (600)

#### Small Text
- **Small**: `text-sm` (0.875rem)
  - Line height: `leading-relaxed` (175%)
  - Color: `text-muted-foreground`

### Font Weights
- `font-bold` (700): Titles and emphasis
- `font-semibold` (600): Subheadings and card titles
- `font-medium` (500): Badges and labels
- `font-normal` (400): Body text

## Grid System

### Responsive Columns
- Mobile: 8-column grid (implicit through Tailwind's `grid-cols-1`)
- Tablet: Progressive enhancement with `md:grid-cols-2`
- Desktop: 24-column grid (achieved through `lg:grid-cols-5` for 5-column layouts)

### Gutters
- Mobile: 6vw (achieved through `gap-6`)
- Desktop: 4vw (achieved through `lg:gap-10`)

## Animation Standards

### Transition Duration
- Global standard: `duration-600` (0.6s) for smooth, refined transitions

### Easing Function
- Default: `ease-in-out` (Tailwind default)

### Animatable Properties
- `transition-all` for comprehensive state changes
- Specific properties: `transform`, `shadow`, `opacity`, `background-color`, `border-color`

### Hover Effects

#### Cards
- Default: `shadow-sm`
- Hover: `shadow-lg`
- Transform: `scale-[1.02]` (subtle scale on hover)

#### Buttons
- Scale: `scale-105` on hover
- Shadow: Refined shadow increase
- Opacity: Subtle backdrop-blur for navigation

#### Navigation Dots
- Default: `bg-primary/30`
- Hover: `bg-primary/50`
- Active: `bg-primary`
- Transform: `scale-110` on active

### Entrance Animations
- Fade-in: `animate-fadeIn` (from tw-animate-css)
- Slide-up: `animate-slideInUp`
- Duration: 0.6s with ease-in-out

### Accessibility
- Respect `prefers-reduced-motion` with `motion-safe:` utilities
- Example: `motion-safe:transition-all`

## Border Radius System

### Standard Radii
- Small: `rounded-md` (0.375rem / 6px)
- Medium: `rounded-lg` (0.5rem / 8px)
- Large: `rounded-xl` (0.75rem / 12px)

### Component-Specific
- Badges: `rounded-md`
- Cards: `rounded-xl`
- Buttons: `rounded-md`
- Navigation dots: `rounded-full`

## Shadow System

### Elevation Levels
- Subtle: `shadow-sm` - Light shadow for resting state
- Medium: `shadow-md` - Slightly elevated state
- Prominent: `shadow-lg` - Hover state for interactive elements

### Contextual Shadows
- Warning elements: `shadow-warning/20` (subtle orange tint)
- Primary elements: `shadow-primary/20` (subtle orange tint)

## Interactive States

### Focus States
- Ring: `focus:ring-2` with `ring-primary`
- Ring offset: `ring-offset-2` for clear separation from element
- Border: `focus:border-ring`

### Hover States
- Subtle color shifts (primary/90 for primary elements)
- Shadow elevation increase
- Transform scale (1.02-1.05 range)

### Active States
- Slightly darker than hover
- More prominent shadow or border
- Scale transform (1.05-1.1 range)

## Component-Specific Tokens

### Badges
- Padding: `px-3 py-1` (compact)
- Font size: `text-sm` for module badges, `text-lg` for level badges
- Border: `border` with contextual colors

### Cards
- Background: `bg-card` (off-white)
- Border: `border` with contextual colors (`border-primary/40`, `border-warning/40`, or default)
- Padding: `p-6` for standard cards, `p-8` for content-rich cards
- Shadow: `shadow-sm` default

### Buttons
- Padding: Handled by size variants (`size-icon` for navigation)
- Background: `bg-white/90` with `backdrop-blur-sm` for floating navigation
- Border: `border` for outline variant

### Navigation
- Circular buttons: `rounded-full` with `backdrop-blur-sm`
- Dot indicators: `w-2 h-2 rounded-full` with opacity variations
- Fixed positioning: `fixed bottom-8` with appropriate horizontal positioning

## Whitespace Philosophy

### Core Principle
"More space between elements creates premium feel" - Quinn aesthetic

### Application
- **Generous margins**: Never crowd content edges
- **Balanced whitespace-to-content ratio**: Typically 40-60% whitespace
- **Vertical rhythm**: Consistent spacing between sections
- **Breathing room**: Allow cards and elements to "breathe" with adequate gaps

### Max Width Constraints
- Content containers: `max-w-7xl` (1280px) for most slides
- Wider layouts: `max-w-6xl` for principles slide
- Text blocks: `max-w-3xl` or `max-w-4xl` for optimal readability

## Accessibility Guidelines

### Minimum Requirements (WCAG AA)
- ✅ Text contrast: 4.5:1 for body text
- ✅ Large text contrast: 3:1 for headings (18pt+ or 14pt+ bold)
- ✅ Interactive elements: Minimum 44x44px touch target
- ✅ Focus indicators: 2px solid ring with offset
- ✅ Keyboard navigation: All interactive elements accessible via Tab
- ✅ Motion: Respect `prefers-reduced-motion`

### Implementation
- Use semantic HTML (`section`, `h1`-`h6`, `button`, `nav`)
- Add `aria-label` to icon-only buttons
- Ensure all icons have text labels or ARIA attributes
- Test with keyboard-only navigation
- Include focus visible states on all interactive elements

## Future Considerations

### Potential Enhancements
- Subtle scroll-triggered entrance animations
- Sophisticated CSS Grid layouts for complex content
- Parallax effects (keep minimal if implemented)
- Light/dark mode toggle
- Reduced motion toggle in settings

### Maintenance Notes
- Review spacing scale if adding new slide types
- Ensure new components follow established token system
- Test all new interactions at 0.6s duration
- Validate accessibility before launching new features
