import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Cardprofile() {
  return (
    <div className="left-[10%] fixed flex w-1/4 h-screen justify-center items-center max-lg:hidden overflow-x-hidden overflow-y-hidden">
      <div className="relative profile-card flex w-full h-fit bg-white backdrop-blur-sm rounded-xl transition-transform duration-700 z-10 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-[200px] h-[200px] p-[4px] rounded-full bg-gradient-to-r from-white via-black/30 to-white" style={{animation: 'spin 5s linear infinite'}}>
          <div className="w-full h-full bg-white rounded-full"></div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] p-[4px] rounded-full bg-gradient-to-r from-white via-black/30 to-white" style={{animation: 'spin 5s linear infinite'}}>
          <div className="w-full h-full bg-white rounded-full"></div>
        </div>
        
      {/* Main Container */}
        <div className="flex flex-col w-full h-full justify-around items-center p-8 shadow-lg shadow-white/20 rounded-xl">
        {/* Profile Container */}
            <div className="flex flex-col w-full h-full rounded-xl justify-around items-center p-4 gap-2 z-10">
                <div className="flex w-full h-full rounded-xl justify-center items-center 
                    bg-gradient-to-r from-black/30 via-black to-black/30 p-1">
                    <div className="flex w-full h-full bg-white rounded-xl p-1">
                        <img src="./profile.png" alt="Profile picture of Akeanant Poomdeesittinon" 
                            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
                <h1 className="text-black text-2xl font-bold text-center">Akeanant Poomdeesittinon</h1>
            </div>
            {/* Information Container */}
            <div className="flex flex-col w-full h-1/2 bg-black/10 backdrop-blur-sm rounded-xl gap-4 p-4 justify-around">
            <p className="text-black text-sm text-center">
                A Web Developer who is interested in building a website that is easy to use and has a good user experience.
            </p>
            <div className="flex w-full h-fit bg-white/80 backdrop-blur-sm rounded-xl justify-around items-center p-2">
                <a href="https://www.facebook.com/gunaekanan/" aria-label="Facebook profile" className="hover:scale-125 transition-transform duration-300">
                    <FaFacebook size={20}/>
                </a>
                <a href="https://www.instagram.com/_gunnotgun/" aria-label="Instagram profile" className="hover:scale-125 transition-transform duration-300">
                    <FaInstagram size={20}/>
                </a>
                <a href="https://x.com/_gng219y" aria-label="Twitter profile" className="hover:scale-125 transition-transform duration-300">
                    <FaTwitter size={20}/>
                </a>
                <a href="https://www.linkedin.com/in/akeanant-poomdeesittinon-58376a19a/" aria-label="LinkedIn profile" className="hover:scale-125 transition-transform duration-300">
                    <FaLinkedin size={20}/>
                </a>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cardprofile