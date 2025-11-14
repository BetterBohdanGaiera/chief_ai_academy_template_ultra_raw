/**
 * INTERACTIVE TOGGLE/COMPARISON PATTERN
 *
 * When to use:
 * - Showing before/after scenarios
 * - Comparing poor vs excellent execution
 * - Level comparisons (Level 3 vs Level 4)
 * - Contrasting approaches or outcomes
 *
 * Why it works:
 * - Executives can instantly see the dramatic difference between scenarios
 * - The interaction makes the comparison memorable and engaging
 * - Color-coding reinforces the contrast (red=bad, green/cyan=good)
 * - Same layout for both states makes differences clear
 *
 * Key features demonstrated:
 * - useState for tracking active view
 * - Button variants that change based on state
 * - Dynamic content rendering based on selection
 * - Color-coded metrics with visual hierarchy
 * - Smooth transitions with CSS animations
 *
 * Reference: slide-103-execution-interactive.tsx (Slide 3)
 */

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { TrendingDown, TrendingUp } from "lucide-react"

export function InteractiveTogglePattern() {
  // State to track which view is active
  const [execution, setExecution] = useState<"poor" | "excellent">("poor")

  // Data structure for both scenarios
  const scenarios = {
    poor: {
      title: "Poor Execution",
      color: "red",
      metrics: [
        { label: "User Adoption", value: "5%", icon: TrendingDown, trend: "down" },
        { label: "Response Time", value: "8-15 seconds", icon: TrendingDown, trend: "down" },
        { label: "User Satisfaction", value: "2.1/5", icon: TrendingDown, trend: "down" },
        { label: "Support Tickets", value: "847/month", icon: TrendingDown, trend: "down" }
      ]
    },
    excellent: {
      title: "Excellent Execution",
      color: "green",
      metrics: [
        { label: "User Adoption", value: "95%", icon: TrendingUp, trend: "up" },
        { label: "Response Time", value: "< 1 second", icon: TrendingUp, trend: "up" },
        { label: "User Satisfaction", value: "4.8/5", icon: TrendingUp, trend: "up" },
        { label: "Support Tickets", value: "12/month", icon: TrendingUp, trend: "up" }
      ]
    }
  }

  const currentScenario = scenarios[execution]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background layers */}
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge className="animate-slide-in-down">Interactive Comparison</Badge>
          <h2 className="text-5xl font-display animate-fade-in delay-200 fill-backwards">
            Same Use Case, <span className="text-primary">Different Execution</span>
          </h2>
          <p className="text-xl text-foreground/70 animate-slide-in-up delay-500 fill-backwards">
            Toggle between scenarios to see the dramatic difference
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-fade-in delay-700 fill-backwards">
          <Button
            variant={execution === "poor" ? "default" : "outline"}
            onClick={() => setExecution("poor")}
            className="px-8 py-6 text-lg"
          >
            <TrendingDown className="w-5 h-5 mr-2" />
            Poor Execution
          </Button>
          <Button
            variant={execution === "excellent" ? "default" : "outline"}
            onClick={() => setExecution("excellent")}
            className="px-8 py-6 text-lg"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Excellent Execution
          </Button>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentScenario.metrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <Card
                key={`${execution}-${idx}`}
                className={`
                  animate-fade-in
                  ${execution === "poor"
                    ? "border-red-500/50 bg-red-500/5"
                    : "border-green-500/50 bg-green-500/5"
                  }
                `}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground/60 font-medium">
                      {metric.label}
                    </p>
                    <Icon
                      className={`
                        w-5 h-5
                        ${execution === "poor" ? "text-red-500" : "text-green-500"}
                      `}
                    />
                  </div>
                  <p
                    className={`
                      text-4xl font-display
                      ${execution === "poor" ? "text-red-500" : "text-green-500"}
                    `}
                  >
                    {metric.value}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card
          className={`
            ${execution === "poor"
              ? "bg-red-500/5 border-red-500"
              : "bg-green-500/5 border-green-500"
            }
            animate-fade-in delay-300
          `}
        >
          <CardContent className="pt-4">
            <p className="text-center text-sm">
              <span className="font-semibold">Key Insight:</span>{" "}
              {execution === "poor"
                ? "Poor execution creates resistance and erodes trust, regardless of the technology."
                : "Excellent execution drives adoption and builds organizational confidence in AI solutions."
              }
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
 * ✓ Content properly centered
 * ✓ Responsive padding (p-8 lg:p-16)
 * ✓ Color-coding for clarity (red vs green)
 * ✓ Consistent spacing between elements
 *
 * Interactivity:
 * ✓ useState for tracking active state
 * ✓ Button variants change based on selection
 * ✓ Dynamic content rendering
 * ✓ Smooth transitions with animate-fade-in
 * ✓ Clear visual feedback on selection
 *
 * Accessibility:
 * ✓ Semantic HTML (section, button, etc.)
 * ✓ Clear button labels
 * ✓ Icon + text for buttons (not icon-only)
 * ✓ Color + icon + text (not color-only indicators)
 *
 * Technical:
 * ✓ "use client" directive for client-side state
 * ✓ Type-safe state management
 * ✓ Clean component structure
 * ✓ Reusable data structure
 * ✓ Key props for dynamic lists
 *
 * ADAPTATION GUIDE
 *
 * To adapt this pattern for your slide:
 *
 * 1. Define your comparison scenarios:
 *    - What are you comparing? (Level 3 vs 4, before/after, approach A vs B)
 *    - What metrics/content changes between states?
 *    - What color scheme represents each state?
 *
 * 2. Update the data structure:
 *    - Replace metrics array with your content
 *    - Adjust card layout if needed (2 columns, 3 columns, list, etc.)
 *    - Update titles and labels
 *
 * 3. Customize styling:
 *    - Color-coding: red/green, red/cyan, amber/cyan, etc.
 *    - Card styles: borders, backgrounds, shadows
 *    - Icons: choose appropriate lucide-react icons
 *
 * 4. Add context:
 *    - Update header with your slide title
 *    - Add key insight at bottom explaining the difference
 *    - Include badge indicating module/section
 *
 * COMMON VARIATIONS
 *
 * Two options side-by-side:
 * - Remove state, show both simultaneously
 * - Highlight one based on hover or click
 *
 * Three+ options:
 * - Use radio buttons instead of toggle
 * - Or use tabs component
 *
 * Animated transition:
 * - Add Framer Motion for smooth content swapping
 * - Slide in/out instead of fade
 *
 * With data visualization:
 * - Add Recharts below the cards
 * - Show same chart with different data
 */
