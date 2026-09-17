import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";
import { roles } from "@/data/careers";

/**
 * Pages worth crawling, most important first. /thanks and /unsubscribe are
 * deliberately absent — they carry a noindex tag, and asking Google to crawl a
 * page you have told it not to index is a contradiction it reports as an error.
 */
const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        ...staticRoutes.map((route) => ({
            url: `${SITE_URL}${route.path}`,
            lastModified,
            changeFrequency: route.changeFrequency,
            priority: route.priority,
        })),

        // Every open role, so new postings enter the sitemap without an edit here.
        ...roles.map((role) => ({
            url: `${SITE_URL}/careers/${role.slug}`,
            lastModified: new Date(role.datePosted),
            changeFrequency: "weekly" as const,
            priority: 0.6,
        })),
    ];
}
