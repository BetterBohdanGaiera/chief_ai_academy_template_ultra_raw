import { TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Slide05bFiveLevelsTransformation() {
  const levels = [
    {
      level: 4,
      title: "Iterative Agents",
      tools: "Rapid feedback loops enable continuous improvement",
      description: "Growing reliability | TRANSFORMATION STARTS HERE",
      status: "transformation",
      icon: <TrendingUp className="h-6 w-6" />,
      image: "/generated-images/gemini-1762957162056-1.png",
      imageAlt: "Iterative improvement cycle with rapid feedback loops",
    },
    {
      level: 5,
      title: "Autonomous Agents",
      tools: "No human oversight | Self-improving",
      description: "Full automation",
      status: "transformation",
      image: "/generated-images/gemini-1762957184245-1.png",
      imageAlt: "Autonomous AI agent operating independently with self-improvement capabilities",
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
            Levels 4-5: Where Real Transformation Happens
          </p>
        </div>

        {/* Transformation Zone Badge */}
        <div className="flex justify-center">
          <Badge className="bg-primary text-primary-foreground text-base px-6 py-2 shadow-lg">
            Transformation Zone
          </Badge>
        </div>

        {/* Levels Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {levels.map((item) => (
            <div
              key={item.level}
              className="relative p-8 rounded-xl border border-primary/40 bg-primary/5 transition-all duration-600 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Level Icon Image */}
              {item.image && (
                <div className="mb-6">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || ""}
                    width={96}
                    height={96}
                    className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Level Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge
                  variant="default"
                  className="text-xl font-bold px-4 py-1 bg-primary text-primary-foreground"
                >
                  {item.level}
                </Badge>
                {item.icon && (
                  <div className="text-primary">
                    {item.icon}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-balance leading-snug">{item.title}</h3>
              <p className="text-base text-muted-foreground mb-3 text-pretty leading-relaxed">{item.tools}</p>
              <p className="text-sm text-foreground/90 font-medium text-pretty leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="text-center pt-6">
          <p className="text-2xl md:text-3xl font-semibold text-primary leading-relaxed max-w-4xl mx-auto">
            Most stuck at 1-3. Transformation happens at 4-5.
          </p>
        </div>

        {/* Additional Context */}
        <div className="text-center pt-2">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The difference: rapid iteration (3-5x per day) allows agents to reach 95%+ reliability
          </p>
        </div>
      </div>
    </section>
  )
}
