"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Wrench, TrendingDown } from "lucide-react"

export default function F1Level3Trap() {
  const [showReality, setShowReality] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="destructive">Level 3: THE TRAP</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            NO-CODE <span className="text-red-500">AUTOMATION</span>
          </h2>
          <p className="text-xl text-foreground/70">Zapier, Make.com, n8n — The promise vs the reality</p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center gap-4">
          <Button
            variant={!showReality ? "default" : "outline"}
            onClick={() => setShowReality(false)}
            className="px-8"
          >
            The Promise
          </Button>
          <Button
            variant={showReality ? "destructive" : "outline"}
            onClick={() => setShowReality(true)}
            className="px-8"
          >
            The Reality
          </Button>
        </div>

        {/* Conditional Content */}
        {!showReality ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <Card className="border-green-500/40 bg-green-500/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-green-500">The Sales Pitch</h3>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>"Automate workflows without developers!"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>"Drag-and-drop AI in minutes!"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>"Transform your business for $99/month!"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>"No technical team needed!"</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-500/40 bg-blue-500/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-blue-500">Sounds Perfect</h3>
                <ul className="space-y-3 text-sm md:text-base">
                  <li>✓ No technical team needed</li>
                  <li>✓ No long projects</li>
                  <li>✓ Just plug in a tool</li>
                  <li>✓ Watch efficiency soar</li>
                </ul>
                <p className="mt-6 text-sm italic text-foreground/60">
                  So companies buy the subscription. Set up the workflow. Launch it to the team...
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-red-500 bg-red-500/10">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingDown className="h-8 w-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-red-500">What Actually Happens</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-red-400">Month 1-2:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Accuracy stuck at 60-70%</li>
                      <li>• Users report constant errors</li>
                      <li>• Edge cases break the system</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-red-400">Month 3-6:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Change requests take 1-2 weeks</li>
                      <li>• External agency charges $3-5K per fix</li>
                      <li>• Team stops using the tool</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/40 bg-primary/5">
              <CardContent className="pt-4">
                <p className="text-center text-sm md:text-base">
                  <span className="font-semibold text-primary">The Core Problem:</span> <strong>Slow iteration</strong>. Only ~5 iterations total → Stuck at 70% accuracy → Negative ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
