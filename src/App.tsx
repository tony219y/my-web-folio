import { useRef, useState, useEffect } from "react";
import { Linkedin, Facebook, Github, Instagram } from "lucide-react";
import Navbar from "./components/Navbar";
import { MapPin } from "lucide-react";
import ParticlesBackground from "./components/Particles";
import MouseGlow from "./components/GlowEffect";
import CardSkill from "./components/CardSkill";
import { Avatar } from "@mui/material";


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
     <div className="max-md:hidden z-10">
        <Navbar
          isSecondDivVisible={isSecondDivVisible}
          scrollToSecondDiv={scrollToSecondDiv}
          scrollToFirstDiv={scrollToFirstDiv}
          scrollToThirdDiv={scrollToThirdDiv}
          scrollToForthDiv={scrollToForthDiv}
        />
      </div>

      {/* First Div */}
      <div
        ref={firstDivRef}
        className="flex w-full h-screen bg-gradient-to-b from-black to-[#2D0040] items-center px-5 z-10"
      >
        <div className="flex flex-col w-full justify-center px-5 gap-5 md:pl-60 z-10">
          <h1 className="text-[#C1C1C1] flex text-[40px] md:text-[100px] gap-2 text-center">
            Hi, It’s<span className="font-semibold text-white">Gun</span>
          </h1>
          <h1 className="text-[#C1C1C1] flex gap-2 text-[20px] md:text-[40px]">
            I'm a <span className="text-white">Web developer</span>
          </h1>
          <div className="flex w-1/3 justify-around md:justify-around items-center bg-[#F8F8F8] gap-3 md:gap-5 shadow-inner-strong rounded-full p-2 max-sm:w-full">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/akeanant-poomdeesittinon-58376a19a/"
                )
              }
              className="p-2 md:p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl"
            >
              <Linkedin />
            </button>
            <button
              onClick={() => window.open("https://www.facebook.com/gunaekanan/")}
              className="p-2 md:p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl"
            >
              <Facebook />
            </button>
            <button
              onClick={() => window.open("https://github.com/tony007x")}
              className="p-2 md:p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl"
            >
              <Github />
            </button>
            <button
              onClick={() => window.open("https://www.instagram.com/_gunnotgun/")}
              className="p-2 md:p-3 duration-500 hover:bg-white hover:shadow-3D rounded-2xl"
            >
              <Instagram />
            </button>
          </div>
          <MouseGlow />
          <ParticlesBackground />
        </div>
      </div>

      {/* Second Div */}
      <div
        ref={secondDivRef}
        className="flex flex-col w-full min-h-screen bg-[#F8F8F8] px-3 md:px-[75px] py-10 gap-5 z-10"
      >
        <div className="flex flex-col md:flex-row w-full h-fit pt-10 gap-5 justify-around z-10">
          <div className="flex flex-col w-full md:w-[550px] h-[200px] bg-white border-2 justify-between py-5 px-3 z-10">
            <h1 className="font-bold text-lg self-center">ABOUT</h1>
            <p className="font-extralight text-sm md:text-lg">
              My name is Akeanant Poomdeesittinon, and my nickname is Gun. <br />
              I am currently studying{" "}
              <a
                href="https://curriculum.kmitl.ac.th/curriculum/comsci/"
                className="text-[#E35205] duration-500 hover:underline "
              >
                Computer Science at KMITL
              </a>
              , pursuing a Bachelor's degree.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-[550px] h-[200px] bg-white border-2 justify-between gap-5 py-5 px-3">
            <h1 className="font-bold text-lg self-center">OWNER</h1>
            <div className="flex items-center gap-4">
              <Avatar alt="tony219y" src="https://avatars.githubusercontent.com/u/66866324?s=400&u=397fd7cea82fce688ee39da2f89e3aaf3258feb9&v=4" />
              <div>
                <h1 className="font-extralight">Akenanat Poomdeesittinon</h1>
                <p className="flex font-extralight text-gray-400 items-center">
                  <MapPin size={18} /> Bangkok, KMITL
                </p>
              </div>
            </div>
            <button
              onClick={() => window.open("https://github.com/tony007x")}
              className="flex border justify-center self-center w-full md:w-2/3 bg-[#2C3E50] duration-500 hover:bg-[#000000] text-white rounded-full p-2"
            >
              Follow me on Github
            </button>
          </div>
        </div>

        <div className="flex h-full w-full justify-center items-center flex-wrap">
          <CardSkill />
        </div>
      </div>

      {/* Third and Forth Div */}
      <div ref={thirdDivRef} className=" flex h-screen w-full "></div>
      <div ref={ForthDivRef} className=" flex h-screen w-full "></div>
    </>
  );
}

export default App;
