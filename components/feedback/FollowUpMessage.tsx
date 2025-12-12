'use client'

/**
 * FollowUpMessage Component
 * Displays an AI-generated follow-up question with styling
 */

import { Bot, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FollowUpMessageProps {
  /** Message content */
  content: string
  /** Whether this is the first follow-up */
  isFirst?: boolean
  /** Optional className for the container */
  className?: string
}

/**
 * FollowUpMessage component
 * Displays an AI follow-up question with distinctive styling
 */
export default function FollowUpMessage({
  content,
  isFirst = false,
  className,
}: FollowUpMessageProps) {
  return (
    <div className={cn('animate-fade-in', className)}>
      {/* Header with AI indicator */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
          <Bot className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="font-syne text-xs font-medium text-primary">
            AI Follow-up
          </span>
        </div>
        {isFirst && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            <span>Based on your response</span>
          </div>
        )}
      </div>

      {/* Question content */}
      <div className="relative pl-4 border-l-2 border-primary/40">
        <p className="font-manrope text-base md:text-lg text-foreground leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  )
}
