"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { RefreshCw, TrendingUp } from "lucide-react"

export default function Slide13S3IterationDiscovery() {
  const discoveries = [
    {
      iteration: "Iteration 1-5",
      accuracy: "60-70%",
      discoveries: [
        "Missing validation rules you thought were obvious",
        "Edge cases you didn't document upfront",
        "Tacit knowledge living only in expert's head"
      ],
      color: "text-red-500"
    },
    {
      iteration: "Iteration 6-10",
      accuracy: "70-80%",
      discoveries: [
        "Ambiguous wording in original guidelines",
        "Conflicting rules that need prioritization",
        "Format preferences that improve usability"
      ],
      color: "text-orange-500"
    },
    {
      iteration: "Iteration 11-15",
      accuracy: "80-90%",
      discoveries: [
        "Rare scenarios that occur < 5% of time",
        "Output tone/style refinements",
        "Specific phrasing that resonates better"
      ],
      color: "text-yellow-500"
    },
    {
      iteration: "Iteration 16-20",
      accuracy: "90-95%+",
      discoveries: [
        "Final edge case handling",
        "Polish on output quality",
        "Exception patterns stabilize"
      ],
      color: "text-green-500"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="gradient">
            <RefreshCw className="w-4 h-4 mr-2 inline" />
            Iteration Discovery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            What <span className="text-primary">Iteration Reveals</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Each cycle uncovers knowledge you didn't know you had
          </p>
        </div>

        <div className="space-y-4">
          {discoveries.map((phase, idx) => (
            <Card
              key={idx}
              className="border-primary/20 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                  <div className="space-y-2">
                    <h3 className="font-syne font-semibold">{phase.iteration}</h3>
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`w-5 h-5 ${phase.color}`} />
                      <span className={`text-2xl font-bebas ${phase.color}`}>{phase.accuracy}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground/60 mb-2">What You Discover:</p>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {phase.discoveries.map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40">
          <CardContent className="pt-6 text-center space-y-3">
            <h3 className="text-xl font-syne font-semibold text-primary">The Level 3 Trap</h3>
            <p className="text-foreground/90 max-w-4xl mx-auto">
              Without fast iteration (1-3 cycles/day), you wait weeks between discoveries. By iteration 5 (after 5+ months), you've abandoned the project. Level 4 teams complete 20 iterations in 2-3 weeks because Agent Manager + Developer sit together.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
