/**
 * S2 Slide 07: Agentic Spectrum
 * Visualizing the spectrum from raw LLM to multi-agent orchestration (Level 1-5)
 */

"use client"

import { useState } from "react"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { MessageSquare, Search, Workflow, Zap, Network } from 'lucide-react'

export default function S2AgenticSpectrumSlide() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>("level3")

  const levels = [
    {
      id: "level1",
      number: "L1",
      title: "Raw LLM",
      icon: MessageSquare,
      components: "LLM only",
      example: "ChatGPT, Claude chat",
      color: "border-red-500/40 bg-red-500/5",
      activeColor: "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]"
    },
    {
      id: "level2",
      number: "L2",
      title: "Basic Tools",
      icon: Search,
      components: "LLM + Generic Tools",
      example: "Web search, calculations",
      color: "border-orange-500/40 bg-orange-500/5",
      activeColor: "border-orange-500 shadow-[0_0_30px_rgba(255,77,0,0.3)]"
    },
    {
      id: "level3",
      number: "L3",
      title: "No-Code Platform",
      icon: Workflow,
      components: "Pre-built integrations",
      example: "Zapier AI, Make.com",
      color: "border-yellow-500/40 bg-yellow-500/5",
      activeColor: "border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]",
      warning: "⚠️ THE TRAP: Slow iteration (1/week)"
    },
    {
      id: "level4",
      number: "L4",
      title: "Custom Agents",
      icon: Zap,
      components: "All 4 components + rapid iteration",
      example: "Custom-built, your team owns",
      color: "border-cyan-500/40 bg-cyan-500/5",
      activeColor: "border-cyan-500 shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      highlight: "✓ 95%+ reliability achievable"
    },
    {
      id: "level5",
      number: "L5",
      title: "Multi-Agent",
      icon: Network,
      components: "Multiple specialist agents",
      example: "Orchestrated workflows",
      color: "border-purple-500/40 bg-purple-500/5",
      activeColor: "border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">The Agentic Spectrum</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            From Chat to <span className="text-primary">Full Autonomy</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Click each level to explore
          </p>
        </div>

        {/* Spectrum Visual */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {levels.map((level, idx) => {
            const Icon = level.icon
            const isSelected = selectedLevel === level.id

            return (
              <Card
                key={level.id}
                className={`
                  cursor-pointer transition-all duration-300
                  ${isSelected ? level.activeColor : level.color}
                  ${isSelected ? 'scale-105' : 'hover:scale-102'}
                  animate-fade-in delay-${idx * 100 + 300} fill-backwards
                `}
                onClick={() => setSelectedLevel(isSelected ? null : level.id)}
              >
                <CardContent className="pt-6 space-y-3 text-center">
                  <div className="flex justify-center">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-primary/10' : 'bg-muted'}`}>
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-primary' : 'text-foreground/60'}`} />
                    </div>
                  </div>

                  <div>
                    <Badge variant="secondary" className="text-xs mb-2">{level.number}</Badge>
                    <h3 className="text-lg font-bebas">{level.title}</h3>
                  </div>

                  {isSelected && (
                    <div className="space-y-2 pt-3 border-t border-border animate-fade-in">
                      <p className="text-xs text-foreground/60 font-semibold">COMPONENTS:</p>
                      <p className="text-xs text-foreground/80">{level.components}</p>

                      <p className="text-xs text-foreground/60 font-semibold mt-3">EXAMPLE:</p>
                      <p className="text-xs text-foreground/80">{level.example}</p>

                      {level.warning && (
                        <p className="text-xs text-yellow-500 font-semibold mt-2">{level.warning}</p>
                      )}
                      {level.highlight && (
                        <p className="text-xs text-green-500 font-semibold mt-2">{level.highlight}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-red-500/5 border-red-500/20">
            <CardContent className="pt-4">
              <p className="text-sm">
                <span className="font-semibold text-red-500">Level 3 Trap:</span> Pre-built integrations + slow iteration (1/week) = 20 iterations takes 5 months → projects abandoned at 65-75% quality.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-cyan-500/5 border-cyan-500/20">
            <CardContent className="pt-4">
              <p className="text-sm">
                <span className="font-semibold text-cyan-500">Level 4 Success:</span> All 4 components + rapid iteration (1-3/day) = 20 iterations in 2-3 weeks → 95%+ reliability achievable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
