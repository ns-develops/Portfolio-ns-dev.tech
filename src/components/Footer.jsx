import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-end gap-5 h-screen bg-zinc-900 pb-96'>
      <div className='w-1/2 font-["Founders_Grotesk_X-Condensed]'>
        <h1 className='text-9xl font-semibold uppercase leading-none'>REVIEWS</h1>
      </div>
      <h1 className='text-[5vw] font-semibold uppercase leading-none'>Contact</h1>
      <div className="dets flex gap-5">
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
      </div>
    </div>
  )
}

export default Footer
