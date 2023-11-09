import React, { useState } from "react";
import logo from "/assets/salon-logo.svg";
import menu from "/assets/menu.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="absolute md:top-0 w-full">
        <header className="flex justify-between p-10 items-center">
          <div>
            <img src={logo} alt="" />
          </div>

          <div>
            <ul className="md:flex text-white m-auto items-center gap-10 hidden">
              <HashLink to={"#home"} smooth>
                <li>Home</li>
              </HashLink>
              <HashLink to={"#About"} smooth>
                <li>About Us</li>
              </HashLink>
              <HashLink to={"#Contacts"} smooth>
                <li>Contact</li>
              </HashLink>
              <li>
                <button className="w-44 h-14 bg-secondary text-black font-bold">
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <img
              className="md:hidden h-6 w-6"
              src={menu}
              alt=""
              onClick={() => setSideMenu((e) => !e)}
            />
          </div>
        </header>
        <div
          className={`absolute right-0 top-0 bg-white h-screen ease-in-out duration-300 ${
            sideMenu ? "w-[45%]" : " w-[0%]"
          } md:hidden`}
        >
          {sideMenu && (
            <div>
              <div onClick={() => setSideMenu((e) => !e)}>
                <div className="font-bold p-3">X</div>
              </div>

              <div
                className={`md:hidden flex flex-col ease-in duration-500 ${
                  sideMenu ? "opacity-100" : "opacity-0"
                }`}
              >
                <ul
                  className={`md:hidden text-black m-auto items-center gap-10 flex flex-col ease-in duration-500 `}
                >
                  <HashLink to={"#home"} onClick={() => setSideMenu((e) => !e)} smooth>
                    <li>Home</li>
                  </HashLink>
                  <HashLink to={"#About"} onClick={() => setSideMenu((e) => !e)} smooth>
                    <li>About Us</li>
                  </HashLink>
                  <HashLink to={"#Contacts"} onClick={() => setSideMenu((e) => !e)} smooth>
                    <li>Contact</li>
                  </HashLink>
                  <li>
                    <button className="w-24 h-10 bg-secondary text-black font-bold">
                      Book Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
