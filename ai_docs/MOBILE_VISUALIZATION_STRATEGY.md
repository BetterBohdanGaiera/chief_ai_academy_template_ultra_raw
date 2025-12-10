# Mobile Visualization Strategy

This document defines the mobile-adaptive approach for information visualization in presentations, ensuring optimal experiences across all device sizes.

---

## Philosophy: Mobile-Adaptive (Not Just Responsive)

**Key Principle**: Mobile devices need **adapted information architecture**, not just shrunk layouts.

### The Difference

| Responsive (Basic) | Mobile-Adaptive (Our Approach) |
|--------------------|-------------------------------|
| Same content, smaller | Different visualization strategies |
| Grids collapse | Information prioritization |
| Typography scales | Touch-optimized interactions |
| Horizontal scroll possible | Vertical-first design |

---

## Mobile Considerations Framework

### When Planning Slides, Ask:

1. **Is this visualization mobile-friendly?**
   - Complex multi-column layouts → Single column with progressive disclosure
   - Dense data tables → Simplified metrics or swipeable cards
   - Canvas animations → Consider touch alternatives or simplified versions

2. **Do interactions translate to touch?**
   - Hover reveals → Tap-to-reveal or auto-reveal on mobile
   - Click-and-drag → Swipe gestures
   - Fine pointer interactions → Larger touch targets (44x44px minimum)

3. **Is the information hierarchy clear on mobile?**
   - What's the ONE thing users should see first?
   - Can secondary content be progressively disclosed?
   - Does the vertical scroll tell a coherent story?

---

## Touch Interaction Patterns

### Pattern 1: Tap-to-Reveal (Replace Hover)

**Desktop Behavior**: Hover over card to reveal details
**Mobile Adaptation**: Tap card to toggle details

```tsx
// Implementation pattern
const [activeCard, setActiveCard] = useState<string | null>(null)

// On card
onClick={() => setActiveCard(activeCard === id ? null : id)}
onMouseEnter={() => setActiveCard(id)}  // Desktop hover still works
onMouseLeave={() => setActiveCard(null)}

// Show details when active
{activeCard === id && <CardDetails />}
```

**Visual Affordance**: Add "Tap to explore" instruction on mobile

### Pattern 2: Swipe for Comparison (Replace Toggle Buttons)

**Desktop Behavior**: Click buttons to toggle between A/B views
**Mobile Adaptation**: Swipe left/right between views (optional enhancement)

```tsx
// CSS-based swipe indication
<div className="overflow-x-auto snap-x snap-mandatory md:overflow-visible">
  <div className="flex snap-center md:block">
    {/* Content panels */}
  </div>
</div>
```

**Fallback**: Standard toggle buttons work on mobile too, just ensure 44x44px touch targets

### Pattern 3: Expandable Sections (Replace Dense Layouts)

**Desktop Behavior**: All information visible in multi-column layout
**Mobile Adaptation**: Accordion-style expandable sections

```tsx
// Mobile-first expandable
<Accordion type="single" collapsible className="md:hidden">
  <AccordionItem value="section-1">
    <AccordionTrigger>Section Title</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>

// Desktop shows full layout
<div className="hidden md:grid md:grid-cols-3">
  {/* Full multi-column content */}
</div>
```

### Pattern 4: Simplified Canvas Visualizations

**Desktop Behavior**: Complex canvas animation with many elements
**Mobile Adaptation**: Simplified version or static fallback

```tsx
// Detect touch device
const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window

// Render appropriate version
{isTouchDevice ? (
  <SimplifiedVisualization />
) : (
  <FullCanvasAnimation />
)}
```

**Alternative**: Reduce particle count, simplify network graphs, use prefers-reduced-motion

---

## Responsive Breakpoint Strategy

### Breakpoint Definitions

| Breakpoint | Width | Device Context |
|------------|-------|----------------|
| Base (mobile) | 0-767px | Smartphones, portrait |
| md (tablet) | 768-1023px | Tablets, landscape phones |
| lg (desktop) | 1024-1279px | Laptops, small monitors |
| xl (large) | 1280px+ | Full desktop |

### Layout Adaptation Rules

**Mobile-First Grid Patterns**:
```css
/* Single column on mobile, expand on larger screens */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* 2-column on mobile can expand */
grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
```

**Typography Scaling**:
```css
/* Title: readable on all devices */
text-3xl md:text-5xl lg:text-6xl xl:text-7xl

/* Subtitle: proportional scaling */
text-lg md:text-xl lg:text-2xl

/* Body: consistent readability */
text-base md:text-lg  /* 16px → 18px */
```

**Spacing Adaptation**:
```css
/* Section padding: tight on mobile, generous on desktop */
p-4 md:p-8 lg:p-12 xl:p-16

/* Element gaps: scale with screen */
gap-4 md:gap-6 lg:gap-8
```

---

## Mobile-Specific Design Decisions

### Charts and Data Visualization

**On Mobile**:
- Use `ResponsiveContainer` with max-height
- Simplify legends (horizontal → vertical)
- Consider swipeable chart panels for multiple datasets
- Reduce data points shown (summary vs. detail)

```tsx
<ResponsiveContainer width="100%" height={250}>
  <BarChart data={mobileOptimizedData}>
    {/* Simpler axis labels */}
    <XAxis dataKey="label" tick={{ fontSize: 12 }} />
    {/* Hide secondary Y-axis on mobile */}
    <YAxis className="md:block hidden" />
  </BarChart>
</ResponsiveContainer>
```

### Interactive Elements

**Touch Target Sizing**:
- Minimum 44x44px for all interactive elements
- Add padding if visual size is smaller: `p-3` around icons
- Increase spacing between adjacent clickable items

