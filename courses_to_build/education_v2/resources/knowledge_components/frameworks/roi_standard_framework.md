---
id: roi_standard_framework
title: ROI Calculation Standard Framework
category: frameworks
tags: [roi, economics, investment-analysis, business-case]
presentation_formats: [full, summary, inline, example_application_hr]
estimated_time:
  full: 5 minutes
  summary: 30 seconds
  inline: 10 seconds
dependencies: []
version: 1.0.0
last_updated: 2025-11-16
---

# ROI Calculation Standard Framework

## Full Format {#full}

### Purpose

Provides consistent methodology for calculating and presenting AI agent ROI across all case studies and examples.

### Overview

Every AI agent investment has three components that must be explicitly calculated and presented:

1. **INVESTMENT** (One-Time + Ongoing)
2. **VALUE** (Annual Benefits)
3. **NET ROI** (Payback Period + Ongoing Returns)

This framework ensures consistency, comparability, and credibility across all ROI presentations.

---

### The Three-Component Framework

#### Component 1: INVESTMENT (One-Time + Ongoing)

**One-Time Costs:**
- Agent Manager time: [Hours × Hourly Rate]
- Developer time: [Hours × Hourly Rate]
- Infrastructure setup: [Cloud/API/Tools costs]
- **Total One-Time: $X**

**Ongoing Costs (Annual):**
- API usage: [Calls × Cost per call × 12 months]
- Cloud hosting: [Monthly cost × 12]
- Maintenance: [Hours/month × Hourly Rate × 12]
- **Total Ongoing/Year: $Y/year**

---

#### Component 2: VALUE (Annual Benefits)

**Time Savings:**
- Hours reclaimed per week: [Hours]
- Annual value: [Hours × 50 weeks × Hourly Rate]
- **Subtotal: $A/year**

**Quality Improvements:**
- Reduced errors: [Error rate reduction × Cost per error × Volume]
- Faster response time: [Customer satisfaction value OR sales velocity impact]
- **Subtotal: $B/year**

**Scalability Gains:**
- Volume increase without headcount: [Additional capacity × Value per unit]
- 24/7 availability value: [After-hours requests × Value per request]
- **Subtotal: $C/year**

**Total Annual Value: $A + $B + $C = $Z/year**

---

#### Component 3: NET ROI

**First Year:**
- Investment: One-Time ($X) + Ongoing ($Y) = $X+Y
- Value: $Z
- **Net ROI Year 1: $Z - ($X+Y) = $W**
- **Payback Period: $X+Y / ($Z/12) = N months**

**Year 2+ (Ongoing):**
- Investment: Ongoing ($Y)
- Value: $Z
- **Net ROI Year 2+: $Z - $Y = $V/year**

---

### How to Apply This Framework

**When presenting ROI, ALWAYS show:**
1. Investment breakdown (one-time + ongoing)
2. Value breakdown (time + quality + scale)
3. Net ROI (Year 1 + Year 2+)
4. Payback period in months

**Standard Presentation Order:**
1. The problem/use case
2. The solution approach
3. Timeline to build (weeks)
4. **ROI (using this framework)**
5. Key success factors

---

### Example Application: HR Onboarding Assistant {#example_application_hr}

**INVESTMENT:**

**One-Time:**
- Agent Manager (Sarah): 40 hours × $75/hr = $3,000
- Developer (Marcus): 120 hours × $150/hr = $18,000
- Infrastructure setup: $2,000
- **Total One-Time: $23,000**

**Ongoing (Annual):**
- API usage: 2,000 queries/month × $0.05 × 12 = $1,200
- Cloud hosting: $50/month × 12 = $600
- Maintenance: 5 hours/month × $150/hr × 12 = $9,000
- **Total Ongoing: $10,800/year**

---

**VALUE (Annual):**

**Time Savings:**
- Hours reclaimed: 15 hours/week (Sarah's time)
- Annual value: 15 × 50 weeks × $75/hr = $56,250

**Quality Improvements:**
- Consistent answers reduce escalations: 20 escalations/year avoided × $500 = $10,000
- Faster response time improves new hire satisfaction: $5,000 (retention value)
- **Subtotal: $15,000**

**Scalability:**
- Handles 100% of questions vs 60% manual coverage
- After-hours questions answered immediately: 500/year × $50 value = $25,000

**Total Annual Value: $56,250 + $15,000 + $25,000 = $96,250/year**

---

**NET ROI:**

**Year 1:**
- Investment: $23,000 + $10,800 = $33,800
- Value: $96,250
- **Net ROI: $96,250 - $33,800 = $62,450**
- **Payback: $33,800 / ($96,250/12) = 4.2 months**

**Year 2+ Ongoing:**
- Investment: $10,800/year
- Value: $96,250/year
- **Net ROI: $85,450/year**

**Summary:** $62K Year 1, $85K ongoing | Payback: 4.2 months

---

### Common Mistakes

**Mistake 1: Only Showing Total ROI**
- ❌ "ROI: $74K/year"
- ✅ Show breakdown: Investment → Value → Net ROI with payback

**Mistake 2: Ignoring Ongoing Costs**
- ❌ Only calculating one-time investment
- ✅ Separate Year 1 (one-time + ongoing) from Year 2+ (ongoing only)

**Mistake 3: Vague Value Calculations**
- ❌ "Saves time and improves quality"
- ✅ Specific hours saved × hourly rate + quantified quality improvements

**Mistake 4: Missing Payback Period**
- ❌ Only showing annual ROI
- ✅ Calculate and display months to payback

---

## Summary Format {#summary}

**ROI:** $[Net Year 1] first year, $[Net Year 2+] ongoing | Payback: [N] months

Example: ROI: $62K Year 1, $85K ongoing | Payback: 4.2 months

---

## Inline Format {#inline}

ROI calculation framework with three components: Investment (one-time + ongoing), Value (time + quality + scale), Net ROI (payback period + ongoing returns)

---

## Notes for Application

- All $ values should be based on realistic market rates
- Time savings should cite specific hours/week with source
- Quality improvements need quantification methodology
- Scalability should reference volume/coverage data
- Payback period assumes value accrues evenly across year
- Always show both Year 1 and Year 2+ projections
