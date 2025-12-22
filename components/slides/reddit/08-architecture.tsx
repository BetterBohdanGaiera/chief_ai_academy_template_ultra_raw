"use client"

/**
 * Slide 08: System Architecture
 * Pattern: Progressive Disclosure + Hover-Reveal Cards
 * Skill: artifacts-builder
 *
 * Visualizes the two-layer modular architecture for Reddit marketing:
 * - BUY/USE READY layer: Commodity components to purchase
 * - BUILD OURSELVES layer: Custom components that provide competitive advantage
 */

import { useState } from "react"
import Image from "next/image"
import {
  Layers,
  Server,
  Shield,
  Bot,
  Brain,
  BarChart3,
  Users,
  Eye,
  Gauge,
  Layout,
  ShoppingCart,
  Wrench
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface ComponentItem {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  cost: string
  purpose: string
  alternatives?: string
}

export default function SlideArchitecture() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  // BUY/USE READY layer components
  const buyComponents: ComponentItem[] = [
    {
      id: "antidetect",
      name: "Антидетект-браузер",
      icon: Shield,
      cost: "$8-99/мес",
      purpose: "Управление несколькими аккаунтами Reddit без обнаружения",
      alternatives: "DICloak, Multilogin, GoLogin"
    },
    {
      id: "proxies",
      name: "Резидентные прокси",
      icon: Server,
      cost: "$10-50/мес",
      purpose: "Уникальные IP-адреса для каждого аккаунта",
      alternatives: "BrightData, IPRoyal, Smartproxy"
    },
    {
      id: "accounts",
      name: "Прогретые аккаунты",
      icon: Users,
      cost: "$0-50/мес",
      purpose: "Старые аккаунты с кармой и историей",
      alternatives: "Покупка или самостоятельный прогрев 30-60 дней"
    },
    {
      id: "reddit-api",
      name: "Reddit API (PRAW)",
      icon: Bot,
      cost: "$0-100/мес",
      purpose: "Программный доступ к данным Reddit",
      alternatives: "PRAW (Python) или ручной парсинг"
    },
    {
      id: "ai-api",
      name: "Claude/GPT API",
      icon: Brain,
      cost: "$20-120/мес",
      purpose: "Генерация человекоподобных ответов",
      alternatives: "OpenAI GPT-4, Anthropic Claude, Llama"
    }
  ]

  // BUILD OURSELVES layer components
  const buildComponents: ComponentItem[] = [
    {
      id: "monitoring",
      name: "Мониторинг ключевых слов",
      icon: Eye,
      cost: "БЕСПЛАТНО (время разработки)",
      purpose: "Отслеживание релевантных обсуждений в целевых сабреддитах",
      alternatives: "Собственный скрипт для отслеживания ключевых слов"
    },
    {
      id: "agent",
      name: "AI-агент",
      icon: Brain,
      cost: "БЕСПЛАТНО (время разработки)",
      purpose: "Понимает ВАШУ экспертизу и продукты",
      alternatives: "Кастомная обучение на вашей предметной области"
    },
    {
      id: "scoring",
      name: "Приоритизация",
      icon: Gauge,
      cost: "БЕСПЛАТНО (время разработки)",
      purpose: "Определяет, на какие посты отвечать в первую очередь",
      alternatives: "ML-модель или система правил для оценки"
    },
    {
      id: "review",
      name: "Ручная проверка",
      icon: Users,
      cost: "БЕСПЛАТНО (рабочий процесс)",
      purpose: "Контроль качества перед публикацией",
      alternatives: "Очередь на одобрение с уведомлением"
    },
    {
      id: "dashboard",
      name: "Панель управления",
      icon: Layout,
      cost: "БЕСПЛАТНО (время разработки)",
      purpose: "Мониторинг эффективности и управление кампаниями",
      alternatives: "Собственная админ-панель"
    }
  ]

  const renderComponentCard = (
    component: ComponentItem,
    layerType: "buy" | "build",
    index: number
  ) => {
    const Icon = component.icon
    const isHovered = hoveredComponent === component.id
    const isBuyLayer = layerType === "buy"

    return (
      <Card
        key={component.id}
        className={`
          cursor-pointer transition-all duration-300
          ${isHovered
            ? isBuyLayer
              ? "scale-105 border-slate-400 shadow-lg bg-slate-50"
              : "scale-105 border-primary shadow-glow bg-primary/5"
            : isBuyLayer
              ? "border-slate-200 bg-white hover:border-slate-300"
              : "border-primary/30 bg-primary/5 hover:border-primary/50"
          }
          animate-fade-in fill-backwards
        `}
        style={{ animationDelay: `${600 + index * 100}ms` }}
        onMouseEnter={() => setHoveredComponent(component.id)}
        onMouseLeave={() => setHoveredComponent(null)}
      >
        <CardContent className="p-4 space-y-3">
          {/* Icon and Name */}
          <div className="flex items-center gap-3">
            <div className={`
              p-2 rounded-lg transition-colors duration-300
              ${isBuyLayer
                ? "bg-slate-100"
                : "bg-primary/10"
              }
            `}>
              <Icon className={`
                w-5 h-5 transition-colors duration-300
                ${isHovered
                  ? isBuyLayer ? "text-slate-700" : "text-primary"
                  : isBuyLayer ? "text-slate-500" : "text-primary/70"
                }
              `} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-syne font-semibold text-sm leading-tight truncate">
                {component.name}
              </h4>
              <p className={`
                text-xs font-jetbrains font-semibold
                ${isBuyLayer ? "text-slate-600" : "text-primary"}
              `}>
                {component.cost}
              </p>
            </div>
          </div>

          {/* Hover-reveal details */}
          {isHovered && (
            <div className="space-y-2 animate-fade-in pt-2 border-t border-border/50">
              <p className="text-xs text-foreground/80 leading-relaxed">
                {component.purpose}
              </p>
              {component.alternatives && (
                <p className="text-xs text-foreground/60">
                  <span className="font-semibold">Варианты: </span>
                  {component.alternatives}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365012746-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.06]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 border-primary/60 text-primary font-medium animate-slide-in-down fill-backwards"
          >
            <Layers className="w-4 h-4" />
            Проектирование системы
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight tracking-tight animate-fade-in delay-200 fill-backwards">
            АРХИТЕКТУРА <span className="text-primary">СИСТЕМЫ</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto font-manrope animate-slide-in-up delay-400 fill-backwards">
            Модульный дизайн: покупайте готовые компоненты, создавайте уникальную ценность
          </p>
        </div>

        {/* Two-Layer Architecture */}
        <div className="space-y-6">
          {/* BUY/USE READY Layer */}
          <div
            className="space-y-4 animate-slide-in-left delay-400 fill-backwards"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-100">
                <ShoppingCart className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bebas text-slate-700">
                  КУПИТЬ / ИСПОЛЬЗОВАТЬ ГОТОВОЕ
                </h3>
                <p className="text-sm text-slate-500 font-manrope">
                  Стандартные инструменты и сервисы (~$50-400/мес)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {buyComponents.map((component, index) =>
                renderComponentCard(component, "buy", index)
              )}
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center py-2 animate-fade-in delay-800 fill-backwards">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-6 bg-gradient-to-b from-slate-300 to-primary/50" />
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-primary/50 to-primary" />
            </div>
          </div>

          {/* BUILD OURSELVES Layer */}
          <div
            className="space-y-4 animate-slide-in-right delay-600 fill-backwards"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bebas text-primary">
                  СОЗДАТЬ САМОСТОЯТЕЛЬНО
                </h3>
                <p className="text-sm text-primary/70 font-manrope">
                  Кастомные компоненты, понимающие ВАШУ экспертизу
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {buildComponents.map((component, index) =>
                renderComponentCard(component, "build", index + 5)
              )}
            </div>
          </div>
        </div>

        {/* Key Insight Card */}
        <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-syne font-bold text-lg text-primary">
                  Ключевое стратегическое преимущество
                </h3>
                <p className="text-foreground/90 font-manrope leading-relaxed">
                  Настоящая ценность не в инструментах, которые вы покупаете, а в{" "}
                  <strong className="text-primary">AI-агенте, который понимает ВАШУ экспертизу</strong>.{" "}
                  Готовые решения дают общие ответы. Собственная разработка дает ответы, звучащие как от вашего лучшего эксперта.
                </p>
                <p className="text-sm text-foreground/60 pt-2">
                  <span className="font-semibold">Примерная общая стоимость:</span>{" "}
                  ~$50-150/мес за "запчасти" против $20-200/мес за готовые решения с общими ответами
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interaction Hint */}
        <p className="text-center text-sm text-foreground/50 animate-fade-in delay-1200 fill-backwards">
          Наведите курсор на компоненты, чтобы увидеть детали и варианты
        </p>
      </div>
    </section>
  )
}
