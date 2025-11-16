"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import { Calculator } from "lucide-react"
import { Slider } from "@/components/ui/slider"

/**
 * Calculator Template
 *
 * Generic template for real-time calculators with sliders/inputs.
 * Based on the realtime-calculator pattern.
 *
 * @example
 * ```tsx
 * const inputs = [
 *   {
 *     id: "teamSize",
 *     label: "Team Size",
 *     min: 5,
 *     max: 100,
 *     step: 5,
 *     defaultValue: 20,
 *     unit: "people"
 *   },
 *   {
 *     id: "hoursSaved",
 *     label: "Hours Saved per Week",
 *     min: 1,
 *     max: 40,
 *     step: 1,
 *     defaultValue: 10,
 *     unit: "hrs/week"
 *   }
 * ]
 *
 * const calculate = (values) => {
 *   return values.teamSize * values.hoursSaved * 52 * 75 // Annual value
 * }
 *
 * <CalculatorTemplate
 *   badge="ROI CALCULATOR"
 *   title="Calculate Your Savings"
 *   inputs={inputs}
 *   calculate={calculate}
 *   resultLabel="Annual Value"
 *   resultFormat="currency"
 * />
 * ```
 */

interface CalculatorInput {
  id: string
  label: string
  min: number
  max: number
  step: number
  defaultValue: number
  unit?: string
}

interface CalculatorTemplateProps {
  badge?: string
  title: string
  subtitle?: string
  inputs: CalculatorInput[]
  calculate: (values: Record<string, number>) => number
  resultLabel: string
  resultFormat?: "currency" | "number" | "percentage"
  resultDescription?: string
  keyInsight?: string
}

export default function CalculatorTemplate({
  badge = "CALCULATOR",
  title,
  subtitle,
  inputs,
  calculate,
  resultLabel,
  resultFormat = "number",
  resultDescription,
  keyInsight,
}: CalculatorTemplateProps) {
  // Initialize state with default values
  const [values, setValues] = useState<Record<string, number>>(
    inputs.reduce((acc, input) => ({
      ...acc,
      [input.id]: input.defaultValue,
    }), {})
  )

  const handleValueChange = (id: string, newValue: number[]) => {
    setValues((prev) => ({
      ...prev,
      [id]: newValue[0],
    }))
  }

  const result = calculate(values)

  const formatResult = (value: number) => {
    switch (resultFormat) {
      case "currency":
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(value)
      case "percentage":
        return `${value.toFixed(1)}%`
      default:
        return value.toLocaleString()
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="grid" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-6xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Calculator className="h-5 w-5 mr-2" />
            {badge}
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            {title}
          </h2>
          {subtitle && (
            <p className="font-syne text-xl md:text-2xl text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Input Controls */}
        <div className="animate-slide-in-up delay-200 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="font-syne text-xl">Adjust Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {inputs.map((input) => (
                <div key={input.id} className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label className="text-sm font-medium text-muted-foreground">
                      {input.label}
                    </label>
                    <span className="text-2xl font-bold font-jetbrains text-primary">
                      {values[input.id]} {input.unit || ""}
                    </span>
                  </div>
                  <Slider
                    value={[values[input.id]]}
                    onValueChange={(newValue) => handleValueChange(input.id, newValue)}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{input.min} {input.unit || ""}</span>
                    <span>{input.max} {input.unit || ""}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Result Display */}
        <div className="animate-fade-in delay-400 fill-backwards">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40">
            <CardContent className="p-8 text-center space-y-4">
              <p className="text-lg font-syne text-muted-foreground">{resultLabel}</p>
              <p className="text-6xl md:text-7xl font-bebas text-primary">
                {formatResult(result)}
              </p>
              {resultDescription && (
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  {resultDescription}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        {keyInsight && (
          <div className="text-center pt-4 animate-fade-in delay-600 fill-backwards">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow-pulse" />
              <p className="relative font-syne text-2xl md:text-3xl font-bold text-primary max-w-4xl px-6">
                {keyInsight}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
