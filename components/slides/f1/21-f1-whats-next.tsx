"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Users, Briefcase, Wrench, Code, ArrowRight } from "lucide-react"

export default function F1WhatsNext() {
  const paths = [
    {
      role: "Executive",
      icon: Users,
      color: "border-primary/40 bg-primary/5",
      iconColor: "text-primary",
      recommended: "F2 (Organization Structure)",
      why: "Understand the roles needed to execute Level 4",
      alternative: "Jump to real use case examples in resources"
    },
    {
      role: "AI Champion",
      icon: Briefcase,
      color: "border-blue-500/40 bg-blue-500/5",
      iconColor: "text-blue-500",
      recommended: "F2 → S1 (Choosing AI Technology)",
      why: "See your role, then learn technology decision framework",
      alternative: "Review use_cases_level_3_to_4.md for examples"
    },
    {
      role: "Agent Manager",
      icon: Wrench,
      color: "border-green-500/40 bg-green-500/5",
      iconColor: "text-green-500",
      recommended: "F2 (Organization Structure)",
      why: "Understand your critical role in the transformation",
      alternative: "S2 (Understanding Agents) to see what you'll build"
    },
    {
      role: "Developer",
      icon: Code,
      color: "border-cyan-500/40 bg-cyan-500/5",
      iconColor: "text-cyan-400",
      recommended: "F2 (Organization Structure)",
      why: "See how you partner with Agent Managers",
      alternative: "S2 (Understanding Agents) for technical patterns"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge className="bg-primary text-primary-foreground shadow-glow">
            Next Steps
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bebas">
            WHAT'S <span className="text-primary">NEXT?</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Choose your path based on your role
          </p>
        </div>

        {/* Role-Based Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paths.map((path, idx) => {
            const Icon = path.icon
            return (
              <Card
                key={idx}
                className={`${path.color} animate-fade-in delay-${idx * 150 + 300} fill-backwards`}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon className={`h-8 w-8 ${path.iconColor}`} />
                    <h3 className="text-2xl font-bold">{path.role}</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">RECOMMENDED:</p>
                      <p className="text-base font-semibold">{path.recommended}</p>
                      <p className="text-sm text-foreground/70 mt-1">{path.why}</p>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-xs font-semibold text-foreground/60 mb-1">ALTERNATIVE:</p>
                      <p className="text-sm text-foreground/80">{path.alternative}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 group"
                  >
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Resources */}
        <Card className="bg-muted/20 border-border/50 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-6 space-y-4">
            <h3 className="text-xl font-bold text-center">Additional Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold mb-1">📊 Real Examples</p>
                <p className="text-foreground/70">use_cases_level_3_to_4.md</p>
                <p className="text-xs text-foreground/60">Detailed L3 vs L4 comparisons</p>
              </div>
              <div className="text-center">
                <p className="font-semibold mb-1">💰 Economics</p>
                <p className="text-foreground/70">10 detailed ROI examples</p>
                <p className="text-xs text-foreground/60">$170K/year, 974% ROI cases</p>
              </div>
              <div className="text-center">
                <p className="font-semibold mb-1">📚 Glossary</p>
                <p className="text-foreground/70">Complete terminology reference</p>
                <p className="text-xs text-foreground/60">All key terms defined</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Message */}
        <div className="text-center space-y-4 animate-fade-in delay-1200 fill-backwards">
          <p className="text-2xl font-semibold">
            You now understand the <span className="text-primary">roadmap to AI transformation</span>.
          </p>
          <p className="text-lg text-foreground/70">
            Next: Learn how to organize your team to execute it.
          </p>
        </div>
      </div>
    </section>
  )
}
