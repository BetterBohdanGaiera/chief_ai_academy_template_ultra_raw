import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X, CheckCircle, TrendingDown, TrendingUp } from "lucide-react"

export function Slide03Execution() {
  const useCases = [
    {
      name: "AI Chatbot for Support",
      poor: {
        adoption: "5% adoption",
        perception: "Seen as annoying",
        result: "Team ignores it",
      },
      excellent: {
        adoption: "95% adoption",
        impact: "70% fewer support tickets",
        result: "Trusted resource",
      },
    },
    {
      name: "AI Code Assistant",
      poor: {
        adoption: "10% usage",
        perception: "Copy-paste errors",
        result: "Developers skeptical",
      },
      excellent: {
        adoption: "80% active daily use",
        impact: "40% faster delivery",
        result: "Quality improves",
      },
    },
    {
      name: "Document Automation",
      poor: {
        adoption: "Saves 10 min/week",
        perception: "Templates only",
        result: "Limited use cases",
      },
      excellent: {
        adoption: "Saves 15 hrs/week per person",
        impact: "End-to-end workflow",
        result: "Company-wide adoption",
      },
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-7xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            It's Not the Use Case—It's the Execution
          </h2>
          <p className="text-2xl md:text-3xl text-primary font-semibold text-pretty leading-relaxed">
            Same Automation, Wildly Different ROI
          </p>
        </div>

        {/* Visual Comparison Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="text-center space-y-4">
            <img
              src="/generated-images/gemini-1762957079375-1.png"
              alt="Tangled, chaotic workflow with broken connections representing poor execution"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <p className="text-sm font-semibold text-destructive uppercase tracking-wide">
              Poor Execution
            </p>
          </div>
          <div className="text-center space-y-4">
            <img
              src="/generated-images/gemini-1762957087205-1.png"
              alt="Smooth, flowing workflow with organized connections representing excellent execution"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Excellent Execution
            </p>
          </div>
        </div>

        {/* Comparisons */}
        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Poor Execution */}
              <Card className="border-destructive/40 bg-destructive/5 hover:shadow-lg transition-all duration-600">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{useCase.name}</h3>
                      <p className="text-sm font-semibold text-destructive uppercase tracking-wide">
                        Poor Execution
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-destructive flex-shrink-0" />
                      <p className="text-base text-muted-foreground">{useCase.poor.adoption}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-destructive flex-shrink-0" />
                      <p className="text-base text-muted-foreground">{useCase.poor.perception}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-destructive flex-shrink-0" />
                      <p className="text-base font-semibold">{useCase.poor.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Excellent Execution */}
              <Card className="border-primary/40 bg-primary/5 hover:shadow-lg transition-all duration-600">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{useCase.name}</h3>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                        Excellent Execution
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-base text-muted-foreground">{useCase.excellent.adoption}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-base text-muted-foreground">{useCase.excellent.impact}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-base font-semibold">{useCase.excellent.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="text-center pt-8">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            The difference between 5% adoption and 95% adoption isn't the tool—it's how you implement it
          </p>
        </div>
      </div>
    </section>
  )
}
