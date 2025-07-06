import FeatureCard from "../Common/FeautureCard"
import { Bank, Coins, Insurance } from "@/utils/icons"

const AboutPiety=()=>{
    return(
        <div className="montserrats pb-[150px]">
        <div className="montserrat text-center pt-[54px]">
            <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308]">About Piety Token</h2>
            <p className="text-[18px] pb-[64px] text-[#D1D5DB]">A revolutionary digital currency backed by tangible assets that provides stability, <br /> security, and growth potential.</p>
        </div>
        <div className="flex justify-center gap-[32px] pb-[80px]">
        <FeatureCard
      icon={Bank}
      title={"Backed by CBF Bank & Trust"}
      description={"Piety Token is securely backed by our CBF Trust & Bank, providing institutional stability and financial security for all token holders."}
      backgroundImage={'/CBFCARD.png'}
    />
     <FeatureCard
      icon={Coins}
      title={"Gold-Backed Value"}
      description={"Unlike volatile cryptocurrencies, Piety Token derives real value from gold reserves, ensuring stability and protection against inflation."}
      backgroundImage={'/GoldCard.png'}
    />
     <FeatureCard
      icon={Insurance}
      title={"Real Estate & Resorts"}
      description={"Our token is further backed by a portfolio of premium real estate and luxury resorts, providing tangible asset support and exclusive member benefits."}
      backgroundImage={'/HangdogCard.png'}
    />
        </div>
         <div className="pb-[100px] montserrat">
         <div className="flex gap-[50px] max-w-[1230px] mx-auto  justify-between px-[30px] py-[20px] bg-gradient-to-l from-[#3d7285] to-transparent rounded-xl">
         <div className="max-w-[739px] pl-[20px]">
        <h2 className="text-[#FACC15] font-bold text-[20px] pb-[20px]">Our Vision</h2>
            <p className="text-[16px] pb-[16px]">Piety Token aims to bridge the gap between traditional finance and digital currency by creating a token with intrinsic value backed by real-world assets.</p>
            <p className="text-[16px]">We're building an ecosystem where members can enjoy financial services, exclusive resort access, and investment opportunities all within one unified platform.</p>
        </div>
        <div>
            <img src="/ourvisionImage.jpeg" alt="" width={'350px'} height={"350px"} />
        </div>
         </div>
         </div>
         <div className="flex gap-[40px] justify-center">
            <img src="/abt1.png" alt="" />
            <img src="/abt2.png" alt="" />
            <img src="/abt3.png" alt="" />
         </div>
         <div className="flex gap-[40px] justify-center pt-[40px]">
            <img src="/abt4.png" alt="" />
            <img src="/abt5.png" alt="" />
            <img src="/abt6.png" alt="" />
         </div>

         
        </div>         

    )
}
export default AboutPiety