"use client"

import { AlertTriangle, TrendingUp, GitBranch, X, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

export function Slide05ImplementationPaths() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh">
      {/* AI-Generated Image Layer - Forking Paths Metaphor */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763055551782-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25 select-none pointer-events-none"
          priority={false}
          quality={85}
          aria-hidden="true"
        />
      </div>

      {/* Atmospheric Background */}
      <GeometricPattern type="grid" opacity={0.03} />
      <GrainOverlay opacity={0.12} />

      {/* Decorative branching lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M 200 50 L 200 200 M 200 200 L 100 350 M 200 200 L 300 350"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl w-full space-y-10 lg:space-y-12">
        {/* Title Section */}
        <div className="text-center space-y-6 animate-fade-in">
          <Badge variant="glow" className="rotate-[-2deg]">
            CRITICAL DECISION POINT
          </Badge>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl leading-none">
            The Real Risk
            <span className="block text-foreground-muted/60 mt-2">Isn't Delay—</span>
          </h2>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-destructive/30 blur-2xl animate-glow-pulse" />
            <h2 className="relative font-display text-5xl md:text-6xl lg:text-8xl leading-none text-destructive">
              Doing It Wrong
            </h2>
          </div>
          <p className="font-emphasis text-2xl md:text-3xl text-accent-cyan">
            Two diverging paths to AI transformation
          </p>
        </div>

        {/* Fork Visualization - Non-linear branching layout */}
        <div className="relative">
          {/* Central Fork Point */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl animate-glow-pulse" />
              <div className="relative bg-white shadow-lg border-2 border-primary rounded-full p-4">
                <GitBranch className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>

          {/* Branching Lines - Visual flow indicators */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            {/* Left branch - Chaotic */}
            <svg className="absolute top-16 left-0 w-1/2 h-64" viewBox="0 0 400 200">
              <path
                d="M 400 0 Q 300 50 200 200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-destructive/30 animate-draw-line"
                strokeDasharray="600"
                strokeDashoffset="600"
                style={{
                  animation: "draw-line 1s ease-out 0.5s forwards",
                }}
              />
            </svg>
            {/* Right branch - Systematic */}
            <svg className="absolute top-16 right-0 w-1/2 h-64" viewBox="0 0 400 200">
              <path
                d="M 0 0 Q 100 50 200 200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary/30 animate-draw-line"
                strokeDasharray="600"
                strokeDashoffset="600"
                style={{
                  animation: "draw-line 1s ease-out 0.7s forwards",
                }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-24">
            {/* Chaotic Path - Left */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.5s" }}>
              <Card
                variant="brutal"
                className="border-destructive/60 bg-white/80 shadow-lg backdrop-blur-sm hover-lift relative overflow-hidden"
              >
                {/* Destructive glow */}
                <div className="absolute inset-0 bg-destructive/5 blur-xl" />

                <CardContent className="p-8 md:p-10 relative space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <AlertTriangle className="h-12 w-12 shrink-0 text-destructive" />
                      <h3 className="font-emphasis text-3xl md:text-4xl font-bold text-destructive">
                        Chaotic
                      </h3>
                    </div>
                    <Badge variant="outline" className="border-destructive text-destructive">
                      ⚠️ HIGH RISK
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Ad-hoc tool adoption without integration",
                      "No clear ownership or accountability",
                      "Training viewed as one-time event",
                      "Metrics ignored or undefined",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group"
                        style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                      >
                        <X className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                        <span className="text-base md:text-lg text-foreground-muted leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-destructive/20">
                    <p className="text-sm font-emphasis uppercase tracking-wider text-destructive mb-2">
                      Result
                    </p>
                    <p className="text-xl md:text-2xl font-bold leading-tight">
                      <span className="text-destructive">Organizational resistance</span>
                      <span className="text-foreground-muted"> & </span>
                      <span className="text-destructive">capability debt</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Systematic Path - Right */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.7s" }}>
              <Card
                variant="glow"
                className="border-primary/60 bg-white/80 shadow-lg backdrop-blur-sm hover-lift relative overflow-hidden"
              >
                {/* Primary glow */}
                <div className="absolute inset-0 bg-gradient-orange opacity-5 blur-2xl" />

                <CardContent className="p-8 md:p-10 relative space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/40 blur-lg animate-glow-pulse" />
                        <TrendingUp className="relative h-12 w-12 shrink-0 text-primary" />
                      </div>
                      <h3 className="font-emphasis text-3xl md:text-4xl font-bold text-primary">
                        Systematic
                      </h3>
                    </div>
                    <Badge variant="gradient">
                      ✓ PROVEN
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Strategic framework with clear roles",
                      "Integrated tools with proper workflows",
                      "Continuous learning culture",
                      "Data-driven optimization & iteration",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group"
                        style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                      >
                        <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span className="text-base md:text-lg text-foreground leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-primary/20">
                    <p className="text-sm font-emphasis uppercase tracking-wider text-primary mb-2">
                      Result
                    </p>
                    <p className="text-xl md:text-2xl font-bold leading-tight">
                      <span className="text-primary">Sustainable transformation</span>
                      <span className="text-foreground-muted"> & </span>
                      <span className="text-primary">measurable ROI</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div
          className="text-center pt-6 lg:pt-10 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <Card variant="glass" className="border-foreground-muted/20 bg-white/30 shadow-md backdrop-blur-md">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-primary shrink-0" />
                <div className="space-y-2">
                  <p className="font-emphasis text-sm uppercase tracking-wider text-primary">
                    Critical Warning
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground">
                    Moving fast <span className="text-destructive font-bold">without a system</span> creates technical and organizational debt that <span className="text-primary font-bold">compounds over time</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}
