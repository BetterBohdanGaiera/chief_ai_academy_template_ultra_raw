"use client"

// Interactive visual slides - Module 01
import { Slide101TitleVisual } from "@/components/slide-101-title-visual"
import { Slide102LandscapeInteractive } from "@/components/slide-102-landscape-interactive"
import { Slide103ExecutionInteractive } from "@/components/slide-103-execution-interactive"
import { Slide104CostFlow } from "@/components/slide-104-cost-flow"
// New interactive visual slides - Module 02
import { Slide201FiveLevelsOverview } from "@/components/slide-201-five-levels-overview"
import { Slide202PrinciplesExplorer } from "@/components/slide-202-principles-explorer"
import { Slide203Level1Visual } from "@/components/slide-203-level1-visual"
import { Slide204Level2Visual } from "@/components/slide-204-level2-visual"
import { Slide205PromiseVsReality } from "@/components/slide-205-promise-vs-reality"
import { Slide206Level3FailureTimeline } from "@/components/slide-206-level3-failure-timeline"
import { Slide207RootCauseIteration } from "@/components/slide-207-root-cause-iteration"
import { Slide208ScarTissue } from "@/components/slide-208-scar-tissue"
import { Slide209GuidanceInteractive } from "@/components/slide-209-guidance-interactive"
import { Slide210Level4Iterative } from "@/components/slide-210-level4-iterative"
import { Slide211RoiCalculator } from "@/components/slide-211-roi-calculator"
import { Slide212Level5Autonomous } from "@/components/slide-212-level5-autonomous"
import { Slide213InteractivePoll } from "@/components/slide-213-interactive-poll"
// Module 03: ML vs Agentic Principles - Interactive Visual Slides (8 slides)
import { Slide301TitleVisual } from "@/components/slide-301-title-visual"
import { Slide302ThreeApproaches } from "@/components/slide-302-three-approaches"
import { Slide303MlApproach } from "@/components/slide-303-ml-approach"
import { Slide304AgenticApproach } from "@/components/slide-304-agentic-approach"
import { Slide305ExistingTools } from "@/components/slide-305-existing-tools"
import { Slide306DecisionFramework } from "@/components/slide-306-decision-framework"
import { Slide307CostTradeoffs } from "@/components/slide-307-cost-tradeoffs"
import { Slide308QuizInteractive } from "@/components/slide-308-quiz-interactive"
// Module 03b: Understanding AI Agents - Interactive Visual Slides (7 slides)
import { Slide3b01TitleVisual } from "@/components/slide-3b01-title-visual"
import { Slide3b02FourComponents } from "@/components/slide-3b02-four-components"
import { Slide3b03LlmBrain } from "@/components/slide-3b03-llm-brain"
import { Slide3b04ToolsHands } from "@/components/slide-3b04-tools-hands"
import { Slide3b05MemoryAutonomy } from "@/components/slide-3b05-memory-autonomy"
import { Slide3b06AgenticSpectrum } from "@/components/slide-3b06-agentic-spectrum"
import { Slide3b07VendorEvaluation } from "@/components/slide-3b07-vendor-evaluation"
// Module 04: Agentic Solution Categories - Interactive Visual Slides (7 slides)
import { Slide401TitleVisual } from "@/components/slide-401-title-visual"
import { Slide402ThreeCategoriesOverview } from "@/components/slide-402-three-categories-overview"
import { Slide403StaticChatbots } from "@/components/slide-403-static-chatbots"
import { Slide404DynamicChatbots } from "@/components/slide-404-dynamic-chatbots"
import { Slide405CustomWorkflows } from "@/components/slide-405-custom-workflows"
import { Slide406RoiComparison } from "@/components/slide-406-roi-comparison"
import { Slide407SelectionGuide } from "@/components/slide-407-selection-guide"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Module 01: AI State & Opportunity - Interactive Visual Slides (4 slides)
    <Slide101TitleVisual key="slide-101" />,
    <Slide102LandscapeInteractive key="slide-102" />,
    <Slide103ExecutionInteractive key="slide-103" />,
    <Slide104CostFlow key="slide-104" />,
    // Module 02: Five Levels Framework - Interactive Visual Slides (13 slides)
    <Slide201FiveLevelsOverview key="slide-201" />,
    <Slide202PrinciplesExplorer key="slide-202" />,
    <Slide203Level1Visual key="slide-203" />,
    <Slide204Level2Visual key="slide-204" />,
    <Slide205PromiseVsReality key="slide-205" />,
    <Slide206Level3FailureTimeline key="slide-206" />,
    <Slide207RootCauseIteration key="slide-207" />,
    <Slide208ScarTissue key="slide-208" />,
    <Slide209GuidanceInteractive key="slide-209" />,
    <Slide210Level4Iterative key="slide-210" />,
    <Slide211RoiCalculator key="slide-211" />,
    <Slide212Level5Autonomous key="slide-212" />,
    <Slide213InteractivePoll key="slide-213" />,
    // Module 03: ML vs Agentic Principles - Interactive Visual Slides (8 slides)
    <Slide301TitleVisual key="slide-301" />,
    <Slide302ThreeApproaches key="slide-302" />,
    <Slide303MlApproach key="slide-303" />,
    <Slide304AgenticApproach key="slide-304" />,
    <Slide305ExistingTools key="slide-305" />,
    <Slide306DecisionFramework key="slide-306" />,
    <Slide307CostTradeoffs key="slide-307" />,
    <Slide308QuizInteractive key="slide-308" />,
    // Module 03b: Understanding AI Agents - Interactive Visual Slides (7 slides)
    <Slide3b01TitleVisual key="slide-3b01" />,
    <Slide3b02FourComponents key="slide-3b02" />,
    <Slide3b03LlmBrain key="slide-3b03" />,
    <Slide3b04ToolsHands key="slide-3b04" />,
    <Slide3b05MemoryAutonomy key="slide-3b05" />,
    <Slide3b06AgenticSpectrum key="slide-3b06" />,
    <Slide3b07VendorEvaluation key="slide-3b07" />,
    // Module 04: Agentic Solution Categories - Interactive Visual Slides (7 slides)
    <Slide401TitleVisual key="slide-401" />,
    <Slide402ThreeCategoriesOverview key="slide-402" />,
    <Slide403StaticChatbots key="slide-403" />,
    <Slide404DynamicChatbots key="slide-404" />,
    <Slide405CustomWorkflows key="slide-405" />,
    <Slide406RoiComparison key="slide-406" />,
    <Slide407SelectionGuide key="slide-407" />,
  ]

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length && containerRef.current) {
      setCurrentSlide(index)
      containerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      })
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevSlide()
      } else if (e.key === "ArrowRight") {
        goToNextSlide()
      } else if (e.key === "Home") {
        goToSlide(0)
      } else if (e.key === "End") {
        goToSlide(slides.length - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, slides.length])

  return (
    <>
      <main
        ref={containerRef}
        className="h-screen w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="min-w-full min-h-full snap-start overflow-y-auto">
            {slide}
          </div>
        ))}
      </main>

      {/* Navigation Arrows - Brutalist-futuristic style */}
      <div className="fixed bottom-8 right-8 flex gap-3 z-50">
        <Button
          variant="brutal"
          size="icon"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="bg-white/95 backdrop-blur-sm border-2 border-primary/60 hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300 disabled:opacity-20 disabled:border-border disabled:hover:bg-white/95 group shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        </Button>
        <Button
          variant="brutal"
          size="icon"
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white/95 backdrop-blur-sm border-2 border-primary/60 hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300 disabled:opacity-20 disabled:border-border disabled:hover:bg-white/95 group shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Progress Dots - Enhanced with brutalist style */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg border border-primary/30 shadow-lg">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`relative transition-all duration-300 group ${
              idx === currentSlide
                ? "w-10 h-3 bg-gradient-orange rounded-full"
                : "w-3 h-3 bg-primary/30 hover:bg-primary/60 rounded-full"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {/* Glow effect on current slide */}
            {idx === currentSlide && (
              <div className="absolute inset-0 bg-primary/30 blur-md rounded-full animate-glow-pulse" />
            )}
            {/* Number indicator on hover */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-display font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {idx + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Slide Counter - Distinctive brutalist typography */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-white/95 backdrop-blur-md border-2 border-primary/40 px-5 py-2 rounded-lg shadow-lg group hover:border-primary transition-colors">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
              {currentSlide + 1}
            </span>
            <span className="text-foreground-muted font-mono text-sm">/</span>
            <span className="font-display text-lg font-bold text-foreground-muted">
              {slides.length}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
