'use client'

/**
 * Slide 06: Brand Tone Question
 *
 * Pattern: Interactive Spectrum (custom) + FeedbackChoice hybrid
 * Purpose: Gather feedback on brand voice positioning relative to competitors
 *
 * Design Notes:
 * - Horizontal spectrum from "Playful" to "Professional"
 * - 5 competitor positions as clickable markers
 * - Hover tooltips with tone descriptions
 * - Background: spectrum/soundwave image at 12% opacity
 */

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Check, MessageSquarePlus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFeedback } from '@/contexts/FeedbackContext'

interface BrandPosition {
  id: string
  brand: string
  tone: string
  description: string
  position: number // 0-100 percentage along spectrum
  color: string
  bgColor: string
}

const brandPositions: BrandPosition[] = [
  {
    id: 'monday',
    brand: 'monday',
    tone: 'Playful',
    description: 'Playful, almost childish sometimes. Bright colors, energetic.',
    position: 10,
    color: 'bg-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    id: 'clickup',
    brand: 'ClickUp',
    tone: 'Scrappy',
    description: 'Scrappy, aggressive. Bold marketing, challenger mindset.',
    position: 30,
    color: 'bg-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    id: 'notion',
    brand: 'Notion',
    tone: 'Minimalist',
    description: 'Minimalist, aesthetic. Clean, refined, design-forward.',
    position: 50,
    color: 'bg-neutral-800',
    bgColor: 'bg-neutral-200',
  },
  {
    id: 'techflow',
    brand: 'TechFlow',
    tone: 'Smart Friend',
    description: 'Smart friend who knows what they\'re talking about. Confident but not arrogant, direct.',
    position: 65,
    color: 'bg-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 'asana',
    brand: 'Asana',
    tone: 'Professional',
    description: 'Professional, almost boring. Corporate, trustworthy, safe.',
    position: 90,
    color: 'bg-blue-600',
    bgColor: 'bg-blue-600/10',
  },
]

