/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
"use client";
import React, { useState, useEffect, useCallback } from "react";
import postStrapiData from "@/src/hooks/useStrapiApi";
// import Input from "./Input";
// import ReactMapGL from "react-map-gl";
import Button from "./buttons/Button";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import moment from "moment";
import * as yup from "yup";
import useSWR, { mutate } from "swr";
import toast from "react-hot-toast";

// import { v4 as uuidv4 } from "uuid";
// import PhoneValidate from "./PhoneInputValidate.jsx";
import NewPhoneInput from "./new/NewPhoneInput";
import { PhoneNumberUtil } from "google-libphonenumber";
import { fetchCountryData, getCurrentDate } from "../../functions/functions.js";
import LoadingScreen from "../layout/LoadingScreen";
import { verifyCaptchaAction } from "../../services/recaptcha";
export default function Form({setSent}) {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const [defaultCountry, setDefaultCountry] = useState("US");
  // const [reCaptcha, setReCaptcha] = useState("");

  const [phone, setPhone] = useState(null);
  const accessToken = `7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154`;
  // const Map = () => {
  //   const [viewport, setViewport] = useState({
  //     latitude: 37.7577,
  //     longitude: -122.4376,
  //     zoom: 8
  //   });
  const { executeRecaptcha } = useGoogleReCaptcha();
  // const [recaptchaToken, setRecaptchaToken] = useState("");

  const fetcher = (...args) => {
    return fetch(...args, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.json());
  };

  const { data, error, isLoading } = useSWR(
    "https://api.toymarkettrading.com/api/Contact-Requests",
    fetcher
  );
  if (isLoading) {
    console.log("Loading...");
  } else if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log(data);
  }
  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  // const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountryData();
        const countryCode = data.country_code;
        setDefaultCountry(countryCode);
      } catch (error) {
        console.error("Error fetching IP information:", error);
      }
    };
    fetchData();
  }, []);

  const schema = yup.object().shape({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });
  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (formData) => {
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: phone,
      message: formData.message,
      submit_date: getCurrentDate(),
      status: "New",
    };

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await postStrapiData("/api/contact-requests", data);
      setSent(true)
      // console.log("Data posted successfully", response);
      //  mutate("https://api.toymarkettrading.com/api/contact-requests");
      toast.success("Your Request submitted successfully!");
      reset();
    } catch (error) {
      console.error("Submission error", error);
      toast.error("An error occurred during submission.");
    }

    mutate("https://api.toymarkettrading.com/api/contact-requests");

    console.log(data);
  };

  // const onSubmit = async (formData) => {
  //   const data = {
  //     first_name: formData.firstName,
  //     last_name: formData.lastName,
  //     email: formData.email,
  //     phone_number: phone,
  //     message: formData.message,
  //     submit_date: getCurrentDate(),
  //     status: "New",
  //   };

  //   console.log("data to be submitted: ", data);

  //   try {
  //     if (!executeRecaptcha) {
  //       console.error("reCAPTCHA has not been loaded");
  //       return;
  //     }

  //     // Perform reCAPTCHA validation
  //     const token = await executeRecaptcha("onSubmit");
  //     const captchaVerified = await verifyCaptchaAction(token);

  //     if (!captchaVerified) {
  //       throw new Error("Captcha verification failed");
  //     }

  //     // Post data to the API endpoint
  //     try {
  //       const response = await postStrapiData("/api/contact-requests", data);
  //       setSent(true)
  //       // Assuming you're using toast notifications for displaying messages
  //       toast.success("Your Request submitted successfully!");
  //     } catch (error) {
  //       console.error("Submission error", error);
  //       toast.error("An error occurred during submission.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const handlePhoneNumberChange = useCallback(
    (value) => {
      const isValid = isPhoneValid(value);
      if (!isValid || !value) {
        setError("phone", {
          type: "manual",
          message: "Invalid phone number",
        });
      } else {
        setPhone(value);
        setValue("phone", value);
      }
    },
    [isPhoneValid, setError, clearErrors]
  );

  if (isLoading) return <LoadingScreen />;
  if (!data) return error;
  
  return (
    <form
      className="lg:pl-9 pl-0 px-7 lg:pr-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="c-thin-border block bg-transparent w-full mb-5 py-2 px-4 placeholder-gray-500 focus:outline-none"
        placeholder={"First Name"}
        {...register("firstName")}
      />
      <p className="text-red-500">{errors.firstName?.message}</p>
     

      <input
        className="c-thin-border block bg-transparent w-full mb-5 py-2 px-4 placeholder-gray-500 focus:outline-none"
        placeholder="Last Name"
        {...register("lastName")}
        // onChange={onChange}
      />
      <p className="text-red-500">{errors.lastName?.message}</p>
      <input
        className="c-thin-border block bg-transparent w-full mb-5 py-2 px-4 placeholder-gray-500 focus:outline-none"
        placeholder="Email"
        {...register("email")}
      />

      <NewPhoneInput
        id="phone"
        name="phone"
        defaultCountry={defaultCountry}
        placeholder="Phone"
        register={register}
        error={errors.phone}
        value={phone}
        className={"px-4 custom-phone-input phone c-thin-border "}
        onChange={handlePhoneNumberChange}
      />
      <textarea
        className="c-thin-border w-80 lg:w-full h-36 my-4 p-3"
        {...register("message")}
        placeholder="Write your message here..."
      />
      <p className="text-red-500">{errors.message?.message}</p>

      <verifyCaptchaAction />
      <Button type="submit">
        <p className="p-4">SUBMIT</p>
      </Button>
    </form>
  );
}
