# Decision Trees for Product Builders

> **Purpose:** Guided decision matrix for common technical and product dilemmas faced by independent creators and developers.

---

## Tree 1: Should I Build Feature X or Simplify Core UX?

```text
                               ┌────────────────────────────────┐
                               │ Is activation/retention for    │
                               │ existing core UX > 40%?        │
                               └───────────────┬────────────────┘
                                               │
                                      ┌────────┴────────┐
                                     YES                NO
                                      │                 │
                                      ▼                 ▼
                       ┌────────────────────────┐  ┌──────────────────────────────────┐
                       │ Explore Feature X:     │  │ STOP & SIMPLIFY:                 │
                       │ Validate demand with 5 │  │ Adding feature X will not fix    │
                       │ users before coding.   │  │ broken activation. Eliminate UI  │
                       │ (Altman/Hastings Lens) │  │ complexity on core flow.         │
                       └────────────────────────┘  │ (Jobs/Graham Lens)               │
                                                   └──────────────────────────────────┘
```

---

## Tree 2: Should I Charge Users Today or Stay Free for Growth?

```text
                               ┌────────────────────────────────┐
                               │ Are you incurring marginal     │
                               │ costs per user (e.g. LLM API,  │
                               │ cloud infra, storage)?         │
                               └───────────────┬────────────────┘
                                               │
                                      ┌────────┴────────┐
                                     YES                NO
                                      │                 │
                                      ▼                 ▼
                       ┌────────────────────────┐  ┌──────────────────────────────────┐
                       │ Charge immediately:    │  │ Run Willingness-to-Pay Test:     │
                       │ Validate true value &  │  │ Add a pricing tier page or pre-  │
                       │ protect capital margin.│  │ order link to verify demand.     │
                       │ (Buffett/Munger Lens)  │  │ (Graham/Altman Lens)             │
                       └────────────────────────┘  └──────────────────────────────────┘
```

---

## Tree 3: Should I Pivot or Keep Iterating Current Product?

```text
                               ┌────────────────────────────────┐
                               │ Have you launched 3 distinct   │
                               │ positioning/messaging tests    │
                               │ to target users?               │
                               └───────────────┬────────────────┘
                                               │
                                      ┌────────┴────────┐
                                     YES                NO
                                      │                 │
                                      ▼                 ▼
                       ┌────────────────────────┐  ┌──────────────────────────────────┐
                       │ Perform Inversion Audit│  │ Fix Messaging & Distribution:    │
                       │ If retention is 0 after│  │ Do not code new features; test   │
                       │ positioning tests,     │  │ different value framing directly │
                       │ pivot to adjacent problem││ with potential customers.        │
                       │ (Graham/Hastings Lens) │  │ (Graham Lens)                    │
                       └────────────────────────┘  └──────────────────────────────────┘
```
