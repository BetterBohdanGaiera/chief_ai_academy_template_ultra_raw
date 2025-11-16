"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"
import { Layers } from "lucide-react"

/**
 * S1-10: Hybrid Strategy (3-Layer Approach)
 * Recommended strategy for most enterprises
 */
export default function Slide10S1HybridStrategy() {
  const layers = [
    {
      number: "1",
      title: "Commodity Tasks",
      subtitle: "Generic Tools",
      cost: "$10-50/user/month",
      tools: ["ChatGPT", "Midjourney", "DALL-E"],
      useFor: "Image generation, general writing, brainstorming",
      goal: "Baseline productivity for non-sensitive tasks",
      color: "border-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      number: "2",
      title: "Simple Data Access",
      subtitle: "Existing Tools With Your Data",
      cost: "$10-50/user/month per platform",
      tools: ["Notion AI", "Microsoft Copilot", "Salesforce Einstein"],
      useFor: "Simple Q&A from docs, basic assistance",
      goal: "Leverage your data through existing platforms IF interface/capabilities work",
      color: "border-cyan-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      number: "3",
      title: "Advanced Capabilities",
      subtitle: "Custom Builds",
      cost: "$100K-$500K+ per initiative",
      tools: ["Custom agents", "Tailored workflows", "Advanced reasoning"],
      useFor: "Better models, custom interfaces, full control",
      goal: "Competitive differentiation through capabilities competitors can't replicate",
      color: "border-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16 py-12">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <SlideDownEntrance delay={0.1}>
            <Badge variant="outline" className="border-orange-500/30 bg-orange-500/5 text-orange-500">
              <Layers className="w-4 h-4 mr-2 inline" />
              Recommended Strategy
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              Hybrid <span className="text-orange-500">Strategy</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60">
              3-layer approach for most enterprises
            </p>
          </FadeInEntrance>
        </div>

        {/* Layers */}
        <StaggeredReveal className="space-y-6 max-w-6xl w-full">
          {layers.map((layer) => (
            <div
              key={layer.number}
              className={`border-2 ${layer.color} ${layer.bgColor} p-6 hover:shadow-[0_0_20px_rgba(255,77,0,0.2)] transition-all`}
            >
              <div className="grid grid-cols-[auto_1fr] gap-8">
                {/* Layer Number */}
                <div className="flex items-start">
                  <div className={`w-16 h-16 border-2 ${layer.color} flex items-center justify-center`}>
                    <span className="font-bebas text-4xl text-white">
                      {layer.number}
                    </span>
                  </div>
                </div>

                {/* Layer Content */}
                <div className="space-y-3">
                  {/* Title & Cost */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bebas text-3xl text-white mb-1">
                        {layer.title}
                      </h3>
                      <p className="font-syne text-lg text-white/60">
                        {layer.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bebas text-xl text-orange-400">
                        {layer.cost}
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-3 gap-6 pt-3 border-t border-white/10">
                    <div>
                      <p className="font-manrope text-xs text-white/50 mb-2">TOOLS:</p>
                      <ul className="space-y-1">
                        {layer.tools.map((tool, i) => (
                          <li key={i} className="font-manrope text-sm text-white/80">
                            • {tool}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-manrope text-xs text-white/50 mb-2">USE FOR:</p>
                      <p className="font-manrope text-sm text-white/80">
                        {layer.useFor}
                      </p>
                    </div>

                    <div>
                      <p className="font-manrope text-xs text-white/50 mb-2">GOAL:</p>
                      <p className="font-manrope text-sm text-white/90">
                        {layer.goal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggeredReveal>

        {/* Bottom Insight */}
        <FadeInEntrance delay={0.8}>
          <div className="mt-10 max-w-5xl bg-orange-500/10 border border-orange-500/30 p-6">
            <p className="font-manrope text-sm text-center text-white/90">
              <span className="font-semibold text-orange-500">Strategic Insight:</span> Use all three layers.
              Layer 1 & 2 for broad productivity. Layer 3 for competitive differentiation.
              Most organizations need 2-3 custom builds (Layer 3) + tools for everything else.
            </p>
          </div>
        </FadeInEntrance>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-10</p>
      </div>
    </div>
  )
}
