import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Slide02bLandscapeMessages() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-6xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Module 01: AI State & Opportunity
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            Key Insights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
            What this means for your organization
          </p>
        </div>

        {/* Key Messages Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-pretty leading-relaxed">
                AI is not hype—it's a fundamental shift in how work gets done
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-pretty leading-relaxed">
                Real transformation is rare: concentrated among top-tier companies
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-pretty leading-relaxed">
                Most organizations (including competitors) are still figuring it out
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-pretty leading-relaxed">
                The opportunity: systematic approach exists, mistakes are predictable
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-6">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            This isn't about catching up to competitors—it's about implementing AI the right way from the start
          </p>
        </div>
      </div>
    </section>
  )
}
