# Learning Path: Agent Manager

**Target Audience:** Agent Managers, domain experts, process owners
**Total Time:** ~85 minutes
**Goal:** Master context engineering methodology and learn to build AI agents for your domain

---

## Why This Path

As an Agent Manager, you are:
- The domain expert who understands your business processes deeply
- Responsible for documenting processes so AI can execute them (context engineering)
- The validator who tests outputs and identifies what's missing
- The iteration partner with Developers to reach 95%+ reliability

**You are NOT expected to code.** This is about process documentation, clear communication, and quality management.

**Your superpower:** You know what "good" looks like in your domain. Developers know AI architecture. Together you build reliable agents.

---

## Your Learning Journey

### Module 1: F1 - Five Levels Framework (20 min)

**Why you need this:** Understand what you're building toward and why iteration matters

**What you'll learn:**
- The 5 levels of AI adoption
- Why Level 3 fails (slow iteration → stuck at 70% → abandoned)
- What defines Level 4 (rapid iteration: 10-20 cycles/day with you + Developer)
- Why 200+ iterations are needed to reach 95%+ reliability
- Your role in rapid iteration (test → identify gap → explain → test again)

**Your role application:**
- Understand why you iterate daily with Developer (not send requests to external agency)
- Set realistic expectations: First version will be 70% accurate - that's normal
- Embrace iteration as discovery: You'll learn what AI needs through building
- Plan for 6-10 weeks of active development (200+ cycles at 10-20/day)

**Key mindset shift:**
- OLD: "Document everything perfectly upfront, then Developer builds it"
- NEW: "Build → Test → See what's missing → Add context → Test again (in minutes, not weeks)"

This is why external agencies fail and you succeed - you can iterate in real-time.

---

### Module 2: F2 - Organization Structure (18 min)

**Why you need this:** Understand your role and how you partner with Developer

**What you'll learn:**
- Four key roles: Chief AI Officer, AI Champions, Agent Managers (you!), AI Agent Developers
- **Agent Manager role definition:** Domain experts who document processes for AI consumption
- **Critical partnership:** Agent Manager + Developer enables rapid iteration (Level 4 structure)
- Real stories: HR (Sarah), Sales (David), Operations (Jennifer) - all Agent Managers like you
- What you own vs what Developer owns
- Why co-location matters (sitting together, fast communication)

**Your role application:**
- Understand your responsibilities: process mapping, context creation, validation, iteration
- Know what Developer handles: infrastructure, integrations, deployment, technical optimization
- Establish working rhythm with your Developer partner
- Recognize you're not alone - this is a partnership

**Key takeaway:**
You're the expert on WHAT needs to happen (the process, the quality standards, the edge cases).
Developer is the expert on HOW to build it (the architecture, the integrations, the code).

Partnership model: You define requirements, Developer implements, you validate, iterate together.

---

### Module 3: S1 - Choosing AI Technology (Brief: 10 min)

**Note:** Full module is 18 min. As Agent Manager, focus on these sections:

**Section 3: Custom Agentic AI (5 min)**
- Understand what you're building: instruction-driven reasoning with YOUR domain context
- Why custom gives control: model quality, retrieval logic, capabilities, interfaces
- Quality factor: "If context is good, AI can provide quality outputs" (your responsibility)

**Section 6: Three Agentic Solution Categories (5 min)**
- Category 1: Static Information Chatbots ($15K-$99K/year ROI)
- Category 2: Dynamic Content Chatbots ($14K-$246K/year ROI)
- Category 3: Custom Workflows & Analyzers ($63K-$158K/year ROI)
- Identify which category your first project fits

**Key understanding:**
- Know what type of agent you're building (helps scope context engineering work)
- Understand ROI ranges (motivates the effort)
- Recognize quality depends on YOUR context, not just Developer's code

---

### Module 4: S3 - Managing AI (Deep Focus: 25 min) **MOST IMPORTANT**

This is your core curriculum. Take this slowly and thoroughly.

**Part 1: The Management Shift (5 min)**

**Understand the reframe:** Managing AI is like managing people
- Needs clear communication (structured context, not assumptions)
- Needs empathy (AI has limitations, can hallucinate, needs verification)
- Needs quality standards (define what "good" looks like with rubrics)
- Needs feedback loops (200+ iterations to improve)
- Needs patience (starts at 70%, improves to 95%+ over time)

