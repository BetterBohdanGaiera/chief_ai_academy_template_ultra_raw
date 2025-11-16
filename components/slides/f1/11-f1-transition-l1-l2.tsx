"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Calendar, CheckCircle2 } from "lucide-react"

export default function F1TransitionL1L2() {
  const phases = [
    {
      days: "Days 1-30",
      title: "Assessment & Planning",
      tasks: [
        "Identify ONE high-impact use case",
        "Assess: Can existing tools handle this?",
        "Identify domain expert (future Agent Manager)",
        "Document current process and pain points"
      ]
    },
    {
      days: "Days 31-60",
      title: "Build Capability",
      tasks: [
        "Agent Manager learns tools OR pair with developer",
        "Start with smallest viable scope",
        "Target 10-15 iterations in first 2 weeks",
        "Focus on achieving 1-3 iterations/day"
      ]
    },
    {
      days: "Days 61-90",
      title: "Reach Production",
      tasks: [
        "Continue iteration: Reach 20 total iterations",
        "Track accuracy progression (70% → 85% → 95%+)",
        "Deploy to small user group (5-10 people)",
        "If successful, identify next 2-3 use cases"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">90-Day Roadmap</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            FROM LEVEL 1-2 TO <span className="text-primary">LEVEL 4</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Your path from individual AI to transformational results
          </p>
        </div>

        {/* Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, idx) => (
            <Card
              key={idx}
              className={`border-primary/40 bg-gradient-to-br from-primary/${10 + idx * 5} to-primary/5 animate-fade-in delay-${idx * 200 + 300} fill-backwards`}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">{phase.days}</span>
                </div>
                <h3 className="text-xl font-bold">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Critical Decision Point */}
        <Card className="bg-orange-500/10 border-orange-500 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4 space-y-3">
            <h3 className="text-lg font-bold text-orange-500">Week 3 Check: Are You On Track?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-500 mb-2">✅ YES - Achieving 1-3 iterations/day:</p>
                <p>You're on track for Level 4. Continue current approach.</p>
              </div>
              <div>
                <p className="font-semibold text-red-500 mb-2">❌ NO - Less than 1 iteration/day:</p>
                <p>Diagnose: Communication delays? Technical blockers? Context quality issues?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1200 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Success Factor:</span> Focus on ONE use case. Master the capability. Then scale.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
