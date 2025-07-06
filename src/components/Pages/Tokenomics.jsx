import React from 'react';

const TokenomicsSection = () => {
  const tokenomicsData = {
    header: {
      title: "Tokenomics",
      subtitle: "Understanding the Piety Token distribution, value, and growth potential."
    },
    sections: [
      {
        title: "Presale Mechanics",
        items: [
          {
            number: "1",
            title: "Founders Vault Launch:",
            description: "First 250 members will secure tokens at $0.02 each, with a minimum investment of $1,000 for All Access or $2,500 for Global Membership."
          },
          {
            number: "2",
            title: "Vesting Period:",
            description: "Purchased tokens will be securely held in the CBF Trust & Bank until the official token distribution begins following infrastructure development."
          },
          {
            number: "3",
            title: "Price Progression:",
            description: "After the initial 250 members, token price increases to $0.05, and eventually to $0.10 for the exclusive Black Card members launching July 4th."
          },
          {
            number: "4",
            title: "Fundraising Goal:",
            description: "Our target is to raise $31M to build the complete ecosystem infrastructure, connecting all assets and launching the full Piety Token platform."
          }
        ]
      },
      {
        title: "Token Distribution",
        items: [
          {
            label: "Presale Investors",
            percentage: 40
          },
          {
            label: "Ecosystem Development",
            percentage: 25
          },
          {
            label: "Team & Advisors",
            percentage: 15
          },
          {
            label: "Reserve Fund",
            percentage: 10
          },
          {
            label: "Marketing & Partnerships",
            percentage: 10
          }
        ]
      }
    ]
  };

  const ProgressBar = ({ percentage }) => (
    <div className="w-full h-3 border border-[#374151] rounded-full bg-[#1F2937] relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#EAB308] to-[#CA8A04] rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  const renderPresaleMechanics = (section) => (
    <div className="rounded-xl border-[1px] p-[33px] bg-black/60 border-[#EAB30833] max-w-[600px] w-full">
      <h2 className="text-[30px] font-bold text-[#EAB308]">{section.title}</h2>
      {section.items.map((item, index) => (
        <div key={index} className="flex flex-col pt-[24px]">
          <h3 className="font-bold text-[18px]">
            <span className="pr-[16px] pl-[10px] text-[#EAB308]">{item.number}</span>
            {item.title}
          </h3>
          <p className="pl-[35px] text-[#D1D5DB] text-[16px] pt-[5px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );

  const renderTokenDistribution = (section) => (
    <div className="rounded-xl border-[1px] p-[33px] bg-black/60 border-[#EAB30833] max-w-[600px] w-full">
      <h2 className="text-[30px] font-bold text-[#EAB308]">{section.title}</h2>
      {section.items.map((item, index) => (
        <div key={index} className="pt-[24px]">
          <div className="flex justify-between pb-[10px]">
            <p className="text-[#D1D5DB] text-[14px]">{item.label}</p>
            <p className="text-[#FACC15] font-semibold text-[16px]">{item.percentage}%</p>
          </div>
          <ProgressBar percentage={item.percentage} />
        </div>
      ))}
      <div className='bg-[#EAB30833] p-[16px] rounded-xl border-[1px] border-[#EAB3084D] mt-[32px]'>
       <p className='text-[14px] text-[#D1D5DB]'><span className='font-bold pr-[3px] text-[14px] text-[#FACC15]'>Note:</span>Token distribution will commence after the infrastructure development is complete. All presale tokens are securely held in the CBF Trust & Bank until official distribution.</p>
      </div>
    </div>
  );

  return (
    <div className="montserrat">
      <div className="text-center pt-[54px]">
        <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308]">
          {tokenomicsData.header.title}
        </h2>
        <p className="text-[18px] pb-[64px] text-[#D1D5DB]">
          {tokenomicsData.header.subtitle}
        </p>
      </div>
      
      <div className="flex justify-center p-[30px] gap-[48px]">
        {renderPresaleMechanics(tokenomicsData.sections[0])}
        {renderTokenDistribution(tokenomicsData.sections[1])}
      </div>
    </div>
  );
};

export default TokenomicsSection;