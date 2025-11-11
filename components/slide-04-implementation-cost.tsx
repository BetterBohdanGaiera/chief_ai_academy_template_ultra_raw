import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, TrendingUp } from "lucide-react"

export function Slide04ImplementationCost() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-7xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            The Real Risk Isn't Delay—
            <br />
            It's Doing It Wrong
          </h2>
        </div>

        {/* Fork Visualization */}
        <div className="relative py-12">
          {/* Starting Point */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6 text-center">
                <p className="text-xl font-bold">Your Organization Today</p>
                <p className="text-sm text-muted-foreground mt-2">Ready to implement AI</p>
              </CardContent>
            </Card>
          </div>

          {/* Two Paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Poor Implementation Path */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-warning" />
                <h3 className="text-2xl md:text-3xl font-bold text-warning">Poor Implementation</h3>
              </div>

              <Card className="border-warning/40 bg-warning/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-lg">Creates:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-warning mt-1">•</span>
                      <p className="text-base leading-relaxed">
                        Teams with learned bad habits (copy-paste, prompt hacking)
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warning mt-1">•</span>
                      <p className="text-base leading-relaxed">Investment in wrong tools and patterns</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warning mt-1">•</span>
                      <p className="text-base leading-relaxed">
                        Built organizational resistance ("we tried AI, it didn't work")
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warning mt-1">•</span>
                      <p className="text-base leading-relaxed">Capability debt that compounds quarterly</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Systematic Implementation Path */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary">Systematic Implementation</h3>
              </div>

              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-lg">Delivers:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-base leading-relaxed">Clean foundation—no bad habits to unlearn</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-base leading-relaxed">Predictable ROI—avoid known failure modes</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-base leading-relaxed">
                        Organizational momentum—early wins build confidence
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-base leading-relaxed">
                        Sustainable scaling—what works at 10 people works at 1,000
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-8">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            The opportunity isn't about beating competitors to AI. It's about building the capability correctly
            before your organization develops resistance and bad habits.
          </p>
        </div>
      </div>
    </section>
  )
}
