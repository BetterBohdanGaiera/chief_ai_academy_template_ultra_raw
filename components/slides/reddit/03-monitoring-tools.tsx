"use client"

/**
 * Слайд 03: Сравнение инструментов мониторинга
 * Паттерн: Сравнение с переключением кнопок (artifacts-builder skill)
 * Сравнивает GummySearch и Syften - инструменты только для мониторинга
 */

import { useState } from "react"
import { Search, Zap, Bell, MessageSquare, Mail, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type ToolType = "gummysearch" | "syften"

export default function MonitoringTools() {
  const [activeTool, setActiveTool] = useState<ToolType>("gummysearch")

  const toolsData = {
    gummysearch: {
      title: "GummySearch",
      tagline: "Мониторинг с фокусом на исследования",
      color: "text-teal-600",
      bgColor: "bg-teal-500/5",
      borderColor: "border-teal-500/40",
      buttonBg: "bg-teal-600 hover:bg-teal-700",
      buttonHover: "hover:bg-teal-500/10 hover:border-teal-500/40",
      features: [
        {
          icon: Search,
          title: "Исследование аудитории",
          description: "Глубокий анализ аудитории сабреддитов и трендовых тем"
        },
        {
          icon: MessageSquare,
          title: "AI-резюме тредов",
          description: "AI-резюме релевантных дискуссий"
        },
        {
          icon: Mail,
          title: "Сохраненные поиски",
          description: "Email-дайджесты по отслеживаемым ключевым словам и темам"
        }
      ],
      integrations: ["Slack", "Discord"],
      pricing: [
        { tier: "Бесплатный", price: "50 поисков", highlight: false },
        { tier: "Стартовый", price: "$29/мес", highlight: false },
        { tier: "Про", price: "$59/мес", highlight: true },
        { tier: "Мега", price: "$199/мес", highlight: false }
      ],
      bestFor: "Команды, которым нужны глубокие исследования аудитории и AI-инсайты"
    },
    syften: {
      title: "Syften",
      tagline: "Система оповещений в реальном времени",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/5",
      borderColor: "border-cyan-500/40",
      buttonBg: "bg-cyan-600 hover:bg-cyan-700",
      buttonHover: "hover:bg-cyan-500/10 hover:border-cyan-500/40",
      features: [
        {
          icon: Bell,
          title: "Мониторинг 15+ платформ",
          description: "Reddit, HN, Quora, GitHub, YouTube и другие"
        },
        {
          icon: Zap,
          title: "1-минутная задержка оповещений",
          description: "Уведомления о упоминаниях почти в реальном времени"
        },
        {
          icon: Clock,
          title: "Непрерывный мониторинг",
          description: "Отслеживание 24/7 на всех настроенных платформах"
        }
      ],
      integrations: [],
      pricing: [
        { tier: "Базовый", price: "$19.95/мес", highlight: false },
        { tier: "Про", price: "$99.95/мес", highlight: true }
      ],
      bestFor: "Команды, которым нужны мгновенные оповещения на множестве платформ"
    }
  }

  const currentTool = toolsData[activeTool]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365049752-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Инструменты мониторинга (только поиск)
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Мониторинг без <span className="text-primary">публикаций</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Решения только для поиска и отслеживания разговоров на разных платформах
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-300 fill-backwards">
          <Button
            variant={activeTool === "gummysearch" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveTool("gummysearch")}
            className={`transition-all duration-300 ${
              activeTool === "gummysearch"
                ? currentTool.buttonBg + " text-white"
                : toolsData.gummysearch.buttonHover
            }`}
          >
            <Search className="h-5 w-5 mr-2" />
            GummySearch
          </Button>
          <Button
            variant={activeTool === "syften" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveTool("syften")}
            className={`transition-all duration-300 ${
              activeTool === "syften"
                ? toolsData.syften.buttonBg + " text-white"
                : toolsData.syften.buttonHover
            }`}
          >
            <Zap className="h-5 w-5 mr-2" />
            Syften
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in delay-500 fill-backwards">
          {/* Features Column */}
          <div className="space-y-4">
            <h3 className="font-syne text-xl font-bold flex items-center gap-2">
              <span className={currentTool.color}>Ключевые функции</span>
            </h3>
            <div className="space-y-3">
              {currentTool.features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={`${activeTool}-feature-${index}`}
                    className={`${currentTool.borderColor} border transition-all duration-300 hover:scale-[1.02] animate-scale-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${currentTool.bgColor}`}>
                        <IconComponent className={`h-5 w-5 ${currentTool.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Integrations */}
            {currentTool.integrations.length > 0 && (
              <div className="pt-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">ИНТЕГРАЦИИ:</p>
                <div className="flex gap-2">
                  {currentTool.integrations.map((integration, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {currentTool.integrations.length === 0 && (
              <div className="pt-4">
                <p className="text-sm text-muted-foreground italic">Нет сторонних интеграций</p>
              </div>
            )}
          </div>

          {/* Pricing Column */}
          <div className="space-y-4">
            <h3 className="font-syne text-xl font-bold">
              <span className={currentTool.color}>Ценовые планы</span>
            </h3>
            <div className="space-y-3">
              {currentTool.pricing.map((tier, index) => (
                <Card
                  key={`${activeTool}-pricing-${index}`}
                  className={`transition-all duration-300 animate-scale-in ${
                    tier.highlight
                      ? `${currentTool.borderColor} border-2 ${currentTool.bgColor}`
                      : "border-border"
                  }`}
                  style={{ animationDelay: `${index * 100 + 150}ms` }}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{tier.tier}</span>
                      {tier.highlight && (
                        <Badge variant="default" className="text-xs">
                          Популярный
                        </Badge>
                      )}
                    </div>
                    <span className={`font-jetbrains text-lg font-bold ${tier.highlight ? currentTool.color : "text-foreground"}`}>
                      {tier.price}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Best For */}
            <Card className={`${currentTool.bgColor} ${currentTool.borderColor} border mt-6`}>
              <CardContent className="p-4">
                <p className="text-xs font-semibold text-muted-foreground mb-1">ЛУЧШЕ ВСЕГО ДЛЯ:</p>
                <p className="text-sm text-foreground">{currentTool.bestFor}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30 animate-fade-in delay-700 fill-backwards">
          <CardContent className="p-6">
            <p className="font-syne text-lg md:text-xl text-center">
              <span className="font-bold text-primary">Ключевой инсайт:</span>{" "}
              Инструменты мониторинга фокусируются на обнаружении и оповещениях—
              <span className="font-semibold"> вы обрабатываете взаимодействие вручную.</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
