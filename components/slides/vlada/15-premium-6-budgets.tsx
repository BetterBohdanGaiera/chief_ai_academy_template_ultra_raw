"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, Search, Wallet, TrendingUp, Package, Megaphone, Users, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type ViewType = "all" | "overspend"

interface BudgetCategory {
  id: string
  name: string
  icon: React.ElementType
  limit: string
  actual: string
  status: "normal" | "overspend"
  difference?: string
}

interface RootCause {
  id: string
  question: string
  action: string
}

export default function Slide15PremiumBudgets() {
  const [activeView, setActiveView] = useState<ViewType>("all")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const budgetCategories: BudgetCategory[] = [
    {
      id: "materials",
      name: "Матеріали",
      icon: Package,
      limit: "120,000 грн",
      actual: "145,000 грн",
      status: "overspend",
      difference: "+25,000 грн"
    },
    {
      id: "advertising",
      name: "Реклама",
      icon: Megaphone,
      limit: "25,000 грн",
      actual: "22,000 грн",
      status: "normal"
    },
    {
      id: "payroll",
      name: "Зарплата",
      icon: Users,
      limit: "40% виручки",
      actual: "38%",
      status: "normal"
    },
    {
      id: "utilities",
      name: "Комунальні",
      icon: Zap,
      limit: "15,000 грн",
      actual: "14,500 грн",
      status: "normal"
    }
  ]

  const rootCauses: RootCause[] = [
    {
      id: "supplier",
      question: "Постачальник підняв ціни?",
      action: "знайти альтернативу"
    },
    {
      id: "advance",
      question: "Закупили наперед?",
      action: "нормально, врахуємо наступного місяця"
    },
    {
      id: "doctors",
      question: "Лікарі перевитрачають?",
      action: "переглянути норми"
    }
  ]

  const filteredCategories = activeView === "all"
    ? budgetCategories
    : budgetCategories.filter(cat => cat.status === "overspend")

  const getProgressPercent = (category: BudgetCategory): number => {
    if (category.id === "payroll") {
      return (38 / 40) * 100
    }
    const actualNum = parseInt(category.actual.replace(/[^\d]/g, ''))
    const limitNum = parseInt(category.limit.replace(/[^\d]/g, ''))
    return (actualNum / limitNum) * 100
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289878740-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Decorative layers */}
      <GeometricPattern type="dots" opacity={0.06} color="#0A0A0A" spacing={50} />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge
            className="text-base px-5 py-2 bg-[#00897B] text-white border-[#00897B] shadow-[0_0_20px_rgba(0,137,123,0.3)]"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Преміум #6
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none text-[#1A1A2E]">
            БЮДЖЕТИ ТА <span className="text-[#00897B]">ЛІМІТИ</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-[#64748B] max-w-3xl mx-auto">
            Витрати &quot;наростають&quot; непомітно. Контролюємо ключові категорії
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-200 fill-backwards">
          <Button
            variant={activeView === "all" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("all")}
            className={`transition-all duration-300 ${
              activeView === "all"
                ? "bg-[#00897B] hover:bg-[#00695C] text-white"
                : "border-[#00897B] text-[#00897B] hover:bg-[#00897B]/10"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Усі категорії
          </Button>
          <Button
            variant={activeView === "overspend" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("overspend")}
            className={`transition-all duration-300 ${
              activeView === "overspend"
                ? "bg-[#EF5350] hover:bg-[#E53935] text-white"
                : "border-[#EF5350] text-[#EF5350] hover:bg-[#EF5350]/10"
            }`}
          >
            <AlertCircle className="h-5 w-5 mr-2" />
            Тільки перевитрати
          </Button>
        </div>

        {/* Budget Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in delay-300 fill-backwards">
          {filteredCategories.map((category, index) => {
            const IconComponent = category.icon
            const isOverspend = category.status === "overspend"
            const isExpanded = expandedCategory === category.id
            const progressPercent = getProgressPercent(category)

            return (
              <Card
                key={`${activeView}-${category.id}`}
                className={`
                  transition-all duration-300
                  ${isOverspend
                    ? "border-[#EF5350]/50 bg-[#EF5350]/5 hover:border-[#EF5350]"
                    : "border-[#4CAF50]/50 bg-[#4CAF50]/5 hover:border-[#4CAF50]"
                  }
                  ${isExpanded ? "scale-[1.02] shadow-lg" : ""}
                  animate-scale-in
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 space-y-4">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isOverspend ? "bg-[#EF5350]/10" : "bg-[#4CAF50]/10"}`}>
                        <IconComponent className={`h-6 w-6 ${isOverspend ? "text-[#EF5350]" : "text-[#4CAF50]"}`} />
                      </div>
                      <h3 className="font-syne text-xl font-bold text-[#1A1A2E]">{category.name}</h3>
                    </div>
                    <Badge
                      className={`text-sm ${
                        isOverspend
                          ? "bg-[#EF5350]/10 text-[#EF5350] border-[#EF5350]/30"
                          : "bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/30"
                      }`}
                    >
                      {isOverspend ? "Перевитрати" : "Норма"}
                    </Badge>
                  </div>

                  {/* Limit vs Actual */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#64748B] mb-1">Ліміт</p>
                      <p className="font-jetbrains text-lg font-semibold text-[#1A1A2E]">{category.limit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#64748B] mb-1">Фактично</p>
                      <p className={`font-jetbrains text-lg font-semibold ${isOverspend ? "text-[#EF5350]" : "text-[#4CAF50]"}`}>
                        {category.actual}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
                          isOverspend ? "bg-[#EF5350]" : "bg-[#4CAF50]"
                        }`}
                        style={{ width: `${Math.min(progressPercent, 100)}%` }}
                      />
                      {progressPercent > 100 && (
                        <div
                          className="absolute top-0 h-full bg-[#EF5350]/30 rounded-r-full"
                          style={{ left: '100%', width: `${progressPercent - 100}%`, maxWidth: '20%' }}
                        />
                      )}
                    </div>
                    {category.difference && (
                      <p className={`text-sm font-semibold ${isOverspend ? "text-[#EF5350]" : "text-[#4CAF50]"}`}>
                        {category.difference}
                      </p>
                    )}
                  </div>

                  {/* Expandable Investigation (for overspend only) */}
                  {isOverspend && (
                    <div className="pt-2 border-t border-[#EF5350]/20">
                      <button
                        onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                        className="w-full flex items-center justify-between text-sm text-[#EF5350] hover:text-[#E53935] transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Search className="h-4 w-4" />
                          Дослідження причин
                        </span>
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 space-y-3 animate-fade-in">
                          <p className="text-sm font-semibold text-[#1A1A2E]">
                            Матеріали +25,000 грн - чому?
                          </p>
                          {rootCauses.map((cause) => (
                            <div
                              key={cause.id}
                              className="flex items-start gap-3 p-3 bg-white/80 rounded-lg border border-[#EF5350]/20"
                            >
                              <AlertCircle className="h-5 w-5 text-[#FF9800] shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-[#1A1A2E]">{cause.question}</p>
                                <p className="text-sm text-[#64748B]">→ {cause.action}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Result */}
        <Card className="bg-[#00897B]/5 border-[#00897B]/30 animate-fade-in delay-500 fill-backwards">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-[#00897B]" />
              <div>
                <p className="font-syne text-lg font-bold text-[#00897B]">Результат:</p>
                <p className="text-[#1A1A2E]">
                  Контроль витрат без відчуття &quot;економимо на всьому&quot;
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
