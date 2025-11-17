"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts'

interface DatasetQualityCorrelationProps {
  currentCompletion: number
  currentQuality: number
}

export default function DatasetQualityCorrelation({
  currentCompletion,
  currentQuality
}: DatasetQualityCorrelationProps) {
  // Generate correlation curve data points
  // Formula: quality = 45 + 50 * (1 - exp(-completeness * 3))
  // This creates a logarithmic curve showing diminishing returns
  const generateCurveData = () => {
    const points = []
    for (let completion = 0; completion <= 100; completion += 5) {
      const normalizedCompletion = completion / 100
      const quality = 45 + 50 * (1 - Math.exp(-normalizedCompletion * 3))
      points.push({
        completion,
        quality: Math.round(quality)
      })
    }
    return points
  }

  const curveData = generateCurveData()

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-md border-2 border-primary/40 rounded-lg p-3 shadow-lg">
          <p className="font-syne text-sm font-bold text-primary">
            {payload[0].payload.completion}% Dataset
          </p>
          <p className="font-jetbrains text-xs text-foreground/70">
            {payload[0].payload.quality}% Quality
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      {/* Chart */}
      <div className="bg-white/95 backdrop-blur-md rounded-xl border-2 border-primary/20 p-6">
        <h3 className="font-bebas text-2xl text-primary mb-4">
          CORRELATION: DATASET → QUALITY
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={curveData}>
            <defs>
              <linearGradient id="qualityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF4D00" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#FF4D00" stopOpacity={0.05}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" opacity={0.5} />

            <XAxis
              dataKey="completion"
              label={{
                value: 'Dataset Completeness (%)',
                position: 'insideBottom',
                offset: -5,
                style: { fill: '#525252', fontSize: 12, fontFamily: 'Manrope' }
              }}
              tick={{ fill: '#525252', fontSize: 11 }}
              axisLine={{ stroke: '#E5E5E5' }}
            />

            <YAxis
              domain={[40, 100]}
              label={{
                value: 'Automation Quality (%)',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#525252', fontSize: 12, fontFamily: 'Manrope' }
              }}
              tick={{ fill: '#525252', fontSize: 11 }}
              axisLine={{ stroke: '#E5E5E5' }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="quality"
              stroke="#FF4D00"
              strokeWidth={3}
              fill="url(#qualityGradient)"
              animationDuration={1000}
            />

            {/* Current position marker */}
            <ReferenceDot
              x={currentCompletion}
              y={currentQuality}
              r={8}
              fill="#FF4D00"
              stroke="#FAFAFA"
              strokeWidth={3}
              className="animate-glow-pulse"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Legend for current position */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary animate-glow-pulse" />
          <p className="font-manrope text-sm text-foreground/70">
            Your Current Position
          </p>
        </div>
      </div>

      {/* Quality Milestones */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-3 rounded-lg border-2 transition-all duration-500 ${
          currentCompletion >= 80
            ? 'border-success/60 bg-success/10'
            : 'border-border/30 bg-muted/20'
        }`}>
          <p className="font-bebas text-lg text-success">80%+ Dataset</p>
          <p className="font-jetbrains text-sm text-foreground/70">~92% Quality</p>
          <p className="text-xs text-muted-foreground mt-1">Production-ready</p>
        </div>

        <div className={`p-3 rounded-lg border-2 transition-all duration-500 ${
          currentCompletion >= 50
            ? 'border-warning/60 bg-warning/10'
            : 'border-border/30 bg-muted/20'
        }`}>
          <p className="font-bebas text-lg text-warning">50%+ Dataset</p>
          <p className="font-jetbrains text-sm text-foreground/70">~78% Quality</p>
          <p className="text-xs text-muted-foreground mt-1">Usable prototype</p>
        </div>
      </div>
    </div>
  )
}
