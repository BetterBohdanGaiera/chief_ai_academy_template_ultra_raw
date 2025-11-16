# Context Engineering Methodology

---
id: context_engineering_methodology
title: Context Engineering - 5-Step Process for Teaching AI Your Expertise
category: frameworks
tags: [context-engineering, methodology, agent-manager, level-4, iteration, domain-expertise]
presentation_formats: [full, summary, step_by_step, checklist]
estimated_time:
  full: 12 minutes
  summary: 2 minutes
  step_by_step: 8 minutes
dependencies: [level_4_iterative_agents, four_roles_framework, iteration_economics]
version: 1.0.0
last_updated: 2025-01-16
---

## Overview

**Context Engineering** is the process of breaking down workflows and preparing information so AI systems can perform work effectively. It's the critical skill that transforms AI from generic chatbots into reliable business systems.

**Core Insight:** AI agents are only as good as the context you provide them.

**Who Does This:** Agent Managers - process experts who understand workflows deeply

**Why It Matters:** Context engineering IS the difference between:
- Level 3: Failed no-code tools at 65-75% accuracy (abandoned after $25-30K sunk costs)
- Level 4: Successful custom agents at 95%+ reliability (delivering $150-300K annual value)

**The Critical Truth:** You CANNOT document all domain expertise upfront. Context engineering is iterative discovery through rapid testing and refinement—which is why Level 4's fast iteration cycles (1-3 per day) are essential for success.

---

## Format: Full Framework

### What is Context Engineering?

**Definition:** The systematic process of extracting, organizing, and structuring domain expertise so AI systems can apply it reliably at scale.

**It's NOT:**
- ❌ Writing a requirements document and handing it to developers
- ❌ Dumping files into an AI and hoping it figures things out
- ❌ One-time documentation that stays static

**It IS:**
- ✅ Iterative discovery of tacit knowledge through testing
- ✅ Structured organization of decision logic and edge cases
- ✅ Continuous refinement based on real-world performance
- ✅ Partnership between domain expert (Agent Manager) and Developer

### Why Context Engineering Requires Fast Iteration

**The Fundamental Problem:** Domain experts can't document all their expertise upfront.

**Why not?**
1. **Tacit knowledge is invisible** - You don't know what you know until you see AI get it wrong
2. **Edge cases are hidden** - 8 years of experience = hundreds of exceptions you've internalized
3. **Decision logic is complex** - "It depends on..." has 15 factors you apply subconsciously
4. **Context compounds** - Real scenarios need 3-5 pieces of information combined correctly

**The Discovery Process:**
1. Build initial context based on what you think you need
2. Test AI with real scenarios
3. **See bad output** → Reveals domain knowledge you didn't know you had
4. Add missing context (validation rules, edge cases, nuances)
5. Repeat until outputs are reliable (typically 20-60 iterations)

**Example - HR Onboarding Assistant:**
- **Week 1, Test 23:** "I'm relocating from Austin to Seattle office. What do I need to do?"
- **AI Response:** "Please contact HR to discuss relocation procedures." (Generic, unhelpful)
- **Agent Manager reaction:** "Way too generic! It should explain the relocation reimbursement policy, mention that relocations require manager approval, note the different state tax implications, and provide the relocation request form link."
- **Developer:** "I didn't know we had a relocation policy!"
- **Agent Manager:** "Exactly. It's not in the general onboarding docs. It's buried in a separate operations manual. Let me find it..."

**This exchange reveals:**
- Knowledge exists in unexpected places
- Agent Manager couldn't document this upfront (didn't occur to her until specific question triggered it)
- Rapid iteration allows immediate refinement (within same day)

### Level 3 Trap vs Level 4 Advantage

**Level 3 Trap (External Agency/No-Code):**
1. You document what you think you know
2. Send to external consultant/agency
3. They build based on your documentation
4. **Week 2:** See results → Realize critical context missing
5. Contact agency → Explain gaps in email/screenshots
6. Wait 5-7 days for next iteration ($1,500-2,500 cost)
7. Knowledge gets lost in translation
8. After 5-10 iterations over 10-12 weeks: Still at 65-75% quality
9. **Result:** Abandoned, -$25-30K sunk costs

**Iteration Economics:**
- 1 iteration per week
- 5-10 total iterations before abandonment
- 1-3% improvement per iteration
- Plateaus at 65-75% quality (below adoption threshold)

