import React from "react";
import Image from "next/image";

import AnimatedLayer from "../control/AnimatedLayer";

export default function NurseryCatalog({ name, url, className }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className={`c-thin-border ${className} 
      shadow-outline  bg-slate-100  h-78 flex flex-col justify-between`}
    >
      <div
        className="lg:py-4 h-full lg:w-full 
       relative cursor-pointer group flex items-center justify-center"
      >
        <Image
          className="block my-auto h-full "
          src={`${apiVar}${url}`}
          height={300}
          width={300}
          style={{ width: "50%", height: "auto" }}
        />
        <AnimatedLayer />
      </div>
      <div className="bg-gray-50  ">
        <p className="text-center py-2 font-bold text-lg text-gray-700">
          {name}
        </p>
      </div>
    </div>
  );
}
