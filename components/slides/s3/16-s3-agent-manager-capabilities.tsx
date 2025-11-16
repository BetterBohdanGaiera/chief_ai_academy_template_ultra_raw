"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { User, Zap } from "lucide-react"

export default function Slide16S3AgentManagerCapabilities() {
  const capabilities = [
    {
      category: "Documentation Systems",
      examples: [
        "Analyze scattered content to create style guides",
        "Build knowledge bases from existing documents",
        "Create SOPs from conversational process descriptions"
      ]
    },
    {
      category: "Content & Analysis",
      examples: [
        "Content quality evaluators",
        "Research synthesis across documents",
        "Quarterly planning based on historical data"
      ]
    },
    {
      category: "Simple Workflow Automation",
      examples: [
        "Build Make.com/n8n workflows in natural language",
        "Create monitoring and notification systems",
        "Automate reporting from spreadsheets"
      ]
    },
    {
      category: "Project & Knowledge Management",
      examples: [
        "Custom task tracking systems",
        "Status dashboards",
        "FAQ systems from existing documentation"
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="glow">
            <User className="w-4 h-4 mr-2 inline" />
            Level 3.5 Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            What <span className="text-primary">Agent Managers</span> Can Build Alone
          </h2>
          <p className="text-lg text-foreground/70">Using Cursor IDE or Claude Code (15 hour learning curve)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <Card
              key={idx}
              className="border-primary/20 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-syne font-semibold">{cap.category}</h3>
                </div>

                <ul className="space-y-2 text-sm text-foreground/70">
                  {cap.examples.map((example, i) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-500/40 bg-green-500/5">
            <CardContent className="pt-4">
              <p className="text-xs font-semibold text-green-500 mb-2">✓ CAPABILITY RANGE:</p>
              <ul className="space-y-1 text-xs text-foreground/70">
                <li>✓ Individual/team productivity (not enterprise-wide)</li>
                <li>✓ File-based work and documentation systems</li>
                <li>✓ Workflow automations (Make.com, n8n configurations)</li>
                <li>✓ Content generation and analysis</li>
                <li>✓ Simple to medium complexity agents</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-500/40 bg-orange-500/5">
            <CardContent className="pt-4">
              <p className="text-xs font-semibold text-orange-500 mb-2">⚠ LIMITATIONS:</p>
              <ul className="space-y-1 text-xs text-foreground/70">
                <li>• Individual/team productivity (not enterprise-wide deployment)</li>
                <li>• File-based work (limited system integration)</li>
                <li>• No production deployment to hundreds of users</li>
                <li>• Not for deep API connections or multi-agentic architectures</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Time Investment:</span> 15 hours to learn ONE interface (Cursor/Claude Code) that works with ALL tools vs 140+ hours learning specialized tools (Make.com, advanced Excel, Notion).
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
