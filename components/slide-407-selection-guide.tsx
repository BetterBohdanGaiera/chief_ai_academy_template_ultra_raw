"use client"

import { useState } from "react"
import { GitBranch, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface DecisionNode {
  id: string
  question: string
  type: "question" | "result"
  options?: {
    label: string
    next: string
  }[]
  result?: {
    category: string
    level: string
    roi: string
    color: string
    reason: string
    examples: string[]
  }
}

const DECISION_TREE: { [key: string]: DecisionNode } = {
  start: {
    id: "start",
    type: "question",
    question: "Does your solution need to access real-time data from external systems?",
    options: [
      { label: "Yes, needs real-time data", next: "real-time" },
      { label: "No, static knowledge is enough", next: "static-check" },
    ],
  },
  "real-time": {
    id: "real-time",
    type: "question",
    question: "Does it require complex multi-step workflows with expert judgment?",
    options: [
      { label: "Yes, expert judgment needed", next: "custom-workflows" },
      { label: "No, mostly data retrieval", next: "dynamic-chatbots" },
    ],
  },
  "static-check": {
    id: "static-check",
    type: "question",
    question: "Does your task require complex analysis or multi-step reasoning?",
    options: [
      { label: "Yes, complex reasoning", next: "custom-workflows" },
      { label: "No, simple Q&A", next: "static-chatbots" },
    ],
  },
  "static-chatbots": {
    id: "static-chatbots",
    type: "result",
    question: "",
    result: {
      category: "Static Information Chatbots",
      level: "Level 4",
      roi: "$15K - $99K/year",
      color: "#10B981",
      reason: "Perfect for making existing knowledge accessible through natural conversation.",
      examples: [
        "HR policy assistant",
        "Product documentation bot",
        "Internal wiki search",
        "FAQ automation",
      ],
    },
  },
  "dynamic-chatbots": {
    id: "dynamic-chatbots",
    type: "result",
    question: "",
    result: {
      category: "Dynamic Content Chatbots",
      level: "Level 4-5",
      roi: "$14K - $246K/year",
      color: "#00BBFF",
      reason: "Ideal for teams needing real-time data access across multiple systems.",
      examples: [
        "Customer support with CRM",
        "Sales intelligence bot",
        "Inventory assistant",
        "Real-time analytics bot",
      ],
    },
  },
  "custom-workflows": {
    id: "custom-workflows",
    type: "result",
    question: "",
    result: {
      category: "Custom Workflows & Analyzers",
      level: "Level 5",
      roi: "$63K - $158K/year",
      color: "#FF4D00",
      reason: "Best for scaling expert capabilities and automating judgment-heavy processes.",
      examples: [
        "Code review automation",
        "Contract analysis",
        "Research synthesis",
        "Multi-step approvals",
      ],
    },
  },
}

export function Slide407SelectionGuide() {
  const [currentNode, setCurrentNode] = useState<string>("start")
  const [history, setHistory] = useState<string[]>([])

  const node = DECISION_TREE[currentNode]

  const handleChoice = (nextId: string) => {
    setHistory([...history, currentNode])
    setCurrentNode(nextId)
  }

  const handleBack = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1]
      setCurrentNode(previous)
      setHistory(history.slice(0, -1))
    }
  }

  const handleReset = () => {
    setCurrentNode("start")
    setHistory([])
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="dots" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-6xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <GitBranch className="h-5 w-5 mr-2" />
            CATEGORY SELECTION GUIDE
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Which Category
            <span className="block text-primary mt-2">Should You Choose?</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Interactive decision tree to find your best fit
          </p>
        </div>

        {/* Decision Tree Flow */}
        <div className="animate-slide-in-up delay-200 fill-backwards">
          {node.type === "question" ? (
            <Card className="border-2 border-primary/40">
              <CardHeader className="bg-primary/5">
                <CardTitle className="font-syne text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  Decision Point
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-xl md:text-2xl font-syne font-bold mb-8 text-center">
                  {node.question}
                </p>

                <div className="grid gap-4 max-w-2xl mx-auto">
                  {node.options?.map((option, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="lg"
                      className="h-auto py-6 px-8 text-lg font-syne font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all group"
                      onClick={() => handleChoice(option.next)}
                    >
                      <span className="flex-1">{option.label}</span>
                      <ArrowRight className="h-5 w-5 ml-2 text-primary group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ))}
                </div>

                {history.length > 0 && (
                  <div className="flex justify-center mt-8">
                    <Button variant="ghost" onClick={handleBack}>
                      ← Go Back
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Result Card */}
              <Card className="border-2" style={{ borderColor: `${node.result?.color}60` }}>
                <CardHeader style={{ backgroundColor: `${node.result?.color}10` }}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${node.result?.color}20` }}
                      >
                        <CheckCircle2 className="h-6 w-6" style={{ color: node.result?.color }} />
                      </div>
                      <CardTitle className="font-syne text-3xl" style={{ color: node.result?.color }}>
                        {node.result?.category}
                      </CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" style={{ borderColor: node.result?.color, color: node.result?.color }}>
                        {node.result?.level}
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: node.result?.color, color: node.result?.color }}>
                        {node.result?.roi}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* Why This Category */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Why This Category?</p>
                    <p className="text-lg text-foreground/80 font-manrope leading-relaxed">
                      {node.result?.reason}
                    </p>
                  </div>

                  {/* Examples */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Common Examples:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {node.result?.examples.map((example, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-3 rounded-lg border border-border bg-foreground/5"
                        >
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: node.result?.color }}
                          />
                          <span className="text-sm font-medium">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border justify-center flex-wrap">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={history.length === 0}
                    >
                      ← Go Back
                    </Button>
                    <Button
                      variant="default"
                      onClick={handleReset}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Start Over
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps Card */}
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="font-syne text-xl text-primary">Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold mb-2">1. Validate Assumptions</p>
                      <p className="text-sm text-foreground/70">
                        Confirm your use case matches this category's strengths
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">2. Build Test Set</p>
                      <p className="text-sm text-foreground/70">
                        Create evaluation criteria before implementation
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">3. Start Small</p>
                      <p className="text-sm text-foreground/70">
                        Pilot with limited scope, prove value, then scale
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-2 animate-fade-in delay-400 fill-backwards">
          <div className={`w-3 h-3 rounded-full ${history.length >= 0 ? "bg-primary" : "bg-foreground/20"}`} />
          <div className={`w-3 h-3 rounded-full ${history.length >= 1 ? "bg-primary" : "bg-foreground/20"}`} />
          <div className={`w-3 h-3 rounded-full ${node.type === "result" ? "bg-primary" : "bg-foreground/20"}`} />
        </div>

        {/* Quick Reference */}
        {currentNode === "start" && (
          <div className="animate-fade-in delay-600 fill-backwards">
            <Card className="border-2 border-primary/30">
              <CardHeader className="bg-primary/5">
                <CardTitle className="font-syne text-xl text-primary text-center">Quick Reference Guide</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-4 h-4 rounded-full bg-success mx-auto" />
                    <p className="font-semibold text-success">Static Chatbots</p>
                    <p className="text-sm text-foreground/60">Existing knowledge + Simple Q&A</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-4 h-4 rounded-full bg-[#00BBFF] mx-auto" />
                    <p className="font-semibold text-[#00BBFF]">Dynamic Chatbots</p>
                    <p className="text-sm text-foreground/60">Real-time data + API integration</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-4 h-4 rounded-full bg-primary mx-auto" />
                    <p className="font-semibold text-primary">Custom Workflows</p>
                    <p className="text-sm text-foreground/60">Expert judgment + Complex workflows</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bottom Insight */}
        <div className="text-center animate-fade-in delay-800 fill-backwards">
          <Card className="inline-block bg-white/95 backdrop-blur-md border-2 border-primary/40 px-8 py-4">
            <p className="font-syne text-lg font-semibold text-foreground">
              <span className="text-primary">Remember:</span> Start with the simplest category that meets your needs. You can always evolve later.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
