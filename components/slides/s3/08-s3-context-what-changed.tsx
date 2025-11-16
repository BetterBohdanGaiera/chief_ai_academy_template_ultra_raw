"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { ArrowRight } from "lucide-react"

export default function Slide08S3ContextWhatChanged() {
  const changes = [
    {
      before: "Generic task description",
      after: "Specific evaluation framework with point values"
    },
    {
      before: "No evaluation criteria",
      after: "Clear definitions of quality (what's 'good' vs 'bad')"
    },
    {
      before: "No examples of good/bad",
      after: "Edge cases and exceptions documented"
    },
    {
      before: "No structure for output",
      after: "Structured output format with templates"
    },
    {
      before: "Subjective feedback",
      after: "Actionable feedback with specific timestamps and examples"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bebas">
            What <span className="text-primary">Changed</span> Between Before/After?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            The difference between 60% accurate and 95% accurate isn't the AI model - it's the context quality
          </p>
        </div>

        <div className="space-y-4">
          {changes.map((change, idx) => (
            <Card
              key={idx}
              className="border-primary/20 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-red-500">BEFORE (Vague)</p>
                    <p className="text-sm text-foreground/70">{change.before}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary mx-auto" />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-green-500">AFTER (Structured)</p>
                    <p className="text-sm text-foreground/90 font-medium">{change.after}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40">
          <CardContent className="pt-6 text-center space-y-3">
            <h3 className="text-xl font-syne font-semibold text-primary">Key Insight</h3>
            <p className="text-foreground/90 max-w-4xl mx-auto">
              Domain experts know this structure exists in their heads - teaching AI your expertise is the process of extracting and documenting it. This is the work of context engineering.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