```tsx
<Button className="min-h-[44px] min-w-[44px] p-3">
  <Icon className="w-5 h-5" />
</Button>
```

### Navigation on Mobile

**For Slide Navigation**:
- Swipe gestures for next/previous (if implemented)
- Larger touch targets for nav controls
- Progress indicator visible but not obstructing content
- Consider full-screen mode toggle

---

## Canvas Animation Guidelines for Mobile

### Performance Considerations

1. **Reduce Complexity**:
   - Fewer particles (100 vs 500)
   - Simpler physics calculations
   - Lower frame rates (30fps vs 60fps)

2. **Battery Awareness**:
   - Pause animations when not visible (Intersection Observer)
   - Respect prefers-reduced-motion
   - Auto-pause after initial animation sequence

3. **Touch Interaction Adaptation**:
   - Replace hover interactions with tap
   - Larger hit areas for interactive elements
   - Visual feedback on touch (ripple, glow)

```tsx
// Mobile-optimized particle field example
const particleCount = isMobile ? 50 : 200
const frameRate = isMobile ? 30 : 60

// Pause when not visible
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.1 }
  )
  observer.observe(containerRef.current)
  return () => observer.disconnect()
}, [])
```

---

## Mobile Testing Checklist

### Before Marking a Slide Complete

**Layout & Spacing**:
- [ ] Content fits within viewport width (no horizontal scroll)
- [ ] Text is readable without zooming (minimum 16px body)
- [ ] Spacing is appropriate (not cramped, not excessive)
- [ ] Critical content is above the fold (visible without scrolling)

**Interactivity**:
- [ ] Touch targets are at least 44x44px
- [ ] Hover interactions have tap equivalents
- [ ] Buttons and links are distinguishable from text
- [ ] No accidental tap conflicts (elements too close)

**Visual Hierarchy**:
- [ ] Primary message is immediately visible
- [ ] Secondary content is accessible but not overwhelming
- [ ] Icons/visuals aid understanding on smaller screens
- [ ] Color contrast is maintained on varied mobile screens

**Performance**:
- [ ] Canvas animations don't drain battery excessively
- [ ] Images are appropriately sized (not oversized for mobile)
- [ ] Reduced motion is respected
- [ ] Loading performance is acceptable on 4G

### Test at These Breakpoints

| Device | Width | Test Focus |
|--------|-------|------------|
| iPhone SE | 375px | Minimum supported width |
| iPhone 14 Pro | 393px | Common smartphone |
| iPad Mini | 768px | Tablet breakpoint |
| iPad Pro | 1024px | Large tablet / small laptop |

---

## Implementation Examples

### Example 1: Comparison Toggle - Mobile Adapted

**Desktop**: Two large panels side-by-side with toggle buttons
**Mobile**: Stacked panels with prominent toggle, one visible at a time

```tsx
export function ComparisonToggle({ optionA, optionB }) {
  const [showA, setShowA] = useState(true)

  return (
    <div>
      {/* Toggle - larger on mobile */}
      <div className="flex gap-2 justify-center mb-6">
        <Button
          variant={showA ? "default" : "outline"}
          onClick={() => setShowA(true)}
          className="min-h-[48px] px-6"
        >
          {optionA.label}
        </Button>
        <Button
          variant={!showA ? "default" : "outline"}
          onClick={() => setShowA(false)}
          className="min-h-[48px] px-6"
        >
          {optionB.label}
        </Button>
      </div>

      {/* Content - single column on mobile */}
      <div className="md:hidden">
        {showA ? <PanelContent {...optionA} /> : <PanelContent {...optionB} />}
      </div>

      {/* Desktop - side by side */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        <PanelContent {...optionA} highlighted={showA} />
        <PanelContent {...optionB} highlighted={!showA} />
      </div>
    </div>
  )
}
```

### Example 2: Hover Card Grid - Touch Adapted

**Desktop**: Hover over cards to reveal details
**Mobile**: Tap to toggle details, visual indicator added

```tsx
export function HoverCardGrid({ items }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          onMouseEnter={() => setActiveId(item.id)}
          onMouseLeave={() => setActiveId(null)}
          className={cn(
            "cursor-pointer transition-all",
            activeId === item.id && "ring-2 ring-primary"
          )}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">{item.title}</h3>
              {/* Touch indicator - mobile only */}
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform md:hidden",
                  activeId === item.id && "rotate-180"
                )}
              />
            </div>

            {/* Revealed content */}
            {activeId === item.id && (
              <div className="mt-4 pt-4 border-t animate-fade-in">
                <p>{item.details}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Mobile instruction */}
      <p className="text-sm text-muted-foreground text-center col-span-full md:hidden">
        Tap cards to explore details
      </p>
    </div>
  )
}
```

---

## Summary

### Key Principles

1. **Mobile-first thinking**: Design for mobile constraints first, enhance for desktop
2. **Touch is primary**: Assume touch interactions on small screens
3. **Progressive disclosure**: Show essentials first, reveal details on demand
4. **Performance matters**: Mobile devices have less processing power and battery

### Quick Reference

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| Hover reveal | Tap to toggle |
| Multi-column grid | Single column with accordion |
| Complex canvas | Simplified or static fallback |
| Dense data table | Summary cards or swipeable |
| Click-and-drag | Swipe gestures |
| Small buttons | 44x44px minimum targets |

### When to Create Mobile-Specific Versions

Create separate mobile components when:
- Canvas animation is too complex to simplify
- Information architecture needs complete restructuring
- Touch interaction patterns differ significantly
- Performance optimization requires different rendering approaches

For most slides, responsive CSS with touch adaptations is sufficient.
