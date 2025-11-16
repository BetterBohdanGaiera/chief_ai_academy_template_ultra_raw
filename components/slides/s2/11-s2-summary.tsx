/**
 * S2 Slide 11: Summary
 * Key takeaways from Understanding AI Agents module
 */

import { Brain, Wrench, Book, Compass, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'

export default function S2SummarySlide() {
  const components = [
    { icon: Brain, title: "LLM", subtitle: "The Brain", color: "text-cyan-500" },
    { icon: Wrench, title: "Tools", subtitle: "The Hands", color: "text-primary" },
    { icon: Book, title: "Memory", subtitle: "The Notebook", color: "text-green-500" },
    { icon: Compass, title: "Autonomy", subtitle: "The Compass", color: "text-purple-500" }
  ]

  const keyInsights = [
    {
      label: "The Test",
      text: "True \"agentic AI\" means autonomous actions (not suggestions), system integration (not just text), persistent context (not one-off), and rapid iteration (path to reliability)."
    },
    {
      label: "The Spectrum",
      text: "Solutions range from Level 1 (raw LLM chat) to Level 5 (multi-agent orchestration). Level 4 is the sweet spot: all 4 components + rapid iteration."
    },
    {
      label: "The Trap",
      text: "Level 3 pre-built platforms with slow iteration (1/week) mean 20 iterations takes 5 months → projects abandoned at 65-75% quality."
    },
    {
      label: "The Path",
      text: "Level 4 custom agents with rapid iteration (1-3/day) mean 20 iterations in 2-3 weeks → 95%+ reliability is achievable."
    }
  ]

  const nextSteps = [
    "Evaluate current or planned AI solutions using the 4-component framework",
    "Ask vendors the strategic questions from this module",
    "Identify red flags (slow iteration, shallow integration, missing components)",
    "Plan for Level 4 capabilities: Agent Manager + Developer partnership"
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background */}
      <GeometricPattern type="dots" className="opacity-20" />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Module Complete</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            S2 <span className="text-primary">Summary</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Understanding AI Agents - Key Takeaways
          </p>
        </div>

        {/* Four Components Reminder */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bebas text-center mb-6">Four Essential Components</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {components.map((component, idx) => {
                const Icon = component.icon
                return (
                  <div key={idx} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="flex justify-center">
                      <div className="p-3 rounded-xl bg-background/50">
                        <Icon className={`w-8 h-8 ${component.color}`} />
                      </div>
                    </div>
                    <div>
                      <p className="font-bebas text-lg">{component.title}</p>
                      <p className="text-xs text-foreground/60">{component.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-center text-sm text-foreground/70 mt-6 italic">
              Missing any component significantly reduces autonomous capability
            </p>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyInsights.map((insight, idx) => (
            <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${(idx + 4) * 100}ms` }}>
              <CardContent className="pt-4 space-y-2">
                <p className="text-xs font-semibold text-primary">{insight.label.toUpperCase()}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{insight.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Steps */}
        <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="pt-6 space-y-4">
            <h3 className="text-xl font-bebas flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-primary" />
              Your Next Steps
            </h3>
            <ul className="space-y-2">
              {nextSteps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-foreground/80">
                  <span className="text-primary font-semibold">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* What's Next Module */}
        <Card className="bg-background/50 border-border">
          <CardContent className="pt-4 text-center">
            <p className="text-sm text-foreground/70">
              <span className="font-semibold text-foreground">Continue to S3: Managing AI</span>
              <br />
              Learn context engineering methodology and how to build agents with all four components
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
