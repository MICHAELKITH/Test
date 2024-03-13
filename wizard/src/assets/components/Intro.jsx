import React from "react";
import button from "/images/Button.png";
import vid from "/images/vid.png";
import arrow from "/images/Arrow 13.png";
const Intro = () => {
  return (
    <div className=" bg-white w-full h-screen pt-10 text-center justify-center">
      <h1 className="text-base mt-16 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Your Magic Wand for <br /> Instant Documentation
      </h1>

      <p className="font-normal text-lg uppercase">
        Turn ANY process into a simple step-by step Guide
      </p>

      <button className="btn bg-black text-white rounded w-100 h-6  justify-center ">
        <img src={button} alt="" />
      </button>

      <div className="flex justify-center items-center relative">
    <img src={vid} alt="" className="h-auto" />
    <div className="absolute top-0 left-0 flex items-center">
        <img src={arrow} alt="" className="w-8 h-8" style={{ zIndex: 1 }} />
        <span className="text-black font-bold ml-2">It only takes 3 clicks to publish your first Tutorial </span>
    </div>
</div>

    </div>
  );
};

export default Intro;
