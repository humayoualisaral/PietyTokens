import React from 'react';
import { CircleEmpty, Processing, TickMark } from "@/utils/icons";

const DynamicRoadmap = ({ data = {} }) => {
  // Default data structure
  const defaultData = {
    phase1: {
      badge: "PHASE 1 - CURRENT",
      title: "Founders Vault Launch",
      description: "Initial presale for the first 250 founding members at $0.02 per token, including membership benefits and CBF Bank accounts.",
      items: [
        { status: "completed", text: "Launch presale website" },
        { status: "completed", text: "Onboard first 250 founding members" },
        { status: "processing", text: "Secure initial $7.5M funding" }
      ]
    },
    phase2: {
      badge: "PHASE 2 - JULY 4TH",
      title: "Founders Black Card Launch",
      description: "Exclusive release of 1,000 lifetime Black Card memberships with enhanced benefits and higher token entry point.",
      items: [
        { status: "pending", text: "Launch Black Card program" },
        { status: "pending", text: "Increase token price to $0.05-$0.10" },
        { status: "pending", text: "Establish VIP benefits structure" }
      ]
    },
    phase3: {
        badge: "PHASE 3 - Q3 2025",
        title: "Infrastructure Development",
        description: "Building the technological and financial infrastructure to support the Piety Token ecosystem.",
        items: [
          { status: "pending", text: "Complete CBF banking integration" },
          { status: "pending", text: "Develop token distribution platform" },
          { status: "pending", text: "Secure additional real asset backing" }
        ]
      },
      phase4: {
        badge: "PHASE 4 - Q4 2025",
        title: "Token Distribution & Launch",
        description: "Official distribution of tokens to presale investors and public launch of the Piety Token ecosystem..",
        items: [
          { status: "pending", text: "Distribute tokens to presale investors" },
          { status: "pending", text: "Launch public trading platform" },
          { status: "pending", text: "Activate full membership benefits" }
        ]
      }
  };

  const roadmapData = { ...defaultData, ...data };
  const phases = Object.values(roadmapData);

  const renderIcon = (status) => {
    switch (status) {
      case "completed":
        return <TickMark/>;
      case "processing":
        return <Processing/>;
      case "pending":
      default:
        return <CircleEmpty/>;
    }
  };

  return (
    <div className="montserrat">
           <div className="text-center pt-[54px]">
        <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308]">
        Project Roadmap
        </h2>
        <p className="text-[18px] pb-[64px] text-[#D1D5DB]">
        Our strategic plan for developing the Piety Token ecosystem.
        </p>
        </div>
    <div className="relative pb-[30px] p-8">
      
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {phases.map((phase, index) => (
          <div key={index} className={`flex justify-center gap-[100px] ${index > 0 ? 'pt-[50px]' : ''}`}>
            {index % 2 === 0 ? (
              // Left side content, right side card (even index)
              <>
                <div className="flex flex-col pt-[15px] max-w-[570px] items-end">
                  <p className="bg-[#EAB308] font-bold text-[14px] text-[#000] rounded-full py-[4px] px-[15px]">{phase.badge}</p>
                  <h2 className="font-bold text-[20px] pt-[6px]">{phase.title}</h2>
                  <p className="text-[16px] text-[#FFFFFF] text-normal pt-[10px] text-right">{phase.description}</p>
                </div>

                <div className="relative max-w-[570px] w-[570px] h-[150px] flex flex-col gap-[15px] p-[25px] bg-black/60 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-xl border-[1px] border-[#EAB30833]">
                  <div className="flex items-center gap-[10px]">
                    {renderIcon(phase.items[0]?.status)}
                    <p>{phase.items[0]?.text}</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    {renderIcon(phase.items[1]?.status)}
                    <p>{phase.items[1]?.text}</p>
                  </div>
                  <div className="flex items-start gap-[10px]">
                    {renderIcon(phase.items[2]?.status)}
                    <p>{phase.items[2]?.text}</p>
                  </div>
                  
                  <div className="w-[40px] h-[40px] bg-black rounded-full border-[#EAB308] border-[4px] absolute top-[-20px] left-[50%] -translate-x-[50%]">
                  </div>
                </div>
              </>
            ) : (
              // Right side content, left side card (odd index)
              <>
                <div className="relative max-w-[570px] w-[570px] h-[150px] flex flex-col gap-[15px] p-[25px] bg-black/60 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-xl border-[1px] border-[#EAB30833]">
                  <div className="flex items-center gap-[10px]">
                    {renderIcon(phase.items[0]?.status)}
                    <p>{phase.items[0]?.text}</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    {renderIcon(phase.items[1]?.status)}
                    <p>{phase.items[1]?.text}</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    {renderIcon(phase.items[2]?.status)}
                    <p>{phase.items[2]?.text}</p>
                  </div>
                  <div className="w-[40px] h-[40px] bg-black rounded-full border-[#EAB308] border-[4px] absolute top-[-20px] left-[50%] -translate-x-[50%]">
                  </div>
                </div>

                <div className="flex flex-col pt-[15px] items-start max-w-[570px]">
                  <p className="bg-[#EAB308] font-bold text-[14px] text-[#000] rounded-full py-[4px] px-[15px]">{phase.badge}</p>
                  <h2 className="font-bold text-[20px] pt-[6px] text-center">{phase.title}</h2>
                  <p className="text-[16px] text-[#FFFFFF] text-normal pt-[10px] text-start">{phase.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
        
        <div className="absolute z-[10] top-0 left-[50%] -translate-x-[50%] h-[790px] w-[4px] bg-[#EAB308]"></div>
      </div>

      {/* Mobile Layout - Single column */}
      <div className="lg:hidden">
        <div className="space-y-[30px]">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {index!==0&&<div className="relative mb-[15px] flex justify-center">
                <div className="w-[30px] h-[30px] bg-black rounded-full border-[#EAB308] border-[3px] relative z-10"></div>
              </div>}
              <div className="flex flex-col gap-[15px] text-center">
                <div className="flex flex-col items-center">
                  <p className="bg-[#EAB308] font-bold text-[14px] text-[#000] rounded-full py-[4px] px-[15px]">{phase.badge}</p>
                  <h2 className="font-bold text-[18px] pt-[6px]">{phase.title}</h2>
                  <p className="text-[14px] text-[#FFFFFF] text-normal pt-[8px] text-center px-4">{phase.description}</p>
                </div>
                <div className="relative max-w-[400px] w-full h-auto flex flex-col gap-[12px] p-[20px] bg-black/60 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-xl border-[1px] border-[#EAB30833] mx-auto">
                  <div className="flex items-center gap-[10px]">
                    {renderIcon(phase.items[0]?.status)}
                    <p className="text-[14px]">{phase.items[0]?.text}</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    {renderIcon(phase.items[1]?.status)}
                    <p className="text-[14px]">{phase.items[1]?.text}</p>
                  </div>
                  <div className="flex items-start gap-[10px]">
                    {renderIcon(phase.items[2]?.status)}
                    <p className="text-[14px]">{phase.items[2]?.text}</p>
                  </div>
                </div>
              </div>
              {/* Line after each phase except the last */}
              {index!==0&& (
                <div className="absolute top-[-30px] left-[50%] -translate-x-[50%] w-[2px] h-[30px] bg-[#EAB308] z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DynamicRoadmap;