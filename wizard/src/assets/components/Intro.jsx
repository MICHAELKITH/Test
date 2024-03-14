import React from "react";
import button from "/images/Button.png";
import vid from "/images/vid.png";
import arrow from "/images/Arrow 13.png";
import Features from "./Features";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
const Intro = () => {
  return (
    <div className="w-full pt-10 text-center justify-center gap-2 bg-cover bg-left my-12 ">
      <h1 className="mt-16 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-center font-jakarta-sans ">
        Your Magic Wand for <br />
        Instant Documentation
      </h1>

      <p className="font-thin leading-6 tracking-normal text-centre text-2xl uppercase my-4 md:text-nowrap ms-2">
        Turn ANY process into a simple step-by-step Guide
      </p>

      <button className="  btn bg-black text-white rounded-lg px-2 py-2 text-lg font-semibold hover:bg-gray-800 my-4">
        Install Wizardshot
      </button>

     <div className="flex justify-center items-center flex-col">
     <img src={vid} alt="" className="" /> 
     </div>
      <div className=" top-0 left-0 flex items-center">
          <img src={arrow} alt="" className="w-8 h-8"  />
          <span className="text-black font-bold ml-2">
            It only takes 3 clicks to publish your first Tutorial{" "}
          </span>
        </div> 

    </div>
  );
};

export default Intro;

// <div className="w-full h-screen pt-10 text-center justify-center gap-2 bg-cover bg-left my-12 md:my-12 xl:my-12 object-cover">
{
  /* <h1 className="mt-16 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-center font-jakarta-sans">
        Your Magic Wand for <br />
        Instant Documentation
      </h1> */
}

{
  /* <p className="font-semibold text-base leading-6 tracking-normal text-centre md:uppercase my-4">
        Turn ANY process into a simple step-by-step Guide
      </p> */
}

{
  /* <button className="  btn bg-black text-white rounded-lg px-4 py-4 text-lg font-semibold hover:bg-gray-800 my-4">
        Install Wizardshot
      </button> */
}

{
  /* <div className="flex justify-center items-center flex-col "> */
}
{
  /* <img src={vid} alt="" className="" /> */
}
{
  /* <div className=" top-0 left-0 flex items-center">
          <img src={arrow} alt="" className="w-8 h-8"  />
          <span className="text-black font-bold ml-2">
            It only takes 3 clicks to publish your first Tutorial{" "}
          </span>
        </div> */
}
//   </div>
// </div>
