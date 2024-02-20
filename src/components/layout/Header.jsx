/* eslint-disable no-unused-vars */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import tmtLogo from "../../assets/tmt-logo.png";

const navLinks = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT US",
    href: "/about-us",
  },
  { name: "CATALOGUES", href: "/catalogues" },

  {
    name: "NEWS & UPDATES",
    href: "/news-updates",
  },
  {
    name: "CONTACT US",
    href: "/contact",
  },
];

export default function Header() {
  const pathName = usePathname();

  const [show, setShow] = useState(false);

  return (
    <header className="h-auto bg-white">
      <nav className="nav px-4 pt-1">
        <div className="container flex items-center justify-between mx-0">
          <div className="text-sm lg:pl-24 mb-5 text-gray-900">
            <Image
              className="custom-img pb-4 lg:pb-0  "
              src={tmtLogo}
              alt="Description of the front image"
            />
          </div>
          <div
            className="hidden lg:flex flex-col ml-2 
          pb-12 pl-96 xl:pb-0 lg:flex-row lg:space-x-7 pt-11 lg:mr-3 lg:leading-tight text-gray-700"
          >
            {navLinks.map((item, index) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  key={index}
                  className={`block lg:inline-block hover:text-blue-600 ${
                    isActive ? "text-blue-600" : ""
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="lg:mr-0 mr-40 ">
            <svg
              className="cursor-pointer lg:hidden"
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            <div
              className={`${
                show ? "lg:hidden" : "hidden"
              } lg:w-1/4 bg-gray-200 py-6 px-4 z-10 absolute`}
            >
              {navLinks.map((item, index) => {
                const isActive = pathName === item.href;
                return (
                  <Link
                    key={index}
                    className={`block py-2 px-4 hover:text-blue-600 ${
                      isActive ? "text-blue-600 font-bold" : "text-gray-800"
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
