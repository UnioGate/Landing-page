"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { toast } from "react-toastify";

import Navbar from "@/components/Navbar";
import ScrollingText from "@/components/ScrollingText";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import PhoneIcon from "@/components/icons/PhoneIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import LinkIcon from "@/components/icons/LinkIcon";

const topics = [
    "Getting set up",
    "Pricing",
    "Partnership",
    "Press",
    "Something else",
];

const channels = [
    {
        icon: <PhoneIcon />,
        title: "Merchant support",
        body: "Already on the waitlist or piloting the terminal? Reach the people who set it up.",
        href: "mailto:support@uniogate.com",
        link: "support@uniogate.com",
    },
    {
        icon: <BuildingIcon />,
        title: "Partnerships & integrations",
        body: "PSPs, POS vendors and stablecoin issuers — we're building the merchant side of the rails.",
        href: "mailto:partners@uniogate.com",
        link: "partners@uniogate.com",
    },
    {
        icon: <LinkIcon />,
        title: "Follow the build",
        body: "Product notes, launch dates and beta invitations, posted as they happen.",
        href: "https://x.com/uniogateapp",
        link: "@uniogateapp on X",
    },
];

const facts = [
    { value: "< 1 day", label: "REPLY TIME" },
    { value: "Q4’ 26", label: "TARGET LAUNCH" },
    { value: "Beta", label: "EARLY ACCESS" },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
};

