"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import {
  Handshake,
  Database,
  Search,
  Settings,
  FileText,
  Calendar,
  Clock,
  Receipt,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

/**
 * Slide 06: Basic Plan Details - "Shcho vkhodyt u taryf za 9 000 hrn"
 * Pattern: Horizontal Timeline + Two-Column Layout
 * Content: 5-step Week 1 integration + Daily/Monthly breakdown
 */
export default function Slide06BasicPlanDetails() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const integrationSteps = [
    {
      step: 1,
      title: "Znaiomstvo",
      description: "Zustrichaemosia, pidpysuiemo dohovir, vyznachaiemo vidpovidalnykh",
      icon: Handshake,
      color: "bg-primary"
    },
    {
      step: 2,
      title: "Dostupy",
      description: "Otrymaiemo dostupy do prohram, zberemo potochni dani",
      icon: Database,
      color: "bg-primary"
    },
    {
      step: 3,
      title: "Audyt",
      description: "Provodimo audyt: znakhodymo 'diry' v obliku",
      icon: Search,
      color: "bg-primary"
    },
    {
      step: 4,
      title: "Nalashtuvannia",
      description: "Nalashtovoiemo systemu obliku pid vashu kliniku",
      icon: Settings,
      color: "bg-primary"
    },
    {
      step: 5,
      title: "Zvity",
      description: "Stvoruiemo pershi zvity ta domovliaiemosia pro pravyla",
      icon: FileText,
      color: "bg-primary"
    }
  ]

  const dailyActivities = [
    {
      title: "Vnosymo vsi platezhi patsiientiv",
      icon: Receipt
    },
    {
      title: "Vnosymo vsi vytraty",
      icon: Receipt
    },
    {
      title: "Pereviaiaiemo: hotivka = bank = systema",
      icon: CheckCircle2
    },
    {
      title: "Utiochniaiemo nezrozumili operatsii",
      icon: Search
    }
  ]

  const monthlyDeliverables = [
    {
      title: "Zvit po prybutku",
      description: "dokhody - vytraty = rezultat",
      icon: FileText
    },
    {
      title: "Zvit po rukhu hroshei",
      description: "zvidky pryishly, kudy pishly",
      icon: ArrowRight
    },
    {
      title: "Rozrakhunok zarplat spivrobitnykiv",
      icon: Users
    },
    {
      title: "Pysyomovi rekomendatsii",
      icon: FileText
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289835076-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="grid" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.12} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge
            variant="glow"
            className="animate-slide-in-down px-6 py-2"
          >
            Shcho vkhodyt u taryf
          </Badge>

          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-tight animate-fade-in delay-200 fill-backwards">
            <span className="text-primary">9 000 hrn</span> - povnyi tsykl obliku
          </h2>
        </div>

        {/* Week 1 Timeline Section */}
        <div className="space-y-4 animate-slide-in-up delay-300 fill-backwards">
          <div className="flex items-center gap-3 justify-center">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-syne font-bold text-center">Tyzhden 1 - Intehratsiia</h3>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-border">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary to-primary/0 h-full" />
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
              {integrationSteps.map((item, idx) => {
                const Icon = item.icon
                const isActive = activeStep === idx

                return (
                  <div
                    key={item.step}
                    className="relative flex flex-col items-center text-center cursor-pointer"
                    style={{ animationDelay: `${400 + idx * 100}ms` }}
                    onMouseEnter={() => setActiveStep(idx)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Step Circle */}
                    <div
                      className={`
                        relative z-10 w-16 h-16 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${isActive
                          ? 'bg-primary scale-110 shadow-glow'
                          : 'bg-muted hover:bg-primary/20'
                        }
                        animate-fade-in fill-backwards
                      `}
                      style={{ animationDelay: `${400 + idx * 100}ms` }}
                    >
                      <Icon className={`w-7 h-7 ${isActive ? 'text-primary-foreground' : 'text-foreground/70'}`} />
                    </div>

                    {/* Step Number */}
                    <div className={`
                      absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center
                      text-xs font-bold z-20
                      ${isActive ? 'bg-[#1E3A5F] text-white' : 'bg-primary text-primary-foreground'}
                    `}>
                      {item.step}
                    </div>

                    {/* Step Content */}
                    <div className="mt-3 space-y-1 max-w-[140px]">
                      <h4 className={`text-sm font-syne font-bold transition-colors ${isActive ? 'text-primary' : ''}`}>
                        {item.title}
                      </h4>
                      <p className={`
                        text-xs text-foreground/60 font-manrope transition-all duration-300
                        ${isActive ? 'opacity-100 max-h-20' : 'opacity-70 md:opacity-0 md:max-h-0 md:overflow-hidden'}
                      `}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Daily & Monthly Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily Activities */}
          <Card className="animate-slide-in-left delay-600 fill-backwards border-primary/20">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-syne font-bold">Shchodenno</h3>
              </div>

              <div className="space-y-3">
                {dailyActivities.map((activity, idx) => {
                  const Icon = activity.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm font-manrope text-foreground/80">
                        {activity.title}
                      </p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Deliverables */}
          <Card className="animate-slide-in-right delay-600 fill-backwards border-[#1E3A5F]/20">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1E3A5F]/10">
                  <Calendar className="w-5 h-5 text-[#1E3A5F]" />
                </div>
                <h3 className="text-lg font-syne font-bold">Shchomisiatsia</h3>
              </div>

              <div className="space-y-3">
                {monthlyDeliverables.map((deliverable, idx) => {
                  const Icon = deliverable.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-manrope font-medium text-foreground/90">
                          {deliverable.title}
                        </p>
                        {deliverable.description && (
                          <p className="text-xs text-foreground/60">
                            {deliverable.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Message */}
        <Card className="bg-gradient-to-r from-primary/5 to-[#1E3A5F]/5 border-primary/20 animate-fade-in delay-800 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm md:text-base text-center text-foreground/90 font-manrope">
              <span className="font-semibold text-primary">Rezultat:</span> vy otrymuiete chistyi, zrozumilyi finansovyi oblik bez zaivoho skladu. Znaiete tochno, skilky zarobliaiete.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
