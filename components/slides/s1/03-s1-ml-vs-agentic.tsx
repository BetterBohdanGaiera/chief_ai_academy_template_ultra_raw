"use client"

import { useState } from "react"
import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Brain } from "lucide-react"

/**
 * S1-03: ML vs Agentic Decision Tree
 * Interactive click-to-navigate decision framework
 */
export default function Slide03S1MLvsAgentic() {
  const [selectedPath, setSelectedPath] = useState<"ml" | "agentic" | null>(null)

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-dots" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16 py-16">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <SlideDownEntrance delay={0.1}>
            <Badge variant="outline" className="border-orange-500/30 bg-orange-500/5 text-orange-500">
              Decision Tree
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              ML vs <span className="text-orange-500">Agentic AI</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60 max-w-3xl mx-auto">
              Click a path to see detailed decision criteria
            </p>
          </FadeInEntrance>
        </div>

        {/* Decision Flow */}
        <div className="max-w-5xl w-full space-y-8">

          {/* Starting Question */}
          <FadeInEntrance delay={0.4}>
            <div className="bg-cyan-500/10 border-2 border-cyan-500/40 p-6 text-center">
              <p className="font-bebas text-3xl text-cyan-400 mb-2">
                Do you have historical data showing patterns?
              </p>
              <p className="font-manrope text-sm text-white/60">
                (Sales trends, customer behavior, system logs, etc.)
              </p>
            </div>
          </FadeInEntrance>

          {/* Two Paths */}
          <div className="grid grid-cols-2 gap-8">

            {/* ML Path */}
            <div
              className={`
                border-2 p-8 cursor-pointer
                transition-all duration-300
                ${selectedPath === "ml"
                  ? "border-green-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-105"
                  : "border-white/20 hover:border-green-500/50"
                }
              `}
              onClick={() => setSelectedPath(selectedPath === "ml" ? null : "ml")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20">
                  <Database className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bebas text-4xl text-green-400">
                  YES → ML
                </h3>
              </div>

              {selectedPath === "ml" && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <p className="font-manrope text-xs font-semibold text-green-500 mb-2">
                      ✓ WHEN TO CHOOSE ML:
                    </p>
                    <ul className="space-y-1">
                      {[
                        "You have historical data showing clear patterns",
                        "You need predictions or classifications",
                        "The pattern is stable and repeatable",
                        "Volume justifies model training cost"
                      ].map((item, i) => (
                        <li key={i} className="font-manrope text-sm text-white/80 flex gap-2">
                          <span className="text-green-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="font-manrope text-xs font-semibold text-orange-500 mb-1">
                      EXAMPLES:
                    </p>
                    <p className="font-manrope text-sm text-white/80">
                      Sales forecasting, churn prediction, fraud detection, demand forecasting
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Agentic Path */}
            <div
              className={`
                border-2 p-8 cursor-pointer
                transition-all duration-300
                ${selectedPath === "agentic"
                  ? "border-orange-500 shadow-[0_0_30px_rgba(255,77,0,0.3)] scale-105"
                  : "border-white/20 hover:border-orange-500/50"
                }
              `}
              onClick={() => setSelectedPath(selectedPath === "agentic" ? null : "agentic")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/20">
                  <Brain className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-bebas text-4xl text-orange-400">
                  NO → Agentic AI
                </h3>
              </div>

              {selectedPath === "agentic" && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <p className="font-manrope text-xs font-semibold text-orange-500 mb-2">
                      ✓ WHEN TO CHOOSE AGENTIC AI:
                    </p>
                    <ul className="space-y-1">
                      {[
                        "You need reasoning with your company context",
                        "Task requires multi-step problem solving",
                        "No clear data patterns to learn from",
                        "Need to iterate and improve over time"
                      ].map((item, i) => (
                        <li key={i} className="font-manrope text-sm text-white/80 flex gap-2">
                          <span className="text-orange-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="font-manrope text-xs font-semibold text-cyan-500 mb-1">
                      EXAMPLES:
                    </p>
                    <p className="font-manrope text-sm text-white/80">
                      HR chatbot, document analysis, customer support, research synthesis
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Insight */}
          <FadeInEntrance delay={0.8}>
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 text-center">
              <p className="font-manrope text-sm text-white/90">
                <span className="font-semibold text-cyan-400">Key Distinction:</span> ML learns from data patterns.
                Agentic AI reasons using instructions and context. Different tools for different problems.
              </p>
            </div>
          </FadeInEntrance>
        </div>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-03</p>
      </div>
    </div>
  )
}
