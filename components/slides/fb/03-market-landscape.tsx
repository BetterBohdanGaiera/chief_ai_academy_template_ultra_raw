'use client'

/**
 * Slide 03: Market Landscape
 * Interactive positioning quadrant + win rate bar chart
 *
 * Pattern: Interactive Positioning Quadrant + Data Visualization
 * Skill: artifacts-builder
 */

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GrainOverlay } from '@/components/decorative/grain-overlay'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { Target, TrendingUp } from 'lucide-react'

// Competitor data with positioning coordinates (0-100 scale)
// X-axis: 0 = Complex, 100 = Simple
// Y-axis: 0 = SMB, 100 = Enterprise
const competitors = [
  {
    id: 'monday',
    name: 'monday.com',
    x: 75,
    y: 25,
    arr: '~$800M',
    tagline: 'Work OS - Massive brand spend',
    weakness: 'Premium pricing, feature complexity',
    color: '#64748B'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    x: 25,
    y: 30,
    arr: '~$150-200M',
    tagline: 'Feature factory, aggressive pricing',
    weakness: 'Overwhelming UI, reliability issues',
    color: '#64748B'
  },
  {
    id: 'notion',
    name: 'Notion',
    x: 50,
    y: 35,
    arr: '~$250-350M',
    tagline: 'Strong brand love, flexibility',
    weakness: 'Limited PM features, scaling issues',
    color: '#64748B'
  },
  {
    id: 'asana',
    name: 'Asana',
    x: 55,
    y: 70,
    arr: '~$650M',
    tagline: 'Enterprise-focused, established',
    weakness: 'Dated UX, premium pricing',
    color: '#64748B'
  },
  {
    id: 'wrike',
    name: 'Wrike',
    x: 20,
    y: 85,
    arr: '~$300-400M',
    tagline: 'Enterprise stalwart',
    weakness: 'Expensive, steep learning curve',
    color: '#64748B'
  },
  {
    id: 'techflow',
    name: 'TechFlow',
    x: 50,
    y: 50,
    arr: '$8.2M',
    tagline: 'AI + Resource Planning + Time Tracking',
    weakness: 'Brand awareness, market presence',
    color: '#00897B',
    isHighlighted: true
  }
]

// Win rate data
const winRates = [
  { competitor: 'vs Spreadsheets', rate: 73, color: '#00897B' },
  { competitor: 'vs ClickUp', rate: 61, color: '#00897B' },
  { competitor: 'vs monday', rate: 52, color: '#00897B' },
  { competitor: 'vs Asana', rate: 45, color: '#FF9800' }
]

