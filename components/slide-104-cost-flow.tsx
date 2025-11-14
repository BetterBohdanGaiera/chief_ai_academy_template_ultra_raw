"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, TrendingUp, DollarSign } from "lucide-react"
import { ParticleField } from "@/components/algorithmic/particle-field"

export function Slide104CostFlow() {
  const [hoveredPath, setHoveredPath] = useState<"poor" | "systematic" | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background particles - subtle, neutral */}
      <div className="absolute inset-0 opacity-20">
        <ParticleField
          count={60}
          color="#FF4D00"
          connectionDistance={120}
          speed={0.3}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-lg px-6 py-2">
            Module 01: AI State & Opportunity
          </Badge>
          <h1 className="text-6xl lg:text-8xl font-bebas text-foreground leading-none">
            The Cost of
            <br />
            <span className="text-primary">Poor Implementation</span>
          </h1>
          <p className="text-2xl lg:text-4xl font-syne font-semibold text-muted-foreground max-w-3xl mx-auto">
            The real risk isn't delay—it's doing it wrong
          </p>
        </div>

        {/* Fork in the road visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Poor Implementation Path */}
          <Card
            className={`p-8 lg:p-10 border-2 transition-all duration-500 cursor-pointer ${
              hoveredPath === "poor"
                ? "border-destructive shadow-2xl scale-105 bg-destructive/5"
                : "border-destructive/30 hover:border-destructive/60"
            }`}
            onMouseEnter={() => setHoveredPath("poor")}
            onMouseLeave={() => setHoveredPath(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bebas text-destructive mb-2">
                  Poor Implementation
                </h2>
                <p className="text-lg text-muted-foreground font-manrope">
                  Chaotic experimentation
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Winding path visualization */}
              <div className="relative h-32 mb-6 bg-gradient-to-r from-destructive/10 to-destructive/20 rounded-lg overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 128">
                  <path
                    d="M 0,64 Q 50,10 100,64 T 200,64 T 300,64 T 400,90"
                    stroke="#EF4444"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                    strokeDasharray="5,5"
                  />
                  {/* Obstacles */}
                  <circle cx="100" cy="64" r="8" fill="#EF4444" opacity="0.6" />
                  <circle cx="200" cy="64" r="8" fill="#EF4444" opacity="0.6" />
                  <circle cx="300" cy="64" r="8" fill="#EF4444" opacity="0.6" />
                </svg>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Teams with learned bad habits</p>
                    <p className="text-sm text-muted-foreground">Copy-paste, prompt hacking</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Investment in wrong tools</p>
                    <p className="text-sm text-muted-foreground">Patterns that don't scale</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Built organizational resistance</p>
                    <p className="text-sm text-muted-foreground">"We tried AI, it didn't work"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Capability debt compounds</p>
                    <p className="text-sm text-muted-foreground">Quarterly accumulation</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-destructive" />
                  <p className="font-bold text-destructive">Negative ROI</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Worse than no implementation
                </p>
              </div>
            </div>
          </Card>

          {/* Systematic Implementation Path */}
          <Card
            className={`p-8 lg:p-10 border-2 transition-all duration-500 cursor-pointer ${
              hoveredPath === "systematic"
                ? "border-accent shadow-2xl scale-105 bg-accent/5"
                : "border-accent/30 hover:border-accent/60"
            }`}
            onMouseEnter={() => setHoveredPath("systematic")}
            onMouseLeave={() => setHoveredPath(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bebas text-accent mb-2">
                  Systematic Implementation
                </h2>
                <p className="text-lg text-muted-foreground font-manrope">
                  Clear, progressive trajectory
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Clear upward path visualization */}
              <div className="relative h-32 mb-6 bg-gradient-to-r from-accent/10 to-accent/20 rounded-lg overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 128">
                  <path
                    d="M 0,100 L 400,20"
                    stroke="#00BBFF"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                  {/* Milestones */}
                  <circle cx="100" cy="80" r="6" fill="#00BBFF" />
                  <circle cx="200" cy="60" r="6" fill="#00BBFF" />
                  <circle cx="300" cy="40" r="6" fill="#00BBFF" />
                </svg>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Clean foundation</p>
                    <p className="text-sm text-muted-foreground">No bad habits to unlearn</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Predictable ROI</p>
                    <p className="text-sm text-muted-foreground">Avoid known failure modes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Organizational momentum</p>
                    <p className="text-sm text-muted-foreground">Early wins build confidence</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Sustainable scaling</p>
                    <p className="text-sm text-muted-foreground">Works at 10 → 1,000 people</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  <p className="font-bold text-accent">300-600% ROI</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sustainable, predictable returns
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key message */}
        <div className="mt-12 text-center animate-fade-in delay-300">
          <div className="max-w-4xl mx-auto p-8 bg-card border-2 border-primary/30 rounded-lg">
            <p className="text-xl lg:text-2xl font-syne font-bold text-foreground">
              The opportunity isn't about beating competitors to AI.
              <br />
              <span className="text-primary">
                It's about building the capability correctly before your organization develops
                resistance and bad habits.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
