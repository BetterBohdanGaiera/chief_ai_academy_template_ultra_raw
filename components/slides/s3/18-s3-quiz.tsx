"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Check, X } from "lucide-react"

export default function Slide18S3Quiz() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What's the fundamental shift in how business leaders must think about management?",
      options: [
        { id: "a", text: "Replace all people with AI agents", correct: false },
        { id: "b", text: "Manage AI agents the same way you manage people", correct: false },
        { id: "c", text: "Add 'managing AI agents' as a new skill alongside managing people", correct: true },
        { id: "d", text: "Only technical people can manage AI", correct: false }
      ],
      explanation: "Modern management includes managing both people AND AI agents. It's an additional skill, not a replacement."
    },
    {
      id: 2,
      question: "What's the difference between vague context and structured context that achieves 95%+ accuracy?",
      options: [
        { id: "a", text: "Using more expensive AI models", correct: false },
        { id: "b", text: "Adding specific validation rules, edge cases, examples, and evaluation criteria", correct: true },
        { id: "c", text: "Having more developers work on it", correct: false },
        { id: "d", text: "Running it longer", correct: false }
      ],
      explanation: "Structured context documents the domain expert's tacit knowledge: rules, edge cases, good/bad examples, evaluation criteria."
    },
    {
      id: 3,
      question: "What makes agentic development tools (Cursor, Claude Code) different from ChatGPT for building automations?",
      options: [
        { id: "a", text: "They use better AI models", correct: false },
        { id: "b", text: "They cost more money", correct: false },
        { id: "c", text: "They can write, edit, and test code autonomously (multi-step workflows)", correct: true },
        { id: "d", text: "They require coding knowledge", correct: false }
      ],
      explanation: "Agentic tools can execute multi-step workflows (analyze → write → test → debug) vs ChatGPT which only generates suggestions."
    },
    {
      id: 4,
      question: "When should you use multi-agent architecture instead of a single agent?",
      options: [
        { id: "a", text: "Always - more agents are always better", correct: false },
        { id: "b", text: "When a workflow has distinct phases requiring different expertise or tools", correct: true },
        { id: "c", text: "Never - single agents are simpler", correct: false },
        { id: "d", text: "Only for very large companies", correct: false }
      ],
      explanation: "Multi-agent makes sense when workflow has clear phases (e.g., data collection → analysis → decision) each needing different capabilities."
    },
    {
      id: 5,
      question: "As a non-technical Agent Manager, what's the MOST valuable contribution you make to building AI agents?",
      options: [
        { id: "a", text: "Writing the code yourself", correct: false },
        { id: "b", text: "Documenting domain expertise, edge cases, and validating outputs for accuracy", correct: true },
        { id: "c", text: "Managing the budget", correct: false },
        { id: "d", text: "Presenting to executives", correct: false }
      ],
      explanation: "Agent Managers provide the domain expertise and validation capability that determines if the agent reaches 95%+ accuracy."
    }
  ]

  const handleAnswer = (questionId: number, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId })
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      const selectedOption = q.options.find(o => o.id === answers[q.id])
      if (selectedOption?.correct) correct++
    })
    return correct
  }

  const score = showResults ? calculateScore() : 0
  const percentage = showResults ? Math.round((score / questions.length) * 100) : 0

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="glow">Knowledge Check</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            S3: <span className="text-primary">Managing AI Quiz</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Passing Score: 80% (4 out of 5 questions)
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((q, idx) => (
            <Card
              key={q.id}
              className={showResults
                ? answers[q.id] && q.options.find(o => o.id === answers[q.id])?.correct
                  ? "border-green-500/40"
                  : "border-red-500/40"
                : "border-border"
              }
            >
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-lg font-semibold">
                  Question {idx + 1}: {q.question}
                </h3>

                <div className="space-y-2">
                  {q.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => !showResults && handleAnswer(q.id, option.id)}
                      disabled={showResults}
                      className={`w-full p-3 text-left rounded-lg border transition-all ${
                        showResults
                          ? option.correct
                            ? "border-green-500 bg-green-500/10"
                            : answers[q.id] === option.id
                            ? "border-red-500 bg-red-500/10"
                            : "border-border"
                          : answers[q.id] === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {showResults && (
                          option.correct ? (
                            <Check className="w-5 h-5 text-green-500" />
                          ) : answers[q.id] === option.id ? (
                            <X className="w-5 h-5 text-red-500" />
                          ) : null
                        )}
                        <span className="text-sm">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {showResults && (
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-foreground/70">
                      <span className="font-semibold">Explanation:</span> {q.explanation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          {!showResults ? (
            <Button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length !== questions.length}
              size="lg"
            >
              Submit Quiz
            </Button>
          ) : (
            <Card className={percentage >= 80 ? "border-green-500/40 bg-green-500/10" : "border-orange-500/40 bg-orange-500/10"}>
              <CardContent className="pt-6 text-center space-y-2">
                <h3 className="text-3xl font-bebas">
                  Your Score: {score}/{questions.length} ({percentage}%)
                </h3>
                <p className={percentage >= 80 ? "text-green-500 font-semibold" : "text-orange-500 font-semibold"}>
                  {percentage >= 80 ? "✅ Passed! Great work!" : "⚠️ Review the content and try again"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
