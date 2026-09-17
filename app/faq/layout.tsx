import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/structured-data";
import { groups } from "@/data/faq";

/**
 * The page itself is a client component, so it cannot export metadata.
 * This layout carries it instead.
 */
export const metadata: Metadata = pageMetadata({
    title: "FAQ",
    ogTitle: "UnioGate FAQ — stablecoin payments, answered",
    description:
        "How settlement works, what merchants pay, which stablecoins we take, and when we launch. The questions we get asked most, answered plainly.",
    path: "/faq",
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <JsonLd data={faqSchema(groups)} />
        </>
    );
}
