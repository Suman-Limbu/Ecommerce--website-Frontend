import Link from "next/link";
import navLinks from "./../constants/navlinks";
const NavMenu = () => {
  return (
    <nav className="hidden md:flex gap-5">
      {navLinks.map((navLink, index) => (
        <Link
          key={index}
          href={navLink.route}
          className="text-sm hover:text-primary"
        >
          {navLink.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
