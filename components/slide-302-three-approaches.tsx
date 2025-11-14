"use client"

import { useState } from "react"
import { TrendingUp, Zap, Wrench, BarChart, Cpu, Plug, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type Approach = "ml" | "agentic" | "existing" | null

export function Slide302ThreeApproaches() {
  const [activeApproach, setActiveApproach] = useState<Approach>(null)

  const approaches = {
    ml: {
      icon: TrendingUp,
      name: "Machine Learning",
      shortName: "ML",
      badge: "Data-Driven",
      description: "Predictions from historical patterns",
      color: "#10B981",
      borderColor: "border-success/60",
      glowColor: "bg-success/5",
      characteristics: [
        "Forecasting & classification",
        "Pattern recognition",
        "Requires labeled data",
        "Probabilistic outputs",
      ],
      useCases: ["Sales forecasting", "Churn prediction", "Image classification"],
      whenToUse: "When you have historical data and need predictions",
    },
    agentic: {
      icon: Cpu,
      name: "Custom Agentic AI",
      shortName: "Agentic",
      badge: "Instruction-Driven",
      description: "Reasoning with company context",
      color: "#00BBFF",
      borderColor: "border-accent/60",
      glowColor: "bg-accent/5",
      characteristics: [
        "Instruction-driven reasoning",
        "Company context integration",
        "Rapid iteration capability",
        "Full customization",
      ],
      useCases: ["Custom workflows", "Complex reasoning", "Domain-specific tasks"],
      whenToUse: "When you need MORE than basic data access",
    },
    existing: {
      icon: Plug,
      name: "Existing AI Tools",
      shortName: "Tools",
      badge: "Pre-Built",
      description: "Ready-made solutions with data access",
      color: "#F59E0B",
      borderColor: "border-warning/60",
      glowColor: "bg-warning/5",
      characteristics: [
        "Quick deployment",
        "Basic data access",
        "Pre-built features",
        "Limited customization",
      ],
      useCases: ["Notion AI", "GitHub Copilot", "Grammarly", "ChatGPT Teams"],
      whenToUse: "When 'good enough' meets your needs",
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh">
      {/* AI-Generated Image Layer */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763064223110-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20 select-none pointer-events-none"
          priority={false}
          quality={85}
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="grid" opacity={0.06} />
      <GrainOverlay opacity={0.15} />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-1 bg-gradient-orange opacity-60 rotate-12" />
      <div className="absolute bottom-32 left-16 w-24 h-1 bg-gradient-cyan opacity-40 -rotate-6" />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="rotate-[-2deg] origin-center">
            <BarChart className="h-4 w-4 mr-2" />
            THE THREE APPROACHES
          </Badge>
          <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            How AI Solutions
            <span className="block text-primary mt-2">Really Work</span>
          </h2>
          <p className="font-syne text-2xl md:text-3xl text-muted-foreground">
            Understanding the fundamental differences
          </p>
        </div>

        {/* Interactive Instruction */}
        <div className="text-center animate-fade-in delay-300 fill-backwards">
          <p className="text-sm text-foreground/50 flex items-center justify-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>Hover over each approach to explore details</span>
          </p>
        </div>

        {/* Three Approaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* ML Approach */}
          <div
            className="animate-slide-in-up delay-300 fill-backwards"
            onMouseEnter={() => setActiveApproach("ml")}
            onMouseLeave={() => setActiveApproach(null)}
          >
            <Card
              variant={activeApproach === "ml" ? "glow" : "layered"}
              className={`${approaches.ml.borderColor} bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-300 h-full ${
                activeApproach === "ml" ? "scale-105 shadow-glow" : "hover:scale-102"
              }`}
            >
              <CardContent className="p-6 relative overflow-hidden h-full flex flex-col">
                <div className={`absolute inset-0 ${approaches.ml.glowColor} blur-xl`} />
                <div className="relative space-y-4 flex-1 flex flex-col">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${approaches.ml.color}20` }}
                    >
                      <approaches.ml.icon
                        className="h-8 w-8"
                        style={{ color: approaches.ml.color }}
                      />
                    </div>
                    <Badge variant="outline" style={{ borderColor: approaches.ml.color, color: approaches.ml.color }}>
                      {approaches.ml.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-syne text-2xl font-bold mb-2" style={{ color: approaches.ml.color }}>
                      {approaches.ml.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {approaches.ml.description}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div className="space-y-2 flex-1">
                    {approaches.ml.characteristics.map((char, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: approaches.ml.color }} />
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>

                  {/* When to Use */}
                  {activeApproach === "ml" && (
                    <div className="pt-4 border-t border-foreground/10 animate-fade-in">
                      <p className="text-xs font-semibold text-foreground/60 mb-1">WHEN TO USE:</p>
                      <p className="text-sm font-medium">{approaches.ml.whenToUse}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agentic AI Approach */}
          <div
            className="animate-slide-in-up delay-500 fill-backwards"
            onMouseEnter={() => setActiveApproach("agentic")}
            onMouseLeave={() => setActiveApproach(null)}
          >
            <Card
              variant={activeApproach === "agentic" ? "glow" : "layered"}
              className={`${approaches.agentic.borderColor} bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-300 h-full ${
                activeApproach === "agentic" ? "scale-105 shadow-glow" : "hover:scale-102"
              }`}
            >
              <CardContent className="p-6 relative overflow-hidden h-full flex flex-col">
                <div className={`absolute inset-0 ${approaches.agentic.glowColor} blur-xl`} />
                <div className="relative space-y-4 flex-1 flex flex-col">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${approaches.agentic.color}20` }}
                    >
                      <approaches.agentic.icon
                        className="h-8 w-8"
                        style={{ color: approaches.agentic.color }}
                      />
                    </div>
                    <Badge variant="gradient">
                      {approaches.agentic.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-syne text-2xl font-bold mb-2" style={{ color: approaches.agentic.color }}>
                      {approaches.agentic.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {approaches.agentic.description}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div className="space-y-2 flex-1">
                    {approaches.agentic.characteristics.map((char, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: approaches.agentic.color }} />
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>

                  {/* When to Use */}
                  {activeApproach === "agentic" && (
                    <div className="pt-4 border-t border-foreground/10 animate-fade-in">
                      <p className="text-xs font-semibold text-foreground/60 mb-1">WHEN TO USE:</p>
                      <p className="text-sm font-medium">{approaches.agentic.whenToUse}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Existing Tools Approach */}
          <div
            className="animate-slide-in-up delay-700 fill-backwards"
            onMouseEnter={() => setActiveApproach("existing")}
            onMouseLeave={() => setActiveApproach(null)}
          >
            <Card
              variant={activeApproach === "existing" ? "glow" : "layered"}
              className={`${approaches.existing.borderColor} bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-300 h-full ${
                activeApproach === "existing" ? "scale-105 shadow-glow" : "hover:scale-102"
              }`}
            >
              <CardContent className="p-6 relative overflow-hidden h-full flex flex-col">
                <div className={`absolute inset-0 ${approaches.existing.glowColor} blur-xl`} />
                <div className="relative space-y-4 flex-1 flex flex-col">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${approaches.existing.color}20` }}
                    >
                      <approaches.existing.icon
                        className="h-8 w-8"
                        style={{ color: approaches.existing.color }}
                      />
                    </div>
                    <Badge variant="outline" style={{ borderColor: approaches.existing.color, color: approaches.existing.color }}>
                      {approaches.existing.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-syne text-2xl font-bold mb-2" style={{ color: approaches.existing.color }}>
                      {approaches.existing.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {approaches.existing.description}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div className="space-y-2 flex-1">
                    {approaches.existing.characteristics.map((char, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: approaches.existing.color }} />
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>

                  {/* When to Use */}
                  {activeApproach === "existing" && (
                    <div className="pt-4 border-t border-foreground/10 animate-fade-in">
                      <p className="text-xs font-semibold text-foreground/60 mb-1">WHEN TO USE:</p>
                      <p className="text-sm font-medium">{approaches.existing.whenToUse}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-8 lg:pt-12 max-w-4xl mx-auto animate-fade-in delay-900 fill-backwards">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <p className="relative font-syne text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-primary">The key question:</span> It's not just "do I need my data?"
              <span className="block mt-2 text-foreground-muted">
                but "do I need MORE than basic data access?"
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
