"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import {
  Building2,
  FileSpreadsheet,
  HelpCircle,
  MessageSquare,
  TrendingDown,
  CheckCircle2
} from "lucide-react"

/**
 * Slide 05: Basic Plan Intro - "Taryf 'Finansove vedennia' - 9 000 hrn/mis"
 * Pattern: Hover-Reveal Progressive Disclosure
 * Content: Maria persona introduction, target criteria with hover details
 */
export default function Slide05BasicPlanIntro() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const targetCriteria = [
    {
      id: "works-chaos",
      title: "Клініка вже працює",
      subtitle: "але облік - хаотичний",
      icon: Building2,
      description: "Є пацієнти, є дохід - але гроші ведуться «як вийде». Хочете нарешті знати точні цифри.",
      color: "border-primary",
      glowColor: "shadow-[0_0_30px_rgba(0,137,123,0.3)]"
    },
    {
      id: "understand-numbers",
      title: "Хочете розуміти цифри",
      subtitle: "але не готові до глибокого аналізу",
      icon: TrendingDown,
      description: "Потребуєте простого звіту: скільки заробили, скільки витратили, що залишилось. Без складних таблиць.",
      color: "border-[#1E3A5F]",
      glowColor: "shadow-[0_0_30px_rgba(30,58,95,0.3)]"
    },
    {
      id: "no-calls",
      title: "Не потребуєте дзвінків",
      subtitle: "звіти через месенджери - достатньо",
      icon: MessageSquare,
      description: "Вам не потрібні щотижневі зустрічі. Достатньо отримувати звіти в Telegram і ставити питання коли потрібно.",
      color: "border-green-600",
      glowColor: "shadow-[0_0_30px_rgba(22,163,74,0.3)]"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289824441-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.06]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge
            variant="glow"
            className="animate-slide-in-down px-6 py-2"
          >
            Тариф «Фінансове ведення»
          </Badge>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-tight animate-fade-in delay-200 fill-backwards">
            Для клініки <span className="text-primary">Марії</span>
          </h2>

          <div className="flex justify-center animate-fade-in delay-300 fill-backwards">
            <Badge
              variant="brutal"
              className="text-2xl md:text-3xl px-8 py-3 animate-glow-pulse"
            >
              9 000 грн/міс
            </Badge>
          </div>
        </div>

        {/* Maria's Persona Card */}
        <Card
          className="max-w-2xl mx-auto border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 animate-scale-in delay-400 fill-backwards"
        >
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-syne font-bold">Клініка Марії</h3>
                <p className="text-sm text-foreground/70 font-manrope">Мала стоматологічна клініка - 2 крісла</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-border">
              <div className="flex items-start gap-3">
                <FileSpreadsheet className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 font-manrope">
                  Веде гроші в Excel «як вийде»
                </p>
              </div>
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 font-manrope">
                  В кінці місяця не розуміє - чому прибуток менший, ніж очікувала
                </p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 font-manrope">
                  Боїться щось пропустити й отримати проблеми
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-border">
              <p className="text-sm font-syne font-semibold text-primary text-center">
                Марії потрібен ПОРЯДОК - без складного аналізу. Просто зрозумілі цифри.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Target Criteria Section */}
        <div className="space-y-4">
          <p className="text-center text-lg text-foreground/70 font-manrope animate-fade-in delay-500 fill-backwards">
            Наведіть на картку, щоб дізнатись більше
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetCriteria.map((criteria, idx) => {
              const Icon = criteria.icon
              const isActive = activeCard === criteria.id

              return (
                <Card
                  key={criteria.id}
                  className={`
                    transition-all duration-300 cursor-pointer
                    ${isActive
                      ? `scale-105 ${criteria.color} ${criteria.glowColor}`
                      : "border-border hover:scale-102 hover:border-primary/50"
                    }
                    animate-fade-in fill-backwards
                  `}
                  style={{ animationDelay: `${600 + idx * 100}ms` }}
                  onMouseEnter={() => setActiveCard(criteria.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <CardContent className="pt-6 space-y-3">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary/10' : 'bg-muted'} transition-colors w-fit`}>
                      <Icon className={`w-7 h-7 ${isActive ? 'text-primary' : 'text-foreground/60'}`} />
                    </div>

                    <div>
                      <h4 className="text-lg font-syne font-bold">{criteria.title}</h4>
                      <p className="text-sm text-foreground/60">{criteria.subtitle}</p>
                    </div>

                    {/* Revealed content on hover */}
                    {isActive && (
                      <div className="pt-3 border-t border-border animate-fade-in">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground/80 font-manrope">
                            {criteria.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Key Message */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-900 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm md:text-base text-center text-foreground/90 font-manrope">
              <span className="font-semibold text-primary">Цей тариф</span> - для тих, кому потрібна фінансова прозорість без зайвого складу. Порядок у цифрах = спокій голови.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
