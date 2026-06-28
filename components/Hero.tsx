"use client";


import Image from "next/image";
import Navbar from "./Navbar";
import ScrollingText from "./ScrollingText";
import { motion } from "framer-motion"
import React, { useState } from "react";
import { supabase } from "@/config/supabaseClient";
import { toast } from "react-toastify";



export default function Hero() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error("Please enter your email");
            return;
        }

        setIsSubmitting(true);

        try {
            // Check if email already exists
            const { data: existingEmail, error: fetchError } = await supabase
                .from("waitlist")
                .select("id")
                .eq("email", email.trim())
                .maybeSingle();

            if (fetchError) {
                toast.error(fetchError.message);
                setIsSubmitting(false);
                return;
            }

            if (existingEmail) {
                toast.error("Email already exists.");
                setIsSubmitting(false);
                return;
            }

            // Insert new email
            const { error: insertError } = await supabase
                .from("waitlist")
                .insert({
                    email: email.trim(),
                });

            if (insertError) {
                toast.error(insertError.message);
            } else {
                toast.error("Successfully joined the waitlist!");
                setEmail("");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section className="w-full min-h-screen lg:h-screen pt-6  md:pt-10  flex flex-col  " >
            <Navbar />


            {/* main section  */}
            <div className="w-[95%] lg:w-[90%] flex-1  mx-auto flex flex-col lg:flex-row justify-between items-start mt-2.5 md:mt-5 gap-8  " >



                {/* the left side  */}
                <div className=" w-full flex flex-col md:max-w-7xl lg:max-w-xl gap-5 items-start mt-10 md:mt-25 " >

                    <h4 className="font-sora text-sm md:text-base text-[#000000] font-normal py-2.5 px-5
                     border-[0.7px] border-[#000000] rounded-[20px] w-fit " >
                        THE STABLECOIN APP FOR MERCHANT </h4>

                    <h1 className=" text-5xl md:text-[56px] lg:text-[72px] leading-[120%] md:leading-[110%] font-jakarta text-[#000000]  " >Every  customer.<br />Every  payment.<br />One  terminal.</h1>

                    <p className="font-sora text-lg md:text-xl text-[#000000]  " >Stop turning away crypto customers.
                        UnioGate lets
                        your business accept stablecoins as easily as any other payment — built for vendors,
                        not traders.</p>

                    <form
                        onSubmit={handleSubmit}
                        className="w-[95%] flex items-center justify-between gap-1.75 " >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your business.com"
                            className="border-[0.7px] border-[#5C5050] w-full h-full rounded-[10px]
                            font-sora text-sm md:text-base text-[#5C5050] py-2.5 px-2.5 outline-0 focus:outline-0
                            "
                        />


                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className=" text-white font-semibold text-sm md:text-base font-sora bg-[#253E86]
p-2.5 text-center rounded-[10px] shrink-0 cursor-pointer
                            "
                        >{isSubmitting ? "..." : "Get Early Access"}</button>
                    </form>
                </div>





                {/* The right side  */}
                <div className="w-full h-auto  max-w-7xl lg:max-w-155 md:flex-1 md:h-full relative flex flex-col items-end justify-center overflow-y-hidden " >

                    <div className="bg-[#253E86] shadow-[0px_4px_20px_10px_rgba(0,0,0,0.25)] h-[50%] md:h-[70%] w-full max-w-[99%] absolute bottom-0 left-[50%] translate-x-[-50%] md:max-w-152.25 rounded-t-[35px] md:rounded-t-[70px] " >

                    </div>


                    <motion.span
                        initial={{ y: 800, }}
                        animate={{ y: 20, }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="z-10 mx-auto w-70 md:w-[528.8px] h-auto md:h-175  self-end">

                        <Image
                            src={"/landing-page-images/phone.png"}
                            loading="eager"
                            alt="phone" height={1000} width={1000}
                            className=" h-full w-full  object-contain object-center  "
                        />
                    </motion.span>
                </div>



            </div>

            <ScrollingText />

        </section>
    )
}
