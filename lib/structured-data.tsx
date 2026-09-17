import { SITE_URL } from "@/lib/seo";
import type { Role } from "@/data/careers";
import type { Group } from "@/data/faq";

/**
 * Renders a JSON-LD block. Next keeps this in the server-rendered HTML, which
 * is what crawlers read — a script injected on the client would be missed by
 * some of them.
 */
export function JsonLd({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            // The payload is our own content, not user input.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/**
 * Who we are. Stable @id so every other block can point at this one rather
 * than restating the company, which is what lets Google join them up.
 */
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "UnioGate",
    url: SITE_URL,
    /**
     * This must be the logo itself, not the social banner — Google renders it
     * where a logo belongs. NOTE: logo.png is 100x100 and Google asks for at
     * least 112x112, so re-export it larger when you get the chance.
     */
    logo: `${SITE_URL}/logo/logo.png`,
    description:
        "UnioGate is a point-of-sale application that lets merchants accept both stablecoin and fiat payments through one terminal, with automatic conversion and same-day settlement in naira.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
    },
    areaServed: {
        "@type": "Country",
        name: "Nigeria",
    },
    /** Confirmed by the founder. A year alone is valid ISO 8601 here. */
    foundingDate: "2026",
    /**
     * `sameAs` is how Google ties this site to your social profiles when it
     * builds the brand entity, so a wrong URL here is worse than none.
     * Deliberately left out until the handles are confirmed: the site currently
     * links x.com/uniogateapp on /contact and x.com/uniogate on /thanks, and
     * they cannot both be right. Add the real profiles here once settled.
     */
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@uniogate.com",
        url: `${SITE_URL}/contact`,
    },
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "UnioGate",
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
};

/** Flattens the grouped FAQ into the flat list FAQPage expects. */
export function faqSchema(groups: Group[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${SITE_URL}/faq#faq`,
        mainEntity: groups.flatMap((group) =>
            group.items.map(([question, answer]) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: answer,
                },
            }))
        ),
    };
}

/**
 * JobPosting, which is what makes a role eligible to appear in Google Jobs —
 * a separate, much less crowded surface than ordinary web results.
 */
export function jobPostingSchema(role: Role) {
    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: role.title,
        description: buildJobDescription(role),
        datePosted: role.datePosted,
        employmentType: role.employmentType,
        hiringOrganization: {
            "@type": "Organization",
            name: "UnioGate",
            sameAs: SITE_URL,
            logo: `${SITE_URL}/logo/logo.png`,
        },
        // The role is remote, so Google wants TELECOMMUTE plus the region an
        // applicant must be able to work from.
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
            "@type": "Country",
            name: "Nigeria",
        },
        directApply: false,
        url: `${SITE_URL}/careers/${role.slug}`,
    };
}

/**
 * Google reads the description as HTML and rewards detail, so give it the same
 * lists the page shows rather than just the one-line blurb.
 */
function buildJobDescription(role: Role) {
    const list = (heading: string, items: string[]) =>
        `<h3>${heading}</h3><ul>${items
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>`;

    return [
        `<p>${role.intro}</p>`,
        list("What you'd own", role.own),
        list("What we're looking for", role.looking),
        list("Nice to have", role.nice),
        role.offer ? list("What we offer", role.offer) : "",
    ].join("");
}

/** Breadcrumbs render as a path under the result instead of a raw URL. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: `${SITE_URL}${crumb.path}`,
        })),
    };
}
