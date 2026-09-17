/**
 * FAQ content, shared by the page and by the FAQPage structured data in
 * app/faq/layout.tsx. Keeping one source means the markup Google reads can
 * never drift from what a visitor actually sees, which is the thing that
 * gets structured data penalised.
 */
export type Group = { id: string; label: string; items: [string, string][] };

export const groups: Group[] = [
    {
        id: "general",
        label: "General",
        items: [
            [
                "What is UnioGate?",
                "UnioGate is a point-of-sale application that lets merchants accept both cryptocurrency and fiat payments through one terminal, with automatic conversion and same-day settlement. It's built for vendors, not traders.",
            ],
            [
                "Who is UnioGate for?",
                "Primarily SME merchants (retail shops, cafes, coworking spaces, service businesses) who want to accept crypto payments from customers without dealing with wallets, conversion, or manual settlement themselves.",
            ],
            [
                "Is UnioGate live yet?",
                "Not yet. UnioGate is currently in active development. This site is a pre-launch waitlist. Join it to be notified as soon as early access opens.",
            ],
            [
                "Which countries does UnioGate support?",
                "We're building UnioGate for the Nigerian market first, where the need is clearest. We intend to expand to other African markets and beyond as the product proves itself.",
            ],
        ],
    },
    {
        id: "payments",
        label: "Payments",
        items: [
            [
                "What payment methods can my customers use?",
                "Cryptocurrency (scan a QR code and pay from any compatible wallet) and standard fiat methods: card, bank transfer, and USSD. Same terminal, customer picks what's convenient for them.",
            ],
            [
                "Which cryptocurrencies does UnioGate support?",
                "Stablecoins, starting with USDT, USDC, and CNGN across multiple blockchain networks. We're actively working on adding further networks and options as the product develops.",
            ],
            [
                "Do I need a crypto wallet to use UnioGate as a customer?",
                "You need a wallet to pay with crypto (any standard, compatible wallet works), but you don't need a UnioGate account or app of your own. You're simply paying a vendor, the same way you'd tap a card.",
            ],
            [
                "How fast are payments confirmed?",
                "Crypto payments are designed to confirm on-chain within seconds. Fiat payments confirm through standard card, transfer, or USSD processing.",
            ],
        ],
    },
    {
        id: "getting-paid",
        label: "Getting paid",
        items: [
            [
                "How do I get paid as a vendor?",
                "Sales settle to your bank account in Naira, same day, on a schedule you control, automatically or on demand. You can also choose to withdraw in crypto instead of converting to Naira, if you'd rather hold it.",
            ],
            [
                "What fees does UnioGate charge?",
                "UnioGate earns a small, transparent fee per transaction. There are no subscriptions or setup costs. We'll publish the exact fee structure before launch, so vendors know precisely what they're paying up front.",
            ],
            [
                "Does UnioGate hold my money?",
                "UnioGate is not designed to hold vendor funds long-term. The goal is same-day settlement to your own bank account or wallet, not custody. Full detail will be available in our Terms of Service for the live product ahead of launch.",
            ],
        ],
    },
    {
        id: "trust",
        label: "Trust & security",
        items: [
            [
                "Is UnioGate regulated?",
                "UnioGate has not yet launched, and this waitlist site does not offer any payment, custody, or financial service today. See our Terms of Service for detail. We're pursuing the appropriate licensing and regulatory engagement ahead of the product's launch.",
            ],
            [
                "Is my information safe if I join the waitlist?",
                "Joining the waitlist only asks for your email address. See our Privacy Policy for exactly what we collect and how it's handled.",
            ],
        ],
    },
    {
        id: "getting-started",
        label: "Getting started",
        items: [
            [
                "How do I join the waitlist?",
                "Enter your email on our homepage and select “Get Early Access.” We'll reach out as soon as early access opens.",
            ],
            [
                "When does UnioGate launch?",
                "We don't have a fixed public launch date yet. We'd rather ship something solid than promise a date and miss it. Joining the waitlist is the fastest way to find out first.",
            ],
            [
                "Do I need any technical knowledge to use UnioGate?",
                "No. If you can ring up a sale on any standard POS terminal, you can use UnioGate. The crypto and settlement complexity happens behind the scenes.",
            ],
            [
                "I have another question. Who do I contact?",
                "Reach out through the Contact link in our footer, and we'll get back to you.",
            ],
        ],
    },
];
