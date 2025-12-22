"use client"

/**
 * Reddit Marketing Research - Title Slide
 *
 * Pattern: One-Screen Simplicity
 * Skill: artifacts-builder
 *
 * Design Decisions:
 * - Full-screen centered layout for maximum impact
 * - Staggered animations guide attention (badge -> title -> subtitle -> metadata)
 * - Electric orange (#FF4D00) accent on key word for emphasis
 * - Background image at 15% opacity for atmospheric depth
 * - Scope indicators presented as visual badges
 */

import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { Search, Wrench, DollarSign, Target } from "lucide-react"
import Image from "next/image"

export default function RedditTitle() {
  const scopeIndicators = [
    { icon: Search, label: "Существующие Инструменты" },
    { icon: Wrench, label: "Индивидуальные Решения" },
    { icon: DollarSign, label: "Экономика" },
    { icon: Target, label: "Стратегия" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365055044-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern Layer */}
      <GeometricPattern type="dots" className="opacity-20" />

      {/* Grain Overlay Layer */}
      <GrainOverlay opacity={0.15} />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl w-full space-y-10 lg:space-y-16 text-center">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-2 px-6 py-3 text-sm">
            Исследование 2025
          </Badge>
        </div>

        {/* Main Title */}
        <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          Reddit-Маркетинг:
          <br />
          Исследование <span className="text-primary">Генерации Лидов</span>
        </h1>

        {/* Subtitle */}
        <p className="font-syne font-semibold text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-4xl mx-auto animate-slide-in-up delay-400 fill-backwards">
          Комплексный Анализ Сервисов Комментирования Reddit для Привлечения Клиентов
        </p>

        {/* Scope Indicators */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4 animate-fade-in delay-600 fill-backwards">
          {scopeIndicators.map((scope, idx) => {
            const Icon = scope.icon
            return (
              <div
                key={scope.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/50 text-foreground/70 hover:border-primary/50 hover:text-primary transition-all duration-300"
                style={{ animationDelay: `${idx * 100 + 700}ms` }}
              >
                <Icon className="w-4 h-4" />
                <span className="font-manrope text-sm font-medium">{scope.label}</span>
              </div>
            )
          })}
        </div>

        {/* Metadata */}
        <div className="pt-8 space-y-2 text-foreground/50 font-manrope animate-fade-in delay-800 fill-backwards">
          <p className="text-base md:text-lg">Инициатива Исследования Генерации Лидов</p>
        </div>
      </div>
    </section>
  )
}
