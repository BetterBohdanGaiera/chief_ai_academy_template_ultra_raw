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
- You learned Level 4 is defined by rapid iteration (1-3 cycles/day, 20 iterations over 2-3 weeks)
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
- Quality: Improves through iteration volume (20 cycles)
- Initiative: Follows patterns, struggles with true exceptions
- Feedback: Requires many cycles to refine behavior
- Reliability: Starts 60%, reaches 95%+ through iteration

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
- Embrace that first version is 60% accurate
- Plan for 20 iterations to reach 95%+
- Enable rapid feedback cycles (1-3/day)
- Celebrate progress, not perfection on day 1

### Why This Matters

**Old mindset:** "I'll hire an AI expert to handle this"
**New reality:** "I need to learn how to manage AI, just like I learned to manage people"

Domain experts (Agent Managers) who understand their processes deeply are BETTER at managing AI for their domain than AI experts who don't understand the business.

**The skill isn't coding - it's process understanding + clear communication + iteration discipline.**

---

## 2. Agentic Development Tools: How Non-Technical Experts Can Build

One of the biggest barriers to Level 4 used to be: "I don't have a developer."

That barrier is dissolving. New agentic development tools (Cursor IDE, Claude Code) enable domain experts to build automations using natural language instead of code.

**This isn't a new level - it's a new PATH to Level 4.**

These tools enable the same rapid iteration capability (1-3 cycles/day) that defines Level 4, but without requiring a dedicated developer for simple use cases.

**The Tools:** Cursor IDE, Claude Code

**What makes them special:**
- Build automations using natural language (not syntax)
- Direct file manipulation (create, edit, delete files automatically)
- Massive context windows (200,000 tokens = entire projects)
- Extended autonomy (plans multi-step workflows)
- Perfect for individual/team productivity and prototyping

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

## 3. Teaching AI Your Expertise: The Process Documentation Framework

### What is Process Documentation for AI and Why It Matters

Teaching AI your expertise (also called "context engineering") is the process of documenting your domain knowledge so AI can perform work effectively. It's the difference between {{kc:level_3_no_code_automation:inline}} (70% accuracy, abandoned) and {{kc:level_4_iterative_agents:inline}} (95%+ reliability, deployed).

**Core Insight:** AI agents are only as good as the context you provide them.

**Who Does This:** Agent Managers (from {{kc:four_roles_framework:inline}}) - process experts who understand workflows deeply

**Key Truth:** Context engineering IS the work of AI transformation.

### Why Context Engineering Requires Fast Iteration

**You CANNOT Document All Domain Expertise Upfront**

This is the core insight of {{kc:iteration_economics:inline}}:

{{kc:iteration_economics:summary}}

**The Discovery Process:**
1. Build initial context based on what you think you know
2. Test AI with real scenarios
3. **See bad results** → Reveals domain knowledge you didn't know you had
4. Add missing context (validation rules, edge cases, nuances)
5. Repeat until outputs are reliable

**{{kc:level_3_trap_story:inline}} Pattern:**
- You document → Send to agency → They build
- Week 2: See results → Realize critical context missing
- Contact agency → Explain gaps → Wait 1 week for next iteration
- Knowledge gets lost in translation
- After 5+ months, still not production-ready (often abandoned)

**Level 4 Advantage ({{kc:four_roles_framework:inline}} partnership):**
- Build → Test → See problem → Add context → Test again
- **This cycle happens in MINUTES:**
  - Agent Manager sees bad output immediately
  - Identifies missing context/validation
  - Works with developer to add it
  - Tests again within the hour
- 1-3 iteration cycles per DAY
- 20 iterations in 2-3 weeks → production-ready

---

### What Teaching AI Looks Like - Before/After Examples

Before diving into the methodology, let's see what the difference between vague and structured context actually looks like.

#### Example 1: HR Policy Question (Before/After)

**BEFORE - Vague Context:**
```
Task: Answer employee questions about PTO policy.
```

**AI Output:**
"Employees can take 15 days of PTO per year. You need manager approval."

**Problem:**
- ❌ Doesn't account for probation period exceptions
- ❌ Doesn't explain carryover rules
- ❌ Doesn't cover partial-year hires
- ❌ Doesn't specify advance notice requirements

**Employee Reaction:** "This didn't answer my actual question - I was hired mid-year, how much PTO do I have?"

---

