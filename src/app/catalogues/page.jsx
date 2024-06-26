/* eslint-disable no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import NurseryCatalog from "../../components/widget/catalogComponents/NurseryCatalog";
import useSWR from "swr";
import LoadingScreen from "../../components/layout/LoadingScreen";
import ToyBrands from "../../components/widget/catalogComponents/ToyBrands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function page() {
  const apiVar = "https://api.toymarkettrading.com";
  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;

  const [search, setSearch] = useState("");
  const [babyEmpty, setBabyEmpty] = useState(false);
  const [toyEmpty, setToyEmpty] = useState(false);

  const displaySearch = () => {
    console.log(search);
  };
  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };

  const {
    data: catalogsPageData,
    error: catalogsPageError,
    isLoading: catalogsPageIsLoading,
  } = useSWR(
    "https://api.toymarkettrading.com/api/catalogs-page?populate=deep",
    fetcher
  );

  const filteredBabyCatalog = () => {
    return;
  };
  const {
    data: catalogsData,
    error: catalogsError,
    isLoading: catalogsIsLoading,
  } = useSWR(
    "https://api.toymarkettrading.com/api/Catalogs?populate=deep",
    fetcher
  );

  let dataAttributes;
  let catalogs;
  if (catalogsPageIsLoading || catalogsIsLoading) {
    console.log("Loading catalogs page...");
  } else if (catalogsPageError || catalogsError) {
    console.error("Error fetching catalogs page data:", catalogsPageError);
  } else {
    dataAttributes = catalogsPageData.data?.attributes;
    catalogs = catalogsData?.data;
    console.log(catalogs);
  }
  let myArray = [];
  if (!dataAttributes || !catalogs)
    return (
      <main>
        <LoadingScreen />{" "}
      </main>
    );

  if (catalogsPageError) return "error";
  return (
    <div className="h-full">
      {/* <div className="bg-blue-200 h-16  flex justify-between items-center px-4 lg:px-28">
        <h2 className="lg:pl-2 text-lg" style={{ textTransform: "uppercase" }}>
          {dataAttributes.title.toUpperCase()}
        </h2>
        <p className="lg:pr-2 text-gray-400 ">
          <span className="underline pr-4">Home</span>/
          <span className="underline pl-4">Catalogues</span>
        </p>
      </div> */}
      <div
        className="bg-blue-200 h-16 flex items-center 
      "
      >
        <div className="container mx-auto flex lg:justify-between justify-around">
          <h2 className=" text-lg pl-1 ">
            {" "}
            {dataAttributes.title.toUpperCase()}
          </h2>
          <p className=" text-gray-400 lg:inline hidden ">
            <span className="underline pr-4">Home</span>/
            <span className="underline pl-4">Catalogues</span>
          </p>
        </div>
      </div>
      <main className="container mx-auto py-8 h-full">
        <div
          className="flex lg:mr-28 items-center py-2 lg:py-0 px-2
         ml-auto rounded-sm c-clear-border lg:w-56 w-full justify-center"
        >
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent block h-9
           focus:outline-none"
            placeholder="Search here..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={displaySearch} />
        </div>
        <div className="text-center mt-16 text-gray-600">
          <div className="line-container inline-block relative">
            <span className="text-3xl font-bold">
              {babyEmpty ||
              !catalogs.some(
                (catalog) =>
                  catalog.attributes.category === "Baby & Nursery" &&
                  catalog.attributes.title.toLowerCase().includes(search)
              )
                ? ""
                : dataAttributes.baby_title}
            </span>
          </div>
        </div>
        <section className=" mt-2 grid lg:grid-cols-3 grid-cols-1 mx-auto w-4/6 gap-2 lg:gap-1 ">
          {catalogs
            .filter((catalog) => {
              return search === ""
                ? catalog
                : catalog.attributes.title.toLowerCase().includes(search);
            })
            .filter((catalog) => {
              return catalog.attributes.category === "Baby & Nursery";
            })
            .map((catalog, index, array) => {
              return (
                <NurseryCatalog
                  key={index}
                  name={catalog.attributes?.title}
                  url={catalog.attributes?.catalog_cover.data.attributes.url}
                  catalogUrl={catalog.attributes?.catalog_file.data}
                  className={"inline-block lg:mx-1.5"}
                  handleClick={() => console.log(index)}
                />
              );
            })}
        </section>
        <div className="text-center mt-16 text-gray-600">
          <div className="line-container inline-block relative">
            <span className="text-3xl font-bold">
              {babyEmpty ||
              !catalogs.some(
                (catalog) =>
                  catalog.attributes.category === "Toy" &&
                  catalog.attributes.title.toLowerCase().includes(search)
              )
                ? ""
                : dataAttributes.toy_title}
            </span>
          </div>
        </div>

        <section
          className="py-4 pb-10 h-full grid lg:grid-cols-4 grid-cols-1
        mx-auto mt-2 gap-3 px-20"
        >
          {catalogs
            .filter((catalog) => {
              return search === ""
                ? catalog
                : catalog.attributes.title.toLowerCase().includes(search);
            })
            .map((catalog, index) => {
              if (catalog.attributes.category === "Toy") {
                return (
                  <ToyBrands
                    key={index}
                    name={catalog.attributes.title}
                    url={catalog.attributes.catalog_cover.data.attributes.url}
                  />
                );
              }
            })}
        </section>
      </main>
    </div>
  );
}
