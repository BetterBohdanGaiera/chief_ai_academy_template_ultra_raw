"use client"

import { Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { MeshGradientBackground } from "@/components/algorithmic/mesh-gradient-background"
import { ParticleField } from "@/components/algorithmic/particle-field"
import Image from "next/image"

export function Slide401TitleVisual() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* Layered Algorithmic Backgrounds */}
      <MeshGradientBackground
        colors={["#FF4D00", "#00BBFF", "#F59E0B", "#10B981"]}
        speed={0.0003}
        complexity={5}
      />
      <ParticleField
        particleCount={80}
        color="#00BBFF"
        interactive={true}
        speed={0.3}
      />

      {/* AI-Generated Image Layer - subtle overlay */}
      <div className="absolute inset-0 z-0 animate-fade-in delay-100 fill-backwards">
        <Image
          src="/generated-images/gemini-1763064209315-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15 select-none pointer-events-none mix-blend-multiply"
          priority={true}
          quality={85}
          aria-hidden="true"
        />
      </div>

      <GrainOverlay opacity={0.3} />

      {/* Content */}
      <div className="max-w-7xl w-full space-y-10 lg:space-y-16 text-center relative z-10">
        {/* Badge with entrance animation */}
        <div className="flex justify-center animate-slide-in-down fill-backwards">
          <Badge variant="glow" className="text-base md:text-xl px-6 py-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <Layers className="h-5 w-5 mr-2 shrink-0" />
            Module 04: Agentic Solution Categories
          </Badge>
        </div>

        {/* Hero Title - Massive typography with stagger animation */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
            THREE PATHS
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas leading-none tracking-tight animate-fade-in delay-300 fill-backwards">
            TO{" "}
            <span className="text-primary animate-glow-pulse inline-block">
              AI VALUE
            </span>
          </h1>
        </div>

        {/* Subtitle with slide-up animation */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-syne font-bold text-primary/80 max-w-5xl mx-auto animate-slide-in-up delay-500 fill-backwards">
          Real ROI ranges for each category
        </p>

        {/* Course Metadata */}
        <div className="pt-12 space-y-3 text-xl md:text-2xl text-foreground/60 font-manrope animate-fade-in delay-700 fill-backwards">
          <p className="font-semibold">Understanding What You Can Build</p>
          <p className="text-lg md:text-xl text-foreground/40">
            Expected ROI ranges and when to use each category
          </p>
        </div>

        {/* Interactive hint - subtle pulsing indicator */}
        <div className="pt-8 animate-fade-in delay-900 fill-backwards">
          <p className="text-sm text-foreground/40 font-manrope">
            <span className="inline-block animate-pulse">→</span> Move your cursor to interact with particles
          </p>
        </div>
      </div>
    </section>
  )
}
