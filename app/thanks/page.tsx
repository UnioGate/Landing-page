"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { marquee_text } from "@/data/marquee_text";

const timeline = [
    {
        step: "Now",
        title: "You're logged",
        body: "Your email sits on the early-access list. Nothing else needed from you.",
    },
    {
        step: "Beta",
        title: "Terminal invitations go out",
        body: "We onboard merchants in small batches, starting in Lagos. You'll get a direct invite.",
    },
    {
        step: "Q4’ 26",
        title: "Launch",
        body: "Crypto and fiat through one terminal, same-day settlement to your bank.",
    },
];

const rise = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] as const, delay },
});

function ThanksContent() {
    const params = useSearchParams();
    const email = params.get("email") ?? "your inbox";

    return (
        <div className="relative z-10 w-[95%] lg:w-[90%] mx-auto py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-18 items-start">
            <div className="flex flex-col items-start gap-5.5">
                <motion.span
                    {...rise(0)}
                    className="w-16 h-16 bg-[#253E86] rounded-[20px] flex items-center justify-center"
                >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <motion.path
                            d="M6 15.5L12.5 22L24 9"
                            stroke="white"
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
                        />
                    </svg>
                </motion.span>

                <motion.h1
                    {...rise(0.08)}
                    className="font-jakarta text-5xl md:text-[56px] lg:text-[68px] leading-[110%]"
                >
                    You&apos;re on
                    <br />
                    the list.
                </motion.h1>

                <motion.p
                    {...rise(0.16)}
                    className="font-sora text-lg md:text-xl leading-[165%] max-w-xl"
                >
                    We&apos;ve saved <span className="font-semibold">{email}</span> for early
                    access. When the terminal is ready for merchants, you&apos;ll hear from
                    us before anyone else — no newsletter, no filler.
                </motion.p>

                <motion.div {...rise(0.24)} className="flex gap-3 flex-wrap">
                    <a
                        href="https://x.com/uniogate"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="bg-[#253E86] text-white py-3.75 px-6.5 rounded-[10px] font-sora text-base font-semibold hover:bg-[#1B2F68] transition-colors duration-150"
                    >
                        Follow the build on X
                    </a>

                    <Link
                        href="/how-it-works"
                        className="border-[0.7px] border-[#10182A] text-[#10182A] py-3.75 px-6.5 rounded-[10px] font-sora text-base font-semibold hover:bg-white transition-colors duration-150"
                    >
                        See how it works
                    </Link>
                </motion.div>

                <motion.p {...rise(0.32)} className="font-sora text-sm text-[#4A5163] mt-2">
                    Wrong address?{" "}
                    <Link href="/contact" className="underline hover:text-[#253E86]">
                        Tell us
                    </Link>{" "}
                    and we&apos;ll fix it.
                </motion.p>
            </div>

            <motion.div {...rise(0.2)} className="bg-white border border-[#C9CFDD] w-full">
                <div className="px-7 py-6.5 border-b border-[#C9CFDD]">
                    <h2 className="font-jakarta text-2xl font-medium">What happens next</h2>
                </div>

                {timeline.map((t) => (
                    <div
                        key={t.step}
                        className="grid grid-cols-[52px_1fr] gap-4.5 px-7 py-6 border-b border-[#EDF0F6]"
                    >
                        <span className="font-jakarta text-[15px] font-semibold text-[#253E86] pt-0.5">
                            {t.step}
                        </span>

                        <div className="flex flex-col gap-1.5">
                            <span className="font-sora text-[17px] font-semibold">
                                {t.title}
                            </span>
                            <span className="font-sora text-[15px] leading-[165%] text-[#4A5163]">
                                {t.body}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function ThanksPage() {
    return (
        <div className="bg-[#E9ECF3] min-h-screen flex flex-col">
            <section className="relative pt-6 md:pt-10 flex-1 flex flex-col overflow-hidden">
                <Navbar />

                <Suspense fallback={null}>
                    <ThanksContent />
                </Suspense>

                <Image
                    src={"/landing-page-images/hero-bg.png"}
                    width={1000}
                    height={1000}
                    alt="background"
                    className="w-full h-full absolute bottom-0 left-0 z-0"
                />
            </section>

            <div className="w-full bg-[#10182A] py-2.5">
                <div className="flex justify-center gap-10 md:gap-20 flex-wrap px-4">
                    {marquee_text.slice(0, 4).map((text) => (
                        <span key={text} className="flex items-center gap-3.5">
                            <span className="block bg-white w-1.75 h-1.75" />
                            <span className="font-sora text-xs md:text-sm text-white whitespace-nowrap">
                                {text}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
