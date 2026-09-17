import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = {
    ...pageMetadata({
        title: "Unsubscribe",
        ogTitle: "Unsubscribe from UnioGate emails",
        description:
            "Take your address off the UnioGate waitlist. Takes effect immediately, no account or login needed.",
        path: "/unsubscribe",
    }),

    /** Same reasoning as /thanks — see the note there. */
    robots: { index: false, follow: true },
};

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