**Your advantage:** Domain experts who learn to manage AI are MORE effective than AI experts without domain knowledge.

---

**Part 2: Level 3.5 Tools (4 min)**

**Tools:** Cursor IDE, Claude Code

**What they enable:**
- Non-technical domain experts (like you) can build simple-medium agents
- Prototype ideas before involving Developer
- Learn what AI can do through hands-on building

**Your application:**
- Use Level 3.5 tools to prototype your first agent idea
- Build confidence that you CAN work with AI (it's not magic, it's instruction-following)
- Decide if idea is worth full Developer investment

**When to involve Developer:**
- Need system integrations (APIs, databases, real-time data)
- Need production deployment (hundreds of users)
- Need multi-agentic architecture (multiple specialized subprocesses)
- Need advanced capabilities (reflection, verification loops)

---

**Part 3: Context Engineering Methodology (12 min) ⭐ MOST CRITICAL**

This is THE skill you need to master.

**5-Step Methodology:**

### Step 1: Process Mapping

**Your task:** Document how work gets done today, step-by-step

**What to document:**
- Each step from start to finish
- Decision points: Where do you make judgment calls?
- Variations: What are different paths through the process?
- Pain points: What takes too long? What's repetitive?
- Time tracking: How long does each step currently take?

**Example (HR Onboarding):**
- Map question categories: Benefits, Policies, IT, Culture
- Document current workflow: Question asked → Search 3 systems → Craft response (15-20 min)
- Identify pain: Same questions by every new hire, inconsistent answers

**Output:** Clear process map you can show to Developer and AI Champion

---

### Step 2: Data Identification

**Your task:** List what information AI needs at each step

**Four types of information:**
1. **Facts:** Objective data (PTO policy: 15 days/year, accrues 1.25/month)
2. **Guidelines:** Decision rules (Remote work criteria: 90 days + manager approval + dedicated workspace)
3. **Examples:** Good/bad scenarios annotated (Good expense report example, common mistakes)
4. **Context:** Background info (Company culture, who to ask about what)

**Example (HR Onboarding):**
- Facts: PTO policy numbers, 401k matching percentages, insurance deadlines
- Guidelines: Eligibility rules, approval processes
- Examples: Sample expense reports (good/bad), common new hire mistakes
- Context: Unwritten rules about culture, traditions

**Output:** Comprehensive list of everything AI needs to know

**Your advantage:** You "just know" this stuff. Now you're making it explicit.

---

### Step 3: Source Mapping

**Your task:** Identify where each piece of information lives

**Three sources:**
1. **Systems:** HRIS, CRM, wikis (need API access - Developer handles)
2. **Documents:** Handbooks, policies, guides (you organize access)
3. **People:** Subject matter experts with tacit knowledge (YOU and your team)

**Common discovery:** Information SHOULD exist but doesn't (gaps)

**Example (HR Onboarding):**
- Systems: BambooHR (employee data), Zenefits (benefits)
- Documents: Employee handbook (150 pages), Confluence wiki
- People: HR Business Partners know cultural knowledge not documented
- **Gap found:** No single "who to ask about what" guide

**Output:** Source map + identified gaps that need documentation

---

### Step 4: Structure Definition

**Your task:** Transform raw information into formats AI can use

**Five key formats:**

**1. FAQs:** Question-answer pairs
- Example: "How much PTO do I get?" → "15 days/year, accrues 1.25 days/month, usable immediately, max carryover 25 days"

**2. Procedures:** Step-by-step instructions
- Example: "How to submit expense report" → 6 steps with screenshots, approval rules, common issues

**3. Rubrics:** Evaluation criteria with scoring
- Example: "Remote work eligibility" → Must meet ALL: (1) Role can be remote, (2) 90 days completed, (3) Manager approval, (4) Dedicated workspace, (5) Reliable internet

**4. Templates:** Consistent output formats
- Example: Answer template = Policy statement + Procedure steps + Who to contact for exceptions + Related resources

**5. Examples:** Annotated good/bad scenarios
- Example: Good call = Discovery questions annotated ("Why this is effective: uncovers pain, understands context")

**Organization strategy:**
- Hierarchical: Benefits → Health Insurance → Plans, Enrollment, Coverage, FAQ
- Cross-referenced: PTO policy links to time tracking, benefits enrollment, holiday schedule
- Consistent terminology: Same terms used throughout

**Output:** Structured context ready for Developer to implement

