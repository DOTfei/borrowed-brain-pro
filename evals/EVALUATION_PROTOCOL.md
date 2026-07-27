# Evaluation Protocol

This directory contains historical case studies and, when explicitly marked, reproducible blind evaluations. A case study is not evidence of predictive accuracy by itself.

## Required information boundary

Before a blind run, the evaluator may expose only:

1. The crisis scenario and decision date.
2. The selected profile and its sources dated before the decision.
3. The user's requested output format.

The ground-truth outcome, later commentary, and hindsight sources must remain hidden until the prediction is recorded.

## Scoring rubric

Score each prediction independently from 0 to 5:

| Dimension | 0 | 3 | 5 |
| :--- | :--- | :--- | :--- |
| Principle match | No relevant profile principle | Broadly consistent | Specific principle is correctly applied |
| Decision specificity | Generic advice | Identifies a direction | Identifies a concrete action or trade-off |
| Evidence discipline | Unsupported or fabricated | Evidence is partial | Every key claim is traceable |
| Uncertainty and limits | Presents certainty | Mentions some uncertainty | Clearly states blind spots and failure boundaries |

Report the raw scores and evaluator notes. Do not convert a single retrospective case into a percentage accuracy claim. Numerical aggregate results require at least three independent runs, a frozen prompt, a frozen profile version, and a named evaluator procedure.

## Status labels

- `case-study`: historical retrospective; no blind score.
- `blind-pilot`: a blind run exists but the sample is too small for an aggregate claim.
- `validated-benchmark`: the protocol, inputs, outputs, scores, and independent reruns are committed.
