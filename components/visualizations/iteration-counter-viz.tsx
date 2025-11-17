"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface IterationState {
  count: number
  quality: number
  totalCost: number
  lastIterationTime: number
  isActive: boolean
}

export default function IterationCounterViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(false)
  const animationFrameRef = useRef<number>()
  const startTimeRef = useRef<number>(0)

  // Separate state for Level 3 and Level 4
  const [level3State, setLevel3State] = useState<IterationState>({
    count: 0,
    quality: 60,
    totalCost: 0,
    lastIterationTime: 0,
    isActive: false
  })

  const [level4State, setLevel4State] = useState<IterationState>({
    count: 0,
    quality: 70,
    totalCost: 0,
    lastIterationTime: 0,
    isActive: false
  })

  // Configuration
  const LEVEL_3_ITERATION_SPEED = 2500 // 2.5 seconds per iteration
  const LEVEL_4_ITERATION_SPEED = 400 // 0.4 seconds per iteration
  const LEVEL_3_COST_PER_ITERATION = 3500 // $3.5K
  const LEVEL_4_COST_PER_ITERATION = 50 // $50
  const LEVEL_3_QUALITY_DECAY = -0.5 // -0.5% per iteration
  const LEVEL_4_QUALITY_GROWTH = 0.8 // +0.8% per iteration
  const SIMULATION_DURATION = 30000 // 30 seconds total

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  useEffect(() => {
    if (!isRunning) return

    startTimeRef.current = Date.now()

    // Reset states
    setLevel3State({
      count: 0,
      quality: 60,
      totalCost: 0,
      lastIterationTime: 0,
      isActive: false
    })

    setLevel4State({
      count: 0,
      quality: 70,
      totalCost: 0,
      lastIterationTime: 0,
      isActive: false
    })

    const animate = (timestamp: number) => {
      const elapsed = Date.now() - startTimeRef.current

      if (elapsed > SIMULATION_DURATION) {
        setIsRunning(false)
        return
      }

      // Update Level 3 (slow iterations)
      setLevel3State(prev => {
        const timeSinceLastIteration = elapsed - prev.lastIterationTime
        if (timeSinceLastIteration >= LEVEL_3_ITERATION_SPEED) {
          const newCount = prev.count + 1
          const newQuality = Math.max(50, prev.quality + LEVEL_3_QUALITY_DECAY)
          return {
            count: newCount,
            quality: newQuality,
            totalCost: newCount * LEVEL_3_COST_PER_ITERATION,
            lastIterationTime: elapsed,
            isActive: true
          }
        }
        return { ...prev, isActive: false }
      })

      // Update Level 4 (fast iterations)
      setLevel4State(prev => {
        const timeSinceLastIteration = elapsed - prev.lastIterationTime
        if (timeSinceLastIteration >= LEVEL_4_ITERATION_SPEED) {
          const newCount = prev.count + 1
          const newQuality = Math.min(95, prev.quality + LEVEL_4_QUALITY_GROWTH)
          return {
            count: newCount,
            quality: newQuality,
            totalCost: newCount * LEVEL_4_COST_PER_ITERATION,
            lastIterationTime: elapsed,
            isActive: true
          }
        }
        return { ...prev, isActive: false }
      })

      // Draw visualization
      drawVisualization(elapsed)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isRunning])

  const drawVisualization = (elapsed: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw split line
    ctx.strokeStyle = '#E5E5E5'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2, height)
    ctx.stroke()

    // Draw Level 3 (Left side)
    drawLevelVisualization(
      ctx,
      0,
      width / 2,
      height,
      level3State,
      '#F59E0B', // warning color
      'LEVEL 3: SLOW DEATH',
      true
    )

    // Draw Level 4 (Right side)
    drawLevelVisualization(
      ctx,
      width / 2,
      width / 2,
      height,
      level4State,
      '#FF4D00', // primary color
      'LEVEL 4: FAST SUCCESS',
      false
    )

    // Draw progress bar at bottom
    const progress = elapsed / SIMULATION_DURATION
    const progressBarHeight = 4
    const progressBarY = height - progressBarHeight

    ctx.fillStyle = '#E5E5E5'
    ctx.fillRect(0, progressBarY, width, progressBarHeight)

    ctx.fillStyle = '#FF4D00'
    ctx.fillRect(0, progressBarY, width * progress, progressBarHeight)
  }

  const drawLevelVisualization = (
    ctx: CanvasRenderingContext2D,
    x: number,
    width: number,
    height: number,
    state: IterationState,
    color: string,
    title: string,
    isLeft: boolean
  ) => {
    const centerX = x + width / 2
    const padding = 20

    // Draw title
    ctx.font = 'bold 16px "Syne", sans-serif'
    ctx.fillStyle = color
    ctx.textAlign = 'center'
    ctx.fillText(title, centerX, 30)

    // Draw iteration count (large)
    const countY = height * 0.25
    ctx.font = 'bold 72px "Bebas Neue", sans-serif'
    ctx.fillStyle = state.isActive ? color : '#A0A0A0'
    ctx.fillText(`${state.count}`, centerX, countY)

    ctx.font = '14px "Manrope", sans-serif'
    ctx.fillStyle = '#525252'
    ctx.fillText('ITERATIONS', centerX, countY + 20)

    // Draw quality percentage with color coding
    const qualityY = height * 0.50
    const qualityColor = isLeft
      ? (state.quality < 55 ? '#EF4444' : '#F59E0B') // Red if degraded too much
      : (state.quality > 90 ? '#10B981' : '#FF4D00') // Green if excellent

    ctx.font = 'bold 64px "Bebas Neue", sans-serif'
    ctx.fillStyle = qualityColor
    ctx.fillText(`${state.quality.toFixed(1)}%`, centerX, qualityY)

    ctx.font = '14px "Manrope", sans-serif'
    ctx.fillStyle = '#525252'
    ctx.fillText('QUALITY', centerX, qualityY + 20)

    // Draw quality trend indicator
    const trendY = qualityY + 40
    ctx.font = '12px "Manrope", sans-serif'
    if (isLeft) {
      ctx.fillStyle = '#EF4444'
      ctx.fillText('↓ DEGRADING', centerX, trendY)
    } else {
      ctx.fillStyle = '#10B981'
      ctx.fillText('↑ IMPROVING', centerX, trendY)
    }

    // Draw cost
    const costY = height * 0.75
    ctx.font = 'bold 32px "JetBrains Mono", monospace'
    ctx.fillStyle = '#0A0A0A'
    const costText = `$${(state.totalCost / 1000).toFixed(1)}K`
    ctx.fillText(costText, centerX, costY)

    ctx.font = '14px "Manrope", sans-serif'
    ctx.fillStyle = '#525252'
    ctx.fillText('TOTAL COST', centerX, costY + 20)

    // Draw iteration speed indicator
    const speedY = height * 0.90
    ctx.font = '11px "Manrope", sans-serif'
    ctx.fillStyle = '#525252'
    const speedText = isLeft
      ? `${LEVEL_3_ITERATION_SPEED / 1000}s per iteration`
      : `${LEVEL_4_ITERATION_SPEED / 1000}s per iteration`
    ctx.fillText(speedText, centerX, speedY)

    // Draw pulse animation when active
    if (state.isActive) {
      const pulseRadius = 40
      ctx.beginPath()
      ctx.arc(centerX, countY - 50, pulseRadius, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.globalAlpha = 0.5
      ctx.stroke()
      ctx.globalAlpha = 1.0
    }
  }

  const formatCurrency = (value: number) => {
    return `$${(value / 1000).toFixed(1)}K`
  }

  const getQualityColor = (quality: number, isLevel3: boolean) => {
    if (isLevel3) {
      return quality < 55 ? 'text-destructive' : 'text-warning'
    }
    return quality > 90 ? 'text-success' : 'text-primary'
  }

  return (
    <div className="space-y-6">
      {/* Canvas Visualization */}
      <div className="relative w-full h-[500px] bg-white rounded-xl border-2 border-border overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: 'block' }}
        />
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-syne font-bold rounded-lg shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isRunning ? 'Running...' : 'Start Simulation'}
        </button>

        <button
          onClick={() => {
            setIsRunning(false)
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current)
            }
          }}
          disabled={!isRunning}
          className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-syne font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Stop
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Level 3 Stats */}
        <Card className="border-warning/40 bg-warning/5">
          <CardContent className="p-6">
            <h3 className="font-bebas text-2xl text-warning mb-4">LEVEL 3 SUMMARY</h3>
            <div className="space-y-2 font-manrope text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Iterations:</span>
                <span className="font-jetbrains font-bold">{level3State.count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quality:</span>
                <span className={`font-jetbrains font-bold ${getQualityColor(level3State.quality, true)}`}>
                  {level3State.quality.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Cost:</span>
                <span className="font-jetbrains font-bold">{formatCurrency(level3State.totalCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cost/Iteration:</span>
                <span className="font-jetbrains font-bold">{formatCurrency(LEVEL_3_COST_PER_ITERATION)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Level 4 Stats */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-bebas text-2xl text-primary mb-4">LEVEL 4 SUMMARY</h3>
            <div className="space-y-2 font-manrope text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Iterations:</span>
                <span className="font-jetbrains font-bold">{level4State.count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quality:</span>
                <span className={`font-jetbrains font-bold ${getQualityColor(level4State.quality, false)}`}>
                  {level4State.quality.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Cost:</span>
                <span className="font-jetbrains font-bold">{formatCurrency(level4State.totalCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cost/Iteration:</span>
                <span className="font-jetbrains font-bold">{formatCurrency(LEVEL_4_COST_PER_ITERATION)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insight */}
      <div className="text-center">
        <Card className="inline-block border-primary/40 bg-primary/5">
          <CardContent className="p-6">
            <p className="font-syne text-lg font-bold text-primary">
              Level 4 achieves <span className="text-success">{level4State.count}x more iterations</span> at{' '}
              <span className="text-success">{Math.round((LEVEL_3_COST_PER_ITERATION / LEVEL_4_COST_PER_ITERATION))}x lower cost</span> per iteration
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
