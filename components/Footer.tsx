"use client"

import Link from "next/link"
import TrademarkIcon from "./icons/TrademarkIcon"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="px-5 min-[360px]:px-6 sm:px-10 md:px-14.25 py-9 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 relative " >

            <motion.span
                initial={{
                    width: "100%"
                }}
                whileInView={{
                    width: 0
                }}

                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0,
                }}
                viewport={{ once: true }}
                className="absolute top-0 left-0  h-full  backdrop-blur-xl  " />

            <div className="w-full md:w-auto flex items-center justify-between md:justify-center gap-2 min-[360px]:gap-3 sm:gap-6 md:gap-10 lg:gap-14 flex-row ">
                {[
                    ["/contact", "Contact"],
                    ["/careers", "Careers"],
                    ["/privacy", "Privacy"],
                    ["/terms", "Terms"],
                    ["https://expo.dev/artifacts/eas/_SRpRxq7yFt-CC8UjAs0mxK2-skNwK3foNCize1d4EM.apk", "Demo"],
                ].map(([href, label]) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-[13px] min-[360px]:text-[15px] sm:text-lg md:text-xl lg:text-2xl font-sora font-light whitespace-nowrap hover:text-[#253E86] transition-all duration-150"
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4 flex-row " >
                <TrademarkIcon />
                <p className="text-base md:text-xl lg:text-2xl font-sora font-light whitespace-nowrap " >2026 UnioGate</p>
            </div>
        </footer>
    )
}