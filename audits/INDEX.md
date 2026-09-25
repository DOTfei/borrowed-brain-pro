# Historical Failure Audits Index (历史败局案例索引库)

> **Purpose:** Empirical failure post-mortems mapping documented historical disasters to modern decision blind spots.

---

## Failure Case Registry

| Case File | Historical Figure & Event | Primary Blind Spot Type | Trigger Symptoms / User Dilemmas | Extracted Core Rule |
| :--- | :--- | :--- | :--- | :--- |
| [`jobs-next.md`](jobs-next.md) | Steve Jobs — NeXT Computer (1988–1993) | **Over-Engineering & Willingness-to-Pay Blindness** | "Polishing features before launch", "Building custom infra early", "Assuming users will pay for perfection", "Delayed release" | Product elegance and technical superiority cannot overcome a fundamental misalignment with customer economic reality. |
| [`munger-alibaba.md`](munger-alibaba.md) | Charlie Munger — Alibaba Investment (2021) | **Moat Erosion & Cheapness Trap** | "Assuming current monopoly/moat is safe", "Buying or entering because it's cheap", "Ignoring distribution shifts", "Regulatory blindness" | Low valuation and past dominance cannot save an eroding moat when distribution channels or regulatory fundamentals change. |
| [`hastings-qwikster.md`](hastings-qwikster.md) | Reed Hastings — Qwikster Split (2011) | **Internal Echo Chamber & Sudden Pricing/Packaging Shock** | "Founder conviction ignoring team doubts", "Radical pricing/feature split", "Moving without gradual user feedback", "Hubris of being logically right" | When you hold strong personal conviction, you are least likely to hear the dissent you most need to hear. |
| [`musk-model3-automation.md`](musk-model3-automation.md) | Elon Musk — Model 3 "Production Hell" (2018) | **Premature Automation & Process Bloat** | "Building complex AI/automation before manual validation", "Automating steps that should be deleted", "Over-tooling early" | Never automate a step that can be simplified or deleted. Automation accelerates existing operational flaws. |

---

## Blind Spot Taxonomy & Rapid Matching

### 1. Type: Over-Engineering & Unvalidated Demand
- **Trigger Signals:** Refusing to ship, obsessing over architecture elegance, spending weeks on non-core UX, high price without customer validation.
- **Match:** `audits/jobs-next.md`
- **Matching Lens:** `lenses/steve-jobs-product-simplification.md` (Inverted), `lenses/paul-graham-mvp-and-user-validation.md`

### 2. Type: Moat Illusion & The Cheap Trap
- **Trigger Signals:** "Competitors can't copy this", "It's so cheap/easy to do", relying on old network effects while TikTok/AI changes distribution.
- **Match:** `audits/munger-alibaba.md`
- **Matching Lens:** `lenses/warren-buffett-capital-allocation.md`, `lenses/charlie-munger-inversion-and-mental-models.md`

### 3. Type: Dissent Suppression & Abrupt Customer Friction
- **Trigger Signals:** Founder/Lead is 100% sure, no one on team dares object, splitting product packaging, massive sudden policy/pricing change.
- **Match:** `audits/hastings-qwikster.md`
- **Matching Lens:** `lenses/reed-hastings-culture-and-fast-feedback.md`

### 4. Type: Premature Automation & Tooling Complexity
- **Trigger Signals:** Building full agent pipelines before doing 10 manual chats, automating reports no one reads, adding microservices prematurely.
- **Match:** `audits/musk-model3-automation.md`
- **Matching Lens:** `lenses/elon-musk.md`, `lenses/paul-graham-mvp-and-user-validation.md`

