import React from "react";
// import Image from "next/image";

import Form from "../../components/control/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
export default function Page() {
  return (
    <>
      <div className="bg-blue-200 h-16 flex justify-between items-center px-4 lg:px-28">
        <h2 className="lg:pl-2 text-lg">CONTACT US</h2>
        <p className="lg:pr-2  text-gray-500">Home / Contact Us</p>
      </div>

      <div className="h-full flex flex-col lg:flex-row px-2 lg:px-28 py-2">
        <section className="w-1/2 pl-2 leading-8">
          <div className="pb-2">
            <p className="text-sm inline-block bg-blue-600 text-gray-50 py-1 px-3 font-bold">
              ADDRESS
            </p>
            <p className="text-gray-700">
              UNESCO Center Bldg. 1st Flr.,
              <br />
              Verdun, Beirut - Lebanon
            </p>
          </div>

          <div className="pb-2">
            <p className="text-sm inline-block bg-blue-600 text-gray-50 py-1 px-3 font-bold">
              PHONE NUMBERS
            </p>
            <p className="text-gray-700">
              +961 (1) 799 944
              <br />
              +961 (1) 795 127
              <br />
              Fax +961 (1) 799 944 ext. 140
            </p>
          </div>
          <div>
            <p className="text-sm inline-block bg-blue-600 text-gray-50 py-1 px-3 font-bold">
              EMAIL
            </p>
            <p className="hover:text-blue-500">
              <a href="mailto:info@toymarkettrading.com">info</a>

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
          <h1 className="pl-9 mb-16 font-bold text-3xl text-gray-700">
            DROP US A MESSAGE
          </h1>
          <Form />
        </section>
      </div>
    </>
  );
}
