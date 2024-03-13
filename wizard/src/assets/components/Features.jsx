import React from 'react'

import BTN from "/images/btn.png";
import group1 from "/images/group1.png";
import group2 from "/images/group2.png";
import group3 from "/images/group3.png";

const Features = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
    <div className="text-center">
      <h1 className='font-bold mt-4'>
        Say <span className="underline">Goodbye To Writing Docs, </span> and Hello <br /> To Wizardshots Doing it for You.
      </h1>
  
      <div className='flex flex-row'>
        <div>
          <img src={group1} alt="" />
          <p>
            1. Click Capture <br />
            <span>
            Once you install the Chrome extension, fire it up, and click “Capture”.
            </span>
          </p>
        </div>
        <div>
          <img src={group2} alt="" />
          <p>
            1. Click Capture <br />
            <span>
            Once capturing, Wizardshot carefully monitors what you do to understand how to document it.
            </span>
          </p>
        </div>
        <div>
          <img src={group3} alt="" />
          <p>
            1. Click Capture <br />
            <span>
            Wizardshot carefully crafts the perfect article based off your actions recorded. Just click “Done” and we’ll write up the article in a second.
            </span>
          </p>
        </div>
      </div>
  
      <h2>+32 MORE FEATURES INCLUDING A KB <br />
        INCLUDING A KB INTERGRATION </h2>
  
      <img src={BTN} alt="" />
    </div>
  </div>
  
  )
}

export default Features
