const Gallery=()=>{
    return(
        <div className="relative">
        <div className="px-[26px] relative max-[1000px]:px-[16px]">
        <div className="flex gap-[20px] max-[1000px]:gap-[10px]">
         <img src="/r1.png" alt="" width={"100%"} height={"200px"} className="max-[1000px]:w-full h-[250px] max-[1000px]:h-[120px] max-[1000px]:object-cover" />
         <img src="/r2.png" alt="" width={"100%"} height={"200px"} className="max-[1000px]:w-full h-[250px] max-[1000px]:h-[120px] max-[1000px]:object-cover" />
         <img src="/r3.png" alt="" width={"100%"} height={"200px"} className="max-[1000px]:w-full h-[250px] max-[1000px]:h-[120px] max-[1000px]:object-cover" />
       </div>
       <div className="flex gap-[20px] pt-[20px] max-[1000px]:gap-[10px] max-[1000px]:pt-[10px]">
         <img src="/r4.png" alt="" width={"80%"} height={"200px"} className="max-[1000px]:w-[80%] max-[1000px]:h-[120px] max-[1000px]:object-cover" />
         <img src="/r5.png" alt="" width={"100%"} height={"200px"} className="max-[1000px]:w-full max-[1000px]:h-[120px] max-[1000px]:object-cover" />
         <img src="/r6.png" alt="" width={"90%"} height={"200px"} className="max-[1000px]:w-[90%] max-[1000px]:h-[120px] max-[1000px]:object-cover" />
       </div>
       <div className="flex gap-[20px] pt-[20px] max-[1000px]:gap-[10px] max-[1000px]:pt-[10px]">
         <img src="/r7.png" alt="" width={"70%"} height={"200px"} className="max-[1000px]:w-[25%] max-[1000px]:h-[120px] max-[1000px]:object-cover max-[1000px]:flex-shrink-0" />
         <img src="/r8.png" alt="" width={"70%"} height={"200px"} className="max-[1000px]:w-[25%] max-[1000px]:h-[120px] max-[1000px]:object-cover max-[1000px]:flex-shrink-0" />
         <img src="/r9.png" alt="" width={"100%"} height={"200px"} className="max-[1000px]:w-[50%] max-[1000px]:h-[120px] max-[1000px]:object-cover" />
       </div>
        </div>
        <div className="bg-[#153245] w-[100%]">
         <img src="/ImgGoldBar.png" alt="" width={"100%"} />
        </div>
    
        </div>
    )
}

export default Gallery