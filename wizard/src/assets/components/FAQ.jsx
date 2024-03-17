import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const faqs = [
    {
      title: "What is Wizardshot?",
      answer:
        "Wizardshot is a web app & chrome extension that allows you to create step-by-step tutorials simply by capturing your screen.",
    },
    {
      title: "How is Wizardshot Free?",
      answer: [
        "The costs to run a service is really inexpensive as most of the processing happens in the Chrome extension.",
        "Really - all that we have to pay for is <u> super-secure hosting, awesome 24/7 support</u> and that’s it.",
        "We built Wizardshot as a stand-alone product with a deep <u>Helpjuice Knowledge Base </u> integration.",
      ].map((answer, index) => (
        <p
          key={index}
          className={` md:text-xl leading-6 gap-3 ${
            index > 1 ? "mt-2 font-semibold" : ""
          }`}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }} />
          <br />
        </p>
      )),
    },

    {
      title: "Is my data secure?",
      answer:["Wizardshot is safe"]
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col pt-6 py-12">
      <div className="p-4 rounded-lg md:w-1/2 ">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Common Questions
        </h1>
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.title} answer={faq.answer} />
        ))}

        <div className="mt-8 flex flex-col md:flex-row items-center gap-8 md:w-auto mb-4">
          <p className="text-center md:text-left font-black md:font-medium ">
            Curious to learn more?{" "}
          </p>
          <button className="mt-2 md:mt-0 bg-black hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg">
            Visit Help & Community Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
