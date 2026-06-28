import Image from "next/image";




export default function Navbar() {
    return (
        <nav className="w-[90%] flex items-center justify-between gap-10 py-4 px-4.5 bg-[#FFFFFF4D] rounded-[40px] mx-auto " >
            <Image src={"/logo/logo.svg"} alt="logo" width={163} height={39} />



            <div className="bg-[#253E86] text-[#FFFFFF] py-2.5 px-5 rounded-[20px] text-[15px] font-sora text-center " >
                Coming soon
            </div>
        </nav>
    )

}