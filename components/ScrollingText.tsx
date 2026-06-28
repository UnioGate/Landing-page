
"use client"

import { marquee_text } from "@/data/marquee_text";
import Marquee from "react-fast-marquee";





export default function ScrollingText() {
    return (
        <div className="w-full bg-[#10182A] py-2.5 " >
            <Marquee >
                {
                    marquee_text.map((text, index) => (
                        <span key={index} className="gap-2.5 flex flex-row items-center ">

                            <span className="block bg-white w-1.75 h-1.75 " >
                            </span>

                            <h3 className="font-sora text-xs md:text-sm
                             text-[#ffffff] flex items-center gap-2 "> {text}</h3>
                        </span>

                    ))
                }
            </Marquee>
        </div>
    )
}