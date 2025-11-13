import { cn } from "@/lib/utils"

interface GrainOverlayProps {
  className?: string
  opacity?: number
}

/**
 * GrainOverlay - Adds subtle noise texture for analog warmth
 *
 * Usage:
 * <div className="relative">
 *   <GrainOverlay />
 *   <YourContent />
 * </div>
 */
export function GrainOverlay({ className, opacity = 0.5 }: GrainOverlayProps) {
  return (
    <div
      className={cn("noise-overlay absolute inset-0 pointer-events-none", className)}
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
