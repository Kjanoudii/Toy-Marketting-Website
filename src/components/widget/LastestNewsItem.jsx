import React from "react";
import Image from "next/image";
import AnimatedLayer from "../control/AnimatedLayer";
const apiVar = "https://api.toymarkettrading.com";

export default function LastestNewsItem({ date, title, imgUrl}) {
  return (
    <div className="mt-4 inline-block c-thin-border mx-2 overflow-hidden w-2/5">
      <div className="relative group cursor-pointer overflow-hidden">
        <Image
          className="block mx-auto"
          src={`${apiVar}${imgUrl}`}
          width={506}
          height={120}
          style={{ width: "100%", height: "100%" }}
        />
        <AnimatedLayer text="READ MORE" />
      </div>
      <div className="p-2 w-4/5">
        <p className="text-base font-bold text-gray-700">{date}</p>
        <h3 className="cursor-pointer text-sm font-bold text-gray-700 hover:text-blue-600">
          {title}
        </h3>
      </div>
    </div>
  );}