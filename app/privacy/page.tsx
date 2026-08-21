import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How UnioGate collects, uses, and protects your information on our pre-launch site.",
};

const bold = "font-medium text-[#000000]";
const link = "text-[#253E86] underline hover:text-[#10182A]";
const list = "list-disc pl-6 flex flex-col gap-2";

// LegalLayout numbers sections by array position, so in-body references like
// "Section 6" have to track that order. Derive them from the ids instead of
// hardcoding, or inserting a section silently misnumbers every reference after it.
const ORDER = [
    "who-we-are",
    "info-we-collect",
    "info-we-dont-collect",
    "how-we-use",
    "legal-basis",
    "how-we-share",
    "retention",
    "cookies",
    "security",
    "international-transfers",
    "your-rights",
    "children",
    "future-policy",
    "changes",
    "contact",
] as const;

const no = (id: (typeof ORDER)[number]) => ORDER.indexOf(id) + 1;

const sections: LegalSection[] = [
    {
        id: "who-we-are",
        title: "Who We Are",
        body: (
            <>
                <p>
                    UnioGate is a venture being built to allow merchants to accept both
                    cryptocurrency and fiat payments through a single point of sale, with
                    automatic conversion and same-day settlement.
                </p>
                <p>
                    UnioGate is presently a pre-incorporation venture. References in this
                    Policy to &ldquo;UnioGate,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                    or &ldquo;our&rdquo; refer to the founders and team currently
                    operating this Site and building the UnioGate product, and, upon
                    incorporation, to the resulting registered company, which will assume
                    responsibility for this Site and the commitments in this Policy. We
                    will update this Policy with our registered company name and
                    registration details once incorporation is complete.
                </p>
                <p>
                    We intend to operate in line with the Nigeria Data Protection Act 2023
                    (&ldquo;NDPA&rdquo;) and the general supervision of the Nigeria Data
                    Protection Commission (&ldquo;NDPC&rdquo;), as our primary regulatory
                    framework. Because this Site is accessible globally, we also aim to
                    align with widely recognized data protection principles reflected in
                    other frameworks, such as the EU/UK General Data Protection
                    Regulation, even though we do not claim formal certification under
                    those frameworks at this stage.
                </p>
            </>
        ),
    },
    {
        id: "info-we-collect",
        title: "Information We Collect",
        body: (
            <>
                <p className={bold}>2.1 Information you give us directly</p>
                <p>
                    <span className={bold}>Waitlist email address.</span>{" "}
                    When you submit our &ldquo;Get Early Access&rdquo; form, we collect the email address
                    you provide, and nothing else. We store this in a waitlist database
                    operated for us by our infrastructure provider, Supabase (see{" "}
                    <a href="#how-we-share" className={link}>
                        Section {no("how-we-share")}
                    </a>
                    ).
                </p>
                <p>
                    <span className={bold}>Contact form.</span>{" "}
                    If you write to us through the contact form on this Site, we collect your name, your email
                    address, and the message you write. You may also optionally tell us
                    your business website, choose a subject for your enquiry, and select
                    an approximate monthly payment volume band (for example,
                    &ldquo;Under $10k&rdquo;). The volume band is a self-reported range
                    that helps us understand what kind of businesses are interested in
                    UnioGate — it is not a financial record, and we do not verify it or
                    connect it to any account. Contact submissions are stored in the same
                    Supabase database and are also emailed to our team so that we can
                    reply.
                </p>
                <p>
                    <span className={bold}>Correspondence.</span> If you contact us
                    directly — for example by email — we will collect whatever information
                    you choose to include in that message, so that we can respond to you.
                </p>

                <p className={`${bold} pt-2`}>2.2 Information collected automatically</p>
                <p>
                    Like virtually any website, when you visit this Site our hosting and
                    infrastructure providers may automatically log certain technical
                    information, including your IP address, approximate location derived
                    from that IP address, browser type and version, device type, operating
                    system, referring web page, and the date and time of your visit. We
                    use this information in aggregate for purposes such as keeping the
                    Site secure, diagnosing technical problems, and understanding general
                    traffic levels. We do not currently use this data to build individual
                    profiles of visitors or to track you across other websites.
                </p>
            </>
        ),
    },
    {
        id: "info-we-dont-collect",
        title: "Information We Do Not Collect (Yet)",
        body: (
            <>
                <p>
                    To be precise about the limited scope of this Site, we want to be
                    explicit about what we do <span className="italic">not</span>{" "}
                    currently collect through it:
                </p>
                <ul className={list}>
                    <li>We do not ask for or store passwords on this Site.</li>
                    <li>
                        We do not collect payment card details, bank account information,
                        or wallet private keys through this Site.
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
                        We do not currently run advertising trackers, third-party analytics
                        scripts, or social media pixels on this Site.
                    </li>
                </ul>
                <p>
                    <span className={bold}>The demo app download.</span>{" "}
                    The &ldquo;Download Demo&rdquo; link on this Site points to a build file
                    hosted by Expo, a third-party service. We do not collect any personal
                    information through that link ourselves, and this Site asks you for
                    nothing in order to use it. Because the file is served by Expo rather
                    than by us, Expo will receive the technical request data any download
                    involves, such as your IP address, under its own privacy terms. The
                    demo build is a separate application from this Site and is not covered
                    by this Policy; if it collects information when you run it, that will
                    be described in the terms presented with the product itself.
                </p>
                <p>
                    Several of these will change once the UnioGate product itself launches.
                    See{" "}
                    <a href="#future-policy" className={link}>
                        Section {no("future-policy")}
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        id: "how-we-use",
        title: "How We Use Your Information",
        body: (
            <>
                <p>We use the limited information described above to:</p>
                <ul className={list}>
                    <li>
                        Maintain our early-access waitlist and contact you about
                        UnioGate&apos;s launch, beta access, and related product updates;
                    </li>
                    <li>
                        Send you a confirmation email when you join the waitlist, and an
                        acknowledgement when you send us a message through the contact
                        form;
                    </li>
                    <li>
                        Read, respond to, and keep a record of enquiries you send us
                        through the contact form or directly by email;
                    </li>
                    <li>
                        Detect, investigate, and prevent abuse of our waitlist form (for
                        example, automated or fraudulent submissions);
                    </li>
                    <li>
                        Understand, in aggregate, how many people are interested in
                        UnioGate and where that interest is coming from;
                    </li>
                    <li>
                        Comply with applicable law, or respond to a valid legal request,
                        where we are required to do so.
                    </li>
                </ul>
                <p>
                    We do not use your email address to send unrelated marketing on behalf
                    of third parties, and we do not sell your information. See{" "}
                    <a href="#how-we-share" className={link}>
                        Section {no("how-we-share")}
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        id: "legal-basis",
        title: "Our Legal Basis for Processing",
        body: (
            <>
                <p>
                    Where applicable law requires us to identify a legal basis for
                    processing your information, we rely on the following:
                </p>
                <ul className={list}>
                    <li>
                        <span className={bold}>Consent</span> — by voluntarily entering
                        your email address and submitting the waitlist form, you consent to
                        us collecting and using it for the purposes described in this
                        Policy. You may withdraw this consent at any time (see{" "}
                        <a href="#your-rights" className={link}>
                            Section {no("your-rights")}
                        </a>
                        ).
                    </li>
                    <li>
                        <span className={bold}>Legitimate interest</span> — for
                        automatically collected technical/log data, we rely on our
                        legitimate interest in keeping this Site secure, functional, and
                        free of abuse, balanced against your privacy interests.
                    </li>
                    <li>
                        <span className={bold}>Legal obligation</span> — where we are
                        required to retain or disclose information to comply with
                        applicable law.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "how-we-share",
        title: "How We Share Your Information",
        body: (
            <>
                <p>
                    <span className={bold}>
                        We do not sell your personal information.
                    </span>{" "}
                    We share information only in the following limited circumstances:
                </p>
                <ul className={list}>
                    <li>
                        <span className={bold}>Service providers (data processors).</span>{" "}
                        We use a small number of third-party providers to operate this
                        Site. Each processes data only as instructed by us and is not
                        permitted to use it for its own purposes:
                        <ul className="list-[circle] pl-6 flex flex-col gap-2 mt-2">
                            <li>
                                <span className={bold}>Supabase</span> — database and
                                backend infrastructure, used to store waitlist email
                                addresses and contact form submissions on our behalf.
                            </li>
                            <li>
                                <span className={bold}>Resend</span> — email delivery, used
                                to send your waitlist confirmation and contact
                                acknowledgement emails. To do that, Resend necessarily
                                receives your email address and the contents of the message
                                we send you.
                            </li>
                        </ul>
                        We may in future use additional infrastructure, email-delivery, or
                        analytics providers under similar terms; if so, this Policy will be
                        updated.
                    </li>
                    <li>
                        <span className={bold}>Legal and safety reasons.</span> We may
                        disclose information if required to do so by law, by a valid order
                        from a court or regulator, or where we believe in good faith that
                        disclosure is necessary to protect our rights, your safety, or the
                        safety of others.
                    </li>
                    <li>
                        <span className={bold}>Business transfers.</span> If UnioGate is
                        involved in a merger, acquisition, financing, or sale of assets,
                        your information may be transferred as part of that transaction. We
                        will require any such party to honor the commitments in this
                        Policy, and will notify you of any material change in how your
                        information is handled.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "retention",
        title: "How Long We Keep Your Information",
        body: (
            <>
                <p>
                    We retain waitlist email addresses for as long as is reasonably
                    necessary to fulfill the purposes described in this Policy —
                    principally, so that we can contact you about UnioGate&apos;s launch.
                </p>
                <p>
                    <span className={bold}>
                        Unsubscribing is not the same as deletion.
                    </span>{" "}
                    When you unsubscribe, we mark your waitlist record so that we stop
                    sending you email, but the record itself is retained. We keep it
                    deliberately: it is how we remember not to email you again if the same
                    address is submitted later. If you would rather we erased the record
                    entirely, ask us and we will — see{" "}
                    <a href="#your-rights" className={link}>
                        Section {no("your-rights")}
                    </a>
                    .
                </p>
                <p>
                    Messages sent through the contact form are retained for as long as we
                    need them to handle your enquiry and keep a reasonable record of it,
                    and are deleted on request.
                </p>
                <p>
                    If UnioGate&apos;s launch does not proceed, or if a significant period
                    passes without any product update (we consider 24 months without
                    contact from us a reasonable outer bound), we will either delete
                    waitlist data we no longer have a reasonable use for, or seek your
                    renewed consent before continuing to hold it. You can also ask us to
                    delete your information at any time — see{" "}
                    <a href="#your-rights" className={link}>
                        Section {no("your-rights")}
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        id: "cookies",
        title: "Cookies and Tracking Technologies",
        body: (
            <>
                <p>
                    As of the date of this Policy, this Site does not set advertising or
                    analytics cookies, and does not use third-party tracking pixels. Our
                    hosting and infrastructure providers may use a small number of strictly
                    necessary technical cookies or local storage values required for the
                    Site to function (for example, to keep a security or session token).
                </p>
                <p>
                    If we introduce analytics, advertising, or other non-essential cookies
                    in the future, we will update this section and, where required by
                    applicable law, present you with a cookie consent banner before any
                    such cookies are set.
                </p>
            </>
        ),
    },
    {
        id: "security",
        title: "How We Protect Your Information",
        body: (
            <>
                <p>
                    We take reasonable technical and organizational measures designed to
                    protect your information, including: encrypting data in transit between
                    your browser and our Site (HTTPS/TLS); relying on Supabase&apos;s
                    infrastructure-level security controls and access restrictions for
                    stored data; and limiting internal access to waitlist data to the
                    founders and team members who need it to operate the waitlist.
                </p>
                <p>
                    No method of transmission or storage is 100% secure, and we cannot
                    guarantee absolute security. If we become aware of a data breach
                    affecting your information, we will notify you and the NDPC as required
                    by applicable law.
                </p>
            </>
        ),
    },
    {
        id: "international-transfers",
        title: "International Data Transfers",
        body: (
            <p>
                Our infrastructure provider, Supabase, may process and store data on
                servers located outside Nigeria, depending on the cloud region configured
                for our project. By using this Site, you understand that your information
                may be processed in a country other than the one in which you reside, and
                that the data protection laws of that country may differ from those of
                your home country. Where required, we take steps intended to ensure such
                transfers are subject to appropriate safeguards.
            </p>
        ),
    },
    {
        id: "your-rights",
        title: "Your Rights",
        body: (
            <>
                <p>
                    Subject to applicable law — including, for users in Nigeria, the NDPA —
                    you have the right to:
                </p>
                <ul className={list}>
                    <li>
                        <span className={bold}>Access</span> — ask us to confirm whether we
                        hold your information and provide you with a copy of it;
                    </li>
                    <li>
                        <span className={bold}>Rectification</span> — ask us to correct
                        inaccurate information (for example, an email address you mistyped);
                    </li>
                    <li>
                        <span className={bold}>Erasure / withdrawal</span> — ask us to
                        delete your email address from our waitlist at any time, for any
                        reason;
                    </li>
                    <li>
                        <span className={bold}>Restriction</span> — ask us to limit how we
                        use your information in certain circumstances;
                    </li>
                    <li>
                        <span className={bold}>Objection</span> — object to our processing
                        of your information where we rely on legitimate interest;
                    </li>
                    <li>
                        <span className={bold}>Portability</span> — ask us to provide your
                        information in a structured, machine-readable format;
                    </li>
                    <li>
                        <span className={bold}>Complaint</span> — lodge a complaint with the
                        Nigeria Data Protection Commission, or with the relevant data
                        protection authority in your country of residence.
                    </li>
                </ul>
                <p className={`${bold} pt-2`}>Unsubscribing, without asking us</p>
                <p>
                    You do not need to contact anyone to stop receiving our emails. Every
                    email we send carries an unsubscribe link, and you can also go directly
                    to{" "}
                    <a href="/unsubscribe" className={link}>
                        uniogate.com/unsubscribe
                    </a>{" "}
                    and enter your address. This takes effect immediately. If you change
                    your mind, submitting the same address on the waitlist form puts you
                    back on the list.
                </p>
                <p>
                    To exercise any of the other rights above, contact us using the details
                    in{" "}
                    <a href="#contact" className={link}>
                        Section {no("contact")}
                    </a>
                    . Because this Site holds very little about you — an email address, and
                    a contact message if you sent one — most requests, especially deletion,
                    can typically be completed quickly.
                </p>
            </>
        ),
    },
    {
        id: "children",
        title: "Children's Privacy",
        body: (
            <p>
                This Site is not directed at, and is not intended for use by, anyone under
                the age of 18. We do not knowingly collect information from children. If
                you believe a child has provided us with their email address, please
                contact us and we will delete it.
            </p>
        ),
    },
    {
        id: "future-policy",
        title: "When UnioGate Launches",
        body: (
            <>
                <p>
                    This Policy is intentionally scoped to this pre-launch waitlist Site.
                    Once the UnioGate application itself launches, the scope of data we
                    collect and process will expand substantially, and will likely include
                    — among other things — identity verification information (such as
                    government-issued ID, business registration documents, and KYC/KYB
                    checks), transaction and payment data, device and wallet information
                    necessary to process crypto and fiat payments, and information needed
                    to comply with anti-money laundering and financial regulatory
                    obligations in the jurisdictions in which we operate.
                </p>
                <p>
                    Before any of that data collection begins, we will publish a new,
                    comprehensive Privacy Policy describing it in full, and you will be
                    asked to review and accept that policy separately — joining this
                    waitlist today does not constitute consent to the data practices of the
                    future UnioGate product.
                </p>
            </>
        ),
    },
    {
        id: "changes",
        title: "Changes to This Policy",
        body: (
            <p>
                We may update this Policy from time to time as this Site evolves — for
                example, if we add analytics, change infrastructure providers, or formally
                incorporate. We will update the &ldquo;Last updated&rdquo; date at the top
                of this page when we do, and where a change is material, we will take
                reasonable steps to make it prominent (such as a notice on this Site). We
                encourage you to review this page periodically.
            </p>
        ),
    },
    {
        id: "contact",
        title: "How to Contact Us",
        body: (
            <>
                <p>
                    If you have questions about this Policy, or want to exercise any of the
                    rights described in{" "}
                    <a href="#your-rights" className={link}>
                        Section {no("your-rights")}
                    </a>
                    , please contact us at:
                </p>
                <div className="border-l-2 border-[#253E86] bg-white/60 p-5 md:p-6 font-sora">
                    <p className="text-[#253E86]">uniogate@gmail.com</p>
                    <p className="text-[#3A3A3A] text-sm mt-2">Lagos, Nigeria.</p>
                </div>
            </>
        ),
    },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            updated="August 21, 2026"
            sections={sections}
            intro={
                <>
                    UnioGate (&ldquo;UnioGate,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                    or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
                    explains what information we collect on this website, why we collect
                    it, how we use and protect it, and the choices and rights you have. It
                    applies to{" "}
                    <span className="text-[#000000] font-medium">uniogate.com</span>,
                    including our &ldquo;Get Early Access&rdquo; waitlist and our contact
                    form (together, the &ldquo;Site&rdquo;).
                </>
            }
            scopeNote={
                <>
                    <span className="font-semibold text-[#000000]">A note on scope:</span>{" "}
                    UnioGate&apos;s product — a point-of-sale application for merchants —
                    has not yet launched. This Site is currently a pre-launch &ldquo;coming
                    soon&rdquo; page: you can join our waitlist by email, write to us
                    through the contact form, and download a demo build of the app. This
                    Policy is scoped to that. It does{" "}
                    <span className="italic">not</span> describe data practices for a
                    product that does not yet exist. When the UnioGate app launches, it
                    will involve meaningfully more data — including identity verification,
                    transaction, and financial information — and we will publish an
                    updated, expanded Privacy Policy before that happens, which you will be
                    asked to review and accept separately. See{" "}
                    <a
                        href="#future-policy"
                        className="text-[#253E86] underline hover:text-[#10182A]"
                    >
                        Section {no("future-policy")}
                    </a>
                    .
                </>
            }
        />
    );
}
