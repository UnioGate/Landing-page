import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = {
    ...pageMetadata({
        title: "Careers",
        ogTitle: "Careers at UnioGate | Build the rails Africa pays on",
        description:
            "A small team turning stablecoins into naira a merchant can spend the same afternoon. No layers. You own a surface end to end and ship it.",
        path: "/careers",
    }),

    /**
     * This layout also wraps /careers/[slug]. A bare string title here would be
     * the nearest title definition for those pages and would stop the root
     * template applying, dropping the brand suffix from every role page, so
     * restate the template for this subtree.
     */
    title: {
        default: "Careers",
        template: "%s | UnioGate",
    },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
    return children;
}