**Level 4 Advantage (Agent Manager + Developer Partnership):**
1. Build initial context
2. Test with real scenarios
3. See problem immediately (Agent Manager spots it in seconds)
4. Identify missing context/validation
5. Developer adds it (20-30 minutes)
6. Test again within the hour
7. **Repeat 1-3 times per DAY**
8. After 20-60 iterations over 2-3 weeks: 95%+ reliability
9. **Result:** Production-ready, +$150-300K annual value

**Iteration Economics:**
- 1-3 iterations per day
- 20-60 total iterations in 2-3 weeks
- 3-6% improvement per iteration
- Reaches 95%+ quality (production-ready)

**Timeline Reality:**
- Level 3 with slow iteration: 10-12 weeks → 65-75% quality → Abandoned
- Level 4 with fast iteration: 2-3 weeks → 95%+ quality → Deployed

---

## The 5-Step Context Engineering Methodology

### Step 1: Process Mapping
**Goal:** Document how work gets done today, step-by-step

**What to Document:**
- Each step from start to finish
- Decision points and variations ("If X, then Y; otherwise Z")
- Who does what and when
- Current pain points and bottlenecks
- How long each step takes
- Dependencies and sequence requirements

**Questions to Answer:**
- What triggers this process?
- What are the distinct phases or stages?
- Where do decisions get made?
- What causes delays or errors?
- What information is needed at each step?

**Output:** Clear process map showing current state

**Example - HR Onboarding Assistant:**

Current Process:
1. New employee asks question (Slack, email, in-person)
2. HR person searches 3-4 systems (handbook, wiki, benefits platform)
3. Crafts customized response based on employee's specific situation
4. Time: 15-20 minutes per question

Pain Points:
- Same questions asked by every new hire (20+ hours/month on repetition)
- Inconsistent answers depending on who responds
- HR can't focus on strategic work
- After-hours questions wait until next business day

Decision Points:
- Different answer if employee is full-time vs part-time
- Different answer if still in probation period vs after 90 days
- Different answer based on employee's location (state-specific policies)

---

### Step 2: Data Identification
**Goal:** Identify what information AI needs at each step

**Four Types of Information:**

**1. Facts** - Objective, verifiable data
- Policies, numbers, dates, requirements
- Example: "PTO accrues at 1.25 days per month"
- Source: Official documents, system data

**2. Guidelines** - How to make decisions or evaluate situations
- Decision criteria, evaluation rubrics, approval rules
- Example: "Remote work eligibility requires: Role can be remote + 90 days completed + manager approval"
- Source: Policy documents, management judgment

**3. Examples** - Sample scenarios showing good/bad outcomes
- Annotated real cases, success/failure patterns
- Example: "Good expense report includes receipt + business purpose + project code"
- Source: Historical cases, expert judgment

**4. Context** - Background information that informs reasoning
- Industry norms, company culture, relationship dynamics
- Example: "Holiday PTO requests require 2-week notice (vs 3-day for normal PTO)"
- Source: Unwritten knowledge, organizational culture

**Questions to Ask:**
- What facts does AI need to give accurate answers?
- What decision rules should AI apply?
- What examples illustrate quality standards?
- What background context affects how facts are interpreted?

**Output:** Comprehensive list of information requirements organized by type

**Example - HR Onboarding Assistant:**

**Facts needed:**
- PTO policy: 15 days/year, accrues 1.25 days/month
- Probation period: 90 days, blocks PTO usage regardless of accrual
- 401k matching: 100% match up to 6% of salary
- Health insurance: 3 plan options, 30-day enrollment deadline from start date

**Guidelines needed:**
- Remote work eligibility: Must meet ALL (Role can be remote + 90 days completed + manager approval)
- Expense reimbursement approval: <$100 auto-approved, $100-500 manager approval, >$500 VP approval
- Equipment requests: Standard laptop within 5 days, specialized equipment requires justification

**Examples needed:**
- Good expense report examples (with proper documentation)
- Common new hire mistakes to avoid (forgetting to submit benefits enrollment, missing IT security training deadline)
- Relocation scenarios (cross-state moves trigger different processes)

**Context needed:**
- Company culture of flexibility (remote work encouraged, not restricted)
- Benefits philosophy (generous matching to attract talent)
- IT security is compliance requirement (strict deadline enforcement)

---

### Step 3: Source Mapping
**Goal:** Map each information requirement to its source

**Three Source Categories:**

