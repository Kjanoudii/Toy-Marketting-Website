import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function VideoLayer() {
  // let text;
  //   if (catalogUrl == null) {
  //     text = "";
  //   } else {
  //     text = "DOWNLOAD CATALOG";
  //   }

  // const apiVar = "https://api.toymarkettrading.com";
  const [playColor, setPlayColor] = useState("white");

  return (
    <div
      className="group-hover:h-full video-layer z-20 group flex 
    items-center justify-center "
    >
      <div
        className="shadow-white py-5 px-6 mx-auto group 
      rounded-full bg-blue-600  transition-colors duration-500 hover:bg-slate-50"
        onMouseEnter={() => setPlayColor("#4b7fd1")}
        onMouseLeave={() => setPlayColor("white")}
      >
        <FontAwesomeIcon
          icon={faPlay}
          size="2xl"
          color={playColor}
          className="transition-colors duration-500"
        />{" "}
      </div>
    </div>
  );
}
