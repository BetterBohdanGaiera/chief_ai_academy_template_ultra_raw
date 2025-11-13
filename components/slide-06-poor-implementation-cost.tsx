"use client"

import { AlertTriangle, XCircle, TrendingDown, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

export function Slide06PoorImplementationCost() {
  const costs = [
    {
      icon: AlertTriangle,
      title: "Bad Habits Embedded",
      description: "Teams learn wrong patterns, creating long-term inefficiencies that are hard to unlearn",
      severity: "CRITICAL",
    },
    {
      icon: XCircle,
      title: "Wrong Tools Locked In",
      description: "Poor initial choices create switching costs and integration complexity",
      severity: "HIGH",
    },
    {
      icon: TrendingDown,
      title: "Organizational Resistance",
      description: "Failed attempts breed skepticism, making future initiatives harder to launch",
      severity: "SEVERE",
    },
    {
      icon: Clock,
      title: "Capability Debt Accumulates",
      description: "Gap between your team's skills and AI capabilities widens while competitors advance",
      severity: "GROWING",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-mesh-dark">
      {/* Atmospheric Background - Heavier grain for impact */}
      <GeometricPattern type="diagonal" opacity={0.04} />
      <GrainOverlay opacity={0.2} />

      {/* Warning glow effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-destructive/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-warning/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="relative max-w-7xl w-full space-y-10 lg:space-y-12">
        {/* Title Section with dramatic impact */}
        <div className="text-center space-y-6 animate-fade-in">
          <Badge variant="outline" className="border-destructive text-destructive rotate-[-2deg] text-base">
            ⚠️ WARNING
          </Badge>

          <div className="space-y-4">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none">
              The True Cost of
            </h2>

            <div className="relative inline-block">
              <div className="absolute inset-0 bg-destructive/30 blur-3xl animate-glow-pulse" />
              <h2 className="relative font-display text-6xl md:text-7xl lg:text-9xl leading-none text-destructive">
                Poor Implementation
              </h2>
            </div>
          </div>

          <p className="font-emphasis text-2xl md:text-3xl text-warning">
            Why rushing without a system backfires
          </p>
        </div>

        {/* Dramatic Cost Statistic */}
        <div
          className="text-center py-8 animate-scale-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Card variant="brutal" className="border-destructive/60 bg-background-dark/90 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12 relative overflow-hidden">
              {/* Pulsing glow */}
              <div className="absolute inset-0 bg-destructive/5 blur-2xl animate-glow-pulse" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <DollarSign className="h-12 w-12 text-destructive animate-glow-pulse" />
                  <p className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-destructive animate-glow-pulse">
                    4x
                  </p>
                </div>
                <p className="font-emphasis text-xl md:text-2xl text-foreground-muted">
                  Cost to fix vs. doing it right initially
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cost Grid - Asymmetric for visual interest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {costs.map((cost, idx) => {
            const Icon = cost.icon
            return (
              <Card
                key={cost.title}
                variant="layered"
                className="border-warning/50 bg-background-dark/80 backdrop-blur-sm hover-lift relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                {/* Warning tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-destructive/5" />

                <CardContent className="p-6 md:p-8 relative space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-warning/30 blur-lg" />
                        <Icon className="relative h-10 w-10 text-warning" />
                      </div>

                      <div className="space-y-3 flex-1">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-display text-2xl md:text-3xl font-bold text-warning">
                              {idx + 1}
                            </span>
                            <div className="h-px flex-1 bg-warning/30" />
                          </div>
                          <h3 className="font-emphasis text-xl md:text-2xl font-bold leading-tight">
                            {cost.title}
                          </h3>
                        </div>

                        <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
                          {cost.description}
                        </p>
                      </div>
                    </div>

                    <Badge
                      variant="outline"
                      className="border-destructive/40 text-destructive text-xs uppercase shrink-0"
                    >
                      {cost.severity}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight - High impact conclusion */}
        <div
          className="text-center pt-6 lg:pt-10 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <Card variant="brutal" className="border-destructive/60 bg-background-dark/95 backdrop-blur-sm max-w-5xl mx-auto">
            <CardContent className="p-8 md:p-12 relative overflow-hidden">
              {/* Heavy grain for gravity */}
              <div className="absolute inset-0 opacity-30">
                <GrainOverlay opacity={0.5} />
              </div>

              {/* Pulsing warning glow */}
              <div className="absolute inset-0 bg-destructive/5 blur-2xl animate-glow-pulse" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-destructive animate-glow-pulse" />
                  <p className="font-emphasis text-sm uppercase tracking-wider text-destructive">
                    Critical Warning
                  </p>
                  <AlertTriangle className="h-8 w-8 text-destructive animate-glow-pulse" />
                </div>

                <p className="font-emphasis text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Poor execution doesn't just <span className="text-warning">waste money</span>—
                  <span className="block mt-3 text-destructive">
                    it creates compounding organizational debt
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
