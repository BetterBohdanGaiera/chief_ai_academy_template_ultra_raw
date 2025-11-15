# S1: Choosing AI Technology

**Course:** Skills
**Duration:** 18 minutes
**Prerequisites:** F1 (Five Levels Framework)

---

## Why This Matters

You understand the 5 Levels Framework. You know Level 4 is about rapid iteration. But when should you use Machine Learning vs Custom Agentic AI vs Existing Tools? And which specific solution category fits your problem?

**Making the wrong choice wastes 6 months and $200K+ building the wrong solution.**

This module teaches you how to choose the right AI approach for each problem, understand what existing tools can and can't do, and identify which solution category matches your needs.

---

## Learning Objectives

After completing this module, you will be able to:

1. Distinguish between four AI approaches: Machine Learning, Custom Agentic AI, Existing Tools (with/without data access), and No AI
2. Identify 2-3 real examples for each approach and recognize when to use them
3. Explain why context engineering gives custom builds advanced control beyond existing tools
4. Name three Agentic solution categories and their ROI ranges
5. Apply a decision framework to choose the right AI approach for specific business problems
6. Recognize when existing tools are sufficient vs when custom builds are necessary

---

## Connection to Bigger Picture

**From F1 (Five Levels Framework):**
- You learned that Level 4 is defined by rapid iteration (10-20 cycles/day, 200+ total iterations)
- You know the Level 3 trap happens from shallow integrations with slow feedback

