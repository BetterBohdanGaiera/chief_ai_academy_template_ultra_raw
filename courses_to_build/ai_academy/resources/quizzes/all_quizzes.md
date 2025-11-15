# Interactive Quizzes

This document contains quiz questions and exercises to be used throughout the presentation to engage participants and reinforce learning.

---

## Quiz 1: ML vs Agentic Principles

**Use After**: Module 3 (ML vs Agentic Principles)
**Duration**: 3-5 minutes
**Format**: Present scenario, pause for thought, reveal answer with explanation

### Instructions for Facilitator
1. Present the scenario
2. Ask participants: "Which approach would you use - Machine Learning or Agentic AI?"
3. Give 15-20 seconds for participants to think (or use polling tool if virtual)
4. Reveal answer and explanation
5. Invite brief discussion if questions arise

---

### Scenario 1: Subscription Churn Prediction

**Scenario**:
"Your company has 10,000 SaaS customers. You have 3 years of data including usage metrics, support tickets, billing history, and product engagement scores. You want to predict which customers are likely to cancel their subscriptions next month so your customer success team can proactively intervene."

**Question**: Which approach would you use - Machine Learning or Agentic AI?

**Answer**: **Machine Learning (Data-Driven)**

**Explanation**:
- This is a classic prediction problem using numeric data
- You have historical patterns in the data (customers who churned before)
- ML algorithms can find patterns like "customers who reduce usage by 40% and don't log in for 2 weeks have 75% churn probability"
- The input is structured, quantifiable data
- The output is a probability score (prediction)
- An ML engineer would build a predictive model using this historical data

**Why Not Agentic?**:
- Agentic AI works with text and reasoning, not numeric pattern recognition
- While Agentic AI could explain why a customer might churn (by analyzing support tickets), it can't predict future behavior from usage patterns
- The core task here is finding patterns in numbers, which is ML's strength

**Complementary Use**:
- ML predicts who will churn (probability score)
- Agentic AI could then analyze that customer's support history and suggest intervention strategies
- But the prediction itself needs ML

---

### Scenario 2: Employee Benefits Q&A

**Scenario**:
"Your HR team answers the same benefits questions over and over: 'How much PTO do I get?', 'What's covered by health insurance?', 'How do I enroll in 401k?' You have a 200-page employee handbook and benefits documentation. You want to automate answering these questions so HR can focus on strategic work."

**Question**: Which approach would you use - Machine Learning or Agentic AI?

**Answer**: **Agentic AI (Instruction-Driven)**

**Explanation**:
- This requires reasoning through text information (policies, procedures)
- The AI needs to understand questions and explain answers from documentation
- No numeric patterns to find - just document interpretation and explanation
- Agent Manager would structure the HR handbook and policies as context
- AI Agent Developer builds the assistant that reasons through this context
- Output is text-based explanations, not numeric predictions

**Why Not ML?**:
- ML needs numeric data with patterns; policy documents are text-based
- You're not predicting anything - you're retrieving and explaining information
- The task requires reading comprehension and reasoning, not pattern recognition

**This Is Category 1**: Static Information Chatbot (from Module 4)

---

### Scenario 3: Product Demand Forecasting

**Scenario**:
"Your retail business sells 500 SKUs across 50 store locations. You have 5 years of sales data including seasonality, promotions, weather patterns, local events, and competitor pricing. You need to forecast demand for next quarter to optimize inventory and prevent stockouts or overstock situations."

**Question**: Which approach would you use - Machine Learning or Agentic AI?

**Answer**: **Machine Learning (Data-Driven)**

**Explanation**:
- This is numeric forecasting based on historical patterns
- Massive amount of structured data with time-series patterns
- ML excels at finding correlations like "ski jackets sell 3x more when temperature drops below 40°F"
- Seasonal patterns, trends, and correlations are exactly what ML models capture
- Output is numeric forecasts (e.g., "Store #5 will need 47 units of Product X next month")

**Why Not Agentic?**:
- While Agentic AI could explain forecasts in plain language, it can't generate accurate predictions from numeric data patterns
- The core intelligence here is pattern recognition in numbers, not reasoning through text
- You need statistical models, not document interpretation

---

### Scenario 4: Sales Call Quality Analysis

**Scenario**:
"Your sales team conducts 200 calls per month. You want to analyze each call recording to evaluate performance across 12 criteria: discovery quality, talk-to-listen ratio, objection handling, value proposition delivery, next steps clarity, etc. You have a documented sales methodology and examples of good/bad calls. The goal is to provide structured feedback to help reps improve."

