import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                /**
                 * Only /api, which is not content at all. /thanks and
                 * /unsubscribe are kept out of the index with a noindex tag in
                 * their layouts instead of being blocked here, because blocking them
                 * would stop crawlers reading that tag, and a blocked page can
                 * still end up indexed as a bare URL.
                 */
                disallow: ["/api/"],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
