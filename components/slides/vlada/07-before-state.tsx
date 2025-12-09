'use client'

/**
 * Slide 07: Before State - "Bulo (klinika Marii do nas)"
 *
 * Visual theme: CHAOS - scattered elements, question marks, confusion
 * Matched pair with Slide 08 (After State) for maximum contrast
 */

import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { HelpCircle, AlertTriangle, FileQuestion, Calculator } from 'lucide-react'
import Image from 'next/image'

export default function BeforeStateSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Higher opacity for "messy" feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289836498-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="diagonal" className="opacity-10" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.25} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge
            variant="destructive"
            className="animate-slide-in-down transform rotate-1"
          >
            <AlertTriangle className="h-4 w-4 mr-2" aria-hidden="true" />
            Було
          </Badge>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground animate-fade-in delay-100 fill-backwards">
            КЛІНІКА <span className="text-amber-600">МАРІЇ</span> ДО НАС
          </h2>
        </div>

        {/* Chaotic Financial Cards - Scattered positioning */}
        <div className="relative min-h-[280px] md:min-h-[320px]">
          {/* Dokhody Card - Tilted left */}
          <Card
            className="absolute left-0 md:left-4 top-0 w-[280px] md:w-[320px] border-2 border-amber-500/40 bg-amber-50/50 transform -rotate-2 animate-fade-in delay-200 fill-backwards hover:scale-105 transition-transform"
          >
            <CardContent className="pt-5 pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-amber-100">
                  <Calculator className="h-5 w-5 text-amber-600" />
                </div>
                <p className="font-syne font-semibold text-amber-800">Доходи:</p>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-8 w-8 text-amber-600 animate-pulse" />
                <HelpCircle className="h-8 w-8 text-amber-600 animate-pulse" style={{ animationDelay: '200ms' }} />
                <HelpCircle className="h-8 w-8 text-amber-600 animate-pulse" style={{ animationDelay: '400ms' }} />
              </div>
              <p className="text-xs text-amber-700/70 mt-2 italic">
                (десь у Clinic Cards, десь у зошиті)
              </p>
            </CardContent>
          </Card>

          {/* Vytraty Card - Tilted right, overlapping */}
          <Card
            className="absolute right-0 md:right-4 top-4 md:top-8 w-[280px] md:w-[320px] border-2 border-red-400/40 bg-red-50/50 transform rotate-3 animate-fade-in delay-400 fill-backwards hover:scale-105 transition-transform"
          >
            <CardContent className="pt-5 pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-red-100">
                  <FileQuestion className="h-5 w-5 text-red-500" />
                </div>
                <p className="font-syne font-semibold text-red-700">Витрати:</p>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-8 w-8 text-red-500 animate-pulse" style={{ animationDelay: '100ms' }} />
                <HelpCircle className="h-8 w-8 text-red-500 animate-pulse" style={{ animationDelay: '300ms' }} />
                <HelpCircle className="h-8 w-8 text-red-500 animate-pulse" style={{ animationDelay: '500ms' }} />
              </div>
              <p className="text-xs text-red-600/70 mt-2 italic">
                (частина в Excel, частина ніде)
              </p>
            </CardContent>
          </Card>

          {/* Prybutok Card - Center bottom, biggest confusion */}
          <Card
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[260px] md:w-[300px] border-2 border-gray-400/50 bg-gray-100/60 transform -rotate-1 animate-fade-in delay-600 fill-backwards hover:scale-105 transition-transform"
          >
            <CardContent className="pt-5 pb-4 text-center">
              <p className="font-syne font-semibold text-gray-700 mb-3">Прибуток:</p>
              <div className="text-5xl md:text-6xl" role="img" aria-label="Shrug - unknown">
                🤷
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Maria's Quote - Speech Bubble */}
        <div className="relative mt-8 animate-slide-in-up delay-700 fill-backwards">
          <Card className="max-w-2xl mx-auto border-2 border-amber-400/30 bg-white/90 transform rotate-1">
            <CardContent className="pt-5 pb-4">
              {/* Speech bubble tail */}
              <div className="absolute -top-3 left-12 w-6 h-6 bg-white border-l-2 border-t-2 border-amber-400/30 transform rotate-45" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                  👩‍⚕️
                </div>
                <div>
                  <p className="font-syne text-sm font-semibold text-amber-700 mb-1">Марія:</p>
                  <p className="font-manrope text-base md:text-lg text-gray-700 italic leading-relaxed">
                    &ldquo;Мені здається працюємо добре, але чому завжди мало на рахунку?&rdquo;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual chaos indicator */}
        <div className="flex justify-center gap-3 pt-2 animate-fade-in delay-800 fill-backwards">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-amber-500/60" />
            Розкидано
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            Незрозуміло
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-gray-500/60" />
            Невідомо
          </span>
        </div>
      </div>
    </div>
  )
}
