# Learning Path: Developer (AI Agent Developer)

**Target Audience:** AI Agent Developers, software engineers, technical leads
**Total Time:** ~95 minutes
**Goal:** Understand Level 4 architecture, Agent Manager partnership, and build production-ready agentic systems

---

## Why This Path

As an AI Agent Developer, you are responsible for:
- Building agent infrastructure and integrations (the technical foundation)
- Creating custom tools for specialized workflows
- Deploying production-ready systems at scale
- Enabling Agent Manager autonomy (rapid iteration capability)
- Implementing multi-agentic architectures when needed

**Your success is measured by:** Agent Manager productivity (not lines of code)

**Your superpower:** You understand AI agent architecture, LLM capabilities, and how to build systems that enable 10-20 iteration cycles per day (Level 4 defining characteristic).

---

## Your Learning Journey

### Module 1: F1 - Five Levels Framework (20 min)

**Why you need this:** Understand what Level 4 architecture must enable

**What you'll learn:**
- The 5 levels of AI adoption
- Why Level 3 fails (slow iteration → stuck at 70% → abandoned)
- What defines Level 4 (rapid iteration: 10-20 cycles/day, 200+ total)
- **Critical insight:** Technical architecture must enable fast context iteration (not just work)
- Your role in achieving Level 4 (build systems Agent Managers can iterate on autonomously)

**Your role application:**
- Design deployment systems where Agent Manager can update context and test within minutes
- Avoid architectures that require Developer intervention for every context change
- Build monitoring to track: iteration velocity, accuracy progression, deployment health
- Optimize for iteration speed (not just runtime performance)

**Key architectural implication:**
**Level 3 architecture:** Agent Manager requests change → Developer updates code → Redeploy → Test (days-weeks)

**Level 4 architecture:** Agent Manager edits context file → Auto-rebuild → Test immediately (minutes)

**Your job: Build Level 4 architecture.**

---

### Module 2: F2 - Organization Structure (18 min)

**Why you need this:** Understand the partnership model and your role

**What you'll learn:**
- Four key roles: Chief AI Officer, AI Champions, Agent Managers, AI Agent Developers (you!)
- **Developer role definition:** Build infrastructure, create tools, enable rapid iteration, deploy at scale
- **Critical partnership:** Agent Manager + Developer working together (co-located, daily sync)
- Real stories: How developers enabled 200+ iterations in 6-10 weeks
- What you own vs what Agent Manager owns
- Why your goal is to 10x Agent Manager productivity (not do all the work yourself)

**Your role application:**
- Understand your responsibilities: infrastructure, custom tools, orchestration, deployment, optimization
- Know what Agent Manager handles: process documentation, context creation, validation, quality ownership
- Establish working rhythm with Agent Manager partner (daily sync, co-located if possible)
- Design systems that empower Agent Manager autonomy (not create dependency on you)

**Key mindset shift:**
**OLD Developer mindset:** "I'll build it perfectly, then hand it off"
**NEW Developer mindset:** "I'll build infrastructure that Agent Manager can iterate on daily, reaching 95%+ through rapid feedback"

**Leverage model:** One Developer can support 5-8 Agent Managers if architecture enables autonomy.

---

### Module 3: S1 - Choosing AI Technology (Brief: 10 min)

**Note:** Full module is 18 min. As Developer, focus on these sections:

**Section 3: Custom Agentic AI (3 min)**
- What you're building: Instruction-driven reasoning with domain expert's context
- Why custom: Model quality control, sophisticated retrieval, interface flexibility, advanced capabilities
- Architecture implications: LLM + Custom tools + Deep integration + Context management

**Section 5: Context Engineering Advantage (4 min)**
- Four control dimensions: Model choice, Retrieval logic, Capability design, Interface design
- What Agent Manager provides: Documented process, rubrics, examples
- What you build: Retrieval engine, reflection strategies, verification loops, custom interfaces

**Section 6: Three Solution Categories (3 min)**
- Category 1: Static Information (document retrieval + explanation)
- Category 2: Dynamic Content (API integrations + data synthesis)
- Category 3: Workflows & Analyzers (structured frameworks + scoring)
- Architectural patterns for each category

