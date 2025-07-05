const Navbar=()=>{
    return(
        <div className="bg-black montserrat py-[30px] h-[80px] flex items-center justify-center">
         <div className="flex justify-between w-[100%] px-[80px] items-center">
            <div>
                <img src="/Logo.png" alt="" />
            </div>
            <div>
                <ul className="flex font-[16px] justify-center items-center gap-[20px]">
                    <li>Dasboard</li>
                    <li>About</li>
                    <li>Benefits</li>
                    <li>Tokenomics</li>
                    <li>Roadmap</li>
                    <li>Faq</li>
                </ul>
            </div>
            <div>
                <button className="text-[#000] bg-[#EAB308] flex justify-end items-center h-[52px] gap-[3px] font-semibold text-[16px] rounded-full px-[20px]">Invest Here <img src="/Investment.png" alt="" /></button>
            </div>
         </div>
        </div>
    )
}
export default Navbar;