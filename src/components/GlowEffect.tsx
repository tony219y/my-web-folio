import { useState, useEffect, useRef } from "react";

const MouseGlow = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorSpeed, setCursorSpeed] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      const speedX = Math.abs(newPosition.x - lastPosition.current.x);
      const speedY = Math.abs(newPosition.y - lastPosition.current.y);

      setCursorPosition(newPosition);
      setCursorSpeed({ x: speedX, y: speedY });
      lastPosition.current = newPosition;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skewX = clamp(cursorSpeed.x / 50, -10, 10).toFixed(1); // จำกัด skewX
  const skewY = clamp(cursorSpeed.y / 50, -10, 10).toFixed(1); // จำกัด skewY
  const opacity = 0.3 + Math.min(cursorSpeed.x + cursorSpeed.y, 100) / 300; // เพิ่ม/ลดความโปร่งใส

  return (
    <div
      style={{
        position: "fixed",
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, rgba(173, 216, 230, 0.8), rgba(173, 216, 230, 0.3))",
        pointerEvents: "none",
        transform: `translate(-50%, -50%) skew(${skewX}deg, ${skewY}deg)`,
        boxShadow: "0 0 30px 15px rgba(173, 216, 230, 0.2)",
        zIndex: 9999,
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
        opacity,
      }}
    />
  );
};

export default MouseGlow;
