# Implementation Plan

Vertical slices. Each slice is built, tested, and committed before the next
begins. **A slice is not done because it compiles.** It is done when its tests
execute the thing it claims to do.

## Status

| # | Slice | Status |
|---|---|---|
| 1 | Repository and licensing foundation | In progress |
| 2 | Versioned MCP project specification | Not started |
| 3 | Deterministic generator | Not started |
| 4 | One working MCP template | Not started |
| 5 | Generated-project execution and testing | Not started |
| 6 | Local web workflow | Not started |
| 7 | CLI workflow | Not started |
| 8 | Local and hosted model adapters | Not started |
| 9 | Feasibility review | Not started |
| 10 | Additional verified templates | Not started |
| 11 | Idea vault | Not started |
| 12 | Export and packaging | Not started |
| 13 | Security hardening | Not started |
| 14 | Documentation | Not started |
| 15 | Website-readiness interfaces | Not started |
| 16 | Final clean-install validation | Not started |

---

## Slice 1 — Repository and licensing foundation

**Goal:** A repository whose legal position is correct and whose branding can be
changed in one file.

Done:

- [x] Licensing documents: `LICENSES.md`, `TRADEMARKS.md`, `NOTICE`,
      `THIRD_PARTY_NOTICES.md` stub, `docs/MONETIZATION.md`
- [x] Community documents: `CONTRIBUTING.md`, `SECURITY.md`, `GOVERNANCE.md`,
      `CODE_OF_CONDUCT.md`
- [x] Issue templates, PR template, funding configuration
- [x] Centralised branding module with placeholder registry
- [x] Release-blocker register
- [x] Decision log started
- [x] Compatibility file with verified protocol revisions

Remaining:

- [ ] Run `scripts/bootstrap-license-texts.sh` to populate `LICENSE`
- [ ] Single package (no workspace yet), Node version pin, `.npmrc`
- [ ] TypeScript base configuration, ESLint, Prettier
- [ ] `pnpm check:placeholders` — fails while a blocking placeholder is unresolved
- [ ] Branding-centralisation test — fails if a branded string is hardcoded elsewhere
- [ ] CI workflow running format, lint, typecheck, test, license scan
- [ ] Initial commit

**Exit:** CI green on an empty-but-correct repository. Placeholder check
correctly *fails* while `LEGAL_OWNER` is unresolved — a passing check at this
stage would mean the check does not work.

---

## Slice 2 — Versioned MCP project specification

**Goal:** A machine-readable specification schema that generation consumes.

- [ ] Resolve the open question in `docs/COMPATIBILITY.md`: target
      `2026-07-28` only, or both protocol eras
- [ ] Verify and pin the exact SDK version from the npm registry
- [ ] Zod schema covering every field the product brief requires
- [ ] Schema versioning with a migration path
- [ ] Validation with errors a human can act on
- [ ] Round-trip test: parse, serialise, re-parse, identical
- [ ] Hand-written example specification that validates

**Exit:** A specification can be written by hand, validated, and rejected with a
useful message when wrong. No AI involved.

---

## Slice 3 — Deterministic generator

**Goal:** Same specification in, byte-identical project out, every time.

- [ ] Template rendering with explicit template versions
- [ ] Project structure, MCP initialisation, tool/resource/prompt registration
- [ ] Schemas, configuration, environment variables, logging, packaging
- [ ] Transport setup for the selected transport
- [ ] Determinism test: generate twice, diff, expect empty
- [ ] Path-traversal guard on all writes

**Exit:** Generation is reproducible and involves no model call.

---

## Slice 4 — One working MCP template

Public REST API, `stdio`, no authentication. The narrowest end-to-end path.

**Exit:** Template is versioned, tested independently, and Apache-2.0 clean.

---

## Slice 5 — Generated-project execution and testing

The first point at which anything can honestly be called working.

- [ ] Docker sandbox: no network by default, restricted filesystem, memory and
      CPU limits, timeouts, no child processes, torn down after use
- [ ] Restricted mode when Docker is absent, disclosed loudly at runtime
- [ ] Install, compile, start, discover, invoke, invalid input, clean shutdown
- [ ] Secret redaction verified by test, not by inspection
- [ ] MCP Inspector validation wired in
- [ ] Truthful project status states

**Exit:** A generated server is installed, compiled, started, and invoked inside
the sandbox, and the run is what sets its status. No status is ever set by the
presence of files.

---

## Slices 6–16

Expanded when slice 5 passes. Ordering per the product brief. Secondary
platform features stay unimplemented until the primary workflow is reliable end
to end.

---

## Standing rules

- Nothing is marked working without a test that executes it.
- Mocks, stubs, placeholder buttons, and hardcoded success messages are not
  functionality.
- Disabled tests and suppressed type errors are failures, not progress.
- Unverified against a live service means labelled unverified.
- Undocumented API behaviour means the integration is unresolved, not guessed.
