'use client'

/**
 * FormSelector Component
 * Allows users to select from available form types
 */

import { useState } from 'react'
import { FileQuestion, MessageSquare, Search, Sparkles, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FormDefinition, FormType } from '@/lib/agent-sdk/types'

interface FormSelectorProps {
  /** Available forms to choose from */
  forms: FormDefinition[]
  /** Currently selected form ID */
  selectedFormId?: string
  /** Callback when a form is selected */
  onSelect: (form: FormDefinition) => void
  /** Optional className */
  className?: string
}

/**
 * Get icon for form type
 */
function getFormTypeIcon(type: FormType) {
  switch (type) {
    case 'onboarding':
      return Sparkles
    case 'feedback':
      return MessageSquare
    case 'discovery':
      return Search
    case 'custom':
    default:
      return FileQuestion
  }
}

/**
 * Get description for form type
 */
function getFormTypeDescription(type: FormType): string {
  switch (type) {
    case 'onboarding':
      return 'Get to know you and your needs'
    case 'feedback':
      return 'Share your thoughts and suggestions'
    case 'discovery':
      return 'Explore topics and interests'
    case 'custom':
    default:
      return 'Custom form'
  }
}

/**
 * Form card component
 */
function FormCard({
  form,
  isSelected,
  onSelect,
}: {
  form: FormDefinition
  isSelected: boolean
  onSelect: () => void
}) {
  const IconComponent = getFormTypeIcon(form.type)

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'w-full p-4 rounded-lg border text-left transition-all duration-200',
        'hover:border-primary/50 hover:shadow-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isSelected
          ? 'border-primary bg-primary/5 shadow-md'
          : 'border-border bg-card hover:bg-muted/50'
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            'p-3 rounded-lg flex-shrink-0',
            isSelected ? 'bg-primary/10' : 'bg-muted'
          )}
        >
          <IconComponent
            className={cn(
              'h-6 w-6',
              isSelected ? 'text-primary' : 'text-muted-foreground'
            )}
            aria-hidden="true"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3
              className={cn(
                'font-syne font-semibold text-base truncate',
                isSelected ? 'text-primary' : 'text-foreground'
              )}
            >
              {form.title}
            </h3>
            <span
              className={cn(
                'text-xs font-medium uppercase tracking-wide px-2 py-0.5 rounded',
                isSelected
                  ? 'bg-primary/10 text-primary'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {form.type}
            </span>
          </div>

          <p className="font-manrope text-sm text-muted-foreground mt-1 line-clamp-2">
            {form.description || getFormTypeDescription(form.type)}
          </p>

          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-muted-foreground">
              {form.questions.length} question{form.questions.length !== 1 ? 's' : ''}
            </span>
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform',
                isSelected ? 'text-primary translate-x-0.5' : 'text-muted-foreground'
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </button>
  )
}

/**
 * FormSelector component
 * Displays available forms as selectable cards
 */
export default function FormSelector({
  forms,
  selectedFormId,
  onSelect,
  className,
}: FormSelectorProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between">
        <h2 className="font-syne font-bold text-xl text-foreground">
          Select a Form
        </h2>
        <span className="text-sm text-muted-foreground">
          {forms.length} available
        </span>
      </div>

      <div className="grid gap-3">
        {forms.map((form) => (
          <FormCard
            key={form.id}
            form={form}
            isSelected={form.id === selectedFormId}
            onSelect={() => onSelect(form)}
          />
        ))}
      </div>

      {forms.length === 0 && (
        <div className="text-center py-8">
          <FileQuestion className="h-12 w-12 mx-auto text-muted-foreground/50" aria-hidden="true" />
          <p className="font-manrope text-muted-foreground mt-3">
            No forms available
          </p>
        </div>
      )}
    </div>
  )
}
