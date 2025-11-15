# S3: Managing AI

**Course:** Skills
**Duration:** 25 minutes
**Prerequisites:** F1 (Five Levels Framework), F2 (Organization Structure), S1 (Choosing AI Technology), S2 (Understanding Agents)

---

## Why This Matters

You understand the Five Levels Framework. You know when to build custom agentic AI. You've learned what makes AI "agentic."

But here's the fundamental shift that most executives miss:

**Business used to be about managing people. Now it includes managing AI.**

Success in managing AI requires:
- Understanding AI capabilities and limitations
- Having empathy for how AI works
- Knowing how to communicate clearly with AI
- Defining quality standards and evaluation criteria
- Managing the iteration process to reach reliability

**This module teaches you HOW to manage AI effectively** - from building simple agents yourself (Level 3.5) to context engineering methodology to scaling with multi-agentic systems.

---

## Learning Objectives

After completing this module, you will be able to:

1. Explain the paradigm shift from managing people to managing AI
2. Identify Level 3.5 tools (Cursor, Claude Code) that enable non-technical building
3. Distinguish when Agent Managers can build alone vs when to involve Developers
4. Apply the 5-step context engineering methodology to any business process
5. See how context engineering works across different departments (HR, Sales, Marketing)
6. Understand when and how to break complex workflows into multi-agentic systems
7. Recognize what non-technical domain experts can build vs what requires developers

---

## Connection to Bigger Picture

**From F1 (Five Levels Framework):**
- You learned Level 4 is defined by rapid iteration (10-20 cycles/day, 200+ iterations)
- You know context engineering quality determines AI performance

**From F2 (Organization Structure):**
- You learned about the Agent Manager role (domain experts who document processes)
- You saw the Agent Manager + Developer partnership enables rapid iteration

**From S1 (Choosing AI Technology):**
- You understand when to build custom agentic AI vs use existing tools
- You know context engineering gives you advanced control

**From S2 (Understanding Agents):**
- You know agents have four components (LLM, Tools, Memory, Autonomy)
- You can evaluate if solutions are truly "agentic"

**This Module Adds:**
- **HOW** to manage AI (the reframe from managing people)
- **WHAT** tools enable non-technical building (Level 3.5)
- **HOW** to do context engineering (5-step methodology with examples)
- **WHEN** to scale to multi-agentic systems
- **WHO** can build what (Agent Manager vs Developer responsibilities)

---

## 1. The Management Shift: People → AI

### The Fundamental Reframe

**Traditional Management:**
- Hiring the right people
- Training and developing talent
- Setting clear expectations
- Providing feedback
- Managing performance
- Building team culture

**AI-Era Management Additions:**
- Choosing the right AI models and tools
- Training AI through context and iteration
- Setting clear instructions and evaluation criteria
- Providing feedback through validation loops
- Managing AI performance and quality
- Building AI + human collaboration

### What Makes Managing AI Different

**Managing People:**
- Communication: Natural language with context and nuance
- Learning: Adaptive, can infer from limited examples
- Quality: Improves with experience and coaching
- Initiative: Can recognize when rules don't apply
- Feedback: One conversation can change behavior
- Reliability: Generally consistent within their expertise

**Managing AI:**
- Communication: Clear instructions, structured context required
- Learning: Needs explicit examples and rules
- Quality: Improves through iteration volume (200+ cycles)
- Initiative: Follows patterns, struggles with true exceptions
- Feedback: Requires many cycles to refine behavior
- Reliability: Starts 60-70%, reaches 95%+ through iteration

### The Success Factors for Managing AI

**1. Understanding Capabilities**
- Know what AI can and can't do
- Recognize when to use AI vs human judgment
- Set realistic expectations for performance

**2. Empathy for Limitations**
- AI isn't human - it follows patterns
- Can confidently give wrong answers (hallucination)
- Needs verification mechanisms
- Struggles with true novel problems

**3. Clear Communication**
- Provide structured context (not assumptions)
- Define evaluation criteria explicitly
- Give examples of good/bad outcomes
- Document edge cases and exceptions

**4. Quality Standards**
- Define what "good" looks like (scoring rubrics)
- Establish validation processes
- Track errors and categorize them
- Create feedback loops for improvement

**5. Iteration Management**
- Embrace that first version is 60-70% accurate
- Plan for 200+ iterations to reach 95%+
- Enable rapid feedback cycles (10-20/day)
- Celebrate progress, not perfection on day 1

### Why This Matters

**Old mindset:** "I'll hire an AI expert to handle this"
**New reality:** "I need to learn how to manage AI, just like I learned to manage people"

Domain experts (Agent Managers) who understand their processes deeply are BETTER at managing AI for their domain than AI experts who don't understand the business.

