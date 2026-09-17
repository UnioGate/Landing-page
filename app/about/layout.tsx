import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = pageMetadata({
    title: "About",
    ogTitle: "About UnioGate | The people building it",
    description:
        "UnioGate started with a gap our founder kept running into: millions of people hold stablecoins, and no vendor can take them. We're building the merchant side of that economy from Lagos.",
    path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
