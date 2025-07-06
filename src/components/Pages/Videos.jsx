import CustomVideoPlayer from "../Common/CustomVideoPlayer"

const Videos=()=>{
    return(
        <div className="flex justify-center pt-[125px] gap-[40px] pb-[100px]">
        <CustomVideoPlayer
        src="/4053047-uhd_2560_1440_25fps.mp4" 
        poster="/abt3.png"
        className="max-w-[620px] max-h-[350px] rounded"
        />
        <CustomVideoPlayer
        src="/4053047-uhd_2560_1440_25fps.mp4" 
        poster="/abt3.png"
        className="max-w-[620px] max-h-[350px] rounded"
        />
      </div>
    )
}
export default Videos