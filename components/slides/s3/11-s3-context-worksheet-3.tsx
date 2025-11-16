"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { ChevronRight } from "lucide-react"

export default function Slide11S3ContextWorksheet3() {
  const [activeSection, setActiveSection] = useState<number>(0)

  const sections = [
    {
      title: "Part 5: Output Structure",
      questions: [
        { q: "What format should answers follow?", example: "1. Direct answer → 2. Source citation → 3. Edge cases → 4. Next steps" },
        { q: "What tone/style should it use?", example: "Friendly but professional; simple language; no corporate jargon" }
      ]
    },
    {
      title: "Part 6: Iteration Plan",
      questions: [
        { q: "How will I test this?", example: "Test Set 1: 10 common questions | Test Set 2: 5 edge cases | Test Set 3: 5 escalation scenarios" },
        { q: "What's my validation method?", example: "Review outputs side-by-side with what I would say; must match 90%+" },
        { q: "How will I track improvements?", example: "Iteration 1: ~60% accuracy → Iteration 5: ~80% → Iteration 20: 95%+" }
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
            Parts 5-6: <span className="text-primary">Format & Iteration</span>
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
              Part {idx + 5}
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

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40">
          <CardContent className="pt-6 text-center space-y-3">
            <h3 className="text-lg font-syne font-semibold text-primary">How to Use This Worksheet</h3>
            <div className="text-sm text-foreground/80 space-y-2">
              <p><span className="font-semibold">Week 1:</span> Fill out Parts 1-3 (Overview, Sources, Criteria) - 3-5 hours</p>
              <p><span className="font-semibold">Week 2:</span> Fill out Parts 4-5 (Edge Cases, Output) through testing - 5-8 hours</p>
              <p><span className="font-semibold">Week 3:</span> Execute Part 6 (Iteration Plan) - 10-20 cycles to 95%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
