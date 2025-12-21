import Link from 'next/link';
import { config } from './../config/index';

const Logo = () => {
    const {appName} = config
  return (
    <Link href="/" className="text-xl">
      <div className="flex items-center justify-start font-semibold hover:font-bold w-40">
        <span className="text-secondary">{appName}</span>
      </div>
    </Link>
  );
};

export default Logo;
