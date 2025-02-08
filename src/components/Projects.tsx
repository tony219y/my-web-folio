function Projects() {
  return (
    <div className="flex flex-col w-[60%] min-h-screen h-full max-lg:w-full">
        {/* Top Container   */}
        <div className="flex flex-col w-full h-full justify-center items-start pt-16 gap-4 p-4 max-lg:items-center">
            <h1 className="text-white text-7xl font-bold 2xl:text-8xl max-md:text-4xl">RECENT</h1>
            <h1 className="text-white/20 text-7xl font-bold 2xl:text-8xl max-md:text-4xl">PROJECTS</h1>
        </div>
        {/* Bottom Container */}
        <div className="flex flex-col w-full flex-grow overflow-y-auto">
            <div className="flex flex-col w-full items-center gap-4 p-4">
                {/* Project 1 */}
                <div className="flex h-[200px] w-full p-4 gap-4 rounded-xl transition-all duration-700 max-md:h-[150px] max-md:justify-between hover:bg-white/10">
                    <div className="flex h-full w-1/3 bg-white rounded-xl max-md:w-full">
                        {/* <img src="" alt="img" /> */}
                    </div>
                    <div className="flex flex-col h-full w-full justify-center items-start p-4 gap-4 rounded-xl">
                        <h1 className="text-white text-2xl font-bold max-md:text-xl">Project 1</h1>
                        <p className="text-white/80 text-md font-light max-md:text-sm">Description</p>
                    </div>
                    <div className="flex flex-col h-full w-fit justify-center items-end p-4 gap-4 rounded-xl max-md:hidden">
                        <a href="#" className="text-white/80 text-md font-light text-nowrap ">View More</a>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="flex h-[200px] w-full p-4 gap-4 rounded-xl transition-all duration-700 max-md:h-[150px] max-md:justify-between hover:bg-white/10">
                    <div className="flex h-full w-1/3 bg-white rounded-xl max-md:w-full">
                        {/* <img src="" alt="img" /> */}
                    </div>
                    <div className="flex flex-col h-full w-full justify-center items-start p-4 gap-4 rounded-xl max-md:w-full">
                        <h1 className="text-white text-2xl font-bold max-md:text-xl">Project 2</h1>
                        <p className="text-white/80 text-md font-light max-md:text-sm">Description</p>
                    </div>
                    <div className="flex flex-col h-full w-fit justify-center items-end p-4 gap-4 rounded-xl max-md:hidden">
                        <a href="#" className="text-white/80 text-md font-light text-nowrap">View More</a>
                    </div>
                </div>
                {/* Project 3 */}
                <div className="flex h-[200px] w-full p-4 gap-4 rounded-xl transition-all duration-700 max-md:h-[150px] max-md:justify-between hover:bg-white/10">
                    <div className="flex h-full w-1/3 bg-white rounded-xl max-md:w-full">
                        {/* <img src="" alt="img" /> */}
                    </div>
                    <div className="flex flex-col h-full w-full justify-center items-start p-4 gap-4 rounded-xl max-md:w-full">
                        <h1 className="text-white text-2xl font-bold max-md:text-xl">Project 3</h1>
                        <p className="text-white/80 text-md font-light max-md:text-sm">Description</p>
                    </div>
                    <div className="flex flex-col h-full w-fit justify-center items-end p-4 gap-4 rounded-xl max-md:hidden">
                        <a href="#" className="text-white/80 text-md font-light text-nowrap">View More</a>
                    </div>  
                </div>  
                
            </div>
        </div>
    </div>
  )
}

export default Projects