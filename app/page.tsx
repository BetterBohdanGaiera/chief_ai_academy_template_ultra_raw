"use client"

import { Slide01Title } from "@/components/slide-01-title"
import { Slide02aLandscapePyramid } from "@/components/slide-02a-landscape-pyramid"
import { Slide02bLandscapeMessages } from "@/components/slide-02b-landscape-messages"
import { Slide03Execution } from "@/components/slide-03-execution"
import { Slide04ImplementationCost } from "@/components/slide-04-implementation-cost"
import { Slide05aFiveLevelsBasic } from "@/components/slide-05a-five-levels-basic"
import { Slide05bFiveLevelsTransformation } from "@/components/slide-05b-five-levels-transformation"
import { Slide06aPrinciplesBasic } from "@/components/slide-06a-principles-basic"
import { Slide06bPrinciplesTransformation } from "@/components/slide-06b-principles-transformation"
import { Slide07Level1 } from "@/components/slide-07-level-1"
import { Slide08Level2 } from "@/components/slide-08-level-2"
import { Slide09Level3Promise } from "@/components/slide-09-level-3-promise"
import { Slide10Level3Reality } from "@/components/slide-10-level-3-reality"
import { Slide11Level3Why } from "@/components/slide-11-level-3-why"
import { Slide12Level3Consequence } from "@/components/slide-12-level-3-consequence"
import { Slide13aLevel3GuidanceMain } from "@/components/slide-13a-level-3-guidance-main"
import { Slide13bLevel3GuidanceEconomics } from "@/components/slide-13b-level-3-guidance-economics"
import { Slide14aLevel4OverviewIteration } from "@/components/slide-14a-level-4-overview-iteration"
import { Slide14bLevel4OverviewPaths } from "@/components/slide-14b-level-4-overview-paths"
import { Slide15aLevel4EconomicsComparison } from "@/components/slide-15a-level-4-economics-comparison"
import { Slide15bLevel4EconomicsValue } from "@/components/slide-15b-level-4-economics-value"
import { Slide16Level5 } from "@/components/slide-16-level-5"
import { Slide17InteractivePoll } from "@/components/slide-17-interactive-poll"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <Slide01Title key="slide-01" />,
    <Slide02aLandscapePyramid key="slide-02a" />,
    <Slide02bLandscapeMessages key="slide-02b" />,
    <Slide03Execution key="slide-03" />,
    <Slide04ImplementationCost key="slide-04" />,
    <Slide05aFiveLevelsBasic key="slide-05a" />,
    <Slide05bFiveLevelsTransformation key="slide-05b" />,
    <Slide06aPrinciplesBasic key="slide-06a" />,
    <Slide06bPrinciplesTransformation key="slide-06b" />,
    <Slide07Level1 key="slide-07" />,
    <Slide08Level2 key="slide-08" />,
    <Slide09Level3Promise key="slide-09" />,
    <Slide10Level3Reality key="slide-10" />,
    <Slide11Level3Why key="slide-11" />,
    <Slide12Level3Consequence key="slide-12" />,
    <Slide13aLevel3GuidanceMain key="slide-13a" />,
    <Slide13bLevel3GuidanceEconomics key="slide-13b" />,
    <Slide14aLevel4OverviewIteration key="slide-14a" />,
    <Slide14bLevel4OverviewPaths key="slide-14b" />,
    <Slide15aLevel4EconomicsComparison key="slide-15a" />,
    <Slide15bLevel4EconomicsValue key="slide-15b" />,
    <Slide16Level5 key="slide-16" />,
    <Slide17InteractivePoll key="slide-17" />,
  ]

  const totalSlides = slides.length

  const goToSlide = (index: number) => {
    if (containerRef.current && index >= 0 && index < totalSlides) {
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
    if (currentSlide < totalSlides - 1) {
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
        goToSlide(totalSlides - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, totalSlides])

  return (
    <>
      <main
        ref={containerRef}
        className="h-screen w-screen overflow-x-auto overflow-y-auto snap-x snap-mandatory flex scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full min-h-full snap-start overflow-y-auto">
            {slide}
          </div>
        ))}
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 flex gap-3 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-lg hover:bg-white rounded-full transition-all duration-600 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-lg hover:bg-white rounded-full transition-all duration-600 disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Indicator */}
      <div className="fixed bottom-8 left-8 z-50">
        <div className="bg-white/90 backdrop-blur-sm shadow-sm rounded-full px-4 py-2">
          <p className="text-sm font-semibold">
            {currentSlide + 1} / {totalSlides}
          </p>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50 max-w-2xl overflow-x-auto px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-600 flex-shrink-0
              ${
                currentSlide === index
                  ? "w-8 bg-primary"
                  : "bg-primary/30 hover:bg-primary/60 hover:scale-110"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}
