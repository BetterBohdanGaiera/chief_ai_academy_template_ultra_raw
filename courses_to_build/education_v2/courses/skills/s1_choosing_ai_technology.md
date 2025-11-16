# S1: Choosing AI Technology

**Course:** Skills
**Duration:** 18 minutes
**Prerequisites:** F1 (Five Levels Framework)

---

## Why This Matters

You understand the 5 Levels Framework. You know {{kc:level_4_iterative_agents:inline}} is about rapid iteration. But when should you use Machine Learning vs Custom Agentic AI vs Existing Tools? And which specific solution category fits your problem?

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
- You learned that {{kc:level_4_iterative_agents:inline}} is defined by rapid iteration (1-3 cycles/day, 20 total iterations over 2-3 weeks)
- You know {{kc:level_3_trap_story:inline}} happens from shallow integrations with slow feedback (1 iteration/week)

**This Module Adds:**
- **WHICH** AI technology enables Level 4 (and which doesn't)
- **WHY** custom Agentic AI unlocks rapid iteration through {{kc:context_engineering_methodology:inline}}
- **WHEN** existing tools are sufficient vs when you need to build custom
- **WHAT** solution categories exist and their ROI patterns

**For F2 (Organization Structure):**
- You'll understand WHY the Agent Manager role from {{kc:four_roles_framework:inline}} exists (context engineering needs domain expertise)
- You'll see WHY Agent Manager + Developer partnership matters (iterating on custom builds)

---

## 1. The Decision Framework: Which AI Approach?

{{kc:ml_vs_agentic:full}}

---

## 2. Understanding Custom vs Existing Tools

Now that you understand the broad decision between ML vs Agentic AI, let's dive deeper into a critical question: **When should you build custom vs use existing tools?**

{{kc:build_vs_buy:full}}

---

## 3. Context Engineering - Why Custom Gives You More Control

**The Reality Check:**

Many existing tools NOW can access your company data (Notion AI reads your workspace, Microsoft Copilot accesses SharePoint, Salesforce Einstein uses your CRM).

So why build custom? **Because data access is just the starting point** - custom gives you advanced control over HOW that data is used.

This is where {{kc:context_engineering_methodology:inline}} becomes critical - it's what transforms basic data access into advanced capabilities.

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

This level of retrieval control requires {{kc:context_engineering_methodology:summary}} to structure your data properly.

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

See {{kc:hr_onboarding_assistant:summary}} for a real example of building custom with full context engineering.

### The Quality Factor: Four Dimensions

**For Custom Agentic AI, quality comes from FOUR dimensions:**

1. **Model Quality** - Using advanced models (Claude Opus, GPT-4 Turbo) vs basic/cheap models
2. **Retrieval Quality** - Engineered tagging and contextual retrieval vs basic search (enabled by {{kc:context_engineering_methodology:inline}})
3. **Capability Design** - Reflection, multi-step reasoning, verification vs one-shot responses
4. **Interface Design** - Deployed where users are (Slack, Telegram, email) vs locked into vendor UI

**Existing tools fix dimensions 1, 3, and 4** - you get their model, their capabilities, their interface
**Custom lets you optimize all four** - choose best model, design sophisticated retrieval, add reflection, deploy anywhere

---

## 4. Three Agentic Solution Categories

Now that you understand when to build custom Agentic AI, let's explore the three main categories of solutions and their ROI patterns.

All three work through instruction-driven reasoning with structured context - but they solve different problems. All require {{kc:context_engineering_methodology:inline}} for quality results.

### Category 1: Static Information Chatbots | Level 4

**What They Do:**
Answer questions by retrieving and explaining information from existing knowledge bases. Expert assistants who have read all your documentation.

**Common Pattern:**
Document knowledge → AI retrieves relevant info → AI explains in context

**Examples with ROI:**
- {{kc:hr_onboarding_assistant:inline}} - $99K/year | 15-20 min → 2 min response time
- **Sales Enablement Assistant** - $73K/year | 20% less time searching for information
- **IT Support Assistant** - $54K/year | 60% reduction in L1 tickets

**When to Use:**
- Extensive documentation, hard to find info
- Same questions asked repeatedly
- Knowledge scattered across systems
- Onboarding takes significant time

**ROI Pattern:** $15K - $99K/year, 1-2 months payback

For detailed ROI calculations, see {{kc:roi_calculation_model:summary}}.

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

These typically require moving from {{kc:level_4_iterative_agents:inline}} to {{kc:level_5_autonomous_agents:inline}} as they handle more complex workflows.

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

These require deep {{kc:context_engineering_methodology:full}} to capture expert evaluation criteria.

---

## 5. Hybrid Strategy (Recommended for Most Enterprises)

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

Use {{kc:build_vs_buy:summary}} to determine which layer fits each use case.

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

Use {{kc:build_vs_buy:inline}} to make this decision systematically.

**Three Agentic Solution Categories:**
1. **Static Information Chatbots** - {{kc:level_4_iterative_agents:inline}} | $15K-$99K/year | Answer questions from docs
2. **Dynamic Content Chatbots** - {{kc:level_4_iterative_agents:inline}} to {{kc:level_5_autonomous_agents:inline}} | $14K-$246K/year | Fetch real-time system data
3. **Custom Workflows & Analyzers** - {{kc:level_5_autonomous_agents:inline}} | $63K-$158K/year | Expert judgment at scale

**Decision Framework:**
{{kc:ml_vs_agentic:summary}}

**Strategic Insight:**
- **OLD thinking:** "Existing tools = generic" vs "Custom = your context"
- **NEW reality:** "Existing tools CAN access your context, BUT custom gives better models, advanced capabilities, custom interfaces, full control"

All custom solutions require {{kc:context_engineering_methodology:inline}} and the {{kc:four_roles_framework:inline}} to execute successfully.

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
Identify ONE use case that would have the biggest impact on your team this quarter. Then use {{kc:build_vs_buy:checklist}} to evaluate whether to build custom or use existing tools.

### Self-Assessment: Is This Use Case Ready for AI? (Rate 1-5)

Thinking about a SPECIFIC use case you want to automate, rate it across these dimensions:

---

**Dimension 1: Process Clarity**

**Question:** "How well-defined is this process?"

- 1 = Completely ad-hoc; everyone does it differently
- 2 = General pattern exists but many exceptions
- 3 = Documented process but missing edge cases
- 4 = Clear process with most edge cases documented
- 5 = Fully documented with validation rules and examples

**Your Rating: ___/5**

**Red Flag:** If 1-2, fix process clarity BEFORE attempting automation

---

**Dimension 2: Expert Availability**

**Question:** "Do you have domain experts who can validate outputs?"

- 1 = No clear expert; would need to figure it out
- 2 = Have expert but they're unavailable (too busy/leaving soon)
- 3 = Have expert available occasionally (1-2 hours/week)
- 4 = Have expert available regularly (5-10 hours/week)
- 5 = Have expert fully allocated as Agent Manager (20+ hours/week for 3 weeks)

**Your Rating: ___/5**

**Red Flag:** If 1-3, secure expert availability BEFORE starting

---

**Dimension 3: Value Potential**

**Question:** "What's the potential annual value of automating this?"

- 1 = <$5K/year (not worth custom build)
- 2 = $5-15K/year (marginal value)
- 3 = $15-50K/year (solid value)
- 4 = $50-150K/year (high value)
- 5 = $150K+/year (exceptional value)

**Your Rating: ___/5**

**Red Flag:** If 1-2, consider existing tools instead of custom build

---

**Dimension 4: Data Availability**

**Question:** "Is the data/knowledge needed readily available?"

- 1 = Data scattered, incomplete, or doesn't exist
- 2 = Data exists but hard to access (permissions, formats)
- 3 = Data accessible but needs significant cleaning
- 4 = Data accessible and mostly clean
- 5 = Data readily available in usable formats

**Your Rating: ___/5**

**Red Flag:** If 1-2, fix data access issues BEFORE building agent

---

**Dimension 5: Volume/Frequency**

**Question:** "How often is this process needed?"

- 1 = Quarterly or less (very rare)
- 2 = Monthly (occasional)
- 3 = Weekly (regular)
- 4 = Daily (frequent)
- 5 = Multiple times per day (constant)

**Your Rating: ___/5**

**Red Flag:** If 1, automation may not be justified; do manually

---

**Dimension 6: Complexity Appropriateness**

**Question:** "Is this the right complexity for your team's capability?"

- 1 = Requires true creativity; no pattern exists
- 2 = Very complex; would require multi-agent system
- 3 = Moderate complexity; clear rules with exceptions
- 4 = Straightforward with defined rules
- 5 = Simple pattern recognition or retrieval

**Your Rating: ___/5**

**Note:** Higher rating = easier to automate. For first project, aim for 4-5.

---

**TOTAL SCORE: ___/30**

**Interpretation:**

**6-12 Points (Not Ready):**
- This use case has significant challenges
- **Action:** Fix foundational issues first (process clarity, data access, expert availability)
- **Alternative:** Choose a different use case with fewer barriers

**13-18 Points (Marginal):**
- This could work but has risks
- **Action:** Address the lowest-scoring dimensions before starting
- **Question:** Is there a simpler use case to start with?

**19-24 Points (Good Candidate):**
- This use case is ready for AI automation
- **Action:** Proceed with Level 4 approach
- **Tip:** Focus extra attention on the 3-4 rated dimensions

**25-30 Points (Excellent Candidate):**
- This is an ideal first AI project
- **Action:** Fast-track this to build momentum and credibility
- **Opportunity:** Use this as reference implementation for future projects

---

## Knowledge Check Quiz (Required)

**Before proceeding to the next module, complete this quiz to verify understanding.**

**Passing Score:** 80% (4 out of 5 questions)
**Time:** 5 minutes
**Attempts:** Unlimited (review content between attempts)

**[LINK TO QUIZ: S1_choosing_ai_technology_quiz]**

**Why This Matters:**
Each module builds on previous knowledge. Completing this quiz ensures you have the foundation for the next module.

**What Happens If You Don't Pass:**
- Review the sections where you missed questions
- Re-read the relevant {{kc:component}} references
- Retake quiz when ready

### Quiz Questions

**Question 1 (ML vs Agentic):**
When should you choose Machine Learning over Agentic AI?
- A) When you need to automate complex workflows
- B) When you have historical data patterns and need predictions
- C) When you need to answer questions from documents
- D) When you want to connect multiple systems
- **Correct: B**
- Explanation: ML is for pattern recognition and predictions from data. Agentic AI is for reasoning, workflows, and system integration.

