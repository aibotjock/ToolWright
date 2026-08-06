#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0
# Fails while any release-blocking placeholder is unresolved.
set -uo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

found=0
while IFS= read -r line; do
  echo "  $line"
  found=1
done < <(grep -rn "<LEGAL_OWNER>" . 2>/dev/null \
  --exclude-dir=.git --exclude-dir=node_modules \
  | grep -v "RELEASE_BLOCKERS.md" \
  | grep -v "check-placeholders.sh")

if [ "$found" -eq 1 ]; then
  echo ""
  echo "FAIL: unresolved release-blocking placeholder(s) above."
  echo "Set LEGAL.copyrightHolder in packages/branding/src/index.ts and update NOTICE."
  echo "See docs/RELEASE_BLOCKERS.md."
  exit 1
fi

echo "PASS: no unresolved blocking placeholders."