**This is your primary work. Quality here determines AI quality.**

---

### Step 5: Validation Rules

**Your task:** Define how to verify AI outputs and improve over time

**Establish:**
- Quality thresholds: "95% accuracy required before full deployment"
- Review process: Who checks outputs initially? (You!)
- Error tracking: Categorize mistakes (factual error, incomplete, tone issue, etc.)
- Feedback loops: How do errors → context improvements?
- Escalation rules: When should AI route to human?

**Validation phases:**
- **Weeks 1-2:** You review 100% of AI outputs before they're sent
- **Weeks 3-4:** Sample 30% of outputs, focus on complex/unusual cases
- **Month 2+:** Exception review only (AI flags low confidence, you review those)

**Error tracking:**
- Factual errors → Fix source documents or add clarification
- Incomplete answers → Add missing context or examples
- Tone issues → Provide examples of desired tone
- Interpretation errors → Clarify guidelines or add edge cases

**Output:** Validation framework that improves quality over time

**Your ongoing role:** Even after deployment, you monitor quality and update context as policies change.

---

**Examples from HR, Sales, Marketing (2 min)**

**Quickly review:**
- HR Onboarding: Question categories, facts/guidelines/examples needed, rubric for remote work eligibility
- Sales Call Analyzer: 12 evaluation criteria with 1-5 scoring rubrics, annotated good/bad call examples
- Marketing Content Quality: 8 criteria for brand voice and quality, scoring rubrics, before/after examples

**Common patterns:**
- All used rubrics (1-5 scoring with clear definitions)
- All needed annotated examples (good + bad + why)
- All discovered tacit knowledge that wasn't documented
- All reached 95%+ through 200+ iterations

**Your takeaway:** These patterns work across domains. Learn from them.

---

**Part 4: Multi-Agentic Systems (2 min) - Brief Overview**

**When to break into subprocesses:**
- Process has distinct phases with different requirements
- Different tools needed (transcription API vs reasoning vs CRM integration)
- Different context types (audio processing vs sales methodology vs report formatting)

**Example: Sales Call Analyzer = 3 subprocesses:**
1. Transcription (technical tools)
2. Evaluation (YOUR sales methodology context - the core value)
3. Report generation (formatting + CRM)

**Your role:** Define requirements for each subprocess (Purpose, Tools needed, Workflow, Context, Output)

**Developer's role:** Implement orchestration (how subprocesses connect)

**When to use:** Developer will recommend when your process is complex enough. Don't worry about this for first project.

---

**Part 5: What You Can Build Alone vs When to Involve Developer (2 min)**

**You can build with Level 3.5 tools (Cursor, Claude Code):**
- Documentation systems
- Content analysis and quality checks
- Simple workflow automations
- Process documentation
- Prototypes to prove value

**Bring in Developer when you need:**
- System integrations (API connections)
- Production deployment (hundreds of users)
- Multi-agentic architecture
- Advanced capabilities (reflection, verification)

**Recommended approach:**
1. Prototype with Level 3.5 tools (prove the value, learn what AI needs)
2. Bring in Developer for production version
3. You continue owning context and validation

---

## Your First Agent: Step-by-Step Plan

**Week 1-2: Choose Process & Map**

**Day 1-3: Choose your process**
- Pick something you know deeply (your domain expertise)
- Start narrow: One category of questions, one type of evaluation, one workflow
- Aim for $15K-$99K/year ROI opportunity (Category 1 static info or Category 2 dynamic)

**Day 4-7: Process Mapping (Step 1)**
- Document current workflow step-by-step
- Identify decision points and variations
- Note pain points and time spent
- Show to team: "Did I capture this accurately?"

**Day 8-10: Data Identification (Step 2)**
- List all facts AI needs
- List all guidelines and decision rules
- Identify examples needed (good/bad scenarios)
- Note contextual knowledge

**Day 11-14: Source Mapping (Step 3)**
- Map each requirement to its source (systems, documents, people)
- Identify gaps in documentation
- Start interviews with subject matter experts for tacit knowledge
- Organize document access

---

**Week 3-4: Structure & Partner with Developer**

**Day 15-21: Structure Definition (Step 4) - YOUR PRIMARY WORK**
- Create hierarchical organization
- Write FAQs (Q&A pairs)
- Document procedures (step-by-step)
- Create rubrics (scoring criteria)
- Build templates (output formats)
- Annotate examples (good/bad with explanations)

