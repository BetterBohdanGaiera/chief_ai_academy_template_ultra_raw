"use client"

// Template Slide - Replace with your presentation slides
import SlideTemplate from "@/components/slide-template"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Add your presentation slides here
  // Example: <YourSlideComponent key="slide-1" />
  const slides = [
    <SlideTemplate key="slide-template" />,
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
