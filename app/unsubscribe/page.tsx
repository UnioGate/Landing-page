"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { supabase } from "@/config/supabaseClient";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";

type Status = "idle" | "done" | "notfound";

const GENERIC_ERROR =
    "We couldn't do that just now. Please try again in a moment, or email support@uniogate.com and we'll take you off the list.";

function UnsubscribeCard() {
    const searchParams = useSearchParams();
    const [email, setEmail] = useState(searchParams.get("email") ?? "");
    const [status, setStatus] = useState<Status>("idle");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [confirmed, setConfirmed] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const typed = email.trim();
        if (!typed) {
            setError("Please enter your email address.");
            return;
        }

        setIsSubmitting(true);
        setStatus("idle");
        setError("");

        try {
            // The waitlist form stores the address as typed, so match both the
            // literal value and its lowercased form rather than assuming either.
            const { data: matches, error: fetchError } = await supabase
                .from("waitlist")
                .select("id, email, unsubscribed")
                .in("email", Array.from(new Set([typed, typed.toLowerCase()])))
                .limit(1);

            // Database errors are for the logs, never for the visitor.
            // Spread the fields — a PostgrestError logs as `{}` on its own.
            if (fetchError) {
                console.error("unsubscribe lookup failed", {
                    message: fetchError.message,
                    code: fetchError.code,
                    details: fetchError.details,
                    hint: fetchError.hint,
                });
                setError(GENERIC_ERROR);
                return;
            }

            const existing = matches?.[0];

            if (!existing) {
                setStatus("notfound");
                setError("Not on our list. Check the spelling and try again.");
                return;
            }

            if (existing.unsubscribed) {
                setConfirmed(existing.email);
                setStatus("done");
                return;
            }

            const { error: updateError } = await supabase
                .from("waitlist")
                .update({ unsubscribed: true, unsubscribed_at: new Date().toISOString() })
                .eq("id", existing.id);

            if (updateError) {
                console.error("unsubscribe update failed", {
                    message: updateError.message,
                    code: updateError.code,
                    details: updateError.details,
                    hint: updateError.hint,
                });
                setError(GENERIC_ERROR);
                return;
            }

            setConfirmed(existing.email);
            setStatus("done");
            toast.success("You've been unsubscribed.");
        } catch (err) {
            console.error(err);
            setError(GENERIC_ERROR);
        } finally {
            setIsSubmitting(false);
        }
    };

    const card =
        "w-full max-w-lg bg-white border-[0.7px] border-[#CBD2E4] rounded-[20px] " +
        "px-7 py-8 md:px-8 flex flex-col gap-[18px] shadow-[0_4px_24px_rgba(37,62,134,0.07)]";
    const eyebrow = "font-jakarta font-bold text-sm tracking-[0.02em] text-[#253E86]";
    const heading = "font-jakarta font-bold text-[28px] md:text-[30px] leading-[118%] text-black";
    const copy = "font-sora text-[15px] leading-[26px] text-[#5C5050]";
    const primary =
        "font-sora font-semibold text-[15px] text-white bg-[#253E86] rounded-[10px] " +
        "py-3.25 text-center cursor-pointer disabled:opacity-60 flex items-center justify-center";
    const fieldLabel = "font-sora text-xs tracking-[0.1em] uppercase text-[#5C5050]";

    if (status === "done") {
        return (
            <div className={card}>
                <div className="flex flex-col gap-3">
                    <p className={eyebrow}>UNIOGATE</p>
                    <h1 className={heading}>You&apos;re unsubscribed</h1>
                    <p className={copy}>
                        We&apos;ve removed{" "}
                        <strong className="text-black font-semibold">{confirmed}</strong> from UnioGate
                        emails. It can take a few minutes for anything already sending to stop.
                    </p>
                </div>

                <div className="bg-[#EEF0F7] border-l-4 border-[#253E86] rounded-r-[10px] px-4.5 py-4 font-sora text-sm leading-6 text-[#5C5050]">
                    Rejoin any time from the waitlist form on uniogate.com — nothing else changes.
                </div>

                <div className="flex flex-col gap-2.5">
                    <Link href="/" className={primary}>
                        Back to uniogate.com
                    </Link>
                    <p className="font-sora text-sm text-center text-[#5C5050]">
                        Unsubscribed by mistake?{" "}
                        <Link href="/#waitlist" className="text-[#253E86] underline">
                            Resubscribe
                        </Link>
                    </p>
                </div>
            </div>
        );
    }

    const notFound = status === "notfound";

    return (
        <form onSubmit={handleSubmit} className={card}>
            <div className="flex flex-col gap-3">
                <p className={eyebrow}>UNIOGATE</p>
                <h1 className={heading}>
                    {notFound ? "We couldn't find that email" : "Unsubscribe from updates"}
                </h1>
                <p className={copy}>
                    {notFound
                        ? "There's no UnioGate subscription for that address — it may already be removed, or typed differently."
                        : "You'll stop receiving waitlist and product emails from UnioGate. Your spot on the waitlist stays as it is."}
                </p>
            </div>

            <div className="flex flex-col gap-1.75">
                <label htmlFor="unsub-email" className={fieldLabel}>
                    Email address
                </label>
                <input
                    id="unsub-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (notFound) setStatus("idle");
                        if (error) setError("");
                    }}
                    placeholder="you@yourbusiness.com"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "unsub-email-error" : undefined}
                    className={`w-full rounded-[10px] border-[0.7px] px-3 py-3 font-sora text-[15px] text-black outline-0 focus:outline-0 ${
                        error ? "border-[#B4453B]" : "border-[#5C5050]"
                    }`}
                />
                {error ? (
                    <p
                        id="unsub-email-error"
                        role="alert"
                        className="font-sora text-[13px] leading-5 text-[#B4453B]"
                    >
                        {error}
                    </p>
                ) : null}
            </div>

            <div className="flex flex-col gap-2.5">
                <button type="submit" disabled={isSubmitting} className={primary}>
                    {isSubmitting ? (
                        <Loader color="#ffffff" />
                    ) : notFound ? (
                        "Try again"
                    ) : (
                        "Unsubscribe me"
                    )}
                </button>
                <p className="font-sora text-sm text-center text-[#5C5050]">
                    {notFound ? (
                        <>
                            Still stuck? Write to{" "}
                            <a href="mailto:support@uniogate.com" className="text-[#253E86] underline">
                                support@uniogate.com
                            </a>
                        </>
                    ) : (
                        <>
                            Changed your mind?{" "}
                            <Link href="/" className="text-[#253E86] underline">
                                Keep me subscribed
                            </Link>
                        </>
                    )}
                </p>
            </div>
        </form>
    );
}

export default function UnsubscribePage() {
    return (
        <main className="min-h-screen w-full bg-[#E9ECF3] flex items-center justify-center px-5 py-14">
            <Suspense fallback={null}>
                <UnsubscribeCard />
            </Suspense>
        </main>
    );
}