export default function BrandToneQuestion() {
  const { state, setBrandTone } = useFeedback()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [showSavedIndicator, setShowSavedIndicator] = useState(false)

  // Use context state for selections
  const selectedId = state.brandTone
  const otherText = state.brandToneOther
  const isOtherSelected = selectedId === 'other'

  const showSaved = () => {
    setShowSavedIndicator(true)
    setTimeout(() => setShowSavedIndicator(false), 2000)
  }

  const handleSelect = (id: string) => {
    setBrandTone(id)
    showSaved()
  }

  const handleOtherTextChange = (text: string) => {
    setBrandTone('other', text)
  }

  const handleOtherKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      showSaved()
    }
  }

  const activePosition = brandPositions.find(p => p.id === (hoveredId || selectedId))

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Layer: Geometric Pattern */}
      <GeometricPattern type="diagonal" className="opacity-8" />

      {/* Background Layer: Grain Overlay */}
      <GrainOverlay opacity={0.12} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="animate-slide-in-down">
            Question 2 of 3
          </Badge>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground animate-fade-in delay-200 fill-backwards">
            Brand <span className="text-primary">Tone</span>
          </h2>

          <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            TechFlow is the &ldquo;smart friend who actually knows what they&apos;re talking about.&rdquo;
            <span className="text-foreground font-medium"> Where should we position our campaign tone?</span>
          </p>
        </div>

        {/* Spectrum Visualization */}
        <div className="space-y-6 animate-fade-in delay-600 fill-backwards">
          {/* Spectrum Labels */}
          <div className="flex justify-between text-sm font-syne font-semibold">
            <span className="text-pink-500">PLAYFUL</span>
            <span className="text-blue-600">PROFESSIONAL</span>
          </div>

          {/* Spectrum Bar */}
          <div className="relative h-4 bg-gradient-to-r from-pink-200 via-neutral-200 to-blue-200 rounded-full overflow-visible">
            {/* Animated draw-in effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 via-neutral-400/30 to-blue-400/30 rounded-full" />

            {/* Position Markers */}
            {brandPositions.map((position, idx) => {
              const isSelected = selectedId === position.id
              const isHovered = hoveredId === position.id

              return (
                <button
                  key={position.id}
                  type="button"
                  onClick={() => handleSelect(position.id)}
                  onMouseEnter={() => setHoveredId(position.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={cn(
                    'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full',
                    'animate-scale-in fill-backwards',
                  )}
                  style={{
                    left: `${position.position}%`,
                    animationDelay: `${idx * 100 + 800}ms`,
                  }}
                  aria-label={`Select ${position.brand} tone: ${position.tone}`}
                  aria-pressed={isSelected}
                >
                  {/* Marker Circle */}
                  <div
                    className={cn(
                      'w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300',
                      position.color,
                      isSelected || isHovered
                        ? 'scale-125 shadow-lg ring-4 ring-white'
                        : 'scale-100 hover:scale-110',
                    )}
                  >
                    {isSelected && (
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    )}
                  </div>

                  {/* Brand Label */}
                  <span
                    className={cn(
                      'absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap',
                      'font-syne text-xs md:text-sm font-semibold transition-all duration-300',
                      isSelected || isHovered ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {position.brand}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Spacer for labels */}
          <div className="h-6" />
        </div>

        {/* Detail Panel */}
        <Card
          className={cn(
            'transition-all duration-300 animate-fade-in delay-1200 fill-backwards',
            activePosition ? 'opacity-100' : 'opacity-50',
          )}
        >
          <CardContent className="pt-6">
            {activePosition ? (
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Tone Badge */}
                <div className={cn(
                  'px-4 py-2 rounded-lg font-syne font-bold text-lg',
                  activePosition.bgColor,
                  activePosition.id === 'notion' ? 'text-foreground' : '',
                )}>
                  {activePosition.tone}
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="font-manrope text-sm md:text-base text-foreground/80">
                    {activePosition.description}
                  </p>
                </div>

                {/* Selection indicator for selected item */}
                {selectedId === activePosition.id && (
                  <div className="flex items-center gap-2 text-primary">
                    <Check className="h-5 w-5" />
                    <span className="font-syne font-semibold text-sm">Selected</span>
                  </div>
                )}
              </div>
            ) : (
              <p className="font-manrope text-muted-foreground text-center">
                Click or hover on a marker to see tone details
              </p>
            )}
          </CardContent>
        </Card>

        {/* Current TechFlow position note */}
        <div className="text-center animate-fade-in delay-1400 fill-backwards">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Current Position:</span> TechFlow is positioned as the &ldquo;Smart Friend&rdquo;
            {' '}&mdash; confident but not arrogant, direct without being cold.
          </p>
        </div>

        {/* "Other" Option */}
        <div className="space-y-3 animate-fade-in delay-1600 fill-backwards">
          <button
            type="button"
            onClick={() => handleSelect('other')}
            className={cn(
              'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300',
              'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              isOtherSelected
                ? 'border-primary bg-primary/5 shadow-glow'
                : 'border-border/50 bg-muted/10 hover:border-primary/40 hover:bg-muted/20'
            )}
            aria-pressed={isOtherSelected}
          >
            <MessageSquarePlus
              className={cn(
                'h-6 w-6 flex-shrink-0 transition-colors',
                isOtherSelected ? 'text-primary' : 'text-muted-foreground'
              )}
              aria-hidden="true"
            />
            <span className="font-syne font-semibold text-base text-foreground">
              Suggest a different tone positioning
            </span>
            <div
              className={cn(
                'ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
                isOtherSelected
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground/30'
              )}
            >
              {isOtherSelected && (
                <Check className="h-4 w-4 text-white" aria-hidden="true" />
              )}
            </div>
          </button>

          {/* Other text input */}
          {isOtherSelected && (
            <div className="animate-fade-in">
              <Input
                type="text"
                placeholder="Describe your suggested tone positioning..."
                value={otherText}
                onChange={(e) => handleOtherTextChange(e.target.value)}
                onKeyDown={handleOtherKeyDown}
                className="bg-background/50 border-primary/30 focus:border-primary text-base"
                aria-label="Describe your suggested tone positioning"
              />
              <p className="text-xs text-muted-foreground mt-1">Press Enter to confirm</p>
            </div>
          )}
        </div>

        {/* Saved Indicator */}
        {showSavedIndicator && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg">
              <Check className="h-4 w-4" />
              <span className="font-syne text-sm font-semibold">Selection saved</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
