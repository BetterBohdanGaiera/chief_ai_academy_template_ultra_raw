"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, DollarSign } from "lucide-react"

/**
 * S1-06: Category 1 - Static Information Chatbots
 * First solution category with ROI ranges
 */
export default function Slide06S1CategoryStaticInfo() {
  const examples = [
    {
      name: "HR Onboarding Assistant",
      roi: "$99K/year",
      metric: "15-20 min → 2 min response time",
      payback: "1 month"
    },
    {
      name: "Sales Enablement Assistant",
      roi: "$73K/year",
      metric: "20% less time searching",
      payback: "1.5 months"
    },
    {
      name: "IT Support Assistant",
      roi: "$54K/year",
      metric: "60% reduction in L1 tickets",
      payback: "2 months"
    }
  ]

  const whenToUse = [
    "Extensive documentation, hard to find info",
    "Same questions asked repeatedly",
    "Knowledge scattered across systems",
    "Onboarding takes significant time"
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
            <Badge variant="outline" className="border-green-500/30 bg-green-500/5 text-green-500">
              Category 1 • Level 4
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              Static Information <span className="text-orange-500">Chatbots</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-xl text-white/60 max-w-3xl mx-auto">
              Answer questions by retrieving and explaining information from existing knowledge bases
            </p>
          </FadeInEntrance>
        </div>

        {/* Pattern */}
        <FadeInEntrance delay={0.4}>
          <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 mb-10 max-w-4xl">
            <p className="font-bebas text-2xl text-cyan-400 mb-2">COMMON PATTERN</p>
            <p className="font-manrope text-lg text-white/90">
              Document knowledge → AI retrieves relevant info → AI explains in context
            </p>
          </div>
        </FadeInEntrance>

        {/* Examples Grid */}
        <StaggeredReveal className="grid grid-cols-3 gap-6 max-w-6xl w-full mb-10">
          {examples.map((example, idx) => (
            <div
              key={idx}
              className="bg-white/5 border-2 border-green-500/30 p-6 hover:border-green-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all"
            >
              <div className="mb-4">
                <FileText className="w-8 h-8 text-green-500 mb-2" />
                <h3 className="font-bebas text-2xl text-white">
                  {example.name}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <p className="font-bebas text-3xl text-green-400">
                    {example.roi}
                  </p>
                </div>

                <div>
                  <p className="font-manrope text-xs text-white/50 mb-1">Impact:</p>
                  <p className="font-manrope text-sm text-white/80">{example.metric}</p>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <p className="font-manrope text-xs text-cyan-400">
                    <Clock className="w-3 h-3 inline mr-1" />
                    Payback: {example.payback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggeredReveal>

        {/* When to Use */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl w-full">
          <FadeInEntrance delay={0.6}>
            <div className="bg-white/5 border border-white/10 p-6">
              <p className="font-manrope text-xs font-semibold text-orange-500 mb-3">
                WHEN TO USE:
              </p>
              <ul className="space-y-2">
                {whenToUse.map((item, i) => (
                  <li key={i} className="font-manrope text-sm text-white/80 flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInEntrance>

          <FadeInEntrance delay={0.7}>
            <div className="bg-green-500/10 border border-green-500/30 p-6">
              <p className="font-bebas text-3xl text-green-400 mb-2">ROI PATTERN</p>
              <p className="font-bebas text-5xl text-white mb-2">$15K - $99K/year</p>
              <p className="font-manrope text-sm text-white/70">
                Payback: 1-2 months
              </p>
            </div>
          </FadeInEntrance>
        </div>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-06</p>
      </div>
    </div>
  )
}
