#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0
#
# Downloads the canonical, byte-exact Apache-2.0 license text.
#
# WHY: LICENSE must contain the unmodified license text. Transcription, or
# extraction through any tool that reflows whitespace, risks silently altering
# a legal document. Fetch it and checksum it instead.
#
# USAGE:  ./scripts/bootstrap-license-texts.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
URL="https://www.apache.org/licenses/LICENSE-2.0.txt"
DEST="${REPO_ROOT}/LICENSE"
CHECKSUM_FILE="${REPO_ROOT}/docs/license-texts.sha256"

echo "Fetching Apache-2.0 -> ${DEST}"
if ! curl --fail --silent --show-error --location "${URL}" --output "${DEST}.tmp"; then
  echo "ERROR: could not download the license from ${URL}" >&2
  exit 1
fi
mv "${DEST}.tmp" "${DEST}"

if ! grep -qF "Apache License" "${DEST}"; then
  echo "ERROR: downloaded file does not look like the Apache License." >&2
  exit 1
fi
lines="$(wc -l < "${DEST}")"
if [ "${lines}" -lt 170 ]; then
  echo "ERROR: LICENSE is only ${lines} lines; expected ~200. Download may be truncated." >&2
  exit 1
fi
echo "  OK: LICENSE (${lines} lines)"

mkdir -p "$(dirname "${CHECKSUM_FILE}")"
{
  echo "# Checksum of the canonical license text fetched by"
  echo "# scripts/bootstrap-license-texts.sh"
  echo "# Source:   ${URL}"
  echo "# Recorded: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "# Verify:   sha256sum -c docs/license-texts.sha256"
  echo ""
  ( cd "${REPO_ROOT}" && sha256sum LICENSE )
} > "${CHECKSUM_FILE}"

echo ""
echo "Done. Remember to append your copyright line to NOTICE, not to LICENSE."
