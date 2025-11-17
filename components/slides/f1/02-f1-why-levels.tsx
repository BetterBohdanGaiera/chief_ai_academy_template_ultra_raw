"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { ArrowRight, TrendingUp, AlertTriangle } from "lucide-react"

export default function F1WhyLevelsSlide() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Background layers */}
      <GeometricPattern type="diagonal" opacity={0.08} color="#0A0A0A" />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-8 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-slide-in-down">
          <Badge variant="outline" className="border-primary text-primary">
            Foundation Module 1
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            WHY LEVELS MATTER
          </h2>
          <p className="font-syne font-bold text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto">
            Understanding the difference between linear assumptions and reality
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: The Assumption */}
          <Card className="border-border/50 bg-muted/20 hover:shadow-xl transition-all duration-600 animate-fade-in delay-300 fill-backwards">
            <CardContent className="p-6 lg:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-muted rounded-full p-3">
                  <TrendingUp className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="font-syne font-bold text-2xl md:text-3xl">The Linear Assumption</h3>
              </div>

              <div className="space-y-4 font-manrope text-base md:text-lg">
                <p className="text-foreground/80 leading-relaxed">
                  Most organizations assume AI adoption is a smooth, linear progression:
                </p>

                {/* Visual representation of linear progression */}
                <div className="bg-gradient-to-r from-muted/50 to-muted/80 rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted-foreground/20 flex items-center justify-center text-xs font-bold">1</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-sm text-foreground/70">Start with ChatGPT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted-foreground/30 flex items-center justify-center text-xs font-bold">2</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-sm text-foreground/70">Add more tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted-foreground/40 flex items-center justify-center text-xs font-bold">3</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-sm text-foreground/70">Success follows naturally</span>
                  </div>
                </div>

                <p className="text-muted-foreground italic text-sm">
                  "More AI = More Results"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT: The Reality */}
          <Card className="border-primary/60 bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-glow-lg transition-all duration-600 animate-fade-in delay-500 fill-backwards">
            <CardContent className="p-6 lg:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 rounded-full p-3">
                  <AlertTriangle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-syne font-bold text-2xl md:text-3xl text-primary">The Staircase Reality</h3>
              </div>

              <div className="space-y-4 font-manrope text-base md:text-lg">
                <p className="text-foreground/80 leading-relaxed">
                  <span className="font-bold text-primary">Reality is different:</span> AI adoption is a staircase with a trap door.
                </p>

                {/* Visual staircase with trap */}
                <div className="bg-gradient-to-br from-background to-primary/5 rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs font-bold">L1</div>
                    <span className="text-sm text-foreground/70">Individual AI</span>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs font-bold">L2</div>
                    <span className="text-sm text-foreground/70">Generic SaaS</span>
                  </div>
                  <div className="flex items-center gap-3 ml-8 relative">
                    <div className="w-8 h-8 rounded-full bg-warning/80 flex items-center justify-center text-xs font-bold">L3</div>
                    <span className="text-sm font-bold text-warning">TRAP DOOR</span>
                    <div className="absolute -right-2 -top-1">
                      <AlertTriangle className="h-4 w-4 text-warning animate-glow-pulse" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-12 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-xs font-bold text-primary">L4</div>
                    <span className="text-sm text-primary">Iterative Agents</span>
                  </div>
                  <div className="flex items-center gap-3 ml-16 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-500/40 flex items-center justify-center text-xs font-bold text-cyan-500">L5</div>
                    <span className="text-sm text-cyan-500">Autonomous</span>
                  </div>
                </div>

                <p className="text-primary font-bold text-base">
                  Most get stuck at Level 3 → Negative ROI
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Takeaway */}
        <div className="max-w-4xl mx-auto animate-fade-in delay-700 fill-backwards">
          <Card className="border-primary bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6 text-center">
              <p className="font-syne font-bold text-xl md:text-2xl text-foreground">
                Real transformation doesn't start until <span className="text-primary">Level 4</span> — where AI connects to YOUR business systems <span className="text-primary">DEEPLY and ROBUSTLY</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
