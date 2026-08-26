import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollingText from "@/components/ScrollingText";
import { roles, getRole } from "@/data/careers";

export const generateStaticParams = async () =>
    roles.map((r) => ({ slug: r.slug }));

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const role = getRole(slug);
    if (!role) return { title: "Role not found · UnioGate" };
    return {
        title: `${role.title} · Careers at UnioGate`,
        description: role.blurb,
    };
}

export default async function RolePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const role = getRole(slug);
    if (!role) notFound();

    const others = roles.filter((r) => r.slug !== role.slug).slice(0, 3);

    return (
        <div className="bg-[#E9ECF3] min-h-screen flex flex-col">
            <section className="pt-6 md:pt-10">
                <Navbar />

                <div className="w-[95%] lg:w-[90%] mx-auto pt-10 md:pt-14 pb-12">
                    <Link
                        href="/careers"
                        className="font-sora text-[15px] text-[#4A5163] hover:text-[#253E86] transition-colors duration-150 inline-flex items-center gap-2"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M19 12H5m6-6-6 6 6 6"
                                stroke="currentColor"
                                strokeWidth={2.2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        All open roles
                    </Link>

                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
                        <div className="flex flex-col items-start gap-5">
                            <h1 className="font-jakarta text-4xl md:text-[52px] leading-[108%]">
                                {role.title}
                            </h1>

                            <div className="flex flex-wrap gap-2.5">
                                {[role.location, role.type, role.comp].map((chip) => (
                                    <span
                                        key={chip}
                                        className="border-[0.7px] border-[#C9CFDD] bg-white rounded-[20px] py-2 px-4 font-sora text-[13px] font-medium text-[#2A3350]"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>

                            <p className="font-sora text-lg leading-[172%] max-w-2xl">
                                {role.intro}
                            </p>
                        </div>

                        <div className="bg-white border-[0.7px] border-[#C9CFDD] rounded-[10px] p-6.5 w-full flex flex-col items-start gap-3.5 lg:sticky lg:top-8">
                            <span className="font-sora text-xs font-semibold tracking-[0.05em] uppercase text-[#4A5163]">
                                Applying
                            </span>
                            <p className="font-sora text-[15px] leading-[168%] text-[#4A5163]">
                                One short form — about five minutes. We read every submission and
                                reply either way within a week.
                            </p>
                            <a
                                href={role.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#253E86] text-white font-sora text-base font-semibold py-4 px-7 rounded-[10px] flex items-center gap-2.5 hover:bg-[#1B2F68] transition-colors duration-150 w-full justify-center"
                            >
                                Apply for this role
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M7 17 17 7M9 7h8v8"
                                        stroke="white"
                                        strokeWidth={2.2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <span className="font-sora text-[13px] text-[#4A5163]">
                                Questions first?{" "}
                                <a
                                    href={`mailto:careers@uniogate.app?subject=${encodeURIComponent(role.title)}`}
                                    className="underline hover:text-[#253E86]"
                                >
                                    careers@uniogate.app
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[95%] lg:w-[90%] mx-auto pb-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
                <div className="flex flex-col gap-10">
                    {[
                        { heading: "What you'd own", items: role.own },
                        { heading: "What we're looking for", items: role.looking },
                        { heading: "Nice to have", items: role.nice },
                    ].map((block) => (
                        <div key={block.heading}>
                            <h2 className="font-jakarta text-2xl mb-3.5 pb-3.5 border-b-[0.7px] border-[#C9CFDD]">
                                {block.heading}
                            </h2>
                            <ul className="flex flex-col gap-3">
                                {block.items.map((item) => (
                                    <li key={item} className="grid grid-cols-[8px_1fr] gap-3.5">
                                        <span className="block w-2 h-2 rounded-full bg-[#253E86] mt-2.5" />
                                        <span className="font-sora text-[16px] leading-[170%] text-[#2A3350]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {others.length > 0 ? (
                    <div className="bg-white border-[0.7px] border-[#C9CFDD] rounded-[10px] p-6.5 w-full">
                        <span className="font-sora text-xs font-semibold tracking-[0.05em] uppercase text-[#4A5163]">
                            Other open roles
                        </span>
                        <div className="flex flex-col mt-2">
                            {others.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/careers/${r.slug}`}
                                    className="group flex flex-col gap-1 py-4 border-b-[0.7px] border-[#EDF0F6] last:border-b-0"
                                >
                                    <span className="font-jakarta text-[17px] font-semibold group-hover:text-[#253E86] transition-colors duration-150">
                                        {r.title}
                                    </span>
                                    <span className="font-sora text-[14px] text-[#4A5163]">
                                        {r.location} · {r.type}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white border-[0.7px] border-[#C9CFDD] rounded-[10px] p-6.5 w-full flex flex-col items-start gap-2.5">
                        <span className="font-sora text-xs font-semibold tracking-[0.05em] uppercase text-[#4A5163]">
                            Not this one?
                        </span>
                        <p className="font-sora text-[15px] leading-[168%] text-[#4A5163]">
                            It&apos;s the only role we&apos;re hiring for right now. Send us the
                            thing you built and the problem you want to work on — we read every one.
                        </p>
                        <a
                            href="mailto:careers@uniogate.app"
                            className="font-sora text-[15px] font-semibold underline hover:text-[#253E86] transition-colors duration-150"
                        >
                            careers@uniogate.app
                        </a>
                    </div>
                )}
            </section>

            <ScrollingText />

            <Footer />
        </div>
    );
}
