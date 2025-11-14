/**
 * React hooks for algorithmic art components
 */

import { useEffect, useRef, useCallback, useState } from "react"
import { initCanvas, handleCanvasResize } from "./canvas-utils"
import { AnimationEngine, AnimationCallback } from "./animation-engine"
import { ParticleSystem, ParticleSystemConfig } from "./particle-system"

/**
 * Hook for setting up canvas with proper DPI handling
 */
export function useCanvas(
  onRender: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void
) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initialize canvas
    const ctx = initCanvas(canvas)
    if (!ctx) return

    ctxRef.current = ctx

    // Initial render
    onRender(ctx, canvas)

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      if (ctxRef.current) {
        handleCanvasResize(canvas, ctxRef.current)
        onRender(ctxRef.current, canvas)
      }
    })

    resizeObserver.observe(canvas)

    return () => {
      resizeObserver.disconnect()
    }
  }, [onRender])

  return { canvasRef, ctxRef }
}

/**
 * Hook for managing animation loop with RAF
 */
export function useAnimationFrame(
  callback: AnimationCallback,
  enabled: boolean = true
) {
  const engineRef = useRef<AnimationEngine | null>(null)
  const savedCallback = useRef<AnimationCallback>(callback)

  // Update saved callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!enabled) return

    // Create engine if it doesn't exist
    if (!engineRef.current) {
      engineRef.current = new AnimationEngine({ fps: 60 })
    }

    const engine = engineRef.current

    // Wrapper to call saved callback
    const wrappedCallback: AnimationCallback = (deltaTime, totalTime) => {
      savedCallback.current(deltaTime, totalTime)
    }

    engine.addCallback(wrappedCallback)
    engine.start()

    return () => {
      engine.removeCallback(wrappedCallback)
      engine.stop()
    }
  }, [enabled])

  return {
    fps: engineRef.current?.getCurrentFPS() || 0,
    frameCount: engineRef.current?.getFrameCount() || 0,
  }
}

/**
 * Hook for managing particle system
 */
export function useParticleSystem(config: ParticleSystemConfig = {}) {
  const systemRef = useRef<ParticleSystem | null>(null)

  useEffect(() => {
    systemRef.current = new ParticleSystem(config)

    return () => {
      systemRef.current?.clear()
    }
  }, []) // Only create once

  return systemRef.current
}

/**
 * Hook for tracking mouse/touch position
 */
export function useMousePosition(elementRef: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [elementRef])

  return { position, isHovering }
}

/**
 * Hook for respecting prefers-reduced-motion
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return prefersReducedMotion
}

/**
 * Hook for canvas with animation loop
 */
export function useCanvasAnimation(
  animate: (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    deltaTime: number,
    totalTime: number
  ) => void,
  enabled: boolean = true
) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const engineRef = useRef<AnimationEngine | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initialize canvas
    const ctx = initCanvas(canvas)
    if (!ctx) return

    ctxRef.current = ctx

    // Create animation engine
    engineRef.current = new AnimationEngine({ fps: 60 })

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      if (ctxRef.current) {
        handleCanvasResize(canvas, ctxRef.current)
      }
    })

    resizeObserver.observe(canvas)

    return () => {
      resizeObserver.disconnect()
      engineRef.current?.destroy()
    }
  }, [])

  useEffect(() => {
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    const engine = engineRef.current

    if (!ctx || !canvas || !engine || !enabled) return

    const callback: AnimationCallback = (deltaTime, totalTime) => {
      animate(ctx, canvas, deltaTime, totalTime)
    }

    engine.addCallback(callback)
    engine.start()

    return () => {
      engine.removeCallback(callback)
      engine.stop()
    }
  }, [animate, enabled])

  return { canvasRef, ctxRef, engine: engineRef.current }
}

/**
 * Hook for FPS monitoring (development only)
 */
export function useFPS(enabled: boolean = false) {
  const [fps, setFPS] = useState(0)
  const frameTimesRef = useRef<number[]>([])
  const lastTimeRef = useRef<number>(performance.now())

  useEffect(() => {
    if (!enabled) return

    let rafId: number

    const measureFPS = () => {
      const now = performance.now()
      const delta = now - lastTimeRef.current
      lastTimeRef.current = now

      frameTimesRef.current.push(delta)

      // Keep last 60 frames
      if (frameTimesRef.current.length > 60) {
        frameTimesRef.current.shift()
      }

      // Calculate average FPS
      if (frameTimesRef.current.length > 0) {
        const avgDelta =
          frameTimesRef.current.reduce((a, b) => a + b, 0) /
          frameTimesRef.current.length
        setFPS(Math.round(1000 / avgDelta))
      }

      rafId = requestAnimationFrame(measureFPS)
    }

    rafId = requestAnimationFrame(measureFPS)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  return fps
}
