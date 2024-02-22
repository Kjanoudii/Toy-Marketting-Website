/* eslint-disable no-unused-vars */
"use client";

import React from "react";
import Image from "next/image";
// import CldVideoPlayer from "next-cloudinary"
// import ReactPlayer from "react-player";
// import ReactPlayer from 'react-player/youtube'
import useSWR from "swr";
import frontImg from "../assets/images/front-img.jpg";
import frontVideo from "../../public/tmt-video.mp4";
import partnerWithUs from "../assets/partner-with-us.png";
import LastestNewsItem from "../components/widget/LastestNewsItem";
import LoadingScreen from "../components/layout/LoadingScreen";
export default function page() {
  const accessToken =
    "7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154";

  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };

  const { data, error, isLoading } = useSWR(
    "https://api.toymarkettrading.com/api/News-Items?populate=deep",
    fetcher
  );
  let newsItemsData = "";
  if (isLoading) {
    console.log("Loading...");
  } else if (error) {
    console.error("Error fetching data:", error);
  } else {
    newsItemsData = data.data;

    console.log(newsItemsData);
  }

  if (!data) return <LoadingScreen />;
  if (error) return "error";
  return (
    <div>
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

      <section className="flex px-10 pb-10">
        {newsItemsData.slice(0, 3).map((item, index) => {
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
    </div>
  );
}
//  <div className="text-center mt-16 text-gray-600">
//    <div className="line-container inline-block relative">
//      <span className="text-3xl font-bold ">WELCOME TO TOY MARKET TRADING</span>
//    </div>
//  </div>;

// import Image from "next/image";
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Main from "./home/page";
// import useSWR from "swr";
// export default function page() {
//   const fetcher = (...args) => fetch(...args).then((response) => response.json());
//   // const { data } = useSWR("https://cat-fact.herokuapp.com/facts", fetcher);
//   const { data } = useSWR(
//     "https://api.toymarkettrading.com/admin/about-page",
//     fetcher
//   );

//   console.log(data);

//   //   const router = useRouter();
//   //   useEffect(() => {
//   //   router.push('/home');
//   // }, []);

//   // return null;
//   return <Main />;
// }
