"use client"

import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern, GradientMesh } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

export function Slide01Title() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* AI-Generated Image Layer - AI Transformation Hero */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763063226214-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35 select-none pointer-events-none"
          priority={true}
          quality={85}
          aria-hidden="true"
        />
      </div>

      {/* Atmospheric Background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-30" />
      <GrainOverlay opacity={0.4} />

      {/* Content */}
      <div className="max-w-7xl w-full space-y-10 lg:space-y-16 text-center relative z-10">
        {/* Badge with rotation and entrance animation */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="text-base md:text-xl px-6 py-3 transform -rotate-2">
            <Sparkles className="h-5 w-5 mr-2 shrink-0" />
            Module 01: AI State & Opportunity
          </Badge>
        </div>

        {/* Hero Title - Bebas Neue massive typography */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          AI TRANSFORMATION
          <br />
          FOR{" "}
          <span className="text-primary animate-glow-pulse">EXECUTIVES</span>
        </h1>

        {/* Subtitle - Syne emphasis font */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-syne font-bold text-primary/80 max-w-5xl mx-auto animate-slide-in-up delay-400 fill-backwards">
          Systematic Approach to Real Results
        </p>

        {/* Course Metadata - Refined spacing */}
        <div className="pt-12 space-y-3 text-xl md:text-2xl text-foreground/60 font-manrope animate-fade-in delay-600 fill-backwards">
          <p className="font-semibold">Chief AI Academy</p>
          <p className="text-lg md:text-xl text-foreground/40">Strategic AI Integration for Business Leaders</p>
        </div>
      </div>
    </section>
  )
}
