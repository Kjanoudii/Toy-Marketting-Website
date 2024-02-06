import React from "react";
import Link from "next/link";
import pinIcon from "../assets/images/pin-icon.png";
import phoneIcon from "../assets/images/phone-icon.png";
import mailIcon from "../assets/images/mail-icon.png";
import ContactDetails from "./ContactDetails";

export default function Footer() {
  return (
    <footer className="">
      <div className=" footer-container">
        <div className="flex justify-between">
          <section>
            <h2>SUBSCRIBE TO OUR MAILING LIST </h2>
            <p className="text-base font-thin my-5 text-slate-500 ">
              SIGNUP TO GET THE LATEST NEWS AND UPDATES FROM TOY MARKET TRADING
              <br />
              RIGHT AT YOUR INBOX.
            </p>
            <h2 className="mt-8">
              <span className="text-blue-500">TOY MARKET</span> TRADING
            </h2>
            <div>
              <ul className="mt-14 w-80 font-thin text-base tracking-wide text-slate-500 ">
                <li className="c-footer-links my-3">
                  <Link href="">Home</Link>
                </li>
                <li className="c-footer-links my-3">
                  <Link href="#">About Us</Link>
                </li>
                <li className="c-footer-links my-3">
                  <Link href="#">Catalogues</Link>
                </li>

                <li className="c-footer-links c-last-li my-3">
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <p className="text-sm font-thin tracking-wide mt-16">
              2024 © Toy Market Trading
            </p>
          </section>
          <section>
            <div className="p-0 lg:h-12 m-0 flex items-center justify-center ">
              <input
                className="bg-transparent py-2 px-4 mb-1 placeholder-gray-500 focus:outline-none"
                placeholder="Your Email Here"
              />

              <button className="lg:w-32 h-12 bg-blue-600 text-white px-4 py-2 text-base">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex flex-col mt-24 ml-52">
              <h2 className="mb-2">CONTACT US</h2>

              <ul className="mt-14 font-thin text-base tracking-wide text-slate-500 w-full">
                <ContactDetails
                  text={" Verdun - Beirut | UNESCO Center Bldg, 1st Floor"}
                  icon={pinIcon}
                />
                <ContactDetails text={" +961 (1) 799 944"} icon={phoneIcon} />
                <ContactDetails text={"+961 (1) 795 127"} icon={phoneIcon} />
                <ContactDetails
                  text={" info@toymarkettrading.com"}
                  icon={mailIcon}
                />
              </ul>
            </div>
            <p className="text-left font-thin tracking-wide text-sm mt-14 ml-2 mr-96">
              <span className="text-slate-500 mb-6">Developed By</span> egv
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}
