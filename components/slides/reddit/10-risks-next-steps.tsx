"use client"

/**
 * Слайд 10: Риски и Следующие Шаги
 * Pattern: Risk Matrix + Horizontal Timeline
 * Skill: artifacts-builder
 *
 * Этот слайд объединяет:
 * - Карточки рисков с индикаторами серьезности и стратегиями снижения при наведении
 * - Раздел ключевых выводов с основными заключениями
 * - Временная шкала плана действий с параллельными (1-2) и последовательными (3-4) шагами
 */

import { useState } from "react"
import Image from "next/image"
import {
  AlertTriangle,
  Shield,
  Bot,
  Users,
  Settings,
  Target,
  Lightbulb,
  DollarSign,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface Risk {
  id: string
  title: string
  icon: typeof AlertTriangle
  severity: "high" | "medium" | "low"
  description: string
  mitigation: string
}

interface Insight {
  id: string
  title: string
  description: string
  icon: typeof Lightbulb
  highlight?: boolean
}

interface ActionStep {
  id: number
  title: string
  description: string
  parallel?: number // Paired with step number for parallel execution
}

export default function RisksNextSteps() {
  const [hoveredRisk, setHoveredRisk] = useState<string | null>(null)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const risks: Risk[] = [
    {
      id: "mass-ban",
      title: "Массовая Блокировка Аккаунтов",
      icon: AlertTriangle,
      severity: "high",
      description: "Потеря всех аккаунтов за один раз",
      mitigation: "Стратегия ротации, фокус на качестве, а не количестве, постепенное масштабирование"
    },
    {
      id: "ai-detection",
      title: "Обнаружение AI Контента",
      icon: Bot,
      severity: "medium",
      description: "Помечен как спам или контент бота",
      mitigation: "Проверка человеком перед публикацией, разработка уникального стиля письма"
    },
    {
      id: "community-reaction",
      title: "Негативная Реакция Сообщества",
      icon: Users,
      severity: "medium",
      description: "Ущерб репутации, если воспринимается как спам",
      mitigation: "Подход «ценность прежде всего», искреннее вовлечение, прозрачность"
    },
    {
      id: "api-changes",
      title: "Изменения Reddit API",
      icon: Settings,
      severity: "medium",
      description: "Система перестает работать после обновлений Reddit",
      mitigation: "Мониторинг изменений API, создание слоя абстракции, резервный план"
    }
  ]

  const insights: Insight[] = [
    {
      id: "ready-solutions",
      title: "$20-200/мес",
      description: "Готовые решения стоят денег, но дают типовые ответы",
      icon: DollarSign
    },
    {
      id: "spare-parts",
      title: "От ~$50/мес",
      description: "Создать собственную систему из модульных «запчастей»",
      icon: Settings
    },
    {
      id: "main-advantage",
      title: "Главное Преимущество",
      description: "AI-агент, который понимает ВАШУ экспертизу",
      icon: Zap,
      highlight: true
    }
  ]

  const actionSteps: ActionStep[] = [
    {
      id: 1,
      title: "Попробовать Готовое Решение",
      description: "Использовать Reddit Radar или GummySearch, чтобы понять процесс и рабочий процесс",
      parallel: 2
    },
    {
      id: 2,
      title: "Создать MVP",
      description: "Параллельно собрать собственную систему из модульных компонентов",
      parallel: 1
    },
    {
      id: 3,
      title: "Сравнить Результаты",
      description: "Измерить качество, стоимость и конверсию обоих подходов"
    },
    {
      id: 4,
      title: "Решить об Инвестициях",
      description: "Выбрать, куда инвестировать дальше, на основе данных"
    }
  ]

  const getSeverityStyles = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return {
          bar: "bg-destructive",
          border: "border-destructive/40",
          badge: "bg-destructive/10 text-destructive"
        }
      case "medium":
        return {
          bar: "bg-warning",
          border: "border-warning/40",
          badge: "bg-warning/10 text-warning"
        }
      case "low":
        return {
          bar: "bg-success",
          border: "border-success/40",
          badge: "bg-success/10 text-success"
        }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365016422-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Decorative backgrounds */}
      <GeometricPattern type="dots" className="opacity-10" />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge
            variant="glow"
            className="text-sm px-4 py-2 animate-slide-in-down"
          >
            <Target className="h-4 w-4 mr-2" aria-hidden="true" />
            План Действий
          </Badge>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
            РИСКИ И <span className="text-primary">СЛЕДУЮЩИЕ ШАГИ</span>
          </h2>
          <p className="font-manrope text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-up delay-300 fill-backwards">
            Понять вызовы и спланировать путь вперед
          </p>
        </div>

        {/* Risk Matrix - 2x2 Grid */}
        <div className="space-y-4">
          <h3 className="font-syne text-xl font-semibold text-foreground/80 animate-fade-in delay-400 fill-backwards">
            <AlertTriangle className="inline h-5 w-5 mr-2 text-warning" aria-hidden="true" />
            Оценка Рисков
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {risks.map((risk, index) => {
              const styles = getSeverityStyles(risk.severity)
              const isHovered = hoveredRisk === risk.id
              const Icon = risk.icon

              return (
                <Card
                  key={risk.id}
                  className={`
                    relative overflow-hidden cursor-pointer transition-all duration-300
                    ${styles.border}
                    ${isHovered ? "scale-105 shadow-lg" : "hover:shadow-md"}
                    animate-fade-in fill-backwards
                  `}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredRisk(risk.id)}
                  onMouseLeave={() => setHoveredRisk(null)}
                >
                  {/* Severity Indicator Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${styles.bar} transition-all duration-300`}
                    style={{ width: isHovered ? "100%" : "60%" }}
                  />

                  <CardContent className="pt-5 pb-4 px-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${styles.badge}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-syne font-semibold text-sm leading-tight">
                          {risk.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {risk.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover-reveal mitigation */}
                    <div
                      className={`
                        mt-3 pt-3 border-t border-border/50 transition-all duration-300
                        ${isHovered ? "opacity-100 max-h-32" : "opacity-0 max-h-0 overflow-hidden"}
                      `}
                    >
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-xs text-success font-medium">
                          {risk.mitigation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="text-xs text-muted-foreground text-center animate-fade-in delay-900 fill-backwards">
            Наведите на каждый риск, чтобы увидеть стратегии снижения
          </p>
        </div>

        {/* Key Insights */}
        <div className="space-y-4 animate-slide-in-left delay-700 fill-backwards">
          <h3 className="font-syne text-xl font-semibold text-foreground/80">
            <Lightbulb className="inline h-5 w-5 mr-2 text-primary" aria-hidden="true" />
            Что Мы Узнали
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <Card
                  key={insight.id}
                  className={`
                    transition-all duration-300 hover:shadow-lg
                    ${insight.highlight
                      ? "border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5"
                      : "border-border/50 bg-white/80"
                    }
                    animate-fade-in fill-backwards
                  `}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={`
                        p-2 rounded-lg
                        ${insight.highlight ? "bg-primary/20" : "bg-muted/50"}
                      `}>
                        <Icon
                          className={`h-5 w-5 ${insight.highlight ? "text-primary" : "text-muted-foreground"}`}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className={`font-jetbrains font-bold text-lg ${insight.highlight ? "text-primary" : ""}`}>
                          {insight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Action Plan Timeline */}
        <div className="space-y-4 animate-slide-in-up delay-900 fill-backwards">
          <h3 className="font-syne text-xl font-semibold text-foreground/80">
            <Target className="inline h-5 w-5 mr-2 text-primary" aria-hidden="true" />
            План Действий
          </h3>

          {/* Timeline Container */}
          <Card className="border-primary/20 bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              {/* Desktop Timeline */}
              <div className="hidden md:block">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />

                  {/* Steps */}
                  <div className="relative flex justify-between">
                    {actionSteps.map((step, index) => {
                      const isExpanded = expandedStep === step.id
                      const isParallel = step.parallel !== undefined

                      return (
                        <div
                          key={step.id}
                          className={`
                            flex flex-col items-center text-center
                            ${isParallel && step.id <= 2 ? "flex-1" : "flex-1"}
                            animate-fade-in fill-backwards
                          `}
                          style={{ animationDelay: `${1000 + index * 150}ms` }}
                        >
                          {/* Step Number Circle */}
                          <button
                            onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                            className={`
                              relative z-10 w-12 h-12 rounded-full flex items-center justify-center
                              transition-all duration-300 cursor-pointer
                              ${isExpanded
                                ? "bg-primary text-primary-foreground shadow-glow scale-110"
                                : "bg-white border-2 border-primary text-primary hover:bg-primary/10"
                              }
                            `}
                            aria-expanded={isExpanded}
                            aria-label={`Step ${step.id}: ${step.title}`}
                          >
                            <span className="font-bebas text-xl">{step.id}</span>
                          </button>

                          {/* Parallel Indicator */}
                          {isParallel && step.id === 1 && (
                            <div className="absolute top-6 left-1/2 transform translate-x-8">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white px-2 py-0.5 rounded-full border border-border/50">
                                <ArrowRight className="h-3 w-3 rotate-90" aria-hidden="true" />
                                <span>параллельно</span>
                              </div>
                            </div>
                          )}

                          {/* Step Title */}
                          <h4 className="font-syne font-semibold text-sm mt-3 px-2">
                            {step.title}
                          </h4>

                          {/* Expanded Description */}
                          <div
                            className={`
                              mt-2 px-2 transition-all duration-300 overflow-hidden
                              ${isExpanded ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}
                            `}
                          >
                            <p className="text-xs text-muted-foreground">
                              {step.description}
                            </p>
                            <CheckCircle2 className="h-4 w-4 text-success mx-auto mt-2" aria-hidden="true" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile Timeline - Vertical */}
              <div className="md:hidden space-y-4">
                {actionSteps.map((step, index) => {
                  const isExpanded = expandedStep === step.id
                  const isParallel = step.parallel !== undefined && step.id <= 2

                  return (
                    <div
                      key={step.id}
                      className="flex items-start gap-4 animate-fade-in fill-backwards"
                      style={{ animationDelay: `${1000 + index * 150}ms` }}
                    >
                      {/* Step Number */}
                      <button
                        onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                        className={`
                          shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                          transition-all duration-300 cursor-pointer
                          ${isExpanded
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : "bg-white border-2 border-primary text-primary hover:bg-primary/10"
                          }
                        `}
                        aria-expanded={isExpanded}
                        aria-label={`Step ${step.id}: ${step.title}`}
                      >
                        <span className="font-bebas text-lg">{step.id}</span>
                      </button>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-syne font-semibold text-sm">
                            {step.title}
                          </h4>
                          {isParallel && (
                            <Badge variant="outline" className="text-xs px-1.5 py-0">
                              параллельно
                            </Badge>
                          )}
                        </div>
                        <div
                          className={`
                            transition-all duration-300 overflow-hidden
                            ${isExpanded ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"}
                          `}
                        >
                          <p className="text-xs text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Нажмите на шаг, чтобы увидеть детали
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
