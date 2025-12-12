'use client'

/**
 * Slide 04: Campaign Context
 * Budget donut chart + Timeline + Decision callout cards
 *
 * Pattern: Data Dashboard + Decision Callouts
 * Skill: artifacts-builder
 */

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import {
  DollarSign,
  Calendar,
  Target,
  AlertTriangle,
  TrendingUp,
  Users,
  Globe,
  Briefcase
} from 'lucide-react'

// Budget breakdown data
const budgetData = [
  { name: 'Media', amount: 180000, percentage: 72, color: '#00897B' },
  { name: 'Creative', amount: 40000, percentage: 16, color: '#1E3A5F' },
  { name: 'Agency', amount: 30000, percentage: 12, color: '#64748B' }
]

// Decision gaps
const decisionGaps = [
  {
    id: 'positioning',
    title: "What's our 'Why TechFlow' story?",
    description: 'Need clear differentiation message for mid-market buyers',
    icon: Target
  },
  {
    id: 'persona',
    title: 'Who is the real buyer persona?',
    description: 'Current personas too vague - need specific role + pain points',
    icon: Users
  },
  {
    id: 'quality',
    title: 'What defines MQL quality?',
    description: 'Beyond 500 MQLs - what signals a qualified lead?',
    icon: TrendingUp
  }
]

// Target audience badges
const audienceBadges = [
  { label: 'Mid-market 50-500 emp', icon: Briefcase },
  { label: 'US Primary', icon: Globe },
  { label: 'Tech 40%', icon: Target }
]

export default function CampaignContextSlide() {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)

  // Calculate donut chart paths
  const total = budgetData.reduce((sum, item) => sum + item.amount, 0)
  let cumulativePercentage = 0

  const getArcPath = (startPercent: number, endPercent: number, radius: number, innerRadius: number) => {
    const startAngle = (startPercent / 100) * 360 - 90
    const endAngle = (endPercent / 100) * 360 - 90

    const startRadians = (startAngle * Math.PI) / 180
    const endRadians = (endAngle * Math.PI) / 180

    const x1 = 100 + radius * Math.cos(startRadians)
    const y1 = 100 + radius * Math.sin(startRadians)
    const x2 = 100 + radius * Math.cos(endRadians)
    const y2 = 100 + radius * Math.sin(endRadians)

    const x3 = 100 + innerRadius * Math.cos(endRadians)
    const y3 = 100 + innerRadius * Math.sin(endRadians)
    const x4 = 100 + innerRadius * Math.cos(startRadians)
    const y4 = 100 + innerRadius * Math.sin(startRadians)

    const largeArcFlag = endPercent - startPercent > 50 ? 1 : 0

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <GeometricPattern type="grid" className="opacity-10" />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-6 space-y-5">
        {/* Header */}
        <div className="text-center space-y-2 animate-fade-in">
          <Badge variant="glow" className="transform -rotate-1">
            <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
            Campaign Brief
          </Badge>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Q1 2025 <span className="text-primary">CAMPAIGN CONTEXT</span>
          </h2>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column (3/5) - Budget & Timeline */}
          <div className="lg:col-span-3 space-y-5 animate-fade-in delay-200 fill-backwards">
            {/* Budget Donut Chart */}
            <Card className="p-4 md:p-5">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <h3 className="font-syne font-bold text-base">Budget Allocation - $250K Total</h3>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Donut Chart SVG */}
                  <div className="relative w-44 h-44 flex-shrink-0">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {budgetData.map((segment, index) => {
                        const startPercent = cumulativePercentage
                        cumulativePercentage += segment.percentage
                        const endPercent = cumulativePercentage
                        const isHovered = hoveredSegment === segment.name

                        return (
                          <path
                            key={segment.name}
                            d={getArcPath(startPercent, endPercent, isHovered ? 85 : 80, 50)}
                            fill={segment.color}
                            className="cursor-pointer transition-all duration-300"
                            onMouseEnter={() => setHoveredSegment(segment.name)}
                            onMouseLeave={() => setHoveredSegment(null)}
                            style={{
                              filter: isHovered ? 'drop-shadow(0 0 8px rgba(0, 137, 123, 0.4))' : 'none',
                              opacity: hoveredSegment && !isHovered ? 0.5 : 1
                            }}
                          />
                        )
                      })}

                      {/* Center text */}
                      <text x="100" y="95" textAnchor="middle" className="fill-foreground font-bebas text-2xl">
                        $250K
                      </text>
                      <text x="100" y="115" textAnchor="middle" className="fill-muted-foreground text-xs">
                        Total Budget
                      </text>
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="flex-1 space-y-3">
                    {budgetData.map((item) => {
                      // Reset cumulative for arc calculation in render
                      const isHovered = hoveredSegment === item.name
                      return (
                        <div
                          key={item.name}
                          className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHovered ? 'bg-primary/10' : 'hover:bg-muted/50'}`}
                          onMouseEnter={() => setHoveredSegment(item.name)}
                          onMouseLeave={() => setHoveredSegment(null)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium text-sm">{item.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bebas text-lg" style={{ color: item.color }}>
                              {item.percentage}%
                            </span>
                            <span className="text-xs text-muted-foreground ml-2">
                              (${(item.amount / 1000).toFixed(0)}K)
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline & Audience Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Timeline */}
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <h4 className="font-syne font-bold text-sm">Campaign Timeline</h4>
                  </div>

                  <div className="space-y-2">
                    {/* Timeline bar */}
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/60 rounded-full" style={{ width: '100%' }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Feb 1, 2025</span>
                      <span className="font-medium text-foreground">3 months</span>
                      <span>Apr 30, 2025</span>
                    </div>
                  </div>

                  {/* Goal */}
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Primary Goal</span>
                      <span className="font-bebas text-xl text-primary">500 MQLs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Target Audience */}
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-primary" />
                    <h4 className="font-syne font-bold text-sm">Target Audience</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {audienceBadges.map((badge) => (
                      <Badge
                        key={badge.label}
                        variant="outline"
                        className="text-xs py-1.5"
                      >
                        <badge.icon className="h-3 w-3 mr-1" />
                        {badge.label}
                      </Badge>
                    ))}
                  </div>

                  {/* Previous Campaign */}
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-1">Previous Campaign (Q4 2023)</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">$80K</span>
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="font-bebas text-lg text-primary">$127K ARR</span>
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                        1.6x ROAS
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column (2/5) - Decision Gaps */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in delay-400 fill-backwards">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <h3 className="font-syne font-bold text-base">Decisions Needed</h3>
            </div>

            {decisionGaps.map((gap, index) => {
              const Icon = gap.icon
              return (
                <Card
                  key={gap.id}
                  className="p-4 border-warning/40 bg-warning/5 hover:border-warning hover:shadow-[0_0_20px_rgba(255,152,0,0.15)] transition-all duration-300 animate-fade-in fill-backwards"
                  style={{ animationDelay: `${500 + index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-warning/10">
                        <Icon className="h-5 w-5 text-warning" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-warning/50 text-warning">
                            Gap {index + 1}
                          </Badge>
                        </div>
                        <h4 className="font-syne font-bold text-sm text-foreground mb-1">
                          {gap.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {gap.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Transition hint */}
            <div className="pt-3 text-center">
              <p className="text-xs text-muted-foreground italic">
                Your feedback on these gaps will shape the campaign strategy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
