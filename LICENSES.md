# Licensing Guide

## Summary

| What | License |
|---|---|
| Everything in this repository | `Apache-2.0` |
| Projects you generate | **You choose** |
| Dependencies | Their own — see `THIRD_PARTY_NOTICES.md` |

That is the whole structure. There is no split boundary, no copyleft, and no
dual-licensing arrangement.

## Why Apache-2.0

Chosen to maximize adoption. Permissive licensing is what let comparable
projects spread quickly: use it commercially, embed it in proprietary products,
fork it, host it, no obligation to publish your changes.

Apache-2.0 over MIT for one reason: it includes an explicit patent grant, which
corporate legal review cares about and MIT is silent on. Same practical freedom,
better reception in companies.

**This choice is one-way.** Code released under Apache-2.0 cannot be pulled back
under a copyleft license later. Anyone may fork the project, build a commercial
product on it, and owe nothing. That is the accepted trade for adoption.

## What this means for contributions

Apache-2.0 section 5 states that any contribution intentionally submitted for
inclusion is submitted under the terms of the license itself, unless explicitly
stated otherwise.

**No Contributor License Agreement is required.** Code contributions are legally
safe to merge.

Contributions are still directed to plugin packages rather than the core, but
that is a maintenance decision, not a legal one. See `CONTRIBUTING.md`.

## Generated projects: yours

The platform asserts no ownership over what you generate. At generation time you
choose:

- `Apache-2.0`
- `MIT`
- `AGPL-3.0-only`
- Proprietary / no public license

The generator writes the corresponding license and notices, and produces a
dependency license report.

Two honest caveats:

1. **Your dependencies keep their own licenses.** Choosing MIT for your project
   does not make a copyleft dependency permissive.
2. **No guarantee of ownership beyond what law permits.** Copyrightability of
   generated output is unsettled in several jurisdictions. The platform claims
   no rights; it also cannot grant rights the law does not recognise.

## What is NOT granted

The license covers the software. It does not grant rights to the project name or
logo. See `TRADEMARKS.md`.

Under a permissive license, **the trademark is the primary retained asset.**
Anyone may fork the code; nobody may use the name.

## SPDX

Every source file carries:

```
// SPDX-License-Identifier: Apache-2.0
```

Uniform across the tree. CI verifies it and runs a dependency license scan.

---

*Not legal advice. Have counsel review before commercial launch.*
