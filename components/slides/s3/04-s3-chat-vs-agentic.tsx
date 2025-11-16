"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { MessageSquare, Cpu, Check, X } from "lucide-react"

export default function Slide04S3ChatVsAgentic() {
  const comparisons = [
    {
      dimension: "Interaction Model",
      chat: { value: "Reactive - waits for each prompt", good: false },
      agentic: { value: "Autonomous - works toward goals", good: true }
    },
    {
      dimension: "File Operations",
      chat: { value: "Suggests code - you copy/paste", good: false },
      agentic: { value: "Directly creates, modifies, deletes files", good: true }
    },
    {
      dimension: "Context Window",
      chat: { value: "Limited to conversation", good: false },
      agentic: { value: "200,000 tokens (entire projects)", good: true }
    },
    {
      dimension: "Memory",
      chat: { value: "Forgets when session ends", good: false },
      agentic: { value: "Persistent project awareness", good: true }
    },
    {
      dimension: "System Integration",
      chat: { value: "None - isolated responses", good: false },
      agentic: { value: "Connects to git, APIs, terminal, docs", good: true }
    },
    {
      dimension: "Initiative",
      chat: { value: "Answers questions", good: false },
      agentic: { value: "Plans multi-step workflows", good: true }
    },
    {
      dimension: "Error Handling",
      chat: { value: "Tells you what's wrong", good: false },
      agentic: { value: "Detects and fixes its own mistakes", good: true }
    },
    {
      dimension: "Learning Curve",
      chat: { value: "Immediate use", good: true },
      agentic: { value: "10-15 hours to proficiency", good: false }
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bebas">
            Chat vs Agentic: <span className="text-primary">The Paradigm Shift</span>
          </h2>
        </div>

        {/* Header Row */}
        <div className="grid grid-cols-3 gap-4 items-end mb-4">
          <div className="text-sm font-semibold text-foreground/60">Dimension</div>
          <div className="text-center">
            <Badge variant="outline" className="mb-2">
              <MessageSquare className="w-4 h-4 mr-1" />
              ChatGPT/Claude Web
            </Badge>
          </div>
          <div className="text-center">
            <Badge variant="gradient" className="mb-2">
              <Cpu className="w-4 h-4 mr-1" />
              Cursor/Claude Code
            </Badge>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-2">
          {comparisons.map((comp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-4 items-center animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="text-sm font-semibold">{comp.dimension}</div>
              <Card className={comp.chat.good ? "border-green-500/20" : "border-border"}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-center gap-2 text-sm">
                    {comp.chat.good ? (
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    )}
                    <span className="text-foreground/80">{comp.chat.value}</span>
                  </div>
                </CardContent>
              </Card>
              <Card className={comp.agentic.good ? "border-primary/40 bg-primary/5" : "border-border"}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-center gap-2 text-sm">
                    {comp.agentic.good ? (
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    )}
                    <span className="text-foreground/90 font-medium">{comp.agentic.value}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Pattern:</span> Any work involving multiple files, context management, or structured workflows benefits from Level 3.5 agentic tools.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
