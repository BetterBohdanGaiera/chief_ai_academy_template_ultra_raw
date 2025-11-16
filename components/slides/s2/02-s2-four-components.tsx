/**
 * S2 Slide 02: Four Components Framework
 * Overview of the 4 essential components: LLM, Tools, Memory, Autonomy
 */

"use client"

import { Brain, Wrench, Book, Compass } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

export default function S2FourComponentsSlide() {
  const components = [
    {
      icon: Brain,
      title: "LLM",
      subtitle: "The Brain",
      description: "Understanding and reasoning capability",
      color: "text-cyan-500",
      borderColor: "border-cyan-500/40",
      bgColor: "bg-cyan-500/5"
    },
    {
      icon: Wrench,
      title: "Tools",
      subtitle: "The Hands",
      description: "Taking actions on external systems",
      color: "text-primary",
      borderColor: "border-primary/40",
      bgColor: "bg-primary/5"
    },
    {
      icon: Book,
      title: "Memory",
      subtitle: "The Notebook",
      description: "Maintaining context and knowledge",
      color: "text-green-500",
      borderColor: "border-green-500/40",
      bgColor: "bg-green-500/5"
    },
    {
      icon: Compass,
      title: "Autonomy",
      subtitle: "The Compass",
      description: "Working toward goals independently",
      color: "text-purple-500",
      borderColor: "border-purple-500/40",
      bgColor: "bg-purple-500/5"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">The Agent Evaluation Framework</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas animate-fade-in delay-200 fill-backwards">
            Four Essential <span className="text-primary">Components</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-slide-in-up delay-400 fill-backwards">
            Missing any component significantly reduces capability
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component, idx) => {
            const Icon = component.icon

            return (
              <Card
                key={component.title}
                className={`${component.borderColor} ${component.bgColor} animate-fade-in delay-${idx * 150 + 600} fill-backwards hover:scale-102 transition-all duration-300`}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-background/50 ${component.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bebas">{component.title}</h3>
                      <p className="text-sm text-foreground/60 font-semibold">{component.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {component.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1200 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Critical Understanding:</span> True "agentic AI" requires all four components working together. Missing any one significantly limits autonomous capabilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
