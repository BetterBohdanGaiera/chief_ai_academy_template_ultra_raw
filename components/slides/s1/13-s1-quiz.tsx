"use client"

import { useState } from "react"
import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

/**
 * S1-13: Knowledge Check Quiz
 * Interactive quiz with 5 questions, passing score 80%
 */
export default function Slide13S1Quiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "When should you choose Machine Learning over Agentic AI?",
      options: [
        { id: "a", text: "When you need to automate complex workflows", correct: false },
        { id: "b", text: "When you have historical data patterns and need predictions", correct: true },
        { id: "c", text: "When you need to answer questions from documents", correct: false },
        { id: "d", text: "When you want to connect multiple systems", correct: false }
      ],
      explanation: "ML is for pattern recognition and predictions from data. Agentic AI is for reasoning, workflows, and system integration."
    },
    {
      id: 2,
      question: "According to Build vs Buy framework, when should you BUILD custom?",
      options: [
        { id: "a", text: "When many existing tools exist that solve the problem", correct: false },
        { id: "b", text: "When the use case is generic across industries", correct: false },
        { id: "c", text: "When competitive advantage depends on the process AND no good solution exists", correct: true },
        { id: "d", text: "When you have unlimited budget", correct: false }
      ],
      explanation: "Build when it's core to your business AND existing tools don't fit your specific needs."
    },
    {
      id: 3,
      question: "Which category fits: 'Answering employee questions about company policies'?",
      options: [
        { id: "a", text: "Machine Learning predictions", correct: false },
        { id: "b", text: "Category 1: Static Information Chatbots", correct: true },
        { id: "c", text: "Category 2: Dynamic Content Chatbots", correct: false },
        { id: "d", text: "Category 3: Custom Workflow Automation", correct: false }
      ],
      explanation: "This is retrieval from static documents (knowledge base), which is Category 1 RAG use case."
    },
    {
      id: 4,
      question: "What's the main advantage of context engineering for custom agents?",
      options: [
        { id: "a", text: "It's cheaper than buying software", correct: false },
        { id: "b", text: "It allows you to encode domain expertise and business rules precisely", correct: true },
        { id: "c", text: "It requires no technical knowledge", correct: false },
        { id: "d", text: "It works without any iteration", correct: false }
      ],
      explanation: "Context engineering lets you embed your specific expertise, edge cases, and validation rules that generic tools can't capture."
    },
    {
      id: 5,
      question: "Your company has 10 use cases identified. What's recommended?",
      options: [
        { id: "a", text: "Build all 10 custom agents immediately", correct: false },
        { id: "b", text: "Buy generic SaaS tools for all 10", correct: false },
        { id: "c", text: "Build 2-3 highest-impact custom agents, buy tools for the rest", correct: true },
        { id: "d", text: "Wait until you can afford to build all 10", correct: false }
      ],
      explanation: "Hybrid strategy: Build custom for competitive advantage use cases, buy for generic needs. Focus investment on highest impact."
    }
  ]

  const handleAnswer = (questionId: number, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId })
    setShowResults(false)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach(q => {
      const selectedOption = q.options.find(opt => opt.id === answers[q.id])
      if (selectedOption?.correct) correct++
    })
    return correct
  }

  const score = calculateScore()
  const percentage = Math.round((score / questions.length) * 100)
  const passed = percentage >= 80

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-dots" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex items-start justify-center px-16 py-12 overflow-y-auto">
        <div className="max-w-5xl w-full space-y-8 pb-16">

          {/* Header */}
          <div className="text-center space-y-3 sticky top-0 bg-[#0A0A0A] pb-6 z-10">
            <SlideDownEntrance delay={0.1}>
              <Badge variant="outline" className="border-orange-500/30 bg-orange-500/5 text-orange-500">
                Knowledge Check
              </Badge>
            </SlideDownEntrance>

            <FadeInEntrance delay={0.2}>
              <h2 className="font-bebas text-6xl text-white leading-tight">
                S1 Quiz <span className="text-orange-500">(Required)</span>
              </h2>
            </FadeInEntrance>

            <FadeInEntrance delay={0.3}>
              <p className="font-syne text-lg text-white/60">
                Passing Score: 80% (4 out of 5 questions)
              </p>
            </FadeInEntrance>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <FadeInEntrance key={q.id} delay={0.3 + idx * 0.05}>
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="font-bebas text-2xl text-white mb-4">
                    {q.id}. {q.question}
                  </p>

                  <div className="space-y-2 mb-4">
                    {q.options.map(option => {
                      const isSelected = answers[q.id] === option.id
                      const showCorrect = showResults && option.correct
                      const showIncorrect = showResults && isSelected && !option.correct

                      return (
                        <button
                          key={option.id}
                          onClick={() => handleAnswer(q.id, option.id)}
                          className={`
                            w-full text-left px-4 py-3 border-2 transition-all
                            ${isSelected ? "border-orange-500 bg-orange-500/10" : "border-white/10 bg-white/5"}
                            ${showCorrect ? "border-green-500 bg-green-500/10" : ""}
                            ${showIncorrect ? "border-red-500 bg-red-500/10" : ""}
                            hover:border-orange-500/50
                          `}
                        >
                          <div className="flex items-center gap-3">
                            {showResults && (
                              <>
                                {option.correct && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                {showIncorrect && <XCircle className="w-5 h-5 text-red-500" />}
                              </>
                            )}
                            <span className="font-manrope text-sm text-white/90">
                              {option.id.toUpperCase()}. {option.text}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {showResults && (
                    <div className="pt-3 border-t border-white/10 animate-fade-in">
                      <p className="font-manrope text-xs text-cyan-400 font-semibold mb-1">
                        EXPLANATION:
                      </p>
                      <p className="font-manrope text-sm text-white/80">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </FadeInEntrance>
            ))}
          </div>

          {/* Submit Button */}
          {Object.keys(answers).length === questions.length && (
            <FadeInEntrance delay={0.5}>
              <div className="text-center">
                <button
                  onClick={() => setShowResults(true)}
                  className="px-12 py-4 font-bebas text-2xl border-2 border-orange-500 bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 hover:shadow-[0_0_20px_rgba(255,77,0,0.3)] transition-all"
                >
                  Submit Answers
                </button>
              </div>
            </FadeInEntrance>
          )}

          {/* Results */}
          {showResults && (
            <FadeInEntrance delay={0.6}>
              <div className={`
                border-2 p-8
                ${passed
                  ? "border-green-500 bg-green-500/10"
                  : "border-orange-500 bg-orange-500/10"
                }
              `}>
                <div className="text-center space-y-4">
                  <p className="font-bebas text-7xl text-white">
                    {percentage}%
                  </p>
                  <p className={`font-bebas text-4xl ${passed ? "text-green-400" : "text-orange-400"}`}>
                    {passed ? "PASSED ✓" : "REVIEW CONTENT"}
                  </p>
                  <p className="font-manrope text-sm text-white/80">
                    {passed
                      ? "Excellent! You're ready to proceed to the next module."
                      : "Review the sections where you missed questions and retake when ready."
                    }
                  </p>
                  <p className="font-manrope text-xs text-white/60">
                    Score: {score} out of {questions.length} questions correct
                  </p>
                </div>
              </div>
            </FadeInEntrance>
          )}
        </div>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-13</p>
      </div>
    </div>
  )
}
