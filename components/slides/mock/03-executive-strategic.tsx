/**
 * Mock Slide 3: Executive Strategic Overview
 * Demonstrates: Path-based filtering (simplified version for executive audience)
 * This slide would appear in Executive Path but not in full Skills course
 */

import { Target, TrendingUp, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function ExecutiveStrategicSlide() {
  const strategicPoints = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Align AI initiatives with business objectives for maximum ROI'
    },
    {
      icon: TrendingUp,
      title: 'Value Creation',
      description: 'Identify high-impact use cases that drive measurable outcomes'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Establish governance frameworks for responsible AI deployment'
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-8 lg:space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="glow">EXECUTIVE PATH</Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight">
            <span className="text-primary">STRATEGIC</span> OVERVIEW
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Key considerations for C-suite leaders driving AI transformation
          </p>
        </div>

        {/* Strategic Points - Simplified Single Column */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {strategicPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <Card
                key={point.title}
                className="animate-fade-in fill-backwards border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-syne text-2xl font-bold mb-3">{point.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <div className="pt-8 animate-fade-in delay-600 fill-backwards">
          <Card className="border-primary/40 bg-primary/10">
            <CardContent className="p-6 text-center">
              <p className="font-syne text-lg font-semibold text-primary">
                This slide demonstrates path filtering: simplified strategic content for executives
                vs. detailed technical implementation in full Skills course
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
