// import React, { useState, useEffect } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-input-2/lib/style.css";
// import "react-phone-number-input/style.css";

// function PhoneNumberValidation(){
//   const [userCountry, setUserCountry] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState("");


//   const handleChange = (value) => {
//     setPhoneNumber(value);
//   };

//  const getUserCountry = () => {
//    if (navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition(
//        (position) => {
//          const { latitude, longitude } = position.coords;
//          // Make a request to a reverse geocoding service using latitude and longitude
//          // Example: Using a service like OpenCage Geocoding API
//          fetch(
//            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`
//          )
//            .then((response) => response.json())
//            .then((data) => {
//              // Extract the country information from the response
//              const country = data.results[0].components.country;
//              setUserCountry(country);
//            })
//            .catch((error) => {
//              console.error("Error fetching user's location:", error);
//            });
//        },
//        (error) => {
//          console.error("Error getting user's location:", error);
//        }
//      );
//    } else {
//      console.error("Geolocation is not supported by this browser.");
//    }
//  };

//   useEffect(() => {
//     getUserCountry();
//   }, []);
//   return (
//     <div className="mb-5">
//       <label>
//         Phone Number:
//         <PhoneInput
//           placeholder="Enter phone number"
//           className="border-none"
//           defaultCountry={userCountry}
//           value={phoneNumber}
//           onChange={handleChange}
//         />
//       </label>
//       {/* {!valid && <p>Please enter a valid phone number.</p>} */}
//     </div>
//   );
//   }


// export default PhoneNumberValidation;
