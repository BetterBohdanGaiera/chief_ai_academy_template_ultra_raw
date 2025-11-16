"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { Badge } from "@/components/ui/badge"

/**
 * S1-09: ROI Ranges Comparison
 * Horizontal bar chart showing ROI ranges across three categories
 */
export default function Slide09S1ROIRanges() {
  const categories = [
    {
      name: "Static Information Chatbots",
      level: "Level 4",
      minROI: 15,
      maxROI: 99,
      color: "bg-green-500",
      borderColor: "border-green-500",
      payback: "1-2 months"
    },
    {
      name: "Dynamic Content Chatbots",
      level: "Level 4-5",
      minROI: 14,
      maxROI: 246,
      color: "bg-cyan-500",
      borderColor: "border-cyan-500",
      payback: "1-3 months"
    },
    {
      name: "Custom Workflows & Analyzers",
      level: "Level 5",
      minROI: 63,
      maxROI: 158,
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      payback: "2-4 months"
    }
  ]

  const maxValue = 250

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
              ROI Analysis
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              Solution Category <span className="text-orange-500">ROI Ranges</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60">
              Annual value by solution type
            </p>
          </FadeInEntrance>
        </div>

        {/* ROI Bars */}
        <div className="max-w-6xl w-full space-y-8">
          {categories.map((category, idx) => {
            const minWidth = (category.minROI / maxValue) * 100
            const maxWidth = (category.maxROI / maxValue) * 100

            return (
              <FadeInEntrance key={idx} delay={0.4 + idx * 0.1}>
                <div className="space-y-2">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bebas text-2xl text-white">
                        {category.name}
                      </h3>
                      <p className="font-manrope text-xs text-white/50">
                        {category.level} • Payback: {category.payback}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bebas text-3xl text-white">
                        ${category.minROI}K - ${category.maxROI}K
                      </p>
                      <p className="font-manrope text-xs text-white/50">
                        per year
                      </p>
                    </div>
                  </div>

                  {/* Bar Container */}
                  <div className="relative h-16 bg-white/5 border border-white/10">
                    {/* ROI Range Bar */}
                    <div
                      className={`absolute left-0 top-0 h-full ${category.color} opacity-60 transition-all duration-1000`}
                      style={{
                        width: `${maxWidth}%`,
                        marginLeft: `${minWidth}%`,
                        transform: `translateX(-${minWidth}%)`
                      }}
                    />

                    {/* Min Marker */}
                    <div
                      className={`absolute top-0 h-full w-1 ${category.color}`}
                      style={{ left: `${minWidth}%` }}
                    >
                      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-xs ${category.color.replace('bg-', 'text-')}`}>
                        ${category.minROI}K
                      </div>
                    </div>

                    {/* Max Marker */}
                    <div
                      className={`absolute top-0 h-full w-1 ${category.color}`}
                      style={{ left: `${maxWidth}%` }}
                    >
                      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-xs ${category.color.replace('bg-', 'text-')}`}>
                        ${category.maxROI}K
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInEntrance>
            )
          })}
        </div>

        {/* Scale Reference */}
        <FadeInEntrance delay={0.8}>
          <div className="max-w-6xl w-full mt-8 flex justify-between text-white/40 font-mono text-xs">
            <span>$0K</span>
            <span>$50K</span>
            <span>$100K</span>
            <span>$150K</span>
            <span>$200K</span>
            <span>$250K+</span>
          </div>
        </FadeInEntrance>

        {/* Bottom Insight */}
        <FadeInEntrance delay={0.9}>
          <div className="mt-12 max-w-5xl bg-orange-500/10 border border-orange-500/30 p-6">
            <p className="font-manrope text-sm text-center text-white/90">
              <span className="font-semibold text-orange-500">Key Insight:</span> All three categories provide
              strong ROI with fast payback (1-4 months). Choice depends on use case type, not ROI potential.
            </p>
          </div>
        </FadeInEntrance>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-09</p>
      </div>
    </div>
  )
}
