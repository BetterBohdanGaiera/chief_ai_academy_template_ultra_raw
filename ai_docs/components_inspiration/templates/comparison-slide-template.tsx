/**
 * Comparison Slide Template
 *
 * Purpose: Reusable template for side-by-side or multi-option comparison slides
 *
 * Use Cases:
 * - Before/After scenarios
 * - Feature comparisons
 * - Option evaluation
 * - Pros/Cons analysis
 * - Level comparisons
 *
 * Key Features:
 * - Responsive multi-column grid
 * - Visual parity (equal emphasis on all options)
 * - Color-coded differentiation
 * - Checkmark/X icon lists
 * - Highlighted recommendations
 * - Semantic HTML for accessibility
 *
 * How to Adapt:
 * 1. Define your comparison data structure
 * 2. Update column count (2, 3, or 4 columns)
 * 3. Customize color coding for differentiation
 * 4. Add/remove comparison criteria
 * 5. Include recommendation logic if needed
 */

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, TrendingUp, TrendingDown, Minus, Sparkles } from "lucide-react"

// Define comparison data structure
interface ComparisonOption {
  id: string
  title: string
  subtitle: string
  badgeVariant?: "default" | "outline" | "glow" | "gradient"
  badgeText?: string
  pros: string[]
  cons: string[]
  neutral?: string[]
  highlighted?: boolean
  recommendation?: string
}

// Sample comparison data (replace with your content)
const comparisonData: ComparisonOption[] = [
  {
    id: "option-a",
    title: "Option A",
    subtitle: "Traditional Approach",
    badgeText: "Current State",
    badgeVariant: "outline",
    pros: [
      "Well understood by team",
      "Established processes",
      "Lower initial cost"
    ],
    cons: [
      "Slower iteration cycles",
      "Manual oversight required",
      "Limited scalability"
    ],
    neutral: [
      "Moderate learning curve"
    ]
  },
  {
    id: "option-b",
    title: "Option B",
    subtitle: "Modern Approach",
    badgeText: "Recommended",
    badgeVariant: "glow",
    pros: [
      "Faster iteration cycles",
      "Automated workflows",
      "Scales with growth"
    ],
    cons: [
      "Requires upfront investment",
      "New skills needed",
      "Change management overhead"
    ],
    highlighted: true,
    recommendation: "Best for teams ready to invest in long-term efficiency"
  },
  {
    id: "option-c",
    title: "Option C",
    subtitle: "Hybrid Approach",
    badgeText: "Alternative",
    badgeVariant: "gradient",
    pros: [
      "Balances familiarity and innovation",
      "Incremental adoption path",
      "Lower risk"
    ],
    cons: [
      "Complexity of managing both systems",
      "May not realize full benefits",
      "Potential for confusion"
    ],
    neutral: [
      "Medium timeline to value"
    ]
  }
]

export default function ComparisonSlideTemplate() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-7xl w-full space-y-8 lg:space-y-10">

        {/* Header Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="transform -rotate-1">
            <Sparkles className="h-5 w-5 mr-2" />
            Module XX: Decision Framework
          </Badge>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            COMPARE YOUR OPTIONS
          </h2>

          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Evaluate different approaches to find the best fit for your organization
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-200 fill-backwards">
          {comparisonData.map((option, index) => (
            <Card
              key={option.id}
              variant={option.highlighted ? "glow" : "default"}
              className={`
                transition-all duration-300 hover:scale-102
                ${option.highlighted ? "border-primary/60" : "border-border/50"}
                animate-fade-in delay-${(index + 3) * 100} fill-backwards
              `}
            >
              <CardContent className="p-6 space-y-4">

                {/* Option Header */}
                <div className="text-center space-y-2">
                  {option.badgeText && (
                    <Badge variant={option.badgeVariant || "default"}>
                      {option.badgeText}
                    </Badge>
                  )}

                  <h3 className="font-bebas text-3xl md:text-4xl tracking-tight">
                    {option.title}
                  </h3>

                  <p className="font-syne text-sm text-muted-foreground">
                    {option.subtitle}
                  </p>
                </div>

                {/* Pros Section */}
                {option.pros.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-syne text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cons Section */}
                {option.cons.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-syne text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                      <TrendingDown className="h-4 w-4" />
                      Considerations
                    </h4>
                    <ul className="space-y-2">
                      {option.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Neutral Points (Optional) */}
                {option.neutral && option.neutral.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-syne text-sm font-bold text-muted-foreground flex items-center gap-2">
                      <Minus className="h-4 w-4" />
                      Notes
                    </h4>
                    <ul className="space-y-2">
                      {option.neutral.map((note, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Minus className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                          <span className="leading-relaxed text-muted-foreground">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommendation (if provided) */}
                {option.recommendation && (
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-primary font-medium leading-relaxed">
                      <strong>Best for:</strong> {option.recommendation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary or Call-to-Action */}
        <div className="text-center pt-6 animate-fade-in delay-600 fill-backwards">
          <Card className="max-w-3xl mx-auto border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-6">
              <h3 className="font-syne text-xl font-bold mb-2">Decision Guidance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select the approach that aligns with your team's current capabilities, timeline,
                and long-term strategic goals. Each option has merit depending on your context.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

/**
 * CUSTOMIZATION GUIDE
 *
 * 1. Update Comparison Data:
 *    - Modify comparisonData array with your options
 *    - Add/remove options (2-4 recommended for readability)
 *    - Adjust pros/cons/neutral lists
 *
 * 2. Adjust Column Count:
 *    - 2 columns: `grid-cols-1 md:grid-cols-2`
 *    - 3 columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (current)
 *    - 4 columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
 *
 * 3. Customize Color Coding:
 *    - Pros: Green (text-green-600)
 *    - Cons: Red (text-red-600)
 *    - Neutral: Muted (text-muted-foreground)
 *    - Adjust semantic colors to match your use case
 *
 * 4. Add Comparison Criteria:
 *    - Include cost estimates
 *    - Add timeline indicators
 *    - Show team size requirements
 *    - Display complexity ratings
 *
 * 5. Highlight Recommendations:
 *    - Set `highlighted: true` on recommended option
 *    - Use variant="glow" for visual emphasis
 *    - Add recommendation text for context
 *
 * 6. Table-Based Comparison (Alternative):
 *    - Replace card grid with HTML table
 *    - List criteria in rows, options in columns
 *    - Use checkmarks/X marks for features
 *    - Better for detailed feature matrices
 *
 * 7. Accessibility:
 *    - Ensure color is not the only differentiator (use icons)
 *    - Maintain semantic HTML structure
 *    - Add ARIA labels if using interactive elements
 *    - Test keyboard navigation
 */
