"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Zap, CheckCircle2, DollarSign } from "lucide-react"

export default function F1Level4Iterative() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge className="bg-primary text-primary-foreground shadow-glow">
            Level 4: Where Transformation Starts
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            ITERATIVE <span className="text-primary">AGENTS</span>
          </h2>
          <p className="text-xl text-foreground/70">
            How transformation actually works
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: What Makes It Different */}
          <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-slide-in-left delay-300 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">What Makes It Different</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Fast iteration</strong> — 1-3 cycles per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Internal team</strong> — Agent Manager + Developer partnership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Deep integration</strong> — Connected to YOUR systems, YOUR data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Company context</strong> — Learns YOUR processes, YOUR edge cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>20+ iterations</strong> — Reaches 95%+ accuracy in 2-3 weeks</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Right: The Economics */}
          <Card className="border-green-500/40 bg-green-500/5 animate-slide-in-right delay-500 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-bold">The Economics</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Investment</p>
                  <div className="space-y-1">
                    <p className="font-semibold">Initial Build: <span className="text-primary">$40-50K</span> (one-time)</p>
                    <p className="font-semibold">Ongoing: <span className="text-primary">$8K/year</span></p>
                    <p className="text-sm text-foreground/60">First Year Total: ~$58K</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 mb-2">Annual Value</p>
                  <div className="space-y-1">
                    <p className="text-sm">Time Savings: $80-150K/year</p>
                    <p className="text-sm">Consistency: $20-50K/year</p>
                    <p className="text-sm">Scalability: $50-100K/year</p>
                    <p className="font-bold text-green-500 text-lg mt-2">Total: $150-300K/year</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-xl text-green-500">Net: +$100-250K/year ✅</p>
                  <p className="text-sm text-foreground/60 mt-1">Payback: 1-2 months</p>
                  <p className="text-sm font-semibold text-green-500 mt-1">ROI: 300-600%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-800 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Critical Difference:</span> Level 4 iteration speed (minutes/free) vs Level 3 (weeks/$$$) determines quality, cost, and success.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
