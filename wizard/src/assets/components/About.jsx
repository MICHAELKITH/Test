import React from "react";
import stars from "/images/stars.png";

const About = () => {
  return (
    <div className="md:mt-12 mx-auto">
      <div className="flex flex-col md:flex-row mb-3 md:mb-0 md:gap-3 bg-gradient-to-r from-green-200 via-red-200 to-blue-200 h-auto md:h-7 ">
        <div className="flex gap-2 items-center">
          <h1 className="font-jakarta-sans md:text-2xl font-medium leading-12 tracking-normal text-start">
            Free
          </h1>
          <p className="font-jakarta-sans text-base">
            Free <span className="font-normal">Forever</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="font-jakarta-sans text-2xl font-medium leading-12 tracking-normal text-center">
            Unlimited
          </h1>
          <p className="font-jakarta-sans text-base">
            Tutorial <span className="font-normal">Creation</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="font-jakarta-sans text-2xl font-medium leading-12 tracking-normal text-center">
            Powerful
          </h1>
          <p className="font-jakarta-sans text-base">
            Editor <span className="font-normal">& Integrations</span>
          </p>
        </div>
      </div>
      <div className="border-8 w-full md:w-96 h-auto md:h-full p-4 border-black rounded gap-3 ">
        <h1 className="leading-6 text-[#212020] text-center md:text-left">
          Create A Detailed Tutorial in Less than 3 clicks
        </h1>
        <button className="btn bg-black text-white rounded px-4 py-2 w-full md:w-auto">
          Install Wizardshot
        </button>
        <p className="text-center md:text-left">
          “Has helped us write help docs 100x faster” – Dany River, Cartier
          Informatie
        </p>
        <span className="block md:inline-block">
          <img src={stars} alt="" />
        </span>
      </div>
    </div>
  );
};

export default About;
