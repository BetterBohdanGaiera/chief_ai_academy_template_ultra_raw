'use client'

/**
 * AgentConversation Component
 * Displays the conversation thread with message bubbles
 */

import { useRef, useEffect } from 'react'
import { User, Bot, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ConversationMessage } from '@/lib/agent-sdk/types'

interface AgentConversationProps {
  /** Conversation messages */
  messages: ConversationMessage[]
  /** Whether AI is currently typing */
  isTyping?: boolean
  /** Optional className */
  className?: string
}

/**
 * Message bubble component
 */
function MessageBubble({ message }: { message: ConversationMessage }) {
  const isUser = message.role === 'user'

  return (
    <div
      className={cn(
        'flex gap-3 animate-in slide-in-from-bottom-2 duration-300',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
          isUser ? 'bg-primary/10' : 'bg-muted'
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
          'flex-1 max-w-[80%] rounded-lg px-4 py-3',
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-none'
            : 'bg-muted text-foreground rounded-bl-none'
        )}
      >
        <p className="font-manrope text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
        <span className="block mt-1 text-xs opacity-60">
          {formatTimestamp(message.timestamp)}
        </span>
      </div>
    </div>
  )
}

/**
 * Typing indicator component
 */
function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-in fade-in duration-300">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-muted">
        <Bot className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="bg-muted rounded-lg rounded-bl-none px-4 py-3">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}

/**
 * Format timestamp for display
 */
function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

/**
 * AgentConversation component
 * Displays conversation messages with auto-scroll
 */
export default function AgentConversation({
  messages,
  isTyping = false,
  className,
}: AgentConversationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages, isTyping])

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex flex-col gap-4 p-4 overflow-y-auto max-h-[400px] min-h-[200px]',
        'scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent',
        className
      )}
      role="log"
      aria-live="polite"
      aria-label="Conversation messages"
    >
      {messages.length === 0 && !isTyping && (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <p className="font-manrope text-sm">
            Start the conversation by typing your response below.
          </p>
        </div>
      )}

      {messages.map((message, index) => (
        <MessageBubble key={message.id || index} message={message} />
      ))}

      {isTyping && <TypingIndicator />}
    </div>
  )
}
