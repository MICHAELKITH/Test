import React from "react";

const More = () => {
  return (
    <div className="flex justify-center items-center w-full relative ">
      <div className="px-10 md:ml-10 bg-gradient-to-r from-gray-900 via-gray-900 to-amber-900 text-white rounded-lg md:w-3/4 w-5/6 gap-80 md:flex ">
        <div className="md:py-8 text-white gap-4 py-2 md:px-8">
          <h1 className="md:text-2xl ">Create Tutorials in 3 Clicks.</h1>
          <p className="text-sm py-2 font-thin">
            With WizardShot, You Click Capture, And We’ll Capture What’s
            Happening on <br /> Your Screen And Turn It Into A Tutorial.
          </p>
        </div>

        <div className="mt-10 font-medium text-xl md:px-12 md:ml-14 relative mb-6 right-0 mr-5">
          <button className="border-b-2 border-white hover:bg-gray-100 hover:text-gray-800 px-4 py-2 rounded">
            Try Wizardshot →
          </button>
        </div>
      </div>
      <p
        className="absolute md:-top-10 md:right-14 -mt-6 md:mr-14 top-0 right-2  mr-5"
        style={{
          fontFamily: "Alphabetized Cassette Tapes Thin",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "26px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        100% free, forever 🤑
      </p>
    </div>
  );
};

export default More;
