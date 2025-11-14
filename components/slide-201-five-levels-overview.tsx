"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FIVE_LEVELS, type LevelData } from "@/types/presentation-data"
import {
  User,
  FileText,
  AlertTriangle,
  RefreshCw,
  Network,
  ChevronRight,
} from "lucide-react"

const iconMap = {
  User,
  FileText,
  AlertTriangle,
  RefreshCw,
  Network,
}

export function Slide201FiveLevelsOverview() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap]
    return Icon || User
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-lg px-6 py-2">
            Module 02: Five Levels Framework
          </Badge>
          <h1 className="text-6xl lg:text-8xl font-bebas text-foreground leading-none">
            The 5 Levels of
            <br />
            <span className="text-primary">AI Adoption</span>
          </h1>
          <p className="text-2xl lg:text-4xl font-syne font-semibold text-muted-foreground max-w-3xl mx-auto">
            Most stuck at 1-3. Transformation happens at 4-5.
          </p>
        </div>

        {/* Interactive Staircase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Staircase Visualization */}
          <div className="relative h-[600px] flex items-end justify-center">
            <svg
              viewBox="0 0 500 600"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
            >
              {FIVE_LEVELS.map((level, index) => {
                const width = 90
                const height = 100
                const x = 20 + index * 90
                const y = 600 - (index + 1) * 110
                const isSelected = selectedLevel === level.id
                const isLevel3 = level.id === 3
                const isTransformation = level.id >= 4

                return (
                  <g
                    key={level.id}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setSelectedLevel(level.id)}
                    onClick={() => setSelectedLevel(level.id)}
                  >
                    {/* Step */}
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      fill={isSelected ? level.color : isLevel3 ? "#FEF3C7" : isTransformation ? "#E0F2FE" : "#F3F4F6"}
                      stroke={level.color}
                      strokeWidth={isSelected ? "4" : "2"}
                      rx="4"
                      className="transition-all duration-300"
                      style={{
                        opacity: isSelected ? 1 : 0.9,
                      }}
                    />

                    {/* Level number */}
                    <text
                      x={x + width / 2}
                      y={y + 35}
                      textAnchor="middle"
                      className="font-bebas text-3xl"
                      fill={isSelected ? "#FFFFFF" : level.color}
                      style={{ fontWeight: 700 }}
                    >
                      {level.id}
                    </text>

                    {/* Level short name */}
                    <text
                      x={x + width / 2}
                      y={y + 55}
                      textAnchor="middle"
                      className="font-manrope text-xs"
                      fill={isSelected ? "#FFFFFF" : "#525252"}
                      style={{ fontSize: "10px" }}
                    >
                      {level.shortName}
                    </text>

                    {/* Warning symbol for Level 3 */}
                    {isLevel3 && (
                      <g className="animate-pulse">
                        <circle cx={x + width - 15} cy={y + 15} r="12" fill="#F59E0B" />
                        <text
                          x={x + width - 15}
                          y={y + 20}
                          textAnchor="middle"
                          className="font-bold text-xs"
                          fill="#FFFFFF"
                        >
                          ⚠
                        </text>
                      </g>
                    )}

                    {/* Star for Level 4 */}
                    {level.id === 4 && (
                      <g>
                        <circle cx={x + width - 15} cy={y + 15} r="12" fill="#00BBFF" />
                        <text
                          x={x + width - 15}
                          y={y + 20}
                          textAnchor="middle"
                          className="font-bold text-xs"
                          fill="#FFFFFF"
                        >
                          ⭐
                        </text>
                      </g>
                    )}
                  </g>
                )
              })}

              {/* Transformation Zone Label */}
              <rect
                x="290"
                y="150"
                width="180"
                height="350"
                fill="none"
                stroke="#00BBFF"
                strokeWidth="3"
                strokeDasharray="10,5"
                rx="8"
                className="animate-pulse"
                opacity="0.6"
              />
              <text
                x="380"
                y="180"
                textAnchor="middle"
                className="font-bebas text-lg"
                fill="#00BBFF"
              >
                TRANSFORMATION
              </text>
              <text
                x="380"
                y="200"
                textAnchor="middle"
                className="font-bebas text-lg"
                fill="#00BBFF"
              >
                ZONE
              </text>
            </svg>
          </div>

          {/* Level Details Panel */}
          <div className="flex items-center">
            {selectedLevel ? (
              <Card className="p-8 border-2 transition-all duration-300 w-full animate-fade-in">
                {(() => {
                  const level = FIVE_LEVELS.find((l) => l.id === selectedLevel)
                  if (!level) return null

                  const Icon = getIcon(level.icon)

                  return (
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: `${level.color}20` }}
                        >
                          <Icon className="h-10 w-10" style={{ color: level.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-4xl font-bebas mb-2" style={{ color: level.color }}>
                            Level {level.id}
                          </h3>
                          <h4 className="text-2xl font-syne font-bold text-foreground mb-2">
                            {level.name}
                          </h4>
                          <p className="text-lg text-muted-foreground font-manrope">
                            {level.principle}
                          </p>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <p className="text-base text-foreground mb-4 font-manrope">
                          {level.description}
                        </p>

                        <div className="space-y-3">
                          <h5 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                            Characteristics
                          </h5>
                          {level.characteristics.map((char, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: level.color }} />
                              <span className="text-sm text-foreground">{char}</span>
                            </div>
                          ))}
                        </div>

                        {level.risks && level.risks.length > 0 && (
                          <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                            <h5 className="font-semibold text-sm uppercase tracking-wide text-destructive mb-2">
                              Risks
                            </h5>
                            {level.risks.map((risk, idx) => (
                              <div key={idx} className="flex items-start gap-2 mb-1">
                                <span className="text-destructive">•</span>
                                <span className="text-sm text-foreground">{risk}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {level.examples && level.examples.length > 0 && (
                          <div className="mt-4">
                            <h5 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                              Examples
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {level.examples.map((example, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })()}
              </Card>
            ) : (
              <Card className="p-12 border-2 border-dashed border-muted-foreground/30 w-full">
                <div className="text-center space-y-4">
                  <Network className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                  <p className="text-xl font-syne text-muted-foreground">
                    Hover over a level to see details
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Click or tap a step in the staircase
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-12 text-center animate-fade-in delay-500">
          <div className="max-w-4xl mx-auto p-6 bg-primary/5 border-2 border-primary/30 rounded-lg">
            <p className="text-lg lg:text-xl font-syne font-bold text-foreground">
              <span className="text-primary">Level 3 is a trap</span> — most organizations get stuck here with negative ROI.
              <br />
              Real transformation starts at <span className="text-accent">Level 4</span>, where rapid iteration enables reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
