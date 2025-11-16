"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { X, Check } from "lucide-react"

export default function Slide06S3ContextBeforeAfterHR() {
  const [view, setView] = useState<"before" | "after">("before")

  const content = {
    before: {
      context: `Task: Answer employee questions about PTO policy.`,
      output: `"Employees can take 15 days of PTO per year. You need manager approval."`,
      problems: [
        "Doesn't account for probation period exceptions",
        "Doesn't explain carryover rules",
        "Doesn't cover partial-year hires",
        "Doesn't specify advance notice requirements"
      ],
      reaction: `"This didn't answer my actual question - I was hired mid-year, how much PTO do I have?"`
    },
    after: {
      context: `Task: Answer employee questions about PTO policy using 2024 Employee Handbook.

RETRIEVAL RULES:
- Always check employment start date first
- Tag priority: #Current + #PTO + #2024
- Ignore documents tagged #Deprecated

VALIDATION RULES:
1. Probation period: First 90 days, no PTO accrual
2. Partial-year hires: Prorated based on start date (15 days × [months remaining]/12)
3. Carryover: Maximum 5 days to next year
4. Notice requirements: 2 weeks advance for 5+ consecutive days
5. Manager approval: Required for all requests via Workday

OUTPUT FORMAT:
1. Direct answer to question
2. Cite specific handbook section
3. If complex scenario, show calculation
4. Provide next steps (submit via Workday link)

EDGE CASES:
- If hired after October 1: No PTO first year, full allotment next year
- If on performance improvement plan: PTO frozen except medical
- If remote employee in CA/NY: State-specific rules apply (cite state addendum)`,
      output: `"Based on your July 15, 2024 start date, you have 7.5 days of PTO for 2024 (calculated as 15 days × 6 months / 12 months). You completed probation on October 15, so PTO began accruing then. You can carry over up to 5 unused days to 2025. Submit requests via [Workday link]. Source: 2024 Employee Handbook Section 4.2, page 18."`,
      improvements: [
        "Checks employment start date automatically",
        "Applies probation period rules correctly",
        "Shows calculation for partial-year hires",
        "Cites specific handbook section",
        "Provides actionable next steps"
      ],
      reaction: `"Perfect! That answered everything."`
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge>Example 1: HR Policy Q&A</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            Context Quality <span className="text-primary">Before/After</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex gap-4 justify-center">
          <Button
            variant={view === "before" ? "default" : "outline"}
            onClick={() => setView("before")}
            size="lg"
          >
            <X className="w-5 h-5 mr-2" />
            BEFORE: Vague Context
          </Button>
          <Button
            variant={view === "after" ? "default" : "outline"}
            onClick={() => setView("after")}
            size="lg"
          >
            <Check className="w-5 h-5 mr-2" />
            AFTER: Structured Context
          </Button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Context */}
          <div className="space-y-4">
            <h3 className="text-xl font-syne font-semibold">Context Provided</h3>
            <Card className={view === "after" ? "border-primary/40" : "border-border"}>
              <CardContent className="pt-4">
                <pre className="text-xs font-mono whitespace-pre-wrap text-foreground/80 bg-muted/20 p-4 rounded overflow-auto max-h-96">
{content[view].context}
                </pre>
              </CardContent>
            </Card>
          </div>

          {/* Right: Output */}
          <div className="space-y-4">
            <h3 className="text-xl font-syne font-semibold">AI Output</h3>
            <Card className={view === "after" ? "border-green-500/40 bg-green-500/5" : "border-red-500/40 bg-red-500/5"}>
              <CardContent className="pt-4">
                <p className="text-sm text-foreground/90 italic mb-4">{content[view].output}</p>
              </CardContent>
            </Card>

            {view === "before" && (
              <Card className="border-red-500/20">
                <CardContent className="pt-4">
                  <p className="text-xs font-semibold text-red-500 mb-2">❌ PROBLEMS:</p>
                  <ul className="space-y-1 text-xs text-foreground/70">
                    {content.before.problems.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {view === "after" && (
              <Card className="border-green-500/20">
                <CardContent className="pt-4">
                  <p className="text-xs font-semibold text-green-500 mb-2">✓ IMPROVEMENTS:</p>
                  <ul className="space-y-1 text-xs text-foreground/70">
                    {content.after.improvements.map((i, idx) => (
                      <li key={idx}>• {i}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Card className="bg-muted/20">
              <CardContent className="pt-4">
                <p className="text-xs font-semibold mb-1">Employee Reaction:</p>
                <p className="text-sm italic text-foreground/80">{content[view].reaction}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
