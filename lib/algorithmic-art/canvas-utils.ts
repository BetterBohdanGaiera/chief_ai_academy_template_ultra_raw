/**
 * Canvas Utilities for Algorithmic Art
 * Provides helper functions for canvas setup, rendering, and cleanup
 */

export interface CanvasConfig {
  width?: number
  height?: number
  dpr?: number
  alpha?: boolean
}

/**
 * Initialize canvas with proper resolution for high DPI displays
 */
export function initCanvas(
  canvas: HTMLCanvasElement,
  config: CanvasConfig = {}
): CanvasRenderingContext2D | null {
  const { width, height, dpr = window.devicePixelRatio || 1, alpha = true } = config

  const ctx = canvas.getContext("2d", { alpha })
  if (!ctx) return null

  // Set display size
  const displayWidth = width || canvas.offsetWidth
  const displayHeight = height || canvas.offsetHeight

  // Set canvas size accounting for device pixel ratio
  canvas.width = displayWidth * dpr
  canvas.height = displayHeight * dpr

  // Scale context to match device pixel ratio
  ctx.scale(dpr, dpr)

  // Set canvas display dimensions
  canvas.style.width = `${displayWidth}px`
  canvas.style.height = `${displayHeight}px`

  return ctx
}

/**
 * Clear canvas with optional background color
 */
export function clearCanvas(
  ctx: CanvasRenderingContext2D,
  backgroundColor?: string
): void {
  const canvas = ctx.canvas

  if (backgroundColor) {
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

/**
 * Get canvas dimensions accounting for device pixel ratio
 */
export function getCanvasDimensions(canvas: HTMLCanvasElement): {
  width: number
  height: number
  dpr: number
} {
  const dpr = window.devicePixelRatio || 1
  return {
    width: canvas.offsetWidth,
    height: canvas.offsetHeight,
    dpr,
  }
}

/**
 * Resize canvas handler - maintains proper DPI scaling
 */
export function handleCanvasResize(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): void {
  const dpr = window.devicePixelRatio || 1
  const { width, height } = getCanvasDimensions(canvas)

  canvas.width = width * dpr
  canvas.height = height * dpr
  ctx.scale(dpr, dpr)

  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
}

/**
 * Draw with alpha blending
 */
export function drawWithAlpha(
  ctx: CanvasRenderingContext2D,
  alpha: number,
  drawFn: () => void
): void {
  const prevAlpha = ctx.globalAlpha
  ctx.globalAlpha = alpha
  drawFn()
  ctx.globalAlpha = prevAlpha
}

/**
 * Linear interpolation between two values
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

/**
 * Map value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Convert hex color to rgba
 */
export function hexToRgba(hex: string, alpha: number = 1): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Design system colors for algorithmic art
 */
export const DESIGN_COLORS = {
  primary: "#FF4D00",
  primaryGlow: "rgba(255, 77, 0, 0.2)",
  accentBlue: "#00BBFF",
  accentBlueGlow: "rgba(0, 187, 255, 0.15)",
  warning: "#F59E0B",
  success: "#10B981",
  destructive: "#EF4444",
  foreground: "#0A0A0A",
  muted: "#525252",
  background: "#FAFAFA",
  white: "#FFFFFF",
} as const
