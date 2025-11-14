/**
 * Animation Engine for Algorithmic Art
 * Manages requestAnimationFrame loops with performance monitoring
 */

export type AnimationCallback = (deltaTime: number, totalTime: number) => void

export interface AnimationEngineConfig {
  fps?: number
  maxDeltaTime?: number
}

export class AnimationEngine {
  private animationId: number | null = null
  private callbacks: Set<AnimationCallback> = new Set()
  private isRunning: boolean = false
  private startTime: number = 0
  private lastFrameTime: number = 0
  private fps: number
  private frameInterval: number
  private maxDeltaTime: number
  private frameCount: number = 0
  private fpsHistory: number[] = []

  constructor(config: AnimationEngineConfig = {}) {
    this.fps = config.fps || 60
    this.frameInterval = 1000 / this.fps
    this.maxDeltaTime = config.maxDeltaTime || 100 // Cap at 100ms to prevent large jumps
  }

  /**
   * Add an animation callback
   */
  addCallback(callback: AnimationCallback): void {
    this.callbacks.add(callback)
  }

  /**
   * Remove an animation callback
   */
  removeCallback(callback: AnimationCallback): void {
    this.callbacks.delete(callback)
  }

  /**
   * Start the animation loop
   */
  start(): void {
    if (this.isRunning) return

    this.isRunning = true
    this.startTime = performance.now()
    this.lastFrameTime = this.startTime
    this.animate(this.startTime)
  }

  /**
   * Stop the animation loop
   */
  stop(): void {
    if (!this.isRunning) return

    this.isRunning = false

    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }
  }

  /**
   * Main animation loop
   */
  private animate = (currentTime: number): void => {
    if (!this.isRunning) return

    // Calculate delta time
    let deltaTime = currentTime - this.lastFrameTime

    // Cap delta time to prevent large jumps (e.g., when tab is inactive)
    deltaTime = Math.min(deltaTime, this.maxDeltaTime)

    // Only render if enough time has passed (fps throttling)
    if (deltaTime >= this.frameInterval) {
      const totalTime = currentTime - this.startTime

      // Update FPS tracking
      this.updateFPS(deltaTime)

      // Execute all callbacks
      this.callbacks.forEach((callback) => {
        try {
          callback(deltaTime, totalTime)
        } catch (error) {
          console.error("Animation callback error:", error)
        }
      })

      this.lastFrameTime = currentTime - (deltaTime % this.frameInterval)
      this.frameCount++
    }

    // Schedule next frame
    this.animationId = requestAnimationFrame(this.animate)
  }

  /**
   * Update FPS tracking
   */
  private updateFPS(deltaTime: number): void {
    if (deltaTime > 0) {
      const currentFPS = 1000 / deltaTime
      this.fpsHistory.push(currentFPS)

      // Keep only last 60 frames for average
      if (this.fpsHistory.length > 60) {
        this.fpsHistory.shift()
      }
    }
  }

  /**
   * Get current FPS
   */
  getCurrentFPS(): number {
    if (this.fpsHistory.length === 0) return 0

    const sum = this.fpsHistory.reduce((a, b) => a + b, 0)
    return Math.round(sum / this.fpsHistory.length)
  }

  /**
   * Get total frame count
   */
  getFrameCount(): number {
    return this.frameCount
  }

  /**
   * Check if engine is running
   */
  isActive(): boolean {
    return this.isRunning
  }

  /**
   * Clear all callbacks and stop
   */
  destroy(): void {
    this.stop()
    this.callbacks.clear()
    this.fpsHistory = []
    this.frameCount = 0
  }
}

/**
 * Easing functions for smooth animations
 */
export const Easing = {
  linear: (t: number): number => t,

  easeInQuad: (t: number): number => t * t,

  easeOutQuad: (t: number): number => t * (2 - t),

  easeInOutQuad: (t: number): number =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,

  easeInCubic: (t: number): number => t * t * t,

  easeOutCubic: (t: number): number => --t * t * t + 1,

  easeInOutCubic: (t: number): number =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,

  easeInSine: (t: number): number => 1 - Math.cos((t * Math.PI) / 2),

  easeOutSine: (t: number): number => Math.sin((t * Math.PI) / 2),

  easeInOutSine: (t: number): number => -(Math.cos(Math.PI * t) - 1) / 2,

  easeInExpo: (t: number): number => (t === 0 ? 0 : Math.pow(2, 10 * t - 10)),

  easeOutExpo: (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),

  easeInOutExpo: (t: number): number =>
    t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2,
} as const

/**
 * Simple tween animation helper
 */
export class Tween {
  private startValue: number
  private endValue: number
  private duration: number
  private startTime: number
  private easingFn: (t: number) => number
  private isComplete: boolean = false

  constructor(
    startValue: number,
    endValue: number,
    duration: number,
    easingFn: (t: number) => number = Easing.linear
  ) {
    this.startValue = startValue
    this.endValue = endValue
    this.duration = duration
    this.startTime = performance.now()
    this.easingFn = easingFn
  }

  update(currentTime: number): number {
    if (this.isComplete) return this.endValue

    const elapsed = currentTime - this.startTime
    const progress = Math.min(elapsed / this.duration, 1)
    const easedProgress = this.easingFn(progress)

    if (progress >= 1) {
      this.isComplete = true
      return this.endValue
    }

    return this.startValue + (this.endValue - this.startValue) * easedProgress
  }

  complete(): boolean {
    return this.isComplete
  }

  reset(currentTime: number = performance.now()): void {
    this.startTime = currentTime
    this.isComplete = false
  }
}
