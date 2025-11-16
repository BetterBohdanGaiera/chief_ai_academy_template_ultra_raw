"use client"

import { useState } from "react"
import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Package, Ban } from "lucide-react"

/**
 * S1-02: Four AI Approaches Overview
 * Hover-reveal cards pattern showing 4 distinct approaches
 */
export default function Slide02S1FourApproaches() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const approaches = [
    {
      id: "ml",
      title: "Machine Learning",
      icon: Database,
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      description: "Data patterns → Predictions",
      examples: ["Sales forecasting", "Churn prediction", "Fraud detection"],
      whenToUse: "Historical data patterns, need predictions at scale"
    },
    {
      id: "existing-no-data",
      title: "Existing Tools (No Data)",
      icon: Package,
      color: "border-purple-500",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      description: "Generic capabilities",
      examples: ["ChatGPT", "Midjourney", "DALL-E"],
      whenToUse: "Commodity tasks, non-sensitive work, baseline productivity"
    },
    {
      id: "existing-with-data",
      title: "Existing Tools (WITH Data)",
      icon: Package,
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      description: "Your data + basic capabilities",
      examples: ["Notion AI", "Microsoft Copilot", "Salesforce Einstein"],
      whenToUse: "Simple Q&A from docs, basic assistance, vendor interface works"
    },
    {
      id: "custom-agentic",
      title: "Custom Agentic AI",
      icon: Brain,
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      description: "Your data + advanced control",
      examples: ["HR Slackbot with reflection", "Sales analyzer with YOUR methodology"],
      whenToUse: "Need better models, advanced capabilities, custom interfaces, full control"
    }
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16 py-16">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <SlideDownEntrance delay={0.1}>
            <Badge variant="outline" className="border-orange-500/30 bg-orange-500/5 text-orange-500">
              Decision Framework
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              Four AI <span className="text-orange-500">Approaches</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60">
              Hover over each to explore when to use
            </p>
          </FadeInEntrance>
        </div>

        {/* Approach Cards */}
        <StaggeredReveal className="grid grid-cols-2 gap-6 max-w-6xl w-full">
          {approaches.map((approach) => {
            const Icon = approach.icon
            const isActive = activeCard === approach.id

            return (
              <div
                key={approach.id}
                className={`
                  bg-white/5 border-2 p-8 cursor-pointer
                  transition-all duration-300
                  ${isActive
                    ? `${approach.color} ${approach.glowColor} scale-105`
                    : "border-white/10 hover:border-white/30"
                  }
                `}
                onMouseEnter={() => setActiveCard(approach.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${isActive ? 'bg-orange-500/20' : 'bg-white/10'} transition-colors`}>
                    <Icon className={`w-8 h-8 ${isActive ? 'text-orange-500' : 'text-white/60'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bebas text-3xl text-white mb-1">
                      {approach.title}
                    </h3>
                    <p className="font-manrope text-sm text-white/60">
                      {approach.description}
                    </p>
                  </div>
                </div>

                {/* Revealed Details */}
                {isActive && (
                  <div className="space-y-3 mt-6 animate-fade-in">
                    <div>
                      <p className="font-manrope text-xs font-semibold text-orange-500 mb-2">
                        EXAMPLES:
                      </p>
                      <ul className="space-y-1">
                        {approach.examples.map((example, i) => (
                          <li key={i} className="font-manrope text-sm text-white/80 flex gap-2">
                            <span className="text-orange-500">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <p className="font-manrope text-xs font-semibold text-cyan-500 mb-1">
                        WHEN TO USE:
                      </p>
                      <p className="font-manrope text-sm text-white/90">
                        {approach.whenToUse}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </StaggeredReveal>

        {/* Key Insight */}
        <FadeInEntrance delay={0.8}>
          <div className="mt-10 max-w-4xl bg-orange-500/10 border border-orange-500/30 p-6">
            <p className="font-manrope text-sm text-center text-white/90">
              <span className="font-semibold text-orange-500">Critical Question:</span> Not "Does this AI need my company data?" but
              <span className="text-white font-semibold"> "Do I need MORE than basic data access?"</span> (better models, advanced capabilities, custom interfaces, full control)
            </p>
          </div>
        </FadeInEntrance>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-02</p>
      </div>
    </div>
  )
}
