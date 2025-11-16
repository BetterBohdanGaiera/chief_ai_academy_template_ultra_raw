"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Box, Network } from "lucide-react"

export default function Slide14S3MultiAgenticIntro() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="gradient">Scaling Complexity</Badge>
          <h2 className="text-4xl md:text-6xl font-bebas">
            <span className="text-primary">Multi-Agentic</span> Systems
          </h2>
          <p className="text-xl text-foreground/70">When to break complex workflows into specialized agents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-muted/20 rounded-xl">
                  <Box className="w-8 h-8 text-foreground/60" />
                </div>
                <h3 className="text-xl font-display">Single-Agent Solutions</h3>
              </div>

              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-foreground/40">•</span>
                  <span>One AI agent handles complete task</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/40">•</span>
                  <span>Unified context and workflow</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/40">•</span>
                  <span>Examples: HR Q&A, IT Support, Product Knowledge</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-xs font-semibold text-foreground/60 mb-2">WHEN TO USE:</p>
                <ul className="space-y-1 text-xs text-foreground/70">
                  <li>✓ Straightforward process (Q&A, lookup, single evaluation)</li>
                  <li>✓ One type of work (all reasoning OR all data retrieval)</li>
                  <li>✓ Unified context</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display">Multi-Agentic Solutions</h3>
              </div>

              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Complex process broken into specialized sub-processes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Each subprocess has distinct requirements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Sub-processes work sequentially or in parallel</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-primary/20">
                <p className="text-xs font-semibold text-primary mb-2">WHEN TO BREAK DOWN:</p>
                <ul className="space-y-1 text-xs text-foreground/80">
                  <li>✓ Distinct phases require different tools</li>
                  <li>✓ Different types of context needed at each stage</li>
                  <li>✓ Want to reuse sub-processes across solutions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Key Principle:</span> Complexity should match the problem - don't over-engineer. We're not focused on complex orchestration, we're showing how to think about process breakdown.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
