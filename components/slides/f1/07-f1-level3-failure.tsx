"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { AlertTriangle, DollarSign, Clock, Users } from "lucide-react"

export default function F1Level3Failure() {
  const timeline = [
    {
      phase: "Month 0-1",
      title: "Initial Setup",
      cost: "$35K/year licenses",
      status: "Setup complete, 70% accurate",
      color: "border-yellow-500/40 bg-yellow-500/5"
    },
    {
      phase: "Month 2-4",
      title: "The Struggle",
      cost: "$15-20K in fixes",
      status: "Still 70% accurate. Slow iteration.",
      color: "border-orange-500/40 bg-orange-500/5"
    },
    {
      phase: "Month 6+",
      title: "The Abandonment",
      cost: "Total: $50-60K wasted",
      status: "Tool abandoned. Team loses trust in AI.",
      color: "border-red-500/40 bg-red-500/5"
    }
  ]

  const consequences = [
    {
      icon: DollarSign,
      title: "Financial Loss",
      description: "$50-60K wasted investment",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Time Wasted",
      description: "6 months with no results",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Organizational Scar Tissue",
      description: "12-18 months of AI resistance",
      color: "text-primary"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="destructive">Level 3: Full Story</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            THE FAILURE <span className="text-red-500">TIMELINE</span>
          </h2>
          <p className="text-xl text-foreground/70">Why Level 3 creates lasting organizational damage</p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timeline.map((item, idx) => (
            <Card
              key={idx}
              className={`${item.color} animate-fade-in delay-${idx * 200 + 300} fill-backwards`}
            >
              <CardContent className="pt-6 space-y-3">
                <div className="text-sm font-semibold text-primary">{item.phase}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.cost}</p>
                <p className="text-sm font-medium">{item.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consequences */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">The Real Cost</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consequences.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card
                  key={idx}
                  className={`border-border/50 bg-muted/20 animate-fade-in delay-${idx * 150 + 900} fill-backwards`}
                >
                  <CardContent className="pt-6 space-y-3 text-center">
                    <Icon className={`h-8 w-8 mx-auto ${item.color}`} />
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-sm text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-red-500/10 border-red-500 animate-fade-in delay-1200 fill-backwards">
          <CardContent className="pt-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
              <p className="text-sm md:text-base">
                <span className="font-semibold text-red-500">Most Expensive Consequence:</span> Organizational scar tissue. When teams see AI fail, they resist future AI initiatives for 12-18 months. This delays transformation far more than the money lost.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
