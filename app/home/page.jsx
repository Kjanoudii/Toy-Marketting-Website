'use client'
import React from "react";
import Image from "next/image";
// import CldVideoPlayer from "next-cloudinary"
// import ReactPlayer from "react-player";
// import ReactPlayer from 'react-player/youtube'

import frontImg from "../assets/images/front-img.jpg";
import frontVideo from "../../public/tmt-video.mp4";
import partnerWithUs from "../assets/partner-with-us.png";

export default function page() {
  return (
    <div>
      <div className="h-screen">
        <Image
          id="front-img"
          src={frontImg}
          alt="Description of the front image"
        />
        <div className="text-center mt-16 text-gray-600">
          <div className="line-container inline-block relative">
            <span className="text-3xl font-bold ">
              WELCOME TO TOY MARKET TRADING
            </span>
          </div>
        </div>
      </div>

      <div className="home-video-container mt-5 flex ">
        {/* <CldVideoPlayer
       
       src={"./tmt-video.mp4"}
       /> */}

        {/* <ReactPlayer
          className="mt-0 mb-auto"
          url={frontVideo}
          controls
          type="video/mp4"
   
          width="645px"
          height="auto"
        /> */}

        <video className="mt-2 mb-auto" controls width={"643px"}>
          <source src={frontVideo} type="video/mp4" />
        </video>
        <Image
          className="partner-with-us"
          src={partnerWithUs}
          alt="Description of the front image"
        />
      </div>
      <div className="text-center pt-24 pb-4 text-gray-600 w-full border">
        <div className="line-container inline-block relative">
          <span className="text-3xl font-bold ">LATEST NEWS & UPDATES</span>
        </div>
      </div>
    </div>
  );
}
//  <div className="text-center mt-16 text-gray-600">
//    <div className="line-container inline-block relative">
//      <span className="text-3xl font-bold ">WELCOME TO TOY MARKET TRADING</span>
//    </div>
//  </div>;