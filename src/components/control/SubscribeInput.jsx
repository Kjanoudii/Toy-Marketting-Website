/* eslint-disable no-unused-vars */
"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import deleteStrapiData from "@/src/functions/deleteStrapiApi";
import useSWR, { mutate } from "swr";
import { useForm } from "react-hook-form";
import postStrapiData from "@/src/functions/useStrapiApi";
export default function Subscribe() {
  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;
  const apiUrl = "https://api.toymarkettrading.com";

  const [subscribed, setSubscribed] = useState(null);
  const [unsubscribe, setunSubscribe] = useState(null);
  const [email, setEmail] = useState("");

  let mailingListData = "";
  function checkDuplicateEmails(data, email) {
    let alreadyThere = false;
    data.forEach((item) => {
      if (item.attributes.email === email) alreadyThere = true;
    });
    return alreadyThere;
  }

  function findId(data, email) {
    const foundItem = data.find((item) => item.attributes.email === email);
    return foundItem ? foundItem.id : null;
  }

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
    mailingListData = data.data;
  }

  const defaultValues = {
    email: "",
  };

  const { register, handleSubmit, reset } = useForm({ defaultValues });

  const onSubmit = async (formData) => {
    console.log(formData);
    setEmail(formData.email);
    // let phoneNb = phone.toString()

    const data = {
      email: formData.email,
    };

    try {
      // eslint-disable-next-line no-unused-vars
      if (!checkDuplicateEmails(mailingListData, formData.email)) {
        const response = await postStrapiData("/api/mailing-lists", data);
        setSubscribed(false);
      } else {
        setSubscribed(true);
        toast.error("you are already subscribed");
        console.log("you are already subscribed");

        // if (unsubscribe) {
        //   const response = await deleteStrapiData(`/api/mailing-lists/`, data)
        // } else {
        //   console.log("do nothing ");
        // }
      }

      // console.log("Data posted successfully", response);
      toast.success("Your Request submitted successfully!");
      reset();
    } catch (error) {
      console.error("Submission error", error);
      toast.error("An error occurred during submission.");
    }

    mutate(`${apiUrl}/api/mailing-lists`);
  };

  const unSub = async () => {
    setunSubscribe(true);

    console.log("email to be deleted" + email);
    console.log("id to be deleted " + findId(mailingListData, email));
    try {
      const response = await deleteStrapiData(
        `/api/mailing-lists/${findId(mailingListData, email)}`
      );
    } catch (error) {
      console.error("Submission error", error);
      toast.error("An error occurred during submission.");
    }
  };

  if (isLoading) return "";
  if (!data) return error;

  return (
    <div>
      <div className="pt-2 lg:h-12 m-0 flex items-center justify-center lg:px-3">
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
      {subscribed !== null ? (
        subscribed ? (
          <p className="text-red-600 font-thin ml-3">
            {!unsubscribe
              ? ` You Are Already Subscribed, Would you like to unsubscribe?${" "} `
              : "You have unsubscribed :(  "}
            <span
              onClick={() => unSub()}
              className=" cursor-pointer underline text-blue-100"
            >
              {unsubscribe ? "" : "Yes"}
            </span>{" "}
            <span
              onClick={() => setSubscribed(null)}
              className="cursor-pointer underline text-blue-100"
            >
              {unsubscribe ? "" : "No"}
            </span>
          </p>
        ) : (
          <p className="text-gray-100 font-thin ml-3">
            Thank You For Subscribing!
          </p>
        )
      ) : null}
    </div>
  );
}
