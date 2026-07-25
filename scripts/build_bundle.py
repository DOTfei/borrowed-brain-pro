#!/usr/bin/env python3
"""
build_bundle.py — Automated Single-File Bundle Compiler for borrowed-brain-pro

Concatenates:
1. SKILL.md
2. profiles/INDEX.md
3. All profiles/*.md files (excluding INDEX.md)

Outputs BOTH:
- borrowed-brain-bundle.md (Universal Multi-Platform Bundle for ChatGPT, Local LLMs, Cursor, etc.)
- claude-ai-bundle.md (Backward compatibility alias)
"""

import glob
import os
import sys

# Force UTF-8 stdout
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    skill_path = os.path.join(root_dir, "SKILL.md")
    index_path = os.path.join(root_dir, "profiles", "INDEX.md")
    profiles_dir = os.path.join(root_dir, "profiles")
    bundle_path = os.path.join(root_dir, "borrowed-brain-bundle.md")
    alias_path = os.path.join(root_dir, "claude-ai-bundle.md")

    if not os.path.exists(skill_path):
        print(f"[ERROR] SKILL.md not found at {skill_path}")
        sys.exit(1)

    print("Building universal borrowed-brain-bundle.md...")

    parts = []

    # 1. Header & SKILL.md
    with open(skill_path, "r", encoding="utf-8") as f:
        skill_content = f.read()
    parts.append(skill_content)
    parts.append("\n\n" + "=" * 80 + "\n\n")

    # 2. INDEX.md
    if os.path.exists(index_path):
        with open(index_path, "r", encoding="utf-8") as f:
            index_content = f.read()
        parts.append("# PROFILES INDEX\n\n" + index_content)
        parts.append("\n\n" + "=" * 80 + "\n\n")

    # 3. All Profiles
    parts.append("# BUNDLED PRE-BUILT THINKING PROFILES\n\n")
    profile_files = sorted(glob.glob(os.path.join(profiles_dir, "*.md")))
    profile_files = [p for p in profile_files if not p.endswith("INDEX.md")]

    for p_path in profile_files:
        p_name = os.path.basename(p_path)
        with open(p_path, "r", encoding="utf-8") as f:
            p_content = f.read()
        parts.append(f"<!-- PROFILE: {p_name} -->\n\n" + p_content + "\n\n" + "-" * 60 + "\n\n")

    full_bundle = "".join(parts)

    # Write borrowed-brain-bundle.md
    with open(bundle_path, "w", encoding="utf-8") as f:
        f.write(full_bundle)

    # Write claude-ai-bundle.md (alias)
    with open(alias_path, "w", encoding="utf-8") as f:
        f.write(full_bundle)

    line_count = len(full_bundle.splitlines())
    profile_count = len(profile_files)
    print(f"[SUCCESS] Generated borrowed-brain-bundle.md & claude-ai-bundle.md with {profile_count} profiles ({line_count} lines).")

if __name__ == "__main__":
    main()