**AFTER - Structured Context:**
```
Task: Answer employee questions about PTO policy using 2024 Employee Handbook.

RETRIEVAL RULES:
- Always check employment start date first
- Tag priority: #Current + #PTO + #2024
- Ignore documents tagged #Deprecated

VALIDATION RULES:
1. Probation period: First 90 days, no PTO accrual
2. Partial-year hires: Prorated based on start date (15 days × [months remaining]/12)
3. Carryover: Maximum 5 days to next year
4. Notice requirements: 2 weeks advance for 5+ consecutive days
5. Manager approval: Required for all requests via Workday

OUTPUT FORMAT:
1. Direct answer to question
2. Cite specific handbook section
3. If complex scenario, show calculation
4. Provide next steps (submit via Workday link)

EDGE CASES:
- If hired after October 1: No PTO first year, full allotment next year
- If on performance improvement plan: PTO frozen except medical
- If remote employee in CA/NY: State-specific rules apply (cite state addendum)
```

**AI Output:**
"Based on your July 15, 2024 start date, you have 7.5 days of PTO for 2024 (calculated as 15 days × 6 months / 12 months). You completed probation on October 15, so PTO began accruing then. You can carry over up to 5 unused days to 2025. Submit requests via [Workday link]. Source: 2024 Employee Handbook Section 4.2, page 18."

**Employee Reaction:** "Perfect! That answered everything."

---

#### Example 2: Sales Call Scoring (Before/After)

**BEFORE - Vague Context:**
```
Task: Score sales calls and provide feedback to reps.
```

**AI Output:**
"This was a good call. The rep asked questions and explained the product. Score: 7/10."

**Problem:**
- ❌ No specific criteria applied
- ❌ "Good" is subjective
- ❌ No actionable feedback
- ❌ Score seems arbitrary

**Sales Manager Reaction:** "This doesn't help me coach my team. WHAT was good? WHAT should improve?"

---

**AFTER - Structured Context:**
```
Task: Score sales calls using our B2B Sales Methodology and provide coaching feedback.

EVALUATION FRAMEWORK:

1. Discovery Questions (0-30 points)
   - Open-ended questions: 3 points each (max 5 questions = 15 pts)
   - Follow-up depth: 3 points each (max 5 follow-ups = 15 pts)
   - RED FLAG: Yes/no questions score 0 (these are weak discovery)

2. Pain Identification (0-20 points)
   - Identified at least 2 pain points: 10 points each
   - Quantified business impact: bonus 5 points per pain point

3. Solution Positioning (0-20 points)
   - Connected features to THEIR pain points: 10 points each (max 2)
   - Used customer success story: 5 points
   - Avoided generic pitch: 5 points

4. Objection Handling (0-15 points)
   - Acknowledged objection: 5 points
   - Reframed with value: 10 points

5. Next Steps (0-15 points)
   - Defined clear next step: 10 points
   - Got commitment: 5 points

TOTAL SCORE: 0-100 points
- 90-100: Excellent call
- 75-89: Good call, minor improvements
- 60-74: Acceptable, needs coaching
- Below 60: Requires immediate intervention

OUTPUT FORMAT:
1. Overall Score with category (Excellent/Good/Acceptable/Requires Intervention)
2. Breakdown by category with specific scores
3. What Went Well (2-3 specific examples with timestamps)
4. Coaching Opportunities (2-3 specific examples with timestamps)
5. One Primary Focus Area for next call
```

**AI Output:**
"Score: 73/100 (Acceptable, needs coaching)

