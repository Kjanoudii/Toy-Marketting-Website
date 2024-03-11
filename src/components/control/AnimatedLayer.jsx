import React from "react";
import Button from "./buttons/layerButton";
export default function AnimatedLayer({ catalogUrl }) {
  // let text;
  //   if (catalogUrl == null) {
  //     text = "";
  //   } else {
  //     text = "DOWNLOAD CATALOG";
  //   }

  // const apiVar = "https://api.toymarkettrading.com";

  return (
    <div className="group-hover:h-full layer z-1 group flex justify-center">
      <Button
        catalogUrl={`${catalogUrl?.attributes?.url}`}
        catalogUrlName={`${catalogUrl?.attributes?.name}`}
      >
        {"DOWNLOAD CATALOG"}
      </Button>
    </div>
  );
}
