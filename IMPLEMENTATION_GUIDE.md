# Interactive Visual Slides - Implementation Guide

## Quick Start for New Sessions

### 1. Current Status
✅ **Completed:**
- Algorithmic art library (`lib/algorithmic-art/`)
- TypeScript data structures (`types/presentation-data.ts`)
- 4 showcase slides (101, 102, 103, 211)
- Reusable components (MeshGradientBackground, ParticleField)

🚧 **Remaining Work:**
- 13 more slides from the spec (see `specs/interactive-visual-slides-transformation.md`)
- AI background image generation
- Additional algorithmic components

### 2. Development Workflow

**Start Development Server:**
```bash
pnpm run dev
# Opens at http://localhost:3000
```

**Build & Validate:**
```bash
pnpm run build  # Must pass with 0 errors
```

### 3. Creating New Slides - Step by Step

#### Pattern to Follow (Proven Quality Standard):

**Example: Creating Slide 104 (Cost Flow Animation)**

1. **Read the spec first:**
```bash
# Reference: specs/interactive-visual-slides-transformation.md
# Lines 148-150 describe Slide 104 requirements
```

2. **Create the component file:**
```tsx
// components/slide-104-cost-flow-animated.tsx
"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
// Import algorithmic components as needed:
// import { ParticleField } from "@/components/algorithmic/particle-field"
// import { MeshGradientBackground } from "@/components/algorithmic/mesh-gradient-background"

export function Slide104CostFlowAnimated() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Algorithmic background layers */}
      <GrainOverlay opacity={0.15} />
      
      {/* Content */}
      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            CATEGORY BADGE
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Your Title Here
          </h2>
        </div>

        {/* Interactive content here */}
      </div>
    </section>
  )
}
```

3. **Import into app/page.tsx:**
```tsx
import { Slide104CostFlowAnimated } from "@/components/slide-104-cost-flow-animated"

// Add to slides array:
const slides = [
  // ... existing slides
  <Slide104CostFlowAnimated key="slide-104" />,
]
```

4. **Test immediately:**
```bash
# Dev server auto-reloads, check http://localhost:3000
# Navigate to your new slide using arrow keys
```

5. **Update the spec:**
```markdown
- [x] **Build Slide 104: Implementation Cost Flow Animation**
  - Status: Completed
  - Comments: Created slide-104-cost-flow-animated.tsx with [describe features]
```

### 4. Quality Checklist (Use This Every Time)

Before marking a slide as complete, verify:

