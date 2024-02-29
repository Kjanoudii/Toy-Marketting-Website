import React from "react";

export default function Button({ children }) {
  return (
    <button
      className="w-28  block mx-auto
      font-extrabold bg-blue-600 text-white "
    >
      {children}
    </button>
  );
}
