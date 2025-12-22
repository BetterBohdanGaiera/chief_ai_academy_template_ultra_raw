"use client"

import { useState } from "react"
import { Calculator, DollarSign, TrendingUp, Sparkles, Package, Wrench, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"
import Image from "next/image"

// Ready Solutions data
const readySolutions = [
  { name: "Reddit Radar Starter", price: 19.99, features: "100 AI messages" },
  { name: "Reddit Radar Pro", price: 39.99, features: "300 AI messages" },
  { name: "Promotee", price: 59, features: "Per account automation" },
  { name: "OGTool Starter", price: 99, features: "Monitoring + AI" },
  { name: "GummySearch Pro", price: 59, features: "Monitoring only" },
]

// Own System Components
const ownSystemComponents = [
  { name: "Antidetect (DICloak)", price: 8, note: "from $8/mo" },
  { name: "Reddit API (basic)", price: 2, note: "~$2/mo monitoring" },
  { name: "Reddit API (active)", price: 120, note: "~$120/mo for bot" },
  { name: "Claude/GPT API", price: 15, note: "$3-30 per 1M tokens" },
  { name: "Proxies", price: 30, note: "$10-50/mo" },
  { name: "Accounts", price: 25, note: "One-time $0.03-50 each" },
]

export default function EconomicsROI() {
  const [viewMode, setViewMode] = useState<"basic" | "active">("basic")

  // Calculate totals
  const readyTotal = 39.99 + 59 * 3 // Pro + 3 Promotee accounts
  const ownBasicTotal = 8 + 2 + 15 + 30 + 25 // Basic monitoring setup
  const ownActiveTotal = 8 + 120 + 15 + 30 + 25 // Active bot setup

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const comparisonData = [
    {
      name: "Ready\nSolutions",
      monthlyCost: readyTotal,
      color: "#FF9800",
    },
    {
      name: "Own System\n(Basic)",
      monthlyCost: ownBasicTotal,
      color: "#00897B",
    },
    {
      name: "Own System\n(Active)",
      monthlyCost: ownActiveTotal,
      color: "#1E3A5F",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365032303-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="grid" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Calculator className="h-5 w-5 mr-2" />
            ROI ANALYSIS
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Economics &amp; ROI
            <span className="block text-primary mt-2">Cost Comparison Framework</span>
          </h2>
        </div>

        {/* Cost Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-in-up delay-200 fill-backwards">
          {/* Ready Solutions Card */}
          <Card className="border-2 border-warning/40 hover:border-warning/60 transition-all">
            <CardHeader className="bg-warning/10">
              <CardTitle className="font-syne text-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-warning" />
                  Ready Solutions
                </div>
                <Badge variant="outline" className="border-warning text-warning">
                  Higher Cost
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {readySolutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-warning/5 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-sm">{solution.name}</p>
                    <p className="text-xs text-muted-foreground">{solution.features}</p>
                  </div>
                  <p className="font-jetbrains text-lg font-bold text-warning">
                    {formatCurrency(solution.price)}
                    <span className="text-xs text-muted-foreground">/mo</span>
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t border-border mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Example: Pro + 3 accounts</p>
                  <p className="font-jetbrains text-xl font-bold text-warning">
                    {formatCurrency(readyTotal)}/mo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Own System Card */}
          <Card className="border-2 border-primary/40 hover:border-primary/60 transition-all shadow-glow">
            <CardHeader className="bg-primary/10">
              <CardTitle className="font-syne text-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Own System
                </div>
                <Badge variant="outline" className="border-primary text-primary">
                  + Your Time
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {ownSystemComponents.map((component, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-sm">{component.name}</p>
                    <p className="text-xs text-muted-foreground">{component.note}</p>
                  </div>
                  <p className="font-jetbrains text-lg font-bold text-primary">
                    {formatCurrency(component.price)}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t border-border mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Basic setup</p>
                  <p className="font-jetbrains text-lg font-bold text-primary">
                    ~{formatCurrency(ownBasicTotal)}/mo
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Active bot</p>
                  <p className="font-jetbrains text-lg font-bold text-[#1E3A5F]">
                    ~{formatCurrency(ownActiveTotal)}/mo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Visualization */}
        <div className="animate-slide-in-up delay-400 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="font-syne text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Monthly Cost Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={comparisonData}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#525252", fontSize: 12 }}
                    axisLine={{ stroke: "#E5E5E5" }}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fill: "#525252", fontSize: 12 }}
                    axisLine={{ stroke: "#E5E5E5" }}
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip
                    formatter={(value: number) => [formatCurrency(value), "Monthly Cost"]}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "2px solid #00897B",
                      borderRadius: "8px",
                      padding: "12px",
                    }}
                  />
                  <Bar dataKey="monthlyCost" radius={[8, 8, 0, 0]}>
                    {comparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Case Study Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-600 fill-backwards">
          {/* Case Study */}
          <Card className="border-2 border-success/40 bg-success/5 shadow-glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-success/20">
                  <Sparkles className="h-8 w-8 text-success" />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-success text-success">
                    Case Study
                  </Badge>
                  <p className="font-jetbrains text-4xl font-bold text-success">
                    $173
                  </p>
                  <p className="text-sm text-foreground/80">
                    Earned in <span className="font-bold">3 days</span> with Reddit automation
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Promotee claims <span className="font-semibold">40%+ reply rate</span> on AI messages
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Framework */}
          <Card className="border-2 border-primary/30">
            <CardContent className="p-6">
              <h3 className="font-syne text-lg font-bold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                ROI Calculation Framework
              </h3>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold text-xs">1</span>
                  <span>Determine target volume (responses/mo, accounts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold text-xs">2</span>
                  <span>Calculate ready solution cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold text-xs">3</span>
                  <span>Calculate own system cost + your time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold text-xs">4</span>
                  <span>Factor in quality (generic vs value-first)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold text-xs">5</span>
                  <span>Find your break-even point</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 max-w-4xl mx-auto animate-fade-in delay-800 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardContent className="p-6">
              <p className="font-syne text-xl md:text-2xl font-bold text-primary">
                Own system saves {formatCurrency(readyTotal - ownBasicTotal)}/mo at basic level
                <span className="block mt-2 text-foreground">
                  Plus you get <span className="text-success">value-first responses</span> instead of <span className="text-destructive">generic spam</span>
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
