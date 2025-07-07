import Button from "../Common/Button"
import PopupInvest from "../Common/PopupInvest"

const InvestPiety = () => {
    return (
        <div className="text-center pt-[40px] pb-[15px] bg-[url('/BgInvest.png')] bg-no-repeat bg-center bg-cover max-[768px]:px-[20px] max-[1024px]:px-[30px]">
            <h2 className="text-[45px] text-[#EAB208] font-bold montserrat max-[768px]:text-[32px] max-[1024px]:text-[38px] max-[480px]:text-[28px]">
                INVEST IN PIETY TOKEN
            </h2>
            <h2 className="text-[40px] font-semibold montserrat max-[768px]:text-[28px] max-[1024px]:text-[34px] max-[480px]:text-[24px] max-[768px]:leading-tight">
                Digital Currency Backed by Real Assets
            </h2>
            <p className="pt-[45px] text-[18px] text-[#F3F4F6] font-regular montserrat max-[768px]:text-[16px] max-[768px]:pt-[30px] max-[768px]:leading-relaxed max-[480px]:text-[15px]">
                Join our exclusive presale to become a founding member and secure your position in a <br className="max-[768px]:hidden" /> 
                revolutionary financial ecosystem backed by CBF Bank & Trust, Gold, Real Estate, and Resorts.
            </p>
            <div className="flex pt-[45px] gap-[35px] justify-center max-[768px]:flex-col max-[768px]:gap-[20px] max-[768px]:pt-[30px] max-[768px]:items-center max-[1024px]:gap-[25px]">
                <Button>Invest Here</Button>
                <Button>Read Whitepaper</Button>
            </div>
            <PopupInvest />
        </div>
    )
}

export default InvestPiety