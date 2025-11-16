"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Users, Cpu } from "lucide-react"

export default function Slide02S3ManagementShift() {
  const [view, setView] = useState<"people" | "ai">("people")

  const managementAspects = {
    people: [
      { aspect: "Talent Acquisition", description: "Hiring the right people", icon: "👥" },
      { aspect: "Development", description: "Training and developing talent", icon: "📈" },
      { aspect: "Communication", description: "Natural language with context and nuance", icon: "💬" },
      { aspect: "Learning", description: "Adaptive, can infer from limited examples", icon: "🧠" },
      { aspect: "Quality", description: "Improves with experience and coaching", icon: "⭐" },
      { aspect: "Reliability", description: "Generally consistent within expertise", icon: "✓" }
    ],
    ai: [
      { aspect: "Model Selection", description: "Choosing the right AI models and tools", icon: "🤖" },
      { aspect: "Context Engineering", description: "Training AI through context and iteration", icon: "📋" },
      { aspect: "Communication", description: "Clear instructions, structured context required", icon: "📝" },
      { aspect: "Learning", description: "Needs explicit examples and rules", icon: "📚" },
      { aspect: "Quality", description: "Improves through iteration volume (20 cycles)", icon: "🔄" },
      { aspect: "Reliability", description: "Starts 60%, reaches 95%+ through iteration", icon: "📊" }
    ]
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bebas">
            The <span className="text-primary">Management Shift</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Toggle to compare managing people vs managing AI
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant={view === "people" ? "default" : "outline"}
            onClick={() => setView("people")}
            size="lg"
            className="min-w-[180px]"
          >
            <Users className="w-5 h-5 mr-2" />
            Managing People
          </Button>
          <Button
            variant={view === "ai" ? "default" : "outline"}
            onClick={() => setView("ai")}
            size="lg"
            className="min-w-[180px]"
          >
            <Cpu className="w-5 h-5 mr-2" />
            Managing AI
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {managementAspects[view].map((item, idx) => (
            <Card
              key={idx}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <CardContent className="pt-6 space-y-2">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-syne font-semibold text-lg">{item.aspect}</h3>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Key Insight:</span>{" "}
              {view === "people"
                ? "Traditional management focuses on developing people through coaching and experience."
                : "AI management requires clear communication, structured context, and disciplined iteration to reach reliability."}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
