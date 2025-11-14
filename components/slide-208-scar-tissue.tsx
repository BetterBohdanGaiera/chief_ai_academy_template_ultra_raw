"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"
import { Users, TrendingDown, AlertCircle } from "lucide-react"

export function Slide208ScarTissue() {
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

    // Organization visualization - nodes representing teams
    interface OrgNode {
      x: number
      y: number
      size: number
      trustLevel: number // 0-1, decays over time
      resistanceLevel: number // 0-1, grows over time
    }

    const nodes: OrgNode[] = []
    const nodeCount = 20

    // Create organizational structure (tree-like)
    for (let i = 0; i < nodeCount; i++) {
      const row = Math.floor(i / 5)
      const col = i % 5
      nodes.push({
        x: col * (canvas.width / 5) + canvas.width / 10,
        y: row * (canvas.height / 4) + canvas.height / 8,
        size: 20,
        trustLevel: 1,
        resistanceLevel: 0,
      })
    }

    let startTime = Date.now()
    let animationId: number

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min((elapsed % 10000) / 10000, 1) // 10 second cycle

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update trust decay and resistance growth
      nodes.forEach((node, idx) => {
        // Spread from bottom-left (where failure started) outward
        const distanceFromOrigin = Math.sqrt(
          Math.pow(node.x - nodes[0].x, 2) + Math.pow(node.y - nodes[0].y, 2)
        )
        const maxDistance = Math.sqrt(
          Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)
        )
        const normalizedDistance = distanceFromOrigin / maxDistance

        // Scar tissue spreads over time
        const spreadProgress = Math.max(0, progress - normalizedDistance * 0.5) * 2
        node.trustLevel = Math.max(0, 1 - spreadProgress * 0.8)
        node.resistanceLevel = Math.min(1, spreadProgress)
      })

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const from = nodes[i]
          const to = nodes[j]
          const distance = Math.sqrt(
            Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2)
          )

          if (distance < 200) {
            const avgTrust = (from.trustLevel + to.trustLevel) / 2
            const avgResistance = (from.resistanceLevel + to.resistanceLevel) / 2

            // Connections fade and turn red as trust decays
            const opacity = avgTrust * 0.6
            const red = Math.floor(100 + avgResistance * 155)
            const green = Math.floor(100 * avgTrust)
            const blue = Math.floor(100 * avgTrust)

            ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(from.x, from.y)
            ctx.lineTo(to.x, to.y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        // Color transitions from blue (trust) to red (resistance)
        const r = Math.floor(100 + node.resistanceLevel * 155)
        const g = Math.floor(100 * node.trustLevel)
        const b = Math.floor(100 + node.trustLevel * 89)

        // Node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.fill()

        // Resistance aura (scar tissue)
        if (node.resistanceLevel > 0.3) {
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            node.size,
            node.x,
            node.y,
            node.size * 3
          )
          gradient.addColorStop(
            0,
            `rgba(239, 68, 68, ${node.resistanceLevel * 0.3})`
          )
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Add text overlay showing progress
      if (progress > 0.8) {
        ctx.font = "bold 18px sans-serif"
        ctx.fillStyle = "#EF4444"
        ctx.textAlign = "center"
        ctx.fillText("Organizational Scar Tissue", canvas.width / 2, 40)
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
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-red-50/20 to-background overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-red-500/60">
            Level 3: The Consequence
          </Badge>
          <h1 className="font-display text-7xl lg:text-9xl font-bold text-red-600 tracking-tight">
            Scar Tissue
          </h1>
          <p className="font-body text-2xl lg:text-3xl text-foreground-muted max-w-3xl mx-auto">
            Trust erodes, resistance spreads, capability debt accumulates
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in-up delay-200">
          {/* Trust Erosion */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-red-300 rounded-xl p-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto">
              <TrendingDown className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="font-display text-2xl font-bold text-red-700 text-center">
              Trust Decay
            </h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>"AI doesn't work for us"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Team develops workarounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Executives become skeptical</span>
              </li>
            </ul>
          </div>

          {/* Resistance Builds */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-red-300 rounded-xl p-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="font-display text-2xl font-bold text-red-700 text-center">
              Resistance Spreads
            </h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>"We tried AI, it failed"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Future projects face skepticism</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Cultural scar tissue forms</span>
              </li>
            </ul>
          </div>

          {/* Capability Debt */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-red-300 rounded-xl p-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto">
              <Users className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="font-display text-2xl font-bold text-red-700 text-center">
              Capability Debt
            </h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Team doesn't build AI skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Competitors move ahead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <span>Gap widens over time</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline of Decay */}
        <div className="bg-red-50/80 backdrop-blur-sm border-2 border-red-300 rounded-xl p-8 animate-fade-in delay-300">
          <h3 className="font-display text-2xl font-bold text-red-700 mb-6 text-center">
            The Spreading Pattern
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-600">Month 1</div>
              <div className="text-sm text-foreground-muted">Initial team loses trust</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-600">Month 3</div>
              <div className="text-sm text-foreground-muted">
                Adjacent teams hear the stories
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-600">Month 6</div>
              <div className="text-sm text-foreground-muted">Organization becomes skeptical</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-600">Year 1</div>
              <div className="text-sm text-foreground-muted">
                Competitors pull ahead
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center animate-fade-in delay-400">
          <div className="inline-block px-6 py-4 bg-red-100/90 border-2 border-red-400 rounded-xl">
            <p className="font-body text-lg lg:text-xl text-foreground">
              <span className="font-bold text-red-600">The Hidden Cost:</span> Failed Level 3
              implementations don't just waste money—they create organizational resistance
              that makes future AI adoption harder
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
