import React from "react";
import Link from "next/link";
import pinIcon from "../../assets/images/pin-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import mailIcon from "../../assets/images/mail-icon.png";
import ContactDetails from "../widget/ContactDetails";
import SubscribeInput from "../control/SubscribeInput";
export default function Footer() {
  return (
    <footer>
      <section className="flex lg:flex-row flex-col justify-between">
        <div>
          <h2>SUBSCRIBE TO OUR MAILING LIST </h2>
          <p className="text-base font-thin lg:my-5 text-slate-500 ">
            SIGNUP TO GET THE LATEST NEWS AND UPDATES FROM TOY MARKET TRADING
            <br />
            RIGHT AT YOUR INBOX.
          </p>
        </div>
       <SubscribeInput />
      </section>

      <section className="mt-8 flex lg:flex-row flex-col justify-between items-center">
        <div>
          <h2>
            <span className="text-blue-500">TOY MARKET</span> TRADING
          </h2>

          <ul className=" w-80 font-thin text-base tracking-wide text-slate-500 ">
            <li className="  c-footer-links my-3">
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
        <div className="lg:ml-52">
          <h2>CONTACT US</h2>

          <div className="flex flex-col mt-10 ">
            <ul className=" font-thin text-base tracking-wide text-slate-500 w-full">
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
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm font-thin tracking-wide mt-16">
          2024 © Toy Market Trading
        </p>

        <p className="text-left font-thin tracking-wide text-sm mt-14 ml-2 lg:mr-96">
          <span className="text-slate-500 mb-6">Developed By</span> egv
        </p>
      </section>
    </footer>
  );
}
