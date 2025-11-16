"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"
import { Database, Clock, DollarSign, TrendingUp } from "lucide-react"

/**
 * S1-07: Category 2 - Dynamic Content Chatbots
 * Level 4-5 solutions with real-time data
 */
export default function Slide07S1CategoryDynamicContent() {
  const examples = [
    {
      name: "Customer Support Agent",
      roi: "$246K/year",
      metric: "40% tickets automated, 24/7",
      level: "Level 4-5"
    },
    {
      name: "Sales Deal Intelligence",
      roi: "$196K/year",
      metric: "Instant deal insights, patterns",
      level: "Level 5"
    },
    {
      name: "Project Status AI",
      roi: "$78K/year",
      metric: "Reduced meetings, instant visibility",
      level: "Level 4"
    }
  ]

  const whenToUse = [
    "Information changes frequently, needs to be current",
    "Data in multiple business systems",
    "Manual aggregation takes time",
    "Need 24/7 access to live business data"
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-dots" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16 py-16">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <SlideDownEntrance delay={0.1}>
            <Badge variant="outline" className="border-cyan-500/30 bg-cyan-500/5 text-cyan-500">
              Category 2 • Level 4-5
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              Dynamic Content <span className="text-orange-500">Chatbots</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-xl text-white/60 max-w-3xl mx-auto">
              Fetch real-time data from live systems, synthesize across sources, provide current answers
            </p>
          </FadeInEntrance>
        </div>

        {/* Pattern */}
        <FadeInEntrance delay={0.4}>
          <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 mb-10 max-w-5xl">
            <p className="font-bebas text-2xl text-cyan-400 mb-2">COMMON PATTERN</p>
            <p className="font-manrope text-lg text-white/90">
              User question → AI queries multiple systems → AI aggregates data → AI interprets and explains
            </p>
          </div>
        </FadeInEntrance>

        {/* Examples Grid */}
        <StaggeredReveal className="grid grid-cols-3 gap-6 max-w-6xl w-full mb-10">
          {examples.map((example, idx) => (
            <div
              key={idx}
              className="bg-white/5 border-2 border-cyan-500/30 p-6 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(0,187,255,0.2)] transition-all"
            >
              <div className="mb-4">
                <Database className="w-8 h-8 text-cyan-500 mb-2" />
                <h3 className="font-bebas text-2xl text-white mb-1">
                  {example.name}
                </h3>
                <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                  {example.level}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  <p className="font-bebas text-3xl text-cyan-400">
                    {example.roi}
                  </p>
                </div>

                <div>
                  <p className="font-manrope text-xs text-white/50 mb-1">Impact:</p>
                  <p className="font-manrope text-sm text-white/80">{example.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggeredReveal>

        {/* When to Use & ROI */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl w-full">
          <FadeInEntrance delay={0.6}>
            <div className="bg-white/5 border border-white/10 p-6">
              <p className="font-manrope text-xs font-semibold text-orange-500 mb-3">
                WHEN TO USE:
              </p>
              <ul className="space-y-2">
                {whenToUse.map((item, i) => (
                  <li key={i} className="font-manrope text-sm text-white/80 flex gap-2">
                    <span className="text-cyan-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInEntrance>

          <FadeInEntrance delay={0.7}>
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-6">
              <p className="font-bebas text-3xl text-cyan-400 mb-2">ROI PATTERN</p>
              <p className="font-bebas text-5xl text-white mb-2">$14K - $246K/year</p>
              <p className="font-manrope text-sm text-white/70 mb-3">
                Payback: 1-3 months
              </p>
              <div className="pt-3 border-t border-cyan-500/20">
                <p className="font-manrope text-xs text-orange-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Often evolve from Level 4 to Level 5 as complexity grows
                </p>
              </div>
            </div>
          </FadeInEntrance>
        </div>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-07</p>
      </div>
    </div>
  )
}
