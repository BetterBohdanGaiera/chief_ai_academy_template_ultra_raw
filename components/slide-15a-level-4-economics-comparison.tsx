"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

export function Slide15aLevel4EconomicsComparison() {
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
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-5xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            Level 4 vs Level 3
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold text-pretty leading-relaxed">
            The Real Economics
          </p>
        </div>

        {/* Comparison Chart */}
        <Card className="border-primary/40 bg-card">
          <CardContent className="p-6 lg:p-8">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="category" type="category" stroke="hsl(var(--muted-foreground))" width={90} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Level 3 Reality */}
          <Card className="border-destructive/40 bg-destructive/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <Badge className="bg-warning text-warning-foreground text-lg font-bold px-3 py-1">Level 3</Badge>
                <TrendingDown className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-5">Reality</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm lg:text-base">Cost:</p>
                    <p className="text-sm text-muted-foreground">$35K/year (licenses, integration, maintenance)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm lg:text-base">Value:</p>
                    <p className="text-sm text-muted-foreground">$5K/year (low adoption, poor quality)</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-destructive/20">
                  <p className="text-xl font-bold text-destructive">Net: -$30K/year ❌</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Plus: AI resistance for 12-18 months
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Level 4 Investment */}
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <Badge className="bg-primary text-primary-foreground text-lg font-bold px-3 py-1">Level 4</Badge>
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-5">Investment</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm lg:text-base">Initial Build:</p>
                    <p className="text-sm text-muted-foreground">$40-50K (one-time)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm lg:text-base">Ongoing:</p>
                    <p className="text-sm text-muted-foreground">$8K/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm lg:text-base">First Year Total:</p>
                    <p className="text-sm text-muted-foreground">~$58K</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
