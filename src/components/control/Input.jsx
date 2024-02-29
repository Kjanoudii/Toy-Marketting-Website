import React from "react";

export default function Input({ text, name, value, onChange }) {
  return (
    <input
      className="c-thin-border block bg-transparent w-full mb-5 py-2 px-4 placeholder-gray-500 focus:outline-none"
      placeholder={text}
      name={name}
      value={value}
      onChange={onChange} // This line binds the onChange event to the handleChange function in the parent component
    />
  );
}
