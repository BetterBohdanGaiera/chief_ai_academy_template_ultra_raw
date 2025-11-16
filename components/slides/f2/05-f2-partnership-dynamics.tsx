"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import Image from "next/image"
import { Zap, TrendingUp, Target } from "lucide-react"

export default function Slide05F2PartnershipDynamics() {
  const comparisonData = [
    {
      metric: "Iteration Speed",
      level3: "1 per week",
      level4: "1-3 per day",
      multiplier: "13x faster"
    },
    {
      metric: "Total Iterations (3 weeks)",
      level3: "~5 iterations",
      level4: "~20 iterations",
      multiplier: "4x more"
    },
    {
      metric: "Final Accuracy",
      level3: "65-75%",
      level4: "95%+",
      multiplier: "Production-ready"
    },
    {
      metric: "Cost per Iteration",
      level3: "$$$$ + weeks",
      level4: "Minutes",
      multiplier: "~50x cheaper"
    }
  ]

  const whatMakesItWork = [
    {
      icon: Target,
      title: "Co-Located Team",
      description: "Same room or tightly coordinated remote—feedback loops cost minutes, not weeks"
    },
    {
      icon: Zap,
      title: "Rapid Testing",
      description: "Developer builds (30 min) → Agent Manager tests (10 min) → Immediate feedback"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Domain expertise extracted through iteration, not upfront documentation"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763327605260-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-12 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-sm px-4 py-2">
            The Critical Partnership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Agent Manager + Developer = <span className="text-primary">LEVEL 4</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            This partnership structure IS what creates rapid iteration
          </p>
        </div>

        {/* Comparison Table */}
        <div className="space-y-3 animate-fade-in delay-600 fill-backwards">
          <h3 className="text-2xl font-display text-center mb-4">Level 3 vs Level 4 Partnership</h3>
          <div className="grid grid-cols-1 gap-3">
            {comparisonData.map((row, idx) => (
              <Card key={idx} className="border-border/50">
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="font-semibold text-sm">{row.metric}</div>
                    <div className="text-sm text-red-500/80">
                      <span className="text-xs text-foreground/60">L3: </span>
                      {row.level3}
                    </div>
                    <div className="text-sm text-cyan-500/80">
                      <span className="text-xs text-foreground/60">L4: </span>
                      {row.level4}
                    </div>
                    <div className="text-sm font-display text-primary">
                      {row.multiplier}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Makes It Work */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in delay-800 fill-backwards">
          {whatMakesItWork.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card key={idx} className="border-primary/40 bg-primary/5">
                <CardContent className="pt-6 space-y-3 text-center">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-display">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">This is the secret:</span> It's not about avoiding iteration—it's about making iteration FAST and CHEAP through co-located expert + builder.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
