import React from 'react'
import Image from "next/image";

export default function contactDetails({text, icon}) {
  return (
    <li className="mb-2 flex items-center ">
      <Image
        className="w-5 h-5 "
        src={icon}
        alt="Description of the front image"
      />
      <span className="ml-2 flex items-center">
       {text}
      </span>
    </li>
  );
}
