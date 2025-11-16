/**
 * S2 Slide 01: Module Title
 * Understanding AI Agents - Hero introduction slide
 */

import { Brain } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { GradientMesh } from '@/components/decorative/geometric-patterns'
import Image from 'next/image'

export default function S2TitleSlide() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763328063393-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Atmospheric background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-30" />
      <GrainOverlay opacity={0.4} />

      {/* Content */}
      <div className="max-w-7xl w-full space-y-10 lg:space-y-16 text-center relative z-10">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="gradient" className="transform -rotate-2">
            <Brain className="h-5 w-5 mr-2" aria-hidden="true" />
            Skills Module 2
          </Badge>
        </div>

        {/* Hero Title */}
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          UNDERSTANDING
          <br />
          <span className="text-primary animate-glow-pulse">AI AGENTS</span>
        </h1>

        {/* Subtitle */}
        <p className="font-syne font-bold text-2xl md:text-4xl lg:text-5xl text-primary/80 max-w-5xl mx-auto animate-slide-in-up delay-400 fill-backwards">
          What Makes AI Truly Agentic
        </p>

        {/* Metadata */}
        <div className="pt-12 space-y-3 text-xl md:text-2xl text-foreground/60 font-manrope animate-fade-in delay-600 fill-backwards">
          <p className="font-semibold">Chief AI Academy</p>
          <p className="text-lg md:text-xl text-foreground/40">12 minutes · Strategic Evaluation Framework</p>
        </div>
      </div>
    </section>
  )
}
