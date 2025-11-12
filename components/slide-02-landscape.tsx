import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function Slide02Landscape() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Module 01: AI State & Opportunity
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            The Reality Check
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto">
            Understanding where real AI transformation is happening
          </p>
        </div>

        {/* Pyramid Visualization */}
        <div className="relative py-12">
          {/* Pyramid Illustration */}
          <div className="mb-12 flex justify-center">
            <img
              src="/generated-images/gemini-1762957059095-1.png"
              alt="Three-tier pyramid structure showing AI adoption hierarchy with glowing orange apex representing top-tier companies"
              className="w-full max-w-md h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Top Tier */}
          <div className="max-w-xs mx-auto mb-6">
            <Card className="border-primary/60 bg-gradient-to-br from-yellow-500/20 to-primary/20">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Real Transformation</h3>
                <p className="text-sm text-muted-foreground">
                  Small group of top-tier companies
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  (Primarily Silicon Valley/SF)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Middle Tier */}
          <div className="max-w-2xl mx-auto mb-6">
            <Card className="border-border/50 bg-muted/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-bold mb-2">Most Companies</h3>
                <p className="text-sm text-muted-foreground">
                  Experimenting, piloting, debating—but not transforming
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Tier */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-border/30 bg-muted/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-base font-bold mb-2 text-muted-foreground">Still Figuring It Out</h3>
                <p className="text-sm text-muted-foreground/70">
                  Early exploration, uncertain direction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
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
        <div className="text-center pt-8">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            This isn't about catching up to competitors—it's about implementing AI the right way from the start
          </p>
        </div>
      </div>
    </section>
  )
}
