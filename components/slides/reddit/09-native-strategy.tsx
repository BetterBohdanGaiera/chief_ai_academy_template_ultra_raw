"use client"

/**
 * Slide 09: Native Product Mention Strategy
 * Pattern: Button Toggle Comparison
 * Skill: artifacts-builder
 *
 * Shows the dramatic difference between spammy vs native Reddit engagement
 * through an interactive toggle comparison with example messages.
 */

import { useState } from "react"
import Image from "next/image"
import {
  MessageCircle,
  Check,
  X,
  AlertTriangle,
  ThumbsUp,
  XCircle,
  CheckCircle2,
  Quote,
  Target,
  Heart,
  MessageSquare,
  Lightbulb
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

type ApproachType = "spammy" | "native"

interface NativeCheckItem {
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export default function SlideNativeStrategy() {
  const [activeView, setActiveView] = useState<ApproachType>("spammy")

  const approachData = {
    spammy: {
      title: "Spammy Approach",
      icon: XCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      message: `Great question! You should definitely check out [ProductName] - it's the best solution for exactly what you're describing. We've helped thousands of users just like you. Visit our website to learn more and get started today!`,
      result: "Deleted by automoderator, account shadowbanned",
      resultIcon: AlertTriangle,
      resultColor: "text-destructive"
    },
    native: {
      title: "Native Approach",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/40",
      message: `Been there! I struggled with this exact problem for about 6 months. What finally worked for me:

1. Started tracking everything in a spreadsheet (tedious but eye-opening)
2. Realized 80% of my time went to 3 specific bottlenecks
3. Automated those with a combination of Zapier and a tool I helped build

The spreadsheet alone might solve half your problem. For the automation part - there are several options depending on your stack. I'm obviously biased since I'm one of the founders, but happy to share what we learned even if you go a different route.

What's your current setup look like?`,
      result: "Upvoted, genuine conversation started, leads generated",
      resultIcon: ThumbsUp,
      resultColor: "text-success"
    }
  }

  const nativeCheckItems: NativeCheckItem[] = [
    { label: "Real story with specific details", icon: Heart },
    { label: "Offers value before mentioning product", icon: Lightbulb },
    { label: "Acknowledges bias transparently", icon: Target },
    { label: "Doesn't push - invites dialogue", icon: MessageSquare },
    { label: "No direct links (avoids automoderator)", icon: Check }
  ]

  const rules = [
    {
      number: "01",
      title: "100% Relevance Only",
      description: "User describes EXACTLY the problem you solve"
    },
    {
      number: "02",
      title: "Value First",
      description: "80% of response = useful information, 20% = subtle mention"
    },
    {
      number: "03",
      title: "No Direct Links",
      description: "Automoderators delete instantly; let them search"
    },
    {
      number: "04",
      title: "Transparency Works",
      description: '"I\'m the founder, so obviously biased, but..." builds trust'
    }
  ]

  const currentData = approachData[activeView]
  const CurrentIcon = currentData.icon
  const ResultIcon = currentData.resultIcon

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365026992-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern type="dots" className="opacity-[0.06]" />

      {/* Grain Overlay */}
      <GrainOverlay opacity={0.15} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 border-primary/60 text-primary font-medium animate-slide-in-down fill-backwards"
          >
            <MessageCircle className="w-4 h-4" />
            Engagement Strategy
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight tracking-tight animate-fade-in delay-200 fill-backwards">
            NATIVE <span className="text-primary">PRODUCT MENTION</span> STRATEGY
          </h2>
        </div>

        {/* Hero Quote */}
        <Card className="border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent animate-slide-in-left delay-300 fill-backwards">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-primary shrink-0 mt-1" />
              <blockquote className="font-syne text-lg md:text-xl lg:text-2xl italic text-foreground/90 leading-relaxed">
                "It's perfectly fine to be a Redditor with a website, it's not okay to be a website with a Reddit account."
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-scale-in delay-400 fill-backwards">
          <Button
            variant={activeView === "spammy" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("spammy")}
            className={`transition-all duration-300 ${
              activeView === "spammy"
                ? "bg-destructive hover:bg-destructive/90 text-white shadow-lg"
                : "hover:bg-destructive/10 hover:border-destructive/40"
            }`}
          >
            <XCircle className="h-5 w-5 mr-2" />
            Spammy Example
          </Button>
          <Button
            variant={activeView === "native" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("native")}
            className={`transition-all duration-300 ${
              activeView === "native"
                ? "bg-success hover:bg-success/90 text-white shadow-lg"
                : "hover:bg-success/10 hover:border-success/40"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Native Example
          </Button>
        </div>

        {/* Example Message Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Message Card (takes 2 columns) */}
          <Card
            key={activeView}
            className={`lg:col-span-2 ${currentData.borderColor} border-2 transition-all duration-500 animate-fade-in`}
          >
            <CardContent className="p-6 md:p-8 space-y-4">
              {/* Message Header */}
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${currentData.bgColor}`}>
                  <CurrentIcon className={`w-6 h-6 ${currentData.color}`} />
                </div>
                <h3 className={`font-syne font-bold text-xl ${currentData.color}`}>
                  {currentData.title}
                </h3>
              </div>

              {/* Message Content */}
              <div className={`
                p-4 rounded-lg border ${currentData.borderColor} ${currentData.bgColor}
                font-jetbrains text-sm leading-relaxed whitespace-pre-wrap
              `}>
                {currentData.message}
              </div>

              {/* Result */}
              <div className="flex items-center gap-3 pt-2">
                <ResultIcon className={`w-5 h-5 ${currentData.resultColor}`} />
                <p className={`font-semibold ${currentData.resultColor}`}>
                  {currentData.result}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Native Checklist (only shows when native is selected) */}
          <Card
            className={`
              transition-all duration-500 border-2
              ${activeView === "native"
                ? "border-success/40 opacity-100"
                : "border-border/30 opacity-40"
              }
            `}
          >
            <CardContent className="p-6 space-y-4">
              <h4 className="font-syne font-bold text-lg text-success flex items-center gap-2">
                <Check className="w-5 h-5" />
                What Makes It Native
              </h4>
              <div className="space-y-3">
                {nativeCheckItems.map((item, index) => {
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={index}
                      className={`
                        flex items-start gap-3 transition-all duration-300
                        ${activeView === "native"
                          ? "opacity-100 translate-x-0"
                          : "opacity-40 translate-x-2"
                        }
                      `}
                      style={{
                        transitionDelay: activeView === "native" ? `${index * 100}ms` : "0ms"
                      }}
                    >
                      <div className="p-1.5 rounded-full bg-success/10 shrink-0 mt-0.5">
                        <ItemIcon className="w-4 h-4 text-success" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4 Rules Cards */}
        <div className="space-y-4 animate-slide-in-up delay-600 fill-backwards">
          <h3 className="text-xl font-bebas text-center text-foreground/80">
            4 RULES FOR NATIVE ENGAGEMENT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rules.map((rule, index) => (
              <Card
                key={index}
                className="border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-md animate-fade-in fill-backwards"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-bebas text-2xl text-primary">
                      {rule.number}
                    </span>
                    <h4 className="font-syne font-semibold text-sm leading-tight">
                      {rule.title}
                    </h4>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <Card className="bg-primary/5 border-primary/20 animate-fade-in delay-1000 fill-backwards">
          <CardContent className="p-4">
            <p className="text-sm text-center text-foreground/90">
              <span className="font-semibold text-primary">The Philosophy:</span>{" "}
              Be a genuine community member who happens to have built something useful, not a marketer pretending to be a user.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
