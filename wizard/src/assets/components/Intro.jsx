import React from "react";
import vid from "/images/vid1.png";
import arrow from "/images/Arrow 13.png";

const Intro = () => {
  return (
    <div className="w-full pt-10 text-center justify-center gap-2 bg-cover bg-left my-12  place-content-center">
      <h1 className="mt-16 text-4xl text-balance md:text-5xl lg:text-6xl font-bold leading-none tracking-tight text-center font-jakarta-sans text-[#18181B] ">
        Your Magic Wand for <br />
        Instant Documentation
      </h1>

      <p className="font-medium text-xl  break-words leading-6 tracking-normal text-centre md:text-base uppercase my-6 mr-4  md:text-nowrap ms-2 text-[#000000]">
        Turn ANY process into a simple step-by-step Guide
      </p>

      <button className="  btn bg-black text-white rounded-md px-2 py-2 text-xl font-medium hover:bg-gray-800 my-4 place-content-center gap-3 mb-12">
        Install Wizardshot  <span className="text-2xl font-normal"> →</span>
      </button>
      <div className="relative">
  <div className="flex justify-center items-center border-8 border-purple-400 md:w-1/2 rounded-md mx-auto my-8 relative">
    <img src={vid} alt="" className="w-full h-full object-cover" />
    <img src={arrow} alt="" className="absolute -top-8 -left-5" />
    <p className="absolute -top-8 left-5 -my-6 italic font-thin leading-tight ">It only takes 3 clicks to <br /> publish your first tutorial</p>
  </div>
</div>

    </div>
  );
};

export default Intro;