**The skill isn't coding - it's process understanding + clear communication + iteration discipline.**

---

## 2. Level 3.5: Tools for Non-Technical Building

### What is Level 3.5?

**The Bridge Level Most Companies Miss**

Level 3.5 sits between:
- **Level 3:** No-code platforms (Make.com, Zapier) with slow iteration
- **Level 4:** Custom agents built by developers with rapid iteration

**Level 3.5 Tools:** Cursor IDE, Claude Code

**What makes them special:**
- Build automations using natural language (not syntax)
- Direct file manipulation (create, edit, delete files automatically)
- Massive context windows (200,000 tokens = entire projects)
- Extended autonomy (plans multi-step workflows)
- Perfect for individual/team productivity

### The Revolutionary Workflow

**Old way (Level 3 platforms):**
1. Want to build automation in Make.com
2. Spend 50+ hours learning Make.com syntax
3. Manually configure nodes, connections, logic
4. Debug when it breaks (hard without deep understanding)
5. Time investment: 140+ hours to learn specialized tools

**New way (Level 3.5 agentic tools):**
1. Open Claude Code or Cursor
2. Provide platform documentation as context
3. Describe what you want in plain English: "Create a workflow that monitors our support inbox, categorizes requests by urgency using our rubric, and creates tasks in our project management system"
4. The tool builds the configuration for you
5. Give feedback: "Make the urgency detection more sensitive to customer tier"
6. Iterate in natural language
7. Time investment: 15 hours to learn ONE interface that works with ALL tools

**What just happened:**
- You built a Level 3 solution
- Without learning Level 3 syntax
- With full iteration capability
- While learning what AI can do through building

### Chat vs Agentic Tools: The Paradigm Shift

| Dimension | ChatGPT/Claude Web (Chat) | Cursor/Claude Code (Level 3.5) |
|-----------|---------------------------|--------------------------------|
| **Interaction Model** | Reactive - waits for each prompt | Autonomous - works toward goals |
| **File Operations** | Suggests code - you copy/paste | Directly creates, modifies, deletes files |
| **Context Window** | Limited to conversation | 200,000 tokens (entire projects) |
| **Memory** | Forgets when session ends | Persistent project awareness |
| **System Integration** | None - isolated responses | Connects to git, APIs, terminal, docs |
| **Thinking Mode** | Immediate response | Extended reasoning with self-reflection |
| **Initiative** | Answers questions | Plans multi-step workflows |
| **Error Handling** | Tells you what's wrong | Detects and fixes its own mistakes |
| **Learning Curve** | Immediate use | 10-15 hours to proficiency |
| **Business Use** | Individual brainstorming | Workflow automation, system building |

### Real Business Applications (Beyond Code)

**These tools aren't "for developers" - they're for everyone**

**Documentation & Knowledge Management**
- Analyze scattered blog posts to create editorial style guides
- Feed 50 blog posts → Tool identifies patterns in voice, grammar, formatting
- Who: Content managers, technical writers

**Content Creation & Strategy**
- Generate quarterly content calendars based on past performance
- Provide past content + analytics → Tool suggests topics, structures, schedules
- Who: Marketing managers, content strategists

**Project Management**
- Build custom task tracking, roadmaps, status dashboards
- Describe requirements → Tool builds tracking system
- Who: Project managers, team leads

**Process Documentation**
- Document complex workflows conversationally
- Talk through process → Tool creates structured SOPs
- Who: Operations managers, department heads

**Automation Building**
- Create Make.com/n8n workflows without learning their syntax
- Provide platform docs as context → Describe workflow → Tool builds configuration
- Who: Anyone who needs workflow automation

### The Redundancy Insight

**The Old Paradigm:** Learn every specialized tool
- Make.com for automations (50+ hours)
- Notion advanced features (30+ hours)
- Advanced Excel (40+ hours)
- Total: 140+ hours, knowledge becomes obsolete

**The New Paradigm:** Learn one interface that works with ALL tools
- 15 hours learning Cursor/Claude Code
- Then build with ANY platform by providing docs as context
- You've just made every specialized interface redundant

**Pattern:** Any work involving multiple files, context management, or structured workflows benefits from Level 3.5 tools.

---

## 3. Context Engineering: Teaching AI Your Expertise

### What is Context Engineering?

**Definition:** The process of breaking down workflows and preparing information so AI systems can perform work effectively

**Core Insight:** AI agents are only as good as the context you provide them

**Who Does This:** Agent Managers - process experts who understand workflows deeply

**Why It Matters:** This is the difference between Level 3 (failed no-code tools at 70% accuracy) and Level 4 (successful custom agents at 95%+ reliability)

