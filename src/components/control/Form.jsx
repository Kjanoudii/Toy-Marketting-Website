/* eslint-disable react/no-unknown-property */
"use client";
import React, { useState, useEffect, useCallback } from "react";
// import Input from "./Input";
// import ReactMapGL from "react-map-gl";
import Button from "./buttons/Button";
// import ReCAPTCHA from "react-recaptcha-v3";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import moment from "moment";
import * as yup from "yup";
import useSWR, { mutate } from "swr";
// import { v4 as uuidv4 } from "uuid";
// import PhoneValidate from "./PhoneInputValidate.jsx";
import NewPhoneInput from "./new/NewPhoneInput";
import { PhoneNumberUtil } from "google-libphonenumber";
import { fetchCountryData, getCurrentDate } from "../../functions/functions.js";
import LoadingScreen from "../layout/LoadingScreen";
import verifyCaptchaAction from "../../services/recaptcha";
export default function Form() {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      if (!executeRecaptcha) {
        console.error("reCAPTCHA has not been loaded");
        return;
      }
      // Perform reCAPTCHA validation
      const token = await executeRecaptcha("onSubmit");
      const captchaVerified = await verifyCaptchaAction(token);
      if (!captchaVerified) {
        throw new Error("Captcha verification failed");
      }

      console.log(formData);
      // let phoneNb = phone.toString()

      const data = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: phone,
        message: formData.message,
        submit_date: getCurrentDate(),
        // submit_date: "2024-03-01T14:30:00.000Z",
        status: "New",

        // createdAt: "2024-02-28T21:37:26.545Z",
        // updatedAt: "2024-02-28T21:37:26.545Z",
      };
      // const id = uuidv4();
      // const currentDate = new Date().toISOString();
      console.log("data to be submitted: ", data);
      console.log("Stringify: ", JSON.stringify(data));
      // // Add the ID and current date to the form data
      // formData.id = null;
      // formData.date = null;
      try {
        const response = await fetch(
          "https://api.toymarkettrading.com/api/contact-requests",
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
          mutate("https://api.toymarkettrading.com/api/Contact-Requests");
          console.log("Form submitted successfully");
          // Optionally, you can handle the success response here
        } else {
          console.error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
      {/* <Input
        text="Last Name"
        name="lastName"
        // value={formData.lastName}
        // onChange={handleChange}
        {...register("lastName")}
      /> */}

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
        className={"px-4 custom-phone-input phone c-thin-border"}
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
