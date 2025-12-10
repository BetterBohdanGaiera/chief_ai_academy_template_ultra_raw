/**
 * SLIDE 01: TITLE SLIDE
 *
 * Pattern: One-Screen Simplicity
 * Purpose: Introduce the financial management service for dental clinics
 *
 * Design System:
 * - Typography: Bebas Neue (title), Syne (tagline), Manrope (body)
 * - Colors: Teal #00897B (primary), Navy #1E3A5F (accent)
 * - Background: GradientMesh warm + GrainOverlay + AI-generated image
 * - Animations: Orchestrated entrance (badge -> title -> tagline -> metadata)
 *
 * Content Language: Ukrainian
 */

import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GradientMesh } from '@/components/decorative/geometric-patterns'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'

export default function Slide01Title() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* Layer 1: Gradient Mesh (warm healthcare theme) */}
      <GradientMesh variant="warm" />

      {/* Layer 2: AI-Generated Background Image */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/generated-images/gemini-1765289800961-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Layer 3: Grain Overlay (analog warmth) */}
      <GrainOverlay opacity={0.15} className="z-[2]" />

      {/* Layer 4: Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-10 lg:space-y-16 text-center">
        {/* Badge - Slides in from top */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge
            variant="glow"
            className="transform -rotate-2 px-6 py-3 text-sm font-medium"
          >
            <TrendingUp className="h-4 w-4 mr-2" aria-hidden="true" />
            Premium Dental Finance
          </Badge>
        </div>

        {/* Main Title - Fades in with delay */}
        <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          <span className="block text-foreground">
            ФІНАНСОВЕ
          </span>
          <span className="block text-foreground">
            УПРАВЛІННЯ ДЛЯ
          </span>
          <span className="block text-primary animate-glow-pulse">
            СТОМАТОЛОГІЧНОЇ КЛІНІКИ
          </span>
        </h1>

        {/* Tagline - Slides up with delay */}
        <p className="font-syne font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/80 max-w-4xl mx-auto animate-slide-in-up delay-500 fill-backwards text-balance leading-relaxed">
          Наведемо лад у грошах{' '}
          <span className="text-primary">—</span>
          {' '}ви займетесь пацієнтами
        </p>

        {/* Metadata - Fades in last */}
        <div className="pt-8 animate-fade-in delay-700 fill-backwards">
          <p className="font-manrope text-lg md:text-xl text-foreground/50">
            Ваш фінансовий партнер у розвитку клініки
          </p>
        </div>
      </div>
    </section>
  )
}
