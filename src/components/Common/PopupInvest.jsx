import { useState, useEffect } from "react";

const PopupInvest = () => {
  const [currentAmount, setCurrentAmount] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 90,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date - 90 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 90);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="w-[30%] min-w-[400px] max-w-[640px] montserrat border-[2px] border-[#FACC15] bg-[#000] p-[16px] rounded-2xl my-0 mx-auto mt-[50px] 
                    max-[1400px]:w-[35%] max-[1400px]:min-w-[420px]
                    max-[1200px]:w-[45%] max-[1200px]:min-w-[380px]
                    max-[900px]:w-[60%] max-[900px]:min-w-[340px]
                    max-[700px]:w-[85%] max-[700px]:min-w-[300px]
                    max-[500px]:w-[95%] max-[500px]:min-w-[280px] max-[500px]:mt-[20px] max-[500px]:p-[12px]">
      <div
        className="montserrat rounded-2xl px-[15px] py-[31px] my-0 mx-auto 
                   max-[1400px]:px-[16px] max-[1400px]:py-[32px]
                   max-[1200px]:px-[14px] max-[1200px]:py-[28px]
                   max-[900px]:px-[12px] max-[900px]:py-[25px]
                   max-[700px]:px-[10px] max-[700px]:py-[20px]
                   max-[500px]:px-[8px] max-[500px]:py-[16px]"
        style={{
          background:
            "linear-gradient(to right bottom, rgb(26 21 6 / 57%) 0%, rgb(15, 12, 3) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)",
        }}
      >
        {/* Countdown Timer */}
        <div className="flex justify-center gap-[30px] font-bold text-[30px] 
                        max-[1400px]:gap-[28px] max-[1400px]:text-[28px]
                        max-[1200px]:gap-[24px] max-[1200px]:text-[26px]
                        max-[900px]:gap-[20px] max-[900px]:text-[24px]
                        max-[700px]:gap-[15px] max-[700px]:text-[22px]
                        max-[500px]:gap-[10px] max-[500px]:text-[18px]">
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            {formatTime(timeLeft.days)}{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light 
                           max-[1400px]:text-[17px]
                           max-[1200px]:text-[16px]
                           max-[900px]:text-[15px]
                           max-[700px]:text-[14px]
                           max-[500px]:text-[12px]">
              Days
            </span>{" "}
          </div>
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            {formatTime(timeLeft.hours)}{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light 
                           max-[1400px]:text-[17px]
                           max-[1200px]:text-[16px]
                           max-[900px]:text-[15px]
                           max-[700px]:text-[14px]
                           max-[500px]:text-[12px]">
              hours
            </span>
          </div>
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            {formatTime(timeLeft.minutes)}{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light 
                           max-[1400px]:text-[17px]
                           max-[1200px]:text-[16px]
                           max-[900px]:text-[15px]
                           max-[700px]:text-[14px]
                           max-[500px]:text-[12px]">
              minutes
            </span>
          </div>
          <div className="flex flex-col gap-[3px] text-[#EAB208]">
            {formatTime(timeLeft.seconds)}{" "}
            <span className="text-[#e5e7eb] text-[18px] font-light 
                           max-[1400px]:text-[17px]
                           max-[1200px]:text-[16px]
                           max-[900px]:text-[15px]
                           max-[700px]:text-[14px]
                           max-[500px]:text-[12px]">
              seconds
            </span>
          </div>
        </div>

        {/* Title and Progress Bar */}
        <div className="flex flex-col gap-[8px] justify-start items-start 
                        max-[700px]:gap-[6px] max-[500px]:gap-[4px]">
          <h2 className="text-white montserrat font-semibold text-[20px] pt-[22px] pb-[8px] 
                         max-[1400px]:text-[19px] max-[1400px]:pt-[20px]
                         max-[1200px]:text-[18px] max-[1200px]:pt-[18px]
                         max-[900px]:text-[17px] max-[900px]:pt-[16px]
                         max-[700px]:text-[16px] max-[700px]:pt-[15px]
                         max-[500px]:text-[14px] max-[500px]:pt-[12px]">
            Buy Now,<span className="text-[#EAB208]"> Before Price Rises.</span>
          </h2>

          <div className="w-full">
            <div className="w-full h-[20px] bg-[#091f2f] 
                           max-[1200px]:h-[18px] max-[700px]:h-[16px] max-[500px]:h-[14px] 
                           relative overflow-hidden shadow-sm">
              <div
                className="bg-[#EAB208] h-[20px] 
                          max-[1200px]:h-[18px] max-[700px]:h-[16px] max-[500px]:h-[14px] 
                          absolute top-0 left-0"
                style={{
                  width: `${currentAmount}%`,
                  boxShadow:
                    "0 0 12px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px 0 0 rgba(255, 255, 255, 0.2)",
                }}
              ></div>
            </div>
            <div className="flex justify-between pt-[2px] text-[#EDC211] text-[15px] font-normal opacity-[0.6] 
                            max-[1200px]:text-[14px] max-[700px]:text-[13px] max-[500px]:text-[12px]">
              <p>{currentAmount}%</p>
              <p>Goal: $31M</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-[5px] pb-[16px] font-medium text-[16px] leading-[25px] pt-[45px] 
                        max-[1400px]:text-[15px] max-[1400px]:pt-[40px]
                        max-[1200px]:text-[15px] max-[1200px]:pt-[35px]
                        max-[900px]:text-[14px] max-[900px]:pt-[30px]
                        max-[700px]:text-[14px] max-[700px]:pt-[25px] max-[700px]:pb-[12px]
                        max-[500px]:text-[13px] max-[500px]:pt-[20px] max-[500px]:pb-[10px]">
          <p>TOTAL RAISED : $0.00/$31,000,000</p>
          <p>TOKEN SOLD : 0/3.100.000.000</p>
        </div>

        {/* Price Display */}
        <div className="flex justify-between h-[40px] bg-[#0e1212] px-[25px] pt-[10px] rounded-xl border-[1px] border-[#11181e] items-center 
                        max-[1200px]:h-[38px] max-[1200px]:px-[20px]
                        max-[700px]:h-[36px] max-[700px]:px-[15px]
                        max-[500px]:h-[34px] max-[500px]:px-[12px] max-[500px]:pt-[8px] max-[500px]:flex-col max-[500px]:gap-[2px]">
          <p className="max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[12px]">1 $PTY = $0.25</p>
          <p className="text-[#EDC211] max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[12px]">Next Price: $0.50</p>
        </div>

        {/* Currency Selection Buttons */}
        <div className="flex justify-evenly pt-[25px] 
                        max-[1200px]:pt-[20px] max-[700px]:pt-[18px] max-[500px]:pt-[15px] max-[500px]:flex-col max-[500px]:gap-[10px]">
          <button className="flex bg-[#0d1112] h-[50px] items-center border-[#F9FF38] border-[1px] w-[177px] rounded-xl justify-center gap-[7px] 
                             hover:text-[#f9ff38] hover:bg-[linear-gradient(to_right,rgba(249,255,56,0.1)_0%,rgba(21,50,69,0.5)_100%)] 
                             max-[1200px]:w-[160px] max-[1200px]:h-[45px]
                             max-[700px]:w-[140px] max-[700px]:h-[42px]
                             max-[500px]:w-full max-[500px]:h-[40px]">
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold max-[500px]:w-[20px] max-[500px]:h-[20px]">
              <img src="/eth.png" alt="" />
            </div>
            <span className="max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px]">ETH</span>
          </button>
          <button className="flex bg-[#0d1112] h-[50px] items-center border-[#F9FF38] border-[1px] w-[177px] rounded-xl justify-center gap-[7px] 
                             hover:text-[#f9ff38] hover:bg-[linear-gradient(to_right,rgba(249,255,56,0.1)_0%,rgba(21,50,69,0.5)_100%)] 
                             max-[1200px]:w-[160px] max-[1200px]:h-[45px]
                             max-[700px]:w-[140px] max-[700px]:h-[42px]
                             max-[500px]:w-full max-[500px]:h-[40px]">
            <div className="w-[24px] h-[24px] bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold max-[500px]:w-[20px] max-[500px]:h-[20px]">
              <img src="/usdt.png" alt="" />
            </div>
            <span className="max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px]">USDT</span>
          </button>
        </div>

        {/* Input Fields */}
        <div className="flex w-full pt-[23px] gap-[14px] justify-center 
                        max-[1200px]:pt-[20px] max-[700px]:pt-[18px] max-[700px]:gap-[10px] max-[500px]:pt-[15px] max-[500px]:gap-[8px] max-[500px]:flex-col">
          <div className="w-full">
            <h3 className="text-start pb-[7px] text-[#FACC15] 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">ETH you pay</h3>
            <div className="relative rounded-xl h-[49px] border-[1px] border-[#11181e] w-full 
                           max-[1200px]:h-[45px] max-[700px]:h-[42px] max-[500px]:h-[40px]">
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-[100%] h-full outline-none p-[10px] bg-transparent text-white 
                          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                          [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[700px]:p-[8px] max-[500px]:text-[13px] max-[500px]:p-[6px]"
              />
              <div className="absolute top-[50%] right-[10px] transform -translate-y-1/2 w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold 
                             max-[1200px]:w-[26px] max-[1200px]:h-[26px] max-[700px]:w-[24px] max-[700px]:h-[24px] max-[500px]:w-[22px] max-[500px]:h-[22px] max-[500px]:right-[8px]">
                <img src="/eth.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-start pb-[7px] text-[#FACC15] 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">
              $PTY you receive
            </h3>
            <div className="relative rounded-xl h-[49px] border-[1px] border-[#11181e] w-full 
                           max-[1200px]:h-[45px] max-[700px]:h-[42px] max-[500px]:h-[40px]">
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-[100%] h-full outline-none p-[10px] bg-transparent text-white 
                          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                          [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[700px]:p-[8px] max-[500px]:text-[13px] max-[500px]:p-[6px]"
              />
              <div className="absolute top-[50%] right-[10px] transform -translate-y-1/2 w-[30px] h-[30px] bg-yellow-500 rounded-full flex items-center justify-center text-black text-xs font-bold 
                             max-[1200px]:w-[26px] max-[1200px]:h-[26px] max-[700px]:w-[24px] max-[700px]:h-[24px] max-[500px]:w-[22px] max-[500px]:h-[22px] max-[500px]:right-[8px]">
                <img src="/piety.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <button className="bg-[#EAB308] py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                           hover:bg-[#D4A108] transition-colors duration-200 
                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]">
          Connect wallet & Pay
        </button>
      </div>
    </div>
  );
};

export default PopupInvest;