"""Build the machine-readable inventory used to route and audit profiles."""

from __future__ import annotations

import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT = os.path.join(ROOT, "profiles", "manifest.json")


def extract_date(content: str, filename: str) -> str:
    match = re.search(r"(?:Profile\s+)?generated(?:\s+on)?\s+(\d{4}-\d{2}-\d{2})", content, re.IGNORECASE)
    if not match:
        raise ValueError(f"{filename}: missing profile generation date")
    return match.group(1)


def extract_name(content: str, filename: str) -> str:
    match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
    if not match:
        raise ValueError(f"{filename}: missing H1 profile name")
    return match.group(1).strip()


def build_entry(path: str) -> dict:
    filename = os.path.basename(path)
    slug = os.path.splitext(filename)[0]
    content = open(path, encoding="utf-8").read()
    source_section = content.split("## Sources", 1)[1].split("##", 1)[0]
    source_count = max(
        len(re.findall(r"https?://[^\s)]+", source_section)),
        len(re.findall(r"^\s*[-*]\s+", source_section, re.MULTILINE)),
    )
    principle_count = len(re.findall(r"^\s*[-*]\s+\*\*Principle(?:\*\*|\s|\d|:)|^\s*[-*]\s+\*\*原则(?:\*\*|\s|\d|：|:)", content, re.MULTILINE))
    failure_boundary_count = len(re.findall(r"Where it likely breaks down|可能失效之处", content, re.IGNORECASE))
    if not source_count or not principle_count or not failure_boundary_count:
        raise ValueError(f"{filename}: incomplete profile structure")
    depth = "deep" if source_count >= 10 else "solid" if source_count >= 6 else "thin"
    return {
        "slug": slug,
        "name": extract_name(content, filename),
        "path": f"profiles/{filename}",
        "generated": extract_date(content, filename),
        "source_count": source_count,
        "principle_count": principle_count,
        "failure_boundary_count": failure_boundary_count,
        "depth": depth,
        "evidence_map_status": "mapped" if "## Evidence Map" in content else "legacy-inline",
    }


def main() -> None:
    paths = sorted(glob.glob(os.path.join(ROOT, "profiles", "*.md")))
    paths = [path for path in paths if not path.endswith("INDEX.md")]
    manifest = {"version": 1, "profiles": [build_entry(path) for path in paths]}
    with open(OUTPUT, "w", encoding="utf-8", newline="\n") as handle:
        json.dump(manifest, handle, ensure_ascii=False, indent=2)
        handle.write("\n")
    print(f"[SUCCESS] Generated {len(paths)} profile manifest entries at profiles/manifest.json")


if __name__ == "__main__":
    main()
