"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { HelpCircle } from "lucide-react"

export default function F1DecisionTree() {
  const [selectedDecision, setSelectedDecision] = useState<string | null>(null)

  const decisions = [
    {
      id: "q1",
      question: "Do you have a developer available (internal or contractor)?",
      yesAnswer: "Build Agent Manager + Developer partnership (Level 4 standard path)",
      noAnswer: "Agent Manager learns Level 3.5 tools for prototyping (Level 4 alternative path)",
      color: "border-blue-500",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      id: "q2",
      question: "What's your use case complexity?",
      options: [
        { label: "Simple (answering questions from docs)", answer: "Agent Manager can prototype with Level 3.5 tools" },
        { label: "Medium (multi-system integration)", answer: "Need Agent Manager + Developer" },
        { label: "Complex (multi-agent workflows)", answer: "Need Developer, then scale to Level 5" }
      ],
      color: "border-primary",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]"
    },
    {
      id: "q3",
      question: "What's your timeline pressure?",
      options: [
        { label: "Urgent (need results in 2-3 weeks)", answer: "Must have internal iteration capability ready" },
        { label: "Normal (2-3 months acceptable)", answer: "Can spend 2-4 weeks building team capability first" },
        { label: "Long-term (6+ months)", answer: "Start with training, then execute" }
      ],
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    },
    {
      id: "q4",
      question: "What's your current pain severity?",
      options: [
        { label: "High ($50K+/year inefficiency)", answer: "Justify full Level 4 investment immediately" },
        { label: "Medium ($10-50K/year)", answer: "Start with Level 3.5 prototype, prove value, then scale" },
        { label: "Low (<$10K/year)", answer: "May not justify custom build; check existing tools first" }
      ],
      color: "border-orange-500",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Decision Framework</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            FIRST ACTION <span className="text-primary">DECISION TREE</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Answer these 4 questions to determine your path
          </p>
        </div>

        {/* Decision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decisions.map((decision, idx) => (
            <Card
              key={decision.id}
              className={`
                transition-all duration-300 cursor-pointer
                ${selectedDecision === decision.id
                  ? `scale-105 ${decision.color} ${decision.glowColor}`
                  : "border-border hover:scale-102"
                }
                animate-fade-in delay-${idx * 150 + 300} fill-backwards
              `}
              onClick={() => setSelectedDecision(selectedDecision === decision.id ? null : decision.id)}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className={`h-6 w-6 ${selectedDecision === decision.id ? 'text-primary' : 'text-foreground/60'} shrink-0`} />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{decision.question}</h3>

                    {selectedDecision === decision.id && (
                      <div className="space-y-2 animate-fade-in text-sm">
                        {decision.yesAnswer && (
                          <div className="space-y-1">
                            <p className="font-semibold text-green-500">YES:</p>
                            <p className="pl-4">{decision.yesAnswer}</p>
                          </div>
                        )}
                        {decision.noAnswer && (
                          <div className="space-y-1">
                            <p className="font-semibold text-red-500">NO:</p>
                            <p className="pl-4">{decision.noAnswer}</p>
                          </div>
                        )}
                        {decision.options && (
                          <div className="space-y-2 pt-2">
                            {decision.options.map((option, optIdx) => (
                              <div key={optIdx} className="space-y-1">
                                <p className="font-semibold text-primary">{option.label}:</p>
                                <p className="pl-4 text-foreground/80">{option.answer}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Guidance */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Next Step:</span> Click each card to explore your specific situation and determine the right path forward.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
