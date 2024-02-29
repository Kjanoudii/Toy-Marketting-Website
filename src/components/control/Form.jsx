"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./buttons/Button";
import PhoneValidate from "./PhoneInputValidate.jsx";
import NewPhoneInput from "./new/NewPhoneInput";
import { PhoneNumberUtil } from "google-libphonenumber";

export default function Form() {
const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};
  function generateUniqueId() {
    // Current timestamp in milliseconds
    const timestamp = new Date().getTime();

    // Random number between 0 and 10000
    const random = Math.floor(Math.random() * 10000);

    // Concatenate timestamp and random number
    const uniqueId = `${timestamp}${random}`;

    return uniqueId;
  }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const logFormData = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data:", formData);
  };
const handleSubmit = async (e) => {
 
  e.preventDefault();
function getCurrentDate() {
  const currentDate = new Date();

  // Extract year, month, and day components
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because month indexes are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Construct the date string in the format "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
  try {
      const accessToken =
        "7bded2881091be747903fe989b0c03553b9cc05ae59cfc890a8287ecb4ab61dbe820c94e0c0eefe815077e82e7e9d8552ad9bbe71267928c688e215ca30849dd8ec7fd2d9ebb52cb44d91c41a8a77469e439e84e28fdc55b893d40d7ba019aed10350d61e485150d91164635e089cb6ced4db2271fa5b1693a8b7c71fc1ae154"; 
    const response = await fetch(
      "https://api.toymarkettrading.com/api/Contact-Requests",
      {
        // Replace with your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    ).then(()=>{

      console.log("added")

      console.log("Form data submitted successfully!");
      logFormData(formData); 
      setFormData({
        ID: 3,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        submitDate: getCurrentDate(),
      })
    });

    if (response.ok) {
      console.log("Form data submitted successfully!");
  
      setFormData({
        ID: 1,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        submitDate: null,
      });
    } else {
      console.error("Failed to submit form data");
    }
  } catch (error) {
    console.error("Error submitting form data:", error);
  }
};

 const validationRules = {
   name: {
     required: "Please enter your name.",
   },
   email: {
     required: "Please enter your email address.",
     pattern: {
       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
       message: "Looks like this is not a valid email.",
     },
   },
   phone: {
     required: "Please enter your phone number.",
     validate: () => isPhoneValid(phone) || "Invalid phone number.",
   },
   subject: {
     required: "Please enter a subject.",
   },
   message: {
     required: "Please enter a message.",
   },
 };

  return (
    <form className="lg:pl-9 pl-0 px-7 lg:pr-3" onSubmit={handleSubmit}>
      <Input
        text="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <Input
        text="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <Input
        text="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {/* <PhoneValidate
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      /> */}

      <NewPhoneInput
        id="phone"
        name="phone"
        defaultCountry={defaultCountry}
        placeholder="Phone"
        register={register}
        error={errors.phone}
        rule={validationRules.phone}
        value={phone}
        className={classNames("custom-phone-input", getInputClassName("phone"))}
        onChange={handlePhoneNumberChange}
      />
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

//   return (
//     <form className="lg:pl-9 pl-0 px-7 lg:pr-3" onSubmit={logFormData}>
//       <Input
//         text="First Name"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//       />
//       <Input
//         text="Last Name"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//       />
//       <Input
//         text="Email Address"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <PhoneValidate
//         name="phoneNumber"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//       />
//       <Button type="submit">
//         <p className="p-4">SUBMIT</p>
//       </Button>
//     </form>
//   );
// }
