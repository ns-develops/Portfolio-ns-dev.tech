import React from 'react'
import '../marquee.css'

export const Marquee = () => {
  return (
    <div className='w-full py-10 bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <div className='marquee flex gap-10'>
          <h1 className='text-8xl'> CREATIVE STUDIO </h1>
          <h1 className='text-8xl'> CREATIVE STUDIO </h1>
          <h1 className='text-8xl'> CREATIVE STUDIO </h1>
        </div>
      </div>
    </div>
  )
}
