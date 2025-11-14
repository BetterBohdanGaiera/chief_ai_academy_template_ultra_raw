"use client"

import { useState } from "react"
import { CheckCircle2, XCircle, TrendingUp, TrendingDown, Users, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

type ExecutionType = "poor" | "excellent"

export function Slide103ExecutionInteractive() {
  const [activeView, setActiveView] = useState<ExecutionType>("poor")

  const executionData = {
    poor: {
      title: "Poor Execution",
      icon: XCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      examples: [
        {
          useCase: "AI Chatbot for Support",
          adoption: "5%",
          outcome: "Seen as annoying",
          metric: "Team ignores it",
          icon: TrendingDown,
          iconColor: "text-destructive",
        },
        {
          useCase: "AI Code Assistant",
          adoption: "10%",
          outcome: "Copy-paste errors",
          metric: "Developers skeptical",
          icon: TrendingDown,
          iconColor: "text-destructive",
        },
        {
          useCase: "Document Automation",
          adoption: "15%",
          outcome: "Saves 10 min/week",
          metric: "Limited use cases",
          icon: TrendingDown,
          iconColor: "text-destructive",
        },
      ],
    },
    excellent: {
      title: "Excellent Execution",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/40",
      examples: [
        {
          useCase: "AI Chatbot for Support",
          adoption: "95%",
          outcome: "70% fewer tickets",
          metric: "Trusted resource",
          icon: TrendingUp,
          iconColor: "text-success",
        },
        {
          useCase: "AI Code Assistant",
          adoption: "80%",
          outcome: "40% faster delivery",
          metric: "Quality improves",
          icon: TrendingUp,
          iconColor: "text-success",
        },
        {
          useCase: "Document Automation",
          adoption: "90%",
          outcome: "Saves 15 hrs/week",
          metric: "Company-wide adoption",
          icon: TrendingUp,
          iconColor: "text-success",
        },
      ],
    },
  }

  const currentData = executionData[activeView]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="diagonal" opacity={0.04} />
      <GrainOverlay opacity={0.2} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2">
            THE EXECUTION MATTERS
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            It's Not the Use Case—
            <span className="block text-primary mt-2">It's the Execution</span>
          </h2>
          <p className="font-syne text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto">
            Same automation, wildly different ROI
          </p>
        </div>

        {/* Interactive Toggle */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-300 fill-backwards">
          <Button
            variant={activeView === "poor" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("poor")}
            className={`transition-all duration-300 ${
              activeView === "poor"
                ? "bg-destructive hover:bg-destructive/90 text-white"
                : "hover:bg-destructive/10 hover:border-destructive/40"
            }`}
          >
            <XCircle className="h-5 w-5 mr-2" />
            Poor Execution
          </Button>
          <Button
            variant={activeView === "excellent" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("excellent")}
            className={`transition-all duration-300 ${
              activeView === "excellent"
                ? "bg-success hover:bg-success/90 text-white"
                : "hover:bg-success/10 hover:border-success/40"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Excellent Execution
          </Button>
        </div>

        {/* Comparison Grid - Animated transition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
          {currentData.examples.map((example, index) => {
            const IconComponent = example.icon
            return (
              <Card
                key={`${activeView}-${index}`}
                className={`${currentData.borderColor} border-2 transition-all duration-500 hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4 relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 ${currentData.bgColor} blur-2xl`} />

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-syne text-xl font-bold leading-tight flex-1">
                        {example.useCase}
                      </h3>
                      <IconComponent className={`h-8 w-8 ${example.iconColor} shrink-0`} />
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-muted-foreground shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Adoption Rate</p>
                          <p className={`text-2xl font-bold font-jetbrains ${currentData.color}`}>
                            {example.adoption}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Outcome</p>
                          <p className="font-semibold">{example.outcome}</p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <p className="text-sm text-muted-foreground">{example.metric}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Message */}
        <div className="text-center pt-8 max-w-4xl mx-auto animate-fade-in delay-600 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardContent className="p-6 md:p-8">
              <p className="font-syne text-xl md:text-2xl font-bold text-primary">
                The difference between 5% adoption and 95% adoption isn't the tool—
                <span className="block mt-2 text-foreground">it's how you implement it.</span>
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Implementation quality determines ROI, not the use case name.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
