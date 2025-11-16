/**
 * Story Slide Template
 *
 * Purpose: Reusable template for character-driven narrative slides with persona-based learning
 *
 * Use Cases:
 * - Case studies with personas
 * - Role-playing scenarios
 * - Customer journey narratives
 * - Before/After transformation stories
 * - Department-specific examples
 *
 * Key Features:
 * - Persona cards with avatars/icons
 * - Timeline progression (Challenge → Solution → Results)
 * - Metrics and outcomes display
 * - Relatable real-world scenarios
 * - Emotional narrative arc
 * - Visual storytelling
 *
 * How to Adapt:
 * 1. Define your persona(s) and their context
 * 2. Structure the narrative (problem → approach → outcome)
 * 3. Add specific metrics/results
 * 4. Include quotes or testimonials (optional)
 * 5. Customize visual elements (icons, colors, images)
 */

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { User, Target, TrendingUp, Clock, DollarSign, Users, Sparkles, CheckCircle2 } from "lucide-react"

// Define story data structure
interface StoryData {
  persona: {
    name: string
    role: string
    department: string
    icon: React.ReactNode
    context: string
  }
  challenge: {
    title: string
    description: string
    painPoints: string[]
    metrics?: {
      label: string
      value: string
      negative?: boolean
    }[]
  }
  solution: {
    title: string
    approach: string
    keyActions: string[]
    timeline: string
  }
  results: {
    title: string
    outcomes: string[]
    metrics: {
      label: string
      before: string
      after: string
      improvement: string
    }[]
    quote?: string
  }
}

// Sample story data (replace with your content)
const storyData: StoryData = {
  persona: {
    name: "Sarah Chen",
    role: "Sales Operations Manager",
    department: "Sales",
    icon: <User className="h-8 w-8 text-primary" />,
    context: "Managing a team of 12 sales reps at a mid-sized SaaS company"
  },
  challenge: {
    title: "The Challenge",
    description: "Sarah's team was spending 15+ hours per week on manual proposal generation, leading to slow response times and missed opportunities.",
    painPoints: [
      "Each custom proposal took 2-3 hours to create",
      "Inconsistent messaging across sales reps",
      "Delayed follow-ups due to administrative burden",
      "Limited ability to personalize at scale"
    ],
    metrics: [
      { label: "Proposal Turnaround", value: "48-72 hours", negative: true },
      { label: "Win Rate", value: "18%", negative: true },
      { label: "Admin Time/Week", value: "15 hours", negative: true }
    ]
  },
  solution: {
    title: "The Approach",
    approach: "Sarah implemented an AI agent to automate proposal generation using context engineering with CRM data, past winning proposals, and product documentation.",
    keyActions: [
      "Mapped proposal creation process (7 distinct steps)",
      "Identified data sources (CRM, pricing, case studies)",
      "Built context template with company messaging",
      "Defined validation rules for compliance",
      "Tested with 10 pilot proposals"
    ],
    timeline: "2 weeks from discovery to pilot launch"
  },
  results: {
    title: "The Results",
    outcomes: [
      "Reduced proposal creation from 2-3 hours to 15 minutes",
      "Improved messaging consistency across all reps",
      "Enabled same-day proposal delivery",
      "Freed up 12 hours/week per rep for selling activities"
    ],
    metrics: [
      {
        label: "Proposal Turnaround",
        before: "48-72 hours",
        after: "4-6 hours",
        improvement: "90% faster"
      },
      {
        label: "Win Rate",
        before: "18%",
        after: "27%",
        improvement: "+50%"
      },
      {
        label: "Admin Time/Week",
        before: "15 hours",
        after: "3 hours",
        improvement: "80% reduction"
      }
    ],
    quote: "The AI agent didn't replace our sales process—it eliminated the busywork so we could focus on what matters: building relationships and closing deals."
  }
}

