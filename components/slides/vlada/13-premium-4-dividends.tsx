"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import {
  TrendingDown,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  HelpCircle,
  Wallet
} from "lucide-react"
import Image from "next/image"

interface BridgeItem {
  id: string
  label: string
  amount: number
  type: "deduction" | "addition" | "neutral"
  description: string
}

const moneyBridgeData: BridgeItem[] = [
  {
    id: "profit",
    label: "Прибуток за звітом",
    amount: 150000,
    type: "neutral",
    description: "Нарахований прибуток за місяць"
  },
  {
    id: "materials",
    label: "Закупили матеріали наперед",
    amount: -40000,
    type: "deduction",
    description: "Оплата постачальникам"
  },
  {
    id: "patients",
    label: "Пацієнти винні (розстрочки)",
    amount: -30000,
    type: "deduction",
    description: "Відтерміновані платежі"
  },
  {
    id: "credit",
    label: "Сплатили частину кредиту",
    amount: -20000,
    type: "deduction",
    description: "Погашення зобов'язань"
  },
  {
    id: "equipment",
    label: "Купили нове обладнання",
    amount: -30000,
    type: "deduction",
    description: "Інвестиції в клініку"
  },
  {
    id: "free",
    label: "Фактично вільні кошти",
    amount: 30000,
    type: "neutral",
    description: "Залишок на рахунку"
  },
  {
    id: "debtors",
    label: "Дебітори повернуть",
    amount: 50000,
    type: "addition",
    description: "Очікувані надходження"
  }
]

const formatCurrency = (value: number): string => {
  const absValue = Math.abs(value)
  const formatted = new Intl.NumberFormat("uk-UA").format(absValue)
  if (value < 0) return `-${formatted} ₴`
  if (value > 0) return `+${formatted} ₴`
  return `${formatted} ₴`
}

const formatCurrencyPlain = (value: number): string => {
  return new Intl.NumberFormat("uk-UA").format(value) + " ₴"
}

export default function Slide13Premium4Dividends() {
  const [visibleItems, setVisibleItems] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

  // Auto-reveal items with delay
  useEffect(() => {
    if (!isAutoPlaying) return

    if (visibleItems < moneyBridgeData.length + 1) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => prev + 1)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [visibleItems, isAutoPlaying])

  // Calculate running total
  const calculateRunningTotal = (upToIndex: number): number => {
    let total = 0
    for (let i = 0; i <= upToIndex && i < moneyBridgeData.length; i++) {
      const item = moneyBridgeData[i]
      if (item.type === "neutral" && i === 0) {
        total = item.amount
      } else if (item.type !== "neutral" || i > 0) {
        total += item.amount
      }
    }
    return total
  }

  const safeWithdrawal = 80000

  const handleShowAll = () => {
    setIsAutoPlaying(false)
    setVisibleItems(moneyBridgeData.length + 1)
  }

  const handleReset = () => {
    setVisibleItems(0)
    setIsAutoPlaying(true)
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289881751-1.png"
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
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge
            variant="glow"
            className="animate-slide-in-down"
          >
            <Wallet className="h-4 w-4 mr-1" />
            Premium #4: Дивіденди
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas animate-fade-in delay-200 fill-backwards">
            Рекомендації щодо{" "}
            <span className="text-primary">дивідендів</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Прибуток у звіті та гроші на рахунку — це різні речі. Побудуємо &quot;грошовий міст&quot;.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in delay-500 fill-backwards">
          {/* Left - Problem Statement */}
          <div className="space-y-4">
            <Card className="border-warning/40 bg-warning/5">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-warning shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-syne font-bold mb-2">Типова проблема</h3>
                    <p className="text-foreground/80">
                      &quot;У звіті прибуток 150,000 грн. А на рахунку тільки 80,000 грн. Куди поділись гроші?!&quot;
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-warning/20">
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold text-warning">90% власників</span> плутають ці поняття
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Control Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleShowAll}
                className="flex-1 px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
              >
                Показати все
              </button>
              <button
                onClick={handleReset}
                className="flex-1 px-4 py-2 text-sm font-medium bg-muted hover:bg-muted/80 text-foreground/70 rounded-lg transition-colors"
              >
                Спочатку
              </button>
            </div>

            {/* Final Result Card */}
            {visibleItems > moneyBridgeData.length && (
              <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-syne font-bold text-primary">
                      БЕЗПЕЧНО ВИВЕСТИ ЗАРАЗ
                    </h3>
                  </div>
                  <p className="text-4xl font-bebas text-primary animate-glow-pulse">
                    {formatCurrencyPlain(safeWithdrawal)}
                  </p>
                  <p className="text-sm text-foreground/70">
                    Точна сума, яку можна забрати без шкоди для бізнесу
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right - Money Bridge Visualization */}
          <div className="space-y-3">
            <h3 className="text-lg font-syne font-bold text-foreground/80 mb-4">
              Грошовий міст
            </h3>

            {moneyBridgeData.map((item, index) => {
              const isVisible = index < visibleItems
              const runningTotal = calculateRunningTotal(index)

              return (
                <div
                  key={item.id}
                  className={`
                    transition-all duration-500 transform
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
                  `}
                  style={{
                    transitionDelay: isVisible ? "0ms" : `${index * 100}ms`
                  }}
                >
                  <div
                    className={`
                      flex items-center justify-between p-3 rounded-lg border
                      ${item.type === "deduction"
                        ? "bg-destructive/5 border-destructive/20"
                        : item.type === "addition"
                        ? "bg-success/5 border-success/20"
                        : "bg-muted/50 border-border"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {item.type === "deduction" ? (
                        <ArrowDown className="h-5 w-5 text-destructive" />
                      ) : item.type === "addition" ? (
                        <ArrowUp className="h-5 w-5 text-success" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-foreground/50" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{item.label}</p>
                        <p className="text-xs text-foreground/50">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`
                          font-jetbrains font-bold
                          ${item.type === "deduction"
                            ? "text-destructive"
                            : item.type === "addition"
                            ? "text-success"
                            : "text-foreground"
                          }
                        `}
                      >
                        {formatCurrency(item.amount)}
                      </p>
                      {index > 0 && isVisible && (
                        <p className="text-xs text-foreground/40 font-jetbrains">
                          = {formatCurrencyPlain(runningTotal)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Final Safe Amount */}
            {visibleItems > moneyBridgeData.length && (
              <div className="mt-4 p-4 rounded-xl bg-primary/10 border-2 border-primary animate-scale-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="font-syne font-bold text-primary">
                      Безпечна сума
                    </span>
                  </div>
                  <span className="text-2xl font-bebas text-primary">
                    {formatCurrencyPlain(safeWithdrawal)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-600 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/80">
              <span className="font-semibold text-primary">Результат:</span>{" "}
              Точно знаєте, скільки можна забрати, не шкодячи бізнесу
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
