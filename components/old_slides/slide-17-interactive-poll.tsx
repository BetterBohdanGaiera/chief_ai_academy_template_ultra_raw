"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function Slide17InteractivePoll() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

  const levels = [
    {
      level: 1,
      title: "Individual AI",
      description: "People using ChatGPT/Claude individually?",
    },
    {
      level: 2,
      title: "Generic SaaS AI Tools",
      description: "Using Jasper, Copy.ai, pre-built chatbots?",
    },
    {
      level: 3,
      title: "No-Code Automation",
      description: "Trying Zapier, Make.com that isn't delivering?",
    },
    {
      level: 4,
      title: "Iterative Agents",
      description: "Building custom agents connected to your systems?",
    },
    {
      level: 5,
      title: "Autonomous Systems",
      description: "Fully autonomous systems?",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Where Is Your Organization Right Now?
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground text-pretty leading-relaxed">
            Think about your company. Where would you place yourself?
          </p>
        </div>

        {/* Interactive Selection */}
        <div className="grid grid-cols-1 gap-6">
          {levels.map((item) => (
            <Card
              key={item.level}
              className={`
                border-2 transition-all duration-300 cursor-pointer
                ${
                  selectedLevel === item.level
                    ? "border-primary bg-primary/10 shadow-lg scale-[1.02]"
                    : "border-border/50 hover:border-primary/50 hover:shadow-md"
                }
              `}
              onClick={() => setSelectedLevel(item.level)}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Checkbox/Selection Indicator */}
                  <div
                    className={`
                      flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all
                      ${
                        selectedLevel === item.level
                          ? "border-primary bg-primary"
                          : "border-border/50 hover:border-primary/50"
                      }
                    `}
                  >
                    {selectedLevel === item.level && <CheckCircle2 className="h-5 w-5 text-white" />}
                  </div>

                  {/* Level Badge & Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge
                        className={`
                          text-lg font-bold px-3 py-1
                          ${
                            item.level === 1 || item.level === 2
                              ? "bg-secondary text-secondary-foreground"
                              : item.level === 3
                                ? "bg-warning text-warning-foreground"
                                : "bg-primary text-primary-foreground"
                          }
                        `}
                      >
                        Level {item.level}
                      </Badge>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Message */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">Most companies are at Levels 1-3</span>
                </p>
                <p className="text-lg leading-relaxed">That's normal—you're not behind</p>
              </div>
              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-primary">This session shows the path to Level 4</span>
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">Goal: Avoid the Level 3 trap</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected Feedback */}
        {selectedLevel !== null && (
          <div className="text-center animate-fade-in">
            <Card className="border-primary/60 bg-gradient-to-br from-primary/20 to-primary/5 inline-block">
              <CardContent className="p-6">
                <p className="text-xl font-semibold text-primary">
                  Thank you for sharing! Level {selectedLevel} selected.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
