import Timeline from "./Timeline"
function Experience() {
  return (
    <div className="flex flex-col w-[60%] max-lg:w-full">
        {/* Top Container */}
        <div className="flex flex-col w-full justify-center items-start pt-16 gap-4 p-4 max-lg:items-center rounded-xl max-md:gap-4 ">
            <h1 className="text-white text-8xl font-bold 2xl:text-8xl max-md:text-4xl">MY</h1>
            <h1 className="text-white/20 text-8xl font-bold 2xl:text-8xl max-md:text-4xl">EXPERIENCE</h1>
            <div className="flex flex-col w-full h-full justify-center items-start pt-8 gap-4 p-4 max-lg:items-center rounded-xl">
                <Timeline />
            </div>
        </div>
    </div>
  )
}

export default Experience