/**
 * S2 Slide 05: Memory Component Deep Dive
 * Hover-reveal pattern for exploring Memory capabilities
 */

"use client"

import { useState } from "react"
import { Book, Clock, User, FileSearch } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

export default function S2MemoryDeepDiveSlide() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const memoryTypes = [
    {
      id: "conversation",
      icon: Clock,
      title: "Conversation History",
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      details: [
        "Track previous interactions",
        "Maintain dialogue context",
        "Reference past decisions"
      ]
    },
    {
      id: "knowledge",
      icon: FileSearch,
      title: "Knowledge Base",
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      details: [
        "Access documentation",
        "Retrieve past cases",
        "Search company data"
      ]
    },
    {
      id: "user",
      icon: User,
      title: "User Context",
      color: "border-purple-500",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      details: [
        "Remember preferences",
        "Store user-specific data",
        "Personalize responses"
      ]
    },
    {
      id: "working",
      icon: Book,
      title: "Working Memory",
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      details: [
        "Track current task state",
        "Maintain multi-step progress",
        "Store intermediate results"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="gradient">Component 3 of 4</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            <span className="text-green-500">Memory</span>: The Notebook
          </h2>
          <p className="text-xl text-foreground/70">
            Hover to explore memory types
          </p>
        </div>

        {/* Memory Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memoryTypes.map((memory, idx) => {
            const Icon = memory.icon
            const isActive = activeCard === memory.id

            return (
              <Card
                key={memory.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `scale-105 ${memory.color} ${memory.glowColor}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                  }
                  animate-fade-in delay-${idx * 150 + 300} fill-backwards
                `}
                onMouseEnter={() => setActiveCard(memory.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary/10' : 'bg-muted'} transition-colors`}>
                      <Icon className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-foreground/60'}`} />
                    </div>
                    <h3 className="text-2xl font-bebas">{memory.title}</h3>
                  </div>

                  {/* Revealed Details */}
                  {isActive && (
                    <div className="space-y-2 animate-fade-in pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-primary mb-2">CAPABILITIES:</p>
                      <ul className="space-y-1">
                        {memory.details.map((detail, i) => (
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
        <Card className="bg-green-500/5 border-green-500/20 animate-fade-in delay-900 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-green-500">The Context Provider:</span> Memory transforms one-off interactions into continuous relationships. Without it, agents start fresh every time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
