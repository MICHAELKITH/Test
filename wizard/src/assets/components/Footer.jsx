import React from "react";
import Group from "/images/Group.png";
import vect from "/images/Vector (1).png";

import ICON from "/images/Vector.png";
import ICON2 from "/images/ic_baseline-tiktok.png";

const Footer = () => {
  return (
    <div className="md:flex md:flex-col">
      <div className="md:p-4 m-10 flex flex-col md:flex-row md:gap-10 md:place-content-center ">
        <div className="flex flex-col  md:w-auto">
          <div className="md:-ml-8 ">
            <div className="flex gap-2 ">
              <img src={Group} alt="" className="md:w-12 md:h-12" />
              <p className="font-bold text-xl">Wizardshot</p>
            </div>
            <div className="mb-3 mt-3 leading-6 text-lg">
              <p className="font-normal text-sm">
                Turn complex process into <br />a simple step-by step Guide
              </p>
            </div>

            <div className="w-48 h-48">
              <div className="flex">
                <div className="border-2 border-solid  border-black p-4 w-28 h-28 m-0 text-[#3A3A3A]">
                  <p className=" font-extrabold text-4xl">12</p>
                  <p className="uppercase text-xl font-semibold">Years</p>
                </div>
                <div className="border-2 border-solid px-2 border-black  w-28 h-28 items-center text-[#3A3A3A] uppercase font-bold text-sm md:gap-3">
                  <p className="mt-6 ">Built By</p>

                  <img src={vect} alt="" className="px-4" />

                  <p>Helpjuice</p>
                </div>
              </div>
              <div className="border-2 border-solid  border-black  h-13  text-[#3A3A3A]">
                <p className="-mt-1 text-sm font-bold leading-tight text-start px-2">
                  #1 Rated Knowledge Base{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-6">
        <div className="flex flex-col md:w-48">
          <div className="flex gap-2 ">
            <p className="font-medium text-xl">Learn more</p>
          </div>
          <ul className="gap-2 mt-2 font-normal text-l">
            <li>Wizardshot</li>
            <li>Community Page</li>
            <li>Help Center</li>
            <li>Security Information</li>
          </ul>
        </div>
        <div className="flex flex-col md:w-48 px-8">
          <div className="flex gap-2 ">
            <p className="font-medium text-xl">Company</p>
          </div>
          <ul className="gap-2 mt-2 font-normal text-l">
            <li>About us</li>
            <li>Status Page </li>
          </ul>
        </div>

        </div>


        <div className="flex flex-col ">
          <div className="flex gap-5 ">
            <p className="font-normal gap-5">
              📞 +1 (833) 387 3877 <p>
              <br /> ✉️ success@wizardshot.com{" "}
                </p> 
            </p>
          </div>
          <div className="flex gap-3 mx-10 mb-3 mt-3">
            <img src={ICON} alt="" />
            <img src={ICON2} alt="" />
          </div>

          <div className="flex gap-8 font-bold text-gray-600 text-xl">
            <p>Sign Up</p>
            <p>Log in</p>
          </div>
        </div>

       
      </div>

      <div>
          <p className="mt-auto text-center w-full">
            © 2024 Wizardshot – All rights reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;
{
  /*  */
}
