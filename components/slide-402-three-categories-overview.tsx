"use client"

import { useState } from "react"
import { MessageSquare, Database, Workflow, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface Category {
  id: number
  name: string
  shortName: string
  level: string
  roiRange: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  borderColor: string
  bgColor: string
  examples: string[]
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Static Information Chatbots",
    shortName: "Static Chatbots",
    level: "Level 4",
    roiRange: "$15K - $99K/year",
    description: "Answer questions from existing knowledge base",
    icon: MessageSquare,
    color: "#10B981",
    borderColor: "border-success/60",
    bgColor: "bg-success/5",
    examples: [
      "HR policy chatbots",
      "Product documentation bots",
      "Internal knowledge base assistants",
      "FAQ automation",
    ],
  },
  {
    id: 2,
    name: "Dynamic Content Chatbots",
    shortName: "Dynamic Chatbots",
    level: "Level 4-5",
    roiRange: "$14K - $246K/year",
    description: "Fetch and synthesize real-time data from live sources",
    icon: Database,
    color: "#00BBFF",
    borderColor: "border-[#00BBFF]/60",
    bgColor: "bg-[#00BBFF]/5",
    examples: [
      "Customer support with CRM integration",
      "Sales data assistants",
      "Real-time inventory chatbots",
      "Live analytics bots",
    ],
  },
  {
    id: 3,
    name: "Custom Workflows & Analyzers",
    shortName: "Custom Workflows",
    level: "Level 5",
    roiRange: "$63K - $158K/year",
    description: "Apply expert judgment and automate complex processes at scale",
    icon: Workflow,
    color: "#FF4D00",
    borderColor: "border-primary/60",
    bgColor: "bg-primary/5",
    examples: [
      "Code review automation",
      "Contract analysis systems",
      "Research synthesis agents",
      "Multi-step approval workflows",
    ],
  },
]

export function Slide402ThreeCategoriesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="hexagon" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <DollarSign className="h-5 w-5 mr-2" />
            AGENTIC SOLUTION CATEGORIES
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Three Categories,
            <span className="block text-primary mt-2">Three Value Ranges</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Understanding what you can build and expected ROI
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-in-up delay-200 fill-backwards">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.id

            return (
              <Card
                key={category.id}
                className={`border-2 ${category.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
                  isSelected ? "shadow-glow ring-2 ring-primary/50" : ""
                }`}
                onClick={() => setSelectedCategory(isSelected ? null : category.id)}
              >
                <CardHeader className={category.bgColor}>
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <Badge variant="outline" style={{ borderColor: category.color, color: category.color }}>
                      {category.level}
                    </Badge>
                  </div>
                  <CardTitle className="font-syne text-2xl mt-4" style={{ color: category.color }}>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {/* ROI Range */}
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground font-semibold">ROI Range</p>
                    <p className="text-2xl font-bold font-jetbrains" style={{ color: category.color }}>
                      {category.roiRange}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 font-manrope leading-relaxed">
                    {category.description}
                  </p>

                  {/* Examples - Show when selected or on hover */}
                  <div
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      isSelected ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm font-semibold text-foreground/60 pt-2 border-t border-border">
                      Common Examples:
                    </p>
                    <ul className="space-y-1">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Click hint */}
                  {!isSelected && (
                    <p className="text-xs text-foreground/40 text-center pt-2 border-t border-border">
                      Click to see examples
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <div className="text-center pt-6 animate-fade-in delay-400 fill-backwards">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <Card className="relative bg-white/95 backdrop-blur-md border-2 border-primary/40 px-8 py-6">
              <p className="font-syne text-xl md:text-2xl font-bold text-foreground">
                <span className="text-primary">Key Insight:</span> Choose your category based on{" "}
                <span className="text-primary">data needs</span>, <span className="text-primary">complexity</span>, and{" "}
                <span className="text-primary">autonomy requirements</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