**Key Truth:** Context engineering IS the work of AI transformation

### Why Context Engineering Requires Fast Iteration

**You CANNOT Document All Domain Expertise Upfront (The Level 3 Trap)**

Context engineering is iterative discovery, not upfront documentation:

**The Discovery Process:**
1. Build initial context based on what you think you know
2. Test AI with real scenarios
3. **See bad results** → Reveals domain knowledge you didn't know you had
4. Add missing context (validation rules, edge cases, nuances)
5. Repeat until outputs are reliable

**Level 3 Trap (External Agency):**
- You document → Send to agency → They build
- Week 2: See results → Realize critical context missing
- Contact agency → Explain gaps → Wait 1-2 weeks for next iteration
- Knowledge gets lost in translation
- After 6 months, still not production-ready

**Level 4 Advantage (Agent Manager + Developer):**
- Build → Test → See problem → Add context → Test again
- **This cycle happens in MINUTES:**
  - Agent Manager sees bad output immediately
  - Identifies missing context/validation
  - Works with developer to add it
  - Tests again within the hour
- 10-20 iteration cycles per DAY
- 200+ iterations in 6-10 weeks → production-ready

**Timeline Reality:**
- Level 3 with slow iteration: 6 months → Not ready → Abandoned
- Level 4 with fast iteration: 6-10 weeks → 95%+ reliable → Deployed

### The 5-Step Context Engineering Methodology

**Step 1: Process Mapping** - Document current workflow

**Goal:** Map out how work gets done today, step-by-step

**What to document:**
- Each step from start to finish
- Decision points and variations
- Who does what and when
- Current pain points and bottlenecks
- How long each step takes

**Output:** Clear process map showing current state

---

**Step 2: Data Identification** - List required information

**Goal:** Identify what information AI needs at each step

**Four types of information:**
- **Facts:** Objective, verifiable data (policies, numbers, dates)
- **Guidelines:** How to make decisions or evaluate situations
- **Examples:** Sample scenarios showing good/bad outcomes
- **Context:** Background information that informs reasoning

**Output:** Comprehensive list of information requirements

---

**Step 3: Source Mapping** - Identify information sources

**Goal:** Map each information requirement to its source

**Three source categories:**
- **Systems:** APIs, databases, business tools (CRM, HRIS, wikis)
- **Documents:** Files, handbooks, procedures
- **People:** Subject matter experts with tacit knowledge

**Common discovery:** Gaps where information should exist but doesn't

**Output:** Source map connecting requirements to origins

---

**Step 4: Structure Definition** - Organize for AI consumption

**Goal:** Transform raw information into AI-usable formats

**Five key formats:**
- **FAQs:** Question-answer pairs for common scenarios
- **Procedures:** Step-by-step instructions with decision logic
- **Rubrics:** Evaluation criteria with scoring guidelines
- **Templates:** Structured formats for outputs
- **Examples:** Annotated good/bad examples with explanations

**Organization strategy:**
- Create hierarchical structure (topics → subtopics → details)
- Link related information together
- Ensure consistent terminology
- Cross-reference between topics

**Output:** Structured context ready for AI implementation

---

**Step 5: Validation Rules** - Verify AI performance

**Goal:** Define how to verify outputs and improve over time

**Establish:**
- Quality thresholds (e.g., 95% accuracy required)
- Human review process (initial period)
- Error tracking and categorization
- Feedback loops to improve context
- Escalation rules (when to route to humans)

**Validation phases:**
- Weeks 1-2: 100% human review before sending
- Weeks 3-4: 30% sample review
- Month 2+: Exception review only (low confidence cases)

**Output:** Validation framework and quality assurance process

---

## 4. Context Engineering Examples: Three Departments

### Example 1: HR - Onboarding Assistant

**Business Problem:**
New employees ask HR team repetitive questions throughout first weeks

**Current Process:**
1. Employee asks question (Slack, email, in-person)
2. HR person searches 3-4 systems (handbook, wiki, benefits platform)
3. Crafts customized response
4. Time: 15-20 minutes per question

**Impact:**
- Same questions by every new hire (20+ hrs/month on repetitive work)
- Inconsistent answers depending on who responds
- HR can't focus on strategic work

**Opportunity:** AI assistant to answer instantly with 95%+ accuracy
**ROI:** $99K/year in time savings

#### Context Engineering Applied:

**Step 1 - Process Mapping:**
Question categories identified:
- Benefits (health insurance, 401k, PTO policies)
- Company policies (expense reports, remote work, equipment)
- IT procedures (laptop setup, software access, VPN)
- Culture & values (traditions, team structures, communication norms)

