"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

export default function F1IterationEconomics() {
  const data = [
    { iterations: "5", accuracy: 70, level: "Level 3", color: "#EF4444" },
    { iterations: "10", accuracy: 80, level: "Partial", color: "#F97316" },
    { iterations: "15", accuracy: 88, level: "Good", color: "#3B82F6" },
    { iterations: "20", accuracy: 95, level: "Level 4", color: "#00BBFF" }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient">The Mathematics of Quality</Badge>
          <h2 className="text-5xl md:text-6xl font-bebas">
            ITERATION <span className="text-primary">ECONOMICS</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Why fast feedback loops are non-negotiable
          </p>
        </div>

        {/* Chart */}
        <Card className="border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 animate-scale-in delay-300 fill-backwards">
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis
                  dataKey="iterations"
                  label={{ value: 'Number of Iterations', position: 'insideBottom', offset: -5 }}
                  tick={{ fontSize: 14 }}
                />
                <YAxis
                  label={{ value: 'Accuracy %', angle: -90, position: 'insideLeft' }}
                  tick={{ fontSize: 14 }}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 10, 10, 0.9)',
                    border: '1px solid #FF4D00',
                    borderRadius: '8px',
                    color: '#FAFAFA'
                  }}
                />
                <Bar dataKey="accuracy" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-red-500/40 bg-red-500/5 animate-slide-in-left delay-600 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <h3 className="text-2xl font-bold text-red-500">Level 3 Reality</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Iteration Speed:</span>
                  <span className="font-bold text-red-500">1 per week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Iterations:</span>
                  <span className="font-bold text-red-500">~5 in 2 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Final Accuracy:</span>
                  <span className="font-bold text-red-500">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Result:</span>
                  <span className="font-bold text-red-500">Not production-ready</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-cyan-500/40 bg-cyan-500/5 shadow-[0_0_30px_rgba(0,187,255,0.2)] animate-slide-in-right delay-800 fill-backwards">
            <CardContent className="pt-6 space-y-3">
              <h3 className="text-2xl font-bold text-cyan-400">Level 4 Reality</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Iteration Speed:</span>
                  <span className="font-bold text-cyan-400">1-3 per day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Iterations:</span>
                  <span className="font-bold text-cyan-400">20+ in 2-3 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Final Accuracy:</span>
                  <span className="font-bold text-cyan-400">95%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Result:</span>
                  <span className="font-bold text-cyan-400">Production-ready</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Takeaway */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="pt-4">
            <p className="text-center text-sm md:text-base">
              <span className="font-semibold text-primary">Key Takeaway:</span> You need <strong>~20 iterations</strong> to reach 95%+ reliability. Level 3 can only afford 5. Level 4 achieves 20 in 2-3 weeks.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
