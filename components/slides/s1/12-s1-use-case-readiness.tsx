"use client"

import { useState } from "react"
import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

/**
 * S1-12: Use Case Readiness Assessment
 * Interactive 6-dimension rating system
 */
export default function Slide12S1UseCaseReadiness() {
  const [ratings, setRatings] = useState<Record<string, number>>({
    clarity: 3,
    expert: 3,
    value: 3,
    data: 3,
    volume: 3,
    complexity: 3
  })

  const dimensions = [
    {
      id: "clarity",
      title: "Process Clarity",
      question: "How well-defined is this process?",
      scale: ["Ad-hoc", "General pattern", "Documented", "Clear + edge cases", "Fully documented"]
    },
    {
      id: "expert",
      title: "Expert Availability",
      question: "Do you have domain experts who can validate?",
      scale: ["No expert", "Busy/leaving", "1-2 hrs/week", "5-10 hrs/week", "Fully allocated"]
    },
    {
      id: "value",
      title: "Value Potential",
      question: "Potential annual value of automating this?",
      scale: ["<$5K", "$5-15K", "$15-50K", "$50-150K", "$150K+"]
    },
    {
      id: "data",
      title: "Data Availability",
      question: "Is the data/knowledge readily available?",
      scale: ["Scattered/missing", "Hard to access", "Needs cleaning", "Mostly clean", "Readily available"]
    },
    {
      id: "volume",
      title: "Volume/Frequency",
      question: "How often is this process needed?",
      scale: ["Quarterly", "Monthly", "Weekly", "Daily", "Multiple/day"]
    },
    {
      id: "complexity",
      title: "Complexity Appropriateness",
      question: "Is this the right complexity for your team?",
      scale: ["Requires creativity", "Very complex", "Moderate", "Straightforward", "Simple pattern"]
    }
  ]

  const totalScore = Object.values(ratings).reduce((sum, val) => sum + val, 0)

  const getInterpretation = () => {
    if (totalScore <= 12) return {
      title: "Not Ready",
      color: "text-red-500",
      borderColor: "border-red-500",
      bgColor: "bg-red-500/10",
      message: "This use case has significant challenges. Fix foundational issues first or choose a different use case."
    }
    if (totalScore <= 18) return {
      title: "Marginal",
      color: "text-orange-500",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-500/10",
      message: "Could work but has risks. Address the lowest-scoring dimensions before starting."
    }
    if (totalScore <= 24) return {
      title: "Good Candidate",
      color: "text-cyan-500",
      borderColor: "border-cyan-500",
      bgColor: "bg-cyan-500/10",
      message: "This use case is ready for AI automation. Proceed with Level 4 approach."
    }
    return {
      title: "Excellent Candidate",
      color: "text-green-500",
      borderColor: "border-green-500",
      bgColor: "bg-green-500/10",
      message: "This is an ideal first AI project. Fast-track to build momentum and credibility."
    }
  }

  const interpretation = getInterpretation()

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16 py-12">

        {/* Header */}
        <div className="text-center space-y-3 mb-8">
          <SlideDownEntrance delay={0.1}>
            <Badge variant="outline" className="border-orange-500/30 bg-orange-500/5 text-orange-500">
              Self-Assessment
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-6xl text-white leading-tight">
              Use Case <span className="text-orange-500">Readiness</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60">
              Rate each dimension (1-5) • Total: {totalScore}/30
            </p>
          </FadeInEntrance>
        </div>

        {/* Dimensions Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-6xl w-full mb-6">
          {dimensions.map((dim, idx) => (
            <FadeInEntrance key={dim.id} delay={0.3 + idx * 0.05}>
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="mb-3">
                  <p className="font-bebas text-xl text-white mb-1">
                    {dim.title}
                  </p>
                  <p className="font-manrope text-xs text-white/50">
                    {dim.question}
                  </p>
                </div>

                <div className="space-y-2">
                  <Slider
                    value={[ratings[dim.id]]}
                    onValueChange={(value) => setRatings({ ...ratings, [dim.id]: value[0] })}
                    min={1}
                    max={5}
                    step={1}
                    className="w-full"
                  />

                  <div className="flex justify-between items-center">
                    <p className="font-manrope text-xs text-white/40">
                      {dim.scale[0]}
                    </p>
                    <div className="font-bebas text-2xl text-orange-500">
                      {ratings[dim.id]}
                    </div>
                    <p className="font-manrope text-xs text-white/40">
                      {dim.scale[4]}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInEntrance>
          ))}
        </div>

        {/* Interpretation */}
        <FadeInEntrance delay={0.7}>
          <div className={`max-w-5xl border-2 ${interpretation.borderColor} ${interpretation.bgColor} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-manrope text-xs text-white/60 mb-1">
                  READINESS ASSESSMENT:
                </p>
                <p className={`font-bebas text-5xl ${interpretation.color}`}>
                  {interpretation.title}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bebas text-6xl text-white">
                  {totalScore}<span className="text-white/40">/30</span>
                </p>
              </div>
            </div>
            <p className="font-manrope text-sm text-white/90">
              {interpretation.message}
            </p>
          </div>
        </FadeInEntrance>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-12</p>
      </div>
    </div>
  )
}
