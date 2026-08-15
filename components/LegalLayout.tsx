"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSection = {
    id: string;
    title: string;
    body: React.ReactNode;
};

type Props = {
    title: string;
    updated: string;
    intro: React.ReactNode;
    scopeNote: React.ReactNode;
    sections: LegalSection[];
};

export default function LegalLayout({
    title,
    updated,
    intro,
    scopeNote,
    sections,
}: Props) {
    const pathname = usePathname();
    const [active, setActive] = useState(sections[0]?.id ?? "");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            const max = h.scrollHeight - h.clientHeight;
            setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const tocLink = (s: LegalSection) =>
        `flex items-baseline gap-3 font-sora text-sm py-1.5 transition-colors duration-150 ${
            active === s.id
                ? "text-[#253E86] font-medium"
                : "text-[#3A3A3A] hover:text-[#000000]"
        }`;

    return (
        <div className="bg-[#E9ECF3] min-h-screen flex flex-col">
            {/* reading progress */}
            <div className="fixed top-0 left-0 w-full h-[3px] z-50 bg-transparent">
                <div
                    className="h-full bg-[#253E86] transition-[width] duration-75"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="pt-6 md:pt-10">
                <Navbar />
            </div>

            {/* Header */}
            <header className="w-[95%] lg:w-[90%] mx-auto mt-14 md:mt-20 flex flex-col gap-5">
                <h4 className="font-sora text-sm md:text-base text-[#000000] font-normal py-2.5 px-5 border-[0.7px] border-[#000000] rounded-[20px] w-fit">
                    LEGAL
                </h4>

                <h1 className="font-jakarta text-4xl md:text-[52px] lg:text-[64px] leading-[115%] text-[#000000]">
                    {title}
                </h1>

                <div className="flex items-center gap-4 flex-wrap">
                    <p className="font-sora text-sm md:text-base text-[#3A3A3A]">
                        Last updated: {updated}
                    </p>
                    <span className="w-1.5 h-1.5 bg-[#253E86] block" />
                    <p className="font-sora text-sm md:text-base text-[#3A3A3A]">
                        {sections.length} sections
                    </p>
                </div>

                <p className="font-sora text-base md:text-lg leading-[170%] text-[#3A3A3A] max-w-3xl">
                    {intro}
                </p>

                <div className="border-l-2 border-[#253E86] bg-white/60 p-5 md:p-6 font-sora text-sm md:text-base leading-[170%] text-[#3A3A3A] max-w-3xl">
                    {scopeNote}
                </div>
            </header>

            {/* Body: sticky contents rail + sections */}
            <main className="w-[95%] lg:w-[90%] mx-auto mt-14 md:mt-20 mb-24 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
                {/* Desktop rail */}
                <nav className="hidden lg:flex flex-col gap-1 sticky top-10 border-t border-[#10182A] pt-5">
                    <p className="font-sora text-xs tracking-[0.08em] uppercase text-[#000000] font-semibold mb-3">
                        Contents
                    </p>
                    {sections.map((s, i) => (
                        <a key={s.id} href={`#${s.id}`} className={tocLink(s)}>
                            <span className="text-[#9AA0AE] tabular-nums text-xs w-5 shrink-0">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>{s.title.replace(/^\d+\.\s*/, "")}</span>
                        </a>
                    ))}
                </nav>

                {/* Mobile contents */}
                <details className="lg:hidden bg-white border border-[#D9DEE9] p-5">
                    <summary className="font-sora font-semibold text-[#000000] cursor-pointer">
                        Contents
                    </summary>
                    <div className="flex flex-col mt-3">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="font-sora text-sm text-[#253E86] py-1.5"
                            >
                                {s.title}
                            </a>
                        ))}
                    </div>
                </details>

                <div className="flex flex-col max-w-3xl">
                    {sections.map((s, i) => (
                        <section
                            key={s.id}
                            id={s.id}
                            className="flex flex-col gap-4 scroll-mt-28 pt-10 first:pt-0 pb-10 border-b border-[#C9CFDD] last:border-b-0"
                        >
                            <div className="flex items-baseline gap-4">
                                <span className="font-sora text-sm text-[#253E86] tabular-nums pt-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h2 className="font-jakarta text-2xl md:text-[32px] leading-[125%] text-[#000000]">
                                    {s.title.replace(/^\d+\.\s*/, "")}
                                </h2>
                            </div>

                            <div className="font-sora text-base md:text-lg leading-[170%] text-[#3A3A3A] flex flex-col gap-4 lg:pl-9">
                                {s.body}
                            </div>
                        </section>
                    ))}

                    {/* Cross-link */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        {pathname !== "/privacy" && (
                            <Link
                                href="/privacy"
                                className="flex-1 border border-[#10182A] p-5 font-sora hover:bg-white transition-colors duration-150"
                            >
                                <span className="block text-xs tracking-[0.08em] uppercase text-[#6B7280]">
                                    Also read
                                </span>
                                <span className="block text-lg text-[#000000] mt-1">
                                    Privacy Policy
                                </span>
                            </Link>
                        )}

                        {pathname !== "/terms" && (
                            <Link
                                href="/terms"
                                className="flex-1 border border-[#10182A] p-5 font-sora hover:bg-white transition-colors duration-150"
                            >
                                <span className="block text-xs tracking-[0.08em] uppercase text-[#6B7280]">
                                    Also read
                                </span>
                                <span className="block text-lg text-[#000000] mt-1">
                                    Terms of Service
                                </span>
                            </Link>
                        )}

                        <Link
                            href="/contact"
                            className="flex-1 bg-[#253E86] text-white p-5 font-sora hover:bg-[#1B2F68] transition-colors duration-150"
                        >
                            <span className="block text-xs tracking-[0.08em] uppercase text-white/70">
                                Questions?
                            </span>
                            <span className="block text-lg mt-1">Contact us</span>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
