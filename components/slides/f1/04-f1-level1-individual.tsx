"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { User, CheckCircle2, XCircle } from "lucide-react"

export default function F1Level1Individual() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="border-gray-500 text-gray-500">
            Level 1
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            INDIVIDUAL <span className="text-gray-500">AI</span>
          </h2>
          <p className="text-xl text-foreground/70">
            ChatGPT, Claude — used as desired
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: What It Is */}
          <Card className="border-gray-500/40 bg-gray-500/5 animate-slide-in-left delay-300 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-6 w-6 text-gray-500" />
                <h3 className="text-xl font-bold">What It Is</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>People use ChatGPT, Claude individually</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>No central coordination or strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>Knowledge stays with individuals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>Cost: $20/person/month subscriptions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Right: Limitations */}
          <Card className="border-red-500/40 bg-red-500/5 animate-slide-in-right delay-500 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-bold">Key Limitations</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">•</span>
                  <span><strong>No knowledge sharing</strong> — Each person reinvents the wheel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">•</span>
                  <span><strong>No company context</strong> — Generic responses, not tailored</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">•</span>
                  <span><strong>No integration</strong> — Doesn't connect to your systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">•</span>
                  <span><strong>Limited impact</strong> — Individual productivity only</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Insight */}
        <Card className="bg-muted/20 border-border/50 animate-fade-in delay-800 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Reality:</span> This is where most companies start. It's fine for learning, but won't drive transformation.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
