import Header from "@/components/Header";
import { config } from "@/config";
import "./globals.css";
export const metadata = {
  title: {
    default: config.appName,
    template: `%s | ${config.appName}`,
  },
  description: "A simple e-commerce website",
  keywords: ["e-commerce", "shopping", "online store"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <footer>This is footer</footer>
      </body>
    </html>
  );
}
