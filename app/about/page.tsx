"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Member = {
    id: string;
    name: string;
    role: string;
    photo?: string;
    github?: string;
    /** Every member shows the same two links: X, then LinkedIn. */
    x: string;
    linkedin: string;
};

const team: Member[] = [
    {
        id: "chidile",
        name: "Chidile Ozoemena",
        role: "Founder & CEO",
        photo: "https://raw.githubusercontent.com/AfroTechBoss/images/main/4.png",
        x: "https://x.com/0xAfroTechBoss",
        linkedin: "https://www.linkedin.com/in/chidileozoemena/",
    },
    {
        id: "daniel",
        name: "Daniel Nwachukwu",
        role: "Co-Founder & CTO",
        photo: "https://raw.githubusercontent.com/AfroTechBoss/images/main/1.png",
        x: "https://x.com/dannyclassi_c",
        linkedin: "https://www.linkedin.com/in/devdanny0",
    },
    {
        id: "chinedu",
        name: "Chinedu Okeke",
        role: "Software Developer",
        photo: "https://raw.githubusercontent.com/AfroTechBoss/images/main/2.png",
        x: "https://x.com/chisco_JS",
        linkedin: "https://www.linkedin.com/in/chinedu-emmanuel-okeke-4080b8292",
    },
    {
        id: "amara",
        name: "Amara Omyekachi",
        role: "UI/UX Lead",
        x: "#",
        linkedin: "https://www.linkedin.com/in/omyekachi-amarachi-57959630a",
    },
    {
        id: "onyedikachi",
        name: "Onyedikachi Ike",
        role: "Brand Designer & SMM",
        x: "#",
        linkedin: "https://linkedin.com/in/onyedikachi-ike",
    },
    {
        id: "chigozie",
        name: "Chigozie Allwell",
        role: "Graphic Designer",
        photo: "https://raw.githubusercontent.com/AfroTechBoss/images/main/3.png",
        x: "#",
        linkedin: "#",
    },
];

const facts = [
    { value: "6", label: "PEOPLE" },
    { value: "Lagos", label: "BASED IN" },
    { value: "Q4’ 26", label: "TARGET LAUNCH" },
];

function MemberCard({ member }: { member: Member }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            tabIndex={0}
            className="relative bg-[#E9ECF3] overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#253E86]"
        >
            <div className="relative w-full aspect-square grayscale bg-[#D8DCE6]">
                {member.photo ? (
                    <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                ) : (
                    <span className="absolute inset-0 flex items-center justify-center font-jakarta text-6xl text-[#AEB5C6]">
                        {member.name.charAt(0)}
                    </span>
                )}
            </div>

            <div className="px-5.5 pt-5 pb-6 flex flex-col gap-1">
                <h3 className="font-jakarta text-2xl font-medium text-[#000000]">
                    {member.name}
                </h3>
                <p className="font-sora text-[15px] text-[#4A5163]">{member.role}</p>
            </div>

            <motion.div
                initial={false}
                animate={{ y: hovered ? "0%" : "100%" }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 bottom-0 bg-[#253E86] text-white px-5.5 py-6.5 flex flex-col gap-4"
            >
                <motion.div
                    initial={false}
                    animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
                    transition={{ duration: 0.3, delay: hovered ? 0.12 : 0 }}
                    className="flex gap-2.5 flex-wrap"
                >
                    {[
                        { label: "X", href: member.x },
                        { label: "LinkedIn", href: member.linkedin },
                        ...(member.github ? [{ label: "GitHub", href: member.github }] : []),
                    ].map((l) =>
                        l.href === "#" ? (
                            <span
                                key={l.label}
                                aria-disabled
                                className="bg-white/60 text-[#253E86] py-2.25 px-4 rounded-[20px] font-sora text-sm font-semibold cursor-default"
                            >
                                {l.label}
                            </span>
                        ) : (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="bg-white text-[#253E86] py-2.25 px-4 rounded-[20px] font-sora text-sm font-semibold hover:bg-[#E9ECF3] transition-colors duration-150"
                            >
                                {l.label}
                            </a>
                        )
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="bg-[#E9ECF3]">
            {/* Hero */}
            <section className="relative pt-6 md:pt-10 overflow-hidden">
                <Navbar />

                <div className="relative z-10 w-[95%] lg:w-[90%] mx-auto max-w-4xl py-14 md:py-18 flex flex-col items-start gap-5">
                    <h4 className="font-sora text-sm md:text-base py-2.5 px-5 border-[0.7px] border-[#000000] rounded-[20px] w-fit">
                        THE PEOPLE BUILDING IT
                    </h4>

                    <h1 className="font-jakarta text-5xl md:text-[56px] lg:text-[72px] leading-[110%]">
                        Six people,
                        <br />
                        one terminal.
                    </h1>

                    <p className="font-sora text-lg md:text-xl max-w-2xl">
                        UnioGate started with a gap our founder kept running into: millions
                        of people hold stablecoins, and no vendor can take them. We&apos;re
                        building the merchant side of that economy from Lagos.
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

            {/* Team */}
            <section className="w-[95%] lg:w-[90%] mx-auto py-16 md:py-20 border-t border-[#10182A]">
                <div className="flex items-baseline gap-4 mb-10">
                    <span className="font-sora text-sm text-[#253E86]">01</span>
                    <h2 className="font-jakarta text-3xl md:text-[40px] font-normal">
                        The team
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9CFDD] border border-[#C9CFDD]">
                    {team.map((m) => (
                        <MemberCard key={m.id} member={m} />
                    ))}
                </div>

                <p className="font-sora text-sm text-[#6B7280] mt-5">
                    Hover a card to jump to their profiles.
                </p>
            </section>

            {/* Origin */}
            <section className="w-full bg-[#253E86] py-16 md:py-20 text-white">
                <div className="w-[95%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div>
                        <h4 className="font-sora text-sm tracking-[0.08em] uppercase opacity-70 mb-5">
                            Where it started
                        </h4>
                        <h2 className="font-jakarta text-3xl md:text-[44px] leading-[120%] font-normal">
                            &quot;You shouldn&apos;t have to convert to Naira just to buy a
                            bottle of water.&quot;
                        </h2>
                    </div>

                    <div className="flex flex-col gap-5 font-sora text-lg leading-[170%] font-light">
                        <p>
                            Chidile found the gap while interning at Uglycash — customers
                            holding stablecoins, vendors with no way to take them. Everything
                            in UnioGate follows from closing it.
                        </p>
                        <p>
                            The team he assembled has shipped smart contracts, run community
                            and business development at crypto companies, and designed for
                            startups across the continent. Nobody here is building for
                            traders.
                        </p>
                    </div>
                </div>
            </section>

            {/* Facts */}
            <section className="w-full grid grid-cols-1 md:grid-cols-3">
                {facts.map((f) => (
                    <div
                        key={f.label}
                        className="w-full flex flex-col items-center justify-center py-[55px] gap-4 md:gap-8 border-b-[1] border-b-[#000000] md:border-r-[0.7] border-r-[#000000]"
                    >
                        <h4 className="font-jakarta text-3xl md:text-4xl lg:text-[56px]">
                            {f.value}
                        </h4>
                        <h5 className="font-sora text-base md:text-lg lg:text-xl font-light tracking-[0.04em]">
                            {f.label}
                        </h5>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
