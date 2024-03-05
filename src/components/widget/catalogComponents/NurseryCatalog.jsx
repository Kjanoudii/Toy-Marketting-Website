import React from "react";
import Image from "next/image";

import AnimatedLayer from "../../control/AnimatedLayer";

export default function NurseryCatalog({ name, url, catalogUrl, clas, handleClick }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className={`c-thin-border ${clas} shadow-outline max-w-60 max-h-90
     bg-slate-100 my-1 ` }
     onClick={handleClick}
    >
      <div className="relative group cursor-pointer flex h-72">
        <Image
          className="block m-auto "
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
