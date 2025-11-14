"use client"

import { useState } from "react"
import { TrendingUp, DollarSign, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, Legend } from "recharts"

interface CategoryData {
  name: string
  category: string
  minROI: number
  maxROI: number
  avgROI: number
  level: string
  color: string
  complexity: string
  timeToValue: string
}

const CATEGORY_DATA: CategoryData[] = [
  {
    name: "Static\nChatbots",
    category: "Static Information Chatbots",
    minROI: 15000,
    maxROI: 99000,
    avgROI: 57000,
    level: "Level 4",
    color: "#10B981",
    complexity: "Low-Medium",
    timeToValue: "2-4 weeks",
  },
  {
    name: "Dynamic\nChatbots",
    category: "Dynamic Content Chatbots",
    minROI: 14000,
    maxROI: 246000,
    avgROI: 130000,
    level: "Level 4-5",
    color: "#00BBFF",
    complexity: "Medium-High",
    timeToValue: "6-7 weeks",
  },
  {
    name: "Custom\nWorkflows",
    category: "Custom Workflows & Analyzers",
    minROI: 63000,
    maxROI: 158000,
    avgROI: 110500,
    level: "Level 5",
    color: "#FF4D00",
    complexity: "High",
    timeToValue: "10-12 weeks",
  },
]

export function Slide406RoiComparison() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const selectedData = CATEGORY_DATA.find((d) => d.category === selectedCategory)

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="grid" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <TrendingUp className="h-5 w-5 mr-2" />
            ROI COMPARISON
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Compare Annual
            <span className="block text-primary mt-2">ROI Ranges</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Click any bar to see detailed breakdown
          </p>
        </div>

        {/* Interactive Chart */}
        <div className="animate-slide-in-up delay-200 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="font-syne text-2xl flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Annual ROI by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={CATEGORY_DATA}
                  margin={{ top: 20, right: 30, left: 40, bottom: 80 }}
                  onClick={(data) => {
                    if (data && data.activePayload) {
                      const category = data.activePayload[0].payload.category
                      setSelectedCategory(category === selectedCategory ? null : category)
                    }
                  }}
                >
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#525252", fontSize: 14 }}
                    axisLine={{ stroke: "#E5E5E5" }}
                    angle={0}
                    textAnchor="middle"
                  />
                  <YAxis
                    tick={{ fill: "#525252", fontSize: 14 }}
                    axisLine={{ stroke: "#E5E5E5" }}
                    tickFormatter={(value) => `$${value / 1000}K`}
                    label={{ value: "Annual ROI", angle: -90, position: "insideLeft", style: { fill: "#525252" } }}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload as CategoryData
                        return (
                          <div className="bg-white/95 backdrop-blur-md border-2 border-primary/40 rounded-lg p-4 shadow-lg">
                            <p className="font-syne font-bold text-lg mb-2" style={{ color: data.color }}>
                              {data.category}
                            </p>
                            <div className="space-y-1 text-sm">
                              <p>
                                <span className="font-semibold">Average ROI:</span> {formatCurrency(data.avgROI)}
                              </p>
                              <p>
                                <span className="font-semibold">Range:</span> {formatCurrency(data.minROI)} - {formatCurrency(data.maxROI)}
                              </p>
                              <p>
                                <span className="font-semibold">Level:</span> {data.level}
                              </p>
                              <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                                Click to see full details
                              </p>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    content={() => (
                      <div className="flex justify-center gap-6 mb-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-[#10B981] rounded" />
                          <span className="text-sm">Static Chatbots</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-[#00BBFF] rounded" />
                          <span className="text-sm">Dynamic Chatbots</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-[#FF4D00] rounded" />
                          <span className="text-sm">Custom Workflows</span>
                        </div>
                      </div>
                    )}
                  />
                  <Bar
                    dataKey="avgROI"
                    radius={[8, 8, 0, 0]}
                    cursor="pointer"
                  >
                    {CATEGORY_DATA.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        opacity={selectedCategory === null || selectedCategory === entry.category ? 1 : 0.3}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Bars represent average annual ROI. Hover for details, click for full breakdown.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Selected Category Details */}
        {selectedData && (
          <div className="animate-fade-in">
            <Card className="border-2" style={{ borderColor: `${selectedData.color}60` }}>
              <CardHeader style={{ backgroundColor: `${selectedData.color}10` }}>
                <CardTitle className="font-syne text-2xl" style={{ color: selectedData.color }}>
                  {selectedData.category} - Detailed Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold mb-1">ROI Range</p>
                    <p className="text-2xl font-bold font-jetbrains" style={{ color: selectedData.color }}>
                      {formatCurrency(selectedData.minROI)}
                    </p>
                    <p className="text-lg font-jetbrains" style={{ color: selectedData.color }}>
                      to {formatCurrency(selectedData.maxROI)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold mb-1">Level</p>
                    <Badge variant="outline" style={{ borderColor: selectedData.color, color: selectedData.color }}>
                      {selectedData.level}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold mb-1">Complexity</p>
                    <p className="text-lg font-semibold">{selectedData.complexity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold mb-1">Time to Value</p>
                    <p className="text-lg font-semibold">{selectedData.timeToValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Comparison Matrix */}
        <div className="animate-slide-in-up delay-400 fill-backwards">
          <Card className="border-2 border-primary/30">
            <CardHeader className="bg-primary/5">
              <CardTitle className="font-syne text-xl flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Quick Comparison Matrix
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-3 px-4 font-syne font-bold text-sm">Category</th>
                    <th className="py-3 px-4 font-syne font-bold text-sm">Avg ROI</th>
                    <th className="py-3 px-4 font-syne font-bold text-sm">Complexity</th>
                    <th className="py-3 px-4 font-syne font-bold text-sm">Time to Value</th>
                    <th className="py-3 px-4 font-syne font-bold text-sm">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {CATEGORY_DATA.map((cat, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border hover:bg-foreground/5 transition-colors cursor-pointer"
                      onClick={() => setSelectedCategory(cat.category === selectedCategory ? null : cat.category)}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                          <span className="font-semibold">{cat.category}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-jetbrains font-bold" style={{ color: cat.color }}>
                          {formatCurrency(cat.avgROI)}
                        </span>
                      </td>
                      <td className="py-4 px-4">{cat.complexity}</td>
                      <td className="py-4 px-4">{cat.timeToValue}</td>
                      <td className="py-4 px-4 text-sm text-foreground/70">
                        {idx === 0 && "Documentation-heavy orgs"}
                        {idx === 1 && "Customer-facing teams"}
                        {idx === 2 && "Expert-led processes"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-600 fill-backwards">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <Card className="relative bg-white/95 backdrop-blur-md border-2 border-primary/40 px-8 py-6">
              <p className="font-syne text-xl md:text-2xl font-bold text-foreground">
                <span className="text-primary">Key Insight:</span> Higher ROI doesn't mean better fit.{" "}
                <span className="text-primary">Choose based on your specific use case, data needs, and organizational readiness.</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
