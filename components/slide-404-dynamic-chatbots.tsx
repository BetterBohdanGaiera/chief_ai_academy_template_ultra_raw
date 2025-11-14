"use client"

import { useState } from "react"
import { Database, Zap, Users, ShoppingCart, LineChart, DollarSign, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GrainOverlay } from "@/components/decorative/grain-overlay"
import { GeometricPattern } from "@/components/decorative/geometric-patterns"

interface UseCase {
  title: string
  description: string
  roi: string
  icon: React.ComponentType<{ className?: string }>
  integrations: string[]
}

const USE_CASES: UseCase[] = [
  {
    title: "Customer Support Agent",
    description: "Answer customer queries using live CRM data, order status, and account information",
    roi: "$80K-$246K/year",
    icon: Users,
    integrations: ["Salesforce", "Zendesk", "Stripe"],
  },
  {
    title: "Sales Intelligence Bot",
    description: "Provide sales teams with real-time customer insights, pipeline data, and recommendations",
    roi: "$60K-$180K/year",
    icon: LineChart,
    integrations: ["HubSpot", "LinkedIn", "Google Analytics"],
  },
  {
    title: "Inventory Assistant",
    description: "Real-time stock levels, order tracking, and supplier information for operations teams",
    roi: "$14K-$95K/year",
    icon: ShoppingCart,
    integrations: ["NetSuite", "SAP", "Shopify"],
  },
]

const BENEFITS = [
  "Access to live, up-to-date information",
  "Context-aware responses",
  "Multi-system integration",
  "Reduced manual data lookups",
  "Improved decision-making speed",
  "Scalable across departments",
]

const CONSIDERATIONS = [
  "API integration complexity",
  "Data security and access controls",
  "System dependencies and reliability",
  "Higher operational costs",
  "Requires ongoing API maintenance",
]

