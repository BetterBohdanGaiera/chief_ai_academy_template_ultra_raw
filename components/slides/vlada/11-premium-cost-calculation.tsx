"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"
import {
  Eye,
  Search,
  TrendingUp,
  Target,
  AlertCircle,
  CheckCircle2,
  Calculator,
  CircleDollarSign
} from "lucide-react"

type ViewType = "surface" | "deep"

interface CostItem {
  label: string
  amount: number
  description?: string
}

interface BenefitItem {
  id: string
  icon: React.ElementType
  text: string
}

export default function Slide11PremiumCostCalculation() {
  const [activeView, setActiveView] = useState<ViewType>("surface")

  const costBreakdown: CostItem[] = [
    { label: "Імплант + витратники", amount: 6000, description: "Матеріали та комплектуючі" },
    { label: "Робота лікаря (2 години)", amount: 3000, description: "Погодинна ставка спеціаліста" },
    { label: "Накладні витрати*", amount: 2000, description: "Частка оренди, комунальних, адмін витрат" }
  ]

  const totalCost = costBreakdown.reduce((sum, item) => sum + item.amount, 0)
  const patientPrice = 15000
  const profit = patientPrice - totalCost
  const profitMargin = Math.round((profit / patientPrice) * 100)

  const benefits: BenefitItem[] = [
    { id: "profitable", icon: TrendingUp, text: "Дізнаєтесь, які послуги насправді прибуткові" },
    { id: "prices", icon: Target, text: "Розумієте, де можна підняти ціни" },
    { id: "losses", icon: AlertCircle, text: "Бачите, які послуги 'їдять' гроші" },
    { id: "marketing", icon: CheckCircle2, text: "Фокусуєте маркетинг на прибуткових послугах" }
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("uk-UA", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value) + " грн"
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289897481-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="diagonal" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2 animate-slide-in-down">
            <Calculator className="h-4 w-4 mr-2" />
            Розрахунок собівартості
          </Badge>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl leading-none animate-fade-in delay-200 fill-backwards">
            Ви знаєте ціни послуг.{" "}
            <span className="block mt-2">
              А скільки вони{" "}
              <span className="text-primary">НАСПРАВДІ КОШТУЮТЬ?</span>
            </span>
          </h2>
          <p className="font-syne text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Щомісяця розраховуємо собівартість до 20 ключових послуг
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-500 fill-backwards">
          <Button
            variant={activeView === "surface" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("surface")}
            className={`transition-all duration-300 ${
              activeView === "surface"
                ? "bg-warning hover:bg-warning/90 text-white"
                : "hover:bg-warning/10 hover:border-warning/40"
            }`}
          >
            <Eye className="h-5 w-5 mr-2" />
            Поверхневий погляд
          </Button>
          <Button
            variant={activeView === "deep" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("deep")}
            className={`transition-all duration-300 ${
              activeView === "deep"
                ? "bg-primary hover:bg-primary/90 text-white"
                : "hover:bg-primary/10 hover:border-primary/40"
            }`}
          >
            <Search className="h-5 w-5 mr-2" />
            Глибокий аналіз
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Left Column: Cost Breakdown */}
          <div className="animate-fade-in delay-600 fill-backwards">
            {activeView === "surface" ? (
              /* Surface View - Simple Price Display */
              <Card className="border-warning/40 bg-gradient-to-br from-warning/10 to-warning/5">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold">
                      Приклад: Встановлення імпланта
                    </p>
                    <div className="py-8">
                      <p className="text-muted-foreground mb-2">Ціна для пацієнта:</p>
                      <p className="font-bebas text-6xl md:text-8xl text-warning">
                        {formatCurrency(patientPrice)}
                      </p>
                    </div>
                    <Card className="bg-white/60 border-warning/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-center gap-3 text-warning">
                          <AlertCircle className="h-6 w-6" />
                          <p className="font-syne text-lg font-semibold">
                            А прибуток? Хто його знає...
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* Deep View - Full Cost Breakdown */
              <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 space-y-6">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold flex items-center gap-2">
                    <CircleDollarSign className="h-4 w-4 text-primary" />
                    Приклад: Встановлення імпланта
                  </p>

                  {/* Cost Breakdown Table */}
                  <div className="space-y-3">
                    {costBreakdown.map((item, index) => (
                      <div
                        key={item.label}
                        className="animate-fade-in fill-backwards"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{item.label}</p>
                            {item.description && (
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            )}
                          </div>
                          <p className="font-jetbrains text-lg font-semibold text-foreground">
                            {formatCurrency(item.amount)}
                          </p>
                        </div>
                        {/* Cost bar visualization */}
                        <div className="h-2 bg-muted/30 rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full bg-primary/60 rounded-full transition-all duration-500"
                            style={{ width: `${(item.amount / patientPrice) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}

                    {/* Total Cost Row */}
                    <div className="border-t border-primary/30 pt-3 mt-4">
                      <div className="flex items-center justify-between p-3 bg-primary/20 rounded-lg">
                        <p className="font-syne font-bold text-foreground">Собівартість</p>
                        <p className="font-jetbrains text-xl font-bold text-primary">
                          {formatCurrency(totalCost)}
                        </p>
                      </div>
                    </div>

                    {/* Patient Price Row */}
                    <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                      <p className="font-medium text-foreground">Ціна для пацієнта</p>
                      <p className="font-jetbrains text-lg text-foreground">
                        {formatCurrency(patientPrice)}
                      </p>
                    </div>

                    {/* Profit Row */}
                    <div className="border-t border-success/30 pt-3">
                      <div className="flex items-center justify-between p-4 bg-success/20 rounded-lg border border-success/40">
                        <div>
                          <p className="font-syne font-bold text-success text-lg">Ваш прибуток</p>
                          <p className="text-sm text-success/80">Маржа: {profitMargin}%</p>
                        </div>
                        <p className="font-bebas text-4xl text-success">
                          {formatCurrency(profit)}
                        </p>
                      </div>
                      {/* Profit bar visualization */}
                      <div className="h-4 bg-muted/30 rounded-full overflow-hidden mt-3">
                        <div
                          className="h-full bg-success rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                          style={{ width: `${profitMargin}%` }}
                        >
                          <span className="text-xs text-white font-bold">{profitMargin}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overhead Note */}
                  <p className="text-xs text-muted-foreground italic">
                    * накладні = частка оренди, комунальних, адмін витрат на одну послугу
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column: Benefits */}
          <div className="space-y-6 animate-slide-in-right delay-700 fill-backwards">
            <Card className="border-border/50 bg-white/80 backdrop-blur-sm h-full">
              <CardContent className="p-6 space-y-6 h-full flex flex-col">
                <h3 className="font-syne text-xl font-bold text-foreground">
                  <span className="text-primary">Що це дає?</span>
                </h3>

                <div className="space-y-4 flex-1">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div
                        key={benefit.id}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/50 hover:bg-primary/10 transition-colors duration-300 animate-fade-in fill-backwards"
                        style={{ animationDelay: `${(index + 8) * 100}ms` }}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <p className="text-foreground/90 pt-1">{benefit.text}</p>
                      </div>
                    )
                  })}
                </div>

                {/* Call to Action */}
                {activeView === "deep" && (
                  <Card className="bg-primary/10 border-primary/30 animate-fade-in">
                    <CardContent className="p-4">
                      <p className="text-sm text-center text-foreground/90">
                        <span className="font-bold text-primary">Результат:</span>{" "}
                        рішення на основі даних, а не інтуїції
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center pt-4 animate-fade-in delay-1000 fill-backwards">
          <Card className="inline-block bg-white/95 backdrop-blur-md border-2 border-primary/30 shadow-sm">
            <CardContent className="px-8 py-4">
              <p className="font-syne text-lg md:text-xl font-bold text-primary">
                {activeView === "surface"
                  ? "Без аналізу собівартості - ви працюєте наосліп"
                  : "Знання собівартості = контроль над прибутком"
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
