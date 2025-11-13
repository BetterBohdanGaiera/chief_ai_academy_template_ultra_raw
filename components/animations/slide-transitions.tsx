"use client"

import { cn } from "@/lib/utils"

interface SlideEntranceProps {
  children: React.ReactNode
  className?: string
}

/**
 * Slide entrance animations for consistent page transitions
 */

export function FadeInEntrance({ children, className }: SlideEntranceProps) {
  return (
    <div className={cn("animate-fade-in", className)}>
      {children}
    </div>
  )
}

export function SlideUpEntrance({ children, className }: SlideEntranceProps) {
  return (
    <div className={cn("animate-slide-in-up", className)}>
      {children}
    </div>
  )
}

export function SlideDownEntrance({ children, className }: SlideEntranceProps) {
  return (
    <div className={cn("animate-slide-in-down", className)}>
      {children}
    </div>
  )
}

export function ScaleInEntrance({ children, className }: SlideEntranceProps) {
  return (
    <div className={cn("animate-scale-in", className)}>
      {children}
    </div>
  )
}

export function RotateInEntrance({ children, className }: SlideEntranceProps) {
  return (
    <div className={cn("animate-rotate-in", className)}>
      {children}
    </div>
  )
}

/**
 * Orchestrated entrance - combines multiple animations with delays
 *
 * Usage:
 * <OrchestratedEntrance>
 *   <Badge className="hero-badge">...</Badge>
 *   <h1 className="hero-title">...</h1>
 *   <p className="hero-subtitle">...</p>
 * </OrchestratedEntrance>
 */
export function OrchestratedEntrance({ children, className }: SlideEntranceProps) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}
