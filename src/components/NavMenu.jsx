import Link from "next/link";
const NavMenu = () => {
  return (
    <nav className="hidden md:flex gap-5">
      <Link href="/" className="text-sm hover:text-primary">
        Home
      </Link>
      <Link href="/products" className="text-sm hover:text-primary">
        Products
      </Link>
      <Link href="/popular-products" className="text-sm hover:text-primary">
        Popular
      </Link>
      <Link href="/categories" className="text-sm hover:text-primary">
        Categories
      </Link>
      <Link href="/testimonials" className="text-sm hover:text-primary">
        Testimonials
      </Link>
    </nav>
  );
};

export default NavMenu;