**1. Systems** - APIs, databases, business tools
- CRM (Salesforce, HubSpot)
- HRIS (BambooHR, Workday)
- Wikis (Confluence, Notion)
- Financial systems (QuickBooks, NetSuite)
- Communication platforms (Slack, email)

**2. Documents** - Files, handbooks, procedures
- Employee handbooks
- Policy documents
- Training materials
- Templates and forms
- Historical records

**3. People** - Subject matter experts with tacit knowledge
- Process experts with 5+ years experience
- Top performers who excel at the work
- Managers who make judgment calls
- Specialized roles with unique knowledge

**Common Discovery:** Gaps where information should exist but doesn't
- "We've never written down how we handle X"
- "That's just something Sarah knows from 10 years of experience"
- "The policy says Y, but in practice we do Z"

**Questions to Ask:**
- Where does this information currently live?
- Who knows the answer when the document is unclear?
- What information exists only in people's heads?
- Are there conflicting sources (which is authoritative)?

**Output:** Source map connecting each requirement to its origin(s)

**Example - HR Onboarding Assistant:**

**Systems:**
- HRIS (BambooHR): Employee start dates, employment status (full-time/part-time), location
- Benefits Platform (Zenefits): Plan options, enrollment deadlines, coverage details
- Confluence Wiki: General policies, team structures, cultural norms

**Documents:**
- Employee Handbook (150 pages): PTO policy, expense reimbursement, code of conduct
- Benefits Guide (40 pages): Plan comparisons, enrollment process
- IT Security Manual: Required trainings, deadlines, compliance requirements

**People (Tacit Knowledge):**
- HR Business Partners: Unwritten cultural knowledge, "how we really do things"
- Payroll Specialist: State-specific tax implications for relocations
- IT Director: Equipment approval logic (when to say yes/no to specialized requests)

**Gaps Identified:**
- No single source for "who to ask about what"
- Benefits information scattered across 5+ documents (needs consolidation)
- Relocation policy buried in operations manual (not in onboarding docs)
- Remote work "flexibility culture" is unwritten (needs documentation)

---

### Step 4: Structure Definition
**Goal:** Transform raw information into AI-usable formats

**Five Key Formats:**

**1. FAQs** - Question-answer pairs for common scenarios
- Use: Straightforward queries with clear answers
- Format: Q: [Question] → A: [Answer with relevant context]
- Example: "Q: How much PTO do I get? → A: Full-time employees receive 15 days/year, accruing at 1.25 days/month. You can use PTO immediately upon accrual, but not during your 90-day probation period."

**2. Procedures** - Step-by-step instructions with decision logic
- Use: Multi-step processes with conditional paths
- Format: Step 1 → If [condition] then [action], else [alternative] → Step 2...
- Example: "How to Submit Expense Report: Step 1: Take photo of receipt. Step 2: Log into expense system. Step 3: If amount >$100, add manager approval note; else proceed. Step 4: Categorize expense..."

**3. Rubrics** - Evaluation criteria with scoring guidelines
- Use: Subjective judgment that needs consistency
- Format: Criteria → 5-point scale with descriptions for each level
- Example: "Sales Discovery Quality: 5 = Deep questioning, uncovers pain, understands context; 3 = Surface-level questions, basic needs identified; 1 = Little to no discovery, assumption-based"

**4. Templates** - Structured formats for outputs
- Use: Standardized deliverables (reports, emails, documents)
- Format: Fixed structure with variable content sections
- Example: "Call Analysis Report: [Overview] → [Strengths (3-5 bullet points)] → [Improvements (3-5 specific actions)] → [Next Steps]"

**5. Examples** - Annotated good/bad cases with explanations
- Use: Pattern recognition and quality standards
- Format: Scenario + Response + Annotation explaining why it's good/bad
- Example: "Good Discovery: Rep asked 'You mentioned 3 vendors—which ones and what criteria matter most?' → This is excellent because it probes competitive landscape AND buying criteria in one question"

**Organization Strategy:**
- Create hierarchical structure (Topics → Subtopics → Details)
- Link related information together
- Ensure consistent terminology across all content
- Cross-reference between related topics
- Use clear headings and sections for easy navigation

**Output:** Structured context ready for AI implementation

**Example - HR Onboarding Assistant Structure:**

**Hierarchical Organization:**

