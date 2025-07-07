import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-black montserrat py-[15px] sm:py-[30px] h-auto sm:h-[80px] flex items-center justify-center relative">
            <div className="flex justify-between w-full px-[16px] sm:px-[40px] lg:px-[80px] items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img 
                        src="/Logo.png" 
                        alt="Logo" 
                        className="h-[32px] sm:h-[40px] lg:h-auto w-auto"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex">
                    <ul className="flex font-[16px] justify-center items-center gap-[20px] text-white">
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors">Dashboard</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors">About</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors">Benefits</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors">Tokenomics</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors">Roadmap</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors">FAQ</li>
                    </ul>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden sm:flex">
                    <button className="text-[#000] bg-[#EAB308] flex justify-center items-center h-[36px] sm:h-[44px] lg:h-[52px] gap-[3px] font-semibold text-[14px] sm:text-[15px] lg:text-[16px] rounded-full px-[16px] sm:px-[18px] lg:px-[20px] hover:bg-[#D97706] transition-colors">
                        Invest Here 
                        <img 
                            src="/Investment.png" 
                            alt="Investment" 
                            className="h-[16px] sm:h-[18px] lg:h-auto w-auto ml-[2px]"
                        />
                    </button>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 lg:hidden z-50">
                    <div className="px-[16px] py-[20px]">
                        <ul className="flex flex-col gap-[16px] text-white text-[16px]">
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800">Dashboard</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800">About</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800">Benefits</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800">Tokenomics</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800">Roadmap</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px]">FAQ</li>
                        </ul>
                        
                        {/* Mobile CTA Button */}
                        <div className="mt-[20px] sm:hidden">
                            <button className="text-[#000] bg-[#EAB308] flex justify-center items-center h-[44px] gap-[3px] font-semibold text-[15px] rounded-full px-[18px] w-full hover:bg-[#D97706] transition-colors">
                                Invest Here 
                                <img 
                                    src="/Investment.png" 
                                    alt="Investment" 
                                    className="h-[18px] w-auto ml-[2px]"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;