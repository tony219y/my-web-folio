import {
  House,
  BookMarked,
  Sparkle,
  Blocks,
  PenTool,
  LucideIcon,
} from "lucide-react";

const navItems = [
  { icon: House, label: "Home", href: "#home" },
  { icon: BookMarked, label: "Projects", href: "#projects" },
  { icon: Sparkle, label: "Experience", href: "#experience" },
  { icon: Blocks, label: "Tools", href: "#tools" },
  { icon: PenTool, label: "Message", href: "#send-message" },
];

type NavItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const NavItem = ({ icon: Icon, label, href }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative group"
    >
      <Icon size={18} color="#ffffff" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-center items-center mt-5 z-50">
      <div className="flex w-1/5 max-md:w-1/2 bg-[#373737] justify-around items-center p-2 rounded-xl">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;