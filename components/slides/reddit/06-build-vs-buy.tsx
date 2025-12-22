"use client"

import { useState } from "react"
import { Bot, XCircle, CheckCircle2, Package, Wrench, DollarSign, Search, Brain, Target, UserCheck, ShoppingCart, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type ResponseType = "generic" | "valuefirst"

export default function BuildVsBuy() {
  const [activeResponse, setActiveResponse] = useState<ResponseType>("generic")

  const responseExamples = {
    generic: {
      title: "Generic Response",
      subtitle: "What ready tools produce",
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      code: `"Great question! You should check out [ProductName] - it solves
exactly this problem. Here's the link: https://..."`,
      issues: [
        "Instantly recognized as promotional",
        "Gets downvoted or removed",
        "Damages brand reputation",
        "Triggers spam filters",
      ],
    },
    valuefirst: {
      title: "Value-First Response",
      subtitle: "What custom systems can produce",
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/40",
      code: `"Been there! Here's what I learned after 6 months of trial and error:

1. First, you need to understand that [detailed technical explanation]
2. The key insight is [valuable knowledge]
3. For implementation, consider [actionable advice]

I actually built something to automate this process after
struggling with it for months. Happy to share more details
if you're interested."`,
      benefits: [
        "Provides genuine value first",
        "Builds trust and credibility",
        "Generates 40%+ reply rates",
        "Creates authentic engagement",
      ],
    },
  }

  const buyComponents = [
    {
      name: "Warmed Accounts",
      description: "Pre-aged Reddit accounts",
      cost: "$0.03-50+/account",
      icon: UserCheck,
    },
    {
      name: "Antidetect Browser",
      description: "DICloak, Multilogin",
      cost: "$8-99/mo",
      icon: Bot,
    },
    {
      name: "Proxies",
      description: "Residential proxies",
      cost: "$10-50+/mo",
      icon: Bot,
    },
    {
      name: "Reddit API",
      description: "PRAW access",
      cost: "$0-120+/mo",
      icon: Code,
    },
  ]

  const buildComponents = [
    {
      name: "Keyword Monitoring",
      description: "Find relevant posts and comments",
      whyBuild: "Ready solutions: $20-200/mo",
      icon: Search,
    },
    {
      name: "AI Response Agent",
      description: "Generate value-first comments",
      whyBuild: "Ready tools give generic answers",
      icon: Brain,
    },
    {
      name: "Opportunity Scoring",
      description: "Prioritize where to respond",
      whyBuild: "Custom for your product",
      icon: Target,
    },
    {
      name: "Human Review Pipeline",
      description: "Check before posting",
      whyBuild: "Quality + ban protection",
      icon: UserCheck,
    },
  ]

  const currentResponse = responseExamples[activeResponse]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365022099-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="dots" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Wrench className="h-5 w-5 mr-2" />
            STRATEGY DECISION
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Build vs Buy
            <span className="block text-primary mt-2">Why Custom May Be Better</span>
          </h2>
        </div>

        {/* Response Comparison Section */}
        <div className="space-y-4 animate-slide-in-up delay-200 fill-backwards">
          <p className="text-center text-muted-foreground font-syne text-lg">
            &quot;Rephrase the question and suggest our product&quot; - that&apos;s what all ready tools do
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant={activeResponse === "generic" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveResponse("generic")}
              className={`transition-all duration-300 ${
                activeResponse === "generic"
                  ? "bg-destructive hover:bg-destructive/90 text-white"
                  : "hover:bg-destructive/10 hover:border-destructive/40"
              }`}
            >
              <XCircle className="h-5 w-5 mr-2" />
              Generic Response
            </Button>
            <Button
              variant={activeResponse === "valuefirst" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveResponse("valuefirst")}
              className={`transition-all duration-300 ${
                activeResponse === "valuefirst"
                  ? "bg-success hover:bg-success/90 text-white"
                  : "hover:bg-success/10 hover:border-success/40"
              }`}
            >
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Value-First Response
            </Button>
          </div>

          {/* Response Example Card */}
          <Card className={`${currentResponse.borderColor} border-2 ${currentResponse.bgColor} animate-fade-in`}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                {activeResponse === "generic" ? (
                  <XCircle className={`h-6 w-6 ${currentResponse.color}`} />
                ) : (
                  <CheckCircle2 className={`h-6 w-6 ${currentResponse.color}`} />
                )}
                <div>
                  <h3 className={`font-syne text-xl font-bold ${currentResponse.color}`}>
                    {currentResponse.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{currentResponse.subtitle}</p>
                </div>
              </div>

              {/* Code Block */}
              <div className="bg-charcoal/95 rounded-lg p-4 overflow-x-auto">
                <pre className="font-jetbrains text-sm text-white/90 whitespace-pre-wrap">
                  {currentResponse.code}
                </pre>
              </div>

              {/* Issues or Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                {activeResponse === "generic"
                  ? currentResponse.issues?.map((issue, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-destructive/10"
                      >
                        <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80">{issue}</span>
                      </div>
                    ))
                  : currentResponse.benefits?.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-success/10"
                      >
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80">{benefit}</span>
                      </div>
                    ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Buy vs Build Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in delay-400 fill-backwards">
          {/* What We Buy */}
          <Card className="border-2 border-warning/40">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-warning/10">
                  <ShoppingCart className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-bold">What We Buy</h3>
                  <p className="text-sm text-muted-foreground">Ready-made infrastructure</p>
                </div>
              </div>

              <div className="space-y-3">
                {buyComponents.map((component, idx) => {
                  const Icon = component.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-warning" />
                        <div>
                          <p className="font-semibold text-sm">{component.name}</p>
                          <p className="text-xs text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-jetbrains text-sm font-bold text-warning">{component.cost}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* What We Build */}
          <Card className="border-2 border-primary/40">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-bold">What We Build</h3>
                  <p className="text-sm text-muted-foreground">Custom for competitive advantage</p>
                </div>
              </div>

              <div className="space-y-3">
                {buildComponents.map((component, idx) => {
                  const Icon = component.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">{component.name}</p>
                          <p className="text-xs text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary font-medium">{component.whyBuild}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 max-w-4xl mx-auto animate-fade-in delay-600 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardContent className="p-6">
              <p className="font-syne text-xl md:text-2xl font-bold text-primary">
                The difference between spam and engagement
                <span className="block mt-2 text-foreground">
                  is whether you lead with <span className="text-success">value</span> or <span className="text-destructive">promotion</span>
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
