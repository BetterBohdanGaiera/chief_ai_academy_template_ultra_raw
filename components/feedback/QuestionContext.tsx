'use client'

/**
 * QuestionContext Component
 * Expandable context sections that provide background information for feedback questions
 */

import { useState } from 'react'
import { ChevronDown, BookOpen, Target, Info, ListChecks, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { QuestionContextSection } from '@/types/feedback-conversation'

interface QuestionContextProps {
  /** Context sections to display */
  sections: QuestionContextSection[]
  /** Callback when section expansion changes */
  onToggle?: (sectionId: string, isExpanded: boolean) => void
  /** Optional className for the container */
  className?: string
}

/**
 * Get icon component based on icon name
 */
function getIconComponent(iconName?: string) {
  switch (iconName) {
    case 'BookOpen':
      return BookOpen
    case 'Target':
      return Target
    case 'Info':
      return Info
    case 'ListChecks':
      return ListChecks
    default:
      return HelpCircle
  }
}

/**
 * Individual expandable context section
 */
function ContextSection({
  section,
  isExpanded,
  onToggle,
}: {
  section: QuestionContextSection
  isExpanded: boolean
  onToggle: () => void
}) {
  const IconComponent = getIconComponent(section.icon)

  return (
    <div className="border border-border/40 rounded-lg overflow-hidden bg-muted/10 transition-all duration-200 hover:border-primary/30">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between p-4 text-left transition-colors',
          'hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isExpanded && 'bg-muted/20'
        )}
        aria-expanded={isExpanded}
        aria-controls={`context-content-${section.id}`}
      >
        <div className="flex items-center gap-3">
          <IconComponent className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
          <span className="font-syne font-semibold text-base text-foreground/90">
            {section.title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-muted-foreground transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`context-content-${section.id}`}
        className={cn(
          'overflow-hidden transition-all duration-200 ease-out',
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isExpanded}
      >
        <div className="px-4 pb-4 pt-0">
          <div className="pl-8">
            <p className="font-manrope text-sm md:text-base text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * QuestionContext component
 * Displays expandable context sections for feedback questions
 */
export default function QuestionContext({
  sections,
  onToggle,
  className,
}: QuestionContextProps) {
  // Track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    // Initialize with default expanded sections
    const defaultExpanded = new Set<string>()
    sections.forEach((section) => {
      if (section.defaultExpanded) {
        defaultExpanded.add(section.id)
      }
    })
    return defaultExpanded
  })

  const handleToggle = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      const isExpanding = !next.has(sectionId)

      if (isExpanding) {
        next.add(sectionId)
      } else {
        next.delete(sectionId)
      }

      // Call callback if provided
      onToggle?.(sectionId, isExpanding)

      return next
    })
  }

  if (sections.length === 0) {
    return null
  }

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center gap-2 mb-2">
        <Info className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <span className="font-manrope text-sm text-muted-foreground">
          Click to expand for more context
        </span>
      </div>
      {sections.map((section) => (
        <ContextSection
          key={section.id}
          section={section}
          isExpanded={expandedSections.has(section.id)}
          onToggle={() => handleToggle(section.id)}
        />
      ))}
    </div>
  )
}
