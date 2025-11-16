"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Users, ChevronDown, ChevronRight } from "lucide-react"

export default function Slide06F2HROnboardingStory() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

  const timeline = [
    {
      week: 1,
      title: "Initial Vision",
      summary: "Sarah (HR Director, 8 years) identifies automation opportunity",
      details: [
        "Manual onboarding takes 8 hours per new hire",
        "Process involves collecting documents, creating accounts, scheduling orientation",
        "Sarah knows all the edge cases (relocations, probation periods, benefits)",
        "Marcus (Developer) proposes AI agent to handle routine parts"
      ]
    },
    {
      week: 2,
      title: "Policy Complexity Emerges",
      summary: "10 iterations reveal hidden rules",
      details: [
        "Test 3: Agent misses probation period extension rules (page 47 of handbook)",
        "Test 5: Relocation policy has state-specific tax implications",
        "Test 7: Benefits enrollment depends on hire date vs policy renewal date",
        "Marcus learns: Sarah's knowledge is tacit, not documented"
      ]
    },
    {
      week: 3,
      title: "Rapid Iteration to Production",
      summary: "10 more iterations (20 total) reach 95% accuracy",
      details: [
        "Co-located sessions: Test → Feedback → Fix → Re-test (15-minute cycles)",
        "Sarah spots edge cases immediately, Marcus fixes in real-time",
        "Agent now handles 95% of routine onboarding",
        "Final: $23K investment → $74K/year value → 3.8 month payback"
      ]
    }
  ]

  const toggleWeek = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week)
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Transformation Story #1
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            HR Onboarding <span className="text-primary">Assistant</span>
          </h2>
          <p className="text-lg text-foreground/70 animate-slide-in-up delay-400 fill-backwards">
            How Sarah (Agent Manager) + Marcus (Developer) reached Level 4
          </p>
        </div>

        {/* Team Icons */}
        <div className="flex justify-center gap-8 animate-fade-in delay-500 fill-backwards">
          <div className="text-center space-y-2">
            <div className="p-4 rounded-xl bg-primary/10 inline-block">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <p className="text-sm font-semibold">Sarah</p>
            <p className="text-xs text-foreground/60">Agent Manager</p>
          </div>
          <div className="text-center space-y-2">
            <div className="p-4 rounded-xl bg-cyan-500/10 inline-block">
              <Users className="w-12 h-12 text-cyan-500" />
            </div>
            <p className="text-sm font-semibold">Marcus</p>
            <p className="text-xs text-foreground/60">AI Developer</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-3 animate-fade-in delay-700 fill-backwards">
          {timeline.map((item, idx) => (
            <Card
              key={item.week}
              className={`
                border-border/50 cursor-pointer transition-all duration-300
                ${expandedWeek === item.week ? 'border-primary shadow-lg' : 'hover:border-primary/50'}
              `}
              onClick={() => toggleWeek(item.week)}
            >
              <CardContent className="pt-4 space-y-3">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs">
                      Week {item.week}
                    </Badge>
                    <h3 className="text-lg font-display">{item.title}</h3>
                  </div>
                  {expandedWeek === item.week ? (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-foreground/40" />
                  )}
                </div>

                {/* Summary */}
                <p className="text-sm text-foreground/70">{item.summary}</p>

                {/* Expanded Details */}
                {expandedWeek === item.week && (
                  <div className="pt-3 border-t border-border animate-fade-in">
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 text-sm text-foreground/80">
                          <span className="text-primary">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-900 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Key Discovery:</span> Sarah couldn't document her HR expertise upfront—it emerged through 20 iterations of testing real scenarios. This is why co-located rapid feedback is critical.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
