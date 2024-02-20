
import React from 'react'

export default function Button({text}) {
  return (
    <button
      className="w-28 h-12 flex 
     items-center justify-center font-extrabold bg-blue-600 text-white text-base"
    >
      {text}
    </button>
  );
}
