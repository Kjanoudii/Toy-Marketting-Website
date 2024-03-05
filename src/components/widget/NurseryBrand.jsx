import React from "react";
import Image from "next/image";

import AnimatedLayer from "../control/AnimatedLayer";

export default function NurseryCatalog({ name, url, clas }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className={`c-thin-border ${clas} 
      shadow-outline w-60 max-h-78 bg-slate-100 lg:my-2 my-1 `}
    >
      <div className="relative group cursor-pointer flex h-64">
        <Image
          className="block m-auto"
          src={`${apiVar}${url}`}
          height={100}
          width={115}
          // style={{ width: "100%" }}
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
