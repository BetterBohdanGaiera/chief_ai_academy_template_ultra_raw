"use client"

import { useState } from "react"
import { GitBranch, TrendingUp, Cpu, Plug, ChevronRight, RotateCcw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

type DecisionStep = "start" | "q1" | "q2" | "q3" | "ml" | "agentic" | "existing"

export function Slide306DecisionFramework() {
  const [currentStep, setCurrentStep] = useState<DecisionStep>("start")
  const [path, setPath] = useState<string[]>([])

  const handleChoice = (nextStep: DecisionStep, choice: string) => {
    setPath([...path, choice])
    setCurrentStep(nextStep)
  }

  const reset = () => {
    setCurrentStep("start")
    setPath([])
  }

  const outcomes = {
    ml: {
      icon: TrendingUp,
      name: "Machine Learning",
      color: "#10B981",
      description: "Use ML when you need data-driven predictions from historical patterns",
      nextSteps: ["Collect labeled historical data", "Choose ML framework", "Train and validate model", "Deploy and monitor"],
    },
    agentic: {
      icon: Cpu,
      name: "Custom Agentic AI",
      color: "#00BBFF",
      description: "Build custom agentic AI for instruction-driven reasoning with deep company context",
      nextSteps: ["Define workflows and business logic", "Choose agent framework", "Implement iteration testing", "Deploy and refine"],
    },
    existing: {
      icon: Plug,
      name: "Existing AI Tools",
      color: "#F59E0B",
      description: "Adopt existing tools for standard tasks with basic data access needs",
      nextSteps: ["Evaluate tool options", "Test with team", "Roll out to users", "Monitor adoption"],
    },
  }

  const renderDecisionNode = () => {
    switch (currentStep) {
      case "start":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center">
                <GitBranch className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-bebas text-4xl text-primary">Start Here</h3>
              <p className="font-syne text-xl text-muted-foreground max-w-md mx-auto">
                What problem are you trying to solve?
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-success hover:bg-success/5"
                onClick={() => handleChoice("ml", "Need predictions from historical data")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">Predictions from Historical Data</div>
                  <div className="text-sm text-muted-foreground">Forecasting, classification, pattern recognition</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-accent hover:bg-accent/5"
                onClick={() => handleChoice("q1", "Need reasoning or workflows")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">Reasoning or Workflows</div>
                  <div className="text-sm text-muted-foreground">Decision-making, multi-step processes, logic-driven</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
            </div>
          </div>
        )

      case "q1":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
                <GitBranch className="h-12 w-12 text-accent" />
              </div>
              <h3 className="font-bebas text-4xl text-accent">Question 1</h3>
              <p className="font-syne text-xl text-muted-foreground max-w-md mx-auto">
                Is this a standard, well-understood task?
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-warning hover:bg-warning/5"
                onClick={() => handleChoice("existing", "Standard task, minimal customization")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">Yes, Standard Task</div>
                  <div className="text-sm text-muted-foreground">Writing, code completion, document Q&A</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-accent hover:bg-accent/5"
                onClick={() => handleChoice("q2", "Company-specific or complex")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">No, Company-Specific or Complex</div>
                  <div className="text-sm text-muted-foreground">Unique processes, specialized workflows</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
            </div>
          </div>
        )

      case "q2":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
                <GitBranch className="h-12 w-12 text-accent" />
              </div>
              <h3 className="font-bebas text-4xl text-accent">Question 2</h3>
              <p className="font-syne text-xl text-muted-foreground max-w-md mx-auto">
                Do you need deep company context integration?
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-accent hover:bg-accent/5"
                onClick={() => handleChoice("q3", "Yes, deep context needed")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">Yes, Deep Context Needed</div>
                  <div className="text-sm text-muted-foreground">Company processes, domain expertise, business rules</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-warning hover:bg-warning/5"
                onClick={() => handleChoice("existing", "Basic context is enough")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">No, Basic Context Is Enough</div>
                  <div className="text-sm text-muted-foreground">Simple document access, minimal customization</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
            </div>
          </div>
        )

      case "q3":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
                <GitBranch className="h-12 w-12 text-accent" />
              </div>
              <h3 className="font-bebas text-4xl text-accent">Question 3</h3>
              <p className="font-syne text-xl text-muted-foreground max-w-md mx-auto">
                Will you need to iterate and improve quality over time?
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-accent hover:bg-accent/5"
                onClick={() => handleChoice("agentic", "Yes, continuous improvement needed")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">Yes, Continuous Improvement</div>
                  <div className="text-sm text-muted-foreground">Systematic testing, rapid refinement, quality iteration</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-6 justify-start text-left hover:border-warning hover:bg-warning/5"
                onClick={() => handleChoice("existing", "One-time setup is fine")}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-lg mb-1">No, One-Time Setup</div>
                  <div className="text-sm text-muted-foreground">Set it and forget it approach works</div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
            </div>
          </div>
        )

      case "ml":
      case "agentic":
      case "existing":
        const outcome = outcomes[currentStep as keyof typeof outcomes]
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <div
                className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${outcome.color}20` }}
              >
                <outcome.icon className="h-12 w-12" style={{ color: outcome.color }} />
              </div>
              <Badge variant="gradient" className="text-lg px-6 py-2">
                Recommended Approach
              </Badge>
              <h3 className="font-bebas text-5xl" style={{ color: outcome.color }}>
                {outcome.name}
              </h3>
              <p className="font-syne text-xl text-muted-foreground max-w-2xl mx-auto">
                {outcome.description}
              </p>
            </div>

            <Card className="max-w-2xl mx-auto border-2" style={{ borderColor: `${outcome.color}40` }}>
              <CardContent className="p-6">
                <h4 className="font-syne font-bold text-lg mb-4">Next Steps:</h4>
                <div className="space-y-3">
                  {outcome.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-white"
                        style={{ backgroundColor: outcome.color }}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button onClick={reset} variant="outline" size="lg">
                <RotateCcw className="h-5 w-5 mr-2" />
                Start Over
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <GeometricPattern type="triangles" opacity={0.08} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow">
            <GitBranch className="h-4 w-4 mr-2" />
            DECISION FRAMEWORK
          </Badge>
          <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            Which Approach
            <span className="block text-primary mt-2">Should You Use?</span>
          </h2>
          <p className="font-syne text-2xl md:text-3xl text-muted-foreground">
            Interactive decision tree to guide your choice
          </p>
        </div>

        {/* Breadcrumb Path */}
        {path.length > 0 && (
          <div className="flex items-center justify-center gap-2 flex-wrap animate-fade-in">
            {path.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {step}
                </Badge>
                {index < path.length - 1 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        )}

        {/* Decision Node */}
        <div className="max-w-4xl mx-auto">
          {renderDecisionNode()}
        </div>
      </div>
    </section>
  )
}
