# Security Policy

## Reporting a vulnerability

**Do not open a public issue for a security vulnerability.**

Report it privately through GitHub's private vulnerability reporting:

<https://github.com/aibotjock/ToolWright/security/advisories/new>

This channel is private between you and the maintainer. No email address is
required from either party.

Please include:

- What the vulnerability allows an attacker to do.
- The affected component and version or commit.
- Steps to reproduce, ideally minimal.
- Any suggested mitigation.

You will receive an acknowledgement. Because this project is currently
maintained by a single person, please allow reasonable time for a response
before disclosing publicly.

## Scope

This project generates and executes code, which makes several areas
security-relevant by design. The following are in scope and are treated
seriously:

- **Sandbox escape.** Generated or user-supplied code executing outside the
  isolated test environment, or reaching host paths, host processes, or network
  destinations that were not explicitly approved.
- **Secret exposure.** Credentials appearing in logs, error messages, model
  prompts, generated code, exported projects, test fixtures, or version control.
- **Token confusion.** An access token intended for one downstream service being
  passed to another.
- **Permission bypass.** A generated MCP server performing file, database,
  network, or destructive operations without the declared permission or without
  the required confirmation.
- **Injection into the generator.** Untrusted input — an OpenAPI document, an
  API response, a model output — causing unintended code generation, file writes
  outside the project directory, or command execution.
- **Unexpected outbound traffic.** Any data leaving the machine that the user did
  not explicitly authorise. The local application transmits no telemetry.

## Out of scope

- Vulnerabilities in third-party dependencies with no exploitable path through
  this project. Report those upstream.
- Weaknesses in a user's own generated project caused by their own
  specification choices, where the platform correctly declared the risk and
  required confirmation.
- Findings that require the operator to have already disabled sandboxing, having
  been warned.

## Security model

The permission model, sandbox model, and threat model are documented in
`docs/`. Read those before reporting, as some behaviour that looks alarming is
a documented and deliberate trade-off — and some of it is documented precisely
because it is a known limitation.

## Known limitations

Where Docker is unavailable, the application runs in a clearly disclosed
**restricted mode** with materially weaker isolation. This is stated at runtime,
not buried in documentation. Reports that restricted mode is less safe than
sandboxed mode are not vulnerabilities; reports that restricted mode is entered
*silently* absolutely are.
