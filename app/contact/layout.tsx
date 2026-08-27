import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = pageMetadata({
    title: "Contact",
    ogTitle: "Contact UnioGate",
    description:
        "Questions about merchant payments, partnerships, or the waitlist? Reach the team directly — we read every message and reply.",
    path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
