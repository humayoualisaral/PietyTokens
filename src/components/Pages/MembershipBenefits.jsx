import {CheckMarkOrange, CheckMarkYellow, Crown } from "@/utils/icons"
import Button from "../Common/Button"

const MemberShipBenefits=()=>{
    return(
        <div className="montserrat bg-[#173444]">
            <div className="py-[74px] flex justify-center px-4">
                <img src="/Collage.png" alt="" className="max-w-full h-auto" />
            </div>
        <div className="text-center pt-[54px] px-4">
     <h2 className="text-[30px] max-md:text-[24px] pb-[20px] font-bold text-[#EAB308]">
     Founding Membership Benefits
     </h2>
     <p className="text-[18px] max-md:text-[16px] pb-[64px] text-[#D1D5DB] max-w-4xl mx-auto">
     Early adopters will receive exclusive founding member status with unprecedented benefits and privileges.
     </p>
     </div>

     <div className="flex max-lg:flex-col justify-center items-center gap-[33px] max-lg:gap-[24px] pb-[24px] px-4">
        <div className="border-[1px] max-h-[466px] h-[466px] max-sm:max-h-none max-sm:h-auto overflow-hidden border-[#EAB3084D] max-w-[600px] w-full lg:w-[600px]">
            <div className="p-[24px] max-md:p-[16px]">
                <h2 className="font-bold text-[24px] max-md:text-[20px]">All Access Founder's Membership</h2>
                <p className="text-[#E5E7EB] text-[20px] max-md:text-[18px] font-normal">$1,000 Investment</p>
            </div>
             <div className="h-[100%] max-sm:h-auto bg-[#468094] p-[24px] max-md:p-[16px] pb-[60px] max-md:pb-[40px]">
             <div className=" pb-[24px] flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                    <CheckMarkOrange/>
                    <p className="text-[16px] max-md:text-[14px]">Access to a single luxury resort in your area</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkOrange/>
                    <p className="text-[16px] max-md:text-[14px]">Presale token price of $0.02 per token</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkOrange/>
                    <p className="text-[16px] max-md:text-[14px]">CBF Bank account access</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkOrange/>
                    <p className="text-[16px] max-md:text-[14px]">Early ecosystem participation rights</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkOrange/>
                    <p className="text-[16px] max-md:text-[14px]">Priority support and concierge services</p>
                </div>
                
            </div>
            <div className="flex max-sm:flex-col justify-between gap-[12px]">
                <button className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors">
                    <img src="/Card.png" alt="" />
                    <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold ">Pay with card</p>
                </button>
                <button className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors">
                    <img src="/Wallet.png" alt="" />
                    <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold ">Pay with crypto</p>
                </button>
            </div>
             </div>
        </div>

        <div className="border-[1px] overflow-hidden max-h-[466px] h-[466px] max-sm:max-h-none max-sm:h-auto border-[#EAB3084D] max-w-[600px] w-full lg:w-[600px]">
            <div className="p-[24px] max-md:p-[16px]">
                <h2 className="font-bold text-[24px] max-md:text-[20px]">Global Founder's Membership</h2>
                <p className="text-[#E5E7EB] text-[20px] max-md:text-[18px] font-normal">$2,500 Investment</p>
            </div>
             <div className="bg-[#468094] p-[24px] max-md:p-[16px] pb-[60px] max-md:pb-[40px] max-sm:h-auto">
             <div className=" pb-[24px] flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                    <CheckMarkYellow/>
                    <p className="text-[16px] max-md:text-[14px]">Access to all luxury resorts worldwide</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkYellow/>
                    <p className="text-[16px] max-md:text-[14px]">Presale token price of $0.02 per token</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkYellow/>
                    <p className="text-[16px] max-md:text-[14px]">Premium CBF Bank account with enhanced features</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkYellow/>
                    <p className="text-[16px] max-md:text-[14px]">Voting rights on future ecosystem developments</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkYellow/>
                    <p className="text-[16px] max-md:text-[14px]">VIP events and networking opportunities</p>
                </div>
                <div className="flex items-center gap-[12px]">
                    <CheckMarkYellow/>
                    <p className="text-[16px] max-md:text-[14px]">Exclusive investment opportunities</p>
                </div>
            </div>
            <div className="flex max-sm:flex-col justify-between gap-[12px]">
                <button className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors">
                    <img src="/Card.png" alt="" />
                    <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold ">Pay with card</p>
                </button>
                <button className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors">
                    <img src="/Wallet.png" alt="" />
                    <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold ">Pay with crypto</p>
                </button>
            </div>
             </div>
        </div>
     </div>
      
        <div className="flex max-lg:flex-col-reverse justify-center items-center gap-[40px] max-lg:gap-[24px] px-4 pb-[60px]">
          <div className="max-lg:text-center">
            <img src="/BlackCard.png" alt="" className="max-w-full h-auto lg:hidden mb-[24px]" />
            <p className="bg-[#FFD700] font-bold text-[14px] text-[#000] rounded-full py-[4px] px-[15px] max-w-[193px] max-lg:mx-auto">LAUNCHING JULY 4TH</p>
            <h2 className="font-bold text-[24px] max-md:text-[20px] pt-[18px] pb-[28px]">Founders Black Card</h2>
            <p className="pb-[24px] text-[16px] max-md:text-[14px] max-w-[500px] max-lg:mx-auto">Limited to only 1,000 lifetime founding members, the exclusive Founders Black Card represents the pinnacle of our membership tiers.</p>
            <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
                    <Crown/>
                    <p className="text-[16px] max-md:text-[14px]">Token entry point between $0.05-$0.10</p>
                </div>
                <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
                    <Crown/>
                    <p className="text-[16px] max-md:text-[14px]">VIP access to all UMRE global benefits</p>
                </div>
                <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
                    <Crown/>
                    <p className="text-[16px] max-md:text-[14px]">Exclusive Black Card events and privileges</p>
                </div>
                <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
                    <Crown/>
                    <p className="text-[16px] max-md:text-[14px]">First access to new investment opportunities</p>
                </div>
            </div>
            <button className="bg-[#FFD700] text-[#000] font-semibold text-[16px] max-md:text-[14px] py-[10px] max-md:py-[8px] px-[30px] max-md:px-[20px] rounded-full border-[2px] max-md:border-[1px] border-[#EAB208] hover:bg-[#00000060] hover:text-[#FFD700] transition-colors duration-300">Join Waitlist</button>
          </div>
          <div className="max-lg:hidden">
            <img src="/BlackCard.png" alt="" className="max-w-full h-auto" />
          </div>
        </div>
          
        </div>
    )
}

export default MemberShipBenefits