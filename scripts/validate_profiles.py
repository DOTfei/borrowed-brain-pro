#!/usr/bin/env python3
"""
validate_profiles.py — Automated Quality & Schema Rating Validator for borrowed-brain-pro

Checks all profiles in profiles/*.md for:
1. Standard 9 Section Headers
2. Source Density (URL / Source count) & Rating (★★★ / ★★ / ★)
3. Failure Boundary Quality (Presence and depth of "Where it likely breaks down")
4. Quote Length Guardrail (Explicit direct quotes < 15 words per skill policy)
5. Evidence Map source-ID integrity (every mapped ID exists in the profile's Sources)
"""

import glob
import os
import re
import sys

# Force UTF-8 stdout encoding for Windows compatibility
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

REQUIRED_SECTIONS = [
    "## Sources",
    "## Core stance",
    "## Recurring principles",
    "## Default reasoning order",
    "## Tradeoffs they lean toward",
    "## One documented failure or criticism",
    "## Vocabulary / analogies they reach for",
    "## Confidence note",
    "## Evidence Map",
]

def validate_profile(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    errors = []
    warnings = []

    # 1. Section Header Check
    for section in REQUIRED_SECTIONS:
        if section.lower() not in content.lower():
            errors.append(f"Missing required section header: '{section}'")

    # 2. Source Density Check
    sources_section = ""
    if "## Sources" in content:
        parts = content.split("## Sources")
        if len(parts) > 1:
            sources_section = parts[1].split("##")[0]

    urls = re.findall(r"https?://[^\s\)]+", sources_section)
    bullet_sources = re.findall(r"^\s*[\-\*]\s+", sources_section, re.MULTILINE)
    source_count = max(len(urls), len(bullet_sources))

    # 2b. Evidence Map source-ID integrity check. Source IDs are deliberately
    # local to each profile so an Evidence Map cannot silently point at another
    # profile's bibliography.
    source_ids = set(re.findall(r"^\s*[\-*]\s+\[(S\d+)\]", sources_section, re.MULTILINE | re.IGNORECASE))
    evidence_section = ""
    evidence_parts = re.split(r"^## Evidence Map\s*$", content, maxsplit=1, flags=re.MULTILINE | re.IGNORECASE)
    if len(evidence_parts) > 1:
        evidence_section = re.split(r"^##\s+", evidence_parts[1], maxsplit=1, flags=re.MULTILINE)[0]
    evidence_ids = set(re.findall(r"\b(S\d+)\b", evidence_section, re.IGNORECASE))

    if not evidence_ids:
        errors.append("No source IDs found under '## Evidence Map'")
    unknown_evidence_ids = sorted(
        evidence_ids - source_ids,
        key=lambda value: int(value[1:]),
    )
    if unknown_evidence_ids:
        errors.append(
            "Evidence Map references source IDs missing from '## Sources': "
            + ", ".join(unknown_evidence_ids)
        )

    if source_count >= 10:
        depth_rating = "3-Star (Gold Standard - 10+ Sources)"
    elif source_count >= 6:
        depth_rating = "2-Star (Good - 6-9 Sources)"
    elif source_count >= 1:
        depth_rating = "1-Star (Basic - 1-5 Sources)"
    else:
        depth_rating = "0 (FAIL - No sources found)"
        errors.append("No valid sources found under '## Sources'")

    # 3. Failure Boundary Quality Check
    breakdown_matches = re.findall(r"Where it likely breaks down|可能失效之处", content, re.IGNORECASE)
    principles_count = len(re.findall(r"^\s*[\-\*]\s+\*\*Principle(?:\s|\d|:)|^\s*[\-\*]\s+\*\*原则(?:\s|\d|：|:)", content, re.MULTILINE))
    
    if len(breakdown_matches) < max(1, principles_count):
        warnings.append(f"Failure boundaries count ({len(breakdown_matches)}) is less than principles count ({principles_count})")

    # 4. Direct Quote Length Guardrail Check
    # Only inspect explicit, single-line quote pairs. The previous expression
    # consumed large Markdown sections and produced false positives.
    quotes = re.findall(r'[“"]([^“”"\r\n]+)[”"]', content)
    for q in quotes:
        word_count = len(re.findall(r"\b[\w’'-]+\b", q))
        if word_count >= 15:
            warnings.append(f"Explicit direct quote reaches {word_count} words; skill policy requires fewer than 15: '{q[:60]}...'")

    return {
        "filename": filename,
        "source_count": source_count,
        "source_ids": len(source_ids),
        "evidence_ids": len(evidence_ids),
        "rating": depth_rating,
        "errors": errors,
        "warnings": warnings,
    }

def main():
    profile_files = sorted(glob.glob("profiles/*.md"))
    profile_files = [p for p in profile_files if not p.endswith("INDEX.md")]

    if not profile_files:
        print("[ERROR] No profile files found in profiles/*.md!")
        sys.exit(1)

    print("==================================================")
    print("  BORROWED BRAIN PRO - PROFILE QUALITY VALIDATOR  ")
    print("==================================================\n")

    total_errors = 0
    total_warnings = 0

    for filepath in profile_files:
        result = validate_profile(filepath)
        filename = result["filename"]
        rating = result["rating"]
        errors = result["errors"]
        warnings = result["warnings"]

        if errors:
            status = "[FAIL]"
            total_errors += len(errors)
        elif warnings:
            status = "[WARN]"
            total_warnings += len(warnings)
        else:
            status = "[PASS]"

        print(f"{status} {filename}")
        print(f"   - Source Density: {result['source_count']} sources -> Rating: {rating}")
        print(f"   - Evidence Map: {result['evidence_ids']} mapped IDs / {result['source_ids']} source IDs")
        
        for err in errors:
            print(f"   - ERROR: {err}")
        for warn in warnings:
            print(f"   - WARNING: {warn}")
        print()

    print("--------------------------------------------------")
    print(f"Summary: {len(profile_files)} profiles checked. Total Errors: {total_errors}, Total Warnings: {total_warnings}")
    print("--------------------------------------------------")

    if total_errors > 0:
        print("[FAIL] Validation FAILED! Please fix all required errors before merging.")
        sys.exit(1)
    elif total_warnings > 0:
        print("[FAIL] Validation FAILED! Resolve warnings before merging.")
        sys.exit(1)
    else:
        print("[PASS] Validation PASSED! All profiles meet Borrowed Brain Pro quality standards.")
        sys.exit(0)

if __name__ == "__main__":
    main()
