# Incremental Prototype

## Pattern Overview

An animated canvas visualization showing a multi-agent system with nodes representing specialized agents connected by lines, with animated data packets flowing between them. The animation demonstrates progressive capability expansion and autonomous agent coordination in real-time using HTML5 Canvas and requestAnimationFrame.

## Why It Works

**Pedagogical Psychology**: This pattern leverages the **scaffolding principle** - visual representations prevent cognitive overload when explaining complex systems. By showing agents as distinct, color-coded nodes with visible communication paths, learners can grasp multi-agent architecture intuitively. The animation creates a mental model: "Agents are independent units that communicate." Research shows animated diagrams improve systems thinking by 60% compared to static images.

**UX Principles**:
- **Motion creates understanding**: Animated data packets show information flow direction
- **Color differentiation**: Each agent role has unique color for instant recognition
- **Spatial relationships**: Network layout conveys hierarchy (router at top, coordinator at bottom)
- **Progressive revelation**: Animation loop reveals patterns over time
- **Ambient animation**: Background activity keeps slide engaging without being distracting

## When to Use

- Explaining multi-component system architectures
- Teaching network or distributed system concepts
- Demonstrating data flow, message passing, or API communication
- Showing autonomous systems with multiple specialized roles
- Creating engaging "future vision" slides (Level 5 AI, advanced tech)
- Presentations where visual metaphor enhances understanding

## When NOT to Use

- Simple linear workflows (use flowcharts instead)
- When precise technical accuracy matters more than metaphor
- Low-performance devices (canvas animation is CPU-intensive)
- Accessibility-first contexts (canvas content is hard to make accessible)
- When animation is purely decorative (violates purpose-driven design)
- Presentations that print to PDF (animation doesn't translate)

## Key Features

- **HTML5 Canvas rendering**: Full programmatic control of graphics
- **requestAnimationFrame loop**: Smooth 60fps animation
- **Node-based network graph**: Agents positioned in strategic layout
- **Animated data packets**: Moving circles showing message flow
- **Radial gradient glows**: Depth and emphasis around active nodes
- **Hover states**: Agents scale up on hover (optional interactivity)
- **Responsive canvas sizing**: Adapts to container dimensions
- **Auto-cleanup**: Animation loop properly canceled on unmount

## Code Highlights

### State Management

```tsx
const canvasRef = useRef<HTMLCanvasElement>(null)
const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)

// Agent data structure
interface Agent {
  id: number
  x: number
  y: number
  role: string
  color: string
  connections: number[] // IDs of connected agents
}

const agents: Agent[] = [
  {
    id: 1,
    x: canvas.width * 0.5,  // Center top
    y: canvas.height * 0.2,
    role: "Router",
    color: "#FF4D00",
    connections: [2, 3, 4],
  },
  // ... more agents
]
```

### Interactive Logic

```tsx
useEffect(() => {
  const canvas = canvasRef.current
  const ctx = canvas.getContext("2d")

  let messageProgress = 0

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    messageProgress = (messageProgress + 0.01) % 1 // 0-1 loop

    // Draw connections
    agents.forEach((agent) => {
      agent.connections.forEach((targetId) => {
        const target = agents.find((a) => a.id === targetId)

        // Animated data packet along connection line
        const packetX = agent.x + (target.x - agent.x) * messageProgress
        const packetY = agent.y + (target.y - agent.y) * messageProgress
        ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
        ctx.fillStyle = agent.color
        ctx.fill()
      })
    })

    // Draw agent nodes with radial gradients
    // ...

    animationId = requestAnimationFrame(animate)
  }

  animate()

  return () => cancelAnimationFrame(animationId)
}, [hoveredAgent])
```

### Canvas Rendering Techniques

```tsx
// Radial gradient for glow effect
const gradient = ctx.createRadialGradient(
  agent.x, agent.y, 0,
  agent.x, agent.y, radius * 2
)
gradient.addColorStop(0, `${agent.color}30`) // 30% opacity
gradient.addColorStop(1, "transparent")
ctx.fillStyle = gradient
ctx.arc(agent.x, agent.y, radius * 2, 0, Math.PI * 2)
ctx.fill()

// Text labels below nodes
ctx.font = "bold 12px sans-serif"
ctx.textAlign = "center"
ctx.fillText(agent.role, agent.x, agent.y + radius + 20)
```

## Reuse Guidelines

### Adaptation Steps

1. **Define your system components**: Identify the agents/nodes in your system
2. **Map relationships**: Determine which components communicate with which
3. **Choose positions**: Layout nodes spatially to convey hierarchy or flow
4. **Assign colors**: Pick distinct colors for each component type
5. **Add labels**: Name each node clearly for instant recognition
6. **Adjust animation**: Modify speed, packet size, or movement patterns

### Customization Points

- **Content**: Replace `agents` array with your system components
- **Styling**: Change colors, sizes, and glow effects for each agent
- **Animation**: Modify `messageProgress` increment speed for faster/slower flow
- **Layout**: Reposition nodes (x, y coordinates) to match your architecture
- **Interactivity**: Add hover effects, click handlers, or tooltips
- **Complexity**: Add/remove agents and connections as needed

## Adaptation Example

**Original**: Multi-Agent AI System (Router → Specialists → Coordinator)

**Adapted for**: Microservices Architecture Visualization

```tsx
interface Service {
  id: number
  x: number
  y: number
  name: string
  color: string
  dependsOn: number[]
}

const services: Service[] = [
  {
    id: 1,
    x: canvas.width * 0.5,
    y: canvas.height * 0.1,
    name: "API Gateway",
    color: "#3B82F6",
    dependsOn: [2, 3, 4],
  },
  {
    id: 2,
    x: canvas.width * 0.2,
    y: canvas.height * 0.4,
    name: "Auth Service",
    color: "#10B981",
    dependsOn: [5], // Database
  },
  {
    id: 3,
    x: canvas.width * 0.5,
    y: canvas.height * 0.4,
    name: "Business Logic",
    color: "#F59E0B",
    dependsOn: [5],
  },
  {
    id: 4,
    x: canvas.width * 0.8,
    y: canvas.height * 0.4,
    name: "Payment Service",
    color: "#EF4444",
    dependsOn: [5],
  },
  {
    id: 5,
    x: canvas.width * 0.5,
    y: canvas.height * 0.7,
    name: "Database",
    color: "#8B5CF6",
    dependsOn: [],
  },
]
```

**Changes made**:
- Agent roles → Service names (API Gateway, Auth Service, etc.)
- `connections` → `dependsOn` (semantic clarity)
- Colors adjusted to match service types
- Layout: Gateway at top, database at bottom (mirrors real architecture)
- Could add service health indicators (pulsing nodes for status)

## Source

Original slide: `/components/slide-212-level5-autonomous.tsx`

## Design System Compliance

- **Typography**: Bebas Neue (display titles), Manrope (body text)
- **Colors**: Primary orange (#FF4D00), cyan (#00BBFF), success green, amber, purple
- **Animations**: requestAnimationFrame loop at 60fps, `animate-fade-in` for content
- **Canvas**: Programmatic rendering with accessibility considerations
- **Accessibility** (Limitations):
  - Canvas content not screen-reader accessible (provide text alternative)
  - Animation cannot be paused (add `prefers-reduced-motion` check)
  - No keyboard navigation within canvas
  - Provide descriptive text alongside visualization
  - Consider aria-label on canvas element describing the system
