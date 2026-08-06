# Governance

## Current model: single maintainer

Toolwright is owned and maintained by one person, the copyright holder. All
decisions — technical direction, what merges, what releases, licensing — rest
with them.

This is stated plainly rather than dressed up as a community process, because
pretending otherwise wastes contributors' time.

## Decision-making

| Decision | Who | Recorded in |
|---|---|---|
| Technical direction | Copyright holder | `docs/DECISIONS.md` |
| What merges | Copyright holder | PR history |
| Releases | Copyright holder | `docs/RELEASE.md` |
| Licensing | Fixed: Apache-2.0 | `LICENSES.md` |
| Security response | Copyright holder | `SECURITY.md` |

Significant technical decisions are written to `docs/DECISIONS.md` with their
reasoning, so that the reasoning survives when the decision is later
questioned — including by the person who made it.

## Contributions

Open. No CLA, no copyright assignment — Apache-2.0 section 5 handles inbound
contributions.

New capabilities are directed to plugin packages rather than the core. That is a
maintenance policy, not a legal one: a solo maintainer cannot support every
integration in one tree. See `CONTRIBUTING.md`.

## What changes production code

Nothing merges without passing:

- Version control review
- Human review
- Automated tests
- Security checks
- License-boundary checks
- Migration checks
- Release approval

**No autonomous self-modification.** The platform does not rewrite its own
production code, and user ideas do not flow into released code. Ideas may
produce vault entries, feature proposals, connector proposals, template
candidates, or test cases — all of which are inputs to human review, never
substitutes for it.

## Roadmap for growing this

The current model does not scale past one person. If the project attracts
sustained contributors, the following must be established before, not after,
they arrive:

1. A named enforcement contact for the code of conduct.
2. A documented process for granting commit access.
3. A plugin listing policy — what gets featured, and on what basis.
4. A published policy on how any project revenue relates to contributors,
   decided before money is involved rather than once it is.

## Transparency about funding

Apache-2.0, permanently. There is no paid tier of the code and no licence to
buy. The open version is the whole product.

The project may be funded through sponsorship, implementation services, hosted
operations, or the trademark. None of those restrict the software. See
`docs/MONETIZATION.md`.
