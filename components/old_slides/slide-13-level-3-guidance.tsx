import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckSquare, AlertCircle, TrendingUp } from "lucide-react"

export function Slide13Level3Guidance() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            If You Still Choose This Path
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
            Working with External Providers
          </p>
        </div>

        {/* Main Guidance */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold mb-6">
              If you choose to build with an agency or consultant despite the challenges, here's something that
              increases your probability of success:
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-primary">Gather Real-World Examples Upfront</h4>
                <p className="text-lg leading-relaxed mb-4">
                  Before the provider starts building, you and your domain experts should:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg leading-relaxed">
                      Collect 30-50 real examples of questions or scenarios the system will handle
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg leading-relaxed">Include typical cases AND worst-case edge cases</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg leading-relaxed">
                      Define what the correct answer/output should be for each
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg leading-relaxed">Show explicit examples of good vs bad responses</p>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-xl font-bold text-primary mb-2">Give these to your provider from day one.</p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This practice is called "test-driven development" or "evaluation sets" (evals)—but the concept is
                  simple: give real examples before building starts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What This Does */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">What This Does</h3>
            <p className="text-lg leading-relaxed">
              This forces the provider to optimize for ALL your scenarios—not just the perfect demo cases. From the
              first version, you'll get something closer to what you actually need.
            </p>
          </CardContent>
        </Card>

        {/* Will This Solve Everything? */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Will This Solve Everything?</h3>
          <Card className="border-warning/40 bg-warning/5">
            <CardContent className="p-8">
              <p className="text-2xl font-bold mb-6">No. You'll still face:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">Slow iteration cycles (weeks per change)</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">Communication gaps with external teams</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">High cost per iteration</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">The fundamental economics problems of Level 3</p>
                </div>
              </div>
              <p className="text-xl font-semibold pt-6 text-center">
                But it DOES increase your chances from "almost certainly fails" to "might work well enough."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Economics */}
        <Card className="border-destructive/40 bg-destructive/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">The Economics</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-bold text-lg">Cost:</span>
                <p className="text-lg">$35K/year (licenses, integration, maintenance)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-lg">Value:</span>
                <p className="text-lg">$5K-15K/year (better than without examples, but still low adoption)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-lg text-destructive">Result:</span>
                <p className="text-lg font-bold text-destructive">
                  -$20K to -$30K/year + organizational AI resistance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reality Check */}
        <div className="text-center space-y-6">
          <Card className="border-border/50 bg-muted/20 inline-block">
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">
                <span className="font-bold">Reality Check:</span> This approach helps execution quality but doesn't
                solve the iteration speed problem. Level 4 remains better economics.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/40 bg-primary/5 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">Exception:</span> No-code tools CAN work for very small businesses (~10
                  people) with very simple processes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
