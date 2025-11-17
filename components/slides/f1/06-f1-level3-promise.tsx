"use client"

import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { CheckCircle2 } from "lucide-react"

export default function F1Level3PromiseSlide() {
  const promises = [
    "No technical team needed",
    "No long projects",
    "Just plug in a tool",
    "Watch efficiency soar"
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

      {/* Geometric Pattern */}
      <GeometricPattern type="diagonal" opacity={0.05} color="#FF4D00" spacing={60} />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-16 text-center">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-1">
            Level 3: No-Code Automation
          </Badge>
        </div>

        {/* Hero Title */}
        <div className="space-y-6 animate-fade-in delay-200 fill-backwards">
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight">
            THE <span className="text-primary animate-glow-pulse">PROMISE</span>
          </h1>
          <p className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-primary/80">
            "Automate workflows without developers!"
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {promises.map((promise, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 animate-slide-in-up fill-backwards hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${idx * 100 + 400}ms` }}
            >
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary shrink-0 animate-glow-pulse" />
              <p className="font-syne font-bold text-xl md:text-2xl lg:text-3xl text-foreground text-left leading-tight">
                {promise}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="space-y-4 animate-fade-in delay-800 fill-backwards">
          <p className="font-manrope text-2xl md:text-3xl text-foreground/80">
            It sounds <span className="font-bold text-primary">perfect</span>...
          </p>
          <p className="font-manrope text-lg md:text-xl text-foreground/60">
            Transform your business for $99/month!
          </p>
        </div>
      </div>
    </section>
  )
}
