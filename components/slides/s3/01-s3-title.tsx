"use client"

import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Sparkles } from "lucide-react"
import Image from "next/image"

export default function Slide01S3Title() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763327567145-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-12 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="max-w-7xl w-full space-y-10 lg:space-y-16 text-center relative z-10">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-2">
            <Sparkles className="h-5 w-5 mr-2" aria-hidden="true" />
            Skills Module 3
          </Badge>
        </div>

        {/* Hero Title */}
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          MANAGING <span className="text-primary animate-glow-pulse">AI</span>
        </h1>

        {/* Subtitle */}
        <p className="font-syne font-bold text-2xl md:text-4xl lg:text-5xl text-primary/80 max-w-5xl mx-auto animate-slide-in-up delay-400 fill-backwards">
          From Managing People to Managing AI Systems
        </p>

        {/* Metadata */}
        <div className="pt-12 space-y-3 text-xl md:text-2xl text-foreground/60 font-manrope animate-fade-in delay-600 fill-backwards">
          <p className="font-semibold">Learn How to Manage AI Effectively</p>
          <p className="text-lg md:text-xl text-foreground/40">Duration: 25 minutes</p>
        </div>
      </div>
    </section>
  )
}
