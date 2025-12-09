"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import {
  Users,
  Armchair,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Lightbulb
} from "lucide-react"
import Image from "next/image"

interface DoctorData {
  id: string
  name: string
  revenue: number
  utilization: number
  status: "excellent" | "potential" | "attention"
  recommendation: string
}

interface ChairData {
  id: string
  name: string
  utilization: number
  status: "excellent" | "potential" | "attention"
  note: string
}

const doctorsData: DoctorData[] = [
  {
    id: "oleg",
    name: "Олег",
    revenue: 400000,
    utilization: 85,
    status: "excellent",
    recommendation: "Працює на максимумі. Можливо, потрібен асистент."
  },
  {
    id: "irina",
    name: "Ірина",
    revenue: 250000,
    utilization: 60,
    status: "potential",
    recommendation: "Має потенціал росту. Збільшити маркетинг або змінити графік."
  },
  {
    id: "dmytro",
    name: "Дмитро",
    revenue: 180000,
    utilization: 45,
    status: "attention",
    recommendation: "Недозавантажений. Додати прийоми або переглянути розклад."
  }
]

const chairsData: ChairData[] = [
  {
    id: "chair1",
    name: "Крісло №1",
    utilization: 90,
    status: "excellent",
    note: "Відмінне завантаження"
  },
  {
    id: "chair2",
    name: "Крісло №2",
    utilization: 60,
    status: "potential",
    note: "Простоює 40% часу"
  }
]

const recommendations = [
  "Не наймати 4-го лікаря — спочатку завантажити Дмитра",
  "Дмитро — додати прийомів або переглянути розклад",
  "Крісло №2 — змінити графік або здавати в оренду у вільний час"
]

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("uk-UA").format(value) + " ₴"
}

const getStatusColor = (status: "excellent" | "potential" | "attention") => {
  switch (status) {
    case "excellent":
      return {
        bg: "bg-success/10",
        border: "border-success/30",
        text: "text-success",
        badge: "bg-success text-white"
      }
    case "potential":
      return {
        bg: "bg-warning/10",
        border: "border-warning/30",
        text: "text-warning",
        badge: "bg-warning text-white"
      }
    case "attention":
      return {
        bg: "bg-destructive/10",
        border: "border-destructive/30",
        text: "text-destructive",
        badge: "bg-destructive text-white"
      }
  }
}

const getStatusLabel = (status: "excellent" | "potential" | "attention") => {
  switch (status) {
    case "excellent":
      return "Відмінно"
    case "potential":
      return "Є потенціал"
    case "attention":
      return "Потребує уваги"
  }
}

export default function Slide14Premium5Efficiency() {
  const [activeDoctor, setActiveDoctor] = useState<string | null>(null)
  const [activeChair, setActiveChair] = useState<string | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1765289897779-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.06]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge
            variant="glow"
            className="animate-slide-in-down"
          >
            <TrendingUp className="h-4 w-4 mr-1" />
            Premium #5: Ефективність
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas animate-fade-in delay-200 fill-backwards">
            Аналіз ефективності{" "}
            <span className="text-primary">лікарів і крісел</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Раз на квартал рахуємо ефективність кожного лікаря та крісла. Наведіть курсор для деталей.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="animate-fade-in delay-500 fill-backwards">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-syne font-bold">Лікарі (3 особи)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {doctorsData.map((doctor, idx) => {
              const colors = getStatusColor(doctor.status)
              const isActive = activeDoctor === doctor.id

              return (
                <Card
                  key={doctor.id}
                  className={`
                    cursor-pointer transition-all duration-300
                    ${isActive
                      ? `scale-105 ${colors.border} shadow-lg`
                      : `border-border/50 hover:scale-102 hover:${colors.border}`
                    }
                    ${colors.bg}
                    animate-fade-in fill-backwards
                  `}
                  style={{ animationDelay: `${idx * 150 + 600}ms` }}
                  onMouseEnter={() => setActiveDoctor(doctor.id)}
                  onMouseLeave={() => setActiveDoctor(null)}
                >
                  <CardContent className="pt-5 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-syne font-bold">{doctor.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${colors.badge}`}>
                        {getStatusLabel(doctor.status)}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Дохід/місяць</span>
                        <span className="font-jetbrains font-medium">
                          {formatCurrency(doctor.revenue)}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground/60">Завантаженість</span>
                          <span className={`font-jetbrains font-bold ${colors.text}`}>
                            {doctor.utilization}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              doctor.status === "excellent"
                                ? "bg-success"
                                : doctor.status === "potential"
                                ? "bg-warning"
                                : "bg-destructive"
                            }`}
                            style={{ width: `${doctor.utilization}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Revealed Recommendation */}
                    {isActive && (
                      <div className="pt-3 border-t border-border/30 animate-fade-in">
                        <p className="text-xs text-foreground/80">
                          <span className="font-semibold text-primary">Рекомендація:</span>{" "}
                          {doctor.recommendation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Chair Cards */}
        <div className="animate-fade-in delay-600 fill-backwards">
          <div className="flex items-center gap-2 mb-3">
            <Armchair className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-syne font-bold">Крісла (2 шт)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chairsData.map((chair, idx) => {
              const colors = getStatusColor(chair.status)
              const isActive = activeChair === chair.id

              return (
                <Card
                  key={chair.id}
                  className={`
                    cursor-pointer transition-all duration-300
                    ${isActive
                      ? `scale-105 ${colors.border} shadow-lg`
                      : `border-border/50 hover:scale-102 hover:${colors.border}`
                    }
                    ${colors.bg}
                    animate-fade-in fill-backwards
                  `}
                  style={{ animationDelay: `${idx * 150 + 900}ms` }}
                  onMouseEnter={() => setActiveChair(chair.id)}
                  onMouseLeave={() => setActiveChair(null)}
                >
                  <CardContent className="pt-5 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-syne font-bold">{chair.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${colors.badge}`}>
                        {getStatusLabel(chair.status)}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground/60">Використання</span>
                        <span className={`font-jetbrains font-bold ${colors.text}`}>
                          {chair.utilization}%
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            chair.status === "excellent"
                              ? "bg-success"
                              : chair.status === "potential"
                              ? "bg-warning"
                              : "bg-destructive"
                          }`}
                          style={{ width: `${chair.utilization}%` }}
                        />
                      </div>
                    </div>

                    {/* Note */}
                    <p className="text-sm text-foreground/70">{chair.note}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Recommendations Section */}
        <Card className="border-primary/30 bg-primary/5 animate-fade-in delay-700 fill-backwards">
          <CardContent className="pt-5">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-syne font-bold text-primary">Висновки</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 bg-background/50 rounded-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-foreground/80">{rec}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Result Footer */}
        <div className="flex items-center justify-center gap-2 text-center animate-fade-in delay-800 fill-backwards">
          <CheckCircle2 className="h-5 w-5 text-success" />
          <p className="text-sm text-foreground/70">
            <span className="font-semibold text-success">Результат:</span>{" "}
            Зростання прибутку без збільшення витрат на персонал
          </p>
        </div>
      </div>
    </section>
  )
}
