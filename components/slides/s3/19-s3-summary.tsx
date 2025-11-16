"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Slide19S3Summary() {
  const keyTakeaways = [
    {
      topic: "The Management Shift",
      points: [
        "Business now includes managing AI alongside people",
        "Success requires: understanding capabilities, clear communication, iteration discipline",
        "Domain experts can manage AI for their domain"
      ]
    },
    {
      topic: "Agentic Development Tools",
      points: [
        "Cursor IDE & Claude Code enable non-technical building",
        "15 hours to learn ONE interface that works with ALL tools",
        "New PATH to Level 4 (not a new level)"
      ]
    },
    {
      topic: "Context Engineering",
      points: [
        "5-step methodology: Process Mapping → Data Identification → Source Mapping → Structure Definition → Validation",
        "You CANNOT document all expertise upfront - iteration reveals tacit knowledge",
        "20 iterations to 95%+ accuracy"
      ]
    },
    {
      topic: "Multi-Agentic Systems",
      points: [
        "Break complex processes into specialized subprocesses",
        "Each phase has distinct: Purpose, Tools, Workflow, Context, Output",
        "Don't over-engineer - complexity should match the problem"
      ]
    },
    {
      topic: "Scope Division",
      points: [
        "Agent Managers alone: File-based work, documentation, simple automations, prototyping",
        "Involve Developer: Deep integration, multi-agentic, production deployment, advanced capabilities",
        "Partnership model enables 1-3 cycles/day to reach reliability"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763327583136-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-8 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="glow">Module Complete</Badge>
          <h1 className="text-5xl md:text-7xl font-bebas">
            S3: Managing AI <span className="text-primary">Summary</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {keyTakeaways.map((takeaway, idx) => (
            <Card
              key={idx}
              className="border-primary/20 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-syne font-semibold text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  {takeaway.topic}
                </h3>

                <ul className="space-y-2 text-sm text-foreground/80">
                  {takeaway.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40">
          <CardContent className="pt-6 text-center space-y-4">
            <h3 className="text-2xl font-syne font-semibold text-primary">Key Insight</h3>
            <p className="text-lg text-foreground/90 max-w-4xl mx-auto">
              Managing AI isn't a technical skill - it's <span className="font-semibold text-primary">process understanding + clear communication + iteration discipline</span>. Domain experts who learn to manage AI are more valuable than AI experts without domain knowledge.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4 space-y-3">
            <h4 className="font-semibold text-center">Next Steps</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div>
                <p className="font-semibold mb-1">For Executives:</p>
                <p className="text-foreground/70">Review F2 (Organization Structure) to plan Agent Manager + Developer teams</p>
              </div>
              <div>
                <p className="font-semibold mb-1">For Agent Managers:</p>
                <p className="text-foreground/70">Begin with Level 3.5 tools. Apply 5-step methodology to your first process</p>
              </div>
              <div>
                <p className="font-semibold mb-1">For Developers:</p>
                <p className="text-foreground/70">Learn rapid iteration environments. Enable Agent Manager autonomy</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
