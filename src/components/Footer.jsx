import React from "react";
import instagram from "../assets/instagram-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import logo from "../assets/salon-logo.svg";
import arrow from "../assets/arrow.svg";

export default function Footer() {
  return (
    <div>
      <div className="bg-black h-fit p-4 flex gap-4 md:hidden">
        <img src={logo} alt="" className="mr-auto" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>

      <div className="hidden h-fit md:bg-black md:block md:p-10">
        <div className="flex h-full gap-6 items-center">
          <img src={logo} alt="" className="mr-auto" />
          <p className="text-white">Ready to get started?</p>
          <button className="bg-secondary text-white h-8 px-4 text-center rounded-md">
            Get started
          </button>
        </div>
        <hr className="mt-8 opacity-10" />

        <div className="h-fit flex justify-between p-6">
          <div className="text-white">
            <p className="text-lg">
              Subscribe to our <br />
              newsletter
            </p>
            <div className="flex items-center mt-2">
              <input
                type="text"
                className="bg-black border-b-[0.5px] border-gray-600 rounded-sm p-1"
                placeholder="Email address"
              />
              <button className="bg-secondary text-white rounded-sm p-1">
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <a href="#">
              <p className="text-secondary">Services</p>
            </a>
            <a href="#">
              <p className="text-white">Email Marketing</p>
            </a>
            <a href="#">
              <p className="text-white">Campaigns</p>
            </a>
            <a href="#">
              <p className="text-white">Branding</p>
            </a>
            <a href="#">
              <p className="text-white">Offline</p>
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <a href="#">
              <p className="text-secondary">About</p>
            </a>
            <a href="#">
              <p className="text-white">Our Story</p>
            </a>
            <a href="#">
              <p className="text-white">Benefits</p>
            </a>
            <a href="#">
              <p className="text-white">Team</p>
            </a>
            <a href="#">
              <p className="text-white">Careers</p>
            </a>
          </div>

          <div className="flex flex-col gap-6 ">
            <a href="#">
              <p className="text-secondary">Help</p>
            </a>
            <a href="#">
              <p className="text-white">FAQs</p>
            </a>
            <a href="#">
              <p className="text-white">Contact Us</p>
            </a>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="#">
            <p className="text-white">Terms & Conditions</p>
          </a>
          <a href="#" className="mr-auto">
            <p className="text-white">Privacy Policy</p>
          </a>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}
