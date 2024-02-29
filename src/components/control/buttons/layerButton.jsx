import React from "react";

export default function layerButton({ catalogUrl, children }) {
  const handleDownload = () => {
    // Create an anchor element
    window.open(catalogUrl, "_blank");

    // const anchor = document.createElement("a");
    // anchor.href = catalogUrl; // Set the href attribute to the catalog URL
    // anchor.download = "catalog.pdf"; // Set the download attribute with the desired file name
    // anchor.click(); // Programmatically trigger the click event to start the download
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
