/**
 * ITERATION ANIMATION PATTERN
 *
 * A canvas-based animation that visualizes iteration speed comparison between
 * two approaches/methods/systems over time.
 *
 * Key Design Principles:
 * - Real-time canvas animation showing accumulating iteration dots
 * - Simulated time progression (e.g., 60 seconds real time = 90 days simulated)
 * - Visual contrast between slow vs fast iteration approaches
 * - Live metrics display showing iteration counts
 * - Moving time indicator (vertical line) to show progression
 *
 * This pattern is perfect for demonstrating the compound effect of
 * iteration speed differences over time.
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function IterationAnimationPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [timeElapsed, setTimeElapsed] = useState(0) // in simulation days
  const [slowIterations, setSlowIterations] = useState(0)
  const [fastIterations, setFastIterations] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size with device pixel ratio for crisp rendering
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const canvasWidth = rect.width
    const canvasHeight = rect.height

    let animationId: number
    const startTime = Date.now()

    // Animation parameters - CUSTOMIZE THESE FOR YOUR USE CASE
    // Real time: 60 seconds of animation
    // Simulated time: 90 days (3 months)
    // 1 second of real time = 1.5 days simulated
    const SIMULATION_SPEED = 1.5 // days per second
    const TOTAL_SIMULATION_DAYS = 90

    // Slow approach: 1 iteration every 20 days (4-5 iterations in 90 days)
    const SLOW_ITERATION_DAYS = 20

    // Fast approach: 1 iteration every 0.4 days (~2.5 per week, 225 in 90 days)
    const FAST_ITERATION_DAYS = 0.4

    // Store iteration dots for rendering
    const slowDots: number[] = [] // Array of day values when iterations occurred
    const fastDots: number[] = []

    const animate = () => {
      const now = Date.now()
      const realElapsed = (now - startTime) / 1000 // Real seconds elapsed
      const simulatedDays = Math.min(realElapsed * SIMULATION_SPEED, TOTAL_SIMULATION_DAYS)

      setTimeElapsed(simulatedDays)

      // Calculate iterations completed
      const slowCount = Math.floor(simulatedDays / SLOW_ITERATION_DAYS)
      const fastCount = Math.floor(simulatedDays / FAST_ITERATION_DAYS)

      setSlowIterations(slowCount)
      setFastIterations(fastCount)

      // Update dot arrays
      slowDots.length = 0
      for (let i = 0; i < slowCount; i++) {
        slowDots.push(i * SLOW_ITERATION_DAYS)
      }

      fastDots.length = 0
      for (let i = 0; i < fastCount; i++) {
        fastDots.push(i * FAST_ITERATION_DAYS)
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Define layout
      const trackHeight = 80
      const slowTrackY = canvasHeight * 0.3
      const fastTrackY = canvasHeight * 0.7
      const trackStartX = 80
      const trackEndX = canvasWidth - 80
      const trackWidth = trackEndX - trackStartX

      // Helper: Convert simulation days to X position
      const daysToX = (days: number) => {
        const progress = days / TOTAL_SIMULATION_DAYS
        return trackStartX + trackWidth * progress
      }

      // Draw Slow Track
      ctx.strokeStyle = '#3f3f46' // zinc-700
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.moveTo(trackStartX, slowTrackY)
      ctx.lineTo(trackEndX, slowTrackY)
      ctx.stroke()
      ctx.setLineDash([])

      // Draw Slow Label
      ctx.font = 'bold 14px Manrope'
      ctx.textAlign = 'left'
      ctx.fillStyle = '#a1a1aa' // zinc-400
      ctx.fillText('Slow Approach', trackStartX, slowTrackY - 30)

      // Draw Slow Dots
      slowDots.forEach((day) => {
        const x = daysToX(day)
        ctx.fillStyle = '#71717a' // zinc-500 (gray)
        ctx.beginPath()
        ctx.arc(x, slowTrackY, 6, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw Fast Track
      ctx.strokeStyle = '#3f3f46'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.moveTo(trackStartX, fastTrackY)
      ctx.lineTo(trackEndX, fastTrackY)
      ctx.stroke()
      ctx.setLineDash([])

      // Draw Fast Label
      ctx.font = 'bold 14px Manrope'
      ctx.textAlign = 'left'
      ctx.fillStyle = '#FF4D00' // primary orange
      ctx.fillText('Fast Approach', trackStartX, fastTrackY - 30)

      // Draw Fast Dots
      fastDots.forEach((day) => {
        const x = daysToX(day)
        ctx.fillStyle = '#FF4D00' // primary orange
        ctx.beginPath()
        ctx.arc(x, fastTrackY, 5, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw current time indicator (vertical line)
      const currentX = daysToX(simulatedDays)
      ctx.strokeStyle = '#00BBFF' // cyan
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(currentX, slowTrackY - 50)
      ctx.lineTo(currentX, fastTrackY + 50)
      ctx.stroke()

      // Draw time marker at top
      ctx.font = 'bold 12px Manrope'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#00BBFF'
      const weeks = Math.floor(simulatedDays / 7)
      const days = Math.floor(simulatedDays % 7)
      ctx.fillText(`Week ${weeks}, Day ${days}`, currentX, slowTrackY - 60)

      // Draw iteration counts near dots
      ctx.font = 'bold 16px Manrope'
      ctx.textAlign = 'right'

      ctx.fillStyle = '#71717a'
      ctx.fillText(`${slowCount} iterations`, trackStartX - 10, slowTrackY + 6)

      ctx.fillStyle = '#FF4D00'
      ctx.fillText(`${fastCount} iterations`, trackStartX - 10, fastTrackY + 6)

      // Continue animation if not complete
      if (simulatedDays < TOTAL_SIMULATION_DAYS) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animate()

    // Cleanup function to prevent memory leaks
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Calculate time display
  const weeks = Math.floor(timeElapsed / 7)
  const days = Math.floor(timeElapsed % 7)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Optional: Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        {/* Replace with your background image path or remove this section */}
        {/* <Image
          src="/path/to/your/background.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none"
          priority={true}
          aria-hidden="true"
        /> */}
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="max-w-7xl w-full space-y-8 lg:space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="default" className="bg-primary/20 border-primary/40 text-primary mb-4">
            Visual Proof
          </Badge>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            SEEING THE
            <br />
            <span className="text-primary">DIFFERENCE</span>
          </h2>

          <p className="font-syne text-xl md:text-2xl text-muted-foreground font-semibold max-w-3xl mx-auto">
            Watch Fast Iteration vs Slow Iteration
          </p>
        </div>

        {/* Time Display */}
        <div className="text-center animate-fade-in delay-500 fill-backwards">
          <Card className="inline-block border-primary/50 bg-primary/5">
            <CardContent className="pt-4 pb-4 px-8">
              <p className="font-mono text-sm text-foreground/60 uppercase tracking-wide mb-1">
                Time Elapsed
              </p>
              <p className="font-bebas text-4xl text-primary">
                Week {weeks}, Day {days}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Canvas Animation */}
        <div className="animate-fade-in delay-700 fill-backwards">
          <canvas
            ref={canvasRef}
            className="w-full border border-border rounded-xl bg-zinc-950/50 shadow-xl"
            style={{ height: '400px' }}
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-1000 fill-backwards">
          {/* Slow Approach Card */}
          <Card className="border-zinc-500/50 bg-zinc-500/5">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-zinc-500 text-zinc-400">
                  Slow Approach
                </Badge>
                <span className="text-4xl font-bebas text-zinc-400">
                  {slowIterations}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-syne font-bold text-zinc-300">
                  3-5 iterations over 3 months
                </p>
                <p className="text-sm text-foreground/70 font-manrope leading-relaxed">
                  Long feedback loops (weeks) mean slow learning. By the time you finish one iteration, conditions have changed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fast Approach Card */}
          <Card className="border-primary/50 bg-primary/5 shadow-[0_0_30px_rgba(255,77,0,0.15)]">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="default" className="bg-primary/90 hover:bg-primary">
                  Fast Approach
                </Badge>
                <span className="text-4xl font-bebas text-primary">
                  {fastIterations}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-syne font-bold text-primary">
                  200+ iterations in 6-10 weeks
                </p>
                <p className="text-sm text-foreground/70 font-manrope leading-relaxed">
                  Rapid feedback loops (minutes to hours) enable exponential learning and adaptation. Iterate 10-20x faster.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-1300 fill-backwards">
          <div className="inline-block px-8 py-6 bg-primary/10 border-2 border-primary/50 rounded-xl max-w-5xl">
            <p className="font-syne text-xl md:text-2xl font-bold text-primary mb-3">
              This visual proves why speed matters
            </p>
            <p className="text-base text-foreground/80 font-manrope leading-relaxed">
              Feedback loops measured in <span className="text-primary font-bold">MINUTES</span> enable 10-20 iterations per day,
              while slow approaches working in <span className="text-zinc-400 font-bold">WEEKS</span> manage only 1-2 per month.
              Speed of iteration = Speed of learning = Speed of value creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