```
1. Benefits & Compensation
   1.1 Health Insurance
       - Plans (3 options with comparison)
       - Enrollment (30-day deadline, process steps)
       - Coverage (what's included, exclusions)
       - FAQ (15 common questions)
   1.2 401(k) Retirement Plan
       - Match formula (100% up to 6%)
       - Enrollment (automatic vs manual)
       - Investment options
       - FAQ (10 common questions)
   1.3 PTO & Time Off
       - Accrual rate (1.25 days/month)
       - Probation rules (90 days, no usage)
       - Request process (normal vs holiday)
       - FAQ (20 common questions)

2. Company Policies
   2.1 Expense Reimbursement
       - Steps (6-step process with screenshots)
       - Approval rules (<$100, $100-500, >$500)
       - Examples (good expense reports)
       - Common mistakes (missing receipts, wrong categories)
   2.2 Remote Work
       - Eligibility rubric (3 criteria, all required)
       - Request process
       - Equipment policy
       - FAQ (8 common questions)
```

**Format Examples:**

**FAQ:**
- Q: "How much PTO do I get?"
- A: "Full-time employees receive 15 days/year, accruing at 1.25 days/month. You can use PTO immediately upon accrual, but not during your 90-day probation period. Holiday PTO requests require 2-week advance notice instead of the usual 3-day notice."

**Procedure:**
- "How to Submit Expense Report:
  1. Take clear photo of receipt showing date, amount, vendor
  2. Log into expense system (Concur)
  3. Click 'New Expense'
  4. Categorize: Meals, Travel, Equipment, or Other
  5. If amount >$100: Add manager approval note explaining business purpose
  6. If amount >$500: Add VP approval note + link to project
  7. Submit within 30 days of expense date"

**Rubric:**
- "Remote Work Eligibility - Must meet ALL criteria:
  ✅ Role can be performed remotely (check role description)
  ✅ 90-day probation completed successfully
  ✅ Manager approval obtained (manager evaluates performance readiness)"

---

### Step 5: Validation Rules
**Goal:** Define how to verify outputs and improve over time

**Establish:**

**1. Quality Thresholds**
- Accuracy target (e.g., 95% of outputs are correct)
- Completeness target (e.g., 90% of questions can be answered without escalation)
- User satisfaction target (e.g., 4.5/5 average rating)

**2. Human Review Process**
- Initial period: 100% review before outputs go live
- Transition period: Sample review (30-50%)
- Steady state: Exception review only (AI flags low-confidence cases)

**3. Error Tracking & Categorization**
- Missing information (AI lacked necessary context)
- Incorrect logic (AI applied wrong rule)
- Outdated information (context not updated)
- Edge case not covered (new scenario discovered)
- Ambiguous query (question unclear or multi-part)

**4. Feedback Loops**
- How errors trigger context updates
- Who reviews and approves context changes
- How quickly changes can be deployed
- Testing process for context updates

**5. Escalation Rules**
- When to route to humans (complexity thresholds)
- How to flag low-confidence responses
- Process for human to answer + update context
- Priority levels for different error types

**Validation Phases (Progressive Trust):**

**Weeks 1-2: Full Human-in-the-Loop**
- AI generates response
- Human reviews before sending
- Human approves or edits
- Track accuracy and error patterns

**Weeks 3-4: Sample Review**
- AI sends responses directly
- Human reviews 30-50% sample
- Errors trigger context refinement
- Monitor quality metrics

**Month 2+: Exception Review**
- AI handles most requests autonomously
- AI flags low-confidence cases for human review
- Humans review flagged cases only (10-20%)
- Continuous monitoring of quality trends

**Output:** Validation framework and quality assurance process

**Example - HR Onboarding Assistant Validation:**

**Quality Thresholds:**
- Accuracy: 95% of answers are correct and complete
- Coverage: 90% of questions can be answered without escalation
- User satisfaction: 4.5/5 average rating from new hires

**Validation Phases:**
- **Weeks 1-2:** 100% review by HR specialist before sending any answer
- **Weeks 3-4:** AI sends directly, HR reviews 30% random sample daily
- **Month 2+:** Exception review only (AI confidence < 80% triggers human review)

**Error Tracking:**
Week 1 errors discovered:
- 5 cases: Missing logic (probation period blocking PTO usage)
- 3 cases: Incorrect policy (old benefits guide still in context)
- 2 cases: Edge case (international employees have different rules)

Week 2 refinements:
- Added probation logic to all time-off questions
- Removed outdated benefits guide, used only current version
- Created international employee section (8 FAQs added)