**Step 2 - Data Identification:**
**Facts needed:**
- PTO policy: 15 days/year, accrues 1.25 days/month
- 401k matching: 100% match up to 6% of salary
- Health insurance: 3 plan options, 30-day enrollment deadline

**Guidelines needed:**
- Remote work eligibility criteria
- Expense reimbursement approval rules

**Examples needed:**
- Good expense report examples
- Common new hire mistakes to avoid

**Step 3 - Source Mapping:**
**Systems:** HRIS (BambooHR), Benefits Platform (Zenefits)
**Documents:** Employee Handbook (150 pages), Confluence Wiki
**People:** HR Business Partners (unwritten cultural knowledge)

**Gaps identified:**
- No single source for "who to ask about what"
- Benefits information scattered across 5+ documents

**Step 4 - Structure Definition:**
Hierarchical organization created:
- 1. Benefits & Compensation → 1.1 Health Insurance → Plans, Enrollment, Coverage, FAQ
- 2. Company Policies → 2.1 Expense Reimbursement → Steps, Rules, Examples

**Format examples:**
- **FAQ:** "How much PTO do I get? → 15 days/year, accrues 1.25/month, usable immediately"
- **Procedure:** "How to Submit Expense Report → 6 steps with screenshots"
- **Rubric:** "Remote Work Eligibility → Must meet ALL: Role can be remote, 90 days completed, manager approval"

**Step 5 - Validation:**
- Weeks 1-2: 100% review by HR before sending
- Weeks 3-4: 30% sample review
- Month 2+: Exception review only (AI confidence < 80%)

**Results After Implementation:**
- ✅ Accuracy: 96% (exceeded 95% target)
- ✅ Coverage: 92% of questions handled autonomously
- ✅ Response time: 15-20 min → 3 seconds average
- ✅ HR time savings: 18 hours/week reclaimed
- ✅ Consistency: 97% identical responses for same questions

---

### Example 2: Sales - Call Analyzer

**Business Problem:**
Sales managers can only review 5% of calls manually, missing coaching opportunities

**Current Process:**
1. Calls recorded but rarely reviewed
2. Managers sample 1-2 calls per rep per month
3. Feedback is inconsistent across managers
4. No structured evaluation framework applied

**Impact:**
- 95% of calls never analyzed
- Reps don't know what to improve
- Coaching quality varies by manager
- Can't identify team-wide patterns

**Opportunity:** AI to analyze 100% of calls with structured feedback
**ROI:** $141K/year in productivity improvements and faster rep development

#### Context Engineering Applied:

**Step 1 - Process Mapping:**
Three distinct phases identified:
1. Transcription & Extraction (convert audio to text)
2. Criteria Evaluation (analyze against sales methodology)
3. Report Generation (create actionable feedback)

**Step 2 - Data Identification:**
For **Evaluation phase** (the core value):

**Facts needed:**
- Company's sales methodology (MEDDIC, SPIN, Challenger, or custom)
- Product positioning and differentiators
- Typical buyer personas and concerns

**Guidelines needed:**
- 12 evaluation criteria with scoring rubrics (1-5 scale)
- Talk-to-listen ratio targets (30-40% rep, 60-70% prospect)
- What constitutes "good discovery" vs "surface-level questions"

**Examples needed:**
- 3-5 transcripts of excellent calls (annotated)
- 3-5 transcripts of poor calls (annotated)
- Specific quotes highlighting best practices
- Common mistakes to avoid

**Step 3 - Source Mapping:**
**Systems:** Call recording platform (Gong, Chorus, Zoom)
**Documents:** Sales playbook, objection handling guide, competitive battle cards
**People:** Top-performing reps (tacit knowledge about what works)

**Step 4 - Structure Definition:**
**12 Sales Evaluation Criteria organized by category:**

**Discovery & Qualification:**
1. Opening & Rapport Building
2. Discovery & Needs Assessment
3. BANT Qualification
4. Pain & Impact Exploration

**Delivery & Handling:**
5. Talk-to-Listen Ratio
6. Value Proposition Delivery
7. Objection Handling
8. Competitive Positioning

**Professionalism & Structure:**
9. Professionalism & Credibility
10. Active Listening
11. Call Control & Structure
12. Next Steps & Close

**Scoring Rubric Example (Discovery):**
- **5:** Deep questioning, uncovers pain, understands context
- **3:** Surface-level questions, basic needs identified
- **1:** Little to no discovery, assumption-based approach

**Format examples:**
- **Rubrics:** Detailed 1-5 scoring for each of 12 criteria
- **Examples:** Annotated transcripts showing good/bad discovery
- **Templates:** Consistent report format (Overview → Strengths → Improvements → Actions)

