import { useRef, useState, useEffect } from "react";
import { Linkedin, Facebook, Github, Instagram } from "lucide-react";
import Navbar from "./components/Navbar";
import { MapPin } from 'lucide-react';
import ParticlesBackground from "./components/Particles";
import MouseGlow from "./components/GlowEffect";

function App() {
  const firstDivRef = useRef<HTMLDivElement | null>(null); // กำหนด ref สำหรับ div แรก
  const secondDivRef = useRef<HTMLDivElement | null>(null); // กำหนด ref สำหรับ second div
  const thirdDivRef = useRef<HTMLDivElement | null>(null); // กำหนด ref สำหรับ second div
  const ForthDivRef = useRef<HTMLDivElement | null>(null); // กำหนด ref สำหรับ second div
  const [isSecondDivVisible, setIsSecondDivVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === secondDivRef.current) {
            setIsSecondDivVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (secondDivRef.current) observer.observe(secondDivRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToFirstDiv = () => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToSecondDiv = () => {
    if (secondDivRef.current) {
      secondDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToThirdDiv = () => {
    if (thirdDivRef.current) {
      thirdDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToForthDiv = () => {
    if (ForthDivRef.current) {
      ForthDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navbar
        isSecondDivVisible={isSecondDivVisible}
        scrollToSecondDiv={scrollToSecondDiv}
        scrollToFirstDiv={scrollToFirstDiv}
        scrollToThirdDiv={scrollToThirdDiv}
        scrollToForthDiv={scrollToForthDiv}
      />
      <div
        ref={firstDivRef}
        className="flex w-full h-screen bg-gradient-to-b from-black  to-[#2D0040] z-[10]  items-center"
      >
        <div className="flex flex-col w-full  justify-center px-9 gap-5  pl-60 z-10">
          <h1 className="text-[#C1C1C1] flex text-[100px] gap-2">
            Hi, It’s<span className="font-semibold text-white">Gun</span>
          </h1>
          <h1 className="text-[#C1C1C1] flex gap-2 text-[40px]">
            I'm a <h1 className="text-white">Web developer</h1>
          </h1>
          <div className="flex justify-around items-center bg-[#F8F8F8] w-1/3 gap-5 shadow-inner-strong rounded-full duration-500 p-1 z-10">
            <button className=" p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl">
              <Linkedin />
            </button>
            <button className=" p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl">
              <Facebook />
            </button>
            <button className=" p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl">
              <Github />
            </button>
            <button className=" p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl">
              <Instagram />
            </button>
          </div>
        <MouseGlow/>
        <ParticlesBackground />
        </div>
      </div>

      <div
        ref={secondDivRef}
        className="flex w-full min-h-screen bg-[#F8F8F8] px-[75px] z-10"
      >
        {/* Box1 */}
        <div className="grid w-full justify-center pt-28 z-10">
          <div className="flex flex-col w-[550px] h-[200px] bg-white border-2 justify-between py-5 px-3">
            <h1 className="font-bold text-lg self-center">ABOUT</h1>
            <p className="font-extralight text-lg">
              My name is Akeanant Poomdeesittinon, and my nickname is Gun.{" "}
              <br />I am currently studying{" "}
              <a
                href="https://curriculum.kmitl.ac.th/curriculum/comsci/"
                className="text-[#E35205] duration-500 hover:underline "
              >
                Computer Science at KMITL
              </a>
              , pursuing a Bachelor's degree.
            </p>
          </div>
        </div>

        {/* Box2 */}
        <div className="grid w-full pt-28 justify-around gap-8 z-10">
          <div className="flex flex-col w-[550px] h-[200px] bg-white border-2 justify-between gap-5 py-5 px-3">
            <h1 className="font-bold text-lg pl-3 self-center">OWNER</h1>
            <div className="flex items-center pl-5 gap-4">
              <img src="https://avatars.githubusercontent.com/u/66866324?s=400&u=397fd7cea82fce688ee39da2f89e3aaf3258feb9&v=4" alt="profile" className="w-11 h-11 rounded-full"/>
              <div>
                <h1 className=" font-extralight">Akenanat Poomdeesittinon</h1>
                <p className="flex font-extralight text-gray-400 items-center">
                  {" "}<MapPin size={18} />
                  Bangkok, KMITL
                </p>
              </div>
            </div>
            <button 
              onClick={()=>{window.open("https://github.com/tony007x")}}
              className="flex border justify-center self-center w-2/3 bg-[#2C3E50] duration-500 hover:bg-[#000000] text-white rounded-full p-1 ">
              Follow me on Github
            </button>
          </div>
        </div>
        <MouseGlow/>
      </div>

      {/* ThirdDiv */}
      <div ref={thirdDivRef} className="flex h-screen w-full "></div>

      {/* ForthDiv */}
      <div ref={ForthDivRef} className="flex h-screen w-full "></div>
    </>
  );
}

export default App;
