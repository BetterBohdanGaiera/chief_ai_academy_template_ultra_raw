"use client"

import { useState } from "react"
import { TrendingUp, Circle, XCircle, Zap, Building, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type PyramidTier = "top" | "middle" | "bottom" | null

export function Slide102LandscapeInteractive() {
  const [activeTier, setActiveTier] = useState<PyramidTier>(null)
  const [isHoveringPyramid, setIsHoveringPyramid] = useState(false)

  const tiers = {
    top: {
      icon: TrendingUp,
      badge: "Top 5%",
      title: "Real Transformation",
      description: "Systematic integration with measurable ROI",
      characteristics: [
        "Systematic integration",
        "Measurable ROI",
        "Cultural adoption",
        "Competitive advantage",
      ],
      color: "primary",
      borderColor: "border-primary/60",
      glowColor: "bg-primary/5",
    },
    middle: {
      icon: Circle,
      badge: "~65%",
      title: "Experimenting",
      description: "Pilot projects with scattered adoption",
      characteristics: [
        "Pilot projects",
        "Scattered adoption",
        "No clear strategy",
        "Limited impact",
      ],
      color: "warning",
      borderColor: "border-warning/50",
      glowColor: "bg-warning/5",
    },
    bottom: {
      icon: XCircle,
      badge: "~30%",
      title: "Stuck or Ignoring",
      description: "No strategy, organizational resistance building",
      characteristics: [
        "No strategy",
        "Organizational resistance",
        "Falling behind",
        "Risk accumulation",
      ],
      color: "destructive",
      borderColor: "border-destructive/60",
      glowColor: "bg-destructive/5",
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh">
      {/* AI-Generated Image Layer */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763064223110-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20 select-none pointer-events-none"
          priority={false}
          quality={85}
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="grid" opacity={0.06} />
      <GrainOverlay opacity={0.15} />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-1 bg-gradient-orange opacity-60 rotate-12" />
      <div className="absolute bottom-32 left-16 w-24 h-1 bg-gradient-cyan opacity-40 -rotate-6" />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center lg:text-left">
          <Badge variant="glow" className="rotate-[-2deg] origin-center">
            <Building className="h-4 w-4 mr-2" />
            INDUSTRY REALITY CHECK
          </Badge>
          <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            The AI Transformation
            <span className="block text-primary mt-2">Landscape</span>
          </h2>
          <p className="font-syne text-2xl md:text-3xl text-muted-foreground">
            Where your competitors stand today
          </p>
        </div>

        {/* Interactive Instruction */}
        <div className="text-center animate-fade-in delay-300 fill-backwards">
          <p className="text-sm text-foreground/50 flex items-center justify-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>Hover over each tier to explore details</span>
          </p>
        </div>

        {/* Interactive Pyramid Visualization */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHoveringPyramid(true)}
          onMouseLeave={() => {
            setIsHoveringPyramid(false)
            setActiveTier(null)
          }}
        >
          {/* Pyramid Tiers */}
          <div className="space-y-4">
            {/* Top Tier */}
            <div
              className="mx-auto animate-slide-in-right delay-300 fill-backwards"
              style={{ maxWidth: "60%" }}
              onMouseEnter={() => setActiveTier("top")}
            >
              <Card
                variant={activeTier === "top" ? "glow" : "layered"}
                className={`${tiers.top.borderColor} bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                  activeTier === "top" ? "scale-105 shadow-glow" : "hover:scale-102"
                }`}
              >
                <CardContent className="p-4 md:p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 ${tiers.top.glowColor} blur-xl`} />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <tiers.top.icon className="h-8 w-8 text-primary shrink-0" />
                      <div>
                        <Badge variant="gradient" className="mb-1">
                          {tiers.top.badge}
                        </Badge>
                        <h3 className="font-syne text-xl md:text-2xl font-bold">
                          {tiers.top.title}
                        </h3>
                      </div>
                    </div>
                    {activeTier === "top" && (
                      <Zap className="h-6 w-6 text-primary animate-pulse" />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle Tier */}
            <div
              className="mx-auto animate-slide-in-up delay-500 fill-backwards"
              style={{ maxWidth: "80%" }}
              onMouseEnter={() => setActiveTier("middle")}
            >
              <Card
                variant={activeTier === "middle" ? "glow" : "layered"}
                className={`${tiers.middle.borderColor} bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                  activeTier === "middle" ? "scale-105 shadow-glow" : "hover:scale-102"
                }`}
              >
                <CardContent className="p-4 md:p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 ${tiers.middle.glowColor} blur-xl`} />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <tiers.middle.icon className="h-8 w-8 text-warning shrink-0" />
                      <div>
                        <Badge variant="outline" className="border-warning text-warning mb-1">
                          {tiers.middle.badge}
                        </Badge>
                        <h3 className="font-syne text-xl md:text-2xl font-bold">
                          {tiers.middle.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Tier */}
            <div
              className="mx-auto animate-slide-in-left delay-700 fill-backwards"
              style={{ maxWidth: "100%" }}
              onMouseEnter={() => setActiveTier("bottom")}
            >
              <Card
                variant={activeTier === "bottom" ? "brutal" : "layered"}
                className={`${tiers.bottom.borderColor} bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                  activeTier === "bottom" ? "scale-105" : "hover:scale-102"
                }`}
              >
                <CardContent className="p-4 md:p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 ${tiers.bottom.glowColor} blur-xl`} />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <tiers.bottom.icon className="h-8 w-8 text-destructive shrink-0" />
                      <div>
                        <Badge variant="outline" className="border-destructive text-destructive mb-1">
                          {tiers.bottom.badge}
                        </Badge>
                        <h3 className="font-syne text-xl md:text-2xl font-bold">
                          {tiers.bottom.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Detail Panel - Shows on hover */}
        {activeTier && (
          <div className="animate-slide-in-up">
            <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
              <CardContent className="p-6 md:p-8">
                <h4 className="font-syne text-2xl font-bold mb-4 text-primary">
                  {tiers[activeTier].description}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tiers[activeTier].characteristics.map((char, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm md:text-base"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Key Insight */}
        <div className="text-center pt-8 lg:pt-12 max-w-4xl mx-auto animate-fade-in delay-900 fill-backwards">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <p className="relative font-syne text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-primary">Real transformation</span> is rare and concentrated—
              <span className="block mt-2 text-foreground-muted">
                most competitors are still figuring it out
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
