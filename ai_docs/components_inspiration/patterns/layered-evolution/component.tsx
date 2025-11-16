"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { MessageSquare, Bot, Network, ArrowRight } from "lucide-react"
import { useState } from "react"

interface SpectrumLevel {
  id: string
  position: number // 0-100
  name: string
  description: string
  components: {
    llm: boolean
    tools: boolean
    memory: boolean
    autonomy: boolean
  }
  examples: string[]
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const SPECTRUM_LEVELS: SpectrumLevel[] = [
  {
    id: "chat",
    position: 0,
    name: "Simple Chat",
    description: "Basic conversational AI with no agency",
    components: { llm: true, tools: false, memory: false, autonomy: false },
    examples: ["ChatGPT (basic)", "Claude (chat mode)", "Basic Q&A bots"],
    icon: MessageSquare,
    color: "#94A3B8",
  },
  {
    id: "tools",
    position: 30,
    name: "Chat + Tools",
    description: "Can call APIs but lacks memory and autonomy",
    components: { llm: true, tools: true, memory: false, autonomy: false },
    examples: ["ChatGPT with plugins", "API-enabled chatbots", "Many 'AI copilots'"],
    icon: Bot,
    color: "#60A5FA",
  },
  {
    id: "agent",
    position: 70,
    name: "Single Agent",
    description: "All four components working together",
    components: { llm: true, tools: true, memory: true, autonomy: true },
    examples: ["Custom agents", "Claude with tools & memory", "Domain-specific agents"],
    icon: Bot,
    color: "#10B981",
  },
  {
    id: "multiagent",
    position: 100,
    name: "Multi-Agent System",
    description: "Multiple specialized agents orchestrating together",
    components: { llm: true, tools: true, memory: true, autonomy: true },
    examples: ["Agent swarms", "Specialized agent teams", "Autonomous systems"],
    icon: Network,
    color: "#FF4D00",
  },
]

export default function LayeredEvolution() {
  const [selectedPosition, setSelectedPosition] = useState([70])

  // Find the closest spectrum level to the selected position
  const getCurrentLevel = (position: number) => {
    return SPECTRUM_LEVELS.reduce((prev, curr) => {
      return Math.abs(curr.position - position) < Math.abs(prev.position - position)
        ? curr
        : prev
    })
  }

  const currentLevel = getCurrentLevel(selectedPosition[0])

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            The Agentic Spectrum
          </Badge>
          <h1 className="font-display text-6xl lg:text-8xl font-bold text-primary tracking-tight">
            From Chat to Agents
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            Understanding the progression from simple chat to true agentic systems
          </p>
        </div>

        {/* Interactive Spectrum Slider */}
        <div className="space-y-8 animate-slide-in-up delay-200">
          <Card className="p-8 border-2 border-primary/40">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground text-center">
                Explore the Spectrum
              </h2>

              {/* Slider */}
              <div className="relative pt-8 pb-4">
                <Slider
                  value={selectedPosition}
                  onValueChange={setSelectedPosition}
                  max={100}
                  step={1}
                  className="w-full"
                />

                {/* Spectrum markers */}
                <div className="absolute top-0 left-0 right-0 flex justify-between">
                  {SPECTRUM_LEVELS.map((level) => {
                    const Icon = level.icon
                    return (
                      <button
                        key={level.id}
                        onClick={() => setSelectedPosition([level.position])}
                        className="flex flex-col items-center gap-2 group"
                        style={{
                          position: "absolute",
                          left: `${level.position}%`,
                          transform: "translateX(-50%)",
                        }}
                      >
                        <div
                          className={`p-2 rounded-full transition-all duration-300 ${
                            currentLevel.id === level.id
                              ? "scale-125 shadow-glow"
                              : "opacity-60 hover:opacity-100 hover:scale-110"
                          }`}
                          style={{ backgroundColor: `${level.color}30` }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: level.color }}
                          />
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Level labels below slider */}
              <div className="relative h-12">
                {SPECTRUM_LEVELS.map((level) => (
                  <div
                    key={level.id}
                    className="absolute"
                    style={{
                      left: `${level.position}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <p
                      className={`text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                        currentLevel.id === level.id
                          ? "text-foreground"
                          : "text-foreground-muted"
                      }`}
                    >
                      {level.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Current Level Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Level Description */}
            <Card
              className="p-8 border-2 transition-all duration-300"
              style={{
                borderColor: `${currentLevel.color}60`,
                backgroundColor: `${currentLevel.color}10`,
              }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="p-4 rounded-full"
                    style={{ backgroundColor: `${currentLevel.color}30` }}
                  >
                    {(() => {
                      const Icon = currentLevel.icon
                      return <Icon className="w-8 h-8" style={{ color: currentLevel.color }} />
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-display text-3xl font-bold mb-2"
                      style={{ color: currentLevel.color }}
                    >
                      {currentLevel.name}
                    </h3>
                    <p className="text-lg text-foreground-muted">
                      {currentLevel.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wide">
                    Examples
                  </h4>
                  <ul className="space-y-2">
                    {currentLevel.examples.map((example, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-foreground-muted flex items-start gap-2"
                      >
                        <ArrowRight
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: currentLevel.color }}
                        />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Right: Component Checklist */}
            <Card className="p-8 border-2 border-primary/40">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Component Checklist
              </h3>
              <div className="space-y-4">
                {[
                  { key: "llm" as const, name: "LLM (Brain)", description: "Understanding & reasoning" },
                  { key: "tools" as const, name: "Tools (Hands)", description: "Taking actions" },
                  { key: "memory" as const, name: "Memory (Notebook)", description: "Maintaining context" },
                  { key: "autonomy" as const, name: "Autonomy (Compass)", description: "Working toward goals" },
                ].map((component) => {
                  const hasComponent = currentLevel.components[component.key]
                  return (
                    <div
                      key={component.key}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        hasComponent
                          ? "border-success/60 bg-success/10"
                          : "border-border bg-muted/20"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`text-2xl ${
                            hasComponent ? "text-success" : "text-foreground-muted"
                          }`}
                        >
                          {hasComponent ? "✓" : "✗"}
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`font-display text-base font-bold mb-1 ${
                              hasComponent ? "text-foreground" : "text-foreground-muted"
                            }`}
                          >
                            {component.name}
                          </h4>
                          <p
                            className={`text-sm ${
                              hasComponent ? "text-foreground-muted" : "text-foreground-muted/60"
                            }`}
                          >
                            {component.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center space-y-4 animate-fade-in delay-300">
          <div className="inline-block px-6 py-4 bg-primary/10 border-2 border-primary/40 rounded-xl max-w-4xl">
            <p className="font-body text-lg text-foreground">
              <span className="font-bold text-primary">Vendor Reality Check:</span>{" "}
              Many products marketed as "AI agents" are actually just{" "}
              <span className="font-bold">Chat + Tools</span> — missing the memory
              and autonomy that make systems truly agentic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
