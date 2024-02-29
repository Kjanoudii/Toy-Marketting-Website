import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import ErrorLabel from "./ErrorLabel";
import { getCountries } from "react-phone-number-input/input";
import { UseFormRegister } from "react-hook-form";
import "../../../styles/phoneInput.css";

function PhoneInputField({
  id,
  label,
  name,
  placeholder,
  defaultCountry,
  className,
  register,
  // error,
  onChange,
  value,
  rule,
}) {
  const countries = getCountries().filter(
    (countryCode) => countryCode !== "IL"
  );

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="capitalize text-sm font-medium text-stone-800"
        >
          {label}
        </label>
      )}
      <PhoneInput
        id={id}
        international
        countries={countries}
        defaultCountry={defaultCountry}
        className={className}
        placeholder={placeholder}
        value={value}
        {...register(name, rule)}
        onChange={(phone) => {
          onChange && onChange(phone);
        }}
      />
      {/* <ErrorLabel
        name={name}
        message={error?.message || ""}
        isVisible={error}
      /> */}
    </div>
  );
}

export default PhoneInputField;