**Results After 4 Weeks:**
- Accuracy: 96% (exceeded 95% target)
- Coverage: 92% handled autonomously
- Response time: 15-20 min → 3 seconds
- HR time savings: 18 hours/week reclaimed
- Consistency: 97% identical responses for same questions

---

## Format: Summary

**Context Engineering = The process of teaching AI your expertise so it can work reliably at scale**

**Why It Matters:** The difference between 65-75% quality (Level 3 trap, abandoned) and 95%+ quality (Level 4 success, production-ready)

**Critical Insight:** You can't document all expertise upfront. Context engineering is iterative discovery through rapid testing (20-60 cycles).

**The 5 Steps:**
1. **Process Mapping** - Document current workflow step-by-step
2. **Data Identification** - List required information (facts, guidelines, examples, context)
3. **Source Mapping** - Map information to sources (systems, documents, people)
4. **Structure Definition** - Organize for AI (FAQs, procedures, rubrics, templates, examples)
5. **Validation Rules** - Define quality thresholds, review process, feedback loops

**Who Does This:** Agent Managers (process experts) in partnership with Developers

**Iteration Requirements:** Requires fast feedback cycles (1-3 per day) to discover tacit knowledge through testing

**Timeline:** 2-3 weeks with rapid iteration (Level 4) vs 10-12 weeks with slow iteration (Level 3)

---

## Format: Step-by-Step Guide

**Use this as a practical checklist when starting a new AI agent project:**

### Before You Start
- [ ] Identify Agent Manager (process expert with 5+ years experience)
- [ ] Identify AI Agent Developer (technical partner)
- [ ] Confirm Agent Manager availability (50-70% time for 2-3 weeks)
- [ ] Set iteration cadence (target: 1-3 feedback cycles per day)

### Step 1: Process Mapping (Day 1-2)
- [ ] Document current process end-to-end
- [ ] Identify decision points and variations
- [ ] List pain points and bottlenecks
- [ ] Map who does what and when
- [ ] Estimate time spent on each step
- [ ] Create process map visual

### Step 2: Data Identification (Day 2-3)
- [ ] List Facts needed (policies, numbers, requirements)
- [ ] List Guidelines needed (decision criteria, rules)
- [ ] List Examples needed (good/bad cases)
- [ ] List Context needed (background, culture)
- [ ] Organize by process step or topic
- [ ] Prioritize critical vs nice-to-have

