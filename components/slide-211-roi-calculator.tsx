"use client"

import { useState } from "react"
import { DollarSign, TrendingUp, Calculator, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"
import { calculateROI, LEVEL_3_ECONOMICS, LEVEL_4_ECONOMICS } from "@/types/presentation-data"

export function Slide211RoiCalculator() {
  // Default parameters for calculation
  const [teamSize] = useState(20)
  const [hoursSavedPerWeek] = useState(10)
  const [hourlyRate] = useState(75)

  // Calculate ROI for both levels
  const level3ROI = calculateROI({
    teamSize,
    hoursSavedPerWeek,
    hourlyRate,
    implementationCost: LEVEL_3_ECONOMICS.initialCost,
    monthlyMaintenanceCost: LEVEL_3_ECONOMICS.iterationCost,
    adoptionRate: LEVEL_3_ECONOMICS.adoptionRate,
  })

  const level4ROI = calculateROI({
    teamSize,
    hoursSavedPerWeek,
    hourlyRate,
    implementationCost: LEVEL_4_ECONOMICS.initialCost,
    monthlyMaintenanceCost: LEVEL_4_ECONOMICS.iterationCost / 12, // Convert to monthly
    adoptionRate: LEVEL_4_ECONOMICS.adoptionRate,
  })

  const comparisonData = [
    {
      name: "Level 3\nOff-the-Shelf",
      monthlyBenefit: level3ROI.monthlyNetBenefit,
      annualBenefit: level3ROI.annualNetBenefit,
      color: "#EF4444",
    },
    {
      name: "Level 4\nIterative Agents",
      monthlyBenefit: level4ROI.monthlyNetBenefit,
      annualBenefit: level4ROI.annualNetBenefit,
      color: "#00BBFF",
    },
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="grid" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Calculator className="h-5 w-5 mr-2" />
            LEVEL 4: ECONOMICS
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            The Economics Tell
            <span className="block text-primary mt-2">The Real Story</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Level 3 vs Level 4: ROI Comparison
          </p>
        </div>

        {/* Assumptions Card */}
        <div className="animate-slide-in-up delay-200 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="font-syne text-xl flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Scenario Assumptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="text-2xl font-bold font-jetbrains">{teamSize} people</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time Saved per Person</p>
                  <p className="text-2xl font-bold font-jetbrains">{hoursSavedPerWeek} hrs/week</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hourly Rate</p>
                  <p className="text-2xl font-bold font-jetbrains">{formatCurrency(hourlyRate)}/hr</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in delay-400 fill-backwards">
          {/* Level 3 Card */}
          <Card className="border-2 border-destructive/40 hover:scale-102 transition-all">
            <CardHeader className="bg-destructive/5">
              <CardTitle className="font-syne text-2xl flex items-center justify-between">
                <span>Level 3</span>
                <Badge variant="outline" className="border-destructive text-destructive">
                  {LEVEL_3_ECONOMICS.adoptionRate}% adoption
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Net Benefit</p>
                  <p className={`text-3xl font-bold font-jetbrains ${level3ROI.monthlyNetBenefit < 0 ? 'text-destructive' : 'text-success'}`}>
                    {formatCurrency(level3ROI.monthlyNetBenefit)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual Net Benefit</p>
                  <p className={`text-2xl font-bold font-jetbrains ${level3ROI.annualNetBenefit < 0 ? 'text-destructive' : 'text-success'}`}>
                    {formatCurrency(level3ROI.annualNetBenefit)}
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">Payback Period</p>
                  <p className="text-xl font-semibold">
                    {level3ROI.paybackPeriodMonths === Infinity
                      ? "Never"
                      : `${Math.round(level3ROI.paybackPeriodMonths)} months`}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">Iteration Speed</p>
                  <p className="text-lg">{LEVEL_3_ECONOMICS.iterationTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Level 4 Card */}
          <Card className="border-2 border-[#00BBFF]/60 hover:scale-102 transition-all shadow-glow-blue">
            <CardHeader className="bg-[#00BBFF]/5">
              <CardTitle className="font-syne text-2xl flex items-center justify-between">
                <span>Level 4</span>
                <Badge variant="outline" className="border-[#00BBFF] text-[#00BBFF]">
                  {LEVEL_4_ECONOMICS.adoptionRate}% adoption
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Net Benefit</p>
                  <p className={`text-3xl font-bold font-jetbrains ${level4ROI.monthlyNetBenefit < 0 ? 'text-destructive' : 'text-success'}`}>
                    {formatCurrency(level4ROI.monthlyNetBenefit)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual Net Benefit</p>
                  <p className={`text-2xl font-bold font-jetbrains ${level4ROI.annualNetBenefit < 0 ? 'text-destructive' : 'text-success'}`}>
                    {formatCurrency(level4ROI.annualNetBenefit)}
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">Payback Period</p>
                  <p className="text-xl font-semibold">
                    {level4ROI.paybackPeriodMonths === Infinity
                      ? "Never"
                      : `${Math.round(level4ROI.paybackPeriodMonths)} months`}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">Iteration Speed</p>
                  <p className="text-lg">{LEVEL_4_ECONOMICS.iterationTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Visualization */}
        <div className="animate-slide-in-up delay-600 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="font-syne text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Annual Net Benefit Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={comparisonData}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#525252", fontSize: 14 }}
                    axisLine={{ stroke: "#E5E5E5" }}
                  />
                  <YAxis
                    tick={{ fill: "#525252", fontSize: 14 }}
                    axisLine={{ stroke: "#E5E5E5" }}
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "2px solid #FF4D00",
                      borderRadius: "8px",
                      padding: "12px",
                    }}
                  />
                  <Bar dataKey="annualBenefit" radius={[8, 8, 0, 0]}>
                    {comparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-800 fill-backwards">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
            <p className="relative font-syne text-2xl md:text-3xl font-bold text-primary max-w-4xl">
              {level4ROI.annualNetBenefit > level3ROI.annualNetBenefit && (
                <>
                  Level 4 delivers {formatCurrency(level4ROI.annualNetBenefit - level3ROI.annualNetBenefit)} more in annual value
                  <span className="block mt-2 text-foreground text-xl">
                    Higher adoption + rapid iteration = sustainable competitive advantage
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
