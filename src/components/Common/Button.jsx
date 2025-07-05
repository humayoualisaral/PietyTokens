const Button=({children})=>{
return(
    <div className="montserrat">
              <button className="bg-[#00000060] font-semibold text-[16px] py-[10px] px-[30px] rounded-full border-[2px] border-[#EAB208] hover:text-[#EAB208] transition-colors duration-300 max-[1000px]:text-[14px] max-[1000px]:py-[8px] max-[1000px]:px-[20px] max-[1000px]:border-[1px]">{children}</button>
              </div>
)
}

export default Button
