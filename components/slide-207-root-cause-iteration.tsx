"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { DollarSign, Clock, TrendingUp } from "lucide-react"

export function Slide207RootCauseIteration() {
  const canvas3Ref = useRef<HTMLCanvasElement>(null)
  const canvas4Ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const drawIterationCycles = (
      canvas: HTMLCanvasElement | null,
      level: 3 | 4,
      color: string
    ) => {
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.3

      // Iteration parameters
      const cyclesPerYear = level === 3 ? 2 : 26
      const cycleDuration = level === 3 ? 6000 : 1000 // ms per cycle animation
      const costPerCycle = level === 3 ? 25000 : 2000

      let startTime = Date.now()
      let currentCycle = 0
      let animationId: number

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = (elapsed % cycleDuration) / cycleDuration

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw cycle arrow
        const startAngle = -Math.PI / 2
        const endAngle = startAngle + progress * Math.PI * 2

        // Main cycle circle
        ctx.strokeStyle = color
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.stroke()

        // Arrow head
        if (progress > 0.9) {
          const arrowSize = 15
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.moveTo(
            centerX + Math.cos(endAngle) * radius,
            centerY + Math.sin(endAngle) * radius
          )
          ctx.lineTo(
            centerX + Math.cos(endAngle - 0.3) * (radius - arrowSize),
            centerY + Math.sin(endAngle - 0.3) * (radius - arrowSize)
          )
          ctx.lineTo(
            centerX + Math.cos(endAngle + 0.3) * (radius - arrowSize),
            centerY + Math.sin(endAngle + 0.3) * (radius - arrowSize)
          )
          ctx.closePath()
          ctx.fill()
        }

        // Cycle counter
        ctx.font = "bold 32px monospace"
        ctx.fillStyle = color
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(`${currentCycle}`, centerX, centerY - 20)

        ctx.font = "14px sans-serif"
        ctx.fillStyle = "#666"
        ctx.fillText("iterations", centerX, centerY + 15)

        // Cost accumulation
        const totalCost = currentCycle * costPerCycle
        ctx.font = "16px monospace"
        ctx.fillStyle = color
        ctx.fillText(`$${(totalCost / 1000).toFixed(0)}K`, centerX, centerY + 45)

        // Complete cycle
        if (progress > 0.99 && elapsed % cycleDuration > cycleDuration - 50) {
          currentCycle++
          if (currentCycle > cyclesPerYear) {
            currentCycle = 0
          }
        }

        animationId = requestAnimationFrame(animate)
      }

      animate()

      return () => {
        cancelAnimationFrame(animationId)
      }
    }

    const cleanup3 = drawIterationCycles(canvas3Ref.current, 3, "#EF4444")
    const cleanup4 = drawIterationCycles(canvas4Ref.current, 4, "#00BBFF")

    return () => {
      cleanup3?.()
      cleanup4?.()
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-background/95 to-background">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Why Level 3 Fails
          </Badge>
          <h1 className="font-display text-6xl lg:text-8xl font-bold text-primary tracking-tight">
            Root Cause: Iteration Economics
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            The fundamental difference between Level 3 failure and Level 4 success
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-in-up delay-200">
          {/* Level 3 - Slow & Expensive */}
          <Card className="p-8 border-2 border-red-400 bg-red-50/50 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-display text-3xl font-bold text-red-600">
                Level 3: Off-the-Shelf
              </h2>
              <p className="text-sm text-foreground-muted">Slow, expensive iterations</p>
            </div>

            {/* Animation Canvas */}
            <div className="flex justify-center">
              <canvas
                ref={canvas3Ref}
                className="w-full max-w-xs h-64"
                aria-label="Level 3 iteration cycle animation - slow and expensive"
              />
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-semibold">Iteration Time</span>
                </div>
                <span className="font-mono text-red-600 font-bold">3-6 months</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-semibold">Cost per Iteration</span>
                </div>
                <span className="font-mono text-red-600 font-bold">$25,000</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-semibold">Iterations/Year</span>
                </div>
                <span className="font-mono text-red-600 font-bold">2-4</span>
              </div>
            </div>

            {/* Problem */}
            <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-sm text-foreground font-semibold">
                ⚠️ Too slow and expensive to reach reliability
              </p>
            </div>
          </Card>

          {/* Level 4 - Fast & Affordable */}
          <Card className="p-8 border-2 border-cyan-400 bg-cyan-50/50 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-display text-3xl font-bold text-cyan-600">
                Level 4: Iterative Agents
              </h2>
              <p className="text-sm text-foreground-muted">Rapid, affordable iterations</p>
            </div>

            {/* Animation Canvas */}
            <div className="flex justify-center">
              <canvas
                ref={canvas4Ref}
                className="w-full max-w-xs h-64"
                aria-label="Level 4 iteration cycle animation - fast and affordable"
              />
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-semibold">Iteration Time</span>
                </div>
                <span className="font-mono text-cyan-600 font-bold">Days to weeks</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-semibold">Cost per Iteration</span>
                </div>
                <span className="font-mono text-cyan-600 font-bold">$2,000</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-semibold">Iterations/Year</span>
                </div>
                <span className="font-mono text-cyan-600 font-bold">26+</span>
              </div>
            </div>

            {/* Success */}
            <div className="p-4 bg-cyan-100 border border-cyan-300 rounded-lg">
              <p className="text-sm text-foreground font-semibold">
                ✓ Fast enough to reach 95%+ reliability
              </p>
            </div>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center animate-fade-in delay-300">
          <div className="inline-block px-6 py-4 bg-primary/10 border-2 border-primary/40 rounded-xl">
            <p className="font-body text-lg lg:text-xl text-foreground">
              <span className="font-bold text-primary">The Root Cause:</span> Level 3 can't
              iterate fast enough to reach reliability. Level 4's rapid feedback loops enable
              continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