**This is hard work. Budget 20-30 hours for first agent.**

**Day 22-28: Developer Partnership Begins**
- Share structured context with Developer
- Developer builds infrastructure and integrations
- You prepare validation plan (Step 5)

---

**Week 5-8: Rapid Iteration**

**Daily rhythm: 10-20 iteration cycles**
1. Developer implements context
2. You test with real scenarios
3. See problems (wrong answer, incomplete, tone off)
4. Identify what context is missing
5. Explain to Developer: "It's missing X edge case" or "Rubric needs clarification on Y"
6. Developer updates
7. You test again

**This cycle happens in MINUTES, not weeks.**

**Track accuracy:**
- Week 5: ~70-85% (normal starting point)
- Week 6: ~80-88% (improving)
- Week 7: ~88-93% (getting close)
- Week 8: ~95%+ (target achieved)

**Validation phases:**
- Weeks 5-6: You review 100% of outputs
- Weeks 7-8: Sample 30% of outputs
- Week 9+: Exception review only

---

**Week 9-10: Deployment & Handoff**

**Prepare for deployment:**
- Document validation process for ongoing monitoring
- Train end users (how to use agent, when to escalate)
- Establish feedback channel (how users report issues)
- Create context update process (how you'll maintain quality as policies change)

**Measure success:**
- Time savings: Before vs after
- Accuracy: % of outputs that are correct
- Coverage: % of questions/tasks handled autonomously
- User satisfaction: Rating from end users

**Celebrate!** You just built a production-ready AI agent that creates measurable value.

---

## Common Agent Manager Challenges & Solutions

**Challenge 1: "I don't know how to start the process map"**

**Solution:**
- Start by listing the last 20 questions/requests you handled in your domain
- Group them into categories (this becomes your process structure)
- For each category, document: What question was asked → What I did to answer → How long it took
- Show to colleague: "Does this match how you handle it?"
- That's your process map

---

**Challenge 2: "I can't document everything - there's too much tacit knowledge"**

**Solution:**
- You don't need to document everything upfront (that's the Level 3 trap!)
- Start with basics: FAQ top 10 questions, core policies, common procedures
- Build → Test → Bad result reveals missing knowledge
- Add that knowledge to context → Test again
- Through 200+ iterations, tacit knowledge surfaces naturally
- Remember: Developer partner is there daily to help you iterate

---

**Challenge 3: "How detailed should my rubrics be?"**

**Solution:**
- Each score (1-5) needs clear definition with specific behaviors
- Good rubric example:
  - 5: Deep discovery questions, uncovers pain, understands full context, asks follow-ups
  - 3: Surface-level questions, basic needs identified, limited probing
  - 1: Little to no discovery, assumes needs, jumps to pitch
- Include: What evidence to look for (specific quotes, behaviors)
- Test: Can two people score the same scenario consistently? If yes, rubric is good.
- See S3 Sales Call Analyzer example for detailed rubric

---

**Challenge 4: "Accuracy is stuck at 80%, can't get to 95%"**

**Solution:**
- Review your rubrics: Are they specific enough? Vague = inconsistent AI behavior
- Check examples: Do you have 3-5 good + 3-5 bad, annotated with explanations?
- Look for missing edge cases: What scenarios haven't you documented?
- Add validation rules: When should AI say "I'm not sure, let me escalate"?
- Increase iterations: Complex domains may need 300+ cycles (not just 200)
- Ask Developer: "Is there a technical limitation or is this context quality?"

---

**Challenge 5: "Developer wants to gatekeep - I have to request every context change"**

**Solution:**
- Reference F2 partnership model: Agent Manager should have autonomy to update context
- Request: "Can you set up the system so I can edit context and test immediately?"
- Frame: "We need 10-20 cycles/day. If I wait for you each time, we can only do 2-3."
- Escalate to AI Champion if Developer continues gatekeeping
- Good setup: You edit files with context → System auto-updates → You test immediately

---

**Challenge 6: "I don't have time for this - my day job is too busy"**

**Solution:**
- Agent Manager should be 50-100% of your role (not 10%)
- The goal is to automate your day job (or parts of it), freeing you for higher-value work
- Frame to manager: "I'm investing 6-10 weeks to reclaim 15-20 hours/week ongoing"
- ROI is real: HR example saved 18 hrs/week ($99K/year)
- After first agent, you'll be more efficient: Patterns reusable, methodology familiar
- Consider: Is this a staffing issue? Should you be backfilled?

