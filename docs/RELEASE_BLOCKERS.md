# Release Blockers

Items that MUST be resolved before any public release. Every entry corresponds
to a placeholder in `packages/branding/src/index.ts`, which is the single place
these values are defined.

**Nothing here has been invented.** Where a value is unknown, it is marked
unknown. An invented legal entity or contact address in a published repository
is worse than an obvious placeholder.

## Blocking

### `LEGAL_OWNER`

**What:** The copyright holder, exactly as it must appear in `LICENSE`,
`NOTICE`, and every SPDX header.

**Why blocking:** `NOTICE` and every SPDX header need a real name. Publishing
with a literal `<LEGAL_OWNER>` placeholder looks unfinished and leaves the
copyright assertion weak.

Under Apache-2.0 there is no commercial contracting party, so a pseudonym
(`aibotjock`) is acceptable and is the path of least resistance here.

**Appears in:** `NOTICE`, generated SPDX headers, `package.json` author field.

**To resolve:** Supply a legal name, or confirm the `aibotjock` pseudonym.

**Status:** UNRESOLVED.

### `PRODUCT_NAME` — RESOLVED

**Toolwright**, chosen 2026-08-05. Applied across the tree.

Remaining verification, not blocking development but required before public
announcement: npm availability, GitHub org conflict, USPTO class 9 search. See
`docs/NAMING.md`.

## Verified as containing no invented values

Checked at slice 1:

- [x] No invented company name anywhere in the repository
- [x] No invented email address anywhere in the repository
- [x] No invented legal entity anywhere in the repository
- [x] No invented pricing or commercial terms anywhere in the repository
- [x] No stale AGPL or dual-licensing references remaining
- [x] No invented person's name anywhere in the repository
- [x] Funding file lists only channels that actually exist
- [x] No machine hostnames, usernames, or absolute local paths committed

Re-verify before each release:

```
pnpm check:placeholders
```

This command fails the build while any blocking placeholder is unresolved.

## Other pre-release checks

- [ ] `LICENSE` populated by `scripts/bootstrap-license-texts.sh` and checksum
      verified against a second independent source
- [ ] npm package name confirmed available
- [ ] Product name cleared for trademark conflicts by counsel
- [ ] Trademark strategy reviewed — this is now the primary retained asset
- [ ] GitHub private vulnerability reporting enabled in repository settings
- [ ] GitHub Discussions enabled, or links to it removed
- [ ] `THIRD_PARTY_NOTICES.md` regenerated from real dependencies
- [ ] `docs/COMPATIBILITY.md` versions verified against the registry
