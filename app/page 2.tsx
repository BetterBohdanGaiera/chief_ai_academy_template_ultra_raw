"use client"

import { Slide1Overview } from "@/components/slide-1-overview"
import { Slide2Principles } from "@/components/slide-2-principles"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const currentSlideRef = useRef(0)

  const goToSlide = (index: number) => {
    if (containerRef.current) {
      currentSlideRef.current = index
      containerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <main
        ref={containerRef}
        className="h-screen w-screen overflow-x-auto overflow-y-auto snap-x snap-mandatory flex scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="min-w-full min-h-full snap-start overflow-y-auto">
          <Slide1Overview />
        </div>
        <div className="min-w-full min-h-full snap-start overflow-y-auto">
          <Slide2Principles />
        </div>
      </main>

      <div className="fixed bottom-8 right-8 flex gap-3 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => goToSlide(0)}
          className="bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-lg hover:bg-white rounded-full transition-all duration-600"
          aria-label="Go to slide 1"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => goToSlide(1)}
          className="bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-lg hover:bg-white rounded-full transition-all duration-600"
          aria-label="Go to slide 2"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        <button
          onClick={() => goToSlide(0)}
          className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/50 transition-colors"
          aria-label="Go to slide 1"
        />
        <button
          onClick={() => goToSlide(1)}
          className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/50 transition-colors"
          aria-label="Go to slide 2"
        />
      </div>
    </>
  )
}
