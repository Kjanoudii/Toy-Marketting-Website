import React from "react";
import Image from "next/image";

import AnimatedLayer from "../../control/AnimatedLayer";

export default function NurseryCatalog({ name, url, catalogUrl, className, handleClick }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className={`c-thin-border ${className} shadow-outline 
     bg-slate-100 my-1.5 flex flex-col justify-between lg:h-auto h-72` }
     onClick={handleClick}
    >
      <div className="relative group cursor-pointer flex h-full">
        <Image
          className="block my-auto "
          src={`${apiVar}${url}`}
          height={200}
          width={1404}
          
          // style={{ width: "100%" }}
        />
        <AnimatedLayer catalogUrl={catalogUrl} />
      </div>
      <div className="bg-gray-50  ">
        <p className="text-center py-2 font-bold text-lg text-gray-700">
          {name}
        </p>
      </div>
    </div>
  );
}
