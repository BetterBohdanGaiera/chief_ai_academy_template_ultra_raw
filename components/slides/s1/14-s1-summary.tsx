"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { StaggeredReveal } from "@/components/animations/staggered-reveal"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight } from "lucide-react"

/**
 * S1-14: Module Summary
 * Key takeaways and next steps
 */
export default function Slide14S1Summary() {
  const keyTakeaways = [
    {
      title: "Four AI Approaches",
      points: [
        "Machine Learning → Data patterns → Predictions",
        "Existing Tools (No Data) → Generic capabilities",
        "Existing Tools (WITH Data) → Basic data access BUT limited",
        "Custom Agentic → Your data + advanced control"
      ]
    },
    {
      title: "The Critical Question",
      points: [
        "Not: 'Does this AI need my company data?'",
        "Instead: 'Do I need MORE than basic data access?'",
        "Better models? Advanced capabilities? Custom interfaces? Full control?"
      ]
    },
    {
      title: "Three Agentic Solution Categories",
      points: [
        "Static Information Chatbots → $15K-$99K/year",
        "Dynamic Content Chatbots → $14K-$246K/year",
        "Custom Workflows & Analyzers → $63K-$158K/year"
      ]
    },
    {
      title: "Hybrid Strategy Recommended",
      points: [
        "Layer 1: Generic tools for commodity tasks",
        "Layer 2: Existing tools with your data for simple needs",
        "Layer 3: Custom builds for competitive advantage"
      ]
    }
  ]

  const nextSteps = [
    {
      role: "Executives",
      action: "Proceed to S2 (Understanding Agents) or review F2 (Organization Structure)"
    },
    {
      role: "AI Champions",
      action: "Continue to S2 (Understanding Agents) then S3 (Managing AI)"
    },
    {
      role: "Agent Managers",
      action: "S2 shows tools available, S3 is CRITICAL for context engineering"
    },
    {
      role: "Developers",
      action: "S2 for architecture, S3 for partnering with Agent Managers"
    }
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex items-start justify-center px-16 py-12 overflow-y-auto">
        <div className="max-w-6xl w-full space-y-10 pb-16">

          {/* Header */}
          <div className="text-center space-y-3">
            <SlideDownEntrance delay={0.1}>
              <Badge variant="outline" className="border-green-500/30 bg-green-500/5 text-green-500">
                <CheckCircle2 className="w-4 h-4 mr-2 inline" />
                Module Complete
              </Badge>
            </SlideDownEntrance>

            <FadeInEntrance delay={0.2}>
              <h2 className="font-bebas text-7xl text-white leading-tight">
                S1 <span className="text-orange-500">Summary</span>
              </h2>
            </FadeInEntrance>

            <FadeInEntrance delay={0.3}>
              <p className="font-syne text-xl text-white/60">
                Choosing AI Technology: Key Takeaways
              </p>
            </FadeInEntrance>
          </div>

          {/* Key Takeaways */}
          <div className="grid grid-cols-2 gap-6">
            {keyTakeaways.map((section, idx) => (
              <FadeInEntrance key={idx} delay={0.4 + idx * 0.1}>
                <div className="bg-white/5 border border-white/10 p-6 h-full">
                  <h3 className="font-bebas text-2xl text-orange-400 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="font-manrope text-sm text-white/80 flex gap-2">
                        <span className="text-orange-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInEntrance>
            ))}
          </div>

          {/* Strategic Insight */}
          <FadeInEntrance delay={0.8}>
            <div className="bg-orange-500/10 border-2 border-orange-500/40 p-6">
              <p className="font-bebas text-2xl text-orange-400 mb-2">
                STRATEGIC INSIGHT
              </p>
              <p className="font-manrope text-base text-white/90 mb-3">
                <span className="font-semibold">OLD thinking:</span> "Existing tools = generic" vs "Custom = your context"
              </p>
              <p className="font-manrope text-base text-white/90">
                <span className="font-semibold">NEW reality:</span> "Existing tools CAN access your context, BUT custom gives
                better models, advanced capabilities, custom interfaces, full control"
              </p>
            </div>
          </FadeInEntrance>

          {/* What's Next */}
          <div>
            <FadeInEntrance delay={0.9}>
              <h3 className="font-bebas text-3xl text-white mb-6 text-center">
                What's <span className="text-cyan-400">Next?</span>
              </h3>
            </FadeInEntrance>

            <StaggeredReveal className="grid grid-cols-2 gap-4">
              {nextSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-cyan-500/10 border border-cyan-500/30 p-5 hover:border-cyan-500 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bebas text-xl text-cyan-400 mb-1">
                        {step.role}
                      </p>
                      <p className="font-manrope text-sm text-white/80">
                        {step.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredReveal>
          </div>

          {/* Action Item */}
          <FadeInEntrance delay={1.0}>
            <div className="bg-white/5 border border-white/10 p-6 text-center">
              <p className="font-bebas text-2xl text-white mb-2">
                ACTION ITEM
              </p>
              <p className="font-manrope text-base text-white/90">
                Identify ONE use case that would have the biggest impact on your team this quarter.
                Use the Build vs Buy checklist to evaluate whether to build custom or use existing tools.
              </p>
            </div>
          </FadeInEntrance>
        </div>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-14</p>
      </div>
    </div>
  )
}
