"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"
import { User } from "lucide-react"

export function Slide203Level1Visual() {
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

    // Individual particles - isolated, no connections
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }

    const particles: Particle[] = []
    const particleCount = 12 // Small number representing individual users

    // Create isolated particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 15 + Math.random() * 10,
        color: `#10B981`, // Emerald green
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particle
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < particle.radius || particle.x > canvas.width - particle.radius) {
          particle.vx *= -1
        }
        if (particle.y < particle.radius || particle.y > canvas.height - particle.radius) {
          particle.vy *= -1
        }

        // Keep within bounds
        particle.x = Math.max(
          particle.radius,
          Math.min(canvas.width - particle.radius, particle.x)
        )
        particle.y = Math.max(
          particle.radius,
          Math.min(canvas.height - particle.radius, particle.y)
        )

        // Draw particle (isolated node)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2
        )
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.25)")
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw user icon representation (tiny circle in center)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = "#ffffff"
        ctx.fill()
      })

      // NO connections drawn - representing isolation

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-emerald-50/30 to-background overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-12 text-center">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-emerald-500/60">
            Level 1: Individual Users
          </Badge>
          <h1 className="font-display text-7xl lg:text-9xl font-bold text-emerald-600 tracking-tight">
            Isolated Nodes
          </h1>
          <p className="font-body text-2xl lg:text-3xl text-foreground-muted max-w-3xl mx-auto">
            Individual employees using AI tools independently
          </p>
        </div>

        {/* Visual Metaphor Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in-up delay-200">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
              <User className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-emerald-700">
              No Connection
            </h3>
            <p className="text-sm text-foreground-muted">
              Each particle moves independently with no links to others
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-display text-xl font-bold text-emerald-700">
              Personal Knowledge
            </h3>
            <p className="text-sm text-foreground-muted">
              Learning and insights remain with the individual
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-display text-xl font-bold text-emerald-700">
              Zero Leverage
            </h3>
            <p className="text-sm text-foreground-muted">
              No organizational memory or shared context
            </p>
          </div>
        </div>

        {/* Key Characteristics */}
        <div className="bg-emerald-50/80 backdrop-blur-sm border-2 border-emerald-300 rounded-xl p-8 animate-fade-in delay-300">
          <h3 className="font-display text-2xl font-bold text-emerald-700 mb-6">
            Level 1 Characteristics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span className="text-foreground">
                10-20% individual productivity boost
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✗</span>
              <span className="text-foreground">Knowledge stays in individual heads</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span className="text-foreground">Easy to start - just sign up</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✗</span>
              <span className="text-foreground">
                When employee leaves, AI knowledge leaves too
              </span>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="inline-block px-6 py-4 bg-white/90 border-2 border-emerald-400 rounded-xl animate-fade-in delay-400">
          <p className="font-body text-lg text-foreground">
            <span className="font-bold text-emerald-600">Reality:</span> Good starting
            point, but no organizational leverage
          </p>
        </div>
      </div>
    </section>
  )
}