**Step 5 - Validation:**
- Month 1: Sales managers review 100% of AI evaluations
- Month 2: Calibration sessions (does AI score align with manager judgment?)
- Month 3: Spot-check 20% of reports
- Ongoing: Track score trends and correlation with deal outcomes

**Results After Implementation:**
- ✅ Coverage: 100% of calls analyzed (vs 5% manual)
- ✅ Consistency: Same criteria applied to every call
- ✅ Rep development: Specific, actionable feedback within 24 hours
- ✅ Manager time: Reclaimed 8 hours/week per manager
- ✅ Team insights: Identify patterns across 500+ calls/month

---

### Example 3: Marketing - Content Quality System

**Business Problem:**
Marketing team produces blog posts, social content, and emails with inconsistent quality and voice

**Current Process:**
1. Writers create content from templates
2. Manager reviews for brand voice, messaging, SEO
3. Feedback is subjective and time-consuming
4. Time: 30-45 min review per piece

**Impact:**
- Inconsistent brand voice across content
- Manager bottleneck (can only review 60% of content)
- Writers unclear on quality standards
- No systematic way to improve writing over time

**Opportunity:** AI quality analyzer to evaluate content against brand standards
**ROI:** $65K/year in manager time + improved content consistency

#### Context Engineering Applied:

**Step 1 - Process Mapping:**
Content workflow:
1. Writer drafts content from brief
2. Self-review against checklist
3. Submit to manager for review
4. Manager evaluates quality, gives feedback
5. Writer revises based on feedback
6. Approval and publish

Pain points: Subjective feedback, unclear standards, manager bottleneck

**Step 2 - Data Identification:**
**Facts needed:**
- Brand messaging pillars
- Target audience personas
- SEO keyword requirements
- Content format specifications

**Guidelines needed:**
- Brand voice characteristics ("authoritative but approachable")
- Messaging do's and don'ts
- Content structure best practices
- Quality thresholds for publication

**Examples needed:**
- 10-15 excellent blog posts (annotated: what makes them good)
- 5-8 poor examples (annotated: what went wrong)
- Before/after revision examples

**Step 3 - Source Mapping:**
**Systems:** CMS (WordPress, HubSpot), Analytics (Google Analytics)
**Documents:** Brand guidelines, editorial style guide, content templates
**People:** Head of Content (tacit knowledge about what resonates)

**Gaps identified:**
- Brand voice guide exists but is vague ("be conversational")
- No documented examples of good/bad applications
- Quality criteria lived only in manager's head

**Step 4 - Structure Definition:**
**Content Evaluation Framework (8 criteria):**

**Brand Voice (1-5 scale):**
- Tone consistency
- Messaging alignment
- Audience appropriateness

**Content Quality (1-5 scale):**
- Clear value proposition
- Logical structure
- Evidence and examples
- Actionable takeaways

**Technical Quality (1-5 scale):**
- Grammar and clarity
- SEO optimization
- Readability (Flesch score target: 60-70)

**Scoring Rubric Example (Brand Voice):**
- **5:** Perfectly embodies brand voice, could be used as example
- **3:** Mostly aligned, minor tone inconsistencies
- **1:** Off-brand, requires major rewrite

**Format examples:**
- **Rubrics:** Detailed scoring for 8 criteria
- **Examples:** 15 annotated blog posts (what makes each section work/not work)
- **Templates:** Feedback report format (Score → Evidence → Specific improvements)
- **Guidelines:** "Authoritative but approachable" = technical accuracy + conversational tone + analogies

**Step 5 - Validation:**
- Month 1: AI evaluates, manager reviews AI's evaluation before sharing with writer
- Month 2: Compare AI scores to manager's independent scores (calibration)
- Month 3: AI provides evaluation directly to writers, manager spot-checks 30%
- Ongoing: Track correlation between AI scores and content performance

**Results After Implementation:**
- ✅ Review time: 30-45 min → 8 min per piece (manager validates AI evaluation)
- ✅ Coverage: 100% of content evaluated (vs 60% manual)
- ✅ Consistency: Same standards applied to every piece
- ✅ Writer development: Specific, actionable feedback every time
- ✅ Brand voice consistency: Improved by 40% (measured through audit)

---

### Common Patterns Across Departments

**What We See:**

**1. The Hidden Complexity**
- HR: Tacit knowledge about "who to ask about what" wasn't documented
- Sales: What makes "good discovery" was in top reps' heads, not playbook
- Marketing: Brand voice was vague, needed concrete examples

**→ Context engineering forces explicit documentation of tacit knowledge**

**2. The Iteration Discovery**
- All three started at 70-85% accuracy
- Reached 95%+ through 200+ iterations revealing edge cases
- Fast iteration was critical - weekly changes vs monthly would have failed

**→ You can't predict all context needs upfront**

