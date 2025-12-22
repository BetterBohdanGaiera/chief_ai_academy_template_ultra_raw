"use client"

/**
 * Slide 03: Monitoring Tools Comparison
 * Pattern: Button Toggle Comparison (artifacts-builder skill)
 * Compares GummySearch vs Syften monitoring-only tools
 */

import { useState } from "react"
import { Search, Zap, Bell, MessageSquare, Mail, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type ToolType = "gummysearch" | "syften"

export default function MonitoringTools() {
  const [activeTool, setActiveTool] = useState<ToolType>("gummysearch")

  const toolsData = {
    gummysearch: {
      title: "GummySearch",
      tagline: "Research-Focused Monitoring",
      color: "text-teal-600",
      bgColor: "bg-teal-500/5",
      borderColor: "border-teal-500/40",
      buttonBg: "bg-teal-600 hover:bg-teal-700",
      buttonHover: "hover:bg-teal-500/10 hover:border-teal-500/40",
      features: [
        {
          icon: Search,
          title: "Audience Research",
          description: "Deep dive into subreddit audiences and trending topics"
        },
        {
          icon: MessageSquare,
          title: "AI Thread Summaries",
          description: "AI-powered summaries of relevant discussions"
        },
        {
          icon: Mail,
          title: "Saved Searches",
          description: "Email digests for tracked keywords and topics"
        }
      ],
      integrations: ["Slack", "Discord"],
      pricing: [
        { tier: "Free", price: "50 searches", highlight: false },
        { tier: "Starter", price: "$29/mo", highlight: false },
        { tier: "Pro", price: "$59/mo", highlight: true },
        { tier: "Mega", price: "$199/mo", highlight: false }
      ],
      bestFor: "Teams needing deep audience research and AI-powered insights"
    },
    syften: {
      title: "Syften",
      tagline: "Real-Time Alert System",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/5",
      borderColor: "border-cyan-500/40",
      buttonBg: "bg-cyan-600 hover:bg-cyan-700",
      buttonHover: "hover:bg-cyan-500/10 hover:border-cyan-500/40",
      features: [
        {
          icon: Bell,
          title: "15+ Platform Monitoring",
          description: "Reddit, HN, Quora, GitHub, YouTube, and more"
        },
        {
          icon: Zap,
          title: "1-Minute Alert Delay",
          description: "Near real-time notifications for mentions"
        },
        {
          icon: Clock,
          title: "Continuous Monitoring",
          description: "24/7 tracking across all configured platforms"
        }
      ],
      integrations: [],
      pricing: [
        { tier: "Basic", price: "$19.95/mo", highlight: false },
        { tier: "Pro", price: "$99.95/mo", highlight: true }
      ],
      bestFor: "Teams requiring instant alerts across multiple platforms"
    }
  }

  const currentTool = toolsData[activeTool]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365049752-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10 select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.04]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary font-medium">
            Monitoring Tools (Search Only)
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Monitor Without <span className="text-primary">Posting</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Search-only solutions for tracking conversations across platforms
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-300 fill-backwards">
          <Button
            variant={activeTool === "gummysearch" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveTool("gummysearch")}
            className={`transition-all duration-300 ${
              activeTool === "gummysearch"
                ? currentTool.buttonBg + " text-white"
                : toolsData.gummysearch.buttonHover
            }`}
          >
            <Search className="h-5 w-5 mr-2" />
            GummySearch
          </Button>
          <Button
            variant={activeTool === "syften" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveTool("syften")}
            className={`transition-all duration-300 ${
              activeTool === "syften"
                ? toolsData.syften.buttonBg + " text-white"
                : toolsData.syften.buttonHover
            }`}
          >
            <Zap className="h-5 w-5 mr-2" />
            Syften
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in delay-500 fill-backwards">
          {/* Features Column */}
          <div className="space-y-4">
            <h3 className="font-syne text-xl font-bold flex items-center gap-2">
              <span className={currentTool.color}>Key Features</span>
            </h3>
            <div className="space-y-3">
              {currentTool.features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={`${activeTool}-feature-${index}`}
                    className={`${currentTool.borderColor} border transition-all duration-300 hover:scale-[1.02] animate-scale-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${currentTool.bgColor}`}>
                        <IconComponent className={`h-5 w-5 ${currentTool.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Integrations */}
            {currentTool.integrations.length > 0 && (
              <div className="pt-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">INTEGRATIONS:</p>
                <div className="flex gap-2">
                  {currentTool.integrations.map((integration, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {currentTool.integrations.length === 0 && (
              <div className="pt-4">
                <p className="text-sm text-muted-foreground italic">No third-party integrations listed</p>
              </div>
            )}
          </div>

          {/* Pricing Column */}
          <div className="space-y-4">
            <h3 className="font-syne text-xl font-bold">
              <span className={currentTool.color}>Pricing Tiers</span>
            </h3>
            <div className="space-y-3">
              {currentTool.pricing.map((tier, index) => (
                <Card
                  key={`${activeTool}-pricing-${index}`}
                  className={`transition-all duration-300 animate-scale-in ${
                    tier.highlight
                      ? `${currentTool.borderColor} border-2 ${currentTool.bgColor}`
                      : "border-border"
                  }`}
                  style={{ animationDelay: `${index * 100 + 150}ms` }}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{tier.tier}</span>
                      {tier.highlight && (
                        <Badge variant="default" className="text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <span className={`font-jetbrains text-lg font-bold ${tier.highlight ? currentTool.color : "text-foreground"}`}>
                      {tier.price}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Best For */}
            <Card className={`${currentTool.bgColor} ${currentTool.borderColor} border mt-6`}>
              <CardContent className="p-4">
                <p className="text-xs font-semibold text-muted-foreground mb-1">BEST FOR:</p>
                <p className="text-sm text-foreground">{currentTool.bestFor}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30 animate-fade-in delay-700 fill-backwards">
          <CardContent className="p-6">
            <p className="font-syne text-lg md:text-xl text-center">
              <span className="font-bold text-primary">Key Insight:</span>{" "}
              Monitoring tools focus on discovery and alerts—
              <span className="font-semibold"> you handle the engagement manually.</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
