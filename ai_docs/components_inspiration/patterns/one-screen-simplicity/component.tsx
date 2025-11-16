/**
 * ONE-SCREEN SIMPLICITY PATTERN
 *
 * A clean, minimalist single-screen layout optimized for teaching core concepts
 * with maximum clarity and minimal cognitive load.
 *
 * Key Design Principles:
 * - All information visible without scrolling (fits on one screen)
 * - Staggered animations guide attention sequentially
 * - Clear visual hierarchy through typography and spacing
 * - Conditional styling (warning/transformation states) for semantic clarity
 * - Progressive disclosure through animation delays
 */

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Zap } from 'lucide-react'

interface ConceptItem {
  id: number
  title: string
  principle: string
  value: string
  limitation: string | null
  warning?: boolean
  transformation?: boolean
  highlight?: string
}

export default function OneScreenSimplicityPattern() {
  // Example data structure - replace with your own content
  const concepts: ConceptItem[] = [
    {
      id: 1,
      title: 'First Concept',
      principle: 'Core principle or rule that defines this concept',
      value: 'What value or benefit this provides',
      limitation: 'What limitation or constraint exists',
      warning: false,
      transformation: false
    },
    {
      id: 2,
      title: 'Second Concept',
      principle: 'Another key principle, with a cautionary note',
      value: 'Immediate benefit but with trade-offs',
      limitation: 'Specific constraint to be aware of',
      warning: true // Marks this as requiring caution
    },
    {
      id: 3,
      title: 'Transformation Concept',
      principle: 'A breakthrough or paradigm shift concept',
      value: 'Exponential value and impact',
      limitation: null, // No limitation for transformative concepts
      transformation: true,
      highlight: 'This is where transformation begins'
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-8">
        {/* Header - Clear, Bold, Centered */}
        <div className="text-center space-y-4">
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight">
            THE CORE <span className="text-primary">PRINCIPLE</span><br />
            OF EACH CONCEPT
          </h2>
        </div>

        {/* Concept Cards Grid - Staggered animation reveals */}
        <div className="space-y-4">
          {concepts.map((item, index) => (
            <Card
              key={item.id}
              className={`
                animate-fade-in fill-backwards
                ${item.warning ? 'border-warning/40 bg-warning/5' : ''}
                ${item.transformation ? 'border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5' : ''}
                ${!item.warning && !item.transformation ? 'border-border/50 bg-muted/10' : ''}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Badge and Title */}
                  <div className="lg:col-span-2">
                    <Badge
                      variant={item.transformation ? 'glow' : item.warning ? 'default' : 'outline'}
                      className={`
                        ${item.warning ? 'bg-warning/20 border-warning/40 text-warning' : ''}
                      `}
                    >
                      {item.transformation && <Zap className="h-4 w-4 mr-1" />}
                      {item.warning && <AlertTriangle className="h-4 w-4 mr-1" />}
                      Item {item.id}
                    </Badge>
                    <h3 className="font-syne text-lg font-bold mt-2">{item.title}</h3>
                  </div>

                  {/* Right Column: Detailed Content */}
                  <div className="lg:col-span-10 space-y-3">
                    {/* Principle */}
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                        Principle
                      </p>
                      <p className="text-foreground/90 font-medium">
                        {item.principle}
                      </p>
                    </div>

                    {/* Value and Limitation Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                          Value
                        </p>
                        <p className="text-sm text-foreground/80">
                          {item.value}
                        </p>
                      </div>
                      {item.limitation && (
                        <div>
                          <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                            Limitation
                          </p>
                          <p className="text-sm text-foreground/80">
                            {item.limitation}
                          </p>
                        </div>
                      )}
                      {item.highlight && (
                        <div>
                          <p className={`
                            text-sm font-bold
                            ${item.transformation ? 'text-primary' : ''}
                          `}>
                            ⭐ {item.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Takeaway - Final emphasis with delayed fade-in */}
        <div className="text-center space-y-4 pt-6 animate-fade-in delay-600 fill-backwards">
          <p className="font-syne text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
            Items 1-2 establish <strong>foundational knowledge</strong>. Item 3 represents the <span className="text-primary font-bold">transformation point</span> where exponential value begins.
          </p>
        </div>
      </div>
    </section>
  )
}
