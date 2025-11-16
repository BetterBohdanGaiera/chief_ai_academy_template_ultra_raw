"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Network, Zap, Brain, GitBranch } from "lucide-react"

export default function IncrementalPrototype() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Multi-agent system
    interface Agent {
      id: number
      x: number
      y: number
      role: string
      color: string
      connections: number[]
    }

    const agents: Agent[] = [
      {
        id: 1,
        x: canvas.width * 0.5,
        y: canvas.height * 0.2,
        role: "Router",
        color: "#FF4D00",
        connections: [2, 3, 4],
      },
      {
        id: 2,
        x: canvas.width * 0.25,
        y: canvas.height * 0.5,
        role: "Research",
        color: "#00BBFF",
        connections: [1, 5],
      },
      {
        id: 3,
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        role: "Analysis",
        color: "#10B981",
        connections: [1, 5],
      },
      {
        id: 4,
        x: canvas.width * 0.75,
        y: canvas.height * 0.5,
        role: "Execution",
        color: "#F59E0B",
        connections: [1, 5],
      },
      {
        id: 5,
        x: canvas.width * 0.5,
        y: canvas.height * 0.75,
        role: "Coordinator",
        color: "#8B5CF6",
        connections: [2, 3, 4],
      },
    ]

    let animationId: number
    let messageProgress = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      messageProgress = (messageProgress + 0.01) % 1

      // Draw connections with data flow
      agents.forEach((agent) => {
        agent.connections.forEach((targetId) => {
          const target = agents.find((a) => a.id === targetId)
          if (!target) return

          // Connection line
          ctx.strokeStyle = "#CBD5E1"
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(agent.x, agent.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()

          // Animated data packet
          const packetX = agent.x + (target.x - agent.x) * messageProgress
          const packetY = agent.y + (target.y - agent.y) * messageProgress
          ctx.beginPath()
          ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
          ctx.fillStyle = agent.color
          ctx.fill()
        })
      })

      // Draw agent nodes
      agents.forEach((agent) => {
        const isHovered = hoveredAgent === agent.id
        const radius = isHovered ? 45 : 35

        // Glow effect
        const gradient = ctx.createRadialGradient(
          agent.x,
          agent.y,
          0,
          agent.x,
          agent.y,
          radius * 2
        )
        gradient.addColorStop(0, `${agent.color}30`)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(agent.x, agent.y, radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Node circle
        ctx.beginPath()
        ctx.arc(agent.x, agent.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = agent.color
        ctx.fill()

        // Inner circle
        ctx.beginPath()
        ctx.arc(agent.x, agent.y, radius * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = "#FFFFFF"
        ctx.fill()

        // Role label
        ctx.font = "bold 12px sans-serif"
        ctx.fillStyle = "#FFFFFF"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(agent.role, agent.x, agent.y + radius + 20)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [hoveredAgent])

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-background via-primary/10 to-background overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-sm font-semibold border-primary/60">
            Level 5: Autonomous Systems
          </Badge>
          <h1 className="font-display text-7xl lg:text-9xl font-bold text-primary tracking-tight">
            Multi-Agent
          </h1>
          <p className="font-body text-2xl lg:text-3xl text-foreground-muted max-w-3xl mx-auto">
            Self-improving systems with autonomous decision-making
          </p>
        </div>

        {/* Key Characteristics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-in-up delay-200">
          <div className="bg-white/90 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6 space-y-3 hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <Network className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary text-center">
              Multi-Agent
            </h3>
            <p className="text-sm text-foreground-muted text-center">
              Specialized agents coordinate and communicate
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6 space-y-3 hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <GitBranch className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary text-center">
              Autonomous Routing
            </h3>
            <p className="text-sm text-foreground-muted text-center">
              System decides which agent handles each task
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6 space-y-3 hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary text-center">
              Continuous Learning
            </h3>
            <p className="text-sm text-foreground-muted text-center">
              Self-improvement without human intervention
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6 space-y-3 hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary text-center">
              Maximum ROI
            </h3>
            <p className="text-sm text-foreground-muted text-center">
              Exponential time and money savings
            </p>
          </div>
        </div>

        {/* Agent Roles Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in delay-300">
          <div className="bg-white/90 backdrop-blur-sm border-2 border-primary/20 rounded-xl p-6 space-y-4">
            <h3 className="font-display text-xl font-bold text-primary">
              How Multi-Agent Systems Work
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">1.</span>
                <div>
                  <div className="font-semibold text-foreground">Router Agent</div>
                  <div className="text-sm text-foreground-muted">
                    Analyzes incoming tasks and routes to appropriate specialist agents
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">2.</span>
                <div>
                  <div className="font-semibold text-foreground">Specialist Agents</div>
                  <div className="text-sm text-foreground-muted">
                    Research, Analysis, Execution - each optimized for specific roles
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">3.</span>
                <div>
                  <div className="font-semibold text-foreground">Coordinator Agent</div>
                  <div className="text-sm text-foreground-muted">
                    Combines outputs, ensures quality, manages handoffs
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border-2 border-primary/20 rounded-xl p-6 space-y-4">
            <h3 className="font-display text-xl font-bold text-primary">
              Strategic Capability
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <div className="font-semibold text-foreground">No Human Bottleneck</div>
                  <div className="text-sm text-foreground-muted">
                    System operates 24/7 without approval workflows
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <div className="font-semibold text-foreground">Self-Optimization</div>
                  <div className="text-sm text-foreground-muted">
                    Continuously learns from outcomes and improves
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <div>
                  <div className="font-semibold text-foreground">Competitive Advantage</div>
                  <div className="text-sm text-foreground-muted">
                    Speed and scale impossible for traditional organizations
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center animate-fade-in delay-400">
          <div className="inline-block px-6 py-4 bg-primary/10 border-2 border-primary/40 rounded-xl">
            <p className="font-body text-lg lg:text-xl text-foreground">
              <span className="font-bold text-primary">The Future:</span> Level 5 represents
              full automation with self-improving capabilities and exponential ROI
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
