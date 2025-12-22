"use client"

import { useState } from "react"
import { Bot, XCircle, CheckCircle2, Package, Wrench, DollarSign, Search, Brain, Target, UserCheck, ShoppingCart, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type ResponseType = "generic" | "valuefirst"

export default function BuildVsBuy() {
  const [activeResponse, setActiveResponse] = useState<ResponseType>("generic")

  const responseExamples = {
    generic: {
      title: "Общий ответ",
      subtitle: "Что производят готовые инструменты",
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      code: `"Отличный вопрос! Вам стоит попробовать [НазваниеПродукта] - он решает
именно эту проблему. Вот ссылка: https://..."`,
      issues: [
        "Мгновенно распознается как реклама",
        "Получает минусы или удаляется",
        "Наносит ущерб репутации бренда",
        "Активирует спам-фильтры",
      ],
    },
    valuefirst: {
      title: "Ответ с ценностью в приоритете",
      subtitle: "Что могут производить кастомные системы",
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/40",
      code: `"Был в такой же ситуации! Вот что я узнал за 6 месяцев проб и ошибок:

1. Для начала нужно понять, что [детальное техническое объяснение]
2. Ключевой инсайт в том, что [ценные знания]
3. Для реализации, рассмотрите [практические советы]

Я на самом деле создал что-то для автоматизации этого процесса после
того, как бился с этим несколько месяцев. С радостью поделюсь подробностями,
если интересно."`,
      benefits: [
        "Сначала предоставляет настоящую ценность",
        "Строит доверие и авторитет",
        "Генерирует 40%+ откликов",
        "Создает аутентичное вовлечение",
      ],
    },
  }

  const buyComponents = [
    {
      name: "Прогретые аккаунты",
      description: "Подготовленные Reddit аккаунты",
      cost: "$0.03-50+/аккаунт",
      icon: UserCheck,
    },
    {
      name: "Антидетект браузер",
      description: "DICloak, Multilogin",
      cost: "$8-99/мес",
      icon: Bot,
    },
    {
      name: "Прокси",
      description: "Резидентные прокси",
      cost: "$10-50+/мес",
      icon: Bot,
    },
    {
      name: "Reddit API",
      description: "Доступ через PRAW",
      cost: "$0-120+/мес",
      icon: Code,
    },
  ]

  const buildComponents = [
    {
      name: "Мониторинг ключевых слов",
      description: "Поиск релевантных постов и комментариев",
      whyBuild: "Готовые решения: $20-200/мес",
      icon: Search,
    },
    {
      name: "AI агент ответов",
      description: "Генерация комментариев с ценностью",
      whyBuild: "Готовые инструменты дают общие ответы",
      icon: Brain,
    },
    {
      name: "Оценка возможностей",
      description: "Приоритизация, где отвечать",
      whyBuild: "Кастомизировано под ваш продукт",
      icon: Target,
    },
    {
      name: "Конвейер проверки человеком",
      description: "Проверка перед публикацией",
      whyBuild: "Качество + защита от бана",
      icon: UserCheck,
    },
  ]

  const currentResponse = responseExamples[activeResponse]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365022099-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="dots" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Wrench className="h-5 w-5 mr-2" />
            СТРАТЕГИЧЕСКОЕ РЕШЕНИЕ
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Создать или купить
            <span className="block text-primary mt-2">Почему кастом может быть лучше</span>
          </h2>
        </div>

        {/* Response Comparison Section */}
        <div className="space-y-4 animate-slide-in-up delay-200 fill-backwards">
          <p className="text-center text-muted-foreground font-syne text-lg">
            &quot;Перефразировать вопрос и предложить наш продукт&quot; - вот что делают все готовые инструменты
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant={activeResponse === "generic" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveResponse("generic")}
              className={`transition-all duration-300 ${
                activeResponse === "generic"
                  ? "bg-destructive hover:bg-destructive/90 text-white"
                  : "hover:bg-destructive/10 hover:border-destructive/40"
              }`}
            >
              <XCircle className="h-5 w-5 mr-2" />
              Общий ответ
            </Button>
            <Button
              variant={activeResponse === "valuefirst" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveResponse("valuefirst")}
              className={`transition-all duration-300 ${
                activeResponse === "valuefirst"
                  ? "bg-success hover:bg-success/90 text-white"
                  : "hover:bg-success/10 hover:border-success/40"
              }`}
            >
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Ответ с ценностью в приоритете
            </Button>
          </div>

          {/* Response Example Card */}
          <Card className={`${currentResponse.borderColor} border-2 ${currentResponse.bgColor} animate-fade-in`}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                {activeResponse === "generic" ? (
                  <XCircle className={`h-6 w-6 ${currentResponse.color}`} />
                ) : (
                  <CheckCircle2 className={`h-6 w-6 ${currentResponse.color}`} />
                )}
                <div>
                  <h3 className={`font-syne text-xl font-bold ${currentResponse.color}`}>
                    {currentResponse.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{currentResponse.subtitle}</p>
                </div>
              </div>

              {/* Code Block */}
              <div className="bg-charcoal/95 rounded-lg p-4 overflow-x-auto">
                <pre className="font-jetbrains text-sm text-white/90 whitespace-pre-wrap">
                  {currentResponse.code}
                </pre>
              </div>

              {/* Issues or Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                {activeResponse === "generic"
                  ? currentResponse.issues?.map((issue, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-destructive/10"
                      >
                        <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80">{issue}</span>
                      </div>
                    ))
                  : currentResponse.benefits?.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-success/10"
                      >
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80">{benefit}</span>
                      </div>
                    ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Buy vs Build Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in delay-400 fill-backwards">
          {/* What We Buy */}
          <Card className="border-2 border-warning/40">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-warning/10">
                  <ShoppingCart className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-bold">Что мы покупаем</h3>
                  <p className="text-sm text-muted-foreground">Готовая инфраструктура</p>
                </div>
              </div>

              <div className="space-y-3">
                {buyComponents.map((component, idx) => {
                  const Icon = component.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-warning" />
                        <div>
                          <p className="font-semibold text-sm">{component.name}</p>
                          <p className="text-xs text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-jetbrains text-sm font-bold text-warning">{component.cost}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* What We Build */}
          <Card className="border-2 border-primary/40">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-bold">Что мы создаем</h3>
                  <p className="text-sm text-muted-foreground">Кастом для конкурентного преимущества</p>
                </div>
              </div>

              <div className="space-y-3">
                {buildComponents.map((component, idx) => {
                  const Icon = component.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">{component.name}</p>
                          <p className="text-xs text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary font-medium">{component.whyBuild}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 max-w-4xl mx-auto animate-fade-in delay-600 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardContent className="p-6">
              <p className="font-syne text-xl md:text-2xl font-bold text-primary">
                Разница между спамом и вовлечением
                <span className="block mt-2 text-foreground">
                  в том, начинаете ли вы с <span className="text-success">ценности</span> или <span className="text-destructive">рекламы</span>
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
