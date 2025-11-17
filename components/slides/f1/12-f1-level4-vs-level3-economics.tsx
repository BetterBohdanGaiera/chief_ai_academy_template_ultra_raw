"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { AlertTriangle, TrendingUp, X, CheckCircle2 } from "lucide-react"

export default function F1Level4VsLevel3Economics() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Geometric Pattern */}
      <GeometricPattern type="diagonal" opacity={0.03} color="#FF4D00" spacing={40} />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.12} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-8 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="transform -rotate-1">
            Economic Comparison
          </Badge>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in delay-200 fill-backwards">
            THE REAL <span className="text-primary">ECONOMICS</span>
          </h2>
          <p className="font-syne font-bold text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Level 3 vs Level 4 - Side by Side
          </p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT CARD: Level 3 Reality - WARNING */}
          <div className="animate-fade-in delay-600 fill-backwards">
            {/* Badge Number */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-warning/20 border-2 border-warning flex items-center justify-center">
                <span className="font-bebas text-2xl text-warning">1</span>
              </div>
            </div>

            <Card className="border-warning/40 bg-gradient-to-br from-warning/10 via-warning/5 to-transparent relative overflow-hidden min-h-[500px] flex flex-col">
              {/* Warning Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-warning/15 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="pt-6 space-y-6 relative z-10 flex-1 flex flex-col">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-warning/20">
                      <AlertTriangle className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="font-bebas text-3xl text-warning">
                      LEVEL 3 REALITY
                    </h3>
                  </div>
                  <p className="font-manrope text-sm text-foreground/70 italic">
                    No-code automation with external vendors
                  </p>
                </div>

                {/* Costs */}
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <p className="font-manrope text-xs uppercase tracking-wide text-foreground/60">
                      Annual Cost
                    </p>
                    <p className="font-manrope text-3xl font-bold text-foreground">
                      $35K/year
                    </p>
                    <div className="font-manrope text-xs text-foreground/60 space-y-1 pl-4">
                      <p>• Licenses: $12K</p>
                      <p>• Integration: $8K</p>
                      <p>• Maintenance: $15K</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-manrope text-xs uppercase tracking-wide text-foreground/60">
                      Value Delivered
                    </p>
                    <p className="font-manrope text-3xl font-bold text-foreground">
                      $5K/year
                    </p>
                    <p className="font-manrope text-xs text-foreground/60 pl-4">
                      Low adoption due to poor quality
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-warning/20 pt-4" />

                  {/* Net Result */}
                  <div className="space-y-3">
                    <p className="font-manrope text-xs uppercase tracking-wide text-foreground/60">
                      Net Result
                    </p>
                    <div className="flex items-center gap-3">
                      <X className="w-8 h-8 text-destructive shrink-0" />
                      <p className="font-manrope text-4xl font-bold text-destructive">
                        -$30K/year
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Impact */}
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mt-auto">
                  <p className="font-manrope text-sm text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-destructive">Plus:</span> 12-18 months of organizational AI resistance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT CARD: Level 4 Investment - SUCCESS */}
          <div className="animate-fade-in delay-800 fill-backwards">
            {/* Badge Number */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="font-bebas text-2xl text-primary">2</span>
              </div>
            </div>

            <Card className="border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden shadow-[0_0_40px_rgba(255,77,0,0.15)] min-h-[500px] flex flex-col">
              {/* Success Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="pt-6 space-y-6 relative z-10 flex-1 flex flex-col">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bebas text-3xl text-primary">
                      LEVEL 4 INVESTMENT
                    </h3>
                  </div>
                  <p className="font-manrope text-sm text-foreground/70 italic">
                    Internal team with rapid iteration
                  </p>
                </div>

                {/* Costs */}
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <p className="font-manrope text-xs uppercase tracking-wide text-foreground/60">
                      First Year Total
                    </p>
                    <p className="font-manrope text-3xl font-bold text-foreground">
                      ~$58K
                    </p>
                    <div className="font-manrope text-xs text-foreground/60 space-y-1 pl-4">
                      <p>• Initial build: $40-50K</p>
                      <p>• Ongoing: $8K/year</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-manrope text-xs uppercase tracking-wide text-foreground/60">
                      Value Delivered
                    </p>
                    <p className="font-manrope text-3xl font-bold text-foreground">
                      $150-300K/year
                    </p>
                    <div className="font-manrope text-xs text-foreground/60 space-y-1 pl-4">
                      <p>• Time savings: $80-150K</p>
                      <p>• Consistency: $20-50K</p>
                      <p>• Scalability: $50-100K</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-primary/20 pt-4" />

                  {/* Net Result */}
                  <div className="space-y-3">
                    <p className="font-manrope text-xs uppercase tracking-wide text-foreground/60">
                      Net Result
                    </p>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                      <p className="font-manrope text-4xl font-bold text-primary">
                        +$100-250K/year
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Impact */}
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-auto">
                  <p className="font-manrope text-sm text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-primary">Payback Period:</span> 1-2 months, then pure profit
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <p className="font-manrope text-base md:text-lg text-center text-foreground/90 leading-relaxed">
              <span className="font-semibold text-primary">The difference?</span> Level 4's internal team can iterate in <span className="font-bold text-primary">minutes</span> (free), while Level 3 takes <span className="font-bold text-warning">weeks</span> (expensive). This makes 95%+ accuracy achievable at L4 but impossible at L3.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
