"use client"

import { Target, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

export function Slide03ExecutionConcept() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh">
      {/* AI-Generated Image Layer - Execution Quality Metaphor */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763055579750-1.png"
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
      <GeometricPattern type="diagonal" opacity={0.05} />
      <GrainOverlay opacity={0.12} />

      {/* Decorative Elements */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 right-32 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-7xl w-full">
        {/* 60/40 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Side - Dominant Visual (60%) */}
          <div className="lg:col-span-3 space-y-8 animate-slide-in-left">
            {/* Title Section */}
            <div className="space-y-6">
              <Badge variant="cyan" className="rotate-[-1deg]">
                THE REAL DIFFERENTIATOR
              </Badge>

              <h2 className="font-display text-5xl md:text-6xl lg:text-8xl leading-none">
                It's Not the
                <span className="block text-foreground-muted/60 mt-2">Use Case—</span>
              </h2>

              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/30 blur-2xl animate-glow-pulse" />
                <h2 className="relative font-display text-6xl md:text-7xl lg:text-9xl leading-none text-primary">
                  Execution
                </h2>
              </div>
            </div>

            {/* Core Principle Card */}
            <Card
              variant="glow"
              className="border-primary/60 bg-white/80 backdrop-blur-sm cursor-pointer hover-lift shadow-lg"
              onClick={() => setRevealed(!revealed)}
            >
              <CardContent className="p-8 md:p-10 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-orange opacity-5 blur-2xl" />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/40 blur-xl animate-glow-pulse" />
                      <Target className="relative h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-emphasis text-3xl md:text-4xl font-bold">Core Principle</h3>
                  </div>

                  {/* Mathematical Formula */}
                  <div className="font-mono text-2xl md:text-4xl font-bold text-center py-6">
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                      <span className="text-primary">Implementation Quality</span>
                    </div>
                    <div className="text-5xl md:text-6xl text-primary my-2">&gt;</div>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                      <span className="text-foreground-muted">Use Case Selection</span>
                    </div>
                  </div>

                  <p className="text-center text-base md:text-lg text-accent-cyan font-emphasis">
                    {revealed ? "↓ See why below" : "→ Click to reveal why"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Supporting Content (40%) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Explanation Card - Revealed State */}
            <div
              className={`transition-all duration-700 ease-out ${
                revealed
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
              }`}
            >
              <Card variant="brutal" className="border-accent-cyan/40 bg-white/90 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8 text-accent-cyan" />
                    <h3 className="font-emphasis text-2xl md:text-3xl font-bold">Why This Matters</h3>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group">
                      <Badge variant="gradient" className="shrink-0 mt-1">1</Badge>
                      <p className="text-base md:text-lg leading-relaxed">
                        Same use case: <span className="text-primary font-bold">5% vs 95%</span> adoption based on <span className="text-primary font-bold">execution</span>
                      </p>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <Badge variant="outline" className="shrink-0 mt-1 border-warning text-warning">2</Badge>
                      <p className="text-base md:text-lg leading-relaxed">
                        Poor execution = <span className="text-warning">organizational resistance</span> + wasted investment
                      </p>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <Badge variant="gradient" className="shrink-0 mt-1">3</Badge>
                      <p className="text-base md:text-lg leading-relaxed">
                        Excellent execution = <span className="text-primary">sustainable transformation</span> + measurable ROI
                      </p>
                    </li>
                  </ul>

                  {/* Visual Indicator */}
                  <div className="pt-4 border-t border-accent-cyan/20">
                    <div className="flex items-center gap-3 text-accent-cyan">
                      <TrendingUp className="h-5 w-5" />
                      <p className="text-sm font-emphasis">Execution determines outcome</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Static Insight - Always Visible */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Card variant="glass" className="border-foreground-muted/20 bg-white/30 backdrop-blur-md shadow-md">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-primary" />
                    <p className="font-emphasis text-sm md:text-base uppercase tracking-wider text-primary">
                      Key Insight
                    </p>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-foreground-muted">
                    Your competitors aren't failing because they picked the <span className="text-foreground">wrong use cases</span>—they're failing because they're <span className="text-destructive font-bold">executing poorly</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
