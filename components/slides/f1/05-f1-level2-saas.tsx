"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Briefcase, CheckCircle2, AlertTriangle } from "lucide-react"

export default function F1Level2Saas() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="border-blue-500 text-blue-500">Level 2</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            GENERIC <span className="text-blue-500">SAAS AI TOOLS</span>
          </h2>
          <p className="text-xl text-foreground/70">Jasper, Copy.ai, pre-built chatbots</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-green-500/40 bg-green-500/5 animate-slide-in-left delay-300 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-bold">Advantages</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>Quick deployment</strong> — Sign up and start immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>Pre-built workflows</strong> — Proven templates included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>No development needed</strong> — Business teams can use directly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>Predictable cost</strong> — $50-500/month per seat</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-500/40 bg-orange-500/5 animate-slide-in-right delay-500 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                <h3 className="text-xl font-bold">Critical Limitations</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">!</span>
                  <span><strong>Generic, not customized</strong> — Can't learn YOUR business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">!</span>
                  <span><strong>Limited integration</strong> — Doesn't deeply connect to your systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">!</span>
                  <span><strong>One-size-fits-all</strong> — Can't match your specific processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">!</span>
                  <span><strong>Adoption issues</strong> — Teams abandon tools that don't fit</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/20 border-border/50 animate-fade-in delay-800 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Reality:</span> Good for specific use cases (marketing copy, basic support). Not enough for true transformation.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
