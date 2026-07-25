<img src=".github/assets/banner.svg" alt="borrowed-brain-pro" width="100%">

<p center>
  <a href="README.md"><b>English</b></a> | <a href="README.zh-CN.md"><b>简体中文</b></a>
</p>

<p center>
  <a href="https://DOTfei.github.io/borrowed-brain-pro/"><img src="https://img.shields.io/badge/Website-Live%20Demo-success" alt="Website"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
  <a href="profiles/INDEX.md"><img src="https://img.shields.io/badge/Profiles-18%20Ready-blue.svg" alt="Profiles"></a>
  <a href="SKILL.md"><img src="https://img.shields.io/badge/Skill-v0.3.0-6b4fbb" alt="Skill Version"></a>
  <a href="https://github.com/DOTfei/borrowed-brain-pro/actions"><img src="https://img.shields.io/github/actions/workflow/status/DOTfei/borrowed-brain-pro/build-bundle.yml?branch=main&label=CI" alt="Build Status"></a>
  <a href="https://github.com/DOTfei/borrowed-brain-pro/stargazers"><img src="https://img.shields.io/github/stars/DOTfei/borrowed-brain-pro?style=social" alt="Stars"></a>
</p>

![Borrowed Brain Pro Explainer Animation](.github/assets/explainer.gif)

