'use client'

/**
 * AgentForm Component
 * Main container for AI-powered conversational forms
 */

import { useState, useCallback, useEffect } from 'react'
import { Send, Loader2, ChevronRight, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ContextPanel from './ContextPanel'
import AgentConversation from './AgentConversation'
import type { FormDefinition, QuestionWithContext, ConversationMessage, AgentSession } from '@/lib/agent-sdk/types'
import {
  sendAgentMessage,
  type AgentConversationResponse,
  type QuestionContext,
} from '@/lib/feedback-api'
import {
  createSession,
  getSession,
  saveSession,
  addMessage,
  saveAnswer,
  moveToNextQuestion,
  completeSession,
} from '@/lib/agent-sdk/session-store'

interface AgentFormProps {
  /** Form definition to use */
  form: FormDefinition
  /** Callback when form is completed */
  onComplete?: (session: AgentSession) => void
  /** Callback on error */
  onError?: (error: string) => void
  /** Optional className */
  className?: string
}

/**
 * Progress bar component
 */
function ProgressBar({
  current,
  total,
}: {
  current: number
  total: number
}) {
  const progress = total > 0 ? ((current + 1) / total) * 100 : 0

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-manrope text-sm text-muted-foreground">
          Question {current + 1} of {total}
        </span>
        <span className="font-manrope text-sm font-medium text-primary">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

/**
 * AgentForm component
 * Manages the full form flow with AI conversations
 */
export default function AgentForm({
  form,
  onComplete,
  onError,
  className,
}: AgentFormProps) {
  // Session state
  const [session, setSession] = useState<AgentSession | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<QuestionWithContext | null>(null)
  const [messages, setMessages] = useState<ConversationMessage[]>([])

  // UI state
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [remainingFollowUps, setRemainingFollowUps] = useState(5)
  const [isComplete, setIsComplete] = useState(false)

  // Initialize session on mount
  useEffect(() => {
    if (form.questions.length > 0) {
      const firstQuestion = form.questions[0]
      const newSession = createSession(form.id, form.type, {
        id: firstQuestion.id,
        context: firstQuestion.context,
      })
      setSession(newSession)
      setCurrentQuestion(firstQuestion)
    }
  }, [form])

  // Handle sending a message
  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || !session || !currentQuestion || isLoading) return

    const userMessage = inputValue.trim()
    setInputValue('')
    setIsLoading(true)
    setError(null)

    // Add user message to UI immediately
    const userMsg: ConversationMessage = {
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString(),
    }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setIsTyping(true)

    // Update session with user message
    addMessage(session.sessionId, { role: 'user', content: userMessage })

    try {
      // Send to API
      const response = await sendAgentMessage({
        formId: form.id,
        formType: form.type,
        formTitle: form.title,
        sessionId: session.sessionId,
        questionId: currentQuestion.id,
        questionContext: currentQuestion.context as QuestionContext,
        userMessage,
        conversationHistory: messages,
        remainingFollowUps,
      })

      setIsTyping(false)

      if (response.error) {
        setError(response.error)
        onError?.(response.error)
        return
      }

      // Add assistant response if present
      if (response.response) {
        const assistantMsg: ConversationMessage = {
          role: 'assistant',
          content: response.response,
          timestamp: new Date().toISOString(),
        }
        setMessages(prev => [...prev, assistantMsg])
        addMessage(session.sessionId, { role: 'assistant', content: response.response })
      }

      // Handle completion or continuation
      if (response.shouldContinue) {
        setRemainingFollowUps(prev => prev - 1)
      } else {
        // Save the answer for this question
        saveAnswer(session.sessionId, {
          questionId: currentQuestion.id,
          primaryAnswer: messages[0]?.content || userMessage,
          followUpExchanges: updatedMessages.slice(1),
        })

        // Check if there are more questions
        const currentIndex = form.questions.findIndex(q => q.id === currentQuestion.id)
        const nextIndex = currentIndex + 1

        if (nextIndex < form.questions.length) {
          // Move to next question
          const nextQuestion = form.questions[nextIndex]
          moveToNextQuestion(session.sessionId, {
            id: nextQuestion.id,
            index: nextIndex,
            context: nextQuestion.context,
          })
          setCurrentQuestion(nextQuestion)
          setMessages([])
          setRemainingFollowUps(5)
        } else {
          // Form complete
          const completedSession = completeSession(session.sessionId, response.completionReason)
          setIsComplete(true)
          if (completedSession) {
            onComplete?.(completedSession)
          }
        }
      }
    } catch (err) {
      setIsTyping(false)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, session, currentQuestion, isLoading, messages, remainingFollowUps, form, onComplete, onError])

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Reset form
  const handleReset = () => {
    if (form.questions.length > 0) {
      const firstQuestion = form.questions[0]
      const newSession = createSession(form.id, form.type, {
        id: firstQuestion.id,
        context: firstQuestion.context,
      })
      setSession(newSession)
      setCurrentQuestion(firstQuestion)
      setMessages([])
      setRemainingFollowUps(5)
      setIsComplete(false)
      setError(null)
    }
  }

  // Completion screen
  if (isComplete) {
    return (
      <Card variant="glass" className={cn('max-w-2xl mx-auto', className)}>
        <CardContent className="p-8">
          <div className="text-center space-y-4 animate-in fade-in duration-500">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-green-500/10">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
            </div>
            <h2 className="font-bebas text-4xl text-foreground">
              Thank You!
            </h2>
            <p className="font-manrope text-muted-foreground max-w-md mx-auto">
              You have completed all questions. Your responses have been saved and will be used to customize your experience.
            </p>
            <Button
              variant="outline"
              onClick={handleReset}
              className="mt-4"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!currentQuestion) {
    return (
      <Card variant="glass" className={cn('max-w-2xl mx-auto', className)}>
        <CardContent className="p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-muted-foreground">Loading form...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card variant="glass" className={cn('max-w-2xl mx-auto', className)}>
      <CardHeader className="pb-4">
        <div className="space-y-4">
          <CardTitle className="font-bebas text-3xl text-foreground">
            {form.title}
          </CardTitle>
          <ProgressBar
            current={form.questions.findIndex(q => q.id === currentQuestion.id)}
            total={form.questions.length}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Current Question */}
        <div className="space-y-4">
          <h3 className="font-syne font-bold text-xl text-foreground">
            {currentQuestion.primaryQuestion}
          </h3>
          {currentQuestion.subtitle && (
            <p className="font-manrope text-muted-foreground">
              {currentQuestion.subtitle}
            </p>
          )}
        </div>

        {/* Context Panel */}
        <ContextPanel
          context={currentQuestion.context}
          topicBadge={currentQuestion.topicBadge}
        />

        {/* Conversation */}
        <div className="border border-border/50 rounded-lg bg-muted/20">
          <AgentConversation
            messages={messages}
            isTyping={isTyping}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive animate-in fade-in">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        {/* Input Area */}
        <div className="space-y-3">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={currentQuestion.placeholder || 'Type your response...'}
              disabled={isLoading}
              rows={3}
              className={cn(
                'w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 pr-12',
                'text-base ring-offset-background placeholder:text-muted-foreground/60',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors',
                'focus:border-primary'
              )}
            />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-2 bottom-2"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span className="sr-only">Send message</span>
            </Button>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Press Enter to send, Shift+Enter for new line
            </span>
            <span>
              {remainingFollowUps} follow-up{remainingFollowUps !== 1 ? 's' : ''} remaining
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
