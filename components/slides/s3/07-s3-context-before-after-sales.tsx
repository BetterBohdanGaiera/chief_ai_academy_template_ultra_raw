"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { X, Check } from "lucide-react"

export default function Slide07S3ContextBeforeAfterSales() {
  const [view, setView] = useState<"before" | "after">("before")

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge>Example 2: Sales Call Scoring</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            Context Quality <span className="text-primary">Before/After</span>
          </h2>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            variant={view === "before" ? "default" : "outline"}
            onClick={() => setView("before")}
            size="lg"
          >
            <X className="w-5 h-5 mr-2" />
            BEFORE: Vague
          </Button>
          <Button
            variant={view === "after" ? "default" : "outline"}
            onClick={() => setView("after")}
            size="lg"
          >
            <Check className="w-5 h-5 mr-2" />
            AFTER: Structured
          </Button>
        </div>

        {view === "before" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardContent className="pt-4 space-y-3">
                <h3 className="font-semibold">Context:</h3>
                <pre className="text-xs font-mono bg-muted/20 p-3 rounded">Task: Score sales calls and provide feedback to reps.</pre>
              </CardContent>
            </Card>
            <Card className="border-red-500/40 bg-red-500/5">
              <CardContent className="pt-4 space-y-3">
                <h3 className="font-semibold">AI Output:</h3>
                <p className="text-sm italic">"This was a good call. The rep asked questions and explained the product. Score: 7/10."</p>
                <div className="text-xs text-red-500 space-y-1">
                  <p>❌ No specific criteria applied</p>
                  <p>❌ "Good" is subjective</p>
                  <p>❌ No actionable feedback</p>
                  <p>❌ Score seems arbitrary</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <Card className="border-primary/40">
              <CardContent className="pt-4 space-y-2">
                <h3 className="font-semibold text-sm">Structured Evaluation Framework (12 Criteria):</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                  <div className="bg-muted/20 p-2 rounded">Discovery (0-30 pts)</div>
                  <div className="bg-muted/20 p-2 rounded">Pain Identification (0-20 pts)</div>
                  <div className="bg-muted/20 p-2 rounded">Solution Positioning (0-20 pts)</div>
                  <div className="bg-muted/20 p-2 rounded">Objection Handling (0-15 pts)</div>
                  <div className="bg-muted/20 p-2 rounded">Next Steps (0-15 pts)</div>
                  <div className="bg-muted/20 p-2 rounded">Talk-to-Listen Ratio</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500/40 bg-green-500/5">
              <CardContent className="pt-4 space-y-3">
                <h3 className="font-semibold">AI Output with Structure:</h3>
                <div className="text-xs space-y-2">
                  <p className="font-semibold">Score: 73/100 (Acceptable, needs coaching)</p>
                  <div>
                    <p className="font-semibold text-green-500">What Went Well:</p>
                    <ul className="ml-4 space-y-1 text-foreground/70">
                      <li>• 12:15 - Strong open-ended question: "Walk me through your current process"</li>
                      <li>• 23:40 - Excellent objection handling: Acknowledged budget concern, reframed with 6-month ROI</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-500">Coaching Opportunities:</p>
                    <ul className="ml-4 space-y-1 text-foreground/70">
                      <li>• 14:30 - Asked "Do you have a budget?" (yes/no = weak). Better: "What does your budget process look like?"</li>
                      <li>• 18:00 - Found pain point but didn't quantify. Should ask: "How many hours per week does this cost?"</li>
                    </ul>
                  </div>
                  <p className="font-semibold text-primary">Primary Focus: Quantify pain points</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
