"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { User, Briefcase, Wrench, Zap, Brain } from "lucide-react"

export default function F1LevelsOverview() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null)

  const levels = [
    {
      id: "level1",
      number: "1",
      title: "Individual AI",
      icon: User,
      color: "border-gray-500",
      glowColor: "shadow-[0_0_30px_rgba(107,114,128,0.3)]",
      description: "People use ChatGPT, Claude individually. No knowledge sharing.",
      impact: "Limited, fragmented"
    },
    {
      id: "level2",
      number: "2",
      title: "Generic SaaS",
      icon: Briefcase,
      color: "border-blue-500",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      description: "Pre-built AI tools (Jasper, Copy.ai). Generic, not customized.",
      impact: "Quick start, limited fit"
    },
    {
      id: "level3",
      number: "3",
      title: "No-Code Automation",
      icon: Wrench,
      color: "border-red-500",
      glowColor: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
      description: "Zapier, Make.com. Slow iteration = THE TRAP. Negative ROI.",
      impact: "Dangerous trap zone"
    },
    {
      id: "level4",
      number: "4",
      title: "Iterative Agents",
      icon: Zap,
      color: "border-primary",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      description: "Fast iteration (1-3 cycles/day). Connected to your systems. Where transformation starts.",
      impact: "300-600% ROI"
    },
    {
      id: "level5",
      number: "5",
      title: "Autonomous Agents",
      icon: Brain,
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      description: "Fully autonomous, multi-agent systems. Self-improving workflows.",
      impact: "Maximum automation"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">The 5 Levels Framework</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            THE COMPLETE <span className="text-primary">ROADMAP</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Hover over each level to explore details
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {levels.map((level, idx) => {
            const Icon = level.icon
            const isActive = activeLevel === level.id

            return (
              <Card
                key={level.id}
                className={`
                  transition-all duration-300 cursor-pointer relative
                  ${isActive
                    ? `scale-105 ${level.color} ${level.glowColor}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                  }
                  animate-fade-in delay-${idx * 100 + 300} fill-backwards
                `}
                onMouseEnter={() => setActiveLevel(level.id)}
                onMouseLeave={() => setActiveLevel(null)}
              >
                <CardContent className="pt-6 space-y-3">
                  {/* Level Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className={`bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold shadow-lg ${isActive ? 'scale-110' : ''} transition-transform`}>
                      {level.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`flex justify-center pt-4`}>
                    <Icon className={`h-8 w-8 ${isActive ? 'text-primary' : 'text-foreground/60'} transition-colors`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-center min-h-[2.5rem] flex items-center justify-center">
                    {level.title}
                  </h3>

                  {/* Expanded Details */}
                  {isActive && (
                    <div className="space-y-2 animate-fade-in pt-2 border-t border-border">
                      <p className="text-xs text-foreground/80 text-center">
                        {level.description}
                      </p>
                      <p className="text-xs font-semibold text-primary text-center">
                        {level.impact}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm md:text-base text-center">
              <span className="font-semibold text-primary">Key Insight:</span> Most companies are stuck at Levels 1-3. Transformation happens at Levels 4-5.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
