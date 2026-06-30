"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SplashScreenProps {
    onFinish: () => void;
}

export default function SplashScreen({
    onFinish,
}: SplashScreenProps) {
    const [showText, setShowText] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1300);

        const hideTimer = setTimeout(() => {
            setHide(true);
        }, 2500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence
            onExitComplete={onFinish}
        >
            {!hide && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                >
                    <div className="flex items-center gap-4 overflow-hidden py-10 px-10">

                        <motion.div
                            initial={{
                                scale: 1,
                                rotate: 0,
                            }}
                            animate={{
                                scale: [1, 1.28, 1],
                                rotate: [0, 360, 0],
                            }}
                            transition={{
                                duration: 1.3,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src="/logo/logo.png"
                                alt="Uniogate"
                                width={77}
                                height={77}
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{
                                width: showText ? "245px" : 0,
                            }}
                            transition={{
                                duration: .7,
                                ease: "easeOut",
                            }}
                            className="overflow-hidden whitespace-nowrap"
                        >
                            <h1 className="font-bold text-2xl md:text-[48px] text-[#233F88] font-jakarta  ">
                                Uniogate
                            </h1>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}