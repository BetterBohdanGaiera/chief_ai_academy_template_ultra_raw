"use client"

import { useState } from "react"
import { SlideDownEntrance, SlideUpEntrance, FadeInEntrance } from "@/components/animations/slide-transitions"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle } from "lucide-react"

/**
 * S1-11: Integration Depth Check
 * Interactive assessment - does existing tool have enough depth?
 */
export default function Slide11S1IntegrationDepthCheck() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, boolean>>({})

  const questions = [
    {
      id: "interface",
      question: "Does the vendor's interface work for your users?",
      example: "E.g., If team lives in Slack, can the tool integrate there?"
    },
    {
      id: "model",
      question: "Is the vendor's model quality sufficient?",
      example: "E.g., Do you need advanced reasoning or is basic LLM OK?"
    },
    {
      id: "retrieval",
      question: "Is basic search enough, or need engineered retrieval?",
      example: "E.g., Can you rely on simple keyword search vs tagged filtering?"
    },
    {
      id: "capabilities",
      question: "Are one-shot answers enough, or need multi-step reasoning?",
      example: "E.g., Simple Q&A vs complex workflows with verification?"
    }
  ]

  const handleAnswer = (id: string, answer: boolean) => {
    setSelectedAnswers({ ...selectedAnswers, [id]: answer })
  }

  const yesCount = Object.values(selectedAnswers).filter(v => v === true).length
  const noCount = Object.values(selectedAnswers).filter(v => v === false).length
  const totalAnswered = yesCount + noCount

  const getRecommendation = () => {
    if (totalAnswered < 4) return null
    if (yesCount === 4) return { text: "Use Existing Tools", color: "text-cyan-500" }
    if (noCount >= 2) return { text: "Build Custom", color: "text-orange-500" }
    return { text: "Start with Existing, Consider Custom Later", color: "text-purple-500" }
  }

  const recommendation = getRecommendation()

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-dots" />
      </div>

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-16 py-16">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <SlideDownEntrance delay={0.1}>
            <Badge variant="outline" className="border-orange-500/30 bg-orange-500/5 text-orange-500">
              Interactive Assessment
            </Badge>
          </SlideDownEntrance>

          <FadeInEntrance delay={0.2}>
            <h2 className="font-bebas text-7xl text-white leading-tight">
              Integration <span className="text-orange-500">Depth Check</span>
            </h2>
          </FadeInEntrance>

          <FadeInEntrance delay={0.3}>
            <p className="font-syne text-lg text-white/60 max-w-3xl mx-auto">
              Click YES or NO for each question to get recommendation
            </p>
          </FadeInEntrance>
        </div>

        {/* Questions */}
        <div className="max-w-5xl w-full space-y-6 mb-8">
          {questions.map((q, idx) => (
            <FadeInEntrance key={q.id} delay={0.4 + idx * 0.1}>
              <div className="bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-colors">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <p className="font-bebas text-2xl text-white mb-2">
                      {q.question}
                    </p>
                    <p className="font-manrope text-sm text-white/50">
                      {q.example}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      className={`
                        px-6 py-3 font-bebas text-xl border-2 transition-all
                        ${selectedAnswers[q.id] === true
                          ? "border-green-500 bg-green-500/20 text-green-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                          : "border-white/20 bg-white/5 text-white/60 hover:border-green-500/50"
                        }
                      `}
                    >
                      <CheckCircle2 className="w-5 h-5 inline mr-1" />
                      YES
                    </button>
                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      className={`
                        px-6 py-3 font-bebas text-xl border-2 transition-all
                        ${selectedAnswers[q.id] === false
                          ? "border-orange-500 bg-orange-500/20 text-orange-400 shadow-[0_0_15px_rgba(255,77,0,0.3)]"
                          : "border-white/20 bg-white/5 text-white/60 hover:border-orange-500/50"
                        }
                      `}
                    >
                      <AlertCircle className="w-5 h-5 inline mr-1" />
                      NO
                    </button>
                  </div>
                </div>
              </div>
            </FadeInEntrance>
          ))}
        </div>

        {/* Recommendation */}
        {recommendation && (
          <FadeInEntrance delay={0.8}>
            <div className="max-w-4xl bg-orange-500/10 border-2 border-orange-500/40 p-8">
              <p className="font-manrope text-sm text-white/60 mb-2 text-center">
                RECOMMENDATION:
              </p>
              <p className={`font-bebas text-5xl ${recommendation.color} text-center`}>
                {recommendation.text}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-manrope text-sm text-white/80 text-center">
                  {yesCount === 4 && "All existing tool capabilities match your needs. Use vendor solutions."}
                  {noCount >= 2 && "Multiple requirements not met by existing tools. Custom build recommended for advanced control."}
                  {yesCount < 4 && noCount < 2 && "Mixed requirements. Start with existing tools, plan for custom if needs grow."}
                </p>
              </div>
            </div>
          </FadeInEntrance>
        )}
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8">
        <p className="font-mono text-xs text-white/40">S1-11</p>
      </div>
    </div>
  )
}
