import FeatureCard from "../Common/FeautureCard"
import { Bank, Coins, Insurance } from "@/utils/icons"

const AboutPiety = () => {
    return (
        <div className="montserrats pb-[150px] max-lg:pb-[100px] max-md:pb-[80px] max-sm:pb-[60px] overflow-x-hidden">
            {/* Header Section */}
            <div className="montserrat text-center pt-[54px] max-lg:pt-[40px] max-md:pt-[30px] max-sm:pt-[25px] px-[20px] max-sm:px-[15px]">
                <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308] 
                               max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px] 
                               max-lg:pb-[16px] max-md:pb-[14px] max-sm:pb-[12px]">
                    About Piety Token
                </h2>
                <p className="text-[18px] pb-[64px] text-[#D1D5DB] 
                              max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] 
                              max-lg:pb-[50px] max-md:pb-[40px] max-sm:pb-[30px]">
                    A revolutionary digital currency backed by tangible assets that provides stability, <br className="max-md:hidden" /> 
                    security, and growth potential.
                </p>
            </div>

            {/* Feature Cards Section */}
            <div className="pb-[80px] px-[20px] max-lg:pb-[60px] max-md:pb-[50px] max-sm:px-[15px] max-sm:pb-[40px]">
                <div className="flex justify-center gap-[32px] max-w-[1300px] mx-auto
                                max-lg:gap-[20px] max-lg:flex-wrap max-lg:justify-center
                                max-md:flex-col max-md:items-center max-md:gap-[20px] 
                                max-sm:gap-[16px]">
                    <FeatureCard
                        icon={Bank}
                        title={"Backed by CBF Bank & Trust"}
                        description={"Piety Token is securely backed by our CBF Trust & Bank, providing institutional stability and financial security for all token holders."}
                        backgroundImage={'/CBFCARD.png'}
                        width="100%"
                        height="auto"
                        className="xl:w-[395px] xl:h-[245px] 
                                   max-xl:w-[350px] max-xl:h-[220px]
                                   max-lg:w-[300px] max-lg:h-[200px] max-lg:min-w-[280px]
                                   max-md:w-[100%] max-md:max-w-[400px] max-md:h-[180px]
                                   max-sm:h-[160px]"
                    />
                    <FeatureCard
                        icon={Coins}
                        title={"Gold-Backed Value"}
                        description={"Unlike volatile cryptocurrencies, Piety Token derives real value from gold reserves, ensuring stability and protection against inflation."}
                        backgroundImage={'/GoldCard.png'}
                        width="100%"
                        height="auto"
                        className="xl:w-[395px] xl:h-[245px] 
                                   max-xl:w-[350px] max-xl:h-[220px]
                                   max-lg:w-[300px] max-lg:h-[200px] max-lg:min-w-[280px]
                                   max-md:w-[100%] max-md:max-w-[400px] max-md:h-[180px]
                                   max-sm:h-[160px]"
                    />
                    <FeatureCard
                        icon={Insurance}
                        title={"Real Estate & Resorts"}
                        description={"Our token is further backed by a portfolio of premium real estate and luxury resorts, providing tangible asset support and exclusive member benefits."}
                        backgroundImage={'/HangdogCard.png'}
                        width="100%"
                        height="auto"
                        className="xl:w-[395px] xl:h-[245px] 
                                   max-xl:w-[350px] max-xl:h-[220px]
                                   max-lg:w-[300px] max-lg:h-[200px] max-lg:min-w-[280px]
                                   max-md:w-[100%] max-md:max-w-[400px] max-md:h-[180px]
                                   max-sm:h-[160px]"
                    />
                </div>
            </div>

            {/* Vision Section */}
            <div className="pb-[100px] montserrat max-lg:pb-[80px] max-md:pb-[60px] max-sm:pb-[50px] px-[20px] max-sm:px-[15px]">
                <div className="flex gap-[50px] max-w-[1230px] mx-auto justify-between px-[30px] py-[20px] 
                                bg-gradient-to-l from-[#3d7285] to-transparent rounded-xl
                                max-lg:gap-[30px] max-lg:px-[20px] max-lg:py-[16px] 
                                max-md:flex-col max-md:gap-[20px] max-md:px-[16px] max-md:py-[14px] max-md:text-center 
                                max-sm:gap-[16px] max-sm:px-[12px] max-sm:py-[12px]">
                    {/* Text Content */}
                    <div className="max-w-[739px] pl-[20px] max-lg:pl-[15px] max-md:pl-[0px] max-md:max-w-none max-md:order-2">
                        <h2 className="text-[#FACC15] font-bold text-[20px] pb-[20px] 
                                       max-lg:text-[18px] max-lg:pb-[16px] 
                                       max-md:text-[16px] max-md:pb-[14px] 
                                       max-sm:text-[15px] max-sm:pb-[12px]">
                            Our Vision
                        </h2>
                        <p className="text-[16px] pb-[16px] 
                                      max-lg:text-[15px] max-lg:pb-[14px] 
                                      max-md:text-[14px] max-md:pb-[12px] 
                                      max-sm:text-[13px] max-sm:pb-[10px]">
                            Piety Token aims to bridge the gap between traditional finance and digital currency by creating a token with intrinsic value backed by real-world assets.
                        </p>
                        <p className="text-[16px] 
                                      max-lg:text-[15px] 
                                      max-md:text-[14px] 
                                      max-sm:text-[13px]">
                            We're building an ecosystem where members can enjoy financial services, exclusive resort access, and investment opportunities all within one unified platform.
                        </p>
                    </div>
                    {/* Image - After text on large screens, first on small screens */}
                    <div className="flex-shrink-0 max-md:flex max-md:justify-center max-md:order-1">
                        <img 
                            src="/ourvisionImage.jpeg" 
                            alt="" 
                            width={'350px'} 
                            height={"350px"} 
                            className="xl:w-[350px] xl:h-[350px]
                                       max-lg:w-[280px] max-lg:h-[280px] 
                                       max-md:w-[250px] max-md:h-[250px] 
                                       max-sm:w-[200px] max-sm:h-[200px] 
                                       rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div className="px-[20px] max-sm:px-[15px] overflow-x-hidden">
                {/* First Row */}
                <div className="flex gap-[40px] justify-center 
                                xl:gap-[40px]
                                max-xl:gap-[30px] max-xl:flex-wrap max-xl:justify-center
                                max-lg:gap-[25px] 
                                max-md:gap-[20px] max-md:flex-wrap max-md:justify-center 
                                max-sm:gap-[15px] max-sm:flex-col max-sm:items-center">
                    <img 
                        src="/abt1.png" 
                        alt="" 
                        className="xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]"
                    />
                    <img 
                        src="/abt2.png" 
                        alt="" 
                        className="xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]"
                    />
                    <img 
                        src="/abt3.png" 
                        alt="" 
                        className="xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]"
                    />
                </div>

                {/* Second Row */}
                <div className="flex gap-[40px] justify-center pt-[40px] 
                                xl:gap-[40px]
                                max-xl:gap-[30px] max-xl:pt-[30px] max-xl:flex-wrap max-xl:justify-center
                                max-lg:gap-[25px] max-lg:pt-[25px] 
                                max-md:gap-[20px] max-md:pt-[20px] max-md:flex-wrap max-md:justify-center 
                                max-sm:gap-[15px] max-sm:pt-[15px] max-sm:flex-col max-sm:items-center">
                    <img 
                        src="/abt4.png" 
                        alt="" 
                        className="xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]"
                    />
                    <img 
                        src="/abt5.png" 
                        alt="" 
                        className="xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto z
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]"
                    />
                    <img 
                        src="/abt6.png" 
                        alt="" 
                        className="xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPiety