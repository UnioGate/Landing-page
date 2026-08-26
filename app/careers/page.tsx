"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollingText from "@/components/ScrollingText";
import { roles } from "@/data/careers";

const process = [
    {
        title: "Apply",
        body: "A short note and a link to your work. No cover letter, no portal account to create.",
    },
    {
        title: "Intro call · 30 min",
        body: "With the person you'd report to. Mostly about what you want to be doing in two years.",
    },
    {
        title: "Paid trial, then offer",
        body: "A week of real work, paid at your rate. We decide within a week and tell you either way.",
    },
];

const rise = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function CareersPage() {
    return (
        <div className="bg-[#E9ECF3] min-h-screen flex flex-col">
            <section className="pt-6 md:pt-10">
                <Navbar />

                <div className="w-[95%] lg:w-[90%] mx-auto pt-14 md:pt-20 pb-12 md:pb-16 flex flex-col items-start gap-5.5">
                    <motion.span
                        {...rise(0)}
                        className="inline-flex items-center gap-2.5 border-[0.7px] border-[#253E86] bg-white text-[#253E86] rounded-[20px] py-2 px-4 font-sora text-[13px] font-semibold"
                    >
                        <span className="block w-1.75 h-1.75 rounded-full bg-[#253E86]" />
                        {roles.length} open role{roles.length === 1 ? "" : "s"}
                    </motion.span>

                    <motion.h1
                        {...rise(0.08)}
                        className="font-jakarta text-5xl md:text-[56px] lg:text-[64px] leading-[106%]"
                    >
                        Build the rails
                        <br />
                        Africa pays on.
                    </motion.h1>

                    <motion.p
                        {...rise(0.16)}
                        className="font-sora text-lg md:text-xl leading-[168%] max-w-2xl"
                    >
                        We&apos;re a small team turning stablecoins into naira a merchant can spend
                        the same afternoon. Eleven people, no layers — you own a surface end to end
                        and ship it.
                    </motion.p>
                </div>
            </section>

            <section className="w-[95%] lg:w-[90%] mx-auto pb-18">
                <h2 className="font-jakarta text-3xl md:text-[32px] mb-5">Open roles</h2>

                <div className="flex flex-col gap-3">
                    {roles.map((r, i) => (
                        <motion.div key={r.slug} {...rise(0.04 * i)}>
                            <Link
                                href={`/careers/${r.slug}`}
                                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-7 bg-white border-[0.7px] border-[#C9CFDD] rounded-[10px] p-6 md:p-7 hover:border-[#253E86] transition-colors duration-150"
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="font-jakarta text-xl font-semibold group-hover:text-[#253E86] transition-colors duration-150">
                                        {r.title}
                                    </span>
                                    <span className="font-sora text-[15px] leading-[160%] text-[#4A5163]">
                                        {r.blurb}
                                    </span>
                                    <span className="flex flex-wrap gap-2 mt-0.5">
                                        {[r.location, r.type].map((chip) => (
                                            <span
                                                key={chip}
                                                className="border-[0.7px] border-[#C9CFDD] rounded-[20px] py-1 px-3 font-sora text-[12px] font-medium text-[#4A5163]"
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </span>
                                </div>

                                <span className="self-start md:self-auto border-[0.7px] border-[#10182A] font-sora text-[15px] font-semibold py-3 px-5.5 rounded-[10px] whitespace-nowrap group-hover:bg-[#10182A] group-hover:text-white transition-colors duration-150">
                                    View role
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="w-[95%] lg:w-[90%] mx-auto pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div>
                    <h2 className="font-jakarta text-3xl mb-5">How hiring works</h2>

                    {process.map((p, i) => (
                        <div
                            key={p.title}
                            className="grid grid-cols-[30px_1fr] gap-4 py-4 border-b-[0.7px] border-[#C9CFDD] last:border-b-0"
                        >
                            <span className="w-7.5 h-7.5 rounded-full bg-[#253E86] text-white font-jakarta text-sm font-semibold flex items-center justify-center">
                                {i + 1}
                            </span>
                            <div className="flex flex-col gap-1.25">
                                <span className="font-sora text-base font-semibold">{p.title}</span>
                                <span className="font-sora text-[15px] leading-[166%] text-[#4A5163]">
                                    {p.body}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#10182A] rounded-[10px] p-8 md:p-8.5 flex flex-col items-start gap-4">
                    <h3 className="font-jakarta text-[26px] text-white leading-[120%]">
                        Nothing here fits you?
                    </h3>
                    <p className="font-sora text-base leading-[168%] text-[#B9C0D2]">
                        Send us the thing you built and the problem you want to work on. We read
                        every one, and we open roles for people before we open them to the world.
                    </p>
                    <a
                        href="mailto:careers@uniogate.app"
                        className="bg-white text-[#10182A] font-sora text-base font-semibold py-3.75 px-6.5 rounded-[10px] hover:bg-[#E9ECF3] transition-colors duration-150"
                    >
                        Write to careers@uniogate.app
                    </a>
                </div>
            </section>

            <ScrollingText />

            <Footer />
        </div>
    );
}
