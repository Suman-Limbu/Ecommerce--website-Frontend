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
        <header>This is header</header>{children}
        <footer>This is footer</footer>
        </body>
    </html>
  );
}
