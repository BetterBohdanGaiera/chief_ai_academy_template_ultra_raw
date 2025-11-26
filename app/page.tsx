/**
 * Landing Page - Visualization Template
 * Clean template for building presentations and visualizations
 */

import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { GradientMesh } from '@/components/decorative/geometric-patterns'
import { Sparkles, Layers, Palette, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const modules = [
  {
    id: 'm1',
    title: 'Example Module',
    description: 'Template slides demonstrating patterns',
    icon: Layers,
    href: '/modules/m1',
    status: 'ready'
  },
  {
    id: 'm2',
    title: 'Module 2',
    description: 'Add your content here',
    icon: Palette,
    href: '/modules/m2',
    status: 'empty'
  },
  {
    id: 'm3',
    title: 'Module 3',
    description: 'Add your content here',
    icon: Zap,
    href: '/modules/m3',
    status: 'empty'
  }
]

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
              Visualization Template
            </Badge>
          </div>

          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
            PRESENTATION
            <br />
            <span className="text-primary animate-glow-pulse">TEMPLATE</span>
          </h1>

          <p className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Select a module to view slides
          </p>
        </div>

        {/* Module Selection */}
        <section className="mb-24 animate-fade-in delay-800 fill-backwards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <Link key={module.id} href={module.href}>
                  <Card className="p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bebas text-2xl">{module.title}</h3>
                        {module.status === 'empty' && (
                          <Badge variant="outline" className="text-xs">Empty</Badge>
                        )}
                        {module.status === 'ready' && (
                          <Badge variant="default" className="text-xs">Ready</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{module.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-24 pt-12 border-t border-border/50 animate-fade-in delay-1200 fill-backwards">
          <p className="text-sm text-muted-foreground">
            Keyboard shortcuts: Arrow keys (navigate) • Home/End (first/last slide)
          </p>
        </div>
      </div>
    </main>
  )
}
