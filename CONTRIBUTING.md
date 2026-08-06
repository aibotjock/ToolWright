# Contributing

## Contributions are open

The project is Apache-2.0. Under section 5 of that license, anything you
intentionally submit for inclusion is submitted under the same terms. **No
Contributor License Agreement is required.** No copyright assignment is asked
for. You keep your copyright; the project gets a license to use your work.

## Where contributions should go

**Plugins first, core second.**

New capabilities — templates, connectors, adapters — belong in **your own
package**, published to npm under your own name. The core exposes a plugin
interface for exactly this.

This is not gatekeeping. It is what keeps the project maintainable by one
person, and it is better for you too:

- You ship on your schedule, not when a maintainer gets to your PR.
- You own your package and its direction.
- Your work doesn't break when the core refactors.
- Users install what they need instead of carrying everything.

Core pull requests are welcome for bug fixes, security issues, performance
problems, documentation, and tests. For a new capability, open an issue first
and ask whether it belongs in the core or in a plugin. The default answer is
plugin.

## Before you open a core PR

- Open an issue first for anything non-trivial. An unwanted PR wastes your time
  more than the maintainer's.
- Keep it focused. One change per PR.
- Include a test that executes the thing you changed.
- Run format, lint, typecheck, and tests locally.
- No secrets in code, fixtures, logs, or test data.

## What is always welcome

| Contribution | How |
|---|---|
| Bug reports | [Issue](https://github.com/aibotjock/ToolWright/issues/new?template=bug_report.yml) |
| Feature requests | [Issue](https://github.com/aibotjock/ToolWright/issues/new?template=feature_request.yml) |
| MCP server ideas | [Idea proposal](https://github.com/aibotjock/ToolWright/issues/new?template=idea_proposal.yml) |
| Plugin packages | Publish to npm, then open an issue to have it listed |
| Documentation fixes | PR directly |
| Security vulnerabilities | [SECURITY.md](SECURITY.md) — **never** a public issue |
| Design discussion | [Discussions](https://github.com/aibotjock/ToolWright/discussions) |

## Honesty standard

The project has one rule that is enforced strictly: **nothing is described as
working unless a test executes it.**

Mocks, stubs, placeholder buttons, hardcoded success messages, disabled tests,
and suppressed type errors are not progress. A PR that adds a feature which
"works" but has no test that runs it will not be merged.

## Ideas remain yours

Proposing an MCP server idea is not an assignment of rights. Nothing you suggest
becomes an official template without asking you first.

GitHub issues are public. Don't post anything confidential or anything you
intend to patent.

## Code of conduct

[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
