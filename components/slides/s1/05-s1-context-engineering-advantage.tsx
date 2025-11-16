"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

/**
 * S1-05: Context Engineering Advantage
 * Shows why custom builds provide advanced control
 */
export default function Slide05S1ContextEngineeringAdvantage() {
  const advantages = [
    {
      title: "Model Quality Control",
      existing: "Locked into vendor's model (often cheaper/weaker versions)",
      custom: "Choose best model for each task (Claude Opus, GPT-4 Turbo, etc.)",
      impact: "Higher quality answers, better reasoning"
    },
    {
      title: "Sophisticated Retrieval Logic",
      existing: "Basic search across your data",
      custom: "Engineered tagging, filtering, contextual rules (#Current + #HR + #PTO)",
      impact: "Finds exact current policy vs outdated info"
    },
    {
      title: "Interface Flexibility",
      existing: "Locked into vendor UI (Notion, Teams, etc.)",
      custom: "Deploy anywhere: Slackbot, Telegram, email, custom dashboard",
      impact: "Users work where they already are"
    },
    {
      title: "Advanced Capabilities",
      existing: "Simple one-shot Q&A (ask → answer)",
      custom: "Multi-step reasoning, reflection, verification workflows",
      impact: "Higher accuracy, catches errors before responding"
    }
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-dots" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16 py-12">

        {/* Header */}
        <div className="text-center space-y-4 mb-10">
          <SlideDownEntrance delay={0.1}>
            <Badge variant="outline" className="border-orange-500/30 bg-orange-500/5 text-orange-500">
              Context Engineering
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-6xl text-white leading-tight max-w-4xl mx-auto">
              Why Custom Gives <span className="text-orange-500">Advanced Control</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60 max-w-3xl mx-auto">
              Data access is just the starting point. Custom control transforms basic access into advanced capabilities.
            </p>
          </FadeInEntrance>
        </div>

        {/* Advantages Grid */}
        <StaggeredReveal className="grid grid-cols-2 gap-6 max-w-6xl w-full mb-8">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-6 hover:border-orange-500/30 transition-colors"
            >
              <h3 className="font-bebas text-2xl text-orange-400 mb-4">
                {adv.title}
              </h3>

              <div className="space-y-3">
                {/* Existing Tools */}
                <div className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-manrope text-xs text-red-400 font-semibold mb-1">EXISTING:</p>
                    <p className="font-manrope text-sm text-white/70">{adv.existing}</p>
                  </div>
                </div>

                {/* Custom */}
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-manrope text-xs text-green-400 font-semibold mb-1">CUSTOM:</p>
                    <p className="font-manrope text-sm text-white/90">{adv.custom}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="pt-2 border-t border-white/10">
                  <p className="font-manrope text-xs text-cyan-400 font-semibold mb-1">IMPACT:</p>
                  <p className="font-manrope text-sm text-cyan-300">{adv.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggeredReveal>

        {/* Bottom Insight */}
        <FadeInEntrance delay={0.8}>
          <div className="max-w-5xl bg-orange-500/10 border border-orange-500/30 p-6">
            <p className="font-manrope text-sm text-center text-white/90">
              <span className="font-semibold text-orange-500">The Reality:</span> Many existing tools NOW access your data
              (Notion AI, Copilot, Einstein). But custom gives you advanced control over
              <span className="text-white font-semibold"> HOW that data is used</span> — better models, sophisticated retrieval, custom interfaces, advanced workflows.
            </p>
          </div>
        </FadeInEntrance>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-05</p>
      </div>
    </div>
  )
}
