"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { BookOpen, Compass, Clock, Target, TrendingUp, Map } from "lucide-react"
import { useState } from "react"

interface ComponentDetail {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  capabilities: Array<{
    name: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }>
  color: string
}

const COMPONENTS: ComponentDetail[] = [
  {
    id: "memory",
    name: "Memory (Notebook)",
    icon: BookOpen,
    description: "Maintaining context across interactions and time",
    color: "#10B981",
    capabilities: [
      {
        name: "Conversation History",
        description: "Remember what was discussed in previous exchanges",
        icon: Clock,
      },
      {
        name: "Long-term Storage",
        description: "Persist important information across sessions",
        icon: BookOpen,
      },
      {
        name: "Contextual Recall",
        description: "Retrieve relevant past information when needed",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "autonomy",
    name: "Autonomy (Compass)",
    icon: Compass,
    description: "Working independently toward defined goals",
    color: "#F59E0B",
    capabilities: [
      {
        name: "Goal-Directed Behavior",
        description: "Break down high-level objectives into actionable steps",
        icon: Target,
      },
      {
        name: "Multi-Step Planning",
        description: "Create and execute complex sequences of actions",
        icon: Map,
      },
      {
        name: "Self-Correction",
        description: "Detect failures and adapt approach without human intervention",
        icon: TrendingUp,
      },
    ],
  },
]

export function Slide3b05MemoryAutonomy() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    "memory"
  )

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Components 3 & 4 of 4
          </Badge>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
            Memory & Autonomy
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            What separates agents from sophisticated chatbots
          </p>
        </div>

        {/* Component Selector */}
        <div className="flex justify-center gap-4 animate-fade-in delay-100">
          {COMPONENTS.map((component) => {
            const Icon = component.icon
            const isSelected = selectedComponent === component.id

            return (
              <button
                key={component.id}
                onClick={() => setSelectedComponent(component.id)}
                className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border hover:border-foreground-muted/60"
                }`}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: isSelected ? component.color : "#666" }}
                />
                <span
                  className={`font-display font-bold ${
                    isSelected ? "text-foreground" : "text-foreground-muted"
                  }`}
                >
                  {component.name.split(" (")[0]}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Component Details */}
        <div className="animate-slide-in-up delay-200">
          {COMPONENTS.map((component) => {
            if (selectedComponent !== component.id) return null
            const MainIcon = component.icon

            return (
              <div key={component.id} className="space-y-8">
                {/* Component Overview */}
                <Card
                  className="p-8 border-2 border-primary/40"
                  style={{ backgroundColor: `${component.color}10` }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className="p-4 rounded-full"
                      style={{ backgroundColor: `${component.color}20` }}
                    >
                      <MainIcon
                        className="w-12 h-12"
                        style={{ color: component.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h2
                        className="font-display text-3xl font-bold mb-3"
                        style={{ color: component.color }}
                      >
                        {component.name}
                      </h2>
                      <p className="text-xl text-foreground-muted">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {component.capabilities.map((capability, idx) => {
                    const CapIcon = capability.icon

                    return (
                      <Card
                        key={idx}
                        className="p-6 border-2 border-border hover:border-primary/60 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="space-y-4">
                          <div
                            className="p-3 rounded-full w-fit"
                            style={{ backgroundColor: `${component.color}20` }}
                          >
                            <CapIcon
                              className="w-6 h-6"
                              style={{ color: component.color }}
                            />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-bold text-foreground mb-2">
                              {capability.name}
                            </h3>
                            <p className="text-sm text-foreground-muted">
                              {capability.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>

                {/* Why It Matters */}
                <Card className="p-6 border-2 border-primary/40 bg-primary/5">
                  <h3 className="font-display text-xl font-bold text-primary mb-4">
                    Why {component.name.split(" (")[0]} Matters
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    {component.id === "memory" ? (
                      <>
                        Without memory, every interaction starts from scratch. The
                        agent can't learn from experience, can't maintain context
                        across conversations, and can't build on previous work.
                        This is the difference between{" "}
                        <span className="font-bold text-success">
                          a collaborative partner
                        </span>{" "}
                        and{" "}
                        <span className="font-bold text-foreground-muted">
                          a stateless API call
                        </span>
                        .
                      </>
                    ) : (
                      <>
                        Without autonomy, you don't have an agent — you have an
                        assistant that needs constant hand-holding. True autonomy
                        means the agent can take a high-level goal like "improve
                        customer satisfaction" and{" "}
                        <span className="font-bold text-warning">
                          independently figure out
                        </span>{" "}
                        the steps needed, execute them, and adapt when things
                        don't go as planned.
                      </>
                    )}
                  </p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Key Insight */}
        <div className="text-center space-y-4 animate-fade-in delay-300">
          <div className="inline-block px-6 py-4 bg-primary/10 border-2 border-primary/40 rounded-xl max-w-4xl">
            <p className="font-body text-lg text-foreground">
              <span className="font-bold text-primary">The Test:</span> If you
              have to tell it every single step, it's not autonomous. If it
              forgets yesterday's conversation, it has no memory.{" "}
              <span className="font-bold">Both are required</span> for true
              agentic AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
