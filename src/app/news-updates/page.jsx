/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import tree from "../../assets/tree.jpg"
import AnimatedLayer from "../../components/control/AnimatedLayer";
export default function page() {
  return (
    <div className="max-h-full">
      <div
        className="bg-blue-200 h-16 flex justify-between items-center px-4 
      lg:px-28"
      >
        <h2 className="lg:pl-2 text-lg">NEWS & UPDATES</h2>
        <p className="lg:pr-2 text-gray-500">Home / Contact Us</p>
      </div>
      <main className="h-screen lg:px-28">
        <div className="mt-4 flex gap-5 cursor-pointer">
          <div className="relative group">
            <Image src={tree} width={200} />
            <AnimatedLayer text="READ MORE"/>
          </div>
          <div className="p-2">
            <p>Dec. 18, 2023</p>
            <h3>
              Get your little ones excited for Christmas with these 7 great
              VTech toys
            </h3>
            <p>
              These are just a few of the great VTech toys, sure to make your
              child's Christmas merry and bright!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
