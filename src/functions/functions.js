export function formatDate(inputDate) {
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const [year, month, day] = inputDate.split("-");
  const formattedDate = `${months[parseInt(month, 10) - 1]} ${parseInt(
    day,
    10
  )}, ${year}`;
  return formattedDate;
}

// eslint-disable-next-line no-undef
const { parsePhoneNumber } = require("libphonenumber-js");

const validatePhoneNumber = (phoneNumber, defaultCountry) => {
  try {
    const parsedPhoneNumber = parsePhoneNumber(phoneNumber, defaultCountry);
    if (!parsedPhoneNumber.isValid()) {
      return "Please enter a valid phone number.";
    }
    return true;
  } catch (error) {
    return "Please enter a valid phone number.";
  }
};

// Example usage
const phoneNumber = "+1234567890";
const defaultCountry = "US";
const validationResult = validatePhoneNumber(phoneNumber, defaultCountry);
console.log("result" + validationResult);


export const fetchCountryData = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw new Error("Failed to fetch country data");
  }
};