> 🌐 **[Live Demo & Web Interface](https://DOTfei.github.io/borrowed-brain-pro/)**
> 
> **Borrowed Brain Pro is powered by Two Core Superpowers:**
> 1. **Distill Engine**: Research and distill ANY public figure (past or present) into a reusable, structured Thinking Profile (`profiles/name.md`).
> 2. **Decision Engine**: Apply pre-built or custom profiles (single lens or multi-lens contrast) to your real decision dilemmas.

---

## Generic Prompts vs. Borrowed Brain Pro

| Approach | Prompt Example | Output Quality | Value for Real Decisions |
| :--- | :--- | :--- | :--- |
| **Generic AI Prompt** | *"Think like Warren Buffett and advise me"* | Generic motivational quotes (*"Focus on long-term value"*) | **Zero** — Unverifiable, cliché summary |
| **Borrowed Brain Pro** | *"Apply Buffett's profile to my SaaS expansion deal"* | Layered research, sourced moments & **explicit failure boundaries** | **High** — Actionable decision lens with concrete limits |

---

## How It Works: 4 Modes, 1 Skill

```mermaid
flowchart TD
    User(["User Decision / Query"]) --> Router{"Mode Router"}

    Router -->|1. Distill Mode| Distill["4-Layer Web Research\n• Primary Voice & Interviews\n• Documented Decisions\n• Third-Party Biographies\n• Criticisms & Failures"]
    Distill --> Save["Save Profile\nprofiles/name.md"]

    Router -->|2. Apply Mode| Apply["Single Lens Reasoning\nApply 1 Profile → Surface Hidden Blind Spots"]

    Router -->|3. Compare Mode| Compare["Multi-Lens Contrast\nCompare 2+ Profiles → Map Conflicts & Gaps"]

    Router -->|4. Boardroom Mode| Boardroom["Virtual Board Debate\nConvene 3-4 Figures → Cross-Examine & Output Consensus"]

    Save --> Apply
    Save --> Compare
    Save --> Boardroom

    Apply --> Output["Decision Lens Output\n(Explicitly flags what the lens misses)"]
    Compare --> Output
    Boardroom --> Output
```

### Quick Commands

```bash
# 1. Distill a new figure
"Build a thinking profile for Charlie Munger"

# 2. Apply a single profile to your situation
"Using Munger's profile, should I expand into this new market?"

# 3. Compare two profiles on a dilemma
"Compare Jobs and Altman's profiles on my launch timing dilemma"

# 4. Convene a 4-Figure Virtual Boardroom Debate
"Convene the Boardroom (Jobs, Munger, Altman, Hastings) on my pricing dilemma"
```

---

## 🏛️ Feature Spotlight: Boardroom Mode (Virtual Board Meeting)

Simply install the Skill and say: `"Convene the Boardroom on [your dilemma]"`. The AI automatically launches a 3-round multi-figure debate:

```markdown
🏛️ VIRTUAL BOARDROOM DEBATE
Topic: "Should we lower our SaaS prices to capture market share?"
Board Members: Steve Jobs, Charlie Munger, Sam Altman, Reed Hastings

Round 1 — Opening Stances
- Munger: "Margin reduction increases risk. Invert the problem: why isn't the product valuable enough at full price?"
- Jobs: "Never compete on price. If you discount, you're admitting lack of quality."
- Altman: "Ship fast, iterate pricing dynamically. Scale users first, monetize later."
- Hastings: "Farm for dissent internally before changing prices. What do your sales reps privately say?"

Round 2 — Direct Cross-Examination
- Munger → Altman: "Your obsession with raw user growth ignores unit economics."
- Jobs → Hastings: "Seeking consensus with sales reps leads to mediocrity. Focus on product perfection."

Round 3 — Consensus & Irreconcilable Friction
- Unanimous Consent: Do not cut price without cutting non-essential features.
- Core Friction: Jobs (never discount) vs. Altman (scale first).

Executive Verdict & Blind Spot Warning:
- Action Plan: Maintain core price tier, launch a stripped-down entry tier.
- Board Blind Spot: None of these founders ran low-margin B2B SMB software.
```

*Example 2: Philosophy & Engineering Convergence*
```markdown
🏛️ VIRTUAL BOARDROOM DEBATE
Topic: "Should we implement a strict top-down engineering architecture or let teams organically decide their own tech stack?"
Board Members: Linus Torvalds, Laozi, Socrates

Round 1 — Opening Stances
- Torvalds: "Top-down architecture is garbage. Give them the absolute minimum constraints (like git's core data structure) and let them build what works."
- Laozi: "Wu Wei. Force breeds resistance. The best architecture is like water, flowing into the natural shape of the organization. Decentralize."
- Socrates: "Before deciding, what is your definition of 'strict'? Have you examined the false certainty that a single tech stack will solve your actual product problems?"

Round 2 — Direct Cross-Examination
- Socrates → Torvalds: "You say 'minimum constraints'. Who defines the minimum? If you dictate the minimum, are you not still a top-down architect?"
- Torvalds → Laozi: "Being like water is fine until the code doesn't compile. Water without a container is just a puddle. You still need good taste in data structures."

Round 3 — Consensus & Irreconcilable Friction
- Unanimous Consent: Heavy-handed top-down mandates will fail and cause engineering revolt.
- Core Friction: Torvalds (needs rigid low-level data structures) vs. Laozi (pure organic emergence).

Executive Verdict & Blind Spot Warning:
- Action Plan: Define only the API boundaries and core data structures. Let individual teams choose their internal tech stack.
- Board Blind Spot: This ignores enterprise compliance and security audit requirements which often mandate centralized tech stacks.
```

---

## 📉 Feature Spotlight: Verified Failure Audits

Standard AI regurgitates success quotes. **Borrowed Brain Pro audits blood-and-tears failures.** We study documented crises so you don't repeat them:

| Case File | Figure | The Disaster | Key Principle Extracted |
| :--- | :--- | :--- | :--- |
| **[Munger's Alibaba Trap](audits/munger-alibaba.md)** | Charlie Munger | 70% stock crash on $100M+ BABA bet | Low valuation cannot save an eroding tech moat; retail loyalty in tech decays fast. |
| **[Hastings' Qwikster Split](audits/hastings-qwikster.md)** | Reed Hastings | 800k lost subscribers & 77% stock drop | Never let internal org chart convenience force customer UX friction. Farm for dissent. |
| **[Jobs' NeXT Workstation Flop](audits/jobs-next.md)** | Steve Jobs | $12,000 price tag, 50k sales in 8 years | Aesthetic perfection cannot compensate for price ceiling blindness. |
| **[Musk's Model 3 Hell](audits/musk-model3-automation.md)** | Elon Musk | Stalled Fremont factory & sleeping under desk | Never automate a process step before deleting and simplifying it first. |

> **Run a Failure Audit**: Simply ask `"Run a Failure Audit on Munger's Alibaba investment"` to inspect the full post-mortem.

---

## 🎒 Feature Spotlight: Pre-Configured Domain Brain Packs

Don't know which individual profiles to pick? Load a pre-configured **Specialist Advisory Board**:

| Pack | Focus Domain | Board Members Included | Quick Command |
| :--- | :--- | :--- | :--- |
| **[Startup Founders Pack](packs/startup-founders.md)** | Product, Speed & Scaling | Jobs, Altman, Musk, Huang, Graham, Hastings | `"Convene the Startup Founders Pack on [dilemma]"` |
| **[Investors Pack](packs/investors-capital.md)** | Capital & Valuation | Buffett, Munger, Voss | `"Convene the Investors Pack on [deal dilemma]"` |
| **[Engineering Pack](packs/engineering-science.md)** | System Design & Code Taste | Torvalds, Musk, Feynman, Evans, Newport | `"Convene the Engineering Pack on [architecture dilemma]"` |
| **[Crisis Leadership Pack](packs/philosophy-crisis.md)** | Crisis & Mental Fortitude | Aurelius, Munger, Feynman, Newport | `"Convene the Crisis Leadership Pack on [crisis dilemma]"` |

---

## 📊 Feature Spotlight: Visual Decision Trees

No walls of text. Every core profile includes a native **Mermaid Decision Flowchart** rendering instantly on GitHub:

```mermaid
flowchart TD
    Deal(["Warren Buffett Deal Filter"]) --> CheckCompetence{"Within Circle of Competence?"}
    CheckCompetence -->|No| Reject1["❌ REJECT: Outside Circle of Competence"]
    CheckCompetence -->|Yes| CheckMoat{"Durable Competitive Moat & Pricing Power?"}
    CheckMoat -->|No| Reject2["❌ REJECT: Erodible Moat / Commodity Business"]
    CheckMoat -->|Yes| CheckMargin{"Margin of Safety (Price vs. Value)?"}
    CheckMargin -->|No| Wait["⏳ WAIT: Fair Business, Unfavorable Price"]
    CheckMargin -->|Yes| Execute["✅ EXECUTE: High-Conviction Investment"]
```

---

## 🏆 Feature Spotlight: Historical Crisis Evals

How do we prove our profiles accurately model real decision-making? **We run reverse blind-tests on historical crises before the outcome was known:**

| Crisis Benchmark | Figure | Historical Context | Accuracy Score |
| :--- | :--- | :--- | :--- |
| **[2008 Financial Crisis](evals/eval-2008-financial-crisis.md)** | Warren Buffett | Sept 2008 Lehman collapse & Wall St liquidity freeze | **98% Match** (Predicted exact 10% preferred stock + warrant structure) |
| **[1997 Apple Bankruptcy](evals/eval-1997-apple-near-bankrupcy.md)** | Steve Jobs | Aug 1997 Apple 90 days from insolvency | **100% Match** (Predicted exact 70% product cut & 2x2 grid) |
| **[2023 OpenAI Governance Crisis](evals/eval-2023-openai-governance-crisis.md)** | Sam Altman | Nov 2023 Board firing & reinstatement | **95% Match** (Predicted rapid external leverage & 5-day return) |
| **[2006 Nvidia CUDA Crisis](evals/eval-2006-nvidia-cuda-bet.md)** | Jensen Huang | Nov 2006 50% stock drop during CUDA multi-billion bet | **96% Match** (Predicted unwavering platform conviction over short-term margins) |

> **Run a Benchmark Eval**: Simply ask `"Run a Blind Eval on Buffett's 2008 liquidity decision"` to verify profile predictive accuracy.

---

## Profile Anatomy

Every principle in every profile is structured with rigorous epistemic boundaries:

```markdown
Principle: Actively solicit disagreement rather than assuming silence means agreement ("farming for dissent").

Where it shows up: Built directly out of the Qwikster failure (2011) — Hastings learned that multiple VPs privately doubted the split but didn't say so.

Where it likely breaks down: The principle was reactive, not proactive — instituted AFTER an 800k subscriber drop and 77% stock collapse.
```

---

## 18 Pre-Built Profiles (Ready Out-of-the-Box)

| Person | Domain | Core Strength / Best For |
| :--- | :--- | :--- |
| **[Warren Buffett](profiles/warren-buffett.md)** | Investing | Opportunity evaluation, valuation discipline, knowing when to say no |
| **[Charlie Munger](profiles/charlie-munger.md)** | Multidisciplinary | Inverting complex problems, mental models, avoiding stupidity & bias |
| **[Steve Jobs](profiles/steve-jobs.md)** | Product / Vision | Feature cuts, launch timing, aggressive simplification, relentless quality |
| **[Chris Voss](profiles/chris-voss.md)** | Negotiation | Breaking deadlocks, contract negotiations, handling hostile counterparts |
| **[Richard Feynman](profiles/richard-feynman.md)** | Research / Reasoning | Auditing logic, hunting for self-deception, explaining complex ideas simply |
| **[Cal Newport](profiles/cal-newport.md)** | Productivity | Focus protection, structural fixes over willpower, deep work systems |
| **[Reed Hastings](profiles/reed-hastings.md)** | Leadership | Farming for dissent, building candor, executing major strategic pivots |
| **[Travis Kalanick](profiles/travis-kalanick.md)** | Aggressive Growth | Market entry under resistance, speed vs. compliance trade-offs |
| **[Julia Evans](profiles/julia-evans.md)** | Technical Writing | Explaining hard topics simply, writing for past self, clear documentation |
| **[Sam Altman](profiles/sam-altman.md)** | AI & Startups | Iterative deployment, speed vs. safety, framing controversial decisions |
| **[Paul Graham](profiles/paul-graham.md)** | Startups & Essays | Doing things that don't scale, founder earnestness, keeping identity small |
| **[Linus Torvalds](profiles/linus-torvalds.md)** | Open Source / Architecture | Pragmatic software architecture, code simplicity, managing decentralized contributors |
| **[Elon Musk](profiles/elon-musk.md)** | Deep Tech / Engineering | First principles physics reduction, 5-step engineering algorithm, deletion of requirements |
| **[Jensen Huang](profiles/jensen-huang.md)** | Hardware / Platform | Betting on zero-billion-dollar markets, full-stack co-design, flat organizational execution |
| **[Marcus Aurelius](profiles/marcus-aurelius.md)** | Philosophy / Crisis | Stoic leadership under crisis, controlling internal response vs external chaos, duty |
| **[Friedrich Nietzsche](profiles/friedrich-nietzsche.md)** | Philosophy | Amor Fati, antifragility through adversity, self-overcoming |
| **[Socrates](profiles/socrates.md)** | Philosophy | Epistemic humility, Socratic questioning, auditing false certainty |
| **[Laozi](profiles/laozi.md)** | Philosophy / Management | Wu Wei (effortless action), water dynamics, organic emergence |

---

## Multi-Platform Installation Matrix

| Platform | Recommended Installation Method | One-Click Setup Instructions |
| :--- | :--- | :--- |
| **ChatGPT / Custom GPT** | **Single-File System Prompt** | Copy & paste full text of [`borrowed-brain-bundle.md`](borrowed-brain-bundle.md) into System Prompt |
| **Cursor / Windsurf AI** | **Native `.cursorrules`** | Clone repo or copy [`.cursorrules`](.cursorrules) into project root |
| **Ollama / Local LLMs** | **Modelfile / System Prompt** | Copy & paste [`borrowed-brain-bundle.md`](borrowed-brain-bundle.md) into Modelfile system field |
| **Claude / CLI** | **Git Clone (Skill)** | `git clone https://github.com/DOTfei/borrowed-brain-pro.git ~/.claude/skills/borrowed-brain-pro` |
| **Claude.ai** | **Skill / System Prompt** | Upload `SKILL.md` via Settings → Skills, or paste [`borrowed-brain-bundle.md`](borrowed-brain-bundle.md) |
| **Open WebUI** | **System Prompt** | Paste [`borrowed-brain-bundle.md`](borrowed-brain-bundle.md) into System Prompt field |

---

## Built-in Epistemic Guardrails

> [!IMPORTANT]
> - **No Fabricated Quotes**: Direct quotes stay under 15 words per source. Everything else is paraphrased.
> - **Traceable Claims**: Every claim must trace to a verified, documented public event or primary source.
> - **Public Figures Only**: Refuses to build profiles for private individuals to protect privacy.
> - **Limits Always Flagged**: Every response explicitly closes with *"Here is what this framework misses in your specific situation."*

---

## Contributing

Contributions, source improvements, and new distilled profiles are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Automated Bundle Build (Runs automatically via GitHub Actions)
python scripts/build_bundle.py
```

---

<p center>
  <i>License: <a href="LICENSE">MIT</a> · Author & Maintainer: <a href="https://github.com/DOTfei">DOTfei</a></i>
</p>
