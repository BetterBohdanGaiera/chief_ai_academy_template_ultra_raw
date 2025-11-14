"use client"

import { useState } from "react"
import { TrendingUp, BarChart3, Database, Brain, CheckCircle2, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

type MLUseCase = "forecasting" | "classification" | "clustering" | null

export function Slide303MlApproach() {
  const [activeUseCase, setActiveUseCase] = useState<MLUseCase>(null)

  const useCases = {
    forecasting: {
      icon: TrendingUp,
      name: "Forecasting",
      description: "Predict future values based on historical trends",
      examples: ["Sales forecasting", "Demand prediction", "Revenue projections"],
      dataNeeds: "Time-series historical data",
      color: "#10B981",
    },
    classification: {
      icon: Brain,
      name: "Classification",
      description: "Categorize data into predefined groups",
      examples: ["Spam detection", "Customer churn prediction", "Image recognition"],
      dataNeeds: "Labeled training examples",
      color: "#00BBFF",
    },
    clustering: {
      icon: BarChart3,
      name: "Pattern Recognition",
      description: "Discover hidden patterns and groupings",
      examples: ["Customer segmentation", "Anomaly detection", "Recommendation systems"],
      dataNeeds: "Large unlabeled datasets",
      color: "#F59E0B",
    },
  }

  const whenToUseML = [
    { icon: CheckCircle2, text: "You have historical data", positive: true },
    { icon: CheckCircle2, text: "Patterns exist in the data", positive: true },
    { icon: CheckCircle2, text: "You need probabilistic predictions", positive: true },
    { icon: CheckCircle2, text: "The problem is well-defined", positive: true },
  ]

  const whenNotToUseML = [
    { icon: XCircle, text: "You need reasoning or explanations", positive: false },
    { icon: XCircle, text: "Rules change frequently", positive: false },
    { icon: XCircle, text: "No historical data available", positive: false },
    { icon: XCircle, text: "You need deterministic outputs", positive: false },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-background via-success/5 to-background">
      <GeometricPattern type="dots" opacity={0.08} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="outline" className="border-success text-success">
            <Database className="h-4 w-4 mr-2" />
            APPROACH #1: MACHINE LEARNING
          </Badge>
          <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            Data-Driven
            <span className="block text-success mt-2">Predictions</span>
          </h2>
          <p className="font-syne text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            When patterns in historical data predict the future
          </p>
        </div>

        {/* Data Flow Visualization */}
        <div className="animate-slide-in-up delay-300 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-success/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-[200px] text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-success/20 flex items-center justify-center mb-3">
                    <Database className="h-10 w-10 text-success" />
                  </div>
                  <h4 className="font-syne font-bold text-lg mb-1">Historical Data</h4>
                  <p className="text-sm text-muted-foreground">Past examples & patterns</p>
                </div>

                <div className="flex items-center">
                  <div className="h-1 w-12 bg-success/40" />
                  <div className="h-3 w-3 border-t-2 border-r-2 border-success/40 rotate-45 -ml-2" />
                </div>

                <div className="flex-1 min-w-[200px] text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-success/20 flex items-center justify-center mb-3">
                    <Brain className="h-10 w-10 text-success" />
                  </div>
                  <h4 className="font-syne font-bold text-lg mb-1">ML Model</h4>
                  <p className="text-sm text-muted-foreground">Learns patterns</p>
                </div>

                <div className="flex items-center">
                  <div className="h-1 w-12 bg-success/40" />
                  <div className="h-3 w-3 border-t-2 border-r-2 border-success/40 rotate-45 -ml-2" />
                </div>

                <div className="flex-1 min-w-[200px] text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-success/20 flex items-center justify-center mb-3">
                    <TrendingUp className="h-10 w-10 text-success" />
                  </div>
                  <h4 className="font-syne font-bold text-lg mb-1">Predictions</h4>
                  <p className="text-sm text-muted-foreground">Probabilistic outputs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-4">
          <h3 className="font-syne text-2xl font-bold text-center">Common ML Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(useCases).map(([key, useCase], index) => (
              <button
                key={key}
                className={`animate-slide-in-up fill-backwards text-left`}
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
                onMouseEnter={() => setActiveUseCase(key as MLUseCase)}
                onMouseLeave={() => setActiveUseCase(null)}
              >
                <Card
                  variant={activeUseCase === key ? "glow" : "layered"}
                  className={`transition-all duration-300 h-full ${
                    activeUseCase === key ? "scale-105 shadow-xl" : "hover:scale-102"
                  }`}
                  style={{
                    borderColor: activeUseCase === key ? useCase.color : undefined,
                    borderWidth: activeUseCase === key ? "2px" : undefined,
                  }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${useCase.color}20` }}
                    >
                      <useCase.icon className="h-7 w-7" style={{ color: useCase.color }} />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-xl mb-2" style={{ color: useCase.color }}>
                        {useCase.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                      <div className="space-y-1.5">
                        {useCase.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <div className="h-1 w-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: useCase.color }} />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {activeUseCase === key && (
                      <div className="pt-3 border-t border-foreground/10 animate-fade-in">
                        <p className="text-xs font-semibold text-foreground/60 mb-1">DATA NEEDS:</p>
                        <p className="text-sm">{useCase.dataNeeds}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>

        {/* When to Use / When Not to Use */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-900 fill-backwards">
          {/* When to Use */}
          <Card className="bg-success/5 border-2 border-success/30">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-syne text-xl font-bold text-success flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                When to Use ML
              </h3>
              <div className="space-y-3">
                {whenToUseML.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* When Not to Use */}
          <Card className="bg-destructive/5 border-2 border-destructive/30">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-syne text-xl font-bold text-destructive flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                When NOT to Use ML
              </h3>
              <div className="space-y-3">
                {whenNotToUseML.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm">{item.text}</span>
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
              <span className="text-success">ML is powerful for predictions</span> from historical patterns—
              <span className="block mt-2 text-muted-foreground">
                but it can't reason, explain, or adapt to changing business logic
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
