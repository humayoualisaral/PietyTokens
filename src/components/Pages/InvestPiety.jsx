import Button from "../Common/Button"
import PopupInvest from "../Common/PopupInvest"

const InvestPiety=()=>{
    return(
        <div className="text-center pt-[40px] pb-[15px] bg-[url('/BgInvest.png')] bg-no-repeat bg-center">
        <h2 className="text-[45px] text-[#EAB208] font-bold montserrat">INVEST IN PIETY TOKEN</h2>
        <h2 className="text-[40px] font-semibold montserrat">Digital Currency Backed by Real Assets</h2>
        <p className="pt-[45px] text-[18px] text-[#F3F4F6] font-regular montserrat">Join our exclusive presale to become a founding member and secure your position in a <br /> revolutionary financial ecosystem backed by CBF Bank & Trust, Gold, Real Estate, and Resorts.</p>
        <div className="flex pt-[45px] gap-[35px] justify-center">
        <Button>Invest Here</Button>
        <Button>Read Whitepaper</Button>
        </div>
         <PopupInvest/>     
   
      
     </div> 
    )
}
export default InvestPiety