**3. The Format Pattern**
- All three used: Rubrics (evaluation criteria), Examples (annotated good/bad), Templates (consistent outputs)
- Hierarchical organization critical (topics → subtopics → details)

**→ Structured context is AI's fuel**

**4. The Validation Progression**
- All started with 100% human review
- Moved to sampling after calibration
- Ended with exception-only review

**→ Trust builds through validation, not faith**

**5. The ROI Reality**
- HR: $99K/year (18 hrs/week reclaimed)
- Sales: $141K/year (manager time + faster rep development)
- Marketing: $65K/year (manager time + consistency improvements)

**→ Time savings are real, measurable, and significant**

---

## 5. Multi-Agentic: When to Scale Complexity

### Beyond Single-Agent Solutions

**Single-Agent Solutions:**
- One AI agent handles complete task
- Unified context and workflow
- Examples: HR Q&A, IT Support, Product Knowledge

**Multi-Agentic Solutions:**
- Complex process broken into specialized sub-processes
- Each subprocess has distinct requirements
- Sub-processes work together sequentially or in parallel

**When to Break Down:**
- Distinct phases require different tools
- Different types of context needed at each stage
- You want to reuse sub-processes across solutions

**Key Insight:** We're not focused on complex orchestration - we're showing how to think about process breakdown

### Example: Sales Call Analyzer (Multi-Agentic)

**Why Multi-Agentic:**
Process involves distinct sub-processes with different requirements

**Subprocess 1: Transcription & Extraction**
- **Purpose:** Convert audio to text
- **Tools:** Speech-to-Text API (Whisper, Deepgram), Audio Storage
- **Workflow:** Retrieve recording → Transcribe → Identify speakers → Clean transcript
- **Context:** Company glossary, speaker patterns
- **Output:** Clean transcript with timestamps

**Subprocess 2: Criteria Evaluation** (The Core Value)
- **Purpose:** Analyze conversation against sales methodology
- **Tools:** **None** - This is pure AI reasoning
- **Workflow:** Load framework → Analyze for each criterion → Find evidence → Score → Identify patterns
- **Context:** Sales methodology, 12 scoring rubrics, annotated call examples
- **Output:** Scores (1-5) for 12 criteria + evidence quotes

**Subprocess 3: Report Generation**
- **Purpose:** Create actionable feedback report
- **Tools:** Report template, CRM Integration, Communication platform (Slack)
- **Workflow:** Format findings → Prioritize improvements → Generate actions → Log to CRM → Deliver
- **Context:** Report template, action item library, notification rules
- **Output:** Formatted report + CRM record + Notifications

**Why This Breakdown Was Necessary:**
- Transcription requires specialized tools (not AI reasoning)
- Evaluation requires deep sales context (different from audio processing)
- Report generation requires CRM integration and formatting logic
- Each phase can be improved independently

### When to Break Into Multiple Subprocesses

