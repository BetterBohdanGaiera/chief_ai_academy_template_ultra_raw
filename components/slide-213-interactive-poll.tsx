"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FIVE_LEVELS } from "@/types/presentation-data"
import { Check } from "lucide-react"

export function Slide213InteractivePoll() {
  const [votes, setVotes] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  })
  const [userVote, setUserVote] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0)

  const handleVote = (levelId: number) => {
    if (userVote === null) {
      setVotes((prev) => ({
        ...prev,
        [levelId]: prev[levelId] + 1,
      }))
      setUserVote(levelId)
      setShowResults(true)
    }
  }

  const getPercentage = (levelId: number) => {
    if (totalVotes === 0) return 0
    return Math.round((votes[levelId] / totalVotes) * 100)
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-4 animate-fade-in">
          <Badge variant="outline" className="text-lg px-6 py-2">
            Module 02: Five Levels Framework
          </Badge>
          <h1 className="text-6xl lg:text-8xl font-bebas text-foreground leading-none">
            Where Is Your
            <br />
            <span className="text-primary">Organization?</span>
          </h1>
          <p className="text-2xl lg:text-4xl font-syne font-semibold text-muted-foreground max-w-3xl mx-auto">
            {userVote === null
              ? "Click your current level"
              : "Thank you for participating!"}
          </p>
        </div>

        {/* Poll Options - Staircase Style */}
        <div className="space-y-4 mb-8">
          {FIVE_LEVELS.map((level) => {
            const percentage = getPercentage(level.id)
            const voteCount = votes[level.id]
            const isUserVote = userVote === level.id
            const canVote = userVote === null

            return (
              <div key={level.id} className="relative">
                <Button
                  variant="outline"
                  className={`w-full h-auto p-0 overflow-hidden transition-all duration-500 ${
                    canVote
                      ? "hover:scale-102 hover:shadow-xl cursor-pointer"
                      : "cursor-not-allowed"
                  } ${
                    isUserVote
                      ? "ring-4 ring-primary shadow-2xl"
                      : ""
                  }`}
                  onClick={() => handleVote(level.id)}
                  disabled={!canVote}
                  style={{
                    borderColor: level.color,
                    borderWidth: isUserVote ? "3px" : "2px",
                  }}
                >
                  <div className="w-full relative">
                    {/* Vote percentage background bar */}
                    {showResults && (
                      <div
                        className="absolute left-0 top-0 bottom-0 transition-all duration-1000 ease-out"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: `${level.color}20`,
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className="flex items-center justify-center w-16 h-16 rounded-lg font-bebas text-3xl"
                          style={{
                            backgroundColor: `${level.color}${isUserVote ? "FF" : "30"}`,
                            color: isUserVote ? "#FFFFFF" : level.color,
                          }}
                        >
                          {level.id}
                        </div>

                        <div className="text-left flex-1">
                          <h3 className="text-xl lg:text-2xl font-bebas text-foreground mb-1">
                            {level.name}
                          </h3>
                          <p className="text-sm lg:text-base text-muted-foreground font-manrope">
                            {level.principle}
                          </p>
                        </div>

                        {isUserVote && (
                          <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg">
                            <Check className="h-5 w-5" />
                            <span className="font-semibold">Your Choice</span>
                          </div>
                        )}
                      </div>

                      {/* Results Display */}
                      {showResults && (
                        <div className="ml-4 text-right min-w-[120px]">
                          <div
                            className="text-4xl font-bebas leading-none mb-1"
                            style={{ color: level.color }}
                          >
                            {percentage}%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {voteCount} {voteCount === 1 ? "vote" : "votes"}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Results Summary */}
        {showResults && (
          <Card className="p-8 border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-5xl font-bebas text-primary mb-2">{totalVotes}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Total Votes
                </div>
              </div>

              <div>
                <div className="text-5xl font-bebas text-accent mb-2">
                  {(() => {
                    const mostVotedLevel = Object.entries(votes).reduce((a, b) =>
                      a[1] > b[1] ? a : b
                    )[0]
                    return `Level ${mostVotedLevel}`
                  })()}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Most Common
                </div>
              </div>

              <div>
                <div className="text-5xl font-bebas text-foreground mb-2">
                  {(() => {
                    const level4and5 = (votes[4] + votes[5]) / totalVotes * 100
                    return totalVotes > 0 ? `${Math.round(level4and5)}%` : "0%"
                  })()}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  At Transformation (4-5)
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Key Message */}
        <div className="mt-12 text-center animate-fade-in delay-300">
          <div className="max-w-4xl mx-auto space-y-4">
            {!showResults ? (
              <p className="text-lg lg:text-xl font-syne text-muted-foreground">
                Most companies are at Levels 1-3. That's normal—you're not behind.
                <br />
                <span className="text-primary font-bold">
                  This session shows the path to Level 4.
                </span>
              </p>
            ) : (
              <div className="space-y-3">
                <p className="text-xl lg:text-2xl font-syne font-bold text-foreground">
                  The good news: <span className="text-accent">You can skip Level 3 entirely</span>
                </p>
                <p className="text-lg text-muted-foreground">
                  Go directly from where you are to Level 4 using the systematic approach we'll cover next.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
