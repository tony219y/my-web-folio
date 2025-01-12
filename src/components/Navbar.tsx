import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  isSecondDivVisible: boolean;
  scrollToFirstDiv: () => void;
  scrollToSecondDiv: () => void;
  scrollToThirdDiv: () => void;
  scrollToForthDiv: () => void;
}

function Navbar({
  isSecondDivVisible,
  scrollToFirstDiv,
  scrollToSecondDiv,
  scrollToThirdDiv,
  scrollToForthDiv,
}: NavbarProps) {
  const [navToggle, setnavToggle] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = async () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down
        try{
          setnavToggle(false)
        }
        finally{
          setShowNavbar(false);
        }
      } else {
        // User is scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className={`transition-all duration-300 fixed flex top-0 w-full h-20 font-outfit p-5 px-[70px] z-30 items-center max-lg:px-10 max-md:flex-col max-sm:px-0 max-sm:bg-black/40 ${ showNavbar? "translate-y-0":"-translate-y-full"}`}>
      {/* Navbar Content */}
      <div className="flex w-full justify-between items-center px-10">
        <h1
          onClick={scrollToFirstDiv}
          className={`font-bold ${
            isSecondDivVisible ? "text-black" : "text-white"
          } text-center duration-500 cursor-pointer`}
        >
          TONY
          <br />
          219Y
        </h1>

        {/* Burger Toggle */}
        <button className="sm:hidden" onClick={() => setnavToggle(!navToggle)}>
          <Menu color="white" />
        </button>

        {/* Desktop Menu */}
        <div
          className={`flex justify-around items-center ${
            !isSecondDivVisible ? "bg-[#F8F8F8]" : "bg-[#1C1C1C]"
          } h-10 w-1/3 gap-5 shadow-inner-strong rounded-full px-6 duration-500 max-xl:hidden`}
        >
          <button
            onClick={scrollToSecondDiv}
            className={`flex w-full justify-center ${
              !isSecondDivVisible ? "text-black" : "text-gray-300"
            } duration-500 hover:bg-white hover:shadow-3D hover:text-black rounded-full`}
          >
            ABOUT
          </button>
          <button
            onClick={scrollToThirdDiv}
            className={`flex w-full justify-center ${
              !isSecondDivVisible ? "text-black" : "text-gray-300"
            } duration-500 hover:bg-white hover:shadow-3D hover:text-black rounded-full`}
          >
            PROJECTS
          </button>
          <button
            onClick={scrollToForthDiv}
            className={`flex w-full justify-center ${
              !isSecondDivVisible ? "text-black" : "text-gray-300"
            } duration-500 hover:bg-white hover:shadow-3D hover:text-black rounded-full`}
          >
            CONTACT
          </button>
        </div>

        {/* Request a Call Button */}
        <button className="bg-[#1E1E1E] px-6 rounded-full h-10 text-white hover:bg-[#F8F8F8] hover:text-black duration-500 max-md:hidden">
          <p>Request a Call</p>
        </button>
      </div>

      {/* Fullscreen Toggle Menu with Slide-in Animation */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[85%] bg-black/30 backdrop-blur-lg z-40 flex flex-col items-start text-white space-y-6 px-10 shadow-lg transform duration-500 ${
          navToggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setnavToggle(false)}
          className="absolute top-5 left-5 text-white text-2xl font-bold"
        >
          ✕
        </button>
        <div className="flex flex-col pt-[30%] items-start">
          <button
            onClick={() => {
              scrollToSecondDiv();
              setnavToggle(false);
            }}
            className="text-lg font-medium  px-6 py-3 transition-all"
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              scrollToThirdDiv();
              setnavToggle(false);
            }}
            className="text-lg font-medium px-6 py-3 transition-all"
          >
            PROJECTS
          </button>
          <button
            onClick={() => {
              scrollToForthDiv();
              setnavToggle(false);
            }}
            className="text-lg font-medium px-6 py-3 transition-all"
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
