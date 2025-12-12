'use client'

/**
 * Question Slide - Reference Implementation
 *
 * This slide demonstrates the correct pattern for feedback collection:
 * - Uses context (useFeedback) instead of local useState
 * - Includes visual confirmation ("Selection saved")
 * - Includes Enter key handler for text input
 *
 * IMPORTANT: Replace local useState with context hook for state persistence!
 */

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Check, MessageSquarePlus, Sparkles, Target, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFeedback } from '@/contexts/FeedbackContext'

// Define your question options
interface QuestionOption {
  id: string
  label: string
  description: string
  icon: typeof Sparkles
  color: string
}

const questionOptions: QuestionOption[] = [
  {
    id: 'option-1',
    label: 'Option One',
    description: 'Description for option one',
    icon: Sparkles,
    color: 'border-primary',
  },
  {
    id: 'option-2',
    label: 'Option Two',
    description: 'Description for option two',
    icon: Target,
    color: 'border-amber-500',
  },
  {
    id: 'option-3',
    label: 'Option Three',
    description: 'Description for option three',
    icon: Layers,
    color: 'border-emerald-500',
  },
]

export default function QuestionSlide() {
  // ✅ CORRECT: Use context hook for state persistence
  const { state, setQuestion1 } = useFeedback()

  // Local state only for UI-only concerns (not user selections)
  const [showSavedIndicator, setShowSavedIndicator] = useState(false)

  // Derive values from context state
  const selectedId = state.question1
  const otherText = state.question1Other
  const isOtherSelected = selectedId === 'other'

  // Show "Selection saved" indicator briefly
  const showSaved = () => {
    setShowSavedIndicator(true)
    setTimeout(() => setShowSavedIndicator(false), 2000)
  }

  // Handle selection - updates context, shows confirmation
  const handleSelect = (id: string) => {
    setQuestion1(id)
    showSaved()
  }

  // Handle "Other" text change
  const handleOtherTextChange = (text: string) => {
    setQuestion1('other', text)
  }

  // Handle Enter key in text input
  const handleOtherKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      showSaved()
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Layers */}
      <GeometricPattern type="dots" className="opacity-10" />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="animate-slide-in-down">
            Question 1 of 3
          </Badge>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground animate-fade-in delay-200 fill-backwards">
            Your <span className="text-primary">Question</span> Here
          </h2>

          <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Question description and context.
            <span className="text-foreground font-medium"> What&apos;s your preference?</span>
          </p>
        </div>

        {/* Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {questionOptions.map((option, idx) => {
            const Icon = option.icon
            const isSelected = selectedId === option.id

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

                    {/* Description */}
                    <p className="font-manrope text-sm text-muted-foreground">
                      {option.description}
                    </p>
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
              Other suggestion
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

          {/* Other text input - shown when "Other" is selected */}
          {isOtherSelected && (
            <div className="animate-fade-in">
              <Input
                type="text"
                placeholder="Describe your alternative..."
                value={otherText}
                onChange={(e) => handleOtherTextChange(e.target.value)}
                onKeyDown={handleOtherKeyDown}
                className="bg-background/50 border-primary/30 focus:border-primary text-base"
                aria-label="Describe your alternative"
              />
              <p className="text-xs text-muted-foreground mt-1">Press Enter to confirm</p>
            </div>
          )}
        </div>

        {/* Saved Indicator - shows briefly after selection */}
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
          Your selection will be saved automatically.
        </p>
      </div>
    </section>
  )
}

/**
 * ANTI-PATTERN - DO NOT USE:
 *
 * ❌ WRONG (state lost on navigation):
 * ```tsx
 * export default function QuestionSlide() {
 *   const [selectedId, setSelectedId] = useState<string | null>(null)
 *   const [otherText, setOtherText] = useState('')
 *   // This state is lost when user navigates away!
 * }
 * ```
 *
 * ✅ CORRECT (state persists):
 * ```tsx
 * export default function QuestionSlide() {
 *   const { state, setQuestion1 } = useFeedback()
 *   const selectedId = state.question1
 *   const otherText = state.question1Other
 *   // State persists because context lives in module page
 * }
 * ```
 */
