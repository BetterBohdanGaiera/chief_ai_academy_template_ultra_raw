/**
 * S2 Slide 08: Vendor Evaluation
 * Red flags vs green flags checklist for evaluating "AI agent" solutions
 */

"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

export default function S2VendorEvaluationSlide() {
  const [view, setView] = useState<"red" | "green">("red")

  const redFlags = [
    {
      flag: "No Clear Tools",
      description: '"AI-powered" but can\'t actually take actions',
      impact: "Just text generation, not autonomous"
    },
    {
      flag: "No Memory",
      description: "Forgets context, treats each interaction independently",
      impact: "Can't maintain relationships or learn"
    },
    {
      flag: "No Autonomy",
      description: "Just generates text, requires human execution",
      impact: "Not truly \"agentic\""
    },
    {
      flag: "Slow Iteration",
      description: "Changes take weeks, external team required",
      impact: "Level 3 trap: 20 iterations = 5 months"
    },
    {
      flag: "Shallow Integration",
      description: "Pre-built only, can't customize for YOUR workflow",
      impact: "Won't fit your unique needs"
    },
    {
      flag: "Black Box",
      description: "No visibility into reasoning, can't debug or improve",
      impact: "Can't reach 95%+ reliability"
    }
  ]

  const greenFlags = [
    {
      flag: "All Four Components",
      description: "LLM, Tools, Memory, Autonomy clearly present",
      impact: "True agentic capabilities"
    },
    {
      flag: "Rapid Iteration",
      description: "Your team can refine daily (Agent Manager + Developer)",
      impact: "20 iterations in 2-3 weeks possible"
    },
    {
      flag: "Deep Integration",
      description: "Custom tools for YOUR specific systems and workflows",
      impact: "Fits your unique business needs"
    },
    {
      flag: "Transparency",
      description: "Can see reasoning, understand decisions, debug issues",
      impact: "Path to continuous improvement"
    },
    {
      flag: "Ownership",
      description: "You control the agent, can move platforms, own the IP",
      impact: "Not locked into vendor"
    },
    {
      flag: "Iteration Economics",
      description: "1-3 feedback cycles per day achievable",
      impact: "95%+ reliability is reachable"
    }
  ]

  const currentFlags = view === "red" ? redFlags : greenFlags
  const Icon = view === "red" ? AlertTriangle : CheckCircle2
  const iconColor = view === "red" ? "text-red-500" : "text-green-500"
  const cardBorder = view === "red" ? "border-red-500/40" : "border-green-500/40"
  const cardBg = view === "red" ? "bg-red-500/5" : "bg-green-500/5"

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Strategic Evaluation Framework</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            Vendor <span className="text-primary">Evaluation</span> Checklist
          </h2>
          <p className="text-xl text-foreground/70">
            What to look for when evaluating "AI agent" claims
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant={view === "red" ? "default" : "outline"}
            onClick={() => setView("red")}
            className="px-8"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Red Flags
          </Button>
          <Button
            variant={view === "green" ? "default" : "outline"}
            onClick={() => setView("green")}
            className="px-8"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Green Flags
          </Button>
        </div>

        {/* Flags Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentFlags.map((item, idx) => (
            <Card
              key={idx}
              className={`${cardBorder} ${cardBg} animate-fade-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="pt-4 space-y-2">
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`} />
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">{item.flag}</h3>
                    <p className="text-sm text-foreground/70 mt-1">{item.description}</p>
                    <p className="text-xs text-foreground/50 mt-2 italic">
                      Impact: {item.impact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Strategic Question:</span> Does this vendor solution have all four components + rapid iteration capability? If not, evaluate carefully before investing.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
