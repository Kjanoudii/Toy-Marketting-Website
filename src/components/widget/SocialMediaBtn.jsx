import React from "react";
import Image from "next/image";
import instaIcon from "../../assets/images/instagram-icon.svg";
import fbIcon from "../../assets/images/facebook-icon.svg";

export default function SocialMediaBtn({ icon, text, link }) {
  const myicon = icon == "instagram" ? instaIcon : fbIcon;
  return (
    <div className=" box-border">
      <a href={link}>
        <div className="c-media-btn py-3 flex items-center transition-all duration-300 hover:bg-blue-500">
          <p className="pl-3">
            <Image src={myicon} className="w-9"  />
          </p>
          <p className="pr-8 font-bold my-0 mx-auto">{text}</p>
        </div>
      </a>
    </div>
  );
}
