# Third-Party Notices

This file lists third-party software distributed with or depended on by MCP
Inventor, together with the licenses under which those components are provided.

## Status

**This inventory is generated, not hand-written.**

At the time of writing, dependency selection has not begun — the repository is
at slice 1 (licensing foundation) and has no runtime dependencies yet. This
file is therefore a stub with a defined shape, not an empty promise.

It will be populated by the license-report tooling introduced alongside the
first dependencies, and regenerated in CI. A stale or hand-edited inventory is
worse than none, because it invites reliance.

Regenerate with:

```
pnpm licenses:report
```

## Format

Each entry records:

| Field | Meaning |
|---|---|
| Package | Name and exact version |
| License | SPDX identifier |
| Source | Repository or homepage |
| Notice | Required attribution text, where the license demands it |
| Scope | Whether it ships to users, or is development-only |

## Notable upstream projects

The following are named here because the project is built directly on them.
This is attribution, not a claim of endorsement or affiliation.

- **Model Context Protocol** — the specification and the official SDKs, from the
  MCP project. The protocol specification is the source of truth for
  `packages/mcp-spec`. Exact supported revisions are pinned in
  `docs/COMPATIBILITY.md`.

Their licenses will appear in the generated inventory once the dependencies are
added.

## Generated projects

Projects you generate have their **own** dependency license report, produced at
generation time and written into the generated project. This file covers the
platform only, and says nothing about what your generated servers depend on.
