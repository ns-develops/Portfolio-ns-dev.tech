import React, { useState } from 'react'

const Footer = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-start h-screen bg-white p-6 md:p-20'>
      
      <div className='w-full md:w-1/2 font-["Founders_Grotesk_X-Condensed] mt-10 md:mt-28'>
        <div className="inline-block">
          <h1 className='text-[14vw] md:text-9xl font-semibold uppercase leading-none text-black'>
            REVIEWS
          </h1>

          <div className="mt-4 flex flex-col gap-2 items-start transition-all duration-500">
            <div className="h-[2px] bg-gray-300 w-full"></div>

            <div className="flex justify-between items-center w-full">
              <span className="text-base md:text-lg text-black font-thin tracking-wide">sportly.se</span>
              <button
                onClick={() => setExpanded(!expanded)}
                className={`text-base md:text-lg font-thin transition-colors duration-500 ${
                  expanded ? 'text-gray-500' : 'text-black'
                } hover:text-gray-700`}
              >
                READ
              </button>
            </div>

            <div
              className={`h-[2px] bg-gray-300 w-full transition-all duration-500 ${
                expanded ? 'mt-16 md:mt-24' : 'mt-0'
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className='w-full md:w-auto flex flex-col gap-4 text-right mt-10 md:mt-28'>
        <h1 className='text-[10vw] md:text-[5vw] font-semibold uppercase leading-none text-black'>Contact</h1>
        <div className="dets flex flex-col gap-2 text-sm md:text-base">
          <a href="#" className="text-black hover:text-gray-700">Instagram</a>
          <a href="#" className="text-black hover:text-gray-700">Linkedin</a>
          <a href="#" className="text-black hover:text-gray-700">Telegram</a>
          <a href="#" className="text-black hover:text-gray-700">E-mail</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
