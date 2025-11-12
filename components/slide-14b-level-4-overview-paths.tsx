"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Code, Users, Zap } from "lucide-react"

export function Slide14bLevel4OverviewPaths() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-5xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary text-primary-foreground text-base font-bold px-4 py-2">Level 4</Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            Three Ways to Achieve Level 4
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
            Choose based on your resources - all three deliver Level 4 outcomes
          </p>
        </div>

        {/* Three Organizational Paths */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="path1" className="border border-primary/40 bg-primary/5 rounded-lg px-5">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">
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

          <AccordionItem value="path2" className="border border-primary/40 bg-primary/5 rounded-lg px-5">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">
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

          <AccordionItem value="path3" className="border border-primary/40 bg-primary/5 rounded-lg px-5">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                PATH 3: Independent Domain Expert
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
              <div>
                <p className="font-semibold mb-2">Domain Expert:</p>
                <p className="text-sm text-muted-foreground mb-3">
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

        {/* Key Insight */}
        <div className="text-center pt-6">
          <p className="text-xl md:text-2xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            All three paths enable the rapid iteration that defines Level 4.
          </p>
        </div>
      </div>
    </section>
  )
}
