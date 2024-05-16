/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { images, variant1, variant2 } from "../../data/data.js";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ReactHtmlParser from "html-react-parser";

import TradeChannel from "../../components/widget/TradeChannel.jsx";
import SocialMediaBtn from "../../components/widget/SocialMediaBtn.jsx";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/layout/LoadingScreen";
export default function about() {
  const apiVar = "https://api.toymarkettrading.com";
  const [currentImage, setCurrentImage] = useState(0);

  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;

  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };

  const { data, error, isLoading } = useSWR(
    "https://api.toymarkettrading.com/api/about-page?populate=deep",
    fetcher
  );
  let storedImagesData = [];
  let myData = {};
  let imagesData = [];
  if (isLoading) {
    console.log("Loading...");
  } else if (error) {
    console.error("Error fetching data:", error);
  } else {
    if (!storedImagesData) {
      imagesData = localStorage.getItem("imagesData");
    } else {
      myData = data.data;
      imagesData = data.data.attributes.banner_desktop.data;
      // localStorage.setItem("imagesData", JSON.stringify(imagesData));

      console.log(localStorage.getItem("imagesData"));
    }
  }
  const { attributes } = myData;

  useEffect(() => {
    fillDot(0);
  }, []);

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

  const goToImg = (imageIndex) => {
    setCurrentImage(imageIndex);
    fillDot(imageIndex);
  };

  const fillDot = (imageIndex = 0) => {
    const dot = document.getElementById(`dot-${imageIndex}`);
    const allDots = document.querySelectorAll(".c-dot");
    allDots.forEach((contactElement) => {
      contactElement.classList.remove("c-dot");
    });

    dot?.classList?.add("c-dot");
  };

  if (!data) return <LoadingScreen />;
  if (!imagesData) return <LoadingScreen />;
  if (error) return "error";
  return (
    <>
      <main className="max-h-full ">
        <div className="flex justify-center w-full lg:max-h-[75%] h-full">
          <div
            onClick={prevImage}
            className="group rounded-full p-2 bg-blue-600 cursor-pointer 
            absolute top-3/3 lg:top-2/3
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
              src={`${apiVar}${imagesData[currentImage].attributes.url}`}
              alt={`Description of image ${currentImage}`}
              width={1920}
              height={650}
            />
          </motion.div>

          <div
            onClick={nextImage}
            className="group rounded-full p-2 bg-blue-600 cursor-pointer
             absolute top-3/3 lg:top-2/3  hover:bg-slate-50 right-1.5 
             transform translate-y-1/2 z-10"
          >
            <BsChevronCompactRight
              className="text-3xl font-extrabold
             text-slate-100  group-hover:text-blue-600"
            />
          </div>
        </div>
        <div className="hidden lg:flex justify-center py-5 z-10">
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
        <div className="text-center  container mx-auto pt-24 lg:pt-14 text-gray-600">
          <div className="line-container hidden lg:inline-block relative">
            <span className="text-3xl font-bold uppercase ">
              {myData.attributes.title}
            </span>
          </div>
        </div>
      </main>
      <div className="container mx-auto">
        <section className=" pt-0 lg:pt-10 w-full lg:px-48 ">
          <p className="text-slate-500 font-thin lg:px-14 ">
            Established in 1965, Toy Market Trading is a pioneer in the
            distribution of toys in the Lebanese market. With more than 250
            clients today across Lebanon, Toy Market Trading is the go-to
            distributor for innovative, renown, international brands. The
            company is growing its portfolio every day, adding to their roster
            baby & nursery specialized brands on top of the traditional toy
            brands. Today, Toy Market Trading’s clients ranges widely across the
            different private trade channels:
          </p>
        </section>
        <div className="lg:w-full flex justify-center w-full">
          <section className=" grid lg:grid-cols-3 justify-center pt-14  w-full
          gap-y-2 py-2 lg:gap-x-2 lg:gap-y-4">
            {attributes.clients_range.map((item, index) => {
              return <TradeChannel key={index} text={item.text} />;
            })}
          </section>
        </div>
      </div>
      <div>
        <div className="text-center pt-16 text-gray-600 container mx-auto">
          <span className="text-3xl font-bold">SOCIAL BOX</span>
        </div>
        <section
          className="max-h-full pb-14  justify-center container mx-auto
         lg:w-full grid lg:grid-cols-3 grid-cols-1 mt-4  gap-2 px-2"
        >
          {attributes.social_links.map((item, index) => {
            return (
              <SocialMediaBtn
                className="p-0"
                key={index}
                link={item.link_url}
                icon={item.icon_class}
                text={item.title}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
