"use client"

import { TrendingUp, Circle, XCircle, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

export function Slide02LandscapePyramid() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh">
      {/* AI-Generated Image Layer - AI Transformation Landscape */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763063248318-1.png"
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
      <GeometricPattern type="grid" opacity={0.06} />
      <GrainOverlay opacity={0.15} />

      {/* Decorative Accent Line */}
      <div className="absolute top-20 right-10 w-32 h-1 bg-gradient-orange opacity-60 rotate-12" />
      <div className="absolute bottom-32 left-16 w-24 h-1 bg-gradient-cyan opacity-40 -rotate-6" />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="glow" className="rotate-[-2deg] origin-center">
            INDUSTRY REALITY CHECK
          </Badge>
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            The AI Transformation
            <span className="block text-primary mt-2">Landscape</span>
          </h2>
          <p className="font-emphasis text-2xl md:text-3xl text-accent-cyan">
            Where your competitors stand today
          </p>
        </div>

        {/* Diagonal Pyramid Layout - Breaking vertical convention */}
        <div className="relative space-y-0 lg:space-y-0">
          {/* Top Tier - Real Transformation (Top Right) */}
          <div
            className="relative mb-8 lg:mb-12 lg:ml-auto lg:mr-0 max-w-3xl animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <Card variant="glow" className="border-primary/60 bg-white/80 backdrop-blur-sm hover-lift shadow-lg">
              <CardContent className="p-6 md:p-10 relative overflow-hidden">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-orange opacity-5 blur-2xl" />

                <div className="relative flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 blur-xl animate-glow-pulse" />
                      <TrendingUp className="relative h-12 w-12 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <Badge variant="gradient" className="text-lg px-4 py-1.5">
                        Top 5%
                      </Badge>
                      <h3 className="font-emphasis text-3xl md:text-4xl font-bold">
                        Real Transformation
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3 text-base md:text-lg text-foreground-muted">
                      <span className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Systematic integration
                      </span>
                      <span className="text-foreground-muted/50">•</span>
                      <span>Measurable ROI</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span>Cultural adoption</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span className="text-primary font-semibold">Competitive advantage</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Tier - Experimenting (Center) */}
          <div
            className="relative mb-8 lg:mb-12 lg:mx-auto max-w-3xl animate-slide-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Card variant="layered" className="border-warning/50 bg-white/80 backdrop-blur-sm hover-lift shadow-lg">
              <CardContent className="p-6 md:p-10 relative overflow-hidden">
                {/* Warning glow */}
                <div className="absolute inset-0 bg-warning/5 blur-xl" />

                <div className="relative flex items-start gap-6">
                  <div className="shrink-0">
                    <Circle className="h-12 w-12 text-warning" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <Badge variant="outline" className="border-warning text-warning text-lg px-4 py-1.5">
                        ~65%
                      </Badge>
                      <h3 className="font-emphasis text-3xl md:text-4xl font-bold">
                        Experimenting
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3 text-base md:text-lg text-foreground-muted">
                      <span>Pilot projects</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span>Scattered adoption</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span className="text-warning">No clear strategy</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span>Limited impact</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Tier - Stuck (Bottom Left) */}
          <div
            className="relative lg:ml-0 lg:mr-auto max-w-3xl animate-slide-in-left"
            style={{ animationDelay: "0.7s" }}
          >
            <Card variant="brutal" className="border-destructive/60 bg-white/80 backdrop-blur-sm hover-lift shadow-lg">
              <CardContent className="p-6 md:p-10 relative overflow-hidden">
                {/* Destructive glow */}
                <div className="absolute inset-0 bg-destructive/5 blur-xl" />

                <div className="relative flex items-start gap-6">
                  <div className="shrink-0">
                    <XCircle className="h-12 w-12 text-destructive" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <Badge variant="outline" className="border-destructive text-destructive text-lg px-4 py-1.5">
                        ~30%
                      </Badge>
                      <h3 className="font-emphasis text-3xl md:text-4xl font-bold">
                        Stuck or Ignoring
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3 text-base md:text-lg text-foreground-muted">
                      <span className="text-destructive">No strategy</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span>Organizational resistance</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span>Falling behind</span>
                      <span className="text-foreground-muted/50">•</span>
                      <span className="text-destructive font-semibold">Risk accumulation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight - Prominent positioning */}
        <div
          className="text-center pt-8 lg:pt-12 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <p className="relative font-emphasis text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-primary">Real transformation</span> is rare and concentrated—
              <span className="block mt-2 text-foreground-muted">most competitors are still figuring it out</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
