import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How UnioGate collects, uses, and protects your information on our pre-launch waitlist site.",
};

function Section({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="flex flex-col gap-4 scroll-mt-28">
            <h2 className="font-jakarta text-2xl md:text-3xl text-[#000000]">
                {title}
            </h2>
            <div className="font-sora text-base md:text-lg leading-[170%] text-[#3A3A3A] flex flex-col gap-4">
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#E9ECF3] min-h-screen flex flex-col">
            <div className="pt-6 md:pt-10">
                <Navbar />
            </div>

            <main className="w-[95%] lg:w-[90%] mx-auto flex flex-col gap-14 mt-14 md:mt-20 mb-24">
                {/* Header */}
                <div className="flex flex-col gap-5">
                    <h4 className="font-sora text-sm md:text-base text-[#000000] font-normal py-2.5 px-5 border-[0.7px] border-[#000000] rounded-[20px] w-fit">
                        LEGAL
                    </h4>
                    <h1 className="font-jakarta text-4xl md:text-[52px] leading-[115%] text-[#000000]">
                        Privacy Policy
                    </h1>
                    <p className="font-sora text-base md:text-lg text-[#3A3A3A]">
                        Last updated: June 29, 2026
                    </p>
                    <p className="font-sora text-base md:text-lg leading-[170%] text-[#3A3A3A] max-w-3xl">
                        UnioGate (&ldquo;UnioGate,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                        respects your privacy. This Privacy Policy explains what
                        information we collect on this website, why we collect it, how
                        we use and protect it, and the choices and rights you have. It
                        applies to{" "}
                        <span className="text-[#000000] font-medium">
                            uniogate.com
                        </span>{" "}
                        and our &ldquo;Get Early Access&rdquo; waitlist (together, the
                        &ldquo;Site&rdquo;).
                    </p>
                    <div className="bg-white border border-[#D9DEE9] rounded-[16px] p-5 md:p-6 font-sora text-sm md:text-base leading-[170%] text-[#3A3A3A] max-w-3xl">
                        <span className="font-semibold text-[#000000]">
                            A note on scope:
                        </span>{" "}
                        UnioGate&apos;s product — a point-of-sale application for
                        merchants — has not yet launched. This Site is currently a
                        pre-launch &ldquo;coming soon&rdquo; page with a single purpose:
                        letting you join our waitlist by email. This Policy is scoped to
                        that. It does{" "}
                        <span className="italic">not</span> describe data practices for
                        a product that does not yet exist. When the UnioGate app
                        launches, it will involve meaningfully more data — including
                        identity verification, transaction, and financial information —
                        and we will publish an updated, expanded Privacy Policy before
                        that happens, which you will be asked to review and accept
                        separately. See{" "}
                        <a href="#future-policy" className="text-[#253E86] underline">
                            Section 13
                        </a>
                        .
                    </div>
                </div>

                {/* Table of contents */}
                <nav className="bg-white border border-[#D9DEE9] rounded-[16px] p-6 md:p-8 flex flex-col gap-2">
                    <p className="font-sora font-semibold text-[#000000] mb-2">
                        Contents
                    </p>
                    {[
                        ["who-we-are", "1. Who We Are"],
                        ["info-we-collect", "2. Information We Collect"],
                        ["info-we-dont-collect", "3. Information We Do Not Collect (Yet)"],
                        ["how-we-use", "4. How We Use Your Information"],
                        ["legal-basis", "5. Our Legal Basis for Processing"],
                        ["how-we-share", "6. How We Share Your Information"],
                        ["retention", "7. How Long We Keep Your Information"],
                        ["cookies", "8. Cookies and Tracking Technologies"],
                        ["security", "9. How We Protect Your Information"],
                        ["international-transfers", "10. International Data Transfers"],
                        ["your-rights", "11. Your Rights"],
                        ["children", "12. Children's Privacy"],
                        ["future-policy", "13. When UnioGate Launches"],
                        ["changes", "14. Changes to This Policy"],
                        ["contact", "15. How to Contact Us"],
                    ].map(([href, label]) => (
                        <a
                            key={href}
                            href={`#${href}`}
                            className="font-sora text-sm md:text-base text-[#253E86] hover:underline py-1"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <Section id="who-we-are" title="1. Who We Are">
                    <p>
                        UnioGate is a venture being built to allow merchants to accept
                        both cryptocurrency and fiat payments through a single point of
                        sale, with automatic conversion and same-day settlement.
                    </p>
                    <p>
                        UnioGate is presently a pre-incorporation venture. References in
                        this Policy to &ldquo;UnioGate,&rdquo; &ldquo;we,&rdquo;
                        &ldquo;us,&rdquo; or &ldquo;our&rdquo; refer to the founders and
                        team currently operating this Site and building the UnioGate
                        product, and, upon incorporation, to the resulting registered
                        company, which will assume responsibility for this Site and the
                        commitments in this Policy. We will update this Policy with our
                        registered company name and registration details once
                        incorporation is complete.
                    </p>
                    <p>
                        We intend to operate in line with the Nigeria Data Protection
                        Act 2023 (&ldquo;NDPA&rdquo;) and the general supervision of the
                        Nigeria Data Protection Commission (&ldquo;NDPC&rdquo;), as our
                        primary regulatory framework. Because this Site is accessible
                        globally, we also aim to align with widely recognized data
                        protection principles reflected in other frameworks, such as the
                        EU/UK General Data Protection Regulation, even though we do not
                        claim formal certification under those frameworks at this stage.
                    </p>
                </Section>

                <Section id="info-we-collect" title="2. Information We Collect">
                    <p className="font-medium text-[#000000]">
                        2.1 Information you give us directly
                    </p>
                    <p>
                        <span className="font-medium text-[#000000]">Email address.</span>{" "}
                        When you submit our &ldquo;Get Early Access&rdquo; form, we
                        collect the email address you provide. This is currently the{" "}
                        <span className="italic">only</span> piece of personal
                        information this Site asks you to submit. We store this in a
                        waitlist database operated for us by our infrastructure provider,
                        Supabase (see{" "}
                        <a href="#how-we-share" className="text-[#253E86] underline">
                            Section 6
                        </a>
                        ).
                    </p>
                    <p>
                        <span className="font-medium text-[#000000]">
                            Correspondence.
                        </span>{" "}
                        If you contact us directly — for example by email — we will
                        collect whatever information you choose to include in that
                        message, so that we can respond to you.
                    </p>

                    <p className="font-medium text-[#000000] pt-2">
                        2.2 Information collected automatically
                    </p>
                    <p>
                        Like virtually any website, when you visit this Site our hosting
                        and infrastructure providers may automatically log certain
                        technical information, including your IP address, approximate
                        location derived from that IP address, browser type and version,
                        device type, operating system, referring web page, and the date
                        and time of your visit. We use this information in aggregate for
                        purposes such as keeping the Site secure, diagnosing technical
                        problems, and understanding general traffic levels. We do not
                        currently use this data to build individual profiles of visitors
                        or to track you across other websites.
                    </p>
                </Section>

                <Section
                    id="info-we-dont-collect"
                    title="3. Information We Do Not Collect (Yet)"
                >
                    <p>
                        To be precise about the limited scope of this Site, we want to be
                        explicit about what we do{" "}
                        <span className="italic">not</span> currently collect through it:
                    </p>
                    <ul className="list-disc pl-6 flex flex-col gap-2">
                        <li>We do not ask for or store passwords on this Site.</li>
                        <li>
                            We do not collect payment card details, bank account
                            information, or wallet private keys through this Site.
                        </li>
                        <li>
                            We do not collect government identification, know-your-customer
                            (KYC) documents, or biometric data through this Site.
                        </li>
                        <li>
                            We do not process any transaction or financial activity data
                            through this Site, because the UnioGate product has not yet
                            launched.
                        </li>
                        <li>
                            We do not currently run advertising trackers, third-party
                            analytics scripts, or social media pixels on this Site.
                        </li>
                    </ul>
                    <p>
                        Several of these will change once the UnioGate product itself
                        launches. See{" "}
                        <a href="#future-policy" className="text-[#253E86] underline">
                            Section 13
                        </a>
                        .
                    </p>
                </Section>

                <Section id="how-we-use" title="4. How We Use Your Information">
                    <p>We use the limited information described above to:</p>
                    <ul className="list-disc pl-6 flex flex-col gap-2">
                        <li>
                            Maintain our early-access waitlist and contact you about
                            UnioGate&apos;s launch, beta access, and related product
                            updates;
                        </li>
                        <li>
                            Respond to questions or correspondence you send us directly;
                        </li>
                        <li>
                            Detect, investigate, and prevent abuse of our waitlist form
                            (for example, automated or fraudulent submissions);
                        </li>
                        <li>
                            Understand, in aggregate, how many people are interested in
                            UnioGate and where that interest is coming from;
                        </li>
                        <li>
                            Comply with applicable law, or respond to a valid legal
                            request, where we are required to do so.
                        </li>
                    </ul>
                    <p>
                        We do not use your email address to send unrelated marketing on
                        behalf of third parties, and we do not sell your information. See{" "}
                        <a href="#how-we-share" className="text-[#253E86] underline">
                            Section 6
                        </a>
                        .
                    </p>
                </Section>

                <Section id="legal-basis" title="5. Our Legal Basis for Processing">
                    <p>
                        Where applicable law requires us to identify a legal basis for
                        processing your information, we rely on the following:
                    </p>
                    <ul className="list-disc pl-6 flex flex-col gap-2">
                        <li>
                            <span className="font-medium text-[#000000]">Consent</span> —
                            by voluntarily entering your email address and submitting the
                            waitlist form, you consent to us collecting and using it for
                            the purposes described in this Policy. You may withdraw this
                            consent at any time (see{" "}
                            <a href="#your-rights" className="text-[#253E86] underline">
                                Section 11
                            </a>
                            ).
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Legitimate interest
                            </span>{" "}
                            — for automatically collected technical/log data, we rely on
                            our legitimate interest in keeping this Site secure,
                            functional, and free of abuse, balanced against your privacy
                            interests.
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Legal obligation
                            </span>{" "}
                            — where we are required to retain or disclose information to
                            comply with applicable law.
                        </li>
                    </ul>
                </Section>

                <Section id="how-we-share" title="6. How We Share Your Information">
                    <p>
                        <span className="font-medium text-[#000000]">
                            We do not sell your personal information.
                        </span>{" "}
                        We share information only in the following limited circumstances:
                    </p>
                    <ul className="list-disc pl-6 flex flex-col gap-2">
                        <li>
                            <span className="font-medium text-[#000000]">
                                Service providers (data processors).
                            </span>{" "}
                            We use Supabase, a third-party database and backend
                            infrastructure provider, to store waitlist submissions on our
                            behalf. Supabase processes this data only as instructed by us
                            and is not permitted to use it for its own purposes. We may in
                            future use additional infrastructure, email-delivery, or
                            analytics providers under similar terms; if so, this Policy
                            will be updated.
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Legal and safety reasons.
                            </span>{" "}
                            We may disclose information if required to do so by law, by a
                            valid order from a court or regulator, or where we believe in
                            good faith that disclosure is necessary to protect our rights,
                            your safety, or the safety of others.
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Business transfers.
                            </span>{" "}
                            If UnioGate is involved in a merger, acquisition, financing,
                            or sale of assets, your information may be transferred as part
                            of that transaction. We will require any such party to honor
                            the commitments in this Policy, and will notify you of any
                            material change in how your information is handled.
                        </li>
                    </ul>
                </Section>

                <Section id="retention" title="7. How Long We Keep Your Information">
                    <p>
                        We retain waitlist email addresses for as long as is reasonably
                        necessary to fulfill the purposes described in this Policy —
                        principally, so that we can contact you about UnioGate&apos;s
                        launch.
                    </p>
                    <p>
                        If UnioGate&apos;s launch does not proceed, or if a significant
                        period passes without any product update (we consider 24 months
                        without contact from us a reasonable outer bound), we will either
                        delete waitlist data we no longer have a reasonable use for, or
                        seek your renewed consent before continuing to hold it. You can
                        also ask us to delete your information at any time — see{" "}
                        <a href="#your-rights" className="text-[#253E86] underline">
                            Section 11
                        </a>
                        .
                    </p>
                </Section>

                <Section id="cookies" title="8. Cookies and Tracking Technologies">
                    <p>
                        As of the date of this Policy, this Site does not set
                        advertising or analytics cookies, and does not use third-party
                        tracking pixels. Our hosting and infrastructure providers may use
                        a small number of strictly necessary technical cookies or local
                        storage values required for the Site to function (for example, to
                        keep a security or session token).
                    </p>
                    <p>
                        If we introduce analytics, advertising, or other non-essential
                        cookies in the future, we will update this section and, where
                        required by applicable law, present you with a cookie consent
                        banner before any such cookies are set.
                    </p>
                </Section>

                <Section id="security" title="9. How We Protect Your Information">
                    <p>
                        We take reasonable technical and organizational measures designed
                        to protect your information, including: encrypting data in
                        transit between your browser and our Site (HTTPS/TLS); relying on
                        Supabase&apos;s infrastructure-level security controls and access
                        restrictions for stored data; and limiting internal access to
                        waitlist data to the founders and team members who need it to
                        operate the waitlist.
                    </p>
                    <p>
                        No method of transmission or storage is 100% secure, and we
                        cannot guarantee absolute security. If we become aware of a data
                        breach affecting your information, we will notify you and the
                        NDPC as required by applicable law.
                    </p>
                </Section>

                <Section
                    id="international-transfers"
                    title="10. International Data Transfers"
                >
                    <p>
                        Our infrastructure provider, Supabase, may process and store data
                        on servers located outside Nigeria, depending on the cloud region
                        configured for our project. By using this Site, you understand
                        that your information may be processed in a country other than
                        the one in which you reside, and that the data protection laws of
                        that country may differ from those of your home country. Where
                        required, we take steps intended to ensure such transfers are
                        subject to appropriate safeguards.
                    </p>
                </Section>

                <Section id="your-rights" title="11. Your Rights">
                    <p>
                        Subject to applicable law — including, for users in Nigeria, the
                        NDPA — you have the right to:
                    </p>
                    <ul className="list-disc pl-6 flex flex-col gap-2">
                        <li>
                            <span className="font-medium text-[#000000]">Access</span> —
                            ask us to confirm whether we hold your information and provide
                            you with a copy of it;
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Rectification
                            </span>{" "}
                            — ask us to correct inaccurate information (for example, an
                            email address you mistyped);
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Erasure / withdrawal
                            </span>{" "}
                            — ask us to delete your email address from our waitlist at any
                            time, for any reason;
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Restriction
                            </span>{" "}
                            — ask us to limit how we use your information in certain
                            circumstances;
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Objection
                            </span>{" "}
                            — object to our processing of your information where we rely
                            on legitimate interest;
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">
                                Portability
                            </span>{" "}
                            — ask us to provide your information in a structured,
                            machine-readable format;
                        </li>
                        <li>
                            <span className="font-medium text-[#000000]">Complaint</span> —
                            lodge a complaint with the Nigeria Data Protection Commission,
                            or with the relevant data protection authority in your country
                            of residence.
                        </li>
                    </ul>
                    <p>
                        To exercise any of these rights, contact us using the details in{" "}
                        <a href="#contact" className="text-[#253E86] underline">
                            Section 15
                        </a>
                        . Because this Site currently only holds your email address, most
                        requests (especially deletion) can typically be completed quickly.
                    </p>
                </Section>

                <Section id="children" title="12. Children's Privacy">
                    <p>
                        This Site is not directed at, and is not intended for use by,
                        anyone under the age of 18. We do not knowingly collect
                        information from children. If you believe a child has provided us
                        with their email address, please contact us and we will delete it.
                    </p>
                </Section>

                <Section id="future-policy" title="13. When UnioGate Launches">
                    <p>
                        This Policy is intentionally scoped to this pre-launch waitlist
                        Site. Once the UnioGate application itself launches, the scope of
                        data we collect and process will expand substantially, and will
                        likely include — among other things — identity verification
                        information (such as government-issued ID, business registration
                        documents, and KYC/KYB checks), transaction and payment data,
                        device and wallet information necessary to process crypto and
                        fiat payments, and information needed to comply with anti-money
                        laundering and financial regulatory obligations in the
                        jurisdictions in which we operate.
                    </p>
                    <p>
                        Before any of that data collection begins, we will publish a new,
                        comprehensive Privacy Policy describing it in full, and you will
                        be asked to review and accept that policy separately — joining
                        this waitlist today does not constitute consent to the data
                        practices of the future UnioGate product.
                    </p>
                </Section>

                <Section id="changes" title="14. Changes to This Policy">
                    <p>
                        We may update this Policy from time to time as this Site evolves
                        — for example, if we add analytics, change infrastructure
                        providers, or formally incorporate. We will update the &ldquo;Last
                        updated&rdquo; date at the top of this page when we do, and where
                        a change is material, we will take reasonable steps to make it
                        prominent (such as a notice on this Site). We encourage you to
                        review this page periodically.
                    </p>
                </Section>

                <Section id="contact" title="15. How to Contact Us">
                    <p>
                        If you have questions about this Policy, or want to exercise any
                        of the rights described in{" "}
                        <a href="#your-rights" className="text-[#253E86] underline">
                            Section 11
                        </a>
                        , please contact us at:
                    </p>
                    <div className="bg-white border border-[#D9DEE9] rounded-[16px] p-5 md:p-6 font-sora">
                        <p className="text-[#253E86]">
                            uniogate@gmail.com
                        </p>
                        <p className="text-[#3A3A3A] text-sm mt-2">
                            Lagos, Nigeria.
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
