"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { IMPLEMENTATION_PATHS } from "@/types/presentation-data"
import { useState } from "react"
import * as LucideIcons from "lucide-react"
import { RefreshCw } from "lucide-react"

export function Slide210Level4Iterative() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-cyan-50/30 to-background relative overflow-hidden">
      {/* Animated Feedback Loop Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <RefreshCw className="w-96 h-96 text-cyan-600 animate-spin-slow" />
      </div>

      <div className="relative z-10 max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-cyan-500/60">
            Level 4: Iterative Agents
          </Badge>
          <h1 className="font-display text-7xl lg:text-9xl font-bold text-cyan-600 tracking-tight">
            Rapid Iteration
          </h1>
          <p className="font-body text-2xl lg:text-3xl text-foreground-muted max-w-3xl mx-auto">
            Build to iterate, achieve 95%+ reliability through fast feedback loops
          </p>
        </div>

        {/* Key Characteristics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-in-up delay-200">
          <div className="bg-white/90 backdrop-blur-sm border-2 border-cyan-200 rounded-xl p-6 text-center space-y-3">
            <div className="text-4xl">⚡</div>
            <h3 className="font-display text-lg font-bold text-cyan-700">
              Days to Weeks
            </h3>
            <p className="text-sm text-foreground-muted">Per iteration cycle</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm border-2 border-cyan-200 rounded-xl p-6 text-center space-y-3">
            <div className="text-4xl">📊</div>
            <h3 className="font-display text-lg font-bold text-cyan-700">
              Measurable Quality
            </h3>
            <p className="text-sm text-foreground-muted">Test-driven development</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm border-2 border-cyan-200 rounded-xl p-6 text-center space-y-3">
            <div className="text-4xl">🔄</div>
            <h3 className="font-display text-lg font-bold text-cyan-700">
              26+ Iterations/Year
            </h3>
            <p className="text-sm text-foreground-muted">Continuous improvement</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm border-2 border-cyan-200 rounded-xl p-6 text-center space-y-3">
            <div className="text-4xl">🎯</div>
            <h3 className="font-display text-lg font-bold text-cyan-700">95%+ Reliability</h3>
            <p className="text-sm text-foreground-muted">Achievable through iteration</p>
          </div>
        </div>

        {/* Implementation Paths */}
        <div className="space-y-6 animate-fade-in delay-300">
          <div className="text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Three Implementation Paths
            </h2>
            <p className="text-foreground-muted">
              Click a path to learn more about when to use it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {IMPLEMENTATION_PATHS.map((path) => {
              const IconComponent =
                LucideIcons[path.icon as keyof typeof LucideIcons] || LucideIcons.Circle
              const isSelected = selectedPath === path.id

              return (
                <Card
                  key={path.id}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "border-2 border-cyan-400 shadow-lg scale-105 bg-cyan-50/50"
                      : "border-2 border-cyan-200 hover:border-cyan-300 hover:shadow-md"
                  }`}
                  onClick={() =>
                    setSelectedPath(selectedPath === path.id ? null : path.id)
                  }
                >
                  <div className="space-y-4">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-cyan-700">
                          {path.name}
                        </h3>
                        <p className="text-sm text-foreground-muted mt-1">
                          {path.description}
                        </p>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {isSelected && (
                      <div className="space-y-4 pt-4 border-t border-cyan-200 animate-fade-in">
                        {/* Pros */}
                        <div>
                          <h4 className="text-xs font-display font-bold text-emerald-700 uppercase tracking-wide mb-2">
                            Advantages
                          </h4>
                          <ul className="space-y-1">
                            {path.pros.map((pro, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-foreground flex items-start gap-2"
                              >
                                <span className="text-emerald-600 mt-0.5">✓</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <h4 className="text-xs font-display font-bold text-amber-700 uppercase tracking-wide mb-2">
                            Considerations
                          </h4>
                          <ul className="space-y-1">
                            {path.cons.map((con, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-foreground-muted flex items-start gap-2"
                              >
                                <span className="text-amber-600 mt-0.5">⚠</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Best For */}
                        <div className="p-3 bg-cyan-100 rounded-lg">
                          <div className="text-xs font-display font-bold text-cyan-800 uppercase tracking-wide mb-1">
                            Best For
                          </div>
                          <div className="text-sm text-cyan-900">{path.bestFor}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center animate-fade-in delay-400">
          <div className="inline-block px-6 py-4 bg-cyan-100/90 border-2 border-cyan-400 rounded-xl">
            <p className="font-body text-lg lg:text-xl text-foreground">
              <span className="font-bold text-cyan-600">Transformation Begins:</span> Rapid
              feedback loops enable continuous improvement until truly reliable
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
