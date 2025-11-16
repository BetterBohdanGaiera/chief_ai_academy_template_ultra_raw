---
id: ml_vs_agentic
title: ML vs Custom Agentic AI - Technology Selection Decision Tree
category: decision_trees
tags: [decision-making, ml, agentic, technology-choice, vendor-evaluation]
presentation_formats: [full, summary, visual, flowchart]
estimated_time:
  full: 15 minutes
  summary: 3 minutes
  visual: 5 minutes
  flowchart: 2 minutes
dependencies: [level_4_iterative_agents]
version: 1.0.0
last_updated: 2025-01-16
---

# ML vs Custom Agentic AI - Technology Selection Decision Tree

## [FULL FORMAT]

### The Strategic Question

Not "Should we use AI?" but **"Which approach matches our problem - and do we need more than existing tools can provide?"**

Making the wrong choice wastes 6 months and $200K+ building the wrong solution.

This decision tree helps you navigate four fundamentally different AI approaches:
1. **Machine Learning (ML)** - Data-driven predictions
2. **Custom Agentic AI** - Instruction-driven reasoning
3. **Existing AI Tools** - Pre-built solutions (with or without your data)
4. **No AI** - Process improvement, not technology

---

## Decision Path Overview

### Path 1: Do you need numeric predictions from historical patterns?
→ **Machine Learning**

### Path 2: Is this a commodity task requiring no company-specific knowledge?
→ **Existing AI Tools (No Data Access)** - ChatGPT, Midjourney, generic tools

### Path 3: Can existing tools access your data? Are their limitations acceptable?
→ **Existing AI Tools WITH Data Access** - Notion AI, Copilot, Salesforce Einstein

### Path 4: Do you need advanced control, custom capabilities, or competitive moat?
→ **Custom Agentic AI** - Build Level 4 agents with context engineering

### Path 5: Is the real problem unclear workflow, not information access?
→ **No AI** - Fix the process first

---

## PATH 1: Machine Learning - Data-Driven Predictions

### When to Choose ML

**Use Machine Learning when:**
- ✅ You have numeric, structured data with historical patterns
- ✅ You need predictions or forecasts
- ✅ Measurable inputs and outputs exist
- ✅ You have large volumes of quality data (thousands to millions of data points)
- ✅ Strategic value exists IF your data is unique to your company

### Core Principle
Algorithms find patterns in numeric data to make predictions about future outcomes.

### What ML Needs
- Large amounts of numeric, structured data
- Historical patterns that predict future outcomes
- Clean, quality data (garbage in = garbage out)
- Measurable, quantifiable inputs and outputs

### Who Builds It
- ML engineers and data scientists
- Expertise in data preparation, feature engineering, algorithms, model training
- Often requires dedicated ML ops infrastructure

### Quality Factor
**"If the data is good, ML engineer can provide predictions"**
- More data → better predictions
- Clean data → accurate results
- Poor/biased data → poor/biased predictions

### Real Examples

**Demand Forecasting**
- **Problem:** Predict next quarter's sales to optimize inventory
- **Data:** 5 years of sales history, seasonality, promotions, market conditions
- **Output:** Forecasted demand by product and region
- **Value:** Reduced overstock ($200K savings) and stockouts ($150K revenue protected)

**Churn Prediction**
- **Problem:** Identify customers likely to cancel subscription
- **Data:** User behavior, engagement metrics, support tickets, payment history
- **Output:** Churn probability score for each customer
- **Value:** Proactive retention saves $180K annually in lost revenue

**Fraud Detection**
- **Problem:** Flag suspicious transactions in real-time
- **Data:** Transaction patterns, user behavior, device fingerprints, historical fraud cases
- **Output:** Fraud probability score, automatic blocking for high-risk transactions
- **Value:** Prevented $500K in fraudulent transactions, reduced manual review by 80%

### Timeline & Investment

**Timeline:** 3-6 months (data prep, model training, testing, deployment)

**Investment:** $100K-$500K+ depending on complexity

