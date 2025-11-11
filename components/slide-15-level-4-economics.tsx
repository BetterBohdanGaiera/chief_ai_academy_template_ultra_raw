"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

export function Slide15Level4Economics() {
  const comparisonData = [
    {
      category: "Cost",
      level3: -35,
      level4: -58,
    },
    {
      category: "Value",
      level3: 5,
      level4: 225,
    },
    {
      category: "Net Result",
      level3: -30,
      level4: 167,
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Level 4 vs Level 3
          </h2>
          <p className="text-2xl md:text-3xl text-primary font-semibold text-pretty leading-relaxed">
            The Real Economics
          </p>
        </div>

        {/* Comparison Chart */}
        <Card className="border-primary/40 bg-card">
          <CardContent className="p-8">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={comparisonData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="category" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => `$${Math.abs(value)}K`}
                />
                <Legend />
                <Bar dataKey="level3" name="Level 3" radius={[0, 8, 8, 0]}>
                  {comparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="hsl(var(--destructive))" />
                  ))}
                </Bar>
                <Bar dataKey="level4" name="Level 4" radius={[0, 8, 8, 0]}>
                  {comparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Level 3 Reality */}
          <Card className="border-destructive/40 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-warning text-warning-foreground text-xl font-bold px-4 py-2">Level 3</Badge>
                <TrendingDown className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Reality</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Cost:</p>
                    <p className="text-muted-foreground">$35K/year (licenses, integration, maintenance)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Value:</p>
                    <p className="text-muted-foreground">$5K/year (low adoption, poor quality)</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-destructive/20">
                  <p className="text-2xl font-bold text-destructive">Net Result: -$30K/year ❌</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Plus: Organizational AI resistance for 12-18 months
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Level 4 Investment */}
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary text-primary-foreground text-xl font-bold px-4 py-2">Level 4</Badge>
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Investment</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Initial Build:</p>
                    <p className="text-muted-foreground">$40-50K (one-time)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Ongoing:</p>
                    <p className="text-muted-foreground">$8K/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">First Year Total:</p>
                    <p className="text-muted-foreground">~$58K</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Level 4 Value & Result */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Level 4 Value</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Time Savings:</span>
                  <span>$80-150K/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Consistency:</span>
                  <span>$20-50K/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Scalability:</span>
                  <span>$50-100K/year</span>
                </div>
                <div className="pt-4 border-t border-primary/20">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">$150-300K/year</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/60 bg-gradient-to-br from-primary/20 to-primary/5">
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <div className="text-center space-y-4">
                <p className="text-3xl font-bold text-primary">Net Result:</p>
                <p className="text-4xl md:text-5xl font-bold text-primary">+$100K-$250K/year ✅</p>
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-2xl font-bold">Payback Period:</p>
                  <p className="text-3xl font-bold text-primary">1-2 months</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Level 4 Works */}
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-10">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Level 4 Works - The Economics of Iteration</h3>
            <p className="text-xl leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              The PRIMARY Differentiator is <span className="font-bold text-primary">LOW COST OF FEEDBACK</span>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">Level 3:</p>
                <p className="text-base text-muted-foreground">
                  1-2 iterations/month → 3-5 total → 70% usability → Abandoned
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 text-primary">Level 4:</p>
                <p className="text-base">10-20 iterations/day → 200+ total → 95%+ usability → Reliable</p>
              </div>
            </div>
            <div className="pt-8 border-t border-primary/20 mt-8">
              <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                <span className="font-bold">The "Real Pasta" Metaphor:</span> Real Pasta - Chef tastes → adjusts →
                tests → refines → perfection through iteration. Quick Noodles - Pour water → wait → done → no
                refinement, stuck with result. Both connect to your kitchen, but only one allows the feedback needed
                for excellence.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Insight */}
        <div className="text-center pt-4">
          <p className="text-2xl md:text-3xl font-bold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            Level 4's advantage isn't just "custom" - it's ITERATIVE. The ability to improve rapidly through low-cost
            feedback is what delivers transformation.
          </p>
        </div>
      </div>
    </section>
  )
}
