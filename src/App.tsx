import Cardprofile from "./components/Cardprofile"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Projects from "./components/Projects"
import Profile from "./components/Profile"
import Experience from "./components/Experience"
import Techstack from "./components/Techstack"
import ContactMail from "./components/ContactMail"
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
      <div id="tools" className="flex w-full justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
        <Techstack />
      </div>
      <div id="send-message" className="flex w-full min-h-screen h-screen justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
        <ContactMail />
      </div>
      <footer className="flex w-full justify-center md:justify-end px-4 md:px-6 lg:px-8 z-10">
        <p className="text-white/50 text-sm">© 2025 Akeanant Poomdeesittinon. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App