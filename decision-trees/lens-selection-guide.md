# Lens Selection Guide

> **Purpose:** Help users quickly identify the right Decision Lens for their specific dilemma.
> 
> **Core Principle:** The lens you choose depends on what's uncertain, not who you admire.

---

## Quick Selection Flowchart

```text
What is your primary uncertainty?

├── "Will users want this?"
│   └── Use: Paul Graham MVP & User Validation Lens
│       Focus: Direct user contact, unscalable validation
│
├── "Is this too complex?"
│   └── Use: Steve Jobs Product Simplification Lens
│       Focus: Elimination, core value, saying no
│
├── "What could go wrong?"
│   └── Use: Charlie Munger Inversion Lens
│       Focus: Risk elimination, failure modes, bias check
│
├── "Am I moving fast enough?"
│   └── Use: Sam Altman Scale & Momentum Lens
│       Focus: Exponential curves, execution speed
│
├── "How do I build a feedback culture?"
│   └── Use: Reed Hastings Fast Feedback Lens
│       Focus: Candor, rapid iteration, dissent farming
│
└── "Is this the right capital allocation?"
    └── Use: Warren Buffett Capital Allocation Lens
        Focus: Margin of safety, circle of competence
```

---

## Decision Type → Lens Mapping

| Decision Type | Primary Lens | Secondary Lens | Why |
|---------------|--------------|----------------|-----|
| **Add feature or simplify?** | Jobs Simplification | Graham Validation | First check if core works, then validate demand |
| **Build more or ship now?** | Graham MVP | Altman Momentum | Speed matters more than perfection in early stage |
| **Pivot or persevere?** | Graham Validation | Munger Inversion | Check user signal, then invert failure scenarios |
| **Charge now or free growth?** | Buffett Capital | Graham Validation | Protect margin, but validate willingness-to-pay first |
| **Hire or stay lean?** | Hastings Culture | Buffett Allocation | Culture fit vs capital efficiency |
| **Enter new market or focus?** | Buffett Circle | Jobs Focus | Stay in competence, avoid distraction |
| **Speed vs quality tradeoff?** | Altman Momentum | Jobs Quality | Ship fast, but don't ship broken core |
| **Risk assessment needed?** | Munger Inversion | Hastings Feedback | Invert problems, farm for dissent |

---

## Scenario-Based Selection

### Scenario 1: "I have 50 features but low retention"

**Primary uncertainty:** Is the core value clear?

**Recommended lens:** Steve Jobs Product Simplification

**Why:** The problem is likely complexity diluting value, not missing features.

**Follow-up lens:** Paul Graham Validation — after simplifying, validate with users.

---

### Scenario 2: "Users are asking for 5 different features"

**Primary uncertainty:** Which ones actually matter?

**Recommended lens:** Paul Graham MVP & User Validation

**Why:** Don't guess — ask users directly what's blocking them.

**Follow-up lens:** Steve Jobs Simplification — after learning, cut the noise.

---

### Scenario 3: "I think this will work, but I'm not sure"

**Primary uncertainty:** What am I missing?

**Recommended lens:** Charlie Munger Inversion

**Why:** Instead of proving you're right, find where you're wrong.

**Follow-up lens:** Reed Hastings Fast Feedback — design a quick test.

---

### Scenario 4: "Should I take this risky opportunity?"

**Primary uncertainty:** What's the downside?

**Recommended lens:** Warren Buffett Capital Allocation

**Why:** Check margin of safety before asymmetric bets.

**Follow-up lens:** Sam Altman Momentum — if downside is bounded, upside matters more.

---

### Scenario 5: "My team isn't moving fast enough"

**Primary uncertainty:** What's blocking execution?

**Recommended lens:** Sam Altman Scale & Momentum

**Why:** Identify momentum killers and unblock them.

**Follow-up lens:** Reed Hastings Culture — check if culture is enabling speed.

---

## When to Use Boardroom Mode Instead

**Use Boardroom Mode when:**

- You've tried one lens and still feel uncertain
- The decision has 3+ stakeholders with different priorities
- You're facing a multi-dimensional problem (product + capital + team)
- You want to surface conflicts between different frameworks

**Don't use Boardroom Mode when:**

- You know exactly what's uncertain (use single lens)
- You need a quick answer (Boardroom takes more time)
- You're exploring one specific angle deeply

---

## Anti-Patterns to Avoid

1. **Don't use a lens just because you like the person.**
   - The question isn't "What would Steve Jobs do?" 
   - The question is "What's the primary uncertainty?"

2. **Don't use all lenses on every decision.**
   - That leads to analysis paralysis.
   - Start with one lens, add another only if needed.

3. **Don't treat lens output as a verdict.**
   - A lens surfaces an angle, not the answer.
   - You make the final decision.

4. **Don't skip Failure Boundaries.**
   - Every lens has blind spots.
   - Read the "Where it breaks down" section before applying.

---

## Quick Reference Card

| If your question starts with... | Use this lens |
|--------------------------------|---------------|
| "Should I add..." | Jobs Simplification |
| "Will users want..." | Graham Validation |
| "What if this fails..." | Munger Inversion |
| "Am I moving fast enough..." | Altman Momentum |
| "Is my team aligned..." | Hastings Culture |
| "Is this worth the investment..." | Buffett Allocation |

---

## Next Steps

After selecting a lens:

1. Read the full lens file in `lenses/`
2. Check the profile in `profiles/` for historical context
3. Review relevant failure audits in `failure-audits/`
4. Apply the lens to your decision
5. Output a Smallest Useful Test
