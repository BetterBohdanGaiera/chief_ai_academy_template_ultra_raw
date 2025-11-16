"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"
import { Workflow, Clock, DollarSign, Target } from "lucide-react"

/**
 * S1-08: Category 3 - Custom Workflows & Analyzers
 * Level 5 solutions applying expert judgment at scale
 */
export default function Slide08S1CategoryWorkflows() {
  const examples = [
    {
      name: "Proposal Quality Analyzer",
      roi: "$158K/year",
      metric: "Higher win rates, consistent quality",
      payback: "2 months"
    },
    {
      name: "Sales Call Analyzer",
      roi: "$141K/year",
      metric: "100% calls reviewed vs 5% manual",
      payback: "2.5 months"
    },
    {
      name: "Interview Quality Analyzer",
      roi: "$95K/year",
      metric: "Consistent hiring, reduced bias",
      payback: "3 months"
    }
  ]

  const whenToUse = [
    "Expert judgment inconsistently applied",
    "Manual review processes create bottlenecks",
    "Can only review sample (want 100% coverage)",
    "Quality depends on complex criteria"
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
            <Badge variant="outline" className="border-purple-500/30 bg-purple-500/5 text-purple-500">
              Category 3 • Level 5
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              Custom Workflows & <span className="text-orange-500">Analyzers</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-xl text-white/60 max-w-3xl mx-auto">
              Apply expert judgment at scale through structured evaluation frameworks
            </p>
          </FadeInEntrance>
        </div>

        {/* Pattern */}
        <FadeInEntrance delay={0.4}>
          <div className="bg-purple-500/10 border border-purple-500/30 p-6 mb-10 max-w-5xl">
            <p className="font-bebas text-2xl text-purple-400 mb-2">COMMON PATTERN</p>
            <p className="font-manrope text-lg text-white/90">
              Unstructured input → AI applies structured framework → AI scores/categorizes → Actionable output with evidence
            </p>
          </div>
        </FadeInEntrance>

        {/* Examples Grid */}
        <StaggeredReveal className="grid grid-cols-3 gap-6 max-w-6xl w-full mb-10">
          {examples.map((example, idx) => (
            <div
              key={idx}
              className="bg-white/5 border-2 border-purple-500/30 p-6 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all"
            >
              <div className="mb-4">
                <Workflow className="w-8 h-8 text-purple-500 mb-2" />
                <h3 className="font-bebas text-2xl text-white">
                  {example.name}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-purple-400" />
                  <p className="font-bebas text-3xl text-purple-400">
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
                    <span className="text-purple-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInEntrance>

          <FadeInEntrance delay={0.7}>
            <div className="bg-purple-500/10 border border-purple-500/30 p-6">
              <p className="font-bebas text-3xl text-purple-400 mb-2">ROI PATTERN</p>
              <p className="font-bebas text-5xl text-white mb-2">$63K - $158K/year</p>
              <p className="font-manrope text-sm text-white/70 mb-3">
                Payback: 2-4 months
              </p>
              <div className="pt-3 border-t border-purple-500/20">
                <p className="font-manrope text-xs text-orange-400 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Requires deep context engineering to capture expert criteria
                </p>
              </div>
            </div>
          </FadeInEntrance>
        </div>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-08</p>
      </div>
    </div>
  )
}
