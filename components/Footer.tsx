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
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0,
                }}
                viewport={{ once: true }}
                className="absolute top-0 left-0  h-full  backdrop-blur-2xl  " />

            <div className="flex items-center gap-8 md:gap-16.25 flex-row ">
                <Link href={"#"} className="text-lg md:text-2xl font-sora font-light hover:text-[#253E86] transition-all duration-150 " >
                    Privacy
                </Link>

                <Link href={"#"} className="text-lg md:text-2xl font-sora font-light hover:text-[#253E86] transition-all duration-150" >
                    Terms
                </Link>


                <Link href={"#"} className="text-lg md:text-2xl font-sora font-light hover:text-[#253E86] transition-all duration-150" >
                    Contact
                </Link>


            </div>

            <div className="flex items-center gap-4 flex-row " >
                <TrademarkIcon />
                <p className="text-lg md:text-2xl font-sora font-light " >2026 UnioGate</p>
            </div>
        </footer>
    )
}