export default function StorySlideTemplate() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-6xl w-full space-y-8 lg:space-y-10">

        {/* Header Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="transform -rotate-1">
            <Sparkles className="h-5 w-5 mr-2" />
            Real-World Story
          </Badge>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            SUCCESS STORY
          </h2>

          <p className="font-syne text-xl md:text-2xl text-primary">
            How {storyData.persona.department} transformed their workflow
          </p>
        </div>

        {/* Persona Card */}
        <div className="animate-slide-in-up delay-200 fill-backwards">
          <Card variant="glow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    {storyData.persona.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-syne text-2xl font-bold mb-1">
                    {storyData.persona.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {storyData.persona.role} • {storyData.persona.department}
                  </p>
                  <p className="text-sm leading-relaxed">
                    {storyData.persona.context}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Timeline: Challenge → Solution → Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in delay-400 fill-backwards">

          {/* Challenge */}
          <Card className="border-red-500/40 bg-red-500/5">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-6 w-6 text-red-500" />
                <h3 className="font-bebas text-2xl tracking-tight">
                  {storyData.challenge.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed">
                {storyData.challenge.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-syne text-sm font-bold">Pain Points:</h4>
                <ul className="space-y-1">
                  {storyData.challenge.painPoints.map((point, i) => (
                    <li key={i} className="text-xs leading-relaxed flex items-start gap-2">
                      <span className="text-red-500 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {storyData.challenge.metrics && (
                <div className="pt-3 border-t border-border/50 space-y-2">
                  {storyData.challenge.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{metric.label}</span>
                      <span className="text-sm font-bold text-red-500">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="font-bebas text-2xl tracking-tight">
                  {storyData.solution.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed">
                {storyData.solution.approach}
              </p>

              <div className="space-y-2">
                <h4 className="font-syne text-sm font-bold">Key Actions:</h4>
                <ul className="space-y-1">
                  {storyData.solution.keyActions.map((action, i) => (
                    <li key={i} className="text-xs leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{storyData.solution.timeline}</span>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-green-500/40 bg-green-500/5">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <h3 className="font-bebas text-2xl tracking-tight">
                  {storyData.results.title}
                </h3>
              </div>

              <ul className="space-y-1">
                {storyData.results.outcomes.map((outcome, i) => (
                  <li key={i} className="text-xs leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-border/50 space-y-3">
                {storyData.results.metrics.map((metric, i) => (
                  <div key={i} className="space-y-1">
                    <h5 className="text-xs font-medium">{metric.label}</h5>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">{metric.before}</span>
                      <span>→</span>
                      <span className="font-bold text-green-600">{metric.after}</span>
                      <Badge variant="outline" className="text-xs px-2 py-0 border-green-500/40 text-green-600">
                        {metric.improvement}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote or Testimonial (Optional) */}
        {storyData.results.quote && (
          <div className="animate-fade-in delay-600 fill-backwards">
            <Card className="border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-8 text-center">
                <p className="font-syne text-lg md:text-xl italic leading-relaxed max-w-4xl mx-auto">
                  "{storyData.results.quote}"
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  — {storyData.persona.name}, {storyData.persona.role}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * CUSTOMIZATION GUIDE
 *
 * 1. Update Story Data:
 *    - Replace storyData with your real-world example
 *    - Ensure metrics are accurate and verifiable
 *    - Use actual names/roles or composite personas
 *
 * 2. Adjust Timeline Stages:
 *    - Current: Challenge → Solution → Results
 *    - Alternative: Before → During → After
 *    - Or: Problem → Approach → Impact
 *    - Customize section titles and colors
 *
 * 3. Add Visual Elements:
 *    - Include persona photos/avatars
 *    - Add screenshots of the solution
 *    - Show before/after comparisons visually
 *    - Use charts for metrics
 *
 * 4. Customize Color Coding:
 *    - Challenge: Red (pain/problems)
 *    - Solution: Orange (action/transformation)
 *    - Results: Green (success/outcomes)
 *    - Adjust semantic colors as needed
 *
 * 5. Expand Metrics:
 *    - Add more quantitative results
 *    - Include ROI calculations
 *    - Show time-to-value
 *    - Display cost savings
 *
 * 6. Multiple Personas (Alternative):
 *    - Create array of personas
 *    - Show different departments/roles
 *    - Compare experiences
 *    - Demonstrate cross-functional impact
 *
 * 7. Interactive Elements (Optional):
 *    - Add tabs to switch between different stories
 *    - Include expandable details
 *    - Show timeline progression animation
 *    - Enable filtering by department/role
 *
 * 8. Accessibility:
 *    - Ensure color contrast for all text
 *    - Provide alt text for persona images
 *    - Use semantic HTML for structure
 *    - Test screen reader compatibility
 */
