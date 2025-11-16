/**
 * S2 Slide 04: Tools Component Deep Dive
 * Hover-reveal pattern for exploring Tools capabilities
 */

"use client"

import { useState } from "react"
import { Wrench, Database, Send, Search, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

export default function S2ToolsDeepDiveSlide() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const toolTypes = [
    {
      id: "data",
      icon: Database,
      title: "Data Access",
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      examples: [
        "Read from CRM, databases",
        "Query internal systems",
        "Retrieve documents"
      ]
    },
    {
      id: "actions",
      icon: Send,
      title: "Actions",
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      examples: [
        "Send emails, messages",
        "Create tickets, tasks",
        "Update records"
      ]
    },
    {
      id: "external",
      icon: Search,
      title: "External APIs",
      color: "border-purple-500",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      examples: [
        "Web search, scraping",
        "Third-party integrations",
        "API calls"
      ]
    },
    {
      id: "computation",
      icon: FileText,
      title: "Computation",
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      examples: [
        "Run calculations",
        "Process documents",
        "Execute code"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="gradient">Component 2 of 4</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            <span className="text-primary">Tools</span>: The Hands
          </h2>
          <p className="text-xl text-foreground/70">
            Hover to explore tool categories
          </p>
        </div>

        {/* Tool Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolTypes.map((tool, idx) => {
            const Icon = tool.icon
            const isActive = activeCard === tool.id

            return (
              <Card
                key={tool.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `scale-105 ${tool.color} ${tool.glowColor}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                  }
                  animate-fade-in delay-${idx * 150 + 300} fill-backwards
                `}
                onMouseEnter={() => setActiveCard(tool.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary/10' : 'bg-muted'} transition-colors`}>
                      <Icon className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-foreground/60'}`} />
                    </div>
                    <h3 className="text-2xl font-bebas">{tool.title}</h3>
                  </div>

                  {/* Revealed Examples */}
                  {isActive && (
                    <div className="space-y-2 animate-fade-in pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-primary mb-2">EXAMPLES:</p>
                      <ul className="space-y-1">
                        {tool.examples.map((example, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{example}</span>
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
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-900 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">The Differentiator:</span> Tools transform AI from "suggesting" to "doing." Without tools, agents can only generate text—not take real actions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
