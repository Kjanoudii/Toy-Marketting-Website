
"use client"
import React from "react";
import Image from "next/image";
import CldVideoPlayer from "next-cloudinary"
// import ReactPlayer from "react-player";

import frontImg from "./assets/images/front-img.jpg";
// import frontVideo from "./tmt-video.mp4";
import partnerWithUs from "./assets/partner-with-us.png";

export default function Main() {
  return (
    <div>
      <div className="container max-w-full h-screen">
        <Image
          id="front-img"
          src={frontImg}
          alt="Description of the front image"
        />
        <div className="text-center mt-16 text-gray-600">
          <div className="line-container inline-block relative">
            <span className="text-3xl font-bold tracking-tighter">
              WELCOME TO TOY MARKET TRADING
            </span>
          </div>
        </div>
      </div>

      <div className="h-screen mt-5 flex px-28">
       
       <CldVideoPlayer
       
       src={"./tmt-video.mp4"}
       />
       
        {/* <ReactPlayer
          className="mt-0 mb-auto"
          url={frontVideo}
          controls
          type="video/mp4"
   
          width="645px"
          height="auto"
        /> */}
        {/* <video
          className="mt-0 mb-auto"
          controls
         
          width={"645px"}
        >
          <source src={frontVideo} type="video/mp4" />
         
        </video> */}
        <Image
        
          className="partner-with-us"
          src={partnerWithUs}
          alt="Description of the front image"
        />
      </div>
    </div>
  );
}
