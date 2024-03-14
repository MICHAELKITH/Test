import React from "react";

import BTN from "/images/btn.png";
import group1 from "/images/group1.png";
import group2 from "/images/group2.png";
import group3 from "/images/group3.png";

const Features = () => {
  return (
    <div className="content-center p-5  ">
      <h1 className=" text-4xl md:text-2xl lg:text-5xl font-extrabold tracking-tight md:text-center font-jakarta-sans">
        Say Goodbye To Writing Docs, and Hello To Wizardshot Doing it for YOU.
      </h1>

      <div className="flex flex-col p-4  md:flex-row">
        <div className="mb-6 md:mb-0">
          <img src={group1} alt="" />
          <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col">
            1. Click Capture
            <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
              Once you install the Chrome extension, fire it up, and click
              “Capture”.
            </span>
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <img src={group2} alt="" />
          <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col">
            2. Perform Your Actions
            <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
              Once capturing, Wizardshot carefully monitors what you do to
              understand how to document it.
            </span>
          </p>
        </div>
        <div>
          <img src={group3} alt="" />
          <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col">
            3. ✅ Done. Article Written
            <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
              Wizardshot carefully crafts the perfect article based off your
              actions recorded. Just click “Done” and we’ll write up the article
              in a second.
            </span>
          </p>
        </div>
      </div>

      <p className="font-jakarta-sans text-xl font-bold leading-10 tracking-normal text-center underline">
        +32 MORE FEATURES
        <span className="block text-base font-bold leading-6 ">
          INCLUDING A KB INTEGRATION
        </span>
      </p>

      <img 
  className=""
  src={BTN} alt="" />
    </div>
  );
};

export default Features;

{
  /* <div className="w-[1060.4px] h-[536.22px] top-[1133.79px] left-[225.8px] mx-auto my-16 ">
<h1 className="w-[799.28px] h-[96px] font-jakarta-sans text-4xl font-bold leading-[48px] tracking-normal text-center mx-14">
  Say Goodbye To Writing Docs, and Hello To Wizardshot Doing it for YOU.
</h1>
<div>
<div className="flex">
  <div>
    <img src={group1} alt="" />
    <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col">
      1. Click Capture
      <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
        Once you install the Chrome extension, fire it up, and click
        “Capture”.
      </span>
    </p>
  </div>
  <div>
    <img src={group2} alt="" />
    <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col">
      2. Perform Your Actions
      <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
        Once capturing, Wizardshot carefully monitors what you do to
        understand how to document it.
      </span>
    </p>
  </div>
  <div>
    <img src={group3} alt="" />
    <p className="font-open-sans text-base font-semibold leading-6 tracking-normal text-left mx-10 flex flex-col">
      3. ✅ Done. Article Written
      <span className="font-open-sans text-sm font-normal leading-5 tracking-normal text-left">
        Wizardshot carefully crafts the perfect article based off your
        actions recorded. Just click “Done” and we’ll write up the article
        in a second.
      </span>
    </p>
  </div>

</div>

  <p className="font-jakarta-sans text-xl font-bold leading-10 tracking-normal text-center underline">
    +32 MORE FEATURES
    <span className="block text-base font-bold leading-6 ">
      INCLUDING A KB INTEGRATION
    </span>
  </p>

  <img 
  className=""
  src={BTN} alt="" />
</div>
</div> */
}
