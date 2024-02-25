import React from "react";
import Link from "next/link";

import Image from "next/image";
import AnimatedLayer from "../control/AnimatedLayer";
// import tree from "../../assets/tree.jpg"
import { formatDate } from "@/src/functions/functions";
export default function NewsItem({ date, title, summary, imgUrl, id }) {
  const apiVar = "https://api.toymarkettrading.com";

  return (
    <div className="mt-4 flex gap-5 mb-10">
      <div className="relative group cursor-pointer ">
        <Image src={`${apiVar}${imgUrl}`} width={196} height={220} />
        <AnimatedLayer text="READ MORE" />
      </div>
      <div className="p-2 w-4/5">
        <p className="text-sm font-bold text-gray-700">{formatDate(date)}</p>
        <Link href={`http://localhost:3000/news-updates/${id}`}>
          <h3
            className=" cursor-pointer text-title font-bold text-gray-700
          hover:text-blue-600"
          >
            {title}
          </h3>
        </Link>
        <p className="truncate text-gray-500">{summary}</p>
      </div>
    </div>
  );
}
