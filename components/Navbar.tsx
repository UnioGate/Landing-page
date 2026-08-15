"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className=" w-[95%] md:w-[90%] flex items-center justify-between gap-6 lg:gap-10 py-4 px-4.5 bg-[#FFFFFF4D] rounded-[40px] mx-auto relative z-20 " >
            <Link href={"/"}>
                <Image src={"/logo/logo.svg"} alt="logo" width={163} height={39} className="w-25 md:w-40.75 " />
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-9 " >
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`font-sora text-[15px] transition-colors duration-150 hover:text-[#253E86] ${pathname === href ? "text-[#253E86] font-medium" : "text-[#10182A]"
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-3 " >
                <div className="bg-[#253E86] text-[#FFFFFF] py-2 md:py-2.5 px-3 md:px-5 rounded-[20px] text-sm md:text-[15px] font-sora text-center " >
                    Coming soon
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="md:hidden flex flex-col items-center justify-center gap-1.25 size-9 rounded-full cursor-pointer"
                >
                    <span className={`block h-[1.5px] w-4.5 bg-[#10182A] transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                    <span className={`block h-[1.5px] w-4.5 bg-[#10182A] transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:hidden absolute top-[calc(100%+8px)] right-0 min-w-45 bg-white rounded-[20px] p-3 flex flex-col shadow-lg"
                    >
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`font-sora text-[15px] py-2.5 px-4 rounded-[15px] transition-colors duration-150 hover:bg-[#E9ECF3] ${pathname === href ? "text-[#253E86] font-medium" : "text-[#10182A]"
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )

}
