"use client"

import { useCanvasAnimation, useParticleSystem, useMousePosition, useReducedMotion, DESIGN_COLORS, clearCanvas } from "@/lib/algorithmic-art"
import { useRef } from "react"

interface ParticleFieldProps {
  particleCount?: number
  color?: string
  interactive?: boolean
  speed?: number
}

export function ParticleField({
  particleCount = 100,
  color = DESIGN_COLORS.primary,
  interactive = true,
  speed = 0.5,
}: ParticleFieldProps) {
  const prefersReducedMotion = useReducedMotion()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const particleSystem = useParticleSystem({
    maxParticles: particleCount,
    particleConfig: {
      radius: 2,
      color,
      alpha: 0.6,
      decay: 0.995,
      life: 100,
      maxLife: 100,
    },
  })

  const { position, isHovering } = useMousePosition(wrapperRef)

  const { canvasRef } = useCanvasAnimation(
    (ctx, canvas, deltaTime, totalTime) => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear with fade effect
      ctx.fillStyle = "rgba(250, 250, 250, 0.05)"
      ctx.fillRect(0, 0, width, height)

      if (!particleSystem) return

      // Emit particles if below count
      if (particleSystem.getCount() < particleCount) {
        const emitCount = Math.min(5, particleCount - particleSystem.getCount())
        for (let i = 0; i < emitCount; i++) {
          particleSystem.emit(
            Math.random() * width,
            Math.random() * height,
            1
          )
        }
      }

      // Apply mouse interaction if enabled and hovering
      if (interactive && isHovering) {
        particleSystem.applyForceFromPoint(
          position.x,
          position.y,
          0.5,
          150
        )
      }

      // Apply gentle drift
      particleSystem.applyGlobalForce(
        Math.sin(totalTime * 0.001) * 0.01 * speed,
        Math.cos(totalTime * 0.001) * 0.01 * speed
      )

      // Update and draw
      particleSystem.update()
      particleSystem.draw(ctx)

      // Wrap particles around edges
      particleSystem.particles.forEach((particle) => {
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0
      })
    },
    !prefersReducedMotion
  )

  return (
    <div ref={wrapperRef} className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
    </div>
  )
}
