"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle2, XCircle, AlertTriangle, Brain, Hand, BookOpen, Compass } from "lucide-react"
import { useState } from "react"

interface EvaluationCriteria {
  id: string
  component: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  questions: Array<{
    question: string
    greenFlag: string
    redFlag: string
  }>
}

const EVALUATION_CRITERIA: EvaluationCriteria[] = [
  {
    id: "llm",
    component: "LLM (Brain)",
    icon: Brain,
    color: "#FF4D00",
    questions: [
      {
        question: "Can it understand complex, ambiguous instructions?",
        greenFlag: "Handles nuanced requests without extensive prompt engineering",
        redFlag: "Requires exact phrasing or fails on edge cases",
      },
      {
        question: "Does it reason about your specific domain?",
        greenFlag: "Demonstrates understanding of domain-specific context",
        redFlag: "Generic responses that miss business context",
      },
    ],
  },
  {
    id: "tools",
    component: "Tools (Hands)",
    icon: Hand,
    color: "#00BBFF",
    questions: [
      {
        question: "What actions can it actually take?",
        greenFlag: "Clear list of integrations and APIs it can use autonomously",
        redFlag: "Vague claims about 'connecting to your systems'",
      },
      {
        question: "Can you add custom tools for your use case?",
        greenFlag: "Extensible architecture, documented tool integration",
        redFlag: "Fixed set of tools, vendor lock-in",
      },
    ],
  },
  {
    id: "memory",
    component: "Memory (Notebook)",
    icon: BookOpen,
    color: "#10B981",
    questions: [
      {
        question: "Does it remember context across sessions?",
        greenFlag: "Persistent memory, recalls previous interactions",
        redFlag: "Every conversation starts from scratch",
      },
      {
        question: "Can it learn from your specific data?",
        greenFlag: "Ingests and retrieves your documents and history",
        redFlag: "Only knows what's in its pre-training",
      },
    ],
  },
  {
    id: "autonomy",
    component: "Autonomy (Compass)",
    icon: Compass,
    color: "#F59E0B",
    questions: [
      {
        question: "Can it break down complex goals independently?",
        greenFlag: "Takes high-level objectives and plans multi-step execution",
        redFlag: "Needs step-by-step instructions for everything",
      },
      {
        question: "Does it self-correct when things go wrong?",
        greenFlag: "Detects failures and adapts approach without human intervention",
        redFlag: "Fails silently or requires constant monitoring",
      },
    ],
  },
]

const CRITICAL_QUESTIONS = [
  {
    question: "How fast can we iterate?",
    why: "The #1 predictor of success. If iterations take months, you're stuck at Level 3.",
    greenFlag: "Days to weeks, controlled by your team",
    redFlag: "Months, vendor-dependent roadmap",
  },
  {
    question: "Who owns the improvement process?",
    why: "If the vendor owns iterations, you have no control over quality or cost.",
    greenFlag: "Your team can iterate independently",
    redFlag: "All changes require vendor engagement",
  },
  {
    question: "What's the per-iteration cost?",
    why: "Level 3 vendors charge $25K+ per iteration. Level 4 costs $2K or less.",
    greenFlag: "Low marginal cost per improvement",
    redFlag: "High fixed costs for each change",
  },
]

export function Slide3b07VendorEvaluation() {
  const [checkedComponents, setCheckedComponents] = useState<Set<string>>(
    new Set()
  )

  const toggleComponent = (id: string) => {
    setCheckedComponents((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const allComponentsChecked = checkedComponents.size === EVALUATION_CRITERIA.length

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Strategic Evaluation Framework
          </Badge>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary tracking-tight">
            Vendor Evaluation
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            Protect yourself from the "AI Agent" hype with these questions
          </p>
        </div>

        {/* Component Checklist */}
        <div className="animate-slide-in-up delay-200">
          <Card className="p-8 border-2 border-primary/40">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              1. Verify All Four Components Are Present
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EVALUATION_CRITERIA.map((criteria) => {
                const Icon = criteria.icon
                const isChecked = checkedComponents.has(criteria.id)

                return (
                  <button
                    key={criteria.id}
                    onClick={() => toggleComponent(criteria.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      isChecked
                        ? "border-success/60 bg-success/10"
                        : "border-border hover:border-foreground-muted/60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`text-2xl transition-all ${
                          isChecked ? "text-success scale-110" : "text-foreground-muted"
                        }`}
                      >
                        {isChecked ? "✓" : "◯"}
                      </div>
                      <div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${criteria.color}20` }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: criteria.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {criteria.component}
                        </h3>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {allComponentsChecked && (
              <div className="mt-6 p-4 bg-success/10 border-2 border-success/40 rounded-lg animate-fade-in">
                <p className="text-center text-success font-semibold">
                  ✓ All four components verified! Now check iteration capability...
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Detailed Questions Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in delay-300">
          {/* Component-Specific Questions */}
          <Card className="p-8 border-2 border-primary/40">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              2. Ask Component-Specific Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {EVALUATION_CRITERIA.map((criteria) => {
                const Icon = criteria.icon
                return (
                  <AccordionItem
                    key={criteria.id}
                    value={criteria.id}
                    className="border-2 border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Icon
                          className="w-5 h-5"
                          style={{ color: criteria.color }}
                        />
                        <span className="font-display font-bold">
                          {criteria.component}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      {criteria.questions.map((q, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="font-semibold text-sm text-foreground">
                            {q.question}
                          </p>
                          <div className="space-y-1 text-xs">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-foreground-muted">
                                <span className="font-bold text-success">Green flag:</span>{" "}
                                {q.greenFlag}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                              <span className="text-foreground-muted">
                                <span className="font-bold text-destructive">Red flag:</span>{" "}
                                {q.redFlag}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </Card>

          {/* Critical Questions */}
          <Card className="p-8 border-2 border-warning/60 bg-warning/5">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-warning" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                3. Critical: Iteration Capability
              </h2>
            </div>
            <div className="space-y-6">
              {CRITICAL_QUESTIONS.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-background rounded-lg border-2 border-warning/30"
                >
                  <h3 className="font-display text-base font-bold text-foreground mb-2">
                    {q.question}
                  </h3>
                  <p className="text-sm text-foreground-muted mb-3 italic">
                    Why it matters: {q.why}
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">
                        <span className="font-bold text-success">Green:</span>{" "}
                        {q.greenFlag}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">
                        <span className="font-bold text-destructive">Red:</span>{" "}
                        {q.redFlag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Takeaway */}
        <div className="text-center space-y-4 animate-fade-in delay-400">
          <div className="inline-block px-8 py-6 bg-primary/10 border-2 border-primary/40 rounded-xl max-w-5xl">
            <p className="font-body text-xl text-foreground leading-relaxed">
              <span className="font-bold text-primary">Protection Framework:</span>{" "}
              This knowledge protects you from the Level 3 trap. If a vendor can't
              clearly demonstrate all four components{" "}
              <span className="font-bold">plus rapid iteration capability</span>,
              walk away — you're looking at expensive vendor lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
