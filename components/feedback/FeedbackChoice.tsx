'use client'

/**
 * FeedbackChoice Component
 * Multiple choice option selection with optional "Other" text input
 */

import { Check, MessageSquarePlus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import type { FeedbackChoiceOption } from '@/types/feedback-conversation'

interface FeedbackChoiceProps {
  /** Available options */
  options: FeedbackChoiceOption[]
  /** Currently selected option ID */
  selectedId?: string
  /** "Other" text input value */
  otherText?: string
  /** Whether to show "Other" option with text input */
  showOther?: boolean
  /** Callback when selection changes */
  onSelect: (optionId: string) => void
  /** Callback when "Other" text changes */
  onOtherTextChange?: (text: string) => void
  /** Whether the component is disabled */
  disabled?: boolean
  /** Optional className for the container */
  className?: string
}

/**
 * FeedbackChoice component
 * Displays selectable option cards with an optional "Other" option
 */
export default function FeedbackChoice({
  options,
  selectedId,
  otherText = '',
  showOther = true,
  onSelect,
  onOtherTextChange,
  disabled = false,
  className,
}: FeedbackChoiceProps) {
  const isOtherSelected = selectedId === 'other'

  return (
    <div className={cn('space-y-3', className)}>
      {/* Option cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => {
          const isSelected = selectedId === option.id

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              disabled={disabled}
              className={cn(
                'relative flex flex-col items-start p-4 rounded-lg border-2 transition-all duration-200',
                'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                isSelected
                  ? 'border-primary bg-primary/5 shadow-glow'
                  : 'border-border/50 bg-muted/10 hover:border-primary/40 hover:bg-muted/20',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
              aria-pressed={isSelected}
            >
              {/* Selection indicator */}
              <div
                className={cn(
                  'absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all',
                  isSelected
                    ? 'border-primary bg-primary'
                    : 'border-muted-foreground/30'
                )}
              >
                {isSelected && (
                  <Check className="h-3 w-3 text-white" aria-hidden="true" />
                )}
              </div>

              {/* Label */}
              <span className="font-syne font-semibold text-base text-foreground pr-8">
                {option.label}
              </span>

              {/* Description */}
              {option.description && (
                <span className="font-manrope text-sm text-muted-foreground mt-1">
                  {option.description}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* "Other" option */}
      {showOther && (
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => onSelect('other')}
            disabled={disabled}
            className={cn(
              'w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200',
              'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              isOtherSelected
                ? 'border-primary bg-primary/5 shadow-glow'
                : 'border-border/50 bg-muted/10 hover:border-primary/40 hover:bg-muted/20',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
            aria-pressed={isOtherSelected}
          >
            {/* Icon */}
            <MessageSquarePlus
              className={cn(
                'h-5 w-5 flex-shrink-0',
                isOtherSelected ? 'text-primary' : 'text-muted-foreground'
              )}
              aria-hidden="true"
            />

            {/* Label */}
            <span className="font-syne font-semibold text-base text-foreground">
              Other
            </span>

            {/* Selection indicator */}
            <div
              className={cn(
                'ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all',
                isOtherSelected
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground/30'
              )}
            >
              {isOtherSelected && (
                <Check className="h-3 w-3 text-white" aria-hidden="true" />
              )}
            </div>
          </button>

          {/* Other text input - shown when "Other" is selected */}
          {isOtherSelected && (
            <div className="animate-fade-in">
              <Input
                type="text"
                placeholder="Please specify..."
                value={otherText}
                onChange={(e) => onOtherTextChange?.(e.target.value)}
                disabled={disabled}
                className="bg-background/50 border-primary/30 focus:border-primary"
                aria-label="Specify other option"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
