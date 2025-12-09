"use client"

import { useState } from "react"
import { Check, Minus, Star, Sparkles, Calendar, CreditCard, BarChart3, FileText, Calculator, Video, Target, TrendingUp, Users, Wallet } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

interface Feature {
  id: string
  name: string
  icon: React.ElementType
  inBase: boolean
  inPremium: boolean
  premiumBenefit?: string
}

export default function Slide16ComparisonTable() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const features: Feature[] = [
    // Common features (both tiers)
    {
      id: "integration",
      name: "Тиждень iнтеграцii",
      icon: Calendar,
      inBase: true,
      inPremium: true
    },
    {
      id: "payments",
      name: "Щоденний облiк оплат",
      icon: CreditCard,
      inBase: true,
      inPremium: true
    },
    {
      id: "reconciliation",
      name: "Звiрка каса/банк",
      icon: BarChart3,
      inBase: true,
      inPremium: true
    },
    {
      id: "profit",
      name: "Мiсячний звiт про прибуток",
      icon: FileText,
      inBase: true,
      inPremium: true
    },
    {
      id: "cashflow",
      name: "Звiт про грошовий потiк",
      icon: TrendingUp,
      inBase: true,
      inPremium: true
    },
    {
      id: "salary",
      name: "Розрахунок зарплат",
      icon: Calculator,
      inBase: true,
      inPremium: true
    },
    {
      id: "recommendations",
      name: "Письмовi рекомендацii",
      icon: FileText,
      inBase: true,
      inPremium: true
    },
    // Premium-only features
    {
      id: "zoom",
      name: "Zoom-зустрiчi",
      icon: Video,
      inBase: false,
      inPremium: true,
      premiumBenefit: "Живе обговорення складних питань з фiнансовим експертом"
    },
    {
      id: "costing",
      name: "Собiвартiсть послуг",
      icon: Target,
      inBase: false,
      inPremium: true,
      premiumBenefit: "Точне розумiння прибутковостi кожної процедури"
    },
    {
      id: "yearplan",
      name: "Рiчний фiнансовий план",
      icon: Calendar,
      inBase: false,
      inPremium: true,
      premiumBenefit: "Стратегiчне планування на 12 мiсяцiв наперед"
    },
    {
      id: "dividends",
      name: "Рекомендацii щодо дивiдендiв",
      icon: Wallet,
      inBase: false,
      inPremium: true,
      premiumBenefit: "Безпечне вилучення прибутку без шкоди бiзнесу"
    },
    {
      id: "efficiency",
      name: "Аналiз лiкарiв/крiсел",
      icon: Users,
      inBase: false,
      inPremium: true,
      premiumBenefit: "Оптимiзацiя завантаженостi та продуктивностi"
    },
    {
      id: "budgets",
      name: "Бюджети та лiмiти",
      icon: BarChart3,
      inBase: false,
      inPremium: true,
      premiumBenefit: "Контроль витрат до того, як вони стануть проблемою"
    }
  ]

  const baseFeatures = features.filter(f => f.inBase)
  const premiumOnlyFeatures = features.filter(f => f.inPremium && !f.inBase)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289890504-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Decorative layers */}
      <GeometricPattern type="grid" opacity={0.04} color="#0A0A0A" spacing={40} />
      <GrainOverlay opacity={0.12} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge
            className="text-base px-5 py-2 bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-[0_0_20px_rgba(30,58,95,0.3)]"
          >
            <Star className="h-4 w-4 mr-2" />
            Порiвняння тарифiв
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none text-[#1A1A2E]">
            ОБЕРИ СВIЙ <span className="text-[#00897B]">ТАРИФ</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-[#64748B] max-w-3xl mx-auto">
            Наведiть на премiум-функцii, щоб дiзнатися бiльше
          </p>
        </div>

        {/* Pricing Tiers Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-up delay-200 fill-backwards">
          {/* Base Tier */}
          <Card className="border-[#64748B]/30 bg-white/90">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-[#64748B] mb-2">Базовий тариф</p>
              <p className="font-bebas text-5xl text-[#1A1A2E]">9,000</p>
              <p className="text-lg text-[#64748B]">грн/мiсяць</p>
            </CardContent>
          </Card>

          {/* Premium Tier */}
          <Card className="border-[#00897B] border-2 bg-[#00897B]/5 shadow-[0_0_30px_rgba(0,137,123,0.2)] animate-glow-pulse">
            <CardContent className="p-6 text-center relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00897B] text-white border-none">
                <Sparkles className="h-3 w-3 mr-1" />
                Рекомендовано
              </Badge>
              <p className="text-sm text-[#00897B] mb-2 mt-2">Премiум тариф</p>
              <p className="font-bebas text-5xl text-[#00897B]">19,000</p>
              <p className="text-lg text-[#64748B]">грн/мiсяць</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Comparison */}
        <div className="space-y-6 animate-fade-in delay-300 fill-backwards">
          {/* Common Features Section */}
          <div className="space-y-3">
            <h3 className="font-syne text-lg font-bold text-[#1A1A2E] flex items-center gap-2">
              <Check className="h-5 w-5 text-[#4CAF50]" />
              Включено в обидва тарифи:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {baseFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={feature.id}
                    className="flex items-center gap-3 p-3 bg-white/60 rounded-lg border border-gray-100 animate-fade-in"
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    <IconComponent className="h-5 w-5 text-[#64748B]" />
                    <span className="text-sm text-[#1A1A2E]">{feature.name}</span>
                    <div className="ml-auto flex gap-2">
                      <Check className="h-4 w-4 text-[#4CAF50]" />
                      <Check className="h-4 w-4 text-[#4CAF50]" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Premium-Only Features Section */}
          <div className="space-y-3">
            <h3 className="font-syne text-lg font-bold text-[#00897B] flex items-center gap-2">
              <Star className="h-5 w-5" />
              Додатково у Премiум:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {premiumOnlyFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                const isHovered = hoveredFeature === feature.id

                return (
                  <div
                    key={feature.id}
                    className={`
                      relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
                      ${isHovered
                        ? "bg-[#00897B]/10 border-[#00897B] shadow-[0_0_20px_rgba(0,137,123,0.2)] scale-[1.02]"
                        : "bg-white/80 border-[#00897B]/30 hover:border-[#00897B]/60"
                      }
                      animate-fade-in
                    `}
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isHovered ? "bg-[#00897B]/20" : "bg-[#00897B]/10"}`}>
                        <IconComponent className={`h-5 w-5 ${isHovered ? "text-[#00897B]" : "text-[#00897B]/70"}`} />
                      </div>
                      <span className={`font-medium ${isHovered ? "text-[#00897B]" : "text-[#1A1A2E]"}`}>
                        {feature.name}
                      </span>
                      <div className="ml-auto flex gap-2">
                        <Minus className="h-4 w-4 text-gray-300" />
                        <Check className="h-4 w-4 text-[#00897B]" />
                      </div>
                    </div>

                    {/* Hover Tooltip */}
                    {isHovered && feature.premiumBenefit && (
                      <div className="mt-3 pt-3 border-t border-[#00897B]/20 animate-fade-in">
                        <p className="text-sm text-[#1A1A2E]">
                          <span className="font-semibold text-[#00897B]">Користь: </span>
                          {feature.premiumBenefit}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in delay-700 fill-backwards">
          <Card className="border-[#64748B]/20 bg-white/80">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-[#64748B] mb-1">Базовий тариф</p>
              <p className="font-syne font-bold text-[#1A1A2E]">7 основних функцiй</p>
              <p className="text-sm text-[#64748B] mt-1">Для клiнiк, що починають</p>
            </CardContent>
          </Card>

          <Card className="border-[#00897B] border-2 bg-[#00897B]/5 shadow-[0_0_20px_rgba(0,137,123,0.15)]">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-[#00897B] mb-1">Премiум тариф</p>
              <p className="font-syne font-bold text-[#00897B]">13 функцiй + Zoom</p>
              <p className="text-sm text-[#64748B] mt-1">Для клiнiк, що зростають</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
