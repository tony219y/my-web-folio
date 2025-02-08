export default function Techstack() {
    return (
            <div className="flex flex-col w-[60%] max-lg:w-full">
                {/* Top Container */}
                <div className="flex flex-col w-full justify-center items-start pt-16 gap-4 p-4 max-lg:items-center rounded-xl max-md:gap-4 ">
                    <h1 className="text-white text-8xl font-bold 2xl:text-8xl max-md:text-4xl">TECH</h1>
                    <h1 className="text-white/20 text-8xl font-bold 2xl:text-8xl max-md:text-4xl">STACK</h1>
                    <div className="grid grid-cols-2 w-full h-full gap-4 rounded-xl p-4 max-md:grid-cols-1">
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-fit h-full bg-white rounded-xl p-2 gap-2 max-md:w-[90px]">
                                <img src="./react.png" alt="react" className="w-full h-full object-cover rounded-xl" />
                            </div>
                                <div className="flex flex-col h-full rounded-xl p-2">
                                    <h1 className="text-white text-2xl font-bold">React</h1>
                                    <p className="text-white/50 text-sm">Frontend Framework</p>
                                </div>
                        </div>
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-[80px] h-full bg-white rounded-xl p-2 max-md:w-[90px]">
                                <img src="./svelte.png" alt="svelte" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="flex flex-col h-full rounded-xl p-2">
                                <h1 className="text-white text-2xl font-bold">Svelte</h1>
                                <p className="text-white/50 text-sm">Frontend Framework</p>
                            </div>
                        </div>
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-[80px] h-full bg-white rounded-xl p-2 max-md:w-[90px]">
                                <img src="./nodejs.png" alt="nodejs" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="flex flex-col h-full rounded-xl p-2">
                                <h1 className="text-white text-2xl font-bold">Node.js</h1>
                                <p className="text-white/50 text-sm">Backend Framework</p>
                            </div>
                        </div>
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-[80px] h-full bg-white rounded-xl p-2 max-md:w-[90px]">
                                <img src="./postgresSQL.png" alt="postgresSQL" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="flex flex-col h-full rounded-xl p-2">
                                <h1 className="text-white text-2xl font-bold">PostgreSQL</h1>
                                <p className="text-white/50 text-sm">Database</p>
                            </div>
                        </div>
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-[80px] h-full bg-white rounded-xl p-2 max-md:w-[90px]">
                                <img src="./javascript.png" alt="javascript" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="flex flex-col h-full rounded-xl p-2">
                                <h1 className="text-white text-2xl font-bold">JavaScript</h1>
                                <p className="text-white/50 text-sm">Programming Language</p>
                            </div>
                        </div>
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-[80px] h-full bg-white rounded-xl p-2 max-md:w-[90px]">
                                <img src="./typescript.png" alt="typescript" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="flex flex-col h-full rounded-xl p-2">
                                <h1 className="text-white text-2xl font-bold">TypeScript</h1>
                                <p className="text-white/50 text-sm">Programming Language</p>
                            </div>
                        </div>
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-[80px] h-full bg-white rounded-xl p-2 max-md:w-[90px]">
                                <img src="./java.png" alt="java" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="flex flex-col h-full rounded-xl p-2">
                                <h1 className="text-white text-2xl font-bold">Java</h1>
                                <p className="text-white/50 text-sm">Programming Language</p>
                            </div>
                        </div>
                        <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
                            <div className="flex w-fit h-full bg-white rounded-xl p-2 max-md:w-[90px]">
                                <img src="./tailwind.png" alt="tailwind" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="flex flex-col h-full rounded-xl p-2">
                                <h1 className="text-white text-2xl font-bold">Tailwind</h1>
                                <p className="text-white/50 text-sm">CSS Framework</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}