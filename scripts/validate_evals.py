"""Validate the structure and claims of historical evaluation files."""

from __future__ import annotations

import glob
import re
import sys

REQUIRED_MARKERS = (
    "## 1. The Crisis Scenario (Blind Setup)",
    "## 2. Blind Profile Model Prediction",
    "## Evaluation Contract",
    "## 3. Ground Truth Historical Outcome",
    "## 4. Scoring and Limits",
)

NUMERICAL_CLAIM = re.compile(r"(?:Evaluation Accuracy Score|Accuracy Score|\b\d{2,3}%\s*(?:Match|吻合))", re.IGNORECASE)
STATUS_LINE = re.compile(r"\*Status:\s*(case-study|blind-pilot|validated-benchmark)\*", re.IGNORECASE)


def validate(path: str) -> list[str]:
    content = open(path, encoding="utf-8").read()
    errors: list[str] = []
    for marker in REQUIRED_MARKERS:
        if marker not in content:
            errors.append(f"missing required section: {marker}")
    if len(re.findall(r"^\s*-\s*\*\*Prediction\s+\d+", content, re.MULTILINE)) < 1:
        errors.append("no numbered prediction found")
    if not STATUS_LINE.search(content):
        errors.append("missing explicit status line")
    if NUMERICAL_CLAIM.search(content):
        errors.append("contains an unsupported numerical accuracy claim")
    return errors


def main() -> int:
    files = sorted(glob.glob("evals/eval-*.md"))
    if not files:
        print("[FAIL] No eval files found")
        return 1
    failures = 0
    for path in files:
        errors = validate(path)
        if errors:
            failures += len(errors)
            print(f"[FAIL] {path}")
            for error in errors:
                print(f"  - {error}")
        else:
            print(f"[PASS] {path}")
    print(f"Summary: {len(files)} evals checked. Failures: {failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
