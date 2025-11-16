"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { AlertTriangle, TrendingUp, Target } from "lucide-react"

export default function F1WhyLevels() {
  const insights = [
    {
      icon: AlertTriangle,
      title: "The Problem",
      description: "Most organizations waste millions stuck at Level 3, which often delivers negative ROI",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/40"
    },
    {
      icon: Target,
      title: "The Reality",
      description: "Real transformation doesn't start until Level 4—where AI connects to YOUR business systems deeply and robustly",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/40"
    },
    {
      icon: TrendingUp,
      title: "The Opportunity",
      description: "Companies that understand these levels achieve 10x ROI while others waste resources",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/40"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8 lg:space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="border-primary text-primary">
            Foundation Module 1
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas leading-tight">
            WHY LEVELS <span className="text-primary">MATTER</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto">
            Why do some companies achieve 10x ROI with AI while others waste millions?
          </p>
        </div>

        {/* Answer */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 animate-scale-in delay-300 fill-backwards">
          <CardContent className="pt-6">
            <p className="text-xl md:text-2xl font-semibold text-center">
              The answer isn't technology. It's <span className="text-primary font-bold">which level they're operating at</span>.
            </p>
          </CardContent>
        </Card>

        {/* Three Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, idx) => {
            const Icon = insight.icon
            return (
              <Card
                key={idx}
                className={`${insight.borderColor} ${insight.bgColor} animate-fade-in delay-${idx * 150 + 500} fill-backwards`}
              >
                <CardContent className="pt-6 space-y-3">
                  <Icon className={`h-8 w-8 ${insight.color}`} />
                  <h3 className="text-xl font-bold">{insight.title}</h3>
                  <p className="text-sm text-foreground/80">{insight.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Takeaway */}
        <Card className="bg-muted/20 border-border/50 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Key Takeaway:</span> Transformation is about <strong>HOW you build</strong>, not WHAT you build.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
