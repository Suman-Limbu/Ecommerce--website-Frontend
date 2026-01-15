import Footer from "@/components/Footer";
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
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}


function home(){

}

const home=()=>{

}

home();
const arr1=[1,2,3]
const arr2=[4,5,6]
console.log(arr1+arr2)
 [1,2,3,4,5,6]