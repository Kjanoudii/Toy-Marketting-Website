"use client";
import React from "react";
import useSWR from "swr";
import LoadingScreen from "@/src/components/layout/LoadingScreen";
import { formatDate } from "@/src/functions/functions";
import ReactHtmlParser from "html-react-parser";
import Image from "next/image";


export default function page({ params }) {
  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;
const apiVar = "https://api.toymarkettrading.com";
  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };

  const { data, error, isLoading } = useSWR(
    `https://api.toymarkettrading.com/api/News-Items/${params.id}?populate=deep`,
    fetcher
  );

  let itemData;
  console.log(params.id);
  if (isLoading) {
    console.log("Loading...");
  } else if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log(data);
    itemData = data.data;
  }
  if (!data) return <LoadingScreen />;
  if (error) return "error";

  return (
    <main>
      <div className="max-h-full">
        <div
          className="bg-blue-200 h-16 flex justify-between items-center px-4 
      lg:px-28"
        >
          <h2 className="lg:pl-2 text-lg">NEWS & UPDATES</h2>
          <p className="lg:pr-2 text-gray-400 ">
            <span className="underline pr-4">Home</span>/
            <span className="underline pl-4">News & Updates</span>
          </p>
        </div>
        <div className="px-28 ">
          <p className="text-sm font-thin py-3 text-gray-500">
            {formatDate(itemData.attributes.date)}
          </p>

          <h2
            className="pr-5 text-3xl 
       font-bold text-gray-700 uppercase pb-5"
          >
            {itemData.attributes.title}
          </h2>

          <p className="text-gray-500 pb-4">
            {ReactHtmlParser(itemData.attributes.content)}
          </p>
          <Image
          className="pb-6"
            src={`${apiVar}${itemData.attributes.image.data.attributes.url}`}
            width={400}
            height={300}
          />
        </div>
      </div>
    </main>
  );
}
