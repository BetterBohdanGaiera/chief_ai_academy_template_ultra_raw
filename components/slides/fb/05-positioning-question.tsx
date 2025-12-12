'use client'

/**
 * Slide 05: Positioning Question
 *
 * Pattern: FeedbackChoice (artifacts-builder)
 * Purpose: Gather stakeholder feedback on strategic positioning direction for TechFlow
 *
 * Design Notes:
 * - 3 large option cards with icons
 * - Selection state: scale-105, border-primary, shadow-glow
 * - Optional "Other" text field
 * - Background: crossroads/paths image at 15% opacity
 */

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Sparkles, Target, Layers, Check, MessageSquarePlus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFeedback } from '@/contexts/FeedbackContext'

interface PositioningOption {
  id: string
  label: string
  shortDescription: string
  supportingContext: string
  icon: typeof Sparkles
  color: string
}

const positioningOptions: PositioningOption[] = [
  {
    id: 'ai-first',
    label: 'The AI-First PM Tool',
    shortDescription: 'Lead with FlowAI as the core differentiator',
    supportingContext: 'Win rates: 61% vs ClickUp, 52% vs monday. Sales: "AI demo is where we close deals"',
    icon: Sparkles,
    color: 'border-primary',
  },
  {
    id: 'mid-market',
    label: 'The Mid-Market Sweet Spot',
    shortDescription: 'Right-sized for growing companies',
    supportingContext: 'Not as complex as Wrike/Asana Enterprise, not as basic as monday/ClickUp',
    icon: Target,
    color: 'border-amber-500',
  },
  {
    id: 'unified-platform',
    label: 'The Unified Platform',
    shortDescription: 'One tool that does all three well',
    supportingContext: 'PM + time tracking + resource planning. Eliminates tool juggling',
    icon: Layers,
    color: 'border-emerald-500',
  },
]

export default function PositioningQuestion() {
  const { state, setPositioning } = useFeedback()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showSavedIndicator, setShowSavedIndicator] = useState(false)

  // Use context state for selections
  const selectedId = state.positioning
  const otherText = state.positioningOther
  const isOtherSelected = selectedId === 'other'

  const showSaved = () => {
    setShowSavedIndicator(true)
    setTimeout(() => setShowSavedIndicator(false), 2000)
  }

  const handleSelect = (id: string) => {
    setPositioning(id)
    if (id !== 'other') {
      setExpandedId(expandedId === id ? null : id)
    }
    showSaved()
  }

  const handleOtherTextChange = (text: string) => {
    setPositioning('other', text)
  }

  const handleOtherKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      showSaved()
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Layer: Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-10" />

      {/* Background Layer: Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="animate-slide-in-down">
            Question 1 of 3
          </Badge>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground animate-fade-in delay-200 fill-backwards">
            Strategic <span className="text-primary">Positioning</span>
          </h2>

          <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Looking at the competitive landscape, TechFlow could position as one of three directions.
            <span className="text-foreground font-medium"> Which resonates most with your vision?</span>
          </p>
        </div>

        {/* Option Cards - 3 column grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {positioningOptions.map((option, idx) => {
            const Icon = option.icon
            const isSelected = selectedId === option.id
            const isExpanded = expandedId === option.id

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={cn(
                  'group relative text-left transition-all duration-300',
                  'animate-fade-in fill-backwards',
                )}
                style={{ animationDelay: `${idx * 100 + 600}ms` }}
                aria-pressed={isSelected}
              >
                <Card
                  className={cn(
                    'h-full transition-all duration-300',
                    isSelected
                      ? `scale-105 ${option.color} border-2 shadow-glow bg-primary/5`
                      : 'border-border/50 hover:border-primary/40 hover:scale-102 bg-muted/10',
                  )}
                >
                  <CardContent className="pt-6 space-y-4">
                    {/* Selection indicator */}
                    <div
                      className={cn(
                        'absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
                        isSelected
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground/30 group-hover:border-primary/50'
                      )}
                    >
                      {isSelected && (
                        <Check className="h-4 w-4 text-white" aria-hidden="true" />
                      )}
                    </div>

                    {/* Icon */}
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                      isSelected ? 'bg-primary/10' : 'bg-muted/30'
                    )}>
                      <Icon className={cn(
                        'w-6 h-6 transition-colors',
                        isSelected ? 'text-primary' : 'text-foreground/60'
                      )} />
                    </div>

                    {/* Label */}
                    <h3 className="font-syne font-bold text-lg text-foreground pr-8">
                      {option.label}
                    </h3>

                    {/* Short Description */}
                    <p className="font-manrope text-sm text-muted-foreground">
                      {option.shortDescription}
                    </p>

                    {/* Expanded Supporting Context */}
                    {isExpanded && isSelected && (
                      <div className="pt-3 border-t border-border/50 animate-fade-in">
                        <p className="text-xs font-semibold text-primary mb-1">SUPPORTING CONTEXT:</p>
                        <p className="font-manrope text-sm text-foreground/80">
                          {option.supportingContext}
                        </p>
                      </div>
                    )}

                    {/* Click to expand hint */}
                    {isSelected && !isExpanded && (
                      <p className="text-xs text-muted-foreground italic animate-fade-in">
                        Click again to see supporting context
                      </p>
                    )}
                  </CardContent>
                </Card>
              </button>
            )
          })}
        </div>

        {/* "Other" Option */}
        <div className="space-y-3 animate-fade-in delay-1000 fill-backwards">
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
              Other positioning suggestion
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
                placeholder="Describe your alternative positioning..."
                value={otherText}
                onChange={(e) => handleOtherTextChange(e.target.value)}
                onKeyDown={handleOtherKeyDown}
                className="bg-background/50 border-primary/30 focus:border-primary text-base"
                aria-label="Describe your alternative positioning"
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

        {/* Helper text */}
        <p className="text-center text-sm text-muted-foreground animate-fade-in delay-1200 fill-backwards">
          Each positioning has trade-offs. Your selection will help shape the Q1 2025 campaign strategy.
        </p>
      </div>
    </section>
  )
}
