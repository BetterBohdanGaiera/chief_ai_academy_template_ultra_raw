import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { User, Package, Workflow, RotateCw, Sparkles, AlertTriangle, TrendingUp } from "lucide-react"

export function Slide2Principles() {
  const principles = [
    {
      level: 1,
      icon: <User className="h-8 w-8" />,
      title: "Individual Access",
      principle: "Anyone can use AI chat, but knowledge stays personal",
      outcome: "No business integration, no shared learning",
      status: "basic",
    },
    {
      level: 2,
      icon: <Package className="h-8 w-8" />,
      title: "Pre-Built Solutions",
      principle: "Use existing AI tools, but they're generic by design",
      outcome: "One-size-fits-all doesn't match your business needs, heavy editing required",
      status: "basic",
    },
    {
      level: 3,
      icon: <Workflow className="h-8 w-8" />,
      title: "No-Code Automation",
      principle: "Connect AI to business systems, but only shallowly",
      outcome: 'Sounds good high-level ("quick noodles"), but doesn\'t work deep enough to be reliable',
      status: "warning",
      badge: <AlertTriangle className="h-5 w-5 text-warning" />,
    },
    {
      level: 4,
      icon: <RotateCw className="h-8 w-8" />,
      title: "Iterative Improvement Through Rapid Feedback",
      principle: "Low-cost feedback loops enable continuous iteration until truly reliable",
      outcome: "Internal team iterates 3-5x per day (not 3-5x per month) → 30+ iterations → Grows to 95%+ reliability",
      highlight: "ROI, time savings, and money savings BEGIN HERE (because you can finally reach reliability)",
      status: "transformation",
      badge: <TrendingUp className="h-5 w-5 text-primary" />,
    },
    {
      level: 5,
      icon: <Sparkles className="h-8 w-8" />,
      title: "Full Autonomy",
      principle: "AI makes decisions without human approval",
      outcome: "Trusted automation that self-improves",
      highlight: "Maximum ROI and exponential time/money savings",
      status: "transformation",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-12 lg:p-20">
      <div className="max-w-6xl w-full space-y-16 lg:space-y-20">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            The Core Principle of Each Level
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
            What fundamentally separates each level
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 gap-6">
          {principles.map((item) => (
            <Card
              key={item.level}
              className={`
                border transition-all duration-600 hover:shadow-lg
                ${
                  item.status === "warning"
                    ? "border-warning/40 bg-warning/5 hover:shadow-warning/20"
                    : item.status === "transformation"
                      ? "border-primary/40 bg-primary/5 hover:shadow-primary/20"
                      : "border-border/50 hover:shadow-md"
                }
              `}
            >
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Level Badge & Icon */}
                  <div className="flex flex-col items-center gap-4 md:min-w-[120px]">
                    <Badge
                      className={`
                        text-2xl font-bold px-4 py-2
                        ${
                          item.status === "warning"
                            ? "bg-warning text-warning-foreground"
                            : item.status === "transformation"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                        }
                      `}
                    >
                      Level {item.level}
                    </Badge>
                    <div
                      className={`
                      ${
                        item.status === "warning"
                          ? "text-warning"
                          : item.status === "transformation"
                            ? "text-primary"
                            : "text-muted-foreground"
                      }
                    `}
                    >
                      {item.icon}
                    </div>
                    {item.badge && <div>{item.badge}</div>}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-balance leading-snug">{item.title}</h3>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Principle
                        </p>
                        <p className="text-base lg:text-lg text-pretty leading-relaxed">{item.principle}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Outcome
                        </p>
                        <p className="text-base lg:text-lg text-pretty leading-relaxed">{item.outcome}</p>
                      </div>

                      {item.highlight && (
                        <div
                          className={`
                          p-4 rounded-lg mt-4 border
                          ${item.status === "transformation" ? "bg-primary/10 border-primary/30" : ""}
                        `}
                        >
                          <p className="text-base lg:text-lg font-semibold text-pretty leading-relaxed flex items-start gap-2">
                            <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            {item.highlight}
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

        {/* Key Insight */}
        <div className="text-center space-y-4 pt-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl font-semibold text-pretty leading-relaxed">
              Levels 1-2 are about <span className="text-primary">access to AI</span>.
            </p>
            <p className="text-xl font-semibold text-pretty leading-relaxed">
              Level 3 tries to connect AI to your business but{" "}
              <span className="text-warning">can't iterate enough to reach reliability</span> (too expensive/slow).
            </p>
            <p className="text-xl font-semibold text-pretty leading-relaxed">
              Levels 4-5 enable <span className="text-primary">continuous iteration and improvement</span> -{" "}
              <span className="text-primary">where real ROI begins</span> because you can finally build systems reliable
              enough to trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
