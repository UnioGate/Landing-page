import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = {
    ...pageMetadata({
        title: "You're on the list",
        ogTitle: "You're on the UnioGate waitlist",
        description:
            "Thanks for joining the waitlist. We'll email you when merchant onboarding opens.",
        path: "/thanks",
    }),

    /**
     * A confirmation screen is meaningless to a searcher, so keep it out of the
     * index. This has to be a noindex tag rather than a robots.txt block: a
     * blocked page can still be indexed as a bare URL, because the crawler
     * never fetches it and so never sees the instruction not to. `follow` still
     * lets the links out of the page carry weight.
     */
    robots: { index: false, follow: true },
};

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
    return children;
}
