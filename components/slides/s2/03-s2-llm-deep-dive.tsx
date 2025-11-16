/**
 * S2 Slide 03: LLM Component Deep Dive
 * Hover-reveal pattern for exploring LLM capabilities
 */

"use client"

import { useState } from "react"
import { Brain, Zap, Scale, MessageSquare } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

export default function S2LLMDeepDiveSlide() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const capabilities = [
    {
      id: "understanding",
      icon: Brain,
      title: "Understanding",
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      details: [
        "Natural language comprehension",
        "Context interpretation",
        "Intent recognition"
      ]
    },
    {
      id: "reasoning",
      icon: Scale,
      title: "Reasoning",
      color: "border-purple-500",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      details: [
        "Logical inference",
        "Problem decomposition",
        "Multi-step thinking"
      ]
    },
    {
      id: "generation",
      icon: MessageSquare,
      title: "Generation",
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      details: [
        "Natural responses",
        "Code generation",
        "Structured output"
      ]
    },
    {
      id: "adaptation",
      icon: Zap,
      title: "Adaptation",
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      details: [
        "Few-shot learning",
        "Context adaptation",
        "Domain flexibility"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="gradient">Component 1 of 4</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            <span className="text-cyan-500">LLM</span>: The Brain
          </h2>
          <p className="text-xl text-foreground/70">
            Hover to explore capabilities
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, idx) => {
            const Icon = capability.icon
            const isActive = activeCard === capability.id

            return (
              <Card
                key={capability.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `scale-105 ${capability.color} ${capability.glowColor}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                  }
                  animate-fade-in delay-${idx * 150 + 300} fill-backwards
                `}
                onMouseEnter={() => setActiveCard(capability.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary/10' : 'bg-muted'} transition-colors`}>
                      <Icon className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-foreground/60'}`} />
                    </div>
                    <h3 className="text-2xl font-bebas">{capability.title}</h3>
                  </div>

                  {/* Revealed Details */}
                  {isActive && (
                    <div className="space-y-2 animate-fade-in pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-primary mb-2">KEY CAPABILITIES:</p>
                      <ul className="space-y-1">
                        {capability.details.map((detail, i) => (
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
        <Card className="bg-cyan-500/5 border-cyan-500/20 animate-fade-in delay-900 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-cyan-500">The Foundation:</span> LLM provides understanding and reasoning, but without Tools, Memory, and Autonomy, it's just a chatbot.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
