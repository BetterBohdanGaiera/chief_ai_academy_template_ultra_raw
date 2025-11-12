import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, RotateCw } from "lucide-react"

export function Slide14aLevel4OverviewIteration() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-5xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Badge className="bg-primary text-primary-foreground text-lg font-bold px-4 py-2">Level 4</Badge>
            <TrendingUp className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            Iterative Agents
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold text-pretty leading-relaxed">
            What Makes It Different
          </p>
        </div>

        {/* Key Difference */}
        <Card className="border-primary/60 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-5 text-center">
              Difference from Level 3: Low Cost of Feedback Enables Continuous Improvement
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed mb-5">
              The defining characteristic of Level 4 is <span className="font-bold">NOT</span> customization alone—it's
              the ability to iterate rapidly and cheaply:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-primary/20">
              <div>
                <p className="text-base lg:text-lg font-semibold mb-2">Level 3:</p>
                <p className="text-sm lg:text-base text-muted-foreground">
                  1-2 iterations/month → 3-5 total → Stuck at 70%
                </p>
              </div>
              <div>
                <p className="text-base lg:text-lg font-semibold mb-2 text-primary">Level 4:</p>
                <p className="text-sm lg:text-base">3-5 iterations/day → 30+ total → Reaches 95%+</p>
              </div>
            </div>
            <p className="text-base lg:text-lg font-semibold text-primary text-center pt-5">
              This economic difference is what makes Level 4 transformation possible.
            </p>
          </CardContent>
        </Card>

        {/* Iteration Cycle */}
        <div>
          <h3 className="text-2xl font-bold mb-5 text-center flex items-center justify-center gap-3">
            <RotateCw className="h-7 w-7 text-primary" />
            Example Iteration Cycle
          </h3>

          {/* Iteration Visualization */}
          <div className="mb-6 flex justify-center">
            <img
              src="/generated-images/gemini-1762957968867-1.png"
              alt="Rapid iteration cycle showing developer and domain expert collaborating closely with fast feedback loops"
              className="w-full max-w-2xl h-auto rounded-xl shadow-lg"
            />
          </div>

          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-base flex-shrink-0">1.</span>
                  <p className="text-base lg:text-lg leading-relaxed">Builder implements feature (30 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-base flex-shrink-0">2.</span>
                  <p className="text-base lg:text-lg leading-relaxed">Domain expert tests with real scenarios (10 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-base flex-shrink-0">3.</span>
                  <p className="text-base lg:text-lg leading-relaxed">Expert spots problem, explains context (5 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-base flex-shrink-0">4.</span>
                  <p className="text-base lg:text-lg leading-relaxed">Builder fixes (20 minutes)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary text-base flex-shrink-0">5.</span>
                  <p className="text-base lg:text-lg leading-relaxed font-bold">Repeat 10-20 times per DAY</p>
                </li>
              </ol>
              <p className="text-lg lg:text-xl font-bold text-primary text-center pt-5 border-t border-primary/20 mt-5">
                This cycle happens in MINUTES, not WEEKS - that's the entire difference between Level 3 and Level 4.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
