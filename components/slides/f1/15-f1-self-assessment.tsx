"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"

export default function F1SelfAssessment() {
  const [ratings, setRatings] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const dimensions = [
    {
      id: "adoption",
      title: "AI Adoption Stage",
      question: "What level of AI has your organization successfully deployed in production?",
      scale: [
        "No AI beyond ChatGPT",
        "Generic SaaS tools",
        "No-code automation attempted",
        "Level 4 agent deployed",
        "Multiple L4-5 agents"
      ]
    },
    {
      id: "iteration",
      title: "Iteration Capability",
      question: "How quickly can your organization iterate on AI solutions?",
      scale: [
        "No internal capability",
        "Developers, no AI experience",
        "Can iterate in 3-5 days",
        "1-2 iterations per day",
        "1-3 iterations/day consistently"
      ]
    },
    {
      id: "documentation",
      title: "Process Documentation",
      question: "How well are your critical business processes documented?",
      scale: [
        "Mostly tacit knowledge",
        "Basic procedures",
        "Good docs, not AI-ready",
        "Structured with examples",
        "Comprehensive knowledge base"
      ]
    },
    {
      id: "executive",
      title: "Executive Understanding",
      question: "How well do executives understand AI transformation requirements?",
      scale: [
        "Think AI is magic",
        "Aware but don't understand economics",
        "Understand trap exists",
        "Understand Level 4 requirements",
        "Champion rapid iteration"
      ]
    },
    {
      id: "domain",
      title: "Domain Expert Availability",
      question: "Do you have domain experts who can serve as Agent Managers?",
      scale: [
        "No clear experts",
        "Have experts, too busy",
        "Have experts, some interest",
        "Experts with 20% time",
        "Dedicated Agent Managers"
      ]
    },
    {
      id: "developer",
      title: "Developer Capability",
      question: "Do you have developers who can build AI agents?",
      scale: [
        "No developers",
        "Developers, no AI experience",
        "1-2 developers learning AI",
        "Developers built one agent",
        "Dedicated AI Agent Developer team"
      ]
    }
  ]

  const totalScore = Object.values(ratings).reduce((sum, val) => sum + val, 0)

  const getInterpretation = (score: number) => {
    if (score <= 12) return {
      level: "Early Stage (6-12 Points)",
      color: "text-red-500",
      priorities: [
        "Executive education (complete Executive Learning Path)",
        "Identify 1-2 domain expert candidates for Agent Manager training",
        "Assess: Hire developer OR train Agent Manager on agentic development tools",
        "Start with simplest possible use case to build capability"
      ]
    }
    if (score <= 18) return {
      level: "Building Capability (13-18 Points)",
      color: "text-orange-500",
      priorities: [
        "Establish Agent Manager + Developer partnership",
        "Pick ONE use case, ruthlessly limit scope",
        "Focus on achieving 1-3 iterations/day (prove the capability)",
        "Complete one successful Level 4 deployment before scaling"
      ]
    }
    if (score <= 24) return {
      level: "Emerging Maturity (19-24 Points)",
      color: "text-primary",
      priorities: [
        "Document what worked: iteration patterns, team structure, context engineering",
        "Scale to 2-3 additional departments",
        "Formalize Agent Manager training program",
        "Build internal knowledge base of patterns and components"
      ]
    }
    return {
      level: "Mature Capability (25-30 Points)",
      color: "text-green-500",
      priorities: [
        "Scale across organization systematically",
        "Move proven Level 4 agents to Level 5 (full autonomy)",
        "Build center of excellence to support other departments",
        "Consider multi-agent orchestration for complex workflows"
      ]
    }
  }

  const setRating = (dimensionId: string, rating: number) => {
    setRatings(prev => ({ ...prev, [dimensionId]: rating }))
  }

  const handleSubmit = () => {
    if (Object.keys(ratings).length === dimensions.length) {
      setShowResults(true)
    }
  }

  const interpretation = showResults ? getInterpretation(totalScore) : null

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Interactive Assessment</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            WHERE IS YOUR <span className="text-primary">ORGANIZATION?</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Rate your organization on 6 dimensions (1-5 scale)
          </p>
        </div>

        {/* Dimensions */}
        <div className="space-y-6">
          {dimensions.map((dimension, idx) => (
            <Card
              key={dimension.id}
              className={`animate-fade-in delay-${idx * 100 + 300} fill-backwards`}
            >
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">{dimension.title}</h3>
                  <p className="text-sm text-foreground/70">{dimension.question}</p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      variant={ratings[dimension.id] === rating ? "default" : "outline"}
                      onClick={() => setRating(dimension.id, rating)}
                      className="flex-1 min-w-[60px]"
                      size="sm"
                    >
                      {rating}
                    </Button>
                  ))}
                </div>

                {ratings[dimension.id] && (
                  <p className="text-xs text-foreground/60 italic">
                    {dimension.scale[ratings[dimension.id] - 1]}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Button */}
        {!showResults && (
          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              disabled={Object.keys(ratings).length < dimensions.length}
              className="px-12 py-6 text-lg"
              variant="default"
            >
              Calculate Results
            </Button>
          </div>
        )}

        {/* Results */}
        {showResults && interpretation && (
          <Card className="border-primary bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in">
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <p className="text-sm text-foreground/60 mb-2">TOTAL SCORE</p>
                <p className="text-5xl font-bold font-bebas text-primary">{totalScore}/30</p>
                <p className={`text-2xl font-bold mt-2 ${interpretation.color}`}>
                  {interpretation.level}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <h4 className="text-lg font-bold">Priority Actions:</h4>
                <ul className="space-y-2">
                  {interpretation.priorities.map((priority, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold">{idx + 1}.</span>
                      <span>{priority}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
