import React, { useState } from 'react'

const Footer = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='w-full flex justify-between items-start h-screen bg-zinc-900 p-20'>
      <div className='w-1/2 font-["Founders_Grotesk_X-Condensed] mt-28'>
        <div className="inline-block">
          <h1 className='text-9xl font-semibold uppercase leading-none'>REVIEWS</h1>

          <div className="mt-4 flex flex-col gap-2 items-start transition-all duration-500">
            <div className="h-[2px] bg-zinc-800 w-full"></div>

            <div className="flex justify-between items-center w-full">
              <span className="text-white text-lg font-thin tracking-wide">sportly.se</span>
              <button
                onClick={() => setExpanded(!expanded)}
                className={`text-lg font-thin transition-colors duration-500 ${
                  expanded ? 'text-zinc-400' : 'text-white'
                } hover:text-[#d1d1d1]`}
              >
                READ
              </button>
            </div>

            <div
              className={`h-[2px] bg-zinc-800 w-full transition-all duration-500 ${
                expanded ? 'mt-24' : 'mt-0'
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5 text-right mt-28'>
        <h1 className='text-[5vw] font-semibold uppercase leading-none'>Contact</h1>
        <div className="dets flex flex-col gap-2">
          <a href="#">Instagram</a>
          <a href="#">Linkedin</a>
          <a href="#">Telegram</a>
          <a href="#">E-mail</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

