'use client'

/**
 * GeneratedPresentation Component
 * Displays a preview of the generated presentation
 */

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Clock, FileText, Tag, Download, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { GeneratedPresentation, GeneratedSlide } from '@/lib/presentation/generator'

interface GeneratedPresentationProps {
  /** The generated presentation data */
  presentation: GeneratedPresentation
  /** Callback when user wants to save/export */
  onExport?: () => void
  /** Callback when user wants to regenerate */
  onRegenerate?: () => void
  /** Optional className */
  className?: string
}

/**
 * Slide preview card
 */
function SlidePreview({
  slide,
  index,
  isActive,
  onClick,
}: {
  slide: GeneratedSlide
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full p-3 rounded-lg border text-left transition-all duration-200',
        'hover:border-primary/50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isActive
          ? 'border-primary bg-primary/5'
          : 'border-border bg-card hover:bg-muted/50'
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'flex-shrink-0 w-6 h-6 rounded text-xs font-semibold flex items-center justify-center',
            isActive
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          )}
        >
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-syne font-semibold text-sm truncate">
            {slide.title}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {slide.type}
          </p>
        </div>
      </div>
    </button>
  )
}

/**
 * Main slide display
 */
function SlideDisplay({ slide }: { slide: GeneratedSlide }) {
  return (
    <div className="aspect-video bg-gradient-to-br from-background to-muted/50 rounded-lg border border-border p-8 flex flex-col justify-center">
      {/* Slide type badge */}
      <span className="inline-block self-start px-2 py-0.5 mb-4 text-xs font-semibold uppercase tracking-wide bg-primary/10 text-primary rounded">
        {slide.type}
      </span>

      {/* Title */}
      <h2
        className={cn(
          'font-bebas text-foreground mb-4',
          slide.type === 'title' ? 'text-5xl' : 'text-3xl'
        )}
      >
        {slide.title}
      </h2>

      {/* Content */}
      <div className="font-manrope text-muted-foreground">
        {slide.type === 'bullets' ? (
          <ul className="space-y-2">
            {slide.content.split('\n').map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{line.replace(/^•\s*/, '')}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="leading-relaxed">{slide.content}</p>
        )}
      </div>

      {/* Notes (if any) */}
      {slide.notes && (
        <div className="mt-auto pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground/60 italic">
            Speaker notes: {slide.notes}
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * GeneratedPresentation component
 */
export default function GeneratedPresentation({
  presentation,
  onExport,
  onRegenerate,
  className,
}: GeneratedPresentationProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const currentSlide = presentation.slides[currentSlideIndex]

  const goToPrevious = () => {
    setCurrentSlideIndex(prev => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentSlideIndex(prev =>
      Math.min(presentation.slides.length - 1, prev + 1)
    )
  }

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-4 gap-6', className)}>
      {/* Main Preview */}
      <div className="lg:col-span-3 space-y-4">
        <Card variant="glass">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                  <Sparkles className="h-3 w-3" />
                  Generated Presentation
                </span>
                <CardTitle className="font-bebas text-3xl">
                  {presentation.title}
                </CardTitle>
              </div>
              <div className="flex items-center gap-2">
                {onRegenerate && (
                  <Button variant="outline" size="sm" onClick={onRegenerate}>
                    Regenerate
                  </Button>
                )}
                {onExport && (
                  <Button variant="glow" size="sm" onClick={onExport}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Slide Display */}
            {currentSlide && <SlideDisplay slide={currentSlide} />}

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevious}
                disabled={currentSlideIndex === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              <span className="text-sm text-muted-foreground">
                {currentSlideIndex + 1} / {presentation.slides.length}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={goToNext}
                disabled={currentSlideIndex === presentation.slides.length - 1}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Metadata */}
        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className="font-syne text-base">Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {presentation.slides.length} slides
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {presentation.metadata.estimatedDuration}
              </span>
            </div>
            {presentation.metadata.keyTopics.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Key Topics</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {presentation.metadata.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-muted rounded-full truncate max-w-full"
                      title={topic}
                    >
                      {topic.length > 20 ? `${topic.slice(0, 20)}...` : topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Slide List */}
        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className="font-syne text-base">Slides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {presentation.slides.map((slide, index) => (
                <SlidePreview
                  key={slide.id}
                  slide={slide}
                  index={index}
                  isActive={index === currentSlideIndex}
                  onClick={() => setCurrentSlideIndex(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
