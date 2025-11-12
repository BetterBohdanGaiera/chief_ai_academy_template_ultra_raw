import { AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Slide05aFiveLevelsBasic() {
  const levels = [
    {
      level: 1,
      title: "Individual AI",
      tools: "ChatGPT, Claude, Gemini",
      description: "Individual chat | Personal productivity only",
      status: "basic",
      image: "/generated-images/gemini-1762957135055-1.png",
      imageAlt: "Individual person using AI chat for personal productivity",
    },
    {
      level: 2,
      title: "Generic SaaS AI Tools",
      tools: "Jasper, Copy.ai, pre-built chatbots",
      description: "Too generic, doesn't fit your needs",
      status: "basic",
      image: "/generated-images/gemini-1762957143972-1.png",
      imageAlt: "Generic pre-packaged software boxes representing one-size-fits-all SaaS tools",
    },
    {
      level: 3,
      title: "No-Code Automation",
      tools: "Zapier, Make.com, n8n",
      description: "THE TRAP - Communication gaps, often NEGATIVE ROI",
      status: "warning",
      icon: <AlertTriangle className="h-5 w-5" />,
      image: "/generated-images/gemini-1762957153054-1.png",
      imageAlt: "Drag-and-drop automation interface showing the trap of no-code promises",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-6xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Module 02
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            The 5 Levels of AI Adoption
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Levels 1-3: Where Most Companies Get Stuck
          </p>
        </div>

        {/* Levels Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {levels.map((item) => (
            <div
              key={item.level}
              className={`
                relative p-6 rounded-xl border transition-all duration-600 hover:shadow-lg
                ${
                  item.status === "warning"
                    ? "border-warning/40 bg-warning/5 hover:shadow-warning/20"
                    : "border-border/50 bg-card hover:shadow-md"
                }
              `}
            >
              {/* Level Icon Image */}
              {item.image && (
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || ""}
                    width={64}
                    height={64}
                    className="w-16 h-16 mx-auto mb-3 rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Level Badge */}
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="secondary"
                  className={`
                    text-lg font-bold px-3 py-1
                    ${
                      item.status === "warning"
                        ? "bg-warning text-warning-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  `}
                >
                  {item.level}
                </Badge>
                {item.icon && (
                  <div className="text-warning">
                    {item.icon}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-balance leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 text-pretty leading-relaxed">{item.tools}</p>
              <p className="text-xs text-foreground/70 text-pretty leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="text-center pt-6">
          <div className="inline-flex items-center gap-2 bg-warning/10 border border-warning/40 rounded-lg px-6 py-3">
            <AlertTriangle className="h-6 w-6 text-warning" />
            <p className="text-xl md:text-2xl font-semibold text-warning leading-relaxed">
              Level 3 is where most companies get trapped
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
