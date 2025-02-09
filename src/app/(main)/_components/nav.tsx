import Link from "next/link";

import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";

const Nav: React.FC = () => {
  return (
    <nav className="nav sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 md:flex-row">
        <ul className="flex flex-col items-center md:flex-row">
          <li>
            <a href="/" className="flex items-center text-xl font-bold">
              <span className="text-white">
                <span className="text-red-600">Nusan</span>tara Flix
              </span>
            </a>
          </li>
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={cn("mt-3 md:mt-0", {
                "md:ml-16": index !== navItems.length - 1,
                "md:ml-6": index === navItems.length - 1,
              })}
            >
              <Link href={item.href} className="hover:text-gray-300">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export { Nav };
