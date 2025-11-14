"use client"

import { useCanvasAnimation, useReducedMotion } from "@/lib/algorithmic-art"
import { useEffect, useRef } from "react"

interface MeshGradientBackgroundProps {
  colors?: string[]
  speed?: number
  complexity?: number
}

export function MeshGradientBackground({
  colors = ["#FF4D00", "#00BBFF", "#F59E0B", "#10B981"],
  speed = 0.0005,
  complexity = 4,
}: MeshGradientBackgroundProps) {
  const prefersReducedMotion = useReducedMotion()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { canvasRef } = useCanvasAnimation(
    (ctx, canvas, _deltaTime, totalTime) => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Create gradient mesh with animated positions
      const gradient = ctx.createRadialGradient(
        width / 2 + Math.sin(totalTime * speed) * 100,
        height / 2 + Math.cos(totalTime * speed) * 100,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 2
      )

      // Add color stops with animation
      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1)) * 0.8
        const animatedOffset = offset + Math.sin(totalTime * speed * 2 + index) * 0.1
        gradient.addColorStop(Math.max(0, Math.min(1, animatedOffset)), color)
      })

      ctx.globalAlpha = 0.15
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Add secondary animated blobs
      for (let i = 0; i < complexity; i++) {
        const angle = (Math.PI * 2 * i) / complexity + totalTime * speed
        const x = width / 2 + Math.cos(angle) * (width / 3)
        const y = height / 2 + Math.sin(angle) * (height / 3)
        const radius = 100 + Math.sin(totalTime * speed * 3 + i) * 50

        const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        blobGradient.addColorStop(0, colors[i % colors.length])
        blobGradient.addColorStop(1, "transparent")

        ctx.globalAlpha = 0.08
        ctx.fillStyle = blobGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    },
    !prefersReducedMotion
  )

  return (
    <div ref={wrapperRef} className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  )
}
