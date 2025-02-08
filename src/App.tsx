import Cardprofile from "./components/Cardprofile"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Projects from "./components/Projects"
import Profile from "./components/Profile"
import Experience from "./components/Experience"
function App() {
  return (
    <>
      <Navbar />
      <Cardprofile />
      <Profile />
      <div id="home" className="flex w-full justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
        <Landing />
      </div>
      <div id="projects" className="flex w-full justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
        <Projects />
      </div>
      <div id="experience" className="flex w-full justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
        <Experience />
      </div>
        <div id="tools" className="flex w-full min-h-screen h-auto justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
      </div>
      <div id="send-message" className="flex w-full min-h-screen h-auto justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
      </div>
    </>
  )
}

export default App