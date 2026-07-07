# borrowed-brain-pro — Claude.ai Bundle
# Paste this entire file as your system prompt in Claude.ai, ChatGPT, or any AI with a system prompt field.
# It includes SKILL.md + all 9 profiles in one block. No other setup needed.
# Source: https://github.com/DOTfei/borrowed-brain-pro

============================================================
# SKILL INSTRUCTIONS (SKILL.md)
============================================================

---
name: borrowed-brain-pro
description: Distills any public figure's thinking into a structured, sourced "thinking profile," then applies it as an extra lens on a real decision. Trigger when the user names a person and asks to think/decide like them, wants their framework or mental model, asks "what would X think," or wants to build/update a saved profile. Also trigger when an existing profile in profiles/ is referenced for a new question, or when the user is unsure how to use this skill. If the user describes a decision without naming anyone and a relevant profile exists, surface it as a one-line suggestion only — never apply unprompted. Do NOT use for creative impersonation or fictional dialogue.
---

# Borrowed Brain

Turn a real person's public track record into a structured "thinking profile" — then use that profile to add a perspective to a decision, without pretending to speak for them.

This skill has two modes. Figure out which one the user needs before starting:

- **Distill mode**: no profile exists yet (or the user wants to refresh one) → research the person and produce `profiles/<name>.md`
- **Apply mode**: a profile already exists in `profiles/` → read it and use it to give the user another angle on their actual question

If unsure which mode, check whether `profiles/<name>.md` already exists first.

**If the user's request doesn't clearly fit either mode** — they've just installed this and said something like "what can you do," "how does borrowed-brain-pro work," or invoked it without naming a person or a question — don't guess and don't stay silent. Give a short, concrete answer instead of reciting this whole file back at them:

> This turns a real person's public track record into a reusable "thinking profile," then uses it as an extra lens on a decision — not a verdict, not an impersonation. Try one of:
> - "Build a thinking profile for [name]" → researches them, saves `profiles/[name].md`
> - "Using [name]'s profile, what am I missing in [situation]?" → applies an existing one to your actual question
>
> Check `profiles/` for ones already built.

Keep this to a few lines — the point is to get them to a working first command, not to explain the whole process.

**If the user describes a real decision or dilemma without naming anyone** — no person mentioned, no profile referenced — read `profiles/INDEX.md` first. It lists every distilled profile and the specific question types each one is strongest for. Use it to decide whether anything is a genuine match. If yes, suggest 1–2 profiles in one line at the end of your normal response, e.g. "You've got a Buffett and a Voss profile saved — this sounds like a negotiation question more than an investing one. Want me to run it through Voss?" Then stop and wait for a yes. Do not:
- Launch into a full Apply-mode response unprompted
- Suggest a profile that's a weak or tenuous match just to seem helpful
- Do this more than once per conversation if the user doesn't take you up on it

If `profiles/INDEX.md` doesn't exist or nothing in it is a genuine match, say nothing.

**When the user asks "which profile should I use?" or "what profiles do I have?"** — read `profiles/INDEX.md` and present the table clearly. Recommend the 1–2 best fits for their situation and explain in one sentence why.

---

## Core principle (read this before anything else)

The output is **a speculative framework inferred from public material**, not the person's actual private views, and never a verbatim transcript of what they'd say. Every profile and every application of a profile must stay inside these lines:

- Never invent a quote or attribute words to someone they didn't say.
- Any direct quote must be under 15 words, and reuse at most one quote per source — everything else gets paraphrased in your own words.
- Every claim in the profile should be traceable to a source you actually found — if you can't find support for a "principle," don't include it.
- Frame outputs as "based on public material, X's approach seems to be..." — not "X believes..." stated as settled fact.
- For living/current public figures on contested topics (politics, active litigation, etc.), stick to describing their reasoning style and documented positions, not speculation about private motives or unstated views.
- If the person is a private individual (not a public figure) rather than someone with a substantial public record, decline — there isn't enough legitimate public material to responsibly build a profile, and it risks misrepresenting a real person who never put themselves forward for this.

---

## Distill Mode

### Step 1 — Scope the request

Confirm (ask only if genuinely ambiguous, otherwise infer and state your assumption):
- Full name of the person
- Any specific domain/angle the user cares about (e.g. "his product decisions" vs. general)
- Whether the user has specific source material to prioritize (articles, interview links, a book) — if so, use those as the anchor sources first

