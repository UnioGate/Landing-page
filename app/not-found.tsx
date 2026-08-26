"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollingText from "@/components/ScrollingText";

const rise = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.64, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function NotFound() {
    return (
        <div className="bg-[#E9ECF3] min-h-screen flex flex-col">
            <section className="pt-6 md:pt-10 flex-1 flex flex-col">
                <Navbar />

                <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-24 px-6">
                    <motion.div
                        {...rise(0)}
                        className="font-jakarta text-[90px] md:text-[130px] lg:text-[150px] font-medium leading-none tracking-[-0.04em] text-[#253E86]"
                    >
                        404
                    </motion.div>

                    <motion.h1
                        {...rise(0.09)}
                        className="font-jakarta text-[30px] md:text-[38px] lg:text-[44px] font-normal leading-[120%]"
                    >
                        Nothing at this address.
                    </motion.h1>

                    <motion.p
                        {...rise(0.17)}
                        className="font-sora text-base md:text-[19px] leading-[170%] text-[#4A5163] font-light max-w-[560px] text-pretty"
                    >
                        The link is broken or the page has moved. Take the terminal back to the
                        front desk.
                    </motion.p>

                    <motion.div
                        {...rise(0.25)}
                        className="flex gap-3 flex-wrap justify-center"
                    >
                        <Link
                            href="/"
                            className="bg-[#253E86] hover:bg-[#1B2F68] transition-colors text-white py-3.5 px-7 rounded-[10px] font-sora text-base font-semibold"
                        >
                            Back to home
                        </Link>
                        <Link
                            href="/contact"
                            className="border-[0.7px] border-[#10182A] hover:bg-[#DDE3F2] transition-colors text-[#10182A] py-3.5 px-7 rounded-[10px] font-sora text-base font-semibold"
                        >
                            Report a broken link
                        </Link>
                    </motion.div>
                </div>

            </section>

            <ScrollingText />

            <Footer />
        </div>
    );
}
