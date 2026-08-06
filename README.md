# Toolwright

> Design, generate, test, and run custom Model Context Protocol servers — locally,
> privately, and without an account.

**Status: early development.** Slice 1 of 16. There is no working application
yet. This README describes what is being built and does not claim it exists.

---

## What it will do

```
idea → feasibility review → specification → your approval
     → deterministic generation → sandboxed testing
     → guided correction → export → an MCP server you run yourself
```

Design principles that are already fixed:

- **Local first.** No account, no subscription, no cloud service required.
  Projects are private by default and stay on your machine.
- **Deterministic generation.** Templates and typed schemas produce the code. AI
  is used to understand your intent and explain failures — not to improvise a
  fresh project on every build.
- **Bring your own model.** A hosted provider with your own API key, or a local
  OpenAI-compatible endpoint. Local stays local unless you explicitly say
  otherwise.
- **Works without AI at all.** Templates and hand-written specifications are a
  supported path, not a fallback.
- **Sandboxed by default.** Generated code does not run directly on your host.
- **Small core, plugins for the rest.** Templates and connectors are separate npm
  packages you can publish yourself.
- **Honest status.** A project is never labelled working because files were
  written. Status comes from tests that actually ran.

## What it does not do yet

Everything. See `docs/IMPLEMENTATION_PLAN.md` for the current slice and
`docs/COMPATIBILITY.md` for what is verified.

## Installation

Not yet available. Installation instructions will appear here when there is
something to install.

## Licensing

**Apache-2.0.** The whole repository, uniformly. Use it, fork it, embed it in a
proprietary product, host it commercially — no obligation to publish your
changes, no licence to buy.

**The platform claims no ownership over what you generate with it.** You pick
the licence for your own generated projects.

The licence covers the software, not the name — see [TRADEMARKS.md](TRADEMARKS.md).
Full explanation in [LICENSES.md](LICENSES.md), and how the project is funded in
[docs/MONETIZATION.md](docs/MONETIZATION.md).

## Contributing

Open, and no CLA required.

New capabilities usually belong in a **plugin package** you own and publish to
npm, rather than in the core — better for you, and it keeps the project
maintainable. Bug fixes, security fixes, docs, and tests go straight to the core.
See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

Report vulnerabilities privately through
[GitHub security advisories](https://github.com/aibotjock/ToolWright/security/advisories/new).
Do not open a public issue. See [SECURITY.md](SECURITY.md).

## Setup for maintainers

Before the first commit, populate the licence texts:

```bash
./scripts/bootstrap-license-texts.sh
```

This fetches the canonical Apache-2.0 text and records its checksum. It is not
transcribed by hand, because a legal document altered by a whitespace-reflowing
tool is a real risk.

---

*"Toolwright" is a working name and may change. Every branded string lives in
`packages/branding/src/index.ts` so that a rename is a one-file edit.*
