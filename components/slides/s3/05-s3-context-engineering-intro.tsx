"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { BookOpen, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function Slide05S3ContextEngineeringIntro() {
  const keyPoints = [
    {
      icon: Target,
      title: "The Core Insight",
      description: "AI agents are only as good as the context you provide them"
    },
    {
      icon: BookOpen,
      title: "Who Does This",
      description: "Agent Managers - process experts who understand workflows deeply"
    },
    {
      icon: Zap,
      title: "The Truth",
      description: "Context engineering IS the work of AI transformation"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763327583136-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="glow" className="animate-slide-in-down">
            Context Engineering
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas animate-fade-in delay-200 fill-backwards">
            TEACHING AI YOUR <span className="text-primary animate-glow-pulse">EXPERTISE</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            The Process Documentation Framework
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <Card
                key={idx}
                className="border-primary/20 animate-fade-in"
                style={{ animationDelay: `${idx * 150 + 600}ms` }}
              >
                <CardContent className="pt-6 space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl inline-block">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-syne font-semibold">{point.title}</h3>
                  <p className="text-sm text-foreground/70">{point.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Definition Card */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 animate-fade-in delay-1100 fill-backwards">
          <CardContent className="pt-6 space-y-4">
            <h3 className="text-2xl font-syne font-semibold text-primary text-center">
              What is Context Engineering?
            </h3>
            <p className="text-center text-foreground/90 max-w-4xl mx-auto">
              Teaching AI your expertise (also called "context engineering") is the process of documenting your domain knowledge so AI can perform work effectively. It's the difference between{" "}
              <span className="font-semibold text-red-500">Level 3 (70% accuracy, abandoned)</span> and{" "}
              <span className="font-semibold text-primary">Level 4 (95%+ reliability, deployed)</span>.
            </p>
          </CardContent>
        </Card>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1200 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Critical Truth:</span> You CANNOT document all domain expertise upfront. This is why fast iteration (1-3 cycles/day) is essential - each cycle reveals tacit knowledge you didn't know you had.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
