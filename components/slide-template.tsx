"use client"

import { SlideIn, FadeIn } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"

/**
 * Template Slide Component
 *
 * This is a template demonstrating the design patterns and component usage
 * for creating slides in this presentation framework.
 *
 * Key Design Principles:
 * - Brutalist-minimalist aesthetic with bold typography
 * - Electric Orange (#FF4D00) and Neon Cyan (#00BBFF) accent colors
 * - Generous whitespace and clear visual hierarchy
 * - Entrance animations for progressive reveal
 * - Grid-based layouts with geometric patterns
 */
export default function SlideTemplate() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-dots" />
      </div>

      {/* Main Content Container */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16">

        {/* Section Label */}
        <SlideIn direction="down" delay={0.1}>
          <Badge
            variant="outline"
            className="mb-6 border-orange-500/30 bg-orange-500/5 text-orange-500 uppercase tracking-wider"
          >
            Template Section
          </Badge>
        </SlideIn>

        {/* Main Heading */}
        <SlideIn direction="up" delay={0.2}>
          <h1 className="font-bebas text-[120px] leading-[0.9] tracking-tight text-white mb-8 text-center">
            Your Slide
            <br />
            <span className="text-orange-500">Title Here</span>
          </h1>
        </SlideIn>

        {/* Supporting Text */}
        <FadeIn delay={0.4}>
          <p className="font-syne text-xl text-white/60 text-center max-w-3xl mb-16">
            This is where you add supporting text or a subtitle.
            Use this space to provide context or key information.
          </p>
        </FadeIn>

        {/* Content Grid */}
        <StaggeredReveal className="grid grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-none hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-orange-500/20 border-2 border-orange-500 mb-4" />
            <h3 className="font-bebas text-3xl text-white mb-2">
              First Point
            </h3>
            <p className="font-manrope text-sm text-white/60">
              Description of your first key point or concept goes here.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-none hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/20 border-2 border-cyan-500 mb-4" />
            <h3 className="font-bebas text-3xl text-white mb-2">
              Second Point
            </h3>
            <p className="font-manrope text-sm text-white/60">
              Description of your second key point or concept goes here.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-none hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 bg-white/20 border-2 border-white/40 mb-4" />
            <h3 className="font-bebas text-3xl text-white mb-2">
              Third Point
            </h3>
            <p className="font-manrope text-sm text-white/60">
              Description of your third key point or concept goes here.
            </p>
          </div>
        </StaggeredReveal>
      </div>

      {/* Optional: Slide Number or Footer */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">01</p>
      </div>
    </div>
  )
}
