
import Image from "next/image";

import tmtLogo from "./assets/tmt-logo.png";

export default function Header({number}) {

  console.log(number)
  return (
    <header className="h-40 bg-white">
      <nav className="px-4 pt-1">
        <div className="container flex items-center justify-between mx-0">
          <div className="text-sm font-semibold pl-24 mb-5 text-gray-900">
            <Image
              className="custom-img"
              src={tmtLogo}
              alt="Description of the front image"
            />
          </div>
          <div
            style={{ fontFamily: "Roboto Condensed, sans-serif" }}
            className="flex space-x-7 pt-10 px-28 leading-10 text-sm font-bold tracking-tight text-gray-900 "
          >
            <a href="#" className=" text-blue-800 hover:text-blue-800">
              HOME
            </a>
            <a href="#" className=" hover:text-blue-800">
              ABOUT US
            </a>
            <a href="#" className=" hover:text-blue-800">
              CATALUEGS
            </a>
            <a href="#" className=" hover:text-blue-800">
              NEWS & UPDATE
            </a>
            <a href="#" className=" hover:text-blue-800">
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
