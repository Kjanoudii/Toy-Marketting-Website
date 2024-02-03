"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import tmtLogo from "../assets/tmt-logo.png";

const navLinks = [
  {
    name: "HOME",
    href: "/home",
  },
  {
    name: "ABOUT US",
    href: "/about",
  },
  { name: "CATALOGUES", href: "/catalogues" },

  {
    name: "NEWS & UPDATES",
    href: "/news&updates",
  },
  {
    name: "CONTACT US",
    href: "/contactUs",
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="h-40 bg-white">
      <nav className="nav px-4 pt-1">
        <div className="container flex items-center justify-between mx-0">
          <div className="text-sm pl-24 mb-5 text-gray-900">
            <Image
              className="custom-img"
              src={tmtLogo}
              alt="Description of the front image"
            />
          </div>
          <div
            className="flex space-x-7
             pt-11 pr-16 mr-3 leading-tight text-gray-700 "
          >
            {navLinks.map((item, index) => {
              const isActive = pathName.startsWith(item.href);

              return (
                <Link
                  key={index}
                  className={`hover:text-blue-600 ${
                    isActive ? "text-blue-600" : ""
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
