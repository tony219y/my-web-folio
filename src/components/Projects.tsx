import ProjectList from "./Projects/ProjectList"

function Projects() {
  return (
    <div className="flex flex-col w-[60%] min-h-screen h-full max-lg:w-full">
        {/* Top Container   */}
        <div className="flex flex-col w-full h-full justify-center items-start pt-16 gap-4 p-4 max-lg:items-center">
            <h1 className="text-white text-8xl font-bold 2xl:text-8xl max-md:text-4xl">RECENT</h1>
            <h1 className="text-white/20 text-8xl font-bold 2xl:text-8xl max-md:text-4xl">PROJECTS</h1>
        </div>
        {/* Bottom Container */}
        <div className="flex flex-col w-full flex-grow overflow-y-auto">
            <div className="flex flex-col w-full items-center gap-4 p-4">
                {/* Project 1 */}
                <ProjectList
                    title="Weather App"
                    description="You can choose a province and district, and the app will show you the temperature, humidity, and whether it’s expected to rain or not."
                    image="./weather-icon.png"
                    repository="https://github.com/tony007x/weather-app"
                    viewMore="https://weather-app.tony219y.com"
                />
                <ProjectList
                    title="Finlytics (Coming Soon)"
                    description="Finlytics is a web application manage financial data."
                    image="./finlytics.png"
                    repository="https://github.com/tony007x/Finlytics"
                    viewMore="https://finlytics.tony219y.com"
                />
            </div>
        </div>
    </div>
  )
}

export default Projects