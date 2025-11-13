"use client"

import { XCircle, CheckCircle2, ArrowRight, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

export function Slide04ExecutionComparison() {
  const examples = [
    {
      name: "Support Chatbot",
      poor: {
        adoption: "5-10%",
        issue: "Generic responses, no context",
      },
      excellent: {
        adoption: "90-95%",
        approach: "Deep integration, learns from tickets",
      },
    },
    {
      name: "Code Assistant",
      poor: {
        adoption: "10-15%",
        issue: "Basic autocomplete, ignored by team",
      },
      excellent: {
        adoption: "80-95%",
        approach: "Codebase-aware, enforces standards",
      },
    },
    {
      name: "Document Automation",
      poor: {
        adoption: "5%",
        issue: "Manual upload, clunky workflow",
      },
      excellent: {
        adoption: "95%",
        approach: "Seamless integration, automated",
      },
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh">
      {/* AI-Generated Image Layer - Diverging Outcomes Metaphor */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763064246541-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20 select-none pointer-events-none"
          priority={false}
          quality={85}
          aria-hidden="true"
        />
      </div>

      {/* Atmospheric Background */}
      <GeometricPattern type="dots" opacity={0.04} />
      <GrainOverlay opacity={0.1} />

      {/* Divider Line - Visual separator between poor and excellent */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-foreground-muted/20 to-transparent hidden md:block" />

      <div className="relative max-w-7xl w-full space-y-10 lg:space-y-12">
        {/* Title Section */}
        <div className="text-center space-y-6 animate-fade-in">
          <Badge variant="glow" className="rotate-[-1deg]">
            REAL-WORLD PROOF
          </Badge>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl leading-none">
            Same Use Case,
            <span className="block mt-3">
              <span className="text-destructive/80">Different</span>{" "}
              <span className="text-primary">Outcomes</span>
            </span>
          </h2>
          <p className="font-emphasis text-2xl md:text-3xl text-accent-cyan">
            Execution quality determines ROI
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-4 lg:space-y-6">
          {examples.map((example, idx) => (
            <div
              key={example.name}
              className="relative animate-fade-in"
              style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Poor Execution - Desaturated */}
                <Card
                  variant="brutal"
                  className="border-foreground-muted/30 bg-white/40 shadow-md backdrop-blur-sm hover-lift relative overflow-hidden"
                >
                  {/* Subtle destructive tint */}
                  <div className="absolute inset-0 bg-destructive/5" />

                  <CardContent className="p-6 md:p-8 relative space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-emphasis text-xl md:text-2xl font-bold text-foreground-muted">
                        {example.name}
                      </h3>
                      <XCircle className="h-8 w-8 shrink-0 text-foreground-muted/60" />
                    </div>

                    <Badge variant="outline" className="border-foreground-muted/40 text-foreground-muted">
                      Poor Execution
                    </Badge>

                    <div className="flex items-end gap-3">
                      <TrendingDown className="h-6 w-6 text-destructive/70" />
                      <p className="font-display text-4xl md:text-5xl font-bold text-foreground-muted/80">
                        {example.poor.adoption}
                      </p>
                    </div>

                    <p className="text-base md:text-lg text-foreground-muted/70 leading-relaxed">
                      {example.poor.issue}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow Indicator - Hidden on mobile */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-xl animate-glow-pulse" />
                    <ArrowRight className="relative h-10 w-10 text-primary" />
                  </div>
                </div>

                {/* Excellent Execution - Vibrant */}
                <Card
                  variant="glow"
                  className="border-primary/60 bg-white/80 shadow-lg backdrop-blur-sm hover-lift relative overflow-hidden"
                >
                  {/* Primary glow effect */}
                  <div className="absolute inset-0 bg-gradient-orange opacity-5 blur-2xl" />

                  <CardContent className="p-6 md:p-8 relative space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-emphasis text-xl md:text-2xl font-bold">
                        {example.name}
                      </h3>
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/40 blur-lg animate-glow-pulse" />
                        <CheckCircle2 className="relative h-8 w-8 shrink-0 text-primary" />
                      </div>
                    </div>

                    <Badge variant="gradient" className="text-base">
                      Excellent Execution
                    </Badge>

                    <div className="flex items-end gap-3">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <p className="font-display text-4xl md:text-5xl font-bold text-primary">
                        {example.excellent.adoption}
                      </p>
                    </div>

                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      {example.excellent.approach}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div
          className="text-center pt-6 lg:pt-10 max-w-5xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <div className="relative space-y-3">
              <p className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                <span className="text-primary">18x</span>
                <span className="text-foreground-muted mx-3">→</span>
                <span className="text-foreground">difference</span>
              </p>
              <p className="font-emphasis text-xl md:text-2xl text-foreground-muted">
                Same technology, different execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
