"use client";
import React, { useState, useEffect, useCallback } from "react";
// import Input from "./Input";
import Button from "./buttons/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import moment from "moment";
import * as yup from "yup";
import useSWR from "swr";
// import PhoneValidate from "./PhoneInputValidate.jsx";
import NewPhoneInput from "./new/NewPhoneInput";
import { PhoneNumberUtil } from "google-libphonenumber";
import { fetchCountryData } from "../../functions/functions.js";

export default function Form() {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const [defaultCountry, setDefaultCountry] = useState("AE");

  const [phone, setPhone] = useState(null);
  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

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

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSub = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const accessToken =
  //       "7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154";
  //     const response = await fetch(
  //       "https://api.toymarkettrading.com/api/Contact-Requests",
  //       {
  //         // Replace with your API endpoint
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     ).then(() => {
  //       console.log("added");

  //       console.log("Form data submitted successfully!");
  //       logFormData(formData);
  //       setFormData({
  //         ID: 3,
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phoneNumber: "",
  //         submitDate: getCurrentDate(),
  //       });
  //     });

  //     if (response.ok) {
  //       console.log("Form data submitted successfully!");

  //       setFormData({
  //         ID: 1,
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phoneNumber: "",
  //         submitDate: null,
  //       });
  //     } else {
  //       console.error("Failed to submit form data");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form data:", error);
  //   }
  // };

  // const defaultValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  //   submit_date: moment().format("YYYY-MM-DD"),
  //   status: "New",
  //   source_url: "",
  //   source_ip: "",
  // };

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

  const onSubmit = (data) => {
    console.log(data);
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

  return (
    <form
      className="lg:pl-9 pl-0 px-7 lg:pr-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="c-thin-border block bg-transparent w-full mb-5 py-2 px-4 placeholder-gray-500 focus:outline-none"
        placeholder={"first name"}
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
        placeholder="last name"
        {...register("lastName")}
        // onChange={onChange}
      />
      <p className="text-red-500">{errors.lastName?.message}</p>
      <input
        className="c-thin-border block bg-transparent w-full mb-5 py-2 px-4 placeholder-gray-500 focus:outline-none"
        placeholder="email"
        {...register("email")}
        // onChange={onChange}
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
        className="c-thin-border w-80 lg:w-full h-36 my-4"
        {...register("message")}
      />
      <p className="text-red-500">{errors.message?.message}</p>

      <Button type="submit">
        <p className="p-4">SUBMIT</p>
      </Button>
    </form>
  );
}

// export default function Form() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//   });
//  const logFormData = (e) => {
//    e.preventDefault(); // Prevents the default form submission behavior
//    console.log("Form Data:", formData);
//  };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("YOUR_API_ENDPOINT", {
//         // Replace with your API endpoint
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Form data submitted successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phoneNumber: "",
//         });
//       } else {
//         console.error("Failed to submit form data");
//       }
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//     }
//   };
