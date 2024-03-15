import React from "react";
import BTN from "/images/btn.png";
import group1 from "/images/category-card (1).png";
import group2 from "/images/category-card.png";
import group3 from "/images/Rectangle.png";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold tracking-tight mr-2 mx-5 text-center leading-1 font-jakarta-sans text-[#18181B]">
        Say <span className="underline">Goodbye To Writing Docs</span>, and
        Hello <br />
        To Wizardshot Doing it for YOU.
      </h1>

      <div className=" w-3/4 flex flex-col md:flex-row justify-center items-center p-4 mt-6 md:gap-10">
        <div className="mb-6 md:mb-0 flex justify-center items-center flex-col w-96 h-96  ">
          <img
            className="w-96 h-96 "
            src={group1}
            alt=""
          />
          <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col mt-5">
            1. Click Capture
            <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
              Once you install the Chrome extension, fire it up, and click
              “Capture”.
            </span>
          </p>
        </div>
        <div className="mb-6 md:mb-0 flex justify-center items-center flex-col w-96 h-96">
          <img className="w-96 h-96" src={group2} alt="" />
          <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col mt-5">
            2. Perform Your Actions
            <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
              Once capturing, Wizardshot carefully monitors what you do to
              understand how to document it.
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-96 h-96">
          <img className="w-96 h-96" src={group3} alt="" />
          <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col mt-5">
            3. ✅ Done. Article Written
            <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
              Wizardshot carefully crafts the perfect article based off your
              actions recorded. Just click “Done” and we’ll write up the article
              in a second.
            </span>
          </p>
        </div>
      </div>

      <p className="font-jakarta-sans text-xl font-bold leading-10 tracking-normal text-center md:underline">
        +32 MORE FEATURES
        <span className="block text-base font-bold leading-6 no-underline ">
          INCLUDING A KB INTEGRATION
        </span>
      </p>

      <img className="ml-8 md:ml-0" src={BTN} alt="" />
    </div>
  );
};

export default Features;
