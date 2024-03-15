import React, { useState } from "react";



const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 min-w-64 md:min-w-0">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full btn"
      >
        <span className="font-semibold">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
  className={`fill-black shrink-0 ml-8 transition-transform ${
    accordionOpen ? 'rotate-180' : ''
  }`}
  xmlns="http://www.w3.org/2000/svg"
  width="36"
  height="36"
  viewBox="0 0 20 20"
  aria-hidden="true"
>
  <path
    fillRule="evenodd"
    d="M10.293 5.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0z"
  />
</svg>

      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
        <hr className="font-normal py-2" />
      </div>
    </div>
  );
};

export default Accordion;
