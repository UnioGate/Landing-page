import { motion } from "framer-motion"


export default function Metrics() {
    return (

        <section className="w-full grid grid-cols-1 md:grid-cols-3 " >


            {/* early signups  */}
            <div className="w-full h-full flex flex-col items-center justify-center py-[55px]
            border-b-[1] border-b-[#000000] md:border-r-[0.7] border-r-[#000000] gap-4 md:gap-8 " >

                <motion.h4
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0,
                    }}
                    viewport={{ once: true }}

                    className=" text-3xl md:text-[60px] font-jakarta text-[#000000] " >0
                </motion.h4>
                <h5 className=" text-base md:text-2xl text-[#000000] font-light font-sora " >EARLY SIGNUPS</h5>
            </div>


            {/* target launch */}
            <div className="w-full h-full flex flex-col items-center justify-center py-[55px]
            border-b-[1] border-b-[#000000] md:border-r-[0.7] border-r-[#000000] border-l-[0.7] border-l-[#000000] gap-4 md:gap-8 " >

                <motion.h4
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-[60px] font-jakarta text-[#000000] " >Q4’ 06
                </motion.h4>
                <h5 className="text-base md:text-2xl text-[#000000] font-light font-sora " >TARGET LAUNCH</h5>
            </div>


            {/* Beta */}
            <div className="w-full h-full flex flex-col items-center justify-center py-[55px]
            border-b-[1] border-b-[#000000] md:border-r-[0.7] border-r-[#000000] border-l-[0.7] border-l-[#000000] gap-4 md:gap-8 " >

                <motion.h4
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.4,
                    }}
                    viewport={{ once: true }} className="text-3xl md:text-[60px] font-jakarta text-[#000000] " >Beta</motion.h4>
                <h5 className="text-base md:text-2xl text-[#000000] font-light font-sora " >EARLY ACCESS</h5>
            </div>


        </section>
    )
}