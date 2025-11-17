"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Brain, CheckCircle2, AlertTriangle } from "lucide-react"

export default function F1Level5Autonomous() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge className="bg-cyan-500 text-white shadow-[0_0_30px_rgba(0,187,255,0.3)]">
            Level 5: Full Automation
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            AUTONOMOUS <span className="text-cyan-400">AGENTS</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Self-improving, multi-agent workflows
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Capabilities */}
          <Card className="border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 animate-slide-in-left delay-300 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Brain className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-bold">What It Enables</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Full autonomy</strong> — Runs without human intervention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Multi-agent coordination</strong> — Agents work together seamlessly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Self-improving</strong> — Learns from outcomes and adapts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Complex workflows</strong> — Handles multi-step business processes end-to-end</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Maximum scalability</strong> — Handles 10-100x workload increases</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Right: Requirements */}
          <Card className="border-orange-500/40 bg-orange-500/5 animate-slide-in-right delay-500 fill-backwards">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                <h3 className="text-xl font-bold">Prerequisites</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span><strong>Level 4 mastery first</strong> — Must prove at 95%+ for 30+ days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span><strong>Failure modes mapped</strong> — Know exactly what can break and how</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span><strong>Monitoring & alerting</strong> — Real-time issue detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span><strong>Rollback capability</strong> — Can revert to manual/Level 4 instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">→</span>
                  <span><strong>Executive buy-in</strong> — Trust in autonomous decision-making</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-cyan-500/5 border-cyan-500/40 animate-fade-in delay-800 fill-backwards">
            <CardContent className="pt-4">
              <p className="text-center text-sm md:text-base">
                <span className="font-semibold text-cyan-400">When Ready:</span> Level 5 delivers maximum ROI and frees teams to focus on strategic work.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-500/5 border-red-500/40 animate-fade-in delay-1000 fill-backwards">
            <CardContent className="pt-4">
              <p className="text-center text-sm md:text-base">
                <span className="font-semibold text-red-500">Warning:</span> Skipping Level 4 to jump to Level 5 = Disaster. Build the foundation first.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
