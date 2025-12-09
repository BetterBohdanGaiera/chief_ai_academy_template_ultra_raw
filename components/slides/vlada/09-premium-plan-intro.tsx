"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"
import {
  Building2,
  TrendingUp,
  PiggyBank,
  Users,
  CheckCircle2,
  Sparkles,
  Handshake
} from "lucide-react"

interface GoalItem {
  id: string
  icon: React.ElementType
  title: string
  description: string
}

interface CriteriaItem {
  id: string
  text: string
}

export default function Slide09PremiumPlanIntro() {
  const [hoveredGoal, setHoveredGoal] = useState<string | null>(null)

  const personaData = {
    name: "Клініка Андрія",
    type: "Стоматологія",
    details: "3 крісла, 5 лікарів, 3 роки на ринку",
    avatar: "A"
  }

  const goals: GoalItem[] = [
    {
      id: "branch",
      icon: Building2,
      title: "Відкрити другий філіал",
      description: "Протягом року розширити бізнес"
    },
    {
      id: "profit",
      icon: TrendingUp,
      title: "Розуміти прибутковість послуг",
      description: "Які послуги приносять більше"
    },
    {
      id: "withdrawal",
      icon: PiggyBank,
      title: "Знати безпечну суму виведення",
      description: "Скільки можна забрати без ризику"
    },
    {
      id: "utilization",
      icon: Users,
      title: "Оптимізувати завантаження лікарів",
      description: "Ефективне використання команди"
    }
  ]

  const criteria: CriteriaItem[] = [
    { id: "influence", text: "Хочете не тільки бачити цифри, а й впливати на них" },
    { id: "development", text: "Плануєте розвиток: нове крісло, кабінет, філіал" },
    { id: "structure", text: "Хочете розуміти структуру собівартості послуг" },
    { id: "calls", text: "Потрібні регулярні дзвінки, а не лише месенджери" }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289882493-1.png"
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
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2 animate-slide-in-down">
            <Sparkles className="h-4 w-4 mr-2" />
            19,000 грн/місяць
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none animate-fade-in delay-200 fill-backwards">
            Фінансове{" "}
            <span className="text-primary">Партнерство</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Андрію потрібен не просто бухгалтер, а{" "}
            <span className="text-primary font-bold">ФІНАНСОВИЙ ПАРТНЕР</span>{" "}
            для росту
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Persona Card */}
          <div className="space-y-6 animate-slide-in-left delay-500 fill-backwards">
            <Card variant="layered" className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6 space-y-6">
                {/* Persona Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bebas text-3xl">
                    {personaData.avatar}
                  </div>
                  <div>
                    <h3 className="font-syne text-2xl font-bold">{personaData.name}</h3>
                    <p className="text-muted-foreground">{personaData.type}</p>
                    <p className="text-sm text-foreground/70">{personaData.details}</p>
                  </div>
                </div>

                {/* Persona Goals */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold flex items-center gap-2">
                    <Handshake className="h-4 w-4 text-primary" />
                    Цілі Андрія
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {goals.map((goal, index) => {
                      const IconComponent = goal.icon
                      const isHovered = hoveredGoal === goal.id
                      return (
                        <div
                          key={goal.id}
                          className={`
                            flex items-start gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer
                            ${isHovered
                              ? "bg-primary/15 scale-[1.02] shadow-sm"
                              : "bg-white/50 hover:bg-primary/10"
                            }
                          `}
                          style={{ animationDelay: `${(index + 6) * 100}ms` }}
                          onMouseEnter={() => setHoveredGoal(goal.id)}
                          onMouseLeave={() => setHoveredGoal(null)}
                        >
                          <div className={`
                            p-2 rounded-lg transition-colors duration-300
                            ${isHovered ? "bg-primary text-white" : "bg-primary/10 text-primary"}
                          `}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{goal.title}</p>
                            {isHovered && (
                              <p className="text-sm text-muted-foreground animate-fade-in">
                                {goal.description}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Criteria + Value */}
          <div className="space-y-6 animate-slide-in-right delay-600 fill-backwards">
            {/* Who is this for */}
            <Card className="border-border/50 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-syne text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary">Для кого</span> цей план?
                </h3>
                <div className="space-y-3">
                  {criteria.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 animate-fade-in fill-backwards"
                      style={{ animationDelay: `${(index + 8) * 100}ms` }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground/90">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Value Proposition */}
            <Card variant="glow" className="border-primary/40 bg-gradient-to-br from-primary/15 to-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">
                      Що входить
                    </p>
                    <p className="font-syne text-lg font-bold text-foreground">
                      Все з базового +{" "}
                      <span className="text-primary">6 додаткових сервісів</span>
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-primary/20">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Регулярні Zoom-зустрічі, розрахунок собівартості послуг,
                    фінансове планування на рік, персональна підтримка та консультації.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-1000 fill-backwards">
          <Card className="inline-block bg-white/90 backdrop-blur-sm border-primary/20 shadow-sm">
            <CardContent className="px-8 py-4">
              <p className="font-syne text-lg text-foreground/90">
                <span className="text-primary font-bold">Фінансове партнерство</span>{" "}
                = не просто цифри, а план як їх досягти
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
