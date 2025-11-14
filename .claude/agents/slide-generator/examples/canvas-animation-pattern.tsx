/**
 * CANVAS ANIMATION PATTERN
 *
 * When to use:
 * - Time-based processes (iteration cycles, project timelines)
 * - Network effects (trust spreading, organizational change)
 * - Iteration speed comparisons (Level 3 vs Level 4)
 * - Spreading patterns (adoption, resistance, scar tissue)
 * - Anything that needs to show change over time
 *
 * Why it works:
 * - Watching a process unfold in real-time creates visceral understanding
 * - Executives can LITERALLY SEE why something fails (e.g., iterates 13x slower)
 * - Visual proof is more powerful than descriptions
 * - Memorable and engaging
 *
 * Key features demonstrated:
 * - useRef for canvas element access
 * - useEffect for animation lifecycle
 * - requestAnimationFrame for smooth 60fps animation
 * - Cleanup function to prevent memory leaks
 * - Time-based progress calculations
 * - Responsive canvas sizing
 *
 * Reference: slide-207-root-cause-iteration.tsx (Slide 10)
 *           slide-208-scar-tissue.tsx (Slide 11)
 */

"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"

export function CanvasAnimationPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [iterationCountSlow, setIterationCountSlow] = useState(0)
  const [iterationCountFast, setIterationCountFast] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const canvasWidth = rect.width
    const canvasHeight = rect.height

    let animationId: number
    const startTime = Date.now()

    // Animation parameters
    const CYCLE_TIME_SLOW = 8000  // 8 seconds per iteration (slow)
    const CYCLE_TIME_FAST = 800   // 0.8 seconds per iteration (fast) - 10x faster

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      // Calculate progress for both cycles
      const progressSlow = (elapsed % CYCLE_TIME_SLOW) / CYCLE_TIME_SLOW
      const progressFast = (elapsed % CYCLE_TIME_FAST) / CYCLE_TIME_FAST

      // Update iteration counts
      setIterationCountSlow(Math.floor(elapsed / CYCLE_TIME_SLOW))
      setIterationCountFast(Math.floor(elapsed / CYCLE_TIME_FAST))

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Draw slow iteration circle (left side, red - Level 3)
      const centerSlowX = canvasWidth * 0.25
      const centerY = canvasHeight * 0.5
      const radius = Math.min(canvasWidth, canvasHeight) * 0.15

      // Slow circle background
      ctx.strokeStyle = "#3f3f46" // zinc-700
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.arc(centerSlowX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Slow circle progress
      ctx.strokeStyle = "#EF4444" // red-500
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.arc(
        centerSlowX,
        centerY,
        radius,
        -Math.PI / 2,
        -Math.PI / 2 + Math.PI * 2 * progressSlow
      )
      ctx.stroke()

      // Slow progress arrow
      const angleSlowArrow = -Math.PI / 2 + Math.PI * 2 * progressSlow
      const arrowSlowX = centerSlowX + Math.cos(angleSlowArrow) * radius
      const arrowSlowY = centerY + Math.sin(angleSlowArrow) * radius
      ctx.fillStyle = "#EF4444"
      ctx.beginPath()
      ctx.arc(arrowSlowX, arrowSlowY, 6, 0, Math.PI * 2)
      ctx.fill()

      // Draw fast iteration circle (right side, cyan - Level 4)
      const centerFastX = canvasWidth * 0.75

      // Fast circle background
      ctx.strokeStyle = "#3f3f46" // zinc-700
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.arc(centerFastX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Fast circle progress
      ctx.strokeStyle = "#00BBFF" // cyan
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.arc(
        centerFastX,
        centerY,
        radius,
        -Math.PI / 2,
        -Math.PI / 2 + Math.PI * 2 * progressFast
      )
      ctx.stroke()

      // Fast progress arrow
      const angleFastArrow = -Math.PI / 2 + Math.PI * 2 * progressFast
      const arrowFastX = centerFastX + Math.cos(angleFastArrow) * radius
      const arrowFastY = centerY + Math.sin(angleFastArrow) * radius
      ctx.fillStyle = "#00BBFF"
      ctx.beginPath()
      ctx.arc(arrowFastX, arrowFastY, 6, 0, Math.PI * 2)
      ctx.fill()

      // Draw labels
      ctx.font = "bold 16px 'Manrope'"
      ctx.textAlign = "center"
      ctx.fillStyle = "#a1a1aa" // zinc-400

      ctx.fillText("Level 3", centerSlowX, canvasHeight * 0.15)
      ctx.fillText("Level 4", centerFastX, canvasHeight * 0.15)

      // Draw "Build → Deploy → Learn → Iterate" cycle labels
      ctx.font = "12px 'Manrope'"
      ctx.fillStyle = "#71717a" // zinc-500

      // Slow cycle label
      ctx.fillText("Build → Deploy → Learn", centerSlowX, canvasHeight * 0.85)

      // Fast cycle label
      ctx.fillText("Build → Deploy → Learn", centerFastX, canvasHeight * 0.85)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup function to prevent memory leaks
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background layers */}
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge className="animate-slide-in-down">Canvas Animation</Badge>
          <h2 className="text-5xl font-display animate-fade-in delay-200 fill-backwards">
            Why Level 3 Fails: <span className="text-primary">Iteration Speed</span>
          </h2>
          <p className="text-xl text-foreground/70 animate-slide-in-up delay-500 fill-backwards">
            Watch the difference in real-time
          </p>
        </div>

        {/* Canvas Animation */}
        <canvas
          ref={canvasRef}
          className="w-full border border-border rounded-xl bg-zinc-950/50 animate-fade-in delay-700 fill-backwards"
          style={{ height: "400px" }}
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-1000 fill-backwards">
          {/* Level 3 Card */}
          <Card className="border-red-500/50 bg-red-500/5">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="destructive">Level 3</Badge>
                <span className="text-3xl font-display text-red-500">
                  {iterationCountSlow}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-display text-red-500">
                  ~2 iterations/year
                </p>
                <p className="text-sm text-foreground/60">
                  Too slow to learn and adapt. By the time you iterate, the market has moved.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Level 4 Card */}
          <Card className="border-cyan-500/50 bg-cyan-500/5">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-cyan-500 hover:bg-cyan-600">Level 4</Badge>
                <span className="text-3xl font-display text-cyan-400">
                  {iterationCountFast}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-display text-cyan-400">
                  ~26 iterations/year
                </p>
                <p className="text-sm text-foreground/60">
                  Rapid learning and improvement. Iterate 10x+ faster than Level 3.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary animate-fade-in delay-1300 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm">
              <span className="font-semibold">Key Insight:</span> Level 3's slow iteration
              speed means you can't learn fast enough. By the time you finish one cycle,
              Level 4 teams have completed 10+ iterations and learned from their mistakes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

