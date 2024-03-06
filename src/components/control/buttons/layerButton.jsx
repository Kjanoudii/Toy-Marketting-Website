import React from "react";

export default function layerButton({ catalogUrl, children, catalogUrlName }) {
  //  const api = "https://api.toymarkettrading.com";
  const handleDownload = () => {
    // Create an anchor element
    // window.open(catalogUrl, "_blank");
    // console.log(catalogUrl);

    const anchor = document.createElement("a");
    anchor.href = catalogUrl;
    anchor.download = catalogUrlName;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  };

  return (
    <div
      className="opacity-0 z-10 px-4 py-2 text-gray-50 hover:bg-slate-50
             hover:text-gray-400 font-bold
           group-hover:bottom-1/2 group-hover:opacity-100 download-btn"
      onClick={handleDownload}
    >
      {children}
    </div>
  );
}
