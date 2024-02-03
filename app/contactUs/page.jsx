import React from "react";

import Form from "../components/Form";
export default function page() {
  return (
    <>
      <div
        className="bg-blue-200 h-16 flex justify-between
      items-center px-28 "
      >
        <h2 className="pl-2 text-lg">CONTACT US</h2>
        <p className="pr-2">Home / Contact Us </p>
      </div>

      <div className="h-screen flex px-28 py-2">
        <section className="w-1/2 pl-2 ">
          <div>
            <p>Address</p>
            <p className="text-gray-700">
              UNESCO Center Bldg. 1st Flr.,
              <br />
              Verdun, Beirut - Lebanon
            </p>
          </div>

          <div>
            <p>Phone Numbers</p>
            <p className="text-gray-700">
              UNESCO Center Bldg. 1st Flr.,
              <br />
              Verdun, Beirut - Lebanon
            </p>
          </div>
        </section>
        <section className="w-1/2 pl-2 ">
          <h1 className="pl-9 mb-16 font-bold text-3xl text-gray-700">
            DROP US A MESSAGE
          </h1>
          <Form />
        </section>
      </div>
    </>
  );
}
