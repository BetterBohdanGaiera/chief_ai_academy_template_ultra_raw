"use client"

/**
 * Slide 03: Solution - "Shcho my robymo" (What We Do)
 *
 * Pattern: ARE vs NOT Comparison
 * Purpose: Clearly define what the financial administration service includes and excludes
 *
 * Content in Ukrainian as per source material
 * Color palette: Teal #00897B (primary), Navy #1E3A5F (accent)
 * Success: #4CAF50 (ARE items), Destructive: #EF5350 (NOT items)
 */

import { CheckCircle2, AlertCircle, Dumbbell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

interface ComparisonItem {
  type: "ARE" | "NOT"
  label: string
}

export default function SlideSolution() {
  // What the service IS and IS NOT
  const comparisons: ComparisonItem[] = [
    // What they ARE (inclusions) - Green/Success
    { type: "ARE", label: "Щодня стежимо за доходами та витратами" },
    { type: "ARE", label: "Перевiряємо, щоб цифри в касi, банку i програмi збiгалися" },
    { type: "ARE", label: "Щомiсяця - чiтка картинка: заробили, витратили, залишилось" },
    { type: "ARE", label: "Пояснюємо, що з грошима - простими словами" },

    // What they're NOT (exclusions) - Red/Destructive
    { type: "NOT", label: "Складний бухгалтерський жаргон" },
    { type: "NOT", label: "Нескiнченнi таблицi без контексту" },
    { type: "NOT", label: "Типовi поради, що не пiдходять вашiй клiнiцi" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289804032-1.png"
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
      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="space-y-6 text-center animate-fade-in">
          <Badge
            className="inline-flex text-base px-5 py-2 bg-[#00897B] text-white border-[#00897B] shadow-[0_0_20px_rgba(0,137,123,0.3)]"
          >
            Наш пiдхiд
          </Badge>

          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-foreground animate-fade-in delay-200 fill-backwards">
            Що ми <span className="text-[#00897B]">робимо</span>
          </h1>

          <p className="font-syne text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80 animate-slide-in-up delay-400 fill-backwards">
            Ми - ваш <span className="text-[#00897B]">фiнансовий адмiнiстратор</span>
          </p>
        </div>

        {/* Main Comparison Section */}
        <div className="space-y-6 animate-slide-in-up delay-500 fill-backwards">
          <h3 className="font-syne text-xl md:text-2xl font-bold text-center">
            Що ми <span className="text-[#4CAF50]">робимо</span> vs Чого ми <span className="text-[#EF5350]">не робимо</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ARE Section (Left) - Green/Success */}
            <Card className="border-[#4CAF50]/30 bg-[#4CAF50]/5 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bebas text-2xl text-[#4CAF50] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  МИ РОБИМО
                </h4>
                <div className="space-y-3">
                  {comparisons
                    .filter((item) => item.type === "ARE")
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="text-base font-manrope flex items-start gap-3 animate-fade-in fill-backwards"
                        style={{ animationDelay: `${600 + idx * 100}ms` }}
                      >
                        <span className="text-[#4CAF50] mt-0.5 shrink-0">
                          <CheckCircle2 className="h-5 w-5" />
                        </span>
                        <span className="text-foreground/90">{item.label}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* NOT Section (Right) - Red/Destructive */}
            <Card className="border-[#EF5350]/30 bg-[#EF5350]/5 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bebas text-2xl text-[#EF5350] mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  МИ НЕ РОБИМО
                </h4>
                <div className="space-y-3">
                  {comparisons
                    .filter((item) => item.type === "NOT")
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="text-base font-manrope flex items-start gap-3 animate-fade-in fill-backwards"
                        style={{ animationDelay: `${700 + idx * 100}ms` }}
                      >
                        <span className="text-[#EF5350] mt-0.5 shrink-0">
                          <AlertCircle className="h-5 w-5" />
                        </span>
                        <span className="text-foreground/90">{item.label}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Metaphor Callout */}
        <div className="animate-fade-in delay-1000 fill-backwards">
          <Card className="border-[#00897B]/40 bg-gradient-to-br from-[#00897B]/10 to-[#00897B]/5 shadow-[0_0_30px_rgba(0,137,123,0.15)]">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#00897B]/10 shrink-0">
                  <Dumbbell className="h-8 w-8 text-[#00897B]" />
                </div>
                <div>
                  <p className="font-syne text-lg md:text-xl font-bold text-[#00897B]">
                    Це як персональний тренер, тiльки для фiнансiв вашої клiнiки
                  </p>
                  <p className="text-sm text-foreground/70 mt-2">
                    Ми не просто показуємо цифри - ми допомагаємо вам їх розумiти та використовувати для розвитку
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-1200 fill-backwards">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#00897B]/20 blur-3xl" />
            <p className="relative font-syne text-lg md:text-xl font-semibold text-foreground/80 max-w-3xl">
              Простота та зрозумiлiсть - ключ до контролю над фiнансами вашої клiнiки
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