**Key understanding:**
- Know which architectural pattern fits the solution category
- Understand that context quality (Agent Manager's work) determines output quality
- Recognize your role: Build the engine, Agent Manager provides the fuel (context)

---

### Module 4: S2 - Understanding Agents (12 min)

**Why you need this:** Architectural foundation for building agents

**What you'll learn:**
- **Four components:** LLM (reasoning), Tools (actions), Memory (context persistence), Autonomy (goal-directed behavior)
- How to architect each component effectively
- The agentic spectrum: Chat → Basic tools → No-code platforms → Iterative agents (you build this) → Multi-agent
- Evaluation framework (helps you assess vendor tools and libraries)
- Current limitations of AI agents (inform your architectural decisions)

**Your role application:**
- **LLM selection:** Choose right model for each task (Claude Opus for complex reasoning, GPT-4 Turbo for analysis, Haiku for simple tasks)
- **Tools architecture:** Design function calling interface, error handling, retries
- **Memory implementation:** Conversation history, project state, cross-session persistence
- **Autonomy patterns:** Planning, self-correction, escalation rules

**Architectural patterns:**

**LLM Layer:**
- Model router (different models for different tasks)
- Prompt templates (consistent formatting)
- Temperature control (deterministic vs creative)

**Tools Layer:**
- Function registry (available actions)
- Type safety and validation
- Error handling and retries
- Rate limiting and cost control

**Memory Layer:**
- Short-term: Conversation buffer
- Long-term: Vector database for retrieval
- Project memory: File system awareness
- Session management

**Autonomy Layer:**
- Planning: Break goals into steps
- Reflection: Verify outputs before committing
- Escalation: When to route to human

---

### Module 5: S3 - Managing AI (25 min)

**Why you need this:** Partnership dynamics and multi-agentic architecture

**Part 1: The Management Shift (3 min) - Brief**

**Understand:**
- Agent Manager needs to "manage" AI (like managing people)
- Your role: Enable their management capability through architecture
- Success = Agent Manager can test, identify issues, and iterate autonomously

---

**Part 2: Level 3.5 Tools (3 min)**

**Awareness:**
- Agent Managers may prototype with Cursor, Claude Code before involving you
- This is GOOD - they prove value, learn what AI needs, define requirements
- Your role: Take prototype to production (integrations, scale, reliability)

**When Agent Manager calls you in:**
- They've proven the value with prototype
- They have initial context structured
- They know what integrations are needed
- Your job: Build production version they can continue iterating on

---

**Part 3: Context Engineering (8 min) - Understand the Process**

**5-Step Methodology (Agent Manager's work):**
1. Process Mapping - They document workflow
2. Data Identification - They list required information
3. Source Mapping - They identify sources (you handle API integrations)
4. Structure Definition - They create FAQs, rubrics, templates, examples
5. Validation - They test outputs and identify gaps

**Your architectural support:**

**For Step 3 (Source Mapping):**
- Build API connectors to systems (HRIS, CRM, databases)
- Create data pipelines (ETL if needed)
- Handle authentication and rate limiting

**For Step 4 (Structure Definition):**
- Design context storage (vector DB, file system, hybrid)
- Build retrieval engine (semantic search, tagging, filtering)
- Implement hierarchical context loading

**For Step 5 (Validation):**
- Create testing interface for Agent Manager
- Build confidence scoring (when to escalate)
- Implement logging and error tracking
- Enable A/B testing (compare context versions)

**Critical architectural pattern:**
Agent Manager edits context files → Your system auto-loads → Agent Manager tests immediately

**No code changes required for context iteration.**

---

**Examples Review (2 min):**

**HR Onboarding:** Static information retrieval
- Architecture: Vector DB for handbook, semantic search, templated responses
- Integrations: HRIS (BambooHR), Benefits (Zenefits)
- Context: 150-page handbook structured hierarchically

**Sales Call Analyzer:** Multi-agentic
- Subprocess 1: Transcription (Whisper API)
- Subprocess 2: Evaluation (pure LLM reasoning with sales methodology context)
- Subprocess 3: Report generation (CRM integration, Slack notifications)
- Your orchestration: Sequential flow with error handling

**Marketing Content Quality:** Workflow analysis
- Architecture: Document upload → LLM evaluation against 8 criteria → Scored output
- No external APIs (pure reasoning)
- Context: Brand guidelines, rubrics, annotated examples

---

**Part 4: Multi-Agentic Systems (7 min) ⭐ IMPORTANT**

**When to break into subprocesses:**
- Distinct phases with different tools (transcription vs reasoning vs formatting)
- Different context types (technical specs vs business rules)
- Reusable components across solutions

**Architecture patterns:**

**Sequential Flow (Most Common):**
```
Input → Subprocess 1 → Subprocess 2 → Subprocess 3 → Output
```
- Example: Sales Call Analyzer (Transcribe → Evaluate → Report)
- Simple orchestration, easy to debug
- Each subprocess has distinct: Purpose, Tools, Workflow, Context, Output

**Parallel Fan-Out:**
```
Input → [Subprocess 1, Subprocess 2, Subprocess 3] → Merge → Output
```
- Example: Document analysis (Extract text, Extract images, Extract tables) → Merge
- Faster processing (parallel execution)
- Need merge strategy

**Conditional Routing:**
```
Input → Router → [Path A, Path B, Path C] → Output
```
- Example: Support ticket (Categorize → Route to: Technical, Billing, General)
- First subprocess decides which path
- Different specialized agents for each category

**Your implementation considerations:**
- **State management:** How does output from one subprocess feed next?
- **Error handling:** What if Subprocess 2 fails? Retry? Escalate? Fallback?
- **Monitoring:** Track performance of each subprocess independently
- **Context isolation:** Each subprocess has its own context scope
- **Reusability:** Can Subprocess 1 (transcription) be reused across solutions?

**Example architecture (Sales Call Analyzer):**

```python
# Pseudo-code pattern
class SalesCallAnalyzer:
    def __init__(self):
        self.transcriber = TranscriptionSubprocess()
        self.evaluator = EvaluationSubprocess()
        self.reporter = ReportingSubprocess()

    def process(self, audio_file):
        # Subprocess 1
        transcript = self.transcriber.run(audio_file)
        if not transcript.success:
            return Error("Transcription failed")

        # Subprocess 2
        evaluation = self.evaluator.run(
            transcript=transcript.text,
            context=load_sales_methodology()
        )
        if evaluation.confidence < 0.7:
            escalate_to_human(evaluation)

        # Subprocess 3
        report = self.reporter.run(
            evaluation=evaluation,
            template=load_template(),
            integrations=[CRM, Slack]
        )

        return report
```

**Agent Manager's role:** Define requirements for each subprocess
**Your role:** Implement orchestration, error handling, monitoring

---

**Part 5: Agent Manager vs Developer Scope (2 min)**

**Clear boundaries:**

**Agent Manager can build with Level 3.5:**
- Documentation systems (file-based)
- Simple automations (no deep integrations)
- Prototypes
- Content analysis

**You build:**
- Production deployment (hundreds/thousands of users)
- System integrations (APIs, databases, real-time data)
- Multi-agentic orchestration
- Advanced capabilities (reflection, verification, custom tools)
- Performance optimization
- Security and reliability

**Your goal:** Enable Agent Manager autonomy where possible, provide expertise where needed.

---

## Your Technical Toolkit

### Core Technologies

**LLM APIs:**
- Anthropic Claude (Opus, Sonnet, Haiku)
- OpenAI GPT-4, GPT-4 Turbo
- Google Gemini
- Model routing based on task complexity and cost

**Agent Frameworks:**
- LangChain (comprehensive, but heavy)
- LlamaIndex (retrieval focus)
- Semantic Kernel (Microsoft)
- Custom (often simpler for production)

**Vector Databases:**
- Pinecone (managed, easy)
- Weaviate (open source, flexible)
- Chroma (lightweight, local)
- pgvector (PostgreSQL extension)

**Orchestration:**
- Airflow (complex workflows)
- Temporal (reliable, stateful)
- Custom (simple sequential flows)

**Deployment:**
- Docker + Kubernetes (scale)
- Serverless (AWS Lambda, Google Cloud Functions)
- FastAPI + Gunicorn (API serving)

### Architecture Patterns

**Pattern 1: Simple Q&A (Category 1 - Static Information)**

```
User Query → Embedding → Vector Search → Context Retrieval → LLM + Prompt → Response
```

**Components:**
- Vector DB with embedded documents
- Semantic search for relevant context
- Prompt template combining query + context
- LLM generates answer

**Agent Manager iteration:** Updates documents → Re-embed → Test

---

**Pattern 2: Dynamic Data Retrieval (Category 2 - Dynamic Content)**

```
User Query → Intent Detection → API Calls → Data Aggregation → LLM Synthesis → Response
```

**Components:**
- Intent classifier (which APIs to call)
- API connectors (authentication, rate limiting)
- Data normalization
- LLM synthesizes findings

**Agent Manager iteration:** Updates intent rules, synthesis prompts → Test

---

**Pattern 3: Structured Evaluation (Category 3 - Workflows & Analyzers)**

```
Input → Extract Features → Apply Rubrics → Score → Generate Report → Deliver
```

**Components:**
- Feature extraction (key elements from input)
- Scoring engine (apply rubrics from context)
- Evidence extraction (quote supporting text)
- Report generator (structured output)

**Agent Manager iteration:** Updates rubrics, examples, templates → Test

---

**Pattern 4: Reflection & Verification**

```
Input → Draft Response → Self-Critique → Revise → Verify Against Sources → Final Output
```

**Components:**
- Dual LLM calls (generate, then critique)
- Source verification (check citations)
- Confidence scoring
- Escalation if low confidence

**Agent Manager iteration:** Updates critique criteria, confidence thresholds → Test

---

### Enabling Agent Manager Autonomy

**Key architectural principle:** Agent Manager should be able to iterate without you

**Implementation:**

**1. Context as Configuration (Not Code)**

❌ **Bad:** Context hardcoded in Python
```python
def get_pto_policy():
    return "15 days per year, accrues 1.25 per month..."
```
Agent Manager can't update → Requires Developer for every change → Slow iteration

✅ **Good:** Context in editable files
```yaml
# contexts/hr_policies.yaml
pto:
  annual_days: 15
  accrual_rate: 1.25
  description: |
    Employees receive 15 days PTO per year,
    accruing at 1.25 days per month...
```
Agent Manager edits YAML → System reloads → Test immediately

---

**2. Hot-Reloading Context**

```python
class ContextManager:
    def __init__(self, context_dir):
        self.context_dir = context_dir
        self.watcher = FileSystemWatcher(context_dir)

    def load_context(self):
        # Reload from files
        return load_yaml(f"{self.context_dir}/policies.yaml")

    def on_file_change(self):
        # Auto-reload when Agent Manager edits files
        self.context = self.load_context()
        log("Context reloaded - ready for testing")
```

**Result:** Agent Manager edits file → Save → System auto-reloads → Test in 30 seconds

---

**3. Testing Interface for Agent Manager**

Build simple UI or CLI where Agent Manager can:
- Input test scenarios
- See outputs
- Review confidence scores
- Track errors

```python
# Simple CLI for Agent Manager testing
@app.command("test")
def test_agent(scenario: str, category: str = "hr"):
    context = load_context(category)
    result = agent.run(scenario, context)

    print(f"Input: {scenario}")
    print(f"Output: {result.response}")
    print(f"Confidence: {result.confidence}")
    print(f"Sources: {result.sources}")

    if result.confidence < 0.8:
        print("⚠️  LOW CONFIDENCE - Review needed")
```

---

**4. Version Control for Context**

Agent Manager edits context → Git commit → A/B test old vs new

```bash
# Agent Manager workflow
$ edit contexts/sales_rubrics.yaml  # Update scoring criteria
$ git commit -m "Clarify discovery scoring (5 vs 3)"
$ python test_agent.py --version HEAD  # Test new version
$ python test_agent.py --version HEAD~1  # Compare to previous
```

**Your infrastructure:** CI/CD pipeline that deploys context changes automatically

---

## Common Developer Challenges & Solutions

**Challenge 1: Agent Manager wants you to implement every context change**

**Problem:** You're the bottleneck, can't achieve 10-20 iterations/day

**Solution:**
- Refactor context into editable files (YAML, JSON, Markdown)
- Build hot-reloading so changes take effect immediately
- Create testing interface Agent Manager can use independently
- Train Agent Manager: "You can edit these files directly, test yourself"
- Measure success: How many iterations can Agent Manager do without you?

---

**Challenge 2: Debugging LLM behavior is hard (non-deterministic outputs)**

**Solution:**
- **Logging:** Log every LLM call (input, output, model, temperature, timestamp)
- **Reproducibility:** Set seed for deterministic testing (temperature=0)
- **Prompt versioning:** Track prompt templates in git
- **A/B testing:** Compare prompts/models with same inputs
- **Confidence scoring:** LLM evaluates its own output quality
- **Show reasoning:** Use Chain-of-Thought prompting, log intermediate steps

Example:
```python
response = llm.complete(
    prompt=prompt,
    temperature=0,  # Deterministic
    seed=42,  # Reproducible
    log_metadata={
        "agent_manager": "Sarah",
        "context_version": "v1.3",
        "test_scenario": "pto_request"
    }
)
```

---

**Challenge 3: How to handle hallucinations (LLM making up information)?**

**Solution:**
- **Grounding:** Only generate from provided context, don't use LLM's training data
- **Source citation:** Require LLM to cite sources for every claim
- **Verification:** Second LLM call to verify answer against sources
- **Confidence scoring:** Escalate to human if uncertain
- **Validation rules:** Agent Manager defines what's acceptable

Example reflection pattern:
```python
# Step 1: Generate answer
answer = llm.complete(f"Answer this question: {question}\nContext: {context}")

# Step 2: Verify answer
verification = llm.complete(f"""
Check if this answer is supported by the context.
Answer: {answer}
Context: {context}

Is the answer accurate and grounded in context?
If no, explain what's wrong.
""")

if "not accurate" in verification.lower():
    escalate_to_human(question, answer, verification)
```

---

**Challenge 4: Managing costs (LLM API calls are expensive at scale)**

**Solution:**
- **Model routing:** Use cheaper models for simple tasks (Haiku for classification, Opus for complex reasoning)
- **Caching:** Cache common queries (hash query → check cache → only call LLM if miss)
- **Prompt optimization:** Shorter prompts = lower cost
- **Batch processing:** Process multiple items in single LLM call when possible
- **Monitoring:** Track cost per interaction, set budgets

Example:
```python
def route_model(task_complexity):
    if task_complexity == "simple":
        return "claude-haiku"  # $0.25/1M tokens
    elif task_complexity == "medium":
        return "claude-sonnet"  # $3/1M tokens
    else:
        return "claude-opus"  # $15/1M tokens

# Cost optimization
@cache(ttl=3600)  # Cache for 1 hour
def get_pto_policy():
    # Avoid calling LLM for same question repeatedly
    pass
```

---

**Challenge 5: Production deployment at scale (hundreds/thousands of users)**

**Solution:**
- **Load balancing:** Multiple instances behind load balancer
- **Rate limiting:** Prevent abuse, manage costs
- **Monitoring:** Track latency, errors, user satisfaction
- **Graceful degradation:** Fallback to human if agent fails
- **Async processing:** Don't block users waiting for slow LLM calls
- **Queue system:** Handle spikes in traffic

Architecture:
```
Users → API Gateway → Load Balancer → [Agent Instance 1, Agent Instance 2, ...] → LLM APIs
                                    → [Queue System] → Background Workers
                                    → Monitoring Dashboard
```

---

## Rapid Iteration Architecture Checklist

**Enable 10-20 iterations/day:**

✅ **Context is configuration**
- [ ] Context stored in files (YAML, JSON, Markdown), not code
- [ ] Agent Manager can edit files directly
- [ ] File structure is clear and documented

✅ **Hot-reloading**
- [ ] System detects context file changes
- [ ] Auto-reloads without manual restart
- [ ] Reload time < 30 seconds

✅ **Testing interface**
- [ ] Agent Manager can input test scenarios
- [ ] Clear output display (response, confidence, sources)
- [ ] Error messages actionable (what to fix in context)

✅ **Version control**
- [ ] Context files in git repository
- [ ] Agent Manager can commit changes
- [ ] Can A/B test different context versions
- [ ] Rollback easy if change makes things worse

✅ **Deployment automation**
- [ ] Context changes deploy automatically (CI/CD)
- [ ] Deployment time < 5 minutes
- [ ] No Developer intervention required for context updates

✅ **Monitoring**
- [ ] Track iterations per day (goal: 10-20)
- [ ] Track accuracy over time (goal: 70% → 95%)
- [ ] Alert if accuracy drops (context regression)

---

## Your First Project: Technical Checklist

**Week 1: Infrastructure Setup**

**Day 1-2: Architecture Design**
- [ ] Choose LLM API (Claude, OpenAI, or both)
- [ ] Choose vector DB (if needed for retrieval)
- [ ] Design context storage (files + git)
- [ ] Plan API integrations (systems Agent Manager identified)
- [ ] Sketch architecture diagram (share with Agent Manager)

**Day 3-5: Core Infrastructure**
- [ ] Set up LLM API client (with error handling, retries)
- [ ] Implement context loading system (hot-reload capability)
- [ ] Build testing interface (CLI or simple UI)
- [ ] Set up git repo for context versioning
- [ ] Create development environment for Agent Manager

---

**Week 2: Integration & Tools**

**Day 6-10: Custom Tools**
- [ ] Implement API connectors (to systems Agent Manager needs)
- [ ] Build retrieval engine (if Category 1/2)
- [ ] Create scoring engine (if Category 3)
- [ ] Implement error handling and logging
- [ ] Test each tool independently

---

**Week 3-4: Agent Manager Partnership Begins**

**Day 11-28: Rapid Iteration Phase**
- [ ] Agent Manager provides initial context
- [ ] You implement context loading
- [ ] Daily sync: Review results, identify gaps, update
- [ ] Track: iterations per day (targeting 10-20)
- [ ] Build additional tools as needed

**Your daily rhythm:**
- Morning: Sync with Agent Manager on yesterday's tests
- Implement: Technical blockers or new tools needed
- Afternoon: Agent Manager tests new version
- Evening: Review logs, identify issues for tomorrow

---

**Week 5-6: Validation & Refinement**

**Day 29-42: Quality Improvement**
- [ ] Implement confidence scoring
- [ ] Build escalation rules (low confidence → human)
- [ ] Add reflection/verification if needed
- [ ] Optimize performance (caching, model routing)
- [ ] Agent Manager validates accuracy (targeting 95%+)

---

**Week 7-8: Production Preparation**

**Day 43-56: Deployment**
- [ ] Set up production environment (Docker, K8s, or serverless)
- [ ] Implement monitoring (latency, errors, costs)
- [ ] Build user interface (if not already done)
- [ ] Set up alerts (errors, performance degradation)
- [ ] Create rollback plan
- [ ] Deploy to production
- [ ] Monitor closely for first week

---

## Key Relationships

**With Agent Manager Partner:**
- **Daily:** Iteration cycles (10-20 per day during active development)
- **You provide:** Infrastructure, tools, deployment, technical fixes
- **They provide:** Process knowledge, context, validation, gap identification
- **Success:** They can iterate autonomously (edit context, test immediately, identify issues)

**With AI Champion:**
- **Weekly:** Technical challenges, architecture decisions, best practices
- **You request:** Clarity on scope, prioritization, additional resources if needed
- **They provide:** Strategic guidance, budget approval, connection to other Developers
- **Success:** You're building reusable patterns, sharing learnings across team

**With Other Developers:**
- **Ongoing:** Share architecture patterns, libraries, debugging strategies
- **Collaborate:** Build shared infrastructure (model router, monitoring, deployment pipeline)
- **Learn:** Multi-agentic patterns, new LLM capabilities, cost optimization
- **Success:** Team velocity increases, avoid reinventing solutions

---

## Success Metrics for Developers

**Iteration Enablement:**
- Agent Manager can perform 10-20 test cycles/day without your intervention
- Context change → deployed → tested in < 10 minutes
- Agent Manager autonomy: 80%+ of iterations don't require you

**Solution Quality:**
- Accuracy: Reaches 95%+ through iterations
- Reliability: 99.9% uptime in production
- Performance: < 5 second response time (p95)
- Cost efficiency: < $0.10 per interaction

**Developer Leverage:**
- Supporting: 5-8 Agent Managers simultaneously
- Reusability: 60%+ of code reused across projects
- Deployment: < 1 hour from code commit to production

**Agent Manager Satisfaction:**
- They feel empowered (not blocked by you)
- They understand what you built (not a black box)
- They know when to call you vs iterate themselves
- Rating: 4.5+/5 on partnership effectiveness

---

## Related Resources

**Core Curriculum:**
- F1: Five Levels Framework (iteration economics)
- F2: Organization Structure (partnership model)
- S2: Understanding Agents (architectural components)
- S3: Managing AI (multi-agentic patterns)

**Technical Deep Dives:**
- LangChain documentation (framework patterns)
- Anthropic Claude docs (prompt engineering, best practices)
- OpenAI Cookbook (agent patterns, function calling)

**Architecture Examples:**
- S3 Part 3: HR, Sales, Marketing (real system architectures)
- Multi-agentic patterns: S3 Part 4 (Sales Call Analyzer breakdown)

**Community:**
- Connect with other AI Agent Developers in your organization
- Share infrastructure code (model routers, monitoring, deployment)
- Collaborate on multi-agentic patterns
