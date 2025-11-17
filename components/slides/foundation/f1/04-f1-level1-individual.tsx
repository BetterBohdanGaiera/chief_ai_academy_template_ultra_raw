"use client"

/**
 * F1-04: LEVEL 1 - INDIVIDUAL AI
 *
 * Pattern: One-Screen Simplicity (adapted with progression indicator)
 * Visual Theme: Gray/neutral - representing the starting point
 * Key Message: Individual AI use is valuable for learning but insufficient for transformation
 *
 * Design Decisions:
 * - Progression indicator: "Level 1 of 5" establishes journey narrative
 * - Clean card layout: 3 cards (What It Is, Use Cases, Limitations)
 * - Gray color scheme: Signals neutral starting point (not transformational)
 * - Staggered animations: Guide attention sequentially (300ms → 500ms → 700ms)
 * - Background image at 15% opacity: Solo worker with laptop
 */

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { User, MessageSquare, XCircle, DollarSign } from 'lucide-react'
import Image from 'next/image'

export default function F1Level1Individual() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763382702805-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" opacity={0.06} color="#0A0A0A" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8 lg:space-y-10">
        {/* Header with Progression Indicator */}
        <div className="text-center space-y-4 animate-slide-in-down">
          {/* Progression Indicator */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-10 h-1.5 bg-muted-foreground rounded-full" aria-label="Level 1"></div>
              <div className="w-10 h-1.5 bg-muted-foreground/30 rounded-full" aria-label="Level 2"></div>
              <div className="w-10 h-1.5 bg-muted-foreground/30 rounded-full" aria-label="Level 3"></div>
              <div className="w-10 h-1.5 bg-muted-foreground/30 rounded-full" aria-label="Level 4"></div>
              <div className="w-10 h-1.5 bg-muted-foreground/30 rounded-full" aria-label="Level 5"></div>
            </div>
          </div>

          <Badge variant="outline" className="border-muted-foreground/50 text-muted-foreground">
            Level 1 of 5
          </Badge>

          <div className="flex items-center justify-center gap-4">
            <User className="h-10 w-10 md:h-12 md:w-12 text-muted-foreground" aria-hidden="true" />
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-muted-foreground">
              INDIVIDUAL AI
            </h2>
          </div>

          <p className="font-syne font-semibold text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto">
            ChatGPT, Claude, Gemini — Personal productivity, no integration
          </p>
        </div>

        {/* Three-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: What It Is */}
          <Card
            className="border-muted-foreground/30 bg-muted/10 animate-slide-in-left delay-300 fill-backwards"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                <h3 className="font-syne text-lg font-bold">What It Is</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                    Tools
                  </p>
                  <p className="text-sm text-foreground/90">
                    ChatGPT, Claude, Gemini
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                    Usage
                  </p>
                  <p className="text-sm text-foreground/90">
                    People use AI individually, no central coordination
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                    Knowledge
                  </p>
                  <p className="text-sm text-foreground/90">
                    Stays with individuals, not shared
                  </p>
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <p className="text-xs font-semibold text-muted-foreground">COST</p>
                  </div>
                  <p className="text-sm text-foreground/90 mt-1">
                    $20/person/month subscriptions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Use Cases */}
          <Card
            className="border-muted-foreground/30 bg-muted/10 animate-fade-in delay-500 fill-backwards"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                <h3 className="font-syne text-lg font-bold">Good For</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground/90 mb-1">
                    ✓ Learning AI capabilities
                  </p>
                  <p className="text-xs text-foreground/70">
                    Explore what AI can do
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground/90 mb-1">
                    ✓ Personal productivity
                  </p>
                  <p className="text-xs text-foreground/70">
                    Draft emails, summarize docs
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground/90 mb-1">
                    ✓ Quick experiments
                  </p>
                  <p className="text-xs text-foreground/70">
                    Try new use cases informally
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground/90 mb-1">
                    ✓ Building AI literacy
                  </p>
                  <p className="text-xs text-foreground/70">
                    Get comfortable with AI
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Key Limitations */}
          <Card
            className="border-warning/40 bg-warning/5 animate-slide-in-right delay-700 fill-backwards"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-warning" aria-hidden="true" />
                <h3 className="font-syne text-lg font-bold">Limitations</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✗</span>
                  <div>
                    <p className="text-sm font-medium text-foreground/90">No knowledge sharing</p>
                    <p className="text-xs text-foreground/70">Each person reinvents the wheel</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✗</span>
                  <div>
                    <p className="text-sm font-medium text-foreground/90">No company context</p>
                    <p className="text-xs text-foreground/70">Generic responses, not tailored</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✗</span>
                  <div>
                    <p className="text-sm font-medium text-foreground/90">No integration</p>
                    <p className="text-xs text-foreground/70">Doesn't connect to systems</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-warning mt-0.5">✗</span>
                  <div>
                    <p className="text-sm font-medium text-foreground/90">Limited impact</p>
                    <p className="text-xs text-foreground/70">Individual productivity only</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Takeaway */}
        <div className="text-center space-y-4 pt-4 animate-fade-in delay-1000 fill-backwards">
          <Card className="bg-muted/30 border-muted-foreground/30 max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <p className="font-syne text-lg md:text-xl text-foreground/90">
                This is where most companies <span className="font-bold">start</span> — but transformation requires <span className="text-primary font-bold">more</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