export default function MarketLandscapeSlide() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null)
  const selectedData = competitors.find(c => c.id === selectedCompetitor)

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <GeometricPattern type="dots" className="opacity-8" />
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <Badge variant="glow" className="transform -rotate-1">
            <Target className="h-4 w-4 mr-2" aria-hidden="true" />
            Market Context
          </Badge>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-tight">
            COMPETITIVE <span className="text-primary">LANDSCAPE</span>
          </h2>
          <p className="font-syne text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hover over competitors to explore positioning details
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Positioning Quadrant */}
          <Card className="p-4 md:p-6 animate-fade-in delay-200 fill-backwards">
            <CardContent className="p-0">
              <h3 className="font-syne font-bold text-lg mb-4 text-center">
                Market Positioning
              </h3>

              {/* Quadrant SVG */}
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  role="img"
                  aria-label="Competitive positioning quadrant showing TechFlow in mid-market position"
                >
                  {/* Background */}
                  <rect width="400" height="400" fill="#F8FAFB" rx="8" />

                  {/* Grid lines */}
                  <line x1="200" y1="40" x2="200" y2="360" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="200" x2="360" y2="200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4" />

                  {/* Axis labels */}
                  <text x="200" y="25" textAnchor="middle" className="fill-foreground text-xs font-medium">Enterprise</text>
                  <text x="200" y="390" textAnchor="middle" className="fill-foreground text-xs font-medium">SMB</text>
                  <text x="15" y="205" textAnchor="middle" className="fill-foreground text-xs font-medium" transform="rotate(-90 15 205)">Complex</text>
                  <text x="385" y="205" textAnchor="middle" className="fill-foreground text-xs font-medium" transform="rotate(90 385 205)">Simple</text>

                  {/* Quadrant labels */}
                  <text x="100" y="100" textAnchor="middle" className="fill-muted-foreground/40 text-[10px]">Enterprise Complex</text>
                  <text x="300" y="100" textAnchor="middle" className="fill-muted-foreground/40 text-[10px]">Enterprise Simple</text>
                  <text x="100" y="300" textAnchor="middle" className="fill-muted-foreground/40 text-[10px]">SMB Complex</text>
                  <text x="300" y="300" textAnchor="middle" className="fill-muted-foreground/40 text-[10px]">SMB Simple</text>

                  {/* Competitors */}
                  {competitors.map((comp) => {
                    // Convert 0-100 coordinates to SVG space (40-360)
                    const svgX = 40 + (comp.x / 100) * 320
                    const svgY = 360 - (comp.y / 100) * 320 // Invert Y for SVG
                    const isSelected = selectedCompetitor === comp.id
                    const isHighlighted = comp.isHighlighted

                    return (
                      <g key={comp.id}>
                        {/* Highlight ring for TechFlow */}
                        {isHighlighted && (
                          <circle
                            cx={svgX}
                            cy={svgY}
                            r="28"
                            fill="none"
                            stroke="#00897B"
                            strokeWidth="2"
                            strokeDasharray="4"
                            className="animate-pulse"
                            opacity="0.5"
                          />
                        )}

                        {/* Competitor dot */}
                        <circle
                          cx={svgX}
                          cy={svgY}
                          r={isHighlighted ? 20 : isSelected ? 18 : 14}
                          fill={isSelected || isHighlighted ? comp.color : '#94A3B8'}
                          className="cursor-pointer transition-all duration-300"
                          onMouseEnter={() => setSelectedCompetitor(comp.id)}
                          onMouseLeave={() => setSelectedCompetitor(null)}
                          onClick={() => setSelectedCompetitor(selectedCompetitor === comp.id ? null : comp.id)}
                          style={{ filter: isSelected || isHighlighted ? 'drop-shadow(0 0 8px rgba(0, 137, 123, 0.4))' : 'none' }}
                        />

                        {/* Label */}
                        <text
                          x={svgX}
                          y={svgY + (isHighlighted ? 35 : 30)}
                          textAnchor="middle"
                          className={`text-[10px] font-medium ${isHighlighted ? 'fill-primary' : 'fill-foreground'}`}
                        >
                          {comp.name}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>

              {/* Selected Competitor Details */}
              {selectedData && (
                <Card className={`mt-4 p-4 animate-fade-in ${selectedData.isHighlighted ? 'border-primary bg-primary/5' : 'border-border bg-muted/20'}`}>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-syne font-bold ${selectedData.isHighlighted ? 'text-primary' : ''}`}>
                        {selectedData.name}
                      </h4>
                      <Badge variant={selectedData.isHighlighted ? 'glow' : 'outline'} className="text-xs">
                        {selectedData.arr} ARR
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedData.tagline}</p>
                    <p className="text-xs text-warning">{selectedData.weakness}</p>
                  </div>
                </Card>
              )}

              {!selectedData && (
                <div className="mt-4 p-4 text-center text-sm text-muted-foreground border border-dashed border-border rounded-lg">
                  Click or hover on a competitor to see details
                </div>
              )}
            </CardContent>
          </Card>

          {/* Right: Win Rates */}
          <div className="space-y-6 animate-fade-in delay-400 fill-backwards">
            <Card className="p-4 md:p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-syne font-bold text-lg">TechFlow Win Rates</h3>
                </div>

                <div className="space-y-4">
                  {winRates.map((item, index) => (
                    <div
                      key={item.competitor}
                      className="space-y-2 animate-fade-in fill-backwards"
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.competitor}</span>
                        <span
                          className="font-bebas text-2xl"
                          style={{ color: item.rate >= 50 ? '#00897B' : '#FF9800' }}
                        >
                          {item.rate}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${item.rate}%`,
                            backgroundColor: item.color,
                            animationDelay: `${600 + index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* TechFlow Sweet Spot Callout */}
            <Card className="p-4 md:p-6 border-primary bg-primary/5 animate-fade-in delay-700 fill-backwards">
              <CardContent className="p-0">
                <h4 className="font-syne font-bold text-primary mb-2">
                  TechFlow Sweet Spot
                </h4>
                <p className="text-sm text-foreground/80">
                  <span className="font-semibold">Mid-market (50-500 employees)</span> with unique combination:
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Everything Asana does (Project Management)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Everything Harvest does (Time Tracking)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    AI that actually works (FlowAI)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
