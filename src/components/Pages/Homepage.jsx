'use client'

import Navbar from "../Common/Navbar"
import CBFTrust from "./CbfTrust"
import Gallery from "./Gallery"
import Hero from "./Hero"
import Intro from "./Introduction"
import InvestPiety from "./InvestPiety"

const HomePage=()=>{
    return(
        <div className="bg-[#153245]">
            <Navbar/>
            <div>
             <Hero/>
            <Intro/>
           <Gallery/>
           <CBFTrust/>
           <InvestPiety/>
           
         

            </div>

        </div>
    )
}
export default HomePage