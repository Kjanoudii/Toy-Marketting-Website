/* eslint-disable no-unused-vars */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import logOutIcon from "../../assets/images/icons8-log-out.png";
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

export default function Header({ setLoggedIn, loggedIn }) {
  const pathName = usePathname();

  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");

    setLoggedIn(false);
    router.push("/");
  };

  return (
    <header className="h-auto bg-white">
      <div className="nav  pt-1 container mx-auto">
        <div className=" flex items-center justify-between mx-0">
          <div className="text-sm mb-5 text-gray-900">
            <Image
              className="custom-img pb-4 lg:pb-0  "
              src={tmtLogo}
              alt="Description of the front image"
            />
          </div>

          <div
            className="hidden lg:flex flex-col ml-2 
            pb-12  xl:pb-0 lg:flex-row lg:space-x-7 pt-11  lg:leading-tight text-gray-700"
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

        </div>
          <div className="lg:mr-0 mr-40 flex  ">
            <svg
              className="cursor-pointer lg:hidden z-50"
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
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
                    onClick={()=>setShow(false)}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

        
          </div>
      </div>
    </header>
  );
}
