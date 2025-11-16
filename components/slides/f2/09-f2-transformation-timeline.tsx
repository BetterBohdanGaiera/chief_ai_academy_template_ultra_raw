"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import Image from "next/image"
import { Calendar, TrendingUp, Users } from "lucide-react"

export default function Slide09F2TransformationTimeline() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Build AI Strategy",
      duration: "2-4 weeks",
      icon: Calendar,
      activities: [
        "Assess current state (which level?)",
        "Create roadmap (which use cases, what order)",
        "Define roles (Champions, Agent Managers, Developers)",
        "Plan context engineering approach"
      ],
      outputs: "Roadmap • Priority list • Role assignments • Budget"
    },
    {
      phase: "Phase 2",
      title: "Train Team",
      duration: "1-3 months (concurrent)",
      icon: Users,
      activities: [
        "AI Champions: 2-3 days intensive training",
        "Agent Managers: 1-3 months hands-on (context engineering)",
        "AI Agent Developers: Technical training on agentic architecture",
        "Runs parallel with Phase 1 and early Phase 3"
      ],
      outputs: "Trained team ready to execute"
    },
    {
      phase: "Phase 3",
      title: "Execute & Scale",
      duration: "2-3 weeks per use case",
      icon: TrendingUp,
      activities: [
        "Start with ONE use case (quick win)",
        "2-3 weeks implementation with rapid iteration",
        "Measure ROI and build momentum",
        "Scale to additional use cases gradually"
      ],
      outputs: "Production agents • Measured ROI • Organizational momentum"
    }
  ]

  const timeline = {
    firstResults: "2-3 weeks",
    fullTransformation: "6-12 months to Level 4/5"
  }

  const budget = {
    singleUseCase: {
      initial: "$30-50K",
      annual: "$5-10K/year"
    },
    payback: "1-3 months per use case"
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763327613775-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-12 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-sm px-4 py-2">
            The Transformation Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Three-Phase <span className="text-primary">Transformation</span>
          </h2>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in delay-400 fill-backwards">
          {phases.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card key={idx} className="border-primary/40 bg-primary/5">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-1">
                        {item.phase}
                      </Badge>
                      <h3 className="text-xl font-display">{item.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-foreground/60">DURATION</p>
                    <p className="text-sm font-display text-primary">{item.duration}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground/60">ACTIVITIES</p>
                    <ul className="space-y-1">
                      {item.activities.map((activity, i) => (
                        <li key={i} className="text-xs text-foreground/70 flex gap-1">
                          <span className="text-primary">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs font-semibold text-foreground/60 mb-1">OUTPUTS</p>
                    <p className="text-xs text-foreground/80">{item.outputs}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Timeline & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-600 fill-backwards">
          <Card className="border-border/50">
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-xl font-display text-center">Timeline</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-foreground/60">First Results</p>
                  <p className="text-3xl font-display text-primary">{timeline.firstResults}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Full Transformation</p>
                  <p className="text-2xl font-display">{timeline.fullTransformation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-xl font-display text-center">Budget</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-foreground/60">Single Use Case</p>
                  <p className="text-xl font-display">{budget.singleUseCase.initial} initial</p>
                  <p className="text-sm text-foreground/60">{budget.singleUseCase.annual} ongoing</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Payback Period</p>
                  <p className="text-3xl font-display text-primary">{budget.payback}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-800 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Realistic Expectations:</span> You'll see first results in 2-3 weeks from a single use case. Full transformation to Level 4 takes 6-12 months, scaling one use case at a time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
