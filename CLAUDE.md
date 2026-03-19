# Project: sayt-s-harakter (By Your Site)

A Next.js 16 landing page for a web design agency targeting Bulgarian businesses.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + tw-animate-css
- **UI:** Shadcn UI (via `shadcn` package), `@base-ui/react`, `@radix-ui/react-slot`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body), Caveat (accent/handwritten)

## Project Structure

```
app/
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Home page — composes framer/ sections
  globals.css      # Tailwind v4 imports + CSS custom properties

components/
  framer/          # Primary page sections with Framer Motion animations
  sections/        # Alternative/additional section variants
  ui/              # Reusable UI primitives (button, background effects, etc.)

lib/
  utils.ts         # Utility helpers (cn, etc.)

.claude/
  agents/          # Subagent definitions
  skills/          # Skills (SKILL.md + scripts/)
```

## Key Conventions

- Dark background: `bg-[#0A0F1E]` set on `<body>` in layout
- CSS variables use `oklch()` color format
- Component imports use `@/` path alias
- All sections in `components/framer/` are the active ones used in `app/page.tsx`
- `components/sections/` contains alternative variants (not currently used on the page)

## Dev Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```

---

## Skills Architecture

You operate using Claude Code Skills — bundled capabilities that combine instructions with deterministic scripts. This architecture separates probabilistic decision-making from deterministic execution to maximize reliability.

**Layer 1: Skills (Intent + Execution bundled)**
- Live in `.claude/skills/`
- Each Skill = `SKILL.md` instructions + `scripts/` folder
- Claude auto-discovers and invokes based on task context
- Self-contained: each Skill has everything it needs

**Layer 2: Orchestration (Decision making)**
- This is you. Your job: intelligent routing.
- Read SKILL.md, run bundled scripts in the right order
- Handle errors, ask for clarification, update Skills with learnings
- You're the glue between intent and execution

**Layer 3: Shared Utilities**
- Common scripts in `execution/` (sheets, auth, webhooks)
- Infrastructure code (Modal webhooks, local server)
- Used across multiple Skills when needed

**Why this works:** if you do everything yourself, errors compound. 90% accuracy per step = 59% success over 5 steps. The solution is push complexity into deterministic code. That way you just focus on decision-making.

## Subagents

Subagents are lightweight agents with self-contained contexts, defined in `.claude/agents/`. They're cheaper, unbiased (no parent context leakage), and keep the parent context clean.

### Available Subagents
- `code-reviewer` - Unbiased code review with zero context. Returns issues by severity with a PASS/FAIL verdict.
- `research` - Deep research via web search, file reads, and codebase exploration. Returns concise sourced findings.
- `qa` - Generates tests for a code snippet, runs them, and reports pass/fail results.

### Design & Build Workflow

When building or modifying any non-trivial code (scripts, features, refactors), follow this loop:

1. **Write/edit the code** — Make your changes.
2. **Code Review** — Spawn `code-reviewer` subagent with the changed file(s). It reports issues back — it does NOT fix anything itself.
3. **QA** — Spawn `qa` subagent with the code. It generates tests, runs them, and reports results back — it does NOT fix anything itself.
4. **Fix** — The parent agent (you) reads the review and QA reports and applies all fixes.
5. **Ship** — Only after review passes and tests pass.

**Important:** Subagents are read-only reporters. All code changes happen in the parent agent.

For research-heavy tasks, spawn `research` subagent first to gather context without polluting the main conversation.

**Parallel execution:** When reviewing + QA'ing independent files, spawn both subagents in parallel using `run_in_background: true`.

## Operating Principles

**1. Skills auto-activate**
Claude picks the right Skill based on your request. Each Skill's description tells Claude when to use it.

**2. Scripts are bundled**
Each Skill has its own `scripts/` folder. Run scripts from there:
```bash
node .claude/skills/<skill-name>/scripts/<script>.js ...
```

**3. Self-anneal when things break**
- Read error message and stack trace
- Fix the script and test it again
- Update SKILL.md with what you learned
- System is now stronger

**4. Update Skills as you learn**
Skills are living documents. When you discover constraints, better approaches, or edge cases — update the SKILL.md. But don't create new Skills without asking.

## Self-annealing loop

Errors are learning opportunities. When something breaks:
1. Fix the script
2. Test it
3. Update SKILL.md with new flow
4. System is now stronger
