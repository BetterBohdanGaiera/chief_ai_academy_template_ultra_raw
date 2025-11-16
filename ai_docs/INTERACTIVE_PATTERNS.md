# Interactive Patterns for Executive Presentations

**Version**: 1.0 | **Last Updated**: 2025 | **Authoritative Reference**

This document defines the 5 core interactive patterns used throughout the Chief AI Academy presentations. These patterns have been proven highly effective for executive audiences and should be your primary tools when designing new slides.

---

## Table of Contents

1. [Core Philosophy: Show, Don't Tell](#core-philosophy)
2. [Pattern 1: Interactive Toggle/Comparison](#pattern-1)
3. [Pattern 2: Canvas Animations for Complex Logic](#pattern-2)
4. [Pattern 3: Hover-Reveal Cards](#pattern-3)
5. [Pattern 4: Click-to-Expand Details](#pattern-4)
6. [Pattern 5: Mini POCs and Interactive Demos](#pattern-5)
7. [Pattern Selection Guide](#pattern-selection-guide)
8. [Background Animations](#background-animations)
9. [Related Documentation](#related-documentation)

---

<a name="core-philosophy"></a>
## Core Philosophy: Show, Don't Tell

**CRITICAL PRINCIPLE**: Prefer interactive, visual demonstrations over static text-heavy slides.

The most effective slides share a common trait: they **show** concepts rather than just describe them. Executives learn better by:

- **Interacting with toggles** to see dramatic differences
- **Watching animations** that demonstrate time-based processes
- **Hovering to explore** options at their own pace
- **Clicking to expand** and compare detailed choices
- **Using mini POCs** that prove concepts work

**When designing a new slide, always ask**: *"Can I demonstrate this concept instead of just describing it?"*

### Why This Works

- **Interactive = Memorable**: Engagement creates stronger retention
- **Visual Proof > Descriptions**: Seeing is believing
- **Self-Paced Exploration**: Executives control information depth
- **Creates "Aha!" Moments**: Understanding happens viscerally, not intellectually

---

<a name="pattern-1"></a>
## Pattern 1: Interactive Toggle/Comparison

### When to Use

- Showing before/after scenarios
- Poor vs excellent execution
- Level comparisons (Level 3 vs Level 4)
- Contrasting approaches or strategies

### Why It Works

Executives can **instantly see the dramatic difference** between scenarios. The interaction makes the comparison memorable and engaging. Same layout across both views makes differences crystal clear.

### Reference Example

**Slide 3** (`slide-103-execution-interactive.tsx`) - Execution Quality Toggle

### Complete Implementation

```tsx
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/background/GrainOverlay"

export default function SlideExecutionToggle() {
  const [execution, setExecution] = useState<"poor" | "excellent">("poor")

  const scenarios = {
    poor: [
      { metric: "User Adoption", value: "5%", color: "text-red-500" },
      { metric: "Response Time", value: "8-15 seconds", color: "text-red-500" },
      { metric: "Accuracy", value: "60%", color: "text-red-500" },
      { metric: "User Satisfaction", value: "2.1/5", color: "text-red-500" }
    ],
    excellent: [
      { metric: "User Adoption", value: "95%", color: "text-green-500" },
      { metric: "Response Time", value: "< 1 second", color: "text-green-500" },
      { metric: "Accuracy", value: "98%", color: "text-green-500" },
      { metric: "User Satisfaction", value: "4.8/5", color: "text-green-500" }
    ]
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Backgrounds */}
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <h2 className="text-4xl font-display">
          Same Use Case, Different <span className="text-primary">Execution</span>
        </h2>

        {/* Toggle Buttons */}
        <div className="flex gap-4">
          <Button
            variant={execution === "poor" ? "default" : "outline"}
            onClick={() => setExecution("poor")}
            className="px-8"
          >
            Poor Execution
          </Button>
          <Button
            variant={execution === "excellent" ? "default" : "outline"}
            onClick={() => setExecution("excellent")}
            className="px-8"
          >
            Excellent Execution
          </Button>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios[execution].map((item, idx) => (
            <Card key={idx} className="animate-fade-in">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/60">{item.metric}</p>
                <p className={`text-4xl font-display mt-2 ${item.color}`}>
                  {item.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Key Techniques

- **useState** for tracking current view (`poor` | `excellent`)
- **Button variants** change based on active state
- **Color-coding**: red for poor, green/cyan for excellent
- **Smooth transitions** with `animate-fade-in`
- **Clear visual hierarchy** with consistent card layout
- **Same layout structure** for both views makes differences obvious

---

<a name="pattern-2"></a>
## Pattern 2: Canvas Animations for Complex Logic

### When to Use

- Time-based processes
- Iteration cycles and speed comparisons
- Network effects and spreading patterns
- Organizational dynamics
- Any concept that needs to show change over time

### Why It Works

**Watching a process unfold in real-time creates visceral understanding.** Executives can literally SEE why Level 3 fails (iterates 13x slower) or how organizational resistance spreads through a network.

### Reference Examples

- **Slide 10** (`slide-207-root-cause-iteration.tsx`) - Iteration speed comparison
- **Slide 11** (`slide-208-scar-tissue.tsx`) - Network trust decay visualization

### Complete Implementation

```tsx
"use client"
import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/background/GrainOverlay"

export default function SlideIterationSpeed() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 1200
    canvas.height = 600

    let animationId: number
    const CYCLE_TIME_L3 = 10000 // 10 seconds per iteration (slow)
    const CYCLE_TIME_L4 = 1000   // 1 second per iteration (fast)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const now = Date.now()
      const progressL3 = (now % CYCLE_TIME_L3) / CYCLE_TIME_L3
      const progressL4 = (now % CYCLE_TIME_L4) / CYCLE_TIME_L4

      // Draw Level 3 circle (left, slow)
      ctx.save()
      ctx.translate(300, 300)
      ctx.strokeStyle = "#EF4444"
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.arc(0, 0, 100, 0, Math.PI * 2 * progressL3)
      ctx.stroke()
      ctx.restore()

      // Draw Level 4 circle (right, fast)
      ctx.save()
      ctx.translate(900, 300)
      ctx.strokeStyle = "#00BBFF"
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.arc(0, 0, 100, 0, Math.PI * 2 * progressL4)
      ctx.stroke()
      ctx.restore()

      // Draw iteration counters
      ctx.fillStyle = "#EF4444"
      ctx.font = "bold 24px 'Bebas Neue'"
      ctx.textAlign = "center"
      ctx.fillText(`${Math.floor(now / CYCLE_TIME_L3)} iterations`, 300, 450)

      ctx.fillStyle = "#00BBFF"
      ctx.fillText(`${Math.floor(now / CYCLE_TIME_L4)} iterations`, 900, 450)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        <h2 className="text-4xl font-display text-center">
          Why Level 3 Fails: <span className="text-primary">Iteration Speed</span>
        </h2>

        <canvas
          ref={canvasRef}
          className="w-full h-auto border border-border rounded-xl"
          style={{ maxWidth: "1200px", aspectRatio: "2/1" }}
        />

        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <Badge variant="destructive" className="mb-2">Level 3</Badge>
            <p className="text-2xl font-display text-red-500">2 iterations/year</p>
            <p className="text-sm text-foreground/60">Too slow to learn and adapt</p>
          </div>
          <div>
            <Badge className="mb-2">Level 4</Badge>
            <p className="text-2xl font-display text-cyan-400">26 iterations/year</p>
            <p className="text-sm text-foreground/60">Rapid learning and improvement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Key Techniques

- **useRef** for canvas element access
- **requestAnimationFrame** for smooth 60fps animation
- **Cleanup function** to cancel animation on unmount (prevents memory leaks)
- **Time-based progress calculations** using `Date.now()` and modulo
- **Color-coding** matching the design system (#EF4444 red, #00BBFF cyan)
- **Canvas sized responsively** with aspect ratio
- **Visual + textual feedback** (animation + counters)

---

<a name="pattern-3"></a>
## Pattern 3: Hover-Reveal Cards

### When to Use

- Exploring multiple options
- Feature lists with details
- Capability breakdowns
- Approach comparisons
- When you want clean overview with details on demand

### Why It Works

**Default state is scannable at a glance. Hover reveals rich details without overwhelming.** Perfect for executive audiences who want quick insights with the option to dig deeper.

### Reference Examples

- **Slides 23-25** (`slide-302/303/304`) - Approach exploration
- **Slides 31-32** (`slide-3b03/3b04`) - Capability cards

### Complete Implementation

```tsx
"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/background/GrainOverlay"

export default function SlideApproachCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const approaches = [
    {
      id: "ml",
      title: "ML Approach",
      icon: "🤖",
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      whenToUse: [
        "You have historical data showing patterns",
        "You need to predict or classify at scale",
        "The pattern is stable and repeatable"
      ]
    },
    {
      id: "agentic",
      title: "Agentic AI",
      icon: "🧠",
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      whenToUse: [
        "You need reasoning with your company context",
        "The task requires multi-step problem solving",
        "You want to iterate and improve over time"
      ]
    },
    {
      id: "tools",
      title: "Existing Tools",
      icon: "🔧",
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      whenToUse: [
        "The problem is well-defined and common",
        "A proven solution already exists",
        "You need reliability over customization"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-display">
            Three Approaches to <span className="text-primary">AI Solutions</span>
          </h2>
          <p className="text-xl text-foreground/70">Hover to explore when to use each</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approaches.map((approach, idx) => (
            <Card
              key={approach.id}
              className={`
                transition-all duration-300 cursor-pointer
                ${activeCard === approach.id
                  ? `scale-105 ${approach.color} ${approach.glowColor}`
                  : "border-border hover:scale-102"
                }
                animate-fade-in delay-${idx * 200 + 300} fill-backwards
              `}
              onMouseEnter={() => setActiveCard(approach.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="text-6xl text-center">{approach.icon}</div>
                <h3 className="text-2xl font-display text-center">{approach.title}</h3>

                {/* Revealed content */}
                {activeCard === approach.id && (
                  <div className="animate-fade-in space-y-2">
                    <p className="text-sm font-semibold text-primary">WHEN TO USE:</p>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {approach.whenToUse.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Key Techniques

- **useState** tracking which card is hovered
- **onMouseEnter/onMouseLeave** handlers
- **Scale transforms**: `scale-105` for active, `scale-102` for hover
- **Custom glow effects** with shadow utilities
- **Conditional rendering** of detail sections
- **Staggered entrance animations**: `delay-300`, `delay-500`, `delay-700`
- **Color-coding** with border and glow matching

---

<a name="pattern-4"></a>
## Pattern 4: Click-to-Expand Details

### When to Use

- Decision frameworks
- Implementation paths
- Comparing multiple detailed options
- When users need to compare pros/cons/best-for across choices

### Why It Works

**Keeps the interface clean while allowing deep exploration.** Users can select and compare options at their own pace. Perfect for strategic decision-making slides where executives need to evaluate trade-offs.

### Reference Example

**Slide 13** (`slide-210-level4-iterative.tsx`) - Implementation Path Selector

### Complete Implementation

```tsx
"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/background/GrainOverlay"

export default function SlideImplementationPaths() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  const paths = [
    {
      id: "frameworks",
      title: "Pre-built Frameworks",
      badge: "Fastest Start",
      icon: "🚀",
      advantages: [
        "Rapid deployment (days not months)",
        "Built-in best practices",
        "Active community support"
      ],
      considerations: [
        "Less customization flexibility",
        "Vendor lock-in risk",
        "May outgrow capabilities"
      ],
      bestFor: "Teams needing quick wins and proven patterns"
    },
    {
      id: "custom",
      title: "Custom Development",
      badge: "Maximum Control",
      icon: "🔧",
      advantages: [
        "Tailored to exact needs",
        "Full control over architecture",
        "Unlimited scalability"
      ],
      considerations: [
        "Longer time to value",
        "Requires strong technical team",
        "Higher maintenance burden"
      ],
      bestFor: "Organizations with unique requirements and technical capability"
    },
    {
      id: "hybrid",
      title: "Hybrid Approach",
      badge: "Balanced",
      icon: "⚖️",
      advantages: [
        "Balance speed and flexibility",
        "Iterate from frameworks to custom",
        "Reduce risk while learning"
      ],
      considerations: [
        "Requires migration planning",
        "May have integration complexity",
        "Need clear decision criteria"
      ],
      bestFor: "Most organizations starting their AI journey"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge className="animate-slide-in-down">Level 4: Iterative</Badge>
          <h2 className="text-5xl font-display animate-fade-in delay-200 fill-backwards">
            Choose Your <span className="text-primary">Implementation Path</span>
          </h2>
          <p className="text-lg text-foreground/70 animate-slide-in-up delay-500 fill-backwards">
            Click each card to explore details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path, idx) => (
            <Card
              key={path.id}
              className={`
                cursor-pointer transition-all duration-300
                ${selectedPath === path.id
                  ? "scale-105 border-primary shadow-[0_0_30px_rgba(0,187,255,0.3)]"
                  : "border-border hover:scale-102 hover:border-primary/50"
                }
                animate-fade-in delay-${idx * 200 + 700} fill-backwards
              `}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{path.icon}</span>
                  <Badge variant="secondary">{path.badge}</Badge>
                </div>

                <h3 className="text-xl font-display">{path.title}</h3>

                {/* Expanded content */}
                {selectedPath === path.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <p className="text-sm font-semibold text-green-500 mb-2">✓ ADVANTAGES:</p>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        {path.advantages.map((adv, i) => (
                          <li key={i}>• {adv}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-orange-500 mb-2">⚠ CONSIDERATIONS:</p>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        {path.considerations.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-primary mb-1">BEST FOR:</p>
                      <p className="text-sm text-foreground/90">{path.bestFor}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Key Techniques

- **onClick handler** to toggle selection
- **Toggle logic**: select if different, deselect if same (`selectedPath === path.id ? null : path.id`)
- **Border and shadow changes** on selection
- **Color-coded sections**: green for advantages, orange for considerations
- **Clear visual feedback** on what's selected
- **Staggered entrance animations**
- **Detailed information architecture**: advantages, considerations, best-for

---

<a name="pattern-5"></a>
## Pattern 5: Mini POCs and Interactive Demos

### When to Use

- Teaching complex concepts
- Showing how systems work
- Demonstrating cause and effect
- Making abstract ideas concrete

### Why It Works

**Executives learn by doing.** A working demo of "add use cases and watch coverage increase" is infinitely more powerful than bullets explaining the same concept.

### Complete Implementation

```tsx
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { GrainOverlay } from "@/components/background/GrainOverlay"

export default function SlideCoverageDemo() {
  const [useCases, setUseCases] = useState([
    "Customer Support Chatbot"
  ])

  const availableUseCases = [
    "Sales Lead Qualification",
    "Internal Knowledge Base",
    "Document Analysis",
    "Data Extraction",
    "Process Automation"
  ]

  const coverage = Math.min(95, 20 + (useCases.length * 15))

  const addUseCase = () => {
    const remaining = availableUseCases.filter(uc => !useCases.includes(uc))
    if (remaining.length > 0) {
      setUseCases([...useCases, remaining[0]])
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-5xl w-full space-y-8">
        <h2 className="text-4xl font-display text-center">
          Interactive Demo: <span className="text-primary">Expanding Coverage</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Use Cases */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Use Cases</h3>
              <Button
                onClick={addUseCase}
                disabled={useCases.length >= 5}
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Use Case
              </Button>
            </div>

            <div className="space-y-2">
              {useCases.map((uc, idx) => (
                <Card key={idx} className="animate-slide-in-right">
                  <CardContent className="pt-4">
                    <p className="text-sm">{uc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Coverage Meter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Test Coverage</h3>

            <Card className="border-primary">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <p className="text-7xl font-display text-primary transition-all duration-500">
                    {coverage}%
                  </p>

                  <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-primary transition-all duration-500"
                      style={{ width: `${coverage}%` }}
                    />
                  </div>

                  <p className="text-sm text-foreground/60">
                    {coverage < 50 && "❌ Insufficient coverage"}
                    {coverage >= 50 && coverage < 80 && "⚠️ Adequate coverage"}
                    {coverage >= 80 && "✅ Excellent coverage"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold">Key Insight:</span> Each use case added improves test coverage by validating more scenarios and edge cases.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
```

### Key Techniques

- **Real calculations** based on user interaction
- **Visual feedback**: numbers, progress bars, status messages
- **Dynamic list rendering** with animations
- **Button states**: disabled when complete
- **Transition animations** on calculated values (`transition-all duration-500`)
- **Clear cause-and-effect** relationship between action and result

---

<a name="pattern-selection-guide"></a>
## Pattern Selection Guide

Use this decision tree when designing slides:

```
┌─────────────────────────────────────────────────────────────┐
│ Does the slide compare two scenarios or show before/after?  │
│ → Use Pattern 1: Interactive Toggle/Comparison              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Does the slide need to show a process over time or          │
│ network effects?                                             │
│ → Use Pattern 2: Canvas Animations                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Does the slide present multiple options to explore?         │
│ → Use Pattern 3: Hover-Reveal Cards                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Does the slide require detailed comparison of choices?      │
│ → Use Pattern 4: Click-to-Expand Details                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Does the slide explain a complex concept that can be        │
│ demonstrated?                                                │
│ → Use Pattern 5: Mini POC/Interactive Demo                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ None of the above?                                           │
│ → Consider if the slide can be made more interactive        │
│ → Or use reference patterns from ai_docs/components_inspiration/    │
└─────────────────────────────────────────────────────────────┘
```

---

<a name="background-animations"></a>
## Background Animations

For slides where interactivity is in the **foreground**, enhance with **subtle background animations**:

### Slowly Rotating Icon

```tsx
<RefreshCw
  className="absolute top-20 right-20 w-64 h-64 text-primary/10 animate-spin-slow"
  style={{ animationDuration: "20s" }}
/>
```

### Pulsing Glow Effect

```tsx
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
```

### Floating Particles (Use Sparingly)

```tsx
<GradientMesh variant="warm" className="animate-mesh-shift" />
```

### Rules for Background Animations

- ✅ **Keep opacity very low** (5-15%)
- ✅ **Slow movement** (10-20 second durations)
- ✅ **Never compete** with foreground interactivity
- ✅ **Test** that they don't distract from the message

---

<a name="related-documentation"></a>
## Related Documentation

For complete implementation, also reference:

- **`ai_docs/DESIGN_AESTHETICS.md`** - Typography, colors, component variants, animations
- **`ai_docs/PRESENTATION_DESIGN_GUIDELINES.md`** - Layout patterns, quality standards
- **`ai_docs/IMAGE_GENERATION_GUIDE.md`** - AI image generation for slides
- **`ai_docs/components_inspiration/`** - Additional pattern examples and variations
- **`.claude/agents/slide-generator.md`** - Slide design agent with self-reflection workflow

---

**Remember**: These patterns are **proven to work** with executive audiences. Always start here before creating custom interactions. When in doubt, ask: *"Can I show this instead of telling it?"*
