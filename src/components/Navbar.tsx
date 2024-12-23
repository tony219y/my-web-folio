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
  scrollToForthDiv
}: NavbarProps) {
  return (
    <div className="fixed top-0 w-full h-[70px] font-outfit p-5 px-[70px] z-20">
      <div className="flex w-full justify-around">
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
        <div
          className={`flex justify-around items-center ${
            !isSecondDivVisible ? "bg-[#F8F8F8]" : "bg-[#1C1C1C]"
          } h-10 w-1/3 gap-5 shadow-inner-strong rounded-full px-6 duration-500`}
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
        <button className="bg-[#1E1E1E] rounded-full px-6 h-10 text-white hover:bg-[#F8F8F8] hover:text-black duration-500">
          Request a Call
        </button>
      </div>
    </div>
  );
}

export default Navbar;
