# Pack: Builder Decision Pack

> **Target Audience:** Independent builders, indie hackers, solo developers, early-stage product creators.
> **Mission:** Resolve high-stakes builder dilemmas using evidence-backed decision lenses.

---

## 1. Included Lenses

| Lens Name | Key Perspective | When to Use |
| :--- | :--- | :--- |
| **Steve Jobs Product Simplification** | Ruthless focus, UX elimination, 1,000 "No"s | Feature creep, UI clutter, core experience confusion |
| **Paul Graham MVP & User Validation** | Do things that don't scale, talk to users, launch speed | Over-engineering, delayed launches, unvalidated ideas |
| **Charlie Munger Inversion Lens** | Invert, risk elimination, sunk-cost check | Blind optimism, continuing bad projects, risk auditing |
| **Reed Hastings Fast Feedback Lens** | Self-cannibalization,Context over control, rapid velocity | Pivot hesitation, architecture inertia, slow iteration |

---

## 2. Preset Dilemmas & Decision Trees

### Dilemma 1: Build vs. Validate
*Should I build more features before launching or put a raw version in front of users now?*

```text
               ┌──────────────────────────────┐
               │ Do you have 5 active users   │
               │ giving qualitative feedback? │
               └──────────────┬───────────────┘
                              │
                    ┌─────────┴─────────┐
                   YES                  NO
                    │                   │
                    ▼                   ▼
       ┌────────────────────────┐  ┌──────────────────────────────────┐
       │ Apply Jobs Lens:       │  │ Apply Graham Lens:               │
       │ Refine core flow based │  │ STOP CODING. Launch raw MVP or   │
       │ on observed usage.     │  │ manually onboard 10 users today. │
       └────────────────────────┘  └──────────────────────────────────┘
```

- **Graham Lens Guidance:** If you have zero active user conversations, any further code written is unvalidated hypothesis. Do things that don't scale.
- **Munger Lens Inversion:** What is the fastest way to waste 3 months? Building a perfectly polished app that nobody opens.

---

### Dilemma 2: Feature Addition vs. Simplification
*Users are asking for 5 different features. Should I add them all or keep the product focused?*

- **Jobs Lens Guidance:** Innovation is saying no to 1,000 things. If feature requests dilute the primary user flow, eliminate them or push them into optional plugins.
- **Hastings Lens Guidance:** Measure whether requested features increase 7-day retention or merely satisfy one vocal user.

---

### Dilemma 3: Pivot vs. Persevere
*Growth has flatlined. Is this a distribution problem or a lack of Product-Market Fit?*

```text
               ┌──────────────────────────────┐
               │ Do existing active users     │
               │ demonstrate high retention?  │
               └──────────────┬───────────────┘
                              │
                    ┌─────────┴─────────┐
                   YES                  NO
                    │                   │
                    ▼                   ▼
       ┌────────────────────────┐  ┌──────────────────────────────────┐
       │ Fix Distribution:      │  │ Pivot or Re-frame Problem:       │
       │ Keep product stable,   │  │ Core value prop is not landing.  │
       │ test new marketing     │  │ Run Munger Inversion audit on    │
       │ channels.              │  │ fundamental user assumptions.    │
       └────────────────────────┘  └──────────────────────────────────┘
```

---

## 3. Builder Decision Output Template

When executing the **Builder Decision Pack**, the system generates a structured **Decision Record**:

1. **Dilemma Statement:** Clear 1-sentence decision query.
2. **Lens Matrix:**
   - **Jobs View (UX/Simplification):**
   - **Graham View (Speed/Validation):**
   - **Munger View (Risk/Inversion):**
3. **Core Conflict:** Primary disagreement between lenses.
4. **Failure Audit:** Boundary condition to avoid.
5. **Actionable 48-Hour Experiment:** Immediate low-cost test.
