"use client"

import { useState } from "react"
import { Plug, MessageSquare, Code2, PenTool, FileText, CheckCircle2, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

type Tool = "notion" | "copilot" | "grammarly" | "chatgpt" | null

export function Slide305ExistingTools() {
  const [activeTool, setActiveTool] = useState<Tool>(null)

  const tools = {
    notion: {
      icon: FileText,
      name: "Notion AI",
      description: "AI writing and organization within Notion",
      capabilities: ["Summarize notes", "Draft content", "Translate text", "Improve writing"],
      dataAccess: "Your Notion workspace",
      color: "#000000",
    },
    copilot: {
      icon: Code2,
      name: "GitHub Copilot",
      description: "AI code completion and suggestions",
      capabilities: ["Code completion", "Function generation", "Comment to code", "Bug detection"],
      dataAccess: "Public code + your repo context",
      color: "#7C3AED",
    },
    grammarly: {
      icon: PenTool,
      name: "Grammarly",
      description: "AI writing assistant for clarity and tone",
      capabilities: ["Grammar fixes", "Tone adjustment", "Clarity suggestions", "Plagiarism check"],
      dataAccess: "Document being edited",
      color: "#15C39A",
    },
    chatgpt: {
      icon: MessageSquare,
      name: "ChatGPT Teams",
      description: "Conversational AI with file uploads",
      capabilities: ["Answer questions", "Analyze documents", "Generate content", "Code assistance"],
      dataAccess: "Files you upload manually",
      color: "#10A37F",
    },
  }

  const whenGoodEnough = [
    { icon: CheckCircle2, text: "Standard, well-understood tasks", positive: true },
    { icon: CheckCircle2, text: "Minimal customization needed", positive: true },
    { icon: CheckCircle2, text: "Quick deployment is priority", positive: true },
    { icon: CheckCircle2, text: "Low complexity workflows", positive: true },
  ]

  const whenNotEnough = [
    { icon: XCircle, text: "Company-specific processes", positive: false },
    { icon: XCircle, text: "Complex multi-step workflows", positive: false },
    { icon: XCircle, text: "Need deep context integration", positive: false },
    { icon: XCircle, text: "Require systematic iteration", positive: false },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-background via-warning/5 to-background">
      <GeometricPattern type="circles" opacity={0.08} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="outline" className="border-warning text-warning">
            <Plug className="h-4 w-4 mr-2" />
            APPROACH #3: EXISTING AI TOOLS
          </Badge>
          <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            Pre-Built Solutions
            <span className="block text-warning mt-2">Ready to Use</span>
          </h2>
          <p className="font-syne text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            When basic data access is good enough
          </p>
        </div>

        {/* Tools Showcase Grid */}
        <div className="space-y-4">
          <h3 className="font-syne text-2xl font-bold text-center">Popular AI Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(tools).map(([key, tool], index) => (
              <button
                key={key}
                className={`animate-slide-in-up fill-backwards text-left`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                onMouseEnter={() => setActiveTool(key as Tool)}
                onMouseLeave={() => setActiveTool(null)}
              >
                <Card
                  variant={activeTool === key ? "glow" : "layered"}
                  className={`transition-all duration-300 h-full ${
                    activeTool === key ? "scale-105 shadow-xl" : "hover:scale-102"
                  }`}
                  style={{
                    borderColor: activeTool === key ? tool.color : undefined,
                    borderWidth: activeTool === key ? "2px" : undefined,
                  }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${tool.color}20` }}
                    >
                      <tool.icon className="h-7 w-7" style={{ color: tool.color }} />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-lg mb-2" style={{ color: tool.color }}>
                        {tool.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                    </div>
                    {activeTool === key && (
                      <div className="space-y-3 pt-3 border-t border-foreground/10 animate-fade-in">
                        <div>
                          <p className="text-xs font-semibold text-foreground/60 mb-1.5">CAPABILITIES:</p>
                          <div className="space-y-1">
                            {tool.capabilities.slice(0, 3).map((cap, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs">
                                <div className="h-1 w-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: tool.color }} />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground/60 mb-1">DATA ACCESS:</p>
                          <p className="text-xs">{tool.dataAccess}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>

        {/* The Spectrum Visualization */}
        <div className="animate-slide-in-up delay-700 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-warning/30">
            <CardContent className="p-8">
              <h3 className="font-syne text-xl font-bold mb-6 text-center">The Data Access Spectrum</h3>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-warning/20 flex items-center justify-center mb-3">
                    <MessageSquare className="h-10 w-10 text-warning" />
                  </div>
                  <h4 className="font-syne font-bold text-base mb-1">No Data</h4>
                  <p className="text-xs text-muted-foreground">Generic ChatGPT</p>
                </div>

                <div className="flex items-center">
                  <div className="h-1 w-16 bg-gradient-to-r from-warning via-warning/60 to-warning" />
                </div>

                <div className="flex-1 text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-warning/20 flex items-center justify-center mb-3">
                    <Plug className="h-10 w-10 text-warning" />
                  </div>
                  <h4 className="font-syne font-bold text-base mb-1">Basic Access</h4>
                  <p className="text-xs text-muted-foreground">Notion AI, Copilot</p>
                </div>

                <div className="flex items-center">
                  <div className="h-1 w-16 bg-gradient-to-r from-warning to-accent" />
                </div>

                <div className="flex-1 text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                    <Plug className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="font-syne font-bold text-base mb-1">Deep Integration</h4>
                  <p className="text-xs text-muted-foreground">Custom Agentic AI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* When Good Enough / When Not Enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-900 fill-backwards">
          {/* When Good Enough */}
          <Card className="bg-success/5 border-2 border-success/30">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-syne text-xl font-bold text-success flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                When "Good Enough" Works
              </h3>
              <div className="space-y-3">
                {whenGoodEnough.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* When Not Enough */}
          <Card className="bg-accent/5 border-2 border-accent/30">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-syne text-xl font-bold text-accent flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                When You Need More
              </h3>
              <div className="space-y-3">
                {whenNotEnough.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-syne text-xl md:text-2xl font-semibold text-foreground">
              <span className="text-warning">Existing tools are powerful for standard tasks</span>—
              <span className="block mt-2 text-muted-foreground">
                but they hit a ceiling when you need deep customization or complex workflows
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
