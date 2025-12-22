"use client"

import { useState } from "react"
import { AlertTriangle, Shield, XCircle, CheckCircle2, Eye, EyeOff, Link2, Bot, Globe, ThumbsUp, MessageSquare, Star, Mail, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type SafetyView = "dangerous" | "safe"

export default function ShadowbanSafety() {
  const [activeView, setActiveView] = useState<SafetyView>("dangerous")

  const safetyData = {
    dangerous: {
      title: "Триггеры бана",
      subtitle: "Действия, которые приводят к теневому бану",
      icon: AlertTriangle,
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      headerBg: "bg-destructive/10",
      items: [
        {
          label: "Кросс-постинг одинакового контента",
          description: "Публикация идентичного контента в несколько сабреддитов",
          icon: Link2,
          iconColor: "text-destructive",
        },
        {
          label: "Манипуляция голосами",
          description: "Использование нескольких аккаунтов или координация голосов",
          icon: ThumbsUp,
          iconColor: "text-destructive",
        },
        {
          label: "Повторяющиеся промо-ссылки",
          description: "Чрезмерное количество ссылок на один домен",
          icon: Link2,
          iconColor: "text-destructive",
        },
        {
          label: "Автоматизированное поведение",
          description: "Бот-подобные паттерны без правильного прогрева",
          icon: Bot,
          iconColor: "text-destructive",
        },
        {
          label: "VPN при создании аккаунта",
          description: "Создание аккаунтов через VPN/прокси",
          icon: Globe,
          iconColor: "text-destructive",
        },
      ],
      checkMethods: [
        { label: "r/ShadowBan", description: "Бот проверит ваш аккаунт" },
        { label: "Тест в инкогнито", description: "Просмотрите профиль без входа" },
        { label: "reddit.com/appeal", description: "Отправьте апелляцию при бане" },
      ],
    },
    safe: {
      title: "Правила выживания",
      subtitle: "Действия, которые обеспечивают безопасность",
      icon: Shield,
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/40",
      headerBg: "bg-success/10",
      items: [
        {
          label: "Правило 9:1 для постов",
          description: "9 ценных постов на каждую промо-ссылку",
          icon: Star,
          iconColor: "text-success",
        },
        {
          label: "Правило 10:1 для комментариев",
          description: "10 полезных комментариев на каждое упоминание продукта",
          icon: MessageSquare,
          iconColor: "text-success",
        },
        {
          label: "Дождитесь 300+ кармы",
          description: "Не автоматизируйте до достаточной кармы",
          icon: Clock,
          iconColor: "text-success",
        },
        {
          label: "Подтвердите email",
          description: "Добавляет сигнал доверия к вашему аккаунту",
          icon: Mail,
          iconColor: "text-success",
        },
        {
          label: "Давайте реальную ценность",
          description: "Помогайте прежде чем продвигать",
          icon: CheckCircle2,
          iconColor: "text-success",
        },
      ],
      checkMethods: [
        { label: "Сначала создайте репутацию", description: "Органическое участие" },
        { label: "Постепенная автоматизация", description: "Масштабируйтесь медленно" },
        { label: "Качество важнее количества", description: "Фокус на ценности" },
      ],
    },
  }

  const currentData = safetyData[activeView]
  const IconHeader = currentData.icon

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365012942-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="diagonal" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Shield className="h-5 w-5 mr-2" />
            РУКОВОДСТВО ПО БЕЗОПАСНОСТИ
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Теневой бан
            <span className="block text-primary mt-2">и безопасность</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Посты скрыты от всех, кроме вас - вы не знаете, что забанены
          </p>
        </div>

        {/* Risk Indicator */}
        <div className="flex justify-center gap-4 items-center animate-slide-in-up delay-200 fill-backwards">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === "dangerous"
              ? "bg-destructive/20 border-2 border-destructive"
              : "bg-muted/20 border border-border"
          }`}>
            <EyeOff className={`h-5 w-5 ${activeView === "dangerous" ? "text-destructive" : "text-muted-foreground"}`} />
            <span className={`font-semibold ${activeView === "dangerous" ? "text-destructive" : "text-muted-foreground"}`}>
              Скрыто
            </span>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-destructive to-success rounded-full" />
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === "safe"
              ? "bg-success/20 border-2 border-success"
              : "bg-muted/20 border border-border"
          }`}>
            <Eye className={`h-5 w-5 ${activeView === "safe" ? "text-success" : "text-muted-foreground"}`} />
            <span className={`font-semibold ${activeView === "safe" ? "text-success" : "text-muted-foreground"}`}>
              Видимо
            </span>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-300 fill-backwards">
          <Button
            variant={activeView === "dangerous" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("dangerous")}
            className={`transition-all duration-300 ${
              activeView === "dangerous"
                ? "bg-destructive hover:bg-destructive/90 text-white"
                : "hover:bg-destructive/10 hover:border-destructive/40"
            }`}
          >
            <AlertTriangle className="h-5 w-5 mr-2" />
            Опасно
          </Button>
          <Button
            variant={activeView === "safe" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("safe")}
            className={`transition-all duration-300 ${
              activeView === "safe"
                ? "bg-success hover:bg-success/90 text-white"
                : "hover:bg-success/10 hover:border-success/40"
            }`}
          >
            <Shield className="h-5 w-5 mr-2" />
            Безопасно
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in delay-400 fill-backwards">
          {/* Behavior Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className={`flex items-center gap-3 ${currentData.headerBg} p-4 rounded-xl`}>
              <IconHeader className={`h-8 w-8 ${currentData.color}`} />
              <div>
                <h3 className="font-syne text-xl font-bold">{currentData.title}</h3>
                <p className="text-sm text-muted-foreground">{currentData.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.items.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <Card
                    key={`${activeView}-${index}`}
                    className={`${currentData.borderColor} border-2 transition-all duration-300 hover:scale-102 animate-scale-in`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${currentData.bgColor}`}>
                          <ItemIcon className={`h-5 w-5 ${item.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-syne font-bold text-base">{item.label}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Check Methods / Guidelines */}
          <div className="space-y-4">
            <Card className={`${currentData.borderColor} border-2`}>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-syne text-lg font-bold flex items-center gap-2">
                  {activeView === "dangerous" ? (
                    <>
                      <Eye className="h-5 w-5 text-primary" />
                      Как проверить
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      Лучшие практики
                    </>
                  )}
                </h4>
                <div className="space-y-3">
                  {currentData.checkMethods.map((method, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                    >
                      <div className={`w-6 h-6 rounded-full ${currentData.bgColor} flex items-center justify-center shrink-0`}>
                        <span className={`text-xs font-bold ${currentData.color}`}>{idx + 1}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{method.label}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What is Shadowban */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <h4 className="font-syne font-bold text-sm text-primary mb-2">Что такое теневой бан?</h4>
                <p className="text-sm text-foreground/80">
                  Ваши посты и комментарии становятся невидимыми для всех, кроме вас.
                  Вы продолжаете публиковать контент как обычно, не зная, что никто его не видит.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center pt-4 max-w-4xl mx-auto animate-fade-in delay-600 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardContent className="p-6">
              <p className="font-syne text-xl md:text-2xl font-bold">
                {activeView === "dangerous" ? (
                  <>
                    <span className="text-destructive">Избегайте этих действий</span>
                    <span className="block mt-2 text-foreground">или рискуете потерять аккаунт навсегда</span>
                  </>
                ) : (
                  <>
                    <span className="text-success">Следуйте этим правилам</span>
                    <span className="block mt-2 text-foreground">чтобы создать устойчивое присутствие на Reddit</span>
                  </>
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
