import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = pageMetadata({
    title: "How it works",
    ogTitle: "How UnioGate works — stablecoin in, naira out",
    description:
        "A customer pays in stablecoins, you get naira you can spend the same afternoon. Here is each step of the flow, from scan to settlement.",
    path: "/how-it-works",
});

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
    return children;
}
