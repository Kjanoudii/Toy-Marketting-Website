import React from "react";
import Image from "next/image";

import AnimatedLayer from "../../control/AnimatedLayer";

export default function NurseryCatalog({ name, url }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className="c-thin-border inline-block shadow-outline w-60 max-h-90
     bg-slate-100 lg:mr-2 my-1 "
    >
      <div className="relative group cursor-pointer flex h-72">
        <Image
          className="block m-auto "
          src={`${apiVar}${url}`}
          height={200}
          width={1404}
          // style={{ width: "100%" }}
        />
        <AnimatedLayer text="DOWNLOAD CATALOG" />
      </div>
      <div className="bg-gray-50  ">
        <p className="text-center py-2 font-bold text-lg text-gray-700">
          {name}
        </p>
      </div>
    </div>
  );
}
