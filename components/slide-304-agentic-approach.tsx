"use client"

import { useState } from "react"
import { Cpu, Layers, FileCode, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

type AgenticFeature = "reasoning" | "context" | "iteration" | null

export function Slide304AgenticApproach() {
  const [activeFeature, setActiveFeature] = useState<AgenticFeature>(null)

  const features = {
    reasoning: {
      icon: Cpu,
      name: "Instruction-Driven Reasoning",
      description: "AI follows instructions and applies logic, not just pattern matching",
      examples: [
        "Analyze customer feedback and suggest actions",
        "Review code for company-specific standards",
        "Orchestrate multi-step workflows",
      ],
      color: "#00BBFF",
    },
    context: {
      icon: Layers,
      name: "Company Context Integration",
      description: "Access to your company's specific data, processes, and domain knowledge",
      examples: [
        "Understand your product catalog",
        "Know your business rules and policies",
        "Leverage internal documentation",
      ],
      color: "#FF4D00",
    },
    iteration: {
      icon: Zap,
      name: "Rapid Iteration Capability",
      description: "Improve quality through systematic testing and refinement",
      examples: [
        "Test against real scenarios",
        "Refine prompts and logic quickly",
        "Measure quality improvements",
      ],
      color: "#10B981",
    },
  }

  const advantages = [
    {
      title: "Context Engineering Advantage",
      description: "Embed your company's unique knowledge directly into the AI's instructions",
      icon: FileCode,
    },
    {
      title: "Full Customization",
      description: "Design workflows that match your exact business processes",
      icon: Layers,
    },
    {
      title: "Team-Controlled Evolution",
      description: "Your team controls improvements—no waiting on vendor roadmaps",
      icon: Zap,
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
      <GeometricPattern type="hexagon" opacity={0.08} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="gradient">
            <Cpu className="h-4 w-4 mr-2" />
            APPROACH #2: CUSTOM AGENTIC AI
          </Badge>
          <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            Instruction-Driven
            <span className="block text-accent mt-2">Reasoning</span>
          </h2>
          <p className="font-syne text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            AI that understands YOUR company context
          </p>
        </div>

        {/* Reasoning Flow Visualization */}
        <div className="animate-slide-in-up delay-300 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-accent/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-[180px] text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                    <FileCode className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="font-syne font-bold text-lg mb-1">Instructions</h4>
                  <p className="text-sm text-muted-foreground">Your business logic</p>
                </div>

                <div className="flex items-center">
                  <div className="h-1 w-12 bg-accent/40" />
                  <div className="h-3 w-3 border-t-2 border-r-2 border-accent/40 rotate-45 -ml-2" />
                </div>

                <div className="flex-1 min-w-[180px] text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                    <Layers className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="font-syne font-bold text-lg mb-1">Company Context</h4>
                  <p className="text-sm text-muted-foreground">Your specific data</p>
                </div>

                <div className="flex items-center">
                  <div className="h-1 w-12 bg-accent/40" />
                  <div className="h-3 w-3 border-t-2 border-r-2 border-accent/40 rotate-45 -ml-2" />
                </div>

                <div className="flex-1 min-w-[180px] text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                    <Cpu className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="font-syne font-bold text-lg mb-1">AI Reasoning</h4>
                  <p className="text-sm text-muted-foreground">Intelligent decisions</p>
                </div>

                <div className="flex items-center">
                  <div className="h-1 w-12 bg-accent/40" />
                  <div className="h-3 w-3 border-t-2 border-r-2 border-accent/40 rotate-45 -ml-2" />
                </div>

                <div className="flex-1 min-w-[180px] text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="font-syne font-bold text-lg mb-1">Custom Actions</h4>
                  <p className="text-sm text-muted-foreground">Tailored outputs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features Grid */}
        <div className="space-y-4">
          <h3 className="font-syne text-2xl font-bold text-center">What Makes Agentic AI Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(features).map(([key, feature], index) => (
              <button
                key={key}
                className={`animate-slide-in-up fill-backwards text-left`}
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
                onMouseEnter={() => setActiveFeature(key as AgenticFeature)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <Card
                  variant={activeFeature === key ? "glow" : "layered"}
                  className={`transition-all duration-300 h-full ${
                    activeFeature === key ? "scale-105 shadow-xl" : "hover:scale-102"
                  }`}
                  style={{
                    borderColor: activeFeature === key ? feature.color : undefined,
                    borderWidth: activeFeature === key ? "2px" : undefined,
                  }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon className="h-7 w-7" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-xl mb-2" style={{ color: feature.color }}>
                        {feature.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    </div>
                    {activeFeature === key && (
                      <div className="space-y-1.5 pt-3 border-t border-foreground/10 animate-fade-in">
                        {feature.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <ArrowRight className="h-3 w-3 shrink-0 mt-0.5" style={{ color: feature.color }} />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>

        {/* Strategic Advantages */}
        <div className="animate-fade-in delay-900 fill-backwards">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30">
            <CardContent className="p-8 space-y-6">
              <h3 className="font-syne text-2xl font-bold text-center text-primary">
                Strategic Advantages of Custom Builds
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-3 p-4 bg-white/60 rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <advantage.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-lg mb-1">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-syne text-xl md:text-2xl font-semibold text-foreground">
              <span className="text-accent">Agentic AI goes beyond data access</span>—
              <span className="block mt-2 text-muted-foreground">
                it embeds your company's unique logic, processes, and expertise into every interaction
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
