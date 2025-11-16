"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { AlertTriangle, HelpCircle, CheckCircle2, XCircle } from "lucide-react"

export default function Slide13F2PitfallAccuracyPlateau() {
  const symptoms = [
    "Completed 3 weeks of iteration",
    "Hit 20 iteration target",
    "But accuracy stuck at 80-85%"
  ]

  const rootCause = "Wrong use case complexity for team capability OR fundamental process ambiguity."

  const diagnosticQuestions = [
    {
      question: "Can a human expert do this consistently?",
      yes: "✅ Process is automatable, keep iterating",
      no: "❌ Fix the process first, then automate"
    },
    {
      question: "Are failures random or patterned?",
      random: "Model quality issue (try better LLM)",
      patterned: "Missing context or business rules"
    },
    {
      question: "Is this actually 3 different use cases pretending to be 1?",
      yes: "Split into 3 separate agents, each simpler",
      no: "Continue refinement"
    }
  ]

  const solutions = [
    "Start with simplest possible scope",
    "Week 2 checkpoint: If not at 80% accuracy, diagnose root cause",
    "Escalation rule: If stuck below 85% after 15 iterations, bring in AI Champion for review"
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="destructive" className="text-sm px-4 py-2">
            Common Pitfall #4
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            20 Iterations But Still <span className="text-primary">Below 90%</span>
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

        {/* Diagnostic Questions */}
        <div className="space-y-3 animate-fade-in delay-600 fill-backwards">
          <h3 className="text-2xl font-display text-center">How to Diagnose</h3>
          {diagnosticQuestions.map((item, idx) => (
            <Card key={idx} className="border-border/50">
              <CardContent className="pt-4 space-y-2">
                <h4 className="text-base font-semibold flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  {item.question}
                </h4>
                <div className="pl-7 space-y-1">
                  {item.yes && (
                    <p className="text-sm text-foreground/70">
                      <span className="font-semibold">YES:</span> {item.yes}
                    </p>
                  )}
                  {item.no && (
                    <p className="text-sm text-foreground/70">
                      <span className="font-semibold">NO:</span> {item.no}
                    </p>
                  )}
                  {item.random && (
                    <p className="text-sm text-foreground/70">
                      <span className="font-semibold">Random:</span> {item.random}
                    </p>
                  )}
                  {item.patterned && (
                    <p className="text-sm text-foreground/70">
                      <span className="font-semibold">Patterned:</span> {item.patterned}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solutions */}
        <Card className="border-green-500/40 bg-green-500/5 animate-fade-in delay-700 fill-backwards">
          <CardContent className="pt-4 space-y-3">
            <h4 className="text-base font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              How to Avoid
            </h4>
            <ul className="space-y-2 pl-7">
              {solutions.map((solution, idx) => (
                <li key={idx} className="text-sm text-foreground/70">• {solution}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
