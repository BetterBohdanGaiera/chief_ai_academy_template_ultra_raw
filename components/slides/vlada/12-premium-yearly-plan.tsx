"use client"

import { useState, useEffect } from "react"
import { Calendar, Target, TrendingUp, AlertTriangle, ChevronRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

interface MonthData {
  month: string
  plan: number
  actual: number | null
  difference: number | null
}

export default function PremiumYearlyPlan() {
  const [revealedQuarters, setRevealedQuarters] = useState<number>(0)
  const [isAutoRevealing, setIsAutoRevealing] = useState(true)

  // Yearly plan data for Andrii's clinic
  const yearlyData: MonthData[][] = [
    // Q1
    [
      { month: "Січень", plan: 1000000, actual: 980000, difference: -20000 },
      { month: "Лютий", plan: 1050000, actual: 1100000, difference: 50000 },
      { month: "Березень", plan: 1100000, actual: 1080000, difference: -20000 },
    ],
    // Q2
    [
      { month: "Квітень", plan: 1100000, actual: null, difference: null },
      { month: "Травень", plan: 1150000, actual: null, difference: null },
      { month: "Червень", plan: 1150000, actual: null, difference: null },
    ],
    // Q3
    [
      { month: "Липень", plan: 920000, actual: null, difference: null },
      { month: "Серпень", plan: 920000, actual: null, difference: null },
      { month: "Вересень", plan: 1100000, actual: null, difference: null },
    ],
    // Q4
    [
      { month: "Жовтень", plan: 1150000, actual: null, difference: null },
      { month: "Листопад", plan: 1180000, actual: null, difference: null },
      { month: "Грудень", plan: 1380000, actual: null, difference: null },
    ],
  ]

  const quarterLabels = ["Q1 (Січень-Березень)", "Q2 (Квітень-Червень)", "Q3 (Липень-Вересень)", "Q4 (Жовтень-Грудень)"]
  const quarterNotes = [
    "Поступове зростання з початку року",
    "Стабілізація та підготовка до літа",
    "Сезонний спад (-20%): відпустки лікарів",
    "Активний сезон + грудень (+15%)"
  ]

  // Auto-reveal quarters progressively
  useEffect(() => {
    if (isAutoRevealing && revealedQuarters < 4) {
      const timer = setTimeout(() => {
        setRevealedQuarters(prev => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [revealedQuarters, isAutoRevealing])

  const revealNextQuarter = () => {
    if (revealedQuarters < 4) {
      setIsAutoRevealing(false)
      setRevealedQuarters(prev => prev + 1)
    }
  }

  const revealAll = () => {
    setIsAutoRevealing(false)
    setRevealedQuarters(4)
  }

  const formatCurrency = (value: number | null) => {
    if (value === null) return "?"
    return new Intl.NumberFormat('uk-UA').format(value)
  }

  const formatDifference = (value: number | null) => {
    if (value === null) return "-"
    const prefix = value > 0 ? "+" : ""
    return prefix + new Intl.NumberFormat('uk-UA').format(value)
  }

  // Calculate cumulative progress
  const calculateCumulativeProgress = () => {
    let totalPlan = 0
    let totalActual = 0

    yearlyData.slice(0, revealedQuarters).forEach(quarter => {
      quarter.forEach(month => {
        totalPlan += month.plan
        if (month.actual !== null) {
          totalActual += month.actual
        }
      })
    })

    return { totalPlan, totalActual }
  }

  const { totalPlan, totalActual } = calculateCumulativeProgress()
  const goalMonthly = 1200000
  const currentRevenue = 950000

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289887319-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Background Layers */}
      <GeometricPattern type="dots" opacity={0.06} />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <Badge variant="glow" className="text-base px-5 py-2">
            Premium: Фінансовий план на рік
          </Badge>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl leading-none">
            Знати куди <span className="text-primary">рухаєтесь</span>
          </h2>
        </div>

        {/* Problem Statement */}
        <Card className="border-destructive/30 bg-destructive/5 animate-fade-in delay-200 fill-backwards">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="font-syne text-base font-bold text-destructive">Типова ситуація</p>
                <p className="text-sm text-foreground/80 mt-1">
                  Працюєте місяць за місяцем. Хороший місяць - радієте. Поганий - хвилюєтесь.
                  Але немає розуміння: рухаєтесь до цілі чи ні?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goal Card */}
        <Card className="border-primary/40 bg-gradient-to-r from-primary/10 to-primary/5 animate-fade-in delay-400 fill-backwards">
          <CardContent className="p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Клініка Андрія - Ціль на рік</p>
                  <p className="font-syne text-xl font-bold">
                    <span className="text-primary">{formatCurrency(goalMonthly)} грн/міс</span>
                    <span className="text-muted-foreground text-base ml-2">(зараз {formatCurrency(currentRevenue)} грн/міс)</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {revealedQuarters < 4 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={revealNextQuarter}
                    className="text-primary border-primary/40 hover:bg-primary/10"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Наступний квартал
                  </Button>
                )}
                {revealedQuarters < 4 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={revealAll}
                    className="text-muted-foreground"
                  >
                    Показати все
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progressive Quarterly Tables */}
        <div className="space-y-4">
          {yearlyData.map((quarter, quarterIndex) => (
            <div
              key={quarterIndex}
              className={`transition-all duration-500 ${
                quarterIndex < revealedQuarters
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none absolute"
              }`}
              style={{
                transitionDelay: quarterIndex < revealedQuarters ? `${quarterIndex * 150}ms` : '0ms'
              }}
            >
              {quarterIndex < revealedQuarters && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bebas text-xl text-primary">
                      {quarterLabels[quarterIndex]}
                    </h3>
                    <span className="text-xs text-muted-foreground italic">
                      {quarterNotes[quarterIndex]}
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-border/40 rounded-lg bg-white/80 backdrop-blur-sm">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border/40 bg-muted/30">
                          <th className="px-4 py-2.5 text-left text-sm font-bold text-foreground">Місяць</th>
                          <th className="px-4 py-2.5 text-right text-sm font-bold text-foreground">План</th>
                          <th className="px-4 py-2.5 text-right text-sm font-bold text-foreground">Факт</th>
                          <th className="px-4 py-2.5 text-right text-sm font-bold text-foreground">Різниця</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quarter.map((month, monthIndex) => (
                          <tr
                            key={monthIndex}
                            className="border-b border-border/20 hover:bg-muted/5 transition-colors"
                          >
                            <td className="px-4 py-2.5 text-sm text-foreground font-medium">{month.month}</td>
                            <td className="px-4 py-2.5 text-sm text-right font-jetbrains text-foreground/80">
                              {formatCurrency(month.plan)}
                            </td>
                            <td className="px-4 py-2.5 text-sm text-right font-jetbrains">
                              {month.actual !== null ? (
                                <span className="text-foreground">{formatCurrency(month.actual)}</span>
                              ) : (
                                <span className="text-muted-foreground">?</span>
                              )}
                            </td>
                            <td className={`px-4 py-2.5 text-sm text-right font-jetbrains font-semibold ${
                              month.difference === null
                                ? "text-muted-foreground"
                                : month.difference >= 0
                                  ? "text-green-600"
                                  : "text-destructive"
                            }`}>
                              {formatDifference(month.difference)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Model Considerations */}
        {revealedQuarters >= 2 && (
          <Card className="border-border/30 bg-muted/10 animate-fade-in">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-foreground mb-2">Модель враховує:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-foreground/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Сезонність (літо -20%, грудень +15%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>Відпустки лікарів</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span>Заплановані інвестиції</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Key Insight - Shows when all quarters revealed */}
        {revealedQuarters >= 4 && (
          <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-syne text-lg font-bold text-primary mb-2">Результат</p>
                  <p className="text-foreground/90">
                    В травні відстали на 50 000 грн - в червні знаємо що треба надолужити.
                    <span className="font-semibold text-primary ml-1">
                      Не тривога, а план дій.
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 pt-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index < revealedQuarters
                  ? "w-8 bg-primary"
                  : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