---

## Key Relationships

**With Your Developer Partner:**
- **Daily:** Iteration cycles (10-20 per day during active development)
- **You provide:** Process knowledge, context, validation, identification of gaps
- **They provide:** Infrastructure, integration, deployment, technical implementation
- **Success:** Co-located (sit together), fast communication, shared goal of 95%+ accuracy

**With AI Champion:**
- **Weekly:** Progress updates, blockers, learnings
- **You request:** Training, best practice sharing, Developer support if issues
- **They provide:** Context quality review, connection to other Agent Managers, strategic guidance
- **Success:** They celebrate your wins, share your patterns across org

**With End Users (Your Department):**
- **Initially:** Gather examples, interview for tacit knowledge
- **During validation:** They test outputs, provide feedback
- **After deployment:** They use agent, report issues, celebrate time savings
- **Success:** High satisfaction (4.5+/5), adoption (80%+ of team using), feedback channel established

**With Your Manager:**
- **Upfront:** Secure 50-100% time allocation for Agent Manager role
- **Monthly:** Report ROI (time saved, quality improved), progress toward 95%
- **After deployment:** Demonstrate value, request next project or team expansion
- **Success:** Manager sees measurable impact, supports continued investment

---

## Success Metrics for Agent Managers

**Process Documentation (Weeks 1-2):**
- Process map complete and validated by team
- Data requirements comprehensive (facts, guidelines, examples, context)
- Sources mapped (systems, documents, people)
- Gaps identified and documented

**Context Quality (Weeks 3-4):**
- Structured hierarchically (topics → subtopics → details)
- FAQs comprehensive (top questions answered)
- Procedures detailed (step-by-step with edge cases)
- Rubrics specific (1-5 scale with clear definitions and evidence)
- Examples annotated (good/bad with explanations of why)

**Iteration Velocity (Weeks 5-8):**
- 10-20 feedback cycles per day during active development
- Turnaround time: < 1 hour from problem identified to fix tested
- Communication: Daily sync with Developer (in-person or video)

**Accuracy Progression (Weeks 5-10):**
- Week 5: 70-85% (baseline)
- Week 7: 85-92% (improvement)
- Week 9: 95%+ (target)

**Deployment Success (Week 10+):**
- User satisfaction: 4.5+ / 5
- Coverage: 80%+ of target tasks automated
- Time savings: Track actual hours saved per week
- Maintenance: Clear process for context updates as policies change

---

## After Your First Agent: What's Next

**Immediately:**
- Document lessons learned (what worked, what you'd do differently)
- Share patterns with other Agent Managers (via AI Champion)
- Celebrate with your team (show them the impact)

**Within 30 days:**
- Identify second agent opportunity in your domain
- Reuse context patterns from first agent (FAQs, rubrics, examples structure)
- Estimate: Should be 30-40% faster than first agent (you know the methodology)

**Within 90 days:**
- Consider: Are you ready for multi-agentic system? (Complex workflow breakdown)
- Train: Help new Agent Manager in different department (share your experience)
- Optimize: Improve first agent based on usage patterns and feedback

**Career Development:**
- Position: Agent Manager is a strategic role (not just operational)
- Growth: Path to lead Agent Manager, AI Champion, or Chief AI Officer
- Impact: You're building organizational capability, not just individual agents
- Value: Your domain expertise + context engineering skill is increasingly rare and valuable

---

## Related Resources

**Core Curriculum:**
- F1: Five Levels Framework (iteration economics)
- F2: Organization Structure (your role definition and partnership model)
- S3: Managing AI (your primary curriculum - context engineering methodology)

**Examples to Study:**
- S3 Part 3: HR Onboarding, Sales Call Analyzer, Marketing Content Quality (real context engineering examples)
- Use cases: Level 3 to 4 patterns (`resources/use_cases_level_3_to_4.md`)
- Economics: ROI case studies (`resources/economics/`)

**Tools to Learn:**
- Cursor IDE: https://cursor.sh (Level 3.5 prototyping)
- Claude Code: https://claude.com/claude-code (Level 3.5 prototyping)
- Time investment: 15 hours to proficiency

**Community:**
- Connect with other Agent Managers in your organization
- Share context patterns (rubric templates, example formats)
- Learn from their wins and challenges