**This Module Adds:**
- **WHICH** AI technology enables Level 4 (and which doesn't)
- **WHY** custom Agentic AI unlocks rapid iteration through context engineering
- **WHEN** existing tools are sufficient vs when you need to build custom
- **WHAT** solution categories exist and their ROI patterns

**For F2 (Organization Structure):**
- You'll understand WHY the Agent Manager role exists (context engineering needs domain expertise)
- You'll see WHY Agent Manager + Developer partnership matters (iterating on custom builds)

---

## 1. Four AI Approaches

When evaluating AI solutions, executives face a critical choice. Not "Should we use AI?" but **"Which approach matches our problem?"**

There are four fundamentally different ways to approach AI:

**1. Machine Learning (ML)** - Data-driven predictions from numeric patterns
- Examples: Demand forecasting, churn prediction, fraud detection

**2. Custom Agentic AI** - Instruction-driven reasoning using YOUR company's context
- Examples: HR assistant with YOUR policies, Sales analyzer with YOUR methodology

**3. Existing AI Tools** - Pre-built solutions for commodity or standard tasks
- Examples: ChatGPT (generic), Notion AI (with your Notion data), Midjourney (images)

**4. No AI** - Sometimes the right answer is process improvement, not technology
- Example: Problem is unclear workflow, not information access

Understanding when to use each approach is the difference between wasted investments and competitive advantage.

---

## 2. Machine Learning - Data-Driven Predictions

**Core Principle:** Algorithms find patterns in numeric data to make predictions

**What ML Needs:**
- Large amounts of numeric, structured data
- Historical data with patterns
- Measurable, quantifiable inputs and outputs

**How It Works:**
1. ML engineer collects and prepares datasets
2. Algorithms analyze data to find patterns
3. System creates predictive models
4. Model makes predictions on new, similar data

**Who Builds It:**
- ML engineers and data scientists
- Expertise in data preparation, algorithms, model training

**Quality Factor:**
"If the data is good, ML engineer can provide predictions"
- More data → better predictions
- Clean data → accurate results
- Poor data → poor predictions

**Real Examples:**
- **Demand forecasting** - Predict next quarter's sales from historical patterns
- **Churn prediction** - Identify customers likely to cancel based on behavior data
- **Fraud detection** - Flag suspicious transactions using pattern recognition

**When to Use:**
- You have numeric data with historical patterns
- You need predictions or forecasts
- Measurable inputs and outputs exist
- Strategic value IF your data is unique

**Timeline & Cost:**
- 3-6 months to build and train
- $100K-$500K+ investment
- Ongoing data work required

---

## 3. Custom Agentic AI - Instruction-Driven Reasoning

**Core Principle:** AI reasons through text information, following instructions and structured context

**What Agentic Needs:**
- Process descriptions and workflow documentation
- Structured context and knowledge bases
- Clear instructions and evaluation criteria
- Text-based information (policies, guidelines, procedures)

**How It Works:**
1. Document your processes and prepare context (structure your knowledge, policies, procedures)
2. Technical team builds the agent infrastructure
3. AI reasons through text following the structured context
4. System produces outputs based on reasoning

**Who Builds It:**
- Technical team (agent infrastructure and integration)
- Business/process team (documentation and context preparation)
- Requires expertise in context engineering and process breakdown

**Quality Factor:**
"If the process documentation and context are good, AI can provide quality outputs"
- Better documentation → better reasoning
- Clear criteria → consistent outputs
- Vague instructions → unpredictable results

**Real Examples:**
- **HR Onboarding Assistant** - Answers employee questions from policy docs with YOUR company's specific benefits, procedures, and edge cases
- **Sales Call Analyzer** - Evaluates calls using YOUR 12-point sales methodology and objection handling criteria
- **Customer Support Agent** - Resolves issues via YOUR procedures with multi-step troubleshooting

**When to Use:**
- Need to apply YOUR company's specific knowledge
- Complex reasoning required (not just pattern matching)
- Text-based workflows and policies
- Want competitive moat through capabilities others can't replicate

**Timeline & Cost:**
- 2-4 months for documentation, integration, and build
- $100K-$500K+ investment
- Budget: 30% technical build, 35% documentation, 35% context engineering

---

## 4. Existing AI Tools - Pre-Built Solutions

Existing AI tools fall into TWO categories with very different capabilities:

### Category A: Tools WITHOUT Your Data Access

**Examples:** ChatGPT, Midjourney, DALL-E, generic tools

**What they provide:**
- Generic capabilities based on public knowledge
- Fast deployment, low cost ($10-50/user/month)

**Real Examples:**
- **Midjourney** - Generate marketing visuals and creative assets
- **ChatGPT** - General writing, brainstorming, content creation
- **DALL-E** - Image generation for presentations

**When to use:**
- Commodity tasks (image generation, general writing)
- No company-specific knowledge needed
- Supporting functions, not competitive differentiators

### Category B: Tools WITH Your Data Access (But Limited)

**Examples:** Notion AI, Microsoft Copilot, Salesforce Einstein, Zendesk AI

**What they CAN do:** ✓
- Access YOUR company data (Notion workspace, SharePoint, CRM)
- Answer questions from YOUR documents
- Search across YOUR information

**But they're LIMITED by:** ✗

**1. Model Quality**
- Locked into vendor's model choice (often cheaper, less capable LLMs)
- Cannot use Claude Opus, GPT-4 Turbo, or newer/better models
- Lower quality reasoning, less nuanced understanding

**2. Basic Capabilities**
- Simple one-shot Q&A (ask → answer)
- No reflection strategy (can't verify its own answers)
- No multi-step reasoning (can't break down complex problems)
- No custom workflows

**3. Interface Lock-In**
- Must use vendor's interface (Notion UI, Microsoft Teams, etc.)
- Cannot deploy as Slackbot, Telegram bot, email integration
- Cannot create custom UI tailored to your workflow

**4. Their Roadmap, Not Yours**
- Features they choose to build, not what you need
- Integrations they support, not your systems

**Real Examples:**
- **Notion AI** - Simple HR handbook Q&A within Notion (but can't deploy as Slackbot, can't use advanced models, basic retrieval only)
- **Microsoft Copilot** - Document assistance in Microsoft 365 (but locked to their interface and basic capabilities)
- **Salesforce Einstein** - CRM insights (but limited to their features and integrations)

**When to use:**
- Team already uses that platform daily (interface is fine)
- Questions are straightforward (basic Q&A is enough)
- Basic model quality is acceptable
- Supporting function, not competitive differentiator

**Timeline & Cost:**
- Days to weeks to deploy
- $10-50/user/month subscription

---

## 5. Context Engineering - Why Custom Gives You More Control

**The Reality Check:**

Many existing tools NOW can access your company data (Notion AI reads your workspace, Microsoft Copilot accesses SharePoint, Salesforce Einstein uses your CRM).

So why build custom? **Because data access is just the starting point** - custom gives you advanced control over HOW that data is used.

### What Custom Context Engineering Provides

**Four Advanced Advantages:**

### 1. Model Quality Control

**Existing:** Locked into vendor's model (often cheaper/weaker versions)
**Custom:** Choose best model for each task (Claude Opus for complex reasoning, GPT-4 Turbo for analysis, etc.)
**Impact:** Higher quality answers, better reasoning, more accurate responses

### 2. Sophisticated Retrieval Logic

**Existing:** Basic search across your data
**Custom:** Engineer precise retrieval with tagging, filtering, and contextual rules

**Example - HR Policy Question:**
- **Notion AI:** Searches all Notion workspace, returns mix of current and outdated policies
- **Custom:** Tagged retrieval (`#HR` + `#Current` + `#PTO`), ignores deprecated docs, prioritizes 2024 handbook
- **Result:** Custom finds exact current policy; Notion AI may cite outdated information

**Example - Customer Support Inquiry:**
- **Zendesk AI:** Basic search across knowledge base
- **Custom:** Context-aware retrieval (checks product version, customer tier, known issues for that version, recent tickets with similar errors)
- **Result:** Custom provides version-specific solution; Zendesk AI gives generic answer

### 3. Interface Flexibility

**Existing:** Locked into vendor's interface (must use Notion UI, Microsoft Teams, etc.)
**Custom:** Deploy anywhere your users are

**Interface Options with Custom:**
- **Slackbot** - Employees ask HR questions directly in Slack
- **Telegram bot** - Support team gets alerts and answers via Telegram
- **Email integration** - Agent processes support emails automatically
- **Web dashboard** - Custom UI tailored to your workflow
- **API endpoints** - Integrate with your internal tools

**Why this matters:** Notion AI can answer HR questions, but only through Notion. If your team lives in Slack, you need custom.

### 4. Advanced Capabilities

**Existing:** Simple one-shot Q&A (ask question → get answer)
**Custom:** Multi-step workflows with reflection and verification

**Reflection Strategy:**
- **Existing:** Gives first answer it generates
- **Custom:** Generates answer → reflects on quality → checks against sources → refines → delivers verified response
- **Impact:** Higher accuracy, catches errors before responding

**Multi-Step Reasoning:**
- **Existing:** Single-step response
- **Custom:** Break complex problem into sub-tasks → solve each → synthesize → verify
- **Example:** Complex eligibility calculation requiring multiple policy checks, cross-references, edge case handling

### Real Comparison: HR Assistant - Notion AI vs Custom

**Scenario:** Answer employee HR questions using 200-page handbook

**Notion AI Approach:**
✓ **Can do:** Access Notion workspace with handbook
✓ **Can do:** Answer basic questions from that handbook
✗ **Cannot do:** Deploy as Slackbot (locked into Notion UI)
✗ **Cannot do:** Use Claude Opus (stuck with Notion's basic model)
✗ **Cannot do:** Implement reflection to verify answers
✗ **Cannot do:** Tag docs to prioritize current policies
✗ **Cannot do:** Multi-step reasoning for complex eligibility

**When Notion AI is sufficient:**
- Team already uses Notion daily
- Questions are straightforward (simple policy lookups)
- Basic LLM quality is acceptable
- No complex reasoning needed

**Custom Build Approach:**
✓ Everything Notion AI can, PLUS:
✓ Deploy as Slackbot (employees ask in Slack)
✓ Use Claude Opus for better reasoning
✓ Reflection strategy (verify answer before responding)
✓ Advanced tagging (`#Current` + `#HR` + `#Benefits` for precise retrieval)
✓ Multi-step eligibility calculations with verification
✓ Custom workflow (answer → cite source → log interaction → escalate if uncertain)

**When custom is worth it:**
- Team lives in Slack, not Notion (interface matters)
- Complex questions require nuanced reasoning (model quality matters)
- Accuracy is critical, need reflection/verification (capabilities matter)
- Want to control exactly how retrieval works (control matters)

### The Quality Factor: Four Dimensions

**For Custom Agentic AI, quality comes from FOUR dimensions:**

1. **Model Quality** - Using advanced models (Claude Opus, GPT-4 Turbo) vs basic/cheap models
2. **Retrieval Quality** - Engineered tagging and contextual retrieval vs basic search
3. **Capability Design** - Reflection, multi-step reasoning, verification vs one-shot responses
4. **Interface Design** - Deployed where users are (Slack, Telegram, email) vs locked into vendor UI

**Existing tools fix dimensions 1, 3, and 4** - you get their model, their capabilities, their interface
**Custom lets you optimize all four** - choose best model, design sophisticated retrieval, add reflection, deploy anywhere

---

## 6. Three Agentic Solution Categories

Now that you understand when to build custom Agentic AI, let's explore the three main categories of solutions and their ROI patterns.

All three work through instruction-driven reasoning with structured context - but they solve different problems.

### Category 1: Static Information Chatbots | Level 4

**What They Do:**
Answer questions by retrieving and explaining information from existing knowledge bases. Expert assistants who have read all your documentation.

**Common Pattern:**
Document knowledge → AI retrieves relevant info → AI explains in context

**Examples with ROI:**
- **HR Onboarding Assistant** - $99K/year | 15-20 min → 2 min response time
- **Sales Enablement Assistant** - $73K/year | 20% less time searching for information
- **IT Support Assistant** - $54K/year | 60% reduction in L1 tickets

**When to Use:**
- Extensive documentation, hard to find info
- Same questions asked repeatedly
- Knowledge scattered across systems
- Onboarding takes significant time

**ROI Pattern:** $15K - $99K/year, 1-2 months payback

### Category 2: Dynamic Content Chatbots | Level 4-5

**What They Do:**
Fetch real-time data from live systems, synthesize information across multiple sources, provide current answers. Go beyond static documents to query databases, APIs, and business systems.

**Common Pattern:**
User question → AI queries multiple systems → AI aggregates data → AI interprets and explains

**Examples with ROI:**
- **Customer Support Agent** - $246K/year | 40% of tickets automated, 24/7 availability
- **Sales Deal Intelligence** - $196K/year | Instant deal insights, pipeline patterns
- **Project Management Status** - $78K/year | Reduced status meetings, instant visibility

**When to Use:**
- Information changes frequently, needs to be current
- Data in multiple business systems
- Manual aggregation takes time
- Need 24/7 access to live business data

**ROI Pattern:** $14K - $246K/year, 1-3 months payback

### Category 3: Custom Workflows & Analyzers | Level 5

**What They Do:**
Process inputs through structured evaluation frameworks, apply expert judgment at scale, produce consistent actionable outputs. Don't just retrieve information—analyze and create new insights.

**Common Pattern:**
Unstructured input → AI applies structured framework → AI scores/categorizes → Actionable output with evidence

**Examples with ROI:**
- **Proposal Quality Analyzer** - $158K/year | Higher win rates, consistent quality, faster reviews
- **Sales Call Analyzer** - $141K/year | 100% calls reviewed vs 5% manual, faster improvement
- **Interview Quality Analyzer** - $95K/year | Consistent hiring, reduced bias

**When to Use:**
- Expert judgment inconsistently applied
- Manual review processes create bottlenecks
- Can only review sample (want 100% coverage)
- Quality depends on complex criteria

**ROI Pattern:** $63K - $158K/year, 2-4 months payback

---

## 7. Decision Framework - Which AI Approach?

**The Strategic Question:**
Not "Should we use AI?" but **"Which approach matches our problem - and do we need more than existing tools can provide?"**

### PATH 1: Do you have numeric data and need predictions?
→ **Machine Learning**

- **Use when:** Historical patterns exist that can predict future outcomes
- **Requires:** Large volumes of quality numeric data
- **Team:** ML engineers and data scientists
- **Timeline:** 3-6 months
- **Cost:** $100K-$500K+
- **Examples:** Demand forecasting, churn prediction, fraud detection
- **Strategic value:** Competitive advantage IF your data is unique

---

### PATH 2: Commodity task + no need for your company data?
→ **Existing AI Tools (No Data Access)**

- **Use when:** Task doesn't require YOUR company-specific knowledge or data
- **Examples:** ChatGPT, Midjourney, DALL-E, generic tools
- **Timeline:** Days to weeks
- **Cost:** $10-50/user/month
- **Use cases:** Image generation, general writing, brainstorming, content creation
- **Strategic value:** Productivity boost, but no competitive moat

**Decision:** If task requires your company's data or processes → See Path 3

---

### PATH 3: Can existing tool access your data? Check if sufficient:
→ **Existing AI Tools WITH Data Access (e.g., Notion AI, Copilot, Salesforce Einstein)**

**These tools CAN:**
✓ Access YOUR company data (Notion workspace, SharePoint, CRM, etc.)
✓ Answer questions from YOUR documents
✓ Basic search across YOUR information

**Check the Four Limitation Factors:**

**Is their interface acceptable?**
- ☐ Team already uses that platform daily (Notion, Microsoft Teams, etc.)
- ☐ No need for custom deployment (Slackbot, Telegram bot, email integration)
- **If NO** → Go to PATH 4 (need custom interfaces)

**Is basic model quality sufficient?**
- ☐ Vendor's model (often cheaper LLM) provides acceptable quality
- ☐ Don't need Claude Opus, GPT-4 Turbo, or other advanced models
- **If NO** → Go to PATH 4 (need better models)

**Are simple capabilities enough?**
- ☐ One-shot Q&A is sufficient (no reflection needed)
- ☐ No multi-step reasoning required
- ☐ No complex workflow integration needed
- **If NO** → Go to PATH 4 (need advanced capabilities)

**Are their features/integrations sufficient?**
- ☐ Vendor's roadmap covers your needs
- ☐ Their integrations work for your systems
- ☐ Don't need custom retrieval logic or tagging
- **If NO** → Go to PATH 4 (need full control)

**If YES to all four** → Use existing tool with data access
- **Timeline:** Days to weeks
- **Cost:** $10-50/user/month
- **Examples:** Notion AI for simple HR Q&A (if team uses Notion), Copilot for basic document assistance
- **Strategic value:** Fast deployment, low cost, but limited capabilities

**If NO to any** → Proceed to PATH 4

---

### PATH 4: Need MORE than existing tools provide?
→ **Custom Agentic AI**

**Build custom when you need ANY of:**

✓ **Better Models** - Claude Opus, GPT-4 Turbo, or choose best model per task (vs vendor's cheaper LLM)
✓ **Advanced Capabilities** - Reflection, multi-step reasoning, verification workflows (vs one-shot Q&A)
✓ **Custom Interfaces** - Slackbot, Telegram, email, custom UI (vs locked into vendor's interface)
✓ **Full Control** - YOUR retrieval logic, YOUR integrations, YOUR workflow (vs vendor's features)

**Requires:**
- **Team:** Technical team (build infrastructure) + business/process team (context engineering)
- **Timeline:** 2-4 months for documentation, integration setup, and build
- **Cost:** $100K-$500K+ to build, ongoing maintenance

**Choose Solution Category:**
1. **Static Information** ($15K-$99K/year) - Answer questions from documentation
2. **Dynamic Content** ($14K-$246K/year) - Fetch real-time data from systems
3. **Workflows & Analyzers** ($63K-$158K/year) - Apply expert judgment at scale

**Strategic value:** Sustainable competitive moat - advanced capabilities competitors can't replicate

**Ask yourself:**
- Is this task core to competitive advantage? ✓ Definitely build custom
- Is it supporting function BUT needs capabilities existing tools lack? ✓ Consider custom
- Is it supporting function AND existing tools work? → Use Path 3 (existing tools)

---

### HYBRID STRATEGY (Recommended for Most Enterprises)

**Layer 1: Commodity Tasks - Generic Tools**
→ Deploy tools without data access (ChatGPT, Midjourney, DALL-E)
- Cost: $10-50/user/month
- Use for: Image generation, general writing, brainstorming
- Goal: Baseline productivity for non-sensitive tasks

**Layer 2: Simple Data Access - Existing Tools With Your Data**
→ Use platform tools (Notion AI, Microsoft Copilot, Salesforce Einstein)
- Cost: $10-50/user/month per platform
- Use for: Simple Q&A from your docs, basic document assistance
- Goal: Leverage your data through existing platforms IF their interface/capabilities work

**Layer 3: Advanced Capabilities - Custom Builds**
→ Build custom where you need MORE than existing tools provide
- Cost: $100K-$500K+ per initiative
- Use for: Advanced reasoning, custom interfaces, better models, full control
- Goal: Competitive differentiation through capabilities competitors can't replicate

---

## Summary

**Four AI Approaches:**
1. **Machine Learning** - Data patterns → predictions (forecasting, churn, fraud)
2. **Existing Tools (No Data)** - Generic capabilities (ChatGPT, Midjourney)
3. **Existing Tools (WITH Data)** - Your data + basic capabilities (Notion AI, Copilot) BUT limited by vendor's models, capabilities, interface
4. **Custom Agentic** - Your data + advanced capabilities + full control (HR Slackbot with reflection, Sales analyzer with YOUR methodology)

**The CRITICAL Question:**
Not "Does this AI need access to my company's data?" (existing tools may have this) but **"Do I need MORE than basic data access?"**
- Better models (Claude Opus vs vendor's cheap LLM)?
- Advanced capabilities (reflection, multi-step reasoning vs one-shot Q&A)?
- Custom interfaces (Slackbot, Telegram vs locked into vendor UI)?
- Full control (YOUR retrieval logic, YOUR workflow vs their roadmap)?

**Three Agentic Solution Categories:**
1. **Static Information Chatbots** - Level 4 | $15K-$99K/year | Answer questions from docs
2. **Dynamic Content Chatbots** - Level 4-5 | $14K-$246K/year | Fetch real-time system data
3. **Custom Workflows & Analyzers** - Level 5 | $63K-$158K/year | Expert judgment at scale

**Decision Framework:**
- Need predictions from data? → ML
- Commodity task, no company data? → Generic tools
- Need your data + existing tool works? → Tools with data access
- Need MORE (better models, advanced capabilities, custom interfaces, full control)? → Build custom

**Strategic Insight:**
- **OLD thinking:** "Existing tools = generic" vs "Custom = your context"
- **NEW reality:** "Existing tools CAN access your context, BUT custom gives better models, advanced capabilities, custom interfaces, full control"

---

## Interactive Wrap-Up

**Reflection Exercise: Find Your First Use Case**

Think about your department. Which approach has the biggest opportunity?

**For Existing Tools (with data access):**
- What simple questions could Notion AI / Copilot / Salesforce Einstein answer from your existing data?
- Is their interface + basic capabilities sufficient?

**For Custom Agentic AI - Category 1 (Static Information):**
- What questions get asked repeatedly in your team?
- What documentation exists but people can't find quickly?

**For Custom Agentic AI - Category 2 (Dynamic Content):**
- What data do people manually aggregate from multiple systems?
- Where would real-time insights make better decisions?

**For Custom Agentic AI - Category 3 (Workflows & Analysis):**
- What expert judgment is applied inconsistently?
- What reviews create bottlenecks or only cover a sample?

**Action Item:**
Identify ONE use case that would have the biggest impact on your team this quarter. Then ask:
1. Can existing tool with data access handle it? (check 4 limitation factors)
2. If NO to any limitation → Consider custom build
3. Which solution category fits? (Static, Dynamic, or Analyzer)

---

## What's Next

**For Executives:**
- Proceed to S2 (Understanding Agents) to learn what makes agents work and their limitations
- Or review F2 (Organization Structure) to see how roles connect to technology choices

**For AI Champions:**
- Continue to S2 (Understanding Agents) for deeper technical understanding
- Then S3 (Managing AI) for context engineering methodology

**For Agent Managers:**
- S2 (Understanding Agents) will show you what tools you can use at Level 3.5
- S3 (Managing AI) is critical - focus on context engineering section

**For Developers:**
- S2 (Understanding Agents) provides architectural foundations
- S3 (Managing AI) shows how to partner with Agent Managers on context

---

## Related Resources

**From Other Modules:**
- F1: Five Levels Framework (understanding Level 4 rapid iteration)
- F2: Organization Structure (roles that build and manage different AI approaches)
- S3: Managing AI (how to do context engineering for custom builds)

**Deep Dive Materials:**
- Use Cases: Level 3 to 4 examples (`resources/use_cases_level_3_to_4.md`)
- Economics: ROI case studies for 10 agent deployments (`resources/economics/`)
- Glossary: Technical definitions (`resources/glossary.md`)
