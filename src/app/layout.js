import Link from "next/link";
import "./globals.css";
export const metadata = {
  title: " Dokan",
  description: "A simple e-commerce website",
  keywords: ["e-commerce", "shopping", "online store"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container mx-auto py-1 px-2">
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl">Dokan</h1>
              <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer>This is footer</footer>
      </body>
    </html>
  );
}
