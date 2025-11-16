"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { ChevronRight } from "lucide-react"

export default function Slide10S3ContextWorksheet2() {
  const [activeSection, setActiveSection] = useState<number>(0)

  const sections = [
    {
      title: "Part 3: Evaluation Criteria",
      questions: [
        { q: "What makes a 'good' answer?", example: "Accurate per current policy, cites specific handbook section, provides clear next steps" },
        { q: "What makes a 'bad' answer?", example: "Cites deprecated policy, misses edge cases, no source citation, too vague" },
        { q: "Show 2 examples of GOOD outputs", example: "See before/after slides for full examples with calculations and citations" },
        { q: "Show 2 examples of BAD outputs", example: "Generic answers without specifics or context consideration" }
      ]
    },
    {
      title: "Part 4: Edge Cases & Exceptions",
      questions: [
        { q: "What are the tricky scenarios?", example: "Hired mid-year, probation period, performance improvement plan, state-specific rules" },
        { q: "What rules have exceptions?", example: "General: 15 days PTO | EXCEPT: Hired after Oct 1 → No PTO first year" },
        { q: "What should AI NEVER do?", example: "Never provide medical advice, never commit to exceptions without approval, never give tax advice" }
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="gradient">Context Engineering Worksheet</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            Parts 3-4: <span className="text-primary">Quality & Edge Cases</span>
          </h2>
        </div>

        <div className="flex gap-3 justify-center">
          {sections.map((section, idx) => (
            <Button
              key={idx}
              variant={activeSection === idx ? "default" : "outline"}
              onClick={() => setActiveSection(idx)}
              size="sm"
            >
              Part {idx + 3}
            </Button>
          ))}
        </div>

        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="pt-6 space-y-6">
            <h3 className="text-2xl font-syne font-semibold text-primary">
              {sections[activeSection].title}
            </h3>

            <div className="space-y-4">
              {sections[activeSection].questions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-background/50 rounded-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {item.q}
                  </p>
                  <p className="text-xs text-foreground/60 ml-6 italic">
                    Example: {item.example}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-foreground/60">
          → Continue to Slide 11 for Parts 5-6
        </p>
      </div>
    </section>
  )
}
