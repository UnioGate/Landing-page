export type Role = {
    slug: string;
    title: string;
    /** One line, used on the listing page. */
    blurb: string;
    location: string;
    type: string;
    /** Third chip on the detail page, next to location and type. */
    comp: string;
    /** Two or three sentences that open the detail page. */
    intro: string;
    applyUrl: string;
    own: string[];
    looking: string[];
    nice: string[];
};

export const roles: Role[] = [
    {
        slug: "social-media-manager",
        title: "Social Media Manager",
        blurb: "Own our X and LinkedIn — tell the story, grow the brand.",
        location: "Remote",
        type: "Full-time",
        comp: "Competitive + equity",
        intro:
            "X and LinkedIn are the front door to UnioGate. Most people who end up using us — merchants, partners, the next person we hire — will meet us on one of them first. You own both: what they say, who they talk to, and how fast they grow. They are not the same audience, and knowing the difference is most of the job.",
        applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSclO0N0IlIPe5BRu56EDhM_QY_CNBnnPSWbGXd7LDWGGFELcg/viewform?usp=publish-editor",
        own: [
            "Both accounts day to day — the calendar, the posts, the threads, and the replies.",
            "The story. Turning what actually happens inside the company into posts worth reading: a merchant's first settlement, a feature that shipped, a number that moved.",
            "The split between the two. X is where we join the conversation; LinkedIn is where partners, banks, and future hires size us up. Same story, different register.",
            "Growth against a monthly target you help set, tracked separately for each platform.",
            "The replies. Real relationships inside the Nigerian fintech and crypto community, rather than broadcasting at it.",
            "A short weekly read on what worked and what didn't, with the numbers behind it.",
        ],
        looking: [
            "You have grown an account — your own or someone else's — and can show us the before and after.",
            "You write well in short form, and can shift register between X and LinkedIn without sounding like two different companies.",
            "You are already inside the Nigerian fintech and crypto conversation on X, and you know what actually travels on LinkedIn.",
            "You can work without a content team behind you, and ship daily.",
        ],
        nice: [
            "You have run the accounts for a startup or a founder before, including ghostwriting in someone else's voice.",
            "Enough design sense to put together a clean graphic or clip without waiting on a designer.",
            "Real familiarity with stablecoins and how merchants actually get paid.",
        ],
    },
];

export const getRole = (slug: string) => roles.find((r) => r.slug === slug);
