"use client";

import { motion, Variants } from "framer-motion";
import BuildingIcon from "./icons/BuildingIcon";
import DollarIcon from "./icons/DollarIcon";
import LinkIcon from "./icons/LinkIcon";
import PhoneIcon from "./icons/PhoneIcon";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export default function Features() {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 w-full"
        >

            {/* Point 1 */}
            <motion.div
                variants={cardVariants}
                className="w-full flex flex-col items-start gap-5 px-6 md:px-15.25 py-10 md:py-15 border-b-[0.5px] border-[#10182A] md:border-r-[0.5px]"
            >
                <span className="bg-[#253E86] rounded-[20px] size-15 flex items-center justify-center">
                    <PhoneIcon />
                </span>

                <div className="gap-4 flex flex-col items-start">
                    <h3 className="text-[#000000] font-sora font-semibold text-xl md:text-2xl">
                        One terminal for everything
                    </h3>

                    <p className="text-base md:text-xl font-sora font-normal text-[#000000]">
                        A single point-of-sale solution designed to handle every
                        payment your customers make. Whether they're paying with
                        stablecoins or traditional payment methods, everything is
                        processed seamlessly through one unified terminal.
                    </p>
                </div>
            </motion.div>

            {/* Point 2 */}
            <motion.div
                variants={cardVariants}
                className="w-full flex flex-col items-start gap-5 px-6 md:px-15.25 py-10 md:py-15 border-b-[0.5px] border-[#10182A]"
            >
                <span className="bg-[#253E86] rounded-[20px] size-15 flex items-center justify-center">
                    <DollarIcon />
                </span>

                <div className="gap-4 flex flex-col items-start">
                    <h3 className="text-[#000000] font-sora font-semibold text-xl md:text-2xl">
                        Your customers have crypto
                    </h3>

                    <p className="text-base md:text-xl font-sora font-normal text-[#000000]">
                        Millions of people around the world hold stablecoins and
                        other digital assets, and more of them are looking for
                        ways to use their crypto for everyday purchases. By
                        accepting stablecoin payments, you can tap into a growing
                        customer base.
                    </p>
                </div>
            </motion.div>

            {/* Point 3 */}
            <motion.div
                variants={cardVariants}
                className="w-full flex flex-col items-start gap-5 px-6 md:px-15.25 py-10 md:py-15 border-b-[0.5px] md:border-b-0 border-[#10182A] md:border-r-[0.5px]"
            >
                <span className="bg-[#253E86] rounded-[20px] size-15 flex items-center justify-center">
                    <BuildingIcon />
                </span>

                <div className="gap-4 flex flex-col items-start">
                    <h3 className="text-[#000000] font-sora font-semibold text-xl md:text-2xl">
                        Built for vendors, not traders
                    </h3>

                    <p className="text-base md:text-xl font-sora font-normal text-[#000000]">
                        UnioGate is built for business owners, merchants, and
                        everyday vendors—not crypto traders. That means no
                        complicated charts to interpret, no industry jargon to
                        learn, and no steep learning curve to overcome.
                    </p>
                </div>
            </motion.div>

            {/* Point 4 */}
            <motion.div
                variants={cardVariants}
                className="w-full flex flex-col items-start gap-5 border-b-[0.5px] md:border-b-0 px-6 md:px-15.25 py-10 md:py-15"
            >
                <span className="bg-[#253E86] rounded-[20px] size-15 flex items-center justify-center">
                    <LinkIcon />
                </span>

                <div className="gap-4 flex flex-col items-start">
                    <h3 className="text-[#000000] font-sora font-semibold text-xl md:text-2xl">
                        The missing half of the stablecoin economy
                    </h3>

                    <p className="text-base md:text-xl font-sora font-normal text-[#000000]">
                        Millions of people hold stablecoins, but spending them
                        at everyday businesses is still difficult. UnioGate
                        bridges that gap by making it easy for merchants to
                        accept stablecoin payments, connecting crypto holders
                        with real-world commerce.
                    </p>
                </div>
            </motion.div>

        </motion.section>
    );
}