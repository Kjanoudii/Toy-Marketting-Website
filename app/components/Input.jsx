import React from 'react'

export default function Input({text}) {
  return (
    <input
      className="c-thin-border bg-transparent mb-5 py-2 px-4 placeholder-gray-500 focus:outline-none"
      placeholder={text}
    />
  );
}