**Use Single Agent When:**
- Process is straightforward (Q&A, lookup, single evaluation)
- One type of work (all reasoning, OR all data retrieval, OR all formatting)
- Context is unified (doesn't require separate domains)

**Break Into Subprocesses When:**
- Process has distinct phases with different requirements
- Different tools or systems needed at different stages
- Different types of context required (technical specs vs business rules)
- You want to reuse subprocesses across solutions

**Key Principle:** Complexity should match the problem - don't over-engineer

### Planning Your Multi-Agentic Solution

**For Each Subprocess, Document:**

**1. Purpose** - What is this subprocess trying to accomplish?
**2. Tools** - What external systems, APIs, or platforms does it need?
**3. Workflow** - What are the step-by-step actions it takes?
**4. Context** - What knowledge, rules, examples, or frameworks does it need?
**5. Output** - What does it produce that feeds the next subprocess?

**What NOT to Worry About:**
- ❌ How subprocesses communicate (Developer handles orchestration)
- ❌ Complex orchestration patterns (keep it simple: linear flow when possible)
- ❌ Technical implementation details (that's Developer's domain)

**What TO Focus On:**
- ✅ Clear subprocess boundaries (where one ends, next begins)
- ✅ Complete context for each subprocess (especially evaluation/analysis)
- ✅ Quality of frameworks and evaluation criteria
- ✅ Well-defined outputs that next subprocess can use

**Your role as Agent Manager: Define WHAT each subprocess needs. Developer handles HOW.**

---

## 6. What Non-Technical Teams Can Do vs When to Involve Developers

### Level 3.5: What Agent Managers Can Build Alone

**Tools:** Cursor IDE, Claude Code

**Capability Range:**
- Simple to medium complexity agents
- File-based work and documentation systems
- Workflow automations (Make.com, n8n configurations)
- Content generation and analysis systems
- Process documentation and knowledge management

**Real Examples Agent Managers Can Build:**

**1. Documentation Systems**
- Analyze scattered content to create style guides
- Build knowledge bases from existing documents
- Create SOPs from conversational process descriptions

**2. Content & Analysis**
- Content quality evaluators (like Marketing example)
- Research synthesis across documents
- Quarterly planning based on historical data

**3. Simple Workflow Automation**
- Build Make.com/n8n workflows in natural language
- Create monitoring and notification systems
- Automate reporting from spreadsheets

**4. Project & Knowledge Management**
- Custom task tracking systems
- Status dashboards
- FAQ systems from existing documentation

**Time Investment:** 15 hours to learn tools + ongoing building

**Limitations:**
- Individual/team productivity (not enterprise-wide deployment)
- File-based work (limited system integration)
- No production deployment to hundreds of users

---

### When to Involve Developer: Complex Integrations

**Bring in Developer When You Need:**

**1. Deep System Integration**
- Custom API connections to HRIS, CRM, databases
- Real-time data fetching from business systems
- Two-way sync (not just read, but write to systems)
- Example: HR assistant pulling from BambooHR + Zenefits

**2. Multi-Agentic Architectures**
- Breaking complex workflows into specialized agents
- Orchestrating subprocesses to work together
- Example: Sales Call Analyzer (3 subprocesses)

**3. Production Deployment at Scale**
- Deploying to hundreds/thousands of users
- Enterprise-grade reliability and security
- Monitoring, error handling, logging
- Example: Company-wide customer support agent

**4. Advanced Capabilities**
- Reflection strategies (AI verifying its own outputs)
- Multi-step reasoning with verification loops
- Custom tools for specialized tasks
- Example: Complex eligibility calculations with edge case handling

**5. Performance Optimization**
- Cost optimization (choosing right models for tasks)
- Speed optimization (caching, parallel processing)
- Reliability improvements (fallback strategies)

---

### The Partnership Model: Agent Manager + Developer

**Agent Manager Responsibilities:**
1. **Process Mapping:** Document current workflow
2. **Context Engineering:** Create rubrics, examples, guidelines (5-step methodology)
3. **Validation:** Test outputs, identify errors, provide feedback
4. **Iteration:** See bad results → explain what's missing → test again
5. **Quality Ownership:** Define what "good" looks like

**Developer Responsibilities:**
1. **Infrastructure:** Build agent framework and integrations
2. **Tool Creation:** Custom tools for specific actions
3. **Orchestration:** Connect subprocesses in multi-agentic systems
4. **Deployment:** Production-ready reliability and scale
5. **Technical Optimization:** Performance, cost, security

**Why This Partnership Works (Level 4 Success):**
- **Co-located:** Sit together, fast communication
- **Rapid iteration:** 10-20 cycles per day during active development
- **Domain + technical:** Agent Manager knows process, Developer knows AI architecture
- **Continuous improvement:** After deployment, Agent Manager updates context, Developer deploys changes

**The Failure Pattern (Level 3 Trap):**
- Agent Manager tries to document everything → Sends to external agency → Waits weeks for iteration
- Knowledge lost in translation
- Slow feedback kills momentum
- Result: 6 months → Not production-ready → Abandoned

**The Success Pattern (Level 4):**
- Agent Manager + Developer build together
- Test → See problem → Add context → Test again (minutes, not weeks)
- 200+ iterations in 6-10 weeks
- Result: Production-ready with 95%+ reliability

---

### Decision Framework: Build Alone vs Involve Developer

**Build with Level 3.5 Tools (Alone) When:**
- ✓ Individual or small team productivity
- ✓ File-based work, documentation, content analysis
- ✓ Learning what AI can do through building
- ✓ Prototyping before full development
- ✓ No deep system integration needed

**Involve Developer When:**
- ✓ Enterprise-wide deployment (hundreds of users)
- ✓ Deep system integration (APIs, databases, real-time data)
- ✓ Multi-agentic architecture required
- ✓ Production-grade reliability critical
- ✓ Advanced capabilities (reflection, verification loops)

**Hybrid Approach (Recommended):**
1. **Agent Manager** builds prototype with Level 3.5 tools
2. Proves the value, defines requirements, creates initial context
3. **Bring in Developer** to build production version with integrations
4. **Agent Manager** continues owning context and validation
5. **Partnership** iterates to 95%+ reliability

**If You Have No Technical Team:**
- **Start:** Prototype with Level 3.5 tools (Cursor, Claude Code)
- **Prove value:** Document ROI and requirements
- **Then hire:** One Developer who can partner with Agent Managers
- **Scale:** Add more Agent Managers (promote domain experts)

---

## Summary

**The Management Shift:**
- Business used to be about managing people → Now includes managing AI
- Success requires: understanding capabilities, empathy for limitations, clear communication, quality standards, iteration discipline
- Domain experts (Agent Managers) can manage AI for their domain

**Level 3.5 Tools:**
- Cursor IDE, Claude Code enable non-technical building
- Build automations in natural language (not syntax)
- 15 hours to learn one interface that works with ALL tools
- Perfect for individual/team productivity and prototyping

**Context Engineering (5 Steps):**
1. **Process Mapping** - Document workflow
2. **Data Identification** - List required information (facts, guidelines, examples)
3. **Source Mapping** - Identify where information lives (systems, documents, people)
4. **Structure Definition** - Organize for AI (FAQs, procedures, rubrics, templates, examples)
5. **Validation Rules** - Verify performance and improve over time

**Department Examples:**
- **HR:** Onboarding assistant ($99K/year, 96% accuracy, 18 hrs/week reclaimed)
- **Sales:** Call analyzer ($141K/year, 100% coverage vs 5% manual, consistent coaching)
- **Marketing:** Content quality system ($65K/year, 100% coverage vs 60%, 40% brand voice improvement)

**Multi-Agentic:**
- Break complex processes into specialized subprocesses
- Each subprocess has distinct: Purpose, Tools, Workflow, Context, Output
- Use when phases have different requirements
- Don't over-engineer - complexity should match the problem

**What Non-Tech Can Do:**
- **Level 3.5 alone:** File-based work, documentation, simple automations, prototyping
- **Involve Developer:** Deep integration, multi-agentic, production deployment, advanced capabilities
- **Partnership model:** Agent Manager (context + validation) + Developer (infrastructure + deployment) = Level 4 success

**Key Insight:**
Managing AI isn't a technical skill - it's process understanding + clear communication + iteration discipline. Domain experts who learn to manage AI are more valuable than AI experts without domain knowledge.

---

## Interactive Wrap-Up

**Self-Assessment: Your Readiness**

**Understanding:**
- Can you explain the shift from managing people to managing AI?
- Do you know the 5 steps of context engineering?
- Can you identify when to use Level 3.5 tools vs involve a Developer?

**Application:**
- What process in your department could benefit from context engineering?
- What type of agent is it? (Static info, Dynamic content, or Workflow analyzer)
- Do you have the source material? (Systems, documents, people with tacit knowledge)

**Planning:**
- Who would be the Agent Manager for this process? (Domain expert who knows workflow)
- Is this Level 3.5 scope (files/docs) or Developer scope (integrations/scale)?
- What would your first 5 iterations focus on? (Start narrow, expand)

**Action Items:**
1. Choose ONE process to apply context engineering
2. Document Step 1 (Process Mapping) for that process
3. If Level 3.5 scope: Start learning Cursor or Claude Code (15 hrs)
4. If Developer scope: Draft requirements and ROI case for stakeholders
5. Identify potential Agent Manager (yourself or domain expert on team)

---

## What's Next

**For Executives:**
- You understand the full transformation picture
- Review F2 (Organization Structure) to plan team composition
- Consider economics deep dives for ROI modeling

**For AI Champions:**
- You have the complete methodology
- Start with one department pilot (HR, Sales, or Marketing)
- Build Agent Manager + Developer partnership
- Track iterations and document learnings

**For Agent Managers:**
- You're ready to start building
- Begin with Level 3.5 tools for prototyping
- Apply 5-step methodology to your first process
- Focus on quality of context (rubrics, examples, structure)

**For Developers:**
- You understand the Agent Manager partnership
- Learn how to build rapid iteration environments
- Study multi-agentic architectures for complex workflows
- Focus on enabling Agent Manager autonomy (not gatekeeping)

---

## Related Resources

**From Other Modules:**
- F1: Five Levels Framework (understanding Level 4 rapid iteration)
- F2: Organization Structure (Agent Manager + Developer roles and partnership)
- S1: Choosing AI Technology (when to build custom agentic AI)
- S2: Understanding Agents (four components: LLM, Tools, Memory, Autonomy)

**Deep Dive Materials:**
- Economics: ROI case studies for HR, Sales, Marketing agents (`resources/economics/`)
- Use Cases: Level 3 to 4 examples showing iteration patterns (`resources/use_cases_level_3_to_4.md`)
- Glossary: Definitions of context engineering, Level 3.5, multi-agentic (`resources/glossary.md`)

**Tools to Explore:**
- Cursor IDE: https://cursor.sh (Level 3.5 agentic code editor)
- Claude Code: https://claude.com/claude-code (Level 3.5 agentic assistant)
- Documentation: Both tools have extensive docs for getting started
