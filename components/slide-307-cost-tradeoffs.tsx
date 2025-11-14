"use client"

import { useState } from "react"
import { DollarSign, Clock, TrendingUp, Zap, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

type ComparisonView = "cost" | "capability" | "roi"

export function Slide307CostTradeoffs() {
  const [activeView, setActiveView] = useState<ComparisonView>("cost")

  const costComparisonData = [
    {
      name: "Initial Cost",
      ML: 80000,
      Agentic: 75000,
      Existing: 12000,
    },
    {
      name: "First Year Cost",
      ML: 120000,
      Agentic: 99000,
      Existing: 36000,
    },
    {
      name: "Annual Iteration Cost",
      ML: 50000,
      Agentic: 24000,
      Existing: 24000,
    },
  ]

  const capabilityData = [
    {
      capability: "Customization",
      ML: 60,
      Agentic: 100,
      Existing: 30,
    },
    {
      capability: "Iteration Speed",
      ML: 40,
      Agentic: 95,
      Existing: 20,
    },
    {
      capability: "Context Depth",
      ML: 50,
      Agentic: 100,
      Existing: 40,
    },
    {
      capability: "Deployment Speed",
      ML: 30,
      Agentic: 70,
      Existing: 100,
    },
    {
      capability: "Quality Control",
      ML: 90,
      Agentic: 95,
      Existing: 50,
    },
  ]

  const tradeoffMatrix = [
    {
      approach: "ML",
      icon: TrendingUp,
      color: "#10B981",
      upfrontCost: "High ($80-150k+)",
      timeline: "Months",
      customization: "Medium",
      iterationCost: "High",
      bestFor: "Predictable patterns with ample historical data",
      risk: "Model drift, data quality requirements",
    },
    {
      approach: "Agentic AI",
      icon: Zap,
      color: "#00BBFF",
      upfrontCost: "Medium ($50-100k)",
      timeline: "Weeks",
      customization: "High",
      iterationCost: "Low",
      bestFor: "Complex workflows needing deep company context",
      risk: "Requires iteration discipline",
    },
    {
      approach: "Existing Tools",
      icon: DollarSign,
      color: "#F59E0B",
      upfrontCost: "Low ($1-5k/mo)",
      timeline: "Days",
      customization: "Low",
      iterationCost: "Medium",
      bestFor: "Standard tasks with minimal customization",
      risk: "Feature limitations, vendor lock-in",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <GeometricPattern type="grid" opacity={0.06} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow">
            <DollarSign className="h-4 w-4 mr-2" />
            COST VS CAPABILITY
          </Badge>
          <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            Investment
            <span className="block text-primary mt-2">Trade-Offs</span>
          </h2>
          <p className="font-syne text-2xl md:text-3xl text-muted-foreground">
            Understanding the economics of each approach
          </p>
        </div>

        {/* View Selector */}
        <div className="flex justify-center gap-3 animate-fade-in delay-300 fill-backwards">
          <button
            onClick={() => setActiveView("cost")}
            className={`px-6 py-3 rounded-lg font-syne font-semibold transition-all ${
              activeView === "cost"
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-white/80 text-foreground hover:bg-white"
            }`}
          >
            <DollarSign className="h-5 w-5 inline mr-2" />
            Cost Comparison
          </button>
          <button
            onClick={() => setActiveView("capability")}
            className={`px-6 py-3 rounded-lg font-syne font-semibold transition-all ${
              activeView === "capability"
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-white/80 text-foreground hover:bg-white"
            }`}
          >
            <TrendingUp className="h-5 w-5 inline mr-2" />
            Capability Analysis
          </button>
          <button
            onClick={() => setActiveView("roi")}
            className={`px-6 py-3 rounded-lg font-syne font-semibold transition-all ${
              activeView === "roi"
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-white/80 text-foreground hover:bg-white"
            }`}
          >
            <Clock className="h-5 w-5 inline mr-2" />
            Trade-Off Matrix
          </button>
        </div>

        {/* Cost Comparison View */}
        {activeView === "cost" && (
          <div className="animate-fade-in">
            <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
              <CardContent className="p-8">
                <h3 className="font-syne text-2xl font-bold mb-6 text-center">Cost Comparison Over Time</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={costComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
                    <YAxis tick={{ fill: "#6b7280" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "2px solid #FF4D00",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => `$${value.toLocaleString()}`}
                    />
                    <Legend />
                    <Bar dataKey="ML" fill="#10B981" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="Agentic" fill="#00BBFF" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="Existing" fill="#F59E0B" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Capability Analysis View */}
        {activeView === "capability" && (
          <div className="animate-fade-in">
            <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
              <CardContent className="p-8">
                <h3 className="font-syne text-2xl font-bold mb-6 text-center">Capability Comparison</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={capabilityData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="capability" tick={{ fill: "#6b7280", fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#6b7280" }} />
                    <Radar name="ML" dataKey="ML" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                    <Radar name="Agentic" dataKey="Agentic" stroke="#00BBFF" fill="#00BBFF" fillOpacity={0.3} />
                    <Radar name="Existing" dataKey="Existing" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Trade-Off Matrix View */}
        {activeView === "roi" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tradeoffMatrix.map((item, index) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:scale-102 hover:shadow-xl"
                  style={{ borderColor: `${item.color}40` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <item.icon className="h-7 w-7" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-bebas text-2xl" style={{ color: item.color }}>
                        {item.approach}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 mb-1">UPFRONT COST</p>
                        <p className="text-sm font-medium">{item.upfrontCost}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 mb-1">TIMELINE</p>
                        <p className="text-sm font-medium">{item.timeline}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 mb-1">CUSTOMIZATION</p>
                        <p className="text-sm font-medium">{item.customization}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 mb-1">ITERATION COST</p>
                        <p className="text-sm font-medium">{item.iterationCost}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-foreground/10">
                      <p className="text-xs font-semibold text-foreground/60 mb-1">BEST FOR</p>
                      <p className="text-sm">{item.bestFor}</p>
                    </div>

                    <div className="pt-2 bg-warning/10 -mx-6 -mb-6 px-6 py-4 rounded-b-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-warning mb-1">KEY RISK</p>
                          <p className="text-xs text-foreground/80">{item.risk}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Key Insight */}
        <div className="text-center pt-8 animate-fade-in delay-700 fill-backwards">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30">
              <CardContent className="p-8">
                <p className="font-syne text-xl md:text-2xl font-semibold text-foreground">
                  <span className="text-primary">The best choice depends on your specific needs:</span>
                  <span className="block mt-3 text-lg text-muted-foreground">
                    Balance upfront cost, timeline, customization depth, and iteration requirements
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
