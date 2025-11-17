"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react"

export default function F1TransitionCritical() {
  const level3Characteristics = [
    {
      icon: "⏱️",
      label: "Iteration Speed",
      value: "2 weeks per cycle",
      problem: true
    },
    {
      icon: "🔢",
      label: "Total Iterations",
      value: "~5 in 6 months",
      problem: true
    },
    {
      icon: "💰",
      label: "Cost per Change",
      value: "$2K-5K (agency fees)",
      problem: true
    },
    {
      icon: "🎯",
      label: "Final Accuracy",
      value: "65-75%",
      problem: true
    },
    {
      icon: "📉",
      label: "ROI",
      value: "Negative",
      problem: true
    },
    {
      icon: "😞",
      label: "Outcome",
      value: "Abandoned after 6 months",
      problem: true
    }
  ]

  const level4Characteristics = [
    {
      icon: "⚡",
      label: "Iteration Speed",
      value: "1-3 cycles per day",
      benefit: true
    },
    {
      icon: "🔄",
      label: "Total Iterations",
      value: "20+ in 2-3 weeks",
      benefit: true
    },
    {
      icon: "💵",
      label: "Cost per Change",
      value: "Minutes of time (free)",
      benefit: true
    },
    {
      icon: "🎯",
      label: "Final Accuracy",
      value: "95-99%",
      benefit: true
    },
    {
      icon: "📈",
      label: "ROI",
      value: "300-600%",
      benefit: true
    },
    {
      icon: "🚀",
      label: "Outcome",
      value: "Production-ready in weeks",
      benefit: true
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="glow" className="animate-slide-in-down">
            The Critical Transition
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bebas animate-fade-in delay-200 fill-backwards">
            LEVEL 3 → LEVEL 4
          </h2>
          <p className="text-3xl md:text-4xl font-syne font-bold text-primary animate-slide-in-up delay-400 fill-backwards">
            ITERATION SPEED CHANGES EVERYTHING
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Level 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warning/20 border-2 border-warning">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h3 className="text-3xl font-bebas text-warning">LEVEL 3</h3>
                <p className="text-sm text-foreground/60 uppercase tracking-wide">No-Code Automation</p>
              </div>
            </div>

            <div className="space-y-3">
              {level3Characteristics.map((item, idx) => (
                <Card
                  key={idx}
                  className={`
                    border-warning/30 bg-warning/5
                    animate-fade-in delay-${600 + idx * 100} fill-backwards
                  `}
                >
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-foreground/50 uppercase tracking-wide font-semibold">
                          {item.label}
                        </p>
                        <p className="text-lg font-bold text-warning mt-1">
                          {item.value}
                        </p>
                      </div>
                      {item.problem && (
                        <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-destructive/10 border-destructive mt-6">
              <CardContent className="pt-4 pb-4">
                <p className="text-center font-semibold text-destructive">
                  ❌ Too slow to reach production quality
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Level 4 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-2 border-primary">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bebas text-primary">LEVEL 4</h3>
                <p className="text-sm text-foreground/60 uppercase tracking-wide">Iterative Agents</p>
              </div>
            </div>

            <div className="space-y-3">
              {level4Characteristics.map((item, idx) => (
                <Card
                  key={idx}
                  className={`
                    border-primary/30 bg-primary/5
                    animate-fade-in delay-${600 + idx * 100} fill-backwards
                  `}
                >
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-foreground/50 uppercase tracking-wide font-semibold">
                          {item.label}
                        </p>
                        <p className="text-lg font-bold text-primary mt-1">
                          {item.value}
                        </p>
                      </div>
                      {item.benefit && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-green-500/10 border-green-500 mt-6">
              <CardContent className="pt-4 pb-4">
                <p className="text-center font-semibold text-green-500">
                  ✅ Fast enough to reach 95%+ quality
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/10 border-2 border-primary">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <p className="text-2xl md:text-3xl font-bebas text-center">
                THE DEFINING DIFFERENCE:
              </p>
              <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
              <p className="text-2xl md:text-3xl font-syne font-bold text-primary text-center">
                Internal team that can iterate daily
              </p>
            </div>
            <p className="text-center text-foreground/70 mt-4 max-w-3xl mx-auto">
              Same tools can work at Level 4 if you have an internal Agent Manager + Developer partnership (or Agent Manager with Level 3.5 tools) iterating 1-3 times per day.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
