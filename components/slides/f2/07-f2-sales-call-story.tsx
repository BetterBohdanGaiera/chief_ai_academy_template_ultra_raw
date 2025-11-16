"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { PhoneCall, ChevronDown, ChevronRight } from "lucide-react"

export default function Slide07F2SalesCallStory() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

  const timeline = [
    {
      week: 1,
      title: "The Challenge",
      summary: "David (Sales Director, 12 years) wants to scale his coaching",
      details: [
        "Team does 200+ sales calls weekly, David can only review 5-10",
        "David knows winning vs losing patterns (discovery, objection handling, closing)",
        "Priya (Developer) proposes AI to analyze calls using David's criteria",
        "Goal: Scale David's expertise across 40-person sales team"
      ]
    },
    {
      week: 2,
      title: "Sales Methodology Is Hard to Document",
      summary: "10 iterations reveal tacit knowledge",
      details: [
        "Test 5: Agent counts 8 questions, David says 'It's not the number, it's the QUALITY'",
        "David explains: Open-ended questions build on answers (strong), yes/no questions don't (weak)",
        "Priya adds logic to evaluate question quality, not just count",
        "Test 6: Same call analyzed correctly—'Now you're seeing what I see!'",
        "Discovery: David's 12 years of sales methodology can't be documented upfront"
      ]
    },
    {
      week: 3,
      title: "Structured Iteration Workflow",
      summary: "10 more iterations (20 total) reach 92% alignment",
      details: [
        "Tuesday/Thursday 2-hour sessions: 5 calls → Run agent → Compare → Discuss → Fix → Re-test",
        "15-minute iteration cycles (not weeks with agencies)",
        "Final: 92% alignment with David's manual scoring",
        "Agent analyzes all 200+ calls weekly (vs David's 5-10)",
        "Result: $30K investment → $150K/year value → 2 month payback"
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
            Transformation Story #2
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Sales Call <span className="text-primary">Analyzer</span>
          </h2>
          <p className="text-lg text-foreground/70 animate-slide-in-up delay-400 fill-backwards">
            How David (Agent Manager) + Priya (Developer) scaled sales coaching
          </p>
        </div>

        {/* Team Icons */}
        <div className="flex justify-center gap-8 animate-fade-in delay-500 fill-backwards">
          <div className="text-center space-y-2">
            <div className="p-4 rounded-xl bg-primary/10 inline-block">
              <PhoneCall className="w-12 h-12 text-primary" />
            </div>
            <p className="text-sm font-semibold">David</p>
            <p className="text-xs text-foreground/60">Sales Director (12y)</p>
          </div>
          <div className="text-center space-y-2">
            <div className="p-4 rounded-xl bg-cyan-500/10 inline-block">
              <PhoneCall className="w-12 h-12 text-cyan-500" />
            </div>
            <p className="text-sm font-semibold">Priya</p>
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
              <span className="font-semibold text-primary">The Pattern:</span> David's sales expertise emerged through iteration—test calls → spot discrepancies → explain WHY agent was wrong → update → re-test. Rapid feedback loops made this possible.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
