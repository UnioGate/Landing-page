import Image from "next/image";
import Link from "next/link";




export default function Navbar() {
    return (
        <nav className=" w-[95%] md:w-[90%] flex items-center justify-between gap-10 py-4 px-4.5 bg-[#FFFFFF4D] rounded-[40px] mx-auto " >
            <Link href={"/"}>
                <Image src={"/logo/logo.svg"} alt="logo" width={163} height={39} className="w-25 md:w-40.75 " />
            </Link>



            <div className="bg-[#253E86] text-[#FFFFFF] py-2 md:py-2.5 px-3 md:px-5 rounded-[20px] text-sm md:text-[15px] font-sora text-center " >
                Coming soon
            </div>
        </nav>
    )

}