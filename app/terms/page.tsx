import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "The terms governing your use of the UnioGate pre-launch waitlist site.",
};

const bold = "font-medium text-[#000000]";
const link = "text-[#253E86] underline hover:text-[#10182A]";
const list = "list-disc pl-6 flex flex-col gap-2";

const sections: LegalSection[] = [
    {
        id: "acceptance",
        title: "Acceptance of These Terms",
        body: (
            <>
                <p>
                    By visiting this Site or submitting your email through our waitlist
                    form, you confirm that you have read, understood, and agree to be bound
                    by these Terms, and by our{" "}
                    <a href="/privacy" className={link}>
                        Privacy Policy
                    </a>
                    , which is incorporated into these Terms by reference.
                </p>
                <p>
                    UnioGate is presently a pre-incorporation venture. References in these
                    Terms to &ldquo;UnioGate,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                    &ldquo;our&rdquo; refer to the founders and team currently operating
                    this Site, and, upon incorporation, to the resulting registered
                    company, which will assume responsibility for this Site and these
                    Terms. We will update these Terms with our registered company name and
                    details once incorporation is complete.
                </p>
            </>
        ),
    },
    {
        id: "eligibility",
        title: "Eligibility",
        body: (
            <p>
                You must be at least 18 years old, and capable of forming a binding
                contract under applicable law, to use this Site or join our waitlist. By
                using the Site, you represent that you meet these requirements.
            </p>
        ),
    },
    {
        id: "the-waitlist",
        title: "The Waitlist",
        body: (
            <>
                <p>
                    Submitting your email through the &ldquo;Get Early Access&rdquo; form
                    adds you to a list of people interested in UnioGate. Joining the
                    waitlist:
                </p>
                <ul className={list}>
                    <li>
                        Does <span className={bold}>not</span> guarantee you access to the
                        UnioGate product, at any particular time or at all;
                    </li>
                    <li>
                        Does <span className={bold}>not</span> create any contractual
                        obligation on our part to launch the product, on any timeline;
                    </li>
                    <li>
                        Does <span className={bold}>not</span> constitute payment, an
                        investment, a purchase, or consideration of any kind — joining the
                        waitlist is free and does not obligate you to anything further;
                    </li>
                    <li>
                        May result in us contacting you by email about UnioGate&apos;s
                        launch, beta access, or related updates, consistent with our{" "}
                        <a href="/privacy" className={link}>
                            Privacy Policy
                        </a>
                        .
                    </li>
                </ul>
                <p>
                    We may modify, pause, or discontinue the waitlist at any time, for any
                    reason, without notice or liability to you.
                </p>
            </>
        ),
    },
    {
        id: "not-a-financial-service",
        title: "This Site Is Not a Financial Service",
        body: (
            <>
                <p>
                    This is an important section. UnioGate intends to build a point-of-sale
                    application that, once launched, will enable merchants to accept
                    cryptocurrency and fiat payments. That product has{" "}
                    <span className={bold}>not yet launched</span>, and this Site does not
                    offer it.
                </p>
                <p>This Site, and your use of it, does not:</p>
                <ul className={list}>
                    <li>
                        Constitute an offer, solicitation, or provision of payment
                        processing, money transmission, currency exchange, custody, or any
                        other regulated financial service;
                    </li>
                    <li>
                        Involve the transfer, custody, exchange, or processing of any
                        cryptocurrency, fiat currency, or other asset on your behalf;
                    </li>
                    <li>
                        Constitute investment advice, a securities offering, or an
                        invitation to invest in UnioGate;
                    </li>
                    <li>
                        Imply that UnioGate currently holds any license, registration, or
                        regulatory approval to operate as a payment service provider, money
                        transmitter, or financial institution in any jurisdiction.
                    </li>
                </ul>
                <p>
                    Any such licensing, registration, and regulatory engagement will be
                    pursued as appropriate before the UnioGate product itself launches, and
                    will be described in the terms governing that product. See{" "}
                    <a href="#future-terms" className={link}>
                        Section 13
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        id: "acceptable-use",
        title: "Acceptable Use",
        body: (
            <>
                <p>When using this Site, you agree that you will not:</p>
                <ul className={list}>
                    <li>
                        Submit false, misleading, or fraudulent information through the
                        waitlist form;
                    </li>
                    <li>
                        Use automated means (bots, scrapers, or scripts) to submit waitlist
                        entries, scrape Site content, or otherwise interact with the Site at
                        a scale or in a manner a human would not;
                    </li>
                    <li>
                        Attempt to gain unauthorized access to the Site, our systems, or our
                        waitlist database;
                    </li>
                    <li>
                        Interfere with or disrupt the Site&apos;s operation, or attempt to
                        introduce malware, viruses, or other harmful code;
                    </li>
                    <li>Use the Site in any way that violates applicable law.</li>
                </ul>
                <p>
                    We may remove waitlist entries or restrict access to the Site for anyone
                    we reasonably believe has violated this section.
                </p>
            </>
        ),
    },
    {
        id: "intellectual-property",
        title: "Intellectual Property",
        body: (
            <>
                <p>
                    The Site, including its design, text, graphics, logos, and the
                    &ldquo;UnioGate&rdquo; name and mark, is owned by UnioGate or our
                    licensors and is protected by applicable intellectual property laws. We
                    grant you a limited, non-exclusive, non-transferable license to access
                    and view the Site for your own personal, non-commercial use.
                </p>
                <p>
                    You may not copy, reproduce, distribute, modify, or create derivative
                    works from any part of the Site, or use our name, logo, or branding,
                    without our prior written permission.
                </p>
            </>
        ),
    },
    {
        id: "third-party-services",
        title: "Third-Party Services and Links",
        body: (
            <p>
                This Site relies on third-party infrastructure providers (including
                Supabase, for waitlist storage) to operate. We are not responsible for the
                availability, content, or practices of third-party services we rely on or
                link to, and your use of any such third-party service is subject to that
                provider&apos;s own terms.
            </p>
        ),
    },
    {
        id: "no-warranty",
        title: "No Warranty",
        body: (
            <p>
                This Site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
                without warranties of any kind, whether express, implied, or statutory,
                including any implied warranties of merchantability, fitness for a
                particular purpose, title, or non-infringement. We do not warrant that the
                Site will be uninterrupted, error-free, or secure, or that any information
                on it is accurate or complete.
            </p>
        ),
    },
    {
        id: "limitation-of-liability",
        title: "Limitation of Liability",
        body: (
            <>
                <p>
                    To the fullest extent permitted by applicable law, UnioGate, its
                    founders, and team members will not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss of
                    data, revenue, or goodwill, arising out of or related to your use of, or
                    inability to use, this Site, even if we have been advised of the
                    possibility of such damages.
                </p>
                <p>
                    Because this Site does not process payments, hold funds, or provide
                    financial services, our aggregate liability to you arising out of or
                    related to this Site is limited to one hundred US dollars (US$100) or
                    the maximum extent permitted by applicable law, whichever is lower.
                </p>
                <p>
                    Nothing in these Terms limits any liability that cannot be excluded or
                    limited under applicable law, including the NDPA where relevant to data
                    protection matters.
                </p>
            </>
        ),
    },
    {
        id: "indemnification",
        title: "Indemnification",
        body: (
            <p>
                You agree to indemnify and hold UnioGate, its founders, and team members
                harmless from any claim, liability, damage, loss, or expense (including
                reasonable legal fees) arising out of your violation of these Terms or your
                misuse of the Site.
            </p>
        ),
    },
    {
        id: "termination",
        title: "Termination and Changes to the Site",
        body: (
            <p>
                We may suspend or terminate your access to the Site, remove your entry from
                the waitlist, or modify, suspend, or discontinue the Site (in whole or in
                part) at any time, for any reason, without notice or liability to you.
            </p>
        ),
    },
    {
        id: "governing-law",
        title: "Governing Law and Disputes",
        body: (
            <p>
                These Terms are governed by the laws of the Federal Republic of Nigeria,
                without regard to conflict-of-law principles. If a dispute arises out of or
                relating to these Terms or your use of the Site, we encourage you to first
                contact us so we can attempt to resolve it informally. If we are unable to
                resolve a dispute informally, it will be subject to the exclusive
                jurisdiction of the courts of Nigeria, except where applicable law requires
                otherwise.
            </p>
        ),
    },
    {
        id: "future-terms",
        title: "When UnioGate Launches",
        body: (
            <p>
                These Terms are intentionally scoped to this pre-launch waitlist Site. Once
                the UnioGate application itself launches, your use of that product will be
                governed by a separate, comprehensive Terms of Service appropriate to a
                payments product — covering matters such as account creation, fees,
                transaction processing, settlement, KYC/AML obligations, dispute and refund
                handling, and applicable financial regulation. You will be asked to review
                and accept those terms separately before using the UnioGate product —
                joining this waitlist today does not constitute acceptance of the future
                product&apos;s terms.
            </p>
        ),
    },
    {
        id: "changes",
        title: "Changes to These Terms",
        body: (
            <p>
                We may update these Terms from time to time as this Site evolves — for
                example, if we formally incorporate or change infrastructure providers. We
                will update the &ldquo;Last updated&rdquo; date at the top of this page when
                we do. Your continued use of the Site after a change takes effect
                constitutes your acceptance of the updated Terms.
            </p>
        ),
    },
    {
        id: "contact",
        title: "How to Contact Us",
        body: (
            <>
                <p>If you have questions about these Terms, please contact us at:</p>
                <div className="border-l-2 border-[#253E86] bg-white/60 p-5 md:p-6 font-sora">
                    <p className="text-[#253E86]">uniogate@gmail.com</p>
                    <p className="text-[#3A3A3A] text-sm mt-2">Lagos, Nigeria.</p>
                </div>
            </>
        ),
    },
];

export default function TermsOfServicePage() {
    return (
        <LegalLayout
            title="Terms of Service"
            updated="June 29, 2026"
            sections={sections}
            intro={
                <>
                    These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
                    use of{" "}
                    <span className="text-[#000000] font-medium">uniogate.com</span> and
                    our &ldquo;Get Early Access&rdquo; waitlist (together, the
                    &ldquo;Site&rdquo;), operated by UnioGate (&ldquo;UnioGate,&rdquo;
                    &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the
                    Site, you agree to these Terms. If you do not agree, please do not use
                    the Site.
                </>
            }
            scopeNote={
                <>
                    <span className="font-semibold text-[#000000]">A note on scope:</span>{" "}
                    The UnioGate product — a point-of-sale application enabling merchants to
                    accept crypto and fiat payments — has not yet launched. This Site is
                    currently a pre-launch &ldquo;coming soon&rdquo; page. These Terms
                    govern only your use of <span className="italic">this Site</span> and
                    the waitlist. They are <span className="italic">not</span> the terms of
                    service for the future UnioGate application, and nothing here should be
                    read as describing the terms under which UnioGate&apos;s payment product
                    will eventually operate. See{" "}
                    <a
                        href="#not-a-financial-service"
                        className="text-[#253E86] underline hover:text-[#10182A]"
                    >
                        Section 4
                    </a>{" "}
                    and{" "}
                    <a
                        href="#future-terms"
                        className="text-[#253E86] underline hover:text-[#10182A]"
                    >
                        Section 13
                    </a>
                    .
                </>
            }
        />
    );
}
