import { ArrowDown, AlertTriangle, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Slide1Overview() {
  const levels = [
    {
      level: 1,
      title: "Individual AI",
      tools: "ChatGPT, Claude, Gemini",
      description: "Individual chat | Personal productivity only",
      status: "basic",
    },
    {
      level: 2,
      title: "Generic SaaS AI Tools",
      tools: "Jasper, Copy.ai, pre-built chatbots",
      description: "Too generic, doesn't fit your needs",
      status: "basic",
    },
    {
      level: 3,
      title: "No-Code Automation",
      tools: "Zapier, Make.com, n8n",
      description: "THE TRAP - Communication gaps, often NEGATIVE ROI",
      status: "warning",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      level: 4,
      title: "Iterative Agents",
      tools: "Rapid feedback loops enable continuous improvement",
      description: "Growing reliability | TRANSFORMATION STARTS HERE",
      status: "transformation",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      level: 5,
      title: "Autonomous Agents",
      tools: "No human oversight | Self-improving",
      description: "Full automation",
      status: "transformation",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative">
      <div className="max-w-7xl w-full space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Module 02
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            The 5 Levels of AI Adoption
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Understanding where transformation actually happens
          </p>
        </div>

        {/* Levels Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {levels.map((item, index) => (
            <div
              key={item.level}
              className={`
                relative p-6 rounded-xl border transition-all hover:shadow-lg
                ${
                  item.status === "warning"
                    ? "border-warning/40 bg-warning/10 hover:shadow-warning/20"
                    : item.status === "transformation"
                      ? "border-primary/40 bg-primary/5 hover:shadow-primary/20"
                      : "border-border bg-card hover:shadow-md"
                }
              `}
            >
              {/* Level Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge
                  variant={item.status === "transformation" ? "default" : "secondary"}
                  className={`
                    text-lg font-bold px-3 py-1
                    ${
                      item.status === "warning"
                        ? "bg-warning text-warning-foreground"
                        : item.status === "transformation"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                    }
                  `}
                >
                  {item.level}
                </Badge>
                {item.icon && (
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
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-balance leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 text-pretty leading-relaxed">{item.tools}</p>
              <p className="text-xs text-foreground/70 text-pretty leading-relaxed">{item.description}</p>

              {/* Transformation Zone Label */}
              {item.status === "transformation" && item.level === 4 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground whitespace-nowrap shadow-sm">
                    Transformation Zone
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-2xl md:text-3xl font-semibold text-primary leading-relaxed">
            Most stuck at 1-3. Transformation happens at 4-5.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
