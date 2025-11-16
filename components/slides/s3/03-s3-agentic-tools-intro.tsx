"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Code2, Sparkles, Zap } from "lucide-react"

export default function Slide03S3AgenticToolsIntro() {
  const tools = [
    {
      name: "Cursor IDE",
      icon: Code2,
      features: [
        "Build automations using natural language",
        "Direct file manipulation (create, edit, delete)",
        "200,000 token context window"
      ]
    },
    {
      name: "Claude Code",
      icon: Sparkles,
      features: [
        "Multi-step workflow planning",
        "Extended autonomy and reasoning",
        "Perfect for prototyping and productivity"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="gradient" className="animate-slide-in-down">
            Level 3.5 Tools
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bebas animate-fade-in delay-200 fill-backwards">
            Agentic Development <span className="text-primary">Tools</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            How non-technical experts can build automations without learning syntax
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {tools.map((tool, idx) => {
            const Icon = tool.icon
            return (
              <Card
                key={idx}
                className="border-primary/20 animate-fade-in"
                style={{ animationDelay: `${idx * 200 + 600}ms` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display">{tool.name}</h3>
                  </div>

                  <ul className="space-y-2">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/80">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Value Proposition */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-syne font-semibold text-primary">
                The Revolutionary Workflow
              </h3>
              <p className="text-foreground/80">
                <span className="font-semibold">Old way:</span> Spend 50+ hours learning specialized tool syntax →{" "}
                <span className="font-semibold text-primary">New way:</span> Learn ONE interface (15 hours) that works with ALL tools
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Not a New Level:</span> This is a new PATH to Level 4 rapid iteration - same capability (1-3 cycles/day), but without requiring a dedicated developer for simple use cases.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
