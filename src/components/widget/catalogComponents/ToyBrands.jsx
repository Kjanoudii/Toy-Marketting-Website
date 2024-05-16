import React from "react";
import Image from "next/image";

import AnimatedLayer from "../../control/AnimatedLayer";

export default function ToyBrands({ name, url }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className="c c-thin-border  
     bg-slate-100 mx-auto  flex flex-col justify-between lg:h-auto h-72"
    >
      <div
        className=" h-full relative cursor-pointer group flex items-center justify-center"
      >
        <Image
          className="block my-auto h-full "
          src={`${apiVar}${url}`}
          height={400}
          width={400}
          style={{ width: "100%", height: "auto" }}
        />
        <AnimatedLayer />
      </div>
      <div className="bg-gray-50 m-0 c-thin-border py-2 ">
        <p className="bg-gray-50 text-center font-bold text-lg text-gray-700">
          {name}
        </p>
      </div>
    </div>
  );
}
