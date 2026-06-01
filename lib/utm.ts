import { SITE } from "./data/site";

export type UtmContext = {
  /**
   * Surface that originated the click. Lets NexLife (and any other provider)
   * attribute incoming traffic by where on glpreview.org it came from.
   * Examples: "homepage", "rankings", "provider-review", "state-page".
   */
  campaign?: string;
  /** Typically the provider slug — e.g. "nexlife", "ro-body". */
  content?: string;
};

const DEFAULT_CAMPAIGN = "glp-review-2026";

/**
 * Append UTM parameters to an outbound provider URL without clobbering any
 * pre-existing UTM params the destination already has.
 *
 * - utm_source = SITE.referralHost (bare host, no www)
 * - utm_medium = "referral"
 * - utm_campaign = surface where the click happened (defaults to DEFAULT_CAMPAIGN)
 * - utm_content = provider slug (when supplied)
 */
export function withUtm(rawUrl: string, ctx: UtmContext = {}): string {
  try {
    const u = new URL(rawUrl);
    if (!u.searchParams.has("utm_source")) u.searchParams.set("utm_source", SITE.referralHost);
    if (!u.searchParams.has("utm_medium")) u.searchParams.set("utm_medium", "referral");
    if (!u.searchParams.has("utm_campaign"))
      u.searchParams.set("utm_campaign", ctx.campaign ?? DEFAULT_CAMPAIGN);
    if (ctx.content && !u.searchParams.has("utm_content"))
      u.searchParams.set("utm_content", ctx.content);
    return u.toString();
  } catch {
    return rawUrl;
  }
}
