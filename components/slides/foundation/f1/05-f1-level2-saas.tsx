"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

export default function F1Level2SaasSlide() {
  const whatYouGet = [
    { label: "Quick deployment", detail: "Sign up and start immediately" },
    { label: "Pre-built workflows", detail: "Proven templates included" },
    { label: "No development needed", detail: "Business teams can use directly" },
    { label: "Predictable cost", detail: "$50-500/month per seat" }
  ]

  const whatsMissing = [
    { label: "Generic, not customized", detail: "Can't learn YOUR business" },
    { label: "Limited integration", detail: "Doesn't deeply connect to your systems" },
    { label: "One-size-fits-all", detail: "Can't match your specific processes" },
    { label: "Adoption issues", detail: "Teams abandon tools that don't fit" }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1763382728117-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15 select-none pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" opacity={0.06} color="#3B82F6" spacing={50} />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center animate-slide-in-down">
            <Badge variant="outline" className="border-blue-500 text-blue-500 transform -rotate-1">
              Level 2 of 5
            </Badge>
          </div>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight animate-fade-in delay-200 fill-backwards">
            GENERIC <span className="text-blue-500">SAAS TOOLS</span>
          </h2>

          <p className="font-syne font-bold text-xl md:text-2xl lg:text-3xl text-foreground/80 animate-slide-in-up delay-400 fill-backwards">
            Pre-built tools like Jasper, Copy.ai
          </p>
        </div>

        {/* Comparison Section */}
        <div className="space-y-6 animate-fade-in delay-600 fill-backwards">
          <h3 className="font-syne text-2xl md:text-3xl font-bold text-center">
            What You <span className="text-blue-500">Get</span> vs What&apos;s <span className="text-orange-500">Missing</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WHAT YOU GET (Left) */}
            <Card className="border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
              <CardContent className="p-6">
                <h4 className="font-bebas text-2xl text-blue-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  WHAT YOU GET
                </h4>
                <div className="space-y-3">
                  {whatYouGet.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span className="font-syne font-bold text-base md:text-lg text-foreground">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60 ml-5">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WHAT'S MISSING (Right) */}
            <Card className="border-orange-500/40 bg-gradient-to-br from-orange-500/10 to-orange-500/5">
              <CardContent className="p-6">
                <h4 className="font-bebas text-2xl text-orange-500 mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  WHAT&apos;S MISSING
                </h4>
                <div className="space-y-3">
                  {whatsMissing.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">✗</span>
                        <span className="font-syne font-bold text-base md:text-lg text-foreground">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60 ml-5">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="animate-fade-in delay-800 fill-backwards">
          <Card className="border-blue-500/40 bg-gradient-to-br from-blue-500/5 to-primary/5">
            <CardContent className="pt-6 text-center">
              <p className="font-manrope text-base md:text-lg text-foreground/90">
                <span className="font-bold text-blue-500">Good for specific use cases</span> —
                not enough for transformation.{" "}
                <span className="font-bold text-primary">
                  Step up from Level 1, but transformation requires Level 4
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
