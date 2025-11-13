"use client"

import { CheckCircle2, Zap, Users, AlertCircle, TrendingUp, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

export function Slide07KeyPrinciples() {
  const principles = [
    {
      number: 1,
      icon: Zap,
      title: "Execution Quality > Use Case Selection",
      description: "The same technology produces 18x different outcomes based on how it's implemented",
      featured: true, // Make this one larger
    },
    {
      number: 2,
      icon: Users,
      title: "Most Companies Are Still Experimenting",
      description: "Real transformation is concentrated in the top 5%—you have time to do it right",
      featured: false,
    },
    {
      number: 3,
      icon: AlertCircle,
      title: "Poor Implementation Creates Compounding Debt",
      description: "Bad habits, wrong tools, and organizational resistance are harder to fix than starting correctly",
      featured: false,
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Systematic Approach Beats Speed",
      description: "Strategic framework + clear roles + continuous learning = sustainable ROI",
      featured: true, // Make this one larger
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh">
      {/* Atmospheric Background */}
      <GeometricPattern type="dots" opacity={0.04} />
      <GrainOverlay opacity={0.12} />

      {/* Decorative glow effects */}
      <div className="absolute top-32 right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-7xl w-full space-y-10 lg:space-y-12">
        {/* Title Section */}
        <div className="text-center space-y-6 animate-fade-in">
          <Badge variant="gradient" className="text-base md:text-lg px-6 py-2">
            Module 01 Key Takeaways
          </Badge>

          <div className="space-y-4">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none">
              Foundation for
            </h2>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-2xl animate-glow-pulse" />
              <h2 className="relative font-display text-5xl md:text-6xl lg:text-8xl leading-none text-primary">
                Successful AI Transformation
              </h2>
            </div>
          </div>
        </div>

        {/* Asymmetric Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, idx) => {
            const Icon = principle.icon
            const isFeatured = principle.featured

            return (
              <Card
                key={principle.number}
                variant={isFeatured ? "glow" : "layered"}
                className={`
                  ${isFeatured ? "lg:row-span-1 border-primary/60" : "border-accent-cyan/40"}
                  bg-white/80 shadow-lg backdrop-blur-sm
                  hover-lift hover-glow
                  relative overflow-hidden
                  animate-fade-in
                  group
                `}
                style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
              >
                {/* Glow effect - stronger for featured items */}
                <div className={`absolute inset-0 ${isFeatured ? "bg-gradient-orange opacity-5" : "bg-accent-cyan/5"} blur-2xl`} />

                <CardContent className={`${isFeatured ? "p-8 md:p-10" : "p-6 md:p-8"} relative space-y-4`}>
                  {/* Header with number badge and icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Animated number badge */}
                      <div
                        className={`
                          flex items-center justify-center
                          ${isFeatured ? "w-16 h-16 text-2xl" : "w-12 h-12 text-xl"}
                          rounded-full
                          ${isFeatured ? "bg-gradient-orange" : "bg-accent-cyan"}
                          font-display font-bold
                          shrink-0
                          group-hover:scale-110 transition-transform duration-300
                        `}
                      >
                        {principle.number}
                      </div>

                      {/* Animated icon */}
                      <div className="relative shrink-0">
                        <div className={`absolute inset-0 ${isFeatured ? "bg-primary/40" : "bg-accent-cyan/40"} blur-lg group-hover:animate-glow-pulse`} />
                        <Icon
                          className={`
                            relative
                            ${isFeatured ? "h-10 w-10" : "h-8 w-8"}
                            ${isFeatured ? "text-primary" : "text-accent-cyan"}
                            group-hover:rotate-12 transition-transform duration-300
                          `}
                        />
                      </div>
                    </div>

                    {/* Check icon - animates on hover */}
                    <CheckCircle2
                      className={`
                        ${isFeatured ? "h-8 w-8" : "h-6 w-6"}
                        shrink-0
                        ${isFeatured ? "text-primary" : "text-accent-cyan"}
                        opacity-60 group-hover:opacity-100
                        group-hover:scale-125
                        transition-all duration-300
                      `}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className={`font-emphasis ${isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} font-bold leading-tight`}>
                      {principle.title}
                    </h3>
                    <p className={`${isFeatured ? "text-lg md:text-xl" : "text-base md:text-lg"} text-foreground-muted leading-relaxed`}>
                      {principle.description}
                    </p>
                  </div>

                  {/* Hover indicator line */}
                  <div className="pt-4">
                    <div className={`h-px w-0 ${isFeatured ? "bg-primary" : "bg-accent-cyan"} group-hover:w-full transition-all duration-500`} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Concluding Statement with CTA style */}
        <div
          className="text-center pt-6 lg:pt-10 max-w-5xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Card variant="brutal" className="border-primary/60 bg-white/90 shadow-lg backdrop-blur-sm">
            <CardContent className="p-8 md:p-10 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-orange opacity-5 blur-2xl animate-glow-pulse" />

              <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <ArrowRight className="h-10 w-10 text-primary hidden md:block" />
                <p className="font-emphasis text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  Now let's build the framework to make this happen in your organization
                </p>
                <ArrowRight className="h-10 w-10 text-primary hidden md:block" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
