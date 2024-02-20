import vtech from "../assets/images/vtech.webp";
import funko from "../assets/images/funko.webp";
import bitzee from "../assets/images/bitzee.webp";
import intex from "../assets/images/intex.webp";
import paw from "../assets/images/paw.webp";
import clementoni from "../assets/images/clementoni.webp";
import nebulous from "../assets/images/nebulous.webp";
import tommieTippie from "../assets/images/tomme-tippe.webp";
import mastinelia from "../assets/images/mastinela.webp";
import cam from "../assets/images/cam.webp";
import winfun from "../assets/images/winfun.webp";
import instagramIcon from "../assets/images/instagram-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";

export const images = [
  vtech,
  funko,
  bitzee,
  intex,
  paw,
  clementoni,
  nebulous,
  tommieTippie,
  mastinelia,
  cam,
  winfun,
];

export const tradeChannels = [
  "Department Stores",
  "Hypermarkets & Supermarkets",
  "Athletic & Athleisure Stores",
  "Specialized Toy & Gaming Mega Stores",
  "Gadget Stores",
  "Baby Galleries",
  "Stationary Stores",
  "Pharmacies & Hospitals",
  "Nurseries & Schools",
];

export const socialBox = [
  {
    icon: instagramIcon,
    text: "@intexlb",
  },

  {
    icon: instagramIcon,
    text: "@intexlb",
  },

  {
    icon: instagramIcon,
    text: "@intexlb",
  },
  {
    icon: facebookIcon,
    text: "@intexlb",
  },
  {
    icon: facebookIcon,
    text: "@intexlb",
  },
  {
    icon: facebookIcon,
    text: "@intexlb",
  },
];

/// motion framer

export const variant1 = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
  exit: {
    x: -200,
    opacity: 0,
  },
};

export const variant2 = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -200,
    opacity: 0,
  },
};
