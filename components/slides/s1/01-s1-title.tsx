"use client"

import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

/**
 * S1 Module Title Slide
 * Hero introduction to Skills Module 1: Choosing AI Technology
 */
export default function Slide01S1Title() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-dots" />
      </div>

      {/* Grain overlay for analog warmth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16">

        {/* Module Badge */}
        <SlideDownEntrance delay={0.1}>
          <Badge
            variant="outline"
            className="mb-8 border-orange-500/40 bg-orange-500/10 text-orange-500 uppercase tracking-wider px-6 py-2"
          >
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Skills Module 1
          </Badge>
        </SlideDownEntrance>

        {/* Main Heading */}
        <SlideUpEntrance delay={0.2}>
          <h1 className="font-bebas text-[140px] leading-[0.85] tracking-tight text-white mb-6 text-center max-w-6xl">
            Choosing AI
            <br />
            <span className="text-orange-500">Technology</span>
          </h1>
        </SlideUpEntrance>

        {/* Supporting Text */}
        <FadeInEntrance delay={0.4}>
          <p className="font-syne text-2xl text-white/70 text-center max-w-4xl mb-4 leading-relaxed">
            When should you use Machine Learning vs Custom Agentic AI vs Existing Tools?
          </p>
        </FadeInEntrance>

        <FadeInEntrance delay={0.6}>
          <p className="font-manrope text-lg text-white/50 text-center max-w-3xl">
            Making the wrong choice wastes 6 months and $200K+ building the wrong solution
          </p>
        </FadeInEntrance>

        {/* Metadata */}
        <FadeInEntrance delay={0.8}>
          <div className="mt-16 space-y-2 text-center">
            <p className="font-manrope text-sm text-white/40 uppercase tracking-wider">
              Duration: 18 minutes
            </p>
            <p className="font-manrope text-sm text-white/30">
              Prerequisite: F1 (Five Levels Framework)
            </p>
          </div>
        </FadeInEntrance>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-01</p>
      </div>
    </div>
  )
}
