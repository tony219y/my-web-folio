import StatItem from "./landing/StatItem";

function Landing() {
  return (
    <div className="flex flex-col w-[60%] h-full max-lg:w-full">
          {/* Top Container */}
          <div className="flex flex-col w-full h-full items-start pt-16 p-4 gap-5 max-lg:items-center">
            <h1 className="text-white text-8xl font-bold 2xl:text-8xl max-md:text-4xl">WEB</h1>
            <h1 className="text-white/30 text-8xl font-bold 2xl:text-8xl max-md:text-4xl">DEVELOPER</h1>
            <p className="text-white/40 text-xl font-light 2xl:text-lg max-md:text-sm">
              "Third-year student passionate about becoming a Fullstack Developer. 
              I'm really excited about mastering both Frontend and Backend development to create complete web applications from user interfaces to database systems.
              I have experience with React, Svelte, TailwindCSS, Node, PostgreSQL etc. and I love picking up new technologies and constantly improving my skills."
            </p>

          {/* Bottom Container */}
          <div className="flex w-fit h-1/3 justify-start p-8 gap-8">
            <StatItem years={5} title="YEARS OF" value="LEARNING & DEVELOPMENT" />
            <StatItem years={1} title="PROJECTS" value="COMPLETED" />
            <StatItem years={7} title="PROGRAMMING LANGUAGES" value="" />
          </div>

          {/* THREE BOXES */}
          <div className="flex w-full h-full p-4 gap-4 text-white max-md:flex-col">
            <div className="flex w-1/3 h-[250px] bg-orange-300 hover:bg-orange-400 transition-all duration-300 rounded-xl justify-center items-center max-md:w-full">Comming Soon...</div>
            <div className="flex w-1/3 h-[250px] bg-pink-300 hover:bg-pink-400 transition-all duration-300 rounded-xl justify-center items-center max-md:w-full">Comming Soon...</div>
            <div className="flex w-1/3 h-[250px] bg-blue-300 hover:bg-blue-400 transition-all duration-300 rounded-xl justify-center items-center max-md:w-full">Comming Soon...</div>
          </div>

          </div>
        </div>
  )
}

export default Landing