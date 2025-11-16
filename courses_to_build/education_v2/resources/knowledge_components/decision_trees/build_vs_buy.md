---
id: build_vs_buy
title: Build vs Buy Decision Tree for AI Agents
category: decision_trees
tags: [decision-making, build, buy, vendor, custom, investment]
presentation_formats: [full, summary, visual, checklist]
estimated_time:
  full: 12 minutes
  summary: 2 minutes
  visual: 4 minutes
  checklist: 3 minutes
dependencies: [level_4_iterative_agents, agent_evaluation_framework]
version: 1.0.0
last_updated: 2025-01-16
---

# Build vs Buy Decision Tree for AI Agents

## [FULL FORMAT]

### The Core Question

Once you've decided you need Custom Agentic AI (not ML, not generic tools), the next critical decision is:

**Should we BUILD a custom agent or BUY a vendor solution?**

This decision determines:
- Investment required ($7K-$13K custom vs $10-$50/user/month vendor)
- Control over capabilities (full vs vendor roadmap)
- Competitive moat potential (unique vs commoditized)
- Time to value (2-4 months vs days-weeks)

---

## Decision Framework

### Use the Four-Dimension Test

Ask these four questions about your use case. If you answer YES to ANY question, lean toward BUILD. If NO to ALL, consider BUY.

#### Dimension 1: Model Quality Control

**Question:** Do we need to choose the BEST model for our use case?

**BUY (Vendor) Scenario:**
- ✓ Vendor's model (often cheaper LLM) provides acceptable quality
- ✓ Basic reasoning capability is sufficient
- ✓ Don't need Claude Opus, GPT-4 Turbo, or latest/best models
- ✓ Quality ceiling isn't critical (80-85% accuracy is OK)

**BUILD (Custom) Scenario:**
- ✗ Need highest quality reasoning (95%+ accuracy required)
- ✗ Want to choose best model per task (Claude Opus for complex, GPT-4 for analysis)
- ✗ Need ability to switch models as better options emerge
- ✗ Vendor's model quality is noticeably inferior for our domain

