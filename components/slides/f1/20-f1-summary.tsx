"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"

export default function F1Summary() {
  const takeaways = [
    {
      number: 1,
      title: "Five Levels Exist",
      description: "From Individual AI (L1) to Autonomous Agents (L5). Understanding these levels is your roadmap."
    },
    {
      number: 2,
      title: "Level 3 is a Trap",
      description: "No-code automation promises quick wins but delivers slow iteration → 70% accuracy → negative ROI → organizational resistance."
    },
    {
      number: 3,
      title: "Iteration Economics Decide Success",
      description: "Need ~20 iterations to reach 95%. Level 3 can only afford 5. Level 4 achieves 20 in 2-3 weeks."
    },
    {
      number: 4,
      title: "Transformation Starts at Level 4",
      description: "Fast iteration (1-3 cycles/day) + internal team + deep integration = 300-600% ROI. First year: $58K investment, $150-300K value."
    },
    {
      number: 5,
      title: "The Most Expensive Consequence",
      description: "Level 3 failures create 12-18 months of organizational scar tissue and AI resistance—far costlier than money lost."
    },
    {
      number: 6,
      title: "You're Not Behind",
      description: "Most companies are at Levels 1-2. Now you understand how to avoid the Level 3 trap and reach Level 4."
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">Module Complete</Badge>
          <h2 className="text-5xl md:text-7xl font-bebas">
            KEY <span className="text-primary">TAKEAWAYS</span>
          </h2>
          <p className="text-xl text-foreground/70">
            The essential insights from the Five Levels Framework
          </p>
        </div>

        {/* Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {takeaways.map((takeaway, idx) => (
            <div key={idx} className="relative">
              {/* Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className={`
                  bg-primary text-primary-foreground rounded-full h-14 w-14
                  flex items-center justify-center text-2xl font-bold shadow-glow
                `}>
                  {takeaway.number}
                </div>
              </div>

              {/* Card */}
              <Card className={`
                border-border/50 bg-muted/20 pt-12
                animate-fade-in delay-${idx * 150 + 300} fill-backwards
              `}>
                <CardContent className="space-y-3 text-center">
                  <h3 className="text-lg font-bold min-h-[3rem] flex items-center justify-center">
                    {takeaway.title}
                  </h3>
                  <p className="text-sm text-foreground/80">
                    {takeaway.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Priority Message */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 animate-fade-in delay-1200 fill-backwards">
          <CardContent className="pt-6 text-center space-y-3">
            <h3 className="text-2xl font-bold">Your Priority</h3>
            <p className="text-lg">
              <span className="text-primary font-semibold">If building AI now:</span> Skip Level 3. Go straight to Level 4 with internal iteration capability.
            </p>
            <p className="text-lg">
              <span className="text-primary font-semibold">If stuck at Level 3:</span> Escape the trap. Build internal team. Iterate fast.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
