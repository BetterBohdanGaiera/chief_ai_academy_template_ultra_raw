import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Slide15bLevel4EconomicsValue() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-5xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary text-primary-foreground text-base font-bold px-4 py-2">Level 4</Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            The Value Breakdown
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Why Level 4 delivers transformation
          </p>
        </div>

        {/* Level 4 Value & Result */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-5">Level 4 Value</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-sm lg:text-base">Time Savings:</span>
                  <span className="text-sm lg:text-base">$80-150K/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-sm lg:text-base">Consistency:</span>
                  <span className="text-sm lg:text-base">$20-50K/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-sm lg:text-base">Scalability:</span>
                  <span className="text-sm lg:text-base">$50-100K/year</span>
                </div>
                <div className="pt-4 border-t border-primary/20">
                  <div className="flex justify-between text-lg lg:text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">$150-300K/year</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/60 bg-gradient-to-br from-primary/20 to-primary/5">
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <div className="text-center space-y-4">
                <p className="text-2xl font-bold text-primary">Net Result:</p>
                <p className="text-3xl lg:text-4xl font-bold text-primary">+$100K-$250K/year ✅</p>
                <div className="pt-5 border-t border-primary/20">
                  <p className="text-xl font-bold">Payback Period:</p>
                  <p className="text-2xl font-bold text-primary">1-2 months</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Level 4 Works */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-5 text-center">Why Level 4 Works - The Economics of Iteration</h3>
            <p className="text-lg lg:text-xl leading-relaxed mb-5 text-center max-w-3xl mx-auto">
              The PRIMARY Differentiator is <span className="font-bold text-primary">LOW COST OF FEEDBACK</span>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-base lg:text-lg font-semibold mb-2">Level 3:</p>
                <p className="text-sm lg:text-base text-muted-foreground">
                  1-2 iterations/month → 3-5 total → 70% usability → Abandoned
                </p>
              </div>
              <div className="text-center">
                <p className="text-base lg:text-lg font-semibold mb-2 text-primary">Level 4:</p>
                <p className="text-sm lg:text-base">10-20 iterations/day → 200+ total → 95%+ usability → Reliable</p>
              </div>
            </div>
            <div className="pt-6 border-t border-primary/20 mt-6">
              <p className="text-base lg:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                <span className="font-bold">"Real Pasta" Metaphor:</span> Real Pasta - Chef tastes → adjusts →
                tests → refines → perfection through iteration. Quick Noodles - Pour water → wait → done → no
                refinement, stuck with result. Both connect to your kitchen, but only one allows the feedback needed
                for excellence.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Insight */}
        <div className="text-center pt-4">
          <p className="text-xl md:text-2xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            Level 4's advantage isn't just "custom" - it's ITERATIVE. The ability to improve rapidly through low-cost
            feedback is what delivers transformation.
          </p>
        </div>
      </div>
    </section>
  )
}
