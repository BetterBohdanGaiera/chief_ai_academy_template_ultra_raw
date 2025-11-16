"use client"

import { useState } from "react"
import { Brain, CheckCircle2, XCircle, RotateCcw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

/**
 * Quiz Template
 *
 * Generic template for quizzes and knowledge tests with scoring.
 * Based on the formal-quiz pattern.
 *
 * @example
 * ```tsx
 * const questions = [
 *   {
 *     id: 1,
 *     question: "What is the capital of France?",
 *     options: [
 *       { id: "a", label: "London" },
 *       { id: "b", label: "Paris" },
 *       { id: "c", label: "Berlin" },
 *       { id: "d", label: "Madrid" }
 *     ],
 *     correctAnswer: "b",
 *     explanation: "Paris is the capital and largest city of France."
 *   }
 * ]
 *
 * <QuizTemplate
 *   badge="KNOWLEDGE CHECK"
 *   title="Test Your Understanding"
 *   questions={questions}
 * />
 * ```
 */

interface QuizOption {
  id: string
  label: string
}

interface QuizQuestion {
  id: number
  question: string
  options: QuizOption[]
  correctAnswer: string
  explanation: string
}

interface QuizTemplateProps {
  badge?: string
  title: string
  subtitle?: string
  questions: QuizQuestion[]
  passingScore?: number
}

export default function QuizTemplate({
  badge = "QUIZ",
  title,
  subtitle,
  questions,
  passingScore = 0.6,
}: QuizTemplateProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())

  const handleAnswerSelect = (answerId: string) => {
    if (showExplanation) return // Don't allow changing answer after showing explanation

    setSelectedAnswer(answerId)
    setShowExplanation(true)

    if (!answeredQuestions.has(currentQuestion)) {
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]))
      if (answerId === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions(new Set())
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer
  const quizComplete = currentQuestion === questions.length - 1 && showExplanation
  const scorePercentage = (score / questions.length) * 100
  const passed = scorePercentage >= passingScore * 100

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <GeometricPattern type="dots" opacity={0.08} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-5xl w-full space-y-8">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="gradient" className="text-lg px-6 py-2">
            <Brain className="h-5 w-5 mr-2" />
            {badge}
          </Badge>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="font-syne text-xl md:text-2xl text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-manrope">
            <span className="text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-bold text-primary">
              Score: {score}/{answeredQuestions.size}
            </span>
          </div>
          <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
          <CardContent className="p-8 space-y-6">
            {/* Question */}
            <div className="space-y-3">
              <Badge variant="outline" className="text-xs">
                QUESTION {currentQuestion + 1}
              </Badge>
              <p className="font-syne text-lg md:text-xl font-medium leading-relaxed">
                {question.question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = selectedAnswer === option.id
                const isCorrectOption = option.id === question.correctAnswer
                const showCorrect = showExplanation && isCorrectOption
                const showWrong = showExplanation && isSelected && !isCorrect

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      showCorrect
                        ? "border-success bg-success/10"
                        : showWrong
                          ? "border-destructive bg-destructive/10"
                          : isSelected
                            ? "border-primary bg-primary/10"
                            : "border-foreground/20 hover:border-foreground/40 bg-white"
                    } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer hover:scale-102"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <h4 className="font-syne font-medium text-base">{option.label}</h4>
                      </div>
                      {showCorrect && (
                        <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
                      )}
                      {showWrong && <XCircle className="h-6 w-6 text-destructive shrink-0" />}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div
                className={`p-5 rounded-lg border-2 animate-fade-in ${
                  isCorrect
                    ? "bg-success/10 border-success/30"
                    : "bg-destructive/10 border-destructive/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className="font-syne font-bold text-lg mb-1">
                      {isCorrect ? "Correct!" : "Not quite"}
                    </h4>
                    <p className="text-sm leading-relaxed">{question.explanation}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={handlePreviousQuestion}
            variant="outline"
            disabled={currentQuestion === 0}
            size="lg"
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentQuestion
                    ? "bg-primary scale-125"
                    : answeredQuestions.has(index)
                      ? "bg-success"
                      : "bg-foreground/20"
                }`}
              />
            ))}
          </div>

          {quizComplete ? (
            <Button onClick={resetQuiz} variant="default" size="lg">
              <RotateCcw className="h-5 w-5 mr-2" />
              Retake Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              variant="default"
              disabled={!showExplanation || currentQuestion === questions.length - 1}
              size="lg"
            >
              Next Question
            </Button>
          )}
        </div>

        {/* Final Score */}
        {quizComplete && (
          <Card className={`border-2 animate-fade-in ${
            passed
              ? "bg-gradient-to-r from-success/10 via-success/5 to-success/10 border-success/30"
              : "bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/30"
          }`}>
            <CardContent className="p-8 text-center space-y-4">
              <h3 className={`font-bebas text-4xl ${passed ? "text-success" : "text-primary"}`}>
                {passed ? "Passed!" : "Quiz Complete!"}
              </h3>
              <p className="font-syne text-2xl font-bold">
                Your Score: {score} out of {questions.length} ({scorePercentage.toFixed(0)}%)
              </p>
              <p className="text-lg text-muted-foreground">
                {score === questions.length
                  ? "Perfect score! Excellent work!"
                  : passed
                    ? "Good job! You passed the quiz."
                    : "Review the explanations and try again."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
