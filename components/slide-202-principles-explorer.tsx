"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FIVE_LEVELS } from "@/types/presentation-data"
import { useState } from "react"
import * as LucideIcons from "lucide-react"

export function Slide202PrinciplesExplorer() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleCard = (levelId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(levelId)) {
        newSet.delete(levelId)
      } else {
        newSet.add(levelId)
      }
      return newSet
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Module 02: Five Levels Framework
          </Badge>
          <h1 className="font-display text-6xl lg:text-8xl font-bold text-primary tracking-tight">
            Core Principles
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            Click each card to discover what fundamentally separates each level
          </p>
        </div>

        {/* Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-slide-in-up delay-200">
          {FIVE_LEVELS.map((level) => {
            const isFlipped = flippedCards.has(level.id)
            const IconComponent =
              LucideIcons[level.icon as keyof typeof LucideIcons] || LucideIcons.Circle

            return (
              <button
                key={level.id}
                onClick={() => toggleCard(level.id)}
                className="group relative h-[400px] perspective-1000 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
                aria-label={`${isFlipped ? "Hide" : "Show"} details for ${level.name}`}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of Card - Principle */}
                  <Card
                    className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 border-2 transition-all duration-300 ${
                      level.id === 3
                        ? "border-amber-500/60 hover:border-amber-500 hover:shadow-glow-amber"
                        : level.id >= 4
                          ? "border-primary/60 hover:border-primary hover:shadow-glow"
                          : "border-border hover:border-foreground-muted/60 hover:shadow-lg"
                    } ${!isFlipped ? "cursor-pointer" : ""}`}
                    style={{ backgroundColor: `${level.color}10` }}
                  >
                    <div className="flex flex-col items-center justify-center space-y-4 text-center h-full">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                          level.id === 3
                            ? "bg-amber-500/20"
                            : level.id >= 4
                              ? "bg-primary/20"
                              : "bg-foreground/10"
                        }`}
                      >
                        <IconComponent
                          className="w-8 h-8"
                          style={{ color: level.color }}
                        />
                      </div>

                      {/* Level Name */}
                      <div className="space-y-2">
                        <div className="font-display text-sm font-bold text-foreground-muted">
                          {level.shortName}
                        </div>
                        <h3
                          className="font-display text-2xl font-bold"
                          style={{ color: level.color }}
                        >
                          {level.name}
                        </h3>
                      </div>

                      {/* Principle */}
                      <div className="flex-1 flex items-center">
                        <p className="font-body text-lg font-semibold text-foreground">
                          {level.principle}
                        </p>
                      </div>

                      {/* Click Hint */}
                      <div className="text-xs text-foreground-muted/60 font-body opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to see details
                      </div>
                    </div>
                  </Card>

                  {/* Back of Card - Details */}
                  <Card
                    className={`absolute w-full h-full backface-hidden rotate-y-180 flex flex-col p-6 border-2 transition-all duration-300 overflow-y-auto ${
                      level.id === 3
                        ? "border-amber-500/60 hover:border-amber-500"
                        : level.id >= 4
                          ? "border-primary/60 hover:border-primary"
                          : "border-border hover:border-foreground-muted/60"
                    }`}
                    style={{ backgroundColor: `${level.color}15` }}
                  >
                    <div className="space-y-4">
                      {/* Level Name */}
                      <div className="text-center">
                        <div className="font-display text-sm font-bold text-foreground-muted">
                          {level.shortName}
                        </div>
                        <h3
                          className="font-display text-xl font-bold"
                          style={{ color: level.color }}
                        >
                          {level.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-foreground-muted font-body leading-relaxed">
                        {level.description}
                      </p>

                      {/* Characteristics */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-display font-bold text-foreground uppercase tracking-wide">
                          Characteristics
                        </h4>
                        <ul className="space-y-1">
                          {level.characteristics.map((char, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-foreground-muted flex items-start gap-2"
                            >
                              <span className="text-primary mt-0.5">•</span>
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Risks (Level 3) */}
                      {level.risks && level.risks.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-display font-bold text-amber-600 uppercase tracking-wide">
                            Risks
                          </h4>
                          <ul className="space-y-1">
                            {level.risks.map((risk, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-foreground-muted flex items-start gap-2"
                              >
                                <span className="text-amber-600 mt-0.5">⚠</span>
                                <span>{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Guidance (Level 3) */}
                      {level.guidance && level.guidance.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-display font-bold text-primary uppercase tracking-wide">
                            Guidance
                          </h4>
                          <ul className="space-y-1">
                            {level.guidance.map((guide, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-foreground-muted flex items-start gap-2"
                              >
                                <span className="text-primary mt-0.5">✓</span>
                                <span>{guide}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Click Hint */}
                      <div className="text-xs text-foreground-muted/60 font-body text-center pt-2 border-t border-foreground/10">
                        Click to flip back
                      </div>
                    </div>
                  </Card>
                </div>
              </button>
            )
          })}
        </div>

        {/* Key Insight */}
        <div className="text-center space-y-4 animate-fade-in delay-300">
          <div className="inline-block px-6 py-4 bg-primary/10 border-2 border-primary/40 rounded-xl">
            <p className="font-body text-lg lg:text-xl text-foreground">
              <span className="font-bold text-primary">Key Insight:</span> Levels 1-2
              are about access. Level 3 tries to integrate but can't iterate fast enough.{" "}
              <span className="font-bold text-primary">
                Levels 4-5 enable continuous improvement — where ROI begins.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
