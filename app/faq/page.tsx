"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { groups } from "@/data/faq";

export default function FaqPage() {
    const [open, setOpen] = useState<string | null>("general-0");

    return (
        <div className="bg-[#E9ECF3]">
            {/* Hero */}
            <section className="pt-6 md:pt-10">
                <Navbar />

                <div className="w-[95%] lg:w-[90%] mx-auto py-14 md:py-18 flex flex-col items-start gap-5">
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
