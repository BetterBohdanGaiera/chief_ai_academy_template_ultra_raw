"use client"

/**
 * Slide 04: Pricing - "Dva taryfy na vybir" (Two Plans to Choose)
 *
 * Pattern: Button Toggle Comparison
 * Purpose: Present two pricing tiers with interactive toggle for comparison
 *
 * Content in Ukrainian as per source material
 * Color palette: Teal #00897B (primary), Navy #1E3A5F (accent)
 */

import { useState } from "react"
import { FileText, Video, Eye, Settings, TrendingUp, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type PlanType = "basic" | "partnership"

interface PlanFeature {
  label: string
  description: string
  icon: React.ElementType
}

interface PlanData {
  title: string
  price: string
  subtitle: string
  icon: React.ElementType
  color: string
  bgColor: string
  borderColor: string
  shadowColor: string
  keyMessage: string
  features: PlanFeature[]
}

export default function SlidePricing() {
  const [activePlan, setActivePlan] = useState<PlanType>("basic")

  const planData: Record<PlanType, PlanData> = {
    basic: {
      title: "Фiнансове ведення",
      price: "9 000 грн/мiс",
      subtitle: "Порядок у цифрах",
      icon: FileText,
      color: "text-[#00897B]",
      bgColor: "bg-[#00897B]/5",
      borderColor: "border-[#00897B]/40",
      shadowColor: "shadow-[0_0_30px_rgba(0,137,123,0.2)]",
      keyMessage: "Ви БАЧИТЕ, що вiдбувається з грошима",
      features: [
        {
          label: "Формат",
          description: "Письмова комунiкацiя",
          icon: FileText,
        },
        {
          label: "Суть",
          description: "Порядок у цифрах",
          icon: Check,
        },
        {
          label: "Для кого",
          description: "Клiнiка хоче розумiти фiнанси",
          icon: Eye,
        },
      ],
    },
    partnership: {
      title: "Фiнансове партнерство",
      price: "19 000 грн/мiс",
      subtitle: "Порядок + зростання прибутку",
      icon: TrendingUp,
      color: "text-[#1E3A5F]",
      bgColor: "bg-[#1E3A5F]/5",
      borderColor: "border-[#1E3A5F]/40",
      shadowColor: "shadow-[0_0_30px_rgba(30,58,95,0.2)]",
      keyMessage: "Ви КЕРУЄТЕ тим, що вiдбувається з грошима",
      features: [
        {
          label: "Формат",
          description: "Письмова + Zoom-дзвiнки",
          icon: Video,
        },
        {
          label: "Суть",
          description: "Порядок + зростання прибутку",
          icon: TrendingUp,
        },
        {
          label: "Для кого",
          description: "Клiнiка хоче розвиватись i планувати",
          icon: Settings,
        },
      ],
    },
  }

  const currentPlan = planData[activePlan]
  const PlanIcon = currentPlan.icon

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289816044-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="grid" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge
            className="inline-flex text-base px-5 py-2 bg-[#00897B] text-white border-[#00897B] shadow-[0_0_20px_rgba(0,137,123,0.3)]"
          >
            Тарифи
          </Badge>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none text-foreground animate-fade-in delay-200 fill-backwards">
            Два тарифи на <span className="text-[#00897B]">вибiр</span>
          </h2>

          <p className="font-syne text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Оберiть план, який вiдповiдає потребам вашої клiнiки
          </p>
        </div>

        {/* Interactive Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-500 fill-backwards">
          <Button
            variant={activePlan === "basic" ? "default" : "outline"}
            size="lg"
            onClick={() => setActivePlan("basic")}
            className={`transition-all duration-300 px-6 py-3 text-base ${
              activePlan === "basic"
                ? "bg-[#00897B] hover:bg-[#00897B]/90 text-white border-[#00897B]"
                : "hover:bg-[#00897B]/10 hover:border-[#00897B]/40 border-border"
            }`}
          >
            <FileText className="h-5 w-5 mr-2" />
            Фiнансове ведення
          </Button>
          <Button
            variant={activePlan === "partnership" ? "default" : "outline"}
            size="lg"
            onClick={() => setActivePlan("partnership")}
            className={`transition-all duration-300 px-6 py-3 text-base ${
              activePlan === "partnership"
                ? "bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white border-[#1E3A5F]"
                : "hover:bg-[#1E3A5F]/10 hover:border-[#1E3A5F]/40 border-border"
            }`}
          >
            <TrendingUp className="h-5 w-5 mr-2" />
            Фiнансове партнерство
          </Button>
        </div>

        {/* Dynamic Plan Display */}
        <Card
          key={activePlan}
          className={`${currentPlan.borderColor} ${currentPlan.bgColor} border-2 transition-all duration-500 ${currentPlan.shadowColor} animate-scale-in`}
        >
          <CardContent className="p-8 md:p-10 space-y-8">
            {/* Plan Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl ${currentPlan.bgColor} border ${currentPlan.borderColor}`}>
                  <PlanIcon className={`h-10 w-10 ${currentPlan.color}`} />
                </div>
                <div>
                  <h3 className={`font-bebas text-3xl md:text-4xl ${currentPlan.color}`}>
                    {currentPlan.title}
                  </h3>
                  <p className="font-syne text-lg text-foreground/70">
                    {currentPlan.subtitle}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className={`font-bebas text-4xl md:text-5xl ${currentPlan.color}`}>
                  {currentPlan.price}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentPlan.features.map((feature, idx) => {
                const FeatureIcon = feature.icon
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-border/30 animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className={`p-2 rounded-lg ${currentPlan.bgColor} shrink-0`}>
                      <FeatureIcon className={`h-5 w-5 ${currentPlan.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                        {feature.label}
                      </p>
                      <p className="font-syne font-semibold text-foreground mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Key Message */}
            <div className={`p-6 rounded-xl border-2 ${currentPlan.borderColor} ${currentPlan.bgColor}`}>
              <p className={`font-syne text-xl md:text-2xl font-bold ${currentPlan.color} text-center`}>
                {currentPlan.keyMessage}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Comparison Summary */}
        <div className="animate-fade-in delay-700 fill-backwards">
          <Card className="bg-white/90 backdrop-blur-sm border border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activePlan === "basic"
                      ? "bg-[#00897B]/10 border-2 border-[#00897B]/40"
                      : "bg-muted/20 border border-border/30 hover:bg-[#00897B]/5"
                  }`}
                  onClick={() => setActivePlan("basic")}
                >
                  <p className="font-bebas text-2xl text-[#00897B]">9 000 грн</p>
                  <p className="font-syne text-sm text-foreground/70 mt-1">
                    Ви <span className="font-bold text-[#00897B]">БАЧИТЕ</span>, що вiдбувається
                  </p>
                </div>
                <div
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activePlan === "partnership"
                      ? "bg-[#1E3A5F]/10 border-2 border-[#1E3A5F]/40"
                      : "bg-muted/20 border border-border/30 hover:bg-[#1E3A5F]/5"
                  }`}
                  onClick={() => setActivePlan("partnership")}
                >
                  <p className="font-bebas text-2xl text-[#1E3A5F]">19 000 грн</p>
                  <p className="font-syne text-sm text-foreground/70 mt-1">
                    Ви <span className="font-bold text-[#1E3A5F]">КЕРУЄТЕ</span> тим, що вiдбувається
                  </p>
                </div>
              </div>

              <p className="text-center text-sm text-foreground/60 mt-6">
                Натиснiть на тариф для перегляду деталей
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
