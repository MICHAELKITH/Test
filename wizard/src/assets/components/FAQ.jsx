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
          className={`text-base leading-6 ${
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
    },

    {
      title: "Curious to learn more? ",
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
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-auto mb-4">
        <p className="text-center md:text-left">Curious to learn more? </p>
        <button className="mt-2 md:mt-0 bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
          Visit Help & Community Center
        </button>
      </div>
    </div>
  );
};

export default FAQ;
