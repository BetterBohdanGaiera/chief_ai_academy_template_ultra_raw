"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Brain, Hand, BookOpen, Compass } from "lucide-react"
import { useState } from "react"

interface AgentComponent {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  details: string[]
  color: string
}

const AGENT_COMPONENTS: AgentComponent[] = [
  {
    id: "llm",
    name: "LLM (Brain)",
    icon: Brain,
    description: "Understanding and reasoning",
    details: [
      "Natural language comprehension",
      "Context understanding",
      "Decision-making capability",
      "Problem-solving intelligence",
    ],
    color: "#FF4D00",
  },
  {
    id: "tools",
    name: "Tools (Hands)",
    icon: Hand,
    description: "Taking actions",
    details: [
      "API integrations",
      "Data manipulation",
      "System interactions",
      "Real-world actions",
    ],
    color: "#00BBFF",
  },
  {
    id: "memory",
    name: "Memory (Notebook)",
    icon: BookOpen,
    description: "Maintaining context",
    details: [
      "Conversation history",
      "Long-term storage",
      "Retrieved context",
      "Learning from experience",
    ],
    color: "#10B981",
  },
  {
    id: "autonomy",
    name: "Autonomy (Compass)",
    icon: Compass,
    description: "Working toward goals",
    details: [
      "Goal-directed behavior",
      "Multi-step planning",
      "Self-correction",
      "Adaptive execution",
    ],
    color: "#F59E0B",
  },
]

export function Slide3b02FourComponents() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Module 03b: Understanding AI Agents
          </Badge>
          <h1 className="font-display text-6xl lg:text-8xl font-bold text-primary tracking-tight">
            The Four Components
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            True agentic AI requires all four working together
          </p>
        </div>

        {/* 2x2 Grid of Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-in-up delay-200">
          {AGENT_COMPONENTS.map((component) => {
            const Icon = component.icon
            const isHovered = hoveredComponent === component.id

            return (
              <button
                key={component.id}
                onClick={() =>
                  setHoveredComponent(
                    hoveredComponent === component.id ? null : component.id
                  )
                }
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
                className="group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
              >
                <Card
                  className={`p-8 border-2 transition-all duration-300 h-full ${
                    isHovered
                      ? "border-primary shadow-glow scale-105"
                      : "border-border hover:border-foreground-muted/60"
                  }`}
                  style={{
                    backgroundColor: isHovered
                      ? `${component.color}15`
                      : `${component.color}05`,
                  }}
                >
                  <div className="space-y-6 text-left h-full flex flex-col">
                    {/* Icon and Name */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-4 rounded-full transition-all duration-300 ${
                          isHovered ? "scale-110" : ""
                        }`}
                        style={{ backgroundColor: `${component.color}20` }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: component.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-display text-2xl font-bold mb-2"
                          style={{ color: component.color }}
                        >
                          {component.name}
                        </h3>
                        <p className="text-base text-foreground-muted">
                          {component.description}
                        </p>
                      </div>
                    </div>

                    {/* Details - revealed on hover */}
                    <div
                      className={`space-y-2 flex-1 transition-all duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                      }`}
                    >
                      <h4 className="text-xs font-display font-bold text-foreground uppercase tracking-wide">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {component.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-foreground-muted flex items-start gap-2"
                          >
                            <span
                              className="mt-0.5"
                              style={{ color: component.color }}
                            >
                              •
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interaction hint */}
                    <div
                      className={`text-xs text-foreground-muted/60 font-body text-center transition-opacity ${
                        isHovered ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Hover or click to see details
                    </div>
                  </div>
                </Card>
              </button>
            )
          })}
        </div>

        {/* Key Insight */}
        <div className="text-center space-y-4 animate-fade-in delay-300">
          <div className="inline-block px-6 py-4 bg-primary/10 border-2 border-primary/40 rounded-xl">
            <p className="font-body text-lg lg:text-xl text-foreground">
              <span className="font-bold text-primary">Critical:</span> Missing any
              of these four components means it's{" "}
              <span className="font-bold">not truly agentic</span> — it's just
              automation or a chatbot with API access
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
