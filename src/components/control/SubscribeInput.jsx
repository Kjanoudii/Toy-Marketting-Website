"use client";
import React from "react";
import useSWR, { mutate } from "swr";
import { useForm } from "react-hook-form";

export default function Subscribe() {
  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;

  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };

  const { data, error, isLoading } = useSWR(
    "https://api.toymarkettrading.com/api/mailing-lists",
    fetcher
  );
  if (isLoading) {
    console.log("Loading...");
  } else if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log(data);
  }
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    // let phoneNb = phone.toString()

    const data = {
      email: "janoudikhaled@gmail.com",
    };
    // const id = uuidv4();
    // const currentDate = new Date().toISOString();
    console.log("data to be submitted: ", data);
    console.log("Stringify: ", JSON.stringify(data));

    try {
      const response = await fetch(
        "https://api.toymarkettrading.com/api/mailing-lists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        mutate("https://api.toymarkettrading.com/api/mailing-lists");
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isLoading) return "";
  if (!data) return error;

  return (
    <div className="pt-2 lg:h-12 m-0 flex items-center justify-center ">
      <input
        className="bg-transparent py-2 px-4 mb-1 placeholder-gray-500 focus:outline-none"
        placeholder="Your Email Here"
        {...register("email")}
      />

      <button
        className="lg:w-32 h-12 bg-blue-600 text-white px-4 py-2 text-base"
        onClick={handleSubmit(onSubmit)}
      >
        SUBSCRIBE
      </button>
    </div>
  );
}
