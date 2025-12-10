"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

/**
 * Interactive Comparison Template
 *
 * Generic template for button-toggle comparisons with 2-3 options.
 * Based on the button-toggle-comparison pattern.
 *
 * @example
 * ```tsx
 * const options = [
 *   {
 *     id: "option-a",
 *     label: "Option A",
 *     title: "First Choice",
 *     color: "text-destructive",
 *     bgColor: "bg-destructive/5",
 *     borderColor: "border-destructive/40",
 *     items: [...]
 *   },
 *   {
 *     id: "option-b",
 *     label: "Option B",
 *     title: "Second Choice",
 *     color: "text-success",
 *     bgColor: "bg-success/5",
 *     borderColor: "border-success/40",
 *     items: [...]
 *   }
 * ]
 *
 * <InteractiveComparisonTemplate
 *   badge="COMPARISON"
 *   title="Choose Your Approach"
 *   subtitle="Compare different strategies"
 *   options={options}
 * />
 * ```
 */

interface ComparisonItem {
  title: string
  description: string
  metric?: string
  icon?: React.ComponentType<{ className?: string }>
}

interface ComparisonOption {
  id: string
  label: string
  title: string
  color: string
  bgColor: string
  borderColor: string
  buttonColor?: string
  items: ComparisonItem[]
}

interface InteractiveComparisonTemplateProps {
  badge?: string
  title: string
  subtitle?: string
  options: ComparisonOption[]
  defaultOption?: string
  keyMessage?: string
}

export default function InteractiveComparisonTemplate({
  badge = "COMPARISON",
  title,
  subtitle,
  options,
  defaultOption,
  keyMessage,
}: InteractiveComparisonTemplateProps) {
  const [activeView, setActiveView] = useState(defaultOption || options[0].id)

  const currentOption = options.find((opt) => opt.id === activeView) || options[0]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="diagonal" opacity={0.04} />
      <GrainOverlay opacity={0.2} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2">
            {badge}
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            {title}
          </h2>
          {subtitle && (
            <p className="font-syne text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Interactive Toggle */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-300 fill-backwards flex-wrap">
          {options.map((option) => (
            <Button
              key={option.id}
              variant={activeView === option.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveView(option.id)}
              className={`transition-all duration-300 ${
                activeView === option.id
                  ? option.buttonColor || `${option.color.replace('text-', 'bg-')} hover:opacity-90 text-white`
                  : `hover:${option.bgColor} hover:${option.borderColor}`
              }`}
            >
              {option.label}
            </Button>
          ))}
        </div>

        {/* Comparison Grid - Animated transition */}
        <div className={`grid grid-cols-1 ${
          currentOption.items.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
        } gap-6 animate-fade-in`}>
          {currentOption.items.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={`${activeView}-${index}`}
                className={`${currentOption.borderColor} border-2 transition-all duration-500 hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4 relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 ${currentOption.bgColor} blur-2xl`} />

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-syne text-xl font-bold leading-tight flex-1">
                        {item.title}
                      </h3>
                      {IconComponent && (
                        <IconComponent className={`h-8 w-8 ${currentOption.color} shrink-0`} />
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-base text-foreground/80">{item.description}</p>

                    {/* Metric */}
                    {item.metric && (
                      <div className="pt-2 border-t border-border">
                        <p className={`text-lg font-semibold ${currentOption.color}`}>
                          {item.metric}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Message */}
        {keyMessage && (
          <div className="text-center pt-8 max-w-4xl mx-auto animate-fade-in delay-600 fill-backwards">
            <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
              <CardContent className="p-6 md:p-8">
                <p className="font-syne text-xl md:text-2xl font-bold text-primary">
                  {keyMessage}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
