/**
 * TypeScript types for presentation data structures
 * Strongly-typed data for slide content, levels, ROI models, and interactive elements
 */

/**
 * Five Levels Framework Data
 */
export interface LevelData {
  id: number
  name: string
  shortName: string
  principle: string
  description: string
  characteristics: string[]
  risks?: string[]
  guidance?: string[]
  icon: string
  color: string
  examples?: string[]
}

export const FIVE_LEVELS: LevelData[] = [
  {
    id: 1,
    name: "Individual Users",
    shortName: "Level 1",
    principle: "Anyone can use ChatGPT",
    description: "Individual employees using AI tools independently",
    characteristics: [
      "No organizational support",
      "Personal productivity gains",
      "Zero coordination",
      "Limited quality control",
    ],
    icon: "User",
    color: "#10B981", // success green
    examples: ["ChatGPT for emails", "Individual code completion"],
  },
  {
    id: 2,
    name: "Prompt Libraries",
    shortName: "Level 2",
    principle: "Copy-paste templates",
    description: "Shared prompt templates and best practices",
    characteristics: [
      "Template-based approach",
      "One-size-fits-all solutions",
      "Quality ceiling",
      "Limited customization",
    ],
    icon: "FileText",
    color: "#F59E0B", // warning amber
    examples: ["Prompt collections", "Generic templates", "Shared docs"],
  },
  {
    id: 3,
    name: "Off-the-Shelf Wrappers",
    shortName: "Level 3",
    principle: "Buy and integrate",
    description: "Pre-built AI products that promise easy integration",
    characteristics: [
      "Attractive demos",
      "Fast initial setup",
      "Poor real-world fit",
      "Iteration is expensive",
    ],
    risks: [
      "5-15% adoption after 6 months",
      "Organizational resistance builds",
      "Capability debt accumulates",
      "Trust erosion",
    ],
    guidance: [
      "Use test-driven approach",
      "Build evaluation sets first",
      "Measure quality objectively",
      "Plan for iteration costs",
    ],
    icon: "AlertTriangle",
    color: "#EF4444", // destructive red
    examples: ["AI chatbots", "Document automation tools", "Generic copilots"],
  },
  {
    id: 4,
    name: "Iterative Agents",
    shortName: "Level 4",
    principle: "Build to iterate",
    description: "Custom workflows designed for rapid improvement",
    characteristics: [
      "Systematic iteration",
      "Test-driven development",
      "Rapid feedback loops",
      "Measurable quality",
    ],
    icon: "RefreshCw",
    color: "#00BBFF", // accent cyan
    examples: [
      "Custom code agents",
      "Domain-specific automation",
      "Iterative copilots",
    ],
  },
  {
    id: 5,
    name: "Autonomous Systems",
    shortName: "Level 5",
    principle: "Self-improving systems",
    description: "Multi-agent orchestration with autonomous decision-making",
    characteristics: [
      "Multi-agent coordination",
      "Autonomous routing",
      "Continuous learning",
      "Strategic capability",
    ],
    icon: "Network",
    color: "#FF4D00", // primary orange
    examples: [
      "Multi-agent platforms",
      "Autonomous R&D systems",
      "Self-optimizing workflows",
    ],
  },
]

/**
 * ROI Calculation Data
 */
export interface ROIParameters {
  teamSize: number
  hoursSavedPerWeek: number
  hourlyRate: number
  implementationCost: number
  monthlyMaintenanceCost: number
  adoptionRate: number
}

export interface ROIResult {
  monthlyTimeSavings: number
  monthlyDollarSavings: number
  monthlyCost: number
  monthlyNetBenefit: number
  annualNetBenefit: number
  paybackPeriodMonths: number
  roi: number
}

export function calculateROI(params: ROIParameters): ROIResult {
  const {
    teamSize,
    hoursSavedPerWeek,
    hourlyRate,
    implementationCost,
    monthlyMaintenanceCost,
    adoptionRate,
  } = params

  // Calculate effective team size based on adoption
  const effectiveTeamSize = teamSize * (adoptionRate / 100)

  // Monthly time savings (4.33 weeks per month on average)
  const monthlyTimeSavings = effectiveTeamSize * hoursSavedPerWeek * 4.33

  // Monthly dollar savings
  const monthlyDollarSavings = monthlyTimeSavings * hourlyRate

  // Monthly cost (amortize implementation cost over 12 months)
  const monthlyCost = implementationCost / 12 + monthlyMaintenanceCost

  // Net benefit
  const monthlyNetBenefit = monthlyDollarSavings - monthlyCost
  const annualNetBenefit = monthlyNetBenefit * 12

  // Payback period
  const paybackPeriodMonths =
    monthlyNetBenefit > 0 ? implementationCost / monthlyNetBenefit : Infinity

  // ROI percentage
  const roi = (annualNetBenefit / (implementationCost + monthlyMaintenanceCost * 12)) * 100

  return {
    monthlyTimeSavings,
    monthlyDollarSavings,
    monthlyCost,
    monthlyNetBenefit,
    annualNetBenefit,
    paybackPeriodMonths,
    roi,
  }
}

