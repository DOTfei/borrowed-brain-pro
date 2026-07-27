# Historical Crisis Eval: 2008 Financial Crisis Liquidity Deploy

*Status: case-study*

*Benchmark Evaluation: Testing Warren Buffett's Profile on the September 2008 Wall Street Meltdown.*

## 1. The Crisis Scenario (Blind Setup)
- **Date**: September 23, 2008
- **Context**: Lehman Brothers has just collapsed. Credit markets are completely frozen. Stock prices of major financial institutions are plummeting. Berkshire Hathaway holds over $30B in cash.
- **The Dilemma**: Major institutions (Goldman Sachs, General Electric) are facing acute liquidity squeezes and reaching out for emergency capital injections.

## 2. Blind Profile Model Prediction
Applying [Warren Buffett's Profile](../profiles/warren-buffett.md) (`Circle of Competence`, `Margin of Safety`, `Cash Fortress Discipline`):
- **Prediction 1**: Will NOT buy common stock directly on the open market during panic due to unknown downside.
- **Prediction 2**: Will demand cumulative preferred stock with a mandatory 10% dividend rate to guarantee immediate cash yield.
- **Prediction 3**: Will require equity warrants for upside participation if the financial system survives.

## Evaluation Contract

- **Profile version / commit**: Warren Buffett profile shipped with this repository at the time of review.
- **Prompt used**: Apply Warren Buffett's profile to the crisis scenario without revealing the historical outcome.
- **Information withheld until scoring**: The ground-truth outcome and deal terms below.
- **Scoring status**: Not independently scored.

## 3. Ground Truth Historical Outcome
- **Actual Action**: On Sept 23, 2008, Buffett invested $5 Billion in Goldman Sachs preferred stock yielding a 10% dividend, plus warrants to buy $5B of common stock at $115/share. Days later, he struck an identical deal with General Electric ($3B at 10%).
- **Evaluation status**: Qualitative retrospective only. This case was not run as a blind, independently scored benchmark, so no numerical accuracy claim is made.

## 4. Scoring and Limits

- **Raw scores**: Not collected.
- **Evaluator notes**: The predictions and outcome are directionally comparable, but this file was authored retrospectively.
- **What this case cannot establish**: It cannot establish predictive accuracy or generalize to future financial crises.
