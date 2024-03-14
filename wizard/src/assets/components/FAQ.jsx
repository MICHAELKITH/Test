import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  // Array of FAQ items
  const faqs = [
    {
      title: "What is Wizardshot?",
      answer: "Wizardshot is a web app & chrome extension that allows you to create step-by-step tutorials simply by capturing your screen."
    },
    {
      title: "Do you prefer writing CSS or Tailwind?",
      answer: [
        "The costs to run a service is really inexpensive as most of the processing happens in the Chrome extension.",
        "Really - all that we have to pay for is super-secure hosting, awesome 24/7 support and that’s it.",
        "We built Wizardshot as a stand-alone product with a deep Helpjuice Knowledge Base integration."
      ]
    },
    {
      title: "Is my data secure?",
    },

    {
        title: "Curious to learn more? ",
      }
  ];

  return (
    <div className="p-4 rounded-lg mx-auto my-auto min-w-64">

        <h1>
        common questions
        </h1>
      {faqs.map((faq, index) => (
        <Accordion key={index} title={faq.title} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