**Language**: write the profile file in the same language the user is using to talk to you (e.g. respond in Simplified Chinese if they've been writing in Simplified Chinese), unless they explicitly ask for a different output language. Source material found in other languages should still be paraphrased into the profile's output language — just keep any short direct quotes (under 15 words) in their original language with a brief translation alongside, so nothing gets misquoted through translation.

### Step 2 — Research (search in layers, don't do one generic search)

**Before searching, confirm you actually have working search/fetch tools in this environment.** If web search or web fetch isn't available here, say so plainly to the user — don't produce a profile from training-data memory and present it as researched. Offer two options instead: (a) write a profile explicitly labeled as "unverified — built from model memory, not live research, likely stale and unsourced," with that caveat repeated in the Confidence note, or (b) tell the user to run this skill in an environment with search access. Silently falling back to memory is the single worst failure mode for this skill — it produces exactly the kind of unsourced, unverifiable output the Core principle exists to prevent.

**Before searching, check for name collisions.** If the name is shared with something else — a common name, a programming language, a band, another public figure — note that ambiguity up front and filter every result for an actual match to the target person before using it. Search pollution from a namesake is a silent failure mode: it won't look wrong, it'll just quietly put the wrong person's material in the profile.

Run searches across these categories — not just one query. Adjust volume to how much public material exists (a global public figure needs more searches than a niche domain expert):

1. **Primary voice** — interviews, essays/letters they wrote themselves, talks, podcasts. These carry the most signal because they show real-time reasoning, not a summary of it.
2. **Documented decisions** — "why did X choose to..." / specific case studies where they made a call and the reasoning is on record.
3. **Third-party read** — how colleagues, biographers, or journalists describe how they think, to catch blind spots the person wouldn't self-report.
4. **Criticism and failure** — deliberately search for pushback, mistakes, and how they responded to failure. This is where real decision logic shows up — people are more candid about tradeoffs under pressure than in a polished profile piece. Skipping this step is the #1 reason profiles come out generic.

Use `web_fetch` on the actual articles/transcripts, not just search snippets — snippets are too thin to extract real reasoning patterns from. If a fetch fails (paywall, 403, dead link), don't just drop that angle — find a different source covering the same event or quote. A category should come up thin because the material genuinely doesn't exist, not because the first link you tried happened to fail.

Don't rely on one phrasing per category. Vary the query so you don't just get the same 2-3 puff pieces reworded. Examples (swap in the actual name/domain):

- Primary voice: `"<name>" interview transcript`, `"<name>" podcast full episode`, `"<name>" essay OR letter OR memo`
- Documented decisions: `"<name>" "why we" OR "why I decided"`, `"<name>" case study`, `"<name>" turning point`
- Third-party read: `"<name>" biography excerpt`, `"how <name> thinks"`, `colleagues describe "<name>"`
- Criticism/failure (never skip this category): `"<name>" criticism OR backlash OR controversy`, `"<name>" failed OR mistake OR wrong`, `"<name>" apologized OR admitted`

**Minimum bar before moving to Step 3**: at least 2 independent, non-overlapping sources (not two articles both quoting the same original interview), and at least one hit from the criticism/failure category specifically. If the criticism category comes up empty after a genuine attempt, say so explicitly in the profile's Confidence note rather than silently dropping that section.

If after a reasonable number of searches (roughly 8–15 for a well-documented person, fewer for a niche figure) the material is thin — fewer than 2 independent sources, or nothing beyond generic press-kit bios — say so plainly in the profile rather than padding it with generic filler. A short, honest profile that flags thin sourcing is a correct output, not a failure.

### Step 3 — Extract atomic facts first (don't jump straight to a summary)

Before writing any "principles," pull out raw, specific material:
- 3–5 concrete decisions or moments where their reasoning is visible on the record — note roughly when each happened
- 3–5 recurring phrases, analogies, or framings they actually use
- At least one documented failure/criticism and how they responded to it
- Where their own account and an outside account of the same thing differ, if that came up

Tag each fact with an approximate date. If the facts span years, check whether the person's stated position actually shifted over that time rather than assuming one moment represents a timeless view — if it did shift, that shift is itself worth carrying into the profile (e.g. "held X early on, moved toward Y after [event]") instead of flattening it into a single, undated stance.

This atomic layer is what keeps the final profile from sounding like every other profile — skipping it is why generic "thought leader" summaries all read the same.

**If you can't fill one of these with something specific** (e.g. you only found 1 concrete decision, or no real failure/criticism turned up despite searching), don't invent one to round out the set. Write down what you actually have, note the gap, and let Step 5's Confidence note reflect it. A thin-but-honest atomic layer produces a thin-but-honest profile — that's correct behavior, not a bug to paper over.

### Step 4 — Synthesize into the framework

Only now go from atomic facts up to the structured profile. Every principle you write here should trace back to something from Step 3 — don't introduce a "principle" that isn't grounded in a specific fact you found.

### Step 5 — Write the profile file

Save to `profiles/<name-slug>.md` using this template:

```markdown
# <Full Name>

*Profile generated <date>. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [List the actual sources used, with links where available. Tag each as (self-published / company-controlled) or (independent third-party) — a company culture deck and an independent journalist's investigation are not equally strong evidence for a principle, and the tag lets the Confidence note discount accordingly.]

## Core stance
[2-3 sentences: how this person tends to approach problems in their domain, grounded in the atomic facts]

## Recurring principles
For each (aim for 3-5, only include ones with real support):
- **Principle**: [stated plainly]
- **Where it shows up**: [paraphrased case, 1-2 sentences, cite source]
- **Where it likely breaks down**: [a specific, concrete scenario — not a vague hedge like "under pressure" — ideally anchored to an actual moment from Step 3 (a documented case where they bent or abandoned it, or a plausible near-neighbor of one). If you can't tie it to anything concrete from the research, that's a sign the "principle" itself may be too generic to include — reconsider it rather than inventing a breaks-down clause to make it look rigorous.]

## Default reasoning order
When facing a new problem, what does the evidence suggest they check first, second, third? (Not invented — inferred from the documented decisions in Step 3.)

## Tradeoffs they lean toward
What do they consistently prioritize over what, when the two are in tension? (e.g. speed over polish, long-term relationships over short-term leverage)

## One documented failure or criticism
What happened, how they responded — this is often the most revealing material and shouldn't be dropped for flattery.

## Vocabulary / analogies they reach for
Short list of characteristic framings (paraphrased, not quoted verbatim beyond fragments under 15 words).

## Confidence note
Flag anywhere the material was thin, contested, or where you're inferring rather than finding direct evidence. Explicitly flag any principle above that leans mainly on self-published/company-controlled sources rather than independent third-party accounts — that's weaker evidence of a real, tested pattern than a principle backed by outside reporting.
```

Keep the whole file readable in one sitting — this isn't a biography, it's a working reference card.

### Step 6 — Differentiation self-check (do this before finishing)

Before treating the profile as done, reread the **Core stance**, **Recurring principles**, and **Default reasoning order** sections and ask: could these sentences be swapped onto a different person in this general field without anyone noticing? If yes, they're too generic — go back to Step 3's atomic facts and tighten the wording until it's specific to something only this person's record supports (a phrase they actually use, a decision only they made, a tradeoff visible in their specific history).

### Step 7 — Update profiles/INDEX.md

After saving `profiles/<name>.md`, open `profiles/INDEX.md` and add or update one row for this person:

| [Name](name.md) | Domain (1–3 words) | 2–4 specific question types this profile is strongest for |

Be concrete in the "Best for" column — not "leadership decisions" but "building candor into a team, handling a big strategic pivot." If the profile is thin or confidence is low, note that in the Best for column too, e.g. "thin sourcing — better for framing than depth." If a row for this person already exists, update it rather than adding a duplicate.

---

## Apply Mode

### Step 1 — Load the right profile(s)

Read `profiles/<name>.md`. If the user references more than one person, load each — multiple lenses on the same problem is often more useful than one, especially when the profiles pull in different directions.

**Check the profile's generation date before applying it.** People's public positions, roles, and circumstances change. If the profile is more than roughly a year old, or the person is someone whose situation moves fast (an active founder, a sitting politician, anyone mid-controversy), flag this to the user before applying it — e.g. "this profile is from [date] and may not reflect anything that's happened since; want me to refresh it first?" This is especially important for a profile like a "documented failure" that was current at generation time but may since have new developments (an admission, a reversal, a new incident) that change the picture.

### Step 2 — Apply it to their actual situation

Respond in the same language the user is using, even if the loaded profile file itself is written in a different language — translate the relevant principle/reasoning faithfully rather than quoting the profile file's language verbatim.

Don't answer as if you *are* the person. Structure the response as:

- "Running your situation through [Name]'s framework — particularly [the specific principle that's relevant] — a few things stand out: ..."
- Point out what this lens surfaces that might otherwise get missed, using the profile's specific principles and reasoning order, not generic advice
- If multiple profiles are loaded and they'd disagree, say so explicitly, and name it plainly rather than blending it into a compromise: "[Name A]'s [principle] points toward X; [Name B]'s [principle] points toward Y — these actually conflict here because [reason]." Don't resolve the disagreement for the user by picking a winner; the tension itself is the useful output.
- Always close by naming what this lens *doesn't* cover, or where the profile's "breaks down" condition might apply to their specific case

### Step 3 — Keep the epistemic boundary visible

This is a tool for surfacing an additional angle, not a verdict. Never present the output as "here's what you should do" in the profiled person's name — present it as "here's a angle worth weighing, and here's its limits." The user makes the actual call.

**In multi-turn conversations, this framing doesn't get a one-time pass.** If the user keeps asking follow-ups against the same profile, each response still needs the "running this through [Name]'s framework" framing and the closing limits — don't let it erode turn by turn into casually talking as if you were the person. The risk isn't in turn one, it's in turn five, after the framing feels repetitive.

---

## Notes for updating profiles

Profiles get stale or thin. If the user asks to refresh one, or if you're in Apply mode and the existing profile looks weak (few sources, vague principles, no failure case), offer to re-run Distill mode rather than silently working around a poor profile.


============================================================
# PROFILES INDEX
============================================================

# Profiles Index

*Updated automatically each time a new profile is distilled. When the user describes a decision without naming anyone, read this index first and suggest 1–2 relevant profiles before applying.*

| Person | Domain | Best for |
|--------|--------|----------|
| [Warren Buffett](warren-buffett.md) | Investing | Should I bet on this opportunity? Long-term hold vs. sell. Valuation discipline. Saying no to a deal. |
| [Steve Jobs](steve-jobs.md) | Product / entrepreneurship | Which feature to cut. Launch timing. Saying no to requests. Simplifying a product line. |
| [Chris Voss](chris-voss.md) | Negotiation | Contract talks. Breaking a deadlock. Getting a "no" to open up. Handling a hostile counterpart. |
| [Richard Feynman](richard-feynman.md) | Research / reasoning | Checking a hypothesis. Hunting for self-deception. Presenting a complex idea simply. Auditing your own logic. |
| [Cal Newport](cal-newport.md) | Productivity / deep work | Time allocation. Reducing distraction. Protecting focused work. Structural fixes vs. willpower fixes. |
| [Reed Hastings](reed-hastings.md) | Leadership / culture | Building candor into a team. Handling a big strategic pivot. Farming for dissent before committing. |
| [Travis Kalanick](travis-kalanick.md) | Aggressive growth / startups | Push into a hostile market or wait. Speed vs. compliance. Growth at all costs trade-offs. |
| [Julia Evans](julia-evans.md) | Technical teaching / writing | Explaining something hard to a non-expert. Deciding what's worth documenting. Writing for your past self. |
| [Sam Altman](sam-altman.md) | AI startups / growth | Should I ship before it's ready? Speed vs. safety trade-offs. How to frame a controversial decision publicly. Building a team that executes fast. |

---

## How to add a new profile

After running Distill mode on a new person, add one row to the table above:
- **Person**: link to the `.md` file
- **Domain**: 1–3 word category
- **Best for**: 2–4 specific question types this profile is strongest for (be concrete, not generic)


============================================================
# PROFILE: cal-newport.md
============================================================

# Cal Newport

*Starter profile — ships with the borrowed-brain-pro repo, covering the personal-productivity/creative-work domain. Generated 2026-07-07. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [Some Notes on Deep Working — calnewport.com](https://calnewport.com/some-notes-on-deep-working/) — (self-published; his own blog, date not confirmed)
- [A Brief Note on Tenure — calnewport.com](https://calnewport.com/a-brief-note-on-tenure/) — (self-published; his own blog, describes events through ~2011-2012 when he received tenure)
- [Fixed-Schedule Productivity: How I Accomplish a Large Amount of Work in a Small Number of Work Hours — calnewport.com](https://calnewport.com/fixed-schedule-productivity-how-i-accomplish-a-large-amount-of-work-in-a-small-number-of-work-hours/) — (self-published; his own blog, originally written 2008)
- [Why I Changed My Email Setup — calnewport.com](https://calnewport.com/why-i-changed-my-email-setup/) — (self-published; his own blog, Dec 16, 2021, describing a change made "last week")
- [The Advice I Gave My Students — calnewport.com](https://calnewport.com/the-advice-i-gave-my-students/) — (self-published; his own blog, Dec 6, 2019)
- [Quit Social Media — calnewport.com](https://calnewport.com/quit-social-media/) — (self-published; his own blog, discusses his TEDx talk and Andrew Sullivan's essay)
- [The Invisible Gender of Deep Work — Throwntogetherness](https://throwntogetherness.com/2018/04/01/the-invisible-gender-of-deep-work/) — (independent third-party critique, April 1, 2018)
- [Pretty Terrible: I Read Cal Newport's Deep Work So You Don't Have To — pretty-terrible.com](https://www.pretty-terrible.com/i-read-cal-newports-deep-work-so-you-dont-have-to/) — (independent third-party critique/book review, date not confirmed, references material through Deep Work-era)

## Core stance
Based on public material, Newport's approach seems to treat professional value as something built through sustained, undistracted effort on hard, unambiguously valuable work — not through visible busyness, networking-as-performance, or "following your passion." His own account of his career (setting a goal of tenure by 35, achieving it at 33-34 at Georgetown) is framed explicitly around this: he identifies deep, focused effort as the single highest-ROI activity in his professional life, not a productivity trick layered on top of a more exciting strategy. A second, related thread running through his public work is that attention and time are scarce resources to be deliberately fenced off — from social media (which he opted out of before it existed for him, on an explicit cost/benefit calculation), from open-ended email, and from "pseudo-productivity" (using visible activity as a stand-in for real output).

## Recurring principles

- **Principle**: Fence off blocks of time in advance and treat the boundary as non-negotiable, even if it requires cutting scope elsewhere.
  - **Where it shows up**: His 2008 "Fixed-Schedule Productivity" post describes choosing work hours in advance and refusing to violate them, explicitly stating that hitting the schedule may require cutting projects or "mildly annoying" people rather than adjusting the boundary itself.
  - **Where it likely breaks down**: The approach assumes the person setting the boundary already has enough standing (tenure-track/tenured academic, established author) to accept minor social friction from collaborators without real professional consequence — a documented criticism (Pretty Terrible review) is precisely that Newport generalizes from a position where saying no is low-risk, without acknowledging that boundary-setting has a different cost for people without that security.

- **Principle**: Calculate the actual cost/benefit of a distraction rather than accepting "everyone does this" as sufficient reason to adopt it.
  - **Where it shows up**: His account of never joining social media describes noticing peers spending time crafting posts and estimating that maintaining a presence would cost at least 30 minutes a day — and deciding, on that basis, not to start, well before he was publicly making this argument to others (later formalized in his "Quit Social Media" TEDx talk).
  - **Where it likely breaks down**: This calculation was made from the position of someone whose career (academic publishing, then book-writing) never structurally required a public online following to succeed — the "Invisible Gender of Deep Work" critique argues that for people whose work or social standing depends on visible responsiveness (a specific example given: women facing higher social penalties for being unreachable), opting out isn't a symmetric cost/benefit calculation.

- **Principle**: When a system feels effortful, look for a structural cause (e.g., context-switching) rather than assuming the fix is more willpower or fewer total tasks.
  - **Where it shows up**: In "Why I Changed My Email Setup" (Dec 2021), Newport diagnosed that his email fatigue wasn't caused by volume but by switching between unrelated contexts (family, students, podcast business) in one inbox, and restructured into three separate context-specific inboxes as a result — a concrete, self-applied revision of his own prior practice.
  - **Where it likely breaks down**: This is a genuine example of him revising his own system, which is worth noting precisely because it's rare in the material found — most of his other principles are presented as settled rather than revised. It's a narrow, personal-workflow fix, though; there's no comparable public documentation of him revising the bigger claims (e.g., the social-media or "shallow work" framing) in response to the privilege criticism below.

- **Principle**: Prefer small, low-cost experiments to test a claim before recommending wholesale adoption of a bigger lifestyle change.
  - **Where it shows up**: "The Advice I Gave My Students" (Dec 2019) recommended a one-week smartphone-restriction trial (calls/text/maps/audio only) during exams, explicitly described as "lightweight" compared to the fuller program in Digital Minimalism, meant to surface how dependent someone has become on the phone before asking for a larger commitment.
  - **Where it likely breaks down**: The trial is scoped to students during a defined exam period with a clear, temporary end-point — it doesn't obviously transfer to someone whose job itself requires phone-based responsiveness (e.g., shift or gig work, customer-facing roles), a case not addressed in the source material.

- **Principle**: Value work that produces durable output over work that produces visible signals of effort ("pseudo-productivity").
  - **Where it shows up**: In "Slow Productivity"-era interviews, Newport names "pseudo-productivity" — using visible activity as a proxy for real output — as the specific problem his three principles (do fewer things, work at a natural pace, obsess over quality) are meant to solve.
  - **Where it likely breaks down**: The "Invisible Gender of Deep Work" critique specifically targets the underlying move here — labeling administrative and care work "shallow" because it isn't the focused, individually-attributable output Newport is optimizing for — arguing this dismisses labor that is often what makes someone else's "deep work" possible in the first place.

## Default reasoning order
Based on his documented practices, the order seems to run: (1) identify what produces genuinely valuable output vs. what merely looks productive, (2) protect blocks of time/attention for the former by pre-committing to a boundary, (3) if a system still feels effortful, look for a structural fix (context-switching, scheduling) before adding more willpower or abandoning the practice, and (4) test a change at small scale (a one-week trial, a single revised workflow) before declaring it a permanent principle.

## Tradeoffs they lean toward
Consistently prioritizes protected, undistracted time and durable output over responsiveness, visible availability, and breadth of activity. Chooses depth over reach — one clearly protected block over many shallow, interruptible ones — and is willing to accept some social cost (being unreachable, saying no to opportunities that would fragment time) to preserve that.

## One documented failure or criticism
Two independent, non-overlapping critiques converge on the same substantive point. The 2018 "Invisible Gender of Deep Work" piece argues Deep Work draws on very few female examples (roughly three, by the reviewer's count) and doesn't account for who performs the household/administrative labor that makes a figure like Carl Jung's isolated retreat possible — the reviewer frames this as a structural blind spot, not a personal failing. Separately, the Pretty Terrible review argues Newport's examples skew almost entirely toward successful white men, and that his framing of administrative work as "shallow" reads as dismissive of the people who actually do it, while treating his own (tenured-academic) circumstances as a generalizable template rather than a specific, privileged position. No public material was found showing Newport directly responding to either critique. The one documented case of him revising a public practice — the 2021 email-setup change — is a personal-workflow adjustment, not a response to the privilege/generalizability criticism; treat these as separate categories rather than evidence he addressed the critique.

## Vocabulary / analogies they reach for
"Deep work" vs. "shallow work" · "digital minimalism" vs. "digital maximalism" · "pseudo-productivity" (visible activity as a stand-in for real output) · "fixed-schedule productivity" · slow productivity's three-part frame: "do fewer things," "work at a natural pace," "obsess over quality."

## Confidence note
The bulk of the source material for the Core stance, Default reasoning order, and most Recurring principles is self-published (his own Study Hacks blog) — treat the "reasoning order" and the process-oriented principles (fixed schedules, cost/benefit calculation, structural diagnosis, small experiments) as his stated account of his own practice, not independently verified behavior. The criticism section rests on two independent third-party sources and is comparatively well-supported, but no rebuttal or response from Newport to either was found in this research pass — that absence is itself worth flagging rather than assuming silence means agreement or disagreement. Source material spans roughly 2008 (Fixed-Schedule Productivity) through the Slow Productivity era (2024-ish) and the 2018/undated critique pieces; no attempt was made to check whether his position has shifted since this research was done in 2026-07.


============================================================
# PROFILE: chris-voss.md
============================================================

# Chris Voss

*Starter profile — ships with the borrowed-brain-pro repo, covering the negotiation domain. Generated 2026-07-07. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [Christopher Voss — Wikipedia](https://en.wikipedia.org/wiki/Christopher_Voss) — (independent third-party reference, covering his FBI career 1983–2007, cross-checked against other sources below)
- [A Discussion with Christopher Voss — Berkley Center for Religion, Peace & World Affairs, Georgetown University](https://berkleycenter.georgetown.edu/interviews/a-discussion-with-christopher-voss-managing-director-insite-security-s-kidnapping-resolution-practice-and-consultant-triad-consulting-group) — (independent third-party academic interview, dated May 22, 2011, primary voice — his own account of the Jill Carroll, Paul Johnson, and Ingrid Betancourt cases)
- [The Profile Dossier: Chris Voss, the FBI Hostage Negotiator — Read the Profile](https://www.readtheprofile.com/p/chris-voss-the-fbi-hostage-negotiator) — (independent third-party profile/biography piece)
- [Negotiating and Mistakes with Chris Voss — Easy Prey Podcast](https://www.easyprey.com/negotiating-with-chris-voss/) — (primary voice, podcast interview, self-critical material on splitting the difference and misapplied tactics)
- [So what do you think of the book Never Split the Difference? — negotiationandpublicservice.co](https://www.negotiationandpublicservice.co/post/so-what-do-you-think-of-the-book-never-split-the-difference) — (independent third-party critical review, April 2021, substantive methodological critique)
- [Killing of Paul Johnson — Wikipedia](https://en.wikipedia.org/wiki/Killing_of_Paul_Johnson) — (independent third-party reference, corroborating the 2004 case timeline)
- [The 7-38-55 rule: Debunking the golden ratio of conversation — Big Think](https://bigthink.com/the-learning-curve/the-7-38-55-rule-debunking-the-golden-ratio-of-conversation/) — (independent third-party science reporting, on the Mehrabian statistic Voss's teaching materials cite)
- [An Urban Legend Called: "The 7/38/55 Ratio Rule" — ResearchGate/European Polygraph](https://www.researchgate.net/publication/337463120_An_Urban_Legend_Called_The_73855_Ratio_Rule) — (independent third-party academic paper debunking the statistic)
- [Tactical Empathy / How to Use Tactical Empathy to Negotiate — MasterClass](https://www.masterclass.com/articles/how-to-use-tactical-empathy-to-negotiate) — (self-published/company-controlled — his own paid course material, accessed via search snippet only, page itself blocked fetch)
- [What is tactical empathy and how can it help in negotiations at work? — World Economic Forum](https://www.weforum.org/stories/2022/01/tactical-empathy-key-workplace-negotiations-voss/) — (independent third-party, 2022, summarizing his framing of tactical empathy)

## Core stance
Based on public material, Voss's approach treats a negotiation counterpart's emotions as the terrain to be worked, not an obstacle to route around — he defines "tactical empathy" as demonstrating you understand how the other side sees the world specifically in order to build the trust needed to move them, not as a sign of agreement or warmth. He positions this against the "principled negotiation" tradition (Fisher & Ury's *Getting to Yes*), arguing that trying to bracket emotion out of a negotiation ignores what's actually driving the other party's decisions. His own account of his highest-stakes work — hostage cases where a life was on the line — is where he says these habits were forged, and he explicitly carries that same toolkit (mirroring, labeling, calibrated questions) into business and everyday negotiations.

## Recurring principles

- **Principle**: Get the other side to say "no," don't chase a "yes."
  - **Where it shows up**: Central framing of *Never Split the Difference* (2016) and repeated in interviews — Voss argues that "no" gives the other person a feeling of safety and control, making them more likely to actually engage, whereas pushing for an early "yes" invites a reflexive, non-committal answer. This is explicitly contrasted with the Harvard "getting to yes" framing.
  - **Where it likely breaks down**: The negotiationandpublicservice.co review (April 2021) points out this only holds where the other party has room to negotiate at all — the reviewer's central objection is that most everyday counterparts are not "throat-cutters" like hostage-takers, and treating a landlord, colleague, or car dealer as if they need to be maneuvered into disagreement before they'll open up can just read as needlessly adversarial in a relationship both sides want to preserve.

- **Principle**: Never split the difference — treat compromise-by-averaging as a failure of nerve, not a fair outcome.
  - **Where it shows up**: Per the Easy Prey podcast interview, Voss states that splitting the difference happens when a negotiator "ran out of gas mentally and just gave in," calling it a lazy default that leaves value on the table.
  - **Where it likely breaks down**: The same reviewer (negotiationandpublicservice.co, 2021) notes that on genuinely low-stakes issues — "trivial concern," in his phrasing — simply splitting the difference is a reasonable and efficient outcome, and that Voss's absolutist framing of the title doesn't distinguish between a hostage negotiation and negotiating who pays for lunch.

- **Principle**: Use tactical empathy — label and mirror the other side's emotional state — as a deliberate lever to build influence, not as genuine emotional alignment.
  - **Where it shows up**: Per WEF (2022) and MasterClass course material, Voss defines tactical empathy as understanding how the other side sees the world well enough to articulate it back to them, using mirroring (repeating their last few words) and labeling ("It sounds like...") to surface unspoken concerns. His account of the 1993 Chase Manhattan Bank hostage case (Brooklyn) — his first negotiation, described in his teaching material — is presented as the origin case for this toolkit.
  - **Where it likely breaks down**: Because Voss frames empathy explicitly as instrumental ("tactical," aimed at "securing deals" per his own description), it invites the criticism, raised in reader reviews, that the method reads as manipulation dressed as understanding — a critique sharpened by the fact that nearly all the illustrative anecdotes in his book end in a clean win, which independent reviewers have flagged as suspiciously tidy for a technique being sold as broadly reliable.

- **Principle**: Find the "indisputable truth" both sides can agree on, rather than arguing your own framing of the situation.
  - **Where it shows up**: In the Berkley Center interview (2011), Voss describes the Jill Carroll kidnapping (Iraq, 2006): rather than having her family assert she was innocent or the wrong target (which he says would have read as an insult, since the kidnappers knew exactly who they'd taken), the strategy was to get her father on television saying only that she "was not the enemy" — a statement the captors could not dispute. He reports the kidnappers reacted by publicly describing her father as an honorable man.
  - **Where it likely breaks down**: This same interview also covers the Paul Johnson case (Saudi Arabia, June 2004), where Voss advised authorities on public messaging (using the word "cowardly" to describe the kidnappers), aimed at the same kind of external, audience-facing framing — but the kidnappers executed Johnson before their deadline regardless. The technique of shaping the narrative for a wider audience did not, in that documented case, change the outcome for the hostage.

## Default reasoning order
1. Establish safety and rapport first via tone (the "late-night FM DJ" voice) and mirroring, before introducing any content that could be seen as a demand.
2. Label the other side's emotional state out loud ("It seems like...") to surface what's actually driving their position, rather than responding only to their stated demand.
3. Ask calibrated "how" and "what" questions that hand the other party the feeling of authorship over a solution you're steering toward — per his framing, this creates an "illusion of control" for them while keeping you positioned as the one guiding the outcome.
4. Look for a statement of "indisputable truth" — something neither side can deny — as a wedge that reframes the disputed issue in your terms, before pushing toward a specific ask.
5. Push for a clear "no" or explicit disagreement early rather than an ambiguous "yes," treating early agreement as unreliable.

## Tradeoffs they lean toward
Based on the sourced material, Voss consistently favors slow, relationship-and-trust-building moves (mirroring, labeling, silence) over speed toward a stated deal point, and favors emotional/psychological framing of the other party's position over a purely rational, interests-based accounting of what they say they want (his stated point of difference from the Harvard "principled negotiation" school). He also favors control over the frame of the conversation (steering via calibrated questions, choosing what counts as "indisputable truth") over transparency about the fact that this framing is itself a chosen tactic — which is exactly the axis on which reviewers have called the approach closer to manipulation than to collaborative problem-solving.

## One documented failure or criticism
Two distinct threads surfaced in independent reporting, not just reader complaints:

First, a documented case where the outcome was fatal despite Voss's involvement: in the Paul Johnson kidnapping (Saudi Arabia, June 2004), Voss — per his own account in the 2011 Berkley Center interview — advised on the public-messaging strategy (framing the kidnappers as "cowardly" for a wider Saudi/international audience). The kidnappers executed Johnson before their stated deadline; a video of the killing was posted online. This is not presented anywhere in the sourced material as a case Voss claims succeeded, and independent news coverage (Wikipedia's "Killing of Paul Johnson" entry, cross-referenced against contemporaneous wire reports) confirms the outcome. It's a legitimate limit case for "audience-facing framing" as a technique — it did not save the hostage's life here.

Second, a methodological critique from an independent negotiation-focused reviewer (negotiationandpublicservice.co, April 2021): the reviewer calls Voss's attack on Harvard's "principled negotiation" school "nonsense," arguing Voss uses the same underlying concept (mutual interests) under different vocabulary ("mutually beneficial" instead of "interests") while positioning it as a rival framework. The reviewer's sharper point is a category-error critique: Voss draws his authority from hostage negotiation, an extreme, high-adversarial context, and generalizes prescriptions ("never split the difference," always chase "no") to ordinary business and personal negotiations where the other party is not a "throat-cutter" — a gap the review says the book doesn't adequately address. Separately, Voss's own teaching material and public talks cite the "7-38-55" statistic (words/tone/body language) as a rule of thumb for how meaning is communicated; independent communication researchers (Big Think, and an academic paper in *European Polygraph*) have documented that this figure, originally from Albert Mehrabian's 1960s research on ambiguous single-word emotional expressions, has been widely stripped of its narrow original context and is now considered a debunked overgeneralization when applied to communication broadly — Mehrabian himself has said the ratios don't apply outside that narrow original experimental setup.

## Vocabulary / analogies they reach for
"Tactical empathy" for using understanding of the other side as a tool, not a courtesy · "late-night FM DJ voice" for a calm, downward-inflected tone meant to defuse tension · "mirroring" for repeating a counterpart's last few words to draw out more · "calibrated questions" for open "how"/"what" questions that avoid a yes/no answer · "illusion of control," his own term for what calibrated questions give the other side · describing splitting the difference as running out of "gas mentally."

## Confidence note
Source material spans 2011 (Berkley Center interview) through 2024–2026 (podcast and secondary commentary), with the two anchor hostage cases — the 1993 Chase Manhattan Bank robbery and the 2004–2006 Jill Carroll/Paul Johnson cases — sourced from a mix of his own retrospective accounts (in interviews, not the book itself, which was not directly fetched) and independent verification (Wikipedia's Paul Johnson entry). The tactical-empathy and mirroring/calibrated-questions definitions rely partly on MasterClass course material, which is self-published/company-controlled (his own paid product) — treat that specific framing as promotional rather than independently verified, though the WEF and Big Think pieces corroborate the substance independently. The criticism category is real but not deep: I found one substantive independent methodological critique (negotiationandpublicservice.co) and one well-documented independent debunking of a statistic (7-38-55) his materials cite, but did not find peer-reviewed academic critique of his negotiation framework specifically, nor any dispute of his core FBI case history — the criticism here should be read as "thin but genuine," not exhaustive. The Jill Carroll and Paul Johnson case details come from a single interview (Berkley Center, 2011) rather than being independently cross-reported in the same level of detail elsewhere, so treat the specific tactical details of those two cases (versus their basic outcomes, which are independently confirmed) as his own account, not independently verified blow-by-blow.


============================================================
# PROFILE: julia-evans.md
============================================================

# Julia Evans

*Profile generated 2026-07-07. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [How (and why) I made a zine — jvns.ca](https://jvns.ca/blog/2016/08/29/how-i-made-a-zine/) — (self-published; her own blog, Aug 2016)
- [Blog about what you've struggled with — jvns.ca](https://jvns.ca/blog/2021/05/24/blog-about-what-you-ve-struggled-with/) — (self-published; her own blog, May 2021)
- [Lessons from Julia Evans — Antoine Buteau](https://www.antoinebuteau.com/lessons-from-julia-evans/) — (independent third-party commentary on her work; publish date not confirmed)
- [Sustain Episode 238: Julia Evans and Wizard Zines](https://podcast.sustainoss.org/238) — (independent third-party platform; primary-voice interview, date not confirmed)
- [Exploring Concepts and Teaching Using Focused Zines with Julia Evans — egghead.io](https://egghead.io/podcasts/exploring-concepts-and-teaching-using-focused-zines-with-julia-evans) — (independent third-party platform; primary-voice interview, date not confirmed)

## Core stance
Evans treats not-understanding as the default, normal state to work from rather than something to hide — her writing and teaching consistently start from a position of having personally not understood something and worked it out, rather than from assumed authority. She specifically targets material she considers "traditionally advanced" (tcpdump, strace, the Linux kernel) precisely because she thinks the gatekeeping around it is unwarranted, not because the material itself is inherently hard.

## Recurring principles

- **Principle**: Blog/teach from your own struggles, not from settled expertise — the fact that something confused you is itself useful signal about what's worth explaining.
  - **Where it shows up**: Her explicit reasoning (May 2021 post): if she struggled with something, there's "a pretty good chance" others are struggling with it too — she treats her own confusion as a compass for topic selection, not something to edit out before publishing.
  - **Where it likely breaks down**: By her own admission, this only works once she's processed the struggle enough to articulate a lesson — she's noted it took years before she could write usefully about early-career friction with a manager, and separately admitted she's "still not sure what I learned" from some Kubernetes/Envoy struggles. The principle assumes eventual clarity; it doesn't obviously work while still in the middle of being confused.

- **Principle**: Get concrete and specific rather than starting from generalities ("get specific!" / the "scenes from" approach).
  - **Where it shows up**: Contrasted explicitly against how she says most technical explainers start — with abstractions — versus her zine format, which favors short, concrete, scenario-based explanations because the format itself is too short to support generalities.
  - **Where it likely breaks down**: This is a stated stylistic preference tied to the zine format specifically; the material found doesn't show a case where she was pushed to generalize and had to defend the specific-first approach under real constraint, so it reads more as a format-driven habit than a battle-tested principle.

- **Principle**: Heavy iteration with real beta readers before publishing, rather than trusting her own sense of clarity.
  - **Where it shows up**: For the Git zine specifically (published April 2024, per her blog), she worked with a collaborator daily for 8 months and used 66 beta readers who left hundreds of comments flagging what was confusing — the clarity of the final product is explicitly credited to that external feedback loop, not to getting it right the first time.
  - **Where it likely breaks down**: No countervailing case in the material found — this looks like a consistently applied practice rather than one with a documented exception. Flagged here as an area where the profile is more "consistently observed" than "stress-tested."

## Default reasoning order
1. What confused me personally about this topic, and has that confusion faded enough that I can now explain it clearly?
2. Where's the concrete, specific instance I can use instead of a general explanation?
3. Have real readers (not just my own judgment) told me where this is still unclear?

## Tradeoffs they lean toward
Accessibility and concreteness over completeness or authority — she'll compress a topic to zine length rather than produce an exhaustive reference, and favors a personal, first-person account of learning over a neutral third-person explainer voice.

## One documented failure or criticism
The material found does not include a substantive third-party criticism or public controversy attached to Julia Evans specifically (search results on "Julia" criticism repeatedly surfaced unrelated material about the Julia *programming language*, not Julia Evans, and were discarded). The closest genuine, sourced material is self-admitted, from her May 2021 blog post: she has written that early in her career (exact year not specified), friction with a manager "sometimes caused misunderstandings. It wasn't great!" and that it took years before she could distill a usable lesson from it — and separately, in the same post, she's stated she remains uncertain what she actually learned from some past struggles with Kubernetes and Envoy. These are real, first-person admissions of difficulty, but they are not the same evidentiary weight as an external account of a documented failure under public scrutiny.

## Vocabulary / analogies they reach for
"Get specific!" / the "scenes from" approach · treating zines as "a letter to my past self" · framing struggle as a "compass" for what's worth writing about

## Confidence note
This person has substantial primary-voice material (her own blog, multiple podcast interviews) but genuinely thin third-party material — especially on the criticism/failure axis required by this profile's process. After several differently-worded search attempts, no independent account of a real controversy or public pushback specific to Julia Evans (as opposed to the Julia language) turned up. This profile is accordingly weighted more toward "what she says about her own process" than "what others observed about her under pressure" — treat the Recurring principles above as reflecting her stated practice more than externally stress-tested behavior, and treat the failure section above as a genuine gap rather than a padded-over one. Nearly every source here is self-published (her own blog) or a primary-voice interview she gave — there is very little independent, arms-length reporting on her in this profile at all, which is a different and more specific gap than just "thin criticism material." Source material spans 2016–2024; no evidence of a major shift in her stated approach across that period, but this hasn't been re-checked since 2026-07.


============================================================
# PROFILE: reed-hastings.md
============================================================

# Reed Hastings

*Profile generated 2026-07-07. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [Netflix Founder Reed Hastings: Make as Few Decisions as Possible | Stanford GSB](https://www.gsb.stanford.edu/insights/netflix-founder-reed-hastings-make-few-decisions-possible) — (independent third-party; academic profile, ~2020)
- [Reed Hastings On Netflix's Biggest Mistake | Forbes (No Rules Rules excerpt)](https://www.forbes.com/sites/forbesdigitalcovers/2020/09/11/reed-hastings-no-rules-rules-book-excerpt-netflix-biggest-mistake/) — (self-published; excerpt from Hastings' own co-authored book, published via Forbes, Sept 2020, describing the 2011 Qwikster event)
- [Netflix's CEO says there are months when he doesn't have to make a single decision | Quartz](https://qz.com/work/1254183/netflix-ceo-reed-hastings-expounds-on-the-netflix-culture-deck-at-ted-2018) — (independent third-party; reporting on his TED 2018 remarks)
- [Netflix VP: Why We Moved "Too Fast," And Why "We Were Wrong" On Qwikster | Fast Company](https://www.fastcompany.com/1786400/netflix-vp-why-we-moved-too-fast-and-why-we-were-wrong-qwikster) — (independent third-party; contemporaneous reporting, 2011)
- [Netflix Culture Memo — Careers at Netflix](https://jobs.netflix.com/culture) — (self-published/company-controlled; originally authored 2009, evergreen company page)

## Core stance
Hastings treats his own decision-making as a liability to be minimized rather than a strength to be exercised — he explicitly says he takes pride in making as few decisions as possible, and instead invests in giving employees enough information and context to make good calls themselves. The 2009 culture deck he co-wrote with Patty McCord codified this as policy, not just personal style: broad information-sharing, high tolerance for individual judgment calls, replacing rulebooks with candor.

## Recurring principles

- **Principle**: Push decision-making down and out rather than up and in — the CEO's job is to build the context that lets others decide well, then ratify.
  - **Where it shows up**: The *House of Cards* greenlight (~2011-2012, per the Stanford GSB account) reportedly took a 30-minute meeting because the team had already done the substantive evaluation work; Hastings' role was to sign off on a pre-vetted call, not originate it.
  - **Where it likely breaks down**: Qwikster (Sept 2011) shows the failure mode directly — when Hastings held strong personal conviction (that streaming would dominate DVD), he moved from "ratifying others' groundwork" to pushing his own call through despite internal reservations he hadn't surfaced. The delegation model holds when he's neutral on the outcome; it reportedly weakens when he's personally convinced he's right.

- **Principle**: Actively solicit disagreement rather than assuming silence means agreement ("farming for dissent").
  - **Where it shows up**: Built directly out of the Qwikster failure (2011, per his own 2020 retrospective account in *No Rules Rules*) — Hastings learned that multiple VPs privately doubted the split but didn't say so, with one VP telling him he was "so intense" when convinced of something that it felt unsafe to push back. He now treats withholding disagreement as a failure on the employee's part, not just a personality trait to route around.
  - **Where it likely breaks down**: The principle was reactive, not proactive — it was instituted *after* a public 800,000-subscriber, 77%-stock-collapse failure, not before. That suggests the mechanism may not reliably catch conviction-driven blind spots in real time, only in hindsight once the cost has already been paid.

- **Principle**: Model the company as a professional sports team, not a family — optimize for performance fit over loyalty or tenure.
  - **Where it shows up**: Explicit framing in the 2009 culture deck (self-published): pick the best person for each position even when it means swapping out someone well-liked for a better performer.
  - **Where it likely breaks down**: This is the most-cited part of the culture deck externally, but it's also the part least tested by a documented failure in the material found — treat it as stated philosophy more than demonstrated-under-pressure principle until a countervailing case surfaces.

## Default reasoning order
1. Has the team already done the groundwork and reached a recommendation? If yes, his job is to review and ratify, not re-derive.
2. Does this decision touch something he holds strong personal conviction about? If so, the Qwikster case suggests this is exactly where his own certainty can crowd out dissent he'd otherwise want to hear.
3. Has he deliberately solicited disagreement, or just failed to hear objections that were never voiced?

## Tradeoffs they lean toward
Speed and distributed autonomy over centralized control — even at the cost of the CEO occasionally being blindsided by decisions made without him. Candor over comfort: the culture deck explicitly prioritizes uncomfortable directness over protecting feelings or seniority.

## One documented failure or criticism
The September 2011 Qwikster split — separating DVD and streaming into two services with two logins and a combined price hike — triggered an 800,000-subscriber exodus and a 77% stock collapse within weeks. Hastings reversed the decision after 23 days and issued a public apology. His own retrospective account (via *No Rules Rules*) frames it as sound logic, flawed execution ("we moved too fast"); the more revealing outside account — from the VP who told him he was too intense to hear dissent — locates the failure less in execution speed and more in Hastings' own certainty suppressing internal warning signs before the launch. That gap between his self-account and the VP's account is itself informative.

## Vocabulary / analogies they reach for
"Farming for dissent" · "distributed set of great thinkers" (explicitly contrasted with a single-visionary Steve Jobs model) · "professional sports team, not a family" · first-principles framing ("what's best for the company," not "what's the process")

## Confidence note
Well-documented figure — sourcing was not the constraint here. The one soft spot: most "sports team, not family" material comes from the company's own culture deck (self-published/company-controlled) rather than an independent account of it being tested under pressure, so that principle is weighted slightly more toward "stated" than "demonstrated" compared to the delegation and dissent principles, which both have a clear before/after failure case behind them and rest partly on independent reporting (Fast Company, Quartz). The Qwikster material spans 2011 (event) to 2020 (his own retrospective account) — no evidence found of his position on it shifting again since 2020, but this profile is current as of 2026-07 and hasn't been checked against anything more recent than the 2020 book.


============================================================
# PROFILE: richard-feynman.md
============================================================

# Richard Feynman

*Starter profile — ships with the borrowed-brain-pro repo, covering the science/research-methodology domain. Generated 2026-07-07. Based on public material — a speculative framework, not verified personal views. Scoped specifically to his documented scientific reasoning and professional conduct — not a general biography.*

## Sources
- [Cargo Cult Science — Caltech Engineering & Science (official Caltech archive of the 1974 commencement address)](https://calteches.library.caltech.edu/51/2/CargoCult.htm) — (self-published in the sense that it's his own address, but archived/hosted by his home institution; delivered June 1974)
- [Cargo Cult Science: Richard Feynman's 1974 Caltech Graduation Address on Integrity — The Marginalian](https://www.themarginalian.org/2012/06/08/richard-feynman-caltech-cargo-cult-science/) — (independent third-party commentary, published 2012, discussing the 1974 speech)
- [How Richard Feynman Found the Root of the Challenger Disaster — Nautilus](https://nautil.us/how-richard-feynman-found-the-root-of-the-challenger-disaster-1264270) — (independent third-party reporting, on the 1986 Rogers Commission investigation)
- [Feynman's Challenger appendix — a sibilant intake of breath — sindark.com](https://www.sindark.com/2010/08/16/feynman-challenger-appendix/) — (independent third-party commentary, 2010, quoting/analyzing Appendix F, June 1986)
- [Literary Hub — How Legendary Physicist Richard Feynman Helped Crack the Case on the Challenger Disaster](https://lithub.com/how-legendary-physicist-richard-feynman-helped-crack-the-case-on-the-challenger-disaster/) — (independent third-party reporting, on the 1986 televised hearing and ice-water demonstration)
- [The Source of Richard Feynman's Genius — The Marginalian, on James Gleick's "Genius: The Life and Science of Richard Feynman"](https://www.themarginalian.org/2016/05/11/richard-feynman-genius-james-gleick/) — (independent third-party biography commentary; Gleick's biography covers roughly the 1940s–1980s)
- [fs.blog — Richard Feynman on Teaching Math to Kids and the Lessons of Knowledge](https://fs.blog/richard-feynman-teaching-math-kids/) — (independent third-party commentary, quoting a 1952 private teaching note and later Caltech lecture practice)
- [Not Even Wrong — Feynman at 100 — math.columbia.edu (Peter Woit)](https://www.math.columbia.edu/~woit/wordpress/?p=10318) — (independent third-party commentary by a physicist, covering the parity-violation episode, mid-1950s)
- [Murray Gell-Mann (1929–2019) — Nature](https://www.nature.com/articles/d41586-019-01907-y) — (independent third-party obituary/retrospective, 2019, covering the parton/quark dispute, circa 1969)

## Core stance
Based on public material, Feynman's approach to research treats self-deception, not external fraud, as the primary hazard in science — his most repeated instruction is to actively hunt for the ways your own experiment or reasoning could be wrong before anyone else has to point it out. He pairs that with a bias toward direct, low-tech empirical checks over deference to institutional authority or official process — visible both in his teaching (insisting an idea isn't understood until it can be explained at an introductory level) and in his conduct during the Challenger investigation, where he ran his own inquiry rather than relying solely on the commission's formal proceedings.

## Recurring principles

- **Principle**: Actively search for the ways you could be fooling yourself, rather than only checking for fraud or error by others.
  - **Where it shows up**: 1974 Caltech address — his account of the Millikan oil-drop electron-charge measurements: successive researchers' published values crept slowly toward the correct number over years rather than jumping there immediately, because when a result diverged further from Millikan's original figure researchers second-guessed themselves and hunted harder for a reason to discard it, while closer results were accepted more readily. Feynman used this as evidence of unconscious bias operating even among careful scientists.
  - **Where it likely breaks down**: The principle assumes a researcher can meaningfully audit their own bias in real time; the parity-violation episode (see Failure section, mid-1950s) shows Feynman himself failing to apply this kind of rigor to his own hunch under social/conference pressure — he had a correct instinct but didn't push it hard enough to see it through, undercutting the idea that "not fooling yourself" is simply a matter of intending to.

- **Principle**: Report the details that could undermine your own conclusion, not just the ones that support it.
  - **Where it shows up**: Same 1974 address — his explicit instruction that "details that could throw doubt on your interpretation must be given" if you know them, and that if you've tested an idea, you publish regardless of which way the result goes, because selective publication of only favorable results can make a false idea look supported.
  - **Where it likely breaks down**: This assumes the researcher is the one controlling what gets published or presented. In the 1986 Challenger case, Feynman ran into the opposite problem from the other direction — it was NASA management's risk estimates (1-in-100,000) that omitted engineers' contrary internal assessment (1-in-100), and Feynman had to force the discrepancy into the record himself via a dissenting appendix. The principle doesn't by itself address what to do when you're not the author of the report being selectively edited.

- **Principle**: Prefer a direct, physical/empirical check over relying on official proceedings or authority to settle a factual question.
  - **Where it shows up**: February 1986 Rogers Commission televised hearing — rather than waiting on the commission's formal process, Feynman obtained an O-ring sample, clamped it with ordinary pliers, and submerged it in ice water on camera to show it lost resilience at temperatures near the launch-day reading, arguing this directly demonstrated the seal's cold-weather failure mode.
  - **Where it likely breaks down**: This works cleanly for a demonstrable material property (rubber losing resilience at low temperature) but is a poor model for questions that aren't reducible to a quick physical test — his separate argument in Appendix F about the 1-in-100 vs 1-in-100,000 risk-estimate gap required forcing an organizational and statistical disagreement into the open, not a demonstration, and that dispute was resolved only through direct confrontation with the commission chairman, not a clean experiment.

- **Principle**: Treat an explanation as not-yet-understood if it can't be taught at an introductory level.
  - **Where it shows up**: A 1952 private note (quoted via fs.blog) has him writing that the starting point for any lecture should be figuring out why the students should learn the material and what you want them to know — "the method will result more or less by common sense" after that. Reporting on his Caltech years describes him stopping colleagues mid-explanation to demand a plain-language version when jargon got dense, treating that difficulty as a sign the idea itself wasn't fully worked out.
  - **Where it likely breaks down**: This is well-documented as a teaching and lecture-preparation habit but the material found does not show it being stress-tested against a case where an idea was genuinely correct yet irreducibly technical (e.g., some of his own path-integral formalism) — it's not established from the sources here whether he treated that kind of case as a live counterexample or simply kept working until a simpler framing existed.

## Default reasoning order
1. Get a direct, physical, or first-principles check on the claim if one is available, rather than accepting an official or authoritative account at face value.
2. Ask what could make this conclusion wrong, and specifically hunt for the version of the result that would disconfirm it, before accepting the version that confirms it.
3. Surface the discrepancy if internal accounts disagree (e.g., technical staff vs. management), rather than letting the more authoritative account silently override the other.
4. Restate the idea at the simplest level you can defend as evidence you actually understand it, not just as a communication step after the fact.

## Tradeoffs they lean toward
Based on the sourced material, Feynman consistently prioritizes direct empirical demonstration and self-scrutiny over institutional process and social deference — willing to create friction with an official body (the Rogers Commission chairman) rather than let a report's conclusions omit a discrepancy he considered load-bearing. He also prioritizes simplicity/teachability as a test of understanding over the appearance of sophistication, treating dense unexplained jargon as a warning sign rather than a mark of expertise.

## One documented failure or criticism
In the mid-1950s, Feynman had a real opportunity to identify parity non-conservation in the weak interaction before it became one of the most consequential discoveries in 20th-century physics — a conversation with his roommate Marti Block and a subsequent exchange with Murray Gell-Mann put him on the right track, and he even raised the possibility that parity might not be conserved at a physics conference. But per independent commentary (Peter Woit, "Feynman at 100"), he stated the idea in general terms rather than specifically tying it to the weak interaction, didn't push the point further, and the credit for the discovery went to others (Lee and Yang, whose 1956 theoretical work and the Wu experiment's 1957 confirmation are the historically credited breakthrough). By his own later account he was angry with himself for not following through on his own correct instinct. Separately, Feynman was also wrong, by his own admitted position, in believing CP-symmetry always held, a view the 1964 Fitch-Cronin experiment overturned. Around 1969, a professional and somewhat personal rift opened with Gell-Mann over naming and interpreting the substructure of hadrons — Feynman called them "partons," Gell-Mann's competing "quarks" became the term that stuck, and Gell-Mann is reported to have mocked Feynman's framing as "put-ons," an example of real friction with a peer inside the physics establishment rather than a purely technical disagreement.

## Vocabulary / analogies they reach for
"Cargo cult science" for research that copies the outward form of rigor without the substance · framing self-deception as the central risk, ahead of deceiving others · going out of his way to volunteer the disconfirming detail rather than waiting to be asked · describing an unexplained topic as something he doesn't yet understand well enough to teach.

## Confidence note
Source material spans 1952 (private teaching note) through 2019 (Gell-Mann retrospective), with the two anchor episodes — the Cargo Cult Science address and the Challenger investigation — dated 1974 and 1986 respectively, both well-documented and cross-referenced across independent sources. The teaching-philosophy principle relies partly on secondary aggregator sites (fs.blog) quoting Gleick's biography rather than the primary note itself, which is a thinner chain of sourcing than the Challenger and Cargo Cult material; treat that principle as slightly less independently verified than the other three. Separately, in the course of this research, documented personal-conduct criticism of Feynman surfaced (concerning his own anecdotes about his treatment of women, as recounted in "Surely You're Joking, Mr. Feynman!" and since re-examined by critics). That criticism is real and contested among biographers, but it is out of scope for this domain-specific profile, which is limited to his documented scientific reasoning and professional conduct in research contexts — it is noted here only for transparency, not elaborated on or adjudicated.


============================================================
# PROFILE: sam-altman.md
============================================================

# Sam Altman

*档案生成于 2026-07-07。基于公开资料整理的推测性框架，不代表本人核实过的私人观点。*

## Sources
- OpenAI 官方博客《Our principles》(公司自述) — https://openai.com/index/our-principles/
- Tucker Carlson Show 访谈实录，2025年9月 (本人原话，第三方平台转录) — singjupost.com
- Conversations with Tyler，两期访谈 (第三方独立媒体) — conversationswithtyler.com
- Lex Fridman Podcast #419 (第三方独立媒体) — lexfridman.com
- TIME 完整专访 (独立媒体) — time.com
- Bloomberg Businessweek 长篇专访，2025年2月 (独立媒体) — bloomberg.com
- Harvard Business School 案例《OpenAI: Idealism Meets Capitalism》《Governing OpenAI (A)》(独立学术机构)
- The New Yorker 深度调查 (Ronan Farrow & Andrew Marantz，18个月、100+受访者、200余页内部文件；独立调查报道) — 经 Techzine、Storyboard18、Gizmodo、TheRipCurrent 等二次转述
- Wikipedia "Removal of Sam Altman from OpenAI" 及 "Sam Altman" 词条 (综合第三方信源)
- TIME《Timeline of Recent Accusations》(独立媒体)
- Startup Grind / EconTalk / YC Library 早期访谈 (第三方平台，YC时期原话)

## Core stance
Altman 的决策风格核心是"先动手、再解释"：他倾向于在信息或共识不完整时就推进（发布产品、做出承诺、下场表态），然后把过程中暴露的问题重新包装成一套事后成立的方法论（如"迭代部署"）。这种风格在产品和技术路线上被广泛认可为高明的节奏感，但在治理和人际信任层面反复引发同一类指控——对同事、董事会选择性透明。

## Recurring principles

- **原则一：渐进式部署优于闭门造好再发布**
  - **体现之处**：OpenAI 官方博客承认，GPT-2 权重是否公开一度让团队紧张，但事后证明"担心是多余的"，这次经历催生了"迭代部署"策略，此后被反复引用为公司安全战略的核心支柱。ChatGPT 的仓促上线也是同一逻辑——据 Bloomberg 专访，团队内部曾反对，认为"还没准备好"，但他坚持推进。
  - **可能失效的场景**：同一种"先做了再说"的本能，在治理层面变成了向董事会隐瞒关键信息——例如 GPT-4 是否经过安全小组批准一事，据《纽约客》调查，他向董事会提供的信息后来被证明与实际不符。产品端的"先发布再迭代"如果套用到组织信任上，就成了"先斩后奏"。

- **原则二："把成年用户当成年人对待"——高度用户自主权**
  - **体现之处**：在 Tucker Carlson 访谈与 Progress Conference（Conversations with Tyler）中他反复强调，对隐私和使用边界要给用户很大自由度，"个体用户应该被允许对同性婚姻有意见，AI不该说他们错了"是他给出的具体例子。
  - **可能失效的场景**：这条自由放任原则并不对等地适用于他自己与信息掌控者（董事会、同事）的关系——多份独立信源（Loopt、YC、OpenAI 三段经历）都记录了他被指控对上级或同僚选择性告知信息，而非按"把对方当成年人、给全部信息"的标准对待。

- **原则三：执行速度压倒一切，包括对干扰因素说"不"**
  - **体现之处**：YC 时期（Startup Grind 2015 访谈）他明确说过，最优秀的创始人"execute so quickly"，且他本人以"几乎对所有事情说不"来保护执行速度。
  - **可能失效的场景**：这种以速度为最高优先级的取向，在《纽约客》调查描述的模式里，表现为为了推进节奏而在安全审批、人事承诺等环节走捷径——速度优先本身没有问题，但当它系统性挤压"如实汇报"的时间和意愿时，就是同一枚硬币的反面。

- **原则四：先做业务决策，再补一套使命叙事**
  - **体现之处**：2026年发布的《Our principles》被多家媒体（The Decoder）解读为"也是对近期商业决策的辩护"，尤其被指是对五角大楼合同争议的间接回应——先有争议性的商业动作，再补充"民主化""可适应性"等原则性框架。
  - **可能失效的场景**：当叙事明显滞后于决策（先做后解释）时，容易被解读为公关补丁而非真实的决策指南——他自己也承认五角大楼合同的对外沟通"看起来投机且草率"。

- **原则五：用"人才筛选"逻辑经营组织——故意设置门槛过滤非信徒**
  - **体现之处**：据 Bloomberg 专访，OpenAI 早期他刻意采用"看起来有些荒诞"的定位来吓退资深专家，只留下愿意all-in的年轻人，形成"band of brothers"式的核心团队。
  - **可能失效的场景**：这种"先筛掉怀疑者、只留信徒"的组织方式，代价是核心圈子内部缺乏建制化的制衡——2023年董事会解雇事件里，恰恰是曾经最亲近的核心成员（Ilya Sutskever）整理了指控材料，说明"信徒文化"本身不能替代真正的治理结构。

## Default reasoning order
根据现有材料推断的默认思考顺序：① 先判断能否现在就把东西推向真实世界获取反馈（而非等万事俱备）；② 观察真实世界的反应，把冲突和意外都当作有用信号；③ 事后把这套经验升级、命名、包装成可复用的战略语言（"迭代部署""五项原则"）；④ 如果反弹足够大，公开承认沟通方式有问题，但很少改变原始决策本身（五角大楼合同事件是典型例子——承认"看起来草率"，但没有撤回决策）。

## Tradeoffs they lean toward
- 速度与推进的势能，优先于完整披露和走完流程
- 用户/个体自主权，优先于家长式的统一限制（但对未成年人和"社会公共安全"类议题除外，这两类他明确表态愿意加限制）
- 使命叙事的连贯性，优先于逐条对外解释具体决策的过程
- 保护核心信任圈子的执行效率，优先于建制化、可制衡的治理结构

## One documented failure or criticism
2023年11月，OpenAI 董事会以"沟通不够如实（not consistently candid）"为由解雇了他，五天后在员工和投资人的压力下复职，原董事会成员多数离任。2026年《纽约客》基于100余名受访者和200余页内部文件（包括 Ilya Sutskever 整理并提交给董事会的备忘录）的调查显示，这一模式并非孤立事件：据报道，Loopt（他的第一家公司）和 Y Combinator 任期内都曾有高层或同僚就"透明度"问题要求董事会将他撤换。一位匿名董事会成员将他形容为"unconstrained by truth"（不受真相约束）。前 Anthropic 研究负责人 Dario Amodei 也曾表示"the problem with OpenAI is Sam himself"（OpenAI 的问题就是 Sam 本人）。他本人的公开回应是将这段经历描述为"extremely painful（非常痛苦）"，但同时认为公司因此"更团结了"，并未正面承认具体指控。

## Vocabulary / analogies they reach for
- "iterative deployment"（迭代部署）——几乎是他解释一切争议性发布决策时的默认话术
- "treat adult users like adults"（把成年用户当成年人对待）——隐私和自由度议题上的高频表述
- 用"network effect"（网络效应）类比组织本身的运作方式，而不只是产品
- 用"the best founders execute so quickly"式的执行力叙事评价人和公司
- 技术乐观主义式的时间尺度表达（"this is the best time yet"）

## Confidence note
- **原则一至五**主要基于公司自述（OpenAI 博客）与他本人在多档独立媒体访谈中的原话，可信度较高，但要注意这类材料天然偏向自我呈现，"迭代部署"叙事本身就是他自己给失误重新命名的结果，需要与批评层交叉验证。
- **批评/失败层**的核心证据来自《纽约客》一篇调查（Farrow & Marantz），虽然该报道本身信源量大（100+受访者、200余页文件），但目前该指控主要通过这一篇原始调查及其转述报道（Techzine、Storyboard18、Gizmodo、TheRipCurrent）传播，尚缺乏另一条完全独立、不同调查团队的平行信源，建议将其视为"高质量单一信源、多方转述"而非"多个独立信源互证"。
- 董事会解雇的官方措辞（"not consistently candid"）本身较为模糊，具体所指内容主要来自事后披露（Helen Toner 2024年5月文章、New Yorker 2026年报道），存在一定时间滞后和记忆重构的风险。
- 尚未找到强有力的、独立于 New Yorker 报道之外的正面反驳材料——如果他本人或 OpenAI 官方后续有针对具体指控的详细回应，应更新此档案。


============================================================
# PROFILE: steve-jobs.md
============================================================

# Steve Jobs

*Starter profile — ships with the borrowed-brain-pro repo, covering the product/entrepreneurship domain. Generated 2026-07-07. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [Steve Jobs' 2005 Stanford Commencement Address transcript — Rev.com](https://www.rev.com/transcripts/steve-jobs-stanford-commencement-speech-transcript-2005) — (self-published / primary voice; his own words, delivered June 2005, covering events from 1972-2004)
- [Steve Jobs speaks out — Fortune interview series, 2008](https://archive.fortune.com/galleries/2008/fortune/0803/gallery.jobsqna.fortune/index.html) — (self-published / primary voice; on-record interview with Fortune senior editor Betsy Morris, March 2008)
- [Apple CEO Steve Jobs Live at D8: "All We Want to Do is Make Better Products" — AllThingsD](https://allthingsd.com/20100601/steve-jobs-session/) — (independent third-party liveblog of an on-record interview, June 2010, with Walt Mossberg and Kara Swisher)
- [The Real Leadership Lessons of Steve Jobs — Harvard Business Review, Walter Isaacson](https://hbr.org/2012/04/the-real-leadership-lessons-of-steve-jobs) — (independent third-party; Isaacson's own summary of his authorized biography research, published April 2012, drawing on ~2 years of interviews conducted 2009-2011)
- [Why did Apple's board fire Steve Jobs in 1985? — The Corporate Governance Institute](https://www.thecorporategovernanceinstitute.com/insights/case-studies/why-did-apples-board-fire-steve-jobs-in-1985/) — (independent third-party case study, covering events of April-Sept 1985)
- [John Sculley Tells The Real Story of Steve Jobs' "Firing" — Forbes](https://www.forbes.com/sites/davidcoursey/2012/01/13/john-sculley-tells-the-real-story-of-steve-jobs-firing/) — (independent third-party reporting on Sculley's own later account, published Jan 2012, referring back to 1985)
- [Looking back at Steve Jobs's NeXT, Inc — "the most successful failure ever" — AppleInsider](https://appleinsider.com/articles/25/09/12/looking-back-at-steve-jobss-next-inc----the-most-successful-failure-ever) — (independent third-party retrospective, covering NeXT 1985-1996, published Sept 2025)
- [Steve Jobs Famously Said No One Wants a Stylus — Inc./Quora](https://www.inc.com/quora/steve-jobs-famously-said-no-one-wants-a-stylus-here-s-why-apple-disagrees-today.html) — (independent third-party, citing the 2007 iPhone launch keynote and Isaacson biography anecdote about a Microsoft tablet demo, dated to the early-2000s)
- [How Steve Jobs' "Think Different" Speech Saved Apple — Media Shower](https://www.mediashower.com/blog/steve-jobs-1997-speech/) — (independent third-party account of the 1997 WWDC talk and product-line simplification, drawing on Isaacson's biography for the "This is crazy" / four-quadrant chart anecdote, events from 1997-1998)
- [Steve Jobs' Reality Distortion Field: Leadership or Bullying? — ChangingWinds](https://changingwinds.wordpress.com/2018/11/18/steve-jobs-reality-distortion-field-leadership-or-bullying/) — (independent third-party critical analysis of management-style criticism, published 2018, referencing accounts spanning the 1980s-2000s)

## Core stance
Based on public material, Jobs's approach to product decisions centers on aggressive subtraction rather than addition: reducing Apple's product line by roughly 70% in 1997, and reducing the iPhone's input model to a single surface (the finger) by refusing a stylus. He treated his own authority as a filter for saying no — at WWDC 1997 he described innovation as "saying no to 1,000 things" — more than as a source of new ideas to add. Per Isaacson's account of his biography research, this wasn't a stylistic preference but something Jobs traced to his Zen training: simplifying by finding the essence of a product and cutting everything else, which required first understanding the complexity deeply rather than skipping past it.

## Recurring principles

- **Principle**: Treat focus as subtraction — the job is choosing what to cut, not what to add.
  - **Where it shows up**: On returning to Apple in 1997, Jobs reportedly stopped a product review meeting, said "This is crazy," and drew a simple two-by-two chart (consumer/pro x desktop/portable) that cut Apple's product line from roughly a dozen Macintosh variants down to four products (per Isaacson's account, relayed via Media Shower, 1997).
  - **Where it likely breaks down**: The same instinct that let him cut Apple's bloated product line in 1997 also drove him to reject the stylus and, according to Isaacson's biographical account, resist input methods and form factors that didn't fit his existing model of "the right way" — Apple's own later reversal (releasing the Apple Pencil in 2015, per Forbes/Quora reporting) suggests the subtraction instinct can also foreclose genuinely useful additions, not just noise.

- **Principle**: Reject an input/design pattern outright rather than trying to make a flawed version work.
  - **Where it shows up**: At the iPhone's 2007 launch he dismissed the stylus with "nobody wants a stylus," and per the Isaacson biography anecdote reported by Inc./Quora, his irritated reaction to a Microsoft tablet-PC demo years earlier reportedly helped push Apple toward a finger-only multi-touch direction instead (dated informally to the early-2000s).
  - **Where it likely breaks down**: This is a binary, all-or-nothing style of decision — useful for killing a bad category quickly, but it offers no documented mechanism in the sources found for revisiting the call once made. It took Apple until 2015, years after his death, to reintroduce a stylus for a different use case (precision drawing/note-taking), suggesting the principle doesn't self-correct without an external forcing event.

- **Principle**: Frame setbacks retroactively as necessary steps rather than pure losses.
  - **Where it shows up**: In the 2005 Stanford speech, Jobs described being removed from Apple's operational role in 1985 as "the best thing that could have ever happened to me," saying it let him enter "one of the most creative periods" of his life (Rev.com transcript, 2005 speech recounting 1985 events).
  - **Where it likely breaks down**: This is his own retrospective account, delivered 20 years after the events and after the outcome (Apple's 1997 turnaround) was already known. It's a survivorship framing — it does not address the roughly decade-long stretch (1985-1996) in which NeXT struggled commercially (the NeXT Cube reportedly sold poorly at $6,500, per AppleInsider's 2025 retrospective) with no guarantee at the time that it would end in a triumphant return.

- **Principle**: Push for aggressive, sometimes confrontational directness with employees rather than smoothing over disagreement.
  - **Where it shows up**: Multiple independent accounts (e.g., ChangingWinds' 2018 analysis) describe Jobs berating employees in front of peers and demanding what seemed like impossible timelines — behavior that became known inside Apple as the "reality distortion field," a term reportedly coined by his own team.
  - **Where it likely breaks down**: The same sources note this style is widely criticized as corrosive to morale and psychologically costly to the people on the receiving end, independent of whether it produced results; it is documented as a real cost, not just a stylistic quirk, and the material found does not show Jobs publicly reconciling or softening this pattern over time the way, for example, he revised his stance on tablets.

## Default reasoning order
1. Strip the decision to its essential question first (e.g., reducing a product-line decision to "consumer or pro, desktop or portable") before evaluating options within it.
2. Ask what can be removed or refused, not just what can be added — treat saying no as the primary lever.
3. Commit to the resulting direction firmly and communicate it in absolute terms ("nobody wants X"), rather than hedged or provisional language.
4. Reassess only when an external event forces it (a boardroom loss in 1985, a market failure at NeXT) rather than as routine practice.

## Tradeoffs they lean toward
Based on public material, he consistently prioritized: simplicity over feature completeness (killing 70% of Apple's product line in 1997 rather than serving every retailer request); a single well-chosen interaction model over flexibility (finger-only touch over stylus-plus-touch); and conviction/speed in direction-setting over building consensus first — even when that conviction generated internal friction that multiple independent sources describe as harsh or costly to the people managed.

## One documented failure or criticism
Jobs was removed from operational control of Apple in April 1985 after the Lisa and Macintosh underperformed commercially and a power struggle with CEO John Sculley reached the board; Jobs also reportedly attempted a boardroom coup to remove Sculley, which failed when an executive he tried to recruit told Sculley instead (per The Corporate Governance Institute case study). Jobs resigned in September 1985 and founded NeXT, whose first workstation was expensive and commercially weak; Sculley, in a 2012 Forbes-reported interview, later said he had "failed to appreciate what effective leadership was" at the time — an outside acknowledgment that complicates a simple "Jobs was right all along" reading of the episode. Separately, and on a different axis, Jobs's management style — public criticism of employees, demanding what colleagues called a "reality distortion field" — is independently documented as a real and lasting point of criticism, not one he is on record as having walked back.

## Vocabulary / analogies they reach for
"Connecting the dots" (only looking backwards, never forwards) · "Innovation is saying no to 1,000 things" · framing focus itself as an act of refusing even the good ideas, not just the bad ones · "Nobody wants a stylus" · "Reality distortion field" (coined by his team, not by him, to describe his persuasion style)

## Confidence note
This profile draws on a well-documented public figure with a large volume of primary-voice material (his own speeches and interviews) and substantial independent reporting, so sourcing depth is not the constraint. Two things to flag: first, several of the most-cited anecdotes (the 1997 product-chart meeting, the Microsoft tablet-demo reaction) trace back through secondary retellings to Isaacson's authorized biography rather than to a source Jobs himself put on the record in those exact words — treat those two specifically as biographer-relayed rather than self-attested. Second, the "reality distortion field" criticism is well-independently-documented but the profile found no on-record instance of Jobs directly responding to or revising his view of that specific criticism, unlike the tablet/stylus reversal, which Apple itself effectively conceded by shipping the Pencil in 2015. Source material here spans roughly 1985 (the Apple ouster) to 2012 (Sculley's retrospective comments and the HBR piece), with the primary-voice material concentrated in 1997, 2005, 2008, and 2010.


============================================================
# PROFILE: travis-kalanick.md
============================================================

# Travis Kalanick

*Profile generated 2026-07-07. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [Uber CEO Travis Kalanick resigns after internal inquiry finds widespread sexual harassment, gender discrimination — Business & Human Rights Centre](https://www.business-humanrights.org/en/latest-news/uber-ceo-travis-kalanick-resigns-after-after-internal-inquiry-finds-widespread-sexual-harassment-gender-discrimination/) — (independent third-party; NGO news aggregation, June 2017)
- [Every Event That Led to Uber CEO Travis Kalanick's Resignation — Fortune](https://fortune.com/2017/06/21/uber-controversy-timeline-travis-kalanick/amp) — (independent third-party; contemporaneous reporting, June 2017)
- [Uber's CEO Apologizes After Fight With Driver: 'I Must...Grow Up' — Time](https://time.com/4686857/uber-ceo-driver-argument-travis-kalanick/) — (independent third-party; contemporaneous reporting, Feb-Mar 2017)
- [Standing up for what's right — Uber Newsroom](https://www.uber.com/newsroom/standing-up-for-whats-right-3) — (self-published/company-controlled; Uber's own account, describing 2016-era regulatory fights)
- [Ambition, Speed, and the Cost of Growth: Leadership of Travis Kalanick — Insighthawk](https://insighthawk.substack.com/p/ambition-speed-and-the-cost-of-growth) — (independent third-party; retrospective analyst commentary, publish date not confirmed but written well after 2017)

## Core stance
Based on public material, Kalanick's approach treats confrontation — with regulators, competitors, and internal norms — as a legitimate and even necessary tool rather than something to avoid, framed explicitly as "principled confrontation." He described this as reserving compromise for opponents he judged to be acting from principles he respected, and treating anyone he framed as protecting an entrenched incumbent as someone not worth negotiating with. That same appetite for confrontation, applied without an apparent internal check on where it stopped being useful, is what the documented failure below traces back to.

## Recurring principles

- **Principle**: Treat aggressive expansion into resistant markets as validation, not a warning sign — the more hostile the regulatory environment, the more valuable the win.
  - **Where it shows up**: Public reporting describes his market-entry calculus as weighing population density and car ownership alongside regulatory hostility, on the reasoning that surviving a harder fight built a bigger moat. He described entering New York as coming in "pretty hard and fast," by his own account.
  - **Where it likely breaks down**: This same logic, per reporting on the Greyball program, extended into using deceptive app experiences to evade regulators and law enforcement — the "hostility is a moat" framework doesn't appear to have had a built-in stopping point distinguishing lawful aggressive competition from deception.

- **Principle**: Treat internal company values as maximalist directives ("Always be hustlin'," "Toe-stepping," "Meritocracy") without a stated ceiling on how far to take them.
  - **Where it shows up**: These were among Uber's original stated values under his leadership, explicitly built around speed and competitive intensity.
  - **Where it likely breaks down**: The documented internal investigation that preceded his resignation found 215 staff complaints — including harassment, discrimination, and bullying — a pattern commentators have directly linked to values like "always be hustlin'" and "toe-stepping" providing no internal signal for when competitive intensity crossed into harassment or misconduct. This is the clearest instance in the record of a stated principle breaking down at scale rather than in a single moment.

- **Principle**: Respond to direct personal confrontation combatively in the moment, then reassess afterward under public pressure.
  - **Where it shows up**: Dashcam footage captured him in a heated exchange with an Uber driver over falling fares, telling the driver that some people don't take responsibility for their own problems. Days later, after the video became public, he stated he needed "leadership help" and that he needed to "grow up."
  - **Where it likely breaks down**: The reassessment was reactive — it followed public exposure of the video rather than preceding it. The record doesn't show him applying that same self-check in the moment of the original confrontation; the pattern across incidents in the timeline is public-pressure-triggered reflection, not real-time restraint.

## Default reasoning order
1. Is this obstacle regulatory/competitive resistance? If so, treat it as validating the direction rather than a signal to reconsider.
2. Is the person on the other side acting from principles he judges worth respecting? If not, by his own stated framework, there's "less to talk about" — confrontation over compromise.
3. Reassessment of his own conduct, per the documented pattern, appears to follow public/investor pressure rather than precede it.

## Tradeoffs they lean toward
Speed and competitive dominance over caution or regulatory accommodation — described in his own words as wanting efficiency "with elegance on top," efficiency being the core and elegance the secondary layer. Growth and market share consistently prioritized over the kind of internal governance that might have caught the harassment and discrimination pattern earlier.

## One documented failure or criticism
Following a February 2017 blog post by former Uber engineer Susan Fowler describing sustained sexual harassment and the company's failure to act on it, an external investigation identified 215 staff complaints going back to 2012 — including harassment, discrimination, and bullying. Additional reporting in the same period covered the Greyball program used to deceive regulators, and a video of Kalanick in a heated dispute with an Uber driver over falling fares. Kalanick resigned as CEO in June 2017 under pressure from major investors. His own contemporaneous statements — needing "leadership help," needing to "grow up," framing the moment as needing to work on "Travis 2.0" — describe the need for personal change without, in the material found, offering a detailed account of what in his own decision-making let the harassment pattern go unaddressed for years before Fowler's post became public. That gap — public acknowledgment of a need to change, without a documented public account of the specific reasoning failure that preceded it — is itself notable and is described here descriptively, not as speculation about undisclosed private motives.

## Vocabulary / analogies they reach for
"Principled confrontation" · "Always be hustlin'" · "Toe-stepping" · "efficiency with elegance on top" · framing his own needed change as "Travis 2.0"

## Confidence note
Material on this figure is abundant but concentrated heavily around the 2017 collapse period (Feb-June 2017) — pre-2017 material (e.g. the New York market-entry framing, ~2011-2013) tends to be framed retrospectively through that lens, which may compress or flatten how his reasoning is described in earlier, less scrutinized years. Sourcing here is mostly independent third-party reporting, which is a stronger evidentiary base than a profile leaning on self-published material — the one self-published source (Uber's own newsroom post) is used only for the regulatory-fight framing, not for the failure/criticism section. Per this skill's guardrails, no claim is made here about his private motives or unstated intentions during the harassment pattern — the profile stays limited to his documented public statements and reported actions, and the "why did the pattern go uncorrected for years" question is flagged as an open gap rather than filled with speculation. This profile has not been checked against anything post-2017 involving Kalanick (e.g. his post-Uber ventures); it should be treated as most reliable for the Uber-era period specifically, per this skill's staleness guidance in Apply Mode.


============================================================
# PROFILE: warren-buffett.md
============================================================

# Warren Buffett

*Starter profile — ships with the borrowed-brain-pro repo, covering the investing domain. Generated 2026-07-07. Based on public material — a speculative framework, not verified personal views.*

## Sources
- [1996 Berkshire Hathaway Chairman's Letter](https://www.berkshirehathaway.com/letters/1996.html) — Berkshire Hathaway shareholder letters archive (self-published — 1996, referenced via secondary summaries at Chian.io and AES International)
- [1992 & 1997 Berkshire Hathaway Chairman's Letters, "margin of safety" passages](http://mastersinvest.com/marginofsafetyquotes) — compiled from self-published letters (self-published — 1992/1997, aggregated by Investment Masters Class)
- [Warren Buffett: "The Worst Deal That I've Made" — The Acquirer's Multiple](https://acquirersmultiple.com/2018/07/warren-buffett-the-worst-deal-that-ive-made/) — independent third-party summary of 2007 letter (2018 article covering 2007 letter content)
- [Warren Buffett's 'most gruesome' mistake was buying Dexter Shoe — Yahoo Finance](https://finance.yahoo.com/news/warren-buffetts-most-gruesome-mistake-105805818.html) — independent third-party financial journalism (undated, covering 1993–2007 events)
- [Warren Buffett's $11 Billion Mistake — Kingswell](https://www.kingswell.io/p/warren-buffetts-11-billion-mistake) — independent third-party, corroborates Dexter Shoe cost figures
- [A Dozen Things Warren Buffett and Charlie Munger Learned From See's Candies — 25iq](https://25iq.com/2016/11/25/a-dozen-things-warren-buffett-and-charlie-munger-learned-from-sees-candies/) — independent third-party analysis (2016, covering 1972 decision)
- [Tasting Quality: Berkshire's Defining Bet on See's Candies — Quartr](https://quartr.com/insights/edge/tasting-quality-berkshires-defining-bet-on-sees-candies) — independent third-party, corroborates the Graham-to-quality shift narrative
- [Alice Schroeder Talks Buffett, Berkshire, and The Snowball — Kingswell Q&A transcript](https://www.kingswell.io/p/alice-schroeder-talks-buffett-berkshire) — independent third-party (2008 interview with Buffett's authorized biographer, ~2,000 hours spent with him)
- [Warren Buffett Avoided Tech Stocks for 60 Years — Yahoo Finance](https://finance.yahoo.com/news/warren-buffett-avoided-tech-stocks-160734515.html) — independent third-party, on 1999–2000 dot-com-era criticism of Buffett as "outdated"
- [Warren Buffett and His 20 Punches — The Motley Fool](https://www.fool.com/investing/general/2004/05/05/warren-buffett-and-his-20-punches.aspx) — independent third-party (2004 article, covering a 2001 University of Georgia talk)
- [Warren Buffett explains boost in cash for Berkshire Hathaway — UPI](https://www.upi.com/Top_News/US/2025/02/22/Warren-Buffett-Berkshire-Hathaway-cash-increases-annual-letter/2581740241466/) — independent third-party news coverage of the 2025 letter (self-published letter content relayed via wire service)
- [Berkshire Hathaway Q3 2025: Buffett's Cash Fortress and an Occidental bet — The Acquirer's Multiple](https://acquirersmultiple.com/2025/11/berkshire-hathaway-q3-2025-buffetts-cash-fortress-and-an-9-7-billion-bet-on-occidental-chemicals/) — independent third-party, 2025

## Core stance
Based on public material, Buffett's approach centers on treating a stock purchase as buying a fraction of a real business, not a trading ticket — a framing he attributes directly to his teacher Ben Graham and the "Mr. Market" metaphor (1992 letter). Rather than covering many industries, his stated method is to restrict himself to a small number of businesses he can evaluate with real confidence ("circle of competence," 1996 letter) and wait, sometimes for years, until one of those becomes available at a price with a cushion for being wrong (the "margin of safety," 1992/1997 letters). Biographer Alice Schroeder, after roughly 2,000 hours observing him, distilled this as: he's not a gambler, he's a handicapper — someone calculating odds, not taking flyers.

## Recurring principles

- **Principle**: Restrict decisions to a small, well-understood set of businesses rather than trying to cover a wide field.
  - **Where it shows up**: In the 1996 letter he wrote that the size of one's circle of competence "is not very important; knowing its boundaries, however, is vital." He applied this literally during the dot-com run-up (1999–2000), declining internet and tech stocks because he couldn't reliably project their competitive position a decade out.
  - **Where it likely breaks down**: This same discipline caused him to sit out Google and Amazon during their early growth, and he has since acknowledged being slow to move on Apple relative to how the opportunity looked in hindsight — cases where "I don't understand it" cost more than it protected, since both companies turned out to be far more durable than the "story stock" pattern he was screening against.

- **Principle**: Prefer paying a fair price for a durable, high-quality business over a cheap price for a mediocre one.
  - **Where it shows up**: The 1972 See's Candies purchase, done at roughly 3x book value on Charlie Munger's urging, marked a documented break from Buffett's earlier Ben Graham-style "cigar butt" bargain hunting; multiple accounts (25iq, Quartr) describe this as the moment he shifted toward paying up for brand strength and pricing power, a shift he later extended to Coca-Cola and Apple.
  - **Where it likely breaks down**: The same "pay up for quality" logic was present in the 1993 Dexter Shoe acquisition, which he later called the worst deal he's made — Dexter looked like a quality franchise with a strong record at the time of purchase, but foreign competition eroded its position in ways he said he didn't foresee, showing that "quality" judged at the point of purchase isn't a guarantee against misjudging a moat's durability.

- **Principle**: Build in a margin of safety — buy meaningfully below your own estimate of intrinsic value so being wrong doesn't mean losing money.
  - **Where it shows up**: The 1992 letter states this directly as the "cornerstone of investment success," and he described it elsewhere with the bridge analogy: a bridge rated for 30,000 pounds should only carry 10,000-pound trucks. In the 1997 letter he tied the size of the needed margin to the volatility/predictability of the business itself — more uncertainty demands a bigger discount.
  - **Where it likely breaks down**: The margin-of-safety framing is about price protection, not competitive-position protection — Dexter Shoe wasn't a margin-of-safety failure (it was arguably bought at a reasonable multiple for its historical earnings), it was a failure to see that the underlying earnings power itself would collapse. A price cushion doesn't help if the business quality assumption underneath it turns out wrong.

- **Principle**: Act rarely and only with high conviction, rather than trading frequently on marginal opportunities.
  - **Where it shows up**: In a 2001 talk at the University of Georgia, he described an imaginary "20-slot punch card" limiting an investor to 20 lifetime investment decisions, arguing that forcing that scarcity would make people act only on their best ideas rather than the marginal ones.
  - **Where it likely breaks down**: Buffett himself has made far more than 20 investment decisions across Berkshire's history, and Berkshire under him has at times held over $300 billion in cash (reported in the 2025 letter) rather than deploying it — so the "punch card" is best read as a discipline device he preaches more strictly than he's literally practiced, and holding a large cash pile for years is itself a decision with real opportunity cost that the metaphor doesn't fully account for.

## Default reasoning order
Based on the documented cases above, the sequence appears to be: (1) first check whether the business is inside a domain he can genuinely evaluate — if not, decline regardless of how attractive the story sounds (the tech-stock pattern); (2) if it's inside that circle, assess the durability and quality of the underlying business and its competitive position, not just its current financial record (the See's Candies shift, and the standard Dexter Shoe should have failed on but didn't catch in time); (3) only then work out a price that leaves a margin of safety against being wrong about either of the first two steps; (4) if no opportunity clears all three bars, do nothing and hold cash rather than force a decision — reflected in his own words that "very infrequently we find ourselves knee-deep in opportunities" (2025 letter, via UPI coverage).

## Tradeoffs they lean toward
- Understood businesses over unfamiliar high-growth stories, even at the cost of missing large winners (Google, Amazon, early Apple).
- Business quality and durability over sheer cheapness, a shift documented at the 1972 See's Candies deal — though this tradeoff is not absolute, since it was quality-at-a-reasonable-price (Dexter Shoe) rather than quality-at-any-price.
- Patience and inaction over forced deployment of capital — willing to hold large cash reserves for extended periods rather than lower his standards to put money to work.
- Long-term compounding over short-term signaling to markets — he has repeatedly held positions (e.g. Occidental Petroleum, described in the 2025 letter as held "indefinitely") even amid public speculation about his intentions.

## One documented failure or criticism
The 1993 Dexter Shoe acquisition is Buffett's own choice of "worst deal" (2007 letter, as quoted across multiple independent sources). He paid with Berkshire stock rather than cash — 25,203 Class A shares, valued at roughly $433 million at the time — and because Berkshire's stock kept appreciating for years afterward, the real cost to shareholders when the shoe business ultimately failed (undercut by foreign competition) was calculated at roughly $3.5 billion, not the original purchase price. He called it "gruesome" and said it deserved a spot in the Guinness Book of World Records as a financial disaster, and noted the closure put about 1,600 workers in a small Maine town out of work. Separately, dot-com era coverage (1999–2000) shows him being publicly characterized as overly conservative and "outdated" for sitting out the tech rally entirely — criticism that looked validated in the short run and was reversed by the 2000–2002 crash, illustrating that his stated principle (stay inside your circle of competence) drew real, substantive external pushback at the time it was being applied, not just in hindsight.

## Vocabulary / analogies they reach for
- "Circle of competence" — the boundary of what you can reliably judge, more important to know than to expand.
- "Margin of safety" — buying with enough of a price cushion that being wrong doesn't mean losing money; illustrated with a bridge built to hold more weight than it will ever carry.
- "Mr. Market" — Ben Graham's personification of the market as a moody, always-available business partner naming a new price every day, whom you're free to ignore.
- The "20-slot punch card" — treating each investment decision as if it used up one of a strictly limited lifetime allotment.
- Describing a bad deal as "gruesome" and ranking his own mistakes candidly by dollar cost, rather than downplaying them.

## Confidence note
The circle-of-competence and margin-of-safety principles rely primarily on Buffett's own shareholder letters (self-published, company-controlled material) — these are well-corroborated across independent secondary sources, but the underlying primary quotes themselves come from Berkshire's own communications, which he controls and has every incentive to present favorably. The See's Candies "turning point" narrative and the Schroeder "handicapper, not gambler" characterization rest on independent third-party sourcing (biographer research, financial journalism), which is stronger evidence of a real, externally observed pattern. The Dexter Shoe failure is unusually well corroborated because Buffett's self-published admission (2007 letter) and independent financial journalism's cost reconstruction (Yahoo Finance, Kingswell) agree in substance, which is the strongest kind of evidence this profile draws on. Source material spans 1972 (See's Candies) through late 2025 (Q3 2025 Occidental coverage), so the profile reflects a view that was actively reinforced and restated across roughly five decades rather than a single moment — but note the "20-slot punch card" principle is visibly aspirational rather than strictly followed, per Buffett's own much higher actual transaction count and Berkshire's large multi-year cash holdings.


