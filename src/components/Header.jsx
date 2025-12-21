import Link from "next/link";
import Logo from "./Logo";
const Header = () => {
  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <nav className="hidden md:flex gap-5">
            <Logo/>
            <Link href="/" className="text-sm hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-sm hover:text-primary">
              Products
            </Link>
            <Link
              href="/popular-products"
              className="text-sm hover:text-primary"
            >
              Popular
            </Link>
            <Link href="/categories" className="text-sm hover:text-primary">
              Categories
            </Link>
            <Link href="/testimonials" className="text-sm hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="text-sm">
              <i className="fa fa-shopping-cart" />
            </div>
            <button className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