/**
 * Level 3 vs Level 4 Economics Comparison
 */
export interface IterationEconomics {
  level: 3 | 4
  initialCost: number
  iterationCost: number
  iterationTime: string
  iterationsPerYear: number
  qualityImprovement: string
  adoptionRate: number
}

export const LEVEL_3_ECONOMICS: IterationEconomics = {
  level: 3,
  initialCost: 50000,
  iterationCost: 25000,
  iterationTime: "3-6 months",
  iterationsPerYear: 2,
  qualityImprovement: "Modest (vendor-dependent)",
  adoptionRate: 15,
}

export const LEVEL_4_ECONOMICS: IterationEconomics = {
  level: 4,
  initialCost: 75000,
  iterationCost: 2000,
  iterationTime: "Days to weeks",
  iterationsPerYear: 26,
  qualityImprovement: "Continuous (team-controlled)",
  adoptionRate: 80,
}

/**
 * Timeline Event Data (Level 3 Failure Timeline)
 */
export interface TimelineEvent {
  week: number
  label: string
  adoption: number
  quality: number
  sentiment: "positive" | "neutral" | "negative"
  description: string
  testimonial?: string
}

export const LEVEL_3_FAILURE_TIMELINE: TimelineEvent[] = [
  {
    week: 1,
    label: "Week 1: Launch",
    adoption: 95,
    quality: 85,
    sentiment: "positive",
    description: "Impressive demos, high initial excitement",
    testimonial: "This is going to change everything!",
  },
  {
    week: 4,
    label: "Week 4: Reality",
    adoption: 70,
    quality: 60,
    sentiment: "neutral",
    description: "Real-world edge cases emerge, quality drops",
    testimonial: "It works for simple cases, but...",
  },
  {
    week: 8,
    label: "Week 8: Frustration",
    adoption: 45,
    quality: 45,
    sentiment: "negative",
    description: "Vendor iterations are slow and expensive",
    testimonial: "The vendor says 'that's on the roadmap'",
  },
  {
    week: 16,
    label: "Week 16: Decline",
    adoption: 25,
    quality: 35,
    sentiment: "negative",
    description: "Team develops workarounds, bypasses system",
    testimonial: "It's faster to just do it myself",
  },
  {
    week: 24,
    label: "Week 24: Abandoned",
    adoption: 10,
    quality: 25,
    sentiment: "negative",
    description: "Organizational scar tissue forms, trust eroded",
    testimonial: "AI doesn't work for our use case",
  },
]

/**
 * Implementation Path Data (Level 4)
 */
export interface ImplementationPath {
  id: string
  name: string
  description: string
  pros: string[]
  cons: string[]
  bestFor: string
  icon: string
}

export const IMPLEMENTATION_PATHS: ImplementationPath[] = [
  {
    id: "developer-led",
    name: "Developer-Led Agents",
    description: "Engineers build custom agents with full technical control",
    pros: [
      "Maximum flexibility",
      "Full technical control",
      "Seamless integration",
      "Rapid iteration",
    ],
    cons: [
      "Requires engineering resources",
      "Steeper learning curve initially",
    ],
    bestFor: "Technical teams, custom workflows, high iteration needs",
    icon: "Code",
  },
  {
    id: "domain-expert-led",
    name: "Domain Expert-Led",
    description: "Subject matter experts design workflows with low-code tools",
    pros: [
      "Domain expertise embedded",
      "Faster initial deployment",
      "Non-technical friendly",
    ],
    cons: [
      "May need engineering support for complex logic",
      "Tool limitations",
    ],
    bestFor: "Operations teams, process automation, rapid prototyping",
    icon: "Users",
  },
  {
    id: "independent-contractor",
    name: "Independent AI Engineer",
    description: "Specialized consultant builds initial system, trains team",
    pros: [
      "Fast expertise injection",
      "Knowledge transfer",
      "Best practices from day one",
    ],
    cons: ["Short-term cost", "Team must learn to maintain"],
    bestFor: "Quick starts, capability building, pilot projects",
    icon: "Zap",
  },
]

/**
 * Poll Data
 */
export interface PollOption {
  id: number
  label: string
  description: string
  votes: number
}

export interface PollData {
  question: string
  options: PollOption[]
  totalVotes: number
}