**Question**: Which approach would you use - Machine Learning or Agentic AI?

**Answer**: **Agentic AI (Instruction-Driven)**

**Explanation**:
- This requires applying expert judgment at scale (evaluating against criteria)
- The AI needs to understand conversations (text/audio content) and apply a structured evaluation framework
- You have a sales methodology (instructions) and evaluation criteria (context) that AI follows
- The task is reasoning through the conversation and scoring based on defined rubrics
- Agent Manager provides the evaluation framework, examples, and methodology documentation
- Output is structured scores with evidence, not numeric predictions

**Why Not ML?**:
- While ML could identify some patterns (talk time ratios, keyword frequency), it can't apply nuanced judgment like "Did the rep effectively handle objections?"
- The evaluation requires understanding context, intent, and quality - this is reasoning, not pattern matching
- Your expert criteria (what makes a good discovery) is the intelligence, not patterns in data

**This Is Category 3**: Custom Workflow/Analyzer (from Module 4)

**Multi-Agentic Note**: This is the example from Module 9 - multiple subprocesses working together

---

### Scenario 5 (Bonus): Combination Use Case

**Scenario**:
"You want to improve sales win rates. First, you need to identify which deals are most likely to close based on deal characteristics, historical data, and rep performance (deal size, industry, competitor presence, days in pipeline, etc.). Then, for high-probability deals, you want to automatically generate personalized follow-up emails based on the prospect's industry, pain points discussed, and previous conversation history."

**Question**: Which approach would you use - Machine Learning, Agentic AI, or Both?

**Answer**: **Both - ML feeds into Agentic**

**Explanation**:
- **Part 1 (Deal Scoring)**: Machine Learning
  - Numeric data: deal size, days in pipeline, engagement metrics
  - Historical patterns: What characteristics predict closed deals?
  - Output: Probability score (e.g., "This deal has 73% likelihood to close")

- **Part 2 (Email Generation)**: Agentic AI
  - Takes ML score as input plus conversation context
  - Reasons through pain points, industry, and communication history
  - Generates personalized email following company messaging guidelines
  - Output: Customized text that references specific prospect concerns

**How They Work Together**:
- ML provides the intelligence on "which deals to prioritize"
- Agentic provides the intelligence on "what to say to those prospects"
- ML prediction feeds as context into Agentic reasoning
- They're still separate systems, but outputs connect

**Real-World Example**:
This is exactly how sophisticated sales tools work - ML for scoring, Agentic for content generation. Each system does what it does best.

---

## Quiz 2: Context Engineering Practice

**Use After**: Module 8 (Context Engineering Methodology)
**Duration**: 5-7 minutes
**Format**: Present process, participants write answers, reveal sample answer, discuss

### Instructions for Facilitator
1. Present the process scenario (below)
2. Give participants 2 minutes to write answers to the questions
3. Reveal sample answer
4. Discuss: What did participants identify? What did they miss?
5. Emphasize: This thinking is exactly what Agent Managers do

---

### Practice Scenario: Customer Support Ticket Routing

**The Process**:
Your customer support team receives 500 tickets per week via email and web form. Currently, a junior support person manually reads each ticket and assigns it to the appropriate specialist team:
- Technical Issues → Engineering Support
- Billing Questions → Finance Support
- Account Access → IT Support
- Feature Requests → Product Team
- Bug Reports → QA Team

This manual routing takes 2-3 minutes per ticket and sometimes tickets go to the wrong team, causing delays.

You want to automate this routing using an Agentic AI solution.

---

### Questions for Participants

**Question 1**: What data or context would the AI need to route tickets correctly?

_(Give participants 2 minutes to write their answers)_

**Question 2**: Where would you get this information? (Systems, documents, or people)

_(Give participants 2 minutes to write their answers)_

---

### Sample Answer to Reveal

#### Question 1: Required Data/Context

**Core Requirements**:

1. **Product/Service Catalog**
   - List of all products and features
   - Technical vs non-technical components
   - Common issues associated with each

2. **Team Specialization Matrix**
   - What each team handles (scope of responsibility)
   - Specific keywords or issue types each team owns
   - Examples of tickets each team should receive

3. **Historical Ticket Data**
   - Past tickets with correct team assignments
   - Examples of ambiguous tickets and resolution notes
   - Common misrouting scenarios and how they were corrected

