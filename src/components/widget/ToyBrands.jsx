import React from "react";
import Image from "next/image";

import AnimatedLayer from "../control/AnimatedLayer";

export default function ToyBrands({ name, url }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className=" c-thin-border  
     bg-slate-100 mx-auto lg:mr-4 flex flex-col justify-between lg:h-auto h-78 "
    >
      <div className="lg:py-14 h-full w-full
       relative cursor-pointer group flex items-center justify-center">
        <Image
          className="block m-auto "
          src={`${apiVar}${url}`}
          height={300}
          width={300}
          style={{ width: "50%", height: "auto" }}
        />
        <AnimatedLayer />
      </div>
      <div className="bg-gray-50 m-0 c-thin-border py-2">
        <p className="bg-gray-50 text-center font-bold text-lg text-gray-700">
          {name}
        </p>
      </div>
    </div>
  );
}
