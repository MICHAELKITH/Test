import React from "react";
import Group from "/images/Group.png";

const Footer = () => {
  return (
    <div className="md:p-4 m-10 flex flex-col md:flex-row md:gap-10 md:w-full place-content-center  ">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <img src={Group} alt="" />
          <p className="font-bold">Wizardshot</p>
        </div>
        <div className="mb-3 mt-3 leading-6 text-lg">
          <p className="font-normal ">Turn complex process into a simple step-by step Guide</p>
        </div>
        <div className="border-8 border-solid border-black p-4 w-48 h-48">
          <div className="flex">
            <div className="border border-solid  border-black p-4 w-28 h-28 m-0"></div>
            <div className="border border-solid  border-black p-4 w-48 h-28"></div>
          </div>
          <div className="border border-solid  border-black p-4 w-38 h-8"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 ">
          <p className="font-bold">Learn more</p>
        </div>
        <ul className="gap-2 mt-2 font-normal">
            <li>Wizardshot</li>
            <li>Community Page</li>
            <li>Help Center</li>
            <li>Security Information</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 ">
          <p className="font-bold">Company</p>
        </div>
        <ul className="gap-2 mt-2 font-normal">
            <li>About us</li>
            <li>Status  Page </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-3 ">
          <p className="font-bold gap-2">📞 +1 (833) 387 3877 <br /> ✉️ success@wizardshot.com</p>
        </div>
        <div className="flex gap-3 mx-5 mb-3 mt-3">
            <img src={Group} alt="" />
            <img src={Group} alt="" />
        </div>

        <div className="flex gap-3 font-bold text-gray-600 text-xl">
            <p>Sign Up</p>
            <p>Log in</p>
        </div>
      </div>

      {/* <p>© 2024 Wizardshot – All rights reserved.</p> */}
    </div>
  );
};

export default Footer;
