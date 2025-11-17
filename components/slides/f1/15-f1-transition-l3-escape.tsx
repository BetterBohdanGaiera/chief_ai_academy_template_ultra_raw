"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

export default function F1TransitionL3Escape() {
  const [showDiagnosis, setShowDiagnosis] = useState(true)

  const symptoms = [
    "Tool launched 2+ months ago but still not production-ready",
    "Accuracy stuck at 65-75% despite multiple fixes",
    "Change requests take 1+ weeks to implement",
    "Using external agency or vendor for changes",
    "Users complaining about unreliable outputs",
    "Team considering abandoning the project"
  ]

  const escapeWeeks = [
    {
      week: "Week 1",
      title: "Stop the Bleeding",
      actions: [
        "Pause further investment in current solution",
        "Document what's actually broken (10+ bad output examples)",
        "Assess iteration capability: Who can make changes? How fast?",
        "Critical: Do you have internal team for rapid iteration?"
      ]
    },
    {
      week: "Weeks 2-3",
      title: "Rebuild Foundation",
      actions: [
        "If no internal capability: Hire/assign 1 developer",
        "Identify domain expert (Agent Manager) who knows process deeply",
        "Establish co-location: Agent Manager + Developer daily (not async)",
        "Start fresh with smallest viable scope"
      ]
    },
    {
      week: "Weeks 4-6",
      title: "Rapid Iteration",
      actions: [
        "Build minimum version targeting 1-3 iterations per day",
        "Test → Find gaps → Fix → Re-test (same day cycle)",
        "Target 20 iterations over 2-3 weeks",
        "Deploy to limited users when 90%+ accurate"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="destructive">Escape Plan</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            STUCK AT <span className="text-red-500">LEVEL 3?</span>
          </h2>
          <p className="text-xl text-foreground/70">How to escape the trap</p>
        </div>

        {/* Diagnosis */}
        <Card className="border-red-500 bg-red-500/10 animate-scale-in delay-300 fill-backwards">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h3 className="text-xl font-bold text-red-500">Diagnosis: Are You in the Trap?</h3>
            </div>
            <p className="text-sm">Check these symptoms (if 3+ are true, you're trapped):</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Escape Plan */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">The Escape Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {escapeWeeks.map((phase, idx) => (
              <Card
                key={idx}
                className={`border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in delay-${idx * 200 + 500} fill-backwards`}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="text-sm font-semibold text-primary">{phase.week}</div>
                  <h4 className="text-lg font-bold">{phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.actions.map((action, actionIdx) => (
                      <li key={actionIdx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cost Reality */}
        <Card className="bg-orange-500/10 border-orange-500 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <h4 className="text-lg font-bold text-orange-500 mb-2">Cost Reality</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold">Sunk Cost:</p>
                <p>Accept Level 3 investment is lost</p>
              </div>
              <div>
                <p className="font-semibold">New Investment:</p>
                <p>$30-50K for 2-3 week rebuild</p>
              </div>
              <div>
                <p className="font-semibold">Alternative:</p>
                <p className="text-red-500">Continue bleeding → Abandonment</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1200 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Key Insight:</span> The Level 3 trap isn't about the tool—it's about iteration speed. Same tool can work at Level 4 if you have internal team iterating daily.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
