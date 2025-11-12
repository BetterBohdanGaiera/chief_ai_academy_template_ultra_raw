import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { User, Package, Workflow, AlertTriangle } from "lucide-react"
import Image from "next/image"

export function Slide06aPrinciplesBasic() {
  const principles = [
    {
      level: 1,
      icon: <User className="h-6 w-6" />,
      title: "Individual Access",
      principle: "Anyone can use AI chat, but knowledge stays personal",
      outcome: "No business integration, no shared learning",
      status: "basic",
      image: "/generated-images/gemini-1762957220205-1.png",
      imageAlt: "Individual person accessing AI with knowledge staying personal",
    },
    {
      level: 2,
      icon: <Package className="h-6 w-6" />,
      title: "Pre-Built Solutions",
      principle: "Use existing AI tools, but they're generic by design",
      outcome: "One-size-fits-all doesn't match your business needs, heavy editing required",
      status: "basic",
      image: "/generated-images/gemini-1762957230880-1.png",
      imageAlt: "Generic pre-built tools that don't fit specific business needs",
    },
    {
      level: 3,
      icon: <Workflow className="h-6 w-6" />,
      title: "No-Code Automation",
      principle: "Connect AI to business systems, but only shallowly",
      outcome: 'Sounds good high-level ("quick noodles"), but doesn\'t work deep enough to be reliable',
      status: "warning",
      badge: <AlertTriangle className="h-5 w-5 text-warning" />,
      image: "/generated-images/gemini-1762957242587-1.png",
      imageAlt: "Shallow connection between AI and business systems through no-code tools",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-6xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            The Core Principle of Each Level
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Levels 1-3: The Limitations
          </p>
        </div>

        {/* Principles Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => (
            <Card
              key={item.level}
              className={`
                border transition-all duration-600 hover:shadow-lg
                ${
                  item.status === "warning"
                    ? "border-warning/40 bg-warning/5 hover:shadow-warning/20"
                    : "border-border/50 hover:shadow-md"
                }
              `}
            >
              <CardContent className="p-6">
                {/* Principle Image */}
                {item.image && (
                  <div className="mb-4">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || ""}
                      width={96}
                      height={96}
                      className="w-24 h-24 mx-auto rounded-xl shadow-md object-cover"
                    />
                  </div>
                )}

                {/* Level Badge & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    className={`
                      text-lg font-bold px-3 py-1
                      ${
                        item.status === "warning"
                          ? "bg-warning text-warning-foreground"
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
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-balance leading-snug">{item.title}</h3>

                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Principle
                    </p>
                    <p className="text-sm text-pretty leading-relaxed">{item.principle}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Outcome
                    </p>
                    <p className="text-sm text-pretty leading-relaxed">{item.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Insight */}
        <div className="text-center pt-6">
          <p className="text-xl font-semibold text-pretty leading-relaxed max-w-3xl mx-auto">
            Levels 1-2 are about <span className="text-primary">access to AI</span>. Level 3 tries to connect AI to your business but{" "}
            <span className="text-warning">can't iterate enough to reach reliability</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
