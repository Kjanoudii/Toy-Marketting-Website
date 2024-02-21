import React from "react";
import Image from "next/image";
import AnimatedLayer from "../control/AnimatedLayer";
// import tree from "../../assets/tree.jpg"
export default function NewsItem({ date, title, summary, imgUrl }) {
  const apiVar = "https://api.toymarkettrading.com";

  return (
    <div className="mt-4 flex gap-5 mb-10">
      <div className="relative group cursor-pointer ">
        <Image src={`${apiVar}${imgUrl}`} width={196} height={220} />
        <AnimatedLayer text="READ MORE" />
      </div>
      <div className="p-2 w-4/5">
        <p className="text-base font-bold text-gray-700">{date}</p>
        <h3
          className=" cursor-pointer text-title font-bold text-gray-700
         hover:text-blue-600">
          {title}
        </h3>
        <p className="truncate text-gray-500">{summary}</p>
      </div>
    </div>
  );
}
