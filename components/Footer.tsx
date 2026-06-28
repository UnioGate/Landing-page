import Link from "next/link"
import TrademarkIcon from "./icons/TrademarkIcon"


export default function Footer() {
    return (
        <footer className="px-14.25 py-10 flex flex-col md:flex-row items-center justify-between gap-7 md:gap-10 " >

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