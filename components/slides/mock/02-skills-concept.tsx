"use client"

/**
 * Mock Slide 2: Skills Concept
 * Demonstrates: 2-column layout, AI-generated image, interactive elements, content patterns
 */

import { useState } from 'react'
import { Lightbulb, TrendingUp, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SkillsConceptSlide() {
  const [revealed, setRevealed] = useState(false)

  const skills = [
    { icon: Lightbulb, title: 'Choosing AI Technology', description: 'Strategic decision-making frameworks' },
    { icon: Users, title: 'Understanding Agents', description: 'AI agent architecture and capabilities' },
    { icon: TrendingUp, title: 'Managing AI', description: 'Operational excellence and governance' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-7xl w-full space-y-8 lg:space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="gradient">SKILLS</Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight">
            BUILD <span className="text-primary">CRITICAL</span> SKILLS
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Master the essential competencies for AI transformation success
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Content */}
          <div className="space-y-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.title}
                  className="animate-fade-in fill-backwards hover:border-primary/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-syne text-xl font-bold mb-2">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Interactive Reveal */}
            <div className="pt-4">
              <Button
                variant={revealed ? "glow" : "outline"}
                onClick={() => setRevealed(!revealed)}
                className="w-full transition-all duration-300"
              >
                {revealed ? 'Hide Details' : 'Show Full Curriculum'}
              </Button>
              {revealed && (
                <Card className="mt-4 border-primary/20 bg-primary/5 animate-scale-in">
                  <CardContent className="p-6">
                    <p className="text-sm text-foreground/80">
                      This mock slide demonstrates interactive elements, staggered animations, and 2-column layouts.
                      In the full system, this would show detailed module breakdowns.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Right: Image Placeholder (in real implementation, would be AI-generated image) */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center animate-fade-in delay-400 fill-backwards">
              <div className="text-center space-y-4 p-8">
                <div className="inline-block p-4 rounded-full bg-primary/10">
                  <Lightbulb className="h-12 w-12 text-primary" />
                </div>
                <p className="font-syne text-lg text-muted-foreground">
                  AI-Generated Image<br />Placeholder
                </p>
                <p className="text-sm text-muted-foreground/60 max-w-sm">
                  In production: concept-ai template with skills illustration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
