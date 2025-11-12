import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { RotateCw, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Slide06bPrinciplesTransformation() {
  const principles = [
    {
      level: 4,
      icon: <RotateCw className="h-7 w-7" />,
      title: "Iterative Improvement Through Rapid Feedback",
      principle: "Low-cost feedback loops enable continuous iteration until truly reliable",
      outcome: "Internal team iterates 3-5x per day (not 3-5x per month) → 30+ iterations → Grows to 95%+ reliability",
      highlight: "ROI, time savings, and money savings BEGIN HERE (because you can finally reach reliability)",
      status: "transformation",
      image: "/generated-images/gemini-1762957252941-1.png",
      imageAlt: "Rapid feedback loops enabling continuous iteration and improvement",
    },
    {
      level: 5,
      icon: <Sparkles className="h-7 w-7" />,
      title: "Full Autonomy",
      principle: "AI makes decisions without human approval",
      outcome: "Trusted automation that self-improves",
      highlight: "Maximum ROI and exponential time/money savings",
      status: "transformation",
      image: "/generated-images/gemini-1762957268077-1.png",
      imageAlt: "Fully autonomous AI making decisions and self-improving",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-12">
      <div className="max-w-6xl w-full space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Transformation Zone
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            The Core Principle of Each Level
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Levels 4-5: Where Real ROI Begins
          </p>
        </div>

        {/* Principles Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item) => (
            <Card
              key={item.level}
              className="border border-primary/40 bg-primary/5 transition-all duration-600 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardContent className="p-8">
                {/* Principle Image */}
                {item.image && (
                  <div className="mb-5">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || ""}
                      width={128}
                      height={128}
                      className="w-32 h-32 mx-auto rounded-xl shadow-md object-cover"
                    />
                  </div>
                )}

                {/* Level Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className="text-xl font-bold px-4 py-2 bg-primary text-primary-foreground">
                    Level {item.level}
                  </Badge>
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-balance leading-snug">{item.title}</h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Principle
                    </p>
                    <p className="text-sm lg:text-base text-pretty leading-relaxed">{item.principle}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Outcome
                    </p>
                    <p className="text-sm lg:text-base text-pretty leading-relaxed">{item.outcome}</p>
                  </div>

                  {item.highlight && (
                    <div className="p-4 rounded-lg mt-3 border bg-primary/10 border-primary/30">
                      <p className="text-sm lg:text-base font-semibold text-pretty leading-relaxed flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        {item.highlight}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Insight */}
        <div className="text-center pt-6">
          <p className="text-xl font-semibold text-primary text-pretty leading-relaxed max-w-4xl mx-auto">
            Levels 4-5 enable <span className="font-bold">continuous iteration and improvement</span> -{" "}
            where real ROI begins because you can finally build systems reliable enough to trust.
          </p>
        </div>
      </div>
    </section>
  )
}
