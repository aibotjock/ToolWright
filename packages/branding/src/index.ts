// SPDX-License-Identifier: Apache-2.0
//
// CENTRALIZED BRANDING AND LEGAL IDENTITY
//
// This module is the single source of truth for every user-visible name, legal
// identifier, and contact channel in the platform. Nothing else in the codebase
// may hardcode these values. Renaming the product, or filling in the legal
// owner, must require editing only this file.
//
// Enforced by: test/branding-centralization.test.ts (added in slice 1)

/**
 * A value that has not yet been decided by the copyright owner.
 *
 * Every PLACEHOLDER entry is release-blocking and is tracked in
 * docs/RELEASE_BLOCKERS.md. The build MUST fail a release check while any
 * placeholder marked `blocking: true` remains unresolved.
 *
 * Do not invent values for these. An invented legal entity or contact address
 * in a published repository is worse than an obvious placeholder.
 */
export interface Placeholder {
  readonly kind: 'PLACEHOLDER';
  readonly id: string;
  readonly description: string;
  readonly blocking: boolean;
  /** What the owner must do to resolve this. */
  readonly resolution: string;
}

const placeholder = (
  id: string,
  description: string,
  resolution: string,
  blocking = true,
): Placeholder => ({ kind: 'PLACEHOLDER', id, description, blocking, resolution });

export const isPlaceholder = (value: unknown): value is Placeholder =>
  typeof value === 'object' && value !== null && (value as Placeholder).kind === 'PLACEHOLDER';

// ---------------------------------------------------------------------------
// Product identity
// ---------------------------------------------------------------------------

export const PRODUCT = {
  /** Display name. */
  name: 'Toolwright',
  /** Lowercase slug used for package names, CLI binary, and config directories. */
  slug: 'toolwright',
  /** CLI binary name. */
  cli: 'toolwright',
  /** npm package name for the core. Verify availability before first publish. */
  npmPackage: 'toolwright',
  /** Naming convention for community plugin packages. */
  pluginPrefix: 'toolwright-plugin-',
  /** Short one-line description used in package.json and the README header. */
  tagline: 'Build MCP servers without writing one.',
  /** Canonical source repository. */
  repository: 'https://github.com/aibotjock/ToolWright',
  /** GitHub account that owns the repository. */
  githubOwner: 'aibotjock',
} as const;

// ---------------------------------------------------------------------------
// Legal identity
// ---------------------------------------------------------------------------

export const LEGAL = {
  /**
   * The copyright holder, exactly as it must appear in LICENSE, NOTICE, and
   * every SPDX file header.
   *
   * Under Apache-2.0 there is no dual licensing, so this does not need to
   * support a commercial contracting party. It should still be a real,
   * identifiable person or entity. A pseudonym is acceptable.
   */
  copyrightHolder: 'aibotjock',

  /** First year of publication, used in the copyright notice range. */
  copyrightYear: 2026,

  /**
   * SPDX identifier for the entire repository. Uniform: there is no split
   * license boundary. Chosen to maximize adoption; the patent grant is why
   * Apache-2.0 rather than MIT.
   *
   * This choice is one-way. It cannot be reversed to copyleft later.
   */
  license: 'Apache-2.0',
} as const;

// ---------------------------------------------------------------------------
// Contact channels
//
// The owner has elected NOT to publish an email address at this stage.
// GitHub-native channels are used instead. These are real, working channels
// that require no personal contact information to be disclosed.
// ---------------------------------------------------------------------------

export const CONTACT = {
  /**
   * Security vulnerability reports. Uses GitHub private vulnerability
   * reporting, which must be enabled in repository Settings > Security.
   */
  security: {
    method: 'github-private-advisory' as const,
    url: `${PRODUCT.repository}/security/advisories/new`,
  },

  /** General discussion. */
  discussion: {
    method: 'github-discussions' as const,
    url: `${PRODUCT.repository}/discussions`,
  },

  /**
   * Sponsorship. Under a permissive license this is the primary funding route,
   * alongside implementation services. See docs/MONETIZATION.md.
   */
  sponsors: {
    method: 'github-sponsors' as const,
    url: `https://github.com/sponsors/${PRODUCT.githubOwner}`,
  },
} as const;

// ---------------------------------------------------------------------------
// Funding
// ---------------------------------------------------------------------------

export const FUNDING = {
  githubSponsors: PRODUCT.githubOwner,
} as const;

// ---------------------------------------------------------------------------
// Placeholder registry
// ---------------------------------------------------------------------------

/** Every placeholder in the project. Consumed by the release-blocker check. */
export const ALL_PLACEHOLDERS: readonly Placeholder[] = [LEGAL.copyrightHolder].filter(isPlaceholder);

/** Placeholders that must be resolved before a public release may be cut. */
export const unresolvedBlockingPlaceholders = (): readonly Placeholder[] =>
  ALL_PLACEHOLDERS.filter((p) => p.blocking);

/**
 * Renders the copyright line for NOTICE and SPDX headers.
 * Throws if the owner is still a placeholder and `strict` is set, which is how
 * the release pipeline prevents publishing with an unresolved owner.
 */
export const copyrightLine = (strict = false): string => {
  const holder = LEGAL.copyrightHolder;
  if (isPlaceholder(holder)) {
    if (strict) {
      throw new Error(
        `Release blocked: placeholder ${holder.id} is unresolved. ${holder.resolution}`,
      );
    }
    return `Copyright ${LEGAL.copyrightYear} <${holder.id}>`;
  }
  return `Copyright ${LEGAL.copyrightYear} ${holder as string}`;
};
