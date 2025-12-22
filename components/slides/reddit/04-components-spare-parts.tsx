"use client"

/**
 * Слайд 04: Компоненты (Запчасти) для Создания Пользовательских Систем
 * Паттерн: Раскрывающиеся Детали / Аккордеон (навык artifacts-builder)
 * Показывает 4 категории компонентов с раскрывающимися деталями
 */

import { useState } from "react"
import { Users, Shield, Code, Brain, ChevronDown, AlertTriangle, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type ComponentId = "accounts" | "browsers" | "api" | "ai" | null

interface ComponentCategory {
  id: ComponentId
  title: string
  icon: typeof Users
  riskLevel: "high" | "medium" | "low"
  priceRange: string
  borderColor: string
  bgColor: string
  iconColor: string
  details: {
    stats?: string[]
    providers?: { name: string; price: string }[]
    risks?: string[]
    tiers?: { name: string; price: string; note?: string }[]
  }
}

export default function ComponentsSpareParts() {
  const [expandedSection, setExpandedSection] = useState<ComponentId>(null)

  const components: ComponentCategory[] = [
    {
      id: "accounts",
      title: "Прогретые Аккаунты",
      icon: Users,
      riskLevel: "high",
      priceRange: "От $0.03+",
      borderColor: "border-red-500/40",
      bgColor: "bg-red-500/5",
      iconColor: "text-red-500",
      details: {
        stats: [
          "280% выше вовлечённость для аккаунтов 12мес+",
          "В 4 раза больше голосов для аккаунтов с кармой 1000+"
        ],
        providers: [
          { name: "SocialPlug", price: "Варьируется" },
          { name: "AccsMarket", price: "$0.03+" },
          { name: "REDAccs", price: "Варьируется" },
          { name: "PlayerUp", price: "Варьируется" }
        ],
        risks: [
          "Нарушение правил - риск блокировки аккаунта",
          "Возможная блокировка связанных аккаунтов",
          "Может иметь историю спама, влияющую на доверие"
        ]
      }
    },
    {
      id: "browsers",
      title: "Антидетект Браузеры",
      icon: Shield,
      riskLevel: "medium",
      priceRange: "$8-99/мес",
      borderColor: "border-amber-500/40",
      bgColor: "bg-amber-500/5",
      iconColor: "text-amber-500",
      details: {
        tiers: [
          { name: "Multilogin", price: "$99/мес", note: "30M+ IP" },
          { name: "DICloak", price: "$8/мес", note: "Доступен бесплатный тариф" },
          { name: "Nstbrowser", price: "Бесплатно", note: "Canvas, WebGL отпечатки" },
          { name: "Hidemyacc", price: "$15/мес", note: "Изолированные среды" },
          { name: "AdsPower", price: "$9/мес", note: "Решение для Reddit" }
        ]
      }
    },
    {
      id: "api",
      title: "Reddit API (PRAW)",
      icon: Code,
      riskLevel: "low",
      priceRange: "Бесплатно - $120+/мес",
      borderColor: "border-green-500/40",
      bgColor: "bg-green-500/5",
      iconColor: "text-green-500",
      details: {
        tiers: [
          { name: "Бесплатный тариф", price: "Бесплатно", note: "100 запросов/мин" },
          { name: "Коммерческий", price: "$0.24/1K запросов", note: "Оплата за вызов API" },
          { name: "Базовый мониторинг", price: "~$2.07/мес", note: "~8,640 запросов" },
          { name: "Активный бот", price: "$120+/мес", note: "500,000+ запросов" }
        ]
      }
    },
    {
      id: "ai",
      title: "Генерация Ответов ИИ",
      icon: Brain,
      riskLevel: "low",
      priceRange: "$3-30/1М токенов",
      borderColor: "border-green-500/40",
      bgColor: "bg-green-500/5",
      iconColor: "text-green-500",
      details: {
        tiers: [
          { name: "Claude", price: "$3-15/1М токенов", note: "Контекстные ответы" },
          { name: "GPT-4", price: "$10-30/1М токенов", note: "Высокое качество" }
        ]
      }
    }
  ]

  const toggleSection = (id: ComponentId) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  const getRiskBadge = (level: "high" | "medium" | "low") => {
    const config = {
      high: { variant: "destructive" as const, label: "ВЫСОКИЙ РИСК" },
      medium: { variant: "outline" as const, label: "СРЕДНИЙ", className: "border-amber-500 text-amber-600" },
      low: { variant: "secondary" as const, label: "НИЗКИЙ РИСК" }
    }
    return config[level]
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365064047-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="grid" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Создайте Свою Систему
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Компоненты <span className="text-primary">(Запчасти)</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Строительные блоки для пользовательской инфраструктуры Reddit-маркетинга
          </p>
        </div>

        {/* Instruction */}
        <p className="text-center text-sm text-muted-foreground animate-slide-in-up delay-300 fill-backwards">
          Нажмите на каждую категорию, чтобы изучить детали и цены
        </p>

        {/* Component Grid - 2x2 on desktop, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in delay-500 fill-backwards">
          {components.map((component, index) => {
            const IconComponent = component.icon
            const isExpanded = expandedSection === component.id
            const riskConfig = getRiskBadge(component.riskLevel)

            return (
              <Card
                key={component.id}
                className={`
                  cursor-pointer transition-all duration-300
                  ${isExpanded
                    ? `${component.borderColor} border-2 shadow-lg`
                    : "border-border hover:border-primary/30"
                  }
                  animate-scale-in
                `}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
                onClick={() => toggleSection(component.id)}
              >
                <CardContent className="p-5 space-y-4">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${component.bgColor}`}>
                        <IconComponent className={`h-6 w-6 ${component.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-syne font-bold text-lg">{component.title}</h3>
                        <p className="text-sm text-muted-foreground font-jetbrains">{component.priceRange}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={riskConfig.variant}
                        className={`text-xs ${riskConfig.className || ""}`}
                      >
                        {riskConfig.label}
                      </Badge>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="space-y-4 pt-4 border-t border-border animate-fade-in">
                      {/* Stats */}
                      {component.details.stats && (
                        <div>
                          <p className="text-xs font-semibold text-primary mb-2">КЛЮЧЕВАЯ СТАТИСТИКА:</p>
                          <ul className="space-y-1">
                            {component.details.stats.map((stat, i) => (
                              <li key={i} className="text-sm text-foreground/80 flex gap-2">
                                <span className="text-primary shrink-0">+</span>
                                <span>{stat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Providers */}
                      {component.details.providers && (
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2">ИСТОЧНИКИ:</p>
                          <div className="grid grid-cols-2 gap-2">
                            {component.details.providers.map((provider, i) => (
                              <div key={i} className="flex justify-between text-sm bg-muted/30 rounded px-2 py-1">
                                <span>{provider.name}</span>
                                <span className="font-jetbrains text-muted-foreground">{provider.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tiers */}
                      {component.details.tiers && (
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2">
                            <DollarSign className="h-3 w-3 inline mr-1" />
                            ВАРИАНТЫ ЦЕН:
                          </p>
                          <div className="space-y-2">
                            {component.details.tiers.map((tier, i) => (
                              <div key={i} className="flex items-center justify-between text-sm bg-muted/30 rounded px-3 py-2">
                                <div>
                                  <span className="font-medium">{tier.name}</span>
                                  {tier.note && (
                                    <span className="text-xs text-muted-foreground ml-2">({tier.note})</span>
                                  )}
                                </div>
                                <span className={`font-jetbrains font-semibold ${component.iconColor}`}>
                                  {tier.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Risks */}
                      {component.details.risks && (
                        <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
                          <p className="text-xs font-semibold text-red-500 mb-2 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            ВНИМАНИЕ - РИСКИ:
                          </p>
                          <ul className="space-y-1">
                            {component.details.risks.map((risk, i) => (
                              <li key={i} className="text-sm text-red-600/80 flex gap-2">
                                <span className="text-red-500 shrink-0">!</span>
                                <span>{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30 animate-fade-in delay-700 fill-backwards">
          <CardContent className="p-6">
            <p className="font-syne text-lg md:text-xl text-center">
              <span className="font-bold text-primary">Ключевой вывод:</span>{" "}
              Создание пользовательских систем даёт максимальный контроль, но требует тщательной
              <span className="font-semibold text-amber-600"> оценки рисков </span>
              и технической экспертизы.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
