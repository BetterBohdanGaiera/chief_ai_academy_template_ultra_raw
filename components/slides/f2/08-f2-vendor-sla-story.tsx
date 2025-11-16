"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { FileCheck, ChevronDown, ChevronRight } from "lucide-react"

export default function Slide08F2VendorSLAStory() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

  const timeline = [
    {
      week: 1,
      title: "The Manual Process Problem",
      summary: "Jennifer (Ops Manager, 10 years) tracks 40+ vendor SLAs manually",
      details: [
        "Takes 8 hours/week tracking SLAs across scattered systems",
        "Data in Jira, Zendesk, accounting, contract PDFs on shared drive",
        "Each vendor has different SLA terms (uptime, response time, resolution time)",
        "Alex (Developer) proposes AI agent to automate monitoring"
      ]
    },
    {
      week: 2,
      title: "Contract Complexity Uncovered",
      summary: "10 iterations reveal hidden exception clauses",
      details: [
        "Test 3: Agent flags Vendor A for 99.7% uptime (SLA is 99.9%)",
        "Jennifer: 'Actually compliant—scheduled maintenance doesn't count (contract page 17)'",
        "Scheduled = 7-day email notice, different for each vendor",
        "Alex discovers: 10+ exception clauses per contract, complex time calculations",
        "Can't document upfront—need to test real scenarios"
      ]
    },
    {
      week: 3,
      title: "Multi-Vendor Policy Synthesis",
      summary: "10 more iterations (20 total) capture 10 years of ops knowledge",
      details: [
        "Tackle 5 more vendors, each with unique terms and exceptions",
        "Weekend/holiday rules, force majeure, customer-caused delays, penalty clauses",
        "Test scenario → Agent wrong → Jennifer explains rule → Alex updates → Re-test (15 min cycles)",
        "Final: 96% accuracy across 40 vendors",
        "Result: $28K investment → $120K/year value (time + penalty recoveries) → 2.8 month payback"
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
            Transformation Story #3
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Vendor SLA <span className="text-primary">Compliance Tracker</span>
          </h2>
          <p className="text-lg text-foreground/70 animate-slide-in-up delay-400 fill-backwards">
            How Jennifer (Agent Manager) + Alex (Developer) automated compliance
          </p>
        </div>

        {/* Team Icons */}
        <div className="flex justify-center gap-8 animate-fade-in delay-500 fill-backwards">
          <div className="text-center space-y-2">
            <div className="p-4 rounded-xl bg-primary/10 inline-block">
              <FileCheck className="w-12 h-12 text-primary" />
            </div>
            <p className="text-sm font-semibold">Jennifer</p>
            <p className="text-xs text-foreground/60">Ops Manager (10y)</p>
          </div>
          <div className="text-center space-y-2">
            <div className="p-4 rounded-xl bg-cyan-500/10 inline-block">
              <FileCheck className="w-12 h-12 text-cyan-500" />
            </div>
            <p className="text-sm font-semibold">Alex</p>
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
              <span className="font-semibold text-primary">Universal Truth:</span> Hidden complexity emerges through testing. Jennifer thought she could "just document the SLA terms," but 10 years of operational nuance only surfaced through 20 real scenario iterations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
