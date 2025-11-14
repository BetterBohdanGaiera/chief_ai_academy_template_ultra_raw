"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Hand, Database, Globe, FileText, Code, Mail } from "lucide-react"
import { useState } from "react"

interface ToolCategory {
  id: string
  name: string
  description: string
  examples: string[]
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "data",
    name: "Data Access",
    description: "Reading and writing to databases, files, and APIs",
    examples: [
      "Query customer database",
      "Read configuration files",
      "Fetch API data",
      "Update records",
    ],
    icon: Database,
    color: "#00BBFF",
  },
  {
    id: "web",
    name: "Web Interactions",
    description: "Browsing, searching, and interacting with web services",
    examples: [
      "Search the web",
      "Scrape websites",
      "Submit forms",
      "Monitor pages",
    ],
    icon: Globe,
    color: "#10B981",
  },
  {
    id: "documents",
    name: "Document Processing",
    description: "Creating, editing, and analyzing documents",
    examples: [
      "Generate reports",
      "Parse PDFs",
      "Update spreadsheets",
      "Convert formats",
    ],
    icon: FileText,
    color: "#F59E0B",
  },
  {
    id: "code",
    name: "Code Execution",
    description: "Running scripts, calculations, and system commands",
    examples: [
      "Execute Python scripts",
      "Run calculations",
      "System commands",
      "Deploy code",
    ],
    icon: Code,
    color: "#EF4444",
  },
  {
    id: "communication",
    name: "Communication",
    description: "Sending messages and notifications",
    examples: [
      "Send emails",
      "Slack messages",
      "SMS notifications",
      "Create tickets",
    ],
    icon: Mail,
    color: "#8B5CF6",
  },
]

export function Slide3b04ToolsHands() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-accent/60">
            Component 2 of 4
          </Badge>
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 rounded-full bg-accent/20">
              <Hand className="w-12 h-12 text-accent" />
            </div>
            <h1 className="font-display text-6xl lg:text-8xl font-bold text-accent tracking-tight">
              Tools: Hands
            </h1>
          </div>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            The ability to take action in the real world
          </p>
        </div>

        {/* Main Concept */}
        <div className="text-center animate-fade-in delay-100">
          <Card className="p-8 border-2 border-accent/40 bg-accent/5 max-w-4xl mx-auto">
            <p className="font-body text-xl text-foreground leading-relaxed">
              Without tools, an AI agent can only{" "}
              <span className="font-bold text-accent">describe</span> what it
              would do. Tools give it the ability to{" "}
              <span className="font-bold text-accent">actually do it</span>.
            </p>
          </Card>
        </div>

        {/* Tool Categories Grid */}
        <div className="space-y-4 animate-slide-in-up delay-200">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6">
            Common Tool Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOL_CATEGORIES.map((tool) => {
              const Icon = tool.icon
              const isSelected = selectedTool === tool.id

              return (
                <button
                  key={tool.id}
                  onClick={() =>
                    setSelectedTool(isSelected ? null : tool.id)
                  }
                  onMouseEnter={() => setSelectedTool(tool.id)}
                  onMouseLeave={() => setSelectedTool(null)}
                  className="group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-xl"
                >
                  <Card
                    className={`p-6 border-2 transition-all duration-300 h-full ${
                      isSelected
                        ? "border-accent shadow-glow scale-105"
                        : "border-border hover:border-accent/60"
                    }`}
                    style={{
                      backgroundColor: isSelected
                        ? `${tool.color}15`
                        : `${tool.color}05`,
                    }}
                  >
                    <div className="space-y-4 text-left">
                      {/* Icon and Name */}
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-3 rounded-full transition-transform ${
                            isSelected ? "scale-110" : ""
                          }`}
                          style={{ backgroundColor: `${tool.color}20` }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: tool.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3
                            className="font-display text-lg font-bold mb-1"
                            style={{ color: tool.color }}
                          >
                            {tool.name}
                          </h3>
                          <p className="text-sm text-foreground-muted">
                            {tool.description}
                          </p>
                        </div>
                      </div>

                      {/* Examples */}
                      <div
                        className={`space-y-2 transition-all duration-300 ${
                          isSelected
                            ? "opacity-100 max-h-48"
                            : "opacity-60 max-h-0 overflow-hidden lg:max-h-48 lg:opacity-100"
                        }`}
                      >
                        <h4 className="text-xs font-display font-bold text-foreground uppercase tracking-wide">
                          Examples
                        </h4>
                        <ul className="space-y-1">
                          {tool.examples.map((example, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-foreground-muted flex items-start gap-2"
                            >
                              <span
                                className="mt-0.5"
                                style={{ color: tool.color }}
                              >
                                •
                              </span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </button>
              )
            })}
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center space-y-4 animate-fade-in delay-300">
          <div className="inline-block px-6 py-4 bg-accent/10 border-2 border-accent/40 rounded-xl max-w-4xl">
            <p className="font-body text-lg text-foreground">
              <span className="font-bold text-accent">Critical Distinction:</span>{" "}
              A chatbot with API access is not an agent. True agents use tools{" "}
              <span className="font-bold">autonomously</span> to achieve goals,
              not just when explicitly told to call an API.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
