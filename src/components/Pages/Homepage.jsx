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
import { CircleEmpty, Processing, TickMark } from "@/utils/icons"
import DynamicRoadmap from "./Roadmap"
import MemberShipBenefits from "./MembershipBenefits"
import PietyMemberShip from "./PietyMembership"
import { ArrowDown, ChevronDown } from "lucide-react"
import QNA from "./Qna"
import Footer from "../Common/Footer"

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
           <DynamicRoadmap/>
           <MemberShipBenefits/>
           <PietyMemberShip/>
           <QNA/>
           </div>
            </div>

            <Footer/>

        </div>
    )
}
export default HomePage