**Ongoing costs:**
- Data quality maintenance
- Model retraining and updates
- ML infrastructure costs

### When ML is NOT the Answer

❌ **Don't use ML if:**
- You don't have large volumes of historical data
- Patterns are unclear or non-existent
- Problem requires reasoning through text/policies, not numeric prediction
- Need to apply company-specific knowledge and judgment
- Problem is better solved by rules or process improvement

---

## PATH 2: Existing AI Tools (No Data Access)

### When to Choose Generic Existing Tools

**Use when:**
- ✅ Task doesn't require YOUR company-specific knowledge or data
- ✅ Commodity function (image generation, general writing, brainstorming)
- ✅ Supporting function, not competitive differentiator
- ✅ Fast deployment and low cost are priorities

### What They Provide
- Generic capabilities based on public knowledge
- Fast deployment (days to weeks)
- Low cost ($10-50/user/month)
- No setup or integration required

### Real Examples

**Midjourney / DALL-E**
- **Use case:** Generate marketing visuals, creative assets, presentation images
- **Value:** Design team produces 5x more concept iterations
- **Cost:** $10-30/month per designer
- **Limitation:** Generic styles, no access to your brand guidelines

**ChatGPT**
- **Use case:** General writing, brainstorming, content drafting, learning
- **Value:** Individual productivity boost, faster first drafts
- **Cost:** $20/month per user
- **Limitation:** No access to your company docs, processes, or data

**Grammarly**
- **Use case:** Writing assistance, grammar checking, tone suggestions
- **Value:** Professional communication quality
- **Cost:** $12-15/month per user
- **Limitation:** Generic writing advice, doesn't know your company voice

### Timeline & Investment

**Timeline:** Days to weeks (sign up and start using)

**Investment:** $10-50/user/month subscription

**Ongoing costs:** Monthly subscription only

### When to Move Beyond Generic Tools

**Upgrade to Custom Agentic AI when:**
- Task requires YOUR company's specific knowledge, policies, or processes
- Need to apply YOUR methodology or evaluation criteria
- Want competitive moat (generic tools available to everyone)
- Interface needs to integrate with your workflow (Slack, internal systems)

---

## PATH 3: Existing AI Tools WITH Data Access

### When to Consider Data-Connected Tools

**Evaluate when:**
- ✅ Tool can access your company data (Notion workspace, CRM, SharePoint)
- ✅ Basic Q&A from your documents is sufficient
- ✅ Team already uses that platform daily (interface is acceptable)
- ✅ Simple model quality is good enough
- ✅ Supporting function, not competitive differentiator

### What They CAN Do ✓

- Access YOUR company data (Notion workspace, SharePoint, CRM, knowledge bases)
- Answer questions from YOUR documents
- Search across YOUR information
- Basic information retrieval

### But They're LIMITED By ✗

#### 1. Model Quality Lock-In
- Locked into vendor's model choice (often cheaper, less capable LLMs)
- Cannot use Claude Opus, GPT-4 Turbo, or newer/better models
- Lower quality reasoning, less nuanced understanding
- No control over model selection as better models emerge

