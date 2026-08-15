"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
    {
        title: "The vendor enters the sale amount",
        body: "Just like ringing up any sale — enter the price in Naira. No crypto knowledge required to take this step.",
        metaLabel: "Required of the vendor",
        metaValue: "Nothing new",
    },
    {
        title: "The customer pays their way",
        body: "The customer chooses how to pay: scan a QR code and pay with USDT, USDC, or CNGN from any crypto wallet, or pay by card, bank transfer, or USSD — whichever they already have on hand.",
        metaLabel: "Methods accepted",
        metaValue: "Crypto + fiat",
    },
    {
        title: "Payment confirms in seconds",
        body: "Crypto payments confirm on-chain in seconds. Fiat payments confirm through standard payment processing. Either way, the vendor sees confirmation immediately — no waiting, no manual checking.",
        metaLabel: "Confirmation",
        metaValue: "Seconds",
    },
    {
        title: "The vendor gets paid, same day",
        body: "Crypto is automatically converted, and funds settle to the vendor's bank account the same day. Vendors who'd rather hold onto their crypto can choose to withdraw in crypto instead — their choice, not ours.",
        metaLabel: "Settlement",
        metaValue: "Same day",
    },
];

export default function HowItWorksPage() {
    const [step, setStep] = useState(0);
    const active = steps[step];

    return (
        <div className="bg-[#E9ECF3]">
            {/* Hero */}
            <section className="relative pt-6 md:pt-10 overflow-hidden">
                <Navbar />

                <div className="relative z-10 w-[95%] lg:w-[90%] mx-auto max-w-4xl py-14 md:py-18 flex flex-col items-start gap-5">
                    <h4 className="font-sora text-sm md:text-base py-2.5 px-5 border-[0.7px] border-[#000000] rounded-[20px] w-fit">
                        HOW IT WORKS
                    </h4>

                    <h1 className="font-jakarta text-5xl md:text-[56px] lg:text-[72px] leading-[110%]">
                        One terminal.
                        <br />
                        Every payment.
                    </h1>

                    <p className="font-sora text-lg md:text-xl max-w-2xl">
                        UnioGate lets a vendor accept crypto and fiat side by side, and get
                        paid the same day — without asking customers to convert anything
                        first, and without the vendor doing anything they don&apos;t already
                        know how to do.
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

            {/* Problem */}
            <section className="w-full bg-[#10182A] text-white py-16 md:py-20">
                <div className="w-[95%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-16 items-start">
                    <h4 className="font-sora text-sm tracking-[0.08em] uppercase opacity-60">
                        The problem we&apos;re solving
                    </h4>

                    <p className="font-jakarta text-2xl md:text-3xl lg:text-4xl leading-[140%]">
                        Millions of people now hold stablecoins like USDT and USDC. But walk
                        into a store and try to pay with it, and you hit a wall — no vendor
                        can accept it. You&apos;re forced to convert to Naira first, just to
                        buy something as simple as a bottle of water.{" "}
                        <span className="text-[#8FA6E8]">UnioGate closes that gap.</span>
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="w-[95%] lg:w-[90%] mx-auto py-16 md:py-20">
                <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-sora text-sm text-[#253E86]">01</span>
                    <h2 className="font-jakarta text-3xl md:text-[40px] font-normal">
                        From sale to settlement, in four steps
                    </h2>
                </div>
                <p className="font-sora text-base md:text-[17px] text-[#4A5163] ml-8 mb-12">
                    Click a step to walk through it.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C9CFDD] border border-[#C9CFDD]">
                    {steps.map((s, i) => {
                        const on = step === i;
                        return (
                            <button
                                key={s.title}
                                type="button"
                                onClick={() => setStep(i)}
                                className={`text-left cursor-pointer px-6 pt-7 pb-8 flex flex-col gap-3.5 font-sora transition-colors duration-200 ${
                                    on ? "bg-[#253E86] text-white" : "bg-[#E9ECF3] text-[#10182A]"
                                }`}
                            >
                                <span
                                    className={`font-jakarta text-[44px] leading-none font-medium ${
                                        on ? "text-[#8FA6E8]" : "text-[#253E86]"
                                    }`}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <span className="text-[19px] font-semibold leading-[135%]">
                                    {s.title}
                                </span>

                                <motion.span
                                    initial={false}
                                    animate={{ width: on ? "100%" : 28 }}
                                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                                    className={`h-0.5 block ${on ? "bg-[#8FA6E8]" : "bg-[#253E86]"}`}
                                />
                            </button>
                        );
                    })}
                </div>

                <div className="border border-t-0 border-[#C9CFDD] bg-white px-8 md:px-11 py-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">
                    <motion.div
                        key={active.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex flex-col gap-3.5"
                    >
                        <h3 className="font-jakarta text-2xl md:text-[30px] font-medium">
                            {active.title}
                        </h3>
                        <p className="font-sora text-lg md:text-[19px] leading-[170%] text-[#3A3A3A] max-w-2xl">
                            {active.body}
                        </p>
                    </motion.div>

                    <div className="border-l-2 border-[#253E86] pl-5 flex flex-col gap-1.5">
                        <span className="font-sora text-xs tracking-[0.08em] uppercase text-[#6B7280]">
                            {active.metaLabel}
                        </span>
                        <span className="font-jakarta text-2xl md:text-[28px] font-medium text-[#253E86]">
                            {active.metaValue}
                        </span>
                    </div>
                </div>
            </section>

            {/* Audiences */}
            <section className="w-[95%] lg:w-[90%] mx-auto pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C9CFDD] border border-[#C9CFDD]">
                <div className="bg-[#E9ECF3] px-8 md:px-11 py-12 flex flex-col gap-4">
                    <h4 className="font-sora text-[13px] tracking-[0.08em] uppercase text-[#253E86]">
                        For customers
                    </h4>
                    <h3 className="font-jakarta text-2xl md:text-[30px] leading-[130%]">
                        Spend what you already hold
                    </h3>
                    <p className="font-sora text-lg leading-[170%] text-[#3A3A3A]">
                        Spend the stablecoins you already hold, at a real business, in
                        seconds — the same way you&apos;d tap a card. No app to download, no
                        account to create, no converting to Naira first.
                    </p>
                </div>

                <div className="bg-[#E9ECF3] px-8 md:px-11 py-12 flex flex-col gap-4">
                    <h4 className="font-sora text-[13px] tracking-[0.08em] uppercase text-[#253E86]">
                        For vendors
                    </h4>
                    <h3 className="font-jakarta text-2xl md:text-[30px] leading-[130%]">
                        Stop losing sales you could have taken
                    </h3>
                    <p className="font-sora text-lg leading-[170%] text-[#3A3A3A]">
                        Accept every payment method through one terminal, and get Naira in
                        your bank account the same day — or hold crypto if you&apos;d rather.
                    </p>
                </div>
            </section>

            {/* Statement */}
            <section className="w-full bg-[#253E86] py-[68px] flex flex-col items-center gap-8 px-4 md:px-16 text-white">
                <h2 className="font-jakarta text-3xl md:text-5xl lg:text-[56px] font-normal w-[95%] md:w-[80%] text-center leading-[115%]">
                    &quot;Your store just became the smartest place to spend crypto.&quot;
                </h2>

                <Link
                    href="/contact"
                    className="bg-white text-[#253E86] py-3.75 px-7 rounded-[10px] font-sora text-base font-semibold hover:bg-[#E9ECF3] transition-colors duration-150"
                >
                    Talk to us
                </Link>
            </section>

            <Footer />
        </div>
    );
}
