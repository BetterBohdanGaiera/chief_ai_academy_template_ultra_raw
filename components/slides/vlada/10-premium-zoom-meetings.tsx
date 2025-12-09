"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, Video, MessageCircle, Calendar, Brain, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type ViewType = "problem" | "solution"

export default function PremiumZoomMeetings() {
  const [activeView, setActiveView] = useState<ViewType>("problem")

  const viewData = {
    problem: {
      title: "Проблема",
      icon: AlertTriangle,
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      description: "Отримали 5-сторінковий звіт. Подивились. Закрили. Забули.",
      subtitle: "Цифри є - розуміння немає.",
      cards: [
        {
          icon: AlertTriangle,
          title: "Звіти без пояснень",
          description: "Таблиці та графіки без контексту - що це означає для бізнесу?"
        },
        {
          icon: AlertTriangle,
          title: "Питання без відповідей",
          description: "Бачите падіння прибутку - але не розумієте чому"
        },
        {
          icon: AlertTriangle,
          title: "Рішення навмання",
          description: "Приймаєте рішення на основі інтуіції, а не розуміння"
        }
      ]
    },
    solution: {
      title: "Рішення",
      icon: CheckCircle2,
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/40",
      description: "Раз на місяць - 40-60 хвилин Zoom з вашим фінансистом",
      subtitle: "Замість тривоги - розуміння.",
      cards: [
        {
          icon: Video,
          title: "Разом переглядаємо звіти",
          description: "Пояснюємо кожну цифру простою мовою"
        },
        {
          icon: MessageCircle,
          title: "Ви питаєте - отримуєте відповіді",
          description: "Будь-які питання про фінанси вашої клініки"
        },
        {
          icon: Calendar,
          title: "Обговорюємо наступний місяць",
          description: "Плануємо дії та цілі на основі фактів"
        }
      ]
    }
  }

  const currentData = viewData[activeView]

  // Example dialogue for solution view
  const dialogueExample = {
    question: "Чому прибуток впав на 30% в березні?",
    answer: "Дивіться: виручка залишилась такою ж, але витрати на матеріали зросли на 40 000 грн. Це закупка на квітень. У квітні ситуація нормалізується. Це не проблема - це запас."
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289877038-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Background Layers */}
      <GeometricPattern type="diagonal" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-base px-5 py-2">
            Premium: Регулярні Zoom-зустрічі
          </Badge>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl leading-none">
            Фінансист, який <span className="text-primary">пояснює</span>
          </h2>
          <p className="font-syne text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Не просто звіти, а розуміння вашого бізнесу
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-300 fill-backwards">
          <Button
            variant={activeView === "problem" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("problem")}
            className={`transition-all duration-300 ${
              activeView === "problem"
                ? "bg-destructive hover:bg-destructive/90 text-white"
                : "hover:bg-destructive/10 hover:border-destructive/40"
            }`}
          >
            <AlertTriangle className="h-5 w-5 mr-2" />
            Проблема
          </Button>
          <Button
            variant={activeView === "solution" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("solution")}
            className={`transition-all duration-300 ${
              activeView === "solution"
                ? "bg-primary hover:bg-primary/90 text-white"
                : "hover:bg-primary/10 hover:border-primary/40"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Рішення
          </Button>
        </div>

        {/* Dynamic Content */}
        <div className="space-y-6 animate-fade-in delay-500 fill-backwards">
          {/* Main Message Card */}
          <Card className={`${currentData.borderColor} border-2 ${currentData.bgColor} transition-all duration-500`}>
            <CardContent className="p-6 md:p-8 text-center">
              <p className={`font-syne text-xl md:text-2xl font-bold ${currentData.color}`}>
                {currentData.description}
              </p>
              <p className="mt-3 text-lg text-foreground/80">
                {currentData.subtitle}
              </p>
            </CardContent>
          </Card>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentData.cards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Card
                  key={`${activeView}-${index}`}
                  className={`${currentData.borderColor} border transition-all duration-500 hover:scale-102 animate-scale-in`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <CardContent className="p-5 space-y-3">
                    <div className={`p-2 rounded-lg ${currentData.bgColor} w-fit`}>
                      <IconComponent className={`h-6 w-6 ${currentData.color}`} />
                    </div>
                    <h3 className="font-syne text-lg font-bold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Dialogue Example - Only shown in solution view */}
          {activeView === "solution" && (
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-2 mb-4">
                  <Brain className="h-5 w-5 text-primary mt-1" />
                  <p className="text-sm font-bold text-primary uppercase tracking-wide">Приклад діалогу на зустрічі</p>
                </div>

                <div className="space-y-4">
                  {/* User Question */}
                  <div className="flex gap-3">
                    <div className="p-2 rounded-full bg-muted shrink-0">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-lg">
                      <p className="text-sm font-medium text-foreground/90">{dialogueExample.question}</p>
                    </div>
                  </div>

                  {/* Financier Answer */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-lg">
                      <p className="text-sm text-foreground/90">{dialogueExample.answer}</p>
                    </div>
                    <div className="p-2 rounded-full bg-primary/20 shrink-0">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Key Outcome */}
        <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="p-6 text-center">
            <p className="font-syne text-lg md:text-xl font-bold">
              <span className="text-destructive line-through mr-2">Тривога від незрозумілих цифр</span>
              <span className="text-primary">{"-->"}</span>
              <span className="text-primary ml-2">Впевненість та контроль</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