**Real Example:**
- **Legal contract review:** Needs 98%+ accuracy → BUILD (use Claude Opus for nuanced legal reasoning)
- **Basic FAQ bot:** 85% accuracy acceptable → BUY (vendor's model is fine)

---

#### Dimension 2: Interface Flexibility

**Question:** Do we need to deploy where our users actually work?

**BUY (Vendor) Scenario:**
- ✓ Team already uses vendor's platform daily (Notion, Microsoft Teams, Salesforce)
- ✓ Vendor's interface is where users spend their time
- ✓ No need for custom deployment (Slackbot, Telegram, email, custom UI)
- ✓ Integration within vendor's ecosystem is sufficient

**BUILD (Custom) Scenario:**
- ✗ Team lives in Slack, but vendor only offers Notion UI
- ✗ Need mobile app integration vendor doesn't provide
- ✗ Want email-based interface for external users
- ✗ Require API endpoints for internal tool integration
- ✗ Need custom UI tailored to specific workflow

**Real Example:**
- **HR bot for Notion-native company:** Team already in Notion all day → BUY (Notion AI works)
- **HR bot for Slack-first company:** Team lives in Slack, never opens Notion → BUILD (deploy as Slackbot)

---

#### Dimension 3: Advanced Capabilities

**Question:** Do we need sophisticated workflows beyond basic Q&A?

**BUY (Vendor) Scenario:**
- ✓ Simple one-shot Q&A is sufficient (ask question → get answer)
- ✓ No reflection or self-verification needed
- ✓ No multi-step reasoning required
- ✓ Straightforward retrieval from knowledge base is enough
- ✓ Don't need custom workflow logic

**BUILD (Custom) Scenario:**
- ✗ Need reflection strategy (generate answer → verify → refine → deliver)
- ✗ Require multi-step reasoning (break down complex problem → solve each → synthesize)
- ✗ Want custom validation rules before responding
- ✗ Need to orchestrate across multiple data sources with specific logic
- ✗ Complex eligibility calculations or multi-stage workflows required

**Real Example:**
- **Simple policy lookup:** "What's our PTO policy?" → BUY (basic retrieval sufficient)
- **Complex eligibility:** "Am I eligible for parental leave given I'm part-time, started 8 months ago, and took unpaid leave last month?" → BUILD (multi-step reasoning + verification needed)

---

#### Dimension 4: Retrieval & Context Engineering Control

**Question:** Do we need precise control over HOW information is retrieved and used?

**BUY (Vendor) Scenario:**
- ✓ Basic search across documents is sufficient
- ✓ Don't need sophisticated tagging or filtering
- ✓ No version control requirements (don't need to prioritize current vs outdated docs)
- ✓ Simple relevance ranking works fine
- ✓ OK with vendor's retrieval algorithm

**BUILD (Custom) Scenario:**
- ✗ Need tagged retrieval (`#Current` + `#HR` + `#Benefits` to ignore outdated docs)
- ✗ Require context-aware logic (check product version, customer tier, known issues)
- ✗ Want to prioritize sources by authority or recency
- ✗ Need to combine structured + unstructured data with specific rules
- ✗ Require custom context assembly for domain-specific reasoning

**Real Example:**
- **General company wiki search:** Basic search works → BUY
- **Version-specific support:** Need to match customer's product version (v2.3) with version-specific docs, known issues, recent patches → BUILD (context-aware retrieval critical)

---

### Decision Matrix

**Count your BUILD answers (✗) vs BUY answers (✓):**

**4 BUILD answers (✗ on all dimensions):**
→ **DEFINITELY BUILD CUSTOM**
- You need full control across all dimensions
- Vendor solutions will frustrate you with limitations
- ROI likely justifies $7K-$13K investment
- Competitive moat opportunity

**2-3 BUILD answers:**
→ **LEAN BUILD, but evaluate carefully**
- Significant limitations with vendor approach
- Calculate ROI: Will $7K-$13K investment pay back in <6 months?
- Consider if vendor limitations are dealbreakers or just inconveniences
- May be worth building for strategic importance

**1 BUILD answer:**
→ **LEAN BUY, but check that one dimension**
- If that ONE dimension is critical → still build
- If it's a "nice to have" → buy vendor solution
- Example: Need better model quality but everything else fine → maybe worth building just for quality

**0 BUILD answers (all ✓):**
→ **DEFINITELY BUY VENDOR SOLUTION**
- Vendor solution meets all your needs
- $10-50/user/month is far cheaper than $7K-$13K custom build
- Faster deployment (days vs months)
- Lower ongoing maintenance

---

## Additional Factors to Consider

### Factor 1: Competitive Moat

**Question:** Is this capability core to competitive advantage?

**BUY when:**
- Supporting function, not differentiator (HR onboarding, basic IT support)
- Everyone in your industry can access same capabilities
- Speed to market matters more than uniqueness

**BUILD when:**
- This IS your competitive differentiator
- Capability reflects proprietary methodology or process
- Want something competitors can't easily replicate
- Strategic advantage comes from HOW you use AI, not just that you use it

**Examples:**
- **HR onboarding:** Supporting function → Lean BUY (unless specific needs per 4 dimensions)
- **Sales call analysis with YOUR unique methodology:** Differentiator → BUILD

---

### Factor 2: Use Case Specificity

**Question:** How company-specific is this use case?

**BUY when:**
- Use case is common across industries (employee onboarding, meeting notes, email drafting)
- Generic solution with minor customization works fine
- Your process is similar to industry standard

**BUILD when:**
- Use case is unique to your company or industry vertical
- Process reflects years of proprietary refinement
- Domain expertise is rare and valuable
- Vendor would need to build it custom for you anyway

**Examples:**
- **Employee onboarding:** Common process → Lean BUY
- **Specialty manufacturing quality control:** Proprietary process → BUILD

---

### Factor 3: Volume & Scale

**Question:** How many users/interactions will this have?

**BUY when:**
- Low volume (< 100 users or < 1,000 interactions/month)
- Per-user cost model makes sense
- Vendor economics work at your scale

**BUILD when:**
- High volume (> 500 users or > 10,000 interactions/month)
- Vendor per-user pricing becomes expensive at scale
- API costs for custom build are cheaper than vendor subscription at high volume
- ROI improves with scale (large time savings × many users)

**Cost Comparison Example:**

**Vendor Solution:**
- 500 users × $30/user/month = $15,000/month = $180,000/year

**Custom Build:**
- One-time: $10,000
- Annual API costs: $3,000
- Annual maintenance: $2,000
- **Total Year 1:** $15,000 (vs $180K vendor)
- **Ongoing:** $5,000/year (vs $180K vendor)

**At high volume, custom build pays for itself in < 1 month**

---

### Factor 4: Integration Complexity

**Question:** How many systems need to integrate?

**BUY when:**
- Vendor's pre-built integrations cover your needs
- Systems you use are common (Notion, Salesforce, Microsoft 365, Google Workspace)
- Shallow integration is sufficient

**BUILD when:**
- Need integration with proprietary internal systems
- Require deep access vendor doesn't provide (custom database queries, internal APIs)
- Systems are niche or industry-specific
- Integration logic is complex (multi-system orchestration, conditional access)

---

### Factor 5: Iteration & Refinement Needs

**Question:** How much iteration will this need to reach production quality?

**BUY when:**
- Use case is straightforward, vendor's out-of-box solution works
- Minimal customization needed
- Standard accuracy acceptable

**BUILD when:**
- Complex domain requiring 20+ iteration cycles to reach 95%+ quality
- Need rapid iteration capability (1-3 cycles/day)
- Vendor iteration process is slow (submit tickets, wait for updates)
- Want in-house control over refinement

**Critical insight:** Level 4 requires rapid iteration (see Iteration Economics framework)

---

## Hybrid Strategy (Recommended for Most Enterprises)

### Don't think "build OR buy" - think "build AND buy" strategically

**Layer 1: BUY Generic Tools**
- **What:** ChatGPT, Midjourney, Grammarly (no company data)
- **Use for:** Individual productivity, commodity tasks
- **Cost:** $10-50/user/month
- **Goal:** Baseline AI productivity

**Layer 2: BUY Platform Tools (Conditional)**
- **What:** Notion AI, Microsoft Copilot, Salesforce Einstein
- **Use for:** Simple Q&A from your data, IF 4-dimension test says buy
- **Cost:** $10-50/user/month per platform
- **Goal:** Leverage your data through existing platforms when sufficient

**Layer 3: BUILD Custom Agents**
- **What:** Purpose-built Level 4 agents for specific high-value use cases
- **Use for:** When 4-dimension test says build (model quality, interface, capabilities, or retrieval control needed)
- **Cost:** $7K-$13K per agent, $1-5K/year ongoing
- **Goal:** Competitive differentiation, advanced capabilities, full control

**Portfolio Approach:**
- Most companies will have 5-10 "buy" solutions (generic tools + platform tools)
- Plus 2-5 "build" custom agents for highest-value, most-specific use cases
- Total spend balanced between subscriptions and strategic builds

---

## Vendor Evaluation Checklist (If Choosing BUY)

If you decide to buy a vendor solution, use this checklist:

### 1. Four-Component Assessment
- [ ] LLM quality is acceptable (which model do they use?)
- [ ] Tools depth sufficient (can access your critical systems?)
- [ ] Memory capability adequate (maintains context across sessions?)
- [ ] Autonomy level acceptable (can work independently on multi-step tasks?)

**See:** Agent Evaluation Framework component for detailed assessment

### 2. Four-Dimension Check
- [ ] Model quality meets your needs (or you answered ✓ on Dimension 1)
- [ ] Interface works for your users (or you answered ✓ on Dimension 2)
- [ ] Capabilities sufficient (or you answered ✓ on Dimension 3)
- [ ] Retrieval logic adequate (or you answered ✓ on Dimension 4)

### 3. Iteration Speed Assessment
- [ ] Can test changes quickly (minutes/hours, not days/weeks)
- [ ] Vendor responsive to feedback and customization requests
- [ ] You can achieve 1-3 iteration cycles per day if needed
- [ ] Not stuck with slow ticket-based iteration process

### 4. Commercial Terms
- [ ] Pricing scales reasonably with your growth
- [ ] Contract terms acceptable (no long lock-in if it doesn't work)
- [ ] Data privacy and security requirements met
- [ ] SLAs are acceptable for your use case

---

## [SUMMARY FORMAT]

**Build vs Buy Decision Tree for AI Agents**

**Run the Four-Dimension Test:**

1. **Model Quality:** Need to choose best LLM? (BUILD) or vendor's model OK? (BUY)
2. **Interface:** Need custom deployment (Slack, email, API)? (BUILD) or vendor UI works? (BUY)
3. **Capabilities:** Need advanced workflows (reflection, multi-step)? (BUILD) or basic Q&A OK? (BUY)
4. **Retrieval Control:** Need sophisticated context engineering? (BUILD) or basic search fine? (BUY)

**Decision:**
- **4 BUILD answers** → Definitely build custom
- **2-3 BUILD answers** → Lean build, evaluate ROI
- **1 BUILD answer** → Lean buy, unless that one dimension is critical
- **0 BUILD answers** → Definitely buy vendor solution

**Additional factors:**
- Competitive moat? (BUILD)
- Company-specific use case? (BUILD)
- High volume? (BUILD becomes cheaper at scale)
- Complex integrations? (BUILD)
- Need rapid iteration? (BUILD for Level 4)

**Recommended: Hybrid strategy**
- BUY generic tools + platform tools for commodity/simple use cases
- BUILD custom agents for high-value, specific, strategic use cases
- Portfolio: 5-10 buy, 2-5 strategic builds

---

## [VISUAL FORMAT]

### Four-Dimension Decision Matrix

```
DIMENSION ASSESSMENT              BUY ✓         BUILD ✗

1. Model Quality
   Need best LLM?                  Basic OK      Need Best
   Vendor model sufficient?        YES           NO
                                   ✓             ✗

2. Interface Flexibility
   Vendor UI acceptable?           Team uses it  Need custom
   Need custom deployment?         NO            Slack/API/etc
                                   ✓             ✗

3. Advanced Capabilities
   Basic Q&A sufficient?           Simple OK     Multi-step
   Need reflection/verification?   NO            YES
                                   ✓             ✗

4. Retrieval Control
   Basic search OK?                Simple search Need tagging
   Need sophisticated logic?       NO            YES
                                   ✓             ✗

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESULTS:

All ✓ (0 BUILD answers)     →  BUY vendor solution
1 ✗ (1 BUILD answer)        →  Lean BUY (unless critical)
2-3 ✗ (2-3 BUILD answers)   →  Lean BUILD
All ✗ (4 BUILD answers)     →  DEFINITELY BUILD
```

### Cost Comparison by Volume

```
Monthly Cost Comparison (500 users)

VENDOR SOLUTION
├─ Subscription: 500 × $30/user = $15,000/month
├─ Year 1 total: $180,000
└─ Ongoing: $180,000/year

CUSTOM BUILD
├─ One-time development: $10,000
├─ API costs: $250/month ($3,000/year)
├─ Maintenance: $2,000/year
├─ Year 1 total: $15,000
└─ Ongoing: $5,000/year

PAYBACK: < 1 month at high volume
SAVINGS: $165,000/year ongoing
```

### Hybrid Strategy Portfolio

```
ENTERPRISE AI PORTFOLIO

┌──────────────────────────────────────────┐
│ LAYER 1: BUY GENERIC TOOLS               │
│ • ChatGPT, Midjourney, Grammarly         │
│ • Cost: $10-50/user/month                │
│ • Goal: Individual productivity          │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ LAYER 2: BUY PLATFORM TOOLS (Selective)  │
│ • Notion AI, Copilot, Salesforce         │
│ • Cost: $10-50/user/month                │
│ • Goal: Simple data access IF sufficient │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ LAYER 3: BUILD CUSTOM AGENTS (Strategic) │
│ • 2-5 high-value custom agents           │
│ • Cost: $7K-$13K each, $1-5K/year        │
│ • Goal: Competitive moat & full control  │
└──────────────────────────────────────────┘

Total: 5-10 "buy" + 2-5 strategic "build"
```

---

## [CHECKLIST FORMAT]

### Build vs Buy Decision Checklist

**Step 1: Run the Four-Dimension Test**

Check each dimension - mark BUILD (✗) or BUY (✓):

**Dimension 1: Model Quality**
- [ ] ✓ BUY: Vendor's model quality is acceptable for our use case
- [ ] ✗ BUILD: Need highest quality models (Claude Opus, GPT-4 Turbo) or model flexibility

**Dimension 2: Interface Flexibility**
- [ ] ✓ BUY: Team uses vendor's platform daily, their UI is acceptable
- [ ] ✗ BUILD: Need custom deployment (Slackbot, API, email, mobile, custom UI)

**Dimension 3: Advanced Capabilities**
- [ ] ✓ BUY: Simple one-shot Q&A is sufficient, no complex workflows needed
- [ ] ✗ BUILD: Need reflection, multi-step reasoning, verification, or custom workflow logic

**Dimension 4: Retrieval & Context Control**
- [ ] ✓ BUY: Basic search across documents is sufficient
- [ ] ✗ BUILD: Need sophisticated tagging, version control, context-aware retrieval, or custom logic

**Count your BUILD (✗) answers:** ______

**Step 2: Apply Decision Logic**

- [ ] **0 BUILD answers (all ✓)** → PROCEED TO BUY (vendor solution recommended)
- [ ] **1 BUILD answer** → CHECK: Is that one dimension absolutely critical? If YES → consider BUILD; if NO → BUY
- [ ] **2-3 BUILD answers** → LEAN BUILD, proceed to ROI analysis (Step 3)
- [ ] **4 BUILD answers (all ✗)** → DEFINITELY BUILD (vendor won't meet needs)

**Step 3: Additional Factor Analysis (for close calls)**

**Competitive Moat:**
- [ ] This capability IS a competitive differentiator → +1 point for BUILD
- [ ] This is a supporting function, not strategic → +1 point for BUY

**Use Case Specificity:**
- [ ] Highly company-specific or proprietary process → +1 point for BUILD
- [ ] Common use case across industries → +1 point for BUY

**Volume & Scale:**
- [ ] High volume (>500 users or >10K interactions/month) → +1 point for BUILD
- [ ] Low volume (<100 users or <1K interactions/month) → +1 point for BUY

**Integration Complexity:**
- [ ] Need deep integration with proprietary internal systems → +1 point for BUILD
- [ ] Vendor's pre-built integrations cover our needs → +1 point for BUY

**Iteration Needs:**
- [ ] Complex domain requiring rapid iteration (Level 4: 1-3 cycles/day) → +1 point for BUILD
- [ ] Straightforward use case, vendor out-of-box solution works → +1 point for BUY

**Additional Factor Total:**
- BUILD points: ______
- BUY points: ______

**Step 4: Final Decision**

**Primary (Four-Dimension Test):** ______ BUILD answers
**Additional factors:** ______ BUILD points, ______ BUY points

**Combined assessment:**
- [ ] **Strong BUILD case:** 3-4 BUILD dimension answers OR 2+ dimension answers + more BUILD additional points → BUILD CUSTOM
- [ ] **Moderate BUILD case:** 2 BUILD answers + even additional points → Proceed to ROI calculation (Step 5)
- [ ] **Moderate BUY case:** 0-1 BUILD answers + more BUY additional points → BUY vendor solution
- [ ] **Strong BUY case:** 0 BUILD answers + more BUY additional points → BUY vendor solution

**Step 5: ROI Analysis (for moderate cases)**

**Custom Build Investment:**
- One-time: $_________ (typically $7K-$13K)
- Annual ongoing: $_________ (typically $1K-$5K)
- **Year 1 total:** $_________

**Vendor Solution Cost:**
- Number of users: _______
- Cost per user/month: $_______
- **Annual total:** $_________ (users × cost × 12)

**Expected Annual Benefits:**
- Time savings value: $_________
- Productivity gains: $_________
- Quality improvements: $_________
- **Total annual benefit:** $_________

**ROI Calculation:**
- Custom Build ROI: (Benefit - Ongoing Cost) ÷ Year 1 Total × 100 = _______%
- Vendor Solution ROI: (Benefit - Annual Cost) ÷ Annual Cost × 100 = _______%

**Payback Period:**
- Custom: Year 1 Total ÷ Monthly Benefit = ______ months
- Vendor: (Compare if multi-year contract requires upfront payment)

**Decision:**
- [ ] Custom build has better ROI and acceptable payback (<6 months) → BUILD
- [ ] Vendor has better ROI or faster time-to-value → BUY
- [ ] Close call → Consider strategic importance, competitive moat, long-term control

**Step 6: If BUY - Vendor Evaluation Checklist**

**Component Assessment (Agent Evaluation Framework):**
- [ ] LLM quality verified (which model? tested on our use case?)
- [ ] Tools depth sufficient (can access our critical systems?)
- [ ] Memory capability adequate (maintains context?)
- [ ] Autonomy level acceptable (can work independently?)

**Four-Dimension Verification:**
- [ ] Confirmed model quality meets needs
- [ ] Confirmed interface works for our users
- [ ] Confirmed capabilities are sufficient
- [ ] Confirmed retrieval logic is adequate

**Iteration Speed:**
- [ ] Can test changes quickly (not slow ticket process)
- [ ] Can achieve 1-3 iteration cycles per day if needed

**Commercial Terms:**
- [ ] Pricing scales reasonably
- [ ] No long lock-in (can exit if doesn't work)
- [ ] Data privacy and security OK
- [ ] SLAs acceptable

**If 3+ boxes UNCHECKED → Reconsider BUILD option**

---

## Usage Guidelines

### When to Use This Decision Tree

**Use for:**
- ✅ Deciding between custom agent development and vendor solutions
- ✅ Evaluating if vendor limitations are acceptable or dealbreakers
- ✅ Building business case for custom development
- ✅ Optimizing portfolio across buy and build approaches
- ✅ Justifying build vs buy decision to stakeholders

**Don't use for:**
- ❌ Choosing between ML and Agentic AI (use ML vs Agentic decision tree first)
- ❌ Evaluating if AI is needed at all (may be process improvement issue)
- ❌ Technical architecture decisions within chosen approach

### Customization Guidance

**For your organization:**
- Adjust cost thresholds based on your company size and budgets
- Add industry-specific factors (regulatory, compliance, etc.)
- Include your specific vendor platforms you already use
- Customize ROI calculation with your labor costs

**For different stakeholders:**
- **Executives:** Use summary format + ROI focus
- **Product/Business:** Use full format with real examples
- **Procurement:** Use checklist format for vendor evaluation
- **Finance:** Emphasize cost comparison visual and ROI calculations

### Related Components

- **Agent Evaluation Framework** - Use when evaluating BUY option (vendor assessment)
- **ML vs Agentic Decision Tree** - Use BEFORE this tree (choose AI approach first)
- **ROI Calculation Model** - Use for detailed financial analysis of build option
- **Level 4: Iterative Agents** - Understand what building custom enables
- **Iteration Economics Framework** - Why rapid iteration matters for build approach

---

## Version History

**v1.0.0 (2025-01-16)**
- Initial decision tree framework
- Four-dimension test: Model, Interface, Capabilities, Retrieval
- Additional factors: Moat, specificity, volume, integration, iteration
- Hybrid strategy recommendation
- ROI analysis integration
- Vendor evaluation checklist for BUY path
