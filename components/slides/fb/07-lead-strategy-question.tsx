'use client'

/**
 * Slide 07: Lead Strategy Question
 *
 * Pattern: Knowledge Test Poll variant (artifacts-builder)
 * Purpose: Gather feedback on campaign optimization strategy
 *
 * Design Notes:
 * - 4 option cards in 2x2 grid (desktop) / vertical stack (mobile)
 * - Each card shows: strategy name, target MQLs, cost per lead
 * - Numbers emphasized with font-bebas text-4xl
 * - Background: funnel image at 15% opacity
 */

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import {
  Check,
  MessageSquarePlus,
  TrendingUp,
  Target,
  Award,
  Split,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFeedback } from '@/contexts/FeedbackContext'

interface LeadStrategy {
  id: string
  label: string
  description: string
  targetMQLs: string
  costPerLead: string
  icon: typeof TrendingUp
  color: string
  bgColor: string
  recommended?: boolean
}

const leadStrategies: LeadStrategy[] = [
  {
    id: 'volume',
    label: 'Volume Focus',
    description: 'Push for 700+ leads at lower quality',
    targetMQLs: '700+',
    costPerLead: '$257',
    icon: TrendingUp,
    color: 'text-amber-600',
    bgColor: 'bg-amber-500/10 border-amber-500/30',
  },
  {
    id: 'balanced',
    label: 'Balanced (Current)',
    description: 'Hit 500 MQL target at reasonable quality',
    targetMQLs: '500',
    costPerLead: '$360',
    icon: Target,
    color: 'text-primary',
    bgColor: 'bg-primary/10 border-primary/30',
    recommended: true,
  },
  {
    id: 'quality',
    label: 'Quality Focus',
    description: 'Target 300 high-intent demo requests only',
    targetMQLs: '300',
    costPerLead: '$600',
    icon: Award,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10 border-emerald-500/30',
  },
  {
    id: 'split',
    label: 'Split Strategy',
    description: 'Balance brand awareness + performance',
    targetMQLs: 'Varies',
    costPerLead: 'Mixed',
    icon: Split,
    color: 'text-violet-600',
    bgColor: 'bg-violet-500/10 border-violet-500/30',
  },
]

export default function LeadStrategyQuestion() {
  const { state, setLeadStrategy } = useFeedback()
  const [showSavedIndicator, setShowSavedIndicator] = useState(false)

  // Use context state for selections
  const selectedId = state.leadStrategy
  const otherText = state.leadStrategyOther
  const isOtherSelected = selectedId === 'other'

  const showSaved = () => {
    setShowSavedIndicator(true)
    setTimeout(() => setShowSavedIndicator(false), 2000)
  }

  const handleSelect = (id: string) => {
    setLeadStrategy(id)
    showSaved()
  }

  const handleOtherTextChange = (text: string) => {
    setLeadStrategy('other', text)
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
      <GeometricPattern type="grid" className="opacity-8" />

      {/* Background Layer: Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="animate-slide-in-down">
            Question 3 of 3
          </Badge>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground animate-fade-in delay-200 fill-backwards">
            Lead <span className="text-primary">Strategy</span>
          </h2>

          <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            With <span className="text-foreground font-semibold">$180K</span> in media budget and a 500 MQL goal,
            we&apos;re looking at ~$360/MQL.
            <span className="text-foreground font-medium"> What matters more?</span>
          </p>
        </div>

        {/* Budget Context Card */}
        <Card className="border-border/50 bg-muted/20 animate-fade-in delay-500 fill-backwards">
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="text-center">
                <p className="font-bebas text-3xl md:text-4xl text-primary">$180K</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Media Budget</p>
              </div>
              <div className="text-center">
                <p className="font-bebas text-3xl md:text-4xl text-foreground">500</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">MQL Goal</p>
              </div>
              <div className="text-center">
                <p className="font-bebas text-3xl md:text-4xl text-foreground/70">$67</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Previous CPL</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy Cards - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {leadStrategies.map((strategy, idx) => {
            const Icon = strategy.icon
            const isSelected = selectedId === strategy.id

            return (
              <button
                key={strategy.id}
                type="button"
                onClick={() => handleSelect(strategy.id)}
                className={cn(
                  'group relative text-left transition-all duration-300',
                  'animate-fade-in fill-backwards',
                )}
                style={{ animationDelay: `${idx * 100 + 700}ms` }}
                aria-pressed={isSelected}
              >
                <Card
                  className={cn(
                    'h-full transition-all duration-300',
                    isSelected
                      ? 'scale-105 border-primary border-2 shadow-glow bg-primary/5'
                      : cn('hover:scale-102 hover:border-primary/40', strategy.bgColor),
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

                    {/* Recommended badge */}
                    {strategy.recommended && (
                      <Badge variant="outline" className="absolute top-4 left-4 text-xs border-primary/50 text-primary">
                        Current
                      </Badge>
                    )}

                    {/* Header with Icon */}
                    <div className="flex items-start gap-3 pt-2">
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
                        isSelected ? 'bg-primary/10' : 'bg-muted/30'
                      )}>
                        <Icon className={cn(
                          'w-5 h-5 transition-colors',
                          isSelected ? 'text-primary' : strategy.color
                        )} />
                      </div>
                      <div className="flex-1 pr-8">
                        <h3 className="font-syne font-bold text-lg text-foreground">
                          {strategy.label}
                        </h3>
                        <p className="font-manrope text-sm text-muted-foreground mt-1">
                          {strategy.description}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-6 pt-2">
                      <div>
                        <p className="font-bebas text-3xl md:text-4xl text-foreground">
                          {strategy.targetMQLs}
                        </p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          Target MQLs
                        </p>
                      </div>
                      <div>
                        <p className={cn(
                          'font-bebas text-3xl md:text-4xl',
                          strategy.costPerLead === '$257' ? 'text-amber-600' :
                          strategy.costPerLead === '$600' ? 'text-emerald-600' :
                          'text-foreground'
                        )}>
                          {strategy.costPerLead}
                        </p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          Per MQL
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </button>
            )
          })}
        </div>

        {/* "Other" Option */}
        <div className="space-y-3 animate-fade-in delay-1200 fill-backwards">
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
              Suggest a different approach
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
                placeholder="Describe your suggested lead strategy approach..."
                value={otherText}
                onChange={(e) => handleOtherTextChange(e.target.value)}
                onKeyDown={handleOtherKeyDown}
                className="bg-background/50 border-primary/30 focus:border-primary text-base"
                aria-label="Describe your suggested lead strategy approach"
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

        {/* Context note */}
        <p className="text-center text-sm text-muted-foreground animate-fade-in delay-1400 fill-backwards">
          Previous campaign achieved $67 CPL and $899 CAC. Q2 decisions will be based on Q1 performance.
        </p>
      </div>
    </section>
  )
}
