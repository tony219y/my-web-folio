import {
  House,
  BookMarked,
  Sparkle,
  Blocks,
  PenTool,
  LucideIcon,
} from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { icon: House, label: "Home", href: "#home" },
  { icon: BookMarked, label: "Projects", href: "#projects" },
  { icon: Sparkle, label: "Experience", href: "#experience" },
  { icon: Blocks, label: "Tools", href: "#tools" },
  { icon: PenTool, label: "Message", href: "#send-message" },
];

function NavItem({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={href} onClick={handleClick} className="relative group">
      <Icon size={18} color="#ffffff" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 -translate-y-2 transition-all duration-700">
        {label}
      </span>
    </a>
  );
}

function Navbar() {
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        navbar?.classList.add('-translate-y-full');
      } else {  
        navbar?.classList.remove('-translate-y-full');
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        navbar?.classList.remove('-translate-y-full');
      }, 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar fixed w-full top-0 flex justify-center items-center mt-5 transition-transform duration-700">
        <div className="flex w-1/5 bg-[#373737] justify-around items-center p-2 rounded-xl max-md:w-1/2">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
