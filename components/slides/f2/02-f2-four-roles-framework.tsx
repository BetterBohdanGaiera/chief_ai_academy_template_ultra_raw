"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { Crown, Target, Brain, Code } from "lucide-react"

export default function Slide02F2FourRolesFramework() {
  const [activeRole, setActiveRole] = useState<string | null>(null)

  const roles = [
    {
      id: "chief-ai-officer",
      title: "Chief AI Officer",
      icon: Crown,
      color: "border-purple-500",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      responsibility: "Sets company-wide AI strategy",
      keyActivities: [
        "Define transformation roadmap",
        "Allocate budget and resources",
        "Build organizational buy-in",
        "Set governance and standards"
      ],
      typical: "C-level executive or VP"
    },
    {
      id: "ai-champion",
      title: "AI Champion",
      icon: Target,
      color: "border-green-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      responsibility: "Coordinates transformation in their domain",
      keyActivities: [
        "Identify high-impact use cases",
        "Secure domain resources",
        "Drive adoption in their area",
        "Report progress to leadership"
      ],
      typical: "Department head or senior manager"
    },
    {
      id: "agent-manager",
      title: "Agent Manager",
      icon: Brain,
      color: "border-primary",
      glowColor: "shadow-[0_0_30px_rgba(255,77,0,0.3)]",
      responsibility: "Domain expert who validates AI outputs",
      keyActivities: [
        "Know the process deeply (5+ years)",
        "Test and validate agent outputs",
        "Identify edge cases and rules",
        "Provide rapid feedback to developer"
      ],
      typical: "Process expert (existing employee)"
    },
    {
      id: "ai-developer",
      title: "AI Agent Developer",
      icon: Code,
      color: "border-cyan-500",
      glowColor: "shadow-[0_0_30px_rgba(0,187,255,0.3)]",
      responsibility: "Builds and deploys AI agents",
      keyActivities: [
        "Implement agentic architecture",
        "Integrate with company systems",
        "Iterate based on feedback",
        "Maintain and improve agents"
      ],
      typical: "Software engineer with AI skills"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Foundation Module F2: Organization Structure
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bebas animate-fade-in delay-200 fill-backwards">
            The Four <span className="text-primary">Key Roles</span>
          </h2>
          <p className="text-xl text-foreground/70 animate-slide-in-up delay-500 fill-backwards">
            Hover over each role to explore responsibilities
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, idx) => {
            const Icon = role.icon
            const isActive = activeRole === role.id

            return (
              <Card
                key={role.id}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `scale-105 ${role.color} ${role.glowColor}`
                    : "border-border hover:scale-102 hover:border-primary/50"
                  }
                  animate-fade-in delay-${idx * 150 + 700} fill-backwards
                `}
                onMouseEnter={() => setActiveRole(role.id)}
                onMouseLeave={() => setActiveRole(null)}
              >
                <CardContent className="pt-6 space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary/10' : 'bg-muted'} transition-colors`}>
                      <Icon className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-foreground/60'}`} />
                    </div>
                    <h3 className="text-2xl font-display">{role.title}</h3>
                  </div>

                  {/* Responsibility */}
                  <p className="text-sm font-semibold text-foreground/80">
                    {role.responsibility}
                  </p>

                  {/* Revealed Details */}
                  {isActive && (
                    <div className="space-y-3 animate-fade-in pt-4 border-t border-border">
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">KEY ACTIVITIES:</p>
                        <ul className="space-y-1">
                          {role.keyActivities.map((activity, i) => (
                            <li key={i} className="text-sm text-foreground/80 flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs font-semibold text-foreground/60 mb-1">TYPICAL:</p>
                        <p className="text-sm text-foreground/90">{role.typical}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1200 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">Critical Insight:</span> Agent Manager is the bottleneck role—they have domain expertise that can't be easily hired or outsourced.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