### Step 3: Source Mapping (Day 3-4)
- [ ] Identify system sources (APIs, databases, tools)
- [ ] Identify document sources (files, wikis, manuals)
- [ ] Identify people sources (experts with tacit knowledge)
- [ ] Map each information requirement to source(s)
- [ ] Flag gaps (info should exist but doesn't)
- [ ] Note conflicting sources (decide authoritative version)

### Step 4: Structure Definition (Day 4-7)
- [ ] Create hierarchical topic structure
- [ ] Write FAQs for common scenarios (20-50 Q&A pairs)
- [ ] Document procedures for multi-step processes
- [ ] Create rubrics for subjective evaluations
- [ ] Build templates for standardized outputs
- [ ] Annotate examples showing good/bad patterns
- [ ] Cross-reference related topics
- [ ] Ensure consistent terminology

### Step 5: Validation Rules (Day 5-7)
- [ ] Define quality thresholds (accuracy, coverage, satisfaction)
- [ ] Design human review process (100% → sample → exception)
- [ ] Create error tracking categories
- [ ] Establish feedback loop (error → context update → retest)
- [ ] Define escalation rules (when to route to human)
- [ ] Set validation phase timeline (Weeks 1-2, 3-4, Month 2+)
- [ ] Assign reviewers and approval workflow

### During Build (Week 1-3)
- [ ] Developer builds AI agent using structured context
- [ ] Test with real scenarios daily (not demo scenarios)
- [ ] Agent Manager validates outputs immediately
- [ ] Identify missing context, edge cases, logic errors
- [ ] Developer refines context and logic same day
- [ ] Repeat 1-3 cycles per day
- [ ] Track error patterns and context gaps
- [ ] Measure quality improvement per iteration

### Launch & Refinement (Week 3-6)
- [ ] Deploy with 100% human review (Week 3-4)
- [ ] Monitor accuracy, coverage, user satisfaction
- [ ] Transition to sample review (30-50%, Week 5-6)
- [ ] Refine context based on real-world performance
- [ ] Move to exception review (Month 2+)
- [ ] Establish ongoing maintenance process

---

## Format: Checklist

### Context Engineering Quality Checklist

**Process Mapping Complete:**
- [ ] End-to-end workflow documented
- [ ] All decision points identified
- [ ] Variations and edge cases captured
- [ ] Pain points and bottlenecks listed
- [ ] Time estimates for each step
- [ ] Visual process map created

**Data Identification Complete:**
- [ ] All facts listed and sourced
- [ ] Decision guidelines documented with criteria
- [ ] Examples collected (good and bad)
- [ ] Context and background information captured
- [ ] Information organized by topic/step
- [ ] Critical vs nice-to-have prioritized

**Source Mapping Complete:**
- [ ] All system sources identified and accessible
- [ ] All document sources located and current
- [ ] All tacit knowledge sources interviewed
- [ ] Gaps identified where info should exist
- [ ] Conflicting sources resolved (authoritative version chosen)
- [ ] Source access permissions confirmed

**Structure Definition Complete:**
- [ ] Hierarchical topic organization created
- [ ] FAQs written (20-50+ Q&A pairs minimum)
- [ ] Procedures documented for multi-step processes
- [ ] Rubrics created for subjective evaluations
- [ ] Templates built for standardized outputs
- [ ] Examples annotated with explanations
- [ ] Cross-references established
- [ ] Consistent terminology throughout

**Validation Rules Complete:**
- [ ] Quality thresholds defined (specific numbers)
- [ ] Human review process designed (phases)
- [ ] Error tracking categories established
- [ ] Feedback loops defined (error → update → retest)
- [ ] Escalation rules clear (when to route to human)
- [ ] Reviewers assigned and trained
- [ ] Validation phase timeline set

---

## Common Context Engineering Mistakes

### Mistake 1: Trying to Document Everything Upfront
**Problem:** Spending 6-8 weeks writing comprehensive documentation before building anything
**Why it fails:** You can't anticipate all edge cases without testing. Tacit knowledge only surfaces when you see AI get it wrong.
**Fix:** Build initial context (Week 1), test immediately (Week 1-3), discover gaps through iteration

### Mistake 2: Using Generic Examples Instead of Real Scenarios
**Problem:** Testing AI with demo questions like "What's the PTO policy?" instead of real complexity
**Why it fails:** Demo scenarios are easy. Real scenarios reveal edge cases, multi-step logic, context dependencies.
**Fix:** Test with last 50 real questions from actual users, not hypothetical scenarios

### Mistake 3: Dumping Files Without Structure
**Problem:** Giving AI 150-page handbook and expecting it to "figure it out"
**Why it fails:** AI needs structured context, not raw documents. It can't extract decision logic or prioritize information.
**Fix:** Extract key information into FAQs, procedures, rubrics. Use documents as references, not primary context.

### Mistake 4: No Validation Process
**Problem:** Deploying AI without human review, assuming 100% accuracy immediately
**Why it fails:** First deployment is always 60-70% quality. Needs iteration to reach 95%+.
**Fix:** Always start with 100% human review (Weeks 1-2), transition progressively to exception review

### Mistake 5: Slow Iteration Cycles
**Problem:** Agent Manager tests once, sends feedback to developer, waits 3-7 days for update
**Why it fails:** This is Level 3 trap. Slow iteration = only 5-10 total cycles = 65-75% quality plateau
**Fix:** Co-locate Agent Manager + Developer, target 1-3 feedback cycles PER DAY

### Mistake 6: Forgetting to Update Context Over Time
**Problem:** Context is static after launch, gradually becomes outdated as policies/processes change
**Why it fails:** Business changes, AI becomes less accurate over time, users lose trust
**Fix:** Establish ongoing maintenance process (Agent Manager reviews 10-20% time), update context when policies change

---

## Related Components

**Prerequisites (understand these first):**
- {{kc:level_4_iterative_agents:full}} - Why context engineering enables Level 4
- {{kc:four_roles_framework:full}} - Agent Manager role owns context engineering
- {{kc:iteration_economics:full}} - Why fast iteration is required for context discovery

**See context engineering in action:**
- {{kc:hr_onboarding_assistant:full}} - 5-step methodology applied to HR
- {{kc:sales_call_analyzer:full}} - Context engineering for sales evaluation
- {{kc:vendor_sla_tracker:full}} - Context engineering for operations

**Related frameworks:**
- {{kc:level_3_to_4_transition:full}} - Why slow iteration fails at context engineering
- {{kc:agent_evaluation_framework:full}} - Validating context engineering results
