"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function F1Level3TrapSlide() {
  const [showReality, setShowReality] = useState(false)

  const promisePoints = [
    "No technical team needed",
    "Fast implementation",
    "Easy to use",
    "Affordable pricing"
  ]

  const realityPoints = [
    "Changes take 1-2 weeks via vendor",
    "Accuracy stuck at 60-70%",
    "Can't iterate fast enough",
    "Users abandon after 3 months"
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763382744652-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-12 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" opacity={0.06} color="#FFB800" spacing={50} />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center animate-slide-in-down">
            <Badge variant={showReality ? "destructive" : "glow"} className="transform -rotate-1">
              Level 3 of 5: No-Code Automation
            </Badge>
          </div>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
            {showReality ? (
              <>
                THE <span className="text-warning animate-glow-pulse">REALITY</span>
              </>
            ) : (
              <>
                THE <span className="text-primary animate-glow-pulse">PROMISE</span>
              </>
            )}
          </h2>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center animate-fade-in delay-400 fill-backwards">
          <Button
            onClick={() => setShowReality(!showReality)}
            size="lg"
            variant={showReality ? "destructive" : "default"}
            className="text-lg px-8 py-6 font-syne font-bold shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {showReality ? (
              <>
                <AlertTriangle className="w-5 h-5 mr-2" />
                Show Promise
              </>
            ) : (
              <>
                See The Reality
                <AlertTriangle className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-600">
          {!showReality ? (
            // PROMISE VIEW
            promisePoints.map((point, idx) => (
              <Card
                key={idx}
                className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-slide-in-right"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                    <p className="font-syne font-bold text-xl md:text-2xl text-foreground">
                      {point}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            // REALITY VIEW
            realityPoints.map((point, idx) => (
              <Card
                key={idx}
                className="border-warning/40 bg-gradient-to-br from-warning/10 to-destructive/5 animate-slide-in-left"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-8 h-8 text-destructive shrink-0" />
                    <p className="font-syne font-bold text-xl md:text-2xl text-foreground">
                      {point}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Bottom Insight */}
        <div className="animate-fade-in delay-600 fill-backwards">
          <Card
            className={`
              transition-all duration-600
              ${showReality
                ? "border-destructive/50 bg-destructive/10"
                : "border-primary/40 bg-primary/5"
              }
            `}
          >
            <CardContent className="pt-6 text-center">
              <p className="font-manrope text-base md:text-lg text-foreground/90">
                {showReality ? (
                  <>
                    <span className="font-bold text-destructive">The Trap:</span> Slow iteration (weeks not minutes) →
                    Can only afford ~5 total iterations → Stuck at 60-70% accuracy →
                    <span className="font-bold"> Negative ROI + 12-18 months of AI resistance</span>
                  </>
                ) : (
                  <>
                    <span className="font-bold text-primary">Tools like Zapier, Make.com, n8n</span> promise
                    drag-and-drop AI automation. But there's a hidden cost most companies discover too late...
                  </>
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
