/**
 * Mock Slide 1: Foundation Title
 * Demonstrates: Hero layout, brutalist typography, orange accents, design system integration
 */

import { Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { GradientMesh } from '@/components/decorative/geometric-patterns'

export default function FoundationTitleSlide() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* Atmospheric background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-30" />
      <GrainOverlay opacity={0.4} />

      {/* Content */}
      <div className="max-w-7xl w-full space-y-10 lg:space-y-16 text-center relative z-10">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-2">
            <Sparkles className="h-5 w-5 mr-2" aria-hidden="true" />
            Multi-Course System Demo
          </Badge>
        </div>

        {/* Hero Title */}
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          <span className="text-primary animate-glow-pulse">FOUNDATION</span>
          <br />
          COURSE
        </h1>

        {/* Subtitle */}
        <p className="font-syne font-bold text-2xl md:text-4xl lg:text-5xl text-primary/80 max-w-5xl mx-auto animate-slide-in-up delay-400 fill-backwards">
          Building Your AI Transformation Knowledge
        </p>

        {/* Metadata */}
        <div className="pt-12 space-y-3 text-xl md:text-2xl text-foreground/60 font-manrope animate-fade-in delay-600 fill-backwards">
          <p className="font-semibold">Chief AI Academy</p>
          <p className="text-lg md:text-xl text-foreground/40">Phase 1: Infrastructure Demonstration</p>
        </div>
      </div>
    </section>
  )
}
