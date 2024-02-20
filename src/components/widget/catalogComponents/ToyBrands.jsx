import React from "react";
import Image from "next/image";

import AnimatedLayer from "../../control/AnimatedLayer";

export default function ToyBrands({ name, url }) {
  const apiVar = "https://api.toymarkettrading.com";
  return (
    <div
      className="toybrand c-thin-border inline-block shadow-outline 
     bg-slate-100 mx-auto lg:mr-4 my-7 "
    >
      <div className="py-0 relative cursor-pointer group flex h-full justify-center items-center">
        <Image
          className="block m-auto max-h-full"
          src={`${apiVar}${url}`}
          height={500}
          width={600}
          style={{ width: "100%" }}
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
