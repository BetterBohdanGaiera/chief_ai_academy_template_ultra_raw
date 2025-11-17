"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react"

export default function F1L4Optimization() {
  const weeklyTargets = [
    { week: "Week 1", accuracy: "70-75%", iterations: "5-7 iterations" },
    { week: "Week 2", accuracy: "80-85%", iterations: "8-10 iterations" },
    { week: "Week 3", accuracy: "90-95%", iterations: "15-20 total" },
    { week: "Week 4", accuracy: "95%+", iterations: "Production deployment" }
  ]

  const troubleshooting = [
    {
      issue: "Accuracy not improving?",
      cause: "Context quality issue",
      solution: "Review S3 context engineering module"
    },
    {
      issue: "Can't hit 1-3 iterations/day?",
      cause: "Communication issue",
      solution: "Agent Manager + Developer not co-located?"
    },
    {
      issue: "Technical blockers slowing iteration?",
      cause: "Infrastructure issue",
      solution: "Need better tools/access"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge className="bg-primary text-primary-foreground shadow-glow">
            Building Level 4
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            OPTIMIZATION <span className="text-primary">CHECKLIST</span>
          </h2>
          <p className="text-xl text-foreground/70">
            You're here if achieving 1-3 iterations/day during active development
          </p>
        </div>

        {/* Week-by-Week Targets */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">Week-by-Week Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {weeklyTargets.map((target, idx) => (
              <Card
                key={idx}
                className={`border-primary/40 bg-gradient-to-br from-primary/${10 + idx * 5} to-primary/5 animate-fade-in delay-${idx * 100 + 300} fill-backwards`}
              >
                <CardContent className="pt-6 space-y-2 text-center">
                  <div className="text-sm font-semibold text-primary">{target.week}</div>
                  <div className="text-2xl font-bold">{target.accuracy}</div>
                  <div className="text-xs text-foreground/60">{target.iterations}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            If Behind Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {troubleshooting.map((item, idx) => (
              <Card
                key={idx}
                className={`border-orange-500/40 bg-orange-500/5 animate-fade-in delay-${idx * 150 + 700} fill-backwards`}
              >
                <CardContent className="pt-6 space-y-3">
                  <h4 className="text-base font-bold text-orange-500">{item.issue}</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Cause:</strong> {item.cause}</p>
                    <p><strong>Solution:</strong> {item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ready for Level 5? */}
        <Card className="border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 animate-fade-in delay-1100 fill-backwards">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-cyan-400">Ready for Level 5?</h3>
            </div>
            <p className="text-sm">Only move to full autonomy when:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Level 4 version proven at 95%+ for 30+ days</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Failure modes understood and handled</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Rollback plan exists</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Monitoring and alerting in place</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