/**
 * IMPLEMENTATION CHECKLIST
 *
 * Visual Design:
 * ✓ Full-screen height (min-h-screen)
 * ✓ Canvas properly sized and responsive
 * ✓ Color-coding matches design system
 * ✓ Smooth 60fps animation
 * ✓ Clear visual hierarchy
 *
 * Canvas Animation:
 * ✓ useRef for canvas element
 * ✓ requestAnimationFrame for smooth animation
 * ✓ Proper cleanup function to prevent memory leaks
 * ✓ Device pixel ratio scaling for crisp rendering
 * ✓ Time-based progress calculations
 *
 * Accessibility:
 * ✓ Canvas has supporting text content
 * ✓ Color + text (not color-only)
 * ✓ Metrics cards provide same info as canvas
 * ✓ Semantic HTML structure
 *
 * Technical:
 * ✓ "use client" directive for client-side rendering
 * ✓ Proper useEffect dependencies
 * ✓ No memory leaks (cleanup on unmount)
 * ✓ Responsive canvas sizing
 * ✓ Type-safe code
 *
 * Performance:
 * ✓ Efficient animation loop
 * ✓ No unnecessary re-renders
 * ✓ Proper canvas clearing each frame
 * ✓ Smooth 60fps performance
 *
 * ADAPTATION GUIDE
 *
 * To adapt this pattern for your slide:
 *
 * 1. Define what you're animating:
 *    - Iteration cycles? Network spread? Process flow?
 *    - What changes over time?
 *    - What's the comparison? (fast vs slow, good vs bad, etc.)
 *
 * 2. Adjust animation parameters:
 *    - CYCLE_TIME: How long should one complete cycle take?
 *    - Colors: Match your comparison (red vs cyan, etc.)
 *    - Shapes: Circles, lines, nodes, graphs?
 *
 * 3. Customize visualization:
 *    - Replace circles with your shapes
 *    - Add more elements (nodes, connections, particles)
 *    - Adjust positioning and sizing
 *
 * 4. Update metrics cards:
 *    - Show relevant stats that change with animation
 *    - Use useState to update counts/values
 *    - Color-code to match canvas visualization
 *
 * CANVAS DRAWING PATTERNS
 *
 * Drawing circles:
 * ctx.beginPath()
 * ctx.arc(x, y, radius, startAngle, endAngle)
 * ctx.stroke() // or ctx.fill()
 *
 * Drawing lines:
 * ctx.beginPath()
 * ctx.moveTo(x1, y1)
 * ctx.lineTo(x2, y2)
 * ctx.stroke()
 *
 * Drawing text:
 * ctx.font = "16px 'Manrope'"
 * ctx.textAlign = "center"
 * ctx.fillText("Text", x, y)
 *
 * Gradients:
 * const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
 * gradient.addColorStop(0, "#color1")
 * gradient.addColorStop(1, "#color2")
 * ctx.fillStyle = gradient
 *
 * COMMON VARIATIONS
 *
 * Network visualization (like Slide 11):
 * - Draw nodes as circles at fixed positions
 * - Draw connections as lines between nodes
 * - Animate color changes (blue → red for trust decay)
 * - Add radial gradients for spreading effects
 *
 * Progress timeline:
 * - Horizontal line with markers
 * - Animate progress indicator moving along timeline
 * - Show milestones and achievements
 *
 * Particle systems:
 * - Create array of particle objects
 * - Update positions each frame
 * - Draw particles as small circles or shapes
 * - Add physics (velocity, acceleration, collision)
 *
 * Data flow visualization:
 * - Draw boxes/nodes for steps
 * - Animate arrows flowing between them
 * - Show data transformation at each step
 */
