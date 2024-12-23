import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine, Container } from "tsparticles-engine"; // ใช้สำหรับการตั้งประเภท

const ParticlesBackground: React.FC = () => {
  // ฟังก์ชันที่ใช้โหลดส่วนเสริม slim ของ tsparticles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // โหลด slim version ของ particles
  }, []);

  // ฟังก์ชันที่ใช้หลังจากที่ container ของ particles โหลดเสร็จ
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log(container); // แสดงข้อมูล container เมื่อโหลดเสร็จ
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit} // ฟังก์ชันสำหรับการตั้งค่า particles
      loaded={particlesLoaded} // ฟังก์ชันที่เรียกหลังจากโหลดเสร็จ
      options={{
        particles: {
          number: {
            value: 30,
          },
          shape: {
            type: "circle", // รูปทรงวงกลม
          },
          size: {
            value: 3,
          },
          links: {
            enable: true, // ทำให้อนุภาคเชื่อมโยงกัน
            distance: 300, // ระยะห่างของเส้นที่เชื่อมต่อ
            color: "#ffffff",
            opacity: 0.8,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          zIndex: {
            opacityRate: 0
          }
        },
      }}
    />
  );
};

export default ParticlesBackground;
