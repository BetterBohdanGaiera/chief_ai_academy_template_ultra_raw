/**
 * INTERACTIVE CORRELATION PATTERN
 *
 * A two-column layout with an interactive form (left) and live-updating
 * metrics/visualization (right) that demonstrates cause-effect relationships.
 *
 * Key Design Principles:
 * - User manipulates inputs → outputs update in real-time
 * - Clear visual feedback shows correlation between input quality and output quality
 * - Form validation encourages complete entries
 * - Progress tracking motivates completion
 * - Dynamic color coding based on calculated quality thresholds
 *
 * Perfect for teaching concepts like "dataset quality drives automation quality"
 * or "team size affects delivery speed."
 */

'use client'

import { useState, useMemo } from 'react'
import {
  Plus,
  Database,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Target,
  Trash2
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GeometricPattern } from '@/components/decorative/geometric-patterns'
import { GrainOverlay } from '@/components/decorative/grain-overlay'

interface Entry {
  id: string
  name: string
  goodExample: string
  badExample: string
  reasoning: string
}

// CUSTOMIZE THIS: Correlation function mapping input % to output %
function calculateOutputQuality(inputCompletion: number): number {
  // Example: non-linear correlation
  // 0% input → 50% output
  // 20% → 65%
  // 50% → 80%
  // 80% → 92%
  // 100% → 95%

  if (inputCompletion === 0) return 50
  if (inputCompletion <= 20) {
    return 50 + (inputCompletion / 20) * 15
  }
  if (inputCompletion <= 50) {
    return 65 + ((inputCompletion - 20) / 30) * 15
  }
  if (inputCompletion <= 80) {
    return 80 + ((inputCompletion - 50) / 30) * 12
  }
  return 92 + ((inputCompletion - 80) / 20) * 3
}

// CUSTOMIZE THIS: Calculate input completion percentage
function calculateInputCompletion(entries: Entry[]): number {
  if (entries.length === 0) return 0

  const targetEntries = 10 // 10 entries = 100%
  const filledEntries = entries.filter(entry =>
    entry.name.trim() &&
    entry.goodExample.trim() &&
    entry.badExample.trim() &&
    entry.reasoning.trim()
  ).length

  return Math.min(100, (filledEntries / targetEntries) * 100)
}

