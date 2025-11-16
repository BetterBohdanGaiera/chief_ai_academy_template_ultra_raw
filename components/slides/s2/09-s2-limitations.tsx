/**
 * S2 Slide 09: When Agents DON'T Work
 * Understanding limitations and when NOT to use agents
 */

"use client"

import { useState } from "react"
import { XCircle, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

export default function S2LimitationsSlide() {
  const [view, setView] = useState<"dont" | "do">("dont")

  const dontUse = [
    {
      scenario: "Tacit Knowledge Decisions",
      example: "C-level strategic decisions requiring undocumented context",
      reason: "Judgment depends on experience impossible to capture"
    },
    {
      scenario: "Catastrophic Consequences",
      example: "Medical diagnoses, financial trading without human verification",
      reason: "Errors have unacceptable risks with no safety net"
    },
    {
      scenario: "Poorly Defined Processes",
      example: "\"Just figure out how to improve our sales process\"",
      reason: "Fix the process first, then automate it"
    },
    {
      scenario: "Pure Creativity",
      example: "Original brand strategy, novel product innovation",
      reason: "Strong at pattern matching, weak at unprecedented creativity"
    },
    {
      scenario: "Legal/Compliance Critical",
      example: "Contract interpretation without legal review",
      reason: "Risk of hallucination in high-stakes legal context"
    }
  ]

  const doUse = [
    {
      scenario: "Documented Processes",
      example: "Customer support with clear playbooks",
      reason: "Process is repeatable and can be encoded"
    },
    {
      scenario: "High-Volume Tasks",
      example: "Data entry, document processing, ticket routing",
      reason: "Volume makes manual execution expensive/slow"
    },
    {
      scenario: "Consistency Needed",
      example: "Same evaluation criteria applied every time",
      reason: "Humans vary, agents follow the same logic"
    },
    {
      scenario: "24/7 Availability",
      example: "After-hours support, global timezone coverage",
      reason: "Agents don't sleep or take breaks"
    },
    {
      scenario: "Iteration Path Exists",
      example: "Agent Manager + Developer partnership in place",
      reason: "Can reach 95%+ through 20 iterations over 2-3 weeks"
    },
    {
      scenario: "Positive ROI Clear",
      example: "Time savings > iteration costs",
      reason: "Economics justify the investment"
    }
  ]

  const currentItems = view === "dont" ? dontUse : doUse
  const Icon = view === "dont" ? XCircle : CheckCircle2
  const iconColor = view === "dont" ? "text-red-500" : "text-green-500"
  const title = view === "dont" ? "Don't Use Agents When..." : "Use Agents When..."

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Understanding Limitations</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            When Agents <span className="text-primary">{view === "dont" ? "DON'T" : "DO"}</span> Work
          </h2>
          <p className="text-xl text-foreground/70">
            Setting realistic expectations for AI agents
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant={view === "dont" ? "default" : "outline"}
            onClick={() => setView("dont")}
            className="px-8"
          >
            <XCircle className="w-4 h-4 mr-2" />
            Don't Use
          </Button>
          <Button
            variant={view === "do" ? "default" : "outline"}
            onClick={() => setView("do")}
            className="px-8"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Do Use
          </Button>
        </div>

        {/* Scenarios Grid */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bebas text-center mb-6">{title}</h3>

          {currentItems.map((item, idx) => (
            <Card
              key={idx}
              className={`${view === "dont" ? "border-red-500/40 bg-red-500/5" : "border-green-500/40 bg-green-500/5"} animate-fade-in`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`} />
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <p className="text-xs text-foreground/60 font-semibold mb-1">SCENARIO:</p>
                      <p className="text-sm font-semibold">{item.scenario}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 font-semibold mb-1">EXAMPLE:</p>
                      <p className="text-sm text-foreground/80">{item.example}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 font-semibold mb-1">REASON:</p>
                      <p className="text-sm text-foreground/80">{item.reason}</p>
                    </div>
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
              <span className="font-semibold text-primary">Critical Insight:</span> The key differentiator is whether the process is documented and repeatable. If it is, agents excel. If not, fix the process first.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
