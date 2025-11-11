"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, TrendingDown } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function Slide10Level3Reality() {
  const timelineData = [
    { time: "Week 1", satisfaction: 75, label: "Launch" },
    { time: "Week 2", satisfaction: 60, label: "Complaints" },
    { time: "Month 1", satisfaction: 45, label: "Troubleshooting" },
    { time: "Month 2", satisfaction: 25, label: "Adoption drops" },
    { time: "Month 6", satisfaction: 5, label: "Abandoned" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-warning text-warning-foreground text-xl font-bold px-4 py-2">Level 3</Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            The Reality
          </h2>
          <p className="text-2xl md:text-3xl text-warning font-semibold text-pretty leading-relaxed">
            "Quick Noodles vs Pasta"
          </p>
        </div>

        {/* Reality Explanation */}
        <Card className="border-warning/40 bg-warning/5">
          <CardContent className="p-8">
            <div className="space-y-4">
              <p className="text-xl leading-relaxed">
                Level 3 tools <span className="font-semibold">DO</span> connect AI to your business systems and
                workflows
              </p>
              <p className="text-xl leading-relaxed">
                But the connection is{" "}
                <span className="font-bold text-warning">shallow and high-level</span> - sounds good, doesn't work deep
              </p>
              <div className="pt-4 border-t border-warning/20">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Like <span className="font-semibold">quick noodles</span>: fast, cheap, sounds good → but not
                  reliable or high quality
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  (Level 4 is <span className="font-semibold">real pasta</span>: more effort, better ingredients,
                  actually satisfying)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Chart */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <TrendingDown className="h-8 w-8 text-destructive" />
            What Actually Happens
          </h3>
          <Card className="border-destructive/40 bg-destructive/5">
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={timelineData}>
                  <defs>
                    <linearGradient id="colorSatisfaction" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="satisfaction"
                    stroke="hsl(var(--destructive))"
                    strokeWidth={3}
                    fill="url(#colorSatisfaction)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              time: "Week 1",
              title: "Tool goes live",
              details: "Employees try it",
              status: "neutral",
            },
            {
              time: "Week 2",
              title: "First complaints arrive",
              details: "Answer doesn't cover our situation, Missing information, Doesn't match our standards",
              status: "warning",
            },
            {
              time: "Month 1",
              title: "Provider gets involved",
              details: "40 hours troubleshooting, Try to improve coverage, Fix edge cases",
              status: "warning",
            },
            {
              time: "Month 2",
              title: "Adoption drops",
              details: "Employees stop using it, Back to asking humans, 'The AI isn't reliable'",
              status: "danger",
            },
            {
              time: "Month 6",
              title: "Tool abandoned",
              details: "Still paying subscription, $20K+ sunk in fees, Zero ROI",
              status: "danger",
            },
            {
              time: "Long-term",
              title: "AI resistance",
              details: "Team now resistant to AI, 'We tried that, it didn't work'",
              status: "danger",
            },
          ].map((stage, index) => (
            <Card
              key={index}
              className={`
                ${stage.status === "neutral" ? "border-border/50" : ""}
                ${stage.status === "warning" ? "border-warning/40 bg-warning/5" : ""}
                ${stage.status === "danger" ? "border-destructive/40 bg-destructive/5" : ""}
              `}
            >
              <CardContent className="p-6">
                <Badge
                  className={`mb-3 ${stage.status === "neutral" ? "bg-secondary text-secondary-foreground" : ""} ${stage.status === "warning" ? "bg-warning text-warning-foreground" : ""} ${stage.status === "danger" ? "bg-destructive text-destructive-foreground" : ""}`}
                >
                  {stage.time}
                </Badge>
                <h4 className="text-lg font-bold mb-2">{stage.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
