/**
 * ARE VS NOT COMPARISON PATTERN
 *
 * A dual-column layout showing "What They ARE" vs "What They're NOT" to clearly
 * define boundaries, expectations, and scope for roles, concepts, or products.
 *
 * Key Design Principles:
 * - Side-by-side comparison for instant contrast
 * - Color coding: Green (success) for ARE, Red (destructive) for NOT
 * - Icon reinforcement: CheckCircle for ARE, AlertCircle for NOT
 * - Clean, scannable lists with semantic emphasis
 * - Prevents misunderstanding by defining both inclusion and exclusion criteria
 *
 * Perfect for role definitions, product positioning, or expectation management.
 */

"use client"

import { CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface ComparisonItem {
  type: "ARE" | "NOT"
  label: string
  color: string
}

export default function AreVsNotComparisonPattern() {
  // CUSTOMIZE THIS: Define what your subject IS and IS NOT
  const comparisons: ComparisonItem[] = [
    // What they're NOT (exclusions)
    { type: "NOT", label: "Traditional managers", color: "text-destructive" },
    { type: "NOT", label: "Technical specialists", color: "text-destructive" },
    { type: "NOT", label: "Project coordinators", color: "text-destructive" },

    // What they ARE (inclusions)
    { type: "ARE", label: "Process experts", color: "text-success" },
    { type: "ARE", label: "Knowledge architects", color: "text-success" },
    { type: "ARE", label: "Quality validators", color: "text-success" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background layers */}
      <GeometricPattern type="dots" className="opacity-20" />
      <GrainOverlay opacity={0.3} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-10">
        {/* Header */}
        <div className="space-y-6 text-center animate-fade-in">
          <Badge variant="glow" className="inline-flex text-lg px-6 py-2">
            Clear Boundaries
          </Badge>

          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            DEFINING THE <span className="text-primary animate-glow-pulse">ROLE</span>
          </h1>

          <p className="font-syne text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/80">
            Setting Clear <span className="text-primary">Expectations</span>
          </p>
        </div>

        {/* Main Comparison Section */}
        <div className="space-y-6 animate-slide-in-up delay-300 fill-backwards">
          <h3 className="font-syne text-2xl md:text-3xl font-bold text-center">
            What They <span className="text-primary">ARE</span> vs What They&apos;re <span className="text-destructive">NOT</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NOT Section (Left) */}
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-6">
                <h4 className="font-bebas text-2xl text-destructive mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  NOT
                </h4>
                <div className="space-y-2">
                  {comparisons
                    .filter((item) => item.type === "NOT")
                    .map((item, idx) => (
                      <div key={idx} className="text-base font-syne font-semibold flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* ARE Section (Right) */}
            <Card className="border-success/30 bg-success/5">
              <CardContent className="p-6">
                <h4 className="font-bebas text-2xl text-success mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  ARE
                </h4>
                <div className="space-y-2">
                  {comparisons
                    .filter((item) => item.type === "ARE")
                    .map((item, idx) => (
                      <div key={idx} className="text-base font-syne font-semibold flex items-start gap-2">
                        <span className="text-success mt-1">✓</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Context (Optional) */}
        <div className="space-y-4 animate-fade-in delay-500 fill-backwards">
          <h3 className="font-syne text-2xl md:text-3xl font-bold">Why This Matters</h3>
          <Card className="border-primary/40 bg-gradient-to-br from-primary/15 to-primary/5 shadow-glow-lg">
            <CardContent className="p-8 md:p-10 space-y-6">
              <p className="font-syne text-lg md:text-xl text-foreground/90">
                Clear role definition prevents misaligned expectations and sets teams up for success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-foreground/85">
                    Prevents hiring the wrong profile
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-foreground/85">
                    Aligns training and onboarding
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-foreground/85">
                    Sets realistic performance metrics
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-700 fill-backwards">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <p className="relative font-syne text-xl md:text-2xl font-bold text-primary max-w-4xl">
              Clarity on what something <span className="text-success">IS</span> and <span className="text-destructive">ISN&apos;T</span> prevents 80% of organizational confusion
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
