# Protocol and SDK Compatibility

Verified at build time against official sources. **Not** recalled from memory,
and not inferred.

Last verified: 2026-08-05

## MCP specification revisions

| Revision | Status | Notes |
|---|---|---|
| `2026-07-28` | Current, final | Published 2026-07-28. Largest revision since launch. |
| `2025-11-25` | Previous | The revision most existing deployments still target. |

Source of truth: <https://modelcontextprotocol.io/specification/2026-07-28/changelog>

## What `2026-07-28` changed, and why it matters here

This revision is a clean break, and the generator must not assume otherwise.

- **The protocol is stateless.** The `initialize` / `notifications/initialized`
  handshake is removed. Every request now carries its protocol version and
  client capabilities in `_meta`, under the keys
  `io.modelcontextprotocol/protocolVersion` and
  `io.modelcontextprotocol/clientCapabilities`.
- **Protocol-level sessions are gone**, along with the `Mcp-Session-Id` header
  on the Streamable HTTP transport. Servers needing cross-call state use
  explicit, server-minted handles passed as ordinary tool arguments (SEP-2567).
- **List endpoints no longer vary per connection.** `tools/list`,
  `resources/list`, and `prompts/list` return cacheable results.
- **A formal feature lifecycle** now applies: Active, Deprecated, Removed, with
  a minimum twelve-month deprecation window (SEP-2596).
- **An extensions framework** allows opt-in capabilities to ship and stabilise
  outside the core specification.

Consequence for `packages/mcp-spec`: version handling cannot be a single
if-statement. A server generated for `2026-07-28` may not interoperate with a
client speaking `2025-11-25`, and vice versa; compatibility requires both sides
to share a supported protocol era, or for one side to implement deliberate
fallback. The adapter layer must isolate this rather than leaking era-specific
assumptions into generated code.

## SDK

The TypeScript SDK v2 line corresponds to `2026-07-28`. Serving the new revision
over Streamable HTTP is an explicit opt-in rather than a default.

**Exact version pending.** The precise SDK version to pin has not yet been
verified against the npm registry from a networked environment, and will not be
recorded here until it has been. Do not populate this from memory.

Resolve with:

```
npm view @modelcontextprotocol/sdk version
npm view @modelcontextprotocol/sdk dist-tags
```

Then pin the exact version in the lockfile and record it in the table below.

| Component | Pinned version | Verified on |
|---|---|---|
| `@modelcontextprotocol/sdk` | _pending verification_ | — |
| Node.js LTS | _pending verification_ | — |
| pnpm | _pending verification_ | — |

## Supported by this project

Filled in as each is actually tested, not as each is intended.

| Capability | Status |
|---|---|
| `stdio` transport | Not yet implemented |
| Streamable HTTP transport | Not yet implemented |
| Protocol `2026-07-28` | Not yet implemented |
| Protocol `2025-11-25` | Not yet decided — see open question below |

## Open question for slice 2

Whether to target `2026-07-28` only, or both eras through the adapter.

Targeting only the current revision is simpler and matches the specification's
direction. Supporting both doubles the compatibility test matrix but produces
servers that work with clients that have not migrated — which, eight days after
the revision went final, is most of them.

Recorded rather than guessed. Decide in `docs/DECISIONS.md` before writing the
adapter.

## Verification policy

The versions above are checked automatically as part of the test suite. A drift
between this file and what is installed is a test failure, not a documentation
lapse.
