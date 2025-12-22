"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./../constants/navlinks";
const NavMenu = () => {
  const pathName = usePathname();
  return (
    <nav className="hidden md:flex gap-5">
      {navLinks.map((navLink) => {
        const isActive =pathName===navLink.route ||
      (navLink.route !== "/" && pathName.startsWith(navLink.route));
        return (
          <Link
            key={navLink.route}
            href={navLink.route}
            className={`text-sm hover:text-primary ${
              isActive ? "text-primary font-medium" : ""
            }`}
          >
            {navLink.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
