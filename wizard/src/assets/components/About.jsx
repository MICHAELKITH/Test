import React from "react";
import stars from "/images/stars.png";
import arrow from "/images/Arrow 05.png";
import chrome from "/images/chrome.png";

const About = () => {
  return (
    <div className="md:mt-12 mx-auto py-8">
      <div className="flex flex-row md:flex-row md:mt-4 md:gap-8 bg-gradient-to-r from-green-200 via-red-200 to-blue-200 md:h-7 md:w-3/4 w-full h-5 md:mx-12 -gap-4 ">
        <div className="flex flex-row md:gap-2 items-center md:-ml-1 text-sm"> 
          <h1 className="font-jakarta-sans md:text-2xl font-medium leading-12 tracking-normal text-start text-xl">
            Free
          </h1>
          <p className="font-jakarta-sans md:text-base flex flex-col text-sm">
            Free <span className="font-normal">Forever</span>
          </p>
        </div>
        <div className="flex gap-2 items-center md:ml-12 ml-2">
          <h1 className="font-jakarta-sans md:text-2xl font-medium leading-12 tracking-normal text-center text-xl">
            Unlimited
          </h1>
          <p className="font-jakarta-sans md:text-base flex flex-col text-sm">
            Tutorial <span className="font-normal">Creation</span>
          </p>
        </div>
        <div className="flex gap-2 items-center md:ml-14 ml-1">
          <h1 className="font-jakarta-sans md:text-2xl font-medium leading-12 tracking-normal text-center text-xl" >
            Powerful
          </h1>
          <p className="font-jakarta-sans md:text-base flex flex-col text-sm">
            Editor & <span className="font-normal"> Integrations</span>
          </p>
        </div>
      </div>
      <div className="relative  flex justify-center md:items-center">
        <div className="flex justify-center md:items-center border-8 border-black  md:w-full md:h-3/4 rounded-lg mx-auto my-8 w-5/6 relative md:mt-12">
          <div className="w-full px-8 py-6 mx-10 font-bold text-center">
            <h1 className="md:text-2xl ">
              Create A Detailed Tutorial <br /> In Less than 3 clicks
            </h1>

            <button className="btn bg-black text-white py-4 flex justify-center  mt-4 rounded-md md:px-6 mx-auto px-2 gap-1">
              <img className="md:mr-2" src={chrome} alt="" />
              Install Wizardshots
            </button>

            <p className="py-10 md:text-3xl text-sm flex flex-col ">
              “Has helped us write help docs 100x faster” 
              <span className="font-normal">- Dany River, Cartier Informatie</span>
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
