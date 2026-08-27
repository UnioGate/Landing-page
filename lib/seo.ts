import type { Metadata } from "next";

/**
 * Canonical origin. Kept here so per-page og:url values cannot drift from the
 * metadataBase in app/layout.tsx.
 */
export const SITE_URL = "https://www.uniogate.com";

const OG_IMAGE = {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "UnioGate — stablecoin payments for merchants",
};

type PageSeoInput = {
    /** Short form, used for the browser tab. The root template appends the brand. */
    title: string;
    /**
     * Standalone headline for social previews. Unlike `title`, this is never run
     * through the root title template, so it has to carry the brand itself.
     */
    ogTitle: string;
    description: string;
    /** Route path, leading slash, no origin. Becomes og:url and the canonical. */
    path: string;
};

/**
 * Builds a complete metadata object for one page.
 *
 * Next merges metadata shallowly: a child that defines `openGraph` replaces the
 * parent's whole `openGraph` object rather than merging into it. That is why
 * every field is spelled out here instead of relying on the root layout to fill
 * the gaps — and why setting only `title` on a page leaves og:title showing the
 * site default, which is what was happening across the site.
 */
export function pageMetadata({
    title,
    ogTitle,
    description,
    path,
}: PageSeoInput): Metadata {
    const url = `${SITE_URL}${path}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: ogTitle,
            description,
            url,
            siteName: "UnioGate",
            type: "website",
            locale: "en_US",
            images: [OG_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title: ogTitle,
            description,
            images: [OG_IMAGE.url],
        },
    };
}