**Visual Appeal:**
- [ ] Color usage follows design system (electric orange #FF4D00, neon cyan #00BBFF)
- [ ] Typography hierarchy is clear (Bebas Neue for titles, Syne for emphasis)
- [ ] Spacing is consistent (p-8 lg:p-16 for sections, gap-4/6/8 for grids)
- [ ] Animations are smooth (use animate-fade-in, animate-slide-in-up, etc.)

**Interactivity:**
- [ ] Interactive elements have clear visual feedback (hover, focus states)
- [ ] Transitions are smooth (transition-all duration-300)
- [ ] Mouse/keyboard interactions work correctly
- [ ] "use client" directive is added when using useState/useEffect

**Accessibility:**
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Interactive elements have visible focus states (ring-2 ring-primary)
- [ ] Icons have aria-label or text labels
- [ ] Respects prefers-reduced-motion (use useReducedMotion() hook)

**Technical:**
- [ ] Build passes: `pnpm run build`
- [ ] No TypeScript errors
- [ ] Component is properly exported
- [ ] Uses existing types from `types/presentation-data.ts` if needed

### 5. Reusable Components Library

**Available Algorithmic Components:**
```tsx
// Animated gradient background
import { MeshGradientBackground } from "@/components/algorithmic/mesh-gradient-background"
<MeshGradientBackground colors={["#FF4D00", "#00BBFF"]} speed={0.0003} />

// Interactive particle field
import { ParticleField } from "@/components/algorithmic/particle-field"
<ParticleField particleCount={100} color="#FF4D00" interactive={true} />
```

**Available Hooks:**
```tsx
import { 
  useCanvasAnimation,      // Canvas with RAF loop
  useParticleSystem,       // Particle system management
  useMousePosition,        // Track mouse position
  useReducedMotion,        // Respect accessibility preference
  useFPS                   // Performance monitoring
} from "@/lib/algorithmic-art"
```

**Available Data:**
```tsx
import { 
  FIVE_LEVELS,             // All level data
  calculateROI,            // ROI calculation function
  LEVEL_3_ECONOMICS,       // Level 3 economic data
  LEVEL_4_ECONOMICS,       // Level 4 economic data
  LEVEL_3_FAILURE_TIMELINE // Timeline events
} from "@/types/presentation-data"
```

### 6. Common Patterns Reference

**Interactive Toggle Pattern (see Slide 103):**
```tsx
const [activeView, setActiveView] = useState<"option1" | "option2">("option1")

<Button onClick={() => setActiveView("option1")}>Option 1</Button>
<Button onClick={() => setActiveView("option2")}>Option 2</Button>

{activeView === "option1" ? <ComponentA /> : <ComponentB />}
```

**Hover Detail Panel Pattern (see Slide 102):**
```tsx
const [activeItem, setActiveItem] = useState<string | null>(null)

<div onMouseEnter={() => setActiveItem("item1")}>
  Item 1
</div>

{activeItem && (
  <Card className="animate-slide-in-up">
    <CardContent>{/* Details */}</CardContent>
  </Card>
)}
```

**Recharts Visualization Pattern (see Slide 211):**
```tsx
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={yourData}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#FF4D00" />
  </BarChart>
</ResponsiveContainer>
```

### 7. File Naming Conventions

**Slides:**
- Format: `slide-{number}-{description}.tsx`
- Examples: `slide-101-title-visual.tsx`, `slide-211-roi-calculator.tsx`

**Algorithmic Components:**
- Location: `components/algorithmic/`
- Format: `{feature}-{description}.tsx`
- Examples: `particle-field.tsx`, `mesh-gradient-background.tsx`

**Interactive Components:**
- Location: `components/interactive/` (create if needed)
- Format: `{feature}-{widget}.tsx`
- Examples: `roi-calculator.tsx`, `timeline-scrubber.tsx`

### 8. Git Workflow

**After completing slides:**
```bash
git add .
git status  # Review changes
git commit -m "feat: add slides [numbers] with [features]

- Slide X: [description]
- Slide Y: [description]

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
```

### 9. Next Session Command

**To continue where you left off, use:**
```bash
/implement specs/interactive-visual-slides-transformation.md
```

This command will:
- Read the spec file
- See what's already completed (checked boxes)
- Continue building the remaining unchecked slides
- Follow the same quality patterns established

### 10. Future Enhancements Checklist

When all slides are complete, consider:
- [ ] Generate AI backgrounds using `tsx generate-image.ts --template [type]`
- [ ] Add Framer Motion for page transitions
- [ ] Implement lazy loading for performance
- [ ] Add custom cursors for interactive elements
- [ ] Create slide-specific sound effects (optional)
- [ ] Build presenter mode with notes
- [ ] Add export to PDF functionality

---

## Quick Reference: Design System

**Colors:**
- Primary: `#FF4D00` (electric orange)
- Accent: `#00BBFF` (neon cyan)
- Warning: `#F59E0B` (amber)
- Success: `#10B981` (emerald)
- Destructive: `#EF4444` (red)

**Typography:**
- Titles: `font-bebas text-6xl md:text-8xl`
- Emphasis: `font-syne text-2xl md:text-4xl font-bold`
- Body: `font-manrope text-base lg:text-lg`
- Data: `font-jetbrains text-base`

**Animations:**
- Entrance: `animate-fade-in`, `animate-slide-in-up`, `animate-scale-in`
- Delays: `delay-100`, `delay-300`, `delay-500` (with `fill-backwards`)
- Transitions: `transition-all duration-300`

**Layout:**
- Container: `max-w-7xl w-full space-y-10`
- Padding: `p-8 lg:p-16`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
