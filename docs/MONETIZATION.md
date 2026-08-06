# Monetization

Recorded so the strategy is explicit rather than assumed.

## What was given up

Apache-2.0 permanently removes the ability to sell license exemptions. Nobody
needs to buy their way out of a permissive license. There is no commercial tier
of the code, and there never will be.

This was traded deliberately for adoption.

## What is retained

**Trademark.** The strongest remaining asset. The license grants no rights to
the project name or logo. Anyone may fork the code; nobody may ship it under
this name. Protect it accordingly.

**Operations.** Anyone may run this software; most will not want to. A hosted
version, if one is ever built, is sold on convenience and security, not on
licensing.

**Expertise.** Custom implementation work for people who hit the tool's limits.
The fastest realistic revenue, requiring no licensing structure at all.

**Sponsorship.** GitHub Sponsors, and named sponsor placement in the README and
documentation. Scales with adoption. No tracking, no trust cost.

**Reputation.** Not a business plan, but historically the most common payoff at
significant scale.

## What is explicitly rejected

**Advertising.** No ads in the CLI, in build output, in postinstall scripts, or
in generated projects. A tool that executes generated code and handles user API
credentials runs on trust; advertising spends that trust for negligible revenue.
Sponsorship achieves the same funding without it.

**Default telemetry.** Nothing is transmitted unless the user opts in. See
`docs/TELEMETRY.md` when it exists.

**Crippled free tier.** The open version is the whole product.

## Sequencing

Adoption first. A licensing structure with no users generates nothing.
Monetization mechanisms are deferred until there is a population to serve.
