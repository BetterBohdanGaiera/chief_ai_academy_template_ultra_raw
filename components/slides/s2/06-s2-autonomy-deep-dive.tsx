/**
 * S2 Slide 06: Autonomy Component Deep Dive
 * Hover-reveal pattern for exploring Autonomy capabilities
 */

"use client"

import { useState } from "react"
import { Compass, Target, GitBranch, Shield, RefreshCw } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

export default function S2AutonomyDeepDiveSlide() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const autonomyAspects = [
    {
      id: "planning",
      icon: Target,
      title: "Goal Planning",
      color: "border-purple-500",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      details: [
        "Break down complex goals",
        "Create execution plans",
        "Prioritize sub-tasks"
      ]
    },
    {
      id: "decision",
      icon: GitBranch,
      title: "Decision Making",
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      details: [
        "Choose best approach",
        "Evaluate trade-offs",
        "Adapt to constraints"
      ]
    },
    {
      id: "iteration",
      icon: RefreshCw,
      title: "Self-Correction",
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      details: [
        "Verify outputs",
        "Retry on failures",
        "Learn from mistakes"
      ]
    },
    {
      id: "safety",
      icon: Shield,
      title: "Safety Bounds",
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      details: [
        "Respect permissions",
        "Follow guardrails",
        "Request approval when needed"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="gradient">Component 4 of 4</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            <span className="text-purple-500">Autonomy</span>: The Compass
          </h2>
          <p className="text-xl text-foreground/70">
            Hover to explore autonomy aspects
          </p>
        </div>

        {/* Autonomy Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {autonomyAspects.map((aspect, idx) => {
            const Icon = aspect.icon
            const isActive = activeCard === aspect.id

            return (
              <Card
                key={aspect.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `scale-105 ${aspect.color} ${aspect.glowColor}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                  }
                  animate-fade-in delay-${idx * 150 + 300} fill-backwards
                `}
                onMouseEnter={() => setActiveCard(aspect.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary/10' : 'bg-muted'} transition-colors`}>
                      <Icon className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-foreground/60'}`} />
                    </div>
                    <h3 className="text-2xl font-bebas">{aspect.title}</h3>
                  </div>

                  {/* Revealed Details */}
                  {isActive && (
                    <div className="space-y-2 animate-fade-in pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-primary mb-2">KEY ASPECTS:</p>
                      <ul className="space-y-1">
                        {aspect.details.map((detail, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-purple-500/5 border-purple-500/20 animate-fade-in delay-900 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-purple-500">The True Test:</span> Autonomy means working toward goals independently—not just following step-by-step instructions. This is what makes AI truly "agentic."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
