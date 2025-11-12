import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, TrendingUp } from "lucide-react"

export function Slide13bLevel3GuidanceEconomics() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-5xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            The Reality Check
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Will This Solve Everything?
          </p>
        </div>

        {/* Will This Solve Everything? */}
        <Card className="border-warning/40 bg-warning/5">
          <CardContent className="p-8">
            <p className="text-2xl font-bold mb-5">No. You'll still face:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-1" />
                <p className="text-base lg:text-lg leading-relaxed">Slow iteration cycles (weeks per change)</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-1" />
                <p className="text-base lg:text-lg leading-relaxed">Communication gaps with external teams</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-1" />
                <p className="text-base lg:text-lg leading-relaxed">High cost per iteration</p>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-1" />
                <p className="text-base lg:text-lg leading-relaxed">The fundamental economics problems of Level 3</p>
              </div>
            </div>
            <p className="text-lg lg:text-xl font-semibold pt-5 text-center">
              But it DOES increase your chances from "almost certainly fails" to "might work well enough."
            </p>
          </CardContent>
        </Card>

        {/* The Economics */}
        <Card className="border-destructive/40 bg-destructive/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-5">The Economics</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-bold text-lg flex-shrink-0">Cost:</span>
                <p className="text-lg">$35K/year (licenses, integration, maintenance)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-lg flex-shrink-0">Value:</span>
                <p className="text-lg">$5K-15K/year (better than without examples, but still low adoption)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-lg text-destructive flex-shrink-0">Result:</span>
                <p className="text-lg font-bold text-destructive">
                  -$20K to -$30K/year + organizational AI resistance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reality Check & Exception */}
        <div className="space-y-5">
          <Card className="border-border/50 bg-muted/20">
            <CardContent className="p-6">
              <p className="text-base lg:text-lg leading-relaxed">
                <span className="font-bold">Reality Check:</span> This approach helps execution quality but doesn't
                solve the iteration speed problem. Level 4 remains better economics.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base lg:text-lg leading-relaxed">
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
