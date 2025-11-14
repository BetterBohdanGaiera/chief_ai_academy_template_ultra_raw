"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Brain, Sparkles, MessageSquare, Lightbulb } from "lucide-react"
import { useState } from "react"

interface Capability {
  id: string
  name: string
  description: string
  example: string
  icon: React.ComponentType<{ className?: string }>
}

const LLM_CAPABILITIES: Capability[] = [
  {
    id: "comprehension",
    name: "Natural Language Comprehension",
    description: "Understanding human language in all its complexity and nuance",
    example: "Interprets ambiguous requests, understands context, handles typos and slang",
    icon: MessageSquare,
  },
  {
    id: "reasoning",
    name: "Logical Reasoning",
    description: "Breaking down problems and following multi-step logic chains",
    example: "Analyzes business constraints, evaluates trade-offs, follows if-then logic",
    icon: Lightbulb,
  },
  {
    id: "synthesis",
    name: "Knowledge Synthesis",
    description: "Combining information from multiple sources to generate insights",
    example: "Connects data points, identifies patterns, generates novel solutions",
    icon: Sparkles,
  },
]

export function Slide3b03LlmBrain() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(
    null
  )

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Component 1 of 4
          </Badge>
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 rounded-full bg-primary/20">
              <Brain className="w-12 h-12 text-primary" />
            </div>
            <h1 className="font-display text-6xl lg:text-8xl font-bold text-primary tracking-tight">
              The LLM: Brain
            </h1>
          </div>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            The foundation of understanding and reasoning
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-in-up delay-200">
          {/* Left: Brain Visualization */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-primary/40 bg-primary/5">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold text-primary text-center">
                  Core Function
                </h2>
                <div className="relative">
                  {/* Neural network-inspired visualization */}
                  <svg
                    viewBox="0 0 400 300"
                    className="w-full h-64"
                    style={{ filter: "drop-shadow(0 4px 6px rgba(255, 77, 0, 0.2))" }}
                  >
                    {/* Input layer */}
                    <circle cx="50" cy="80" r="20" fill="#FF4D00" opacity="0.3" />
                    <circle cx="50" cy="150" r="20" fill="#FF4D00" opacity="0.3" />
                    <circle cx="50" cy="220" r="20" fill="#FF4D00" opacity="0.3" />

                    {/* Hidden layer */}
                    <circle cx="200" cy="60" r="25" fill="#FF4D00" opacity="0.5" />
                    <circle cx="200" cy="150" r="25" fill="#FF4D00" opacity="0.5" />
                    <circle cx="200" cy="240" r="25" fill="#FF4D00" opacity="0.5" />

                    {/* Output layer */}
                    <circle cx="350" cy="110" r="30" fill="#FF4D00" opacity="0.8" />
                    <circle cx="350" cy="190" r="30" fill="#FF4D00" opacity="0.8" />

                    {/* Connections */}
                    <line
                      x1="70"
                      y1="80"
                      x2="175"
                      y2="60"
                      stroke="#FF4D00"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <line
                      x1="70"
                      y1="150"
                      x2="175"
                      y2="150"
                      stroke="#FF4D00"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <line
                      x1="70"
                      y1="220"
                      x2="175"
                      y2="240"
                      stroke="#FF4D00"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <line
                      x1="225"
                      y1="60"
                      x2="320"
                      y2="110"
                      stroke="#FF4D00"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <line
                      x1="225"
                      y1="150"
                      x2="320"
                      y2="190"
                      stroke="#FF4D00"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <line
                      x1="225"
                      y1="240"
                      x2="320"
                      y2="190"
                      stroke="#FF4D00"
                      strokeWidth="2"
                      opacity="0.3"
                    />

                    {/* Labels */}
                    <text
                      x="50"
                      y="260"
                      textAnchor="middle"
                      className="font-manrope text-xs"
                      fill="#666"
                    >
                      Input
                    </text>
                    <text
                      x="200"
                      y="280"
                      textAnchor="middle"
                      className="font-manrope text-xs"
                      fill="#666"
                    >
                      Processing
                    </text>
                    <text
                      x="350"
                      y="230"
                      textAnchor="middle"
                      className="font-manrope text-xs"
                      fill="#666"
                    >
                      Decision
                    </text>
                  </svg>
                </div>
                <p className="text-center text-foreground-muted font-body">
                  The LLM processes language, understands context, and makes
                  intelligent decisions
                </p>
              </div>
            </Card>
          </div>

          {/* Right: Capabilities */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground text-center lg:text-left">
              Key Capabilities
            </h2>
            <div className="space-y-4">
              {LLM_CAPABILITIES.map((capability) => {
                const Icon = capability.icon
                const isSelected = selectedCapability === capability.id

                return (
                  <button
                    key={capability.id}
                    onClick={() =>
                      setSelectedCapability(
                        isSelected ? null : capability.id
                      )
                    }
                    className="w-full group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
                  >
                    <Card
                      className={`p-6 border-2 transition-all duration-300 text-left ${
                        isSelected
                          ? "border-primary shadow-glow"
                          : "border-border hover:border-primary/60"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-full bg-primary/20 transition-transform ${
                              isSelected ? "scale-110" : ""
                            }`}
                          >
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display text-xl font-bold text-foreground mb-2">
                              {capability.name}
                            </h3>
                            <p className="text-sm text-foreground-muted">
                              {capability.description}
                            </p>
                          </div>
                        </div>

                        {/* Example - revealed on selection */}
                        <div
                          className={`transition-all duration-300 ${
                            isSelected
                              ? "opacity-100 max-h-24"
                              : "opacity-0 max-h-0 overflow-hidden"
                          }`}
                        >
                          <div className="pl-16 pt-2 border-l-2 border-primary/30 ml-6">
                            <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                              Example
                            </div>
                            <p className="text-sm text-foreground-muted">
                              {capability.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center space-y-4 animate-fade-in delay-300">
          <div className="inline-block px-6 py-4 bg-primary/10 border-2 border-primary/40 rounded-xl max-w-4xl">
            <p className="font-body text-lg text-foreground">
              <span className="font-bold text-primary">Remember:</span> The LLM is
              just the brain. Without tools, memory, and autonomy, it can only{" "}
              <span className="font-bold">talk about</span> taking action — not
              actually do it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
