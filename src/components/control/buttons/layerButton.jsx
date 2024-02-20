import React from 'react'

export default function layerButton({text}) {
  return (
    <div
      className="opacity-0 z-10 px-4 py-2 text-gray-50 hover:bg-slate-50
             hover:text-gray-400 font-bold
           group-hover:bottom-1/2 group-hover:opacity-100 download-btn"
    >
     {text}
    </div>
  );
}
