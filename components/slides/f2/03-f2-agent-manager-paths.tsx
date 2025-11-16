"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Brain } from "lucide-react"

export default function Slide03F2AgentManagerPaths() {
  const [selectedPath, setSelectedPath] = useState<"external" | "internal">("internal")

  const paths = {
    external: {
      timeline: "6+ months to find and onboard",
      challenges: [
        "Hard to assess domain expertise in interviews",
        "Takes 3-6 months to learn your processes",
        "May not have validation authority",
        "Higher cost ($120-180K+ salary)"
      ],
      outcome: "❌ Usually fails—they lack tacit knowledge",
      color: "text-red-500"
    },
    internal: {
      timeline: "Identify existing expert (immediate)",
      benefits: [
        "Already knows the process (5+ years)",
        "Has validation authority",
        "Trusted by the organization",
        "Lower cost (20% time allocation initially)"
      ],
      outcome: "✅ Proven approach—rapid iteration possible",
      color: "text-green-500"
    }
  }

  const current = paths[selectedPath]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Critical Role Deep Dive
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Agent Manager: <span className="text-primary">Two Paths</span>
          </h2>
        </div>

        {/* Icon */}
        <div className="flex justify-center animate-fade-in delay-400 fill-backwards">
          <div className="p-6 rounded-2xl bg-primary/10">
            <Brain className="w-16 h-16 text-primary" />
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-4 justify-center animate-slide-in-up delay-500 fill-backwards">
          <Button
            variant={selectedPath === "external" ? "default" : "outline"}
            onClick={() => setSelectedPath("external")}
            className="px-8"
          >
            Hire External Expert
          </Button>
          <Button
            variant={selectedPath === "internal" ? "default" : "outline"}
            onClick={() => setSelectedPath("internal")}
            className="px-8"
          >
            Promote Internal Expert
          </Button>
        </div>

        {/* Dynamic Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <p className="text-sm text-foreground/60 mb-2">TIMELINE</p>
              <p className="text-xl font-display">{current.timeline}</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <p className="text-sm text-foreground/60 mb-2">OUTCOME</p>
              <p className={`text-xl font-display ${current.color}`}>
                {current.outcome}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Details List */}
        <Card className={selectedPath === "external" ? "border-red-500/40 bg-red-500/5" : "border-green-500/40 bg-green-500/5"}>
          <CardContent className="pt-6 space-y-3">
            <p className="text-sm font-semibold text-primary">
              {selectedPath === "external" ? "CHALLENGES:" : "BENEFITS:"}
            </p>
            <ul className="space-y-2">
              {(selectedPath === "external" ? current.challenges : current.benefits)?.map((item, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-foreground/80">
                  <span className={selectedPath === "external" ? "text-red-500" : "text-green-500"}>
                    {selectedPath === "external" ? "•" : "✓"}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Key Message:</span> 95% of successful Level 4 implementations use INTERNAL experts promoted into Agent Manager roles. They already have the tacit knowledge and organizational trust.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
