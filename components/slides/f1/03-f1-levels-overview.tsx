"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { User, Blocks, Workflow, RefreshCw, Bot } from "lucide-react"
import Image from "next/image"

export default function F1LevelsOverviewSlide() {
  const levels = [
    {
      number: 1,
      title: "Individual AI",
      icon: User,
      color: "muted-foreground",
      description: "ChatGPT, Claude",
      characteristics: ["Personal use", "No integration", "$0-20/month"],
      emphasis: false
    },
    {
      number: 2,
      title: "Generic SaaS",
      icon: Blocks,
      color: "muted-foreground",
      description: "Pre-built tools",
      characteristics: ["Department level", "Shallow integration", "$50-200/month"],
      emphasis: false
    },
    {
      number: 3,
      title: "No-Code Trap",
      icon: Workflow,
      color: "warning",
      description: "Zapier, Make.com",
      characteristics: ["Slow iteration", "External dependency", "Negative ROI"],
      emphasis: true,
      trap: true
    },
    {
      number: 4,
      title: "Iterative Agents",
      icon: RefreshCw,
      color: "primary",
      description: "Custom solutions",
      characteristics: ["Rapid iteration", "Internal team", "300-600% ROI"],
      emphasis: true,
      transformation: true
    },
    {
      number: 5,
      title: "Autonomous",
      icon: Bot,
      color: "cyan-500",
      description: "Full automation",
      characteristics: ["Multi-agent", "Minimal oversight", "Strategic advantage"],
      emphasis: false,
      future: true
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Background with levels overview image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763332969401-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-8 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="grid" opacity={0.06} color="#0A0A0A" />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-slide-in-down">
          <Badge variant="outline" className="border-primary text-primary">
            Foundation Module 1
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            THE 5 LEVELS
          </h2>
          <p className="font-syne font-bold text-xl md:text-2xl lg:text-3xl text-primary/80 max-w-4xl mx-auto">
            Most stuck at 1-3. Transformation happens at 4-5.
          </p>
        </div>

        {/* 5-Column Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {levels.map((level, index) => {
            const Icon = level.icon
            const baseDelay = 200 + (index * 100)

            return (
              <Card
                key={level.number}
                className={`
                  transition-all duration-600 hover:scale-105 hover:shadow-xl
                  animate-fade-in delay-${baseDelay} fill-backwards
                  ${level.trap
                    ? 'border-warning bg-gradient-to-br from-warning/20 to-warning/10'
                    : level.transformation
                    ? 'border-primary/60 bg-gradient-to-br from-primary/15 to-primary/5 shadow-glow'
                    : level.future
                    ? 'border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5'
                    : 'border-border/50 bg-muted/20'
                  }
                `}
                style={{ animationDelay: `${baseDelay}ms` }}
              >
                <CardContent className="p-5 space-y-4 h-full flex flex-col">
                  {/* Level Number Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
                        ${level.trap
                          ? 'bg-warning/30 text-warning'
                          : level.transformation
                          ? 'bg-primary/30 text-primary'
                          : level.future
                          ? 'bg-cyan-500/30 text-cyan-500'
                          : 'bg-muted text-muted-foreground'
                        }
                      `}
                    >
                      {level.number}
                    </div>
                    <Icon
                      className={`
                        h-6 w-6
                        ${level.trap
                          ? 'text-warning'
                          : level.transformation
                          ? 'text-primary'
                          : level.future
                          ? 'text-cyan-500'
                          : 'text-muted-foreground'
                        }
                      `}
                    />
                  </div>

                  {/* Title */}
                  <div className="space-y-1 flex-grow">
                    <h3 className="font-syne font-bold text-lg md:text-xl leading-tight">
                      {level.title}
                    </h3>
                    <p className={`
                      text-sm font-medium
                      ${level.trap
                        ? 'text-warning'
                        : level.transformation
                        ? 'text-primary'
                        : level.future
                        ? 'text-cyan-500'
                        : 'text-muted-foreground'
                      }
                    `}>
                      {level.description}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div className="space-y-2 border-t border-border/30 pt-3">
                    {level.characteristics.map((char, idx) => (
                      <p
                        key={idx}
                        className="text-xs text-foreground/70 leading-snug"
                      >
                        • {char}
                      </p>
                    ))}
                  </div>

                  {/* Special markers */}
                  {level.trap && (
                    <div className="bg-warning/20 border border-warning/40 rounded px-2 py-1 text-center">
                      <span className="text-xs font-bold text-warning uppercase">⚠ Trap</span>
                    </div>
                  )}
                  {level.transformation && (
                    <div className="bg-primary/20 border border-primary/40 rounded px-2 py-1 text-center">
                      <span className="text-xs font-bold text-primary uppercase">★ Transform</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Insight */}
        <div className="max-w-5xl mx-auto animate-fade-in delay-700 fill-backwards">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-lg p-6 text-center">
            <p className="font-syne font-bold text-lg md:text-xl text-foreground">
              <span className="text-muted-foreground">Most organizations are at Levels 1-3.</span>
              {" "}
              <span className="text-primary">Real transformation starts at Level 4</span>
              {" "}
              <span className="text-muted-foreground">where rapid iteration changes everything.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
