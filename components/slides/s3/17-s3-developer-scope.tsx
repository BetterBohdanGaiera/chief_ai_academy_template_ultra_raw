"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Code2, Users, ArrowRight } from "lucide-react"

export default function Slide17S3DeveloperScope() {
  const developerNeeds = [
    {
      need: "Deep System Integration",
      examples: [
        "Custom API connections to HRIS, CRM, databases",
        "Real-time data fetching from business systems",
        "Two-way sync (not just read, but write to systems)"
      ]
    },
    {
      need: "Multi-Agentic Architectures",
      examples: [
        "Breaking complex workflows into specialized agents",
        "Orchestrating subprocesses to work together",
        "Example: Sales Call Analyzer (3 subprocesses)"
      ]
    },
    {
      need: "Production Deployment at Scale",
      examples: [
        "Deploying to hundreds/thousands of users",
        "Enterprise-grade reliability and security",
        "Monitoring, error handling, logging"
      ]
    },
    {
      need: "Advanced Capabilities",
      examples: [
        "Reflection strategies (AI verifying its own outputs)",
        "Multi-step reasoning with verification loops",
        "Custom tools for specialized tasks"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="gradient">
            <Code2 className="w-4 h-4 mr-2 inline" />
            Developer Scope
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            When to <span className="text-primary">Involve Developer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {developerNeeds.map((item, idx) => (
            <Card
              key={idx}
              className="border-primary/20 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-lg font-syne font-semibold text-primary">{item.need}</h3>

                <ul className="space-y-2 text-sm text-foreground/70">
                  {item.examples.map((example, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="pt-6 space-y-4">
            <h3 className="text-xl font-syne font-semibold text-primary text-center">
              The Partnership Model
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Agent Manager</h4>
                </div>
                <ul className="text-xs text-foreground/70 space-y-1">
                  <li>• Process mapping & documentation</li>
                  <li>• Context engineering (rubrics, examples)</li>
                  <li>• Validation & testing</li>
                  <li>• Iteration feedback</li>
                  <li>• Quality ownership</li>
                </ul>
              </div>

              <ArrowRight className="w-8 h-8 text-primary self-center hidden md:block" />

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Developer</h4>
                </div>
                <ul className="text-xs text-foreground/70 space-y-1">
                  <li>• Infrastructure & agent framework</li>
                  <li>• Custom tool creation</li>
                  <li>• Orchestration (multi-agentic)</li>
                  <li>• Production deployment</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Success Pattern:</span> Co-located Agent Manager + Developer enables 1-3 iteration cycles per day. Domain knowledge + technical capability = 20 iterations in 2-3 weeks to 95%+ reliability.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
