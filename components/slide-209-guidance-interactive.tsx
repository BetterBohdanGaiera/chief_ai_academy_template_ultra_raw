"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Plus, Check, Target } from "lucide-react"

interface TestCase {
  id: number
  input: string
  expectedOutput: string
}

export function Slide209GuidanceInteractive() {
  const [testCases, setTestCases] = useState<TestCase[]>([
    {
      id: 1,
      input: "Generate email to customer about order delay",
      expectedOutput: "Empathetic, clear timeline, offers compensation",
    },
  ])
  const [newInput, setNewInput] = useState("")
  const [newExpected, setNewExpected] = useState("")

  const addTestCase = () => {
    if (newInput.trim() && newExpected.trim()) {
      setTestCases([
        ...testCases,
        {
          id: testCases.length + 1,
          input: newInput.trim(),
          expectedOutput: newExpected.trim(),
        },
      ])
      setNewInput("")
      setNewExpected("")
    }
  }

  const coverage = Math.min(100, testCases.length * 12)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Level 3 Guidance
          </Badge>
          <h1 className="font-display text-6xl lg:text-8xl font-bold text-primary tracking-tight">
            Test-Driven Approach
          </h1>
          <p className="font-body text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto">
            If you must use Level 3, build evaluation sets first
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-in-up delay-200">
          {/* Left: Test Case Builder */}
          <div className="space-y-6">
            <Card className="p-6 border-2 border-primary/40">
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                Build Your Evaluation Set
              </h2>
              <p className="text-sm text-foreground-muted mb-6">
                Define test cases before choosing a vendor. This forces you to clarify
                requirements and enables objective quality measurement.
              </p>

              {/* Add Test Case Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2">
                    Test Input
                  </label>
                  <Input
                    value={newInput}
                    onChange={(e) => setNewInput(e.target.value)}
                    placeholder="e.g., Generate email about..."
                    className="border-2 border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2">
                    Expected Output
                  </label>
                  <Input
                    value={newExpected}
                    onChange={(e) => setNewExpected(e.target.value)}
                    placeholder="e.g., Professional tone, includes..."
                    className="border-2 border-primary/30 focus:border-primary"
                  />
                </div>
                <Button
                  onClick={addTestCase}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Test Case
                </Button>
              </div>
            </Card>

            {/* Test Cases List */}
            <Card className="p-6 border-2 border-primary/20 max-h-[400px] overflow-y-auto">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Your Test Cases ({testCases.length})
              </h3>
              <div className="space-y-3">
                {testCases.map((testCase) => (
                  <div
                    key={testCase.id}
                    className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground mb-1">
                          Input:
                        </div>
                        <div className="text-sm text-foreground-muted mb-2">
                          {testCase.input}
                        </div>
                        <div className="text-sm font-semibold text-foreground mb-1">
                          Expected:
                        </div>
                        <div className="text-sm text-foreground-muted">
                          {testCase.expectedOutput}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Coverage Visualization & Guidance */}
          <div className="space-y-6">
            {/* Coverage Meter */}
            <Card className="p-8 border-2 border-primary/40 text-center space-y-4">
              <Target className="w-16 h-16 text-primary mx-auto" />
              <h3 className="font-display text-3xl font-bold text-primary">
                Coverage: {coverage}%
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-gradient-orange h-full transition-all duration-500 flex items-center justify-center text-white text-xs font-bold"
                  style={{ width: `${coverage}%` }}
                >
                  {coverage > 10 && `${coverage}%`}
                </div>
              </div>
              <p className="text-sm text-foreground-muted">
                {coverage < 50
                  ? "Add more test cases to improve coverage"
                  : coverage < 80
                    ? "Good coverage - keep building"
                    : "Excellent coverage!"}
              </p>
            </Card>

            {/* Guidance Principles */}
            <Card className="p-6 border-2 border-primary/20 space-y-4">
              <h3 className="font-display text-xl font-bold text-primary">
                Why This Matters
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">1.</span>
                  <div>
                    <div className="font-semibold text-foreground">Clarify Requirements</div>
                    <div className="text-sm text-foreground-muted">
                      Building test cases forces you to define what "good" looks like before
                      buying
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">2.</span>
                  <div>
                    <div className="font-semibold text-foreground">
                      Objective Vendor Evaluation
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Run every vendor against the same test set - no more "trust the demo"
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">3.</span>
                  <div>
                    <div className="font-semibold text-foreground">
                      Track Quality Over Time
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Measure if iterations actually improve the system or just add cost
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">4.</span>
                  <div>
                    <div className="font-semibold text-foreground">
                      Estimate Iteration Costs
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Ask vendors: "How much to improve from 60% to 90% pass rate?"
                    </div>
                  </div>
                </li>
              </ul>
            </Card>

            {/* Key Insight */}
            <div className="p-6 bg-primary/10 border-2 border-primary/40 rounded-xl">
              <p className="font-body text-base text-foreground text-center">
                <span className="font-bold text-primary">Critical:</span> Test-driven
                approach doesn't solve Level 3's iteration cost problem, but it prevents you
                from buying the wrong solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
