"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { AlertTriangle, CheckCircle2, XCircle, Activity } from "lucide-react"

export default function Slide15F2PitfallNoMonitoring() {
  const symptoms = [
    "Agent deployed to production",
    "Team moves to next project",
    "3 months later: Users stopped using it"
  ]

  const rootCause = "\"Done\" mentality instead of \"continuous improvement\"."

  const solutions = [
    {
      title: "Week 0: Define Monitoring Metrics",
      categories: [
        { label: "USAGE", examples: ["Queries per day", "Unique users per week"] },
        { label: "QUALITY", examples: ["User satisfaction rating", "Escalation rate"] },
        { label: "BUSINESS", examples: ["Time saved per week", "Volume handled"] }
      ]
    },
    {
      title: "Monthly Review Meeting",
      activities: [
        "Agent Manager reviews metrics",
        "Collects user feedback",
        "Plans quarterly update sprints"
      ]
    },
    {
      title: "Feedback Channel",
      activities: [
        "Users can flag bad outputs",
        "Agent Manager reviews flagged items weekly",
        "High-priority issues fixed within 2 weeks"
      ]
    }
  ]

  const redFlag = "If usage drops 20%+ month-over-month, investigate immediately"

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="destructive" className="text-sm px-4 py-2">
            Common Pitfall #6
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            No Monitoring <span className="text-primary">After Deployment</span>
          </h2>
        </div>

        {/* Warning Icon */}
        <div className="flex justify-center animate-fade-in delay-300 fill-backwards">
          <div className="p-6 rounded-2xl bg-red-500/10">
            <Activity className="w-16 h-16 text-red-500" />
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
                {solution.categories && (
                  <div className="pl-7 space-y-2">
                    {solution.categories.map((cat, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-foreground/60">{cat.label}:</p>
                        <p className="text-sm text-foreground/70">{cat.examples.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                )}
                {solution.activities && (
                  <ul className="space-y-1 pl-7">
                    {solution.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-foreground/70">• {activity}</li>
                    ))}
                  </ul>
                )}
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
