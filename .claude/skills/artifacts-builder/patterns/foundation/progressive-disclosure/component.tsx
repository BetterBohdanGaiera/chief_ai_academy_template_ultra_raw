/**
 * PROGRESSIVE DISCLOSURE PATTERN
 *
 * A multi-stage layout that reveals information progressively (e.g., through
 * staggered animations or tabs/accordions) to manage cognitive load.
 *
 * Key Design Principles:
 * - Information revealed in logical stages (e.g., Year 1, Year 2, Year 3)
 * - Staggered animations prevent overwhelming the viewer
 * - Each stage is self-contained and scannable
 * - Visual hierarchy through headings and table structure
 * - Summary/insight cards provide context after details
 *
 * This pattern shows multiple data tables revealed sequentially using animation delays.
 * For truly interactive progressive disclosure (click to expand), see the accordion variant below.
 */

"use client"

import { Users, TrendingUp, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface TableRow {
  role: string
  headcount: string
  notes: string
}

interface Stage {
  title: string
  subtitle: string
  rows: TableRow[]
  summary: {
    label: string
    value: string
    notes: string
  }
}

export default function ProgressiveDisclosurePattern() {
  // CUSTOMIZE THIS: Define your stages of information
  const stages: Stage[] = [
    {
      title: "STAGE 1 (First Phase)",
      subtitle: "Starting small",
      rows: [
        { role: "Leadership", headcount: "1", notes: "Existing executive" },
        { role: "Champion", headcount: "1", notes: "Department head (10-20% time)" },
        { role: "Specialist", headcount: "1", notes: "Process expert (50% time)" },
        { role: "Technical", headcount: "1", notes: "Existing dev or new hire" },
      ],
      summary: {
        label: "Total new hires",
        value: "0-1",
        notes: "Most roles from existing employees"
      }
    },
    {
      title: "STAGE 2 (Growth Phase)",
      subtitle: "Scaling operations",
      rows: [
        { role: "Leadership", headcount: "1", notes: "Strategic oversight" },
        { role: "Champions", headcount: "3-5", notes: "One per department" },
        { role: "Specialists", headcount: "3-5", notes: "One per active initiative" },
        { role: "Technical", headcount: "2-3", notes: "Can support multiple initiatives" },
      ],
      summary: {
        label: "Total team",
        value: "9-14",
        notes: "Mostly existing employees in new roles"
      }
    },
    {
      title: "STAGE 3 (Maturity Phase)",
      subtitle: "Full-scale transformation",
      rows: [
        { role: "Leadership", headcount: "1", notes: "Full-time transformation leadership" },
        { role: "Champions", headcount: "5-8", notes: "Expanding to more departments" },
        { role: "Specialists", headcount: "10-15", notes: "Active + maintenance initiatives" },
        { role: "Technical", headcount: "4-6", notes: "Technical team scaling" },
      ],
      summary: {
        label: "Total team",
        value: "20-30",
        notes: "Mix of existing + new hires"
      }
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Background Layers */}
      <GeometricPattern type="dots" className="opacity-15" />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-3 animate-fade-in">
          <Badge
            variant="outline"
            className="inline-flex text-sm px-4 py-2 border-primary/60 text-primary font-medium animate-slide-in-down fill-backwards"
          >
            Growth Roadmap
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight tracking-tight animate-fade-in delay-200 fill-backwards">
            WHAT YOU <span className="text-primary">ACTUALLY</span> NEED
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-manrope animate-slide-in-up delay-400 fill-backwards">
            Realistic structure for sustainable growth
          </p>
        </div>

        {/* Progressive Stages - Each revealed with delay */}
        <div className="space-y-8 animate-fade-in delay-600 fill-backwards">
          {stages.map((stage, stageIndex) => (
            <div
              key={stageIndex}
              className="space-y-3"
              style={{
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${600 + stageIndex * 300}ms`,
                opacity: 0,
                animationFillMode: 'both'
              }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary font-bebas">
                {stage.title}
              </h3>
              <p className="text-sm text-muted-foreground font-manrope mb-2">
                {stage.subtitle}
              </p>

              {/* Data Table */}
              <div className="overflow-x-auto border border-border/40 rounded-lg bg-muted/10">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/40 bg-muted/20">
                      <th className="px-4 py-3 text-left text-sm font-bold text-foreground">Role</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-foreground">Headcount</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stage.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-b border-border/20 hover:bg-muted/5 transition-colors"
                      >
                        <td className="px-4 py-3 text-sm text-foreground">{row.role}</td>
                        <td className="px-4 py-3 text-sm text-foreground font-semibold">{row.headcount}</td>
                        <td className="px-4 py-3 text-sm text-foreground/70">{row.notes}</td>
                      </tr>
                    ))}
                    {/* Summary Row */}
                    <tr className="bg-primary/5 border-t-2 border-primary/30">
                      <td className="px-4 py-3 text-sm font-bold text-foreground">{stage.summary.label}</td>
                      <td className="px-4 py-3 text-sm font-bold text-primary">{stage.summary.value}</td>
                      <td className="px-4 py-3 text-sm text-foreground/70">{stage.summary.notes}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight Card */}
        <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in delay-1500 fill-backwards">
          <CardContent className="p-6 md:p-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/20 mt-1">
                <Users className="w-6 h-6 text-primary shrink-0" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-2">Key Insight</h3>
                <p className="text-foreground/90 font-semibold">
                  Most roles are existing employees in new positions—not new hires
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Budget Guidance Card */}
        <Card className="border-border/30 bg-muted/15 animate-fade-in delay-1700 fill-backwards">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Investment */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <DollarSign className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Investment</p>
                    <div className="space-y-1">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-foreground/90">Stage 1:</span>{" "}
                        <span className="font-bold text-primary">$50-100K</span>
                      </p>
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-foreground/90">Stage 2:</span>{" "}
                        <span className="font-bold text-primary">$150-300K</span>
                      </p>
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-foreground/90">Stage 3:</span>{" "}
                        <span className="font-bold text-primary">$400-600K</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Expected ROI</p>
                    <div className="space-y-1">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-foreground/90">Stage 1 Value:</span>{" "}
                        <span className="font-bold text-primary">$100-200K</span>
                      </p>
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-foreground/90">Stage 2 Value:</span>{" "}
                        <span className="font-bold text-primary">$300-500K</span>
                      </p>
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-foreground/90">Payback:</span>{" "}
                        <span className="font-bold text-primary">Typically in first stage</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
