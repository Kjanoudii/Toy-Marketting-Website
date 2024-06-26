/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import ToyBrands from "../components/widget/ToyBrands.jsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VideoLayer from "../components/control/VideoLayer.jsx";
// import CldVideoPlayer from "next-cloudinary"
import { useRouter } from "next/navigation";

import useSWR from "swr";
import { variant1, variant2 } from "../data/data.js";
import LastestNewsItem from "../components/widget/LastestNewsItem";
import LoadingScreen from "../components/layout/LoadingScreen";
import Button from "../components/control/buttons/Button";
import NurseryBrand from "../components/widget/NurseryBrand";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export default function page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const videoRef = useRef(null);

  const router = useRouter();

  const fillDot = (imageIndex = 0) => {
    const dot = document.getElementById(`dot-${imageIndex}`);
    const allDots = document.querySelectorAll(".c-dot");
    allDots.forEach((contactElement) => {
      contactElement.classList.remove("c-dot");
    });

    dot?.classList?.add("c-dot");
  };
  const goToImg = (imageIndex) => {
    setCurrentImage(imageIndex);
    fillDot(imageIndex);
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setShowControls(true);
    }
  };
  const accessToken =
    "7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154";
  let images = [];
  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };
  const apiVar = "https://api.toymarkettrading.com";

  useEffect(() => {
    fillDot();
  }, []);
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

    images = homePageData.attributes.toy_banner;
  }

  const nextImage = () => {
    const nextIndex = currentImage === images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(nextIndex);
    fillDot(nextIndex);
  };

  const prevImage = () => {
    const newImageIndex =
      currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(newImageIndex);
    console.log(currentImage);
    fillDot(newImageIndex);
  };
  if (!newsItemsData || !homePageData) return <LoadingScreen />;
  if (newsItemsDataError || homePageError) return "error";
  return (
    <div>
      {/* BANNER */}
      <div className="max-h-screen">
        <Image
          className="max-w-full max-h-full mb-8"
          // src={`https://api.toymarkettrading.com/uploads/front_img_c9a5f1c3fa.jpg`}
          src={`${apiVar}${homePageData.attributes.banner_image_mobile.data.attributes?.url}`}
          width={1200}
          height={1000}
          style={{ width: "100%" }}
          alt="Description of the front image"
        />
        <div className="text-center mt-16 container mx-auto text-gray-600">
          <span className="text-3xl font-bold ">
            {homePData.attributes?.news_title}
          </span>
        </div>
      </div>
      {/* VIDEO AND PICTURE */}
      <div
        className="flex flex-col pt-4 mt-0 lg:flex-row px-8 justify-center lg:pt-5
       container mx-auto "
      >
        <div
          className="relative cursor-pointer group"
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            className="lg:mt-2 mb-auto "
            poster={`${apiVar}${homePageData.attributes.video_cover_image.data.attributes.url}`}
            width={"643px"}
            controls={showControls} // Show controls conditionally
          >
            <source
              src={`${apiVar}${homePageData.attributes.video.data.attributes.url}`}
              type="video/mp4"
            />
          </video>

          {!showControls && <VideoLayer />}
        </div>
        <Image
          className="lg:max-w-95 lg:mt-0 mt-6 lg:ml-15"
          src={`${apiVar}${homePageData.attributes.partner_image.data.attributes.url}`}
          alt="Description of the front image"
          width={380}
          height={400}
        />
      </div>
      <div className="text-center pt-24 pb-4 text-gray-600 w-full ">
        <div className="line-container inline-block relative">
          <span className="text-3xl font-bold ">
            {/* "LATEST NEWS & UPDATES" */}
            {homePageData.attributes.baby_title}
          </span>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row px-10 pb-10 justify-center">
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
      <Link href="/news-updates">
        <Button>
          <p className="p-3">VIEW ALL</p>
        </Button>
      </Link>
      {/* "toy_title": "BABY & NURSERY BRANDS PORTFOLIO", */}
      <div className="text-center mt-16 text-gray-600">
        <div className="line-container inline-block relative">
          <span className="text-3xl font-bold ">
            {homePageData.attributes.toy_title}
          </span>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row justify-center px-5 container mx-auto">
        <section className="grid lg:grid-cols-3 grid-cols-1
         lg:px-8 mx-auto h-full lg:w-4/6 gap-3 w-full">
          {homePageData.attributes.baby_banner
            .slice(0, 10)
            .map((item, index, array) => {
              return (
                <NurseryBrand
                  key={index}
                  name={item.title}
                  url={item.image.data.attributes.url}
                  className={"inline-block "}
                /> 
              ); 
            })}
        </section>
        <section className="lg:w-4/12 w-full h-full relative hidden lg:inline-block px-1">
          <div
            onClick={prevImage}
            className="group rounded-full p-2 bg-blue-600 cursor-pointer 
            absolute top-3/3 lg:top-80
             left-1.3 transform translate-y-1/2 z-10 hover:bg-slate-50"
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
          <div className="flex justify-center py-5 z-10">
            {images.map((image, index) => {
              return (
                <div
                  id={`dot-${index}`}
                  onClick={() => goToImg(index)}
                  className="dot text-4xl cursor-pointer p- text-gray-300 hover:text-gray-800"
                  key={index}
                >
                  <RxDotFilled />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div>
        <div
          className=" 
        mt-16 text-gray-600 text-center container mx-auto"
        >
          <span className="text-3xl font-bold ">TOY BRANDS PORTFOLIO</span>
        </div>

        <section className=" pb-20 container mx-auto ">
          <div className="lg:px-0 px-3 grid lg:grid-cols-4 grid-cols-1 gap-y-2 lg:gap-x-1 lg:w-10/12  mx-auto lg:gap-y-14">
            {homePageData.attributes.baby_banner
              .slice(10)
              .map((item, index) => {
                if (
                  item &&
                  item.image &&
                  item.image.data &&
                  item.image.data.attributes
                ) {
                  return (
                    <ToyBrands
                      key={index}
                      name={item.title}
                      url={item.image.data.attributes.url}
                    />
                  );
                } else {
                  console.error(
                    `Invalid data structure for item at index ${index}`
                  );
                  return null;
                }
              })}
          </div>
        </section>
      </div>
    </div>
  );
}
