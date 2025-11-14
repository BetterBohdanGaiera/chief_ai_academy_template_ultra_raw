import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, TrendingUp, Clock, DollarSign } from "lucide-react"

export function Slide11Level3Why() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            The Root Cause:
            <br />
            <span className="text-warning">SLOW ITERATION SPEED</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
            It's not the tools. It's the ITERATION ECONOMICS.
          </p>
        </div>

        {/* Iteration Speed Visualization */}
        <div className="flex justify-center">
          <img
            src="/generated-images/gemini-1762957945148-1.png"
            alt="Two clocks showing contrast between slow Level 3 iteration (tangled gears) and fast Level 4 iteration (smooth flowing gears)"
            className="w-full max-w-5xl h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Why Level 3 is a POC Trap */}
        <Card className="border-warning/40 bg-warning/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Why Level 3 Becomes a POC Trap</h3>
            <p className="text-lg leading-relaxed">
              Level 3 tools work for simple demonstrations but fail when facing real-world complexity because they can't
              support the rapid iteration needed to handle edge cases and nuanced requirements.
            </p>
          </CardContent>
        </Card>

        {/* The Deeper Problem */}
        <Card className="border-border/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">The Deeper Problem</h3>
            <p className="text-xl leading-relaxed mb-4">
              Domain expertise is <span className="font-bold text-primary">HARD to extract</span> into documents. You
              can't "just write it down" upfront.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-lg font-semibold">How Expertise Actually Transfers:</p>
              <ol className="space-y-3 pl-6">
                <li className="text-lg leading-relaxed">1. Build a prototype</li>
                <li className="text-lg leading-relaxed">2. See good results → Validate what works</li>
                <li className="text-lg leading-relaxed">3. See bad results → Extract the hidden knowledge</li>
                <li className="text-lg leading-relaxed">4. Communicate WHY that result was bad</li>
                <li className="text-lg leading-relaxed">5. Repeat</li>
              </ol>
              <p className="text-xl font-bold text-primary pt-4">
                Each failure reveals domain knowledge you didn't know you had.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Critical Difference */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">The Critical Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Level 3 Iteration */}
            <Card className="border-destructive/40 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-warning text-warning-foreground text-xl font-bold px-4 py-2">Level 3</Badge>
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <h4 className="text-2xl font-bold mb-6">Iteration Cycle</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Feedback cycle</p>
                      <p className="text-base text-muted-foreground">
                        1-2 iterations per <span className="font-bold text-destructive">MONTH</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Each iteration costs</p>
                      <p className="text-base text-muted-foreground">
                        WEEKS of time + money in contractor fees
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Communication</p>
                      <p className="text-base text-muted-foreground">
                        Goes through external agency (context gets lost)
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-destructive/20">
                    <p className="text-xl font-bold text-destructive">Result:</p>
                    <p className="text-lg">3-5 total iterations → Stuck at 70% usability → Abandoned</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Level 4 Iteration */}
            <Card className="border-primary/40 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-primary text-primary-foreground text-xl font-bold px-4 py-2">Level 4</Badge>
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-6">Iteration Cycle</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Feedback cycle</p>
                      <p className="text-base text-muted-foreground">
                        3-5 iterations per <span className="font-bold text-primary">DAY</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Each iteration costs</p>
                      <p className="text-base text-muted-foreground">
                        MINUTES of time (builder can iterate directly)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Communication</p>
                      <p className="text-base text-muted-foreground">Domain expert and builder co-located (no context loss)</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-xl font-bold text-primary">Result:</p>
                    <p className="text-lg">30+ total iterations → Grows to 95%+ usability → Reliable</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            Fast feedback loops are non-negotiable for quality automation
          </p>
        </div>
      </div>
    </section>
  )
}
