/**
 * HOVER-REVEAL CARDS PATTERN
 *
 * When to use:
 * - Exploring multiple options or approaches
 * - Feature lists with details on demand
 * - Capability breakdowns
 * - Approach comparisons (ML vs Agentic vs Tools)
 * - When you want clean overview with rich details on hover
 *
 * Why it works:
 * - Default state is scannable at a glance (executive-friendly)
 * - Hover reveals rich details without overwhelming
 * - Perfect balance between overview and depth
 * - Executives can explore at their own pace
 * - Clean design that feels premium
 *
 * Key features demonstrated:
 * - useState tracking which card is hovered
 * - onMouseEnter/onMouseLeave handlers
 * - Scale transforms (scale-105 on hover)
 * - Custom glow effects with shadow utilities
 * - Conditional rendering of detail sections
 * - Staggered entrance animations
 * - Color-coding with border and glow
 *
 * Reference: slide-302-three-approaches.tsx (Slide 23)
 *           slide-303-ml-approach.tsx (Slide 24)
 *           slide-304-agentic-approach.tsx (Slide 25)
 */

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Brain, Wrench, BarChart3 } from "lucide-react"

export function HoverRevealCardsPattern() {
  // State to track which card is being hovered
  const [activeCard, setActiveCard] = useState<string | null>(null)

  // Data structure for cards
  const approaches = [
    {
      id: "ml",
      title: "ML Approach",
      icon: BarChart3,
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      badge: "Data-Driven",
      shortDescription: "Pattern recognition from historical data",
      whenToUse: [
        "You have historical data showing clear patterns",
        "You need to predict or classify at scale",
        "The pattern is stable and repeatable",
        "You want automated decision-making"
      ],
      considerations: [
        "Requires clean, labeled training data",
        "Black box decision-making",
        "Struggles with novel situations"
      ]
    },
    {
      id: "agentic",
      title: "Agentic AI",
      icon: Brain,
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      badge: "Context-Aware",
      shortDescription: "Reasoning with your company context",
      whenToUse: [
        "You need reasoning with your company context",
        "The task requires multi-step problem solving",
        "You want to iterate and improve over time",
        "Complex decision-making with explanation"
      ],
      considerations: [
        "Higher cost per operation",
        "Requires well-defined context",
        "Need careful prompt engineering"
      ]
    },
    {
      id: "tools",
      title: "Existing Tools",
      icon: Wrench,
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      badge: "Proven",
      shortDescription: "Battle-tested solutions for common problems",
      whenToUse: [
        "The problem is well-defined and common",
        "A proven solution already exists",
        "You need reliability over customization",
        "Fast implementation is critical"
      ],
      considerations: [
        "Limited flexibility",
        "May not fit unique needs",
        "Vendor lock-in potential"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background layers */}
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge className="animate-slide-in-down">Decision Framework</Badge>
          <h2 className="text-5xl font-display animate-fade-in delay-200 fill-backwards">
            Three Approaches to <span className="text-primary">AI Solutions</span>
          </h2>
          <p className="text-xl text-foreground/70 animate-slide-in-up delay-500 fill-backwards">
            Hover over each card to explore when to use it
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approaches.map((approach, idx) => {
            const Icon = approach.icon
            const isActive = activeCard === approach.id

            return (
              <Card
                key={approach.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `scale-105 ${approach.color} ${approach.glowColor}`
                    : "border-border hover:scale-102"
                  }
                  animate-fade-in delay-${idx * 200 + 700} fill-backwards
                `}
                onMouseEnter={() => setActiveCard(approach.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="pt-6 space-y-4 min-h-[400px]">
                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <Icon
                      className={`
                        w-12 h-12 transition-colors
                        ${isActive
                          ? approach.id === "ml" ? "text-green-500"
                            : approach.id === "agentic" ? "text-cyan-500"
                            : "text-orange-500"
                          : "text-foreground/60"
                        }
                      `}
                    />
                    <Badge variant="secondary" className="text-xs">
                      {approach.badge}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display">{approach.title}</h3>

                  {/* Short Description (always visible) */}
                  <p className="text-sm text-foreground/70">
                    {approach.shortDescription}
                  </p>

                  {/* Revealed Content (shows on hover) */}
                  {isActive && (
                    <div className="space-y-4 animate-fade-in">
                      {/* When to Use */}
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">
                          ✓ WHEN TO USE:
                        </p>
                        <ul className="space-y-1 text-xs text-foreground/80">
                          {approach.whenToUse.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-primary flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Considerations */}
                      <div>
                        <p className="text-xs font-semibold text-orange-500 mb-2">
                          ⚠ CONSIDERATIONS:
                        </p>
                        <ul className="space-y-1 text-xs text-foreground/80">
                          {approach.considerations.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-orange-500 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Hover hint (shows when not hovered) */}
                  {!isActive && (
                    <p className="text-xs text-foreground/40 text-center pt-4 animate-fade-in">
                      Hover to explore details
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary animate-fade-in delay-1300 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm">
              <span className="font-semibold">Key Insight:</span> Most successful AI
              strategies use a combination of these approaches. Start with existing tools,
              add ML where you have data, and use agentic AI for complex reasoning tasks.
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
 * ✓ Properly centered content
 * ✓ Responsive grid (1 col mobile, 3 cols desktop)
 * ✓ Color-coding with borders and glows
 * ✓ Consistent card heights (min-h-[400px])
 * ✓ Staggered entrance animations
 *
 * Interactivity:
 * ✓ useState tracking active hover state
 * ✓ onMouseEnter/onMouseLeave handlers
 * ✓ Scale transforms (scale-105, scale-102)
 * ✓ Custom glow effects on active state
 * ✓ Conditional rendering of details
 * ✓ Smooth transitions (duration-300)
 *
 * Accessibility:
 * ✓ Semantic HTML
 * ✓ Cursor pointer on interactive elements
 * ✓ Clear hover hints
 * ✓ Color + icon + text (not color-only)
 * ✓ Keyboard accessible (cards are focusable)
 *
 * Technical:
 * ✓ "use client" directive
 * ✓ Type-safe state management
 * ✓ Clean component structure
 * ✓ Reusable data structure
 * ✓ Proper key props
 *
 * ADAPTATION GUIDE
 *
 * To adapt this pattern for your slide:
 *
 * 1. Define your cards:
 *    - What options are you presenting? (3-4 is optimal)
 *    - What's always visible? (title, icon, short description)
 *    - What reveals on hover? (details, pros/cons, use cases)
 *
 * 2. Customize colors:
 *    - Choose color for each card (green, cyan, orange, purple, etc.)
 *    - Define border colors (border-{color}-500)
 *    - Define glow shadows (shadow-[0_0_30px_rgba(R,G,B,0.3)])
 *
 * 3. Update icons:
 *    - Choose appropriate lucide-react icons
 *    - Match icon color to card theme
 *    - Ensure icons are meaningful
 *
 * 4. Structure revealed content:
 *    - Keep it concise (4-6 bullet points)
 *    - Use color-coded sections
 *    - Prioritize most important info first
 *
 * LAYOUT VARIATIONS
 *
 * Two columns:
 * - grid-cols-1 md:grid-cols-2
 * - Larger cards with more detail space
 * - Good for detailed comparisons
 *
 * Four columns:
 * - grid-cols-1 md:grid-cols-2 lg:grid-cols-4
 * - Keep content brief
 * - Good for capability overviews
 *
 * Pyramid layout:
 * - Three cards with different widths
 * - Card 1: max-w-md (60%)
 * - Card 2: max-w-lg (80%)
 * - Card 3: max-w-xl (100%)
 * - Creates visual hierarchy
 *
 * INTERACTION VARIATIONS
 *
 * Click to expand (instead of hover):
 * - Use onClick instead of onMouseEnter/Leave
 * - Toggle state: active === id ? null : id
 * - Better for mobile
 * - Can select and compare
 *
 * Hover with fixed detail panel:
 * - Cards on left, detail panel on right
 * - Hovering card shows details in panel
 * - More space for detailed info
 * - Better for complex comparisons
 *
 * Progressive reveal:
 * - Show title → hover reveals icon & description → click reveals full details
 * - Three-level information hierarchy
 * - Good for very detailed content
 *
 * MOBILE CONSIDERATIONS
 *
 * Touch devices:
 * - Consider adding click/tap to reveal
 * - Or show hint: "Tap to explore"
 * - Hover alone doesn't work on mobile
 *
 * Responsive text:
 * - Scale font sizes down on mobile
 * - text-2xl md:text-3xl for titles
 * - text-xs md:text-sm for details
 *
 * Card spacing:
 * - Reduce gap on mobile: gap-4 md:gap-6
 * - Adjust padding: p-4 md:p-6
 */
