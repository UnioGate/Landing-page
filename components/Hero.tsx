"use client";


import Image from "next/image";
import Navbar from "./Navbar";
import ScrollingText from "./ScrollingText";



export default function Hero() {
    return (
        <section className="w-full h-screen  pt-10  flex flex-col  " >
            <Navbar />


            {/* main section  */}
            <div className="w-[90%] flex-1  mx-auto flex flex-col md:flex-row justify-between items-start mt-5  " >



                {/* the left side  */}
                <div className=" w-full flex flex-col max-w-xl gap-5 items-start mt-25 " >

                    <h4 className="font-sora text-base text-[#000000] font-normal py-2.5 px-5
                     border-[0.7px] border-[#000000] rounded-[20px] w-fit " >
                        THE STABLECOIN APP FOR MERCHANT </h4>

                    <h1 className=" text-4xl md:text-[56px] lg:text-[72px] leading-[110%] font-jakarta text-[#000000]  " >Every  customer.<br />Every  payment.<br />One  terminal.</h1>

                    <p className="font-sora text-xl text-[#000000]  " >Stop turning away crypto customers.
                        UnioGate lets
                        your business accept stablecoins as easily as any other payment — built for vendors,
                        not traders.</p>

                    <div className="w-[95%] flex items-center justify-between gap-[7px] " >
                        <input
                            placeholder="your business.com"
                            className="border-[0.7px] border-[#5C5050] w-full h-full rounded-[10px]
                            font-sora text-base text-[#5C5050] py-2.5 px-2.5 outline-0 focus:outline-0
                            "
                        />


                        <button
                            className=" text-white font-semibold text-base font-sora bg-[#253E86]
p-2.5 text-center rounded-[10px] shrink-0 cursor-pointer
                            "
                        >Get Early Access</button>
                    </div>
                </div>





                {/* The right side  */}
                <div className="w-full max-w-[57%]  h-full relative flex items-end justify-center " >

                    <div className="bg-[#253E86] shadow-[0px_4px_20px_10px_rgba(0,0,0,0.25)] h-[70%] w-full absolute max-w-[609px] rounded-t-[70px] " >

                    </div>


                    <Image
                        src={"/landing-page-images/phone.png"}
                        loading="eager"
                        alt="phone" height={1000} width={1000}
                        className="w-[528.8px] h-175 object-contain z-10 "
                    />
                </div>



            </div>

            <ScrollingText />

        </section>
    )
}
