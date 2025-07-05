import { useState } from "react";

const PopupInvest = () => {
  const [currentAmount,setCurrentAmount]=useState(1)

  return (
    <div className=" w-[30%] montserrat border-[2px] border-[#FACC15] bg-[#000] p-[16px] rounded-2xl my-0 mx-auto mt-[50px]">
      <div
        className="montserrat rounded-2xl px-[15px] py-[31px] my-0 mx-auto max-[1000px]:w-[90%] max-[1000px]:px-[12px] max-[1000px]:py-[20px] max-[1000px]:mt-[30px]"
        style={{
          background:
            "linear-gradient(to right bottom, rgb(26 21 6 / 57%) 0%, rgb(15, 12, 3) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)",
        }}
      >
        <div className="flex justify-center gap-[30px] font-bold text-[30px] max-[1000px]:gap-[15px] max-[1000px]:text-[20px]">
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            90{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light max-[1000px]:text-[14px]">
              Days
            </span>{" "}
          </div>
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            00{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light max-[1000px]:text-[14px]">
              hours
            </span>
          </div>
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            00{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light max-[1000px]:text-[14px]">
              minutes
            </span>
          </div>
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            00{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light max-[1000px]:text-[14px]">
              seconds
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] justify-start items-start max-[1000px]:gap-[6px]">
          <h2 className="text-white montserrat font-semibold text-[20px] pt-[22px] pb-[8px] max-[1000px]:text-[18px] ">
            Buy Now,<span className="text-[#EAB208]"> Before Price Rises.</span>
          </h2>

          <div className="w-full">
            <div className="w-full h-[20px] bg-[#091f2f] max-[1000px]:h-[15px] relative overflow-hidden shadow-sm">
              <div
                className="bg-[#EAB208] h-[20px] max-[1000px]:h-[15px] absolute top-0 left-0"
                style={{
                  width: `${currentAmount}%`,
                  boxShadow:
                    "0 0 12px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px 0 0 rgba(255, 255, 255, 0.2)",
                }}
              ></div>
            </div>
            <div className="flex justify-between pt-[2px] text-[#EDC211] text-[15px] font-normal opacity-[0.6]">
              <p>{currentAmount}%</p>
              <p>Goal: $31M</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] pb-[16px] font-medium text-[16px] leading-[25px] pt-[45px]">
          <p>TOTAL RAISED : $0.00/$31,000,000</p>
          <p>TOKEN SOLD : 0/3.100.000.000</p>
        </div>

        <div className="flex justify-between h-[40px] bg-[#0e1212] px-[25px] pt-[10px] rounded-xl border-[1px] border-[#11181e] item-center">
          <p>1 $PTY = $0.25</p>
          <p className="text-[#EDC211]">Next Price: $0.50</p>
        </div>
        <div className="flex justify-evenly pt-[25px]">
          <button className="flex bg-[#0d1112] h-[50px] items-center border-[#F9FF38] border-[1px] w-[177px] rounded-xl justify-center gap-[7px] hover:text-[#f9ff38] hover:bg-[linear-gradient(to_right,rgba(249,255,56,0.1)_0%,rgba(21,50,69,0.5)_100%)]">
            <img src="/eth.png" alt="" />
            ETH
          </button>
          <button className="flex bg-[#0d1112] h-[50px] items-center border-[#F9FF38] border-[1px] w-[177px] rounded-xl justify-center gap-[7px] hover:text-[#f9ff38] hover:bg-[linear-gradient(to_right,rgba(249,255,56,0.1)_0%,rgba(21,50,69,0.5)_100%)]">
            <img src="/usdt.png" alt="" />
            USDT
          </button>
        </div>

        <div className="flex w-full pt-[23px] gap-[14px] justify-center">
          <div className="w-full">
            <h3 className="text-start pb-[7px] text-[#FACC15]">ETH you pay</h3>
            <div className=" relative rounded-xl h-[49px] border-[1px] border-[#11181e] w-full">
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-[100%] h-full outline-none p-[10px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
              />
              <img
                src="/token.png"
                alt=""
                width={"30px"}
                height={"30px"}
                className="absolute top-[10%] right-[10px]"
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-start pb-[7px] text-[#FACC15]">
              $PTY you receive
            </h3>
            <div className=" relative rounded-xl h-[49px] border-[1px] border-[#11181e] w-full">
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-[100%] h-full outline-none p-[10px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
              />
              <img
                src="/piety.png"
                width={"30px"}
                height={"30px"}
                alt=""
                className="absolute top-[10%] right-[10px]"
              />
            </div>
          </div>
        </div>
        <button className="bg-[#EAB308] py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000]">
          Connect wallet & Pay
        </button>
      </div>
    </div>
  );
};

export default PopupInvest;
