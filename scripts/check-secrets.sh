#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0
# Coarse check for credentials and machine identifiers committed by accident.
# Not a substitute for proper secret scanning in CI.
set -uo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

fail=0
scan() {
  pattern="$1"; label="$2"
  hits="$(grep -rniE "$pattern" --include="*.md" --include="*.ts" --include="*.js" \
          --include="*.json" --include="*.yml" --include="*.yaml" --include="*.sh" . 2>/dev/null \
          | grep -v "scripts/check-secrets.sh" || true)"
  if [ -n "$hits" ]; then
    echo "POSSIBLE ${label}:"
    echo "$hits"
    fail=1
  fi
}

scan 'sk-[a-zA-Z0-9]{20,}'                    "API key"
scan 'ghp_[a-zA-Z0-9]{20,}'                   "GitHub token"
scan 'AKIA[0-9A-Z]{16}'                       "AWS key"
scan '-----BEGIN [A-Z ]*PRIVATE KEY-----'     "private key"
scan '(password|passwd|secret|api_key|apikey)[[:space:]]*[=:][[:space:]]*["'"'"'][^"'"'"']{8,}' "hardcoded credential"

if [ "$fail" -eq 1 ]; then
  echo ""
  echo "FAIL: review the matches above before committing."
  exit 1
fi
echo "PASS: no obvious secrets or machine identifiers."
