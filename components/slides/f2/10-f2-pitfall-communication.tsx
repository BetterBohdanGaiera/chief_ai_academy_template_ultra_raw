"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react"

export default function Slide10F2PitfallCommunication() {
  const symptoms = [
    "Iteration speed is slow despite co-location",
    "Developer builds features Agent Manager didn't ask for",
    "Agent Manager can't articulate what's wrong with outputs",
    "Feedback is vague: 'This doesn't feel right'"
  ]

  const rootCause = "Different languages: Domain expert speaks business, developer speaks tech. No shared framework for describing quality."

  const solutions = [
    {
      title: "Week 1: Establish Communication Protocol",
      actions: [
        "Agent Manager prepares 10 examples of good/bad outputs BEFORE development starts",
        "Developer shadows Agent Manager doing the process manually for 2 hours"
      ]
    },
    {
      title: "Daily Standups (15 min)",
      actions: [
        "Agent Manager: 'Here's what I'll test today' (specific scenarios)",
        "Developer: 'Here's what I'm building today' (plain language description)"
      ]
    },
    {
      title: "Structured Feedback Template",
      actions: [
        "❌ Bad: 'The output is wrong'",
        "✅ Good: 'Output said X, but should say Y because [business rule]. Example: [scenario].'"
      ]
    }
  ]

  const redFlag = "If 3+ days pass with no working demo, communication is broken"

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="destructive" className="text-sm px-4 py-2">
            Common Pitfall #1
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Agent Manager & Developer <span className="text-primary">Don't Communicate</span>
          </h2>
        </div>

        {/* Warning Icon */}
        <div className="flex justify-center animate-fade-in delay-300 fill-backwards">
          <div className="p-6 rounded-2xl bg-red-500/10">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
        </div>

        {/* Symptoms */}
        <Card className="border-red-500/40 bg-red-500/5 animate-fade-in delay-400 fill-backwards">
          <CardContent className="pt-6 space-y-3">
            <h3 className="text-xl font-display flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-500" />
              Symptoms
            </h3>
            <ul className="space-y-2">
              {symptoms.map((symptom, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-foreground/80">
                  <span className="text-red-500">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Root Cause */}
        <Card className="border-border/50 animate-fade-in delay-500 fill-backwards">
          <CardContent className="pt-6">
            <h3 className="text-lg font-display mb-3">Root Cause</h3>
            <p className="text-sm text-foreground/80">{rootCause}</p>
          </CardContent>
        </Card>

        {/* Solutions */}
        <div className="space-y-3 animate-fade-in delay-600 fill-backwards">
          <h3 className="text-2xl font-display text-center">How to Avoid</h3>
          {solutions.map((solution, idx) => (
            <Card key={idx} className="border-green-500/40 bg-green-500/5">
              <CardContent className="pt-4 space-y-2">
                <h4 className="text-base font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {solution.title}
                </h4>
                <ul className="space-y-1 pl-7">
                  {solution.actions.map((action, i) => (
                    <li key={i} className="text-sm text-foreground/70">
                      {action}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Red Flag */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-800 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">🚩 Red Flag:</span> {redFlag}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