Breakdown:
- Discovery: 18/30 (asked 4 open-ended questions but weak follow-ups)
- Pain Identification: 10/20 (found 1 pain point, didn't quantify)
- Solution Positioning: 15/20 (good feature-pain connection)
- Objection Handling: 15/15 (excellent reframe at 23:40 mark)
- Next Steps: 15/15 (clear demo scheduled)

What Went Well:
- 12:15 - Strong open-ended question: 'Walk me through your current process for X'
- 23:40 - Excellent objection handling: Acknowledged budget concern, reframed with 6-month ROI
- 34:20 - Clear next step: Demo scheduled for next Tuesday with decision-makers

Coaching Opportunities:
- 14:30 - Asked 'Do you have a budget?' (yes/no = weak). Better: 'What does your budget process look like for this quarter?'
- 18:00 - Found pain point but didn't quantify. Should ask: 'How many hours per week does this cost your team?'
- 20:15 - Used generic pitch instead of connecting feature to THEIR specific pain

Primary Focus for Next Call: **Quantify pain points** - Always ask 'How much time/money does this cost you?'"

**Sales Manager Reaction:** "NOW I can coach! This tells me exactly what to work on."

---

#### What Changed Between Before/After?

**BEFORE (Vague Context):**
- Generic task description
- No evaluation criteria
- No examples of good/bad
- No structure for output

**AFTER (Structured Context):**
- Specific evaluation framework with point values
- Clear definitions of quality (what's "good" vs "bad")
- Edge cases and exceptions documented
- Structured output format
- Actionable feedback template

**Key Insight:**
The difference between 60% accurate and 95% accurate isn't the AI model - it's the context quality. Domain experts know this structure; teaching AI your expertise is extracting and documenting it.

---

### Your First Context Engineering Worksheet

Use this worksheet to document your first process for AI automation:

**PART 1: PROCESS OVERVIEW**

1. **What is the task?** (One sentence)
   - Example: "Answer employee questions about our benefits policies"

2. **Who does this today?** (Role/person)
   - Example: "HR generalists, 15-20 questions per week"

3. **What takes the most time?** (Bottleneck)
   - Example: "Finding the right policy document, reading through 200-page handbook"

4. **What's the current quality/consistency problem?**
   - Example: "Different HR reps give different answers; we don't cite sources consistently"

5. **What does success look like?** (Measurable)
   - Example: "95% of answers match what our senior HR director would say, with source citations"

---

**PART 2: KNOWLEDGE SOURCES**

6. **What documents/systems contain the information?**
   - Document 1: [Name, Location, Last Updated]
   - Document 2: [Name, Location, Last Updated]
   - System 1: [Name, Access Method, Key Data]

7. **Which sources are authoritative (use these)?**
   - Authoritative:
   - Deprecated (ignore these):

8. **What information is missing from documents but people know?**
   - Example: "Probation rules are in handbook, but partial-year hire calculations aren't written down"

---

**PART 3: EVALUATION CRITERIA**

9. **What makes a "good" answer?** (List 3-5 specific criteria)
   - Example: Accurate per current policy
   - Example: Cites specific handbook section
   - Example: Provides clear next steps
   - Example: Accounts for employee's specific situation
   - Example: Uses simple language (not HR jargon)

10. **What makes a "bad" answer?** (List 3-5 red flags)
    - Example: Cites deprecated policy
    - Example: Misses edge cases (probation, partial-year, etc.)
    - Example: No source citation
    - Example: Too vague to be actionable
    - Example: Wrong calculation

11. **Show me 2 examples of GOOD outputs** (actual answers you'd be proud of)
    - Good Example 1:
    - Good Example 2:

12. **Show me 2 examples of BAD outputs** (answers that would be wrong/unhelpful)
    - Bad Example 1:
    - Bad Example 2:

---

**PART 4: EDGE CASES & EXCEPTIONS**

13. **What are the tricky scenarios?** (List 5-10 edge cases)
    - Edge Case 1: [Description + Correct Handling]
    - Edge Case 2: [Description + Correct Handling]
    - (Continue...)

14. **What rules have exceptions?**
    - General Rule 1: [The rule]
      - EXCEPT when: [Exception condition]
      - Then do: [Different handling]

15. **What should the AI NEVER do?**
    - Never: Provide medical advice (defer to benefits provider)
    - Never: Commit to exceptions without manager approval
    - Never: Give tax advice (refer to accountant)

---

**PART 5: OUTPUT STRUCTURE**

16. **What format should answers follow?**
    - Template structure:
      1. [Direct answer to question]
      2. [Source citation]
      3. [Relevant edge cases or exceptions]
      4. [Next steps or links]

17. **What tone/style should it use?**
    - Example: "Friendly but professional; simple language; no corporate jargon"

---

**PART 6: ITERATION PLAN**

18. **How will I test this?**
    - Test Set 1: [10 common questions]
    - Test Set 2: [5 edge case scenarios]
    - Test Set 3: [5 questions that should be escalated, not answered]

19. **What's my validation method?**
    - Example: "I'll review outputs side-by-side with what I would say; must match 90%+"

20. **How will I track improvements?**
    - Iteration 1: [Test with Set 1, expect ~60% accuracy]
    - Iteration 5: [Test with Set 1+2, expect ~80% accuracy]
    - Iteration 20: [Test with all sets, expect 95%+ accuracy]

---

**HOW TO USE THIS WORKSHEET:**

**Week 1:** Fill out Parts 1-3 (Overview, Sources, Criteria)
- This is your "hypothesis" of what the AI needs to know
- Spend 3-5 hours documenting

**Week 2:** Fill out Parts 4-5 (Edge Cases, Output Structure)
- Start testing and you'll discover what you missed
- Add edge cases as you find them
- Spend 5-8 hours refining

**Week 3:** Execute Part 6 (Iteration Plan)
- Test → Find gaps → Add to worksheet → Re-test
- Each iteration reveals tacit knowledge
- 10-20 iteration cycles

**Key Insight:**
You won't get Parts 4-5 right on first try - that's expected. The worksheet evolves through iteration. First draft = 60% complete. After 20 iterations = 95% complete.

---

### The 5-Step Context Engineering Methodology

This is the complete methodology that Agent Managers use to transform their domain expertise into AI-usable formats:

{{kc:context_engineering_methodology:full}}

---

## 4. Context Engineering Examples: Three Departments

### Example 1: HR - Onboarding Assistant

This real implementation demonstrates the 5-step context engineering methodology in action:

{{kc:hr_onboarding_assistant:full}}

**What This Example Demonstrates:**
- {{kc:context_engineering_methodology:inline}} applied to HR domain
- {{kc:iteration_economics:inline}} in practice (20 iterations over 2-3 weeks)
- {{kc:four_roles_framework:inline}} partnership (Sarah as Agent Manager + Marcus as Developer)
- {{kc:roi_calculation_model:inline}} showing 1,051% Year 1 ROI

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

**→ {{kc:context_engineering_methodology:inline}} forces explicit documentation of tacit knowledge**

**2. The Iteration Discovery**
- All three started at 60% accuracy
- Reached 95%+ through 20 iterations revealing edge cases over 2-3 weeks
- Fast iteration was critical - daily changes vs weekly would have failed

**→ You can't predict all context needs upfront ({{kc:iteration_economics:inline}})**

**3. The Format Pattern**
- All three used: Rubrics (evaluation criteria), Examples (annotated good/bad), Templates (consistent outputs)
- Hierarchical organization critical (topics → subtopics → details)

**→ Structured context is AI's fuel ({{kc:context_engineering_methodology:inline}} Step 4)**

**4. The Validation Progression**
- All started with 100% human review
- Moved to sampling after calibration
- Ended with exception-only review

**→ Trust builds through validation, not faith ({{kc:context_engineering_methodology:inline}} Step 5)**

**5. The ROI Reality**
- HR: $99K/year (18 hrs/week reclaimed) - {{kc:hr_onboarding_assistant:roi_focus}}
- Sales: $141K/year (manager time + faster rep development)
- Marketing: $65K/year (manager time + consistency improvements)

**→ Time savings are real, measurable, and significant ({{kc:roi_calculation_model:inline}})**

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

The {{kc:four_roles_framework:inline}} defines this critical partnership:

{{kc:four_roles_framework:summary}}

**Agent Manager Responsibilities:**
1. **Process Mapping:** Document current workflow ({{kc:context_engineering_methodology:inline}} Step 1)
2. **Context Engineering:** Create rubrics, examples, guidelines (Steps 2-4)
3. **Validation:** Test outputs, identify errors, provide feedback (Step 5)
4. **Iteration:** See bad results → explain what's missing → test again
5. **Quality Ownership:** Define what "good" looks like

**Developer Responsibilities:**
1. **Infrastructure:** Build agent framework and integrations
2. **Tool Creation:** Custom tools for specific actions
3. **Orchestration:** Connect subprocesses in multi-agentic systems
4. **Deployment:** Production-ready reliability and scale
5. **Technical Optimization:** Performance, cost, security

**Why This Partnership Works ({{kc:level_4_iterative_agents:inline}} Success):**
- **Co-located:** Sit together, fast communication
- **Rapid iteration:** 1-3 cycles per day during active development ({{kc:iteration_economics:inline}})
- **Domain + technical:** Agent Manager knows process, Developer knows AI architecture
- **Continuous improvement:** After deployment, Agent Manager updates context, Developer deploys changes

**The Failure Pattern ({{kc:level_3_trap_story:inline}}):**
- Agent Manager tries to document everything → Sends to external agency → Waits weeks for iteration
- Knowledge lost in translation
- Slow feedback kills momentum
- Result: 5+ months → Not production-ready → Abandoned

**The Success Pattern ({{kc:level_4_iterative_agents:inline}}):**
- Agent Manager + Developer build together
- Test → See problem → Add context → Test again (minutes, not weeks)
- 20 iterations in 2-3 weeks
- Result: Production-ready with 95%+ reliability

**Real Example:** {{kc:hr_onboarding_assistant:summary}}

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
- Domain experts (Agent Managers from {{kc:four_roles_framework:inline}}) can manage AI for their domain

**Agentic Development Tools:**
- Cursor IDE, Claude Code enable non-technical building
- Build automations in natural language (not syntax)
- 15 hours to learn one interface that works with ALL tools
- Not a new level - a new PATH to {{kc:level_4_iterative_agents:inline}}
- Perfect for individual/team productivity and prototyping

**Context Engineering:**
{{kc:context_engineering_methodology:summary}}

**Department Examples:**
- **HR:** {{kc:hr_onboarding_assistant:summary}}
- **Sales:** Call analyzer ($141K/year, 100% coverage vs 5% manual, consistent coaching)
- **Marketing:** Content quality system ($65K/year, 100% coverage vs 60%, 40% brand voice improvement)

All three demonstrate:
- {{kc:iteration_economics:inline}} - 20 iterations to 95%+ reliability
- {{kc:context_engineering_methodology:inline}} - 5 steps applied to each domain
- {{kc:four_roles_framework:inline}} - Agent Manager + Developer partnership
- {{kc:roi_calculation_model:inline}} - Measurable time savings and quality improvements

**Multi-Agentic:**
- Break complex processes into specialized subprocesses
- Each subprocess has distinct: Purpose, Tools, Workflow, Context, Output
- Use when phases have different requirements
- Don't over-engineer - complexity should match the problem
- Example: Sales Call Analyzer (Transcription → Evaluation → Reporting)

**What Non-Tech Can Do:**
- **Level 3.5 alone:** File-based work, documentation, simple automations, prototyping
- **Involve Developer:** Deep integration, multi-agentic, production deployment, advanced capabilities
- **Partnership model:** {{kc:four_roles_framework:summary}}

**Key Insight:**
Managing AI isn't a technical skill - it's process understanding + clear communication + iteration discipline ({{kc:context_engineering_methodology:inline}}). Domain experts who learn to manage AI are more valuable than AI experts without domain knowledge.

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

## Knowledge Check Quiz (Required)

**Before proceeding to the next module, complete this quiz to verify understanding.**

**Passing Score:** 80% (4 out of 5 questions)
**Time:** 5 minutes
**Attempts:** Unlimited (review content between attempts)

**[LINK TO QUIZ: S3_managing_ai_quiz]**

**Why This Matters:**
Each module builds on previous knowledge. Completing this quiz ensures you have the foundation for the next module.

**What Happens If You Don't Pass:**
- Review the sections where you missed questions
- Re-read the relevant {{kc:component}} references
- Retake quiz when ready

### Quiz Questions

**Question 1 (Management Shift):**
What's the fundamental shift in how business leaders must think about management?
- A) Replace all people with AI agents
- B) Manage AI agents the same way you manage people
- C) Add "managing AI agents" as a new skill alongside managing people
- D) Only technical people can manage AI
- **Correct: C**
- Explanation: Modern management includes managing both people AND AI agents. It's an additional skill, not a replacement.

