"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"

export function Slide205PromiseVsReality() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>(Date.now())

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

    const animate = () => {
      if (!isPlaying) return

      const elapsed = Date.now() - startTimeRef.current
      const duration = 8000 // 8 seconds for full cycle
      const currentProgress = (elapsed % duration) / duration
      setProgress(currentProgress)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Center position
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.3

      // Transform from promise (attractive) to reality (broken)
      const transformProgress = currentProgress

      // Number of connection lines
      const connectionCount = 12
      const nodes: { x: number; y: number }[] = []

      // Create nodes in a circle
      for (let i = 0; i < connectionCount; i++) {
        const angle = (i / connectionCount) * Math.PI * 2
        const radius = maxRadius
        nodes.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        })
      }

      // Draw connections - they break as we progress
      for (let i = 0; i < connectionCount; i++) {
        for (let j = i + 1; j < connectionCount; j++) {
          const from = nodes[i]
          const to = nodes[j]

          // Determine if this connection should be broken
          const connectionIndex = (i * connectionCount + j) / (connectionCount * connectionCount)
          const breakPoint = connectionIndex * 0.7 + 0.3 // Break between 30% and 100%

          if (transformProgress < breakPoint) {
            // Still connected - attractive state
            const opacity = 1 - transformProgress * 0.5
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})` // Green
            ctx.lineWidth = 2
          } else {
            // Breaking/broken
            const breakProgress = (transformProgress - breakPoint) / (1 - breakPoint)
            const opacity = Math.max(0, 1 - breakProgress * 2)
            ctx.strokeStyle = `rgba(239, 68, 68, ${opacity})` // Red
            ctx.lineWidth = 1
            ctx.setLineDash([5, 5])
          }

          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
          ctx.stroke()
          ctx.setLineDash([])
        }
      }

      // Draw nodes
      nodes.forEach((node, idx) => {
        const nodeProgress = Math.max(0, transformProgress - idx * 0.05)
        const nodeSize = 12 - nodeProgress * 4

        // Color transition from green (promise) to red (reality)
        const r = Math.floor(16 + nodeProgress * (239 - 16))
        const g = Math.floor(185 - nodeProgress * (185 - 68))
        const b = Math.floor(129 - nodeProgress * (129 - 68))

        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.fill()

        // Add glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize * 2)
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.4)`)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize * 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    if (isPlaying) {
      animate()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    if (!isPlaying) {
      startTimeRef.current = Date.now() - progress * 8000
    }
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    startTimeRef.current = Date.now()
    setProgress(0)
    setIsPlaying(true)
  }

  const getStageLabel = () => {
    if (progress < 0.3) return "The Promise - Attractive Demos"
    if (progress < 0.6) return "Reality Emerges - Edge Cases"
    return "The Reality - Broken System"
  }

  const getStageColor = () => {
    if (progress < 0.3) return "text-emerald-600"
    if (progress < 0.6) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-background to-background overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-amber-500/60">
            Level 3: Off-the-Shelf Wrappers
          </Badge>
          <h1 className="font-display text-7xl lg:text-9xl font-bold text-amber-600 tracking-tight">
            Promise vs Reality
          </h1>
          <p className={`font-body text-2xl lg:text-3xl font-semibold ${getStageColor()}`}>
            {getStageLabel()}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 animate-fade-in delay-200">
          <Button
            onClick={handlePlayPause}
            variant="brutal"
            size="lg"
            className="bg-white border-2 border-primary/60 hover:border-primary hover:bg-primary/10"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Play
              </>
            )}
          </Button>
          <Button
            onClick={handleReset}
            variant="brutal"
            size="lg"
            className="bg-white border-2 border-primary/60 hover:border-primary hover:bg-primary/10"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </Button>
        </div>

        {/* Timeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in-up delay-300">
          {/* Stage 1 - Promise */}
          <div
            className={`bg-white/80 backdrop-blur-sm border-2 rounded-xl p-6 space-y-3 transition-all ${
              progress < 0.3
                ? "border-emerald-400 shadow-lg scale-105"
                : "border-emerald-200"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-display text-xl font-bold text-emerald-700">The Promise</h3>
            <p className="text-sm text-foreground-muted">
              Impressive demos, high initial excitement, everything looks perfect
            </p>
          </div>

          {/* Stage 2 - Reality Emerges */}
          <div
            className={`bg-white/80 backdrop-blur-sm border-2 rounded-xl p-6 space-y-3 transition-all ${
              progress >= 0.3 && progress < 0.6
                ? "border-amber-400 shadow-lg scale-105"
                : "border-amber-200"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="font-display text-xl font-bold text-amber-700">Reality Emerges</h3>
            <p className="text-sm text-foreground-muted">
              Real-world edge cases appear, quality drops, vendor iterations slow
            </p>
          </div>

          {/* Stage 3 - Broken */}
          <div
            className={`bg-white/80 backdrop-blur-sm border-2 rounded-xl p-6 space-y-3 transition-all ${
              progress >= 0.6 ? "border-red-400 shadow-lg scale-105" : "border-red-200"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto">
              <span className="text-2xl">💔</span>
            </div>
            <h3 className="font-display text-xl font-bold text-red-700">The Reality</h3>
            <p className="text-sm text-foreground-muted">
              System breaks down, team develops workarounds, low adoption
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center animate-fade-in delay-400">
          <div className="inline-block px-6 py-4 bg-red-50/90 border-2 border-red-400 rounded-xl">
            <p className="font-body text-lg text-foreground">
              <span className="font-bold text-red-600">The Trap:</span> Attractive demos hide
              expensive iteration costs and poor real-world fit
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
