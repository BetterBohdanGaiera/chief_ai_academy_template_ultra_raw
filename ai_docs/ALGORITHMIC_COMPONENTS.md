# Algorithmic Animation Components

**Version**: 1.0 | **Last Updated**: 2025 | **Authoritative Reference**

This document provides comprehensive documentation for algorithmic and decorative background components used in Chief AI Academy presentations. These components add visual interest, movement, and professional polish to slides through canvas-based animations and procedural patterns.

---

## Table of Contents

1. [MeshGradientBackground](#meshgradientbackground)
2. [ParticleField](#particlefield)
3. [Decorative Components](#decorative-components)
   - [GrainOverlay](#grainoverlay)
   - [GeometricPattern](#geometricpattern)
4. [Layering Components Effectively](#layering-components)
5. [Performance Considerations](#performance)
6. [Related Documentation](#related-documentation)

---

<a name="meshgradientbackground"></a>
## MeshGradientBackground

### Overview

Creates animated radial gradients with organic blob-like motion using canvas rendering. Provides dynamic, professional backgrounds with smooth color transitions.

### When to Use

- **Hero/title slides** for visual impact
- **Background atmosphere** for concept slides
- **Slides about transformation, innovation, or dynamic topics**
- When you need movement without distraction

### Props

```typescript
interface MeshGradientBackgroundProps {
  colors: string[]      // Array of 3-5 hex colors for gradient
  speed?: number        // Animation speed (0.3 = slow, 0.5 = medium, 0.8 = fast)
  complexity?: number   // Number of gradient blobs (2-4 recommended)
}
```

### Example 1: Warm Orange Gradient (Transformation Themes)

```tsx
import { MeshGradientBackground } from "@/components/algorithmic/mesh-gradient-background"

export default function SlideTransformation() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Warm gradient for transformation/innovation themes */}
      <MeshGradientBackground
        colors={[
          '#FF4D00',  // Electric orange (primary)
          '#F5A623',  // Warm orange
          '#FFF5E1',  // Soft cream
          '#0A0A0A'   // Charcoal
        ]}
        speed={0.5}        // Slow, professional movement
        complexity={3}      // 3 gradient blobs
      />

      <div className="relative z-10">
        <h1 className="text-8xl font-bebas">AI TRANSFORMATION</h1>
      </div>
    </section>
  )
}
```

### Example 2: Cool Gradient (Technical/Data Themes)

```tsx
<MeshGradientBackground
  colors={[
    '#00BBFF',  // Cyan (Level 4/5 accent)
    '#1E3A8A',  // Deep blue
    '#F3F4F6',  // Light gray
    '#0A0A0A'   // Charcoal
  ]}
  speed={0.3}
  complexity={2}
/>
```

### Best Practices

- ✅ **Always include primary color** (#FF4D00) in transformation themes
- ✅ **Use slow speeds** (0.3-0.5) for professional aesthetic
- ✅ **Keep complexity low** (2-3) to avoid visual noise
- ✅ **Layer with GrainOverlay** for analog warmth
- ⚠️ **Avoid high speeds** (>0.8) - too distracting
- ⚠️ **Don't use >4 colors** - creates muddy gradients

### Color Scheme Recommendations

**Transformation/Innovation:**
```tsx
colors={['#FF4D00', '#F5A623', '#FFF5E1', '#0A0A0A']}
```

**Technical/Data:**
```tsx
colors={['#00BBFF', '#1E3A8A', '#F3F4F6', '#0A0A0A']}
```

**Level 5/Advanced:**
```tsx
colors={['#00D9FF', '#00BBFF', '#0A0A0A', '#1E293B']}
```

**Minimal/Clean:**
```tsx
colors={['#FAFAFA', '#F5F5F0', '#E5E5E0', '#D4D4D0']}
```

---

<a name="particlefield"></a>
## ParticleField

### Overview

Creates an interactive particle system that responds to mouse movement. Particles drift slowly and form connecting lines when nearby, creating network-like visualizations.

### When to Use

- **Slides about networks, connections, or distributed systems**
- **Interactive exploration slides**
- **Technical or data-heavy slides** needing visual interest
- When demonstrating interconnected concepts

### Props

```typescript
interface ParticleFieldProps {
  particleCount: number         // Number of particles (30-150, higher = denser)
  color: string                 // Hex color for particles and connections
  interactive: boolean          // Respond to mouse movement
  speed: number                 // Drift speed (0.3-1.0)
  connectionDistance: number    // Max distance to draw lines between particles (px)
  opacity: number               // Particle opacity (0.2-0.6 recommended)
}
```

### Example 1: Subtle Background Particles

```tsx
import { ParticleField } from "@/components/algorithmic/particle-field"

export default function SlideNetwork() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Subtle particle field */}
      <ParticleField
        particleCount={50}           // Moderate density
        color="#FF4D00"              // Orange particles
        interactive={true}           // Respond to mouse
        speed={0.5}                  // Slow drift
        connectionDistance={150}     // Lines between nearby particles
        opacity={0.3}                // Subtle presence
      />

      <div className="relative z-10">
        <h2>Network Effects</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

### Example 2: Dense Interactive Field (Feature Slide)

```tsx
<ParticleField
  particleCount={120}
  color="#00BBFF"
  interactive={true}
  speed={0.8}
  connectionDistance={200}
  opacity={0.5}
/>
```

### Example 3: Static Ambient Field (Non-interactive)

```tsx
<ParticleField
  particleCount={30}
  color="#0A0A0A"
  interactive={false}          // No mouse interaction
  speed={0.3}
  connectionDistance={100}
  opacity={0.2}
/>
```

### Best Practices

- ✅ **Use sparingly** - high particle counts can impact performance
- ✅ **Lower opacity** (0.2-0.4) for background ambiance
- ✅ **Match particle color to slide theme**:
  - Orange (#FF4D00) for transformation
  - Cyan (#00BBFF) for technical
  - Charcoal (#0A0A0A) for neutral
- ✅ **Disable interactivity** (`interactive={false}`) if slide has other interactions
- ⚠️ **Avoid >150 particles** - performance degradation
- ⚠️ **Test on lower-end devices** before using dense fields

### Performance Guidelines

| Particle Count | Performance | Use Case |
|---------------|-------------|----------|
| 30-50 | ⚡ Excellent | Subtle background ambiance |
| 50-80 | ✅ Good | Standard interactive slides |
| 80-120 | ⚠️ Moderate | Feature slides, short duration |
| 120-150 | ❌ Poor | Avoid unless critical |

---

<a name="decorative-components"></a>
## Decorative Components

<a name="grainoverlay"></a>
### GrainOverlay

#### Overview

Adds a film grain texture effect for analog warmth and retro aesthetic. This is the **signature finishing touch** that should be applied to almost every slide.

#### When to Use

**On almost every slide** as a subtle finishing touch. Omit only when a perfectly clean digital aesthetic is specifically required.

#### Props

```typescript
interface GrainOverlayProps {
  opacity: number  // Grain intensity (0.05-0.3)
}
```

#### Example 1: Standard Usage

```tsx
import { GrainOverlay } from "@/components/decorative/grain-overlay"

export default function SlideExample() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Other background layers */}
      <MeshGradientBackground colors={[...]} />

      {/* Grain overlay as top layer */}
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10">
        {/* Content */}
      </div>
    </section>
  )
}
```

#### Example 2: Heavy Grain (Retro Aesthetic)

```tsx
<GrainOverlay opacity={0.3} />
```

#### Example 3: Subtle Grain (Modern Clean)

```tsx
<GrainOverlay opacity={0.08} />
```

#### Best Practices

- ✅ **Standard**: 0.15 opacity for balanced analog warmth
- ✅ **Heavy**: 0.25-0.3 for retro/nostalgic themes
- ✅ **Subtle**: 0.08-0.12 for modern minimal aesthetic
- ✅ **Always apply as the top decorative layer** (above gradients, below content)
- ✅ **Never skip grain overlay** - it's the signature finishing touch

---

<a name="geometricpattern"></a>
### GeometricPattern

#### Overview

Adds subtle geometric patterns (grid, dots, or lines) as background texture. Provides structure and visual interest without color.

#### When to Use

- **Data/technical slides** needing structure
- **Slides about frameworks or systems**
- **Backgrounds that need subtle visual interest** without color
- When you want to add texture without movement

#### Props

```typescript
interface GeometricPatternProps {
  type: "dots" | "grid" | "lines"
  opacity: number       // Pattern visibility (0.04-0.15 recommended)
  color: string         // Hex color for pattern
  spacing: number       // Gap between pattern elements (px)
  angle?: number        // (lines only) Rotation angle (0-360 degrees)
}
```

#### Example 1: Dot Grid (Most Versatile)

```tsx
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

export default function SlideFramework() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <GeometricPattern
        type="dots"              // or "grid" or "lines"
        opacity={0.06}           // Very subtle
        color="#0A0A0A"          // Charcoal
        spacing={40}             // Dot spacing in pixels
      />

      <div className="relative z-10">
        {/* Content */}
      </div>
    </section>
  )
}
```

#### Example 2: Grid Pattern (Technical Slides)

```tsx
<GeometricPattern
  type="grid"
  opacity={0.08}
  color="#FF4D00"    // Orange grid for branded look
  spacing={60}
/>
```

#### Example 3: Lines Pattern (Directional Flow)

```tsx
<GeometricPattern
  type="lines"
  opacity={0.1}
  color="#0A0A0A"
  spacing={30}
  angle={45}         // Diagonal lines
/>
```

#### Best Practices

- ✅ **Keep opacity very low** (0.04-0.10) for subtlety
- ✅ **Use charcoal** (#0A0A0A) for neutral backgrounds
- ✅ **Use orange** (#FF4D00) sparingly for branded moments
- ✅ **Larger spacing** (50-80px) for cleaner look
- ✅ **Smaller spacing** (20-40px) for technical/data slides
- ⚠️ **Avoid high opacity** (>0.15) - becomes distracting

#### Pattern Type Selection

| Pattern | Use Case | Best Spacing |
|---------|----------|--------------|
| `dots` | General purpose, versatile | 30-60px |
| `grid` | Technical/data slides, frameworks | 40-80px |
| `lines` | Directional flow, movement themes | 20-40px |

---

<a name="layering-components"></a>
## Layering Components Effectively

### Standard Layer Order (Bottom to Top)

```tsx
<section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
  {/* Layer 1: Algorithmic background (color and movement) */}
  <MeshGradientBackground
    colors={['#FF4D00', '#F5A623', '#FFF5E1', '#0A0A0A']}
    speed={0.4}
    complexity={3}
  />

  {/* Layer 2: AI-generated image (optional, for atmosphere) */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/generated-images/..."
      fill
      className="object-cover opacity-15 mix-blend-multiply"
      aria-hidden="true"
    />
  </div>

  {/* Layer 3: Geometric pattern (structure) */}
  <GeometricPattern type="dots" opacity={0.06} color="#0A0A0A" spacing={60} />

  {/* Layer 4: Grain overlay (analog warmth) */}
  <GrainOverlay opacity={0.15} />

  {/* Layer 5: Content (always z-10) */}
  <div className="relative z-10 max-w-6xl w-full">
    {/* Your slide content */}
  </div>
</section>
```

### When to Omit Layers

- **Skip algorithmic background**: For simple/minimal slides or when AI image is primary visual
- **Skip AI image**: For interactive-heavy slides or when algorithmic background is sufficient
- **Skip geometric pattern**: For organic/creative slides where structure feels too rigid
- **Never skip grain overlay**: It's the signature finishing touch

### Example: Minimal Layering (Text-focused Slide)

```tsx
<section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-background">
  {/* Just grain, no other backgrounds */}
  <GrainOverlay opacity={0.12} />

  <div className="relative z-10 max-w-4xl w-full">
    <h1>Simple, Clean Message</h1>
  </div>
</section>
```

### Example: Maximum Impact Layering (Hero Slide)

```tsx
<section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
  {/* Full layering for maximum visual impact */}
  <MeshGradientBackground
    colors={['#FF4D00', '#F5A623', '#FFF5E1', '#0A0A0A']}
    speed={0.4}
    complexity={3}
  />

  <div className="absolute inset-0 z-0">
    <Image
      src="/generated-images/transformation-hero.png"
      fill
      className="object-cover opacity-15 mix-blend-multiply"
      aria-hidden="true"
    />
  </div>

  <GeometricPattern type="dots" opacity={0.05} color="#0A0A0A" spacing={60} />
  <GrainOverlay opacity={0.18} />

  <div className="relative z-10 max-w-7xl w-full text-center space-y-12">
    <Badge variant="glow" className="animate-slide-in-down">Module 02</Badge>
    <h1 className="text-9xl font-bebas animate-fade-in delay-200 fill-backwards">
      THE FIVE LEVELS <span className="text-primary animate-glow-pulse">FRAMEWORK</span>
    </h1>
  </div>
</section>
```

### Layering Decision Tree

```
Is this a hero/title slide?
  ✅ YES → Full layering (MeshGradient + Image + Pattern + Grain)
  ❌ NO → Continue...

Is this an interactive slide (toggles, canvas, hover cards)?
  ✅ YES → Minimal layering (Grain only, maybe subtle Pattern)
  ❌ NO → Continue...

Is this a data/technical slide?
  ✅ YES → Pattern + Grain (structure without distraction)
  ❌ NO → Continue...

Is this a content-heavy slide?
  ✅ YES → Grain only (clean focus on content)
  ❌ NO → Standard layering (MeshGradient + Grain)
```

---

<a name="performance"></a>
## Performance Considerations

### Canvas-Based Components (MeshGradient, ParticleField)

**Impact**: Medium to High

**Optimization tips**:
- Use `requestAnimationFrame` for smooth 60fps
- Clean up animations on unmount with `cancelAnimationFrame`
- Limit complexity and particle counts
- Test on lower-end devices

**Recommended limits**:
- **MeshGradient**: Max complexity of 4
- **ParticleField**: Max 150 particles
- **Both together**: Avoid - choose one per slide

### Static Components (GrainOverlay, GeometricPattern)

**Impact**: Very Low

**Optimization tips**:
- These are CSS/SVG-based, minimal performance cost
- Can be used on every slide without concern
- Grain overlay uses CSS filter, negligible impact

### Testing

Always test slides with multiple background layers on:
- ✅ Modern laptops (60fps target)
- ✅ Older laptops (30fps acceptable)
- ✅ External displays (4K/high-res)
- ✅ Presentation mode (performance can differ)

---

<a name="related-documentation"></a>
## Related Documentation

For complete implementation, also reference:

- **`ai_docs/DESIGN_AESTHETICS.md`** - Color palette, typography, animation system
- **`ai_docs/INTERACTIVE_PATTERNS.md`** - Interactive slide patterns and examples
- **`ai_docs/PRESENTATION_DESIGN_GUIDELINES.md`** - Layout patterns, quality standards
- **`ai_docs/IMAGE_GENERATION_GUIDE.md`** - AI image generation for slide backgrounds

---

**Remember**: These components are tools to enhance your message, not replace it. Always prioritize content clarity over visual complexity. When in doubt, use less.
