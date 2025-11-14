"use client"

import { Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { MeshGradientBackground } from "@/components/algorithmic/mesh-gradient-background"
import { ParticleField } from "@/components/algorithmic/particle-field"
import Image from "next/image"

export function Slide301TitleVisual() {
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
            <Brain className="h-5 w-5 mr-2 shrink-0" />
            Module 03: ML vs Agentic Principles
          </Badge>
        </div>

        {/* Hero Title - Massive typography with stagger animation */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
            CHOOSING THE RIGHT
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas leading-none tracking-tight animate-fade-in delay-300 fill-backwards">
            AI{" "}
            <span className="text-primary animate-glow-pulse inline-block">
              APPROACH
            </span>
          </h1>
        </div>

        {/* Subtitle with slide-up animation */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-syne font-bold text-primary/80 max-w-5xl mx-auto animate-slide-in-up delay-500 fill-backwards">
          ML, Agentic AI, or Existing Tools?
        </p>

        {/* Three Approaches Preview */}
        <div className="pt-12 flex justify-center gap-8 text-xl md:text-2xl text-foreground/60 font-manrope animate-fade-in delay-700 fill-backwards">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success to-success/60" />
            <p className="text-sm">ML</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60" />
            <p className="text-sm">Agentic AI</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-warning to-warning/60" />
            <p className="text-sm">Existing Tools</p>
          </div>
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
