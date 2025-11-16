/**
 * S2 Slide 10: Interactive Quiz
 * Knowledge check quiz with 5 questions
 */

"use client"

import { useState } from "react"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { CheckCircle2, XCircle, ChevronRight } from 'lucide-react'

export default function S2QuizSlide() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())

  const questions = [
    {
      question: "Which of the four agent components is responsible for retrieving relevant information from documents?",
      options: [
        { id: "A", text: "LLM (Brain)" },
        { id: "B", text: "Tools (Hands)" },
        { id: "C", text: "Memory (Context)" },
        { id: "D", text: "Autonomy (Compass)" }
      ],
      correct: "C",
      explanation: "Memory/Context handles retrieval from knowledge bases, documents, and past conversations. Tools handle actions on external systems."
    },
    {
      question: "A vendor claims their chatbot is 'fully agentic' but it only answers questions from a static FAQ. Where on the agentic spectrum does this fall?",
      options: [
        { id: "A", text: "Fully Agentic (all 4 components advanced)" },
        { id: "B", text: "Semi-Agentic (2-3 components)" },
        { id: "C", text: "Minimally Agentic (1 component beyond basic LLM)" },
        { id: "D", text: "Not Agentic (just basic LLM)" }
      ],
      correct: "C",
      explanation: "Basic retrieval from static FAQ = minimal memory component only. No tools, no real autonomy, just Q&A."
    },
    {
      question: "During a vendor demo, what's the BEST question to ask to evaluate if the solution can handle YOUR specific needs?",
      options: [
        { id: "A", text: "What AI model do you use?" },
        { id: "B", text: "How much does it cost?" },
        { id: "C", text: "Can I test it with 10 of MY real scenarios to see accuracy?" },
        { id: "D", text: "How many customers do you have?" }
      ],
      correct: "C",
      explanation: "Testing with YOUR scenarios is the only way to know if it handles your edge cases and business rules."
    },
    {
      question: "Which vendor claim is the BIGGEST red flag?",
      options: [
        { id: "A", text: "Our solution handles 80% of common cases out of the box" },
        { id: "B", text: "You can customize it with your business rules" },
        { id: "C", text: "It works perfectly with zero training or configuration" },
        { id: "D", text: "We have API integrations to connect your systems" }
      ],
      correct: "C",
      explanation: "Nothing works perfectly without iteration. Claiming zero configuration needed is unrealistic and suggests the vendor doesn't understand AI limitations."
    },
    {
      question: "What's a fundamental limitation of current AI agents that executives should understand?",
      options: [
        { id: "A", text: "They can't write text as well as humans" },
        { id: "B", text: "They require iteration to reach 95%+ accuracy - no solution is perfect on day 1" },
        { id: "C", text: "They can't integrate with existing systems" },
        { id: "D", text: "They're too expensive for most companies" }
      ],
      correct: "B",
      explanation: "All AI solutions require iteration and tuning. Starting at 60-70% accuracy and reaching 95%+ through iteration is normal."
    }
  ]

  const currentQ = questions[currentQuestion]
  const isCorrect = selectedAnswer === currentQ.correct
  const canProceed = selectedAnswer !== null && showExplanation

  const handleAnswer = (optionId: string) => {
    if (showExplanation) return // Already answered

    setSelectedAnswer(optionId)
    setShowExplanation(true)

    // Track score on first answer only
    if (!answeredQuestions.has(currentQuestion)) {
      if (optionId === currentQ.correct) {
        setScore(score + 1)
      }
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]))
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const finalScore = Math.round((score / questions.length) * 100)
  const passed = finalScore >= 80

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Knowledge Check</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            S2 <span className="text-primary">Quiz</span>
          </h2>
          <div className="flex items-center justify-between text-sm text-foreground/60 max-w-md mx-auto">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}/{answeredQuestions.size}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <Card className="border-primary/20">
          <CardContent className="pt-6 space-y-6">
            <h3 className="text-xl font-semibold leading-relaxed">{currentQ.question}</h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option) => {
                const isSelected = selectedAnswer === option.id
                const isCorrectOption = option.id === currentQ.correct
                const showAsCorrect = showExplanation && isCorrectOption
                const showAsWrong = showExplanation && isSelected && !isCorrect

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    disabled={showExplanation}
                    className={`
                      w-full text-left p-4 rounded-lg border-2 transition-all duration-300
                      ${showAsCorrect ? "border-green-500 bg-green-500/10" : ""}
                      ${showAsWrong ? "border-red-500 bg-red-500/10" : ""}
                      ${!showExplanation && isSelected ? "border-primary bg-primary/5" : ""}
                      ${!showExplanation && !isSelected ? "border-border hover:border-primary/50" : ""}
                      ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground/60">{option.id})</span>
                      <span className="flex-1">{option.text}</span>
                      {showAsCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      {showAsWrong && <XCircle className="w-5 h-5 text-red-500" />}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <Card className={`${isCorrect ? "bg-green-500/5 border-green-500/20" : "bg-red-500/5 border-red-500/20"} animate-fade-in`}>
                <CardContent className="pt-4">
                  <p className={`text-sm font-semibold mb-2 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                    {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                  </p>
                  <p className="text-sm text-foreground/80">{currentQ.explanation}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-foreground/60">
            {currentQuestion === questions.length - 1 && showExplanation && (
              <span className={passed ? "text-green-500" : "text-red-500"}>
                Final Score: {finalScore}% {passed ? "(Passed ✓)" : "(Review and retry)"}
              </span>
            )}
          </div>

          {canProceed && currentQuestion < questions.length - 1 && (
            <Button onClick={handleNext}>
              Next Question
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
