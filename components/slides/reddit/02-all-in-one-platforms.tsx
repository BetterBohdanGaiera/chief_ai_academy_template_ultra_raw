"use client"

/**
 * Reddit Marketing Research - All-in-One Platforms Slide
 *
 * Pattern: Hover-Reveal Cards (Interactive Pattern 3)
 * Skill: artifacts-builder
 *
 * Design Decisions:
 * - 5 platform cards in responsive grid (1->2->3->5 columns)
 * - Hover reveals detailed features, limitations, and link indicator
 * - Color-coded pricing: Green (<$30), Amber ($30-60), Red (>$60)
 * - Mobile adaptation: Tap-to-expand accordion behavior
 * - Staggered entrance animations for visual polish
 */

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import {
  Building2,
  Radar,
  Users,
  Lightbulb,
  MessageCircle,
  AlertTriangle,
  ExternalLink,
  Check,
} from "lucide-react"
import Image from "next/image"

interface Platform {
  id: string
  name: string
  icon: React.ElementType
  price: string
  priceColor: string
  priceGlow: string
  coreFeature: string
  features: string[]
  limitation: string | null
}

export default function AllInOnePlatforms() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const platforms: Platform[] = [
    {
      id: "ogtool",
      name: "OGTool",
      icon: Building2,
      price: "$99/мес",
      priceColor: "text-red-500",
      priceGlow: "shadow-[0_0_20px_rgba(239,68,68,0.3)]",
      coreFeature: "Мониторинг более 100 000 сабреддитов",
      features: [
        "Мониторинг более 100 000 сабреддитов",
        "Ответы, сгенерированные ИИ",
        "Определение лидов",
      ],
      limitation: "Общие ответы ИИ могут не быть аутентичными",
    },
    {
      id: "reddit-radar",
      name: "Reddit Radar",
      icon: Radar,
      price: "$19.99-39.99/мес",
      priceColor: "text-green-500",
      priceGlow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
      coreFeature: "ИИ-поиск сообществ с оценкой вирусности",
      features: [
        "ИИ-поиск сообществ",
        "Система оценки вирусности",
        "Аналитика показателей здоровья",
        "Starter: 100 сообщ., Pro: 300 сообщ.",
      ],
      limitation: "Жёсткие лимиты сообщений на тариф",
    },
    {
      id: "promotee",
      name: "Promotee",
      icon: Users,
      price: "$59/аккаунт/мес",
      priceColor: "text-amber-500",
      priceGlow: "shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      coreFeature: "Полный набор автоматизации с CRM",
      features: [
        "Автокомментарии",
        "Авто-DM",
        "Прогрев аккаунта",
        "Управление множеством аккаунтов",
        "Встроенная CRM",
      ],
      limitation: "Агрессивная автоматизация повышает риск бана",
    },
    {
      id: "subtle-ai",
      name: "Subtle AI",
      icon: Lightbulb,
      price: "Цена не указана",
      priceColor: "text-foreground/60",
      priceGlow: "shadow-[0_0_20px_rgba(100,100,100,0.2)]",
      coreFeature: "Умный поиск постов и создание ответов",
      features: [
        "Поиск релевантных постов",
        "Создание ответов",
        "Определение возможностей",
      ],
      limitation: null,
    },
    {
      id: "replyagent",
      name: "ReplyAgent.ai",
      icon: MessageCircle,
      price: "Цена не указана",
      priceColor: "text-foreground/60",
      priceGlow: "shadow-[0_0_20px_rgba(100,100,100,0.2)]",
      coreFeature: "Автопоиск с умным таргетингом",
      features: [
        "Автоматический поиск диалогов",
        "Умный таргетинг",
        "Ответы на основе персоны",
      ],
      limitation: null,
    },
  ]

  // Handle both hover (desktop) and tap (mobile)
  const handleInteraction = (platformId: string) => {
    // Check if mobile (no hover support)
    if (window.matchMedia("(hover: none)").matches) {
      setExpandedCard(expandedCard === platformId ? null : platformId)
    }
  }

  const isCardActive = (platformId: string) => {
    return activeCard === platformId || expandedCard === platformId
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365071309-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-12 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern Layer */}
      <GeometricPattern type="grid" className="opacity-15" />

      {/* Grain Overlay Layer */}
      <GrainOverlay opacity={0.12} />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl w-full space-y-8 lg:space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="glow" className="animate-slide-in-down">
            Анализ рынка
          </Badge>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-fade-in delay-200 fill-backwards">
            Универсальные <span className="text-primary">Платформы</span>
          </h2>
          <p className="font-syne text-base md:text-lg text-foreground/70 animate-slide-in-up delay-400 fill-backwards">
            Наведите на каждую платформу, чтобы изучить возможности и ограничения
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {platforms.map((platform, idx) => {
            const Icon = platform.icon
            const isActive = isCardActive(platform.id)

            return (
              <Card
                key={platform.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `scale-105 border-primary ${platform.priceGlow}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                  }
                  animate-fade-in fill-backwards
                `}
                style={{ animationDelay: `${idx * 100 + 500}ms` }}
                onMouseEnter={() => setActiveCard(platform.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => handleInteraction(platform.id)}
              >
                <CardContent className="pt-6 space-y-4">
                  {/* Icon */}
                  <div
                    className={`
                      p-3 rounded-xl w-fit mx-auto transition-colors duration-300
                      ${isActive ? "bg-primary/10" : "bg-muted/50"}
                    `}
                  >
                    <Icon
                      className={`w-8 h-8 ${isActive ? "text-primary" : "text-foreground/60"}`}
                    />
                  </div>

                  {/* Platform Name */}
                  <h3 className="font-syne font-bold text-lg text-center">
                    {platform.name}
                  </h3>

                  {/* Price Badge */}
                  <div className="flex justify-center">
                    <Badge
                      variant="outline"
                      className={`${platform.priceColor} border-current`}
                    >
                      {platform.price}
                    </Badge>
                  </div>

                  {/* Core Feature (always visible) */}
                  <p className="text-xs text-center text-foreground/70 min-h-[2.5rem]">
                    {platform.coreFeature}
                  </p>

                  {/* Expanded Content (on hover/tap) */}
                  {isActive && (
                    <div className="space-y-4 pt-3 border-t border-border animate-fade-in">
                      {/* Features List */}
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">
                          ВОЗМОЖНОСТИ:
                        </p>
                        <ul className="space-y-1">
                          {platform.features.map((feature, i) => (
                            <li
                              key={i}
                              className="text-xs text-foreground/80 flex gap-2 items-start"
                            >
                              <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Limitation (if exists) */}
                      {platform.limitation && (
                        <div className="pt-2">
                          <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-amber-600 dark:text-amber-400">
                              {platform.limitation}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Link Indicator */}
                      <div className="flex items-center justify-center gap-1 text-xs text-primary pt-2">
                        <ExternalLink className="w-3 h-3" />
                        <span>Посмотреть детали</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="py-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Ключевой вывод:</span>{" "}
              Универсальные платформы предлагают удобство, но часто жертвуют кастомизацией.
              Оценивайте на основе ваших конкретных потребностей в рабочем процессе и толерантности к риску.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
