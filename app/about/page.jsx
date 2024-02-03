/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import { images, tradeChannels, socialBox, variant1, variant2 } from "../data/data.js";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import TradeChannel from "../components/TradeChannel";
import SocialMediaBtn from "../components/SocialMediaBtn";
import { motion } from "framer-motion";
export default function about() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fillDot(currentImage);
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

  const fillDot = (imageIndex) => {
    const allDots = document.querySelectorAll(".c-dot");
    allDots.forEach((contactElement) => {
      contactElement.classList.remove("c-dot");
    });

    const dot = document.getElementById(`dot-${imageIndex}`);

    dot.classList.add("c-dot");
  };
  return (
    <>
      <main className="h-screen ">
        <div className="c-image-container  flex justify-center">
          <div
            onClick={prevImage}
            className="group rounded-full p-2 bg-blue-600 cursor-pointer absolute top-2/3
             left-1.5 transform translate-y-1/2 z-10 hover:bg-slate-50"
          >
            <BsChevronCompactLeft className="text-3xl font-extrabold text-slate-100 group-hover:text-blue-600" />
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
              src={images[currentImage]}
              alt={`Description of image ${currentImage}`}
            />
          </motion.div>

          {/* <div className="transition-transform duration-500 transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={images[currentImage]}
              alt={`Description of image ${currentImage}`}
              key={images[currentImage]}
            />
          </div> */}

          <div
            onClick={nextImage}
            className="group rounded-full p-2 bg-blue-600 cursor-pointer absolute top-2/3  hover:bg-slate-50 right-1.5 transform translate-y-1/2 z-10"
          >
            <BsChevronCompactRight className="text-3xl font-extrabold text-slate-100  group-hover:text-blue-600" />
          </div>
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
        <div className="text-center pt-14 text-gray-600">
          <div className="line-container inline-block relative">
            <span className="text-3xl font-bold  ">
              ABOUT TOY MARKET TRADING
            </span>
          </div>
        </div>
      </main>
      <div className="h-screen">
        <section className="h-2/5 pt-10 px-28">
          <p className="text-base text-slate-500 font-thin">
            Established in 1965, Toy Market Trading is a pioneer in the
            distribution of toys in the Lebanese market. With more than 250
            clients today across Lebanon, Toy Market Trading is the go-to
            distributor for innovative, renown, international brands.
            <br />
            <br />
            The company is growing its portfolio every day, adding to their
            roster baby & nursery specialized brands on top of the traditional
            toy brands.
            <br />
            <br />
            Today, Toy Market Trading's clients ranges widely across the
            different private trade channels:
          </p>
        </section>
        <section className="h-2/5 px-28 py-2">
          {tradeChannels.map((item, index) => {
            return <TradeChannel key={index} text={item} />;
          })}
          <div className="text-center pt-16 text-gray-600">
            <div className="line-container mt-2 inline-block relative">
              <span className="text-3xl font-bold  ">SOCIAL BOX</span>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="h-60 w-full px-28">
          {socialBox.map((item, index) => {
            return (
              <SocialMediaBtn
                className="p-0"
                key={index}
                icon={item.icon}
                text={item.text}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
