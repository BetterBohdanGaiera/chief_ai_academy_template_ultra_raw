'use client'

/**
 * Слайд обратной связи по разделу
 * Пример слайда с несколькими формами обратной связи с разными formId
 *
 * Демонстрирует, как использовать компонент FeedbackFormWrapper
 * для сбора обратной связи в различных точках презентации.
 * Каждая форма имеет уникальный formId для отдельного отслеживания и анализа.
 */

import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern, GradientMesh } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { MessageSquare } from 'lucide-react'
import FeedbackFormWrapper from '@/components/feedback/FeedbackFormWrapper'

interface SectionFeedbackSlideProps {
  /** Номер раздела для отслеживания */
  sectionNumber?: number
  /** Название раздела для контекста */
  sectionName?: string
  /** Пользовательский текст вопроса */
  questionPrompt?: string
}

export default function SectionFeedbackSlide({
  sectionNumber = 1,
  sectionName = 'Введение',
  questionPrompt,
}: SectionFeedbackSlideProps) {
  const defaultPrompt = `Насколько понятен был раздел "${sectionName}"? Что можно улучшить?`

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Атмосферный фон */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-15" />
      <GrainOverlay opacity={0.25} />

      {/* Контент */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 space-y-8">
        {/* Бейдж */}
        <div className="flex justify-center animate-slide-in-down">
          <Badge variant="glow" className="transform -rotate-1">
            <MessageSquare className="h-5 w-5 mr-2" aria-hidden="true" />
            ОБРАТНАЯ СВЯЗЬ РАЗДЕЛ {sectionNumber}
          </Badge>
        </div>

        {/* Заголовок */}
        <div className="text-center animate-fade-in delay-200 fill-backwards">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            ОБРАТНАЯ СВЯЗЬ
            <br />
            <span className="text-primary animate-glow-pulse">ПО РАЗДЕЛУ</span>
          </h1>
        </div>

        {/* Форма обратной связи */}
        <div className="animate-fade-in delay-500 fill-backwards">
          <FeedbackFormWrapper
            formId={`feedback-section-${sectionNumber}`}
            questionPrompt={questionPrompt || defaultPrompt}
            slideId={`section-${sectionNumber}-feedback`}
            slideIndex={3 + sectionNumber}
            moduleId="m1"
            collectName={true}
            collectEmail={false}
            submitButtonText="ОТПРАВИТЬ ОБРАТНУЮ СВЯЗЬ"
            successMessage={`Спасибо за вашу обратную связь по разделу ${sectionName}!`}
            additionalContext={{
              sectionNumber,
              sectionName,
            }}
          />
        </div>

        {/* Примечание о конфиденциальности */}
        <p className="text-center text-sm text-muted-foreground/50 animate-fade-in delay-700 fill-backwards">
          Ваша обратная связь по разделам помогает нам улучшить каждую часть презентации.
        </p>
      </div>
    </div>
  )
}
