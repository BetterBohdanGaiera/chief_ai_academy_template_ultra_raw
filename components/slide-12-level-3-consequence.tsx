import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, XCircle, Clock, TrendingDown } from "lucide-react"

export function Slide12Level3Consequence() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            When Level 3 Fails,
            <br />
            <span className="text-destructive">You Lose More Than $30K</span>
          </h2>
        </div>

        {/* Main Impact */}
        <Card className="border-destructive/40 bg-destructive/5">
          <CardContent className="p-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Organizational Scar Tissue Effect</h3>
            <p className="text-2xl text-center leading-relaxed mb-8">
              When your Level 3 project fails, something worse happens than lost money:
            </p>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-destructive">
                Your team says: "We tried that, it didn't work"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Damage */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <AlertTriangle className="h-8 w-8 text-warning" />
            The Damage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-destructive/40 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 text-destructive" />
                  <h4 className="text-xl font-bold">Time to Rebuild Trust</h4>
                </div>
                <p className="text-3xl font-bold text-destructive mb-4">12-18 months</p>
                <p className="text-lg leading-relaxed">to rebuild trust in AI initiatives</p>
              </CardContent>
            </Card>

            <Card className="border-destructive/40 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <h4 className="text-xl font-bold">Automatic Skepticism</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-lg leading-relaxed">"Remember the chatbot that didn't work?"</p>
                  <p className="text-lg leading-relaxed">"Remember the automation that gave wrong answers?"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Organizational Consequences */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Organizational Consequences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-warning/40 bg-warning/5">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed flex items-start gap-2">
                  <span className="text-warning mt-1 flex-shrink-0">•</span>
                  <span>Innovation teams blocked from proposing AI solutions</span>
                </p>
              </CardContent>
            </Card>
            <Card className="border-warning/40 bg-warning/5">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed flex items-start gap-2">
                  <span className="text-warning mt-1 flex-shrink-0">•</span>
                  <span>Budget committees reject AI investments</span>
                </p>
              </CardContent>
            </Card>
            <Card className="border-warning/40 bg-warning/5">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed flex items-start gap-2">
                  <span className="text-warning mt-1 flex-shrink-0">•</span>
                  <span>Employees refuse to adopt new AI tools</span>
                </p>
              </CardContent>
            </Card>
            <Card className="border-warning/40 bg-warning/5">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed flex items-start gap-2">
                  <span className="text-warning mt-1 flex-shrink-0">•</span>
                  <span>"We already tried AI - it doesn't work for us"</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Competitive Impact */}
        <Card className="border-destructive/60 bg-gradient-to-br from-destructive/10 to-destructive/5">
          <CardContent className="p-10">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <TrendingDown className="h-10 w-10 text-destructive" />
              <h3 className="text-3xl font-bold">Competitive Impact</h3>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed text-center">
                While you're rebuilding trust, <span className="font-bold text-destructive">competitors are implementing Level 4</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-lg font-semibold">They're gaining</p>
                  <p className="text-base text-muted-foreground">10x efficiency improvements</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">They're building</p>
                  <p className="text-base text-muted-foreground">AI-native capabilities</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">You're stuck</p>
                  <p className="text-base text-muted-foreground">Explaining why the last project failed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Insight */}
        <div className="text-center pt-4">
          <p className="text-2xl md:text-3xl font-bold text-destructive text-pretty leading-relaxed max-w-4xl mx-auto">
            This organizational resistance is MORE EXPENSIVE than the $30K you wasted.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto pt-4">
            It's not just money. It's lost time, lost opportunity, and lost competitive position.
          </p>
        </div>
      </div>
    </section>
  )
}
