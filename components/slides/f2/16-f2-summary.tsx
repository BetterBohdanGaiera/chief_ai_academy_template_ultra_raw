"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Crown, Target, Brain, Code, Zap, TrendingUp } from "lucide-react"

export default function Slide16F2Summary() {
  const keyTakeaways = [
    {
      number: 1,
      icon: Brain,
      title: "Agent Manager is the Most Critical Role",
      description: "They bridge business knowledge and technical implementation with domain expertise that can't be easily hired."
    },
    {
      number: 2,
      icon: Zap,
      title: "Co-Located Partnership = Level 4",
      description: "Agent Manager + Developer working together enables 1-3 iterations per day (not 1 per week), making 20 total iterations possible in 2-3 weeks."
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Hidden Complexity Emerges Through Iteration",
      description: "Domain experts can't document all tacit knowledge upfront. Testing real scenarios reveals the edge cases and business rules."
    },
    {
      number: 4,
      icon: Target,
      title: "2-3 Weeks to Production-Ready",
      description: "Realistic timeline when feedback loops are fast and cheap. 20 iterations transform 60% prototypes into 95%+ reliable systems."
    },
    {
      number: 5,
      icon: Crown,
      title: "Most Roles from Existing Employees",
      description: "95% of successful Level 4 implementations promote internal experts into Agent Manager roles. You don't need 20 new hires to start."
    },
    {
      number: 6,
      icon: Code,
      title: "Avoid the 6 Common Pitfalls",
      description: "Communication gaps, poor context quality, scope creep, accuracy plateaus, premature deployment, and lack of monitoring."
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-base px-6 py-3">
            Foundation Module F2: Organization Structure
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bebas animate-fade-in delay-200 fill-backwards">
            Key <span className="text-primary">Takeaways</span>
          </h2>
        </div>

        {/* Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyTakeaways.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="relative">
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold shadow-lg">
                    {item.number}
                  </div>
                </div>

                <Card
                  className={`
                    border-border/50 h-full
                    animate-fade-in delay-${idx * 100 + 400} fill-backwards
                  `}
                >
                  <CardContent className="pt-10 pb-6 space-y-3">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-display text-center">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70 text-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Next Steps */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-6 space-y-4">
            <h3 className="text-2xl font-display text-center">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-primary mb-2">If you're an Executive:</p>
                <p className="text-foreground/80">→ S1 (Choosing AI Technology) to understand tech decisions</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">If you're an AI Champion:</p>
                <p className="text-foreground/80">→ S1 (Choosing AI Technology) then S3 (Managing AI)</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">If you're an Agent Manager:</p>
                <p className="text-foreground/80">→ S3 (Managing AI) to learn your core skills</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">If you're a Developer:</p>
                <p className="text-foreground/80">→ S2 (Understanding Agents) then S3 (Managing AI)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
