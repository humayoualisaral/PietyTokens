import CustomVideoPlayer from "../Common/CustomVideoPlayer"

const Videos = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center pt-[80px] sm:pt-[100px] lg:pt-[125px] gap-[20px] sm:gap-[30px] lg:gap-[40px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-4 sm:px-6 lg:px-8">
            <CustomVideoPlayer
                src="/4053047-uhd_2560_1440_25fps.mp4" 
                poster="/abt3.png"
                className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[620px] rounded"
            />
            <CustomVideoPlayer
                src="/4053047-uhd_2560_1440_25fps.mp4" 
                poster="/abt3.png"
                className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[620px] rounded"
            />
        </div>
    )
}

export default Videos