4. **Urgency/Priority Definitions**
   - What constitutes "critical" vs "standard" priority
   - SLA requirements for each team
   - When to escalate immediately

5. **Common Issue Categories**
   - Taxonomy of issue types
   - Mapping of categories to teams
   - Edge cases and how to handle them

6. **Routing Rules & Logic**
   - If multiple teams could handle it, who takes priority?
   - When to assign to multiple teams
   - Geographic or time zone considerations (if relevant)

#### Question 2: Information Sources

**Systems (APIs/Databases)**:
- **Support Ticketing System** (Zendesk, Jira Service Desk, Freshdesk):
  - Historical tickets with assignments
  - Resolution notes and outcomes
  - Current team assignments
  - Requires: API access for reading ticket history

- **Product Database / Documentation**:
  - Product catalog and feature list
  - Technical architecture overview
  - Known issues log
  - Requires: Read access to product knowledge base

- **HR/Org System**:
  - Team structures and members
  - Skill profiles (who knows what)
  - Availability and capacity
  - Requires: Org chart and team info

**Documents**:
- **Support Playbook** (if it exists):
  - Routing guidelines
  - Escalation procedures
  - Team responsibilities documentation
  - Location: Confluence, SharePoint, or internal wiki

- **SLA Documentation**:
  - Response time requirements by ticket type
  - Priority definitions
  - Location: Contracts, support policy docs

- **Product Documentation**:
  - User guides and technical docs
  - Common questions and answers
  - Location: Help center, documentation portal

**People (Subject Matter Experts)**:
- **Support Team Lead**:
  - Routing logic that isn't documented
  - Edge case handling rules
  - What makes tickets complex or simple
  - Method: Interview + shadow during routing work

- **Team Leads from Each Specialist Team**:
  - Detailed scope of what they handle
  - Examples of tickets they should/shouldn't get
  - Common misrouting patterns
  - Method: Questionnaire + example ticket review

- **QA Team Lead**:
  - How to distinguish bug vs feature request vs misunderstanding
  - What information is needed to route correctly
  - Method: Interview

**Gaps to Address**:
If no formal routing playbook exists, Agent Manager's first task is creating one by:
1. Documenting current routing logic from support team lead
2. Analyzing last 200 tickets to find patterns
3. Getting each specialist team to define their scope
4. Creating routing rules document

---

### Discussion Points

**Key Takeaways for Participants**:

1. **You Can't Just Say "Route Tickets"**
   - AI needs explicit knowledge of team responsibilities
   - Rules and examples must be documented
   - Edge cases need defined handling logic

2. **Gaps in Documentation Become Obvious**
   - Many teams don't have clear routing rules written down
   - "Everyone just knows" doesn't work for AI
   - Context engineering forces you to make tacit knowledge explicit

3. **Historical Data Is Valuable**
   - Past tickets with correct routing are examples for AI
   - Error patterns show what's ambiguous
   - This is training the AI through examples, not through data (not ML!)

4. **Multiple Information Sources**
   - Context comes from systems, documents, AND people
   - Agent Manager collects and structures all of it
   - This is why context engineering takes time upfront

5. **This Thinking Is Agent Manager Work**
   - If you could answer these questions, you could be an Agent Manager
   - It's process expertise + documentation skill, not technical coding
   - The value is in capturing and structuring knowledge

---

### Variations for Different Audiences

**If participants struggle to identify requirements**:
- Guide them: "How does the human know which team to assign to? What information do they use?"
- Prompt: "Think about an ambiguous ticket - how would you decide where it goes?"

**If participants identify too much**:
- Praise thoroughness: "Great - you're thinking comprehensively!"
- Prioritize: "Which of these are absolutely essential vs nice-to-have for version 1?"
- Remind: Start simple, prove value, then add sophistication

**If participants have direct experience with this problem**:
- Invite them to share: "In your support team, how do you handle routing today?"
- Connect to their reality: "What would you need to document to automate your process?"

---

## Quiz 3 (Optional): Use Case Category Matching

**Use After**: Module 4 (Agentic Solution Categories)
**Duration**: 2-3 minutes
**Format**: Quick matching exercise

### Instructions
Present 5 use cases. Participants identify which category each belongs to:
- Category 1: Static Information Chatbot
- Category 2: Dynamic Content Chatbot
- Category 3: Custom Workflow/Analyzer
- Category 4: Executive Tool

