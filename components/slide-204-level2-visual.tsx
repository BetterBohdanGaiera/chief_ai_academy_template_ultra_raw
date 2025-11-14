"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"
import { FileText, Copy } from "lucide-react"

export function Slide204Level2Visual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Cookie-cutter stamp pattern animation
    const stampSize = 80
    const cols = Math.floor(canvas.width / (stampSize + 20))
    const rows = Math.floor(canvas.height / (stampSize + 20))
    const stamps: { x: number; y: number; progress: number; delay: number }[] = []

    // Create grid of stamp positions
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        stamps.push({
          x: col * (stampSize + 20) + stampSize / 2 + 20,
          y: row * (stampSize + 20) + stampSize / 2 + 20,
          progress: 0,
          delay: (row * cols + col) * 100, // Stagger animation
        })
      }
    }

    let startTime = Date.now()
    let animationId: number

    const animate = () => {
      const currentTime = Date.now() - startTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stamps.forEach((stamp) => {
        const timeSinceDelay = currentTime - stamp.delay
        if (timeSinceDelay < 0) return

        // Progress from 0 to 1 over 800ms
        stamp.progress = Math.min(timeSinceDelay / 800, 1)

        // Easing function
        const eased = 1 - Math.pow(1 - stamp.progress, 3)

        // Draw template stamp
        const size = stampSize * eased
        const alpha = eased

        // Outer square (template)
        ctx.strokeStyle = `rgba(245, 158, 11, ${alpha * 0.6})` // Amber
        ctx.lineWidth = 3
        ctx.strokeRect(stamp.x - size / 2, stamp.y - size / 2, size, size)

        // Inner grid pattern (representing template structure)
        ctx.strokeStyle = `rgba(245, 158, 11, ${alpha * 0.4})`
        ctx.lineWidth = 1
        const gridSize = size / 4
        for (let i = 1; i < 4; i++) {
          // Vertical lines
          ctx.beginPath()
          ctx.moveTo(stamp.x - size / 2 + i * gridSize, stamp.y - size / 2)
          ctx.lineTo(stamp.x - size / 2 + i * gridSize, stamp.y + size / 2)
          ctx.stroke()
          // Horizontal lines
          ctx.beginPath()
          ctx.moveTo(stamp.x - size / 2, stamp.y - size / 2 + i * gridSize)
          ctx.lineTo(stamp.x + size / 2, stamp.y - size / 2 + i * gridSize)
          ctx.stroke()
        }

        // "Copy" text in center
        if (stamp.progress > 0.7) {
          ctx.font = "12px monospace"
          ctx.fillStyle = `rgba(245, 158, 11, ${(stamp.progress - 0.7) / 0.3})`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText("TEMPLATE", stamp.x, stamp.y)
        }
      })

      // Loop animation every 5 seconds
      if (currentTime > 5000) {
        startTime = Date.now()
        stamps.forEach((stamp) => (stamp.progress = 0))
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-amber-50/30 to-background overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-12 text-center">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-amber-500/60">
            Level 2: Prompt Libraries
          </Badge>
          <h1 className="font-display text-7xl lg:text-9xl font-bold text-amber-600 tracking-tight">
            Cookie-Cutter
          </h1>
          <p className="font-body text-2xl lg:text-3xl text-foreground-muted max-w-3xl mx-auto">
            Template-based approach with a quality ceiling
          </p>
        </div>

        {/* Visual Metaphor Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in-up delay-200">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-amber-700">
              Templates
            </h3>
            <p className="text-sm text-foreground-muted">
              Shared prompt libraries and best practices
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <Copy className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-amber-700">
              One-Size-Fits-All
            </h3>
            <p className="text-sm text-foreground-muted">
              Generic solutions applied everywhere
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-display text-xl font-bold text-amber-700">
              Quality Ceiling
            </h3>
            <p className="text-sm text-foreground-muted">
              Limited customization, doesn't match your needs
            </p>
          </div>
        </div>

        {/* Key Characteristics */}
        <div className="bg-amber-50/80 backdrop-blur-sm border-2 border-amber-300 rounded-xl p-8 animate-fade-in delay-300">
          <h3 className="font-display text-2xl font-bold text-amber-700 mb-6">
            Level 2 Characteristics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">✓</span>
              <span className="text-foreground">
                Faster than starting from scratch
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">✗</span>
              <span className="text-foreground">Too generic - doesn't fit your needs</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">✓</span>
              <span className="text-foreground">Easy to share and distribute</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 mt-1">✗</span>
              <span className="text-foreground">Heavy editing needed for quality</span>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="inline-block px-6 py-4 bg-white/90 border-2 border-amber-400 rounded-xl animate-fade-in delay-400">
          <p className="font-body text-lg text-foreground">
            <span className="font-bold text-amber-600">Problem:</span> One-size-fits-all
            means it doesn't match your quality standards
          </p>
        </div>
      </div>
    </section>
  )
}
