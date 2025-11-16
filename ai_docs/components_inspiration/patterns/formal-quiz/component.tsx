"use client"

import { useState } from "react"
import { Brain, CheckCircle2, XCircle, RotateCcw, TrendingUp, Cpu, Plug } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface QuizQuestion {
  id: number
  scenario: string
  options: {
    answer: "ML" | "Agentic" | "Existing"
    label: string
    icon: typeof TrendingUp
    color: string
  }[]
  correctAnswer: "ML" | "Agentic" | "Existing"
  explanation: string
}

export default function FormalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())

  const questions: QuizQuestion[] = [
    {
      id: 1,
      scenario:
        "Your sales team needs to forecast quarterly revenue based on 5 years of historical sales data, seasonality patterns, and market indicators.",
      options: [
        { answer: "ML", label: "Machine Learning", icon: TrendingUp, color: "#10B981" },
        { answer: "Agentic", label: "Custom Agentic AI", icon: Cpu, color: "#00BBFF" },
        { answer: "Existing", label: "Existing AI Tools", icon: Plug, color: "#F59E0B" },
      ],
      correctAnswer: "ML",
      explanation:
        "This is a classic ML use case. You have historical data with clear patterns, and the goal is predictive forecasting. ML models excel at finding patterns in time-series data to make probabilistic predictions.",
    },
    {
      id: 2,
      scenario:
        "Your customer support team needs an AI assistant that understands your company's specific product catalog, policies, and can route complex cases to the right department based on custom business rules.",
      options: [
        { answer: "ML", label: "Machine Learning", icon: TrendingUp, color: "#10B981" },
        { answer: "Agentic", label: "Custom Agentic AI", icon: Cpu, color: "#00BBFF" },
        { answer: "Existing", label: "Existing AI Tools", icon: Plug, color: "#F59E0B" },
      ],
      correctAnswer: "Agentic",
      explanation:
        "This requires deep company context integration and instruction-driven reasoning. Custom Agentic AI can embed your product catalog, policies, and routing logic while allowing rapid iteration as your products and rules evolve.",
    },
    {
      id: 3,
      scenario:
        "Your marketing team wants to improve the quality of their blog posts and social media content with grammar checking, tone suggestions, and clarity improvements.",
      options: [
        { answer: "ML", label: "Machine Learning", icon: TrendingUp, color: "#10B981" },
        { answer: "Agentic", label: "Custom Agentic AI", icon: Cpu, color: "#00BBFF" },
        { answer: "Existing", label: "Existing AI Tools", icon: Plug, color: "#F59E0B" },
      ],
      correctAnswer: "Existing",
      explanation:
        "This is a standard writing task that tools like Grammarly or Notion AI handle well. No custom business logic is needed, and these tools provide immediate value with minimal setup.",
    },
    {
      id: 4,
      scenario:
        "Your engineering team needs to automate code review for company-specific coding standards, security patterns, and architectural guidelines that are unique to your codebase.",
      options: [
        { answer: "ML", label: "Machine Learning", icon: TrendingUp, color: "#10B981" },
        { answer: "Agentic", label: "Custom Agentic AI", icon: Cpu, color: "#00BBFF" },
        { answer: "Existing", label: "Existing AI Tools", icon: Plug, color: "#F59E0B" },
      ],
      correctAnswer: "Agentic",
      explanation:
        "This requires embedding company-specific standards and architectural knowledge. Custom Agentic AI can be designed with your exact coding standards and iteratively improved as standards evolve. Generic code review tools won't understand your unique patterns.",
    },
    {
      id: 5,
      scenario:
        "Your HR team wants to predict employee churn risk based on tenure, performance reviews, compensation data, and engagement survey responses.",
      options: [
        { answer: "ML", label: "Machine Learning", icon: TrendingUp, color: "#10B981" },
        { answer: "Agentic", label: "Custom Agentic AI", icon: Cpu, color: "#00BBFF" },
        { answer: "Existing", label: "Existing AI Tools", icon: Plug, color: "#F59E0B" },
      ],
      correctAnswer: "ML",
      explanation:
        "Churn prediction is a classification problem perfect for ML. You have historical data with labeled outcomes (who left vs. stayed), and you need probabilistic risk scores. ML models can learn patterns from this historical data.",
    },
  ]

  const handleAnswerSelect = (answer: string) => {
    if (showExplanation) return // Don't allow changing answer after showing explanation

    setSelectedAnswer(answer)
    setShowExplanation(true)

    if (!answeredQuestions.has(currentQuestion)) {
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]))
      if (answer === questions[currentQuestion].correctAnswer) {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <GeometricPattern type="dots" opacity={0.08} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-5xl w-full space-y-8">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="gradient" className="text-lg px-6 py-2">
            <Brain className="h-5 w-5 mr-2" />
            QUIZ 1: ML vs Agentic Scenarios
          </Badge>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-none text-balance">
            Test Your
            <span className="block text-primary mt-2">Understanding</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Apply what you've learned to real scenarios
          </p>
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
            {/* Scenario */}
            <div className="space-y-3">
              <Badge variant="outline" className="text-xs">
                SCENARIO
              </Badge>
              <p className="font-syne text-lg md:text-xl font-medium leading-relaxed">
                {question.scenario}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = selectedAnswer === option.answer
                const isCorrectOption = option.answer === question.correctAnswer
                const showCorrect = showExplanation && isCorrectOption
                const showWrong = showExplanation && isSelected && !isCorrect

                return (
                  <button
                    key={option.answer}
                    onClick={() => handleAnswerSelect(option.answer)}
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
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: showCorrect
                            ? "#10B98120"
                            : showWrong
                              ? "#EF444420"
                              : `${option.color}20`,
                        }}
                      >
                        <option.icon
                          className="h-6 w-6"
                          style={{
                            color: showCorrect ? "#10B981" : showWrong ? "#EF4444" : option.color,
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-syne font-bold text-lg">{option.label}</h4>
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
                <div className="flex items-start gap-3 mb-3">
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
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 animate-fade-in">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="font-bebas text-4xl text-primary">Quiz Complete!</h3>
              <p className="font-syne text-2xl font-bold">
                Your Score: {score} out of {questions.length}
              </p>
              <p className="text-lg text-muted-foreground">
                {score === questions.length
                  ? "Perfect score! You've mastered the distinctions between approaches."
                  : score >= questions.length * 0.6
                    ? "Good job! You understand the key differences between approaches."
                    : "Review the explanations to strengthen your understanding."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
