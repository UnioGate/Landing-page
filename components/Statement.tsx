import { motion } from "framer-motion"



export default function Statement() {
    return (
        <section className="w-full bg-[#253E86] py-[68px] flex items-center justify-center flex-col gap-10 px-4 md:px-16 text-[#ffffff] " >
            <motion.h2
                initial={{
                    opacity: 0,
                    filter: "blur(20px)",
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                viewport={{ once: true }}
                className=" font-jakarta text-3xl md:text-[60px]
            font-normal w-[95%] md:w-[80%] text-center " >
                "Your store just became the smartest place to spend crypto."
            </motion.h2>

            <motion.h4
                initial={{
                    opacity: 0,
                    filter: "blur(20px)",
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="font-light font-sora text-lg md:text-2xl " >UNIOGATE - coming 2026
            </motion.h4>
        </section>
    )
}