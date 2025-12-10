'use client'

/**
 * Slide 08: After State - "Stalo (cherez misiats roboty z namy)"
 *
 * Visual theme: ORDER - clean structure, clear hierarchy, professional report
 * Matched pair with Slide 07 (Before State) for maximum contrast
 */

import { useState } from 'react'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, TrendingUp, FileText } from 'lucide-react'
import Image from 'next/image'

// Financial data structure for the report
const reportData = {
  title: 'ЗВІТ ЗА ЛИСТОПАД 2025',
  revenue: {
    total: '620 000 грн',
    breakdown: [
      { label: 'Терапія', value: '180 000 грн' },
      { label: 'Ортопедія', value: '250 000 грн' },
      { label: 'Хірургія', value: '140 000 грн' },
      { label: 'Інше', value: '50 000 грн' },
    ],
  },
  expenses: {
    total: '485 000 грн',
    breakdown: [
      { label: 'Зарплати', value: '220 000 грн' },
      { label: 'Матеріали', value: '95 000 грн' },
      { label: 'Оренда', value: '80 000 грн' },
      { label: 'Реклама', value: '35 000 грн' },
      { label: 'Інше', value: '55 000 грн' },
    ],
  },
  netProfit: '135 000 грн',
}

export default function AfterStateSlide() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Lower opacity for clean feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289854084-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="grid" className="opacity-8" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge
            variant="glow"
            className="animate-slide-in-down transform -rotate-1"
          >
            <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
            Стало
          </Badge>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground animate-fade-in delay-100 fill-backwards">
            ЧЕРЕЗ <span className="text-primary">МІСЯЦЬ</span> РОБОТИ З НАМИ
          </h2>
        </div>

        {/* Clean Financial Report Card */}
        <Card className="border-2 border-primary/30 bg-white/95 shadow-lg animate-fade-in delay-200 fill-backwards">
          <CardContent className="pt-6 pb-6 px-6 md:px-8">
            {/* Report Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bebas text-2xl md:text-3xl text-primary tracking-wide">
                {reportData.title}
              </h3>
            </div>

            {/* Revenue Section */}
            <div
              className={`mb-6 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                hoveredSection === 'revenue' ? 'bg-primary/5' : ''
              }`}
              onMouseEnter={() => setHoveredSection('revenue')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="flex justify-between items-center mb-3">
                <p className="font-syne font-semibold text-lg text-gray-800">Виручка:</p>
                <p className="font-jetbrains font-bold text-xl text-primary animate-fade-in delay-300 fill-backwards">
                  {reportData.revenue.total}
                </p>
              </div>
              <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                {reportData.revenue.breakdown.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center text-sm animate-fade-in fill-backwards"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <span className="text-gray-600">- {item.label}:</span>
                    <span className="font-jetbrains text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expenses Section */}
            <div
              className={`mb-6 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                hoveredSection === 'expenses' ? 'bg-amber-50' : ''
              }`}
              onMouseEnter={() => setHoveredSection('expenses')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="flex justify-between items-center mb-3">
                <p className="font-syne font-semibold text-lg text-gray-800">Витрати:</p>
                <p className="font-jetbrains font-bold text-xl text-amber-700 animate-fade-in delay-500 fill-backwards">
                  {reportData.expenses.total}
                </p>
              </div>
              <div className="space-y-2 pl-4 border-l-2 border-amber-300/40">
                {reportData.expenses.breakdown.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center text-sm animate-fade-in fill-backwards"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <span className="text-gray-600">- {item.label}:</span>
                    <span className="font-jetbrains text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Net Profit - Highlighted */}
            <div className="pt-4 border-t-2 border-gray-200">
              <div
                className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400/40 animate-fade-in delay-700 fill-backwards"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <p className="font-bebas text-xl md:text-2xl text-green-700 tracking-wide">
                    ЧИСТИЙ ПРИБУТОК:
                  </p>
                </div>
                <p className="font-jetbrains font-bold text-2xl md:text-3xl text-green-600 animate-glow-pulse">
                  {reportData.netProfit}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Maria's Satisfied Quote - Speech Bubble */}
        <div className="relative animate-slide-in-up delay-800 fill-backwards">
          <Card className="max-w-xl mx-auto border-2 border-primary/30 bg-white/95 transform -rotate-1">
            <CardContent className="pt-5 pb-4">
              {/* Speech bubble tail */}
              <div className="absolute -top-3 right-12 w-6 h-6 bg-white border-r-2 border-t-2 border-primary/30 transform rotate-45" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  👩‍⚕️
                </div>
                <div>
                  <p className="font-syne text-sm font-semibold text-primary mb-1">Марія:</p>
                  <p className="font-manrope text-base md:text-lg text-gray-700 italic leading-relaxed">
                    &ldquo;Тепер я точно знаю, скільки заробляю!&rdquo;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual order indicator */}
        <div className="flex justify-center gap-3 pt-2 animate-fade-in delay-900 fill-backwards">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            Структуровано
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-amber-500/60" />
            Зрозуміло
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            Прибутково
          </span>
        </div>
      </div>
    </div>
  )
}
