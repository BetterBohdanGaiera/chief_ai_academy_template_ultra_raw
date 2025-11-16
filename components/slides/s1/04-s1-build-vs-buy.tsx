"use client"

import { useState } from "react"
import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { Badge } from "@/components/ui/badge"
import { Wrench, ShoppingCart } from "lucide-react"

/**
 * S1-04: Build vs Buy Decision Framework
 * Interactive toggle comparison pattern
 */
export default function Slide04S1BuildVsBuy() {
  const [view, setView] = useState<"build" | "buy">("buy")

  const scenarios = {
    buy: {
      title: "Buy (Existing Tools)",
      color: "text-cyan-500",
      borderColor: "border-cyan-500",
      bgColor: "bg-cyan-500/10",
      criteria: [
        { label: "Use Case Type", value: "Generic across industries", icon: "✓" },
        { label: "Competitive Advantage", value: "Not core to your business", icon: "✓" },
        { label: "Solution Availability", value: "Good existing tools exist", icon: "✓" },
        { label: "Time to Value", value: "Days to weeks", icon: "✓" }
      ],
      examples: [
        "Generic writing (ChatGPT)",
        "Image generation (Midjourney)",
        "Simple doc Q&A (Notion AI)",
        "CRM assistance (Salesforce Einstein)"
      ]
    },
    build: {
      title: "Build (Custom Agentic AI)",
      color: "text-orange-500",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500/10",
      criteria: [
        { label: "Use Case Type", value: "Specific to YOUR process", icon: "✓" },
        { label: "Competitive Advantage", value: "Core differentiator", icon: "✓" },
        { label: "Solution Availability", value: "No good fit exists", icon: "✓" },
        { label: "Control Needed", value: "Model, interface, workflow", icon: "✓" }
      ],
      examples: [
        "HR assistant with YOUR policies (Slackbot)",
        "Sales analyzer with YOUR methodology",
        "Custom proposal reviewer",
        "Internal process automation"
      ]
    }
  }

  const current = scenarios[view]

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
              Build vs <span className="text-orange-500">Buy</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60">
              Click to toggle between approaches
            </p>
          </FadeInEntrance>
        </div>

        {/* Toggle Buttons */}
        <FadeInEntrance delay={0.4}>
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setView("buy")}
              className={`
                px-8 py-4 font-bebas text-2xl
                border-2 transition-all duration-300
                ${view === "buy"
                  ? "border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(0,187,255,0.3)]"
                  : "border-white/20 bg-white/5 text-white/60 hover:border-cyan-500/50"
                }
              `}
            >
              <ShoppingCart className="w-6 h-6 inline mr-2" />
              BUY (Existing Tools)
            </button>
            <button
              onClick={() => setView("build")}
              className={`
                px-8 py-4 font-bebas text-2xl
                border-2 transition-all duration-300
                ${view === "build"
                  ? "border-orange-500 bg-orange-500/20 text-orange-400 shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                  : "border-white/20 bg-white/5 text-white/60 hover:border-orange-500/50"
                }
              `}
            >
              <Wrench className="w-6 h-6 inline mr-2" />
              BUILD (Custom)
            </button>
          </div>
        </FadeInEntrance>

        {/* Dynamic Content */}
        <div className="max-w-5xl w-full space-y-8">

          {/* Criteria Grid */}
          <div className={`border-2 ${current.borderColor} ${current.bgColor} p-8 transition-all duration-300`}>
            <h3 className={`font-bebas text-4xl ${current.color} mb-6`}>
              {current.title}
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {current.criteria.map((item, idx) => (
                <div key={idx} className="animate-fade-in">
                  <p className="font-manrope text-xs text-white/50 mb-1">
                    {item.label}
                  </p>
                  <p className={`font-manrope text-lg ${current.color} font-semibold`}>
                    {item.icon} {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Examples */}
          <div className="bg-white/5 border border-white/10 p-8">
            <p className="font-manrope text-xs font-semibold text-white/50 mb-4">
              EXAMPLES:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {current.examples.map((example, idx) => (
                <div key={idx} className="flex gap-2 animate-fade-in">
                  <span className={current.color}>•</span>
                  <p className="font-manrope text-sm text-white/80">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Insight */}
        <FadeInEntrance delay={0.6}>
          <div className="mt-8 max-w-4xl bg-orange-500/10 border border-orange-500/30 p-6">
            <p className="font-manrope text-sm text-center text-white/90">
              <span className="font-semibold text-orange-500">Hybrid Strategy Recommended:</span> Buy for generic needs,
              build for competitive advantage. Most enterprises need both.
            </p>
          </div>
        </FadeInEntrance>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-04</p>
      </div>
    </div>
  )
}
