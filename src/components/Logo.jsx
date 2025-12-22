import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { config } from "./../config/index";

const Logo = () => {
  const { appName } = config;
  return (
    <Link href={HOME_ROUTE} className="text-xl">
      <div className="flex items-center justify-start font-semibold hover:font-bold w-37">
        <span className="text-secondary">{appName}</span>
      </div>
    </Link>
  );
};

export default Logo;
