import React from 'react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  backgroundImage,
  width = "395px",
  height = "245px" 
}) => {
  return (
    <div 
      className={`px-[34px] py-[33px] rounded-xl border-[1px] border-[#EAB30833] relative`}
      style={{ width, height }}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-no-repeat bg-center rounded-xl"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>
      )}
      
      <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
      
      <div className="relative z-10">
        {Icon && <Icon />}
        <h2 className="pt-[20px] pb-[12px] text-[20px] font-bold">{title}</h2>
        <p className="text-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;