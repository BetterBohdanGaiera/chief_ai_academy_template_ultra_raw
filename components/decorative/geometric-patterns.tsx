import { cn } from "@/lib/utils"

interface GeometricPatternProps {
  type: "dots" | "grid" | "diagonal"
  className?: string
}

/**
 * GeometricPattern - Background patterns for atmospheric depth
 *
 * Usage:
 * <div className="relative">
 *   <GeometricPattern type="dots" className="opacity-50" />
 *   <YourContent />
 * </div>
 */
export function GeometricPattern({ type, className }: GeometricPatternProps) {
  const patternClass = {
    dots: "bg-dots-pattern",
    grid: "bg-grid-pattern",
    diagonal: "bg-diagonal-pattern",
  }[type]

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        patternClass,
        className
      )}
      aria-hidden="true"
    />
  )
}

/**
 * GradientMesh - Atmospheric gradient backgrounds
 *
 * Usage:
 * <div className="relative">
 *   <GradientMesh variant="warm" />
 *   <YourContent />
 * </div>
 */
interface GradientMeshProps {
  variant?: "default" | "warm" | "orange" | "cyan"
  className?: string
}

export function GradientMesh({ variant = "default", className }: GradientMeshProps) {
  const gradientClass = {
    default: "bg-gradient-mesh",
    warm: "bg-gradient-mesh-warm",
    orange: "bg-gradient-orange",
    cyan: "bg-gradient-cyan",
  }[variant]

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        gradientClass,
        className
      )}
      aria-hidden="true"
    />
  )
}