### Use Cases

1. **Marketing Asset Library Assistant**: Helps team members find brand assets, templates, and style guidelines by answering questions about brand standards.
   - **Answer**: Category 1 (Static - document-based knowledge)

2. **Real-Time Pipeline Dashboard**: Answers questions like "What's our pipeline value in EMEA?" by querying CRM live data.
   - **Answer**: Category 2 (Dynamic - real-time system queries)

3. **Meeting Note Analyzer**: Reads all leadership meeting transcripts and identifies recurring themes, decisions made, and follow-up items tracking.
   - **Answer**: Category 4 (Executive Tool - cross-functional intelligence)

4. **Proposal Review Agent**: Evaluates customer proposals before sending, scoring against quality criteria and suggesting improvements.
   - **Answer**: Category 3 (Analyzer - structured evaluation framework)

5. **Product Documentation Chatbot**: Answers developer questions about API endpoints, parameters, and integration steps.
   - **Answer**: Category 1 (Static - technical documentation)

---

## Facilitator Resources for Quizzes

### Creating Your Own Scenarios

If you want to customize Quiz 1 (ML vs Agentic) for your industry:

**ML Scenario Template**:
- Involves predicting future outcomes
- Based on historical numeric data
- Keywords: forecast, predict, probability, likelihood, trend, pattern
- Data types: Sales figures, user metrics, transaction history, time-series

**Agentic Scenario Template**:
- Involves reasoning through text or applying judgment
- Based on documentation, policies, or evaluation frameworks
- Keywords: analyze, evaluate, answer, explain, assess, categorize
- Context types: Handbooks, procedures, guidelines, criteria, examples

### Managing Time

**If Running Short on Time**:
- Skip Quiz 3 (optional)
- Do only 3 scenarios from Quiz 1 (skip scenarios 3 and 5)
- Reduce Quiz 2 think time from 2 min to 1 min per question

**If Participants Are Highly Engaged**:
- Add more discussion after each quiz
- Invite participants to share their own use cases
- Workshop real problems from the room using quiz frameworks

### Virtual Presentation Tips

**Using Polling Tools**:
- Set up poll with "ML" and "Agentic" as options
- Show results before revealing answer
- Use results to spark discussion ("50% said ML - let's talk about why")

**Using Chat**:
- Ask participants to type answers in chat for Quiz 2
- Review a few interesting responses
- Acknowledge creative thinking

**Breakout Rooms** (if time allows):
- For Quiz 2, send groups to breakout rooms for 3-4 minutes
- Groups discuss and write answers together
- Return and share one insight per group

---

## Answer Keys (Quick Reference)

### Quiz 1: ML vs Agentic
1. Subscription Churn: **ML** (numeric prediction)
2. Benefits Q&A: **Agentic** (document reasoning)
3. Demand Forecasting: **ML** (numeric patterns)
4. Sales Call Analysis: **Agentic** (structured evaluation)
5. Deal Scoring + Emails: **Both** (ML → Agentic)

### Quiz 2: Context Engineering
See full sample answer above - key is identifying:
- Team responsibilities
- Historical examples
- Routing rules
- Sources: Systems, documents, people

### Quiz 3: Category Matching
1. Marketing Asset: **Category 1**
2. Pipeline Dashboard: **Category 2**
3. Meeting Analyzer: **Category 4**
4. Proposal Review: **Category 3**
5. Product Docs: **Category 1**

---

## Assessment: Did Participants Understand?

**Green Flags** (Good understanding):
- Participants correctly identify 4-5 of Quiz 1 scenarios
- In Quiz 2, participants list team responsibilities and examples
- Active discussion and questions
- Participants connect concepts to their own work

**Yellow Flags** (Partial understanding):
- Participants struggle with "both" scenario (#5)
- Quiz 2 answers are vague ("We need data")
- Limited discussion or engagement
- Can't think of applications in their organization

**Red Flags** (Need re-teaching):
- Multiple wrong answers on basic scenarios (#1, #2)
- Quiz 2 answers miss the point entirely
- Participants still think "AI is AI" (don't see ML vs Agentic distinction)
- Questions reveal fundamental confusion

**If You See Red Flags**:
- Pause and revisit Module 3 core concepts
- Use more analogies and examples
- Slow down - don't rush to later modules
- Check in: "What's unclear? Let's clarify before moving on."
