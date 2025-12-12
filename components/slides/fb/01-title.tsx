'use client'

/**
 * FB-01: Title Slide
 * TechFlow Solutions - Q1 2025 Marketing Launch
 *
 * Pattern: One-Screen Simplicity
 * Skill: artifacts-builder
 *
 * Purpose: Set the scene for a feedback session - establish credibility and context
 * Key Message: This is a collaborative feedback session, not a presentation to passively consume
 */

import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern, GradientMesh } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Target } from 'lucide-react'

export default function TitleSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-15" />
      <GrainOverlay opacity={0.25} />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 lg:space-y-12 px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-1 text-sm px-4 py-2">
            <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
            Stakeholder Feedback Session
          </Badge>
        </div>

        {/* Title - TechFlow Solutions */}
        <h1 className="font-bebas text-6xl md:text-7xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          <span className="text-primary animate-glow-pulse">TechFlow</span>
          <br />
          <span className="text-foreground">Solutions</span>
        </h1>

        {/* Subtitle - Q1 2025 Marketing Launch */}
        <p className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-foreground/80 max-w-4xl mx-auto animate-slide-in-up delay-400 fill-backwards">
          Q1 2025 Marketing Launch
        </p>

        {/* Context Line - Budget & Goal */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-lg md:text-xl text-muted-foreground font-manrope animate-fade-in delay-500 fill-backwards">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">$250K</span>
            <span>Budget</span>
          </div>
          <span className="text-muted-foreground/50">|</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">500</span>
            <span>MQL Goal</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-4 animate-fade-in delay-700 fill-backwards">
          <div className="flex items-center justify-center gap-2 text-primary font-syne font-semibold text-lg md:text-xl">
            <Target className="h-5 w-5" aria-hidden="true" />
            <span>Your strategic input requested</span>
          </div>
        </div>
      </div>
    </div>
  )
}
