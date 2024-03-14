import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import chrome from "/images/chrome.png";
import Group from "/images/Group.png";
import forever from "/images/forever.png";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/" },
    { name: "About", link: "/" },
    { name: "Help Center & Community ", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 flex flex-col">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-2 md:m-4">
          <img src={Group} className="w-7 h-7" alt="" />
          <span className="text-[#1E293B]">Wizardshot</span>
        </div>
        {/* Menu icon */}
        {open && <hr className="my-2 md:hidden w-full border-gray-300" />}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <>
              <li
                 key={link.id}
                 className={`md:ml-8 md:my-0 my-7 font-semibold`}
                 style={link.name === "Home" ? { textDecoration: "underline" } : {}}
               >
                <a
                  href={link.link}
                  className="text-gray-400 hover:text-black duration-500"
                >
                  {link.name}
                </a>
              </li>
            </>
          ))}

          <li className="text-gray-400 hover:text-black duration-500 md:pl-40 md:ml-40 font-semibold">
            Login
          </li>

          {open && <hr className="my-4 md:hidden w-full border-gray-300" />}

          <div className=" md:flex-col-reverse md:flex  items-center gap-1 md:my-0 ">
            <button className="md:btn bg-black flex gap-2 text-white justify-center md:ml-8 font-semibold px-3 py-2 rounded-md duration-500 md:static md:mb-4">
              <img className="flex justify-center " src={chrome} alt="" />
              Install Wizardshots
            </button>
            <span
              className={`md:flex ${
                open ? "flex-col" : "flex-col-reverse"
              } md:items-center md:mt-0  `}
            >
              <img src={forever} alt="" />
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
