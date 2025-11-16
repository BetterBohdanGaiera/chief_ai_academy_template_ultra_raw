/**
 * HORIZONTAL TIMELINE PATTERN
 *
 * A multi-section layout showing iteration cycles, key skills, and economic metrics
 * with visual emphasis on speed and continuous improvement.
 *
 * Key Design Principles:
 * - Two-column responsive grid for balanced information density
 * - Circular iteration visualization with spinning refresh icon
 * - Staggered animations create natural reading flow
 * - Economic metrics displayed prominently in grid format
 * - Background decorative elements (grain, geometric patterns) for depth
 */

"use client"

import { Zap, RefreshCw, TrendingUp, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface CycleStep {
  step: string
  time: string
  icon: typeof Sparkles
  color: string
}

interface Skill {
  title: string
  description: string
}

interface Economics {
  investment: string
  ongoing: string
  value: string
  roi: string
  payback: string
}

export default function HorizontalTimelinePattern() {
  // Replace with your process steps
  const iterationCycle: CycleStep[] = [
    { step: "Build", time: "30 min", icon: Sparkles, color: "text-primary" },
    { step: "Test", time: "10 min", icon: RefreshCw, color: "text-primary" },
    { step: "Feedback", time: "5 min", icon: Zap, color: "text-primary" },
    { step: "Fix", time: "20 min", icon: TrendingUp, color: "text-primary" },
  ]

  // Replace with your required skills or competencies
  const keySkills: Skill[] = [
    {
      title: "Context Engineering",
      description: "Explaining business processes to AI in structured way",
    },
    {
      title: "AI Intuition",
      description: "Evaluating when AI results are good vs bad",
    },
    {
      title: "Agentic Building",
      description: "Building and iterating on custom agents",
    },
  ]

  // Replace with your economic metrics or project costs
  const economics: Economics = {
    investment: "$40-50K to build",
    ongoing: "$8K/year",
    value: "$100-300K+ value/year",
    roi: "300-600% ROI",
    payback: "1-2 months",
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background decorative layers */}
      <GeometricPattern type="dots" className="opacity-20" />
      <GrainOverlay opacity={0.3} />

      <div className="relative max-w-7xl w-full space-y-12 z-10">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Zap className="h-5 w-5 mr-2" />
            PROCESS OVERVIEW
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            How{" "}
            <span className="text-primary animate-glow-pulse">
              Transformation
            </span>
            <br />
            Actually Works
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Rapid iteration: 10-20 cycles per day
          </p>
        </div>

        {/* Main Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Iteration Cycle */}
          <div className="space-y-6 animate-slide-in-left delay-200 fill-backwards">
            <h3 className="font-syne text-2xl md:text-3xl font-bold text-primary">
              The Iteration Cycle
            </h3>
            <p className="font-manrope text-lg text-muted-foreground">
              This cycle happens in{" "}
              <span className="font-bold text-primary">MINUTES</span>, not WEEKS
            </p>

            {/* Iteration Steps Card */}
            <div className="relative">
              <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 shadow-glow">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {iterationCycle.map((item, index) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-3 animate-fade-in fill-backwards"
                        style={{ animationDelay: `${300 + index * 100}ms` }}
                      >
                        <div className="mt-1">
                          <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="font-syne font-bold text-lg">
                            {item.step}
                          </h4>
                          <p className="text-sm text-muted-foreground font-jetbrains">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cycle Indicator with spinning icon */}
                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="h-5 w-5 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                      <p className="font-syne font-bold text-primary">
                        Repeat 10-20 times per DAY
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Key Skills */}
          <div className="space-y-6 animate-slide-in-right delay-400 fill-backwards">
            <h3 className="font-syne text-2xl md:text-3xl font-bold text-primary">
              Key Skills Required
            </h3>

            <div className="space-y-4">
              {keySkills.map((skill, index) => (
                <Card
                  key={skill.title}
                  className="border-primary/30 bg-white/95 backdrop-blur-sm hover:shadow-lg transition-all animate-fade-in fill-backwards"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <CardContent className="p-5">
                    <h4 className="font-syne font-bold text-lg mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Economics Section - Full Width */}
        <div className="animate-slide-in-up delay-600 fill-backwards">
          <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 shadow-glow">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-syne text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                The Economics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Investment</p>
                  <p className="font-jetbrains text-xl md:text-2xl font-bold text-primary">
                    {economics.investment}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Ongoing</p>
                  <p className="font-jetbrains text-xl md:text-2xl font-bold">
                    {economics.ongoing}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Value</p>
                  <p className="font-jetbrains text-xl md:text-2xl font-bold text-success">
                    {economics.value}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">ROI</p>
                  <p className="font-jetbrains text-xl md:text-2xl font-bold text-success">
                    {economics.roi}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Payback</p>
                  <p className="font-jetbrains text-xl md:text-2xl font-bold text-primary">
                    {economics.payback}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight with glow effect */}
        <div className="text-center pt-4 animate-fade-in delay-800 fill-backwards">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <p className="relative font-syne text-xl md:text-2xl font-bold text-primary max-w-4xl">
              Low cost of feedback enables continuous improvement
              <span className="block mt-2 text-foreground text-lg">
                200+ iterations → 95%+ reliability
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
