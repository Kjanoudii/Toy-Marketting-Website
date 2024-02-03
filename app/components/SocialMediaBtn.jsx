import React from 'react'
import Image from "next/image";

export default function SocialMediaBtn({icon, text}) {
   return (
     <div className="inline-block box-border">
       <div className="c-media-btn flex items-center ">
         <p className="pl-3">
           <Image src={icon} className="w-10" />
         </p>
         <p className="pr-8 font-bold my-0 mx-auto">{text}</p>
       </div>
     </div>
   );
}
