/**
 * SLIDE 02: PROBLEM SLIDE - "Znayoma sytuatsiya?"
 *
 * Pattern: Hover-Reveal Cards
 * Purpose: Present pain points that dental clinic owners face
 *
 * Design System:
 * - Typography: Bebas Neue (title), Syne (card titles), Manrope (body)
 * - Colors: Amber #FF9800 (warning), Teal #00897B (insight)
 * - Background: GrainOverlay + AI-generated image (amber theme)
 * - Animations: Staggered card entrance (100ms delay between cards)
 * - Interactive: Hover-reveal expands cards with detailed descriptions
 *
 * Content Language: Ukrainian
 */

"use client"

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import Image from 'next/image'
import {
  CircleDollarSign,
  TrendingDown,
  FileQuestion,
  AlertTriangle,
  Lightbulb
} from 'lucide-react'

interface PainPoint {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  shortDescription: string
  expandedDescription: string
}

const painPoints: PainPoint[] = [
  {
    id: 'money-flow',
    icon: CircleDollarSign,
    title: 'Hroshi prykhodiat...',
    shortDescription: 'Ale kudy vony potim ydut?',
    expandedDescription: 'Vy bachyte nadkhodzhennya na rakhunok, ale detalna kartyna vytrat zalyshayetsya nezovsim zrozumiloyu. Tse stvoryuye vidchuttya nevyznachenosti.'
  },
  {
    id: 'expectations',
    icon: TrendingDown,
    title: 'Naprykintsi misyatsya...',
    shortDescription: 'Na rakhunku menshe, nizh ochikuvaly',
    expandedDescription: 'Planuvannya byudzhetu staye skladnym, koly realni tsyfry ne zbihayutsya z ochikuvannyamy. Tse vplyvaye na mozhlyvistʹ robyty investytsiyi v rozvytok.'
  },
  {
    id: 'accountant',
    icon: FileQuestion,
    title: 'Bukhhalter nadsylaye tablytsi...',
    shortDescription: 'Ale shcho z nymy robyty?',
    expandedDescription: 'Sklani zvity bez kontekstu ta poyasnen ne dopomahayutʹ pryymatyty upravlinski rishennya. Vy potrebuyete prostykh vidpovidey, a ne bilshe pytan.'
  },
  {
    id: 'withdrawals',
    icon: AlertTriangle,
    title: 'Khochete vyvesty hroshi...',
    shortDescription: 'Ale boyites, shcho ne vystachyt',
    expandedDescription: 'Strakh, shcho vyluchennya koshtiv vplyne na zarplaty abo operatsiyni vytraty, blokuye vas vid otrymannya vynhorody za vashu prazyyu.'
  }
]

export default function Slide02Problem() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Layer 1: AI-Generated Background Image (amber theme) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289818261-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Layer 2: Grain Overlay */}
      <GrainOverlay opacity={0.15} className="z-[1]" />

      {/* Layer 3: Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge
            variant="outline"
            className="animate-slide-in-down border-amber-500/50 text-amber-600 bg-amber-500/5"
          >
            <AlertTriangle className="h-4 w-4 mr-2" aria-hidden="true" />
            Rozpiznannya problemy
          </Badge>

          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in delay-200 fill-backwards">
            Znayoma <span className="text-amber-500">sytuatsiya</span>?
          </h2>

          <p className="font-manrope text-lg md:text-xl text-foreground/60 animate-slide-in-up delay-400 fill-backwards">
            Navedyt na kartku, shchob diznatys bilshe
          </p>
        </div>

        {/* Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            const isActive = activeCard === point.id

            return (
              <Card
                key={point.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  border-amber-500/30 bg-amber-500/5
                  ${isActive
                    ? 'scale-105 border-amber-500/60 shadow-[0_0_30px_rgba(255,152,0,0.15)]'
                    : 'hover:scale-102 hover:border-amber-500/50'
                  }
                  animate-fade-in fill-backwards
                `}
                style={{ animationDelay: `${idx * 100 + 500}ms` }}
                onMouseEnter={() => setActiveCard(point.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="pt-6 space-y-4">
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4">
                    <div className={`
                      p-3 rounded-xl transition-colors duration-300
                      ${isActive ? 'bg-amber-500/20' : 'bg-amber-500/10'}
                    `}>
                      <Icon className={`
                        w-6 h-6 transition-colors duration-300
                        ${isActive ? 'text-amber-500' : 'text-amber-500/70'}
                      `} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-syne text-lg font-semibold text-foreground">
                        {point.title}
                      </h3>
                      <p className="font-manrope text-sm text-foreground/70 mt-1">
                        {point.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Expanded Content (hover reveal) */}
                  <div className={`
                    overflow-hidden transition-all duration-300
                    ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="pt-4 border-t border-amber-500/20">
                      <p className="font-manrope text-sm text-foreground/80 leading-relaxed">
                        {point.expandedDescription}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight Card */}
        <Card className="bg-primary/5 border-primary/30 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-syne text-lg font-semibold text-foreground mb-2">
                  Klyuchove usvidomlennya
                </p>
                <p className="font-manrope text-base text-foreground/80 leading-relaxed">
                  <span className="font-semibold text-primary">
                    Vy chudovyy stomatoloh.
                  </span>{' '}
                  Ale finansy — tse okrema profesiya. I tse normalno — potrebuvaty dopomohy u tomu, shcho ne ye vashoyu spetsializatsiyeyu.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
