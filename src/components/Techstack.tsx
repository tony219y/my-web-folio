import React from "react";

type TechItemProps = {
  name: string;
  type: string;
  image: string;
};

const TechItem = React.memo(({ name, type, image }: TechItemProps) => (
  <div className="flex w-full h-[100px] rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-white/20">
    <div className="flex w-[80px] h-full bg-white rounded-xl p-2 max-md:w-[90px]">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <div className="flex flex-col h-full rounded-xl p-2">
      <h1 className="text-white text-2xl font-bold">{name}</h1>
      <p className="text-white/50 text-sm">{type}</p>
    </div>
  </div>
));

const techList: TechItemProps[] = [
  { name: "React", type: "Frontend Framework", image: "./react.png" },
  { name: "Svelte", type: "Frontend Framework", image: "./svelte.png" },
  { name: "Node.js", type: "Backend Framework", image: "./nodejs.png" },
  { name: "PostgreSQL", type: "Database", image: "./postgresSQL.png" },
  { name: "JavaScript", type: "Programming Language", image: "./javascript.png" },
  { name: "TypeScript", type: "Programming Language", image: "./typescript.png" },
  { name: "Java", type: "Programming Language", image: "./java.png" },
  { name: "Tailwind", type: "CSS Framework", image: "./tailwind.png" },
];

export default React.memo(function Techstack() {
  return (
    <div className="flex flex-col w-[60%] max-lg:w-full">
      {/* Top Container */}
      <div className="flex flex-col w-full justify-center items-start pt-16 gap-4 p-4 max-lg:items-center rounded-xl max-md:gap-4">
        <h1 className="text-white text-8xl font-bold 2xl:text-8xl max-md:text-4xl">TECH</h1>
        <h1 className="text-white/20 text-8xl font-bold 2xl:text-8xl max-md:text-4xl">STACK</h1>

        <div className="grid grid-cols-2 w-full h-full gap-4 rounded-xl p-4 max-md:grid-cols-1">
          {techList.map((tech) => (
            <TechItem key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
});