**Question 2 (Build vs Buy):**
According to the Build vs Buy framework, when should you BUILD a custom agent?
- A) When many existing tools exist that solve the problem
- B) When the use case is generic across industries
- C) When your competitive advantage depends on the process AND no good existing solution exists
- D) When you have unlimited budget
- **Correct: C**
- Explanation: Build when it's core to your business AND existing tools don't fit your specific needs.

**Question 3 (Solution Categories):**
Which solution category best fits: "Answering employee questions about company policies using internal knowledge base"?
- A) Machine Learning predictions
- B) Category 1: Static Information Chatbots (RAG)
- C) Category 2: Dynamic Content Chatbots (Multi-System)
- D) Category 3: Custom Workflow Automation
- **Correct: B**
- Explanation: This is retrieval from static documents (knowledge base), which is Category 1 RAG use case.

**Question 4 (Context Engineering Advantage):**
What's the main advantage of context engineering for custom agents?
- A) It's cheaper than buying software
- B) It allows you to encode domain expertise and business rules precisely
- C) It requires no technical knowledge
- D) It works without any iteration
- **Correct: B**
- Explanation: Context engineering lets you embed your specific expertise, edge cases, and validation rules that generic tools can't capture.

**Question 5 (Hybrid Strategy):**
Your company has 10 use cases identified. What's the recommended approach?
- A) Build all 10 custom agents immediately
- B) Buy generic SaaS tools for all 10
- C) Build 2-3 highest-impact custom agents, buy tools for the rest
- D) Wait until you can afford to build all 10
- **Correct: C**
- Explanation: Hybrid strategy: Build custom for competitive advantage use cases, buy for generic needs. Focus investment on highest impact.

