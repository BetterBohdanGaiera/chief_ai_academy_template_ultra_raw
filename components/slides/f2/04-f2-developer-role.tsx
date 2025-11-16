"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Code, CheckCircle2, XCircle } from "lucide-react"

export default function Slide04F2DeveloperRole() {
  const capabilities = [
    "Agentic AI architecture (LangChain, LlamaIndex, CrewAI)",
    "LLM integration (OpenAI, Anthropic, local models)",
    "Context engineering and prompt optimization",
    "System integration (APIs, databases, tools)",
    "Rapid prototyping and iteration",
    "Production deployment and monitoring"
  ]

  const misconceptions = [
    {
      wrong: "Need AI PhD or ML specialist",
      right: "Need software engineer who can learn agentic patterns"
    },
    {
      wrong: "Must build LLMs from scratch",
      right: "Use existing APIs (OpenAI, Anthropic, etc.)"
    },
    {
      wrong: "Require 5+ years AI experience",
      right: "Strong developer + 3-6 months training"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Technical Role Deep Dive
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            AI Agent <span className="text-primary">Developer</span>
          </h2>
          <p className="text-lg text-foreground/70 animate-slide-in-up delay-400 fill-backwards">
            What they actually need to know
          </p>
        </div>

        {/* Icon */}
        <div className="flex justify-center animate-fade-in delay-500 fill-backwards">
          <div className="p-6 rounded-2xl bg-cyan-500/10">
            <Code className="w-16 h-16 text-cyan-500" />
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-4 animate-fade-in delay-600 fill-backwards">
          <h3 className="text-2xl font-display text-center">Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((capability, idx) => (
              <Card key={idx} className="border-border/50">
                <CardContent className="pt-4 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">{capability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Misconceptions */}
        <div className="space-y-4 animate-fade-in delay-800 fill-backwards">
          <h3 className="text-2xl font-display text-center">Common Misconceptions</h3>
          <div className="space-y-3">
            {misconceptions.map((item, idx) => (
              <Card key={idx} className="border-border/50">
                <CardContent className="pt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-500/80 font-medium">{item.wrong}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-500/80 font-medium">{item.right}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Reality Check:</span> Most organizations can train existing strong software engineers to become AI Agent Developers in 3-6 months. You don't need to hire PhDs.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
