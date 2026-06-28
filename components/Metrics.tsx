


export default function Metrics() {
    return (

        <section className="w-full grid grid-cols-3  bg-[] " >


            {/* early signups  */}
            <div className="w-full h-full flex flex-col items-center justify-center py-[55px]
            border-b-[1] border-b-[#000000] border-r-[0.7] border-r-[#000000] gap-8 " >

                <h4 className="text-[60px] font-jakarta text-[#000000] " >0</h4>
                <h5 className="text-2xl text-[#000000] font-light font-sora " >EARLY SIGNUPS</h5>
            </div>


            {/* target launch */}
            <div className="w-full h-full flex flex-col items-center justify-center py-[55px]
            border-b-[1] border-b-[#000000] border-r-[0.7] border-r-[#000000] border-l-[0.7] border-l-[#000000] gap-8 " >

                <h4 className="text-[60px] font-jakarta text-[#000000] " >Q4’ 06</h4>
                <h5 className="text-2xl text-[#000000] font-light font-sora " >TARGET LAUNCH</h5>
            </div>


            {/* Beta */}
            <div className="w-full h-full flex flex-col items-center justify-center py-[55px]
            border-b-[1] border-b-[#000000] border-r-[0.7] border-r-[#000000] border-l-[0.7] border-l-[#000000] gap-8 " >

                <h4 className="text-[60px] font-jakarta text-[#000000] " >Beta</h4>
                <h5 className="text-2xl text-[#000000] font-light font-sora " >EARLY ACCESS</h5>
            </div>


        </section>
    )
}