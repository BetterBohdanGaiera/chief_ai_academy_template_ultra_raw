'use client'

/**
 * Пример Титульного Слайда
 * Шаблон заголовка-героя с анимированным фоном
 *
 * Используйте это как шаблон для создания титульных слайдов
 */

import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern, GradientMesh } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'

export default function ExampleTitleSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-20" />
      <GrainOverlay opacity={0.3} />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-8">
        {/* Badge */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-1">
            <Sparkles className="h-5 w-5 mr-2" aria-hidden="true" />
            Пример Модуля
          </Badge>
        </div>

        {/* Title */}
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
          ВАШ ЗАГОЛОВОК
          <br />
          <span className="text-primary animate-glow-pulse">ЗДЕСЬ</span>
        </h1>

        {/* Subtitle */}
        <p className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto animate-slide-in-up delay-400 fill-backwards">
          Добавьте ваш подзаголовок или описание здесь
        </p>
      </div>
    </div>
  )
}
