import React from 'react'

function LandingPage() {
  const lines = ["NS DEV", "We Create", "Signature"]
  const subtitles = ["Empowering startups and enterprise-level businesses", "Code meets solution"]

  return (
    <div className="w-full h-screen bg-white pt-1">
      <div className="px-20 textstructure mt-10 pt-20">

        <div className="space-y-6">
          {lines.map((item, index) => (
            <div key={index} className="masker font-[Founders_Grotesk] font-semibold">
              <h1 className="uppercase text-black text-9xl leading-[5.5vw] tracking-tighter">
                {item}
              </h1>
            </div>
          ))}
        </div>

        <div className="border-t-[1px] border-zinc-800 mt-32 "></div>

        <div className="flex justify-between mt-4">
          {subtitles.map((item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none text-zinc-700"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage


{/*import React from 'react'

function LandingPage() {
  return (
<div className="w-full h-screen bg-zinc-900 pt-1">
  <div className="px-20 pt-20 textstructure mt-10 
                 uppercase text-white leading-[6.5vw] tracking-tighter 
                 font-['Founders_Grotesk'] font-semibold"> 
    
    <div className="masker mb-2">
      <h1 className="text-9xl mb-0">
        NS DEV
      </h1>
    </div>
    
    <div className="masker mb-2">
      <h1 className="text-9xl mb-0">
        WE CREATE
      </h1>
   </div>
   
   <div className="masker mb-2">
      <h1 className="text-9xl mb-0">
        SIGNATURE
      </h1>
   </div>
  </div>
</div>

  )
}}
{/*import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
          
            <div className="masker font-['Founders_Grotesk']">
                <h1 className='uppercase text-white text-9xl leading-none tracking-tight'>We Create</h1>
            </div>
        </div>
    </div>
  )
}

export default LandingPage */}