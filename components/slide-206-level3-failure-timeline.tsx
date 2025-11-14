"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { LEVEL_3_FAILURE_TIMELINE, type TimelineEvent } from "@/types/presentation-data"
import { TrendingDown, MessageSquare } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export function Slide206Level3FailureTimeline() {
  const [currentWeek, setCurrentWeek] = useState(1)

  // Find the current event based on week
  const getCurrentEvent = (): TimelineEvent => {
    return (
      LEVEL_3_FAILURE_TIMELINE.find((event) => event.week >= currentWeek) ||
      LEVEL_3_FAILURE_TIMELINE[LEVEL_3_FAILURE_TIMELINE.length - 1]
    )
  }

  const currentEvent = getCurrentEvent()

  // Chart data up to current week
  const chartData = LEVEL_3_FAILURE_TIMELINE.filter((event) => event.week <= currentWeek)

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "#10B981"
      case "neutral":
        return "#F59E0B"
      case "negative":
        return "#EF4444"
      default:
        return "#6B7280"
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-lg px-6 py-2">
            Module 02: Level 3 - The Trap
          </Badge>
          <h1 className="text-6xl lg:text-8xl font-bebas text-foreground leading-none">
            The Failure
            <br />
            <span className="text-destructive">Timeline</span>
          </h1>
          <p className="text-2xl lg:text-4xl font-syne font-semibold text-muted-foreground max-w-3xl mx-auto">
            How Level 3 projects typically degrade over 6 months
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline Scrubber and Chart */}
          <div className="space-y-6">
            <Card className="p-6 border-2">
              <h3 className="text-2xl font-bebas text-foreground mb-4">
                Degradation Over Time
              </h3>

              {/* Interactive Chart */}
              <div className="mb-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      dataKey="week"
                      label={{ value: "Week", position: "insideBottom", offset: -5 }}
                      stroke="#6B7280"
                    />
                    <YAxis
                      label={{ value: "%", angle: -90, position: "insideLeft" }}
                      stroke="#6B7280"
                      domain={[0, 100]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #E5E7EB",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="adoption"
                      stroke="#00BBFF"
                      strokeWidth={3}
                      name="Adoption Rate"
                      dot={{ fill: "#00BBFF", r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="quality"
                      stroke="#FF4D00"
                      strokeWidth={3}
                      name="Quality Score"
                      dot={{ fill: "#FF4D00", r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Timeline Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Scrub Timeline
                  </label>
                  <span className="text-2xl font-bebas text-primary">
                    Week {currentWeek}
                  </span>
                </div>
                <Slider
                  value={[currentWeek]}
                  onValueChange={(value) => setCurrentWeek(value[0])}
                  min={1}
                  max={24}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Week 1 (Launch)</span>
                  <span>Week 24 (Abandoned)</span>
                </div>
              </div>

              {/* Current Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    Adoption Rate
                  </div>
                  <div className="text-3xl font-bebas text-accent">
                    {currentEvent.adoption}%
                  </div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    Quality Score
                  </div>
                  <div className="text-3xl font-bebas text-primary">
                    {currentEvent.quality}%
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Current Event Details */}
          <div className="space-y-6">
            <Card
              className="p-8 border-2 transition-all duration-500 animate-fade-in"
              style={{
                borderColor: getSentimentColor(currentEvent.sentiment),
                backgroundColor: `${getSentimentColor(currentEvent.sentiment)}10`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    backgroundColor: getSentimentColor(currentEvent.sentiment),
                  }}
                >
                  <TrendingDown className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl lg:text-4xl font-bebas text-foreground mb-2">
                    {currentEvent.label}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white"
                      style={{
                        backgroundColor: getSentimentColor(currentEvent.sentiment),
                      }}
                    >
                      {currentEvent.sentiment}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    What's Happening
                  </h4>
                  <p className="text-lg text-foreground font-manrope">
                    {currentEvent.description}
                  </p>
                </div>

                {currentEvent.testimonial && (
                  <div className="p-4 bg-card rounded-lg border-l-4" style={{ borderColor: getSentimentColor(currentEvent.sentiment) }}>
                    <div className="flex items-start gap-3">
                      <MessageSquare
                        className="h-5 w-5 mt-1 flex-shrink-0"
                        style={{ color: getSentimentColor(currentEvent.sentiment) }}
                      />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Team Feedback
                        </div>
                        <p className="text-base italic text-foreground">
                          "{currentEvent.testimonial}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Timeline milestones overview */}
            <Card className="p-6 border-2 border-muted">
              <h4 className="text-xl font-bebas text-foreground mb-4">Key Milestones</h4>
              <div className="space-y-2">
                {LEVEL_3_FAILURE_TIMELINE.map((event) => (
                  <button
                    key={event.week}
                    onClick={() => setCurrentWeek(event.week)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      currentEvent.week === event.week
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-muted/30 border-2 border-transparent hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-foreground">
                        Week {event.week}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {event.adoption}% adoption
                        </span>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: getSentimentColor(event.sentiment) }}
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Key Message */}
        <div className="mt-12 text-center animate-fade-in delay-300">
          <div className="max-w-4xl mx-auto p-8 bg-destructive/5 border-2 border-destructive/30 rounded-lg">
            <p className="text-xl lg:text-2xl font-syne font-bold text-foreground">
              This pattern is <span className="text-destructive">predictable</span>.
              <br />
              <span className="text-primary">
                Avoid the trap by going directly to Level 4.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
