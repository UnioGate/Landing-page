"use client"

import Link from "next/link"
import TrademarkIcon from "./icons/TrademarkIcon"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="px-14.25 py-10 flex flex-col md:flex-row items-center justify-between gap-7 md:gap-10 relative " >

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

            <div className="flex items-center justify-center gap-5 md:gap-10 lg:gap-14 flex-row flex-wrap ">
                {[
                    ["/contact", "Contact"],
                    ["/privacy", "Privacy"],
                    ["/terms", "Terms"],
                    ["https://expo.dev/artifacts/eas/_SRpRxq7yFt-CC8UjAs0mxK2-skNwK3foNCize1d4EM.apk", "Demo"],
                ].map(([href, label]) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-lg md:text-xl lg:text-2xl font-sora font-light hover:text-[#253E86] transition-all duration-150"
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4 flex-row " >
                <TrademarkIcon />
                <p className="text-lg  md:text-xl lg:text-2xl font-sora font-light " >2026 UnioGate</p>
            </div>
        </footer>
    )
}