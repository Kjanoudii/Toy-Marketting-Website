/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import useSWR from "swr";
import NewsItem from "@/src/components/widget/NewsItem";
import LoadingScreen from "@/src/components/layout/LoadingScreen";

export default function page() {
  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;

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
    <div className="h-full ">
      <div
        className="bg-blue-200 h-16 flex  items-center px-4 
      "
      >
        <div className="container mx-auto flex lg:justify-between justify-around ">
          <h2 className=" text-lg">NEWS & UPDATES</h2>
          <p className=" text-gray-400 lg:inline hidden">
            <span className="underline pr-4">Home</span>/
            <span className="underline pl-4">News & Updates</span>
          </p>
        </div>
      </div>
      <main className="h-full container mx-auto">
        {newsItemsData.map((item, index) => {
          return (
            <NewsItem
              key={index}
              title={item.attributes.title}
              date={item.attributes.date}
              summary={item.attributes.summary}
              imgUrl={item.attributes.image.data.attributes.url}
              id={item.id}
            />
          );
        })}
      </main>
    </div>
  );
}
