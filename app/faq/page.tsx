"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Group = { id: string; label: string; items: [string, string][] };

const groups: Group[] = [
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
                "Primarily SME merchants — retail shops, cafes, coworking spaces, service businesses — who want to accept crypto payments from customers without dealing with wallets, conversion, or manual settlement themselves.",
            ],
            [
                "Is UnioGate live yet?",
                "Not yet. UnioGate is currently in active development. This site is a pre-launch waitlist — join it to be notified as soon as early access opens.",
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
                "Cryptocurrency (scan a QR code and pay from any compatible wallet) and standard fiat methods — card, bank transfer, and USSD. Same terminal, customer picks what's convenient for them.",
            ],
            [
                "Which cryptocurrencies does UnioGate support?",
                "Stablecoins, starting with USDT, USDC, and CNGN across multiple blockchain networks. We're actively working on adding further networks and options as the product develops.",
            ],
            [
                "Do I need a crypto wallet to use UnioGate as a customer?",
                "You need a wallet to pay with crypto (any standard, compatible wallet works), but you don't need a UnioGate account or app of your own — you're simply paying a vendor, the same way you'd tap a card.",
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
                "Sales settle to your bank account in Naira, same day, on a schedule you control — automatically, or on demand. You can also choose to withdraw in crypto instead of converting to Naira, if you'd rather hold it.",
            ],
            [
                "What fees does UnioGate charge?",
                "UnioGate earns a small, transparent fee per transaction — there are no subscriptions or setup costs. We'll publish the exact fee structure before launch, so vendors know precisely what they're paying up front.",
            ],
            [
                "Does UnioGate hold my money?",
                "UnioGate is not designed to hold vendor funds long-term — the goal is same-day settlement to your own bank account or wallet, not custody. Full detail will be available in our Terms of Service for the live product ahead of launch.",
            ],
        ],
    },
    {
        id: "trust",
        label: "Trust & security",
        items: [
            [
                "Is UnioGate regulated?",
                "UnioGate has not yet launched, and this waitlist site does not offer any payment, custody, or financial service today — see our Terms of Service for detail. We're pursuing the appropriate licensing and regulatory engagement ahead of the product's launch.",
            ],
            [
                "Is my information safe if I join the waitlist?",
                "Joining the waitlist only asks for your email address — see our Privacy Policy for exactly what we collect and how it's handled.",
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
                "We don't have a fixed public launch date yet — we'd rather ship something solid than promise a date and miss it. Joining the waitlist is the fastest way to find out first.",
            ],
            [
                "Do I need any technical knowledge to use UnioGate?",
                "No. If you can ring up a sale on any standard POS terminal, you can use UnioGate — the crypto and settlement complexity happens behind the scenes.",
            ],
            [
                "I have another question — who do I contact?",
                "Reach out through the Contact link in our footer, and we'll get back to you.",
            ],
        ],
    },
];

export default function FaqPage() {
    const [open, setOpen] = useState<string | null>("general-0");

    return (
        <div className="bg-[#E9ECF3]">
            {/* Hero */}
            <section className="relative pt-6 md:pt-10 overflow-hidden">
                <Navbar />

                <div className="relative z-10 w-[95%] lg:w-[90%] mx-auto max-w-4xl py-14 md:py-18 flex flex-col items-start gap-5">
                    <h4 className="font-sora text-sm md:text-base py-2.5 px-5 border-[0.7px] border-[#000000] rounded-[20px] w-fit">
                        FAQ
                    </h4>

                    <h1 className="font-jakarta text-5xl md:text-[56px] lg:text-[72px] leading-[110%]">
                        Everything we can
                        <br />
                        answer today.
                    </h1>

                    <p className="font-sora text-lg md:text-xl max-w-2xl">
                        UnioGate hasn&apos;t launched yet, so some answers end in
                        &quot;before launch.&quot; Where that&apos;s true, we say so rather
                        than guess.
                    </p>
                </div>

                <Image
                    src={"/landing-page-images/hero-bg.png"}
                    width={1000}
                    height={1000}
                    alt="background"
                    className="w-full h-full absolute bottom-0 left-0 z-0"
                />
            </section>

            <main className="w-[95%] lg:w-[90%] mx-auto py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
                {/* Category rail */}
                <nav className="hidden lg:flex flex-col sticky top-10 border-t border-[#10182A] pt-5">
                    <p className="font-sora text-xs tracking-[0.08em] uppercase font-semibold mb-3">
                        Categories
                    </p>

                    {groups.map((g) => (
                        <a
                            key={g.id}
                            href={`#${g.id}`}
                            className="flex items-baseline justify-between gap-3 font-sora text-sm py-2 text-[#3A3A3A] border-b border-[#C9CFDD] hover:text-[#253E86] transition-colors duration-150"
                        >
                            <span>{g.label}</span>
                            <span className="text-[#9AA0AE] text-xs">{g.items.length}</span>
                        </a>
                    ))}

                    <Link
                        href="/contact"
                        className="mt-6 bg-[#253E86] text-white py-4 px-4.5 font-sora text-[15px] font-semibold hover:bg-[#1B2F68] transition-colors duration-150"
                    >
                        Still stuck? Contact us
                    </Link>
                </nav>

                <div className="max-w-3xl flex flex-col gap-14">
                    {groups.map((g, gi) => (
                        <section key={g.id} id={g.id} className="scroll-mt-8">
                            <div className="flex items-baseline gap-4 pb-4 border-b-2 border-[#10182A]">
                                <span className="font-sora text-sm text-[#253E86]">
                                    {String(gi + 1).padStart(2, "0")}
                                </span>
                                <h2 className="font-jakarta text-2xl md:text-[32px] font-normal">
                                    {g.label}
                                </h2>
                            </div>

                            {g.items.map(([q, a], qi) => {
                                const key = `${g.id}-${qi}`;
                                const on = open === key;

                                return (
                                    <div key={key} className="border-b border-[#C9CFDD]">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(on ? null : key)}
                                            aria-expanded={on}
                                            className="w-full text-left cursor-pointer py-6 flex items-start justify-between gap-6 font-sora"
                                        >
                                            <span
                                                className={`text-lg md:text-xl font-medium leading-[145%] transition-colors duration-200 ${
                                                    on ? "text-[#253E86]" : "text-[#000000]"
                                                }`}
                                            >
                                                {q}
                                            </span>

                                            <motion.span
                                                initial={false}
                                                animate={{ rotate: on ? 135 : 0 }}
                                                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                                                className="shrink-0 w-7 h-7 border border-[#253E86] text-[#253E86] flex items-center justify-center text-lg leading-none"
                                            >
                                                +
                                            </motion.span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {on && (
                                                <motion.div
                                                    key="answer"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="font-sora text-base md:text-lg leading-[175%] text-[#3A3A3A] pr-0 md:pr-15 pb-6.5">
                                                        {a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
