import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava
} from "react-icons/fa";
import {
  SiSvelte,
  SiTypescript,
  SiExpress,
  SiHono,
  SiMysql,
  SiPostgresql,
  SiDrizzle,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    title: "Frontend",
    description:
      "These are the Frontend tools I use to develop and design user interfaces that are both beautiful and functional.",
    icons: [
      { component: <FaHtml5 size={40} color="#E34F26" />, label: "HTML" },
      { component: <FaCss3Alt size={40} color="#1572B6" />, label: "CSS" },
      { component: <FaJs size={40} color="#F7DF1E" />, label: "JavaScript" },
      {
        component: <SiTypescript size={40} color="#3178C6" />,
        label: "TypeScript",
      },
      {
        component: <SiSvelte size={40} className="text-orange-600" />,
        label: "Svelte",
      },
      { component: <FaReact size={40} color="#61DAFB" />, label: "ReactJS" },
      {
        component: <RiTailwindCssFill size={40} color="#38BDF8" />,
        label: "Tailwind",
      },
    ],
  },
  {
    title: "Backend",
    description:
      "These are the Backend tools I use to develop and design user interfaces that are both beautiful and functional.",
    icons: [
      { component: <FaNodeJs size={40} color="#8CC84B" />, label: "NodeJS" },
      {
        component: <SiExpress size={40} color="#ffffff" />,
        label: "ExpressJS",
      },
      {
        component: <SiHono size={40} className="text-orange-600" />,
        label: "Hono",
      },
      {
        component: <FaJava size={40} className="text-white" />,
        label: "Java",
      },
    ],
  },
  {
    title: "Database",
    description:
      "These are the Database tools I use to handle and store data efficiently.",
    icons: [
      { component: <SiMysql size={40} color="#4479A1" />, label: "MySQL" },
      {
        component: <SiPostgresql size={40} color="#336791" />,
        label: "PostgreSQL",
      },
      { component: <SiDrizzle size={40} color="#4E97A6" />, label: "Drizzle" },
    ],
  },
  {
    title: "Tools",
    description:
      "These are the essential tools I use to enhance my development workflow.",
    icons: [
      { component: <VscVscode size={40} color="#5C2D91" />, label: "VSCode" },
      { component: <FaGithub size={40} color="#ffffff" />, label: "GitHub" },
      { component: <FaNodeJs size={40} color="#61DAFB" />, label: "Git" },
    ],
  },
];

const CardSkill = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative w-80 min-h-[600px] bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group"
        >
          {/* Circular Background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D0040] to-transparent scale-0 group-hover:scale-[5] transition-transform duration-500 pointer-events-none"></div>

          {/* Skill Title */}
          <div className="relative z-10 flex flex-col justify-center items-center h-1/3">
            <h3 className="text-2xl font-bold uppercase transition-transform duration-300 group-hover:translate-y-[-40px]">
              {skill.title}
            </h3>

            {/* Description (Visible on Hover) */}
            <p className="absolute bottom-0 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-5">
              {skill.description}
            </p>
          </div>

          {/* Icons */}
          <div className="flex justify-center items-center absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {skill.icons.map((icon, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="flex justify-center items-center">
                    {icon.component}
                  </div>
                  <span className="text-sm text-gray-300">{icon.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkill;
