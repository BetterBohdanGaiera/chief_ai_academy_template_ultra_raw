/**
 * Landing Page - Multi-Course Learning Platform
 * Displays course selector and path navigator for choosing learning experience
 */

import { CourseSelector } from '@/components/course-selector'
import { PathNavigator } from '@/components/path-navigator'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { GradientMesh } from '@/components/decorative/geometric-patterns'
import { Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function LandingPage() {
  return (
    <main className="min-h-screen relative">
      {/* Atmospheric Background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="dots" className="opacity-20" />
      <GrainOverlay opacity={0.3} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Hero Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="flex justify-center animate-slide-in-down">
            <Badge variant="glow" className="transform -rotate-1">
              <Sparkles className="h-5 w-5 mr-2" aria-hidden="true" />
              Chief AI Academy
            </Badge>
          </div>

          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
            AI TRANSFORMATION
            <br />
            <span className="text-primary animate-glow-pulse">LEARNING PLATFORM</span>
          </h1>

          <p className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Choose your course or follow a role-based learning path
          </p>

          {/* Phase 1 Notice */}
          <div className="animate-fade-in delay-600 fill-backwards">
            <p className="text-sm md:text-base text-muted-foreground/60 max-w-2xl mx-auto">
              <span className="font-semibold text-primary">Phase 1: Infrastructure Demo</span>
              {' • '}
              Multi-course architecture with mock slides demonstrating navigation and path filtering
            </p>
          </div>
        </div>

        {/* Course Selection Section */}
        <section className="mb-24 animate-fade-in delay-800 fill-backwards">
          <CourseSelector />
        </section>

        {/* Path Navigation Section */}
        <section className="animate-fade-in delay-1000 fill-backwards">
          <PathNavigator />
        </section>

        {/* Footer */}
        <div className="text-center mt-24 pt-12 border-t border-border/50 animate-fade-in delay-1200 fill-backwards">
          <p className="text-sm text-muted-foreground">
            Keyboard shortcuts: Arrow keys (navigate) • P (presenter mode) • Home/End (first/last slide)
          </p>
        </div>
      </div>
    </main>
  )
}
