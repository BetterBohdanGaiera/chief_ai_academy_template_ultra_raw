"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Slide12S3Context5Steps() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      number: 1,
      title: "Process Mapping",
      description: "Document current workflow, identify pain points",
      details: "Map out step-by-step what happens today. Identify bottlenecks, time sinks, and quality issues."
    },
    {
      number: 2,
      title: "Data Identification",
      description: "List facts, guidelines, and examples needed",
      details: "Facts: Authoritative data | Guidelines: Business rules | Examples: Good/bad outcomes"
    },
    {
      number: 3,
      title: "Source Mapping",
      description: "Identify where information lives (systems, docs, people)",
      details: "Systems: APIs, databases | Documents: Handbooks, playbooks | People: Tacit knowledge from experts"
    },
    {
      number: 4,
      title: "Structure Definition",
      description: "Create rubrics, examples, templates, formats",
      details: "Rubrics: Scoring criteria | Examples: Annotated good/bad | Templates: Consistent output formats"
    },
    {
      number: 5,
      title: "Validation",
      description: "Test outputs, measure accuracy, iterate",
      details: "Start with 100% review → Calibration → Sampling → Exception-only review as trust builds"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763327589603-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-8 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="glow">Context Engineering Methodology</Badge>
          <h2 className="text-4xl md:text-6xl font-bebas">
            The <span className="text-primary">5-Step Framework</span>
          </h2>
          <p className="text-lg text-foreground/70">Click each step to explore details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className={`cursor-pointer transition-all duration-300 ${
                activeStep === idx
                  ? "scale-105 border-primary shadow-[0_0_30px_rgba(255,77,0,0.3)]"
                  : "border-border hover:scale-102 hover:border-primary/50"
              }`}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
            >
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bebas text-primary">{step.number}</span>
                </div>
                <h3 className="text-sm font-syne font-semibold text-center">{step.title}</h3>
                <p className="text-xs text-foreground/60 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {activeStep !== null && (
          <Card className="border-primary/40 bg-primary/5 animate-fade-in">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bebas text-primary">{steps[activeStep].number}</span>
                </div>
                <h3 className="text-xl font-syne font-semibold text-primary">
                  Step {steps[activeStep].number}: {steps[activeStep].title}
                </h3>
              </div>
              <p className="text-sm text-foreground/90 ml-13">
                {steps[activeStep].details}
              </p>
            </CardContent>
          </Card>
        )}

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Remember:</span> These 5 steps are iterative. You'll loop through them 20+ times over 2-3 weeks, refining each time based on test results.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
