import React from "react";

interface StatItemProps {
  years: number;
  title: string;
  value: string;
}

const StatItem = React.memo(({ years, title, value }: StatItemProps) => {
  return (
    <div className="flex flex-col h-full w-1/3 rounded-xl justify-center items-center">
      <h1 className="text-white text-8xl font-bold max-md:text-5xl">+{years}</h1>
      <p className="text-white/80 text-md font-light text-end max-md:text-[10px]">
        {title} <br /> {value}
      </p>
    </div>
  );
});
export default StatItem;
