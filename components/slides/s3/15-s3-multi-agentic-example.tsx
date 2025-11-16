"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Mic, Brain, FileText } from "lucide-react"

export default function Slide15S3MultiAgenticExample() {
  const [activeSubprocess, setActiveSubprocess] = useState<number | null>(null)

  const subprocesses = [
    {
      id: 1,
      name: "Transcription & Extraction",
      icon: Mic,
      purpose: "Convert audio to text",
      tools: ["Speech-to-Text API (Whisper, Deepgram)", "Audio Storage"],
      workflow: ["Retrieve recording", "Transcribe", "Identify speakers", "Clean transcript"],
      context: "Company glossary, speaker patterns",
      output: "Clean transcript with timestamps",
      color: "border-blue-500/40"
    },
    {
      id: 2,
      name: "Criteria Evaluation",
      icon: Brain,
      purpose: "Analyze conversation against sales methodology",
      tools: ["None - Pure AI reasoning"],
      workflow: ["Load framework", "Analyze for each criterion", "Find evidence", "Score", "Identify patterns"],
      context: "Sales methodology, 12 scoring rubrics, annotated call examples",
      output: "Scores (1-5) for 12 criteria + evidence quotes",
      color: "border-primary/40 bg-primary/5"
    },
    {
      id: 3,
      name: "Report Generation",
      icon: FileText,
      purpose: "Create actionable feedback report",
      tools: ["Report template", "CRM Integration", "Communication platform (Slack)"],
      workflow: ["Format findings", "Prioritize improvements", "Generate actions", "Log to CRM", "Deliver"],
      context: "Report template, action item library, notification rules",
      output: "Formatted report + CRM record + Notifications",
      color: "border-green-500/40"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="gradient">Multi-Agentic Example</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            Sales Call <span className="text-primary">Analyzer</span>
          </h2>
          <p className="text-lg text-foreground/70">Click each subprocess to see details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subprocesses.map((subprocess, idx) => {
            const Icon = subprocess.icon
            const isActive = activeSubprocess === subprocess.id

            return (
              <Card
                key={subprocess.id}
                className={`cursor-pointer transition-all duration-300 ${
                  isActive
                    ? `scale-105 ${subprocess.color}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                }`}
                onClick={() => setActiveSubprocess(isActive ? null : subprocess.id)}
              >
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-muted/20 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Step {subprocess.id}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-syne font-semibold">{subprocess.name}</h3>
                  <p className="text-xs text-foreground/60">{subprocess.purpose}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {activeSubprocess !== null && (
          <Card className="border-primary/40 bg-primary/5 animate-fade-in">
            <CardContent className="pt-6 space-y-4">
              {(() => {
                const subprocess = subprocesses.find(s => s.id === activeSubprocess)!
                const Icon = subprocess.icon

                return (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-syne font-semibold text-primary">
                        {subprocess.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold mb-2">Tools:</p>
                        <ul className="text-xs text-foreground/70 space-y-1">
                          {subprocess.tools.map((tool, i) => (
                            <li key={i}>• {tool}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold mb-2">Workflow:</p>
                        <ul className="text-xs text-foreground/70 space-y-1">
                          {subprocess.workflow.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold mb-2">Context Needed:</p>
                        <p className="text-xs text-foreground/70">{subprocess.context}</p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold mb-2">Output:</p>
                        <p className="text-xs text-foreground/70">{subprocess.output}</p>
                      </div>
                    </div>
                  </>
                )
              })()}
            </CardContent>
          </Card>
        )}

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Why This Breakdown:</span> Each phase requires different tools and context. Transcription needs audio processing, evaluation needs sales expertise, reporting needs CRM integration. Breaking them apart allows independent improvement.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