---

## What's Next

**For Executives:**
- Proceed to S2 (Understanding Agents) to learn what makes agents work and their limitations
- Or review F2 (Organization Structure) to see how {{kc:four_roles_framework:inline}} connects to technology choices

**For AI Champions:**
- Continue to S2 (Understanding Agents) for deeper technical understanding
- Then S3 (Managing AI) for {{kc:context_engineering_methodology:inline}}

**For Agent Managers:**
- S2 (Understanding Agents) will show you what tools you can use
- S3 (Managing AI) is critical - focus on {{kc:context_engineering_methodology:inline}} section

**For Developers:**
- S2 (Understanding Agents) provides architectural foundations
- S3 (Managing AI) shows how to partner with Agent Managers on context

---

## Related Resources

**Knowledge Components Referenced:**
- {{kc:ml_vs_agentic:inline}} - Complete decision framework
- {{kc:build_vs_buy:inline}} - Build vs buy evaluation
- {{kc:level_4_iterative_agents:inline}} - Understanding Level 4
- {{kc:level_5_autonomous_agents:inline}} - Scaling to autonomy
- {{kc:context_engineering_methodology:inline}} - How to structure context
- {{kc:four_roles_framework:inline}} - Who executes the strategy
- {{kc:roi_calculation_model:inline}} - Calculating returns
- {{kc:hr_onboarding_assistant:inline}} - Real custom build example
- {{kc:level_3_trap_story:inline}} - What to avoid

**Deep Dive Materials:**
- Use Cases: Level 3 to 4 examples (`resources/use_cases_level_3_to_4.md`)
- Economics: ROI case studies for 10 agent deployments (`resources/economics/`)
