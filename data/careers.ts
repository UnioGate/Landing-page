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
    /** Optional. What the first three months look like, rendered as a timeline. */
    firstNinety?: { when: string; what: string }[];
    /** Optional. Honest disqualifiers, so people can rule themselves out early. */
    notFor?: string[];
    /** Optional. Terms and working conditions, shown beside the apply card. */
    offer?: string[];
};

/**
 * Rendered on every role page, now and for every role we add later.
 * Deliberately not a field on Role: it is the same for all of them, and
 * keeping it here means it cannot be forgotten on the next posting or
 * quietly reworded into something softer on one of them.
 */
export const aiNote = {
    heading: "Where we stand on AI",
    body: [
        "We use AI here, daily, and we expect you to. Refusing to touch it makes your own job harder for no good reason, and we are not looking for that kind of stubbornness.",
        "What we won't hire is the opposite extreme: someone who has handed their judgement over to it. If every task starts by asking a model what to think, the taste that made you good at this stops getting exercised. That goes quietly — you don't notice until the work has become average.",
        "So bring us your thinking, sharpened by the tool. Not the tool's thinking with your name on it. In practice we will ask you to talk us through why the work is the way it is, and that conversation is where the difference shows.",
    ],
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
            "X and LinkedIn are the front door to UnioGate. Most people who end up using us — merchants, partners, the next person we hire — will meet us on one of them first. You own both: what they say, who they talk to, and how fast they grow. They are not the same audience, and knowing the difference is most of the job. We have not launched yet, which means you are not maintaining a brand someone else built. You are deciding what it sounds like.",
        applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSclO0N0IlIPe5BRu56EDhM_QY_CNBnnPSWbGXd7LDWGGFELcg/viewform?usp=publish-editor",
        own: [
            "Both accounts day to day — the calendar, the posts, the threads, and the replies.",
            "The story. Turning what actually happens inside the company into posts worth reading: a merchant's first settlement, a feature that shipped, a number that moved.",
            "The split between the two. X is where we join the conversation; LinkedIn is where partners, banks, and future hires size us up. Same story, different register.",
            "Growth against a monthly target you help set, tracked separately for each platform.",
            "The replies. Real relationships inside the Nigerian fintech and crypto community, rather than broadcasting at it.",
            "A short weekly read on what worked and what didn't, with the numbers behind it.",
            "The launch itself. When we go live, the announcement and everything around it is yours to plan and run.",
            "The visual side of the feed — deciding what a post looks like, not only what it says, and keeping that consistent across both platforms.",
            "The first version of a content system: where ideas get captured, how a post goes from note to published, and what we never post.",
        ],
        looking: [
            "You have grown an account — your own or someone else's — and can show us the before and after.",
            "You write well in short form, and can shift register between X and LinkedIn without sounding like two different companies.",
            "You are already inside the Nigerian fintech and crypto conversation on X, and you know what actually travels on LinkedIn.",
            "You can work without a content team behind you, and ship daily.",
            "You can explain a product clearly to someone who has never heard of it, without reaching for jargon or hype.",
            "You are comfortable being early. A lot of the first month is deciding things that have never been decided here.",
        ],
        nice: [
            "You have run the accounts for a startup or a founder before, including ghostwriting in someone else's voice.",
            "Enough design sense to put together a clean graphic or clip without waiting on a designer.",
            "Real familiarity with stablecoins and how merchants actually get paid.",
            "You have shot and cut short video on your phone and been happy with the result.",
            "You have worked with a community — a Telegram or WhatsApp group, a Discord — and know the difference between a busy one and a real one.",
        ],
        firstNinety: [
            {
                when: "First 30 days",
                what: "You audit both accounts, agree the voice and the posting cadence with the founder, and take over day to day. By the end of the month, nothing goes out that you did not write or approve.",
            },
            {
                when: "By day 60",
                what: "The calendar runs a month ahead. You have a working list of the builders, merchants and journalists worth knowing in Nigerian fintech, and you are in replies daily rather than broadcasting at them.",
            },
            {
                when: "By day 90",
                what: "Both accounts are growing against the target you set in month one, the launch plan is written, and the weekly read is something the team opens rather than something you file.",
            },
        ],
        notFor: [
            "You want a brief handed to you. There isn't one yet — writing it is the job.",
            "You would rather schedule a month of posts and step away. Most of the value here is in the replies, and replies cannot be scheduled.",
            "You measure success in impressions. We care about merchants who sign up and partners who write back.",
        ],
        offer: [
            "Full-time and fully remote, working Lagos hours.",
            "Competitive salary and equity. We talk numbers on the first call, not after four rounds.",
            "A paid trial week at your rate before either side commits.",
            "You report to the founder. There is no layer between you and the decision.",
        ],
    },
];

export const getRole = (slug: string) => roles.find((r) => r.slug === slug);
