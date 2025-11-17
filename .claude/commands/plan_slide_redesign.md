# Plan Slide Redesign

Trigger the slide-planner agent to create detailed redesign specifications for presentation slides.

## Instructions

When the user invokes this command, spawn the `slide-planner` agent via the Task tool to create comprehensive specification files in the `specs/` folder.

**Your Task:**
1. Use the Task tool to spawn the `slide-planner` agent
2. Pass the user's complete input as the prompt to the agent
3. The agent will:
   - Extract source content from `courses_to_build/education_v2/`
   - Consult design pattern library
   - Plan image generation strategy (NO TEXT in background images)
   - Organize slides into groups (max 4 slides per specification)
   - Generate spec file(s) in `specs/` directory
   - Return the specification file path(s)
4. Display the agent's output to the user, including the spec file path(s)

**Example Invocation:**

```
User: /plan_slide_redesign F1 slides 1-4: title, why levels matter, levels overview, level 1
```

Your response should be:
```
I'll use the Task tool to spawn the slide-planner agent to create a specification for F1 slides 1-4.

[Task tool call with subagent_type="slide-planner" and prompt containing the full user input]

[After agent completes, display the output including spec file path]
```

## Key Points

- **Agent handles all planning logic** - You just trigger it and display results
- **Max 4 slides per spec** - Agent will split into multiple specs if needed
- **Agent returns file paths** - Make sure to show these to the user
- **No direct implementation** - This command only creates specs, not slides

## User Input

$ARGUMENTS
