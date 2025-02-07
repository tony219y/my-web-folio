
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Profile() {

  return (
    <div className="flex w-full h-fit justify-center items-center lg:hidden p-8 mt-[8%]">
      <div className="profile-card flex w-full h-fit bg-white backdrop-blur-sm rounded-xl">
      {/* Main Container */}
        <div className="flex flex-col w-full h-full justify-around items-center p-8 shadow-lg shadow-white/20 rounded-xl">
        {/* Profile Container */}
            <div className="flex flex-col w-full h-full rounded-xl justify-around items-center p-4 gap-2">
                <div className="flex rounded-xl justify-center items-center">
                    <div className="flex w-full h-full bg-white rounded-xl p-1 justify-center items-center">
                        <img src="./profile.png" alt="Profile" 
                            className="w-full h-full object-cover rounded-xl max-xl:w-1/3 max-xl:h-1/3 max-md:w-full max-md:h-1/2" />
                    </div>
                </div>
                <h1 className="text-black text-2xl font-bold text-center max-md:text-xl">Akeanant Poomdeesittinon</h1>
            </div>
            {/* Information Container */}
            <div className="flex flex-col w-1/2 h-1/2 bg-white/10 backdrop-blur-sm rounded-xl gap-4 p-4 justify-around max-md:w-full">
            <p className="text-black/50 text-sm text-center">
                A Web Developer who is interested in building a website that is easy to use and has a good user experience.
            </p>
            <div className="flex w-full h-fit bg-white/30 backdrop-blur-sm rounded-xl justify-around items-center p-2">
                <a href="https://www.facebook.com/gunaekanan/" className="hover:scale-125 transition-transform duration-300">
                    <FaFacebook size={20}/>
                </a>
                <a href="https://www.instagram.com/_gunnotgun/" className="hover:scale-125 transition-transform duration-300">
                    <FaInstagram size={20}/>
                </a>
                <a href="https://x.com/_gng219y" className="hover:scale-125 transition-transform duration-300">
                    <FaTwitter size={20}/>
                </a>
                <a href="https://www.linkedin.com/in/akeanant-poomdeesittinon-58376a19a/" className="hover:scale-125 transition-transform duration-300">
                    <FaLinkedin size={20}/>
                </a>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile