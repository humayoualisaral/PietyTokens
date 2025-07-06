import CustomVideoPlayer from "../Common/CustomVideoPlayer"

const { Safety, GraphUp, HandShake } = require("@/utils/icons")
const { default: FeatureCard } = require("../Common/FeautureCard")

const ValueProportion=()=>{
    return(
        <div className="montserrat">
             <div className="text-center pt-[54px]">
        <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308]">
        The Piety Token Value Proposition
        </h2>
        <p className="text-[18px] pb-[64px] text-[#D1D5DB]">
        Unlike most cryptocurrencies, Piety Token is backed by tangible assets providing inherent value <br /> and stability.
        </p>
      </div>
      <div className="flex justify-center gap-[32px]">
      <FeatureCard
      icon={Safety}
      title={"Asset-Backed Security"}
      description={"Every token is backed by real assets including gold, real estate, and banking infrastructure."}
    />
     <FeatureCard
      icon={GraphUp}
      title={"Growth Potential"}
      description={"As our ecosystem expands and more assets are acquired, the token value is designed to appreciate accordingly."}
    />
 <FeatureCard
      icon={HandShake}
      title={"Utility & Benefits"}
      description={"Tokens provide access to exclusive financial services, resort privileges, and ecosystem benefits."}
    />
      </div>
        </div>
    )
}
export default ValueProportion