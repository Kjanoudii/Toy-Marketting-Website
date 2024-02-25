/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";
// import CldVideoPlayer from "next-cloudinary"
// import ReactPlayer from "react-player";
// import ReactPlayer from 'react-player/youtube'
import useSWR from "swr";
import { variant1, variant2 } from "../data/data.js";
import { useState } from "react";
import frontImg from "../assets/images/front-img.jpg";
import frontVideo from "../../public/tmt-video.mp4";
import partnerWithUs from "../assets/partner-with-us.png";
import LastestNewsItem from "../components/widget/LastestNewsItem";
import LoadingScreen from "../components/layout/LoadingScreen";
import Button from "../components/control/buttons/Button";
import NurseryBrand from "../components/widget/NurseryBrand";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export default function page() {
  const accessToken =
    "7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154";
  const [currentImage, setCurrentImage] = useState(0);
  let images = [];
  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };
  const apiVar = "https://api.toymarkettrading.com";

  const {
    data: newsItemsData,
    error: newsItemsDataError,
    isLoading: newsItemsLoading,
  } = useSWR(
    "https://api.toymarkettrading.com/api/News-Items?populate=deep",
    fetcher
  );
  const {
    data: homePData,
    error: homePageError,
    isLoading: homePageLoading,
  } = useSWR(
    "https://api.toymarkettrading.com/api/home-page?populate=deep",
    fetcher
  );
  let itemsData;
  let homePageData;
  if (newsItemsLoading || homePageLoading) {
    console.log("Loading...");
  } else if (newsItemsDataError || homePageError) {
    console.error("Error fetching data:", newsItemsDataError);
  } else {
    itemsData = newsItemsData.data;
    homePageData = homePData.data;
    // homePageData = homePData.data;
    console.log("news item data" + newsItemsData.data);
    images = homePageData.attributes.toy_banner;
  }
  const nextImage = () => {
    const nextIndex = currentImage === images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(nextIndex);
    //  fillDot(nextIndex);
  };

  const prevImage = () => {
    const newImageIndex =
      currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(newImageIndex);
    console.log(currentImage);
    //  fillDot(newImageIndex);
  };
  if (!newsItemsData || !homePData) return <LoadingScreen />;
  if (newsItemsDataError || homePageError) return "error";
  return (
    <div>
      {/* BANNER */}
      <div className="max-h-screen">
        <Image
          className="max-w-full max-h-full mb-8"
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
      {/* VIDEO AND PICTURE */}
      <div className="flex flex-col pt-4 mt-0 lg:flex-row px-8 lg:px-28 lg:pt-5 home-video-container ">
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

        <video className="lg:mt-2 mb-auto" controls width={"643px"}>
          <source src={frontVideo} type="video/mp4" />
        </video>
        <Image
          className="lg:max-w-95 lg:mt-0 mt-6 lg:ml-15"
          src={partnerWithUs}
          alt="Description of the front image"
        />
      </div>
      <div className="text-center pt-24 pb-4 text-gray-600 w-full ">
        <div className="line-container inline-block relative">
          <span className="text-3xl font-bold ">LATEST NEWS & UPDATES</span>
        </div>
      </div>

      <section className="flex px-10 pb-10 justify-center">
        {/* LASTEST NEWS ITEMS */}
        {newsItemsData.data.slice(0, 3).map((item, index) => {
          return (
            <LastestNewsItem
              key={index}
              title={item.attributes.title}
              date={item.attributes.date}
              summary={item.attributes.summary}
              imgUrl={item.attributes.image.data.attributes.url}
            />
          );
        })}
      </section>

      <Button>VIEW ALL</Button>

      <div className="text-center mt-16 text-gray-600">
        <div className="line-container inline-block relative">
          <span className="text-3xl font-bold ">
            BABY & NURSERY BRANDS PORTFOLIO
          </span>
        </div>
      </div>
      <div className=" flex px-24 max-w-full max-h-full">
        <section className=" h-full w-4/6">
          {homePageData.attributes.baby_banner.map((item, index) => {
            return (
              <NurseryBrand
                key={index}
                name={item.title}
                url={item.image.data.attributes.url}
              />
            );
          })}
        </section>
        <section className="w-2/6 h-full relative">
          <div
            onClick={prevImage}
            className="group rounded-full p-2 bg-blue-600 cursor-pointer 
            absolute top-3/3 lg:top-80
             left-1.5 transform translate-y-1/2 z-10 hover:bg-slate-50"
          >
            <BsChevronCompactLeft
              className="text-3xl font-extrabold
             text-slate-100 group-hover:text-blue-600"
            />
          </div>
          <motion.div
            id={"front-img"}
            key={[currentImage]}
            variants={variant2}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <Image
              src={`${apiVar}${images[currentImage].image.data.attributes.url}`}
              alt={`Description of image ${currentImage}`}
              width={1920}
              height={650}
            />
          </motion.div>

          <div
            onClick={nextImage}
            className="group rounded-full p-2 bg-blue-600 cursor-pointer
             absolute top-3/3 lg:top-80  hover:bg-slate-50 right-1.5 
             transform translate-y-1/2 z-10"
          >
            <BsChevronCompactRight
              className="text-3xl font-extrabold
             text-slate-100  group-hover:text-blue-600"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
