"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

export default function F1Quiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What defines Level 4 (Iterative Agents)?",
      options: [
        { id: "A", text: "Using the most advanced AI models" },
        { id: "B", text: "Having a large team of AI experts" },
        { id: "C", text: "Rapid iteration capability (1-3 cycles/day, 20 total iterations)" },
        { id: "D", text: "Expensive enterprise software" }
      ],
      correct: "C",
      explanation: "Level 4 is defined by iteration speed and economics, not technology or team size."
    },
    {
      id: 2,
      question: "Your company built a no-code automation 3 months ago. Accuracy is 70%. Changes take 2 weeks via external agency. What's happening?",
      options: [
        { id: "A", text: "You're at Level 2, need to upgrade to Level 3" },
        { id: "B", text: "You're in the Level 3 trap, need to transition to Level 4" },
        { id: "C", text: "You're at Level 4, this is normal" },
        { id: "D", text: "You need better AI technology" }
      ],
      correct: "B",
      explanation: "Slow iteration (2 weeks) + stuck accuracy (70%) = classic Level 3 trap symptoms."
    },
    {
      id: 3,
      question: "According to iteration economics, how many iterations are typically needed to reach 95%+ reliability?",
      options: [
        { id: "A", text: "5 iterations" },
        { id: "B", text: "10 iterations" },
        { id: "C", text: "20 iterations" },
        { id: "D", text: "50 iterations" }
      ],
      correct: "C",
      explanation: "Starting at 60-70%, reaching 95%+ typically requires ~20 iteration cycles."
    },
    {
      id: 4,
      question: "What's the primary economic difference between Level 3 and Level 4?",
      options: [
        { id: "A", text: "Level 4 costs more money" },
        { id: "B", text: "Level 4 uses better AI models" },
        { id: "C", text: "Level 4 has fast, cheap iteration vs Level 3's slow, expensive iteration" },
        { id: "D", text: "Level 4 requires more people" }
      ],
      correct: "C",
      explanation: "The core difference is iteration economics: minutes/free vs weeks/$$$."
    },
    {
      id: 5,
      question: "You're at Level 1-2. What should you do FIRST to reach Level 4?",
      options: [
        { id: "A", text: "Buy expensive enterprise AI software" },
        { id: "B", text: "Hire 10 AI engineers" },
        { id: "C", text: "Identify one high-impact use case and assess who can iterate on it" },
        { id: "D", text: "Train everyone in the company on ChatGPT" }
      ],
      correct: "C",
      explanation: "Start with focused use case + iteration capability assessment (per transition playbook)."
    }
  ]

  const handleAnswer = (questionId: number, optionId: string) => {
    if (!showResults) {
      setAnswers(prev => ({ ...prev, [questionId]: optionId }))
    }
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true)
    }
  }

  const correctCount = questions.filter(q => answers[q.id] === q.correct).length
  const passingScore = Math.ceil(questions.length * 0.8)
  const passed = correctCount >= passingScore

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Knowledge Check</Badge>
          <h2 className="text-4xl md:text-5xl font-bebas">
            F1 <span className="text-primary">QUIZ</span>
          </h2>
          <div className="text-lg text-foreground/70 space-y-1">
            <p>Passing Score: 80% (4 out of 5 questions)</p>
            <p className="text-sm">Unlimited attempts - review content between tries</p>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((question, idx) => {
            const isAnswered = answers[question.id] !== undefined
            const isCorrect = answers[question.id] === question.correct

            return (
              <Card
                key={question.id}
                className={`
                  ${showResults && isCorrect ? 'border-green-500/40 bg-green-500/5' : ''}
                  ${showResults && !isCorrect ? 'border-red-500/40 bg-red-500/5' : ''}
                  animate-fade-in delay-${idx * 100 + 300} fill-backwards
                `}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="font-bold text-primary text-xl shrink-0">{question.id}.</div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-lg font-semibold">{question.question}</h3>

                      <div className="space-y-2">
                        {question.options.map((option) => {
                          const isSelected = answers[question.id] === option.id
                          const isCorrectOption = option.id === question.correct
                          const showCorrect = showResults && isCorrectOption
                          const showIncorrect = showResults && isSelected && !isCorrectOption

                          return (
                            <button
                              key={option.id}
                              onClick={() => handleAnswer(question.id, option.id)}
                              disabled={showResults}
                              className={`
                                w-full text-left p-3 rounded-lg border transition-all
                                ${isSelected && !showResults ? 'border-primary bg-primary/10' : 'border-border bg-muted/20'}
                                ${showCorrect ? 'border-green-500 bg-green-500/10' : ''}
                                ${showIncorrect ? 'border-red-500 bg-red-500/10' : ''}
                                ${!showResults ? 'hover:border-primary/50 cursor-pointer' : 'cursor-default'}
                                flex items-center gap-2
                              `}
                            >
                              <span className="font-semibold text-primary">{option.id}.</span>
                              <span className="flex-1">{option.text}</span>
                              {showCorrect && <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />}
                              {showIncorrect && <XCircle className="h-5 w-5 text-red-500 shrink-0" />}
                            </button>
                          )
                        })}
                      </div>

                      {showResults && (
                        <div className={`flex items-start gap-2 p-3 rounded-lg ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                          <AlertCircle className={`h-5 w-5 shrink-0 mt-0.5 ${isCorrect ? 'text-green-500' : 'text-red-500'}`} />
                          <div className="text-sm">
                            <p className="font-semibold mb-1">{isCorrect ? 'Correct!' : `Correct answer: ${question.correct}`}</p>
                            <p className="text-foreground/80">{question.explanation}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Submit / Results */}
        {!showResults ? (
          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < questions.length}
              className="px-12 py-6 text-lg"
              variant="default"
            >
              Submit Quiz
            </Button>
          </div>
        ) : (
          <Card className={`${passed ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
            <CardContent className="pt-6 text-center space-y-4">
              {passed ? (
                <>
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="text-3xl font-bold text-green-500">Passed!</h3>
                  <p className="text-lg">
                    You scored <strong>{correctCount}/{questions.length}</strong> ({Math.round((correctCount/questions.length) * 100)}%)
                  </p>
                  <p className="text-sm text-foreground/70">
                    You've successfully demonstrated understanding of the Five Levels Framework.
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="h-16 w-16 text-red-500 mx-auto" />
                  <h3 className="text-3xl font-bold text-red-500">Not Passed</h3>
                  <p className="text-lg">
                    You scored <strong>{correctCount}/{questions.length}</strong> ({Math.round((correctCount/questions.length) * 100)}%)
                  </p>
                  <p className="text-sm text-foreground/70">
                    Review the sections where you missed questions and try again.
                  </p>
                  <Button
                    onClick={() => {
                      setAnswers({})
                      setShowResults(false)
                    }}
                    className="mt-4"
                  >
                    Retake Quiz
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