export function Slide404DynamicChatbots() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <GeometricPattern type="circuit" opacity={0.04} />
      <GrainOverlay opacity={0.15} />

      <div className="relative max-w-7xl w-full space-y-10">
        {/* Title */}
        <div className="space-y-4 animate-fade-in text-center">
          <Badge variant="glow" className="text-lg px-6 py-2" style={{ backgroundColor: "#00BBFF20", borderColor: "#00BBFF" }}>
            <Database className="h-5 w-5 mr-2" />
            CATEGORY 2: DYNAMIC CONTENT
          </Badge>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none">
            Fetch Real-Time
            <span className="block text-[#00BBFF] mt-2">Data & Insights</span>
          </h2>
          <p className="font-syne text-xl md:text-2xl text-muted-foreground">
            Level 4-5 • ROI: $14K-$246K/year
          </p>
        </div>

        {/* Main Content Tabs */}
        <div className="animate-slide-in-up delay-200 fill-backwards">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview" className="text-base">Overview</TabsTrigger>
              <TabsTrigger value="use-cases" className="text-base">Use Cases</TabsTrigger>
              <TabsTrigger value="implementation" className="text-base">Implementation</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className="border-2 border-[#00BBFF]/40">
                <CardHeader className="bg-[#00BBFF]/5">
                  <CardTitle className="font-syne text-2xl text-[#00BBFF]">What Are Dynamic Content Chatbots?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg text-foreground/80 font-manrope leading-relaxed mb-6">
                    Dynamic content chatbots go beyond static knowledge by fetching and synthesizing real-time data from live
                    systems. They integrate with CRMs, databases, APIs, and other business systems to provide current,
                    context-aware responses based on the latest information.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Benefits */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00BBFF]" />
                        <h4 className="font-syne font-bold text-lg">Key Benefits</h4>
                      </div>
                      <ul className="space-y-2">
                        {BENEFITS.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/70">
                            <span className="text-[#00BBFF] mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Considerations */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                        <h4 className="font-syne font-bold text-lg">Considerations</h4>
                      </div>
                      <ul className="space-y-2">
                        {CONSIDERATIONS.map((consideration, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/70">
                            <span className="text-amber-500 mt-1">•</span>
                            <span>{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ROI Highlight */}
              <Card className="border-2 border-[#00BBFF]/60 bg-gradient-to-br from-[#00BBFF]/5 to-[#00BBFF]/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-1">Typical Annual ROI Range</p>
                      <p className="text-4xl font-bold font-jetbrains text-[#00BBFF]">$14,000 - $246,000</p>
                    </div>
                    <DollarSign className="h-16 w-16 text-[#00BBFF]/30" />
                  </div>
                  <p className="text-sm text-foreground/60 mt-4 font-manrope">
                    Higher ROI range reflects value from improved customer satisfaction, faster decision-making, and reduced manual data retrieval
                  </p>
                </CardContent>
              </Card>

              {/* How It Works Diagram */}
              <Card className="border-2 border-[#00BBFF]/40 bg-[#00BBFF]/5">
                <CardHeader>
                  <CardTitle className="font-syne text-xl text-[#00BBFF]">How It Works</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-[150px] text-center">
                      <div className="w-16 h-16 rounded-full bg-[#00BBFF]/20 flex items-center justify-center mx-auto mb-2">
                        <Users className="h-8 w-8 text-[#00BBFF]" />
                      </div>
                      <p className="text-sm font-semibold">User Query</p>
                      <p className="text-xs text-muted-foreground">Natural language question</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-[#00BBFF]/50" />
                    <div className="flex-1 min-w-[150px] text-center">
                      <div className="w-16 h-16 rounded-full bg-[#00BBFF]/20 flex items-center justify-center mx-auto mb-2">
                        <Zap className="h-8 w-8 text-[#00BBFF]" />
                      </div>
                      <p className="text-sm font-semibold">Agent Routing</p>
                      <p className="text-xs text-muted-foreground">Identify data sources</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-[#00BBFF]/50" />
                    <div className="flex-1 min-w-[150px] text-center">
                      <div className="w-16 h-16 rounded-full bg-[#00BBFF]/20 flex items-center justify-center mx-auto mb-2">
                        <Database className="h-8 w-8 text-[#00BBFF]" />
                      </div>
                      <p className="text-sm font-semibold">API Calls</p>
                      <p className="text-xs text-muted-foreground">Fetch live data</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-[#00BBFF]/50" />
                    <div className="flex-1 min-w-[150px] text-center">
                      <div className="w-16 h-16 rounded-full bg-[#00BBFF]/20 flex items-center justify-center mx-auto mb-2">
                        <CheckCircle2 className="h-8 w-8 text-[#00BBFF]" />
                      </div>
                      <p className="text-sm font-semibold">Synthesis</p>
                      <p className="text-xs text-muted-foreground">Generate response</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Use Cases Tab */}
            <TabsContent value="use-cases" className="space-y-6">
              <div className="grid gap-6">
                {USE_CASES.map((useCase, idx) => {
                  const Icon = useCase.icon
                  return (
                    <Card
                      key={idx}
                      className="border-2 border-[#00BBFF]/30 hover:border-[#00BBFF]/60 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#00BBFF]/20 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-[#00BBFF]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                              <h4 className="font-syne text-xl font-bold text-[#00BBFF]">{useCase.title}</h4>
                              <Badge variant="outline" className="border-[#00BBFF] text-[#00BBFF]">
                                {useCase.roi}
                              </Badge>
                            </div>
                            <p className="text-foreground/70 font-manrope leading-relaxed mb-3">
                              {useCase.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="text-xs text-muted-foreground font-semibold">Integrations:</span>
                              {useCase.integrations.map((integration, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {integration}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Real Example Callout */}
              <Card className="bg-[#00BBFF]/5 border-2 border-[#00BBFF]/40">
                <CardContent className="p-6">
                  <p className="font-syne text-lg font-bold text-[#00BBFF] mb-2">Real Example:</p>
                  <p className="text-foreground/80 font-manrope leading-relaxed">
                    A SaaS company with 500 employees deployed a customer support agent integrated with Salesforce and Stripe.
                    It resolved 70% of Tier 1 tickets automatically, reduced average response time from 4 hours to 2 minutes,
                    and improved CSAT scores by 18 points. Annual value: <span className="font-bold text-[#00BBFF]">$175,000</span>.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-6">
              <Card className="border-2 border-[#00BBFF]/40">
                <CardHeader className="bg-[#00BBFF]/5">
                  <CardTitle className="font-syne text-2xl text-[#00BBFF]">Implementation Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        phase: "Week 1-2",
                        title: "API Integration Planning",
                        tasks: [
                          "Map data sources and APIs",
                          "Define authentication and security",
                          "Create API documentation",
                          "Build evaluation test set",
                        ],
                      },
                      {
                        phase: "Week 3-4",
                        title: "Build Agent & Integrations",
                        tasks: [
                          "Develop API connectors",
                          "Implement tool-calling logic",
                          "Configure error handling",
                          "Set up rate limiting and caching",
                        ],
                      },
                      {
                        phase: "Week 5-6",
                        title: "Test & Optimize",
                        tasks: [
                          "Run integration tests",
                          "Performance testing under load",
                          "Pilot with select users",
                          "Monitor and iterate",
                        ],
                      },
                      {
                        phase: "Week 7",
                        title: "Launch & Monitor",
                        tasks: [
                          "Full rollout",
                          "Set up monitoring dashboards",
                          "Train support team",
                          "Continuous improvement cycle",
                        ],
                      },
                    ].map((phase, idx) => (
                      <div key={idx} className="border-l-4 border-[#00BBFF] pl-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="border-[#00BBFF] text-[#00BBFF]">{phase.phase}</Badge>
                          <h4 className="font-syne font-bold text-lg">{phase.title}</h4>
                        </div>
                        <ul className="space-y-1">
                          {phase.tasks.map((task, taskIdx) => (
                            <li key={taskIdx} className="flex items-start gap-2 text-foreground/70">
                              <span className="text-[#00BBFF] mt-1">✓</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card className="border-2 border-[#00BBFF]/40">
                <CardHeader className="bg-[#00BBFF]/5">
                  <CardTitle className="font-syne text-xl text-[#00BBFF]">Typical Tech Stack</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">LLM</p>
                      <p className="text-foreground/80">GPT-4, Claude with function calling</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Framework</p>
                      <p className="text-foreground/80">LangChain, LlamaIndex, AutoGen</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Integrations</p>
                      <p className="text-foreground/80">REST APIs, GraphQL, Webhooks</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Monitoring</p>
                      <p className="text-foreground/80">DataDog, Sentry, Custom dashboards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom Insight */}
        <div className="text-center animate-fade-in delay-400 fill-backwards">
          <Card className="inline-block bg-white/95 backdrop-blur-md border-2 border-[#00BBFF]/40 px-8 py-4">
            <p className="font-syne text-lg font-semibold text-foreground">
              <span className="text-[#00BBFF]">Best for:</span> Customer-facing teams needing real-time data access and multi-system integration
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
