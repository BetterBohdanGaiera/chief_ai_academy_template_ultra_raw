'use client'

/**
 * ContextPanel Component
 * Displays question context with collapsible sections
 */

import { useState } from 'react'
import { ChevronDown, BookOpen, Target, Lightbulb, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { QuestionContext } from '@/lib/agent-sdk/types'

interface ContextPanelProps {
  /** Context for the current question */
  context: QuestionContext
  /** Topic badge text */
  topicBadge?: string
  /** Whether to start expanded */
  defaultExpanded?: boolean
  /** Optional className */
  className?: string
}

export default function ContextPanel({
  context,
  topicBadge,
  defaultExpanded = false,
  className,
}: ContextPanelProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={cn('rounded-lg overflow-hidden', className)}>
      {/* Header with toggle */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'w-full flex items-center justify-between p-4 text-left transition-colors',
          'bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isExpanded && 'rounded-b-none border-b-0'
        )}
        aria-expanded={isExpanded}
        aria-controls="context-content"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-primary/10">
            <Info className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <div>
            {topicBadge && (
              <span className="inline-block px-2 py-0.5 mb-1 text-xs font-semibold uppercase tracking-wide bg-primary/10 text-primary rounded">
                {topicBadge}
              </span>
            )}
            <h3 className="font-syne font-semibold text-foreground">
              {context.topic}
            </h3>
          </div>
        </div>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-muted-foreground transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {/* Expandable content */}
      <div
        id="context-content"
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out',
          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isExpanded}
      >
        <div className="p-4 pt-3 space-y-4 bg-primary/5 border border-t-0 border-primary/20 rounded-b-lg">
          {/* Background */}
          <div className="flex gap-3">
            <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h4 className="font-syne font-semibold text-sm text-foreground/80 mb-1">
                Background
              </h4>
              <p className="font-manrope text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {context.background}
              </p>
            </div>
          </div>

          {/* Desired Outcome */}
          <div className="flex gap-3">
            <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h4 className="font-syne font-semibold text-sm text-foreground/80 mb-1">
                What We Want to Learn
              </h4>
              <p className="font-manrope text-sm text-muted-foreground leading-relaxed">
                {context.desiredOutcome}
              </p>
            </div>
          </div>

          {/* Clarifying Hints */}
          {context.clarifyingHints && context.clarifyingHints.length > 0 && (
            <div className="flex gap-3">
              <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="font-syne font-semibold text-sm text-foreground/80 mb-2">
                  Areas We May Explore
                </h4>
                <ul className="space-y-1">
                  {context.clarifyingHints.map((hint, index) => (
                    <li
                      key={index}
                      className="font-manrope text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span>{hint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
