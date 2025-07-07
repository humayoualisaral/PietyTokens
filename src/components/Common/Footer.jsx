import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Twitter, Hash, BookOpen } from "lucide-react";

// Mock icon components since the original imports aren't available
const Discord = ({ color = "#EAB308", size = 24 }) => <Hash color={color} size={size} />;
const EmailIconGrey = () => <Mail color="#9CA3AF" size={16} />;
const Location = () => <MapPin color="#9CA3AF" size={16} />;
const Medium = ({ color = "#EAB308", size = 24 }) => <BookOpen color={color} size={size} />;
const PhoneGrey = () => <Phone color="#9CA3AF" size={16} />;
const Telegram = ({ color = "#EAB308", size = 24 }) => <MessageCircle color={color} size={size} />;
const TwitterIcon = ({ color = "#EAB308", size = 24 }) => <Twitter color={color} size={size} />;

const Footer = () => {
  return (
    <div className="montserrat">
      {/* Header Section */}
      <div className="text-center pt-[54px] px-4 sm:px-6 lg:px-0">
        <h2 className="text-[24px] sm:text-[30px] pb-[20px] font-bold text-[#FFFFFF]">
          Secure Your Position as a Founding Member
        </h2>
        <p className="text-[16px] sm:text-[18px] pb-[64px] text-[#D1D5DB] max-w-2xl mx-auto">
          Join the exclusive group of early adopters who will shape the future of asset-backed digital currency.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-[16px] sm:gap-[24px] px-4 sm:px-0">
        <button className="bg-[#FFD700] text-[#000] font-semibold text-[14px] sm:text-[16px] py-[10px] sm:py-[13px] px-[24px] sm:px-[30px] rounded-full border-[1px] sm:border-[2px] border-[#EAB208] hover:bg-[#00000060] hover:text-[#FFD700] transition-colors duration-300 w-full sm:w-auto">
          Invest Now
        </button>
        <button className="bg-[#00000060] text-[#fff] font-semibold text-[14px] sm:text-[16px] py-[10px] sm:py-[13px] px-[24px] sm:px-[30px] rounded-full border-[1px] sm:border-[2px] border-[#EAB208] hover:bg-[#FFD700] hover:text-[#000] transition-colors duration-300 w-full sm:w-auto">
          Read Whitepaper
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center pt-[50px] gap-[24px] sm:gap-[32px] pb-[50px] sm:pb-[100px]">
        <Telegram />
        <TwitterIcon />
        <Discord />
        <Medium />
      </div>

      {/* Footer Content */}
      <div className="px-[20px] sm:px-[30px] pb-[50px]">
        <div className="flex flex-col lg:flex-row lg:justify-evenly gap-[40px] lg:gap-[20px] max-w-7xl mx-auto">
          
          {/* Company Info - Always first/left */}
          <div className="flex-1 max-w-[279px] mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start mb-4">
              <img src="/Logo.png" alt="Piety Token Logo" className="h-12" />
            </div>
            <p className="text-[14px] sm:text-[16px] text-[#9CA3AF] pt-[10px] text-center lg:text-left">
              A digital currency backed by real assets, bringing stability and value to the cryptocurrency space.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-[16px] pt-[23px]">
              <Telegram color="#9CA3AF" size={20} />
              <TwitterIcon color="#9CA3AF" size={20} />
              <Discord color="#9CA3AF" size={20} />
              <Medium color="#9CA3AF" size={20} />
            </div>
          </div>

          {/* Quick Links - Second to stack */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[16px] sm:text-[18px] text-[#FFFFFF] font-bold pb-[16px]">Quick Links</h2>
            <ul className="text-[14px] sm:text-[16px] text-[#9CA3AF] flex flex-col gap-[8px]">
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">About</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Benefits</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Tokenomics</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Roadmap</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          {/* Resources - Third to stack */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[16px] sm:text-[18px] text-[#FFFFFF] font-bold pb-[16px]">Resources</h2>
            <ul className="text-[14px] sm:text-[16px] text-[#9CA3AF] flex flex-col gap-[8px]">
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Whitepaper</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Press Kit</li>
            </ul>
          </div>

          {/* Contact Info - Fourth to stack */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[16px] sm:text-[18px] text-[#FFFFFF] font-bold pb-[16px]">Contact Info</h2>
            <ul className="text-[14px] sm:text-[16px] text-[#9CA3AF] flex flex-col gap-[8px]">
              <li className="flex gap-[12px] items-center justify-center lg:justify-start hover:text-[#FFD700] cursor-pointer transition-colors">
                <EmailIconGrey />
                <span className="break-all">support@pietytoken.com</span>
              </li>
              <li className="flex gap-[12px] items-center justify-center lg:justify-start hover:text-[#FFD700] cursor-pointer transition-colors">
                <PhoneGrey />
                <span>+1 (888) PIETY-TOKEN</span>
              </li>
              <li className="flex gap-[12px] items-start justify-center lg:justify-start hover:text-[#FFD700] cursor-pointer transition-colors">
                <Location />
                <span className="text-center lg:text-left">Hangdog Social & Lounge, California, USA.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#EAB3084D] pt-[30px] pb-[30px] text-center">
        <p className="text-[14px] text-[#9CA3AF] px-4">
          © 2024 Piety Token. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;