'use client'

/**
 * Пример интерактивного слайда
 * Паттерн переключения с управлением состоянием
 *
 * Используйте это как шаблон для создания интерактивных слайдов сравнения
 */

import { useState } from 'react'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap, Settings } from 'lucide-react'

// Определите содержимое для сравнения
const modes = {
  before: {
    title: 'До',
    icon: Settings,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    items: [
      'Традиционный подход пункт 1',
      'Традиционный подход пункт 2',
      'Традиционный подход пункт 3',
      'Традиционный подход пункт 4'
    ]
  },
  after: {
    title: 'После',
    icon: Zap,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
    items: [
      'Современный подход пункт 1',
      'Современный подход пункт 2',
      'Современный подход пункт 3',
      'Современный подход пункт 4'
    ]
  }
}

export default function ExampleInteractiveSlide() {
  const [activeMode, setActiveMode] = useState<'before' | 'after'>('before')
  const currentMode = modes[activeMode]
  const Icon = currentMode.icon

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <GeometricPattern type="grid" className="opacity-10" />
      <GrainOverlay opacity={0.2} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-tight">
            ДО <span className="text-primary">ПРОТИВ</span> ПОСЛЕ
          </h2>
          <p className="font-syne text-xl text-muted-foreground">
            Нажмите, чтобы переключить между видами
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            variant={activeMode === 'before' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setActiveMode('before')}
            className="min-w-32"
          >
            <Settings className="h-4 w-4 mr-2" />
            До
          </Button>
          <Button
            variant={activeMode === 'after' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setActiveMode('after')}
            className="min-w-32"
          >
            <Zap className="h-4 w-4 mr-2" />
            После
          </Button>
        </div>

        {/* Content Card */}
        <Card className={`p-8 transition-all duration-500 ${currentMode.bgColor} ${currentMode.borderColor} border-2`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl ${currentMode.bgColor}`}>
              <Icon className={`h-8 w-8 ${currentMode.color}`} />
            </div>
            <h3 className={`font-bebas text-4xl ${currentMode.color}`}>
              {currentMode.title}
            </h3>
          </div>

          <ul className="space-y-4">
            {currentMode.items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArrowRight className={`h-5 w-5 ${currentMode.color} flex-shrink-0`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Hint */}
        <p className="text-center text-sm text-muted-foreground/60">
          Совет: Используйте этот паттерн для любого контента до/после, сравнения или переключения
        </p>
      </div>
    </div>
  )
}
