"use client"

/**
 * Слайд 09: Стратегия нативного упоминания продукта
 * Паттерн: Сравнение с переключением кнопок
 * Навык: artifacts-builder
 *
 * Показывает драматическую разницу между спамным и нативным взаимодействием на Reddit
 * через интерактивное сравнение с примерами сообщений.
 */

import { useState } from "react"
import Image from "next/image"
import {
  MessageCircle,
  Check,
  X,
  AlertTriangle,
  ThumbsUp,
  XCircle,
  CheckCircle2,
  Quote,
  Target,
  Heart,
  MessageSquare,
  Lightbulb
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

type ApproachType = "spammy" | "native"

interface NativeCheckItem {
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export default function SlideNativeStrategy() {
  const [activeView, setActiveView] = useState<ApproachType>("spammy")

  const approachData = {
    spammy: {
      title: "Спамный подход",
      icon: XCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      message: `Отличный вопрос! Вам обязательно стоит посмотреть [НазваниеПродукта] - это лучшее решение именно для того, что вы описываете. Мы помогли тысячам пользователей, таких как вы. Посетите наш сайт, чтобы узнать больше и начать работу сегодня!`,
      result: "Удалено автомодератором, аккаунт в теневом бане",
      resultIcon: AlertTriangle,
      resultColor: "text-destructive"
    },
    native: {
      title: "Нативный подход",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/40",
      message: `Знаю эту боль! Я боролся с этой же проблемой около 6 месяцев. Что в итоге сработало для меня:

1. Начал отслеживать всё в электронной таблице (утомительно, но открывает глаза)
2. Понял, что 80% времени уходило на 3 конкретных узких места
3. Автоматизировал их с помощью комбинации Zapier и инструмента, который помог создать

Одна таблица может решить половину вашей проблемы. Что касается автоматизации - есть несколько вариантов в зависимости от вашего стека. Я, очевидно, предвзят, так как я один из основателей, но с радостью поделюсь тем, что мы узнали, даже если вы выберете другой путь.

Как выглядит ваша текущая настройка?`,
      result: "Получено голосов, начался настоящий диалог, сгенерированы лиды",
      resultIcon: ThumbsUp,
      resultColor: "text-success"
    }
  }

  const nativeCheckItems: NativeCheckItem[] = [
    { label: "Реальная история с конкретными деталями", icon: Heart },
    { label: "Предлагает ценность перед упоминанием продукта", icon: Lightbulb },
    { label: "Прозрачно признает предвзятость", icon: Target },
    { label: "Не давит - приглашает к диалогу", icon: MessageSquare },
    { label: "Без прямых ссылок (избегает автомодератора)", icon: Check }
  ]

  const rules = [
    {
      number: "01",
      title: "Только 100% релевантность",
      description: "Пользователь описывает ИМЕННО ту проблему, которую вы решаете"
    },
    {
      number: "02",
      title: "Сначала ценность",
      description: "80% ответа = полезная информация, 20% = тонкое упоминание"
    },
    {
      number: "03",
      title: "Никаких прямых ссылок",
      description: "Автомодераторы удаляют мгновенно; пусть сами ищут"
    },
    {
      number: "04",
      title: "Прозрачность работает",
      description: '"Я основатель, так что предвзят, но..." укрепляет доверие'
    }
  ]

  const currentData = approachData[activeView]
  const CurrentIcon = currentData.icon
  const ResultIcon = currentData.resultIcon

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365026992-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.06]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 border-primary/60 text-primary font-medium animate-slide-in-down fill-backwards"
          >
            <MessageCircle className="w-4 h-4" />
            Стратегия взаимодействия
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight tracking-tight animate-fade-in delay-200 fill-backwards">
            СТРАТЕГИЯ <span className="text-primary">НАТИВНОГО УПОМИНАНИЯ</span> ПРОДУКТА
          </h2>
        </div>

        {/* Hero Quote */}
        <Card className="border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent animate-slide-in-left delay-300 fill-backwards">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-primary shrink-0 mt-1" />
              <blockquote className="font-syne text-lg md:text-xl lg:text-2xl italic text-foreground/90 leading-relaxed">
                "Быть реддитором с сайтом - нормально, быть сайтом с аккаунтом на Reddit - нет."
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-scale-in delay-400 fill-backwards">
          <Button
            variant={activeView === "spammy" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("spammy")}
            className={`transition-all duration-300 ${
              activeView === "spammy"
                ? "bg-destructive hover:bg-destructive/90 text-white shadow-lg"
                : "hover:bg-destructive/10 hover:border-destructive/40"
            }`}
          >
            <XCircle className="h-5 w-5 mr-2" />
            Спамный пример
          </Button>
          <Button
            variant={activeView === "native" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("native")}
            className={`transition-all duration-300 ${
              activeView === "native"
                ? "bg-success hover:bg-success/90 text-white shadow-lg"
                : "hover:bg-success/10 hover:border-success/40"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Нативный пример
          </Button>
        </div>

        {/* Example Message Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Message Card (takes 2 columns) */}
          <Card
            key={activeView}
            className={`lg:col-span-2 ${currentData.borderColor} border-2 transition-all duration-500 animate-fade-in`}
          >
            <CardContent className="p-6 md:p-8 space-y-4">
              {/* Message Header */}
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${currentData.bgColor}`}>
                  <CurrentIcon className={`w-6 h-6 ${currentData.color}`} />
                </div>
                <h3 className={`font-syne font-bold text-xl ${currentData.color}`}>
                  {currentData.title}
                </h3>
              </div>

              {/* Message Content */}
              <div className={`
                p-4 rounded-lg border ${currentData.borderColor} ${currentData.bgColor}
                font-jetbrains text-sm leading-relaxed whitespace-pre-wrap
              `}>
                {currentData.message}
              </div>

              {/* Result */}
              <div className="flex items-center gap-3 pt-2">
                <ResultIcon className={`w-5 h-5 ${currentData.resultColor}`} />
                <p className={`font-semibold ${currentData.resultColor}`}>
                  {currentData.result}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Native Checklist (only shows when native is selected) */}
          <Card
            className={`
              transition-all duration-500 border-2
              ${activeView === "native"
                ? "border-success/40 opacity-100"
                : "border-border/30 opacity-40"
              }
            `}
          >
            <CardContent className="p-6 space-y-4">
              <h4 className="font-syne font-bold text-lg text-success flex items-center gap-2">
                <Check className="w-5 h-5" />
                Что делает его нативным
              </h4>
              <div className="space-y-3">
                {nativeCheckItems.map((item, index) => {
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={index}
                      className={`
                        flex items-start gap-3 transition-all duration-300
                        ${activeView === "native"
                          ? "opacity-100 translate-x-0"
                          : "opacity-40 translate-x-2"
                        }
                      `}
                      style={{
                        transitionDelay: activeView === "native" ? `${index * 100}ms` : "0ms"
                      }}
                    >
                      <div className="p-1.5 rounded-full bg-success/10 shrink-0 mt-0.5">
                        <ItemIcon className="w-4 h-4 text-success" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4 Rules Cards */}
        <div className="space-y-4 animate-slide-in-up delay-600 fill-backwards">
          <h3 className="text-xl font-bebas text-center text-foreground/80">
            4 ПРАВИЛА НАТИВНОГО ВЗАИМОДЕЙСТВИЯ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rules.map((rule, index) => (
              <Card
                key={index}
                className="border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-md animate-fade-in fill-backwards"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-bebas text-2xl text-primary">
                      {rule.number}
                    </span>
                    <h4 className="font-syne font-semibold text-sm leading-tight">
                      {rule.title}
                    </h4>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="p-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Философия:</span>{" "}
              Будьте настоящим членом сообщества, который создал что-то полезное, а не маркетологом, притворяющимся пользователем.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
