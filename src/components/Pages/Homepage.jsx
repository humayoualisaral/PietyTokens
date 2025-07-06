'use client'

import Navbar from "../Common/Navbar"
import CBFTrust from "./CbfTrust"
import Gallery from "./Gallery"
import Hero from "./Hero"
import Intro from "./Introduction"
import InvestPiety from "./InvestPiety"
import AboutPiety from "./AboutPiety"
import TokenomicsSection from "./Tokenomics"
import ValueProportion from "./ValueProportion"
import Videos from "./Videos"
import { Processing, TickMark } from "@/utils/icons"

const HomePage=()=>{
    return(
        <div className="bg-[#153245]">
            <Navbar/>
            <div className="w-[100%]">
             <Hero/>
            <Intro/>
           <Gallery/>
           <CBFTrust/>
           <InvestPiety/>
           <AboutPiety/>  
           <div className="w-[100%] bg-[url('/BGPROPOSITION.png')] bg-no-repeat bg-cover bg-center">
           <ValueProportion/>
           <TokenomicsSection/>
           <Videos/>

           <div>
           <div className="text-center pt-[54px]">
        <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308]">
        Project Roadmap
        </h2>
        <p className="text-[18px] pb-[64px] text-[#D1D5DB]">
        Our strategic plan for developing the Piety Token ecosystem.
        </p>
        <div>
            <div className="flex justify-center pb-[30px]">
                <div className="flex flex-col  items-end">
                    <span>PHASE 1 - CURRENT</span>
                    <h2>Founders Vault Launch</h2>
                    <p>Initial presale for the first 250 founding members at $0.02 per token, <br /> including membership benefits and CBF Bank accounts.</p>
                </div>
                <div className="max-w-[570px] w-[570px]  flex flex-col gap-[30px] p-[25px] bg-black/60 rounded  border-[#EAB30833]">
                    <div className="flex items-center gap-[10px]">
                        <TickMark/>
                        <p>Launch presale website</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <TickMark/>
                        <p>Launch presale website</p>
                    </div>
                    <div className="flex items-start gap-[5px]">
                        <Processing/>
                        <p>Secure initial $7.5M funding</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
           </div>
           </div>
            </div>

        </div>
    )
}
export default HomePage