export default function Contact() {
    const [topic, setTopic] = useState(topics[0]);
    const [form, setForm] = useState({
        name: "",
        business: "",
        email: "",
        volume: "Under $10k",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const update =
        (key: keyof typeof form) =>
        (
            e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >
        ) =>
            setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast.error("Please fill in your name, email and message");
            return;
        }

        setIsSubmitting(true);

        try {
            // TODO: point this at your contact handler (Supabase table or /api route)
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, topic }),
            });

            if (!res.ok) throw new Error("Request failed");

            setSent(true);
            toast.success("Message sent — we'll be in touch.");
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please email hello@uniogate.com.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const labelClass =
        "text-sm font-medium tracking-[0.04em] uppercase text-[#10182A] font-sora";
    const inputClass =
        "border-[0.7px] border-[#5C5050] rounded-[10px] p-3.5 font-sora text-base text-[#10182A] bg-white outline-0 focus:outline-0 focus:border-[#253E86]";

    return (
        <div className="bg-[#E9ECF3]">
            {/* Hero */}
            <section className="w-full relative pt-6 md:pt-10 flex flex-col overflow-hidden">
                <Navbar />

                <div className="relative z-10 w-[95%] lg:w-[90%] mx-auto max-w-4xl flex flex-col items-start gap-5 py-14 md:py-18">
                    <h4 className="font-sora text-sm md:text-base font-normal py-2.5 px-5 border-[0.7px] border-[#000000] rounded-[20px] w-fit">
                        TALK TO THE UNIOGATE TEAM
                    </h4>

                    <h1 className="text-5xl md:text-[56px] lg:text-[72px] leading-[120%] md:leading-[110%] font-jakarta text-[#000000]">
                        Questions about
                        <br />
                        taking crypto
                        <br />
                        at your counter?
                    </h1>

                    <p className="font-sora text-lg md:text-xl text-[#000000] max-w-2xl">
                        Whether you run one store or two hundred, tell us what you sell and
                        how your customers pay. We reply to every merchant enquiry within
                        one business day.
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

            <ScrollingText />

            {/* Form + channels */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
                <div className="px-6 md:px-15.25 py-10 md:py-15 border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-[#10182A]">
                    <h2 className="font-jakarta text-3xl md:text-4xl font-medium mb-2">
                        Send us a message
                    </h2>
                    <p className="font-sora text-base text-[#4A5163] mb-9">
                        All fields required unless marked optional.
                    </p>

                    {sent ? (
                        <div className="bg-[#253E86] text-white p-10 rounded-[10px] flex flex-col items-start gap-3.5 max-w-155">
                            <h3 className="font-jakarta text-2xl md:text-3xl font-medium">
                                Message received.
                            </h3>
                            <p className="font-sora text-lg font-light max-w-md">
                                Thanks — we&apos;ve logged your enquiry and a member of the team
                                will reply to your inbox within one business day.
                            </p>
                            <button
                                type="button"
                                onClick={() => setSent(false)}
                                className="mt-2 bg-white text-[#253E86] py-3 px-5.5 rounded-[10px] font-sora text-[15px] font-semibold cursor-pointer"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6.5 max-w-155"
                        >
                            <div className="flex flex-col gap-2.5">
                                <span className={labelClass}>
                                    What are you reaching out about?
                                </span>
                                <div className="flex flex-wrap gap-2.5">
                                    {topics.map((t) => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setTopic(t)}
                                            className={`py-2.75 px-4.5 rounded-[20px] font-sora text-[15px] cursor-pointer border-[0.7px] border-[#5C5050] transition-colors duration-150 ${
                                                topic === t
                                                    ? "bg-[#253E86] text-white"
                                                    : "bg-transparent text-[#10182A] hover:bg-[#253E86]/10"
                                            }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2.5">
                                    <label htmlFor="name" className={labelClass}>
                                        Your name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={form.name}
                                        onChange={update("name")}
                                        placeholder="Ada Nwosu"
                                        className={inputClass}
                                    />
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label htmlFor="business" className={labelClass}>
                                        Business
                                    </label>
                                    <input
                                        id="business"
                                        type="text"
                                        value={form.business}
                                        onChange={update("business")}
                                        placeholder="yourbusiness.com"
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2.5">
                                    <label htmlFor="email" className={labelClass}>
                                        Work email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={form.email}
                                        onChange={update("email")}
                                        placeholder="you@yourbusiness.com"
                                        className={inputClass}
                                    />
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label htmlFor="volume" className={labelClass}>
                                        Monthly volume{" "}
                                        <span className="normal-case tracking-normal font-normal text-[#6B7280]">
                                            (optional)
                                        </span>
                                    </label>
                                    <select
                                        id="volume"
                                        value={form.volume}
                                        onChange={update("volume")}
                                        className={`${inputClass} appearance-none`}
                                    >
                                        <option>Under $10k</option>
                                        <option>$10k – $50k</option>
                                        <option>$50k – $250k</option>
                                        <option>Over $250k</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="message" className={labelClass}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={update("message")}
                                    placeholder="Tell us what you sell, where you operate, and how your customers want to pay."
                                    className={`${inputClass} resize-y`}
                                />
                            </div>

                            <div className="flex items-center gap-5 flex-wrap">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#253E86] text-white font-sora font-semibold text-base py-3.75 px-7 rounded-[10px] cursor-pointer"
                                >
                                    {isSubmitting ? <Loader color="#ffffff" /> : "Send message"}
                                </button>

                                <span className="font-sora text-sm text-[#4A5163]">
                                    Or email us directly at{" "}
                                    <a
                                        href="mailto:hello@uniogate.com"
                                        className="underline hover:text-[#253E86]"
                                    >
                                        hello@uniogate.com
                                    </a>
                                </span>
                            </div>
                        </form>
                    )}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="px-6 md:px-15.25 py-10 md:py-15 flex flex-col gap-9"
                >
                    {channels.map((ch) => (
                        <motion.div
                            key={ch.title}
                            variants={cardVariants}
                            className="flex flex-col items-start gap-3"
                        >
                            <span className="bg-[#253E86] rounded-[20px] size-15 flex items-center justify-center shrink-0">
                                {ch.icon}
                            </span>

                            <h3 className="font-sora font-semibold text-xl md:text-2xl text-[#000000]">
                                {ch.title}
                            </h3>

                            <p className="font-sora text-base md:text-lg text-[#10182A] max-w-md">
                                {ch.body}
                            </p>

                            <a
                                href={ch.href}
                                className="font-sora text-base md:text-lg font-medium text-[#253E86] border-b border-[#253E86] hover:text-[#10182A] hover:border-[#10182A] transition-all duration-150"
                            >
                                {ch.link}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Statement */}
            <section className="w-full bg-[#253E86] py-[68px] flex items-center justify-center flex-col gap-10 px-4 md:px-16 text-[#ffffff]">
                <motion.h2
                    initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-jakarta text-3xl md:text-5xl lg:text-[60px] font-normal w-[95%] md:w-[80%] text-center"
                >
                    &quot;Tell us how your customers pay. We&apos;ll handle the rest.&quot;
                </motion.h2>

                <motion.h4
                    initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-light font-sora text-xl lg:text-2xl"
                >
                    UNIOGATE - coming 2026
                </motion.h4>
            </section>

            {/* Facts */}
            <section className="w-full grid grid-cols-1 md:grid-cols-3">
                {facts.map((f, i) => (
                    <div
                        key={f.label}
                        className="w-full h-full flex flex-col items-center justify-center py-[55px] gap-4 md:gap-8 border-b-[1] border-b-[#000000] md:border-r-[0.7] border-r-[#000000]"
                    >
                        <motion.h4
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-[60px] font-jakarta text-[#000000]"
                        >
                            {f.value}
                        </motion.h4>

                        <h5 className="text-base md:text-lg lg:text-2xl text-[#000000] font-light font-sora">
                            {f.label}
                        </h5>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