#### 2. Basic Capabilities Only
- Simple one-shot Q&A (ask → answer)
- No reflection strategy (can't verify its own answers)
- No multi-step reasoning (can't break down complex problems)
- No custom workflows or advanced capabilities
- Cannot implement verification or quality checks

#### 3. Interface Lock-In
- Must use vendor's interface (Notion UI, Microsoft Teams, Salesforce, etc.)
- Cannot deploy as Slackbot, Telegram bot, email integration, or custom UI
- Cannot create tailored interface for your specific workflow
- Limited to where vendor allows deployment

#### 4. Their Roadmap, Not Yours
- Features they choose to build, not what you need
- Integrations they support, not your systems
- Updates on their timeline, not yours
- No control over capability evolution

### Real Examples

**Notion AI**
- **What it can do:** Answer questions from Notion workspace, summarize pages, basic Q&A
- **Limitations:** Locked to Notion UI (can't deploy as Slackbot), basic model, simple retrieval, no reflection
- **Good for:** Teams living in Notion, straightforward policy lookups
- **Not good for:** Complex reasoning, deployment flexibility, advanced retrieval

**Microsoft Copilot**
- **What it can do:** Document assistance in Microsoft 365, email drafting, meeting summaries
- **Limitations:** Locked to Microsoft interface and ecosystem, basic capabilities, vendor's model
- **Good for:** Microsoft-centric organizations, basic productivity features
- **Not good for:** Custom workflows, advanced reasoning, non-Microsoft integrations

**Salesforce Einstein**
- **What it can do:** CRM insights, lead scoring, opportunity analysis from Salesforce data
- **Limitations:** Salesforce ecosystem only, their features and integrations, basic AI capabilities
- **Good for:** Standard CRM use cases, Salesforce-native workflows
- **Not good for:** Custom methodologies, cross-system intelligence, advanced analytics

### Timeline & Investment

**Timeline:** Days to weeks to deploy

**Investment:** $10-50/user/month subscription (on top of existing platform costs)

**Ongoing costs:** Monthly subscription, no development costs

### When to Upgrade to Custom Agentic AI

**Build custom when existing tools are insufficient due to:**

#### Advanced Control Needs (Context Engineering)

**Four dimensions where custom gives you control:**

**1. Model Quality Control**
- **Existing:** Locked into vendor's model (often cheaper/weaker)
- **Custom:** Choose best model for each task (Claude Opus, GPT-4 Turbo, etc.)
- **Impact:** Higher quality answers, better reasoning, more accurate responses

**2. Sophisticated Retrieval Logic**
- **Existing:** Basic search across your data
- **Custom:** Engineered tagging, filtering, contextual rules, version-aware retrieval

**Example:**
- **Notion AI:** Searches all workspace, returns mix of current and outdated policies
- **Custom:** Tagged retrieval (`#HR` + `#Current` + `#PTO`), ignores deprecated docs, prioritizes 2024 handbook
- **Result:** Custom finds exact current policy; Notion AI may cite outdated information

**3. Interface Flexibility**
- **Existing:** Locked into vendor's interface (Notion UI, Teams, etc.)
- **Custom:** Deploy anywhere - Slackbot, Telegram, email, web dashboard, API endpoints

**Why this matters:** Notion AI can answer HR questions, but only through Notion. If your team lives in Slack, you need custom.

**4. Advanced Capabilities**
- **Existing:** Simple one-shot Q&A (ask question → get answer)
- **Custom:** Multi-step workflows with reflection and verification

**Reflection Strategy Example:**
- **Existing:** Gives first answer it generates
- **Custom:** Generates answer → reflects on quality → checks against sources → refines → delivers verified response
- **Impact:** Higher accuracy, catches errors before responding

#### Competitive Moat Requirements

**Build custom when:**
- Capability IS your competitive differentiator (not just a supporting function)
- Applying YOUR unique methodology gives you market advantage
- Want capabilities competitors can't easily replicate
- Strategic value comes from HOW you use AI, not just that you use it

#### Real Comparison: HR Assistant - Notion AI vs Custom

**Scenario:** Answer employee HR questions using 200-page handbook

**Notion AI Approach:**
- ✓ Can access Notion workspace with handbook
- ✓ Can answer basic questions from that handbook
- ✗ Cannot deploy as Slackbot (locked into Notion UI)
- ✗ Cannot use Claude Opus (stuck with Notion's basic model)
- ✗ Cannot implement reflection to verify answers
- ✗ Cannot tag docs to prioritize current policies
- ✗ Cannot do multi-step reasoning for complex eligibility

**When Notion AI is sufficient:**
- Team already uses Notion daily (interface is fine)
- Questions are straightforward (simple policy lookups)
- Basic LLM quality is acceptable
- No complex reasoning needed

**Custom Build Approach:**
- ✓ Everything Notion AI can, PLUS:
- ✓ Deploy as Slackbot (employees ask in Slack where they work)
- ✓ Use Claude Opus for better reasoning quality
- ✓ Reflection strategy (verify answer before responding)
- ✓ Advanced tagging (`#Current` + `#HR` + `#Benefits` for precise retrieval)
- ✓ Multi-step eligibility calculations with verification
- ✓ Custom workflow (answer → cite source → log interaction → escalate if uncertain)

**When custom is worth the investment:**
- Team lives in Slack, not Notion (interface matters)
- Complex questions require nuanced reasoning (model quality matters)
- Accuracy is critical, need reflection/verification (capabilities matter)
- Want to control exactly how retrieval works (control matters)
- ROI justifies $7K-$13K investment ($99K annual value for HR onboarding example)

---

## PATH 4: Custom Agentic AI - Instruction-Driven Reasoning

### When to Build Custom

**Build Custom Agentic AI when:**
- ✅ Need to apply YOUR company's specific knowledge, policies, or methodologies
- ✅ Complex reasoning required (not just pattern matching or simple Q&A)
- ✅ Text-based workflows, policies, and procedures
- ✅ Want competitive moat through capabilities others can't replicate
- ✅ Existing tools are limited by model quality, retrieval logic, interface, or capabilities
- ✅ ROI justifies $7K-$13K+ implementation investment

### Core Principle
AI reasons through text information, following instructions and structured context YOU engineer.

### What Agentic AI Needs
- Process descriptions and workflow documentation
- Structured context and knowledge bases (context engineering)
- Clear instructions and evaluation criteria
- Text-based information (policies, guidelines, procedures, methodologies)

### How It Works
1. **Document your processes** - Structure your knowledge, policies, procedures, evaluation criteria
2. **Context engineering** - Format and structure information for optimal AI reasoning
3. **Technical build** - Agent infrastructure, integrations, custom tools
4. **Iteration** - 20+ cycles to refine to production-ready quality (95%+ reliability)

### Who Builds It
- **AI Agent Developer** - Technical infrastructure and integration ($3K-$8K)
- **Agent Manager** - Documentation, context engineering, process expertise ($1.5K-$3K)
- Partnership between technical and domain expertise

### Quality Factor
**"If the process documentation and context are good, AI can provide quality outputs"**
- Better documentation → better reasoning
- Clear criteria → consistent outputs
- Vague instructions → unpredictable results
- **Iteration matters:** 20+ cycles to reach 95%+ reliability (see Iteration Economics)

### Real Examples with ROI

**HR Onboarding Assistant**
- **Problem:** New employees ask same questions, 20 hours of colleague time per hire
- **Solution:** AI answers questions from YOUR company's policies, benefits, procedures
- **Investment:** $7K one-time + $2.2K/year
- **Return:** $99K/year (time savings + faster productivity)
- **ROI:** 974% Year 1
- **Payback:** 1.1 months

**Sales Call Analyzer**
- **Problem:** Only 5% of calls reviewed manually, inconsistent coaching
- **Solution:** AI evaluates 100% of calls using YOUR 12-point sales methodology
- **Investment:** $10K one-time + $3K/year
- **Return:** $141K/year (faster rep improvement, higher win rates)
- **ROI:** 1,310% Year 1
- **Payback:** 1.3 months

**Customer Support Agent**
- **Problem:** 40% of tickets are repetitive, 24/7 coverage expensive
- **Solution:** AI resolves routine tickets using YOUR troubleshooting procedures
- **Investment:** $12K one-time + $4K/year
- **Return:** $246K/year (40% ticket automation, 24/7 availability)
- **ROI:** 1,438% Year 1
- **Payback:** 0.7 months

### Timeline & Investment

**Timeline:** 2-4 months (documentation + integration + iteration to production quality)

**Investment:** $7K-$13K one-time implementation
- Simple (information access): $5K-$7K
- Medium (workflow automation): $7K-$10K
- Complex (multi-system integration): $10K-$13K

**Budget breakdown:**
- 30% technical build (infrastructure, integrations)
- 35% documentation (process mapping, knowledge structuring)
- 35% context engineering (formatting, testing, iteration)

**Ongoing costs:** $1.1K-$5K/year (API usage + maintenance)

### Three Agentic Solution Categories

All use instruction-driven reasoning with structured context, but solve different problems:

**Category 1: Static Information Chatbots (Level 4)**
- **What:** Answer questions from knowledge bases and documentation
- **Examples:** HR assistant, Sales enablement, IT support
- **ROI:** $15K-$99K/year, 1-2 months payback
- **When:** Extensive docs, repeated questions, scattered knowledge

**Category 2: Dynamic Content Chatbots (Level 4-5)**
- **What:** Fetch real-time data from live systems, synthesize across sources
- **Examples:** Customer support, Deal intelligence, Project status
- **ROI:** $14K-$246K/year, 1-3 months payback
- **When:** Real-time data needs, multiple systems, 24/7 access required

**Category 3: Custom Workflows & Analyzers (Level 5)**
- **What:** Process inputs through structured evaluation frameworks, apply expert judgment at scale
- **Examples:** Proposal analyzer, Call analyzer, Interview quality evaluator
- **ROI:** $63K-$158K/year, 2-4 months payback
- **When:** Expert judgment inconsistent, manual reviews are bottlenecks, need 100% coverage

### Critical Success Factor: Rapid Iteration

**Level 4 requires 1-3 iterations per day:**
- 20+ iterations over 2-3 weeks to reach 95%+ reliability
- Fast feedback loops enable reaching production quality
- Slow iteration (1 cycle/week) = Level 3 Trap = stuck at 65-75% quality

**See:** **Iteration Economics Framework** and **Level 3 to 4 Transition** components

---

## PATH 5: No AI - Fix the Process First

### When NOT to Use AI

**Sometimes the right answer is process improvement, not technology:**

❌ **Don't use AI if:**
- Problem is unclear or poorly defined workflow
- Process itself is broken (AI will just automate broken process)
- Manual solution works fine and scales adequately
- Cultural or organizational issues are the real blocker
- Process changes frequently (document and stabilize first)

### Fix Process First, Then Consider AI

**Example scenarios:**

**Scenario 1: "We need AI to handle our messy approval process"**
- **Real problem:** Unclear approval criteria, inconsistent decision-making
- **Right solution:** Define clear approval criteria and process FIRST
- **Then consider:** AI to apply the now-clear criteria consistently

**Scenario 2: "AI should help us with our disorganized documentation"**
- **Real problem:** No documentation structure, content is outdated and scattered
- **Right solution:** Organize, update, and structure documentation FIRST
- **Then consider:** AI to help people navigate the now-organized docs

**Scenario 3: "We want AI to speed up our chaotic onboarding"**
- **Real problem:** No standard onboarding process, every manager does it differently
- **Right solution:** Create standard onboarding process FIRST
- **Then consider:** AI to deliver the now-standardized process at scale

### The Rule

**AI amplifies what you have.**
- Good process + AI = Excellent scaled process
- Broken process + AI = Broken automated process at scale

**Get the process right, then use AI to scale it.**

---

## [SUMMARY FORMAT]

**ML vs Agentic AI - Technology Selection Decision Tree**

**Four paths to evaluate:**

**PATH 1: Numeric predictions from historical data?**
→ **Machine Learning** (3-6 months, $100K-$500K, ML engineers, data scientists)

**PATH 2: Commodity task, no company-specific knowledge?**
→ **Existing Tools (No Data)** - ChatGPT, Midjourney ($10-50/month)

**PATH 3: Tool can access your data? Limitations acceptable?**
→ **Existing Tools WITH Data** - Notion AI, Copilot (days to deploy, $10-50/user/month)
- ✅ Use if: Team lives in that platform, basic Q&A enough, simple model OK
- ⚠️ Limited by: Model quality, basic capabilities, interface lock-in, vendor roadmap

**PATH 4: Need advanced control or competitive moat?**
→ **Custom Agentic AI** - Build Level 4 (2-4 months, $7K-$13K, 300-1,400% ROI)
- Choose when: Custom methodology, interface flexibility, model control, reflection/verification needed
- Critical: 1-3 iterations/day to reach 95%+ quality

**PATH 5: Process is broken or undefined?**
→ **No AI** - Fix process first, then consider AI to scale it

**Key insight:** Not "Should we use AI?" but "Which approach matches our problem and constraints?"

---

## [VISUAL FORMAT]

### Decision Flow Diagram

```
START: Evaluate AI Approach for Your Problem
           │
           ▼
    ┌─────────────────────────────────────┐
    │ Do you need NUMERIC PREDICTIONS     │
    │ from historical patterns?           │
    │ (forecasting, churn, fraud)         │
    └─────────────────────────────────────┘
           │                    │
       YES │                    │ NO
           ▼                    ▼
    ┌──────────────┐     ┌─────────────────────────────┐
    │   MACHINE    │     │ Is this a COMMODITY task    │
    │   LEARNING   │     │ with no company-specific    │
    │              │     │ knowledge needed?           │
    │ 3-6 months   │     └─────────────────────────────┘
    │ $100K-$500K  │            │                │
    │              │        YES │                │ NO
    │ ML Engineers │            ▼                ▼
    └──────────────┘     ┌──────────────┐  ┌──────────────────────────┐
                         │   EXISTING   │  │ Can existing tool access │
                         │   TOOLS      │  │ your data? Limitations   │
                         │  (Generic)   │  │ acceptable?              │
                         │              │  └──────────────────────────┘
                         │ ChatGPT,     │         │              │
                         │ Midjourney   │     YES │              │ NO
                         │              │         ▼              ▼
                         │ $10-50/mo    │  ┌──────────────┐  ┌─────────────┐
                         └──────────────┘  │   EXISTING   │  │   CUSTOM    │
                                           │   TOOLS      │  │   AGENTIC   │
                                           │ (With Data)  │  │     AI      │
                                           │              │  │             │
                                           │ Notion AI,   │  │ Level 4     │
                                           │ Copilot      │  │ Build       │
                                           │              │  │             │
                                           │ ⚠️ Model lock │  │ 2-4 months  │
                                           │ ⚠️ Basic cap  │  │ $7K-$13K    │
                                           │ ⚠️ Interface  │  │ 300-1,400%  │
                                           │   lock       │  │ ROI Year 1  │
                                           └──────────────┘  └─────────────┘

                         ┌─────────────────────────────┐
                         │ Is process broken/unclear?  │
                         │ Would AI just automate      │
                         │ a broken workflow?          │
                         └─────────────────────────────┘
                                    │
                                YES │
                                    ▼
                         ┌──────────────────┐
                         │     NO AI        │
                         │                  │
                         │ Fix process      │
                         │ first, then      │
                         │ consider AI      │
                         └──────────────────┘
```

### Comparison Matrix

| Approach | Best For | Timeline | Investment | Team Needed | ROI Pattern |
|----------|----------|----------|------------|-------------|-------------|
| **Machine Learning** | Numeric predictions, forecasting | 3-6 months | $100K-$500K+ | ML engineers, data scientists | Depends on data uniqueness |
| **Existing (Generic)** | Commodity tasks, individual productivity | Days | $10-50/user/mo | End users | Productivity boost, no moat |
| **Existing (Data Access)** | Basic Q&A, standard workflows | Days-weeks | $10-50/user/mo | End users | Low cost, limited capability |
| **Custom Agentic** | Company-specific processes, competitive moat | 2-4 months | $7K-$13K one-time | Agent Dev + Manager | 300-1,400% Year 1 |
| **No AI** | Broken/unclear processes | N/A | Process improvement | Process owners | Fix root cause |

### The Four Dimensions of Control (Existing vs Custom)

```
EXISTING TOOLS WITH DATA ACCESS
├─ Model Quality: ✗ Locked to vendor's choice (often cheaper/weaker)
├─ Retrieval Logic: ✗ Basic search only
├─ Interface: ✗ Locked to vendor UI (Notion, Teams, etc.)
└─ Capabilities: ✗ Simple one-shot Q&A only

CUSTOM AGENTIC AI
├─ Model Quality: ✓ Choose best (Claude Opus, GPT-4 Turbo)
├─ Retrieval Logic: ✓ Engineered tagging, filtering, context-aware
├─ Interface: ✓ Deploy anywhere (Slack, Telegram, email, API)
└─ Capabilities: ✓ Reflection, multi-step, verification, custom workflows
```

---

## [FLOWCHART FORMAT]

### Quick Decision Flowchart

```
Q1: Need numeric predictions from historical data?
    YES → Machine Learning
    NO → Q2

Q2: Commodity task, no company-specific knowledge?
    YES → Existing Tools (Generic) - ChatGPT, Midjourney
    NO → Q3

Q3: Existing tool can access your data?
    NO → Custom Agentic AI
    YES → Q4

Q4: Are these limitations acceptable?
    • Locked to vendor's model quality
    • Basic Q&A capabilities only
    • Must use vendor's interface
    • Vendor's roadmap, not yours

    ALL ACCEPTABLE → Existing Tools (With Data) - Notion AI, Copilot
    ANY UNACCEPTABLE → Q5

Q5: Can you justify $7K-$13K investment for:
    • Model quality control
    • Sophisticated retrieval
    • Interface flexibility
    • Advanced capabilities (reflection, multi-step)
    • Competitive moat

    YES → Custom Agentic AI (Level 4)
    NO → Reassess if existing tools can work or problem needs solving differently

Q6: Is the process itself broken or unclear?
    YES → No AI - Fix process first, then reconsider AI
    NO → Proceed with chosen approach
```

---

## Usage Guidelines

### When to Use This Decision Tree

**Use for:**
- ✅ Evaluating new AI initiatives and choosing the right approach
- ✅ Deciding build vs buy for specific use cases
- ✅ Assessing whether existing tools are sufficient or custom build is warranted
- ✅ Communicating technology choices to stakeholders
- ✅ Prioritizing AI investments across multiple opportunities

**Don't use for:**
- ❌ Evaluating specific vendor products (use Agent Evaluation Framework instead)
- ❌ Technical architecture decisions within a chosen approach
- ❌ Deciding between specific LLM providers

### Customization Guidance

**For your organization:**
- Add industry-specific examples to each path
- Adjust investment thresholds based on your company size
- Include your specific existing tools (e.g., "We use Salesforce - can Einstein work?")
- Map to your procurement and approval processes

**For different audiences:**
- **Executives:** Use summary format with ROI focus
- **Product/Business teams:** Use full format with real examples
- **Procurement:** Use flowchart format for vendor evaluation
- **Technical teams:** Use comparison matrix for build decisions

### Related Components

- **Agent Evaluation Framework** - Use AFTER choosing custom agentic path to evaluate vendors
- **Build vs Buy Decision Tree** - Deeper decision framework specifically for custom vs vendor agents
- **Level 4: Iterative Agents** - Detailed explanation of custom agentic approach
- **Iteration Economics Framework** - Why rapid iteration matters for Level 4
- **ROI Calculation Model** - Calculate expected returns for custom builds

---

## Version History

**v1.0.0 (2025-01-16)**
- Initial decision tree extraction from S1 (Choosing AI Technology) module
- Four primary paths: ML, Existing (Generic), Existing (Data Access), Custom Agentic
- Detailed comparison of existing tools with data access vs custom builds
- Four dimensions of control framework (model, retrieval, interface, capabilities)
- Real ROI examples across solution categories
- Integration with Level 4 and Iteration Economics frameworks
