import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Package, AlertCircle, Eye } from "lucide-react"
import Image from "next/image"

export function Slide08Level2() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-secondary text-secondary-foreground text-xl font-bold px-4 py-2">
            Level 2
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Generic SaaS AI Tools
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
            Pre-Built but Generic
          </p>
        </div>

        {/* What it is */}
        <Card className="border-border/50">
          <CardContent className="p-8">
            {/* Hero Image */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/generated-images/gemini-1762957317202-1.png"
                alt="Generic pre-packaged software boxes showing one-size-fits-all limitation"
                width={800}
                height={533}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Package className="h-8 w-8 text-muted-foreground" />
              <h3 className="text-2xl font-bold">What it is</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">Pre-built AI tools for specific functions</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">SaaS platforms: Jasper, Copy.ai, generic chatbots</p>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">Vendor-created templates and workflows</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <p className="text-lg leading-relaxed">Department or team subscriptions</p>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* The Core Problem */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">The Core Problem - Why It's Not Transformation</h3>
          <Card className="border-warning/40 bg-warning/5">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-warning">Too generic</p>
                  <p className="text-base leading-relaxed">
                    Built for everyone, not YOUR business - it doesn't fit your needs. That's why it sucks.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-warning">Quality ceiling</p>
                  <p className="text-base leading-relaxed">One-size-fits-all doesn't match your standards</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-warning">Can't adapt</p>
                  <p className="text-base leading-relaxed">
                    No understanding of your terminology, brand voice, or processes
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-warning">Heavy editing needed</p>
                  <p className="text-base leading-relaxed">Outputs require significant rework</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-warning">No business context</p>
                  <p className="text-base leading-relaxed">Doesn't know your policies, customers, or workflows</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-warning">No system integration</p>
                  <p className="text-base leading-relaxed">
                    These tools don't even attempt to connect to YOUR business systems
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Level 2 Doesn't Stick */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-destructive/40 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <h3 className="text-xl font-bold">Problem 1: Poor Quality</h3>
              </div>
              <div className="space-y-3">
                <p className="text-base leading-relaxed">Generic outputs don't meet your quality standards</p>
                <p className="text-base leading-relaxed">Requires heavy editing to match your brand/voice/standards</p>
                <p className="text-base font-semibold text-destructive">
                  "I spent more time fixing the AI's output than writing it myself"
                </p>
                <p className="text-base font-bold">Result: Tools sit unused, subscriptions wasted</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/40 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-destructive" />
                <h3 className="text-xl font-bold">Problem 2: No Observability</h3>
              </div>
              <div className="space-y-3">
                <p className="text-base leading-relaxed">Each department subscribes to different tools</p>
                <p className="text-base leading-relaxed">No centralized usage tracking across platforms</p>
                <p className="text-base leading-relaxed">Leadership can't quantify actual adoption or value</p>
                <p className="text-base font-bold">Result: Executives have no visibility into what's working</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed">
            These tools solve generic problems, not YOUR specific problems
          </p>
        </div>
      </div>
    </section>
  )
}
