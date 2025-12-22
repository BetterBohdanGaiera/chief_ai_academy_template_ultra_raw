"use client"

import { useState } from "react"
import { AlertTriangle, Shield, XCircle, CheckCircle2, Eye, EyeOff, Link2, Bot, Globe, ThumbsUp, MessageSquare, Star, Mail, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"
import Image from "next/image"

type SafetyView = "dangerous" | "safe"

export default function ShadowbanSafety() {
  const [activeView, setActiveView] = useState<SafetyView>("dangerous")

  const safetyData = {
    dangerous: {
      title: "Ban Triggers",
      subtitle: "Behaviors that trigger shadowbans",
      icon: AlertTriangle,
      color: "text-destructive",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/40",
      headerBg: "bg-destructive/10",
      items: [
        {
          label: "Cross-posting same content",
          description: "Posting identical content to multiple subreddits",
          icon: Link2,
          iconColor: "text-destructive",
        },
        {
          label: "Vote manipulation",
          description: "Using multiple accounts or coordinating votes",
          icon: ThumbsUp,
          iconColor: "text-destructive",
        },
        {
          label: "Repeated promotional links",
          description: "Excessive linking to the same domain",
          icon: Link2,
          iconColor: "text-destructive",
        },
        {
          label: "Automated behavior",
          description: "Bot-like patterns without proper warm-up",
          icon: Bot,
          iconColor: "text-destructive",
        },
        {
          label: "VPN during account creation",
          description: "Creating accounts while using VPN/proxy",
          icon: Globe,
          iconColor: "text-destructive",
        },
      ],
      checkMethods: [
        { label: "r/ShadowBan", description: "Bot will check your account" },
        { label: "Incognito test", description: "View your profile logged out" },
        { label: "reddit.com/appeal", description: "Submit an appeal if banned" },
      ],
    },
    safe: {
      title: "Survival Rules",
      subtitle: "Behaviors that keep you safe",
      icon: Shield,
      color: "text-success",
      bgColor: "bg-success/5",
      borderColor: "border-success/40",
      headerBg: "bg-success/10",
      items: [
        {
          label: "9:1 Rule for posts",
          description: "9 valuable posts for every promotional link",
          icon: Star,
          iconColor: "text-success",
        },
        {
          label: "10:1 Rule for comments",
          description: "10 helpful comments per product mention",
          icon: MessageSquare,
          iconColor: "text-success",
        },
        {
          label: "Wait for 300+ karma",
          description: "Don't automate until sufficient karma",
          icon: Clock,
          iconColor: "text-success",
        },
        {
          label: "Verify your email",
          description: "Adds trust signal to your account",
          icon: Mail,
          iconColor: "text-success",
        },
        {
          label: "Provide genuine value",
          description: "Help before you promote",
          icon: CheckCircle2,
          iconColor: "text-success",
        },
      ],
      checkMethods: [
        { label: "Build reputation first", description: "Organic participation" },
        { label: "Gradual automation", description: "Scale slowly over time" },
        { label: "Quality over quantity", description: "Focus on value-first" },
      ],
    },
  }

  const currentData = safetyData[activeView]
  const IconHeader = currentData.icon

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated-images/gemini-1766365012942-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] select-none pointer-events-none mix-blend-multiply"
          priority
          aria-hidden="true"
        />
      </div>

      <GeometricPattern type="diagonal" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative z-10 max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="text-lg px-6 py-2">
            <Shield className="h-5 w-5 mr-2" />
            SAFETY GUIDE
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Shadowban
            <span className="block text-primary mt-2">&amp; Safety</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Posts hidden from everyone except you - you don&apos;t know you&apos;re banned
          </p>
        </div>

        {/* Risk Indicator */}
        <div className="flex justify-center gap-4 items-center animate-slide-in-up delay-200 fill-backwards">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === "dangerous"
              ? "bg-destructive/20 border-2 border-destructive"
              : "bg-muted/20 border border-border"
          }`}>
            <EyeOff className={`h-5 w-5 ${activeView === "dangerous" ? "text-destructive" : "text-muted-foreground"}`} />
            <span className={`font-semibold ${activeView === "dangerous" ? "text-destructive" : "text-muted-foreground"}`}>
              Hidden
            </span>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-destructive to-success rounded-full" />
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === "safe"
              ? "bg-success/20 border-2 border-success"
              : "bg-muted/20 border border-border"
          }`}>
            <Eye className={`h-5 w-5 ${activeView === "safe" ? "text-success" : "text-muted-foreground"}`} />
            <span className={`font-semibold ${activeView === "safe" ? "text-success" : "text-muted-foreground"}`}>
              Visible
            </span>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 animate-slide-in-up delay-300 fill-backwards">
          <Button
            variant={activeView === "dangerous" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("dangerous")}
            className={`transition-all duration-300 ${
              activeView === "dangerous"
                ? "bg-destructive hover:bg-destructive/90 text-white"
                : "hover:bg-destructive/10 hover:border-destructive/40"
            }`}
          >
            <AlertTriangle className="h-5 w-5 mr-2" />
            Dangerous
          </Button>
          <Button
            variant={activeView === "safe" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveView("safe")}
            className={`transition-all duration-300 ${
              activeView === "safe"
                ? "bg-success hover:bg-success/90 text-white"
                : "hover:bg-success/10 hover:border-success/40"
            }`}
          >
            <Shield className="h-5 w-5 mr-2" />
            Safe
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in delay-400 fill-backwards">
          {/* Behavior Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className={`flex items-center gap-3 ${currentData.headerBg} p-4 rounded-xl`}>
              <IconHeader className={`h-8 w-8 ${currentData.color}`} />
              <div>
                <h3 className="font-syne text-xl font-bold">{currentData.title}</h3>
                <p className="text-sm text-muted-foreground">{currentData.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.items.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <Card
                    key={`${activeView}-${index}`}
                    className={`${currentData.borderColor} border-2 transition-all duration-300 hover:scale-102 animate-scale-in`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${currentData.bgColor}`}>
                          <ItemIcon className={`h-5 w-5 ${item.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-syne font-bold text-base">{item.label}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Check Methods / Guidelines */}
          <div className="space-y-4">
            <Card className={`${currentData.borderColor} border-2`}>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-syne text-lg font-bold flex items-center gap-2">
                  {activeView === "dangerous" ? (
                    <>
                      <Eye className="h-5 w-5 text-primary" />
                      How to Check
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      Best Practices
                    </>
                  )}
                </h4>
                <div className="space-y-3">
                  {currentData.checkMethods.map((method, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                    >
                      <div className={`w-6 h-6 rounded-full ${currentData.bgColor} flex items-center justify-center shrink-0`}>
                        <span className={`text-xs font-bold ${currentData.color}`}>{idx + 1}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{method.label}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What is Shadowban */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <h4 className="font-syne font-bold text-sm text-primary mb-2">What is Shadowban?</h4>
                <p className="text-sm text-foreground/80">
                  Your posts and comments become invisible to everyone except you.
                  You continue posting normally, unaware that no one can see your content.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center pt-4 max-w-4xl mx-auto animate-fade-in delay-600 fill-backwards">
          <Card className="bg-white/95 backdrop-blur-md border-2 border-primary/30">
            <CardContent className="p-6">
              <p className="font-syne text-xl md:text-2xl font-bold">
                {activeView === "dangerous" ? (
                  <>
                    <span className="text-destructive">Avoid these behaviors</span>
                    <span className="block mt-2 text-foreground">or risk losing your account permanently</span>
                  </>
                ) : (
                  <>
                    <span className="text-success">Follow these rules</span>
                    <span className="block mt-2 text-foreground">to build a sustainable Reddit presence</span>
                  </>
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
