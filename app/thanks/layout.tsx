import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = pageMetadata({
    title: "You're on the list",
    ogTitle: "You're on the UnioGate waitlist",
    description:
        "Thanks for joining the waitlist. We'll email you when merchant onboarding opens.",
    path: "/thanks",
});

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
    return children;
}
