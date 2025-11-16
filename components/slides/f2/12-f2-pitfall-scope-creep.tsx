"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react"

export default function Slide12F2PitfallScopeCreep() {
  const symptoms = [
    "AI is working well, then stakeholder says 'Actually, we need it to also do...'",
    "Scope creeps from simple to complex",
    "Timeline extends from 3 weeks to 3 months"
  ]

  const rootCause = "Didn't define scope boundaries upfront. Stakeholders see it working and imagine new uses."

  const avoidanceSteps = [
    {
      title: "Week 0: Define Scope Boundaries Document",
      example: `IN SCOPE for v1.0:
• [Specific use case #1]
• [Specific use case #2]

OUT OF SCOPE for v1.0 (future versions):
• [Requested feature that's too complex]

SUCCESS CRITERIA for v1.0:
• [95% accuracy on defined test set]
• [Response time under 30 seconds]`
    },
    {
      title: "Change Request Process",
      example: `• New requests go into "v2.0 backlog"
• v1.0 must reach production before considering v2.0
• Prioritize by business value, not stakeholder seniority`
    },
    {
      title: "Weekly Stakeholder Demo",
      example: `• Show what's working
• Explicitly state what's NOT in scope
• Celebrate progress toward v1.0 completion`
    }
  ]

  const redFlag = "If scope changes more than 2 times in first 3 weeks, governance is broken"

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="destructive" className="text-sm px-4 py-2">
            Common Pitfall #3
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Business Requirements <span className="text-primary">Keep Changing</span>
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
          {avoidanceSteps.map((step, idx) => (
            <Card key={idx} className="border-green-500/40 bg-green-500/5">
              <CardContent className="pt-4 space-y-3">
                <h4 className="text-base font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {step.title}
                </h4>
                <pre className="text-xs text-foreground/70 bg-muted/20 p-3 rounded overflow-x-auto whitespace-pre-wrap font-jetbrains">
                  {step.example}
                </pre>
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
