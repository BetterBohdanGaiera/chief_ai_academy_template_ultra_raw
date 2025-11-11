"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TrendingUp, RotateCw, Code, Users, Zap } from "lucide-react"

export function Slide14Level4Overview() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Badge className="bg-primary text-primary-foreground text-xl font-bold px-4 py-2">Level 4</Badge>
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Iterative Agents
          </h2>
          <p className="text-2xl md:text-3xl text-primary font-semibold text-pretty leading-relaxed">
            What Makes It Different
          </p>
        </div>

        {/* Key Difference */}
        <Card className="border-primary/60 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-10">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Difference from Level 3: Low Cost of Feedback Enables Continuous Improvement
            </h3>
            <p className="text-xl leading-relaxed mb-6">
              The defining characteristic of Level 4 is <span className="font-bold">NOT</span> customization alone—it's
              the ability to iterate rapidly and cheaply:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-primary/20">
              <div>
                <p className="text-lg font-semibold mb-2">Level 3:</p>
                <p className="text-base text-muted-foreground">
                  1-2 iterations/month → 3-5 total → Stuck at 70%
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2 text-primary">Level 4:</p>
                <p className="text-base">3-5 iterations/day → 30+ total → Reaches 95%+</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-primary text-center pt-6">
              This economic difference is what makes Level 4 transformation possible.
            </p>
          </CardContent>
        </Card>

        {/* Iteration Cycle */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <RotateCw className="h-8 w-8 text-primary" />
            Example Iteration Cycle
          </h3>
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-8">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-lg flex-shrink-0">1.</span>
                  <p className="text-lg leading-relaxed">Builder implements feature (30 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-lg flex-shrink-0">2.</span>
                  <p className="text-lg leading-relaxed">Domain expert tests with real scenarios (10 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-lg flex-shrink-0">3.</span>
                  <p className="text-lg leading-relaxed">Expert spots problem, explains context (5 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-lg flex-shrink-0">4.</span>
                  <p className="text-lg leading-relaxed">Builder fixes (20 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-lg flex-shrink-0">5.</span>
                  <p className="text-lg leading-relaxed font-bold">Repeat 10-20 times per DAY</p>
                </li>
              </ol>
              <p className="text-xl font-bold text-primary text-center pt-6 border-t border-primary/20 mt-6">
                This cycle happens in MINUTES, not WEEKS - that's the entire difference between Level 3 and Level 4.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Three Organizational Paths */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">
            Three Ways to Achieve Level 4 - Choose Based on Your Resources
          </h3>
          <p className="text-lg text-center text-muted-foreground mb-8 max-w-4xl mx-auto">
            All three deliver Level 4 outcomes—choose based on available skills and integration complexity needs
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="path1" className="border border-primary/40 bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  PATH 1: Developer-Led Partnership
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Developer:</p>
                    <p className="text-sm text-muted-foreground">
                      Has AI intuition, deep technical knowledge, uses Claude Code, builds agents, handles deployment
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Domain Expert:</p>
                    <p className="text-sm text-muted-foreground">
                      Provides feedback on results, validates satisfaction, confirms it works
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-primary/20">
                  <p className="text-sm">
                    <span className="font-semibold">Integration Quality:</span> High—developer creates robust
                    connections
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Best for:</span> Teams with strong developer resources
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="path2" className="border border-primary/40 bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  PATH 2: Domain Expert-Led with Developer Support
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Domain Expert:</p>
                    <p className="text-sm text-muted-foreground">
                      Has AI capability intuition, uses Cursor/Claude Code, iterates quickly, can create agents
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Developer:</p>
                    <p className="text-sm text-muted-foreground">
                      Sets up infrastructure, connects external/internal tools, deploys solutions
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-primary/20">
                  <p className="text-sm">
                    <span className="font-semibold">Integration Quality:</span> High—developer creates robust
                    integrations on demand
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Best for:</span> Domain experts who can use AI developer tools
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="path3" className="border border-primary/40 bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  PATH 3: Independent Domain Expert
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3">
                <div>
                  <p className="font-semibold mb-2">Domain Expert:</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Uses AI developer tools, configures shallow integrations (Google Drive, Notion, API keys), iterates
                    independently
                  </p>
                  <p className="font-semibold mb-2">Developer:</p>
                  <p className="text-sm text-muted-foreground">Not needed</p>
                </div>
                <div className="pt-3 border-t border-primary/20">
                  <p className="text-sm">
                    <span className="font-semibold">Integration Quality:</span> May be shallow, not always high quality
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Trade-off:</span> Faster autonomy, but limited to simpler
                    integration scenarios
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Best for:</span> Quick iteration with fewer complex system
                    dependencies
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            All three paths enable the rapid iteration that defines Level 4.
          </p>
        </div>
      </div>
    </section>
  )
}
