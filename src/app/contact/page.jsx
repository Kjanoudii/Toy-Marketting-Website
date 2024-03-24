"use client";
import { useState } from "react";
// import Image from "next/image";
import "react-phone-input-2/lib/style.css";

import useSWR from "swr";
import Map from "../../components/layout/Map";
// import  MapboxMap from "../../components/widget/Map"
import Form from "../../components/control/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { RecaptchaProviders } from "../../services/useGoogleRecaptcha";
// import { useDispatch } from "react-redux";
// import { source, sourcePage, sourceUrl } from "../../components/redux/actions";

// import useCurrentUrl from "../../hooks/useCurrentUrl"
// import { PhoneNumberUtil } from "google-libphonenumber";

export default function Page() {
  //  const apiVar = "https://api.toymarkettrading.com";
  const [sent, setSent] = useState(false);

  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;

  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };

  const { data, error, isLoading } = useSWR(
    "https://api.toymarkettrading.com/api/about-page",
    fetcher
  );

  if (isLoading) {
    console.log("Loading...");
  } else if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log(data);
  }

  //  const url = useCurrentUrl();
  //  const dispatch = useDispatch();
  //  useEffect(() => {
  //    dispatch(sourceUrl(url));
  //  }, [dispatch, data, url]);
  return (
    <>
      {/* <RecaptchaProviders> */}
        <div className="bg-blue-200 h-16 flex justify-between items-center px-4 lg:px-28">
          <h2 className="lg:pl-2 text-lg">CONTACT US</h2>
          <p className="lg:pr-2 text-gray-400 ">
            <span className="underline pr-4">Home</span>/
            <span className="underline pl-4">Contact Us</span>
          </p>
        </div>

        <div className="h-full flex flex-col lg:flex-row px-2 lg:px-28 pb-4 pt-12">
          <section className="w-1/2 pl-2 leading-8">
            <div className="pb-2">
              <p className="text-sm inline-block bg-blue-600 text-gray-50 py-1 px-3 font-bold">
                ADDRESS
              </p>
              <p className="text-gray-600">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="w-3 inline my-auto "
                />
                {""} UNESCO Center Bldg. 1st Flr.,
                <br />
                Verdun, Beirut - Lebanon
              </p>
            </div>

            <div className="pb-2">
              <p className="text-sm inline-block bg-blue-600 text-gray-50 py-1 px-3 font-bold">
                PHONE NUMBERS
              </p>
              <p className="text-gray-600">
                <FontAwesomeIcon icon={faPhone} className="inline w-4" /> +961
                (1) 799 944
                <br />
                <FontAwesomeIcon icon={faPhone} className="inline w-4" /> +961
                (1) 795 127
                <br />
                <FontAwesomeIcon icon={faPhone} className="inline w-4" /> Fax
                +961 (1) 799 944 ext. 140
              </p>
            </div>
            <div>
              <p className="text-sm inline-block bg-blue-600 text-gray-50 py-1 px-3 font-bold">
                EMAIL
              </p>
              <p className="hover:text-blue-500">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 inline" />
                <a href="mailto:info@toymarkettrading.com"> info</a>

                <a href="mailto:info@toymarkettrading.com">
                  <i>
                    <FontAwesomeIcon
                      icon={faAt}
                      className="inline-block w-3 hover:text-blue-600"
                    />
                  </i>
                  toymarkettrading.com
                </a>
              </p>{" "}
            </div>
          </section>
          <section className="lg:w-1/2 pl-2 py-5 lg:py-0 ">
            <h1 className="pl-9 mb-10 font-bold text-3xl text-gray-700">
              DROP US A MESSAGE
            </h1>
            {!sent ? (
              <Form setSent={setSent} />
            ) : (
              <p className="border border-green-200 font-thin ml-8 px-3 py-5 bg-indigo-200 rounded-md text-gray-600">
                Your message has been sent successfully
              </p>
            )}
          </section>
        </div>
      {/* </RecaptchaProviders> */}
      <section className="flex justify-center ">
        <Map />
      </section>
    </>
  );
}
