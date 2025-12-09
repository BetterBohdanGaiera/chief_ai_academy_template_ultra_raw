"use client"

import { useState } from "react"
import { CheckCircle2, Zap, TrendingUp, BarChart3, Users, MessageSquare, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type PlanType = "basic" | "premium"

export default function DecisionGuideSlide() {
  const [activePlan, setActivePlan] = useState<PlanType>("basic")

  const planData = {
    basic: {
      title: "9 000 грн/міс",
      subtitle: "Базовий тариф",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/40",
      buttonBg: "bg-primary hover:bg-primary/90",
      buttonHover: "hover:bg-primary/10 hover:border-primary/40",
      criteria: [
        {
          id: 1,
          text: "Хочете просто навести лад у цифрах",
          description: "Впорядкування фінансового обліку",
          icon: BarChart3,
        },
        {
          id: 2,
          text: "Вам достатньо звітів у листуванні",
          description: "Регулярна звітність без особистих зустрічей",
          icon: MessageSquare,
        },
        {
          id: 3,
          text: "Клініка працює стабільно",
          description: "Без планів на різке зростання",
          icon: CheckCircle2,
        },
      ],
      insight: "Ідеальний вибір для клінік, які хочуть порядок у цифрах без зайвих ускладнень",
    },
    premium: {
      title: "19 000 грн/міс",
      subtitle: "Преміум тариф",
      color: "text-[#1E3A5F]",
      bgColor: "bg-[#1E3A5F]/5",
      borderColor: "border-[#1E3A5F]/40",
      buttonBg: "bg-[#1E3A5F] hover:bg-[#1E3A5F]/90",
      buttonHover: "hover:bg-[#1E3A5F]/10 hover:border-[#1E3A5F]/40",
      criteria: [
        {
          id: 1,
          text: "Хочете не лише бачити, але й керувати прибутком",
          description: "Активне управління фінансами клініки",
          icon: TrendingUp,
        },
        {
          id: 2,
          text: "Плануєте розвиток",
          description: "Нове крісло, філіал, обладнання",
          icon: Zap,
        },
        {
          id: 3,
          text: "Потрібен партнер для обговорення цифр",
          description: "Регулярні дзвінки та стратегічні сесії",
          icon: Users,
        },
        {
          id: 4,
          text: "Хочете розуміти вигідність послуг",
          description: "Аналіз рентабельності кожної послуги",
          icon: Award,
        },
      ],
      insight: "Для клінік, які готові до активного зростання з фінансовим партнером",
    },
  }

  const currentPlan = planData[activePlan]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289871048-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-base px-5 py-2 border-primary text-primary font-medium animate-slide-in-down">
            Який тариф обрати?
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none animate-fade-in delay-200 fill-backwards">
            Що <span className="text-primary">обрати</span>?
          </h2>
          <p className="font-syne text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Оберіть тариф, який відповідає вашим потребам
          </p>
        </div>

        {/* Interactive Toggle */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-500 fill-backwards">
          <Button
            variant={activePlan === "basic" ? "default" : "outline"}
            size="lg"
            onClick={() => setActivePlan("basic")}
            className={`transition-all duration-300 text-lg px-8 py-6 ${
              activePlan === "basic"
                ? "bg-primary hover:bg-primary/90 text-white shadow-glow"
                : "hover:bg-primary/10 hover:border-primary/40"
            }`}
            aria-pressed={activePlan === "basic"}
          >
            <BarChart3 className="h-5 w-5 mr-2" />
            9 000 грн/міс
          </Button>
          <Button
            variant={activePlan === "premium" ? "default" : "outline"}
            size="lg"
            onClick={() => setActivePlan("premium")}
            className={`transition-all duration-300 text-lg px-8 py-6 ${
              activePlan === "premium"
                ? "bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white shadow-glow-blue"
                : "hover:bg-[#1E3A5F]/10 hover:border-[#1E3A5F]/40"
            }`}
            aria-pressed={activePlan === "premium"}
          >
            <TrendingUp className="h-5 w-5 mr-2" />
            19 000 грн/міс
          </Button>
        </div>

        {/* Criteria Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in">
          {currentPlan.criteria.map((criterion, index) => {
            const IconComponent = criterion.icon
            return (
              <Card
                key={`${activePlan}-${criterion.id}`}
                className={`${currentPlan.borderColor} border-2 transition-all duration-300 hover:scale-[1.02] animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 md:p-6 relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 ${currentPlan.bgColor} blur-2xl`} />

                  {/* Content */}
                  <div className="relative flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${currentPlan.bgColor} shrink-0`}>
                      <IconComponent className={`h-6 w-6 ${currentPlan.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-syne text-lg font-bold leading-tight">
                        {criterion.text}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-700 fill-backwards">
          <Card className={`${currentPlan.bgColor} ${currentPlan.borderColor} border-2 max-w-3xl mx-auto`}>
            <CardContent className="p-6 md:p-8">
              <p className={`font-syne text-lg md:text-xl font-bold ${currentPlan.color}`}>
                {currentPlan.insight}
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                {activePlan === "basic"
                  ? "Стабільність та порядок - ваші пріоритети"
                  : "Зростання та стратегічний розвиток - ваш фокус"
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
