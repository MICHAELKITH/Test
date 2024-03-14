import React from "react";
import stars from "/images/stars.png";
import arrow from "/images/Arrow 05.png";
import chrome from "/images/chrome.png";

const About = () => {
  return (
    <div className="md:mt-12 mx-auto">
      <div className="flex flex-col md:flex-row md:mt-4 md:gap-8 bg-gradient-to-r from-green-200 via-red-200 to-blue-200 h-auto md:h-7 md:w-3/4 md:mx-12 ">
        <div className="flex gap-2 items-center -ml-1">
          <h1 className="font-jakarta-sans md:text-2xl font-medium leading-12 tracking-normal text-start">
            Free
          </h1>
          <p className="font-jakarta-sans text-base flex flex-col">
            Free <span className="font-normal">Forever</span>
          </p>
        </div>
        <div className="flex gap-2 items-center ml-12">
          <h1 className="font-jakarta-sans text-2xl font-medium leading-12 tracking-normal text-center">
            Unlimited
          </h1>
          <p className="font-jakarta-sans text-base flex flex-col">
            Tutorial <span className="font-normal">Creation</span>
          </p>
        </div>
        <div className="flex gap-2 items-center ml-14">
          <h1 className="font-jakarta-sans text-2xl font-medium leading-12 tracking-normal text-center">
            Powerful
          </h1>
          <p className="font-jakarta-sans text-base flex flex-col ">
            Editor <span className="font-normal">& Integrations</span>
          </p>
        </div>
      </div>
      <div className="relative  flex justify-center items-center">
        <div className="flex justify-center items-center border-8 border-black w-full md:w-full md:h-3/4 rounded-lg mx-auto my-8 relative md:mt-12">
          <div className="w-full h-full px-8 py-6 mx-10 font-bold text-center">
            <h1 className="text-2xl">
              Create A Detailed Tutorial <br /> In Less than 3 clicks
            </h1>

            <button className="btn bg-black text-white py-4 flex justify-center items-center mt-4 rounded-md px-10 mx-auto">
              <img className="mr-2" src={chrome} alt="" />
              Install Wizardshots
            </button>

            <p className="py-10 md:text-3xl">
              “Has helped us write help docs 100x faster” –{" "} <br />
              <span className="font-normal">Dany River, Cartier Informatie</span>
            </p>

            <img src={stars} alt="" className="mx-auto" />

            <img src={arrow} alt="" className="absolute -top-10 right-2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
