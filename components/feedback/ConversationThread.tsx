'use client'

/**
 * ConversationThread Component
 * Displays the conversation history between user and AI
 */

import { useEffect, useRef } from 'react'
import { User, Bot, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ConversationMessage } from '@/types/feedback-conversation'

interface ConversationThreadProps {
  /** Messages to display */
  messages: ConversationMessage[]
  /** Whether a new message is being generated */
  isLoading?: boolean
  /** Optional className for the container */
  className?: string
}

/**
 * Format timestamp for display
 */
function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

/**
 * Individual message bubble
 */
function MessageBubble({ message }: { message: ConversationMessage }) {
  const isUser = message.role === 'user'

  return (
    <div
      className={cn(
        'flex gap-3 animate-fade-in',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
          isUser ? 'bg-primary/20' : 'bg-muted/50'
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-primary" aria-hidden="true" />
        ) : (
          <Bot className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        )}
      </div>

      {/* Message content */}
      <div
        className={cn(
          'flex flex-col max-w-[80%]',
          isUser ? 'items-end' : 'items-start'
        )}
      >
        <div
          className={cn(
            'rounded-2xl px-4 py-3 shadow-sm',
            isUser
              ? 'bg-primary/10 border border-primary/30 text-foreground'
              : 'bg-muted/30 border border-border text-foreground'
          )}
        >
          <p className="font-manrope text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
        <span className="text-xs text-muted-foreground/60 mt-1 px-1">
          {formatTimestamp(message.timestamp)}
        </span>
      </div>
    </div>
  )
}

/**
 * Loading indicator for pending AI response
 */
function LoadingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-muted/50">
        <Bot className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </div>

      {/* Loading bubble */}
      <div className="flex flex-col items-start">
        <div className="rounded-2xl px-4 py-3 bg-muted/30 border border-border shadow-sm">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
            <span className="font-manrope text-sm text-muted-foreground">
              Thinking...
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * ConversationThread component
 * Displays the message history with auto-scroll to latest
 */
export default function ConversationThread({
  messages,
  isLoading = false,
  className,
}: ConversationThreadProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, isLoading])

  if (messages.length === 0 && !isLoading) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'space-y-4 max-h-[400px] overflow-y-auto pr-2',
        'scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent',
        className
      )}
      role="log"
      aria-label="Conversation history"
      aria-live="polite"
    >
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading && <LoadingIndicator />}
    </div>
  )
}
