#!/usr/bin/env python3
"""
Bundle Generator Script for borrowed-brain-pro

Combines SKILL.md, profiles/INDEX.md, and all profiles/*.md files into a single
`claude-ai-bundle.md` file suitable for pasting into system prompt fields.
"""

import os
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SKILL_PATH = REPO_ROOT / "SKILL.md"
INDEX_PATH = REPO_ROOT / "profiles" / "INDEX.md"
PROFILES_DIR = REPO_ROOT / "profiles"
BUNDLE_PATH = REPO_ROOT / "claude-ai-bundle.md"


def build_bundle():
    print("Building claude-ai-bundle.md...")

    profile_files = sorted(
        [
            p
            for p in PROFILES_DIR.glob("*.md")
            if p.name != "INDEX.md"
        ]
    )

    content_blocks = []

    header = (
        "# borrowed-brain-pro — Claude.ai Bundle\n"
        "# Paste this entire file as your system prompt in Claude.ai, ChatGPT, or any AI with a system prompt field.\n"
        f"# It includes SKILL.md + all {len(profile_files)} profiles in one block. No other setup needed.\n"
        "# Source: https://github.com/DOTfei/borrowed-brain-pro\n"
    )
    content_blocks.append(header)

    # 1. SKILL.md
    if SKILL_PATH.exists():
        content_blocks.append("============================================================\n# SKILL INSTRUCTIONS (SKILL.md)\n============================================================\n")
        content_blocks.append(SKILL_PATH.read_text(encoding="utf-8"))

    # 2. PROFILES INDEX
    if INDEX_PATH.exists():
        content_blocks.append("\n\n============================================================\n# PROFILES INDEX\n============================================================\n")
        content_blocks.append(INDEX_PATH.read_text(encoding="utf-8"))

    # 3. PROFILES
    content_blocks.append("\n\n============================================================\n# BUNDLED PROFILES\n============================================================\n")
    for profile in profile_files:
        content_blocks.append(f"\n--- PROFILE: {profile.stem} ---\n")
        content_blocks.append(profile.read_text(encoding="utf-8"))

    bundle_content = "\n".join(content_blocks) + "\n"
    BUNDLE_PATH.write_text(bundle_content, encoding="utf-8")

    print(f"Successfully generated {BUNDLE_PATH.name} with {len(profile_files)} profiles ({len(bundle_content.splitlines())} lines).")


if __name__ == "__main__":
    build_bundle()