export default function InteractiveCorrelationPattern() {
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: '1',
      name: 'Example Criterion',
      goodExample: 'What good looks like',
      badExample: 'What to avoid',
      reasoning: 'Why this matters'
    }
  ])
  const [newEntry, setNewEntry] = useState<Entry>({
    id: '',
    name: '',
    goodExample: '',
    badExample: '',
    reasoning: ''
  })

  const inputCompletion = useMemo(() => calculateInputCompletion(entries), [entries])
  const outputQuality = useMemo(() => calculateOutputQuality(inputCompletion), [inputCompletion])

  const handleAddEntry = () => {
    if (newEntry.name.trim() && newEntry.goodExample.trim()) {
      setEntries([...entries, { ...newEntry, id: Date.now().toString() }])
      setNewEntry({
        id: '',
        name: '',
        goodExample: '',
        badExample: '',
        reasoning: ''
      })
    }
  }

  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }

  // Dynamic color coding based on output quality
  const getQualityColor = (quality: number): string => {
    if (quality >= 90) return 'text-success'
    if (quality >= 75) return 'text-primary'
    if (quality >= 60) return 'text-warning'
    return 'text-destructive'
  }

  const getQualityBgColor = (quality: number): string => {
    if (quality >= 90) return 'bg-success/10'
    if (quality >= 75) return 'bg-primary/10'
    if (quality >= 60) return 'bg-warning/10'
    return 'bg-destructive/10'
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-warning/5 via-background to-primary/5" />
      <GeometricPattern type="grid" className="opacity-20" />
      <GrainOverlay opacity={0.3} />

      <div className="max-w-7xl w-full space-y-8 lg:space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="glow" className="transform -rotate-2">
            <Database className="h-4 w-4 mr-2" />
            Interactive Widget
          </Badge>

          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-tight">
            INPUT QUALITY =
            <br />
            <span className="text-warning">OUTPUT QUALITY</span>
          </h2>

          <p className="font-syne text-xl md:text-2xl text-warning/90 font-bold max-w-4xl mx-auto">
            Add entries and watch quality improve in real-time
          </p>
        </div>

        {/* Main Grid: Form + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 animate-slide-in-up delay-200 fill-backwards">
          {/* Left: Interactive Form */}
          <div className="space-y-6">
            {/* Add New Entry Form */}
            <Card className="border-warning/40 bg-gradient-to-br from-warning/10 to-warning/5">
              <CardHeader>
                <CardTitle className="font-bebas text-2xl text-warning flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Entry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-manrope font-semibold text-foreground/70 mb-2 block">
                    Entry Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Accuracy, Tone, Format..."
                    value={newEntry.name}
                    onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-warning/30 bg-background/50 text-foreground font-manrope focus:outline-none focus:ring-2 focus:ring-warning/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-manrope font-semibold text-foreground/70 mb-2 block flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Good Example
                    </label>
                    <textarea
                      placeholder="What does good look like?"
                      value={newEntry.goodExample}
                      onChange={(e) => setNewEntry({ ...newEntry, goodExample: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-success/30 bg-background/50 text-foreground font-manrope focus:outline-none focus:ring-2 focus:ring-success/50 min-h-[100px] resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-manrope font-semibold text-foreground/70 mb-2 block flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      Bad Example
                    </label>
                    <textarea
                      placeholder="What should be avoided?"
                      value={newEntry.badExample}
                      onChange={(e) => setNewEntry({ ...newEntry, badExample: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-destructive/30 bg-background/50 text-foreground font-manrope focus:outline-none focus:ring-2 focus:ring-destructive/50 min-h-[100px] resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-manrope font-semibold text-foreground/70 mb-2 block">
                    Reasoning (Why this matters)
                  </label>
                  <textarea
                    placeholder="Explain the context..."
                    value={newEntry.reasoning}
                    onChange={(e) => setNewEntry({ ...newEntry, reasoning: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background/50 text-foreground font-manrope focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[80px] resize-none"
                  />
                </div>

                <Button
                  variant="glow"
                  onClick={handleAddEntry}
                  disabled={!newEntry.name.trim() || !newEntry.goodExample.trim()}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Entry
                </Button>
              </CardContent>
            </Card>

            {/* Existing Entries */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {entries.map((entry, index) => (
                <Card
                  key={entry.id}
                  className="border-primary/30 bg-primary/5 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-syne font-bold text-lg text-primary mb-2">
                          {entry.name}
                        </h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-success font-semibold mb-1">✓ Good</p>
                            <p className="text-foreground/70">{entry.goodExample}</p>
                          </div>
                          <div>
                            <p className="text-destructive font-semibold mb-1">✗ Bad</p>
                            <p className="text-foreground/70">{entry.badExample}</p>
                          </div>
                        </div>
                        {entry.reasoning && (
                          <p className="text-xs text-muted-foreground mt-2 italic">
                            {entry.reasoning}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveEntry(entry.id)}
                        className="p-2 hover:bg-destructive/10 rounded-lg transition-colors group"
                        aria-label="Delete entry"
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground group-hover:text-destructive transition-colors" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Live Metrics & Quality Meter */}
          <div className="space-y-6">
            {/* Output Quality Display */}
            <Card className={`border-2 ${getQualityBgColor(outputQuality)} animate-slide-in-right delay-300 fill-backwards`}>
              <CardHeader>
                <CardTitle className="font-bebas text-xl flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Output Quality
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className={`font-jetbrains text-7xl font-bold ${getQualityColor(outputQuality)}`}>
                  {Math.round(outputQuality)}%
                </div>
                <p className="text-sm text-muted-foreground">
                  Current quality based on inputs
                </p>

                {/* Quality Status Badge */}
                {outputQuality >= 90 && (
                  <Badge variant="default" className="bg-success text-white">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Excellent Quality
                  </Badge>
                )}
                {outputQuality >= 75 && outputQuality < 90 && (
                  <Badge variant="glow">
                    Good Quality
                  </Badge>
                )}
                {outputQuality >= 60 && outputQuality < 75 && (
                  <Badge variant="outline" className="border-warning text-warning">
                    Moderate Quality
                  </Badge>
                )}
                {outputQuality < 60 && (
                  <Badge variant="destructive">
                    Low Quality
                  </Badge>
                )}
              </CardContent>
            </Card>

            {/* Input Completion Progress */}
            <Card className="border-primary/40 bg-primary/5 animate-slide-in-right delay-400 fill-backwards">
              <CardHeader>
                <CardTitle className="font-bebas text-xl flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Input Completion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-manrope text-foreground/70">
                    {entries.length} / 10 entries
                  </span>
                  <span className="font-jetbrains text-2xl font-bold text-primary">
                    {Math.round(inputCompletion)}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-4 bg-muted/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
                    style={{ width: `${inputCompletion}%` }}
                  />
                </div>

                <p className="text-xs text-muted-foreground italic">
                  {inputCompletion < 100
                    ? `Add ${10 - entries.length} more entries to reach 100%`
                    : 'Input complete! Maximum quality achieved.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center pt-4 animate-fade-in delay-700 fill-backwards">
          <div className="inline-block px-8 py-6 bg-warning/10 border-2 border-warning/50 rounded-lg max-w-5xl">
            <p className="font-bebas text-2xl md:text-3xl text-warning mb-2">
              THE CORRELATION RULE
            </p>
            <p className="font-syne text-lg md:text-xl font-bold text-foreground/90">
              Better inputs = better outputs. But even 100% input quality only gets you to ~95% output quality.
              <span className="block mt-2 text-primary">
                The 5% gap requires continuous iteration—which this tool demonstrates.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
