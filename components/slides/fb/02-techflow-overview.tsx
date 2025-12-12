'use client'

/**
 * FB-02: TechFlow Overview Slide
 * Company context with key metrics, FlowAI features, and credibility indicators
 *
 * Pattern: Metric Cards Grid + Feature Highlight Section
 * Skill: artifacts-builder
 *
 * Purpose: Provide essential company context so feedback is grounded in reality
 * Visual Focus: Metrics cards for key numbers, product feature highlights for FlowAI
 */

import { useState } from 'react'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern, GradientMesh } from '@/components/decorative/geometric-patterns'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  TrendingUp,
  Users,
  DollarSign,
  Percent,
  Sparkles,
  MessageSquare,
  Calendar,
  Brain,
  Search,
  BarChart3,
  Building2
} from 'lucide-react'

// Key metrics data
const metrics = [
  {
    id: 'arr',
    label: 'ARR',
    value: '$8.2M',
    subtext: 'Annual Recurring Revenue',
    icon: DollarSign,
    color: 'text-primary'
  },
  {
    id: 'growth',
    label: 'Growth',
    value: '164%',
    subtext: 'Year-over-Year',
    icon: TrendingUp,
    color: 'text-emerald-600'
  },
  {
    id: 'seats',
    label: 'Paid Seats',
    value: '31K',
    subtext: '~1,100 Organizations',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    id: 'nrr',
    label: 'NRR',
    value: '118%',
    subtext: 'Net Revenue Retention',
    icon: Percent,
    color: 'text-amber-600'
  }
]

// FlowAI features
const flowAIFeatures = [
  { id: 'suggestions', label: 'Smart Task Suggestions', icon: Sparkles },
  { id: 'status', label: 'Automated Status Updates', icon: BarChart3 },
  { id: 'meetings', label: 'Meeting Summaries', icon: Calendar },
  { id: 'allocation', label: 'Resource Allocation', icon: Users },
  { id: 'askflow', label: '"Ask Flow" Natural Language', icon: Search },
  { id: 'insights', label: 'AI-Powered Insights', icon: Brain }
]

// Customer logos (represented as names for now)
const customerLogos = ['Figma', 'Calm', 'Webflow']

export default function TechFlowOverviewSlide() {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background */}
      <GradientMesh variant="warm" />
      <GeometricPattern type="grid" className="opacity-10" />
      <GrainOverlay opacity={0.2} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 py-8 space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <Badge variant="glow" className="text-sm px-4 py-2">
            <Building2 className="h-4 w-4 mr-2" aria-hidden="true" />
            Company Overview
          </Badge>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-tight">
            TechFlow at a <span className="text-primary">Glance</span>
          </h2>
          <p className="font-syne text-lg md:text-xl text-muted-foreground">
            Founded 2021 | 147 Employees | Austin, TX
          </p>
        </div>

        {/* Founder Credibility Badge */}
        <div className="flex justify-center animate-fade-in delay-100 fill-backwards">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary/40 text-foreground">
            <span className="text-primary font-semibold">Ex-Google</span>
            <span className="mx-2 text-muted-foreground">+</span>
            <span className="text-primary font-semibold">Ex-Atlassian</span>
            <span className="ml-2 text-muted-foreground">founders</span>
          </Badge>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon
            const isHovered = hoveredMetric === metric.id

            return (
              <Card
                key={metric.id}
                variant={isHovered ? 'glow' : 'default'}
                className={`
                  cursor-pointer transition-all duration-300
                  ${isHovered ? 'scale-105 -translate-y-1' : 'hover:scale-102'}
                  animate-fade-in fill-backwards
                `}
                style={{ animationDelay: `${idx * 100 + 200}ms` }}
                onMouseEnter={() => setHoveredMetric(metric.id)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <CardContent className="p-4 text-center space-y-2">
                  <div className={`mx-auto w-10 h-10 rounded-xl flex items-center justify-center ${isHovered ? 'bg-primary/20' : 'bg-muted'} transition-colors`}>
                    <Icon className={`h-5 w-5 ${metric.color}`} aria-hidden="true" />
                  </div>
                  <div className="font-bebas text-3xl md:text-4xl tracking-tight">
                    {metric.value}
                  </div>
                  <div className="space-y-1">
                    <div className="font-syne font-semibold text-sm text-foreground">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.subtext}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FlowAI Section */}
        <div className="space-y-3 animate-fade-in delay-600 fill-backwards">
          <div className="flex items-center justify-center gap-2">
            <Brain className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="font-syne font-bold text-lg md:text-xl text-foreground">
              FlowAI <span className="text-muted-foreground font-normal">(Launched Sept 2024)</span>
            </h3>
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            "Everything Asana does + everything Harvest does + AI that actually works"
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {flowAIFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.id}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors animate-fade-in fill-backwards"
                  style={{ animationDelay: `${idx * 50 + 700}ms` }}
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-xs text-center text-foreground font-medium">
                    {feature.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Customer Logos */}
        <div className="space-y-2 animate-fade-in delay-900 fill-backwards">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-wider">
            Trusted by leading teams
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-10">
            {customerLogos.map((logo) => (
              <Badge
                key={logo}
                variant="outline"
                className="text-sm px-4 py-2 border-border/50 text-muted-foreground bg-muted/20 hover:border-primary/40 transition-colors"
              >
                {logo}
                <span className="ml-1 text-xs text-muted-foreground/60">
                  {logo === 'Figma' ? '200+ seats' : ''}
                </span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
