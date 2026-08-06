# Decision Log

Significant decisions and the reasoning behind them, so the reasoning survives
being questioned later — including by the person who made it.

Newest first.

---

## 2026-08-05 — Named Toolwright

**Decision:** The project is Toolwright. Repository `aibotjock/ToolWright`.
Tagline: "Build MCP servers without writing one."

**Reasoning:** A *wright* is a maker — shipwright, wheelwright, playwright — and
MCP servers expose *tools*. Says what the product does in one word while using
no generic term, which makes it a distinctive mark rather than a descriptive
one.

Two problems it avoids. "Inventor" collides with Autodesk Inventor in the same
class of goods. And an MCP-prefixed name would have been descriptive, therefore
weakly protectable — which matters now that Apache-2.0 leaves the trademark as
the only retained asset. The protocol belongs in the tagline, not the name.

**Not yet verified:** npm availability, GitHub org conflicts, USPTO class 9.
None block development; all precede public announcement.

---

## 2026-08-05 — Relicensed to Apache-2.0. Adoption over licensing revenue.

**Decision:** The entire repository is `Apache-2.0`. The previous AGPL-3.0-only
platform / Apache-2.0 template split is removed. Dual licensing is abandoned.

**Reasoning:** The goal is adoption on the scale of pi and OpenClaw. Both are
MIT. Neither monetizes the license. AGPL is rejected outright by many corporate
policy scanners, which is precisely the friction that prevents that kind of
curve. Apache-2.0 over MIT for the explicit patent grant, which corporate legal
review cares about and MIT is silent on.

**What this costs:** Permanently. License exemptions can no longer be sold,
because nobody needs one. Anyone may fork, commercialise, and owe nothing. The
decision cannot be reversed.

**What replaces it:** Trademark, hosted operations, implementation services, and
sponsorship. Recorded in `docs/MONETIZATION.md`.

**Consequences already applied:**

- `COMMERCIAL-LICENSE.md`, `docs/CLA-PLACEHOLDER.md`, and the commercial
  licensing issue template deleted — all obsolete.
- CLA no longer required. Apache-2.0 section 5 covers inbound contributions.
- Code contributions opened. Plugin-first remains, as a maintenance policy
  rather than a legal constraint.
- `COMMERCIAL_CONTACT` placeholder removed. `LEGAL_OWNER` remains, and a
  pseudonym is now acceptable for it.
- License-boundary tests no longer needed. Licensing is uniform.

---

## 2026-08-05 — Plugin architecture, not a monorepo of everything

**Decision:** Small core with a plugin interface. Templates, connectors, and
adapters ship as separate npm packages owned by their authors.

**Reasoning:** Follows pi, which sustains an ecosystem with essentially one
maintainer by keeping extensions in other people's repositories. Solves the
maintenance problem, not just the legal one: a monorepo where every integration
is the maintainer's problem is unsustainable for a solo project with limited
time.

---

## 2026-08-05 — No advertising

**Decision:** No ads in the CLI, build output, postinstall scripts, docs, or
generated projects. Sponsorship instead.

**Reasoning:** The product executes generated code and handles user API
credentials. It runs on trust. Developer-tool ad revenue at realistic traffic is
negligible against that cost, and postinstall advertising is among the most
reliably punished things in this ecosystem. Sponsorship raises money from the
same source without spending trust.

---

## 2026-08-05 — SUPERSEDED: original AGPL dual-licensing structure

**Superseded the same day by the Apache-2.0 decision above.** Retained because
the reasoning explains what was traded away.

**Decision was:** Platform `AGPL-3.0-only`, templates `Apache-2.0`, commercial
licensing available separately.

**Reasoning:** This is the standard structure for "free for everyone, monetisable
by the owner". AGPL keeps the platform genuinely open while making a
closed-source hosted competitor legally impractical without a commercial
licence. Apache-2.0 on templates is essential and easy to get wrong: templates
are copied into generated projects, so AGPL templates would infect every user's
output.

`-only` rather than `-or-later` so future FSF revisions are not adopted
automatically. No Commons Clause and no non-commercial rider — either would make
the project non-open-source while providing little the AGPL does not already.

**Consequence:** External code contributions must stay closed until a
counsel-reviewed CLA exists. This is the single irreversible decision in the
project.

---

## 2026-08-05 — No contact email published (still in force)

**Decision:** Use GitHub-native channels — public issues for commercial
inquiries, private security advisories for vulnerabilities, Discussions for
design debate. No email address anywhere in the repository.

**Reasoning:** Owner preference: emphasis on development rather than
correspondence, and no wish to expose personal contact information. GitHub's
private vulnerability reporting covers the one case that genuinely needs a
confidential channel, at no cost and with no disclosure.

**Consequence:** With dual licensing abandoned, `COMMERCIAL_CONTACT` is no
longer needed at all and has been removed. GitHub-native channels remain.

---

## 2026-08-05 — Licence texts fetched, not transcribed

**Decision:** `LICENSE` is populated by `scripts/bootstrap-license-texts.sh`
from the canonical upstream source, with a checksum recorded in
`docs/license-texts.sha256`. Now fetches only Apache-2.0.

**Reasoning:** A license text must be byte-exact. Transcription, or
extraction through any tool that reflows whitespace, risks silent alteration of
a legal document. A one-command fetch with a checksum is strictly more reliable
than a copy anyone has retyped or pasted.

**Consequence:** One setup step before the first commit. `LICENSE` must exist
before the repository is made public, or GitHub will not detect the licence.

---

## 2026-08-05 — MCP `2026-07-28` breaking change recorded before design

**Decision:** Treat `2026-07-28` as a distinct protocol era in
`packages/mcp-spec` rather than a version bump. Do not write the adapter until
the era-support question in `docs/COMPATIBILITY.md` is answered.

**Reasoning:** The revision removes the `initialize` handshake, protocol-level
sessions, and the `Mcp-Session-Id` header. Any generator written against
pre-existing assumptions would emit servers that are wrong on the wire. It went
final on 2026-07-28, eight days before this entry, so most deployed clients still
speak `2025-11-25`.

**Open:** Target the current revision only, or both eras. Deliberately not
guessed. See `docs/COMPATIBILITY.md`.

---

## 2026-08-05 — Branding centralised

**Decision:** Every product name, legal identifier, and contact channel lives in
`packages/branding/src/index.ts`. No other file hardcodes them, enforced by test.

**Reasoning:** "Toolwright" is a working name. A rename must be a one-file
edit, not a repository-wide search. The same module carries the placeholder
registry, so the release-blocker check reads from code rather than from a
document someone must remember to update.
