'use client'

/**
 * Example Interactive Slide
 * Toggle pattern with state management
 *
 * Use this as a template for creating interactive comparison slides
 */

import { useState } from 'react'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap, Settings } from 'lucide-react'

// Define your comparison content
const modes = {
  before: {
    title: 'Before',
    icon: Settings,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    items: [
      'Traditional approach item 1',
      'Traditional approach item 2',
      'Traditional approach item 3',
      'Traditional approach item 4'
    ]
  },
  after: {
    title: 'After',
    icon: Zap,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
    items: [
      'Modern approach item 1',
      'Modern approach item 2',
      'Modern approach item 3',
      'Modern approach item 4'
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
            BEFORE <span className="text-primary">VS</span> AFTER
          </h2>
          <p className="font-syne text-xl text-muted-foreground">
            Click to toggle between views
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
            Before
          </Button>
          <Button
            variant={activeMode === 'after' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setActiveMode('after')}
            className="min-w-32"
          >
            <Zap className="h-4 w-4 mr-2" />
            After
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
          Tip: Use this pattern for any before/after, comparison, or toggle content
        </p>
      </div>
    </div>
  )
}
