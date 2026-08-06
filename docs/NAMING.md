# Naming

## Correcting an earlier assumption

I previously suggested that using "MCP" in the product name carried trademark
risk from the protocol's stewards. **Checking that, I found no support for it.**
There is no published MCP naming or trademark policy, and descriptive use is
widespread and unchallenged — Microsoft ships a repository literally named
`microsoft/mcp`, and Drupal publishes a module called "Model Context Protocol".

So that concern was overstated. The real problems with "Toolwright" are
different, and one of them matters more than the original one did.

## The two actual problems

### 1. "Inventor" is Autodesk Inventor

Autodesk Inventor is a long-established, heavily-registered software product.
Trademark conflict is assessed on similarity *within the same class of goods*,
and "computer software" is the same class. A single-word overlap in a crowded
software mark is exactly the pattern that generates a demand letter.

Not a certainty. But it is avoidable risk, and renaming after adoption is far
more expensive than renaming now. OpenClaw was forced through two renames in a
week under trademark pressure — it survived, but it had 100,000 people watching
who found it entertaining. A smaller project just loses its users.

### 2. A descriptive name gives *you* nothing to protect

This is the bigger one, and it only became important when the licence changed.

Under Apache-2.0, anyone may fork the code and sell it. **The trademark is the
only asset you retain.** A name whose distinctive element is a generic protocol
acronym is weak or unregistrable — descriptive marks get thin protection at
best. You would be defending nothing.

A distinctive, arbitrary, or coined name is the strongest kind of mark, and it
costs exactly the same to pick.

**Put the protocol in the tagline, not the name.** "Toolwright — build MCP
servers without writing one" is fully descriptive to a user, uses "MCP"
nominatively, and leaves you a mark worth owning.

## Candidates

Ordered by my honest preference. All are in the spirit of "Inventor" —
building, making, devising.

### 1. Toolwright — CHOSEN

A *wright* is a maker: shipwright, wheelwright, playwright. MCP servers expose
**tools**. The name says exactly what the product does, in one word, without
using a single generic term.

No conflicting software mark surfaced in a search. Distinctive enough to
register, plain enough to explain. This is my recommendation.

### 2. Inventra

The closest to your original. Coined, so it is arbitrary and therefore strongly
protectable. Keeps the "inventor" feel without touching Autodesk's mark. Reads
slightly more corporate than the others.

### 3. Contraption

Playful, memorable, evokes a thing you built yourself that works anyway. Fits
the same cultural register as pi and OpenClaw, which did not take themselves
seriously and benefited from it. Longer to type — mitigate with a short CLI
binary such as `crpt` or `contra`.

### 4. Cogwright

Same construction as Toolwright, more mechanical. Good if you want a gear as a
logo. Slightly less obvious in meaning.

### 5. Whittle

Small, humble, evokes carving something down to what it needs to be — which is
literally your architecture decision. Short, easy to type. Least descriptive of
the five, so it needs a strong tagline.

## Verify before committing

I have no network access from this environment, so **I could not check
registries directly.** These commands take you about thirty seconds:

```bash
npm view toolwright          # "404 Not Found" means available
npm view inventra
npm view contraption
```

Then check:

- GitHub: does `github.com/<name>` exist as an org?
- Domain: is a `.dev` or `.com` free?
- USPTO: search the name at <https://tmsearch.uspto.gov> in class 9 (software)

**A clear search is not a clearance.** Actual trademark clearance is a paid
search by counsel. Worth doing before you spend money on the brand — not worth
doing before you have users.

## Applying the choice

Everything is centralised. Edit `PRODUCT` in
`packages/branding/src/index.ts` — name, slug, CLI binary, npm name, repository
URL — and rename the GitHub repository. Nothing else in the tree hardcodes it.

Do it before the first public commit and it costs nothing.

## Status

**RESOLVED, 2026-08-05: Toolwright.**

Applied across the tree. Repository is `aibotjock/ToolWright`.

Still to verify (owner, thirty seconds each):

- [ ] `npm view toolwright` returns 404
- [ ] No conflicting GitHub organisation
- [ ] USPTO class 9 search shows nothing similar
- [ ] Domain available, if wanted

None of these block development. All should be done before the first public
announcement, because that is when the name becomes expensive to change.