**Question 2 (Context Engineering):**
What's the difference between vague context and structured context that achieves 95%+ accuracy?
- A) Using more expensive AI models
- B) Adding specific validation rules, edge cases, examples, and evaluation criteria
- C) Having more developers work on it
- D) Running it longer
- **Correct: B**
- Explanation: Structured context documents the domain expert's tacit knowledge: rules, edge cases, good/bad examples, evaluation criteria.

**Question 3 (Agentic Tools):**
What makes agentic development tools (Cursor, Claude Code) different from ChatGPT for building automations?
- A) They use better AI models
- B) They cost more money
- C) They can write, edit, and test code autonomously (multi-step workflows)
- D) They require coding knowledge
- **Correct: C**
- Explanation: Agentic tools can execute multi-step workflows (analyze → write → test → debug) vs ChatGPT which only generates suggestions.

**Question 4 (Multi-Agent Systems):**
When should you use multi-agent architecture instead of a single agent?
- A) Always - more agents are always better
- B) When a workflow has distinct phases requiring different expertise or tools
- C) Never - single agents are simpler
- D) Only for very large companies
- **Correct: B**
- Explanation: Multi-agent makes sense when workflow has clear phases (e.g., data collection → analysis → decision → action) each needing different capabilities.

**Question 5 (Non-Technical Role):**
As a non-technical Agent Manager, what's the MOST valuable contribution you make to building AI agents?
- A) Writing the code yourself
- B) Documenting domain expertise, edge cases, and validating outputs for accuracy
- C) Managing the budget
- D) Presenting to executives
- **Correct: B**
- Explanation: Agent Managers provide the domain expertise and validation capability that determines if the agent reaches 95%+ accuracy. This is the bottleneck, not technical skills.

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
